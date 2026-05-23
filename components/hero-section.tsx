"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"

const scrollToCTA = () => {
  document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })
}

const TRUST = ["UK-Based", "Built in 14 Days", "Fixed Scope", "Client-Owned", "No Lock-In"]

const FLOW_STAGES = [
  { id: "trigger",  label: "Lead Captured",     sub: "Form · chatbot · missed call",  color: "#009DFF" },
  { id: "qualify",  label: "AI Qualifies",       sub: "Intent scored, data enriched",  color: "#009DFF" },
  { id: "crm",      label: "CRM Updated",        sub: "Record created, stage set",     color: "#009DFF" },
  { id: "followup", label: "Follow-up Sent",     sub: "Personalised and timed",        color: "#009DFF" },
  { id: "booking",  label: "Booking Confirmed",  sub: "Calendar slot filled",          color: "#24D18F" },
  { id: "review",   label: "Review Requested",   sub: "Automated post-job",            color: "#24D18F" },
]

function FlowPreview() {
  const [activeIdx, setActiveIdx] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timer.current = setInterval(() => setActiveIdx(i => (i + 1) % FLOW_STAGES.length), 1500)
    return () => { if (timer.current) clearInterval(timer.current) }
  }, [])

  return (
    <div className="relative bg-surface border border-white/10 rounded-2xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]">
        <span className="text-[10px] tracking-[0.18em] uppercase text-dim font-medium">Automation System · Live</span>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-dot absolute inline-flex h-full w-full rounded-full bg-success opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
          </span>
          <span className="text-[10px] text-success">Running</span>
        </div>
      </div>

      <div className="p-5 space-y-2">
        {FLOW_STAGES.map((stage, i) => {
          const isActive = i === activeIdx
          const isPast   = i < activeIdx
          return (
            <motion.div
              key={stage.id}
              animate={{
                backgroundColor: isActive ? `${stage.color}10` : isPast ? "rgba(255,255,255,0.02)" : "transparent",
                borderColor:     isActive ? `${stage.color}35` : isPast ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.04)",
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3.5 px-4 py-3 rounded-xl border"
            >
              <div className="w-2 h-2 rounded-full shrink-0 transition-all duration-300" style={{
                backgroundColor: isActive ? stage.color : isPast ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)",
                boxShadow: isActive ? `0 0 8px ${stage.color}70` : "none",
              }} />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold transition-colors duration-300" style={{ color: isActive ? stage.color : isPast ? "#9CA8B8" : "#566474" }}>
                  {stage.label}
                </div>
                <div className="text-[10px] text-dim">{stage.sub}</div>
              </div>
              {i < FLOW_STAGES.length - 1 && (
                <ChevronRight size={12} className="shrink-0" style={{ color: isActive ? stage.color : "rgba(255,255,255,0.1)" }} />
              )}
              {isPast && (
                <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                  <circle cx="6" cy="6" r="5" fill="rgba(36,209,143,0.18)" />
                  <path d="M3.5 6l2 2 3-3.5" stroke="#24D18F" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </motion.div>
          )
        })}
      </div>
      <div className="pb-5 px-5">
        <p className="text-[10px] text-dim text-center">Zero manual work · No delays · No dropped leads</p>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-20 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(0,157,255,0.07) 0%, transparent 70%)" }} aria-hidden="true" />
    </div>
  )
}

const ease = [0.16, 1, 0.3, 1] as const
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
})

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-24 pb-16 md:pt-28 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[480px] pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,157,255,0.065) 0%, transparent 65%)" }} />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <motion.div {...fadeUp(0.05)} className="mb-7">
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent">
                <span className="w-5 h-px bg-accent" aria-hidden="true" />
                AI Automation Agency · UK
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.15)} className="font-display text-[clamp(2.5rem,5.5vw,5.25rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-hi mb-6">
              Stop running your{" "}
              <span style={{ background: "linear-gradient(135deg, #009DFF 0%, #006CFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                business manually.
              </span>
            </motion.h1>

            <motion.p {...fadeUp(0.25)} className="text-lg text-lo leading-relaxed max-w-[480px] mb-8">
              We build AI systems that capture every lead, send every follow-up, fill every booking,
              and handle the admin — so the business runs without depending on you to do it.
            </motion.p>

            <motion.div {...fadeUp(0.35)} className="flex flex-col sm:flex-row gap-3 mb-9">
              <button
                onClick={scrollToCTA}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-all duration-150 hover:-translate-y-px active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                Book Free Automation Audit
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a href="#systems" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-hi border border-white/20 rounded-full hover:border-white/40 hover:bg-white/[0.04] transition-all duration-150 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/50">
                See What We Automate
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.45)} className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {TRUST.map((item, i) => (
                <span key={item} className="flex items-center gap-2 text-xs text-dim">
                  {i > 0 && <span className="w-px h-3 bg-white/10" aria-hidden="true" />}
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <FlowPreview />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
