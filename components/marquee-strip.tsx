export function MarqueeStrip() {
  const items = [
    "n8n",
    "Claude AI",
    "OpenAI",
    "Stripe",
    "Airtable",
    "Vercel",
    "Google Workspace",
    "Make",
    "Zapier",
    "Notion",
    "HubSpot",
    "Calendly",
  ]

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
                <span className="text-sm font-medium text-text-light dark:text-text-dark whitespace-nowrap px-6">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 bg-[rgba(0,0,0,0.2)] dark:bg-[rgba(255,255,255,0.2)] rounded-full shrink-0" />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {items.map((item, index) => (
              <div key={`b-${index}`} className="flex items-center shrink-0">
                <span className="text-sm font-medium text-text-light dark:text-text-dark whitespace-nowrap px-6">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 bg-[rgba(0,0,0,0.2)] dark:bg-[rgba(255,255,255,0.2)] rounded-full shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
