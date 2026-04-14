export function ServicesSection() {
  return (
    <section id="services" className="bg-dark py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 fade-up-section">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3 md:mb-4">
            What we build
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-balance">
            Every system your business needs to grow.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 fade-up-section">
          {/* Large Card - AI-Powered Websites */}
          <div className="sm:col-span-2 lg:col-span-2 bg-card-dark border border-[rgba(255,255,255,0.08)] rounded-xl p-5 sm:p-7">
            {/* Icon */}
            <div className="w-10 h-10 mb-4 text-accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold text-white mb-2">
              AI-Powered Websites
            </h3>
            <p className="text-sm text-muted mb-6">
              Fast, modern, conversion-focused sites that work while you sleep.
            </p>

            {/* Browser Mockup */}
            <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-lg overflow-hidden">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-3 py-2 border-b border-[rgba(255,255,255,0.06)]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.1)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.1)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.1)]" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-5 bg-[rgba(255,255,255,0.05)] rounded-full px-3 flex items-center">
                    <span className="text-[10px] text-muted">yourbusiness.com</span>
                  </div>
                </div>
              </div>
              {/* Content Area */}
              <div className="p-4 space-y-3">
                <div className="h-4 w-3/4 bg-[rgba(255,255,255,0.08)] rounded" />
                <div className="h-3 w-full bg-[rgba(255,255,255,0.04)] rounded" />
                <div className="h-3 w-5/6 bg-[rgba(255,255,255,0.04)] rounded" />
                <div className="flex gap-2 mt-4">
                  <div className="h-8 w-24 bg-accent/20 rounded" />
                  <div className="h-8 w-20 bg-[rgba(255,255,255,0.06)] rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Small Card 1 - Booking Systems */}
          <div className="bg-card-dark border border-[rgba(255,255,255,0.08)] rounded-xl p-5 sm:p-7">
            <div className="w-10 h-10 mb-4 text-accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-2">
              Booking Systems
            </h3>
            <p className="text-sm text-muted">
              Real-time availability, deposit capture, automated reminders.
            </p>
          </div>

          {/* Small Card 2 - CRM & Pipelines */}
          <div className="bg-card-dark border border-[rgba(255,255,255,0.08)] rounded-xl p-5 sm:p-7">
            <div className="w-10 h-10 mb-4 text-accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 17h6M17 14v6" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-2">
              CRM &amp; Pipelines
            </h3>
            <p className="text-sm text-muted">
              Replace 4 subscriptions with one system that actually connects.
            </p>
          </div>

          {/* Small Card 3 - AI Chatbots */}
          <div className="bg-card-dark border border-[rgba(255,255,255,0.08)] rounded-xl p-5 sm:p-7">
            <div className="w-10 h-10 mb-4 text-accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                <path d="M8 10h.01M12 10h.01M16 10h.01" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-2">
              AI Chatbots
            </h3>
            <p className="text-sm text-muted">
              Answer questions, qualify leads and book appointments 24/7.
            </p>
          </div>

          {/* Small Card 4 - Review & Recall */}
          <div className="bg-card-dark border border-[rgba(255,255,255,0.08)] rounded-xl p-5 sm:p-7">
            <div className="w-10 h-10 mb-4 text-accent">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold text-white mb-2">
              Review &amp; Recall
            </h3>
            <p className="text-sm text-muted">
              Automatically chase Google reviews and re-engage inactive customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
