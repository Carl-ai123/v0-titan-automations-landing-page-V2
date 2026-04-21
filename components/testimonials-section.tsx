export function TestimonialsSection() {
  const testimonials = [
    {
      imgLeft: "-7px",
      quote:
        "The booking system paid for itself in the first week. Patients book online at 11pm and it all just works.",
      name: "James H",
      company: "Practice Manager",
    },
    {
      imgLeft: "-41px",
      imgTop: "-21px",
      quote:
        "The team at Titan built us a lead pipeline that actually runs itself. We went from chasing quotes to having them come to us.",
      name: "Tom K",
      company: "Director, Medway Trades",
    },
    {
      imgLeft: "-75px",
      quote:
        "Switched from three different tools to one system. Saved us £280 a month and it does more than all of them combined.",
      name: "Sam R",
      company: "Clinic Owner",
    },
  ]

  return (
    <section id="testimonials" className="bg-light dark:bg-dark py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 fade-up-section">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-light dark:text-white tracking-[-0.03em]">
            What clients say.
          </h2>
        </div>

        {/* Testimonials Grid — all cards identical styling */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 fade-up-section">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.03)] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,0,0,0.14)] dark:hover:border-[rgba(255,255,255,0.14)] transition-colors duration-200 rounded-xl p-5 sm:p-7 flex flex-col"
            >
              {/* Accent rule */}
              <div className="w-8 h-px bg-accent mb-5" />

              {/* Quote */}
              <p className="text-base text-text-light dark:text-white leading-relaxed mb-6 flex-1">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-[rgba(0,0,0,0.08)] dark:bg-[rgba(255,255,255,0.08)] mb-4" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full shrink-0 overflow-hidden border border-[rgba(255,255,255,0.1)] relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/avatars/testimonials.png"
                    alt={testimonial.name}
                    width={120}
                    height={120}
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      width: '120px',
                      maxWidth: 'none',
                      top: testimonial.imgTop ?? '-21px',
                      left: testimonial.imgLeft,
                    }}
                  />
                </div>
                <div>
                  <div className="font-medium text-text-light dark:text-white text-sm">
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
