import type { ReactNode } from "react"

type ServiceCardProps = {
  icon: ReactNode
  title: string
  description: string
  bullets: string[]
}

function ServiceCard({ icon, title, description, bullets }: ServiceCardProps) {
  return (
    <div className="group bg-card-light dark:bg-card-dark border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] hover:border-accent/25 dark:hover:border-accent/35 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(37,99,235,0.07)] dark:hover:shadow-[0_12px_32px_rgba(37,99,235,0.14)] hover:bg-[rgba(37,99,235,0.012)] dark:hover:bg-[rgba(37,99,235,0.045)] transition-all duration-300 ease-out rounded-2xl p-6 cursor-default">
      <div className="w-10 h-10 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-5 text-accent transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-text-light dark:text-white tracking-[-0.03em] mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted mb-5 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-2">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-muted">
            <span className="w-1 h-1 rounded-full bg-accent/50 shrink-0 mt-[7px]" />
            {b}
          </li>
        ))}
      </ul>
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
            Every system your business needs to grow.
          </h2>
        </div>

        {/* Bento Grid — 3 cols on desktop fills evenly: 2+1 top / 1+1+1 bottom */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 fade-up-section">

          {/* ── Large Feature Card ── */}
          <div className="group sm:col-span-2 lg:col-span-2 bg-card-light dark:bg-card-dark border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] hover:border-accent/25 dark:hover:border-accent/35 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(37,99,235,0.07)] dark:hover:shadow-[0_12px_32px_rgba(37,99,235,0.14)] hover:bg-[rgba(37,99,235,0.012)] dark:hover:bg-[rgba(37,99,235,0.045)] transition-all duration-300 ease-out rounded-2xl p-6 sm:p-8 cursor-default">
            <div className="w-10 h-10 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-5 text-accent transition-all duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>

            <h3 className="font-display text-2xl font-semibold text-text-light dark:text-white tracking-[-0.03em] mb-2">
              AI-Powered Websites
            </h3>
            <p className="text-sm text-muted mb-6 leading-relaxed max-w-lg">
              Fast, modern, conversion-focused sites built in Next.js — with live chat, booking and lead capture embedded from day one. No templates. No compromise.
            </p>

            {/* Bullets + Visual side-by-side on wider breakpoints */}
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              <ul className="space-y-2.5 flex-1">
                {[
                  "Loads in under 1 second on any device",
                  "Live chat, forms & booking ready on launch day",
                  "Editable by you — no developer ever required",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-muted">
                    <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Network Grid Visual */}
              <div className="rounded-xl overflow-hidden border border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)] p-3 bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)] w-full md:w-52 shrink-0">
                <svg viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-60 group-hover:opacity-90 transition-opacity duration-500">
                  <line x1="20" y1="20" x2="200" y2="20" className="network-grid-line" strokeWidth="0.5"/>
                  <line x1="20" y1="50" x2="200" y2="50" className="network-grid-line" strokeWidth="0.5"/>
                  <line x1="20" y1="80" x2="200" y2="80" className="network-grid-line" strokeWidth="0.5"/>
                  <line x1="20" y1="110" x2="200" y2="110" className="network-grid-line" strokeWidth="0.5"/>
                  <line x1="20" y1="20" x2="20" y2="110" className="network-grid-line" strokeWidth="0.5"/>
                  <line x1="65" y1="20" x2="65" y2="110" className="network-grid-line" strokeWidth="0.5"/>
                  <line x1="110" y1="20" x2="110" y2="110" className="network-grid-line" strokeWidth="0.5"/>
                  <line x1="155" y1="20" x2="155" y2="110" className="network-grid-line" strokeWidth="0.5"/>
                  <line x1="200" y1="20" x2="200" y2="110" className="network-grid-line" strokeWidth="0.5"/>
                  <line x1="65" y1="50" x2="110" y2="80" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.6"/>
                  <line x1="110" y1="20" x2="155" y2="50" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.6"/>
                  <line x1="20" y1="80" x2="65" y2="50" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.4"/>
                  {[20,65,110,155,200].flatMap(x =>
                    [20,50,80,110].map(y =>
                      <circle key={`${x}-${y}`} cx={x} cy={y} r="2" className="network-dot" />
                    )
                  )}
                  <circle cx="110" cy="20" r="4" fill="#2563EB"/>
                  <circle cx="65" cy="50" r="4" fill="#2563EB"/>
                  <circle cx="155" cy="80" r="3" fill="#2563EB" opacity="0.7"/>
                </svg>
              </div>
            </div>
          </div>

          {/* ── Booking Systems ── */}
          <ServiceCard
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            }
            title="Booking Systems"
            description="Real-time availability, deposit capture and automated reminders — so you never chase a client again."
            bullets={[
              "Deposits & payments collected upfront",
              "SMS & email reminders auto-sent",
              "Syncs with Google Calendar",
            ]}
          />

          {/* ── CRM & Pipelines ── */}
          <ServiceCard
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 17h6M17 14v6" />
              </svg>
            }
            title="CRM & Pipelines"
            description="Every lead tracked from first touch to close — with automated follow-ups that run without you."
            bullets={[
              "Lead capture → follow-up → close in one flow",
              "Replaces HubSpot, Pipedrive & spreadsheets",
              "Full client history always at your fingertips",
            ]}
          />

          {/* ── AI Chatbots ── */}
          <ServiceCard
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                <path d="M8 10h.01M12 10h.01M16 10h.01" />
              </svg>
            }
            title="AI Chatbots"
            description="Trained on your business to answer questions, qualify leads and book appointments around the clock."
            bullets={[
              "Handles your most common FAQs instantly",
              "Qualifies and books leads 24/7",
              "Escalates to you only when it matters",
            ]}
          />

          {/* ── Review & Recall ── */}
          <ServiceCard
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            }
            title="Review & Recall"
            description="Automatically chase Google reviews after every job and re-engage customers who've gone quiet."
            bullets={[
              "Review requests sent automatically post-job",
              "Win-back sequences for inactive customers",
              "Passively boosts your Google ranking",
            ]}
          />

        </div>
      </div>
    </section>
  )
}
