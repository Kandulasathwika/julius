import Image from "next/image";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JULIUS_IMG } from "@/lib/julius-images";

type InventoryStatus =
  | "available"
  | "limited"
  | "substitute"
  | "cutoff_risk"
  | "out_of_stock";

interface InventoryItem {
  product: string;
  sku: string;
  packSize: string;
  status: InventoryStatus;
  detail: string;
  action: string;
  price: string;
  image: string;
}

const STATUS_CONFIG: Record<
  InventoryStatus,
  {
    label: string;
    dotClass: string;
    textClass: string;
    bgClass: string;
    borderClass: string;
    leftBar: string;
    icon: React.ReactNode;
  }
> = {
  available: {
    label: "Available",
    dotClass: "bg-emerald-500",
    textClass: "text-emerald-800",
    bgClass: "bg-emerald-50",
    borderClass: "border-emerald-200",
    leftBar: "border-l-emerald-500",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    ),
  },
  limited: {
    label: "Limited supply",
    dotClass: "bg-amber-500",
    textClass: "text-amber-900",
    bgClass: "bg-amber-50",
    borderClass: "border-amber-200",
    leftBar: "border-l-amber-500",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126Z" />
      </svg>
    ),
  },
  substitute: {
    label: "Substitute recommended",
    dotClass: "bg-orange-500",
    textClass: "text-orange-900",
    bgClass: "bg-orange-50",
    borderClass: "border-orange-200",
    leftBar: "border-l-orange-500",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  cutoff_risk: {
    label: "Cutoff risk",
    dotClass: "bg-rose-500 js-pulse",
    textClass: "text-rose-900",
    bgClass: "bg-rose-50",
    borderClass: "border-rose-200",
    leftBar: "border-l-rose-500",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  out_of_stock: {
    label: "Out of stock",
    dotClass: "bg-red-500",
    textClass: "text-red-900",
    bgClass: "bg-red-50",
    borderClass: "border-red-200",
    leftBar: "border-l-red-500",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
};

const INVENTORY_DATA: InventoryItem[] = [
  {
    product: "Kerrygold Unsalted Butter",
    sku: "KG-BTR-8250",
    packSize: "36 x 8 oz",
    status: "available",
    detail: "142 cases in stock",
    action: "Add to cart",
    price: "$124.50",
    image: JULIUS_IMG.kerrygold,
  },
  {
    product: "Prime Angus Ribeye Cap",
    sku: "PA-RIB-1140",
    packSize: "4 x 12 oz",
    status: "limited",
    detail: "Only 8 cases remaining",
    action: "Add to cart",
    price: "$189.00",
    image: JULIUS_IMG.ribeye,
  },
  {
    product: "San Marzano DOP Tomatoes",
    sku: "SM-TOM-2800",
    packSize: "6 x 28 oz",
    status: "substitute",
    detail: "Try: Bianco DiNapoli Whole Peeled",
    action: "View substitute",
    price: "$32.75",
    image: JULIUS_IMG.tomato,
  },
  {
    product: "Ora King Salmon Fillet",
    sku: "OK-SAL-5500",
    packSize: "1 x 5.5 lb",
    status: "cutoff_risk",
    detail: "Order by 2:00 PM for Thursday",
    action: "Add to cart",
    price: "$78.90",
    image: JULIUS_IMG.salmon,
  },
  {
    product: "A5 Wagyu Striploin",
    sku: "WG-STR-7700",
    packSize: "1 x 11 lb",
    status: "out_of_stock",
    detail: "Next available: Mon 3/23",
    action: "Get notified",
    price: "$425.00",
    image: JULIUS_IMG.wagyu,
  },
];

function StatusSummary() {
  const counts: Record<string, number> = {};
  INVENTORY_DATA.forEach((item) => {
    counts[item.status] = (counts[item.status] || 0) + 1;
  });

  return (
    <div className="flex flex-wrap items-center gap-3">
      {Object.entries(STATUS_CONFIG).map(([key, config]) => {
        const count = counts[key] || 0;
        if (count === 0) return null;
        return (
          <div key={key} className="flex items-center gap-2 text-xs text-stone-600">
            <span className={cn("w-2 h-2 rounded-full", config.dotClass)} />
            <span className={cn("font-semibold", config.textClass)}>{count}</span>
            <span>{config.label.toLowerCase()}</span>
          </div>
        );
      })}
    </div>
  );
}

export function InventoryAlerts() {
  return (
    <section
      id="inventory-signals"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-16 font-[family-name:var(--font-js-sans)]"
    >
      <ScrollReveal>
        <div className="mb-8">
          <div className="relative rounded-2xl overflow-hidden mb-6 h-32 md:h-36 border border-stone-200 shadow-sm">
            <Image
              src={JULIUS_IMG.inventory}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-js-navy/92 via-js-navy/65 to-js-navy/30" />
            <div className="absolute inset-0 flex items-center px-6 md:px-8">
              <div>
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-js-accent">
                  On your order today
                </p>
                <h2 className="font-[family-name:var(--font-js-serif)] text-xl md:text-3xl font-bold text-white mt-1 drop-shadow-sm">
                  Inventory signals for your account
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <StatusSummary />
            <span className="text-[11px] text-stone-500 font-mono bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 w-fit shrink-0">
              Last sync 2 min ago
            </span>
          </div>
        </div>
      </ScrollReveal>

      <div className="space-y-3">
        {INVENTORY_DATA.map((item, i) => {
          const config = STATUS_CONFIG[item.status];
          return (
            <ScrollReveal key={item.sku} delay={i * 0.05}>
              <div
                className={cn(
                  "group rounded-xl border border-stone-200 bg-white shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden border-l-4",
                  config.leftBar
                )}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 p-4 md:p-5">
                  <div className="md:flex-1 flex gap-3">
                    <div className="relative shrink-0 w-16 h-16 rounded-xl overflow-hidden ring-1 ring-stone-200/80 shadow-sm bg-stone-100">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="64px"
                      />
                      <div
                        className={cn(
                          "absolute bottom-1 right-1 w-6 h-6 rounded-md flex items-center justify-center border shadow-sm",
                          config.bgClass,
                          config.textClass,
                          config.borderClass
                        )}
                      >
                        {config.icon}
                      </div>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-js-ink group-hover:text-js-navy transition-colors">
                        {item.product}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-[11px] text-stone-500">
                        <span className="font-mono">{item.sku}</span>
                        <span className="w-1 h-1 rounded-full bg-stone-300" />
                        <span>{item.packSize}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-40">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold border",
                        config.bgClass,
                        config.textClass,
                        config.borderClass
                      )}
                    >
                      <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", config.dotClass)} />
                      {config.label}
                    </span>
                  </div>
                  <div className="md:flex-1 md:max-w-xs">
                    <p className="text-sm text-stone-600">{item.detail}</p>
                  </div>
                  <div className="flex items-center justify-between md:justify-end gap-4 md:w-44">
                    <span className="text-base font-bold text-js-ink font-mono">{item.price}</span>
                    <button
                      type="button"
                      className={cn(
                        "text-[11px] font-bold px-3 py-2 rounded-lg transition-colors",
                        item.status === "out_of_stock"
                          ? "bg-stone-100 text-stone-600 border border-stone-200"
                          : item.status === "substitute"
                            ? "bg-orange-100 text-orange-900 border border-orange-200"
                            : "bg-js-navy text-white hover:bg-js-navy-deep"
                      )}
                    >
                      {item.action}
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
