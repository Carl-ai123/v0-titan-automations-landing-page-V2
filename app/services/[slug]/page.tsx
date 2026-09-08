import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { FloatingNav } from '@/components/floating-nav'
import { Footer } from '@/components/footer'
import { BUSINESS_ID, SITE_URL } from '@/lib/site'
import { servicePages, serviceSlugs } from '@/lib/service-pages'

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = servicePages[slug]
  if (!service) return {}

  const path = `/services/${service.slug}`
  return {
    title: service.seoTitle,
    description: service.description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url: `${SITE_URL}${path}`,
      title: service.seoTitle,
      description: service.description,
    },
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = servicePages[slug]
  if (!service) notFound()

  const url = `${SITE_URL}/services/${service.slug}`
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    url,
    name: service.title,
    serviceType: service.title,
    description: service.description,
    provider: { '@id': BUSINESS_ID },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Kent' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
  }
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <FloatingNav />
      <main id="main-content" className="bg-page min-h-screen">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent mb-6">
              <span className="w-5 h-px bg-accent" aria-hidden="true" />
              Automation Service
            </span>
            <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-hi mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-lo leading-relaxed max-w-2xl mb-8">{service.intro}</p>
            <Link href="/#cta" className="inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-colors">
              Book Free Automation Audit <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-hi mb-5">
              {service.problemTitle}
            </h2>
            <p className="text-lo leading-relaxed max-w-3xl mb-10">{service.problem}</p>
            <div className="grid md:grid-cols-3 gap-5">
              {service.benefits.map((benefit) => (
                <article key={benefit.title} className="bg-elevated border border-white/[0.08] rounded-2xl p-6">
                  <CheckCircle2 size={18} className="text-accent mb-4" />
                  <h3 className="font-display text-base font-semibold text-hi mb-2">{benefit.title}</h3>
                  <p className="text-sm text-lo leading-relaxed">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-hi mb-10">
              How we build it
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {service.steps.map((step, index) => (
                <article key={step.title} className="bg-surface border border-white/[0.08] rounded-2xl p-6">
                  <span className="font-display text-3xl font-bold text-white/10 block mb-3">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="font-display text-base font-semibold text-hi mb-2">{step.title}</h3>
                  <p className="text-sm text-lo leading-relaxed">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-hi mb-10">
              Common questions
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq) => (
                <article key={faq.question} className="border-b border-white/[0.06] pb-6">
                  <h3 className="font-display text-base font-semibold text-hi mb-3">{faq.question}</h3>
                  <p className="text-sm text-lo leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.03em] text-hi mb-4">
              Find out what to automate first
            </h2>
            <p className="text-lo leading-relaxed mb-8">
              Book a free 30-minute audit. We will map the bottleneck, explain the best first step and give you a clear scope.
            </p>
            <Link href="/#cta" className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-colors shadow-[0_8px_32px_rgba(0,157,255,0.22)]">
              Book Free Audit <ArrowRight size={16} />
            </Link>
            <p className="mt-5 text-sm text-dim">
              Also see: <Link href="/services/lead-generation" className="text-accent hover:text-accent/80">Lead Generation</Link>
              {' · '}
              <Link href="/areas/kent" className="text-accent hover:text-accent/80">Kent Services</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
