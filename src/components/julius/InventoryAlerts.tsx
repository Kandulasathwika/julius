import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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
}

const STATUS_CONFIG: Record<
  InventoryStatus,
  {
    label: string;
    dotClass: string;
    textClass: string;
    bgClass: string;
    glowClass: string;
    icon: React.ReactNode;
  }
> = {
  available: {
    label: "Available",
    dotClass: "bg-js-available",
    textClass: "text-js-available",
    bgClass: "bg-js-available/8",
    glowClass: "js-status-glow-available",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    ),
  },
  limited: {
    label: "Limited Supply",
    dotClass: "bg-js-limited",
    textClass: "text-js-limited",
    bgClass: "bg-js-limited/8",
    glowClass: "js-status-glow-limited",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126Z" />
      </svg>
    ),
  },
  substitute: {
    label: "Substitute Recommended",
    dotClass: "bg-js-substitute",
    textClass: "text-js-substitute",
    bgClass: "bg-js-substitute/8",
    glowClass: "js-status-glow-substitute",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  cutoff_risk: {
    label: "Cutoff Risk",
    dotClass: "bg-js-cutoff js-pulse",
    textClass: "text-js-cutoff",
    bgClass: "bg-js-cutoff/8",
    glowClass: "js-status-glow-cutoff",
    icon: (
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  out_of_stock: {
    label: "Out of Stock",
    dotClass: "bg-js-oos",
    textClass: "text-js-oos",
    bgClass: "bg-js-oos/8",
    glowClass: "js-status-glow-oos",
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
  },
  {
    product: "Prime Angus Ribeye Cap",
    sku: "PA-RIB-1140",
    packSize: "4 x 12 oz",
    status: "limited",
    detail: "Only 8 cases remaining",
    action: "Add to cart",
    price: "$189.00",
  },
  {
    product: "San Marzano DOP Tomatoes",
    sku: "SM-TOM-2800",
    packSize: "6 x 28 oz",
    status: "substitute",
    detail: "Try: Bianco DiNapoli Whole Peeled",
    action: "View substitute",
    price: "$32.75",
  },
  {
    product: "Ora King Salmon Fillet",
    sku: "OK-SAL-5500",
    packSize: "1 x 5.5 lb",
    status: "cutoff_risk",
    detail: "Order by 2:00 PM for Thursday",
    action: "Add to cart",
    price: "$78.90",
  },
  {
    product: "A5 Wagyu Striploin",
    sku: "WG-STR-7700",
    packSize: "1 x 11 lb",
    status: "out_of_stock",
    detail: "Next available: Mon 3/23",
    action: "Get notified",
    price: "$425.00",
  },
  {
    product: "Point Reyes Toma Cheese",
    sku: "PR-TMA-4400",
    packSize: "1 x 10 lb wheel",
    status: "available",
    detail: "36 wheels in stock",
    action: "Add to cart",
    price: "$67.25",
  },
];

function StatusSummary() {
  const counts: Record<string, number> = {};
  INVENTORY_DATA.forEach((item) => {
    counts[item.status] = (counts[item.status] || 0) + 1;
  });

  return (
    <div className="flex flex-wrap items-center gap-4">
      {Object.entries(STATUS_CONFIG).map(([key, config]) => {
        const count = counts[key] || 0;
        if (count === 0) return null;
        return (
          <div key={key} className="flex items-center gap-2">
            <span className={cn("w-2 h-2 rounded-full", config.dotClass)} />
            <span className="text-[11px] text-js-text-muted">
              <span className={cn("font-semibold", config.textClass)}>{count}</span>{" "}
              {config.label.toLowerCase()}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function InventoryAlerts() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      {/* Section header */}
      <ScrollReveal>
        <div className="mb-10">
          <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4 mb-5">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-js-accent">
                  Procurement Intelligence
                </p>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-js-available/10 border border-js-available/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-js-available opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-js-available" />
                  </span>
                  <span className="text-js-available text-[10px] font-semibold uppercase tracking-wider">
                    Live
                  </span>
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-js-text tracking-tight">
                Inventory Dashboard
              </h2>
            </div>
            <span className="text-[11px] text-js-text-muted font-mono bg-js-surface px-3 py-1.5 rounded-lg border border-js-border/20">
              Last sync 2 min ago
            </span>
          </div>
          <StatusSummary />
        </div>
      </ScrollReveal>

      {/* Inventory cards */}
      <div className="space-y-3">
        {INVENTORY_DATA.map((item, i) => {
          const config = STATUS_CONFIG[item.status];
          return (
            <ScrollReveal key={item.sku} delay={i * 0.06}>
              <div
                className={cn(
                  "group rounded-xl bg-js-surface border border-js-border/15 hover:border-js-border/30 transition-all duration-300 cursor-pointer overflow-hidden",
                  config.glowClass
                )}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 p-5 md:p-0">
                  {/* Product info */}
                  <div className="md:flex-1 md:px-6 md:py-5">
                    <div className="flex items-start gap-3">
                      <div className={cn(
                        "shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5",
                        config.bgClass,
                        config.textClass
                      )}>
                        {config.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-js-text group-hover:text-js-accent transition-colors duration-200 truncate">
                          {item.product}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] text-js-text-muted font-mono">
                            {item.sku}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-js-border" />
                          <span className="text-[11px] text-js-text-muted">
                            {item.packSize}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="md:w-44 md:px-4 md:py-5">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-semibold",
                        config.bgClass,
                        config.textClass
                      )}
                    >
                      <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", config.dotClass)} />
                      {config.label}
                    </span>
                  </div>

                  {/* Detail */}
                  <div className="md:w-56 md:px-4 md:py-5">
                    <p className="text-xs text-js-text-secondary leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  {/* Price + action */}
                  <div className="flex items-center justify-between md:justify-end gap-4 md:w-52 md:px-6 md:py-5">
                    <span className="text-base font-bold text-js-text font-mono tracking-tight">
                      {item.price}
                    </span>
                    <button
                      className={cn(
                        "text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-all duration-200",
                        item.status === "out_of_stock"
                          ? "text-js-text-muted bg-js-elevated hover:bg-js-border/50"
                          : item.status === "substitute"
                            ? "text-js-substitute bg-js-substitute/10 hover:bg-js-substitute/15"
                            : "text-js-accent bg-js-accent/10 hover:bg-js-accent/15"
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
