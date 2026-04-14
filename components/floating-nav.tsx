"use client"

import { useState } from "react"

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
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="flex items-center gap-8 px-6 py-3 rounded-full bg-[rgba(10,10,10,0.7)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.08)]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 font-display">
            <span className="text-white font-medium">Titan</span>
            <span className="text-muted">Automations</span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#cta"
            className="px-4 py-2 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent/90 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="fixed top-5 left-4 right-4 z-50 md:hidden">
        <div className="flex items-center justify-between px-4 py-3 rounded-full bg-[rgba(10,10,10,0.7)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.08)]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 font-display">
            <span className="text-white font-medium">Titan</span>
            <span className="text-muted">Automations</span>
          </a>

          {/* Hamburger / X */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-6 h-6 flex items-center justify-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute w-5 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute w-5 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute w-5 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-dark transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-display text-white opacity-0 ${
                isOpen ? `animate-fade-up stagger-${index + 1}` : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setIsOpen(false)}
            className={`mt-4 px-6 py-3 text-lg font-medium text-white bg-accent rounded-full opacity-0 ${
              isOpen ? "animate-fade-up stagger-5" : ""
            }`}
          >
            Book a Call
          </a>
        </div>
      </div>
    </>
  )
}
