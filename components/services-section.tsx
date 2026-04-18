import type { ReactNode } from "react"

type ServiceCardProps = {
  visual: ReactNode
  label: string
  title: string
  bullets: string[]
  outcome: string
}

function ServiceCard({ visual, label, title, bullets, outcome }: ServiceCardProps) {
  return (
    <div className="group bg-card-light dark:bg-card-dark border border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)] hover:border-accent/25 dark:hover:border-accent/35 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(37,99,235,0.07)] dark:hover:shadow-[0_12px_32px_rgba(37,99,235,0.14)] transition-all duration-300 ease-out rounded-2xl overflow-hidden cursor-default flex flex-col">
      {/* Visual area */}
      <div className="relative h-52 bg-[#0d0d0f] border-b border-[rgba(255,255,255,0.06)] overflow-hidden flex items-center justify-center">
        {visual}
      </div>
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-[10px] tracking-[0.15em] uppercase text-accent font-medium mb-2">{label}</p>
        <h3 className="font-display text-lg font-semibold text-text-light dark:text-white tracking-[-0.03em] mb-3">
          {title}
        </h3>
        <ul className="space-y-1.5 flex-1 mb-4">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-xs text-muted">
              <span className="w-1 h-1 rounded-full bg-accent/50 shrink-0 mt-[5px]" />
              {b}
            </li>
          ))}
        </ul>
        <p className="text-xs font-medium text-accent border-t border-[rgba(0,0,0,0.06)] dark:border-[rgba(255,255,255,0.06)] pt-3 leading-relaxed">
          {outcome}
        </p>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Visual 1 — Dental Practice Website
   ───────────────────────────────────────── */
const WebsiteVisual = (
  <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Browser frame */}
    <rect x="12" y="10" width="316" height="178" rx="10" fill="#111114" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
    {/* Browser chrome */}
    <rect x="12" y="10" width="316" height="24" rx="10" fill="#1a1a1f"/>
    <rect x="12" y="26" width="316" height="8" fill="#1a1a1f"/>
    {/* Traffic lights */}
    <circle cx="26" cy="22" r="3.5" fill="#FF5F57"/>
    <circle cx="36" cy="22" r="3.5" fill="#FFBD2E"/>
    <circle cx="46" cy="22" r="3.5" fill="#28C840"/>
    {/* URL bar */}
    <rect x="66" y="16" width="180" height="12" rx="6" fill="#0a0a0c"/>
    <text x="82" y="25" fontSize="6.5" fill="rgba(255,255,255,0.3)" fontFamily="system-ui">🔒 brightsmilesdental.co.uk</text>

    {/* ── Site Nav ── */}
    <rect x="12" y="34" width="316" height="20" fill="#0f0f12"/>
    <text x="22" y="47" fontSize="7" fontWeight="600" fill="rgba(255,255,255,0.9)" fontFamily="system-ui">BrightSmiles</text>
    <text x="86" y="47" fontSize="6.5" fill="rgba(255,255,255,0.4)" fontFamily="system-ui">Services</text>
    <text x="118" y="47" fontSize="6.5" fill="rgba(255,255,255,0.4)" fontFamily="system-ui">About</text>
    <text x="146" y="47" fontSize="6.5" fill="rgba(255,255,255,0.4)" fontFamily="system-ui">Pricing</text>
    <text x="176" y="47" fontSize="6.5" fill="rgba(255,255,255,0.4)" fontFamily="system-ui">Contact</text>
    <rect x="284" y="38" width="36" height="12" rx="6" fill="#2563EB"/>
    <text x="291" y="47" fontSize="6" fontWeight="600" fill="white" fontFamily="system-ui">Book Now</text>

    {/* ── Hero section ── */}
    <rect x="12" y="54" width="316" height="68" fill="#0a0a0d"/>
    {/* Subtle gradient overlay */}
    <rect x="12" y="54" width="160" height="68" fill="url(#heroGrad)" fillOpacity="0.3"/>
    <text x="24" y="70" fontSize="6" fill="rgba(37,99,235,0.9)" fontFamily="system-ui" letterSpacing="1.5">NEW PATIENT OFFER</text>
    <text x="24" y="82" fontSize="11" fontWeight="700" fill="white" fontFamily="system-ui">Welcoming New Patients</text>
    <text x="24" y="93" fontSize="11" fontWeight="700" fill="white" fontFamily="system-ui">in Maidstone &amp; Kent</text>
    <text x="24" y="104" fontSize="6.5" fill="rgba(255,255,255,0.45)" fontFamily="system-ui">Complete dental care, from check-ups to</text>
    <text x="24" y="113" fontSize="6.5" fill="rgba(255,255,255,0.45)" fontFamily="system-ui">smile transformations. Book online 24/7.</text>
    <rect x="24" y="116" width="62" height="14" rx="7" fill="#2563EB"/>
    <text x="31" y="126" fontSize="6.5" fontWeight="600" fill="white" fontFamily="system-ui">Book Online →</text>
    <rect x="93" y="116" width="54" height="14" rx="7" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.7"/>
    <text x="99" y="126" fontSize="6.5" fill="rgba(255,255,255,0.6)" fontFamily="system-ui">Our Services</text>
    {/* Hero right image placeholder */}
    <rect x="198" y="57" width="122" height="62" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
    {/* Simulated photo blocks */}
    <rect x="204" y="62" width="54" height="50" rx="4" fill="rgba(37,99,235,0.08)"/>
    <rect x="264" y="62" width="50" height="24" rx="4" fill="rgba(37,99,235,0.06)"/>
    <rect x="264" y="90" width="50" height="22" rx="4" fill="rgba(37,99,235,0.04)"/>
    {/* Stat badge */}
    <rect x="208" y="90" width="42" height="18" rx="4" fill="#0d0d0f" stroke="rgba(255,255,255,0.1)" strokeWidth="0.7"/>
    <text x="215" y="101" fontSize="8" fontWeight="700" fill="#2563EB" fontFamily="system-ui">4.9 ★</text>
    <text x="213" y="108" fontSize="5.5" fill="rgba(255,255,255,0.35)" fontFamily="system-ui">142 reviews</text>

    {/* ── Services row ── */}
    <rect x="12" y="122" width="316" height="66" fill="#0c0c0f"/>
    <text x="24" y="136" fontSize="7" fontWeight="600" fill="rgba(255,255,255,0.6)" fontFamily="system-ui">Our Services</text>
    {[
      { x: 24, label: "Check-ups", icon: "🦷" },
      { x: 122, label: "Whitening", icon: "✨" },
      { x: 220, label: "Invisalign", icon: "😁" },
    ].map(({ x, label, icon }) => (
      <g key={label}>
        <rect x={x} y="142" width="88" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.7"/>
        <text x={x + 8} y="158" fontSize="9" fontFamily="system-ui">{icon}</text>
        <text x={x + 8} y="170" fontSize="6.5" fontWeight="500" fill="rgba(255,255,255,0.65)" fontFamily="system-ui">{label}</text>
        <text x={x + 8} y="178" fontSize="5.5" fill="rgba(255,255,255,0.28)" fontFamily="system-ui">Learn more →</text>
      </g>
    ))}

    <defs>
      <linearGradient id="heroGrad" x1="12" y1="54" x2="172" y2="122" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563EB"/>
        <stop offset="1" stopColor="#0a0a0d" stopOpacity="0"/>
      </linearGradient>
    </defs>
  </svg>
)

/* ─────────────────────────────────────────
   Visual 2 — Calendly-style Booking UI
   ───────────────────────────────────────── */
const BookingVisual = (
  <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Main booking card */}
    <rect x="12" y="10" width="316" height="178" rx="10" fill="#111114" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>

    {/* Left panel — details */}
    <rect x="12" y="10" width="104" height="178" rx="10" fill="#0d0d10"/>
    <rect x="104" y="10" width="12" height="178" fill="#0d0d10"/>
    {/* Avatar */}
    <circle cx="46" cy="36" r="14" fill="rgba(37,99,235,0.2)"/>
    <circle cx="46" cy="36" r="10" fill="rgba(37,99,235,0.5)"/>
    <text x="40" y="40" fontSize="9" fontWeight="700" fill="white" fontFamily="system-ui">CA</text>
    {/* Name */}
    <text x="22" y="62" fontSize="7.5" fontWeight="600" fill="rgba(255,255,255,0.9)" fontFamily="system-ui">Carl Wilkins</text>
    <text x="22" y="72" fontSize="6" fill="rgba(255,255,255,0.4)" fontFamily="system-ui">Titan Automations</text>
    {/* Call type */}
    <text x="22" y="86" fontSize="8" fontWeight="600" fill="white" fontFamily="system-ui">Discovery Call</text>
    {/* Meta */}
    {[
      { icon: "⏱", text: "20 min" },
      { icon: "📹", text: "Video call" },
      { icon: "🆓", text: "Free" },
    ].map(({ icon, text }, i) => (
      <g key={text}>
        <text x="22" y={100 + i * 12} fontSize="6.5" fontFamily="system-ui">{icon}</text>
        <text x="34" y={100 + i * 12} fontSize="6.5" fill="rgba(255,255,255,0.45)" fontFamily="system-ui">{text}</text>
      </g>
    ))}
    {/* Divider */}
    <line x1="22" y1="140" x2="104" y2="140" stroke="rgba(255,255,255,0.06)" strokeWidth="0.7"/>
    <text x="22" y="154" fontSize="6" fill="rgba(255,255,255,0.25)" fontFamily="system-ui">Titan Automations</text>
    <text x="22" y="163" fontSize="5.5" fill="rgba(255,255,255,0.18)" fontFamily="system-ui">titan-automations.com</text>

    {/* Right panel — calendar */}
    {/* Month header */}
    <text x="128" y="30" fontSize="8.5" fontWeight="600" fill="rgba(255,255,255,0.9)" fontFamily="system-ui">April 2025</text>
    <rect x="290" y="18" width="16" height="16" rx="4" fill="rgba(255,255,255,0.05)"/>
    <text x="295" y="29" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="system-ui">›</text>
    <rect x="270" y="18" width="16" height="16" rx="4" fill="rgba(255,255,255,0.05)"/>
    <text x="274" y="29" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="system-ui">‹</text>

    {/* Day headers */}
    {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d, i) => (
      <text key={d} x={124 + i * 28} y="46" fontSize="6" fill="rgba(255,255,255,0.28)" fontFamily="system-ui" textAnchor="middle">{d}</text>
    ))}

    {/* Calendar grid */}
    {[
      [null,1,2,3,4,5,6],
      [7,8,9,10,11,12,13],
      [14,15,16,17,18,19,20],
      [21,22,23,24,25,26,27],
      [28,29,30,null,null,null,null],
    ].map((week, row) =>
      week.map((day, col) => {
        if (!day) return null
        const cx = 124 + col * 28
        const cy = 60 + row * 22
        const isSelected = day === 17
        const isAvail = [8,9,10,14,15,16,17,21,22,23,24,28,29].includes(day)
        const isPast = day < 10
        return (
          <g key={`${row}-${col}`}>
            {isSelected && <circle cx={cx} cy={cy} r="9" fill="#2563EB"/>}
            {isAvail && !isSelected && !isPast && <circle cx={cx} cy={cy} r="9" fill="rgba(37,99,235,0.12)"/>}
            <text
              x={cx} y={cy + 3}
              fontSize="7.5"
              fontFamily="system-ui"
              fill={isSelected ? "white" : isAvail && !isPast ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.2)"}
              textAnchor="middle"
              fontWeight={isSelected ? "700" : "400"}
            >{day}</text>
          </g>
        )
      })
    )}

    {/* Time slots */}
    <line x1="124" y1="176" x2="320" y2="176" stroke="rgba(255,255,255,0.05)" strokeWidth="0.7"/>
    <text x="124" y="190" fontSize="6" fill="rgba(255,255,255,0.3)" fontFamily="system-ui">Thu, 17 Apr — select a time</text>
    {[
      { t: "10:00am", sel: true },
      { t: "10:30am", sel: false },
      { t: "11:00am", sel: false },
    ].map(({ t, sel }, i) => (
      <g key={t}>
        <rect x={124 + i * 66} y="178" width="58" height="14" rx="7" fill={sel ? "#2563EB" : "rgba(255,255,255,0.05)"} stroke={sel ? "none" : "rgba(255,255,255,0.08)"} strokeWidth="0.7"/>
        <text x={124 + i * 66 + 29} y="188" fontSize="6.5" fill={sel ? "white" : "rgba(255,255,255,0.45)"} fontFamily="system-ui" textAnchor="middle" fontWeight={sel ? "600" : "400"}>{t}</text>
      </g>
    ))}
  </svg>
)

/* ─────────────────────────────────────────
   Visual 3 — AI Chat Widget (live site)
   ───────────────────────────────────────── */
const ChatbotVisual = (
  <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Blurred site behind chat widget */}
    <rect x="0" y="0" width="340" height="200" fill="#08080a"/>
    {/* Faint website header */}
    <rect x="0" y="0" width="340" height="28" fill="#0f0f12"/>
    <rect x="12" y="10" width="40" height="8" rx="2" fill="rgba(255,255,255,0.06)"/>
    <rect x="64" y="11" width="24" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>
    <rect x="94" y="11" width="24" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>
    <rect x="124" y="11" width="24" height="6" rx="2" fill="rgba(255,255,255,0.04)"/>
    <rect x="288" y="9" width="40" height="10" rx="5" fill="rgba(37,99,235,0.2)"/>
    {/* Faint page content */}
    <rect x="20" y="40" width="140" height="10" rx="3" fill="rgba(255,255,255,0.04)"/>
    <rect x="20" y="56" width="200" height="6" rx="2" fill="rgba(255,255,255,0.03)"/>
    <rect x="20" y="66" width="160" height="6" rx="2" fill="rgba(255,255,255,0.025)"/>
    <rect x="20" y="80" width="80" height="14" rx="7" fill="rgba(37,99,235,0.08)"/>

    {/* ── Chat Widget ── */}
    <rect x="148" y="12" width="180" height="182" rx="14" fill="#131317" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>

    {/* Chat header */}
    <rect x="148" y="12" width="180" height="42" rx="14" fill="#1a1a22"/>
    <rect x="148" y="38" width="180" height="16" fill="#1a1a22"/>
    {/* AI avatar */}
    <circle cx="172" cy="33" r="12" fill="rgba(37,99,235,0.25)"/>
    <circle cx="172" cy="33" r="8" fill="#2563EB"/>
    {/* Bot icon */}
    <rect x="167" y="29" width="10" height="8" rx="2" fill="rgba(255,255,255,0.6)" fillOpacity="0.9"/>
    <circle cx="169.5" cy="33" r="1" fill="#2563EB"/>
    <circle cx="174.5" cy="33" r="1" fill="#2563EB"/>
    {/* Online indicator */}
    <circle cx="181" cy="24" r="3.5" fill="#22c55e"/>
    <circle cx="181" cy="24" r="5.5" fill="#22c55e" fillOpacity="0.2"/>
    {/* Header text */}
    <text x="190" y="30" fontSize="7.5" fontWeight="600" fill="white" fontFamily="system-ui">Titan Assistant</text>
    <text x="190" y="40" fontSize="6" fill="#22c55e" fontFamily="system-ui">● Online — replies instantly</text>

    {/* Message 1 — bot greeting */}
    <rect x="156" y="60" width="130" height="26" rx="10" rx_tl="3" fill="#1f1f28" stroke="rgba(255,255,255,0.06)" strokeWidth="0.7"/>
    <text x="164" y="71" fontSize="6.5" fill="rgba(255,255,255,0.8)" fontFamily="system-ui">Hi! 👋 I&apos;m the Titan AI.</text>
    <text x="164" y="81" fontSize="6.5" fill="rgba(255,255,255,0.8)" fontFamily="system-ui">How can I help you today?</text>
    <text x="276" y="89" fontSize="5.5" fill="rgba(255,255,255,0.2)" fontFamily="system-ui">09:41</text>

    {/* Message 2 — user */}
    <rect x="198" y="94" width="120" height="18" rx="10" fill="#2563EB"/>
    <text x="208" y="106" fontSize="6.5" fill="white" fontFamily="system-ui">I&apos;d like to book a call</text>
    <text x="296" y="114" fontSize="5.5" fill="rgba(255,255,255,0.4)" fontFamily="system-ui">✓✓</text>

    {/* Message 3 — bot with time options */}
    <rect x="156" y="118" width="144" height="42" rx="10" fill="#1f1f28" stroke="rgba(255,255,255,0.06)" strokeWidth="0.7"/>
    <text x="164" y="129" fontSize="6.5" fill="rgba(255,255,255,0.8)" fontFamily="system-ui">Great! Pick a time that works:</text>
    {/* Time chip buttons */}
    <rect x="162" y="134" width="40" height="12" rx="6" fill="rgba(37,99,235,0.25)" stroke="rgba(37,99,235,0.4)" strokeWidth="0.7"/>
    <text x="182" y="143" fontSize="6" fill="#60a5fa" fontFamily="system-ui" textAnchor="middle">Thu 10am</text>
    <rect x="208" y="134" width="40" height="12" rx="6" fill="rgba(37,99,235,0.25)" stroke="rgba(37,99,235,0.4)" strokeWidth="0.7"/>
    <text x="228" y="143" fontSize="6" fill="#60a5fa" fontFamily="system-ui" textAnchor="middle">Fri 2pm</text>
    <rect x="254" y="134" width="40" height="12" rx="6" fill="#2563EB"/>
    <text x="274" y="143" fontSize="6" fontWeight="600" fill="white" fontFamily="system-ui" textAnchor="middle">See all →</text>
    <text x="276" y="162" fontSize="5.5" fill="rgba(255,255,255,0.2)" fontFamily="system-ui">09:42</text>

    {/* Typing indicator */}
    <rect x="156" y="166" width="46" height="18" rx="10" fill="#1f1f28" stroke="rgba(255,255,255,0.06)" strokeWidth="0.7"/>
    <circle cx="168" cy="175" r="2.5" fill="rgba(255,255,255,0.35)"/>
    <circle cx="176" cy="175" r="2.5" fill="rgba(255,255,255,0.22)"/>
    <circle cx="184" cy="175" r="2.5" fill="rgba(255,255,255,0.12)"/>

    {/* Input bar */}
    <rect x="156" y="186" width="164" height="20" rx="10" fill="#0f0f14" stroke="rgba(255,255,255,0.08)" strokeWidth="0.7"/>
    <text x="166" y="199" fontSize="6.5" fill="rgba(255,255,255,0.2)" fontFamily="system-ui">Type a message...</text>
    <circle cx="308" cy="196" r="8" fill="#2563EB"/>
    <path d="M305 196l3.5-2.5v5L305 196z" fill="white"/>
  </svg>
)

export function ServicesSection() {
  return (
    <section id="services" className="bg-light dark:bg-dark py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 md:mb-16 fade-up-section">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3 md:mb-4">
            What we build
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text-light dark:text-white tracking-[-0.03em] text-balance">
            Three systems. One connected business.
          </h2>
        </div>

        {/* 3-col grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 fade-up-section">

          <ServiceCard
            visual={WebsiteVisual}
            label="Web Design"
            title="AI-Powered Website"
            bullets={[
              "Sub-1s load time, mobile-first, built to convert",
              "Live chat & booking embedded on launch day",
            ]}
            outcome="Result: turns visitors into booked appointments 24/7."
          />

          <ServiceCard
            visual={BookingVisual}
            label="Booking & CRM"
            title="Booking System & Pipeline"
            bullets={[
              "Online booking with deposits, reminders & Google Calendar sync",
              "Automated follow-up sequences from lead to close",
            ]}
            outcome="Result: no missed bookings, no chased leads."
          />

          <ServiceCard
            visual={ChatbotVisual}
            label="AI Agents"
            title="AI Chatbots & Automation"
            bullets={[
              "Chatbot qualifies leads and books into your calendar, 24/7",
              "Auto review requests, outreach & re-engagement flows",
            ]}
            outcome="Result: leads handled and reviews collected on autopilot."
          />

        </div>
      </div>
    </section>
  )
}
