import Image from "next/image";
import { cn } from "@/lib/utils";
import { JULIUS_IMG } from "@/lib/julius-images";

const STRIP_ITEMS = [
  {
    label: "Available",
    detail: "Kerrygold butter",
    tone: "available" as const,
    image: JULIUS_IMG.kerrygold,
  },
  {
    label: "Limited supply",
    detail: "Prime ribeye cap - 8 cases",
    tone: "limited" as const,
    image: JULIUS_IMG.ribeye,
  },
  {
    label: "Substitute recommended",
    detail: "San Marzano DOP",
    tone: "substitute" as const,
    image: JULIUS_IMG.tomato,
  },
  {
    label: "Cutoff risk",
    detail: "Ora King salmon by 2 PM",
    tone: "cutoff" as const,
    image: JULIUS_IMG.salmon,
  },
  {
    label: "Out of stock",
    detail: "A5 Wagyu - restocks Mon",
    tone: "oos" as const,
    image: JULIUS_IMG.wagyu,
  },
];

const toneClass: Record<(typeof STRIP_ITEMS)[number]["tone"], string> = {
  available: "border-emerald-200/90 bg-white shadow-sm hover:shadow-md hover:border-emerald-300",
  limited: "border-amber-200/90 bg-white shadow-sm hover:shadow-md hover:border-amber-300",
  substitute: "border-orange-200/90 bg-white shadow-sm hover:shadow-md hover:border-orange-300",
  cutoff: "border-rose-200/90 bg-white shadow-sm hover:shadow-md hover:border-rose-300",
  oos: "border-red-200/90 bg-white shadow-sm hover:shadow-md hover:border-red-300",
};

const textTone: Record<(typeof STRIP_ITEMS)[number]["tone"], string> = {
  available: "text-emerald-900",
  limited: "text-amber-950",
  substitute: "text-orange-950",
  cutoff: "text-rose-950",
  oos: "text-red-950",
};

export function InventoryAlertStrip() {
  return (
    <section
      id="inventory-strip"
      className="bg-gradient-to-b from-stone-100/90 to-js-canvas border-b border-stone-200 py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-500">
            Live inventory signals
          </p>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
          {STRIP_ITEMS.map((item) => (
            <div
              key={item.label}
              className={cn(
                "shrink-0 flex items-center gap-3 rounded-xl border p-2 pr-4 min-w-[200px] sm:min-w-0 transition-all duration-300",
                toneClass[item.tone]
              )}
            >
              <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 shadow-inner ring-1 ring-black/5">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="min-w-0">
                <p
                  className={cn(
                    "text-[9px] font-bold uppercase tracking-wide opacity-90",
                    textTone[item.tone]
                  )}
                >
                  {item.label}
                </p>
                <p className="text-xs font-semibold text-stone-800 mt-0.5 leading-snug">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
