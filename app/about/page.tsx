import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FloatingNav } from '@/components/floating-nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'About Titan Automations | Carl Wilkins, Kent',
  description: 'Titan Automations is built by Carl Wilkins — a Kent-based automation specialist who helps UK service businesses and trades win more local work with websites and lead generation systems.',
  openGraph: {
    title: 'About Titan Automations | Carl Wilkins, Kent',
    description: 'Titan Automations is built by Carl Wilkins — helping UK service businesses win more local work with websites and lead generation systems.',
    url: 'https://titan-automations.com/about',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Titan Automations',
  url: 'https://titan-automations.com',
  email: 'info@titan-automations.com',
  telephone: '+447464256627',
  description: 'Websites and lead generation systems for UK trades and service businesses.',
  address: { '@type': 'PostalAddress', addressRegion: 'Kent', addressCountry: 'GB' },
  areaServed: [{ '@type': 'AdministrativeArea', name: 'Kent' }, { '@type': 'AdministrativeArea', name: 'United Kingdom' }],
  founder: { '@type': 'Person', name: 'Carl Wilkins', jobTitle: 'Founder', worksFor: { '@type': 'Organization', name: 'Titan Automations' } },
  sameAs: [
    'https://www.facebook.com/titanautomations',
    'https://www.instagram.com/titanautomations_/',
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FloatingNav />
      <main className="bg-page min-h-screen">

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent">
                <span className="w-5 h-px bg-accent" aria-hidden="true" />
                About
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-hi mb-6">
              Built for the businesses that keep things running
            </h1>
            <p className="text-xl text-lo leading-relaxed max-w-2xl">
              Titan Automations helps UK service businesses — trades, clinics, property businesses, local services — stop losing work to missed calls, slow follow-up and no online presence. We build the systems that sort it.
            </p>
          </div>
        </section>

        {/* Founder */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent mb-5">
                  <span className="w-5 h-px bg-accent" aria-hidden="true" />
                  The founder
                </span>
                <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-hi mb-6">
                  Carl Wilkins
                </h2>
                <p className="text-lo leading-relaxed mb-4">
                  Carl comes from a trades and construction background — he's worked on site as a steel erector and knows the industry from the ground up. That background shapes how Titan Automations works: no fluff, no agency jargon, just systems that solve real problems.
                </p>
                <p className="text-lo leading-relaxed mb-4">
                  The businesses we work with don't want to become marketing experts. They want the phone to ring, enquiries to be followed up, and jobs to be booked — without adding another thing to their plate. That's what we build.
                </p>
                <p className="text-lo leading-relaxed mb-6">
                  Titan Automations is based in Kent and works with service businesses across the UK. Every system is built from scratch for the specific business — no templates, no one-size-fits-all packages.
                </p>
                <div className="flex items-center gap-3 text-sm text-dim">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  Kent, United Kingdom · info@titan-automations.com
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-elevated border border-white/[0.08] rounded-2xl p-6">
                  <p className="text-sm font-semibold text-hi mb-3">Why service businesses specifically</p>
                  <p className="text-sm text-lo leading-relaxed">
                    Service businesses — trades especially — have a specific pattern: great at the work, not set up for the admin and follow-up side. Leads come in and fall through the cracks. Calls are missed. Quotes don't get chased. It's not laziness, it's just that no one set up a system. That's the gap we fill.
                  </p>
                </div>
                <div className="bg-elevated border border-accent/20 rounded-2xl p-6">
                  <p className="text-sm font-semibold text-accent mb-3">What makes this different</p>
                  <p className="text-sm text-lo leading-relaxed">
                    Most agencies build websites. We build lead systems — the website plus the automation that catches every enquiry and follows up automatically. The goal isn't a pretty site; it's more jobs at the end of each month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-hi mb-10">
              How we work
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Fixed scope, fixed price', desc: "You know exactly what you're getting and what it costs before we start. No surprises, no scope creep, no invoice at the end that doesn't match the quote." },
                { title: 'You own everything', desc: "Every system, every workflow, every piece of code is yours. There's no recurring licence that stops working if you leave. You can take it anywhere." },
                { title: 'Plain English, always', desc: "We don't use marketing jargon. We explain what we're building, why it works, and what to expect — in terms that make sense to someone running a real business." },
                { title: 'Fast delivery', desc: 'Most builds go live within 14 days of the first call. We move quickly because a system sitting in development isn\'t catching leads or saving you time.' },
              ].map((v) => (
                <div key={v.title} className="bg-surface border border-white/[0.08] rounded-2xl p-6">
                  <h3 className="font-display text-base font-semibold text-hi mb-2">{v.title}</h3>
                  <p className="text-sm text-lo leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services links */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.03em] text-hi mb-8">What we build</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: 'Websites for Trades', href: '/services/websites-for-trades', desc: 'Rank locally. Convert visitors.' },
                { title: 'Lead Generation', href: '/services/lead-generation', desc: 'Predictable pipeline.' },
                { title: 'Missed-Call Text-Back', href: '/services/missed-call-text-back', desc: 'Never lose a lead to a missed call.' },
              ].map((s) => (
                <Link key={s.title} href={s.href} className="group bg-elevated border border-white/[0.08] hover:border-accent/30 rounded-xl p-5 transition-all hover:-translate-y-0.5">
                  <p className="text-sm font-semibold text-hi group-hover:text-accent transition-colors mb-1">{s.title}</p>
                  <p className="text-xs text-dim">{s.desc}</p>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-dim">
              We also serve <Link href="/areas/kent" className="text-accent hover:text-accent/80 transition-colors">trades and service businesses across Kent</Link> and the wider South East.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.03em] text-hi mb-4">
              Start with a free audit
            </h2>
            <p className="text-lo leading-relaxed mb-8">
              20 minutes. We map your business, look at what's leaking, and tell you what to fix first. No commitment required.
            </p>
            <Link href="/#cta" className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-colors shadow-[0_8px_32px_rgba(0,157,255,0.22)]">
              Book Free Audit <ArrowRight size={16} />
            </Link>
            <p className="mt-4 text-sm text-dim">
              <Link href="/privacy" className="text-accent hover:text-accent/80">Privacy Policy</Link> · <Link href="/faq" className="text-accent hover:text-accent/80">FAQ</Link>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
