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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 fade-up-section">
          {/* Large Card — AI-Powered Websites */}
          <div className="sm:col-span-2 lg:col-span-2 bg-card-dark border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] transition-colors duration-200 rounded-xl p-5 sm:p-7">
            <div className="w-8 h-8 mb-4 text-accent">
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

            {/* Network Grid Visual */}
            <div className="rounded-lg overflow-hidden border border-[rgba(255,255,255,0.06)] p-4 bg-[rgba(255,255,255,0.02)]">
              <svg viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full opacity-70">
                {/* Horizontal grid lines */}
                <line x1="20" y1="20" x2="200" y2="20" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
                <line x1="20" y1="50" x2="200" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
                <line x1="20" y1="80" x2="200" y2="80" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
                <line x1="20" y1="110" x2="200" y2="110" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
                {/* Vertical grid lines */}
                <line x1="20" y1="20" x2="20" y2="110" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
                <line x1="65" y1="20" x2="65" y2="110" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
                <line x1="110" y1="20" x2="110" y2="110" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
                <line x1="155" y1="20" x2="155" y2="110" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
                <line x1="200" y1="20" x2="200" y2="110" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
                {/* Diagonal accent connections */}
                <line x1="65" y1="50" x2="110" y2="80" stroke="#2563EB" strokeWidth="0.8" strokeOpacity="0.5"/>
                <line x1="110" y1="20" x2="155" y2="50" stroke="#2563EB" strokeWidth="0.8" strokeOpacity="0.5"/>
                <line x1="20" y1="80" x2="65" y2="50" stroke="#2563EB" strokeWidth="0.8" strokeOpacity="0.3"/>
                {/* All intersection dots */}
                {[20,65,110,155,200].flatMap(x =>
                  [20,50,80,110].map(y =>
                    <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="rgba(255,255,255,0.15)" />
                  )
                )}
                {/* Accent nodes */}
                <circle cx="110" cy="20" r="3.5" fill="#2563EB"/>
                <circle cx="65" cy="50" r="3.5" fill="#2563EB"/>
                <circle cx="155" cy="80" r="3" fill="#2563EB" opacity="0.6"/>
              </svg>
            </div>
          </div>

          {/* Small Card — Booking Systems */}
          <div className="bg-card-dark border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] transition-colors duration-200 rounded-xl p-5 sm:p-7">
            <div className="w-8 h-8 mb-4 text-accent">
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

          {/* Small Card — CRM & Pipelines */}
          <div className="bg-card-dark border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] transition-colors duration-200 rounded-xl p-5 sm:p-7">
            <div className="w-8 h-8 mb-4 text-accent">
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

          {/* Small Card — AI Chatbots */}
          <div className="bg-card-dark border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] transition-colors duration-200 rounded-xl p-5 sm:p-7">
            <div className="w-8 h-8 mb-4 text-accent">
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

          {/* Small Card — Review & Recall */}
          <div className="bg-card-dark border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.2)] transition-colors duration-200 rounded-xl p-5 sm:p-7">
            <div className="w-8 h-8 mb-4 text-accent">
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
