import { Bot, Calendar, Database, Mail, Star, Globe } from "lucide-react"
import type { ReactNode } from "react"

type System = {
  icon:     ReactNode
  label:    string
  title:    string
  what:     string
  removes:  string
  result:   string
}

const SYSTEMS: System[] = [
  {
    icon:    <Globe size={18} />,
    label:   "01",
    title:   "AI-Powered Website",
    what:    "Conversion-focused site built for Google — not just to look good. Booking embedded on day one.",
    removes: "A website that gets traffic but converts no one.",
    result:  "Visitors become booked enquiries without you lifting a finger.",
  },
  {
    icon:    <Bot size={18} />,
    label:   "02",
    title:   "AI Chatbot & Qualification",
    what:    "Answers common questions, qualifies intent, collects contact details, and routes the right leads to you.",
    removes: "Staff answering the same questions. Leads leaving because no one responded.",
    result:  "Qualified enquiries in your inbox. At 2am if needed.",
  },
  {
    icon:    <Calendar size={18} />,
    label:   "03",
    title:   "Booking & Calendar System",
    what:    "Online booking with automated reminders, calendar sync, and no-show recovery.",
    removes: "Booking appointments over the phone. Back-and-forth texts.",
    result:  "Clients book themselves. You get the notification.",
  },
  {
    icon:    <Database size={18} />,
    label:   "04",
    title:   "CRM Pipeline Automation",
    what:    "Every enquiry, lead, and client tracked through a live pipeline — automatically updated as things progress.",
    removes: "Opportunities falling through the cracks. No visibility on where deals stand.",
    result:  "Full pipeline visibility. Nothing forgotten.",
  },
  {
    icon:    <Mail size={18} />,
    label:   "05",
    title:   "Lead Follow-Up Sequences",
    what:    "Automated multi-touch sequences that follow up by email, SMS, or WhatsApp until the lead replies or converts.",
    removes: "Chasing leads manually. Following up when you remember — which is not often enough.",
    result:  "Leads followed up consistently. Revenue recovered from the ignored inbox.",
  },
  {
    icon:    <Star size={18} />,
    label:   "06",
    title:   "Review Request System",
    what:    "Automated review requests sent to every client after a job — via SMS or email, timed perfectly.",
    removes: "Forgetting to ask. Awkward manual requests. Inconsistent review volume.",
    result:  "A steady stream of 5-star Google reviews on autopilot.",
  },
]

function SystemCard({ sys }: { sys: System }) {
  return (
    <div className="group relative bg-surface border border-white/[0.08] hover:border-accent/30 rounded-2xl p-6 flex flex-col gap-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,157,255,0.06)]">
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
          {sys.icon}
        </div>
        <span className="font-display text-2xl font-bold text-white/[0.05] tabular-nums">{sys.label}</span>
      </div>

      <div>
        <h3 className="font-display text-base font-semibold text-hi tracking-[-0.02em] mb-2">{sys.title}</h3>
        <p className="text-sm text-lo leading-relaxed">{sys.what}</p>
      </div>

      <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-white/[0.06]">
        <div className="flex items-start gap-2">
          <span className="text-error text-[10px] font-semibold tracking-wide uppercase shrink-0 mt-[1px]">Removes</span>
          <span className="text-xs text-dim leading-relaxed">{sys.removes}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-accent text-[10px] font-semibold tracking-wide uppercase shrink-0 mt-[1px]">Result</span>
          <span className="text-xs text-accent/80 leading-relaxed">{sys.result}</span>
        </div>
      </div>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="systems" className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">

        <div className="mb-14 md:mb-18 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent mb-5">
            <span className="w-5 h-px bg-accent" aria-hidden="true" />
            Systems
          </span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-hi mb-5">
            Systems we build around your business.
          </h2>
          <p className="text-lg text-lo leading-relaxed">
            Not apps. Not tools you have to learn. Connected systems that do the work your team
            is currently doing manually.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SYSTEMS.map((sys) => (
            <SystemCard key={sys.label} sys={sys} />
          ))}
        </div>
      </div>
    </section>
  )
}
