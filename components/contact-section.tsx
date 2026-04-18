"use client"

import { useEffect, useRef, useState, useTransition } from "react"
import { submitContact, type ContactFormData } from "@/app/actions/contact"

const CALENDLY_URL = "https://calendly.com/carl-titan-automations/titan-onboarding-call"
const CALENDLY_DARK = `${CALENDLY_URL}?background_color=0a0a0a&text_color=f5f5f5&primary_color=2563eb&hide_gdpr_banner=1`

const serviceOptions = [
  "AI-Powered Website",
  "Booking & Automation System",
  "CRM & Lead Pipeline",
  "AI Chatbot",
  "Review & Recall System",
  "Not sure yet — let's talk",
]

const steps = [
  {
    number: "01",
    label: "We review your business",
    detail: "Tell us what you do — we'll look at your current tools and workflows.",
  },
  {
    number: "02",
    label: "20-min discovery call",
    detail: "No pitch, no pressure. Just a clear picture of what we'd build for you.",
  },
  {
    number: "03",
    label: "Fixed quote in 48hrs",
    detail: "A written scope and price before anything starts — zero ambiguity.",
  },
]

type Tab = "book" | "message"

function CalendlyEmbed() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If Calendly script already loaded, init inline widget directly
    if (window.Calendly) {
      window.Calendly.initInlineWidget({ url: CALENDLY_DARK, parentElement: el })
      return
    }

    // Otherwise wait for the script to load then init
    const onLoad = () => {
      window.Calendly?.initInlineWidget({ url: CALENDLY_DARK, parentElement: el })
    }
    const script = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    )
    script?.addEventListener("load", onLoad)
    return () => script?.removeEventListener("load", onLoad)
  }, [])

  return (
    <div
      ref={ref}
      className="w-full rounded-2xl overflow-hidden border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)]"
      style={{ minWidth: "320px", height: "700px" }}
    />
  )
}

function ServiceSelect({
  value,
  onChange,
  inputClass,
}: {
  value: string
  onChange: (v: string) => void
  inputClass: string
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`${inputClass} flex items-center justify-between text-left w-full ${
          value ? "text-text-light dark:text-white" : ""
        }`}
      >
        <span>{value || "Select a service..."}</span>
        <svg
          className={`w-4 h-4 text-muted shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-xl overflow-hidden border border-[rgba(0,0,0,0.12)] dark:border-[rgba(255,255,255,0.12)] bg-[#F5F2EE] dark:bg-card-dark shadow-xl dark:shadow-[0_12px_32px_rgba(0,0,0,0.6)]">
          <button
            type="button"
            onClick={() => { onChange(""); setOpen(false) }}
            className="w-full text-left px-4 py-2.5 text-sm text-muted hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.05)] transition-colors"
          >
            Select a service...
          </button>
          <div className="h-px bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.06)]" />
          {serviceOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false) }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                value === opt
                  ? "text-accent bg-accent/8 dark:bg-accent/10"
                  : "text-text-light dark:text-white hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.05)]"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function ContactForm({ onSuccess }: { onSuccess: () => void }) {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    businessName: "",
    service: "",
    message: "",
  })

  const set = (field: keyof ContactFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    startTransition(async () => {
      const res = await submitContact(form)
      if (res.success) {
        onSuccess()
      } else {
        setError(res.error ?? "Something went wrong.")
      }
    })
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm text-text-light dark:text-white placeholder:text-muted " +
    "bg-[rgba(0,0,0,0.03)] dark:bg-[rgba(255,255,255,0.04)] " +
    "border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)] " +
    "focus:outline-none focus:border-accent transition-colors"

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      {/* Name + Business */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] text-muted uppercase tracking-[0.12em] font-medium mb-2">
            Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={set("name")}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-[10px] text-muted uppercase tracking-[0.12em] font-medium mb-2">
            Business name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            required
            value={form.businessName}
            onChange={set("businessName")}
            placeholder="Your business"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-[10px] text-muted uppercase tracking-[0.12em] font-medium mb-2">
          Email <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={set("email")}
          placeholder="you@yourbusiness.com"
          className={inputClass}
        />
      </div>

      {/* Service dropdown — custom component, fully styled in dark mode */}
      <div>
        <label className="block text-[10px] text-muted uppercase tracking-[0.12em] font-medium mb-2">
          What do you need help with?
        </label>
        <ServiceSelect
          value={form.service}
          onChange={(v) => setForm((f) => ({ ...f, service: v }))}
          inputClass={inputClass}
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-[10px] text-muted uppercase tracking-[0.12em] font-medium mb-2">
          Anything else?{" "}
          <span className="normal-case tracking-normal text-muted/60">(optional)</span>
        </label>
        <textarea
          rows={4}
          value={form.message}
          onChange={set("message")}
          placeholder="Tell us a bit about your business and what you're trying to solve..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-red-500 leading-relaxed">{error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-white bg-accent rounded-full hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-px active:translate-y-0"
      >
        {isPending ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send message
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs text-center text-muted/70 leading-relaxed">
        Your data is handled in line with UK GDPR. We never share your details.{" "}
        <a href="/privacy" className="underline hover:text-muted transition-colors">
          Privacy policy
        </a>
      </p>
    </form>
  )
}

function SuccessState({ onBookNow }: { onBookNow: () => void }) {
  return (
    <div className="text-center py-12 max-w-sm mx-auto">
      <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-5">
        <svg className="w-6 h-6 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="font-display text-xl font-semibold text-text-light dark:text-white tracking-[-0.02em] mb-2">
        Message received
      </h3>
      <p className="text-sm text-muted mb-8 leading-relaxed">
        We'll be in touch within 24 hours. Want to skip the wait and lock in a time now?
      </p>
      <button
        onClick={onBookNow}
        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent/90 transition-colors"
      >
        Book a time directly
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  )
}

export function ContactSection() {
  const [tab, setTab] = useState<Tab>("book")
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="cta" className="bg-light dark:bg-dark py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14 fade-up-section">
          <div className="w-12 h-px bg-accent mx-auto mb-12" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-light dark:text-white tracking-[-0.03em] mb-4">
            Ready to see what&apos;s possible?
          </h2>
          <p className="text-base md:text-lg text-muted max-w-xl mx-auto leading-relaxed">
            20 minutes. No pitch. We&apos;ll show you exactly what we&apos;d build for your business — for free.
          </p>
        </div>

        {/* 3-step process */}
        <div className="grid sm:grid-cols-3 gap-3 mb-10 md:mb-14 fade-up-section">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.02)] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-xl p-5"
            >
              <div className="text-[10px] tracking-[0.15em] uppercase text-accent font-medium mb-2">
                {step.number}
              </div>
              <div className="text-sm font-medium text-text-light dark:text-white mb-1 leading-snug">
                {step.label}
              </div>
              <div className="text-xs text-muted leading-relaxed">{step.detail}</div>
            </div>
          ))}
        </div>

        {/* Tab toggle */}
        <div className="flex justify-center mb-8 fade-up-section">
          <div className="inline-flex rounded-full bg-[rgba(0,0,0,0.04)] dark:bg-[rgba(255,255,255,0.04)] p-1 gap-1">
            <button
              onClick={() => setTab("book")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                tab === "book"
                  ? "bg-accent text-white"
                  : "text-muted hover:text-text-light dark:hover:text-white"
              }`}
            >
              Book a time
            </button>
            <button
              onClick={() => { setTab("message"); setSubmitted(false) }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                tab === "message"
                  ? "bg-accent text-white"
                  : "text-muted hover:text-text-light dark:hover:text-white"
              }`}
            >
              Send a message
            </button>
          </div>
        </div>

        {/* Tab content — CalendlyEmbed always mounted so it loads in background */}
        <div className="fade-up-section">
          <div className={tab === "book" ? "block" : "hidden"}>
            <CalendlyEmbed />
          </div>

          {tab === "message" && (
            submitted
              ? <SuccessState onBookNow={() => setTab("book")} />
              : <ContactForm onSuccess={() => setSubmitted(true)} />
          )}
        </div>

      </div>
    </section>
  )
}
