import type { ReactNode } from "react"

type ServiceCardProps = {
  icon: ReactNode
  title: string
  bullets: string[]
  outcome: string
}

function ServiceCard({ icon, title, bullets, outcome }: ServiceCardProps) {
  return (
    <div className="group bg-card-light dark:bg-card-dark border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] hover:border-accent/25 dark:hover:border-accent/35 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(37,99,235,0.07)] dark:hover:shadow-[0_12px_32px_rgba(37,99,235,0.14)] transition-all duration-300 ease-out rounded-2xl p-6 sm:p-8 cursor-default flex flex-col">
      <div className="w-10 h-10 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-5 text-accent transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-text-light dark:text-white tracking-[-0.03em] mb-4">
        {title}
      </h3>
      <ul className="space-y-2.5 flex-1 mb-6">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-muted">
            <span className="w-1 h-1 rounded-full bg-accent/50 shrink-0 mt-[7px]" />
            {b}
          </li>
        ))}
      </ul>
      <div className="pt-4 border-t border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)]">
        <p className="text-xs font-medium text-accent leading-relaxed">{outcome}</p>
      </div>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-light dark:bg-dark py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 md:mb-16 fade-up-section">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3 md:mb-4">
            What we build
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-light dark:text-white tracking-[-0.03em] text-balance">
            Three systems. One connected business.
          </h2>
        </div>

        {/* 3-col grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 fade-up-section">

          {/* AI-Powered Website */}
          <ServiceCard
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            }
            title="AI-Powered Website"
            bullets={[
              "Built in Next.js — loads under 1s, mobile-first, designed to convert visitors into enquiries",
              "AI chat widget embedded on day one: answers FAQs, qualifies visitors and books them into your calendar",
              "Lead capture forms feed directly into your CRM — every enquiry tracked from first click to close",
            ]}
            outcome="Result: a site that generates appointments around the clock — not just a digital brochure."
          />

          {/* Booking System & CRM Pipeline */}
          <ServiceCard
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
              </svg>
            }
            title="Booking System & CRM Pipeline"
            bullets={[
              "Real-time online booking with deposit capture, Google Calendar sync and automated SMS/email reminders",
              "Every lead tracked from first touch to close — automated follow-up sequences run without you",
              "Win-back flows for gone-quiet clients; pipeline replaces HubSpot, Pipedrive and spreadsheets",
            ]}
            outcome="Result: no missed bookings, no chased leads — your pipeline runs itself."
          />

          {/* AI Chatbots & Automation */}
          <ServiceCard
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                <path d="M8 10h.01M12 10h.01M16 10h.01" />
              </svg>
            }
            title="AI Chatbots & Automation"
            bullets={[
              "AI chatbot trained on your business — qualifies leads and books them directly into your calendar, 24/7",
              "Automated Google review requests sent after every completed job via n8n + Resend",
              "Re-engagement sequences for inactive clients; outreach pipelines powered by Claude AI and Airtable",
            ]}
            outcome="Result: leads handled, reviews collected and lapsed clients won back — all on autopilot."
          />

        </div>
      </div>
    </section>
  )
}
