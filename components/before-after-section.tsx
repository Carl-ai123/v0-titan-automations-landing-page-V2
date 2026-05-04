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

        {/* Header — left-aligned, editorial */}
        <div className="mb-12 md:mb-20 fade-up-section">
          <p className="text-xs tracking-[0.2em] uppercase text-muted font-medium mb-5">
            The problem
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-text-light dark:text-white tracking-[-0.04em] leading-[1.1] max-w-3xl">
            Most service businesses cap out. The owner is the bottleneck.
          </h2>
          <p className="text-base text-muted mt-5 max-w-xl leading-relaxed">
            If you disappeared for two weeks, would the business keep running? If not — that&apos;s the problem we fix.
          </p>
        </div>

        {/* Comparison — editorial two-column */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 fade-up-section">

          {/* Before — red treatment */}
          <div className="ring-1 ring-[rgba(239,68,68,0.15)] dark:ring-[rgba(239,68,68,0.15)] border-l-2 border-l-red-500 rounded-2xl p-6 sm:p-8 bg-[rgba(239,68,68,0.02)] dark:bg-[rgba(239,68,68,0.03)]">
            <div className="text-[10px] tracking-[0.18em] uppercase text-red-400 font-medium mb-7">
              How it runs today
            </div>
            <ul className="space-y-5">
              {before.map((item, i) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="font-display text-sm font-semibold text-red-500/25 tabular-nums shrink-0 mt-0.5 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After — blue accent treatment */}
          <div className="ring-1 ring-[rgba(37,99,235,0.15)] dark:ring-[rgba(37,99,235,0.15)] border-l-2 border-l-accent rounded-2xl p-6 sm:p-8 bg-[rgba(37,99,235,0.02)] dark:bg-[rgba(37,99,235,0.04)]">
            <div className="text-[10px] tracking-[0.18em] uppercase text-accent font-medium mb-7">
              What a system does instead
            </div>
            <ul className="space-y-5">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" aria-hidden="true" />
                  <span className="text-base text-text-light dark:text-white leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
