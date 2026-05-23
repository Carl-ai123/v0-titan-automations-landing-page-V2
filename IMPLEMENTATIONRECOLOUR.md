# IMPLEMENTATIONRECOLOUR — Trade Rebrand & Copy Overhaul

**Date:** 10 May 2026  
**Scope:** Logo replacement, trade-focused copy rewrite, industries overhaul, new "Recent Demos" section

---

## 1. Logo — New SVG Component

**File to create:** `components/titan-logo.tsx`

Extract from `public/fonts/titan-logo.svg.webp`: spartan helmet inside shield/crest + "TITAN" / "AUTOMATIONS" wordmark only. Recreate as inline SVG React component — no image files, no external dependencies.

Colour rules:
- Shield/crest fill: `#2563EB` (brand accent blue)
- Spartan helmet: white `rgba(255,255,255,0.9)` on blue shield
- "TITAN": white `#F5F5F5`, Audiowide font, bold, letter-spaced
- "AUTOMATIONS": muted `#888888`, Audiowide, lighter
- Dashes either side of "AUTOMATIONS" (matching original): `#888888`

Variants:
- `<TitanLogo size="nav" />` — 36px tall (nav pill)
- `<TitanLogo size="footer" />` — 40px tall (footer)
- `<TitanLogo size="favicon" />` — crest mark only (used for og/favicon reference)

**Files to update:**
- `components/floating-nav.tsx` — replace `<img src="/logo-mark.png" />` + Audiowide span pair with `<TitanLogo size="nav" />`
- `components/footer.tsx` — replace inline SVG + Audiowide span pair with `<TitanLogo size="footer" />`
- `app/layout.tsx` — icons metadata stays pointing to `/logo-mark.png` (existing PNG fallback, leave as-is)

---

## 2. Hero Section — Trade Copy

**File:** `components/hero-section.tsx`

| Element | Before | After |
|---------|--------|-------|
| Eyebrow | "AI Automation Agency · Kent & South East" | "For UK Trade Businesses" |
| H1 | "Your business shouldn't run on you." | "Win more jobs. Miss fewer calls." |
| Subhead | generic AI systems copy | "We build a website that gets you found on Google, texts back missed calls while you're on the tools, and collects your reviews — all on its own." |
| Primary CTA | "Book a Free Call" | "Book a free call →" |
| Secondary CTA | "How It Works" | keep as-is |
| Trust strip | 14-Day Delivery · Fixed-Price · 100% Owned · Kent Based | keep as-is |

**Copy notes:**
- H1 is two short punchy lines. A roofer reads it in 2 seconds and knows exactly what it means.
- Subhead is one sentence. One idea. Plain words only — no jargon.
- CTA is direct and honest. "Free" does the work. No arrow theatrics needed but keep if preferred.

Dashboard card feed events — plain English, no jargon:
- "New roofing enquiry — reply sent"
- "Missed call — customer texted back in 30 seconds"
- "Job done — Google review request sent"
- "WhatsApp message replied to"
- "Quote follow-up sent — customer replied"
- "New enquiry from your website"
- "5-star Google review received"
- "Plumbing job booked online"
- "Landscaping enquiry — booking link sent"
- "Missed call recovered — appointment confirmed"

---

## 3. Services Section — 3 Trade Offers

**File:** `components/services-section.tsx`

Section header:
- Eyebrow: "What we build"
- H2: "Three things that win you more work."
- Sub: "Most tradesmen lose jobs because they can't be found online, miss calls when they're busy, and never get round to asking for reviews. We sort all three."

**Copy notes:**
- H2 is a direct benefit statement. Short. Clear.
- Sub uses "most tradesmen" — it's a mirror. They read it and nod.
- "Sort all three" — plain British English. Not "fix" or "solve" or "optimise."

Replace 3 cards:

### Card 1 — Your Trade Website
- Label: "Websites"
- Title: "Your Trade Website"
- Bullets:
  - Opens fast on a phone — that's how customers find you
  - One tap to call you, from any page
  - Shows your real work, not stock photos
  - Comes up on Google for your local area
- Outcome: "Customers find you. They call you. You win the job."

**Copy notes:** Removed "AI-Powered" from title — a roofer doesn't care what powers it. "AI-Powered" is for the builder, not the buyer. Bullets are all plain outcomes, no specs.

### Card 2 — Miss a Call? We Reply For You.
- Label: "Missed Calls"
- Title: "Miss a Call? We Reply For You."
- Bullets:
  - Texts the customer back in 30 seconds
  - Sends your quote form or booking link straight away
  - WhatsApp, SMS, and email — all in one place
- Outcome: "You're on the roof. The next job's already sorted."

**Copy notes:** Title is a question — it speaks directly to the pain point. "You're on the roof" is a concrete image that any tradesman instantly understands. Removed "lead capture" — that's our word, not theirs.

### Card 3 — More Google Reviews
- Label: "Reviews"
- Title: "More Google Reviews"
- Bullets:
  - After every job, we ask your customer for a review
  - No effort from you — it just happens
  - Your best reviews show up on your website
- Outcome: "More reviews. More trust. More calls."
- Visual: keep `ChatbotVisual`

**Copy notes:** Title is exactly what they want — not a "system", just the result. "It just happens" is the key benefit, not the mechanism. Outcome is three short punchy lines — reads like a chant.

---

## 4. Industries Section — Trade Niches Only

**File:** `components/industries-section.tsx`

Remove: Dental & Healthcare, Professional Services, Hospitality & Retail

Replace with 8 trade niches in a `sm:grid-cols-2 lg:grid-cols-4` grid (2 rows of 4):

| Trade | Icon |
|-------|------|
| Roofing | roof/house SVG |
| Building & Construction | hard hat / bricks |
| Electrical | lightning bolt |
| Plumbing | wrench / pipe |
| Landscaping | tree/leaf |
| Scaffolding | grid/framework |
| Decorating | paint roller |
| Fitting & Joinery | saw / wood |

Section header:
- Eyebrow: "Who we work with"
- H2: "We work with UK tradesmen."
- Sub: "If you're on the tools and want more work without more hassle — this is for you."

Each card: icon + trade name + one-line description. Cards link to `#contact` (future niche pages TBD).

**Copy notes:**
- H2 is a plain statement, not a claim. "Built specifically for" sounds like a sales pitch. "We work with" sounds like a person talking.
- Sub is one sentence. One idea. "On the tools" is tradesman language — instantly relatable.
- Removed the £100k–£2M revenue bracket from the sub — it's a useful filter but sounds corporate on a homepage. Save it for paid ads targeting.

---

## 5. New "Recent Demos" Section

**File to create:** `components/recent-demos.tsx`

Position in `app/page.tsx`: above `<Footer />` (after `<ContactSection />`).

Section header:
- Eyebrow: "Our work"
- H2: "Sites we've built for tradesmen."
- Sub: "Have a look. See what yours could look like."

Demo cards (3 initial):
```ts
const demos = [
  {
    business: "Billy Ray's Roofing",
    trade: "Roofing",
    tradeColor: "amber",
    url: "#", // replace with live URL when available
    description: "New website, missed call replies, and Google reviews — all sorted."
  },
  {
    business: "Your trade here",
    trade: "Electrical",
    tradeColor: "blue",
    url: "#",
    description: "Book a call and we'll build yours next."
  },
  {
    business: "Your trade here",
    trade: "Plumbing",
    tradeColor: "green",
    url: "#",
    description: "Book a call and we'll build yours next."
  }
]
```

**Copy notes:**
- Sub is 8 words. That's it. Simple invitation.
- "Coming Soon" sounds like a placeholder. "Your trade here" is an invitation — it puts the reader in the picture.
- Billy Ray's description removed jargon ("mobile-first", "auto-request") — replaced with plain English outcomes.

Card design:
- Dark card surface `bg-card-dark`, border `rgba(255,255,255,0.08)`
- Trade tag pill (amber/blue/green tint)
- Business name `font-display text-white`
- One-line description in muted
- "View live demo →" link in accent blue
- Placeholder visual: SVG mockup of a trade website (reuse/adapt `WebsiteVisual`)

---

## 6. Footer — Copy Updates

**File:** `components/footer.tsx`

- Tagline: "AI automation for businesses that mean it." → "AUTOMATE. ELEVATE. DOMINATE."
- Services links: update to match new 3-card titles
- Bottom bar: "Built with AI. Owned by you." → keep (still true)
- Logo: replace inline SVG T-mark + Audiowide spans with `<TitanLogo size="footer" />`

---

## 7. Marquee Strip — Trade Trust Signals

**File:** `components/marquee-strip.tsx`

Replace items with trade-specific signals (plain English, no jargon):
- "Built for UK tradesmen"
- "Missed a call? We text them back"
- "Google reviews collected for you"
- "Found on Google in your area"
- "Fixed price — no surprises"
- "Ready in 14 days"
- "You own everything"
- "No long contracts"
- "WhatsApp, SMS and email in one place"
- "Free to get started"

**Copy notes:**
- "Auto-reply in 30s" → "We text them back" — same thing, plain words
- "Mobile-first, click-to-call" → removed. Jargon. Tradesman doesn't know what "mobile-first" means and doesn't care.
- "Local SEO included" → "Found on Google in your area" — same thing, their language not ours

---

## 8. Nav Links — Minor Update

**File:** `components/floating-nav.tsx`

Dropdown items — update to reflect trade positioning:

```ts
{ href: "#services", label: "Services", items: [
  "Trade Websites",
  "Lead Capture & Auto-Reply",
  "Review & Reputation",
]}
{ href: "#industries", label: "Trades", items: [
  "Roofing",
  "Building & Construction",
  "Electrical",
  "Plumbing",
  "Landscaping",
  "Decorating",
]}
```

---

## Execution Order

1. Create `components/titan-logo.tsx` (SVG component)
2. Update `components/floating-nav.tsx` (logo swap + nav items)
3. Update `components/footer.tsx` (logo swap + tagline)
4. Update `components/hero-section.tsx` (copy + feed events)
5. Update `components/services-section.tsx` (3 trade cards + header)
6. Update `components/industries-section.tsx` (8 trade niches)
7. Update `components/marquee-strip.tsx` (trade trust signals)
8. Create `components/recent-demos.tsx` (new section)
9. Update `app/page.tsx` (add `<RecentDemos />` before footer)

---

## Palette Lock (do not change)

| Token | Value |
|-------|-------|
| `--dark-bg` | `#0A0A0A` |
| `--light-bg` | `#F8F8F8` |
| `--card-dark` | `#131313` |
| `--card-light` | `#FFFFFF` |
| `--accent` | `#2563EB` |
| `--text-primary-dark` | `#F5F5F5` |
| `--text-muted` | `#888888` |
| `--green` | `#22C55E` |
| `--amber` | `#F59E0B` |

---

## Verification Checklist

- [ ] Nav logo renders correctly in dark + light mode
- [ ] Footer logo renders correctly
- [ ] Hero headline: "Win more jobs. Miss fewer calls."
- [ ] Hero CTA: "Book a free call →"
- [ ] Feed events are trade-specific (no "CRM pipeline" or generic SaaS language)
- [ ] Services: 3 trade cards with correct copy
- [ ] Industries: 8 trade niches, no dental/hospitality
- [ ] Recent Demos section visible above footer
- [ ] Marquee: trade-specific trust signals
- [ ] Footer tagline: "AUTOMATE. ELEVATE. DOMINATE."
- [ ] Mobile test at 390px — hero, services, industries all readable
- [ ] Dark/light toggle — logo works in both modes
