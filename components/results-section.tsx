const SIGNALS = [
  {
    value: "14",
    unit:  "days",
    label: "Typical delivery target",
    sub:   "Two weeks for a scoped single system once content and access are ready. Timing is agreed before work starts.",
  },
  {
    value: "100%",
    unit:  "",
    label: "Client-owned systems",
    sub:   "You own the delivered code. Hosting and third-party services may have separate running costs.",
  },
  {
    value: "Fixed",
    unit:  "",
    label: "Scope and price",
    sub:   "You know exactly what you are getting and what it costs before we start.",
  },
  {
    value: "0",
    unit:  "",
    label: "Surprise invoices",
    sub:   "Scope agreed upfront. Nothing added without your approval.",
  },
]

export function ResultsSection() {
  return (
    <section id="proof" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-surface border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {SIGNALS.map((s) => (
            <div key={s.label} className="bg-surface px-7 py-8">
              <div className="flex items-end gap-1 mb-2">
                <span className="font-display text-4xl font-bold text-hi tracking-tight tabular-nums">{s.value}</span>
                {s.unit && <span className="font-display text-xl font-bold text-accent mb-1">{s.unit}</span>}
              </div>
              <p className="text-sm font-semibold text-hi mb-1.5">{s.label}</p>
              <p className="text-xs text-lo leading-relaxed">{s.sub}</p>
            </div>
          ))}
        </div>
        <p className="mt-7 text-xs text-dim text-center">
          Exact results depend on your current process. The audit shows where the leak is.
        </p>
      </div>
    </section>
  )
}
