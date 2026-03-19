const FOOTER_COLUMNS = [
  {
    heading: "Ordering",
    links: [
      "Browse Catalog",
      "Requisition Lists",
      "Quick Reorder",
      "Delivery Schedule",
      "Order Guides",
    ],
  },
  {
    heading: "Support",
    links: [
      "Help Center",
      "Contact Your Rep",
      "Returns & Credits",
      "Product Specifications",
    ],
  },
  {
    heading: "Account",
    links: [
      "My Account",
      "Order History",
      "Invoices & Statements",
      "Payment Methods",
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-js-bg">
      {/* Top separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-js-border/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <a href="#" className="inline-block mb-4">
              <span className="text-js-text font-extrabold text-sm tracking-[0.25em] uppercase">
                Julius Silvert
              </span>
              <span className="block text-[9px] tracking-[0.35em] uppercase text-js-text-muted font-medium mt-[-1px]">
                Foodservice Distribution
              </span>
            </a>
            <p className="text-[13px] text-js-text-muted leading-relaxed max-w-[280px] mb-6">
              Premium B2B food distribution for chefs, restaurants, hotels, and specialty buyers across the Northeast.
            </p>
            <div className="space-y-2">
              <a href="#" className="flex items-center gap-2 text-xs text-js-text-secondary hover:text-js-accent transition-colors duration-200 group">
                <svg className="w-3.5 h-3.5 text-js-text-muted group-hover:text-js-accent transition-colors duration-200" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                1-800-SILVERT
              </a>
              <a href="#" className="flex items-center gap-2 text-xs text-js-text-secondary hover:text-js-accent transition-colors duration-200 group">
                <svg className="w-3.5 h-3.5 text-js-text-muted group-hover:text-js-accent transition-colors duration-200" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                orders@juliussilvert.com
              </a>
              <p className="flex items-center gap-2 text-xs text-js-text-muted">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Mon - Sat, 5:00 AM - 8:00 PM EST
              </p>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading} className="md:col-span-2 lg:col-span-2">
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-js-text-muted mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-js-text-secondary hover:text-js-text transition-colors duration-200"
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

      {/* Bottom bar */}
      <div className="border-t border-js-border/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-js-text-muted">
            2026 Julius Silvert Distribution, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[11px] text-js-text-muted hover:text-js-text-secondary transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-[11px] text-js-text-muted hover:text-js-text-secondary transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="text-[11px] text-js-text-muted hover:text-js-text-secondary transition-colors duration-200">
              Accessibility
            </a>
            <a href="#" className="text-[11px] text-js-text-muted hover:text-js-text-secondary transition-colors duration-200">
              FDA Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
