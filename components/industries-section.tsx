export function IndustriesSection() {
  const industries = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z" />
        </svg>
      ),
      title: "Dental & Healthcare",
      description: "Booking systems, patient recall, review automation and GDC-compliant websites.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      title: "Trades & Construction",
      description: "Lead capture, quote follow-up automation and job management pipelines.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 7h-9M14 17H5" />
          <circle cx="17" cy="17" r="3" />
          <circle cx="7" cy="7" r="3" />
        </svg>
      ),
      title: "Professional Services",
      description: "CRM automation, client onboarding sequences and document workflows.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3h18v18H3zM3 9h18M9 21V9" />
        </svg>
      ),
      title: "Hospitality & Retail",
      description: "Reservation systems, loyalty automations and customer re-engagement.",
    },
  ]

  return (
    <section className="bg-light py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 fade-up-section">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3 md:mb-4">
            Industries
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-light text-balance">
            Built for businesses that are serious about growth.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 fade-up-section">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-card-light border border-[rgba(0,0,0,0.08)] rounded-xl p-5 sm:p-7"
            >
              <div className="w-10 h-10 mb-4 text-accent">{industry.icon}</div>
              <h3 className="font-display text-lg font-semibold text-text-light mb-2">
                {industry.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
