const BEFORE = [
  "Missed calls go unanswered for hours, sometimes days",
  "Leads sit in the inbox with no follow-up",
  "Quotes sent once, never chased",
  "Bookings handled over WhatsApp and back-and-forth calls",
  "Reviews only happen when someone remembers to ask",
  "Staff answering the same questions every single day",
  "CRM is a spreadsheet, or not used at all",
  "Tools that do not connect, data entered twice",
  "Owner is the only one who knows how anything works",
]

const AFTER = [
  "Every missed call triggers an instant automated text",
  "Every lead gets a personalised follow-up within minutes",
  "Quotes are chased automatically on a set schedule",
  "Clients book online, it lands straight in your calendar",
  "Review requests go out automatically after every job",
  "AI handles FAQs, qualifies enquiries, routes the rest",
  "Every opportunity tracked in a live pipeline",
  "All tools connected, one input, everything updates",
  "The system runs whether you are working or not",
]

export function BeforeAfterSection() {
  return (
    <section id="problems" className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="mb-14 md:mb-20 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent mb-5">
            <span className="w-5 h-px bg-accent" aria-hidden="true" />
            The Problem
          </span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-hi mb-5">
            Manual work is not harmless.{" "}
            <span className="text-lo">It is a revenue leak.</span>
          </h2>
          <p className="text-lg text-lo leading-relaxed max-w-xl">
            Every unanswered call, forgotten follow-up, and delayed reply is a job that went to someone else.
            The cost is invisible, until you calculate it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Before */}
          <div className="rounded-2xl border border-error/20 bg-error/[0.03] p-7 sm:p-9">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-lg bg-error/10 flex items-center justify-center shrink-0" aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <line x1="3" y1="3" x2="10" y2="10" stroke="#FF4D4D" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="10" y1="3" x2="3" y2="10" stroke="#FF4D4D" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-xs font-semibold tracking-[0.16em] uppercase text-error">How it runs today</span>
            </div>
            <ol className="space-y-5">
              {BEFORE.map((item, i) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="font-display text-sm font-bold text-error/20 tabular-nums shrink-0 mt-px w-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-lo leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-accent/25 bg-accent/[0.03] p-7 sm:p-9">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center shrink-0" aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2.5 6.5l3 3 5-5.5" stroke="#009DFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xs font-semibold tracking-[0.16em] uppercase text-accent">How it runs with Titan</span>
            </div>
            <ul className="space-y-5">
              {AFTER.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-[7px]" aria-hidden="true" />
                  <span className="text-base text-hi leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-sm text-dim text-center">
          If you disappeared for two weeks, would the business keep running? If not, that is the problem we fix.
        </p>
      </div>
    </section>
  )
}
