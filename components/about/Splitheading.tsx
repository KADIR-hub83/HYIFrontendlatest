"use client";
import { useEffect, useRef, useState, type ElementType } from "react";

/** Heading whose words slide up one by one when scrolled into view. */
export default function SplitHeading({
  text,
  accent = [],
  as = "h2",
  className = "hyi-h2 hyi-white",
  delay = 0,
}: {
  text: string;
  accent?: string[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
}) {
  const Tag = as as ElementType;
  const ref = useRef<HTMLHeadingElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="hyi-word">
          <span
            data-on={on}
            style={{ transitionDelay: `${delay + i * 70}ms` }}
            className={`hyi-word-in ${accent.includes(w.replace(/[,;:!?]+$/, "")) ? "hyi-blue" : ""}`}
          >
            {w}
          </span>
        </span>
      ))}
    </Tag>
  );
}