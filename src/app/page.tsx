import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedListings } from "@/components/FeaturedListings";
import { AboutSection } from "@/components/AboutSection";
import { NewConstructions } from "@/components/NewConstructions";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturedListings />
        <AboutSection />
        <NewConstructions />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
