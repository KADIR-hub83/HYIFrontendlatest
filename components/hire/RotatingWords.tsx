"use client";
import { useEffect, useState } from "react";

// Keyframes live inside the component, so no external stylesheet is needed.
const CSS = `
@keyframes hyi-rw-in{from{transform:translateY(105%);opacity:0}to{transform:none;opacity:1}}
@keyframes hyi-rw-out{from{transform:none;opacity:1}to{transform:translateY(-105%);opacity:0}}
.hyi-rw-in{animation:hyi-rw-in .6s cubic-bezier(.2,.8,.2,1) both}
.hyi-rw-out{animation:hyi-rw-out .38s cubic-bezier(.5,0,1,1) both}
@media (prefers-reduced-motion:reduce){.hyi-rw-in,.hyi-rw-out{animation:none}}
`;

/**
 * Cycles through words: the current word slides OUT, then the next one slides IN.
 * Only ONE word is ever rendered, so words can never overlap.
 * An invisible copy of the longest word reserves the width so the layout never jumps.
 * `className` (e.g. "hyi-blue hyi-shimmer") is applied to the visible word.
 */
export default function RotatingWords({
  words,
  interval = 2400,
  className = "",
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const next = () => {
      setPhase("out");
      t = setTimeout(() => {
        setI((v) => (v + 1) % words.length);
        setPhase("in");
        t = setTimeout(next, interval);
      }, 380);
    };
    t = setTimeout(next, interval);
    return () => clearTimeout(t);
  }, [words.length, interval]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        verticalAlign: "bottom",
        overflow: "hidden",
        paddingBottom: "0.14em",
        marginBottom: "-0.14em",
      }}
    >
      <style>{CSS}</style>
      <span aria-hidden style={{ visibility: "hidden", display: "block", whiteSpace: "nowrap" }}>
        {longest}
      </span>
      <span
        key={`${i}-${phase}`}
        className={`hyi-rw-${phase} ${className}`}
        style={{ position: "absolute", left: 0, top: 0, whiteSpace: "nowrap" }}
      >
        {words[i]}
      </span>
    </span>
  );
}