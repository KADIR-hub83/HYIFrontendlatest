"use client";
import { useEffect, useRef, useState } from "react";

const CH = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%&*+";

/** Text that "decodes" itself when it scrolls into view and again on hover. */
export default function Scramble({ text, className = "" }: { text: string; className?: string }) {
  const [out, setOut] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const timer = useRef(0);

  const run = () => {
    window.clearInterval(timer.current);
    let f = 0;
    timer.current = window.setInterval(() => {
      f++;
      const reveal = Math.floor(f / 2);
      setOut(
        text
          .split("")
          .map((c, i) => (c === " " || i < reveal ? c : CH[Math.floor(Math.random() * CH.length)]))
          .join("")
      );
      if (reveal >= text.length) {
        window.clearInterval(timer.current);
        setOut(text);
      }
    }, 35);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span ref={ref} className={className} onMouseEnter={run} aria-label={text}>
      {out}
    </span>
  );
}