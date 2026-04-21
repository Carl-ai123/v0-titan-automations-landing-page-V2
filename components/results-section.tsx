"use client"

import { useEffect, useRef, useState } from "react"

const CALENDLY_URL = "https://calendly.com/carl-titan-automations/titan-onboarding-call"
const openCalendly = () => window.Calendly?.initPopupWidget({ url: CALENDLY_URL })

type Result = {
  prefix?: string
  value: number
  suffix: string
  context: string
  outcome: string
}

const results: Result[] = [
  {
    value: 100,
    suffix: "+",
    context: "Leads found and enriched in a single automated run",
    outcome: "Zero manual research required",
  },
  {
    value: 14,
    suffix: " days",
    context: "Average time from first call to live system",
    outcome: "Faster than any agency you've tried",
  },
  {
    prefix: "£",
    value: 280,
    suffix: "/mo",
    context: "Avg monthly tool costs eliminated per client",
    outcome: "One retainer replaces 4 subscriptions",
  },
]

function useCountUp(target: number, duration = 1400, started = false) {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!started) return
    // Skip animation for users who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target)
      return
    }
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Expo-out easing
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setCount(target)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [started, target, duration])

  return count
}

function MetricCard({ result, index }: { result: Result; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const count = useCountUp(result.value, 1200 + index * 150, started)

  return (
    <div
      ref={ref}
      className="bg-card-light dark:bg-transparent ring-1 ring-[rgba(0,0,0,0.08)] dark:ring-[rgba(255,255,255,0.08)] border-l-2 border-l-accent rounded-xl p-5 sm:p-7"
    >
      <div className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-text-light dark:text-white mb-3 md:mb-4 tabular-nums">
        {result.prefix ?? ""}{count}{result.suffix}
      </div>
      <p className="text-sm text-muted mb-3 leading-relaxed">{result.context}</p>
      <p className="text-sm text-accent">{result.outcome}</p>
    </div>
  )
}

export function ResultsSection() {
  return (
    <section id="results" className="bg-light dark:bg-dark py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-16 fade-up-section">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3 md:mb-4">
            Real results
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-light dark:text-white tracking-[-0.03em]">
            Systems that actually work.
          </h2>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 fade-up-section">
          {results.map((result, i) => (
            <MetricCard key={i} result={result} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-14 fade-up-section">
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent/90 transition-colors hover:-translate-y-px active:translate-y-0"
          >
            See what we&apos;d build for you
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <p className="text-xs text-muted mt-3">Free 20-min call · No pitch</p>
        </div>
      </div>
    </section>
  )
}
