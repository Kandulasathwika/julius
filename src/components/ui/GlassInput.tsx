"use client";

import { cn } from "@/lib/utils";
import { forwardRef, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const GlassInput = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, onFocus, onBlur, ...props }, ref) => {
    const [focused, setFocused] = useState(false);

    return (
      <div>
        {label && (
          <label
            className={cn(
              "text-xs block mb-1.5 transition-colors duration-300",
              focused ? "text-zinc-900" : "text-zinc-500"
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full bg-white border-b py-2.5 text-sm text-zinc-900 placeholder:text-zinc-300 transition-all duration-500",
            focused ? "border-zinc-900" : "border-zinc-200",
            className
          )}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          {...props}
        />
      </div>
    );
  }
);

GlassInput.displayName = "GlassInput";
