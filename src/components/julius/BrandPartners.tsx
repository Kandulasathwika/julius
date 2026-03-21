import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JULIUS_IMG } from "@/lib/julius-images";

const PARTNERS = [
  { name: "Boiron", tag: "Frozen fruit", image: JULIUS_IMG.partnerBoiron },
  { name: "Bridor", tag: "Bakery", image: JULIUS_IMG.partnerBridor },
  { name: "Kerrygold", tag: "Dairy", image: JULIUS_IMG.partnerKerrygold },
  { name: "Kikkoman", tag: "Pantry", image: JULIUS_IMG.partnerKikkoman },
  { name: "Jasper Hill", tag: "Cheese", image: JULIUS_IMG.partnerJasper },
  { name: "Point Reyes", tag: "Cheese", image: JULIUS_IMG.partnerPointReyes },
  { name: "Compart", tag: "Pork", image: JULIUS_IMG.partnerCompart },
  { name: "Carved Meat Co.", tag: "Beef", image: JULIUS_IMG.partnerCarved },
];

export function BrandPartners() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 font-[family-name:var(--font-js-sans)] bg-gradient-to-b from-white to-stone-50/80">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-4">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-700/90 mb-2">
            Trusted suppliers
          </p>
          <h2 className="font-[family-name:var(--font-js-serif)] text-2xl md:text-4xl font-bold text-js-ink leading-tight">
            Our brand partners
          </h2>
          <p className="text-stone-600 text-sm md:text-base mt-3 leading-relaxed">
            Curated producers we stand behind. Same partners your kitchen already trusts.
          </p>
        </div>
      </ScrollReveal>
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {PARTNERS.map((p, i) => (
          <ScrollReveal key={p.name} delay={i * 0.04}>
            <a
              href="#"
              className="group block rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-js-navy/25 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-js-navy/90 via-js-navy/25 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-[family-name:var(--font-js-serif)] text-lg md:text-xl font-bold text-white drop-shadow-md">
                    {p.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-white/85 font-bold mt-1">
                    {p.tag}
                  </p>
                </div>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
