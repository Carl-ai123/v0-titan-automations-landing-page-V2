"use client"

const CALENDLY_URL = "https://calendly.com/carl-titan-automations/titan-onboarding-call"
const openCalendly = () => {
  if (typeof window !== "undefined") {
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL })
  }
}

const TIERS = [
  {
    name:    "Automation Audit",
    price:   "Free",
    sub:     "No obligation",
    bullets: [
      "20-minute discovery call",
      "We map your biggest manual bottleneck",
      "You get a clear picture of what to automate first",
      "Written summary of findings",
    ],
    cta:     "Book Free Audit",
    accent:  false,
  },
  {
    name:    "Project Build",
    price:   "From £1,200",
    sub:     "Fixed scope · Fixed price",
    bullets: [
      "One system, fully built and connected",
      "Live in 14 days",
      "Tested against real scenarios",
      "Full handover and documentation",
      "You own everything — no platform lock-in",
    ],
    cta:     "Book Free Audit",
    accent:  true,
  },
  {
    name:    "Monthly Optimisation",
    price:   "From £150/mo",
    sub:     "Optional retainer",
    bullets: [
      "Performance monitoring",
      "Ongoing improvements and tuning",
      "New automation additions",
      "Priority support",
    ],
    cta:     "Book Free Audit",
    accent:  false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14 md:mb-20 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent mb-5">
            <span className="w-5 h-px bg-accent" aria-hidden="true" />
            Pricing
          </span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-hi mb-5">
            Clear pricing. No retainer traps.
          </h2>
          <p className="text-lg text-lo leading-relaxed">
            Start with a free audit. Pay a fixed price for the build. Keep the system forever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-7 flex flex-col gap-6 ${
                tier.accent
                  ? "bg-elevated border border-accent/35 shadow-[0_0_60px_rgba(0,157,255,0.07)]"
                  : "bg-page border border-white/[0.08]"
              }`}
            >
              {tier.accent && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 w-2/5 h-px bg-gradient-to-r from-transparent via-accent to-transparent" aria-hidden="true" />
              )}

              <div>
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-dim mb-3">{tier.name}</p>
                <div className="flex items-end gap-2 mb-1">
                  <span className="font-display text-3xl font-bold text-hi tracking-tight">{tier.price}</span>
                </div>
                <p className="text-xs text-dim">{tier.sub}</p>
              </div>

              <ul className="space-y-3 flex-1">
                {tier.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-lo">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                      <path d="M2.5 7l3 3 6-6" stroke="#009DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <button
                onClick={openCalendly}
                className={`w-full py-3 rounded-full text-sm font-semibold transition-all duration-150 hover:-translate-y-px ${
                  tier.accent
                    ? "bg-accent text-page hover:bg-accent-deep"
                    : "border border-white/15 text-hi hover:border-white/30 hover:bg-white/[0.04]"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-dim text-center">
          Complex multi-system builds are scoped after the audit. Exact price depends on what needs building.
        </p>
      </div>
    </section>
  )
}
