import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import { JULIUS_IMG } from "@/lib/julius-images";

const TILES = [
  {
    id: "exclusives",
    title: "Silvert exclusives",
    subtitle: "Shop items only available here.",
    href: "#",
    image: JULIUS_IMG.tileExclusive,
    variant: "split" as const,
  },
  {
    id: "guide",
    title: "My Order Guide",
    subtitle: "Your standing lists and par levels in one place.",
    href: "#promo-tiles",
    image: JULIUS_IMG.tileGuide,
    variant: "overlay" as const,
  },
  {
    id: "family",
    title: "Family meal specials",
    subtitle: "Value packs for catering and take-home programs.",
    href: "#",
    image: JULIUS_IMG.tileFamily,
    variant: "overlay" as const,
  },
];

export function PromoTiles() {
  return (
    <section
      id="promo-tiles"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 font-[family-name:var(--font-js-sans)]"
    >
      <ScrollReveal>
        <h2 className="font-[family-name:var(--font-js-serif)] text-2xl md:text-3xl font-bold text-js-ink mb-8">
          Shop smarter
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {TILES.map((tile, idx) => (
          <ScrollReveal key={tile.id} delay={idx * 0.08}>
            <a
              href={tile.href}
              className="group block h-full min-h-[220px] md:min-h-[260px] rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-md shadow-stone-200/50 hover:shadow-lg hover:border-stone-300 transition-all duration-300"
            >
              {tile.variant === "split" ? (
                <div className="flex h-full min-h-[220px]">
                  <div className="relative w-2/5 min-h-[200px]">
                    <Image
                      src={tile.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 200px"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center p-6 bg-js-navy text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-js-accent mb-2">
                      Only at Julius Silvert
                    </p>
                    <h3 className="font-[family-name:var(--font-js-serif)] text-xl font-bold leading-tight">
                      {tile.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/80">{tile.subtitle}</p>
                    <span className="mt-4 text-sm font-semibold text-js-accent inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Shop now
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative h-full min-h-[220px]">
                  <Image
                    src={tile.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-[family-name:var(--font-js-serif)] text-2xl font-bold text-white">
                      {tile.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/85">{tile.subtitle}</p>
                    <span className="mt-3 text-sm font-semibold text-js-accent">Open</span>
                  </div>
                </div>
              )}
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
