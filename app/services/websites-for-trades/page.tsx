import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { FloatingNav } from '@/components/floating-nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Websites for Trades & Service Businesses | Titan Automations',
  description: 'Professional websites for tradesmen and service businesses that rank locally and turn visitors into booked enquiries. Built in Kent, serving the whole UK.',
  alternates: { canonical: '/services/websites-for-trades' },
  openGraph: {
    title: 'Websites for Trades & Service Businesses | Titan Automations',
    description: 'Professional websites for tradesmen and service businesses that rank locally and turn visitors into booked enquiries.',
    url: 'https://www.titan-automations.com/services/websites-for-trades',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Website design and development for trades and service businesses',
  provider: { '@id': 'https://www.titan-automations.com/#business' },
  areaServed: [{ '@type': 'AdministrativeArea', name: 'Kent' }, { '@type': 'AdministrativeArea', name: 'United Kingdom' }],
  description: 'Conversion-focused websites for tradesmen and service businesses that rank in local search and turn visitors into enquiries.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do I need a website if I get work from word of mouth?', acceptedAnswer: { '@type': 'Answer', text: 'Word of mouth still works, but people check you online before they call. No website, or a poor one, quietly costs you jobs you never hear about. A professional site backs up referrals, ranks for local searches, and works while you\'re on site, turning "I\'ll think about it" into booked work.' } },
    { '@type': 'Question', name: 'How long does it take to get a new website live?', acceptedAnswer: { '@type': 'Answer', text: 'A focused trades website is usually live within a couple of weeks, depending on content and how fast photos and details come through. The priority is a working, converting site online fast, then improving it, not waiting months for perfect.' } },
    { '@type': 'Question', name: 'What makes Titan Automations different from other web agencies?', acceptedAnswer: { '@type': 'Answer', text: 'Titan Automations is built by someone who understands how trades actually win work, missed calls, quote follow-ups, local reputation. It\'s not just pretty websites; it\'s lead systems explained in plain English with no agency jargon.' } },
  ],
}

const INCLUDED = [
  'Conversion-focused design built to turn visitors into enquiries',
  'Local SEO setup so you appear in Google searches near you',
  'Mobile-first, most of your visitors are on a phone',
  'Online booking or enquiry form embedded from day one',
  'Fast load times, slow sites lose jobs before anyone reads a word',
  'Clear calls to action on every page',
  'Google Business Profile optimisation guidance',
  'Hosted and maintained, no technical headaches for you',
]

const FAQS = [
  {
    q: 'Do I need a website if I get work from word of mouth?',
    a: 'Word of mouth still works, but people check you online before they call. No website, or a poor one, quietly costs you jobs you never hear about. A professional site backs up referrals, ranks for local searches, and works while you\'re on site, turning "I\'ll think about it" into booked work.',
  },
  {
    q: 'How long does it take to get a new website live?',
    a: 'A focused trades website is usually live within a couple of weeks, depending on content and how fast photos and details come through. The priority is a working, converting site online fast, then improving it, not waiting months for perfect.',
  },
  {
    q: 'What makes Titan Automations different from other web agencies?',
    a: "Titan Automations is built by someone who understands how trades and service businesses actually win work, missed calls, quote follow-ups, local reputation. It's not just pretty websites; it's lead systems explained in plain English with no agency jargon.",
  },
  {
    q: 'Will my website rank on Google?',
    a: "We build every site with local SEO from the ground up, proper page titles, structured data, fast load times, and a Google Business Profile strategy. You won't rank overnight, but you'll have the foundations in place from day one rather than retrofitting later.",
  },
]

export default function WebsitesForTradesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <FloatingNav />
      <main id="main-content" className="bg-page min-h-screen">

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
              Websites for Tradesmen That Win Work
            </h1>
            <p className="text-xl text-lo leading-relaxed max-w-2xl mb-8">
              Most trades websites look the part but don&apos;t actually bring in jobs. We build sites that rank locally, load fast, and turn visitors into enquiries, not ones that just sit there looking pretty.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#cta" className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                Get a Free Audit <ArrowRight size={16} />
              </Link>
              <Link href="/services/lead-generation" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-hi border border-white/20 rounded-full hover:border-white/40 transition-colors">
                See Lead Generation →
              </Link>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-hi mb-6">
              A bad website quietly costs you jobs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lo leading-relaxed mb-4">
                  Most tradespeople rely on word of mouth, and it works, until it doesn&apos;t. When work slows down, the phone stops ringing and there&apos;s no reliable way to get it going again.
                </p>
                <p className="text-lo leading-relaxed mb-4">
                  Even for businesses with strong referrals, the first thing a new prospect does is Google you. If they find nothing, or a site that looks like it was built in 2009, a chunk of them quietly move on to someone who looks more established.
                </p>
                <p className="text-lo leading-relaxed">
                  You never know how many jobs you&apos;ve lost this way. That&apos;s the problem, the cost is invisible.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-elevated border border-error/20 rounded-xl p-5">
                  <p className="text-sm font-semibold text-error mb-1">The real cost of no online presence</p>
                  <p className="text-sm text-lo">Every prospect who Googles you and finds nothing, or finds a poor site, and moves on is a job you lost without knowing it. Multiply that over a year and the number is significant.</p>
                </div>
                <div className="bg-elevated border border-accent/20 rounded-xl p-5">
                  <p className="text-sm font-semibold text-accent mb-1">What a good site does</p>
                  <p className="text-sm text-lo">Ranks in local searches. Backs up every referral. Converts visitors into calls and enquiries. Works while you&apos;re on site, in the evening, at weekends.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent mb-5">
              <span className="w-5 h-px bg-accent" aria-hidden="true" />
              What&apos;s included
            </span>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-hi mb-10">
              Built to rank and convert, not just look good
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {INCLUDED.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-surface border border-white/[0.08] rounded-xl p-4">
                  <CheckCircle2 size={16} className="text-success shrink-0 mt-0.5" />
                  <p className="text-sm text-lo leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent mb-5">
              <span className="w-5 h-px bg-accent" aria-hidden="true" />
              The process
            </span>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-hi mb-10">
              From audit call to live in two weeks
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: '01', title: 'Free audit call', desc: '30 minutes. We map your business, your market, what you want to rank for, and what the site needs to do.' },
                { step: '02', title: 'Build', desc: 'We write the copy, design the pages, set up the forms and booking system, and connect everything. You review and approve.' },
                { step: '03', title: 'Live + optimised', desc: 'Site goes live. We set up analytics, Google Search Console, and give you a plain-English guide to what to do next.' },
              ].map((s) => (
                <div key={s.step} className="bg-elevated border border-white/[0.08] rounded-2xl p-6">
                  <span className="font-display text-3xl font-bold text-white/10 block mb-3">{s.step}</span>
                  <h3 className="font-display text-base font-semibold text-hi mb-2">{s.title}</h3>
                  <p className="text-sm text-lo leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-hi mb-10">
              Common questions
            </h2>
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
              Find out what your site should be doing
            </h2>
            <p className="text-lo leading-relaxed mb-8">
              Free 30-minute audit. We look at your current setup, your local market, and tell you exactly what to fix first. No obligation.
            </p>
            <Link href="/#cta" className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-colors shadow-[0_8px_32px_rgba(0,157,255,0.22)]">
              Book Free Audit <ArrowRight size={16} />
            </Link>
            <p className="mt-4 text-sm text-dim">Also see: <Link href="/services/lead-generation" className="text-accent hover:text-accent/80">Lead Generation</Link> · <Link href="/services/missed-call-text-back" className="text-accent hover:text-accent/80">Missed-Call Text-Back</Link></p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
