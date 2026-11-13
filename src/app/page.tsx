import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import HeroBanner from "@/components/HeroBanner";
import CategoryTiles from "@/components/CategoryTiles";
import DealsStrip from "@/components/DealsStrip";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CategoryNav />
      <main className="flex-1">
        <HeroBanner />
        <CategoryTiles />
        <DealsStrip />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
