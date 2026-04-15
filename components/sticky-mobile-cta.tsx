"use client"

import { useEffect, useRef, useState } from "react"

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)
  const heroRef = useRef<Element | null>(null)
  const ctaRef = useRef<Element | null>(null)

  useEffect(() => {
    // Show after hero exits viewport; hide when final CTA enters
    const handleScroll = () => {
      if (!heroRef.current) heroRef.current = document.querySelector('#hero-sentinel') ?? document.querySelector('section')
      if (!ctaRef.current) ctaRef.current = document.querySelector('#cta')

      const heroBottom = heroRef.current?.getBoundingClientRect().bottom ?? 0
      const ctaTop = ctaRef.current?.getBoundingClientRect().top ?? Infinity

      const pastHero = heroBottom < 0
      const nearCTA = ctaTop < window.innerHeight * 0.8

      setVisible(pastHero && !nearCTA)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
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
