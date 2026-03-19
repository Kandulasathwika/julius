"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GlassButton } from "@/components/ui/GlassButton";
import { GlassInput } from "@/components/ui/GlassInput";
import { createEvent } from "@/actions/event-actions";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function CreateEventPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [tiers, setTiers] = useState([
    { name: "General Admission", price: "25.00", capacity: "100" },
  ]);

  function addTier() {
    setTiers([...tiers, { name: "", price: "", capacity: "" }]);
  }
  function removeTier(i: number) {
    if (tiers.length > 1) setTiers(tiers.filter((_, idx) => idx !== i));
  }
  function updateTier(i: number, f: string, v: string) {
    const u = [...tiers];
    u[i] = { ...u[i], [f]: v };
    setTiers(u);
  }

  function handleSubmit(formData: FormData) {
    formData.set("tiers", JSON.stringify(tiers));
    startTransition(async () => {
      const result = await createEvent(formData);
      if (result?.id) router.push("/organizer/dashboard");
    });
  }

  return (
    <main className="bg-white min-h-screen px-6 py-12 max-w-2xl mx-auto">
      <ScrollReveal>
        <Link
          href="/organizer/dashboard"
          className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors duration-300"
        >
          &larr; Back to Dashboard
        </Link>
        <h1 className="text-2xl font-semibold text-zinc-900 mt-6 mb-10">
          New Event
        </h1>
      </ScrollReveal>

      <form action={handleSubmit} className="space-y-10">
        <ScrollReveal delay={0.08}>
          <div className="space-y-6">
            <GlassInput
              name="title"
              required
              label="Title"
              placeholder="Event name"
            />
            <div>
              <label className="text-xs text-zinc-500 block mb-1.5">
                Description
              </label>
              <textarea
                name="description"
                required
                rows={4}
                className="w-full bg-white border-b border-zinc-200 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-300 focus:border-zinc-900 transition-colors duration-500 resize-none outline-none"
                placeholder="Describe your event"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <GlassInput
                name="location"
                required
                label="Location"
                placeholder="City, Venue"
              />
              <GlassInput
                name="date"
                type="datetime-local"
                required
                label="Date and Time"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-zinc-900">
                Ticket Tiers
              </h2>
              <button
                type="button"
                onClick={addTier}
                className="text-xs text-orange-500 hover:text-orange-600 transition-colors duration-300 press-scale"
              >
                + Add Tier
              </button>
            </div>
            <hr className="border-t border-gray-200 mb-5" />

            <div className="space-y-5">
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className="border border-gray-100 rounded-xl p-5 relative hover:border-gray-200 transition-colors duration-300"
                >
                  {tiers.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeTier(i)}
                      className="absolute top-4 right-4 text-xs text-zinc-300 hover:text-danger transition-colors duration-300 press-scale"
                    >
                      Remove
                    </button>
                  )}
                  <div className="grid grid-cols-3 gap-4">
                    <GlassInput
                      label="Name"
                      value={tier.name}
                      onChange={(e) => updateTier(i, "name", e.target.value)}
                      required
                      placeholder="VIP"
                    />
                    <GlassInput
                      label="Price (USD)"
                      type="number"
                      step="0.01"
                      min="0"
                      value={tier.price}
                      onChange={(e) => updateTier(i, "price", e.target.value)}
                      required
                      placeholder="0.00"
                    />
                    <GlassInput
                      label="Capacity"
                      type="number"
                      min="1"
                      value={tier.capacity}
                      onChange={(e) =>
                        updateTier(i, "capacity", e.target.value)
                      }
                      required
                      placeholder="100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <GlassButton
            type="submit"
            size="lg"
            disabled={isPending}
            className="w-full"
          >
            {isPending ? "Creating..." : "Publish Event"}
          </GlassButton>
        </ScrollReveal>
      </form>
    </main>
  );
}
