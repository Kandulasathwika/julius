import { ScrollReveal } from "@/components/ui/ScrollReveal";

const CATEGORIES = [
  {
    name: "Cheese & Dairy",
    itemCount: 340,
    highlight: "Artisan imports weekly",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
  },
  {
    name: "Proteins",
    itemCount: 580,
    highlight: "USDA Prime & A5 Wagyu",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
  },
  {
    name: "Produce",
    itemCount: 420,
    highlight: "Farm-direct sourcing",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    name: "Pantry",
    itemCount: 890,
    highlight: "Oils, grains & dry goods",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
  },
  {
    name: "Seafood & Frozen",
    itemCount: 310,
    highlight: "Overnight cold chain",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
  },
];

export function CategoryBrowse() {
  return (
    <section id="categories" className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <ScrollReveal>
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-js-accent mb-2">
              Catalog
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-js-text tracking-tight">
              Browse by Category
            </h2>
          </div>
          <a href="#" className="text-xs text-js-text-muted hover:text-js-accent transition-colors duration-200 hidden sm:inline-flex items-center gap-1 group">
            View all categories
            <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {CATEGORIES.map((cat, i) => (
          <ScrollReveal key={cat.name} delay={i * 0.06}>
            <button className="w-full h-full group p-6 rounded-2xl bg-js-surface border border-js-border/15 hover:border-js-accent/25 transition-all duration-300 text-left js-glow js-card-shine flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-js-elevated/80 flex items-center justify-center text-js-text-muted group-hover:text-js-accent group-hover:bg-js-accent/10 transition-all duration-300 mb-5">
                {cat.icon}
              </div>
              <h3 className="text-sm font-bold text-js-text mb-1 tracking-[-0.01em]">
                {cat.name}
              </h3>
              <p className="text-[11px] text-js-text-muted leading-relaxed mb-3 flex-1">
                {cat.highlight}
              </p>
              <p className="text-[10px] text-js-text-secondary font-mono font-medium uppercase tracking-wider">
                {cat.itemCount.toLocaleString()} products
              </p>
            </button>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
