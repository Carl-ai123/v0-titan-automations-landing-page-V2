"use client"

const CALENDLY_URL = "https://calendly.com/carl-titan-automations/titan-onboarding-call"
const openCalendly = () => window.Calendly?.initPopupWidget({ url: CALENDLY_URL })

export function HeroSection() {
  return (
    <section className="bg-light dark:bg-dark min-h-[100dvh] pt-28 md:pt-36 pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            {/* Eyebrow */}
            <span
              className="block text-xs tracking-[0.2em] uppercase text-muted font-medium mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              AI Automation Agency · Kent &amp; South East
            </span>

            {/* Headline */}
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold text-text-light dark:text-white leading-[1.05] tracking-[-0.03em] mb-5 md:mb-6 text-balance opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              More clients. Less admin. All automated.
            </h1>

            {/* Subtext */}
            <p
              className="text-base md:text-lg text-muted max-w-[480px] mb-6 md:mb-8 leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              We build AI-powered websites and automation systems for businesses — generating leads, booking clients and collecting reviews on autopilot. Live in 14 days.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 md:mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-accent rounded-full hover:bg-accent/90 transition-colors hover:-translate-y-px active:translate-y-0"
              >
                Book a Free Call
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="#how-it-works"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-text-light dark:text-white border border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] rounded-full hover:border-[rgba(0,0,0,0.4)] dark:hover:border-[rgba(255,255,255,0.4)] transition-colors hover:-translate-y-px active:translate-y-0 transition-transform"
              >
                How It Works
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-wider text-muted opacity-0 animate-fade-up"
              style={{ animationDelay: "0.65s" }}
            >
              <span>50+ Systems Built</span>
              <span className="hidden sm:inline text-[rgba(0,0,0,0.2)] dark:text-[rgba(255,255,255,0.2)]">·</span>
              <span>2 Week Delivery</span>
              <span className="hidden sm:inline text-[rgba(0,0,0,0.2)] dark:text-[rgba(255,255,255,0.2)]">·</span>
              <span>100% Client Owned</span>
              <span className="hidden sm:inline text-[rgba(0,0,0,0.2)] dark:text-[rgba(255,255,255,0.2)]">·</span>
              <span>Kent Based</span>
            </div>
          </div>

          {/* Right Column — Dashboard Card */}
          <div
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="bg-card-light dark:bg-card-dark border border-[rgba(0,0,0,0.12)] dark:border-[rgba(255,255,255,0.12)] rounded-2xl p-5 sm:p-6">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs tracking-[0.15em] uppercase text-muted font-medium">
                  Live System Overview
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green rounded-full" />
                  <span className="text-xs text-muted">All systems live</span>
                </div>
              </div>

              {/* 2×2 Stat Grid — gap-px creates hairline dividers */}
              <div className="grid grid-cols-2 gap-px bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden mb-6">
                <div className="bg-card-light dark:bg-card-dark p-5">
                  <div className="text-2xl font-display font-semibold text-text-light dark:text-white mb-1">47</div>
                  <div className="text-xs text-muted">Leads enriched today</div>
                </div>
                <div className="bg-card-light dark:bg-card-dark p-5">
                  <div className="text-2xl font-display font-semibold text-text-light dark:text-white mb-1">10</div>
                  <div className="text-xs text-muted">Emails dispatched</div>
                </div>
                <div className="bg-card-light dark:bg-card-dark p-5">
                  <div className="text-2xl font-display font-semibold text-text-light dark:text-white mb-1">2</div>
                  <div className="text-xs text-muted">Replies received</div>
                </div>
                <div className="bg-card-light dark:bg-card-dark p-5">
                  <div className="text-2xl font-display font-semibold text-accent mb-1">100%</div>
                  <div className="text-xs text-muted">Automated</div>
                </div>
              </div>

              {/* Footer Bar */}
              <div className="flex items-center justify-between pt-4 border-t border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)]">
                <span className="text-xs text-muted">Outreach Engine · Running</span>
                <span className="px-2 py-1 text-xs font-medium text-green bg-green/10 rounded-md">Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
