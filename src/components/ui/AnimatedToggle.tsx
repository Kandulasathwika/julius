"use client";

import { useTransition } from "react";

interface AnimatedToggleProps {
  isOn: boolean;
  onToggle: () => Promise<void>;
  labelOn?: string;
  labelOff?: string;
}

export function AnimatedToggle({
  isOn,
  onToggle,
  labelOn = "Live",
  labelOff = "Draft",
}: AnimatedToggleProps) {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    startTransition(async () => {
      await onToggle();
    });
  }

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className="flex items-center gap-2.5 group disabled:opacity-50"
    >
      <div
        className="toggle-track"
        data-state={isOn ? "on" : "off"}
      >
        <div className="toggle-thumb" />
      </div>
      <span className="text-xs text-zinc-500 group-hover:text-zinc-900 transition-colors duration-300">
        {isOn ? labelOn : labelOff}
      </span>
    </button>
  );
}
