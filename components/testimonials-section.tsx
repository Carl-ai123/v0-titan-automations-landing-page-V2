const testimonials = [
  {
    quote: "The booking system paid for itself in the first week. Patients book online at 11pm and it all just works.",
    name: "James H.",
    role: "Practice Manager",
    industry: "Healthcare",
  },
  {
    quote: "We went from chasing quotes to having them come to us. The lead pipeline runs itself — I just handle the conversations.",
    name: "Tom K.",
    role: "Director",
    company: "Medway Trades",
    industry: "Trades",
  },
  {
    quote: "Switched from three different tools to one system. Saved £280 a month and it does more than all of them combined.",
    name: "Sam R.",
    role: "Clinic Owner",
    industry: "Healthcare",
  },
]

const industryColor = {
  Healthcare: "bg-green/10 text-green",
  Trades: "bg-amber/10 text-amber",
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-light dark:bg-dark py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 md:mb-16 fade-up-section">
          <p className="text-xs tracking-[0.2em] uppercase text-muted font-medium mb-4">Client feedback</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-light dark:text-white tracking-[-0.03em]">
            What clients say.
          </h2>
        </div>

        {/* Testimonials — editorial cards, no avatars */}
        <div className="grid md:grid-cols-3 gap-4 fade-up-section">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,0,0,0.15)] dark:hover:border-[rgba(255,255,255,0.15)] rounded-2xl p-6 sm:p-8 transition-colors duration-200"
            >
              {/* Opening mark — blue rule, not a quotation mark glyph */}
              <div className="w-8 h-[2px] bg-accent mb-6 shrink-0" />

              {/* Quote */}
              <p className="text-base sm:text-lg text-text-light dark:text-white leading-relaxed flex-1 mb-8 font-medium tracking-[-0.01em]">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author — name + role, no avatar */}
              <div className="border-t border-[rgba(0,0,0,0.07)] dark:border-[rgba(255,255,255,0.07)] pt-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-text-light dark:text-white">{t.name}</div>
                    <div className="text-xs text-muted mt-0.5">
                      {t.role}{t.company ? ` · ${t.company}` : ""}
                    </div>
                  </div>
                  <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 ${industryColor[t.industry as keyof typeof industryColor] ?? "bg-accent/10 text-accent"}`}>
                    {t.industry}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
