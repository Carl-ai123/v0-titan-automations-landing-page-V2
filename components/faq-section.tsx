"use client"

import { useState } from "react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What exactly do you build?",
      answer:
        "Websites, booking systems, CRM automations, AI chatbots, lead generation pipelines, review systems, and custom integrations between any tools your business already uses.",
    },
    {
      question: "How long does it take?",
      answer:
        "Most systems go live within 14 days of our first call. Simple websites in under a week.",
    },
    {
      question: "Do I own everything?",
      answer:
        "Yes. Every website, workflow and system is yours. No lock-in, no platform dependency.",
    },
    {
      question: "What does it cost?",
      answer:
        "Project builds start from £1,200. Monthly retainers from £150/month. We'll give you a clear fixed quote before anything starts.",
    },
    {
      question: "Do you work outside Kent?",
      answer:
        "Yes — we work with businesses across the South East and remotely across the UK.",
    },
  ]

  return (
    <section id="faq" className="bg-light py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 fade-up-section">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-light">
            Common questions.
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2 sm:space-y-3 fade-up-section">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card-light border border-[rgba(0,0,0,0.08)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
              >
                <span className="font-display font-medium text-text-light pr-4 text-sm sm:text-base">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-muted leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
