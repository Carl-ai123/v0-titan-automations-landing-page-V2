"use client"

import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#services", label: "Services" },
    { href: "#results", label: "Results" },
    { href: "#faq", label: "FAQ" },
  ]

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

          {/* Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-text-light dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
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
            {/* Theme Toggle (mobile) */}
            <ThemeToggle />

            {/* Hamburger / X */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-6 h-6 flex items-center justify-center"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`absolute w-5 h-0.5 bg-text-light dark:bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-text-light dark:bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-text-light dark:bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
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
