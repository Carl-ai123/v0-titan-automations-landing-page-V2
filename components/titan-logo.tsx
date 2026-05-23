/* TA monogram mark — geometric bold ligature matching the Titan Automations brand */

type Size = "nav" | "footer" | "hero"

const dims: Record<Size, { markH: number; showWordmark: boolean }> = {
  nav:    { markH: 32, showWordmark: false },
  hero:   { markH: 44, showWordmark: true  },
  footer: { markH: 36, showWordmark: true  },
}

function TaMark({ height, className }: { height: number; className?: string }) {
  /* viewBox 100×68. T crossbar right edge = A bottom-left → ligature effect. */
  const w = Math.round(height * (100 / 68))
  return (
    <svg
      width={w}
      height={height}
      viewBox="0 0 100 68"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      {/* T — crossbar */}
      <rect x="0"  y="0"  width="46" height="13" rx="1.5" />
      {/* T — stem */}
      <rect x="17" y="0"  width="12" height="68" rx="1.5" />
      {/* A — left leg: peak (73,0) → outer-bottom (46,68) → inner-bottom (62,68) */}
      <path d="M73,0 L46,68 L62,68 Z" />
      {/* A — right leg: peak (73,0) → inner-bottom (84,68) → outer-bottom (100,68) */}
      <path d="M73,0 L84,68 L100,68 Z" />
      {/* A — crossbar */}
      <rect x="55" y="42" width="24" height="12" rx="1.5" />
    </svg>
  )
}

export function TitanLogo({ size = "nav" }: { size?: Size }) {
  const { markH, showWordmark } = dims[size]
  return (
    <div className="flex items-center gap-2.5 text-hi select-none">
      <TaMark height={markH} />
      {showWordmark && (
        <div className="flex flex-col justify-center leading-none">
          <span
            className="text-[11px] font-bold tracking-[0.22em] text-hi uppercase"
            style={{ fontFamily: "var(--font-bricolage, 'Bricolage Grotesque', sans-serif)" }}
          >
            TITAN
          </span>
          <span className="text-[8px] tracking-[0.18em] text-dim uppercase mt-0.5">
            AUTOMATIONS
          </span>
        </div>
      )}
    </div>
  )
}

export function TitanLogoNav() {
  return (
    <div className="flex items-center gap-2 text-hi select-none">
      <TaMark height={28} />
      <span
        className="hidden sm:block text-sm font-semibold tracking-[0.1em] text-hi"
        style={{ fontFamily: "var(--font-bricolage, 'Bricolage Grotesque', sans-serif)" }}
      >
        TITAN<span className="text-dim font-normal"> AUTOMATIONS</span>
      </span>
    </div>
  )
}
