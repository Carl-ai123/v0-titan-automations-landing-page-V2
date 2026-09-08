import { TitanLogo } from "@/components/titan-logo"
import Link from "next/link"
import { BUSINESS } from "@/lib/site"

const SYSTEMS = [
  { label: "Websites for Trades",     href: "/services/websites-for-trades" },
  { label: "Lead Generation",         href: "/services/lead-generation" },
  { label: "Missed-Call Text-Back",   href: "/services/missed-call-text-back" },
  { label: "AI Chatbots",             href: "/services/ai-chatbots" },
  { label: "CRM Automation",          href: "/services/crm-automation" },
  { label: "Follow-Up Automation",    href: "/services/follow-up-automation" },
  { label: "Booking Automation",      href: "/services/booking-automation" },
  { label: "Review Automation",       href: "/services/review-automation" },
]

const COMPANY = [
  { label: "About",         href: "/about"    },
  { label: "How It Works",  href: "/#process" },
  { label: "FAQ",           href: "/faq"      },
  { label: "Kent",          href: "/areas/kent" },
  { label: "Privacy Policy",href: "/privacy"  },
]

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/[0.06] pt-16 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <TitanLogo size="footer" />
            </Link>
            <p className="text-sm text-lo leading-relaxed max-w-[220px]">
              AI automation systems for UK service businesses. Clearly scoped. Owned by you.
            </p>
            <div className="mt-5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              <span className="text-xs text-dim">UK-based · Kent</span>
            </div>
          </div>

          {/* Systems */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.14em] uppercase text-dim mb-5">Systems</h4>
            <ul className="space-y-3">
              {SYSTEMS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-lo hover:text-hi transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.14em] uppercase text-dim mb-5">Company</h4>
            <ul className="space-y-3">
              {COMPANY.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="text-sm text-lo hover:text-hi transition-colors">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.14em] uppercase text-dim mb-5">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-sm text-lo hover:text-hi transition-colors"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <a href={`tel:${BUSINESS.phone}`} className="text-sm text-lo hover:text-hi transition-colors">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li>
                <Link href="/#cta" className="text-sm text-accent hover:text-accent/80 transition-colors">
                  Book Free Automation Audit
                </Link>
              </li>
              <li className="text-sm text-dim">{BUSINESS.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-dim">
            &copy; {new Date().getFullYear()} Titan Automations. All rights reserved.
          </p>
          <p className="text-xs text-dim">
            Built with AI. Owned by you.
          </p>
        </div>
      </div>
    </footer>
  )
}
