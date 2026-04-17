export function Footer() {
  return (
    <footer className="bg-light dark:bg-dark border-t border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)] py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1 mb-3 md:mb-4">
              <span className="font-audiowide text-sm tracking-wide text-text-light dark:text-white">Titan</span>
              <span className="font-audiowide text-sm tracking-wide text-muted">Automations</span>
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
                  AI-Powered Websites
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted hover:text-text-light dark:hover:text-white transition-colors">
                  Booking Systems
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted hover:text-text-light dark:hover:text-white transition-colors">
                  CRM &amp; Pipelines
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted hover:text-text-light dark:hover:text-white transition-colors">
                  AI Chatbots
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted hover:text-text-light dark:hover:text-white transition-colors">
                  Review &amp; Recall
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
