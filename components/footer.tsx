export function Footer() {
  return (
    <footer className="bg-dark border-t border-[rgba(255,255,255,0.06)] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 font-display mb-4">
              <span className="text-white font-medium">Titan</span>
              <span className="text-muted">Automations</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              AI automation for businesses that mean it.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-medium text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-muted hover:text-white transition-colors">
                  AI-Powered Websites
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted hover:text-white transition-colors">
                  Booking Systems
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted hover:text-white transition-colors">
                  CRM &amp; Pipelines
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted hover:text-white transition-colors">
                  AI Chatbots
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted hover:text-white transition-colors">
                  Review &amp; Recall
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-medium text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-sm text-muted hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#cta" className="text-sm text-muted hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#results" className="text-sm text-muted hover:text-white transition-colors">
                  Results
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-medium text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; 2026 Titan Automations · Kent, UK
          </p>
          <p className="text-sm text-muted">
            Built with AI. Owned by you.
          </p>
        </div>
      </div>
    </footer>
  )
}
