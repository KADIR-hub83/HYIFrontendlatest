"use client";
import { useMemo, useState } from "react";
import Card from "@/components/about/Card";
import Reveal from "@/components/about/Reveal";
import SplitHeading from "@/components/about/Splitheading";
import { CATEGORY_ICON, categories, copy, projects } from "@/components/data/Portfoliocontent";

export default function Directory() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("");

  const found = useMemo(() => {
    const s = q.trim().toLowerCase();
    return projects.filter(
      (p) =>
        (!cat || p.category === cat) &&
        (!s || [p.name, p.description, p.category].join(" ").toLowerCase().includes(s))
    );
  }, [q, cat]);

  return (
    <section id="work" className="scroll-mt-28 py-10">
      <Card variant="glass" tilt={false}>
        <SplitHeading text={copy.dirTitle} accent={["showcase"]} className="hyi-h2 hyi-white" />
        <p className="hyi-p mt-2">{copy.dirSub}</p>

        {/* Neumorphic search */}
        <div className="mt-7">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects…"
            aria-label="Search projects"
            className="hyi-input"
          />
        </div>

        {/* Skeuomorphic category chips */}
        <div className="mt-5 flex flex-wrap gap-3" role="tablist" aria-label="Filter by category">
          <button
            onClick={() => setCat("")}
            className={`hyi-skeu px-4 py-2 text-sm font-semibold ${cat === "" ? "is-active" : ""}`}
          >
            All <span className="ml-1 opacity-70">{projects.length}</span>
          </button>
          {categories.map((c) => (
            <button
              key={c.name}
              onClick={() => setCat(cat === c.name ? "" : c.name)}
              className={`hyi-skeu px-4 py-2 text-sm font-semibold ${cat === c.name ? "is-active" : ""}`}
            >
              {c.icon} {c.name} <span className="ml-1 opacity-70">{c.count}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 text-xs text-white/50">
          <span aria-live="polite">
            Showing <b className="hyi-blue">{found.length}</b> of {projects.length} projects
          </span>
          <span className="hyi-eyebrow !text-white/40">Project directory</span>
        </div>
      </Card>

      {/* Cards */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {found.map((p, i) => (
          <Reveal key={p.no} from="zoom" delay={(i % 3) * 90} className="h-full">
            <Card variant={p.url ? "clay-soft" : "neu"} className="flex h-full min-h-[220px] flex-col overflow-hidden">
              <span className="pointer-events-none absolute -bottom-6 -right-1 select-none text-[6.5rem] font-black leading-none text-white/[0.045]">
                {String(p.no).padStart(2, "0")}
              </span>
              <div className="relative flex items-center justify-between gap-2">
                <span className="hyi-eyebrow !text-white/40">{String(p.no).padStart(2, "0")}</span>
                <span className="rounded-full bg-[#4f9dff]/10 px-3 py-1 text-[11px] font-semibold hyi-blue">
                  {CATEGORY_ICON[p.category]} {p.category}
                </span>
              </div>
              <h3 className="hyi-h3 hyi-white relative mt-6">{p.name}</h3>
              <p className="hyi-p relative mt-2 text-sm">{p.description}</p>
              <div className="relative mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                <span className="hyi-eyebrow !text-white/40">Project</span>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hyi-skeu px-3 py-1.5 text-xs font-bold"
                  >
                    View reference ↗
                  </a>
                )}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {found.length === 0 && (
        <div className="hyi-neu-in mt-8 p-10 text-center">
          <p className="hyi-p">{copy.empty}</p>
        </div>
      )}
    </section>
  );
}