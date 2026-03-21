import { HelperBar } from "@/components/julius/HelperBar";
import { Header } from "@/components/julius/Header";
import { InventoryAlertStrip } from "@/components/julius/InventoryAlertStrip";
import { Hero } from "@/components/julius/Hero";
import { PromoTiles } from "@/components/julius/PromoTiles";
import { FeaturedProductRows } from "@/components/julius/FeaturedProductRows";
import { InventoryAlerts } from "@/components/julius/InventoryAlerts";
import { TrustBar } from "@/components/julius/TrustBar";
import { BrandPartners } from "@/components/julius/BrandPartners";
import { Footer } from "@/components/julius/Footer";

export default function JuliusSilvertHome() {
  return (
    <div className="min-h-screen bg-js-canvas text-js-ink font-[family-name:var(--font-js-sans)] antialiased">
      <HelperBar />
      <Header />
      <InventoryAlertStrip />
      <main>
        <Hero />
        <PromoTiles />
        <FeaturedProductRows />
        <InventoryAlerts />
        <TrustBar />
        <BrandPartners />
      </main>
      <Footer />
    </div>
  );
}
