"use client";

import Link from "next/link";
import { GlassButton } from "@/components/ui/GlassButton";
import { HeroGradient } from "@/components/ui/HeroGradient";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const els = [badgeRef, headlineRef, subtitleRef, ctaRef];
    els.forEach((ref, i) => {
      if (!ref.current) return;
      ref.current.style.opacity = "0";
      ref.current.style.transform = "translateY(20px)";
      setTimeout(() => {
        if (!ref.current) return;
        ref.current.style.transition = "opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1), transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)";
        ref.current.style.opacity = "1";
        ref.current.style.transform = "translateY(0)";
      }, 200 + i * 120);
    });
  }, []);

  return (
    <HeroGradient className="px-6 py-28 md:py-36 text-center">
      <p
        ref={badgeRef}
        className="text-white/80 text-sm font-medium mb-5"
      >
        Live ticketing for modern events
      </p>
      <h1
        ref={headlineRef}
        className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.08] text-white mb-6"
      >
        Discover events that
        <br />
        move you forward
      </h1>
      <p
        ref={subtitleRef}
        className="text-white/80 text-base max-w-md mx-auto leading-relaxed mb-10"
      >
        Browse curated experiences, secure tickets instantly, and track
        everything from one dashboard.
      </p>
      <div ref={ctaRef} className="flex items-center justify-center gap-3">
        <Link href="#events">
          <GlassButton variant="white" size="lg">
            Browse Events
          </GlassButton>
        </Link>
        <Link href="/organizer/events/new">
          <GlassButton
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
          >
            Create Event
          </GlassButton>
        </Link>
      </div>
    </HeroGradient>
  );
}
