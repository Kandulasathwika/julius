import { Header } from "@/components/julius/Header";
import { Hero } from "@/components/julius/Hero";
import { QuickActions } from "@/components/julius/QuickActions";
import { InventoryAlerts } from "@/components/julius/InventoryAlerts";
import { CategoryBrowse } from "@/components/julius/CategoryBrowse";
import { ValueProps } from "@/components/julius/ValueProps";
import { Footer } from "@/components/julius/Footer";

export default function JuliusSilvertHome() {
  return (
    <div className="min-h-screen bg-js-bg text-js-text">
      <Header />
      <main>
        <Hero />
        <QuickActions />
        <InventoryAlerts />
        <CategoryBrowse />
        <ValueProps />
      </main>
      <Footer />
    </div>
  );
}
