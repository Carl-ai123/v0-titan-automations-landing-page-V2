"use client"

import { useMemo, useState } from "react"
import { ArrowRight, BellRing, CheckCircle2, ClipboardList, MailCheck, RotateCcw } from "lucide-react"

type Stage = "New" | "Qualified" | "Quote sent" | "Follow-up" | "Won"

const STAGES: Stage[] = ["New", "Qualified", "Quote sent", "Follow-up", "Won"]

const stageCopy: Record<Stage, string> = {
  New: "Enquiry captured and logged automatically.",
  Qualified: "Scope checked and estimator assigned.",
  "Quote sent": "Quote recorded with a clear next action.",
  "Follow-up": "Automated chase scheduled so the quote is not forgotten.",
  Won: "Outcome recorded and the pipeline updated.",
}

export function ContractorDemo() {
  const [submitted, setSubmitted] = useState(false)
  const [stageIndex, setStageIndex] = useState(0)
  const [company, setCompany] = useState("Apex M&E Contractors")
  const [contact, setContact] = useState("James Carter")
  const [location, setLocation] = useState("Maidstone, Kent")
  const [scope, setScope] = useState("Commercial lighting upgrade across 3 floors")
  const [deadline, setDeadline] = useState("Friday 17:00")
  const [value, setValue] = useState("£18,500")

  const stage = STAGES[stageIndex]
  const timeline = useMemo(() => {
    if (!submitted) return []
    return STAGES.slice(0, stageIndex + 1).map((item, index) => ({
      label: item,
      detail: stageCopy[item],
      current: index === stageIndex,
    }))
  }, [submitted, stageIndex])

  const reset = () => {
    setSubmitted(false)
    setStageIndex(0)
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-8 items-start">
        <div className="bg-surface border border-white/[0.08] rounded-2xl p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-7">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-accent mb-2">Step 1</p>
              <h2 className="font-display text-2xl font-semibold text-hi">Submit a contractor enquiry</h2>
            </div>
            <span className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-dim">Fictional demo</span>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault()
              setSubmitted(true)
              setStageIndex(0)
            }}
            className="space-y-4"
          >
            {[{ label: "Company", value: company, setter: setCompany }, { label: "Contact", value: contact, setter: setContact }, { label: "Project location", value: location, setter: setLocation }, { label: "Scope", value: scope, setter: setScope }, { label: "Response deadline", value: deadline, setter: setDeadline }, { label: "Estimated value", value, setter: setValue }].map((field) => (
              <label key={field.label} className="block">
                <span className="block text-xs font-medium text-lo mb-1.5">{field.label}</span>
                <input
                  value={field.value}
                  onChange={(event) => field.setter(event.target.value)}
                  className="w-full rounded-xl bg-elevated border border-white/[0.08] px-4 py-3 text-sm text-hi outline-none focus:border-accent/50"
                />
              </label>
            ))}

            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent text-page font-semibold py-3.5 hover:bg-accent-deep transition-colors">
              Create opportunity
              <ArrowRight size={16} />
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-surface border border-white/[0.08] rounded-2xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-accent mb-2">Step 2</p>
                <h2 className="font-display text-2xl font-semibold text-hi">Opportunity pipeline</h2>
              </div>
              <button onClick={reset} className="inline-flex items-center gap-2 text-xs text-dim hover:text-hi transition-colors">
                <RotateCcw size={14} /> Reset
              </button>
            </div>

            {!submitted ? (
              <div className="border border-dashed border-white/10 rounded-2xl px-5 py-12 text-center">
                <ClipboardList size={26} className="mx-auto text-dim mb-3" />
                <p className="text-sm text-lo">Submit the enquiry to create a live opportunity.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  <div className="rounded-xl bg-elevated border border-white/[0.07] p-4"><p className="text-[11px] text-dim mb-1">Stage</p><p className="text-sm font-semibold text-hi">{stage}</p></div>
                  <div className="rounded-xl bg-elevated border border-white/[0.07] p-4"><p className="text-[11px] text-dim mb-1">Value</p><p className="text-sm font-semibold text-hi">{value}</p></div>
                  <div className="rounded-xl bg-elevated border border-white/[0.07] p-4 col-span-2 md:col-span-1"><p className="text-[11px] text-dim mb-1">Owner</p><p className="text-sm font-semibold text-hi">Estimator: Sarah</p></div>
                </div>

                <div className="rounded-2xl bg-elevated border border-white/[0.07] p-5 mb-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-hi">{company}</h3>
                      <p className="text-sm text-lo">{contact} · {location}</p>
                    </div>
                    <span className="text-[11px] rounded-full bg-accent/10 text-accent px-2.5 py-1">{stage}</span>
                  </div>
                  <p className="text-sm text-hi mb-2">{scope}</p>
                  <p className="text-xs text-dim">Response deadline: {deadline}</p>
                </div>

                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] p-4"><MailCheck size={17} className="text-success" /><div><p className="text-xs font-semibold text-hi">Acknowledged</p><p className="text-[11px] text-dim">Customer reply sent</p></div></div>
                  <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] p-4"><BellRing size={17} className="text-accent" /><div><p className="text-xs font-semibold text-hi">Assigned</p><p className="text-[11px] text-dim">Estimator notified</p></div></div>
                  <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] p-4"><CheckCircle2 size={17} className="text-success" /><div><p className="text-xs font-semibold text-hi">Tracked</p><p className="text-[11px] text-dim">Next action visible</p></div></div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {STAGES.map((item, index) => (
                    <button
                      key={item}
                      onClick={() => setStageIndex(index)}
                      className={`px-3 py-2 rounded-full text-xs border transition-colors ${index === stageIndex ? "bg-accent text-page border-accent" : "border-white/10 text-lo hover:text-hi hover:border-white/20"}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="bg-surface border border-white/[0.08] rounded-2xl p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-accent mb-4">Activity timeline</p>
            {timeline.length === 0 ? (
              <p className="text-sm text-dim">No activity yet.</p>
            ) : (
              <div className="space-y-4">
                {timeline.map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${item.current ? "bg-accent" : "bg-success"}`} />
                    <div>
                      <p className="text-sm font-semibold text-hi">{item.label}</p>
                      <p className="text-xs text-lo mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
