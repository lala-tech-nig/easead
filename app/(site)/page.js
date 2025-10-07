import HeroCarousel from "@/components/HeroCarousel";
import StepsSection from "@/components/StepsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  return (
    <div>
      <HeroCarousel />
      <StepsSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
}
