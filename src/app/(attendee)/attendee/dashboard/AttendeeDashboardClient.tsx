"use client";

import Link from "next/link";
import { GlassButton } from "@/components/ui/GlassButton";
import { formatCents } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

interface OrderData {
  id: string;
  totalAmount: number;
  event: { id: string; title: string; date: string; location: string };
  attendeeTickets: {
    id: string;
    qrCodeHash: string;
    isScanned: boolean;
    ticketTier: { name: string };
  }[];
}

interface Props {
  userName: string | null;
  totalTickets: number;
  totalSpent: number;
  orderCount: number;
  orders: OrderData[];
}

export function AttendeeDashboardClient({
  userName,
  totalTickets,
  totalSpent,
  orderCount,
  orders,
}: Props) {
  return (
    <main className="bg-white min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <ScrollReveal>
        <h1 className="text-2xl font-semibold text-zinc-900 mb-1">
          My Tickets
        </h1>
        <p className="text-sm text-zinc-400">
          {userName ? `Welcome, ${userName}` : "Your event history"}
        </p>
      </ScrollReveal>

      {/* Stats */}
      <ScrollReveal variant="scale" delay={0.1}>
        <div className="grid grid-cols-3 divide-x divide-gray-100 border border-gray-100 rounded-xl my-10">
          <div className="p-5 text-center">
            <AnimatedCounter
              value={totalTickets}
              className="text-xl font-semibold text-zinc-900"
            />
            <p className="text-xs text-zinc-400 mt-1">Tickets</p>
          </div>
          <div className="p-5 text-center">
            <AnimatedCounter
              value={orderCount}
              className="text-xl font-semibold text-zinc-900"
            />
            <p className="text-xs text-zinc-400 mt-1">Events</p>
          </div>
          <div className="p-5 text-center">
            <AnimatedCounter
              value={totalSpent}
              prefix="$"
              className="text-xl font-semibold text-zinc-900"
            />
            <p className="text-xs text-zinc-400 mt-1">Spent</p>
          </div>
        </div>
      </ScrollReveal>

      {orders.length === 0 ? (
        <ScrollReveal delay={0.15}>
          <div className="text-center py-16 border border-gray-100 rounded-xl">
            <p className="text-zinc-400 text-sm mb-6">No tickets yet.</p>
            <Link href="/">
              <GlassButton size="sm">Browse Events</GlassButton>
            </Link>
          </div>
        </ScrollReveal>
      ) : (
        <>
          <ScrollReveal delay={0.15}>
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">
              Order History
            </h2>
            <hr className="border-t border-gray-200 mb-0" />
          </ScrollReveal>

          {orders.map((order, i) => (
            <ScrollReveal key={order.id} delay={0.15 + i * 0.06}>
              <div className="border-b border-gray-100 py-7">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Link
                      href={`/events/${order.event.id}`}
                      className="text-base font-semibold text-zinc-900 hover:text-orange-600 transition-colors duration-300"
                    >
                      {order.event.title}
                    </Link>
                    <p className="text-xs text-zinc-400 mt-1 font-mono">
                      {new Date(order.event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                      {"  /  "}
                      {order.event.location}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-zinc-900">
                    {order.totalAmount === 0
                      ? "Free"
                      : formatCents(order.totalAmount)}
                  </span>
                </div>

                {order.attendeeTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="flex items-center justify-between py-3 border-t border-dashed border-gray-100 hover:bg-zinc-50/50 -mx-2 px-2 rounded transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 text-orange-300"
                          fill="currentColor"
                        >
                          <rect x="3" y="3" width="7" height="7" rx="1" />
                          <rect x="14" y="3" width="7" height="7" rx="1" />
                          <rect x="3" y="14" width="7" height="7" rx="1" />
                          <rect x="14" y="14" width="3" height="3" rx="0.5" />
                          <rect x="18" y="14" width="3" height="3" rx="0.5" />
                          <rect x="14" y="18" width="3" height="3" rx="0.5" />
                          <rect x="18" y="18" width="3" height="3" rx="0.5" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-zinc-900">
                          {ticket.ticketTier.name}
                        </p>
                        <p className="text-[10px] text-zinc-300 font-mono mt-0.5">
                          {ticket.qrCodeHash.slice(0, 8)}-
                          {ticket.qrCodeHash.slice(8, 16)}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded transition-colors duration-300 ${
                        ticket.isScanned
                          ? "text-zinc-400 bg-gray-50"
                          : "text-success bg-green-50"
                      }`}
                    >
                      {ticket.isScanned ? "Used" : "Valid"}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </>
      )}
    </main>
  );
}
