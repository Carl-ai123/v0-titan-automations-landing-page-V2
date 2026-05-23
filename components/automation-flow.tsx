import { Fragment } from "react"

const NODES = [
  { label: "Trigger",  title: "Lead captured",      sub: "Form, chatbot, or call",    outcome: false },
  { label: "AI",       title: "Scored & enriched",  sub: "Intent graded, data pulled", outcome: false },
  { label: "CRM",      title: "Record created",     sub: "Pipeline stage set",         outcome: false },
  { label: "Sequence", title: "Follow-up starts",   sub: "Personalised, timed",        outcome: false },
  { label: "Calendar", title: "Booking confirmed",  sub: "Slot filled automatically",  outcome: false },
  { label: "Outcome",  title: "Review triggered",   sub: "Post-job request sent",      outcome: true  },
]

const SCENARIOS = [
  {
    when: "New enquiry lands",
    steps: ["AI qualifies intent", "CRM record created", "Personalised email sent"],
    outcome: "Discovery call booked — no human required",
  },
  {
    when: "Client no-shows",
    steps: ["System flags no-show", "Rebooking SMS triggered", "New slot confirmed"],
    outcome: "Appointment recovered in under 10 minutes",
  },
  {
    when: "Job marked complete",
    steps: ["Trigger fires on status change", "Review request sent", "Response logged"],
    outcome: "5-star Google review — fully automated",
  },
]

export function AutomationFlow() {
  return (
    <section id="workflow" className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-14 md:mb-20 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent mb-5">
            <span className="w-5 h-px bg-accent" aria-hidden="true" />
            How It Works
          </span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-hi mb-5">
            One trigger. Your entire pipeline fires.
          </h2>
          <p className="text-lg text-lo leading-relaxed max-w-xl">
            The moment someone touches your business — form, chatbot, missed call — a connected system takes over.
            No delays, no manual steps, no dropped leads.
          </p>
        </div>

        {/* Desktop flow */}
        <div className="hidden lg:block border border-white/[0.07] bg-surface rounded-2xl px-8 py-7 mb-10 overflow-x-auto">
          <div className="flex items-stretch gap-2 min-w-[820px]">
            {NODES.map((node, i) => (
              <Fragment key={node.label}>
                <div className={`flex-1 rounded-xl p-5 border ${node.outcome ? "bg-success/[0.04] border-success/20" : "bg-elevated border-white/[0.07]"}`}>
                  <div className={`text-[10px] tracking-[0.16em] uppercase font-semibold mb-2 ${node.outcome ? "text-success" : "text-accent"}`}>{node.label}</div>
                  <div className="text-sm font-semibold text-hi mb-1">{node.title}</div>
                  <div className="text-xs text-lo">{node.sub}</div>
                </div>
                {i < NODES.length - 1 && (
                  <div className="flex items-center w-6 shrink-0">
                    <div className="flex-1 h-px bg-white/[0.08] relative overflow-hidden">
                      <div className="absolute top-0 h-full w-6 bg-accent/50 animate-flow-line" style={{ animationDelay: `${i * 0.4}s` }} />
                    </div>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="-ml-px" aria-hidden="true">
                      <path d="M1.5 1.5L5.5 4 1.5 6.5" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>

        {/* Mobile flow */}
        <div className="lg:hidden flex flex-col gap-2 mb-10">
          {NODES.map((node, i) => (
            <Fragment key={node.label}>
              <div className={`rounded-xl p-4 border flex items-center gap-4 ${node.outcome ? "bg-success/[0.04] border-success/20" : "bg-elevated border-white/[0.07]"}`}>
                <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${node.outcome ? "bg-success" : "bg-accent"}`} aria-hidden="true" />
                <div>
                  <div className={`text-[10px] tracking-wide uppercase font-semibold ${node.outcome ? "text-success" : "text-accent"}`}>{node.label}</div>
                  <div className="text-sm font-semibold text-hi">{node.title}</div>
                  <div className="text-xs text-lo">{node.sub}</div>
                </div>
              </div>
              {i < NODES.length - 1 && (
                <div className="h-4 w-px bg-white/[0.08] mx-6 relative overflow-hidden">
                  <div className="absolute left-0 w-full h-4 bg-accent/40 animate-flow-line-vertical" style={{ animationDelay: `${i * 0.4}s` }} />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Scenario cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {SCENARIOS.map((s) => (
            <div key={s.when} className="bg-surface border border-white/[0.07] rounded-xl p-5">
              <p className="text-[10px] tracking-[0.14em] uppercase text-dim font-medium mb-4">{s.when}</p>
              <div className="flex flex-wrap items-center gap-1.5 mb-4">
                {s.steps.map((step, i) => (
                  <Fragment key={step}>
                    <span className="text-xs bg-white/[0.05] text-lo px-2.5 py-1 rounded-lg">{step}</span>
                    {i < s.steps.length - 1 && <span className="text-dim text-xs" aria-hidden="true">→</span>}
                  </Fragment>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-success shrink-0" aria-hidden="true" />
                <span className="text-xs text-success leading-relaxed">{s.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
