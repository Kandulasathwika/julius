"use client";

import Image from "next/image";
import { useRef } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { JULIUS_IMG } from "@/lib/julius-images";

interface Product {
  id: string;
  name: string;
  brand: string;
  itemNo: string;
  priceLabel: string;
  pack: string;
  image: string;
}

const DUROC: Product[] = [
  {
    id: "1",
    name: "Boneless pork butt, 4 x 15 lb",
    brand: "Compart",
    itemNo: "1816661",
    priceLabel: "$3.96/lb",
    pack: "4 x 15 lb",
    image: JULIUS_IMG.wagyu,
  },
  {
    id: "2",
    name: "Bone-in pork shoulder, 2 x 18 lb",
    brand: "Compart",
    itemNo: "1816672",
    priceLabel: "$2.89/lb",
    pack: "2 x 18 lb",
    image: JULIUS_IMG.partnerCompart,
  },
  {
    id: "3",
    name: "Pork tenderloin, 12 x 1.25 lb",
    brand: "Compart",
    itemNo: "1816688",
    priceLabel: "$5.12/lb",
    pack: "12 x 1.25 lb",
    image: JULIUS_IMG.heroBeef,
  },
  {
    id: "4",
    name: "St. Louis ribs, 12 racks",
    brand: "Compart",
    itemNo: "1816695",
    priceLabel: "$4.45/lb",
    pack: "Case",
    image: JULIUS_IMG.porkRibs,
  },
];

const PROTEINS: Product[] = [
  {
    id: "p1",
    name: "Choice beef flat iron, 20 x 8 oz",
    brand: "Carved Meat Co.",
    itemNo: "1027000",
    priceLabel: "$17.38/lb",
    pack: "20 x 8 oz",
    image: JULIUS_IMG.ribeye,
  },
  {
    id: "p2",
    name: "Beef tenderloin tips & tails, 2 x 5 lb",
    brand: "Carved Meat Co.",
    itemNo: "1027012",
    priceLabel: "$14.38/lb",
    pack: "2 x 5 lb",
    image: JULIUS_IMG.beefTips,
  },
  {
    id: "p3",
    name: "High choice beef filet steak, 20 x 8 oz",
    brand: "Carved Meat Co.",
    itemNo: "1027024",
    priceLabel: "$32.50/lb",
    pack: "20 x 8 oz",
    image: JULIUS_IMG.beefFilet,
  },
  {
    id: "p4",
    name: "High choice hanger steak, 20 x 8 oz",
    brand: "Carved Meat Co.",
    itemNo: "1027031",
    priceLabel: "$14.95/lb",
    pack: "20 x 8 oz",
    image: JULIUS_IMG.partnerCarved,
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group/card shrink-0 w-[260px] sm:w-[280px] rounded-xl border border-stone-200 bg-white shadow-sm hover:shadow-lg hover:border-stone-300 transition-all duration-300 flex flex-col overflow-hidden">
      <div className="relative aspect-square bg-stone-100 overflow-hidden">
        <Image
          src={product.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover/card:scale-105"
          sizes="280px"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 gap-3">
        <div>
          <h3 className="text-sm font-bold text-js-ink leading-snug">{product.name}</h3>
          <p className="text-[11px] font-bold uppercase tracking-wide text-stone-500 mt-1">
            {product.brand}
          </p>
          <p className="text-[11px] text-stone-500 mt-0.5">
            Item#: <span className="font-mono">{product.itemNo}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <span className="rounded-md border border-js-navy bg-js-navy text-white text-[10px] font-bold px-2 py-1 uppercase">
            Case
          </span>
          <span className="rounded-md border border-stone-300 text-stone-600 text-[10px] font-bold px-2 py-1 uppercase">
            PC
          </span>
        </div>
        <p className="text-sm font-bold text-js-ink">
          {product.priceLabel}{" "}
          <span className="font-normal text-stone-600 font-sans">{product.pack}</span>
        </p>
        <div className="mt-auto pt-2 flex items-center gap-2 flex-wrap">
          <label className="sr-only" htmlFor={`qty-${product.id}`}>
            Quantity
          </label>
          <input
            id={`qty-${product.id}`}
            type="text"
            inputMode="numeric"
            defaultValue="1"
            className="w-12 h-10 rounded-lg border border-stone-300 text-center text-sm font-mono text-js-ink"
          />
          <button
            type="button"
            className="h-10 px-5 rounded-lg bg-js-navy text-white text-sm font-semibold hover:bg-js-navy-deep transition-colors"
          >
            Add
          </button>
          <button
            type="button"
            className="h-10 w-10 rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-50 flex items-center justify-center"
            aria-label="Add to list"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </button>
          <button
            type="button"
            className="h-10 w-10 rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-50 flex items-center justify-center"
            aria-label="Favorite"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

function ProductRow({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <div className="mb-14 md:mb-16">
      <div className="flex items-end justify-between gap-4 mb-5">
        <h2 className="font-[family-name:var(--font-js-serif)] text-xl md:text-2xl font-bold text-js-ink">
          {title}
        </h2>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => scroll(-1)}
            className="w-10 h-10 rounded-full border border-stone-300 bg-white text-js-ink hover:bg-stone-50 flex items-center justify-center"
            aria-label="Previous products"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            className="w-10 h-10 rounded-full border border-stone-300 bg-white text-js-ink hover:bg-stone-50 flex items-center justify-center"
            aria-label="Next products"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={scroller}
        className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((p) => (
          <div key={p.id} className="snap-start">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeaturedProductRows() {
  return (
    <section
      id="featured"
      className="bg-js-paper border-y border-stone-200 py-12 md:py-16 font-[family-name:var(--font-js-sans)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-500 mb-10">
            Featured on your homepage
          </p>
        </ScrollReveal>
        <ProductRow title="New arrival: Compart Duroc pork" products={DUROC} />
        <ProductRow title="Center of the plate proteins" products={PROTEINS} />
      </div>
    </section>
  );
}
