import Navbar from "@/components/custom/navbar";
import HeroSection from "@/components/custom/hero-section";
import FeaturesSection from "@/components/custom/features-section";
import PricingSection from "@/components/custom/pricing-section";
import TestimonialsSection from "@/components/custom/testimonials-section";
import Footer from "@/components/custom/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
