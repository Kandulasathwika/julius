"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface TierInput {
  name: string;
  price: string;
  capacity: string;
}

export async function createEvent(formData: FormData) {
  // In demo mode, use the first organizer
  const user = await prisma.user.findFirst({
    where: { role: "ORGANIZER" },
  });

  if (!user) throw new Error("No organizer found");

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const location = formData.get("location") as string;
  const date = new Date(formData.get("date") as string);
  const tiersJson = formData.get("tiers") as string;
  const tiers: TierInput[] = JSON.parse(tiersJson);

  const event = await prisma.event.create({
    data: {
      title: title.toUpperCase(),
      description,
      location,
      date,
      isPublished: true,
      organizerId: user.id,
      ticketTiers: {
        create: tiers.map((tier, index) => ({
          name: tier.name,
          price: Math.round(parseFloat(tier.price) * 100),
          capacity: parseInt(tier.capacity, 10),
          sortOrder: index,
        })),
      },
    },
  });

  revalidatePath("/");
  revalidatePath("/organizer/dashboard");
  return { id: event.id };
}

export async function togglePublish(eventId: string) {
  const event = await prisma.event.findUnique({ where: { id: eventId } });
  if (!event) throw new Error("Event not found");

  await prisma.event.update({
    where: { id: eventId },
    data: { isPublished: !event.isPublished },
  });

  revalidatePath("/");
  revalidatePath("/organizer/dashboard");
}

export async function deleteEvent(eventId: string) {
  await prisma.event.delete({ where: { id: eventId } });
  revalidatePath("/");
  revalidatePath("/organizer/dashboard");
}
