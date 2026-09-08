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
  "@type": "FAQPage",
  "@id": "https://www.titan-automations.com/#faq",
  mainEntity: [
    { "@type": "Question", name: "What exactly do you automate?", acceptedAnswer: { "@type": "Answer", text: "Lead capture, AI qualification, CRM pipelines, follow-up sequences, appointment booking, review requests, missed call recovery, and internal admin automations." } },
    { "@type": "Question", name: "How long does it take to build?", acceptedAnswer: { "@type": "Answer", text: "Our typical target is 14 days for a scoped single-system build once content and access are ready." } },
    { "@type": "Question", name: "Do I own everything you build?", acceptedAnswer: { "@type": "Answer", text: "You own the delivered code and workflows. Hosting, software and usage fees may apply and are explained when we scope the work." } },
    { "@type": "Question", name: "What does it cost?", acceptedAnswer: { "@type": "Answer", text: "The audit is free and there is no obligation. Pricing is scoped to your specific build and discussed at the end of the audit call." } },
    { "@type": "Question", name: "What happens on the audit call?", acceptedAnswer: { "@type": "Answer", text: "A 30-minute conversation where we map your biggest bottleneck and tell you what to automate first. No obligation." } },
  ],
}

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
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
