"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TitanLogoNav } from "@/components/titan-logo"
import { X, Menu } from "lucide-react"

const CALENDLY_URL = "https://calendly.com/carl-titan-automations/titan-onboarding-call"
const openCalendly = () => {
  if (typeof window !== "undefined") {
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL })
  }
}

const NAV_LINKS = [
  { href: "#problems",  label: "Problems"  },
  { href: "#systems",   label: "Systems"   },
  { href: "#results",   label: "Results"   },
  { href: "#process",   label: "Process"   },
  { href: "#faq",       label: "FAQ"       },
]

export function FloatingNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [])

  return (
    <>
      {/* ── Desktop nav ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${
          scrolled
            ? "bg-elevated/95 backdrop-blur-[14px] border-b border-white/[0.07]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" aria-label="Titan Automations home">
            <TitanLogoNav />
          </a>

          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-lo hover:text-hi transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={openCalendly}
            className="px-5 py-2.5 text-sm font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            Book Free Audit
          </button>
        </nav>
      </header>

      {/* ── Mobile nav bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <nav
          className={`mx-3 mt-3 px-4 h-14 flex items-center justify-between rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-elevated/95 backdrop-blur-[14px] border border-white/[0.08]"
              : "bg-elevated/80 backdrop-blur-[12px] border border-white/[0.06]"
          }`}
        >
          <a href="/" aria-label="Titan Automations home">
            <TitanLogoNav />
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-lo hover:text-hi hover:bg-white/[0.06] transition-colors"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden bg-page/98 backdrop-blur-xl flex flex-col"
          >
            <div className="flex flex-col items-center justify-center flex-1 gap-8 px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.055, duration: 0.3 }}
                  className="text-3xl font-display font-semibold text-hi tracking-tight hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                onClick={() => { setOpen(false); openCalendly() }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.055, duration: 0.3 }}
                className="mt-4 px-8 py-4 text-lg font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-colors w-full max-w-xs text-center"
              >
                Book Free Audit
              </motion.button>
            </div>
            <div className="pb-8 text-center text-sm text-dim">
              titan-automations.com
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
