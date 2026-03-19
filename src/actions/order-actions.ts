"use server";

import { prisma } from "@/lib/prisma";
import { generateQrPayload } from "@/lib/utils";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";

export async function purchaseTicket(eventId: string, tierId: string) {
  // In demo mode, use the demo attendee
  const user = await prisma.user.findFirst({
    where: { role: "ATTENDEE" },
  });

  if (!user) throw new Error("No attendee user found");

  const tier = await prisma.ticketTier.findUnique({
    where: { id: tierId },
    include: { event: true },
  });

  if (!tier || tier.eventId !== eventId) throw new Error("Invalid ticket tier");

  const soldCount = await prisma.attendeeTicket.count({
    where: { ticketTierId: tierId },
  });
  if (soldCount >= tier.capacity) throw new Error("Sold out");

  const { hash } = generateQrPayload();
  const platformFee = Math.round(tier.price * 0.1);

  await prisma.order.create({
    data: {
      userId: user.id,
      eventId,
      totalAmount: tier.price,
      platformFee,
      stripeSessionId: `cs_demo_${randomUUID().slice(0, 12)}`,
      status: "COMPLETED",
      attendeeTickets: {
        create: {
          ticketTierId: tierId,
          qrCodeHash: hash,
        },
      },
    },
  });

  revalidatePath("/");
  revalidatePath(`/events/${eventId}`);
  revalidatePath("/attendee/dashboard");

  return { success: true };
}
