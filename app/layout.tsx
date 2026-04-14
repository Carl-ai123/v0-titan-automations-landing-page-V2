import type { Metadata } from 'next'
import { Geist, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
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

export const metadata: Metadata = {
  title: 'Titan Automations | AI Automation Agency | Kent & South East',
  description: 'We design and build AI-powered systems for businesses that are ready to stop doing things manually. Websites, automations, chatbots — all connected, all yours.',
  keywords: ['AI automation', 'business automation', 'Kent', 'South East England', 'chatbots', 'CRM', 'booking systems'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geist.variable} ${dmSans.variable} font-body antialiased bg-light text-text-light dark:bg-dark dark:text-text-dark`}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
