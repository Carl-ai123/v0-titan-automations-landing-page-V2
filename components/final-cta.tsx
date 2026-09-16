"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Loader2, ChevronDown } from "lucide-react"
import { submitAuditRequest } from "@/app/actions/audit-request"

const CALENDLY_URL = "https://calendly.com/carl-titan-automations/titan-onboarding-call"
const openCalendly = (event: React.MouseEvent<HTMLAnchorElement>) => {
  if (window.Calendly) {
    try {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
      event.preventDefault()
    } catch {
      // Keep the ordinary link usable if the third-party widget fails.
    }
  }
}

const INDUSTRIES = [
  "Commercial Electrical & M&E",
  "Structural Steel & Fabrication",
  "HVAC & Building Services",
  "Civils & Groundworks",
  "Fire & Security",
  "Other Contractor / Subcontractor",
]

const inputClass = "w-full bg-elevated border border-white/[0.08] focus:border-accent/50 rounded-xl px-4 py-3 text-sm text-hi placeholder:text-dim outline-none transition-colors focus-visible:ring-2 focus-visible:ring-accent/30"

export function FinalCTA() {
  const [name,        setName]        = useState("")
  const [business,    setBusiness]    = useState("")
  const [email,       setEmail]       = useState("")
  const [phone,       setPhone]       = useState("")
  const [industry,    setIndustry]    = useState("")
  const [bottleneck,  setBottleneck]  = useState("")
  const [honeypot,    setHoneypot]    = useState("")
  const [loading,     setLoading]     = useState(false)
  const [success,     setSuccess]     = useState(false)
  const [error,       setError]       = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (loading) return

    setLoading(true)
    setError("")

    try {
      const result = await submitAuditRequest({
        name,
        business_name: business,
        email,
        phone,
        industry,
        biggest_bottleneck: bottleneck,
        website_url: honeypot,
      })

      if (!result.success) {
        setError(result.error)
        return
      }

      setSuccess(true)
    } catch {
      setError("We couldn't confirm your enquiry. Please try again or email info@titan-automations.com directly.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="cta" className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="relative inline-block mb-6">
            <div
              className="absolute inset-0 -m-16 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,157,255,0.1) 0%, transparent 65%)" }}
              aria-hidden="true"
            />
            <span className="relative inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent">
              <span className="w-5 h-px bg-accent" aria-hidden="true" />
              Free Contractor Growth Audit
              <span className="w-5 h-px bg-accent" aria-hidden="true" />
            </span>
          </div>

          <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-hi mb-4">
            Find where enquiries and quotes{" "}
            <span style={{ background: "linear-gradient(135deg, #009DFF 0%, #006CFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              are slipping through.
            </span>
          </h2>
          <p className="text-lg text-lo leading-relaxed max-w-xl mx-auto">
            Tell us how you currently receive enquiries, price work and follow up quotes. We will map the biggest leak and show you what to automate first.
          </p>
        </div>

        {success ? (
          <div role="status" className="bg-surface border border-success/20 rounded-2xl p-10 text-center">
            <CheckCircle2 size={40} className="text-success mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-hi mb-2">Enquiry received.</h3>
            <p className="text-lo mb-6">Your details are saved. Choose a time below and we will come prepared.</p>
            <a
              href={CALENDLY_URL}
              onClick={openCalendly}
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              Book your contractor audit
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-surface border border-white/[0.08] rounded-2xl p-7 md:p-10 space-y-5">
            <input
              type="text"
              name="website_url"
              value={honeypot}
              onChange={e => setHoneypot(e.target.value)}
              tabIndex={-1}
              aria-hidden="true"
              className="absolute opacity-0 pointer-events-none w-0 h-0"
              autoComplete="off"
            />

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-lo tracking-wide" htmlFor="cta-name">Your name <span className="text-error" aria-hidden="true">*</span></label>
                <input id="cta-name" name="name" autoComplete="name" maxLength={120} required value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Steve Jones" className={inputClass} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-lo tracking-wide" htmlFor="cta-business">Company</label>
                <input id="cta-business" name="business_name" autoComplete="organization" maxLength={200} value={business} onChange={e => setBusiness(e.target.value)} placeholder="e.g. Jones M&E Ltd" className={inputClass} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-lo tracking-wide" htmlFor="cta-email">Email <span className="text-error" aria-hidden="true">*</span></label>
                <input id="cta-email" name="email" autoComplete="email" maxLength={254} required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.co.uk" className={inputClass} />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-lo tracking-wide" htmlFor="cta-phone">Phone</label>
                <input id="cta-phone" name="phone" autoComplete="tel" maxLength={50} type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="e.g. 07700 900123" className={inputClass} />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-lo tracking-wide" htmlFor="cta-industry">Contractor type</label>
              <div className="relative">
                <select id="cta-industry" value={industry} onChange={e => setIndustry(e.target.value)} className={`${inputClass} appearance-none pr-10`}>
                  <option value="" className="bg-elevated text-dim">Select your trade…</option>
                  {INDUSTRIES.map(i => <option key={i} value={i} className="bg-elevated text-hi">{i}</option>)}
                </select>
                <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-dim pointer-events-none" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-lo tracking-wide" htmlFor="cta-bottleneck">Where does work currently get stuck?</label>
              <textarea id="cta-bottleneck" maxLength={3000} rows={3} value={bottleneck} onChange={e => setBottleneck(e.target.value)} placeholder="e.g. enquiries arrive by email and phone, quotes are chased manually, and we have no clear pipeline…" className={`${inputClass} resize-none`} />
            </div>

            {error && <p role="alert" className="text-sm text-error bg-error/10 border border-error/20 rounded-lg px-4 py-3">{error}</p>}

            <button type="submit" disabled={loading} className="group w-full flex items-center justify-center gap-2.5 py-4 text-base font-semibold text-page bg-accent rounded-full hover:bg-accent-deep disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150 hover:-translate-y-px active:translate-y-0 shadow-[0_8px_32px_rgba(0,157,255,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
              {loading ? <><Loader2 size={16} className="animate-spin" />Submitting…</> : <>Map My Growth System<ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" /></>}
            </button>

            <p className="text-xs text-dim text-center pt-1">UK-based · No obligation · <a href="/privacy" className="underline hover:text-hi">Privacy policy</a></p>
          </form>
        )}
      </div>
    </section>
  )
}
