"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"
import { submitAuditRequest } from "@/app/actions/audit-request"

const CALENDLY_URL = "https://calendly.com/carl-titan-automations/titan-onboarding-call"
const openCalendly = () => {
  if (typeof window !== "undefined") {
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL })
  }
}

const INDUSTRIES = [
  "Trades & Construction",
  "Health & Aesthetics",
  "Property & Lettings",
  "Professional Services",
  "Local Services",
  "Other",
]

export function FinalCTA() {
  const [name,        setName]        = useState("")
  const [business,    setBusiness]    = useState("")
  const [email,       setEmail]       = useState("")
  const [phone,       setPhone]       = useState("")
  const [industry,    setIndustry]    = useState("")
  const [bottleneck,  setBottleneck]  = useState("")
  const [loading,     setLoading]     = useState(false)
  const [success,     setSuccess]     = useState(false)
  const [error,       setError]       = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const result = await submitAuditRequest({
      name,
      business_name:      business,
      email,
      phone,
      industry,
      biggest_bottleneck: bottleneck,
    })

    setLoading(false)

    if (!result.success) {
      setError(result.error)
      return
    }

    setSuccess(true)
    setTimeout(openCalendly, 600)
  }

  return (
    <section id="cta" className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="relative inline-block mb-6">
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

          <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-hi mb-4">
            Find the manual work{" "}
            <span style={{ background: "linear-gradient(135deg, #009DFF 0%, #006CFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              costing you money.
            </span>
          </h2>
          <p className="text-lg text-lo leading-relaxed max-w-xl mx-auto">
            Tell us about your business and we will come prepared. 20 minutes. No commitment. No hard sell.
          </p>
        </div>

        {/* Success state */}
        {success ? (
          <div className="bg-surface border border-success/20 rounded-2xl p-10 text-center">
            <CheckCircle2 size={40} className="text-success mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-hi mb-2">You're on the list.</h3>
            <p className="text-lo mb-6">Your details are saved. Booking your call now — pick a time that suits you.</p>
            <button
              onClick={openCalendly}
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-colors"
            >
              Book your audit call
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            className="bg-surface border border-white/[0.08] rounded-2xl p-7 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-lo tracking-wide">Your name <span className="text-error">*</span></label>
                <input
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Carl Wilkins"
                  className="w-full bg-elevated border border-white/[0.08] focus:border-accent/50 rounded-xl px-4 py-3 text-sm text-hi placeholder:text-dim outline-none transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-lo tracking-wide">Business name</label>
                <input
                  value={business}
                  onChange={e => setBusiness(e.target.value)}
                  placeholder="Titan Automations"
                  className="w-full bg-elevated border border-white/[0.08] focus:border-accent/50 rounded-xl px-4 py-3 text-sm text-hi placeholder:text-dim outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-lo tracking-wide">Email <span className="text-error">*</span></label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@yourbusiness.com"
                  className="w-full bg-elevated border border-white/[0.08] focus:border-accent/50 rounded-xl px-4 py-3 text-sm text-hi placeholder:text-dim outline-none transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-lo tracking-wide">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  placeholder="+44 7700 900000"
                  className="w-full bg-elevated border border-white/[0.08] focus:border-accent/50 rounded-xl px-4 py-3 text-sm text-hi placeholder:text-dim outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-lo tracking-wide">Industry</label>
              <select
                value={industry}
                onChange={e => setIndustry(e.target.value)}
                className="w-full bg-elevated border border-white/[0.08] focus:border-accent/50 rounded-xl px-4 py-3 text-sm text-hi outline-none transition-colors appearance-none"
              >
                <option value="" className="bg-elevated text-dim">Select your industry…</option>
                {INDUSTRIES.map(i => (
                  <option key={i} value={i} className="bg-elevated">{i}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-lo tracking-wide">Biggest bottleneck right now</label>
              <textarea
                rows={3}
                value={bottleneck}
                onChange={e => setBottleneck(e.target.value)}
                placeholder="e.g. leads going cold before we follow up, too much time on admin, missed calls not recovered…"
                className="w-full bg-elevated border border-white/[0.08] focus:border-accent/50 rounded-xl px-4 py-3 text-sm text-hi placeholder:text-dim outline-none transition-colors resize-none"
              />
            </div>

            {error && (
              <p className="text-sm text-error">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group w-full flex items-center justify-center gap-2.5 py-4 text-base font-semibold text-page bg-accent rounded-full hover:bg-accent-deep disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150 hover:-translate-y-px active:translate-y-0 shadow-[0_8px_32px_rgba(0,157,255,0.22)]"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  Get My Free Audit
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>

            <p className="text-xs text-dim text-center pt-1">
              UK-based · No obligation · Your details are never shared
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
