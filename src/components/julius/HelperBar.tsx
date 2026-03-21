import Image from "next/image";
import { JULIUS_IMG } from "@/lib/julius-images";

export function HelperBar() {
  return (
    <div className="bg-gradient-to-r from-violet-50/95 via-stone-50/90 to-amber-50/40 border-b border-stone-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[13px]">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative shrink-0 w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-md ring-offset-2 ring-offset-violet-50/50">
            <Image
              src={JULIUS_IMG.chefAvatar}
              alt=""
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <p className="text-js-navy leading-snug">
            <span className="font-semibold text-stone-900">Hi! Your kitchen team</span>
            <span className="text-stone-600">
              {" "}
              - Let us know if you need help with your order.
            </span>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 sm:pl-2">
          <span className="text-stone-600 hidden sm:inline-flex items-center gap-1.5">
            <span className="relative w-2 h-2 rounded-full bg-emerald-500 shrink-0" aria-hidden />
            Next cutoff:{" "}
            <span className="font-mono font-semibold text-js-navy">Today 2:00 PM EST</span>
          </span>
          <a
            href="#promo-tiles"
            className="font-semibold text-js-navy hover:text-amber-700 underline-offset-4 hover:underline transition-colors"
          >
            My Order Guide
          </a>
          <a
            href="#inventory-signals"
            className="font-semibold text-js-navy hover:text-amber-700 underline-offset-4 hover:underline transition-colors"
          >
            Requisition lists
          </a>
        </div>
      </div>
      <div className="h-0.5 bg-gradient-to-r from-js-redline via-js-redline to-amber-600/80" aria-hidden />
    </div>
  );
}
