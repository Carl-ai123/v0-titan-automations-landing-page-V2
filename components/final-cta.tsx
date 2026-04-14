export function FinalCTA() {
  return (
    <section id="cta" className="bg-dark py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center fade-up-section">
        {/* Accent rule */}
        <div className="w-12 h-px bg-accent mx-auto mb-12" />
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-[-0.03em] mb-4 md:mb-6">
          Ready to see what&apos;s possible?
        </h2>
        <p className="text-base md:text-lg text-muted mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed">
          20 minutes. No pitch. We&apos;ll show you exactly what we&apos;d build for your specific business — for free.
        </p>
        <a
          href="mailto:carl@titan-automations.com?subject=Free Demo Request"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-accent rounded-full hover:bg-accent/90 transition-colors hover:-translate-y-px active:translate-y-0 transition-transform"
        >
          Book Your Free Demo
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <p className="mt-5 md:mt-6 text-sm text-muted">
          carl@titan-automations.com
        </p>
      </div>
    </section>
  )
}
