"use client";
import { useEffect, useRef, type CSSProperties } from "react";

/** Words light up one by one as you scroll through the paragraph. */
export default function ScrollText({
  text,
  className = "hyi-h2 hyi-white",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const upd = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.35;
      const p = (start - r.top) / (r.height + (start - end));
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
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="hyi-sw" style={{ "--i": i / words.length } as CSSProperties}>
          {w}{" "}
        </span>
      ))}
    </p>
  );
}