import type { Metadata } from 'next'
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { businessJsonLd, SITE_URL } from '@/lib/site'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Titan Automations | Growth Systems for UK Commercial Contractors',
  description:
    'Titan Automations builds connected website, enquiry, CRM and follow-up systems for UK commercial contractors so opportunities are captured, tracked and chased consistently.',
  keywords: [
    'contractor automation UK',
    'commercial contractor CRM',
    'M&E contractor automation',
    'electrical contractor CRM',
    'construction lead follow-up',
    'quote follow-up automation',
    'contractor website UK',
    'tender pipeline automation',
    'construction CRM automation',
  ],
  authors: [{ name: 'Titan Automations' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Titan Automations | Growth Systems for UK Commercial Contractors',
    description:
      'Connected website, enquiry, CRM and follow-up systems for commercial contractors who need every opportunity captured and chased.',
    siteName: 'Titan Automations',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Titan Automations contractor growth systems' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Titan Automations | Contractor Growth Systems',
    description: 'Website, enquiry capture, pipeline and follow-up systems for UK commercial contractors.',
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#05070A" />
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body className={`${bricolage.variable} ${dmSans.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
