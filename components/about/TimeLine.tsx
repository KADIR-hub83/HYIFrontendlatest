"use client";
import { useEffect, useRef, type CSSProperties } from "react";
import Card from "./Card";
import Reveal from "./Reveal";

export default function Timeline({ items }: { items: { label: string; paras: string[] }[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const upd = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const p = (window.innerHeight * 0.6 - r.top) / r.height;
      el.style.setProperty("--p", String(Math.min(1, Math.max(0, p))));
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(upd);
    };
    upd();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-5 top-0 h-full w-px bg-white/10 md:left-1/2" />
      <div className="hyi-tl-fill absolute left-5 top-0 -ml-[1px] h-full w-[3px] rounded-full md:left-1/2" />

      <div className="space-y-16">
        {items.map((it, i) => {
          const left = i % 2 === 0;
          return (
            <div key={it.label} className="relative grid md:grid-cols-2">
              <span
                className="hyi-tl-dot absolute left-5 top-9 -ml-2 md:left-1/2"
                style={{ "--t": i / items.length } as CSSProperties}
              />
              <div className={`pl-14 md:pl-0 ${left ? "md:pr-14" : "md:col-start-2 md:pl-14"}`}>
                <Reveal from={left ? "left" : "right"}>
                  <Card variant={i % 2 ? "clay-soft" : "glass"}>
                    <p className="hyi-eyebrow mb-4">{it.label}</p>
                    <div className="space-y-5">
                      {it.paras.map((t, k) => (
                        <p key={k} className={t.length < 70 ? "hyi-h3 hyi-blue" : "hyi-p"}>
                          {t}
                        </p>
                      ))}
                    </div>
                  </Card>
                </Reveal>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}