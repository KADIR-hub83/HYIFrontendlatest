"use client";

import { useEffect, useState, type ReactNode } from "react";
import Lottie from "lottie-react";
import data from "@/lotties/finance.json";
import chartAnim from "@/lotties/finance-chart.json";
import { RevealText, RevealBlock, useInView } from "../../components/finance/Reveal";
import s from "../finance.module.css";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

type Row = (typeof data.years)[number];
const inr = new Intl.NumberFormat("en-IN");
const money = (n: number) => `₹${inr.format(Math.abs(n))}`;
const compact = (n: number) => {
  const a = Math.abs(n), sg = n < 0 ? "−" : "";
  return a >= 1e7 ? `${sg}₹${(a / 1e7).toFixed(2)} Cr` : a >= 1e5 ? `${sg}₹${(a / 1e5).toFixed(2)} L` : `${sg}₹${inr.format(a)}`;
};

const rows = data.years as Row[];
const done = rows.filter((y) => y.turnover !== null);
const totalTurnover = done.reduce((a, y) => a + (y.turnover ?? 0), 0);
const totalProfit = done.filter((y) => (y.profit ?? 0) > 0).reduce((a, y) => a + (y.profit ?? 0), 0);
const loss = done.find((y) => (y.profit ?? 0) < 0);
const D = data.animation.sectionDelayMs;

/* ---------- small pieces ---------- */
function CountUp({ to, prefix = "₹", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const [ref, seen] = useInView<HTMLSpanElement>();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setV(to);
    const t0 = performance.now(), dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      setV(Math.round(to * (1 - Math.pow(1 - p, 4))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return <span ref={ref}>{prefix}{inr.format(v)}{suffix}</span>;
}

function Glow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`${s.glow} ${className}`}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      {children}
    </div>
  );
}

/* ---------- charts ---------- */
function Charts() {
  const [ref, seen] = useInView<HTMLDivElement>();
  const [mode, setMode] = useState<"linear" | "sqrt">("sqrt");
  const [hover, setHover] = useState<number | null>(null);
  const W = 900, H = 340, pt = 36, pb = 46, pl = 24, pr = 24;
  const plotH = H - pt - pb, colW = (W - pl - pr) / rows.length, bw = Math.min(84, colW * 0.52);
  const f = (v: number) => (mode === "sqrt" ? Math.sqrt(v) : v);
  const maxT = Math.max(...rows.map((r) => f(r.turnover ?? 0)));
  const maxP = Math.max(...rows.map((r) => Math.abs(r.profit ?? 0)));
  const mid = H / 2, ph = mid - 44;
  const cx = (i: number) => pl + i * colW + colW / 2;
  const dim = (i: number) => (hover !== null && hover !== i ? 0.3 : 1);
  const cur = hover !== null ? rows[hover] : null;

  return (
    <div ref={ref}>
        <Header/>
      <div className={s.toggle} role="group" aria-label="Chart scale">
        <button className={mode === "sqrt" ? s.on : ""} onClick={() => setMode("sqrt")}>Balanced scale</button>
        <button className={mode === "linear" ? s.on : ""} onClick={() => setMode("linear")}>True scale</button>
      </div>

      <div className={s.chartGrid}>
        <Glow className={s.chartCard}>
          <p className={`hyi-p ${s.muted}`}>Revenue / turnover</p>
          <svg viewBox={`0 0 ${W} ${H}`} className={s.svg} role="img" aria-label="Turnover by financial year">
            <defs>
              <linearGradient id="gT" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#19e3c0" /><stop offset="1" stopColor="#3da9fc" stopOpacity=".15" />
              </linearGradient>
            </defs>
            {[0, 1, 2, 3].map((g) => (
              <line key={g} x1={pl} x2={W - pr} y1={pt + (plotH * g) / 3} y2={pt + (plotH * g) / 3} className={s.gridLine} />
            ))}
            {rows.map((r, i) => {
              const pending = r.turnover === null;
              const h = pending ? 70 : Math.max((f(r.turnover!) / maxT) * plotH, 6);
              const y = pt + plotH - h;
              return (
                <g key={r.year} tabIndex={0} style={{ opacity: dim(i), transition: "opacity .25s" }}
                  onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(i)} onBlur={() => setHover(null)}>
                  <rect x={cx(i) - bw / 2} y={y} width={bw} height={h} rx={10}
                    className={pending ? s.ghost : s.bar}
                    style={{ fill: pending ? "none" : "url(#gT)", transform: `scaleY(${seen ? 1 : 0})`, transitionDelay: `${i * 130}ms` }} />
                  <text x={cx(i)} y={y - 10} textAnchor="middle" className={s.val} style={{ opacity: seen ? 1 : 0, transitionDelay: `${i * 130 + 600}ms` }}>
                    {pending ? "Pending" : compact(r.turnover!)}
                  </text>
                  <text x={cx(i)} y={H - 16} textAnchor="middle" className={s.axis}>{r.year}</text>
                </g>
              );
            })}
          </svg>
        </Glow>

        <Glow className={s.chartCard}>
          <p className={`hyi-p ${s.muted}`}>Profit / (loss)</p>
          <svg viewBox={`0 0 ${W} ${H}`} className={s.svg} role="img" aria-label="Profit or loss by financial year">
            <defs>
              <linearGradient id="gP" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0" stopColor="#2ee6a6" stopOpacity=".15" /><stop offset="1" stopColor="#2ee6a6" />
              </linearGradient>
              <linearGradient id="gL" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ff5d73" stopOpacity=".15" /><stop offset="1" stopColor="#ff5d73" />
              </linearGradient>
            </defs>
            <line x1={pl} x2={W - pr} y1={mid} y2={mid} className={s.zero} />
            {rows.map((r, i) => {
              const pending = r.profit === null;
              const v = r.profit ?? 0, h = Math.max((Math.abs(v) / maxP) * ph, 5), pos = v >= 0;
              return (
                <g key={r.year} tabIndex={0} style={{ opacity: dim(i), transition: "opacity .25s" }}
                  onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(i)} onBlur={() => setHover(null)}>
                  {pending ? (
                    <circle cx={cx(i)} cy={mid} r={14} className={s.pulse} />
                  ) : (
                    <rect x={cx(i) - bw / 2} y={pos ? mid - h : mid} width={bw} height={h} rx={10}
                      style={{ fill: pos ? "url(#gP)" : "url(#gL)", transform: `scaleY(${seen ? 1 : 0})`, transformOrigin: `50% ${pos ? "100%" : "0%"}`, transformBox: "fill-box", transition: "transform 1s cubic-bezier(.2,.9,.2,1)", transitionDelay: `${i * 130}ms` }} />
                  )}
                  <text x={cx(i)} y={pending ? mid - 26 : pos ? mid - h - 10 : mid + h + 20} textAnchor="middle"
                    className={s.val} style={{ fill: pending ? undefined : pos ? "#2ee6a6" : "#ff5d73", opacity: seen ? 1 : 0, transitionDelay: `${i * 130 + 600}ms` }}>
                    {pending ? "Pending" : compact(v)}
                  </text>
                  <text x={cx(i)} y={H - 16} textAnchor="middle" className={s.axis}>{r.year}</text>
                </g>
              );
            })}
          </svg>
        </Glow>
      </div>

      <p className={`hyi-p ${s.readout}`} aria-live="polite">
        {cur ? (
          <>
            <b className="hyi-white">FY {cur.year}</b> · {cur.company} ·{" "}
            {cur.turnover === null ? "Awaiting update" : <>Turnover {money(cur.turnover)} · {(cur.profit ?? 0) >= 0 ? "Profit" : "Loss"} {money(cur.profit ?? 0)}</>}
          </>
        ) : (
          "Hover a bar to see exact figures."
        )}
      </p>
      {mode === "sqrt" && <p className={`hyi-p ${s.muted} ${s.small}`}>Balanced scale compresses very large years so smaller ones stay visible. Switch to True scale for proportional bars.</p>}
    </div>
  );
}

/* ---------- page ---------- */
export default function FinancePage() {
  return (
    <main className={s.page}>
      <div className={s.aurora} aria-hidden />
      <div className={s.gridBg} aria-hidden />

      {/* HERO */}
      <section className={`${s.wrap} ${s.hero}`}>
        <div className={s.heroText}>
          <RevealText as="p" className={`hyi-p font-bold hyi-blue ${s.eyebrow}`} text={data.hero.eyebrow} />
          <RevealText as="h1" className={`hyi-h1 hyi-white ${s.title}`} text={data.hero.title} delay={D} />
          <RevealText as="p" className={`hyi-p ${s.lead}`} text={data.hero.text} delay={D * 4} />
          <RevealBlock className={s.chips} delay={D * 10}>
            <span>FY 2017 → 2026</span>
            <span>{done.length} years reported</span>
            <span className={s.chipPending}>{rows.length - done.length} pending update</span>
          </RevealBlock>
        </div>
        <RevealBlock className={s.heroViz} delay={D * 3}>
          <Glow className={s.vizCard}>
            <Lottie animationData={chartAnim} loop autoplay className={s.lottie} />
          </Glow>
        </RevealBlock>
      </section>

      {/* KPIs */}
      <section className={s.wrap}>
        <div className={s.kpis}>
          {[
            { l: "Overall turnover", v: <CountUp to={totalTurnover} />, n: "Sum of turnover shown below", c: "" },
            { l: "Total reported profit · FY 2017–18 to 2019–20", v: <CountUp to={totalProfit} />, n: "Sum of three annual profits", c: s.up },
            { l: "Reported loss · FY 2024–25", v: <CountUp to={Math.abs(loss?.profit ?? 0)} />, n: "As per P&L account in tax computation", c: s.down },
            { l: "Reporting periods", v: <CountUp to={done.length} prefix="" suffix=" years" />, n: `${rows.length - done.length} pending update`, c: "" },
          ].map((k, i) => (
            <RevealBlock key={k.l} delay={i * D}>
              <Glow className={s.kpi}>
                <p className={`hyi-p ${s.muted}`}>{k.l}</p>
                <strong className={k.c}>{k.v}</strong>
                <p className={`hyi-p ${s.muted} ${s.small}`}>{k.n}</p>
              </Glow>
            </RevealBlock>
          ))}
        </div>
        <RevealBlock className={s.note}>
          <p className="hyi-p">
            <b>Important:</b> Do not treat these totals as one company’s cumulative or consolidated result. FY 2017–18 to
            2019–20 documents name AYN Infotech Private Limited / AYN Infotech Limited; FY 2024–25 tax records name Hire Yoo
            Infotech Private Limited. Their legal relationship has not been established by the supplied documents.
          </p>
        </RevealBlock>
      </section>

      {/* CHARTS */}
      <section className={`${s.wrap} ${s.section}`}>
        <RevealText as="h2" className={`hyi-h1 hyi-white ${s.h2}`} text="Year by year" />
        <RevealText as="p" className={`hyi-p ${s.lead}`} text="Turnover and profit side by side. FY 2025–26 appears as a placeholder until records are added." />
        <Charts />
      </section>

      {/* TABLE */}
      <section className={`${s.wrap} ${s.section}`}>
        <RevealText as="h2" className={`hyi-h1 hyi-white ${s.h2}`} text="Source records" />
        <RevealText as="p" className={`hyi-p ${s.lead}`} text="Amounts in Indian rupees (₹), exactly as stated in the supplied documents." />
        <RevealBlock className={s.tableBox}>
          <table className={s.table}>
            <thead>
              <tr><th>Financial year</th><th>Company named in source</th><th className={s.num}>Revenue / turnover</th><th className={s.num}>Profit / (loss)</th><th>Status</th></tr>
            </thead>
            <tbody>
              {rows.map((y) => {
                const p = y.turnover === null;
                return (
                  <tr key={y.year} className={p ? s.pendingRow : ""}>
                    <td><b className="hyi-blue">{y.year}</b></td>
                    <td>{y.company}</td>
                    <td className={s.num}>{p ? "—" : money(y.turnover!)}</td>
                    <td className={`${s.num} ${p ? "" : y.profit! >= 0 ? s.up : s.down}`}>
                      {p ? "—" : y.profit! >= 0 ? `${money(y.profit!)} profit` : `(${money(y.profit!)}) loss`}
                    </td>
                    <td><span className={`${s.tag} ${p ? s.tagPending : y.status === "Provisional" ? s.tagProv : ""}`}>{y.status}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </RevealBlock>
        <p className={`hyi-p ${s.muted} ${s.small}`}>{data.disclaimer}</p>
      </section>

      {/* NOTES */}
      <section className={`${s.wrap} ${s.section}`}>
        <RevealText as="h2" className={`hyi-h1 hyi-white ${s.h2}`} text="Notes and disclosures" />
        <ul className={s.notes}>
          {data.notes.map((n, i) => (
            <li key={i}><RevealText as="p" className={`hyi-p ${s.muted}`} text={n} delay={i * D} /></li>
          ))}
        </ul>
        <RevealBlock className={s.note}>
          <p className="hyi-p">This public summary excludes tax IDs, personal identifiers, bank details and other confidential information. Verify all figures against signed original statements before official publication.</p>
        </RevealBlock>
      </section>

   <Footer/>
    </main>
  );
}