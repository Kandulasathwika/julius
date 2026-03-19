"use client";

import { useEffect, useRef } from "react";

const TRUST_STATS = [
  { value: "2,400+", label: "Kitchens served" },
  { value: "4,200+", label: "Products stocked" },
  { value: "98.6%", label: "Order accuracy" },
  { value: "6 days", label: "Weekly delivery" },
];

export function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cutoffRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [badgeRef, headlineRef, subtitleRef, ctaRef, cutoffRef, statsRef];
    els.forEach((ref, i) => {
      if (!ref.current) return;
      ref.current.style.opacity = "0";
      ref.current.style.transform = "translateY(28px)";
      setTimeout(() => {
        if (!ref.current) return;
        ref.current.style.transition =
          "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
        ref.current.style.opacity = "1";
        ref.current.style.transform = "translateY(0)";
      }, 100 + i * 120);
    });
  }, []);

  return (
    <section className="relative overflow-hidden js-dot-grid">
      {/* Atmospheric gradient orbs */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] rounded-full bg-js-accent/[0.03] blur-[120px] pointer-events-none js-float" />
      <div className="absolute top-[-100px] right-[-200px] w-[600px] h-[600px] rounded-full bg-js-cutoff/[0.02] blur-[100px] pointer-events-none js-float-delay" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-js-border/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20 md:pt-36 md:pb-32">
        {/* Badge */}
        <div ref={badgeRef} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-js-border/40 bg-js-surface/60 backdrop-blur-sm text-xs font-medium text-js-text-secondary tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-js-available opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-js-available" />
            </span>
            Premium B2B Foodservice Distribution
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-extrabold tracking-[-0.03em] leading-[1.05] text-js-text max-w-5xl mx-auto"
        >
          Built for chefs who
          <br className="hidden sm:block" />
          order at{" "}
          <span className="js-gradient-text">kitchen speed</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-center text-base sm:text-lg text-js-text-secondary max-w-2xl mx-auto mt-7 leading-relaxed"
        >
          Account-aware pricing, one-click repeat ordering, and real-time
          inventory confidence. Everything your kitchen needs to procure
          faster, smarter, and with zero guesswork.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-10"
        >
          <button className="w-full sm:w-auto px-8 py-3.5 bg-js-accent hover:bg-js-accent-hover text-js-bg font-semibold text-sm rounded-lg transition-all duration-300 press-scale shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_30px_rgba(245,158,11,0.35)]">
            Start Order
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 border border-js-border hover:border-js-text-muted/60 text-js-text text-sm font-medium rounded-lg transition-all duration-300 press-scale hover:bg-js-surface/50">
            Open Requisition Lists
          </button>
          <a href="#categories" className="px-6 py-3.5 text-js-text-secondary hover:text-js-text text-sm font-medium transition-all duration-300 group inline-flex items-center gap-1.5">
            Browse Catalog
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>

        {/* Delivery cutoff callout */}
        <div ref={cutoffRef} className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-js-cutoff/[0.07] border border-js-cutoff/20">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-js-cutoff opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-js-cutoff" />
              </span>
              <span className="text-xs font-medium text-js-cutoff uppercase tracking-wider">Cutoff</span>
            </div>
            <span className="w-px h-3.5 bg-js-cutoff/20" />
            <span className="text-xs text-js-text-secondary">
              Next delivery cutoff{" "}
              <span className="text-js-text font-semibold font-mono tracking-tight">
                Today 2:00 PM EST
              </span>
            </span>
          </div>
        </div>

        {/* Trust stats row */}
        <div ref={statsRef} className="mt-16 md:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-js-border/10 rounded-2xl overflow-hidden border border-js-border/20">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="bg-js-bg px-6 py-5 md:py-6 text-center">
                <p className="text-xl md:text-2xl font-bold text-js-text tracking-tight font-mono">
                  {stat.value}
                </p>
                <p className="text-[11px] text-js-text-muted mt-1 uppercase tracking-wider font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
