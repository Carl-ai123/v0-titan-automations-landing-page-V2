"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const scrollToCTA = () => {
  document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })
}

function Slider({
  label, min, max, value, step = 1, format,
  onChange,
}: {
  label: string
  min: number
  max: number
  value: number
  step?: number
  format: (v: number) => string
  onChange: (v: number) => void
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm text-lo">{label}</label>
        <span className="text-sm font-semibold text-hi tabular-nums">{format(value)}</span>
      </div>
      <div className="relative h-1.5 bg-white/[0.08] rounded-full">
        <div className="absolute left-0 top-0 h-full rounded-full bg-accent" style={{ width: `${pct}%` }} />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ WebkitAppearance: "none" }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent border-2 border-page shadow-[0_0_8px_rgba(0,157,255,0.5)] pointer-events-none transition-[left] duration-75"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>
    </div>
  )
}

function fmtGBP(v: number) { return `\u00A3${v.toLocaleString("en-GB")}` }
function fmtH(v: number)   { return `${v}h/wk` }
function fmtN(v: number)   { return `${v}` }

export function SavingsEstimator() {
  const [leads,       setLeads]       = useState(15)
  const [jobValue,    setJobValue]    = useState(500)
  const [adminHours,  setAdminHours]  = useState(10)
  const [missedLeads, setMissedLeads] = useState(3)
  const [hourlyRate,  setHourlyRate]  = useState(40)

  /* Calculations */
  const monthlyAdminCost    = Math.round(adminHours * 4.33 * hourlyRate)
  const monthlyLostRevenue  = Math.round(missedLeads * 4.33 * jobValue * 0.30)
  const monthlyHoursBack    = Math.round(adminHours * 4.33 * 0.70)
  const annualAtRisk        = Math.round(missedLeads * 52 * jobValue * 0.30)

  return (
    <section id="estimator" className="py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12 md:mb-16 max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-accent mb-5">
            <span className="w-5 h-px bg-accent" aria-hidden="true" />
            Cost Calculator
          </span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-hi mb-5">
            Find out what manual work is costing you.
          </h2>
          <p className="text-lg text-lo leading-relaxed">
            Adjust the inputs. See the estimated numbers. These are conservative — your real numbers are likely higher.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8">

          {/* Inputs */}
          <div className="bg-surface border border-white/[0.08] rounded-2xl p-7 space-y-8">
            <Slider label="Enquiries per week"                 min={1}  max={200} value={leads}       format={fmtN} onChange={setLeads} />
            <Slider label="Average job / client value"         min={50} max={5000} step={50} value={jobValue} format={fmtGBP} onChange={setJobValue} />
            <Slider label="Hours on admin and follow-up / week" min={1} max={40} value={adminHours} format={fmtH} onChange={setAdminHours} />
            <Slider label="Missed or forgotten leads / week"   min={0}  max={20} value={missedLeads} format={fmtN} onChange={setMissedLeads} />
            <Slider label="Your hourly time cost"              min={10} max={150} value={hourlyRate}  format={fmtGBP} onChange={setHourlyRate} />
          </div>

          {/* Outputs */}
          <div className="flex flex-col gap-4">
            <div className="bg-elevated border border-white/[0.08] rounded-2xl p-6 flex flex-col gap-1">
              <p className="text-xs text-dim uppercase tracking-wide font-medium">Monthly admin cost</p>
              <p className="font-display text-4xl font-bold text-hi tabular-nums">{fmtGBP(monthlyAdminCost)}</p>
              <p className="text-xs text-lo">Time spent on admin that automation could handle</p>
            </div>

            <div className="bg-elevated border border-error/20 rounded-2xl p-6 flex flex-col gap-1">
              <p className="text-xs text-error/80 uppercase tracking-wide font-medium">Monthly lost revenue</p>
              <p className="font-display text-4xl font-bold text-error tabular-nums">{fmtGBP(monthlyLostRevenue)}</p>
              <p className="text-xs text-lo">From missed leads at a 30% close rate</p>
            </div>

            <div className="bg-elevated border border-accent/20 rounded-2xl p-6 flex flex-col gap-1">
              <p className="text-xs text-accent/80 uppercase tracking-wide font-medium">Hours back per month</p>
              <p className="font-display text-4xl font-bold text-accent tabular-nums">{monthlyHoursBack}h</p>
              <p className="text-xs text-lo">From automating 70% of your current admin load</p>
            </div>

            <div className="bg-elevated border border-warning/20 rounded-2xl p-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-warning/80 uppercase tracking-wide font-medium mb-0.5">Annual revenue at risk</p>
                <p className="font-display text-2xl font-bold text-warning tabular-nums">{fmtGBP(annualAtRisk)}</p>
              </div>
              <p className="text-xs text-lo max-w-[120px] text-right">From missed leads if nothing changes</p>
            </div>

            <button
              onClick={scrollToCTA}
              className="group w-full flex items-center justify-center gap-2.5 py-3.5 text-sm font-semibold text-page bg-accent rounded-full hover:bg-accent-deep transition-all duration-150 hover:-translate-y-px"
            >
              Show me what to automate first
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <p className="mt-6 text-xs text-dim text-center">
          Estimates based on typical automation outcomes. Your audit will show the real numbers.
        </p>
      </div>
    </section>
  )
}
