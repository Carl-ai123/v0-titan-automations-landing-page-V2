import { FloatingNav }        from "@/components/floating-nav"
import { HeroSection }        from "@/components/hero-section"
import { MarqueeStrip }       from "@/components/marquee-strip"
import { BeforeAfterSection } from "@/components/before-after-section"
import { ServicesSection }    from "@/components/services-section"
import { IndustriesSection }  from "@/components/industries-section"
import { AutomationFlow }     from "@/components/automation-flow"
import { SavingsEstimator }   from "@/components/savings-estimator"
import { ResultsSection }     from "@/components/results-section"
import { HowItWorks }         from "@/components/how-it-works"
import { FAQSection }         from "@/components/faq-section"
import { FinalCTA }           from "@/components/final-cta"
import { Footer }             from "@/components/footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id":   "https://titan-automations.com/#business",
      name:    "Titan Automations",
      description: "AI automation agency building systems that capture leads, automate follow-ups, manage bookings, and remove manual admin for UK service businesses.",
      url:       "https://titan-automations.com",
      email:     "info@titan-automations.com",
      telephone: "+447464256627",
      address:   { "@type": "PostalAddress", addressRegion: "Kent", addressCountry: "GB" },
      areaServed: ["United Kingdom", "Kent", "South East England"],
      priceRange: "££",
    },
    {
      "@type": "FAQPage",
      "@id":   "https://titan-automations.com/#faq",
      mainEntity: [
        { "@type": "Question", name: "What exactly do you automate?",   acceptedAnswer: { "@type": "Answer", text: "Lead capture, AI qualification, CRM pipelines, follow-up sequences, appointment booking, review requests, missed call recovery, and internal admin automations." } },
        { "@type": "Question", name: "How long does it take to build?", acceptedAnswer: { "@type": "Answer", text: "Most single-system builds go live within 14 days of the first call." } },
        { "@type": "Question", name: "Do I own everything you build?",  acceptedAnswer: { "@type": "Answer", text: "Yes. Every system is fully yours. No platform lock-in, no recurring licence." } },
        { "@type": "Question", name: "What does it cost?",              acceptedAnswer: { "@type": "Answer", text: "The audit is free and there is no obligation. Pricing is scoped to your specific build and discussed at the end of the audit call." } },
        { "@type": "Question", name: "What happens on the audit call?", acceptedAnswer: { "@type": "Answer", text: "A 20-minute conversation where we map your biggest bottleneck and tell you what to automate first. No obligation." } },
      ],
    },
  ],
}

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
<FloatingNav />
      <div className="flex flex-col">
        <HeroSection />
        <MarqueeStrip />
        <BeforeAfterSection />
        <ServicesSection />
        <IndustriesSection />
        <AutomationFlow />
        <SavingsEstimator />
        <ResultsSection />
        <HowItWorks />
        <FAQSection />
        <FinalCTA />
      </div>
      <Footer />
    </main>
  )
}
