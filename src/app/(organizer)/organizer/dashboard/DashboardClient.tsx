"use client";

import Link from "next/link";
import { GlassButton } from "@/components/ui/GlassButton";
import { formatCents } from "@/lib/utils";
import { EventActions } from "./EventActions";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

interface EventData {
  id: string;
  title: string;
  date: string;
  location: string;
  isPublished: boolean;
  revenue: number;
  ticketsSold: number;
  totalCapacity: number;
}

interface DashboardClientProps {
  eventCount: number;
  totalRevenue: number;
  totalTickets: number;
  events: EventData[];
}

export function DashboardClient({
  eventCount,
  totalRevenue,
  totalTickets,
  events,
}: DashboardClientProps) {
  return (
    <main className="bg-white min-h-screen px-6 py-12 max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-semibold text-zinc-900">Dashboard</h1>
            <p className="text-sm text-zinc-400 mt-1">
              Manage events and track performance
            </p>
          </div>
          <Link href="/organizer/events/new">
            <GlassButton size="sm">New Event</GlassButton>
          </Link>
        </div>
      </ScrollReveal>

      {/* Stats */}
      <ScrollReveal variant="scale" delay={0.1}>
        <div className="grid grid-cols-3 divide-x divide-gray-100 border border-gray-100 rounded-xl mb-12">
          <div className="p-6 text-center">
            <AnimatedCounter
              value={eventCount}
              className="text-2xl font-semibold text-zinc-900"
            />
            <p className="text-xs text-zinc-400 mt-1">Events</p>
          </div>
          <div className="p-6 text-center">
            <AnimatedCounter
              value={totalRevenue}
              prefix="$"
              className="text-2xl font-semibold text-zinc-900"
            />
            <p className="text-xs text-zinc-400 mt-1">Revenue</p>
          </div>
          <div className="p-6 text-center">
            <AnimatedCounter
              value={totalTickets}
              className="text-2xl font-semibold text-zinc-900"
            />
            <p className="text-xs text-zinc-400 mt-1">Tickets Sold</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <h2 className="text-lg font-semibold text-zinc-900 mb-4">
          All Events
        </h2>
        <hr className="border-t border-gray-200 mb-0" />
      </ScrollReveal>

      {events.length === 0 ? (
        <ScrollReveal delay={0.2}>
          <div className="text-center py-16">
            <p className="text-zinc-400 text-sm mb-6">No events yet.</p>
            <Link href="/organizer/events/new">
              <GlassButton size="sm">Create Your First Event</GlassButton>
            </Link>
          </div>
        </ScrollReveal>
      ) : (
        <div>
          {events.map((event, i) => (
            <ScrollReveal key={event.id} delay={0.15 + i * 0.05}>
              <div className="flex flex-col md:flex-row md:items-center justify-between py-5 border-b border-gray-100 gap-4 hover:bg-zinc-50/50 -mx-3 px-3 rounded-lg transition-colors duration-300">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-zinc-900 truncate">
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 font-mono">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    / {event.location}
                  </p>
                </div>
                <div className="flex items-center gap-8 shrink-0">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-zinc-900">
                      {formatCents(event.revenue)}
                    </p>
                    <p className="text-[10px] text-zinc-400">revenue</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-zinc-900">
                      {event.ticketsSold}/{event.totalCapacity}
                    </p>
                    <p className="text-[10px] text-zinc-400">sold</p>
                  </div>
                  <EventActions
                    eventId={event.id}
                    isPublished={event.isPublished}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      )}
    </main>
  );
}
