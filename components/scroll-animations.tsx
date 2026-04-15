"use client"

import { useEffect } from "react"

export function ScrollAnimations() {
  useEffect(() => {
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

    const elements = document.querySelectorAll(".fade-up-section")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
