import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { CreditProfiles } from "@/components/CreditProfiles";
import { ProductCards } from "@/components/ProductCards";
import { ProcessSection } from "@/components/ProcessSection";
import { StoreSection } from "@/components/StoreSection";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <TrustSection />
        <CreditProfiles />
        <ProductCards />
        <ProcessSection />
        <StoreSection />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
