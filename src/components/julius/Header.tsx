"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { JULIUS_IMG } from "@/lib/julius-images";

const CATEGORIES = [
  { label: "What's new", href: "#" },
  { label: "Meat & poultry", href: "#" },
  { label: "Dairy & eggs", href: "#" },
  { label: "Cheese & charcuterie", href: "#" },
  { label: "Oils & vinegars", href: "#" },
  { label: "Baking & pastry", href: "#" },
  { label: "Produce", href: "#" },
  { label: "Frozen", href: "#" },
  { label: "Seafood", href: "#" },
  { label: "Pantry", href: "#" },
  { label: "Supplies", href: "#" },
];

const QUICK_LINKS = [
  { label: "Reorder", href: "#featured" },
  { label: "Requisition lists", href: "#promo-tiles" },
  { label: "Order history", href: "#" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-shadow duration-300 bg-js-navy text-white",
        scrolled && "shadow-lg shadow-black/25"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-3 py-3 md:py-4 md:flex-row md:items-center md:gap-6">
          <a
            href="#"
            className="shrink-0 group md:mr-2 flex items-center gap-3"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden ring-2 ring-white/20 shadow-lg shrink-0">
              <Image
                src={JULIUS_IMG.logoMark}
                alt=""
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="48px"
              />
            </div>
            <div>
              <p className="font-[family-name:var(--font-js-serif)] text-[10px] sm:text-[11px] tracking-[0.2em] text-white/70 uppercase">
                Est. 1913
              </p>
              <p className="font-[family-name:var(--font-js-serif)] text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-js-accent transition-colors leading-tight">
                Julius Silvert
              </p>
            </div>
          </a>

          <div className="flex-1 w-full order-3 md:order-none">
            <div className="relative group">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 group-focus-within:text-js-navy transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="text"
                placeholder="What can we help you find today?"
                className="w-full bg-white text-js-ink placeholder:text-stone-400 rounded-xl border-2 border-white/90 pl-12 pr-4 py-3.5 md:py-4 text-[15px] shadow-md shadow-black/10 focus:border-js-accent focus:ring-2 focus:ring-js-accent/35 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-2 order-2 md:order-none">
            <div className="hidden lg:flex items-center gap-1 mr-2">
              {QUICK_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/80 hover:text-white rounded-md hover:bg-white/10 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <button
              type="button"
              className="p-3 rounded-xl text-white/90 hover:bg-white/10 transition-colors"
              aria-label="Account"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </button>
            <button
              type="button"
              className="relative p-3 rounded-xl text-white/90 hover:bg-white/10 transition-colors"
              aria-label="Cart"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span className="absolute top-1.5 right-1.5 min-w-[18px] h-[18px] px-1 bg-js-redline text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-js-navy">
                1
              </span>
            </button>
            <button
              type="button"
              className="p-3 rounded-xl text-white/90 hover:bg-white/10 transition-colors"
              aria-label="Help"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
            </button>
            <button
              type="button"
              className="lg:hidden p-3 rounded-xl text-white/90 hover:bg-white/10"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 py-2 -mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto">
          <ul className="flex gap-1 min-w-max sm:flex-wrap sm:min-w-0 pb-1">
            {CATEGORIES.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  className="block px-2.5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wide text-white/85 hover:text-white hover:bg-white/10 rounded-md transition-colors whitespace-nowrap"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-js-navy-deep border-t border-white/10",
          mobileOpen ? "max-h-[480px]" : "max-h-0"
        )}
      >
        <div className="px-4 py-3 space-y-2">
          {QUICK_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block py-2 text-sm font-medium text-white/90"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
