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
    <section className="bg-light py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 fade-up-section">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-text-light">
            What clients say.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-4 fade-up-section">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.initials}
              className="bg-card-light border border-[rgba(0,0,0,0.08)] rounded-xl p-7"
            >
              {/* Quote Mark */}
              <div className="font-serif text-6xl text-[rgba(0,0,0,0.06)] leading-none mb-2">
                &ldquo;
              </div>

              {/* Quote */}
              <p className="text-base text-text-light leading-relaxed mb-6 -mt-6">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-[rgba(0,0,0,0.08)] mb-4" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-sm font-medium text-white">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-text-light text-sm">
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
