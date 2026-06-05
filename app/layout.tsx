import type { Metadata } from 'next'
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
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

const siteUrl = 'https://titan-automations.com'

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Titan Automations',
  url: siteUrl,
  email: 'info@titan-automations.com',
  telephone: '+447464256627',
  description: 'Websites and lead generation systems for UK trades and service businesses. Websites, missed-call text-back, CRM automation and follow-up sequences — built in Kent, serving the whole UK.',
  address: { '@type': 'PostalAddress', addressRegion: 'Kent', addressCountry: 'GB' },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Kent' },
    { '@type': 'AdministrativeArea', name: 'United Kingdom' },
  ],
  founder: { '@type': 'Person', name: 'Carl Wilkins' },
  sameAs: [
    'https://www.facebook.com/titanautomations',
    'https://www.instagram.com/titanautomations_/',
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Titan Automations | AI Automation Agency for UK Service Businesses',
  description:
    'Titan Automations builds AI-powered systems that capture leads, automate follow-ups, manage bookings, connect CRMs, and remove repetitive admin for UK service businesses.',
  keywords: [
    'AI automation agency UK',
    'business automation UK',
    'AI chatbot for business',
    'automate business admin',
    'lead follow-up automation',
    'CRM automation service businesses',
    'AI automation agency Kent',
    'missed call automation',
    'booking automation UK',
  ],
  authors: [{ name: 'Titan Automations' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Titan Automations | AI Automation Agency for UK Service Businesses',
    description:
      'AI systems that capture leads, automate follow-ups, manage bookings, and remove manual admin for UK service businesses.',
    siteName: 'Titan Automations',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Titan Automations — AI Automation Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Titan Automations | AI Automation Agency',
    description: 'AI systems that stop leads, bookings, and follow-ups falling through the cracks for UK service businesses.',
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
