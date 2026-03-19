"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Catalog", href: "#categories" },
  { label: "Requisition Lists", href: "#quick-actions" },
  { label: "Order History", href: "#" },
  { label: "Delivery Schedule", href: "#" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        "bg-js-bg/70 backdrop-blur-2xl",
        scrolled
          ? "border-b border-js-border/30 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "border-b border-transparent"
      )}
    >
      {/* Warm accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-js-accent/20 to-transparent" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top row */}
        <div className="h-[72px] flex items-center justify-between gap-6">
          {/* Wordmark */}
          <a
            href="#"
            className="shrink-0 group"
          >
            <span className="text-js-text font-extrabold text-base tracking-[0.25em] uppercase group-hover:text-js-accent transition-colors duration-300">
              Julius Silvert
            </span>
            <span className="block text-[9px] tracking-[0.35em] uppercase text-js-text-muted font-medium mt-[-2px]">
              Foodservice Distribution
            </span>
          </a>

          {/* Search - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-6">
            <div className="relative w-full group">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-js-text-muted group-focus-within:text-js-accent transition-colors duration-200"
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
                placeholder="Search 4,200+ products..."
                className="w-full bg-js-surface/80 border border-js-border/30 rounded-xl pl-10 pr-12 py-2.5 text-sm text-js-text placeholder:text-js-text-muted focus:border-js-accent/40 focus:bg-js-surface transition-all duration-300"
              />
              <kbd className="absolute right-3.5 top-1/2 -translate-y-1/2 hidden lg:inline-flex items-center px-1.5 py-0.5 text-[10px] text-js-text-muted bg-js-elevated/80 rounded-md border border-js-border/30 font-mono">
                /
              </kbd>
            </div>
          </div>

          {/* Nav links - desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-[11px] font-medium text-js-text-muted hover:text-js-text rounded-lg transition-all duration-200 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Account */}
            <button
              className="p-2.5 rounded-xl text-js-text-muted hover:text-js-text hover:bg-js-surface/60 transition-all duration-200"
              aria-label="Account"
            >
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </button>

            {/* Cart */}
            <button
              className="relative p-2.5 rounded-xl text-js-text-muted hover:text-js-text hover:bg-js-surface/60 transition-all duration-200"
              aria-label="Cart"
            >
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span className="absolute top-1 right-1 w-4 h-4 bg-js-accent text-js-bg text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-js-bg">
                3
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2.5 rounded-xl text-js-text-muted hover:text-js-text hover:bg-js-surface/60 transition-all duration-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-96 border-t border-js-border/20" : "max-h-0"
        )}
      >
        <div className="px-4 py-4 space-y-1 bg-js-bg/95 backdrop-blur-xl">
          {/* Mobile search */}
          <div className="relative mb-4">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-js-text-muted"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-js-surface border border-js-border/30 rounded-xl pl-10 pr-4 py-3 text-sm text-js-text placeholder:text-js-text-muted"
            />
          </div>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-3 text-sm font-medium text-js-text-secondary hover:text-js-text hover:bg-js-surface rounded-xl transition-all duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
