"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import data from "@/lotties/finance.json";

const A = data.animation;

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: A.threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, seen] as const;
}

/** Word-by-word text reveal, opacity 0 → 100. Pass hyi-h1 / hyi-p / hyi-white / hyi-blue via className. */
export function RevealText({
  text,
  as = "p",
  className = "",
  delay = 0,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
}) {
  const [ref, seen] = useInView<HTMLElement>();
  const Tag = as;
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            display: "inline-block",
            whiteSpace: "pre",
            opacity: seen ? A.opacityTo / 100 : A.opacityFrom / 100,
            transition: `opacity ${A.durationMs}ms ease`,
            transitionDelay: `${delay + i * A.wordStaggerMs}ms`,
          }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}

/** Whole-block fade, opacity 0 → 100. */
export function RevealBlock({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const [ref, seen] = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: seen ? A.opacityTo / 100 : A.opacityFrom / 100,
        transition: `opacity ${A.durationMs}ms ease`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}