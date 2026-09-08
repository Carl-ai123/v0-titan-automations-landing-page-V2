"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const FAQS = [
  {
    q: "What exactly do you automate?",
    a: "Lead capture, AI qualification, CRM pipeline management, follow-up sequences, appointment booking and reminders, review requests, missed call recovery, internal admin tasks, and connecting your existing tools so data flows between them automatically.",
  },
  {
    q: "Do I need to change my current tools?",
    a: "Usually not. We build around the tools you already use, whether that is Google Calendar, HubSpot, GoHighLevel, WhatsApp, or something else. If a tool is causing problems, we will flag it during the audit.",
  },
  {
    q: "Can this work for my industry?",
    a: "If your business has leads, bookings, follow-ups, admin tasks, or customer communications that currently rely on someone remembering to do them, yes. We work with trades, clinics, property businesses, professional services, and other owner-led service businesses.",
  },
  {
    q: "How long does it take to build?",
    a: "Our typical target is 14 days for a scoped single-system build once content and access are ready. Complex multi-system builds are scoped individually, we will tell you exactly how long before any work starts.",
  },
  {
    q: "Do I own everything you build?",
    a: "You own the delivered code and workflows and can hand them to another developer. Third-party hosting, software licences and usage fees may still apply; we explain these when scoping the work.",
  },
  {
    q: "What if I already have a website?",
    a: "We can work around an existing site. In many cases we add a booking system, chatbot, or contact form automation on top of what you already have. If the site is genuinely holding back conversions, we will say so, but there is no pressure to rebuild.",
  },
  {
    q: "Can you automate our internal processes?",
    a: "Yes. If your team is doing something repetitive, generating reports, sending reminders, updating records, notifying staff, there is likely an automation for it. Bring it to the audit and we will assess it.",
  },
  {
    q: "Is AI reliable enough for customer-facing enquiries?",
    a: "When built correctly, yes. We set clear rules about what the AI handles and what gets escalated to a human. You review and approve the responses it is trained on. Nothing gets deployed without your sign-off.",
  },
  {
    q: "What does it cost?",
    a: "The audit is free and there is no obligation. Pricing is scoped to your specific build, we go through it at the end of the audit call so you know exactly what is involved before committing to anything.",
  },
  {
    q: "What happens on the audit call?",
    a: "It is a 30-minute conversation. We ask about your current process, how leads come in, where they get lost, what admin your team does repeatedly. At the end, we tell you what we would automate first and roughly what it would cost. No hard sell. No obligation.",
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        <div className="mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent mb-5">
            <span className="w-5 h-px bg-accent" aria-hidden="true" />
            FAQ
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-hi">
            Questions worth answering before you book.
          </h2>
        </div>

        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-white/[0.08] rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
                aria-expanded={open === i}
              >
                <span className="text-base font-medium text-hi">{faq.q}</span>
                <span className="shrink-0 text-dim">
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 border-t border-white/[0.06]">
                  <p className="pt-4 text-base text-lo leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
