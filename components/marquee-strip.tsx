const items = [
  {
    name: "n8n",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <circle cx="5" cy="10" r="3.5" />
        <rect x="8" y="9" width="4" height="2" rx="0.5" />
        <circle cx="15" cy="10" r="3.5" fillOpacity="0.55" />
      </svg>
    ),
  },
  {
    name: "Airtable",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M10 2L18.5 6.5V8L10 12.5L1.5 8V6.5L10 2Z" />
        <path d="M1.5 11.5V13L10 17.5V16L1.5 11.5Z" fillOpacity="0.65" />
        <path d="M18.5 11.5L10 16V17.5L18.5 13V11.5Z" fillOpacity="0.4" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-4 h-4">
        <path d="M10 2.5a4 4 0 011.9.5l3.3 1.9a4 4 0 012 3.4v3.8a4 4 0 01-2 3.4l-3.3 1.9a4 4 0 01-3.8 0L4.8 15.5a4 4 0 01-2-3.4V8.3a4 4 0 012-3.4l3.3-1.9A4 4 0 0110 2.5z" strokeOpacity="0.9" />
        <circle cx="10" cy="10" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Anthropic",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M10 3L17 17H13.5L10 10.5L6.5 17H3L10 3Z" />
        <path d="M7.5 13.5H12.5V15H7.5V13.5Z" fillOpacity="0.6" />
      </svg>
    ),
  },
  {
    name: "Google",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M18 10.2a8 8 0 11-1.6-4.8H14a5 5 0 100 4.8h4z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
        <path d="M10 2L19 18H1L10 2Z" />
      </svg>
    ),
  },
  {
    name: "Resend",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M18 2L2 9l6 3 2 6 8-16z" fill="currentColor" fillOpacity="0.15" />
        <path d="M18 2L2 9l6 3 2 6 8-16zM8 11l4-4" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="w-4 h-4">
        <path d="M13 6.5C13 5 11.7 4 10 4 8.3 4 7 5 7 6.5c0 1.4 1 2 3 2.5s3 1.2 3 2.8C13 13.3 11.7 15 10 15c-1.8 0-3-.9-3-2.5" />
      </svg>
    ),
  },
]

export function MarqueeStrip() {
  return (
    <section className="bg-light dark:bg-dark py-3 md:py-4 overflow-hidden">
      <div className="flex items-center">
        {/* Label */}
        <div className="shrink-0 pl-4 md:pl-8 pr-8 text-xs text-muted tracking-[0.15em] uppercase font-medium">
          Powered by
        </div>

        {/* Marquee Container */}
        <div className="relative flex-1 overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set */}
            {items.map((item, index) => (
              <div key={`a-${index}`} className="flex items-center shrink-0">
                <div className="flex items-center gap-2 px-5 text-text-light dark:text-text-dark">
                  <span className="opacity-70">{item.icon}</span>
                  <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>
                </div>
                <span className="w-1.5 h-1.5 bg-[rgba(0,0,0,0.2)] dark:bg-[rgba(255,255,255,0.2)] rounded-full shrink-0" />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {items.map((item, index) => (
              <div key={`b-${index}`} className="flex items-center shrink-0">
                <div className="flex items-center gap-2 px-5 text-text-light dark:text-text-dark">
                  <span className="opacity-70">{item.icon}</span>
                  <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>
                </div>
                <span className="w-1.5 h-1.5 bg-[rgba(0,0,0,0.2)] dark:bg-[rgba(255,255,255,0.2)] rounded-full shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
