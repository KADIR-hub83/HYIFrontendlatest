"use client";
import { useEffect, useRef, useState } from "react";
import Counter from "@/components/about/Counter";
import { categories } from "@/components/data/Portfoliocontent";

/** Neumorphic progress bars that fill up when scrolled into view. */
export default function CategoryBars() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const max = Math.max(...categories.map((c) => c.count));

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
    <div ref={ref} className="space-y-5">
      {categories.map((c, i) => (
        <div key={c.name}>
          <div className="mb-2 flex items-center justify-between">
            <span className="hyi-h3 hyi-white">
              {c.icon} {c.name}
            </span>
            <span className="hyi-h3 hyi-blue">
              <Counter to={c.count} duration={1200} />
            </span>
          </div>
          <div className="hyi-neu-in h-5 !rounded-full p-1">
            <div
              className="hyi-bar h-full rounded-full"
              style={{ width: on ? `${(c.count / max) * 100}%` : "0%", transitionDelay: `${i * 80}ms` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}