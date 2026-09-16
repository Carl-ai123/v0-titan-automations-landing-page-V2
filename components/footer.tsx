import { TitanLogo } from "@/components/titan-logo"
import Link from "next/link"
import { BUSINESS } from "@/lib/site"

const SYSTEMS = [
  { label: "Contractor Growth System", href: "/contractor-growth-system" },
  { label: "Websites for Trades", href: "/services/websites-for-trades" },
  { label: "CRM Automation", href: "/services/crm-automation" },
  { label: "Follow-Up Automation", href: "/services/follow-up-automation" },
  { label: "Missed-Call Text-Back", href: "/services/missed-call-text-back" },
  { label: "Review Automation", href: "/services/review-automation" },
]

const COMPANY = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/#process" },
  { label: "FAQ", href: "/faq" },
  { label: "Kent", href: "/areas/kent" },
  { label: "Privacy Policy", href: "/privacy" },
]

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/[0.06] pt-16 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-5"><TitanLogo size="footer" /></Link>
            <p className="text-sm text-lo leading-relaxed max-w-[240px]">
              Growth systems for UK commercial contractors. Website, enquiry capture, CRM and follow-up connected into one clear sales process.
            </p>
            <div className="mt-5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              <span className="text-xs text-dim">UK-based · Kent</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.14em] uppercase text-dim mb-5">Systems</h4>
            <ul className="space-y-3">
              {SYSTEMS.map((s) => <li key={s.label}><Link href={s.href} className="text-sm text-lo hover:text-hi transition-colors">{s.label}</Link></li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.14em] uppercase text-dim mb-5">Company</h4>
            <ul className="space-y-3">
              {COMPANY.map((c) => <li key={c.label}><Link href={c.href} className="text-sm text-lo hover:text-hi transition-colors">{c.label}</Link></li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-[0.14em] uppercase text-dim mb-5">Get in Touch</h4>
            <ul className="space-y-3">
              <li><a href={`mailto:${BUSINESS.email}`} className="text-sm text-lo hover:text-hi transition-colors">{BUSINESS.email}</a></li>
              <li><a href={`tel:${BUSINESS.phone}`} className="text-sm text-lo hover:text-hi transition-colors">{BUSINESS.phoneDisplay}</a></li>
              <li><Link href="/#cta" className="text-sm text-accent hover:text-accent/80 transition-colors">Book Free Contractor Audit</Link></li>
              <li className="text-sm text-dim">{BUSINESS.location}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-dim">&copy; {new Date().getFullYear()} Titan Automations. All rights reserved.</p>
          <p className="text-xs text-dim">Built around your contractor sales process.</p>
        </div>
      </div>
    </footer>
  )
}
