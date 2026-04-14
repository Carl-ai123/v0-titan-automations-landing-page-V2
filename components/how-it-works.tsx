"use client"

import { useEffect, useRef, useState } from "react"

function ChecklistItem({ label, delay, started }: { label: string; delay: number; started: boolean }) {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (!started) return
    const timer = setTimeout(() => setChecked(true), delay)
    return () => clearTimeout(timer)
  }, [delay, started])

  return (
    <div className="flex items-center gap-2 py-1">
      <div className="w-4 h-4 rounded border border-[rgba(0,0,0,0.15)] dark:border-[rgba(255,255,255,0.15)] flex items-center justify-center bg-[rgba(0,0,0,0.05)] dark:bg-[rgba(255,255,255,0.05)]">
        {checked && (
          <svg className="w-3 h-3 text-green" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-check"
            />
          </svg>
        )}
      </div>
      <span className={`text-xs ${checked ? "text-text-light dark:text-white" : "text-muted"}`}>{label}</span>
    </div>
  )
}

export function HowItWorks() {
  const checklistRef = useRef<HTMLDivElement>(null)
  const [checklistStarted, setChecklistStarted] = useState(false)

  useEffect(() => {
    const el = checklistRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChecklistStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We learn about your business, identify automation opportunities, and map out your ideal system.",
      card: (
        <div className="bg-card-light dark:bg-card-dark border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-lg p-4">
          <div className="text-xs text-muted mb-2">Available Slot</div>
          <div className="font-display font-medium text-text-light dark:text-white mb-1">Tomorrow, 10:00 AM</div>
          <div className="inline-flex items-center px-2 py-1 text-xs bg-accent/10 text-accent rounded">
            20 min · Free
          </div>
        </div>
      ),
    },
    {
      number: "02",
      title: "We Build It",
      description: "Our team designs, develops, and tests your custom AI-powered system in under two weeks.",
      card: (
        <div ref={checklistRef} className="bg-card-light dark:bg-card-dark border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-lg p-4">
          <div className="text-xs text-muted mb-2">Build Progress</div>
          <ChecklistItem label="Website deployed" delay={500} started={checklistStarted} />
          <ChecklistItem label="Automations configured" delay={1500} started={checklistStarted} />
          <ChecklistItem label="Integrations connected" delay={2500} started={checklistStarted} />
        </div>
      ),
    },
    {
      number: "03",
      title: "You Go Live",
      description: "Your system launches. We monitor performance and handle any adjustments you need.",
      card: (
        <div className="bg-card-light dark:bg-card-dark border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-green rounded-full" />
            <span className="text-xs font-medium text-green">System Live</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 text-xs bg-green/10 text-green rounded">Automated</span>
            <span className="px-2 py-1 text-xs bg-green/10 text-green rounded">Connected</span>
            <span className="px-2 py-1 text-xs bg-green/10 text-green rounded">Monitored</span>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="bg-light dark:bg-dark py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header — left-aligned */}
        <div className="mb-10 md:mb-16 fade-up-section">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3 md:mb-4">
            Simple process
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-light dark:text-white tracking-[-0.03em]">
            Live in 14 days. No fluff.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-10 md:gap-8 lg:gap-8 relative fade-up-section">
          {/* Dashed line connector — large screens only */}
          <div className="hidden lg:block absolute top-[60px] left-[16.67%] right-[16.67%] h-px border-t-2 border-dashed border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]" />

          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Step Number */}
              <div className="font-display text-[80px] font-bold text-[rgba(0,0,0,0.06)] dark:text-[rgba(255,255,255,0.06)] leading-none mb-2">
                {step.number}
              </div>

              {/* Content */}
              <div className="relative z-10 -mt-12">
                <h3 className="font-display text-2xl font-semibold text-text-light dark:text-white tracking-[-0.03em] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Mini UI Card */}
                {step.card}
              </div>

              {/* Mobile/tablet connector */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center py-4">
                  <div className="w-px h-8 border-l-2 border-dashed border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
