# Titan Automations — Full Website Revamp Implementation Plan

## Audit Summary

### Current stack (confirmed from package.json + files)
| Package | Status |
|---|---|
| Next.js 16.2.0 (App Router) | ✅ Installed |
| TypeScript 5.7.3 | ✅ Installed |
| Tailwind CSS v4 | ✅ Installed |
| Lucide React 0.564.0 | ✅ Installed |
| Radix UI (full suite) | ✅ Installed |
| react-hook-form + zod | ✅ Installed |
| Recharts | ✅ Installed — will use for ROI estimator |
| Resend | ✅ Installed — will keep for email notifications |
| Framer Motion | ❌ NOT installed — required |
| Supabase | ❌ NOT installed — required |

### Required install before any code
```bash
npm install framer-motion @supabase/supabase-js
```

### Current font stack (keeping — these are premium)
- `Bricolage Grotesque` → display headings
- `DM Sans` → body text
- `Audiowide` → logo wordmark only

### Current positioning problems (to fix)
- Hero copy is trades-only ("For UK Trade Businesses")
- Entire site skews to plumbers/roofers/landscapers
- Light/dark theme toggle adds complexity and dilutes the dark-luxe aesthetic
- "Example client system" dashboard card felt artificial (already removed)
- Accent colour is cobalt blue `#2563EB` — revamping to electric blue `#009DFF` / `#006CFF`
- Background is flat `#0A0A0A` black — adding depth with layered surfaces

### What already exists and is salvageable
- AutomationFlow component (architecture is solid, needs full visual redesign)
- BeforeAfterSection (good concept, needs copy + visual uplift)
- FAQSection (good radix accordion, needs copy rewrite)
- PricingSection (structure is fine, needs copy/visual pass)
- FloatingNav (solid, needs link updates + rebrand)
- Footer (structure fine, needs rebrand)
- ContactSection (has Resend wired up — keep and extend with Supabase)
- `app/actions/contact.ts` (Resend server action exists)

### What is being replaced entirely
- HeroSection — new positioning, new visual
- ServicesSection → AutomationSystems (new modules, new visuals)
- IndustriesSection → NicheUseCases (broader, not trades-only)
- HowItWorks → Process (commercial rewrite)
- ResultsSection → Proof section (careful with unverified claims)
- TestimonialsSection → remove fake testimonials, replace with real proof signals
- MarqueeStrip → keep concept, update content

---

## New Target Architecture

### Directory structure after revamp
```
app/
  layout.tsx              ← update metadata, remove theme toggle, force dark
  page.tsx                ← update section order
  globals.css             ← replace colour system with dark-luxe tokens
  actions/
    contact.ts            ← existing (keep)
    audit-request.ts      ← NEW: Supabase lead capture

components/
  site/
    Header.tsx            ← replaces floating-nav.tsx (new nav links)
    Footer.tsx            ← replaces footer.tsx (rebrand)

  sections/
    Hero.tsx              ← full replace
    ProblemComparison.tsx ← replaces before-after-section.tsx
    AutomationSystems.tsx ← replaces services-section.tsx
    NicheUseCases.tsx     ← replaces industries-section.tsx
    WorkflowVisual.tsx    ← replaces automation-flow.tsx
    SavingsEstimator.tsx  ← NEW interactive ROI tool
    Process.tsx           ← replaces how-it-works.tsx
    Pricing.tsx           ← replaces pricing-section.tsx
    FAQ.tsx               ← replaces faq-section.tsx
    FinalCTA.tsx          ← replaces final-cta.tsx
    ProofStrip.tsx        ← replaces results-section.tsx + testimonials

  ui/
    Button.tsx            ← shared CTA button variants
    GlowCard.tsx          ← accent-bordered dark card primitive
    SectionHeader.tsx     ← shared eyebrow + heading pattern

lib/
  supabase/
    client.ts             ← NEW: browser client
    server.ts             ← NEW: server client
  constants/
    site.ts               ← NEW: CALENDLY_URL, email, company details
    services.ts           ← NEW: automation system definitions
    faqs.ts               ← NEW: FAQ data
    pricing.ts            ← NEW: pricing tier definitions
```

---

## Design System Changes

### Colour tokens (replacing current palette)
```css
/* globals.css — new dark-luxe tokens */
--bg-base:       #05070A    /* page background — near-black with blue undertone */
--bg-surface:    #0B1017    /* card / panel surface */
--bg-elevated:   #101722    /* raised panels, nav bg */
--border:        rgba(255,255,255,0.10)
--border-subtle: rgba(255,255,255,0.06)
--text-primary:  #F5F7FA    /* off-white, not pure white */
--text-muted:    #9CA8B8    /* cool grey */
--text-faint:    #566474    /* very muted labels */
--blue-electric: #009DFF    /* primary accent — CTAs, active states, data highlights */
--blue-strong:   #006CFF    /* secondary accent — flow lines, hover deepening */
--blue-glow:     rgba(0,157,255,0.15)  /* soft radial glow behind key elements */
--success:       #24D18F
--warning:       #F5A524
--error:         #FF4D4D
```

### Tailwind config updates needed
- Replace `accent: "#2563EB"` → `accent: "#009DFF"`
- Replace `dark: "#0A0A0A"` → `bg-base: "#05070A"`, `bg-surface: "#0B1017"`, `bg-elevated: "#101722"`
- Remove light theme colours (site is dark-only after revamp)
- Add `blue-strong: "#006CFF"`, `blue-glow` as CSS variable

### Typography decisions
- Keep Bricolage Grotesque for all display headings (it's premium and distinctive)
- Keep DM Sans for body
- Remove Audiowide from global load — only load where TitanLogo renders
- H1: 72–96px, tracking -0.04em, semibold
- H2: 40–56px, tracking -0.03em, semibold
- Body: 16–18px, DM Sans, line-height 1.6

### Theme toggle
- Remove. Site is dark-only.
- Remove ThemeProvider dependency or lock it to `defaultTheme="dark"` with `forcedTheme="dark"`.
- Simplifies nav, removes maintenance burden, reinforces dark-luxe identity.

---

## Section-by-Section Build Plan

### Phase 0 — Infrastructure (do first, nothing else works without this)

**0a. Install packages**
```bash
npm install framer-motion @supabase/supabase-js
```

**0b. Environment variables to add to .env.local**
```bash
NEXT_PUBLIC_SUPABASE_URL=<your-project-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
```
Table schema for Supabase (run in SQL editor):
```sql
create table audit_requests (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  business_name text,
  email text not null,
  phone text,
  website text,
  industry text,
  biggest_bottleneck text,
  monthly_leads_estimate text,
  admin_hours_per_week text,
  message text,
  created_at timestamptz default now()
);
```

**0c. lib/supabase/client.ts + server.ts**
- Browser client using `createBrowserClient`
- Server client using `createServerClient` with cookie handling

**0d. globals.css — full colour system replacement**
- Replace all current Tailwind v4 CSS variables with dark-luxe tokens above
- Add custom animations: `flow-line`, `glow-pulse`, `fade-up`
- Remove all light-mode `:root` colour variables (dark only)

**0e. tailwind.config.ts — update colour map**
- Map new token names to CSS vars

---

### Phase 1 — Layout shell

**1a. app/layout.tsx**
Changes:
- Update `<html>` to `className="dark"` permanently, remove `suppressHydrationWarning` if theme toggle removed
- Update metadata: new title, description, keywords targeting UK service businesses broadly
- Remove ThemeProvider or lock to dark
- Keep Calendly scripts
- Keep Vercel Analytics
- Add `framer-motion` `LazyMotion` wrapper at layout level for bundle splitting

**1b. components/site/Header.tsx** (replaces floating-nav.tsx)
- Slim dark pill nav: `bg-elevated`, `border-subtle`, `backdrop-blur`
- Logo left (TitanLogo component — keep)
- Nav links: Problems | Systems | Results | Process | Pricing | FAQ
- CTA button: "Book Free Audit" → opens Calendly
- Mobile: full-screen overlay, large touch targets (min 44px), clean animation with Framer Motion
- Server-compatible outer shell, `"use client"` only on mobile menu toggle

**1c. components/site/Footer.tsx** (replaces footer.tsx)
- Dark surface `bg-surface`
- Logo + tagline left
- Links: Problems, Systems, Process, Pricing, FAQ + Privacy
- Company details: Kent, UK | email
- Copyright + "Built by Titan Automations"
- No social links unless we have active accounts

---

### Phase 2 — Hero

**components/sections/Hero.tsx** — full replacement

Layout: two-column on desktop (text left, automation preview right), single column stacked on mobile

**Left column:**
- Eyebrow: "AI Automation Agency · UK"
- H1: "Stop running your business on manual work."
  - Sub-option: "Every lead. Every follow-up. Every booking. Handled."
- Subcopy: 2–3 sentences. What we build. Who it's for. What it replaces.
- Primary CTA: "Book Free Automation Audit" → Calendly
- Secondary CTA: "See What We Automate" → scrolls to #systems
- Trust strip: UK-based · Built in 14 days · Fixed scope · Client-owned · No lock-in

**Right column — Automation preview card:**
- Dark `bg-elevated` card with `border-subtle`
- Animated flow: Lead In → AI Qualifies → CRM Updates → Follow-up Sent → Booking Confirmed → Review Triggered
- Electric blue flow lines using Framer Motion path animation
- Each stage shows a small label and status
- Subtle pulsing accent dot on the active stage
- NOT a fake dashboard with fake numbers — it's a system flow diagram

**Animations:**
- Text: staggered fade-up on mount (Framer Motion)
- Flow card: entrance on mount, then loop the flow line animation
- Respect `useReducedMotion`

**Server component:** NO. This needs Framer Motion and Calendly click handler. Mark `"use client"`.

---

### Phase 3 — Problem Comparison

**components/sections/ProblemComparison.tsx** (replaces before-after-section.tsx)

Headline: "Manual work is not harmless. It is a revenue leak."
Subheading: "Every day without automation is a day spent doing work a system should handle."

**Layout:** Two dark panels side by side, full-bleed on desktop

Left panel — "Without automation":
- Background: very subtle red tint (`rgba(255,77,77,0.04)`)
- Left border: `--error` red
- Label: "How it runs today"
- Items (8–9 pain points with numbered index):
  1. Missed calls go unanswered for hours
  2. Leads sit in an inbox with no follow-up
  3. Quotes sent once, never chased
  4. Booking done over WhatsApp or back-and-forth calls
  5. Reviews only happen when someone remembers to ask
  6. Staff answering the same questions every day
  7. CRM is a spreadsheet, or not used at all
  8. Tools don't connect — data entered twice
  9. Owner is the only one who knows how anything works

Right panel — "With Titan systems":
- Background: subtle blue tint (`rgba(0,157,255,0.04)`)
- Left border: `--blue-electric`
- Label: "How it runs with Titan"
- Items: direct answers to each pain point above

**Component type:** Server component (static content, no interactivity)

---

### Phase 4 — Automation Systems

**components/sections/AutomationSystems.tsx** (replaces services-section.tsx)

Headline: "Systems we build around your business."
Subheading: "Not apps. Not tools you have to learn. Connected systems that do the work."

**Layout:** Responsive grid — 3 cols desktop, 2 tablet, 1 mobile
- NOT generic SaaS feature cards
- Each module answers: what it automates, pain removed, result the owner gets

**9 system modules:**
1. AI-Powered Website — converts visitors into booked enquiries, not just traffic
2. AI Chatbot & Qualification — answers, qualifies, routes. Works at 2am.
3. Booking & Calendar System — online booking with reminders, no phone tag
4. CRM Pipeline Automation — every opportunity tracked, staged, followed up
5. Lead Follow-Up Sequences — automated multi-touch follow-up until they reply
6. Review Request System — triggered after every job, no manual chasing
7. Lead Enrichment & Outreach — find, enrich, and reach out to target prospects
8. Internal Admin Automation — recurring tasks, reporting, data entry removed
9. Tool Integration Layer — connect the apps you already use, eliminate duplicate work

**Card design:**
- `bg-surface` base, `border-subtle`
- Top: small icon (Lucide) + accent label
- H3: system name
- 3–4 bullet points (what it does)
- Bottom strip: outcome statement in accent colour
- Hover: border lifts to `blue-electric`, subtle `box-shadow` glow
- NO fake screenshots or SVG mockups — clean text-first cards

**Component type:** Server component

---

### Phase 5 — Niche Use Cases

**components/sections/NicheUseCases.tsx** (replaces industries-section.tsx)

Headline: "Built for service businesses where admin delays cost money."
Subheading: "We don't work with everyone. We work best where manual processes create a measurable revenue leak."

**Layout:** Tabbed or accordion — 5 sectors, each with specific bottlenecks and automation examples

**Sectors:**
1. Trades & Construction — missed quote requests, job follow-ups, review chasing, no-show recovery
2. Clinics & Healthcare — patient bookings, appointment reminders, recall campaigns, review automation
3. Property — enquiry handling, viewing coordination, applicant follow-up, document workflows
4. Professional Services — client onboarding, proposal follow-up, contract reminders, lead nurture
5. Local Services — missed call recovery, repeat booking, referral capture, online presence

**For each sector show:**
- The specific bottleneck (1 line)
- 3 automation examples for that sector
- Typical outcome (no fake numbers — "leads stopped falling through the cracks")

**Component type:** `"use client"` (tab/accordion interactivity)

---

### Phase 6 — Workflow Visual

**components/sections/WorkflowVisual.tsx** (replaces automation-flow.tsx)

Headline: "One trigger. The whole pipeline fires."
Subheading: "The moment a lead touches your business, the system takes over. No delays, no human required."

**Visual: Animated flow diagram**
Stages (left to right on desktop, top to bottom on mobile):
1. Trigger — form, call, chatbot, referral
2. AI Qualification — intent scored, data enriched
3. CRM Update — record created, stage set
4. Follow-up Sequence — personalised, timed
5. Booking Confirmed — calendar slot filled
6. Review / Report Triggered — post-job automation

**Animation approach (Framer Motion):**
- Flow lines between stages: `pathLength` animation, electric blue `#009DFF`
- Lines activate sequentially on scroll entry (not on page load — saves performance)
- Each node pulses briefly as the line reaches it
- After full sequence completes, subtle loop restart
- Mobile: vertical layout, same animations

**Below the flow:** 3 scenario cards (like current but redesigned)
- "New enquiry lands" → what fires
- "Client no-shows" → what fires
- "Job completed" → what fires

**Component type:** `"use client"` (Framer Motion)

---

### Phase 7 — Savings Estimator

**components/sections/SavingsEstimator.tsx** — NEW

Headline: "Find out what manual work is costing you."
Subheading: "Adjust the inputs. See the real numbers."

**Inputs (sliders + number inputs using Radix Slider — already installed):**
1. Enquiries per week (5–200)
2. Average job / client value in £ (50–5000)
3. Hours spent on admin/follow-up per week (1–40)
4. Missed or forgotten leads per week (0–20)
5. Hourly cost of your time or staff (£10–£150)

**Calculated outputs (Framer Motion animated number transitions):**
- Monthly admin cost: `admin_hours × 4.33 × hourly_rate`
- Monthly lost revenue from missed leads: `missed_leads × 4.33 × job_value × 0.3` (30% close rate)
- Hours recoverable per month: `admin_hours × 4.33 × 0.7` (70% automatable)
- Annual revenue at risk: `(missed_leads × 52 × job_value × 0.3)`

**Below outputs:** CTA block
- Headline: "Ready to see what to automate first?"
- Button: "Book Free Automation Audit" → Calendly

**Design:**
- Two-column: inputs left, results right
- Results panel: `bg-elevated`, individual metric cards
- Highlighted numbers in `blue-electric`
- Disclaimer: "Estimates based on typical automation outcomes. Your audit will show the real numbers."
- Use `recharts` (already installed) for a simple bar showing before/after hours if desired

**Component type:** `"use client"` (all interactivity)

---

### Phase 8 — Proof Strip

**components/sections/ProofStrip.tsx** (replaces results-section.tsx + testimonials-section.tsx)

Strategy: No fake testimonials. No made-up client metrics. Use honest proof signals.

**Layout:** Dark strip with 4–5 honest metric cards

**Real metrics to use:**
- "Built and launched in 14 days" — our guarantee
- "Fixed-scope pricing — no surprise invoices"
- "100% client-owned — no platform lock-in"
- "Systems built on tools you already use"
- "Supabase / n8n / Make / Voiceflow / GHL"

**Beneath metrics:** honest note
"Exact results depend on your current process. The audit shows where the leak is."

**If real results become available:**
- Add a client results section with business type (not name, unless agreed)
- Use "example system metrics" until verified results exist

**Component type:** Server component

---

### Phase 9 — Process

**components/sections/Process.tsx** (replaces how-it-works.tsx)

Headline: "Built, tested, and live without dragging you into technical chaos."
Subheading: "We handle the build. You handle the business."

**Steps:**
1. Automation Audit — we map where leads, time, and revenue are leaking
2. System Design — we scope the fix. Fixed price, clear deliverables
3. Build & Connect — we build the automations and connect your tools
4. Test Real Scenarios — we test against your actual enquiries and edge cases
5. Launch & Handover — you get trained, documented, and independent
6. Monthly Optimisation (optional) — we tune and improve on retainer

**Design:** Vertical numbered steps on mobile, horizontal timeline on desktop
**Note:** Do not mention Make / n8n / Voiceflow / GHL unless asked. Owner doesn't care about the tools.

**Component type:** Server component

---

### Phase 10 — Pricing

**components/sections/Pricing.tsx** (replaces pricing-section.tsx)

Headline: "Clear pricing. No retainer traps."

**3 tiers:**

| Tier | Name | Price | Description |
|---|---|---|---|
| 1 | Automation Audit | Free | 20-minute call. We map your biggest bottleneck. No obligation. |
| 2 | Project Build | From £1,200 | Fixed scope, fixed price. One system built and live in 14 days. |
| 3 | Monthly Optimisation | From £150/mo | Ongoing improvements, monitoring, and new automation additions. |

**Bespoke note:** "Complex multi-system builds are scoped after audit."

**Design:**
- 3 cards: `bg-surface` with `border-subtle`
- Middle card (Project Build) is visually elevated — `bg-elevated`, `border blue-electric`
- Each card: name, price, 3–4 what's-included bullets, CTA button
- Audit tier CTA: "Book Free Audit" → Calendly
- Build + Monthly tier CTA: "Book Free Audit" → Calendly (audit leads to quote)
- No "popular" badge — it looks cheap

**Component type:** Server component (CTAs use Calendly via onClick — need client wrapper for buttons)

---

### Phase 11 — FAQ

**components/sections/FAQ.tsx** (replaces faq-section.tsx)

Use existing Radix accordion (already installed). New questions:

1. What exactly do you automate?
2. Do I need to change my current tools?
3. Can this work for my industry?
4. How long does it take to build?
5. Do I own everything you build?
6. What if I already have a website?
7. Can you automate our current internal process?
8. Is AI reliable enough for customer-facing enquiries?
9. What does it cost?
10. What happens on the audit call?
11. Do you offer ongoing support?

**Component type:** `"use client"` (accordion state)

---

### Phase 12 — Final CTA

**components/sections/FinalCTA.tsx** (replaces final-cta.tsx)

Headline: "Find the manual work costing you money."
Subcopy: "In 20 minutes, we'll map where leads, time, and revenue are leaking — and show you what to automate first."

**Design:**
- Full-width dark section, `bg-elevated`
- Subtle radial blue glow behind headline
- Primary CTA: "Book Free Automation Audit" → Calendly
- Below button: "No commitment. No hard sell. Just the audit."

**Component type:** `"use client"` (Calendly button)

---

### Phase 13 — Lead Capture / Audit Request Form

**New component: AuditRequestForm.tsx**

This is the form that collects qualified leads. Should appear:
- On a `/audit` route or as a modal triggered from CTAs
- Or embedded in FinalCTA as an alternative to Calendly

**Fields:**
- Name (required)
- Business name
- Email (required)
- Phone
- Website
- Industry (select: Trades, Clinic/Healthcare, Property, Professional Services, Local Services, Other)
- Biggest bottleneck (textarea)
- Enquiries per week (approximate)
- Hours on admin per week (approximate)

**Submission flow:**
1. Client-side validation (react-hook-form + zod — already installed)
2. Server action `app/actions/audit-request.ts`
3. Supabase insert to `audit_requests` table
4. Optionally: Resend email notification to carl@titan-automations.com
5. Success state: "We'll be in touch within one working day."
6. Error state: clear message, do not lose form data

**Component type:** `"use client"` (form interactivity)

---

### Phase 14 — Marquee Strip (update only)

**components/marquee-strip.tsx** — light update

Keep concept, update content to be broader (not trades-only).

Items: "Lead Capture" · "AI Qualification" · "CRM Automation" · "Booking Systems" · "Follow-up Sequences" · "Review Automation" · "Tool Integration" · "Admin Workflows" · "Reporting Dashboards" · "Client Onboarding"

Update colours to dark-luxe tokens.

---

## app/page.tsx — Final Section Order

```tsx
<Header />
<Hero />
<MarqueeStrip />
<ProblemComparison />
<AutomationSystems />
<NicheUseCases />
<WorkflowVisual />
<SavingsEstimator />
<ProofStrip />
<Process />
<Pricing />
<FAQ />
<FinalCTA />
<Footer />
```

Remove:
- `<ScrollAnimations />` — replaced by Framer Motion
- `<StickyMobileCTA />` — assess if still needed after mobile nav improvement
- `<ContactSection />` — merge into FinalCTA or keep as separate `/contact` page

---

## SEO Updates

**app/layout.tsx metadata:**
```
title: "Titan Automations | AI Automation Agency for UK Service Businesses"
description: "Titan Automations builds AI-powered systems that capture leads, automate follow-ups, manage bookings, connect CRMs, and remove repetitive admin for UK service businesses."
keywords: ["AI automation agency UK", "business automation UK", "AI chatbot for business", "automate business admin", "lead follow-up automation", "CRM automation service businesses", "AI automation agency Kent"]
```

**JSON-LD:**
- Update `areaServed` to include "United Kingdom" broadly (not just Kent)
- Add more FAQ entries to the FAQPage schema

---

## Conversion Rules Checklist (acceptance criteria)

- [ ] Hero communicates commercial value within 10 seconds
- [ ] Primary CTA ("Book Free Automation Audit") is visible above the fold
- [ ] Site does not feel trades-only
- [ ] Problem comparison makes the pain tangible
- [ ] Automation systems section is specific, not vague
- [ ] ROI estimator is functional and outputs real numbers
- [ ] Proof section makes no false claims
- [ ] Process section removes "technical chaos" objection
- [ ] Pricing is clear and premium, not cheap-looking
- [ ] FAQ answers the 7 buying objections
- [ ] Final CTA is urgent without being pushy
- [ ] Audit form captures qualified leads into Supabase
- [ ] Mobile is excellent, not a crushed desktop
- [ ] No AI-purple fog, no fake neon glow
- [ ] Electric blue used with discipline (CTAs, active states, flow lines only)
- [ ] Framer Motion respects `prefers-reduced-motion`
- [ ] Build passes `npm run build` with zero errors
- [ ] ESLint passes clean

---

## Implementation Phases / Order

**Phase 0** — Install packages + Supabase setup + globals.css + tailwind.config
**Phase 1** — Layout shell (layout.tsx + Header + Footer)
**Phase 2** — Hero (biggest conversion lever — do this second)
**Phase 3** — ProblemComparison
**Phase 4** — AutomationSystems
**Phase 5** — NicheUseCases
**Phase 6** — WorkflowVisual
**Phase 7** — SavingsEstimator
**Phase 8** — ProofStrip
**Phase 9** — Process
**Phase 10** — Pricing
**Phase 11** — FAQ
**Phase 12** — FinalCTA
**Phase 13** — AuditRequestForm + Supabase server action
**Phase 14** — MarqueeStrip update
**Phase 15** — app/page.tsx wiring + final section order
**Phase 16** — SEO metadata update
**Phase 17** — `npm run build` + `npm run lint` — fix all errors

---

## Open Questions (need your input before starting)

1. **Supabase:** Do you have a Supabase project set up, or do we need to create one? If you have one, share the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

2. **Domain:** Is `titan-automations.com` live? The metadata and JSON-LD reference it.

3. **Theme toggle:** Confirm you want dark-only. This removes the light mode entirely and the toggle from the nav. Clean and simple.

4. **Testimonials:** Do you have any real client results or quotes we can use? Even one real case study is better than generic proof signals.

5. **Logo:** The current `logo.svg` works. Do you want the `titan-logo-new.png` used anywhere, or is the SVG preferred?

6. **Audit form vs Calendly only:** Should "Book Free Audit" always go straight to Calendly, or should it open the Supabase audit form first (which then prompts Calendly booking)? Two-step collects more data but adds friction.

7. **Contact page:** Should the existing `/contact` route be kept, or merged into the main page FinalCTA section?
