'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Factory,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react'

const defaults = {
  company: 'Apex M&E Contractors',
  trade: 'Commercial Electrical & M&E',
  location: 'Kent & the South East',
}

function safeParam(value: string | null, fallback: string, max = 70) {
  if (!value) return fallback
  const clean = value.replace(/[<>]/g, '').trim().slice(0, max)
  return clean || fallback
}

export function ReusableContractorSiteDemo() {
  const searchParams = useSearchParams()
  const company = safeParam(searchParams.get('company'), defaults.company)
  const trade = safeParam(searchParams.get('trade'), defaults.trade)
  const location = safeParam(searchParams.get('location'), defaults.location)

  const services = [
    { icon: Zap, title: 'Commercial Electrical', text: 'Installations, upgrades and planned electrical works for commercial environments.' },
    { icon: Building2, title: 'M&E Projects', text: 'Coordinated mechanical and electrical packages with clear project communication.' },
    { icon: Factory, title: 'Industrial Works', text: 'Practical electrical solutions for warehouses, production and industrial facilities.' },
    { icon: Wrench, title: 'Maintenance & Upgrades', text: 'Planned works, remedials and upgrades designed around occupied sites and programmes.' },
  ]

  const projectSlots = [
    ['Office fit-out', 'Commercial electrical package', 'A clean case-study slot for project scope, delivery constraints and final result.'],
    ['Industrial unit', 'Power & lighting upgrade', 'A visual project card built to show real photos, scope and client outcome.'],
    ['Education project', 'Refurbishment works', 'A proof-led project section for programme, coordination and completed works.'],
  ]

  return (
    <div className="min-h-screen bg-[#071018] text-white">
      <div className="border-b border-white/10 bg-[#0b1722] px-4 py-2 text-center text-[11px] tracking-wide text-slate-400">
        CONCEPT WEBSITE DEMO BY TITAN AUTOMATIONS · EXAMPLE CONTENT ONLY
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#071018]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 font-bold">A</div>
            <div>
              <div className="font-display text-sm font-semibold tracking-wide sm:text-base">{company}</div>
              <div className="text-[10px] uppercase tracking-[0.17em] text-slate-500">{trade}</div>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#about" className="hover:text-white">Why us</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="hidden rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-400 sm:inline-flex">
            Request a Quote
          </a>
          <Menu className="lg:hidden" size={22} />
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(37,99,235,0.18),transparent_32%)]" />
          <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-32">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-300">
                <MapPin size={14} /> Serving {location}
              </div>
              <h1 className="max-w-4xl font-display text-[clamp(3rem,7vw,6.2rem)] font-semibold leading-[0.95] tracking-[-0.055em]">
                Commercial projects delivered with <span className="text-blue-400">clarity.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                {company} provides {trade.toLowerCase()} services for commercial and industrial projects across {location}. Clear communication, practical delivery and a straightforward route from enquiry to site.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 font-semibold hover:bg-blue-400">
                  Discuss a Project <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 font-medium text-slate-200 hover:border-white/30">
                  View Project Layout
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-400">
                {['Commercial focused', 'Clear enquiry route', 'Mobile-first experience'].map((item) => (
                  <span key={item} className="flex items-center gap-2"><CheckCircle2 size={15} className="text-blue-400" /> {item}</span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#132637] to-[#09131d] p-6 shadow-2xl shadow-blue-950/30">
              <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.18em] text-slate-500">Project enquiry</span>
                  <span className="flex items-center gap-2 text-xs text-emerald-400"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Online</span>
                </div>
                <div className="my-8 space-y-3">
                  {[
                    ['Scope', 'Commercial refurbishment'],
                    ['Location', location],
                    ['Drawings', 'Upload / link'],
                    ['Programme', 'Required start date'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                      <div className="text-[10px] uppercase tracking-wider text-slate-500">{label}</div>
                      <div className="mt-1 text-sm font-medium text-slate-200">{value}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl bg-blue-500 p-5">
                  <div className="flex items-start gap-3">
                    <ClipboardCheck className="mt-0.5" size={20} />
                    <div><div className="font-semibold">A better enquiry starts with better information.</div><div className="mt-1 text-sm text-blue-100">This concept replaces a generic contact box with a useful project brief.</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 md:py-28">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">Services</span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">Make the work easy to understand.</h2>
            <p className="mt-4 text-slate-400">A strong contractor website should make scope and capability obvious without forcing a buyer to dig through pages of generic copy.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-[#0b1722] p-6">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400"><Icon size={20} /></div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{text}</p>
                <div className="mt-5 flex items-center gap-1 text-sm text-blue-400">View capability <ChevronRight size={15} /></div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="border-y border-white/10 bg-[#0b1722] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">Project proof</span>
                <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">Show the work. Not just the service list.</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-slate-400">These are deliberately marked as example project slots. When a prospect engages, Titan swaps these for their real jobs, images and project details.</p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {projectSlots.map(([title, subtitle, text], index) => (
                <article key={title} className="overflow-hidden rounded-2xl border border-white/10 bg-[#071018]">
                  <div className="relative flex aspect-[4/3] items-end bg-gradient-to-br from-blue-500/20 via-slate-900 to-[#050a0e] p-5">
                    <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-wider text-slate-300">Example project slot {index + 1}</span>
                  </div>
                  <div className="p-6"><div className="text-xs uppercase tracking-wider text-blue-400">{subtitle}</div><h3 className="mt-2 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-400">{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">Built around trust</span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">Turn credibility into a buying journey.</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-slate-400">Commercial buyers want to know what you do, where you work, whether you have relevant experience, and how to start a conversation. The website should answer those questions fast.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [ShieldCheck, 'Accreditations', 'Space for the contractor’s genuine accreditations and compliance credentials.'],
              [Building2, 'Relevant projects', 'Real project evidence organised by sector, scope and outcome.'],
              [Clock3, 'Fast response', 'A structured enquiry can trigger acknowledgement and internal notification.'],
              [Sparkles, 'Modern presentation', 'A mobile-first experience that reflects the standard of the work.'],
            ].map(([Icon, title, text]) => {
              const I = Icon as typeof ShieldCheck
              return <div key={String(title)} className="rounded-2xl border border-white/10 bg-[#0b1722] p-5"><I size={20} className="text-blue-400" /><h3 className="mt-4 font-semibold">{String(title)}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{String(text)}</p></div>
            })}
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-gradient-to-b from-[#0b1722] to-[#071018] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 sm:p-10 lg:grid-cols-[.85fr_1.15fr] lg:p-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400">Start a project</span>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight">Tell us what you’re pricing.</h2>
              <p className="mt-4 text-slate-400">The real version can capture useful commercial information before your team ever picks up the phone.</p>
              <div className="mt-8 space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-3"><Phone size={16} className="text-blue-400" /> Phone CTA inserted during personalisation</div>
                <div className="flex items-center gap-3"><Mail size={16} className="text-blue-400" /> Email CTA inserted during personalisation</div>
                <div className="flex items-center gap-3"><MapPin size={16} className="text-blue-400" /> {location}</div>
              </div>
            </div>
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              {['Name', 'Company', 'Email', 'Phone', 'Project location', 'Required start date'].map((label) => (
                <label key={label} className="text-xs text-slate-400"><span className="mb-2 block">{label}</span><input className="w-full rounded-xl border border-white/10 bg-[#071018] px-4 py-3 text-sm text-white outline-none focus:border-blue-400/70" placeholder={label} /></label>
              ))}
              <label className="text-xs text-slate-400 sm:col-span-2"><span className="mb-2 block">Project scope</span><textarea className="min-h-28 w-full rounded-xl border border-white/10 bg-[#071018] px-4 py-3 text-sm text-white outline-none focus:border-blue-400/70" placeholder="Tell us about the works, programme and any drawings available." /></label>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3.5 font-semibold hover:bg-blue-400 sm:col-span-2">Send Project Enquiry <ArrowRight size={16} /></button>
              <p className="text-center text-[11px] text-slate-500 sm:col-span-2">Demo form only. No enquiry is submitted from this concept page.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© Concept website for {company}</span>
          <Link href="/" className="text-blue-400 hover:text-blue-300">Built as a Titan Automations sales demo</Link>
        </div>
      </footer>
    </div>
  )
}
