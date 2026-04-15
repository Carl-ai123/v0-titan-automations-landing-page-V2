"use client"

import { useEffect, useState } from "react"

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show once hero exits viewport; hide once the final CTA section enters
    let heroPast = false
    let ctaNear = false

    const update = () => setVisible(heroPast && !ctaNear)

    const heroEl = document.querySelector('section') // first section = hero
    const ctaEl = document.getElementById('cta')

    const heroObs = new IntersectionObserver(
      ([entry]) => { heroPast = !entry.isIntersecting; update() },
      { threshold: 0 }
    )
    const ctaObs = new IntersectionObserver(
      ([entry]) => { ctaNear = entry.isIntersecting; update() },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    )

    if (heroEl) heroObs.observe(heroEl)
    if (ctaEl) ctaObs.observe(ctaEl)

    return () => { heroObs.disconnect(); ctaObs.disconnect() }
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      {/* Fade gradient above bar */}
      <div className="h-8 bg-gradient-to-t from-[rgba(10,10,10,0.6)] to-transparent pointer-events-none" />
      <div className="bg-dark border-t border-[rgba(255,255,255,0.08)] px-4 py-3 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted truncate">Free 20-min discovery call</p>
        </div>
        <a
          href="mailto:carl@titan-automations.com?subject=Free Demo Request"
          className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent/90 transition-colors active:scale-95"
        >
          Book Free Demo
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  )
}
