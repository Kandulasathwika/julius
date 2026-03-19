"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { createHash } from "crypto";

export async function validateTicket(qrRawValue: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const hash = createHash("sha256").update(qrRawValue).digest("hex");

  const ticket = await prisma.attendeeTicket.findUnique({
    where: { qrCodeHash: hash },
    include: {
      ticketTier: { include: { event: { include: { organizer: true } } } },
      order: true,
    },
  });

  if (!ticket) return { valid: false, message: "Ticket not found" };

  const user = await prisma.user.findUnique({ where: { clerkId: userId } });
  if (ticket.ticketTier.event.organizerId !== user?.id) {
    throw new Error("Only the event organizer can scan tickets");
  }

  if (ticket.isScanned) {
    return { valid: false, message: "Ticket already scanned" };
  }

  if (ticket.order.status !== "COMPLETED") {
    return { valid: false, message: "Order not completed" };
  }

  await prisma.attendeeTicket.update({
    where: { id: ticket.id },
    data: { isScanned: true },
  });

  return {
    valid: true,
    message: "Ticket validated successfully",
    tierName: ticket.ticketTier.name,
    eventTitle: ticket.ticketTier.event.title,
  };
}
