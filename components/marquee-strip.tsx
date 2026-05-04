const items = [
  { label: "Live in 14 days" },
  { label: "Fixed-price quotes" },
  { label: "100% client-owned" },
  { label: "30-day support included" },
  { label: "No lock-in contracts" },
  { label: "Kent & South East based" },
  { label: "AI + automation specialists" },
  { label: "Free discovery call" },
]

export function MarqueeStrip() {
  return (
    <section className="bg-light dark:bg-[#0D0D0D] border-y border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)] py-3 md:py-4 overflow-hidden">
      <div className="flex animate-marquee">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center shrink-0 gap-4 px-6">
            <span className="w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
            <span className="text-xs font-medium text-muted whitespace-nowrap tracking-[0.08em] uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
