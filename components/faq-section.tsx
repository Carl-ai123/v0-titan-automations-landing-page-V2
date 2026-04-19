"use client"

import { useState } from "react"

type FAQ = {
  id: string
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: "build",
    question: "What exactly do you build?",
    answer:
      "Websites, booking systems, CRM automations, AI chatbots, lead generation pipelines, review systems, and custom integrations between any tools your business already uses.",
  },
  {
    id: "time",
    question: "How long does it take?",
    answer:
      "Most systems go live within 14 days of our first call. Simple websites in under a week.",
  },
  {
    id: "ownership",
    question: "Do I own everything?",
    answer:
      "Yes. Every website, workflow and system is yours. No lock-in, no platform dependency.",
  },
  {
    id: "cost",
    question: "What does it cost?",
    answer:
      "Project builds start from £1,200. Monthly retainers from £150/month. We'll give you a clear fixed quote before anything starts.",
  },
  {
    id: "location",
    question: "Do you work outside Kent?",
    answer:
      "Yes — we work with businesses across the South East and remotely across the UK.",
  },
  {
    id: "diy",
    question: "Can't I just use Zapier or Make myself?",
    answer:
      "You can — but most business owners get halfway through a workflow, hit an error, and leave it broken for months. We build it properly, test it against real scenarios, and hand it over running. You get the result without the hours of trial and error.",
  },
  {
    id: "guarantee",
    question: "What if it doesn't work as expected?",
    answer:
      "If something we build doesn't perform as scoped, we fix it — no charge, no debate. Every project comes with 30 days of post-launch support and we don't consider a job done until it works.",
  },
  {
    id: "results",
    question: "When will I see results?",
    answer:
      "It depends on what we build. Booking systems and websites generate results from day one. Automation pipelines and lead systems typically show measurable impact within the first 30 days. We'll be honest with you in the discovery call about what to expect and by when — no inflated promises.",
  },
  {
    id: "right-for-me",
    question: "Is this right for my business?",
    answer:
      "If you're a service business spending hours a week on admin, follow-ups, or manual processes — almost certainly yes. We work best with trades, clinics, consultants, and local service businesses who are busy and ready to scale. If you're not sure, book a free call and we'll tell you honestly whether it makes sense.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-light dark:bg-dark py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12 fade-up-section">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-light dark:text-white tracking-[-0.03em]">
            Common questions.
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2 sm:space-y-3 fade-up-section">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${faq.id}`
            const questionId = `faq-question-${faq.id}`

            return (
              <div
                key={faq.id}
                className="bg-[rgba(0,0,0,0.02)] dark:bg-[rgba(255,255,255,0.03)] border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,0,0,0.14)] dark:hover:border-[rgba(255,255,255,0.14)] transition-colors duration-200 rounded-xl overflow-hidden"
              >
                <button
                  id={questionId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left"
                >
                  <span className="font-display font-medium text-text-light dark:text-white pr-4 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
