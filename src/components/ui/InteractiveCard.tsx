"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface InteractiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tilt?: boolean;
  lift?: boolean;
  glow?: boolean;
}

export function InteractiveCard({
  children,
  tilt = true,
  lift = true,
  glow = false,
  className,
  ...props
}: InteractiveCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setStyle({
      transform: `perspective(800px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) ${lift ? "translateY(-4px)" : ""}`,
      transition: "transform 0.15s ease-out",
    });
  }

  function handleMouseLeave() {
    setStyle({
      transform: "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)",
      transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
    });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={cn(
        "will-change-transform",
        lift && !tilt && "hover-lift",
        glow && "hover-glow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
