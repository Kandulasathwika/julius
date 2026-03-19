"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: "up" | "scale" | "left";
  delay?: number;
}

export function ScrollReveal({
  children,
  className,
  variant = "up",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass = {
    up: "reveal",
    scale: "reveal-scale",
    left: "reveal-left",
  }[variant];

  return (
    <div
      ref={ref}
      className={cn(variantClass, className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
