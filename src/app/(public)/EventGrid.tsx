"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { InteractiveCard } from "@/components/ui/InteractiveCard";
import { formatCents } from "@/lib/utils";

interface EventData {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  organizerName: string;
  lowestPrice: number;
  tierCount: number;
}

export function EventGrid({ events }: { events: EventData[] }) {
  if (events.length === 0) {
    return (
      <div className="text-center py-20 border border-gray-100 rounded-xl">
        <p className="text-zinc-400">No upcoming events.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, i) => (
        <ScrollReveal key={event.id} delay={i * 0.08}>
          <Link href={`/events/${event.id}`} className="block">
            <InteractiveCard tilt glow>
              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                {/* Image placeholder with zoom */}
                <div className="img-zoom">
                  <div className="aspect-[16/10] bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center">
                    <span className="text-xs text-orange-300/80 font-medium">
                      {event.title}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs text-zinc-400 mb-2 font-mono">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                    {"  -  "}
                    {event.location.split(",")[0]}
                  </p>
                  <h3 className="text-base font-semibold text-zinc-900 mb-1 transition-colors duration-300 group-hover:text-orange-600">
                    {event.title}
                  </h3>
                  <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <span className="text-xs text-zinc-400">
                      {event.organizerName}
                    </span>
                    <span className="text-sm font-semibold text-zinc-900">
                      {event.lowestPrice === 0
                        ? "Free"
                        : `From ${formatCents(event.lowestPrice)}`}
                    </span>
                  </div>
                </div>
              </div>
            </InteractiveCard>
          </Link>
        </ScrollReveal>
      ))}
    </div>
  );
}
