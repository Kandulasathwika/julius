import Image from "next/image";
import { JULIUS_IMG } from "@/lib/julius-images";

const FOOTER_COLUMNS = [
  {
    heading: "Ordering",
    links: [
      "Browse catalog",
      "Requisition lists",
      "Quick reorder",
      "Delivery schedule",
      "Order guides",
    ],
  },
  {
    heading: "Support",
    links: [
      "Help center",
      "Contact your rep",
      "Returns and credits",
      "Product specifications",
    ],
  },
  {
    heading: "Account",
    links: [
      "My account",
      "Order history",
      "Invoices and statements",
      "Payment methods",
    ],
  },
  {
    heading: "Contact",
    links: [
      "215-455-1600",
      "orders@juliussilvert.com",
      "Mon - Sat, 5:00 AM - 8:00 PM EST",
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-js-navy-deep text-white font-[family-name:var(--font-js-sans)] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <Image
          src={JULIUS_IMG.footerTexture}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-js-navy-deep via-js-navy-deep/95 to-js-navy-deep pointer-events-none" />
      <div className="h-px bg-white/10 relative z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-4">
            <a href="#" className="inline-block mb-4">
              <p className="font-[family-name:var(--font-js-serif)] text-[10px] tracking-[0.25em] text-white/60 uppercase">
                Est. 1913
              </p>
              <p className="font-[family-name:var(--font-js-serif)] text-2xl font-bold tracking-tight">
                Julius Silvert
              </p>
            </a>
            <p className="text-sm text-white/70 leading-relaxed max-w-[280px] mb-6">
              Wholesale food distribution for chefs, restaurants, hotels, and specialty buyers.
            </p>
            <a
              href="tel:2154551600"
              className="inline-flex items-center gap-2 text-lg font-bold text-white hover:text-js-accent transition-colors"
            >
              <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              215-455-1600
            </a>
            <div className="flex gap-3 mt-6">
              {["Instagram", "Facebook", "LinkedIn"].map((net) => (
                <a
                  key={net}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-bold text-white/80 hover:bg-white/10 transition-colors"
                  aria-label={net}
                >
                  {net.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading} className="md:col-span-2">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            2026 Julius Silvert. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a href="#" className="text-xs text-white/50 hover:text-white/80 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-white/50 hover:text-white/80 transition-colors">
              Terms
            </a>
            <a href="#" className="text-xs text-white/50 hover:text-white/80 transition-colors">
              Accessibility
            </a>
            <a href="#" className="text-xs text-white/50 hover:text-white/80 transition-colors">
              FDA compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
