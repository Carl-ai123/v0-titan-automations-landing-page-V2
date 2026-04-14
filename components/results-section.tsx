export function ResultsSection() {
  const results = [
    {
      metric: "100+",
      context: "Leads found and enriched in a single automated run",
      outcome: "Zero manual research required",
    },
    {
      metric: "14 days",
      context: "Average time from first call to live system",
      outcome: "Faster than any agency you've tried",
    },
    {
      metric: "£0",
      context: "Cost of tools replaced per client on average",
      outcome: "One retainer replaces 4 subscriptions",
    },
  ]

  return (
    <section id="results" className="bg-dark py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 fade-up-section">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3 md:mb-4">
            Real results
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Systems that actually work.
          </h2>
        </div>

        {/* Results Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 fade-up-section">
          {results.map((result) => (
            <div
              key={result.metric}
              className="ring-1 ring-[rgba(255,255,255,0.08)] border-l-2 border-l-accent rounded-xl p-5 sm:p-7"
            >
              <div className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-3 md:mb-4">
                {result.metric}
              </div>
              <p className="text-sm text-muted mb-3 leading-relaxed">{result.context}</p>
              <p className="text-sm text-accent">{result.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
