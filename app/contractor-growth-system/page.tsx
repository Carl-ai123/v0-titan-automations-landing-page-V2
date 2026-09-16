import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, CircleDollarSign, ClipboardList, MailCheck, Workflow } from 'lucide-react'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Contractor Growth System | Titan Automations',
  description: 'A connected enquiry, CRM and follow-up system for UK commercial contractors. Capture every opportunity, assign the next action and follow up every quote.',
  alternates: { canonical: '/contractor-growth-system' },
}

const steps = [
  ['1', 'Enquiry captured', 'Website forms, email enquiries and missed calls feed one pipeline instead of separate inboxes.'],
  ['2', 'Job details collected', 'Scope, location, drawings, deadline and contact details are collected before the opportunity disappears.'],
  ['3', 'Opportunity assigned', 'The right estimator or decision-maker gets the next action with a clear stage and due date.'],
  ['4', 'Quote followed up', 'Outstanding quotes and enquiries are chased consistently instead of when someone remembers.'],
  ['5', 'Outcome tracked', 'Won, lost and future opportunities stay visible so the pipeline becomes useful management data.'],
]

const outcomes = [
  { icon: ClipboardList, title: 'One pipeline', text: 'Every enquiry and quote in one place with an owner and next action.' },
  { icon: MailCheck, title: 'Immediate response', text: 'New enquiries receive acknowledgement while your team is busy on site or pricing work.' },
  { icon: Workflow, title: 'Automatic follow-up', text: 'Quote chasers and internal reminders trigger from the opportunity stage.' },
  { icon: CircleDollarSign, title: 'Clear commercial visibility', text: 'See pipeline value, overdue follow-ups and won/lost outcomes without digging through inboxes.' },
]

export default function ContractorGrowthSystemPage() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-page">
      <section className="px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent mb-6">
            <span className="w-5 h-px bg-accent" />
            For UK commercial contractors
            <span className="w-5 h-px bg-accent" />
          </span>
          <h1 className="font-display text-[clamp(2.7rem,7vw,5.8rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-hi mb-7">
            Every enquiry captured. Every quote followed up.
          </h1>
          <p className="text-lg md:text-xl text-lo leading-relaxed max-w-3xl mx-auto mb-9">
            Titan connects your website, enquiry capture, CRM and follow-up into one contractor growth system, so opportunities do not disappear into inboxes, WhatsApp threads or someone&apos;s memory.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#cta" className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-all">
              Build This For My Company
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link href="/" className="inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-hi border border-white/20 rounded-full hover:border-white/40 transition-colors">
              About Titan
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {outcomes.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-surface border border-white/[0.08] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5"><Icon size={18} /></div>
              <h2 className="font-display text-lg font-semibold text-hi mb-2">{title}</h2>
              <p className="text-sm leading-relaxed text-lo">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28 bg-surface">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-accent">The system</span>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-hi mt-4 mb-5">
              From first enquiry to won or lost.
            </h2>
            <p className="text-lg text-lo leading-relaxed mb-7">
              This is not another app your team has to remember to use. Titan connects the tools you already rely on and automates the hand-offs that normally get missed.
            </p>
            <div className="space-y-3">
              {['Commercial electrical & M&E', 'Structural steel & fabrication', 'HVAC & building services', 'Civils & specialist subcontractors'].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm text-hi"><Check size={15} className="text-success" />{item}</div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {steps.map(([n, title, text]) => (
              <div key={n} className="flex gap-4 bg-elevated border border-white/[0.08] rounded-2xl p-5">
                <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-semibold shrink-0">{n}</div>
                <div>
                  <h3 className="font-display text-base font-semibold text-hi mb-1">{title}</h3>
                  <p className="text-sm text-lo leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-medium tracking-[0.18em] uppercase text-accent">Why this page is different</span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-hi mt-4 mb-5">
            We will show the proof here as soon as we have earned it.
          </h2>
          <p className="text-lg text-lo leading-relaxed max-w-3xl mx-auto">
            Titan is building its first commercial-contractor case studies now. We will not invent lead counts, revenue numbers or conversion lifts. Until the data exists, this page shows exactly what gets installed and how the system works.
          </p>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
