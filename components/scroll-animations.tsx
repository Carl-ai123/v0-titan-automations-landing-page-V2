"use client"

import { useEffect } from "react"

export function ScrollAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up-section")

    // Skip animations entirely for users who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => el.classList.add("visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 0px 0px",
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
