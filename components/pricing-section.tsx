const tiers = [
  {
    name: "Project Build",
    price: "From £1,200",
    period: "one-off",
    description: "A fully built system handed over to you. Websites, automations, chatbots — scoped, built, and deployed.",
    features: [
      "Fixed quote before we start",
      "Delivered in 14 days or less",
      "Full ownership — no lock-in",
      "30-day post-launch support",
    ],
    cta: "Get a quote",
    highlight: false,
  },
  {
    name: "Monthly Retainer",
    price: "From £150",
    period: "per month",
    description: "Ongoing automation management, improvements, and new builds — everything running and evolving with your business.",
    features: [
      "Everything in Project Build",
      "Unlimited small change requests",
      "Monthly strategy review",
      "Priority response time",
    ],
    cta: "Book a call",
    highlight: true,
    badge: "Most popular",
  },
  {
    name: "Custom",
    price: "Let's talk",
    period: "",
    description: "Multi-system builds, API integrations, team automation training, or anything that doesn't fit a standard scope.",
    features: [
      "Bespoke scoping session",
      "Multi-workflow systems",
      "Team training & documentation",
      "Dedicated support channel",
    ],
    cta: "Get in touch",
    highlight: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-light dark:bg-dark py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-16 fade-up-section">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3 md:mb-4">
            Pricing
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-light dark:text-white tracking-[-0.03em] text-balance">
            Clear pricing.<br className="hidden sm:block" /> No surprises.
          </h2>
          <p className="text-base text-muted max-w-lg mt-4 leading-relaxed">
            Fixed quotes before any work starts. You always know exactly what you're getting and what it costs.
          </p>
        </div>

        {/* Tiers grid */}
        <div className="grid md:grid-cols-3 gap-3 fade-up-section">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl p-6 sm:p-8 flex flex-col ${
                tier.highlight
                  ? "bg-card-light dark:bg-transparent ring-1 ring-[rgba(0,0,0,0.08)] dark:ring-[rgba(255,255,255,0.08)] border-l-2 border-l-accent"
                  : "bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,0,0,0.14)] dark:hover:border-[rgba(255,255,255,0.14)] transition-colors duration-200"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent text-white">
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Tier name */}
              <div className="text-[10px] tracking-[0.15em] uppercase text-muted font-medium mb-4">
                {tier.name}
              </div>

              {/* Price */}
              <div className="mb-1">
                <span className="font-display text-3xl sm:text-4xl font-bold text-text-light dark:text-white tracking-[-0.03em]">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-sm text-muted ml-1.5">{tier.period}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed mt-3 mb-6">
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 text-accent shrink-0 mt-0.5"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l3.5 3.5L13 4" />
                    </svg>
                    <span className="text-sm text-muted leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="mailto:carl@titan-automations.com?subject=Pricing Enquiry"
                className={`w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full transition-colors ${
                  tier.highlight
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "border border-[rgba(0,0,0,0.15)] dark:border-[rgba(255,255,255,0.15)] text-text-light dark:text-white hover:border-[rgba(0,0,0,0.3)] dark:hover:border-[rgba(255,255,255,0.3)]"
                }`}
              >
                {tier.cta}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-muted mt-8 fade-up-section">
          All prices exclude VAT. Fixed quotes provided before any work begins — no surprises, no hidden fees.
        </p>
      </div>
    </section>
  )
}
