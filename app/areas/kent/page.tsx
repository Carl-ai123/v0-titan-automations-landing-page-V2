import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FloatingNav } from '@/components/floating-nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Websites & Lead Generation for Trades in Kent | Titan Automations',
  description: 'Titan Automations serves trades and service businesses across Kent, Medway, Chatham, Maidstone, Canterbury, Ashford and beyond. Websites, automation and lead generation built locally.',
  alternates: { canonical: '/areas/kent' },
  openGraph: {
    title: 'Websites & Lead Generation for Trades in Kent | Titan Automations',
    description: 'Websites, automation and lead generation for trades across Kent, Medway, Chatham, Maidstone, Canterbury, Ashford and the South East.',
    url: 'https://www.titan-automations.com/areas/kent',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Website design and lead generation for trades in Kent',
  provider: { '@id': 'https://www.titan-automations.com/#business' },
  areaServed: { '@type': 'AdministrativeArea', name: 'Kent', containedInPlace: { '@type': 'AdministrativeArea', name: 'South East England' } },
  description: 'Websites and lead generation systems for trades and service businesses across Kent, including Medway, Chatham, Maidstone, Canterbury and Ashford.',
}

const AREAS = ['Medway', 'Chatham', 'Maidstone', 'Canterbury', 'Ashford', 'Gravesend', 'Dartford', 'Tonbridge', 'Tunbridge Wells', 'Folkestone', 'Dover', 'Sittingbourne', 'Faversham', 'Swanley', 'Sevenoaks']

export default function KentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FloatingNav />
      <main id="main-content" className="bg-page min-h-screen">

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-dim mb-4">
                <Link href="/" className="hover:text-lo transition-colors">Home</Link>
                <span>/</span>
                <span className="text-lo">Kent</span>
              </nav>
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent">
                <span className="w-5 h-px bg-accent" aria-hidden="true" />
                Area, Kent &amp; South East
              </span>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-hi mb-6">
              Websites &amp; Lead Generation for Trades in Kent
            </h1>
            <p className="text-xl text-lo leading-relaxed max-w-2xl mb-8">
              Titan Automations is based in Kent. We work with roofers, builders, electricians, plumbers and other service businesses across Medway, Maidstone, Canterbury, Ashford and the wider South East, building the systems that bring in steady, local work.
            </p>
            <Link href="/#cta" className="inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
              Get a Free Audit <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Local context */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-hi mb-6">
              The Kent market for trades
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lo leading-relaxed mb-4">
                  Kent is one of the busiest counties in England for construction and property work. The M2 and M20 corridors have seen sustained housing development around Medway, Maidstone and Ashford for years. Canterbury&apos;s student and rental market keeps demand for maintenance trades consistently high. Coastal areas from Folkestone to Thanet have their own mix of commercial and residential work.
                </p>
                <p className="text-lo leading-relaxed mb-4">
                  Competition is real, there are a lot of trades businesses across the county. The ones that win more than their share have one thing in common: they&apos;re easy to find, easy to contact, and they follow up fast. Most trades businesses in Kent don&apos;t do all three.
                </p>
                <p className="text-lo leading-relaxed">
                  That&apos;s the gap. A properly built website, combined with automation that catches every enquiry and follows up automatically, puts you ahead of the competition without you having to work harder.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-elevated border border-white/[0.08] rounded-xl p-5">
                  <p className="text-sm font-semibold text-hi mb-2">Areas we cover in Kent</p>
                  <div className="flex flex-wrap gap-2">
                    {AREAS.map((area) => (
                      <span key={area} className="text-xs text-lo bg-white/[0.05] border border-white/[0.08] rounded-full px-2.5 py-1">{area}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-elevated border border-accent/20 rounded-xl p-5">
                  <p className="text-sm font-semibold text-accent mb-1">Local knowledge</p>
                  <p className="text-sm text-lo">We&apos;re Kent-based. We know the local market, the competition, and the search terms your customers actually use.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent mb-5">
              <span className="w-5 h-px bg-accent" aria-hidden="true" />
              What we build for Kent trades
            </span>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-hi mb-10">
              Three systems, one goal: steady local work
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Websites for Trades',
                  desc: 'Built to rank in local Kent searches and convert visitors into enquiries. Fast, mobile-first, with booking or contact forms that actually work.',
                  href: '/services/websites-for-trades',
                },
                {
                  title: 'Lead Generation',
                  desc: 'The full system: website that ranks locally, automation that catches every enquiry, follow-up that runs itself. Predictable pipeline instead of feast-or-famine.',
                  href: '/services/lead-generation',
                },
                {
                  title: 'Missed-Call Text-Back',
                  desc: 'Every missed call gets a text back within seconds. Keep the lead warm while you finish the job. Set up in days, running from the first missed call.',
                  href: '/services/missed-call-text-back',
                },
              ].map((s) => (
                <Link key={s.title} href={s.href} className="group bg-surface border border-white/[0.08] hover:border-accent/30 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1">
                  <h3 className="font-display text-base font-semibold text-hi group-hover:text-accent transition-colors">{s.title}</h3>
                  <p className="text-sm text-lo leading-relaxed flex-1">{s.desc}</p>
                  <span className="text-xs text-accent flex items-center gap-1">Learn more <ArrowRight size={12} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Who we work with */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-hi mb-6">
              Trades we work with across Kent
            </h2>
            <p className="text-lo leading-relaxed mb-8 max-w-2xl">
              If your business takes enquiries by phone or form, does local jobs, and relies on a steady flow of new customers, we can help. We work with:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {['Roofers', 'Builders & Contractors', 'Electricians', 'Plumbers & Heating', 'Landscapers & Gardeners', 'Painters & Decorators', 'Kitchen & Bathroom Fitters', 'Cleaners', 'Property Maintenance'].map((trade) => (
                <div key={trade} className="flex items-center gap-2.5 bg-elevated border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-lo">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {trade}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.03em] text-hi mb-4">
              Kent-based. Built for local trades.
            </h2>
            <p className="text-lo leading-relaxed mb-8">
              Free 30-minute audit, we map your local market, look at what competitors are doing, and tell you exactly what would move the needle for your business.
            </p>
            <Link href="/#cta" className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-colors shadow-[0_8px_32px_rgba(0,157,255,0.22)]">
              Book Free Audit <ArrowRight size={16} />
            </Link>
            <p className="mt-4 text-sm text-dim">
              <Link href="/about" className="text-accent hover:text-accent/80">About Titan Automations</Link> · <Link href="/faq" className="text-accent hover:text-accent/80">FAQ</Link>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
