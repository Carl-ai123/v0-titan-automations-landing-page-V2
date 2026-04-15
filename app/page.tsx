import { FloatingNav } from "@/components/floating-nav"
import { HeroSection } from "@/components/hero-section"
import { MarqueeStrip } from "@/components/marquee-strip"
import { HowItWorks } from "@/components/how-it-works"
import { ServicesSection } from "@/components/services-section"
import { AutomationFlow } from "@/components/automation-flow"
import { IndustriesSection } from "@/components/industries-section"
import { ResultsSection } from "@/components/results-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { ScrollAnimations } from "@/components/scroll-animations"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <ScrollAnimations />
      <FloatingNav />
      <StickyMobileCTA />
      <div className="flex flex-col">
        <HeroSection />
        <MarqueeStrip />
        <HowItWorks />
        <ServicesSection />
        <AutomationFlow />
        <IndustriesSection />
        <ResultsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </div>
      <Footer />
    </main>
  )
}
