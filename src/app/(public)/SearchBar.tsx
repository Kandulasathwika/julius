"use client";

import { useState, useRef } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="max-w-xl mx-auto">
      <div
        className={`flex items-center border-b transition-all duration-500 ${
          focused
            ? "border-zinc-900"
            : "border-zinc-200"
        }`}
      >
        <svg
          className={`w-4 h-4 mr-3 shrink-0 transition-colors duration-500 ${
            focused ? "text-zinc-900" : "text-zinc-300"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search events, locations, or organizers..."
          className="flex-1 bg-transparent py-3 text-sm text-zinc-900 placeholder:text-zinc-300 outline-none"
        />
        {!focused && !query && (
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] text-zinc-300 bg-zinc-50 border border-zinc-100 rounded font-mono transition-opacity duration-300">
            Cmd K
          </kbd>
        )}
      </div>
    </div>
  );
}
