import type { Metadata } from 'next'
import { Geist, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import Script from 'next/script'
import './globals.css'

const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
});

const siteUrl = 'https://titan-automations.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Titan Automations | AI Automation Agency | Kent & South East',
  description: 'We design and build AI-powered systems for businesses that are ready to stop doing things manually. Websites, automations, chatbots — all connected, all yours.',
  keywords: ['AI automation', 'business automation', 'Kent', 'South East England', 'chatbots', 'CRM', 'booking systems'],
  authors: [{ name: 'Titan Automations' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Titan Automations | AI Automation Agency | Kent & South East',
    description: 'We design and build AI-powered systems for businesses that are ready to stop doing things manually. Websites, automations, chatbots — all connected, all yours.',
    siteName: 'Titan Automations',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Titan Automations — AI Automation Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Titan Automations | AI Automation Agency',
    description: 'AI-powered websites, automations, chatbots, and CRM systems for ambitious businesses in Kent & South East England.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What exactly do you build?',
          acceptedAnswer: { '@type': 'Answer', text: 'Websites, booking systems, CRM automations, AI chatbots, lead generation pipelines, review systems, and custom integrations between any tools your business already uses.' },
        },
        {
          '@type': 'Question',
          name: 'How long does it take?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most systems go live within 14 days of our first call. Simple websites in under a week.' },
        },
        {
          '@type': 'Question',
          name: 'Do I own everything?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every website, workflow and system is yours. No lock-in, no platform dependency.' },
        },
        {
          '@type': 'Question',
          name: 'What does it cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'Project builds start from £1,200. Monthly retainers from £150/month. We\'ll give you a clear fixed quote before anything starts.' },
        },
        {
          '@type': 'Question',
          name: 'Do you work outside Kent?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes — we work with businesses across the South East and remotely across the UK.' },
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#business`,
      name: 'Titan Automations',
      description: 'AI automation agency specialising in websites, booking systems, CRM pipelines, chatbots, and lead generation for businesses in Kent and the South East.',
      url: siteUrl,
      email: 'carl@titan-automations.com',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Kent',
        addressCountry: 'GB',
      },
      areaServed: ['Kent', 'South East England', 'United Kingdom'],
      priceRange: '££',
      serviceType: 'AI Automation',
    },
    {
      '@type': 'Service',
      '@id': `${siteUrl}/#services`,
      name: 'AI Business Automation',
      provider: { '@id': `${siteUrl}/#business` },
      serviceType: 'Business Process Automation',
      offers: [
        { '@type': 'Offer', name: 'AI-Powered Websites' },
        { '@type': 'Offer', name: 'Booking & Scheduling Systems' },
        { '@type': 'Offer', name: 'CRM & Lead Pipelines' },
        { '@type': 'Offer', name: 'AI Chatbots' },
        { '@type': 'Offer', name: 'Review & Recall Systems' },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body className={`${geist.variable} ${dmSans.variable} font-body antialiased bg-light text-text-light dark:bg-dark dark:text-text-dark`}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
