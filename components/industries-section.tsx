"use client"

import { useState } from "react"
import { Zap, Building2, Wrench, Hammer, ShieldCheck } from "lucide-react"

const SECTORS = [
  {
    icon:       <Zap size={16} />,
    label:      "Electrical & M&E",
    bottleneck: "Enquiries, tender invites and quote follow-ups are split across inboxes, phones and spreadsheets.",
    automations: [
      "New enquiry → capture job details and create an opportunity automatically",
      "Quote or tender sent → timed follow-up and internal reminder sequence",
      "No reply or missed call → automatic response so the opportunity is not lost",
    ],
    outcome: "Every opportunity gets logged, owned and followed through to an outcome.",
  },
  {
    icon:       <Building2 size={16} />,
    label:      "Structural Steel & Fabrication",
    bottleneck: "Valuable enquiries arrive with incomplete drawings, unclear scope or no structured handover to estimating.",
    automations: [
      "Enquiry form collects drawings, programme, location and scope up front",
      "New opportunity → estimator notified with a clean job brief",
      "Quote issued → follow-up tracked until won, lost or deferred",
    ],
    outcome: "Estimators get cleaner information and fewer opportunities disappear after pricing.",
  },
  {
    icon:       <Hammer size={16} />,
    label:      "Civils & Groundworks",
    bottleneck: "Work comes from relationships and tender platforms, but pipeline visibility and follow-up are often manual.",
    automations: [
      "Tender or referral lead → opportunity created with deadline and next action",
      "Deadline approaching → automatic reminders to the responsible person",
      "Lost or postponed work → future reactivation task created automatically",
    ],
    outcome: "Management can see what is live, what needs action and what has gone cold.",
  },
  {
    icon:       <Wrench size={16} />,
    label:      "Commercial HVAC & Building Services",
    bottleneck: "Reactive enquiries, planned works and maintenance opportunities can be difficult to prioritise and chase consistently.",
    automations: [
      "Enquiry → route by service type, urgency and location",
      "Site visit or quote → automatic confirmation and follow-up",
      "Completed work → review, maintenance reminder or repeat-work sequence",
    ],
    outcome: "Faster response, tighter follow-up and more repeat work from the same client base.",
  },
  {
    icon:       <ShieldCheck size={16} />,
    label:      "Fire, Security & Specialist Contractors",
    bottleneck: "Small teams lose time switching between technical delivery, sales admin and client communication.",
    automations: [
      "Incoming opportunity → qualify and route to the right person",
      "Proposal sent → follow-up sequence without manual chasing",
      "Existing client → service, renewal or compliance reminder triggered automatically",
    ],
    outcome: "More consistent sales activity without adding another administrator.",
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
            Built for Contractors
          </span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-hi mb-5">
            Built around how commercial contractors actually win work.
          </h2>
          <p className="text-lg text-lo leading-relaxed">
            Referrals, tender platforms and repeat clients still matter. Titan sits behind those channels and makes sure every opportunity is captured, followed up and visible to the people responsible for winning it.
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-4">
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

          <div className="bg-elevated border border-white/[0.08] rounded-2xl p-7 sm:p-9">
            <p className="text-sm font-semibold text-accent tracking-[-0.01em] mb-2">{sector.label}</p>
            <p className="text-base text-lo leading-relaxed mb-7 max-w-lg">
              <span className="font-medium text-warning/80">Bottleneck:</span> {sector.bottleneck}
            </p>

            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-dim mb-4">What the system handles</h3>
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
          The first audit maps how work currently enters the business, who owns it, where it gets stuck and what should be automated first.
        </p>
      </div>
    </section>
  )
}
