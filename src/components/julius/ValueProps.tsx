import { ScrollReveal } from "@/components/ui/ScrollReveal";

const PROPS = [
  {
    title: "Fast Repeat Ordering",
    description:
      "One-click reorder from past deliveries. Requisition lists built for station-level precision across every prep day.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: "Account-Aware Pricing",
    description:
      "See your negotiated contract prices the moment you log in. No surprises at checkout, no manual lookups, no calls to your rep.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
  {
    title: "Route & Delivery Clarity",
    description:
      "Know your cutoff times, route windows, and next eligible delivery before placing a single line item.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
  },
  {
    title: "Inventory Transparency",
    description:
      "Real-time stock levels, substitution suggestions, and shortage alerts surface before you reach checkout.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
  },
];

export function ValueProps() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle background treatment */}
      <div className="absolute inset-0 js-dot-grid opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-js-accent/[0.02] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
        {/* Top separator */}
        <div className="absolute top-0 left-4 right-4 sm:left-6 sm:right-6 h-px bg-gradient-to-r from-transparent via-js-border/30 to-transparent" />

        <ScrollReveal>
          <div className="text-center mb-14 md:mb-20">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-js-accent mb-3">
              The Julius Silvert Advantage
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-js-text tracking-tight max-w-2xl mx-auto leading-tight">
              Purpose-built for kitchens
              <br className="hidden sm:block" />
              that never stop moving
            </h2>
            <p className="text-sm sm:text-base text-js-text-secondary max-w-xl mx-auto mt-4 leading-relaxed">
              Every feature designed around the way professional kitchens
              actually procure, not the way software companies think they should.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PROPS.map((prop, i) => (
            <ScrollReveal key={prop.title} delay={i * 0.1}>
              <div className="group">
                <div className="w-12 h-12 rounded-2xl bg-js-accent/10 flex items-center justify-center text-js-accent mb-5 group-hover:bg-js-accent/15 transition-all duration-300">
                  {prop.icon}
                </div>
                <h3 className="text-base font-bold text-js-text mb-2 tracking-[-0.01em]">
                  {prop.title}
                </h3>
                <p className="text-sm text-js-text-muted leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
