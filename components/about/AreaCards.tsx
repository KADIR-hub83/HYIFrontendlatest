"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import Reveal from "@/components/about/Reveal";
import { areas, targetIndustries, type Area } from "@/components/data/areasContent";

const svg = (children: ReactNode) => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const icons: Record<Area["key"], ReactNode> = {
  talent: svg(
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  technology: svg(
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </>
  ),
  cyber: svg(<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />),
  gcc: svg(
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
};

function AreaCard({ area, index }: { area: Area; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `area-panel-${area.key}`;

  const anchor = index < 2 ? "md:left-0" : "md:right-0";
  const width = area.wide ? "lg:w-[210%]" : "lg:w-[145%]";

  return (
    <div
      style={{ "--c": area.color } as CSSProperties}
      onMouseLeave={() => {
        if (typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches) {
          setOpen(false);
        }
      }}
      className={`group relative rounded-3xl  ${open ? "z-40" : "hover:z-40"}`}
    >
      {/* Background layer: rotating gradient border + glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute left-1/2 top-1/2 aspect-square w-[300%] -translate-x-1/2 -translate-y-1/2 animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_62%,var(--c)_90%,transparent_100%)] opacity-35 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-px rounded-[23px] bg-[#09080f]" />
        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[var(--c)] opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-60" />
      </div>

      {/* Face */}
      <div className="relative z-10 flex  flex-col justify-between p-6 ">
        <div className="flex items-start justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-[var(--c)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
            {icons[area.key]}
          </span>
       
        </div>

        <div className="mt-3 flex items-end justify-between gap-3">
          <div>
            <h3 className="hyi-h3 hyi-white">
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((v) => !v)}
                className="text-left after:absolute after:inset-0 after:rounded-3xl after:content-[''] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-[var(--c)]"
              >
                {area.title}
              </button>
            </h3>
            <p className="mt-2 hyi-p">{area.tag}</p>
            <p className="mt-3 text-xs text-[var(--c)] opacity-80 max-md:hidden">Hover to explore →</p>
          </div>

          {/* > icon: mobile only */}
          <span
            aria-hidden="true"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 6 6 6-6 6" />
            </svg>
          </span>
        </div>
      </div>

      {/* Content: accordion on mobile, popover on md+ */}
      <div
        id={panelId}
        role="region"
        className={[
          // mobile accordion
          "relative z-10 max-md:overflow-hidden max-md:transition-[max-height] max-md:duration-500",
          open ? "max-md:max-h-[4000px]" : "max-md:max-h-0",
          // desktop popover
          "md:absolute md:top-0 md:z-30 md:w-full md:max-h-[75vh] md:overflow-y-auto md:rounded-3xl md:border md:border-[var(--c)]/40 md:bg-[#0b0a14]/95 md:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] md:backdrop-blur-xl",
          "md:transition-all md:duration-300 md:translate-y-2 md:scale-[0.98]",
          "md:[scrollbar-width:thin] md:[scrollbar-color:rgba(167,139,250,0.5)_transparent]",
          open
            ? "md:pointer-events-auto md:translate-y-0 md:scale-100 md:opacity-100"
            : "md:pointer-events-none md:opacity-0 md:group-hover:pointer-events-auto md:group-hover:translate-y-0 md:group-hover:scale-100 md:group-hover:opacity-100",
          anchor,
          width,
        ].join(" ")}
      >
        <div className="px-6 pb-6 max-md:pt-0 md:p-6">
          <div className="mb-5 flex items-center gap-3 max-md:hidden">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-[var(--c)]">
              {icons[area.key]}
            </span>
            <div>
              <p className="hyi-h3 hyi-white !text-lg">{area.title}</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">{area.tag}</p>
            </div>
          </div>

          <div className={area.wide ? "lg:columns-2 lg:gap-10" : ""}>
            {area.groups.map((g) => (
              <section key={g.heading} className="mb-6 break-inside-avoid last:mb-0">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--c)]">
                  {g.heading}
                </h4>
                {g.lead && <p className="mb-2 text-sm leading-relaxed text-white/75">{g.lead}</p>}
                {g.itemsLabel && (
                  <p className="mb-1.5 text-sm font-medium text-white">{g.itemsLabel}</p>
                )}
                <ul className="space-y-1.5">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-sm leading-relaxed text-white/80">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--c)]" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                {g.trail && (
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{g.trail}</p>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AreaCards() {
  return (
    <div className="relative z-20">
      <Reveal from="zoom">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a, i) => (
            <AreaCard key={a.key} area={a} index={i} />
          ))}
        </div>

 <div className="mt-10 max-md:mt-5 max-lg:text-center max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
  <p className="mb-3 text-xs uppercase tracking-[0.25em] text-white/50">
    Target Industries
  </p>

  <ul className="flex flex-wrap justify-center gap-2 max-md:items-center max-md:justify-center">
    {targetIndustries.map((t) => (
      <li
        key={t}
        className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80"
      >
        {t}
      </li>
    ))}
  </ul>
</div>
      </Reveal>
    </div>
  );
}