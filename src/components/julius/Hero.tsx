"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";
import { JULIUS_IMG } from "@/lib/julius-images";

const SLIDES = [
  {
    id: "1",
    src: JULIUS_IMG.heroBeef,
    alt: "Premium beef program",
    kicker: "Carved Meat Company",
    title: "A premium cut beef program",
    subtitle: "Center-of-the-plate proteins for high-volume kitchens.",
    cta: "Find your cut",
  },
  {
    id: "2",
    src: JULIUS_IMG.heroProduce,
    alt: "Fresh seasonal produce",
    kicker: "Bright. Fresh. Seasonal.",
    title: "Inspiring your spring menus",
    subtitle: "Early arrivals on produce and specialty items.",
    cta: "Browse early spring arrivals",
  },
  {
    id: "3",
    src: JULIUS_IMG.heroKitchen,
    alt: "Kitchen prep",
    kicker: "Kitchen speed",
    title: "Reorder in one click",
    subtitle: "Account pricing, requisition lists, and route cutoffs in one place.",
    cta: "Reorder last delivery",
  },
  {
    id: "4",
    src: JULIUS_IMG.heroCheese,
    alt: "Cheese and dairy selection",
    kicker: "Dairy and specialty",
    title: "Cheese programs that move",
    subtitle: "Kerrygold, domestic wheels, and portion-ready formats for your line.",
    cta: "Shop dairy and cheese",
  },
];

export function Hero() {
  const [i, setI] = useState(0);
  const next = useCallback(() => setI((x) => (x + 1) % SLIDES.length), []);
  const prev = useCallback(
    () => setI((x) => (x - 1 + SLIDES.length) % SLIDES.length),
    []
  );

  useEffect(() => {
    const t = setInterval(next, 8000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative bg-js-canvas px-4 sm:px-6 pt-6 pb-8 md:pt-8 md:pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-js-navy-deep shadow-xl min-h-[420px] md:min-h-[480px]">
          {SLIDES.map((s, idx) => (
            <div
              key={s.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                idx === i ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              )}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-js-navy-deep/95 via-js-navy-deep/70 to-transparent md:from-black/80 md:via-black/45 md:to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end md:justify-center p-6 md:p-12 lg:p-16 max-w-2xl">
                <p className="text-js-accent text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-2">
                  {s.kicker}
                </p>
                <h1 className="font-[family-name:var(--font-js-serif)] text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {s.title}
                </h1>
                <p className="mt-3 text-white/85 text-sm md:text-lg max-w-md leading-relaxed">
                  {s.subtitle}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="px-6 py-3 rounded-full bg-white text-js-navy font-semibold text-sm hover:bg-stone-100 transition-colors press-scale"
                  >
                    {s.cta}
                  </button>
                  <a
                    href="#promo-tiles"
                    className="px-5 py-3 rounded-full border-2 border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors inline-flex items-center"
                  >
                    Open requisition lists
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setI(idx)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  idx === i ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                )}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 items-center justify-center text-white backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 items-center justify-center text-white backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:items-center sm:justify-between rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
          <div className="flex items-center gap-2 text-sm text-stone-700">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
            </span>
            <span className="font-medium">Next delivery cutoff</span>
            <span className="font-mono font-semibold text-js-navy">Today 2:00 PM EST</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-stone-500 uppercase tracking-wide font-semibold self-center mr-1">
              Limited seasonal
            </span>
            <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-medium text-amber-950">
              Spring morels arriving Thu
            </span>
            <a
              href="#featured"
              className="rounded-full bg-js-navy/5 border border-js-navy/15 px-3 py-1 text-xs font-semibold text-js-navy hover:bg-js-navy/10"
            >
              Reorder shortcuts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
