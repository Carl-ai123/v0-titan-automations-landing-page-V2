import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ContractorDemo } from '@/components/contractor-demo'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Interactive Contractor Growth System Demo | Titan Automations',
  description: 'Try a fictional commercial contractor enquiry workflow from capture through pipeline, quote follow-up and outcome tracking.',
  alternates: { canonical: '/demo' },
}

export default function DemoPage() {
  return (
    <main id="main-content" className="min-h-screen bg-page overflow-x-hidden">
      <section className="px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-lo hover:text-hi transition-colors mb-8">
            <ArrowLeft size={15} /> Back to Titan
          </Link>
          <div className="max-w-3xl">
            <span className="text-xs font-medium tracking-[0.18em] uppercase text-accent">Interactive demo</span>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-hi mt-4 mb-5">
              See how a contractor enquiry becomes a tracked opportunity.
            </h1>
            <p className="text-lg text-lo leading-relaxed">
              This is a fictional demonstration of the Titan Contractor Growth System. Change the enquiry details, create the opportunity, then move it through qualification, quote, follow-up and won stages.
            </p>
          </div>
        </div>
      </section>
      <ContractorDemo />
      <Footer />
    </main>
  )
}
