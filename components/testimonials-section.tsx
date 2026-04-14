export function TestimonialsSection() {
  const testimonials = [
    {
      initials: "JH",
      quote:
        "The booking system paid for itself in the first week. Patients book online at 11pm and it all just works.",
      name: "James H",
      company: "Practice Manager",
    },
    {
      initials: "TK",
      quote:
        "Carl built us a lead pipeline that actually runs itself. We went from chasing quotes to having them come to us.",
      name: "Tom K",
      company: "Director, Medway Trades",
    },
    {
      initials: "SR",
      quote:
        "Switched from three different tools to one system. Saved us £280 a month and it does more than all of them combined.",
      name: "Sam R",
      company: "Clinic Owner",
    },
  ]

  return (
    <section id="testimonials" className="bg-dark py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 fade-up-section">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-[-0.03em]">
            What clients say.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 fade-up-section">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.initials}
              className={
                index === 0
                  ? "ring-1 ring-[rgba(255,255,255,0.08)] border-l-2 border-l-accent rounded-xl p-5 sm:p-7"
                  : "bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl p-5 sm:p-7"
              }
            >
              {/* Accent Rule */}
              <div className="w-8 h-px bg-accent mb-5" />

              {/* Quote */}
              <p className="text-base text-white leading-relaxed mb-6">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-[rgba(255,255,255,0.08)] mb-4" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center">
                  <span className="text-sm font-medium text-white">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
