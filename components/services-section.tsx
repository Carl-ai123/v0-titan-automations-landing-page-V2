import { Bot, Database, Mail, Star, Globe, PhoneCall } from "lucide-react"
import type { ReactNode } from "react"
import Link from "next/link"

type System = {
  icon:     ReactNode
  label:    string
  title:    string
  href:     string
  what:     string
  removes:  string
  result:   string
}

const SYSTEMS: System[] = [
  {
    icon:    <Globe size={18} />,
    label:   "01",
    title:   "Contractor Website & Enquiry Capture",
    href:    "/services/websites-for-trades",
    what:    "A mobile-first site built around the work you actually want, with structured enquiry forms for scope, location, drawings and deadlines.",
    removes: "Generic contact forms and brochure sites that collect too little information.",
    result:  "Better enquiries enter the business with the details needed to act quickly.",
  },
  {
    icon:    <Bot size={18} />,
    label:   "02",
    title:   "Enquiry Qualification & Routing",
    href:    "/services/ai-chatbots",
    what:    "Incoming opportunities are qualified by job type, value, location and urgency, then routed to the right person with a clean brief.",
    removes: "Back-and-forth just to understand what the prospect wants.",
    result:  "The right person gets the right opportunity with the next action clear.",
  },
  {
    icon:    <Database size={18} />,
    label:   "03",
    title:   "Opportunity Pipeline",
    href:    "/services/crm-automation",
    what:    "Every enquiry, referral and tender is tracked from new opportunity through qualification, quote, follow-up, won or lost.",
    removes: "Work living across inboxes, WhatsApp threads and spreadsheets with no single owner.",
    result:  "Management can see what is live, what is stuck and what needs action.",
  },
  {
    icon:    <Mail size={18} />,
    label:   "04",
    title:   "Quote & Tender Follow-Up",
    href:    "/services/follow-up-automation",
    what:    "Timed email, SMS and internal reminders keep quotes and tender opportunities moving until there is a clear outcome.",
    removes: "Following up when somebody remembers, or not following up at all.",
    result:  "More opportunities get a second and third touch without adding admin.",
  },
  {
    icon:    <PhoneCall size={18} />,
    label:   "05",
    title:   "Missed Enquiry Recovery",
    href:    "/services/missed-call-text-back",
    what:    "Missed calls and out-of-hours enquiries trigger an immediate response and capture the job details while the prospect is still looking.",
    removes: "Good prospects moving on because nobody answered at the right moment.",
    result:  "More inbound opportunities are recovered before they reach another contractor.",
  },
  {
    icon:    <Star size={18} />,
    label:   "06",
    title:   "Review, Referral & Reactivation",
    href:    "/services/review-automation",
    what:    "Completed work triggers review requests, referral prompts and future reactivation so the client database keeps producing value.",
    removes: "Finishing a job and relying on the client to remember you next time.",
    result:  "More proof, more repeat work and a warmer pipeline from existing relationships.",
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
        <Link href={sys.href} className="inline-flex items-center mt-3 text-xs font-semibold text-accent hover:text-accent/80 transition-colors">
          Learn more <span aria-hidden="true" className="ml-1">→</span>
        </Link>
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
            Contractor Growth System
          </span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-hi mb-5">
            One connected system from first enquiry to won work.
          </h2>
          <p className="text-lg text-lo leading-relaxed">
            Titan connects the website, opportunity pipeline and follow-up around your existing sales process. We automate the gaps without forcing your team into a complicated new way of working.
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
