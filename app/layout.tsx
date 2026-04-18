import type { Metadata } from 'next'
import { Geist, DM_Sans, Audiowide } from 'next/font/google'
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

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-audiowide',
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body className={`${geist.variable} ${dmSans.variable} ${audiowide.variable} font-body antialiased bg-light text-text-light dark:bg-dark dark:text-text-dark`}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
