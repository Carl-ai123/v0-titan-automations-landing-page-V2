import { FloatingNav } from "@/components/floating-nav"
import { HeroSection } from "@/components/hero-section"
import { MarqueeStrip } from "@/components/marquee-strip"
import { BeforeAfterSection } from "@/components/before-after-section"
import { HowItWorks } from "@/components/how-it-works"
import { ServicesSection } from "@/components/services-section"
import { AutomationFlow } from "@/components/automation-flow"
import { IndustriesSection } from "@/components/industries-section"
import { ResultsSection } from "@/components/results-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollAnimations } from "@/components/scroll-animations"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://titan-automations.com/#business',
      name: 'Titan Automations',
      description: 'AI automation agency specialising in websites, booking systems, CRM pipelines, chatbots, and lead generation for businesses in Kent and the South East.',
      url: 'https://titan-automations.com',
      email: 'info@titan-automations.com',
      telephone: '+447464256627',
      address: { '@type': 'PostalAddress', addressRegion: 'Kent', addressCountry: 'GB' },
      areaServed: ['Kent', 'South East England', 'United Kingdom'],
      priceRange: '££',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://titan-automations.com/#faq',
      mainEntity: [
        { '@type': 'Question', name: 'What exactly do you build?', acceptedAnswer: { '@type': 'Answer', text: 'Websites, booking systems, CRM automations, AI chatbots, lead generation pipelines, review systems, and custom integrations.' } },
        { '@type': 'Question', name: 'How long does it take?', acceptedAnswer: { '@type': 'Answer', text: 'Most systems go live within 14 days of our first call.' } },
        { '@type': 'Question', name: 'Do I own everything?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every website, workflow and system is yours. No lock-in, no platform dependency.' } },
        { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: "Project builds start from £1,200. Monthly retainers from £150/month." } },
      ],
    },
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden pb-16 md:pb-0">
      {/* JSON-LD — safe in Server Component, not affected by React 19 client hydration */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollAnimations />
      <FloatingNav />
      <StickyMobileCTA />
      <div className="flex flex-col">
        <HeroSection />
        <MarqueeStrip />
        <BeforeAfterSection />
        <ServicesSection />
        <AutomationFlow />
        <ResultsSection />
        <TestimonialsSection />
        <HowItWorks />
        <IndustriesSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
