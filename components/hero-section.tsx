"use client"

import { useEffect, useRef, useState } from "react"

const CALENDLY_URL = "https://calendly.com/carl-titan-automations/titan-onboarding-call"
const openCalendly = () => window.Calendly?.initPopupWidget({ url: CALENDLY_URL })

const FEED_EVENTS = [
  "New enquiry received and scored",
  "Follow-up sequence triggered",
  "Discovery call booking confirmed",
  "Review request dispatched",
  "CRM record created from form",
  "Missed call follow-up sent",
  "High-intent lead flagged",
  "Outreach email personalised and sent",
  "Pipeline stage updated automatically",
  "Rebooking SMS sent after no-show",
]

export function HeroSection() {
  const [leads, setLeads] = useState(47)
  const [emails, setEmails] = useState(10)
  const [leadsFlash, setLeadsFlash] = useState(false)
  const [emailsFlash, setEmailsFlash] = useState(false)
  const [feedIdx, setFeedIdx] = useState(0)
  const [feedFading, setFeedFading] = useState(false)
  const leadsTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const emailsTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Leads — increment every 8–14 seconds (randomised)
  useEffect(() => {
    function scheduleLeads() {
      const delay = 8000 + Math.random() * 6000
      leadsTimer.current = setTimeout(() => {
        setLeadsFlash(true)
        setLeads(c => Math.min(c + 1, 94))
        setTimeout(() => setLeadsFlash(false), 700)
        scheduleLeads()
      }, delay)
    }
    scheduleLeads()
    return () => { if (leadsTimer.current) clearTimeout(leadsTimer.current) }
  }, [])

  // Emails — increment every 18–28 seconds (randomised)
  useEffect(() => {
    function scheduleEmails() {
      const delay = 18000 + Math.random() * 10000
      emailsTimer.current = setTimeout(() => {
        setEmailsFlash(true)
        setEmails(c => Math.min(c + 1, 40))
        setTimeout(() => setEmailsFlash(false), 700)
        scheduleEmails()
      }, delay)
    }
    scheduleEmails()
    return () => { if (emailsTimer.current) clearTimeout(emailsTimer.current) }
  }, [])

  // Activity feed — rotate every 3.5s with a brief fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFeedFading(true)
      setTimeout(() => {
        setFeedIdx(i => (i + 1) % FEED_EVENTS.length)
        setFeedFading(false)
      }, 280)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-light dark:bg-dark min-h-[100dvh] pt-28 md:pt-36 pb-16 md:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            {/* Eyebrow */}
            <span
              className="block text-xs tracking-[0.2em] uppercase text-muted font-medium mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              AI Automation Agency · Kent &amp; South East
            </span>

            {/* Headline */}
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-semibold text-text-light dark:text-white leading-[1.05] tracking-[-0.03em] mb-5 md:mb-6 text-balance opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Your business shouldn&apos;t run on you.
            </h1>

            {/* Subtext */}
            <p
              className="text-base md:text-lg text-muted max-w-[480px] mb-6 md:mb-8 leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "0.35s" }}
            >
              We build AI-powered systems that handle your leads, bookings, and follow-ups automatically. You get more clients — without the manual overhead. Live in 14 days.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 md:mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white bg-accent rounded-full hover:bg-accent/90 transition-colors hover:-translate-y-px active:translate-y-0"
              >
                Book a Free Call
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <a
                href="#how-it-works"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-text-light dark:text-white border border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] rounded-full hover:border-[rgba(0,0,0,0.4)] dark:hover:border-[rgba(255,255,255,0.4)] transition-colors hover:-translate-y-px active:translate-y-0"
              >
                How It Works
              </a>
            </div>

            {/* Trust strip */}
            <div
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-wider text-muted opacity-0 animate-fade-up"
              style={{ animationDelay: "0.65s" }}
            >
              <span>14-Day Delivery</span>
              <span className="hidden sm:inline text-[rgba(0,0,0,0.2)] dark:text-[rgba(255,255,255,0.2)]">·</span>
              <span>Fixed-Price Quotes</span>
              <span className="hidden sm:inline text-[rgba(0,0,0,0.2)] dark:text-[rgba(255,255,255,0.2)]">·</span>
              <span>100% Client Owned</span>
              <span className="hidden sm:inline text-[rgba(0,0,0,0.2)] dark:text-[rgba(255,255,255,0.2)]">·</span>
              <span>Kent Based</span>
            </div>
          </div>

          {/* Right Column — Live Dashboard Card */}
          <div
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="bg-card-light dark:bg-card-dark border border-[rgba(0,0,0,0.12)] dark:border-[rgba(255,255,255,0.12)] rounded-2xl p-5 sm:p-6">

              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-[0.15em] uppercase text-muted font-medium">
                  Live System Overview
                </span>
                <div className="flex items-center gap-2">
                  {/* Pulsing live dot */}
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
                  </span>
                  <span className="text-xs text-muted">All systems live</span>
                </div>
              </div>

              {/* 2×2 Stat Grid */}
              <div className="grid grid-cols-2 gap-px bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden mb-5">
                {/* Leads — live incrementing */}
                <div
                  className="p-5 transition-colors duration-500"
                  style={{
                    background: leadsFlash
                      ? "rgba(37,99,235,0.07)"
                      : "var(--color-card-light, #EDE9E3)",
                  }}
                >
                  <div
                    className="text-2xl font-display font-semibold text-text-light dark:text-white mb-1 tabular-nums transition-all duration-300"
                    style={{ color: leadsFlash ? "#2563EB" : undefined }}
                  >
                    {leads}
                  </div>
                  <div className="text-xs text-muted">Leads enriched today</div>
                </div>

                {/* Emails — live incrementing */}
                <div
                  className="p-5 transition-colors duration-500"
                  style={{
                    background: emailsFlash
                      ? "rgba(37,99,235,0.07)"
                      : "var(--color-card-light, #EDE9E3)",
                  }}
                >
                  <div
                    className="text-2xl font-display font-semibold text-text-light dark:text-white mb-1 tabular-nums transition-all duration-300"
                    style={{ color: emailsFlash ? "#2563EB" : undefined }}
                  >
                    {emails}
                  </div>
                  <div className="text-xs text-muted">Emails dispatched</div>
                </div>

                <div className="bg-card-light dark:bg-card-dark p-5">
                  <div className="text-2xl font-display font-semibold text-text-light dark:text-white mb-1">2</div>
                  <div className="text-xs text-muted">Replies received</div>
                </div>
                <div className="bg-card-light dark:bg-card-dark p-5">
                  <div className="text-2xl font-display font-semibold text-accent mb-1">100%</div>
                  <div className="text-xs text-muted">Automated</div>
                </div>
              </div>

              {/* Activity Feed */}
              <div className="pt-4 border-t border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)]">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green shrink-0" aria-hidden="true" />
                  <span
                    className="text-xs text-muted flex-1 min-w-0 truncate transition-opacity duration-[280ms]"
                    style={{ opacity: feedFading ? 0 : 1 }}
                  >
                    {FEED_EVENTS[feedIdx]}
                  </span>
                  <span
                    className="text-[10px] text-muted/40 shrink-0 transition-opacity duration-[280ms]"
                    style={{ opacity: feedFading ? 0 : 1 }}
                  >
                    just now
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
