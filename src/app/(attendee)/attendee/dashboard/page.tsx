import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { GlassButton } from "@/components/ui/GlassButton";
import { formatCents } from "@/lib/utils";
import { AttendeeDashboardClient } from "./AttendeeDashboardClient";

async function getAttendeeTickets() {
  try {
    const attendee = await prisma.user.findFirst({
      where: { role: "ATTENDEE" },
      include: {
        orders: {
          where: { status: "COMPLETED" },
          include: { event: true, attendeeTickets: { include: { ticketTier: true } } },
          orderBy: { createdAt: "desc" },
        },
      },
    });
    return attendee;
  } catch {
    return null;
  }
}

export default async function AttendeeDashboard() {
  const user = await getAttendeeTickets();
  const orders = user?.orders ?? [];
  const totalTickets = orders.reduce((s, o) => s + o.attendeeTickets.length, 0);
  const totalSpent = orders.reduce((s, o) => s + o.totalAmount, 0);

  const ordersData = orders.map((order) => ({
    id: order.id,
    totalAmount: order.totalAmount,
    event: {
      id: order.event.id,
      title: order.event.title,
      date: order.event.date.toISOString(),
      location: order.event.location,
    },
    attendeeTickets: order.attendeeTickets.map((t) => ({
      id: t.id,
      qrCodeHash: t.qrCodeHash,
      isScanned: t.isScanned,
      ticketTier: { name: t.ticketTier.name },
    })),
  }));

  return (
    <AttendeeDashboardClient
      userName={user?.name ?? null}
      totalTickets={totalTickets}
      totalSpent={totalSpent}
      orderCount={orders.length}
      orders={ordersData}
    />
  );
}
