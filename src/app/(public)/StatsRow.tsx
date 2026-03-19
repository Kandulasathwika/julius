"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

interface StatsRowProps {
  eventCount: number;
  tierCount: number;
  cityCount: number;
}

export function StatsRow({ eventCount, tierCount, cityCount }: StatsRowProps) {
  return (
    <ScrollReveal variant="scale">
      <div className="grid grid-cols-3 divide-x divide-gray-100 border border-gray-100 rounded-xl">
        <div className="p-6 text-center">
          <AnimatedCounter value={eventCount} className="text-2xl font-semibold text-zinc-900" />
          <p className="text-xs text-zinc-400 mt-1">Live Events</p>
        </div>
        <div className="p-6 text-center">
          <AnimatedCounter value={tierCount} className="text-2xl font-semibold text-zinc-900" />
          <p className="text-xs text-zinc-400 mt-1">Ticket Options</p>
        </div>
        <div className="p-6 text-center">
          <AnimatedCounter value={cityCount} className="text-2xl font-semibold text-zinc-900" />
          <p className="text-xs text-zinc-400 mt-1">Cities</p>
        </div>
      </div>
    </ScrollReveal>
  );
}
