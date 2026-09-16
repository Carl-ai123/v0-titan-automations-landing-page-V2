import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ReusableContractorSiteDemo } from '@/components/reusable-contractor-site-demo'

export const metadata: Metadata = {
  title: 'Contractor Website Concept Demo | Titan Automations',
  description: 'A fictional personalised website concept used by Titan Automations during contractor sales conversations.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function SiteDemoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#071018]" />}>
      <ReusableContractorSiteDemo />
    </Suspense>
  )
}
