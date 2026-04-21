import { Fragment, type ReactNode } from "react"

type FlowNode = {
  label: string
  title: string
  sub: string
  isLast?: boolean
  icon: ReactNode
}

type Scenario = {
  when: string
  steps: string[]
  outcome: string
}

const nodes: FlowNode[] = [
  {
    label: "Trigger",
    title: "Lead captured",
    sub: "Form, chatbot, or referral",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    label: "AI",
    title: "Scored & enriched",
    sub: "Intent graded, data pulled",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    label: "CRM",
    title: "Record created",
    sub: "Pipeline stage set",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    label: "Email",
    title: "Sequence starts",
    sub: "Personalised and timed",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Outcome",
    title: "Call booked",
    sub: "Discovery slot confirmed",
    isLast: true,
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const scenarios: Scenario[] = [
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

// ─── Sub-components ──────────────────────────────────────────────────────────

function DesktopNodeCard({ node, index }: { node: FlowNode; index: number }) {
  return (
    <div
      className={`relative w-40 shrink-0 rounded-xl p-4 border ${
        node.isLast
          ? "bg-amber/5 border-amber/25"
          : "bg-card-light dark:bg-card-dark border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] animate-node-ring"
      }`}
      style={!node.isLast ? { animationDelay: `${index * 0.5}s` } : undefined}
    >
      {/* Icon */}
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center mb-4 ${
          node.isLast ? "bg-amber/10 text-amber" : "bg-accent/10 text-accent"
        }`}
      >
        {node.icon}
      </div>

      {/* Label */}
      <div className="text-[10px] tracking-[0.15em] uppercase text-muted font-medium mb-1">
        {node.label}
      </div>

      {/* Title */}
      <div className="text-sm font-medium text-text-light dark:text-white leading-snug mb-1 tracking-[-0.02em]">
        {node.title}
      </div>

      {/* Subtitle */}
      <div className="text-xs text-muted leading-relaxed">
        {node.sub}
      </div>

      {/* Outcome badge */}
      {node.isLast && (
        <div className="flex items-center gap-1.5 mt-3">
          <span className="w-1.5 h-1.5 rounded-full bg-amber" aria-hidden="true" />
          <span className="text-xs text-amber font-medium">Outcome</span>
        </div>
      )}
    </div>
  )
}

function DesktopConnector({ delay }: { delay: number }) {
  return (
    <div className="flex items-center flex-1 mt-9 min-w-0 px-2">
      {/* Animated line — solid accent pulse */}
      <div className="w-full h-px bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.06)] relative overflow-hidden">
        <div
          className="absolute top-0 h-full w-8 bg-accent/40 animate-flow-line"
          style={{ animationDelay: `${delay}s` }}
        />
      </div>
      {/* Arrowhead */}
      <svg
        className="shrink-0 w-2.5 h-2.5 text-[rgba(0,0,0,0.18)] dark:text-[rgba(255,255,255,0.18)] -ml-px"
        viewBox="0 0 10 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 2l4.5 3L2 8" />
      </svg>
    </div>
  )
}

function MobileNodeCard({ node }: { node: FlowNode }) {
  return (
    <div
      className={`w-full max-w-sm rounded-xl p-4 border ${
        node.isLast
          ? "bg-amber/5 border-amber/25"
          : "bg-card-light dark:bg-card-dark border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)]"
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
            node.isLast ? "bg-amber/10 text-amber" : "bg-accent/10 text-accent"
          }`}
        >
          {node.icon}
        </div>

        <div className="min-w-0">
          <div className="text-[10px] tracking-[0.15em] uppercase text-muted font-medium mb-0.5">
            {node.label}
          </div>
          <div className="text-sm font-medium text-text-light dark:text-white leading-snug tracking-[-0.02em]">
            {node.title}
          </div>
          <div className="text-xs text-muted mt-0.5 leading-relaxed">
            {node.sub}
          </div>
          {node.isLast && (
            <div className="flex items-center gap-1.5 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber" aria-hidden="true" />
              <span className="text-xs text-amber font-medium">Outcome</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function MobileConnector({ delay }: { delay: number }) {
  return (
    <div className="h-8 w-px bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.06)] relative overflow-hidden my-1">
      <div
        className="absolute left-0 w-full h-8 bg-accent/40 animate-flow-line-vertical"
        style={{ animationDelay: `${delay}s` }}
      />
    </div>
  )
}

function ScenarioCard({ scenario }: { scenario: Scenario }) {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)] border border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)] rounded-xl p-5">
      {/* Trigger label */}
      <div className="text-[10px] text-muted uppercase tracking-[0.15em] font-medium mb-3">
        {scenario.when}
      </div>

      {/* Step pills */}
      <div className="flex flex-wrap items-center gap-1.5 mb-4">
        {scenario.steps.map((step, i) => (
          <Fragment key={i}>
            <span className="text-xs bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.06)] text-[rgba(0,0,0,0.65)] dark:text-[rgba(255,255,255,0.65)] px-2 py-1 rounded-md whitespace-nowrap">
              {step}
            </span>
            {i < scenario.steps.length - 1 && (
              <span className="text-[rgba(0,0,0,0.2)] dark:text-[rgba(255,255,255,0.2)] text-xs">→</span>
            )}
          </Fragment>
        ))}
      </div>

      {/* Outcome */}
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0" aria-hidden="true" />
        <span className="text-xs text-amber leading-relaxed">{scenario.outcome}</span>
      </div>
    </div>
  )
}

// ─── Main Export ─────────────────────────────────────────────────────────────

export function AutomationFlow() {
  return (
    <section id="automation" className="bg-light dark:bg-dark py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header — left-aligned */}
        <div className="mb-14 md:mb-20 fade-up-section">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3 md:mb-4">
            How it works under the hood
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-light dark:text-white tracking-[-0.03em] text-balance">
            One trigger.<br className="hidden sm:block" /> Your entire pipeline fires.
          </h2>
          <p className="text-base text-muted max-w-lg mt-4 leading-relaxed">
            The moment someone touches your business — form, chatbot, missed call — a fully connected system takes over. No delays, no manual steps, no dropped leads.
          </p>
        </div>

        {/* ── Flow diagram — Desktop (lg+) ── */}
        <div className="hidden lg:flex items-start mb-14 fade-up-section">
          {nodes.map((node, i) => (
            <Fragment key={node.label}>
              <DesktopNodeCard node={node} index={i} />
              {i < nodes.length - 1 && (
                <DesktopConnector delay={i * 0.5 + 0.25} />
              )}
            </Fragment>
          ))}
        </div>

        {/* ── Flow diagram — Mobile ── */}
        <div className="lg:hidden flex flex-col items-center mb-12 fade-up-section">
          {nodes.map((node, i) => (
            <Fragment key={node.label}>
              <MobileNodeCard node={node} />
              {i < nodes.length - 1 && (
                <MobileConnector delay={i * 0.5 + 0.25} />
              )}
            </Fragment>
          ))}
        </div>

        {/* ── Scenario cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 fade-up-section">
          {scenarios.map((scenario, i) => (
            <ScenarioCard key={i} scenario={scenario} />
          ))}
        </div>

      </div>
    </section>
  )
}
