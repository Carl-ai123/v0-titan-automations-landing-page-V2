"use client"

import { ArrowRight } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/carl-titan-automations/titan-onboarding-call"
const openCalendly = () => {
  if (typeof window !== "undefined") {
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL })
  }
}

export function FinalCTA() {
  return (
    <section id="cta" className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative inline-block mb-8">
          <div
            className="absolute inset-0 -m-16 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,157,255,0.1) 0%, transparent 65%)" }}
            aria-hidden="true"
          />
          <span className="relative inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent">
            <span className="w-5 h-px bg-accent" aria-hidden="true" />
            Free Automation Audit
            <span className="w-5 h-px bg-accent" aria-hidden="true" />
          </span>
        </div>

        <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-hi mb-6">
          Find the manual work{" "}
          <span style={{ background: "linear-gradient(135deg, #009DFF 0%, #006CFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            costing you money.
          </span>
        </h2>

        <p className="text-lg text-lo leading-relaxed mb-10 max-w-xl mx-auto">
          In 20 minutes, we will map where leads, time, and revenue are leaking — and show you
          what to automate first. No commitment. No hard sell. Just the audit.
        </p>

        <button
          onClick={openCalendly}
          className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-all duration-150 hover:-translate-y-px active:translate-y-0 shadow-[0_8px_32px_rgba(0,157,255,0.22)]"
        >
          Book Free Automation Audit
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </button>

        <p className="mt-5 text-sm text-dim">
          UK-based · No obligation · Reply within one working day
        </p>
      </div>
    </section>
  )
}
