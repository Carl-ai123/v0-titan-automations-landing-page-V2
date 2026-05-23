type Size = "nav" | "footer" | "hero"

const styles: Record<Size, { titan: string; sub: string }> = {
  nav:    { titan: "text-xl font-black tracking-[-0.03em]",   sub: "" },
  hero:   { titan: "text-3xl font-black tracking-[-0.03em]",  sub: "text-[10px] font-medium tracking-[0.2em] text-dim uppercase mt-0.5" },
  footer: { titan: "text-2xl font-black tracking-[-0.03em]",  sub: "text-[9px] font-medium tracking-[0.18em] text-dim uppercase mt-0.5" },
}

export function TitanLogo({ size = "nav" }: { size?: Size }) {
  const s = styles[size]
  return (
    <div className="flex flex-col justify-center leading-none select-none">
      <span className={`${s.titan} text-hi`}>TITAN</span>
      {s.sub && <span className={s.sub}>AUTOMATIONS</span>}
    </div>
  )
}

export function TitanLogoNav() {
  return (
    <div className="flex items-baseline gap-2 select-none">
      <span className="text-lg font-black tracking-[-0.03em] text-hi">TITAN</span>
      <span className="hidden sm:block text-xs font-medium tracking-[0.15em] text-dim uppercase">
        AUTOMATIONS
      </span>
    </div>
  )
}
