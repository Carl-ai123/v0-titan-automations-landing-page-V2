const before = [
  "Answering the same enquiry questions manually, every day",
  "Chasing leads who never replied to your first message",
  "Booking appointments over the phone or back-and-forth texts",
  "Sending follow-ups when you remember — which isn't often",
  "Forgetting to ask for reviews until it's too late",
  "Paying for tools that don't talk to each other",
]

const after = [
  "AI responds to enquiries instantly — even at 2am",
  "Leads are qualified, enriched, and followed up automatically",
  "Clients book online and it lands straight in your calendar",
  "Follow-up sequences run themselves from lead to close",
  "Review requests go out automatically after every job",
  "Everything connected — one system, zero overlap",
]

export function BeforeAfterSection() {
  return (
    <section className="bg-light dark:bg-dark py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16 fade-up-section">
          <p className="text-xs tracking-[0.2em] uppercase text-muted font-medium mb-4">
            The problem
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-light dark:text-white tracking-[-0.03em] max-w-2xl mx-auto">
            Most service businesses run on the owner.
          </h2>
          <p className="text-base text-muted mt-4 max-w-xl mx-auto leading-relaxed">
            That works until it caps your growth. Here&apos;s what running on a system looks like instead.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-3 fade-up-section">

          {/* Before */}
          <div className="bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 rounded-full bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.06)] flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span className="text-sm font-medium text-muted uppercase tracking-[0.12em]">Right now</span>
            </div>
            <ul className="space-y-4">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-muted/40 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-sm text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-[rgba(37,99,235,0.03)] dark:bg-[rgba(37,99,235,0.06)] border border-accent/20 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium text-accent uppercase tracking-[0.12em]">After Titan</span>
            </div>
            <ul className="space-y-4">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-accent/60 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-light dark:text-white leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
