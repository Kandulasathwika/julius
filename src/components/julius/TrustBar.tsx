import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JULIUS_IMG } from "@/lib/julius-images";

const ITEMS = [
  {
    title: "Account-aware pricing",
    text: "Contract pricing visible at sign-in.",
    image: JULIUS_IMG.pricing,
  },
  {
    title: "Route and delivery clarity",
    text: "Cutoffs and next eligible delivery before you buy.",
    image: JULIUS_IMG.delivery,
  },
  {
    title: "Inventory transparency",
    text: "Substitutes and shortages surfaced early.",
    image: JULIUS_IMG.inventory,
  },
];

export function TrustBar() {
  return (
    <section className="border-t border-stone-200 bg-stone-50 py-12 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {ITEMS.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.06}>
              <article className="group rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:border-stone-300 transition-all duration-300">
                <div className="relative h-36 md:h-40 overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-js-navy/85 via-js-navy/20 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 right-4 font-[family-name:var(--font-js-serif)] font-bold text-lg text-white drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-stone-600 px-5 py-4 leading-relaxed">
                  {item.text}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
