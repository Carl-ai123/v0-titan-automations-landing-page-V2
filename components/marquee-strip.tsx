const ITEMS = [
  "Lead Capture",
  "AI Qualification",
  "CRM Automation",
  "Booking Systems",
  "Follow-Up Sequences",
  "Review Automation",
  "Missed Call Recovery",
  "Tool Integration",
  "Admin Workflows",
  "Reporting Dashboards",
  "Client Onboarding",
  "Pipeline Management",
]

export function MarqueeStrip() {
  const repeated = [...ITEMS, ...ITEMS]
  return (
    <div className="py-4 border-y border-white/[0.06] overflow-hidden bg-surface">
      <div className="flex animate-marquee whitespace-nowrap gap-0">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 mx-0">
            <span className="text-xs font-medium tracking-[0.16em] uppercase text-dim px-5">{item}</span>
            <span className="w-1 h-1 rounded-full bg-accent/40 shrink-0" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  )
}
