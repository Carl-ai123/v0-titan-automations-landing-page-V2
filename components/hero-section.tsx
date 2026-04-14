export function HeroSection() {
  return (
    <section className="bg-dark min-h-screen pt-28 md:pt-36 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="fade-up-section">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-tint mb-8">
              <span className="text-sm font-medium text-accent">
                AI Automation Agency · Kent &amp; South East
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px] font-semibold text-white leading-[1.1] tracking-tight mb-5 md:mb-6 text-balance">
              Build smarter. Automate everything. Grow without limits.
            </h1>

            {/* Subtext */}
            <p className="text-base md:text-lg text-muted max-w-[480px] mb-6 md:mb-8 leading-relaxed">
              We design and build AI-powered systems for businesses that are ready to stop doing things manually. Websites, automations, chatbots — all connected, all yours.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 md:mb-8">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-accent rounded-full hover:bg-accent/90 transition-colors"
              >
                Book a Free Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white border border-[rgba(255,255,255,0.2)] rounded-full hover:border-[rgba(255,255,255,0.4)] transition-colors"
              >
                See How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-wider text-muted">
              <span>50+ Systems Built</span>
              <span className="hidden sm:inline text-[rgba(255,255,255,0.2)]">·</span>
              <span>2 Week Delivery</span>
              <span className="hidden sm:inline text-[rgba(255,255,255,0.2)]">·</span>
              <span>100% Client Owned</span>
              <span className="hidden sm:inline text-[rgba(255,255,255,0.2)]">·</span>
              <span>Kent Based</span>
            </div>
          </div>

          {/* Right Column - Dashboard Card */}
          <div className="fade-up-section">
            <div className="bg-card-dark border border-[rgba(255,255,255,0.1)] rounded-2xl p-5 sm:p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-green rounded-full animate-pulse-dot" />
                  <span className="text-sm text-muted">Systems Running</span>
                </div>
                <span className="px-2 py-1 text-xs font-medium text-green bg-green/10 rounded">
                  Live
                </span>
              </div>

              {/* Metrics */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.06)]">
                  <span className="text-sm text-muted">Leads found today</span>
                  <span className="text-lg font-display font-semibold text-white">47</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.06)]">
                  <span className="text-sm text-muted">Emails sent</span>
                  <span className="text-lg font-display font-semibold text-white">10</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[rgba(255,255,255,0.06)]">
                  <span className="text-sm text-muted">Replies received</span>
                  <span className="text-lg font-display font-semibold text-white">2</span>
                </div>
              </div>

              {/* Company List */}
              <div className="space-y-3 mb-6">
                {["Guildford Dental", "Metro Trades Ltd", "Riverside Clinic"].map((company) => (
                  <div
                    key={company}
                    className="flex items-center justify-between px-3 py-2 bg-[rgba(255,255,255,0.02)] rounded-lg"
                  >
                    <span className="text-sm text-text-dark">{company}</span>
                    <span className="px-2 py-0.5 text-xs font-medium text-accent bg-accent/10 rounded">
                      Active
                    </span>
                  </div>
                ))}
              </div>

              {/* Status Bar */}
              <div className="flex items-center gap-2 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <span className="w-2 h-2 bg-green rounded-full animate-pulse-dot" />
                <span className="text-sm text-muted animate-blink">
                  Outreach Engine · Running
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
