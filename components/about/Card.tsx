"use client";
import { useRef, type CSSProperties, type PointerEvent, type ReactNode } from "react";

type Variant = "glass" | "neu" | "neu-in" | "clay" | "clay-soft";
const MAP: Record<Variant, string> = {
  glass: "hyi-glass",
  neu: "hyi-neu",
  "neu-in": "hyi-neu-in",
  clay: "hyi-clay",
  "clay-soft": "hyi-clay-soft",
};

/** Surface card with 3D mouse tilt + moving spotlight. */
export default function Card({
  variant = "glass",
  className = "",
  tilt = true,
  style,
  children,
}: {
  variant?: Variant;
  className?: string;
  tilt?: boolean;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--mx", `${x * 100}%`);
      el.style.setProperty("--my", `${y * 100}%`);
      if (tilt) {
        el.style.setProperty("--rx", `${(0.5 - y) * 8}deg`);
        el.style.setProperty("--ry", `${(x - 0.5) * 10}deg`);
      }
    });
  };
  const leave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onPointerMove={move}
      onPointerLeave={leave}
      style={style}
      className={`hyi-card ${MAP[variant]} p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}