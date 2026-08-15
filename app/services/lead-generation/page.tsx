import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FloatingNav } from '@/components/floating-nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Lead Generation for Trades & Service Businesses | Titan Automations',
  description: 'Predictable local job flow for roofers, trades and service businesses. Website + automation + follow-up so you stop relying on word of mouth alone.',
  alternates: { canonical: '/services/lead-generation' },
  openGraph: {
    title: 'Lead Generation for Trades & Service Businesses | Titan Automations',
    description: 'Predictable local job flow for roofers, trades and service businesses. Stop relying on word of mouth alone.',
    url: 'https://www.titan-automations.com/services/lead-generation',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Lead generation for trades and service businesses',
  provider: { '@id': 'https://www.titan-automations.com/#business' },
  areaServed: [{ '@type': 'AdministrativeArea', name: 'Kent' }, { '@type': 'AdministrativeArea', name: 'United Kingdom' }],
  description: 'Predictable local job flow for trades and service businesses using website, automation and follow-up systems.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How do trades businesses get more leads?', acceptedAnswer: { '@type': 'Answer', text: "Most trades get work through word of mouth and directories, but that's unpredictable. A reliable system combines a website that ranks locally and turns visitors into enquiries, plus automation like missed-call text-back and instant follow-up so no lead goes cold. The aim is steady, predictable local jobs instead of feast-or-famine." } },
    { '@type': 'Question', name: 'How long before I see results?', acceptedAnswer: { '@type': 'Answer', text: 'Automations like missed-call text-back work from day one. SEO takes longer, typically 3 to 6 months before you see meaningful organic traffic. The combination of both means you get quick wins while building long-term visibility.' } },
  ],
}

const FAQS = [
  {
    q: 'How do trades businesses get more leads?',
    a: "Most trades get work through word of mouth and directories, but that's unpredictable. A reliable system combines a website that ranks locally and turns visitors into enquiries, plus automation like missed-call text-back and instant follow-up so no lead goes cold. The aim is steady, predictable local jobs instead of feast-or-famine.",
  },
  {
    q: 'How long before I see results?',
    a: 'Automations like missed-call text-back work from day one. SEO takes longer, typically 3 to 6 months before meaningful organic traffic. The combination of both means quick wins while building long-term visibility.',
  },
  {
    q: 'Do I need to run paid ads?',
    a: "Not necessarily. We focus first on organic local search and automation, capturing leads you're already getting but losing. Paid ads can be layered in later if organic isn't enough. We'll tell you what makes sense for your market.",
  },
]

export default function LeadGenerationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <FloatingNav />
      <main className="bg-page min-h-screen">

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent">
                <span className="w-5 h-px bg-accent" aria-hidden="true" />
                Service
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-hi mb-6">
              Lead Generation for Roofers &amp; Trades
            </h1>
            <p className="text-xl text-lo leading-relaxed max-w-2xl mb-8">
              Feast-or-famine is the default for most trades businesses. A proper lead generation system turns that into a steady, predictable pipeline, without relying on word of mouth, directories, or paid ads alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#cta" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                Get a Free Audit <ArrowRight size={16} />
              </Link>
              <Link href="/services/missed-call-text-back" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-hi border border-white/20 rounded-full hover:border-white/40 transition-colors">
                Missed-Call Text-Back →
              </Link>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-hi mb-6">
              Word of mouth isn't a lead generation strategy
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lo leading-relaxed mb-4">
                  Referrals are great when they come in. But you can't control the timing, the volume, or the quality. One quiet month and cashflow gets tight. Two quiet months and you're quoting for jobs that aren't right for you just to keep busy.
                </p>
                <p className="text-lo leading-relaxed mb-4">
                  Directories like Checkatrade and MyBuilder send you shared leads, same job going to four or five other firms. You're competing on price before you've even had a conversation.
                </p>
                <p className="text-lo leading-relaxed">
                  A lead generation system gives you jobs that come to you specifically, people who found your website, read about what you do, and decided to get in touch. That's a very different conversation.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-elevated border border-error/20 rounded-xl p-5">
                  <p className="text-sm font-semibold text-error mb-1">Feast-or-famine cycle</p>
                  <p className="text-sm text-lo">Too busy to chase leads when you're working. Not enough work when you're free. No way to predict next month's pipeline.</p>
                </div>
                <div className="bg-elevated border border-accent/20 rounded-xl p-5">
                  <p className="text-sm font-semibold text-accent mb-1">Predictable pipeline</p>
                  <p className="text-sm text-lo">Enquiries coming in consistently. Every lead followed up automatically. You only speak to people who are already interested.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent mb-5">
              <span className="w-5 h-px bg-accent" aria-hidden="true" />
              The system
            </span>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-hi mb-10">
              Three things that work together
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'A website that ranks locally',
                  desc: 'Built to appear when people in your area search for what you do. Not a brochure, a machine that captures intent and turns it into enquiries.',
                },
                {
                  num: '02',
                  title: 'Automation that catches what you miss',
                  desc: 'Missed-call text-back, instant enquiry responses, booking confirmations. Every lead is acknowledged the moment they reach out, even when you\'re on a job.',
                },
                {
                  num: '03',
                  title: 'Follow-up that runs itself',
                  desc: 'Most jobs go to whoever follows up fastest and most consistently. Automated sequences send the right message at the right time, without you remembering to do it.',
                },
              ].map((s) => (
                <div key={s.num} className="bg-surface border border-white/[0.08] rounded-2xl p-6">
                  <span className="font-display text-3xl font-bold text-white/10 block mb-3">{s.num}</span>
                  <h3 className="font-display text-base font-semibold text-hi mb-2">{s.title}</h3>
                  <p className="text-sm text-lo leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-lo">
              Each piece works on its own. Together they compound. See how the{' '}
              <Link href="/services/missed-call-text-back" className="text-accent hover:text-accent/80 transition-colors">missed-call text-back</Link> and{' '}
              <Link href="/services/websites-for-trades" className="text-accent hover:text-accent/80 transition-colors">website</Link> components work in detail.
            </p>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-hi mb-6">
              Who this is for
            </h2>
            <p className="text-lo leading-relaxed mb-8 max-w-2xl">
              This works for any owner-led service business where leads come in by phone, web form, or referral and the owner (or a small team) handles enquiries. Typical clients include roofers, electricians, plumbers, builders, landscapers, cleaners, and other trades and property service businesses across the UK.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              {[
                'You\'re winning work but it\'s inconsistent',
                'You miss calls when you\'re on site',
                'Leads go cold because follow-up is manual',
                'You rely on Checkatrade or directories',
                'You have no real online presence',
                'You want to grow without hiring first',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-lo">
                  <span className="text-accent mt-0.5">→</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-hi mb-10">Common questions</h2>
            <div className="space-y-6">
              {FAQS.map((faq) => (
                <div key={faq.q} className="border-b border-white/[0.06] pb-6">
                  <h3 className="font-display text-base font-semibold text-hi mb-3">{faq.q}</h3>
                  <p className="text-sm text-lo leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-dim">
              More questions? <Link href="/faq" className="text-accent hover:text-accent/80 transition-colors">See the full FAQ →</Link>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface border-t border-white/[0.06]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.03em] text-hi mb-4">
              Find out where your leads are going
            </h2>
            <p className="text-lo leading-relaxed mb-8">
              Free 20-minute audit. We map where enquiries are leaking and tell you what to fix first. No obligation.
            </p>
            <Link href="/#cta" className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-colors shadow-[0_8px_32px_rgba(0,157,255,0.22)]">
              Book Free Audit <ArrowRight size={16} />
            </Link>
            <p className="mt-4 text-sm text-dim">Also see: <Link href="/services/websites-for-trades" className="text-accent hover:text-accent/80">Websites for Trades</Link> · <Link href="/areas/kent" className="text-accent hover:text-accent/80">Kent</Link></p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
