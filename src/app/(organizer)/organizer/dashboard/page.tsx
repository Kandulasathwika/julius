import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { GlassButton } from "@/components/ui/GlassButton";
import { formatCents } from "@/lib/utils";
import { EventActions } from "./EventActions";
import { DashboardClient } from "./DashboardClient";

async function getOrganizerData() {
  try {
    const organizers = await prisma.user.findMany({
      where: { role: "ORGANIZER" },
      include: {
        events: {
          include: {
            ticketTiers: { include: { _count: { select: { tickets: true } } } },
            orders: { where: { status: "COMPLETED" } },
          },
          orderBy: { createdAt: "desc" },
        },
      },
    });
    return organizers;
  } catch {
    return [];
  }
}

export default async function OrganizerDashboard() {
  const organizers = await getOrganizerData();
  const allEvents = organizers.flatMap((o) => o.events);
  const totalRevenue = allEvents.reduce(
    (sum, e) => sum + e.orders.reduce((s, o) => s + o.totalAmount, 0),
    0
  );
  const totalTickets = allEvents.reduce(
    (sum, e) =>
      sum + e.ticketTiers.reduce((s, t) => s + t._count.tickets, 0),
    0
  );

  const eventsData = allEvents.map((event) => ({
    id: event.id,
    title: event.title,
    date: event.date.toISOString(),
    location: event.location,
    isPublished: event.isPublished,
    revenue: event.orders.reduce((s, o) => s + o.totalAmount, 0),
    ticketsSold: event.ticketTiers.reduce((s, t) => s + t._count.tickets, 0),
    totalCapacity: event.ticketTiers.reduce((s, t) => s + t.capacity, 0),
  }));

  return (
    <DashboardClient
      eventCount={allEvents.length}
      totalRevenue={totalRevenue}
      totalTickets={totalTickets}
      events={eventsData}
    />
  );
}
