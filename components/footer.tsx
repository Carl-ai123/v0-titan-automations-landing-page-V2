export function Footer() {
  return (
    <footer className="bg-light dark:bg-dark border-t border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <rect width="64" height="64" rx="13" className="fill-[#0A0A0A] dark:fill-[#131313]"/>
                <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="12.25" stroke="white" strokeOpacity="0.1" strokeWidth="0.5"/>
                <rect x="9.5" y="13.5" width="45" height="9" rx="2.5" fill="white"/>
                <rect x="27.5" y="13.5" width="9" height="37" rx="2.5" fill="white"/>
                <circle cx="32" cy="18" r="6.5" fill="#2563EB" fillOpacity="0.2"/>
                <circle cx="32" cy="18" r="4.5" fill="#2563EB"/>
                <circle cx="12" cy="18" r="2.75" fill="#2563EB" fillOpacity="0.8"/>
                <circle cx="52" cy="18" r="2.75" fill="#2563EB" fillOpacity="0.8"/>
              </svg>
              <div className="flex items-center gap-1">
                <span className="font-audiowide text-sm tracking-wide text-text-light dark:text-white">Titan</span>
                <span className="font-audiowide text-sm tracking-wide text-muted">Automations</span>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              AI automation for businesses that mean it.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-medium text-text-light dark:text-white mb-3 md:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-muted hover:text-text-light dark:hover:text-white transition-colors">
                  AI-Powered Website
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted hover:text-text-light dark:hover:text-white transition-colors">
                  Booking System &amp; CRM
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted hover:text-text-light dark:hover:text-white transition-colors">
                  AI Chatbots &amp; Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-medium text-text-light dark:text-white mb-3 md:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-sm text-muted hover:text-text-light dark:hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#cta" className="text-sm text-muted hover:text-text-light dark:hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#results" className="text-sm text-muted hover:text-text-light dark:hover:text-white transition-colors">
                  Results
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-medium text-text-light dark:text-white mb-3 md:mb-4 text-sm sm:text-base">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-sm text-muted hover:text-text-light dark:hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)] flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Titan Automations · Kent, UK
          </p>
          <p className="text-sm text-muted">
            Built with AI. Owned by you.
          </p>
        </div>
      </div>
    </footer>
  )
}
