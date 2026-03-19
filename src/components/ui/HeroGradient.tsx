"use client";

import { useRef, useCallback } from "react";

interface HeroGradientProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroGradient({ children, className }: HeroGradientProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!spotlightRef.current) return;
      const rect = e.currentTarget.getBoundingClientRect();
      spotlightRef.current.style.left = `${e.clientX - rect.left}px`;
      spotlightRef.current.style.top = `${e.clientY - rect.top}px`;
    },
    []
  );

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`hero-gradient bg-gradient-to-br from-orange-500 via-red-400 to-orange-400 ${className ?? ""}`}
    >
      <div ref={spotlightRef} className="hero-spotlight" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
