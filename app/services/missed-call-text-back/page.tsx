import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FloatingNav } from '@/components/floating-nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Missed-Call Text-Back for Trades | Titan Automations',
  description: 'Automatically text anyone who calls and you miss. Capture the lead instantly instead of losing the job to whoever answers first. Set up in days.',
  openGraph: {
    title: 'Missed-Call Text-Back for Trades | Titan Automations',
    description: 'Automatically text anyone who calls and you miss. Capture the lead instantly instead of losing the job to whoever answers first.',
    url: 'https://titan-automations.com/services/missed-call-text-back',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Missed call text-back automation for trades and service businesses',
  provider: { '@type': 'ProfessionalService', name: 'Titan Automations', url: 'https://titan-automations.com' },
  areaServed: [{ '@type': 'AdministrativeArea', name: 'Kent' }, { '@type': 'AdministrativeArea', name: 'United Kingdom' }],
  description: 'Automated text message sent to any caller you miss, capturing the lead before they call someone else.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is a missed-call text-back system?', acceptedAnswer: { '@type': 'Answer', text: "When you're up a roof or on a job you can't always answer the phone — and a missed call is usually a lost job. A missed-call text-back system automatically texts the caller the moment you miss them, so they know you'll ring back. It captures the lead instantly instead of them calling the next firm." } },
    { '@type': 'Question', name: 'How quickly does the text go out?', acceptedAnswer: { '@type': 'Answer', text: 'Within seconds of the missed call. Speed is the whole point — the sooner they hear from you, the less likely they are to call someone else.' } },
    { '@type': 'Question', name: 'Can I customise the message?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We set up the message to sound like you — your name, your business, your tone. You can update it anytime. We also set up routing so that replies come to your phone as a normal conversation.' } },
  ],
}

const FAQS = [
  {
    q: 'What is a missed-call text-back system?',
    a: "When you're up a roof or on a job you can't always answer the phone — and a missed call is usually a lost job. A missed-call text-back system automatically texts the caller the moment you miss them, so they know you'll ring back. It captures the lead instantly instead of them calling the next firm.",
  },
  {
    q: 'How quickly does the text go out?',
    a: 'Within seconds of the missed call. Speed is the whole point — the sooner they hear from you, the less likely they are to call someone else.',
  },
  {
    q: 'Can I customise the message?',
    a: "Yes. We set up the message to sound like you — your name, your business, your tone. You can update it anytime. Replies come through as a normal text conversation on your phone.",
  },
  {
    q: 'What if I already have someone answering calls?',
    a: "The text-back only fires on genuine missed calls — if your call is answered, nothing goes out. It's a safety net, not a replacement for a real conversation.",
  },
]

export default function MissedCallTextBackPage() {
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
              Never Lose a Job to a Missed Call
            </h1>
            <p className="text-xl text-lo leading-relaxed max-w-2xl mb-8">
              A missed call from a new customer is almost always a lost job. They'll ring the next number on Google before you've had a chance to call back. Missed-call text-back fixes this in seconds.
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

        {/* How it works */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-hi mb-10">
              How it works
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { step: '01', title: 'You miss a call', desc: "You're on the tools, driving, or just can't get to the phone. The call goes unanswered." },
                { step: '02', title: 'Text goes out instantly', desc: 'Within seconds, the caller receives a text from your number: "Hi, I missed your call — I\'ll ring you back shortly. Carl from [Business]."' },
                { step: '03', title: 'Lead is captured', desc: "They know you're real and they'll hear from you. Most stay. The ones who reply get an immediate conversation started." },
              ].map((s) => (
                <div key={s.step} className="bg-elevated border border-white/[0.08] rounded-2xl p-6">
                  <span className="font-display text-3xl font-bold text-white/10 block mb-3">{s.step}</span>
                  <h3 className="font-display text-base font-semibold text-hi mb-2">{s.title}</h3>
                  <p className="text-sm text-lo leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-elevated border border-accent/20 rounded-2xl p-6">
              <p className="text-sm text-lo leading-relaxed">
                <span className="text-accent font-semibold">The problem it solves: </span>
                Most new callers don't leave voicemails and won't try again. By the time you see the missed call and ring back — 20 minutes, an hour, end of day — they've already booked someone who answered. The text-back keeps the door open.
              </p>
            </div>
          </div>
        </section>

        {/* The maths */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-hi mb-6">
              What a missed call actually costs
            </h2>
            <p className="text-lo leading-relaxed mb-8 max-w-2xl">
              If you miss 5 calls a week and convert 30% of answered enquiries into jobs, that's 1–2 jobs a week you're not getting. At an average job value of £500–£2,000, a simple text-back system pays for itself many times over.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Missed calls per week', value: '5', sub: 'Typical for a busy sole trader' },
                { label: 'Jobs lost per month', value: '4–8', sub: 'At a 30–40% enquiry-to-job rate' },
                { label: 'Revenue at risk', value: '£2k–£16k', sub: 'Per month, depending on job value' },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface border border-white/[0.08] rounded-2xl p-6 text-center">
                  <p className="font-display text-3xl font-bold text-hi mb-1">{stat.value}</p>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">{stat.label}</p>
                  <p className="text-xs text-dim">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.03em] text-hi mb-4">
              Stop losing jobs to the missed call
            </h2>
            <p className="text-lo leading-relaxed mb-8">
              Takes minutes to set up. Works from day one. Book a free audit and we'll show you exactly how it fits into your setup.
            </p>
            <Link href="/#cta" className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-colors shadow-[0_8px_32px_rgba(0,157,255,0.22)]">
              Book Free Audit <ArrowRight size={16} />
            </Link>
            <p className="mt-4 text-sm text-dim">Also see: <Link href="/services/websites-for-trades" className="text-accent hover:text-accent/80">Websites for Trades</Link> · <Link href="/services/lead-generation" className="text-accent hover:text-accent/80">Lead Generation</Link></p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
