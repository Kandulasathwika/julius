"use client";

import Link from "next/link";
import { formatCents } from "@/lib/utils";
import { PurchaseButton } from "./PurchaseButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { HeroGradient } from "@/components/ui/HeroGradient";

interface EventData {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  organizerName: string;
}

interface TierData {
  id: string;
  name: string;
  price: number;
  capacity: number;
  sold: number;
}

export function EventDetailClient({
  event,
  tiers,
}: {
  event: EventData;
  tiers: TierData[];
}) {
  const eventDate = new Date(event.date);

  return (
    <main className="bg-white">
      {/* Mini gradient banner with mouse tracking */}
      <HeroGradient className="h-48 flex items-end px-6">
        <div className="max-w-4xl mx-auto w-full pb-6">
          <Link
            href="/"
            className="text-white/70 text-xs hover:text-white transition-colors duration-300"
          >
            &larr; Back to Events
          </Link>
        </div>
      </HeroGradient>

      <div className="max-w-4xl mx-auto px-6 -mt-8 relative z-10">
        {/* Header card */}
        <ScrollReveal>
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm mb-8">
            <p className="text-xs text-zinc-400 font-mono mb-3">
              {eventDate.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
              {"  /  "}
              {eventDate.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
              })}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
              {event.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <span>{event.location}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-300" />
              <span>By {event.organizerName}</span>
            </div>
          </div>
        </ScrollReveal>

        {/* About */}
        <ScrollReveal delay={0.1}>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">About</h2>
            <hr className="border-t border-gray-200 mb-5" />
            <p className="text-sm text-zinc-500 leading-[1.8] whitespace-pre-wrap">
              {event.description}
            </p>
          </div>
        </ScrollReveal>

        {/* Tickets */}
        <ScrollReveal delay={0.15}>
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">
              Tickets
            </h2>
            <hr className="border-t border-gray-200 mb-5" />

            <div className="space-y-3">
              {tiers.map((tier, i) => {
                const remaining = tier.capacity - tier.sold;
                const soldOut = remaining <= 0;

                return (
                  <ScrollReveal key={tier.id} delay={0.1 + i * 0.06}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border border-gray-100 rounded-xl hover:border-gray-200 transition-colors duration-300">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-semibold text-zinc-900">
                            {tier.name}
                          </h3>
                          {soldOut && (
                            <span className="text-[10px] text-zinc-400 border border-gray-200 rounded px-1.5 py-0.5">
                              Sold Out
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-400 mt-1">
                          {remaining} of {tier.capacity} available
                        </p>
                        <div className="mt-2 h-1 w-32 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-orange-400 rounded-full progress-fill"
                            style={{
                              width: `${Math.min((tier.sold / tier.capacity) * 100, 100)}%`,
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-3 sm:mt-0">
                        <span className="text-base font-semibold text-zinc-900">
                          {tier.price === 0 ? "Free" : formatCents(tier.price)}
                        </span>
                        <PurchaseButton
                          eventId={event.id}
                          tierId={tier.id}
                          tierName={tier.name}
                          price={tier.price}
                          soldOut={soldOut}
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Details grid */}
        <ScrollReveal delay={0.2}>
          <div className="pb-16">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4">
              Details
            </h2>
            <hr className="border-t border-gray-200 mb-5" />
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-zinc-400 mb-1">Date</p>
                <p className="text-sm text-zinc-900">
                  {eventDate.toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div>
                <p className="text-xs text-zinc-400 mb-1">Time</p>
                <p className="text-sm text-zinc-900">
                  {eventDate.toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <div>
                <p className="text-xs text-zinc-400 mb-1">Location</p>
                <p className="text-sm text-zinc-900">{event.location}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
