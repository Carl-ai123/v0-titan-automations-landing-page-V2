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
    <section className="bg-[#0D0D0D] py-4 md:py-6 overflow-hidden border-y border-[rgba(255,255,255,0.04)]">
      <div className="flex items-center">
        {/* Label */}
        <div className="shrink-0 pl-4 md:pl-8 pr-8 text-sm text-muted">
          Powered by
        </div>

        {/* Marquee Container */}
        <div className="relative flex-1 overflow-hidden">
          <div className="flex animate-marquee">
            {/* First set */}
            {items.map((item, index) => (
              <div key={`a-${index}`} className="flex items-center shrink-0">
                <span className="text-sm font-medium text-text-dark whitespace-nowrap px-6">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 bg-[rgba(255,255,255,0.2)] rounded-full shrink-0" />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {items.map((item, index) => (
              <div key={`b-${index}`} className="flex items-center shrink-0">
                <span className="text-sm font-medium text-text-dark whitespace-nowrap px-6">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 bg-[rgba(255,255,255,0.2)] rounded-full shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
