"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "danger" | "white";
  size?: "xs" | "sm" | "md" | "lg";
}

export const GlassButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium select-none press-scale",
          "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          {
            "bg-zinc-900 text-white hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/10 rounded-md":
              variant === "default",
            "bg-transparent text-zinc-900 border border-zinc-200 hover:border-zinc-400 hover:shadow-sm rounded-md":
              variant === "outline",
            "bg-transparent text-zinc-500 hover:text-zinc-900":
              variant === "ghost",
            "bg-white text-zinc-900 hover:bg-zinc-50 hover:shadow-lg rounded-md":
              variant === "white",
            "text-danger hover:text-danger/80":
              variant === "danger",
          },
          {
            "px-2.5 py-1 text-[11px]": size === "xs",
            "px-3.5 py-1.5 text-xs": size === "sm",
            "px-5 py-2 text-sm": size === "md",
            "px-6 py-2.5 text-sm": size === "lg",
          },
          "disabled:opacity-30 disabled:pointer-events-none",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

GlassButton.displayName = "GlassButton";
