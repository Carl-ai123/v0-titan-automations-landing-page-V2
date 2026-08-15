"use client"

import { useState } from "react"
import { Wrench, HeartPulse, Building2, Briefcase, MapPin } from "lucide-react"

const SECTORS = [
  {
    icon:       <Wrench size={16} />,
    label:      "Trades & Construction",
    bottleneck: "Missed quote requests and job follow-ups cost revenue every week.",
    automations: [
      "Missed call → instant text back with booking link",
      "Quote sent → automatic chaser at 2, 5, and 10 days",
      "Job completed → review request sent automatically",
    ],
    outcome: "Fewer leads go cold. Reviews build up without asking.",
  },
  {
    icon:       <HeartPulse size={16} />,
    label:      "Clinics & Healthcare",
    bottleneck: "Manual appointment booking and no-show rates cost time and revenue.",
    automations: [
      "Online booking with automated confirmations and reminders",
      "No-show → automatic rebooking prompt within the hour",
      "Treatment complete → recall message sent at the right interval",
    ],
    outcome: "Fewer no-shows. More returning patients. Less admin.",
  },
  {
    icon:       <Building2 size={16} />,
    label:      "Property",
    bottleneck: "Enquiries are slow to respond to. Viewings are hard to coordinate.",
    automations: [
      "New enquiry → instant response with viewing availability",
      "Viewing booked → confirmation, reminder, and feedback request",
      "Applicant goes quiet → automated follow-up sequence",
    ],
    outcome: "Faster responses. More viewings booked. Less chasing.",
  },
  {
    icon:       <Briefcase size={16} />,
    label:      "Professional Services",
    bottleneck: "Onboarding is manual. Leads go cold while waiting for a response.",
    automations: [
      "New lead → qualification form sent automatically",
      "Proposal sent → follow-up if no response after 3 days",
      "Client onboarded → document checklist and reminders triggered",
    ],
    outcome: "Warmer leads. Smoother onboarding. Less inbox chaos.",
  },
  {
    icon:       <MapPin size={16} />,
    label:      "Local Services",
    bottleneck: "Missed calls are missed jobs. Repeat bookings depend on the client remembering.",
    automations: [
      "Missed call → SMS within 60 seconds with booking link",
      "Job completed → follow-up for repeat booking at the right time",
      "Google reviews → requested automatically after every service",
    ],
    outcome: "Missed calls recovered. Repeat business up. Reviews growing.",
  },
]

export function IndustriesSection() {
  const [active, setActive] = useState(0)
  const sector = SECTORS[active]

  return (
    <section id="industries" className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12 md:mb-16 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent mb-5">
            <span className="w-5 h-px bg-accent" aria-hidden="true" />
            Who We Work With
          </span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-hi mb-5">
            Built for service businesses where admin delays cost money.
          </h2>
          <p className="text-lg text-lo leading-relaxed">
            We do not work with everyone. We work best where manual processes create a measurable revenue leak,
            and where fixing it pays for itself quickly.
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-4">
          {/* Sector tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {SECTORS.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-left whitespace-nowrap lg:whitespace-normal transition-all duration-150 border shrink-0 ${
                  active === i
                    ? "bg-elevated border-accent/30 text-hi"
                    : "bg-transparent border-white/[0.06] text-lo hover:border-white/15 hover:text-hi"
                }`}
              >
                <span className={active === i ? "text-accent" : "text-dim"}>{s.icon}</span>
                <span className="text-sm font-medium">{s.label}</span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="bg-elevated border border-white/[0.08] rounded-2xl p-7 sm:p-9">
            <p className="text-sm font-semibold text-accent tracking-[-0.01em] mb-2">{sector.label}</p>
            <p className="text-base text-lo leading-relaxed mb-7 max-w-lg">
              <span className="font-medium text-warning/80">Bottleneck:</span> {sector.bottleneck}
            </p>

            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-dim mb-4">What we automate</h3>
            <ul className="space-y-3 mb-7">
              {sector.automations.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-[7px]" aria-hidden="true" />
                  <span className="text-base text-hi leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 bg-success/[0.06] border border-success/20 rounded-xl px-5 py-4">
              <span className="w-1.5 h-1.5 rounded-full bg-success shrink-0" aria-hidden="true" />
              <span className="text-sm text-success leading-relaxed">{sector.outcome}</span>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-dim text-center">
          Not sure if this fits your business? Book the audit, that is exactly what it is for.
        </p>
      </div>
    </section>
  )
}
