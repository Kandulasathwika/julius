import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatCents } from "@/lib/utils";
import { PurchaseButton } from "./PurchaseButton";
import { EventDetailClient } from "./EventDetailClient";

interface EventPageProps {
  params: Promise<{ id: string }>;
}

async function getEvent(id: string) {
  try {
    return await prisma.event.findUnique({
      where: { id },
      include: {
        organizer: { select: { name: true } },
        ticketTiers: {
          orderBy: { sortOrder: "asc" },
          include: { _count: { select: { tickets: true } } },
        },
      },
    });
  } catch {
    return null;
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params;
  const event = await getEvent(id);
  if (!event || !event.isPublished) return notFound();

  const tiers = event.ticketTiers.map((tier) => ({
    id: tier.id,
    name: tier.name,
    price: tier.price,
    capacity: tier.capacity,
    sold: tier._count.tickets,
  }));

  return (
    <EventDetailClient
      event={{
        id: event.id,
        title: event.title,
        description: event.description,
        location: event.location,
        date: event.date.toISOString(),
        organizerName: event.organizer.name ?? "Unknown",
      }}
      tiers={tiers}
    />
  );
}
