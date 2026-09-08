const STEPS = [
  {
    n: "01",
    title: "Automation Audit",
    body:  "We map where leads, time, and revenue are leaking. You get a clear picture of what to automate first, before anything is built.",
    note:  "Free. No obligation.",
  },
  {
    n: "02",
    title: "System Design",
    body:  "We scope the build. Fixed price, clear deliverables. You know exactly what you are getting and what it costs before we start.",
    note:  "No scope creep.",
  },
  {
    n: "03",
    title: "Build & Connect",
    body:  "We build the automations and connect your existing tools. Most systems are live within 14 days of the first call.",
    note:  "14-day delivery.",
  },
  {
    n: "04",
    title: "Test Real Scenarios",
    body:  "We run the system against real enquiries, edge cases, and failure points, not just the happy path.",
    note:  "Tested before handover.",
  },
  {
    n: "05",
    title: "Launch & Handover",
    body:  "You get trained, documented, and fully independent. The system is yours, not locked to our platform or access.",
    note:  "100% client-owned.",
  },
  {
    n: "06",
    title: "Monthly Optimisation",
    body:  "Optional retainer. We monitor performance, make improvements, and add new automations as the business grows.",
    note:  "Optional from £150/mo.",
  },
]

export function HowItWorks() {
  return (
    <section id="process" className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-14 md:mb-20 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent mb-5">
            <span className="w-5 h-px bg-accent" aria-hidden="true" />
            Process
          </span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-hi mb-5">
            Built, tested, and live without dragging you into technical chaos.
          </h2>
          <p className="text-lg text-lo leading-relaxed">
            We handle the build. You handle the business. The tools we use do not matter, only the result does.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {STEPS.map((step) => (
            <div key={step.n} className="bg-page p-7 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-bold text-accent/20 tabular-nums">{step.n}</span>
                <span className="text-[10px] font-medium tracking-wide text-dim bg-white/[0.05] px-2.5 py-1 rounded-full">
                  {step.note}
                </span>
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-hi tracking-[-0.02em] mb-2">{step.title}</h3>
                <p className="text-sm text-lo leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA nudge */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-elevated rounded-2xl border border-white/[0.07] px-7 py-6">
          <div>
            <p className="font-display text-base font-semibold text-hi mb-1">The audit is free and takes 30 minutes.</p>
            <p className="text-sm text-lo">We show you what to automate first. No obligation, no hard sell.</p>
          </div>
          <a
            href="#cta"
            className="shrink-0 px-6 py-3 text-sm font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-colors whitespace-nowrap"
          >
            Book Free Audit
          </a>
        </div>
      </div>
    </section>
  )
}
