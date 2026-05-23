import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Titan Automations',
  description: 'How Titan Automations collects, uses, and protects your personal data in line with UK GDPR.',
  robots: { index: true, follow: true },
}

const sections = [
  {
    id: 'who-we-are',
    heading: 'Who we are',
    content: [
      'Titan Automations is a sole trader business operated by Carl Wilkins, based in Kent, United Kingdom.',
      'Carl Wilkins is the data controller for any personal data collected through this website.',
      'If you have any questions about this policy or how your data is handled, contact us at info@titan-automations.com.',
    ],
  },
  {
    id: 'what-we-collect',
    heading: 'What data we collect',
    content: [
      'Audit request form — when you submit the free audit request form on this site, we collect your name, business name, email address, phone number, industry, and a description of your biggest bottleneck. This data is stored securely in our CRM.',
      'Email correspondence — if you contact us directly by email, we receive whatever you include in your message.',
      'Anonymous usage data — this website uses Vercel Analytics, which collects aggregated, non-personal information about how pages are used (e.g. page views, general location by country). No cookies are set and no personally identifiable information is collected by analytics.',
      'We do not use tracking pixels, remarketing scripts, or any other third-party advertising technology.',
    ],
  },
  {
    id: 'why-we-collect',
    heading: 'Why we collect it and the legal basis',
    content: [
      'Audit request — to contact you about your enquiry, prepare for your discovery call, and assess how we can help your business. Legal basis: legitimate interests (processing your contact details is necessary to respond to your request).',
      'Email enquiries — to respond to your message and discuss potential work together. Legal basis: legitimate interests.',
      'Analytics — to understand which content is useful and improve the site. Legal basis: legitimate interests (aggregated, anonymous data with no impact on your privacy).',
    ],
  },
  {
    id: 'how-long',
    heading: 'How long we keep your data',
    content: [
      'Audit requests and email enquiries — we retain this data for up to 2 years from the date of submission, or until you ask us to delete it, whichever comes first.',
      'Analytics data — Vercel Analytics retains aggregated data in line with their own retention policy. As the data is anonymous and non-personal, it does not identify you.',
    ],
  },
  {
    id: 'who-we-share-with',
    heading: 'Who we share your data with',
    content: [
      'Nobody. We do not sell, rent, or share your personal data with any third parties for marketing purposes.',
      'We use Supabase (a secure database platform) to store audit request submissions. Supabase processes data in accordance with their privacy policy and applicable data protection law.',
      'Vercel (our website host) processes anonymous analytics data independently under their own privacy policy. They do not receive your email address or any identifying information.',
    ],
  },
  {
    id: 'your-rights',
    heading: 'Your rights',
    content: [
      'Under UK GDPR you have the right to: access the personal data we hold about you; have inaccurate data corrected; have your data erased; restrict how we use your data; receive your data in a portable format; object to our use of your data.',
      'To exercise any of these rights, email info@titan-automations.com. We will respond within 30 days.',
    ],
  },
  {
    id: 'complaints',
    heading: 'How to complain',
    content: [
      "If you are unhappy with how we have handled your personal data, you have the right to lodge a complaint with the UK's data protection regulator:",
      "Information Commissioner's Office (ICO) — ico.org.uk — 0303 123 1113",
      'We would appreciate the chance to address your concern directly before you contact the ICO, so please get in touch with us first if possible.',
    ],
  },
  {
    id: 'changes',
    heading: 'Changes to this policy',
    content: [
      'We may update this policy from time to time. The date at the top of the page will always reflect when it was last revised.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <main className="bg-page min-h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-lo hover:text-hi transition-colors mb-12"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home
        </Link>

        <div className="mb-12 pb-8 border-b border-white/[0.06]">
          <p className="text-xs text-dim uppercase tracking-[0.15em] font-medium mb-4">
            Last updated: May 2025
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-hi tracking-[-0.03em] mb-4">
            Privacy Policy
          </h1>
          <p className="text-base text-lo leading-relaxed max-w-xl">
            This policy explains what personal data Titan Automations collects, why we collect it, and what your rights are under UK GDPR.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.id} id={section.id}>
              <h2 className="font-display text-lg sm:text-xl font-semibold text-hi tracking-[-0.02em] mb-4">
                {section.heading}
              </h2>
              <div className="space-y-3">
                {section.content.map((paragraph, i) => (
                  <p key={i} className="text-sm sm:text-base text-lo leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <p className="text-sm text-lo">
            Questions about this policy?{' '}
            <a
              href="mailto:info@titan-automations.com?subject=Privacy Policy Enquiry"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              info@titan-automations.com
            </a>
          </p>
        </div>

      </div>
    </main>
  )
}
