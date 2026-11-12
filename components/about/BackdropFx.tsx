"use client";
import { useEffect, useRef, type CSSProperties } from "react";
import Cursor from "./Cursor";

/**
 * Drop inside <main className="hyi-bg">. Gives: scroll progress bar, custom cursor,
 * grid + parallax orbs, and sets --px --py --sy on the parent for mouse/scroll parallax.
 */
export default function BackdropFx() {
  const anchor = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = anchor.current?.parentElement;
    if (!el) return;
    let raf = 0, mx = 0, my = 0;
    const upd = () => {
      raf = 0;
      el.style.setProperty("--px", String(mx));
      el.style.setProperty("--py", String(my));
      const sy = window.scrollY;
      el.style.setProperty("--sy", String(sy));
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? sy / max : 0})`;
    };
    const sch = () => {
      if (!raf) raf = requestAnimationFrame(upd);
    };
    const mm = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth) * 2 - 1;
      my = (e.clientY / window.innerHeight) * 2 - 1;
      sch();
    };
    upd();
    window.addEventListener("mousemove", mm);
    window.addEventListener("scroll", sch, { passive: true });
    window.addEventListener("resize", sch);
    return () => {
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("scroll", sch);
      window.removeEventListener("resize", sch);
      cancelAnimationFrame(raf);
    };
  }, []);

  const orb = (k: number, s: number) => ({ "--k": k, "--s": s } as CSSProperties);

  return (
    <>
      <span ref={anchor} className="hidden" />
      <div ref={bar} className="hyi-progress" />
      <Cursor />
      <div className="hyi-grid" />
      <span className="hyi-orb a" style={orb(45, -0.1)} />
      <span className="hyi-orb b" style={orb(-60, -0.16)} />
      <span className="hyi-orb c" style={orb(35, -0.06)} />
    </>
  );
}