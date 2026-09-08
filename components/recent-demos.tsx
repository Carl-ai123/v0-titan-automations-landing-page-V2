"use client"

const demos = [
  {
    business: "Billy Ray's Roofing",
    trade: "Roofing",
    tradeColor: "amber" as const,
    url: "#",
    description: "New website, missed call replies, and Google reviews, all sorted.",
  },
  {
    business: "Your trade here",
    trade: "Electrical",
    tradeColor: "blue" as const,
    url: "#",
    description: "Book a call and we'll build yours next.",
  },
  {
    business: "Your trade here",
    trade: "Plumbing",
    tradeColor: "green" as const,
    url: "#",
    description: "Book a call and we'll build yours next.",
  },
]

const tradeTagStyles = {
  amber: "bg-amber/10 text-amber border border-amber/20",
  blue: "bg-accent/10 text-accent border border-accent/20",
  green: "bg-green/10 text-green border border-green/20",
}

const CALENDLY_URL = "https://calendly.com/carl-titan-automations/titan-onboarding-call"

export function RecentDemos() {
  return (
    <section id="demos" className="bg-light dark:bg-dark py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 md:mb-16 fade-up-section">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3 md:mb-4">
            Our work
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-light dark:text-white tracking-[-0.03em] text-balance">
            Sites we&apos;ve built for tradesmen.
          </h2>
          <p className="text-base text-muted mt-4 max-w-xl leading-relaxed">
            Have a look. See what yours could look like.
          </p>
        </div>

        {/* Demo cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 fade-up-section">
          {demos.map((demo) => (
            <div
              key={demo.business}
              className="bg-card-light dark:bg-card-dark border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Placeholder visual */}
              <div className="h-44 bg-[#0d0d10] border-b border-[rgba(255,255,255,0.06)] flex items-center justify-center">
                <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Browser chrome */}
                  <rect x="12" y="10" width="296" height="140" rx="8" fill="#111114" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
                  <rect x="12" y="10" width="296" height="24" rx="8" fill="#1a1a22"/>
                  <rect x="12" y="26" width="296" height="8" fill="#1a1a22"/>
                  {/* Traffic lights */}
                  <circle cx="26" cy="22" r="4" fill="rgba(255,255,255,0.1)"/>
                  <circle cx="38" cy="22" r="4" fill="rgba(255,255,255,0.1)"/>
                  <circle cx="50" cy="22" r="4" fill="rgba(255,255,255,0.1)"/>
                  {/* URL bar */}
                  <rect x="70" y="16" width="180" height="12" rx="6" fill="rgba(255,255,255,0.05)"/>
                  <text x="160" y="25" fontSize="6" fill="rgba(255,255,255,0.25)" fontFamily="system-ui" textAnchor="middle">titan-automations.com</text>
                  {/* Page content skeleton */}
                  <rect x="24" y="44" width="100" height="10" rx="3" fill="rgba(255,255,255,0.08)"/>
                  <rect x="24" y="58" width="160" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>
                  <rect x="24" y="68" width="130" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>
                  <rect x="24" y="82" width="80" height="18" rx="9" fill="rgba(37,99,235,0.5)"/>
                  <text x="64" y="94" fontSize="6.5" fill="white" fontFamily="system-ui" textAnchor="middle" fontWeight="600">Call us now</text>
                  {/* Right image block */}
                  <rect x="170" y="44" width="126" height="96" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  <text x="233" y="94" fontSize="8" fill="rgba(255,255,255,0.15)" fontFamily="system-ui" textAnchor="middle">Preview</text>
                  {/* Bottom strip */}
                  <rect x="24" y="118" width="272" height="24" rx="4" fill="rgba(37,99,235,0.06)" stroke="rgba(37,99,235,0.15)" strokeWidth="0.8"/>
                  <text x="50" y="133" fontSize="6" fill="rgba(37,99,235,0.8)" fontFamily="system-ui">✓  Google reviews</text>
                  <text x="160" y="133" fontSize="6" fill="rgba(37,99,235,0.8)" fontFamily="system-ui">✓  Click to call</text>
                  <text x="250" y="133" fontSize="6" fill="rgba(37,99,235,0.8)" fontFamily="system-ui">✓  Fast</text>
                </svg>
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-base font-semibold text-text-light dark:text-white tracking-[-0.02em]">
                    {demo.business}
                  </h3>
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full tracking-wide uppercase ${tradeTagStyles[demo.tradeColor]}`}>
                    {demo.trade}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed flex-1 mb-4">
                  {demo.description}
                </p>
                {demo.url === "#" ? (
                  <a
                    href={CALENDLY_URL}
                    onClick={(e) => {
                      if (window.Calendly) {
                        window.Calendly.initPopupWidget({ url: CALENDLY_URL })
                        e.preventDefault()
                      }
                    }}
                    className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1.5"
                  >
                    Book a call →
                  </a>
                ) : (
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-1.5"
                  >
                    View live demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
