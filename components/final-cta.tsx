"use client"

const CALENDLY_URL = "https://calendly.com/carl-titan-automations/titan-onboarding-call"
const openCalendly = () => window.Calendly?.initPopupWidget({ url: CALENDLY_URL })

const steps = [
  { number: "01", label: "We review your business", detail: "Tell us what you do — we'll look at your current tools and workflows." },
  { number: "02", label: "20-min discovery call", detail: "No pitch, no pressure. Just a clear picture of what we'd build for you." },
  { number: "03", label: "Fixed quote in 48hrs", detail: "A written scope and price before anything starts — zero ambiguity." },
]

export function FinalCTA() {
  return (
    <section id="cta" className="bg-light dark:bg-dark py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center fade-up-section">
        {/* Accent rule */}
        <div className="w-12 h-px bg-accent mx-auto mb-12" />
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-light dark:text-white tracking-[-0.03em] mb-4 md:mb-6">
          Ready to see what&apos;s possible?
        </h2>
        <p className="text-base md:text-lg text-muted mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
          20 minutes. No pitch. We&apos;ll show you exactly what we&apos;d build for your specific business — for free.
        </p>

        {/* 3-step process */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10 md:mb-12 text-left">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl p-5"
            >
              <div className="text-[10px] tracking-[0.15em] uppercase text-accent font-medium mb-2">
                {step.number}
              </div>
              <div className="text-sm font-medium text-text-light dark:text-white mb-1 leading-snug">
                {step.label}
              </div>
              <div className="text-xs text-muted leading-relaxed">
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={openCalendly}
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-accent rounded-full hover:bg-accent/90 transition-colors hover:-translate-y-px active:translate-y-0"
        >
          Book Your Free Demo
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <p className="mt-4 text-xs text-muted/70">
          We take on 3–4 new clients per month — currently 1 slot open.
        </p>

        {/* GDPR note */}
        <p className="mt-8 text-xs text-muted/70 max-w-sm mx-auto leading-relaxed">
          Your data is handled in line with UK GDPR. We never share your details with third parties.
        </p>
      </div>
    </section>
  )
}
