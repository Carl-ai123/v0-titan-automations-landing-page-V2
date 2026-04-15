"use client"

import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

type NavLink = {
  href: string
  label: string
  items: string[]
}

const navLinks: NavLink[] = [
  {
    href: "#how-it-works",
    label: "How It Works",
    items: [
      "Step 01 · Discovery Call",
      "Step 02 · We Build It",
      "Step 03 · You Go Live",
    ],
  },
  {
    href: "#services",
    label: "Services",
    items: [
      "AI-Powered Websites",
      "Booking Systems",
      "CRM & Pipelines",
      "AI Chatbots",
      "Review & Recall",
    ],
  },
  {
    href: "#results",
    label: "Results",
    items: [
      "100+ leads enriched",
      "14-day delivery",
      "£280/mo saved",
    ],
  },
  {
    href: "#faq",
    label: "FAQ",
    items: [
      "What do you build?",
      "How long does it take?",
      "Do I own everything?",
      "What does it cost?",
    ],
  },
]

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("")

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const visibleSections = new Map<string, number>()

    const pickMostVisible = () => {
      let best = ""
      let bestRatio = 0
      visibleSections.forEach((ratio, id) => {
        if (ratio > bestRatio) { bestRatio = ratio; best = id }
      })
      setActive(best ? `#${best}` : "")
    }

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio)
          } else {
            visibleSections.delete(id)
          }
          pickMostVisible()
        },
        { threshold: [0, 0.1, 0.3, 0.5, 0.75, 1] }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [ids])

  return active
}

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const sectionIds = navLinks.map((l) => l.href.slice(1))
  const activeSection = useActiveSection(sectionIds)

  return (
    <>
      {/* Desktop Nav */}
      <nav className="fixed top-4 md:top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="flex items-center gap-6 lg:gap-8 px-5 lg:px-6 py-2.5 lg:py-3 rounded-full bg-[rgba(250,250,249,0.9)] dark:bg-[rgba(10,10,10,0.85)] backdrop-blur-[12px] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 font-display">
            <span className="text-text-light dark:text-white font-medium">Titan</span>
            <span className="text-muted">Automations</span>
          </a>

          {/* Separator */}
          <span className="w-px h-4 bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)]" aria-hidden="true" />

          {/* Links with dropdowns */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {/* Link */}
                <a
                  href={link.href}
                  className={`text-sm transition-colors ${
                    activeSection === link.href
                      ? "text-text-light dark:text-white font-medium"
                      : "text-muted hover:text-text-light dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </a>

                {/* Dropdown — pt-3 is an invisible hover bridge */}
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3
                              opacity-0 translate-y-1 pointer-events-none
                              group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                              transition-all duration-150 ease-out z-10"
                >
                  <div
                    className="rounded-xl p-2 min-w-[180px]
                                bg-[rgba(250,250,249,0.97)] dark:bg-[rgba(10,10,10,0.95)]
                                backdrop-blur-[12px]
                                border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)]"
                  >
                    {link.items.map((item) => (
                      <a
                        key={item}
                        href={link.href}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg
                                   text-sm text-muted whitespace-nowrap
                                   hover:text-text-light dark:hover:text-white
                                   hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.04)]
                                   transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent/50 shrink-0" />
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* CTA */}
          <a
            href="#cta"
            className="px-4 py-2 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent/90 transition-colors hover:-translate-y-px active:translate-y-0 transition-transform"
          >
            Book a Call
          </a>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="fixed top-4 left-4 right-4 z-50 md:hidden">
        <div className="flex items-center justify-between px-4 py-2.5 rounded-full bg-[rgba(250,250,249,0.95)] dark:bg-[rgba(10,10,10,0.9)] backdrop-blur-[12px] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 font-display">
            <span className="text-text-light dark:text-white font-medium">Titan</span>
            <span className="text-muted">Automations</span>
          </a>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-6 h-6 flex items-center justify-center"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <span className={`absolute w-5 h-0.5 bg-text-light dark:bg-white transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-1.5"}`} />
              <span className={`absolute w-5 h-0.5 bg-text-light dark:bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute w-5 h-0.5 bg-text-light dark:bg-white transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-1.5"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-light dark:bg-dark transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display text-text-light dark:text-white transition-all duration-300"
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(12px)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-6 py-3 text-lg font-medium text-white bg-accent rounded-full transition-all duration-300"
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 50}ms` : "0ms",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(12px)",
            }}
          >
            Book a Call
          </a>
        </div>
      </div>
    </>
  )
}
