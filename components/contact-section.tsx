"use client"

import { useEffect, useRef, useState, useTransition } from "react"
// useRef kept for ServiceSelect
import { submitContact, type ContactFormData } from "@/app/actions/contact"

const CALENDLY_URL = "https://calendly.com/carl-titan-automations/titan-onboarding-call"
const openCalendly = () => window.Calendly?.initPopupWidget({ url: CALENDLY_URL })

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

function BookingCard() {
  return (
    <div className="max-w-xl mx-auto">
      {/* Card */}
      <div className="bg-card-light dark:bg-card-dark border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] rounded-2xl p-8 sm:p-10 text-center">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 text-accent">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
        </div>

        <h3 className="font-display text-2xl font-semibold text-text-light dark:text-white tracking-[-0.03em] mb-2">
          Titan Onboarding Call
        </h3>
        <p className="text-sm text-muted mb-1">with Carl Wilkins</p>

        {/* Meta pills */}
        <div className="flex items-center justify-center gap-4 mt-4 mb-8">
          <div className="flex items-center gap-1.5 text-sm text-muted">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
            </svg>
            20 minutes
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8h12v9a1 1 0 01-1 1H4a1 1 0 01-1-1V8z"/>
            </svg>
            Video call
          </div>
          <div className="flex items-center gap-1.5 text-sm text-green">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            Free
          </div>
        </div>

        <p className="text-sm text-muted leading-relaxed mb-8 max-w-sm mx-auto">
          No pitch, no pressure. We&apos;ll review your business and show you exactly what we&apos;d build — for free.
        </p>

        <button
          onClick={openCalendly}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-white bg-accent rounded-full hover:bg-accent/90 transition-colors hover:-translate-y-px active:translate-y-0"
        >
          Pick a time that works
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        <p className="text-xs text-muted/60 mt-4">Opens in a quick pop-up · No account needed</p>
      </div>
    </div>
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

        {/* Tab content */}
        <div>
          <div className={tab === "book" ? "block" : "hidden"}>
            <BookingCard />
          </div>

          {tab === "message" && (
            submitted
              ? <SuccessState onBookNow={() => setTab("book")} />
              : <ContactForm onSuccess={() => setSubmitted(true)} />
          )}
        </div>

        {/* Direct contact */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 fade-up-section">
          <span className="text-xs text-muted uppercase tracking-[0.15em]">Or reach us directly</span>
          <div className="hidden sm:block w-px h-4 bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)]" />
          <a
            href="https://wa.me/447464256627"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-[#25D366] hover:bg-[#22c05e] transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <a
            href="tel:+447464256627"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-text-light dark:text-white border border-[rgba(0,0,0,0.15)] dark:border-[rgba(255,255,255,0.15)] hover:border-[rgba(0,0,0,0.3)] dark:hover:border-[rgba(255,255,255,0.3)] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
            </svg>
            +44 7464 256627
          </a>
        </div>

      </div>
    </section>
  )
}
