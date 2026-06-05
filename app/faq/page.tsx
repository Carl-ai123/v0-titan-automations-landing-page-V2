import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FloatingNav } from '@/components/floating-nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Titan Automations',
  description: 'Answers to common questions about websites, lead generation and automation for UK trades and service businesses. Free audit, pricing, timelines and more.',
  openGraph: {
    title: 'FAQ | Titan Automations',
    description: 'Common questions about websites, lead generation and automation for UK service businesses.',
    url: 'https://titan-automations.com/faq',
  },
}

const FAQS = [
  {
    category: 'Lead generation',
    items: [
      {
        q: 'How do trades businesses get more leads?',
        a: "Most trades get work through word of mouth and directories, but that's unpredictable. A reliable system combines a website that ranks locally and turns visitors into enquiries, plus automation like missed-call text-back and instant follow-up so no lead goes cold. The aim is steady, predictable local jobs instead of feast-or-famine.",
      },
      {
        q: 'What is a missed-call text-back system?',
        a: "When you're up a roof or on a job you can't always answer the phone — and a missed call is usually a lost job. A missed-call text-back system automatically texts the caller the moment you miss them, so they know you'll ring back. It captures the lead instantly instead of them calling the next firm.",
      },
    ],
  },
  {
    category: 'Websites',
    items: [
      {
        q: 'Do I need a website if I get work from word of mouth?',
        a: 'Word of mouth still works, but people check you online before they call. No website, or a poor one, quietly costs you jobs you never hear about. A professional site backs up referrals, ranks for local searches, and works while you\'re on site — turning "I\'ll think about it" into booked work.',
      },
      {
        q: 'How long does it take to get a new website live?',
        a: "A focused trades website is usually live within a couple of weeks, depending on content and how fast photos and details come through. Lead generation and automation can be layered on after launch. The priority is a working, converting site online fast, then improving it — not waiting months for perfect.",
      },
    ],
  },
  {
    category: 'Pricing & process',
    items: [
      {
        q: 'How much does a website or automation system cost?',
        a: "Cost depends on the scope — what the site needs to do, whether automation is included, and how much content is required. We scope everything on the free audit call and give you a fixed price before any work starts. No surprises.",
      },
      {
        q: 'What makes Titan Automations different from other web agencies?',
        a: "Titan Automations is built by someone who understands how trades and service businesses actually win work — missed calls, quote follow-ups, local reputation. It's not just pretty websites; it's lead systems that bring in jobs, explained in plain English with no agency jargon.",
      },
      {
        q: 'What exactly do you automate?',
        a: 'Lead capture, AI qualification, CRM pipeline management, follow-up sequences, appointment booking and reminders, review requests, missed call recovery, internal admin tasks, and connecting your existing tools so data flows between them automatically.',
      },
      {
        q: 'Do I own everything you build?',
        a: "Yes. Every workflow, website, and system is fully yours. No platform lock-in. No recurring licence that stops working if you leave. You can hand it to any developer or agency in the future.",
      },
      {
        q: 'How long does it take to build?',
        a: "Most single-system builds go live within 14 days of the first call. Complex multi-system builds are scoped individually — we'll tell you exactly how long before any work starts.",
      },
      {
        q: 'What happens on the audit call?',
        a: "It's a 20-minute conversation. We ask about your current process — how leads come in, where they get lost, what admin your team does repeatedly. At the end, we tell you what we'd automate first and roughly what it would cost. No hard sell. No obligation.",
      },
    ],
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))
  ),
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <FloatingNav />
      <main className="bg-page min-h-screen">

        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent">
                <span className="w-5 h-px bg-accent" aria-hidden="true" />
                FAQ
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-hi mb-6">
              Frequently asked questions
            </h1>
            <p className="text-xl text-lo leading-relaxed">
              Answers to the questions we get most often about websites, lead generation, automation, and how the whole thing works.
            </p>
          </div>
        </section>

        {/* FAQ content */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-14">
            {FAQS.map((cat) => (
              <div key={cat.category}>
                <h2 className="font-display text-sm font-semibold tracking-[0.14em] uppercase text-accent mb-6">{cat.category}</h2>
                <div className="space-y-6">
                  {cat.items.map((faq) => (
                    <div key={faq.q} className="border-b border-white/[0.06] pb-6">
                      <h3 className="font-display text-base font-semibold text-hi mb-3">{faq.q}</h3>
                      <p className="text-sm text-lo leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related links */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-surface border-t border-white/[0.06]">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-dim mb-4">More detail on each service:</p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Websites for Trades', href: '/services/websites-for-trades' },
                { label: 'Lead Generation', href: '/services/lead-generation' },
                { label: 'Missed-Call Text-Back', href: '/services/missed-call-text-back' },
                { label: 'Kent area', href: '/areas/kent' },
                { label: 'About', href: '/about' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-xs text-accent hover:text-accent/80 border border-accent/20 rounded-full px-3 py-1.5 transition-colors hover:bg-accent/5">
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.03em] text-hi mb-4">
              Still have questions?
            </h2>
            <p className="text-lo leading-relaxed mb-8">
              The free audit call is the best way to get answers specific to your business. 20 minutes, no obligation.
            </p>
            <Link href="/#cta" className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-colors shadow-[0_8px_32px_rgba(0,157,255,0.22)]">
              Book Free Audit <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
