"use client";

import React, {
  MouseEvent as ReactMouseEvent,
  KeyboardEvent as ReactKeyboardEvent,
  PointerEvent as ReactPointerEvent,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

/**
 * TalentCarousel3D
 * ---------------------------------------------------------------------------
 * A real 3D cylinder carousel (not a flat marquee):
 *  - cards sit on a curved ring in perspective; the one in front is bright and
 *    sharp, the ones around it fade and dim with depth
 *  - slow auto-rotation, smooth slow-down on hover
 *  - drag / swipe with inertia (mouse + touch)
 *  - click a side card -> it glides to the front (click the front card -> opens
 *    the profile, handled by the card itself)
 *  - prev / next buttons + arrow keys, live counter
 *  - cinematic entrance (ring swings in), stage light beam + floor glow
 *  - scroll-reactive, pauses off-screen, respects reduced-motion
 */

const CARD_W = 320;
const CARD_H = 200;
const GAP = 18;
const MIN_SLOTS = 14; // minimum cards on the ring (items are repeated to fill it)
const AUTO_SPEED = -4.5; // degrees / second (negative = drifts to the left)

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const wrap180 = (a: number) => ((((a + 180) % 360) + 360) % 360) - 180;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);

interface Props {
  items: ReactNode[];
  className?: string;
}

export default function TalentCarousel3D({ items, className = "" }: Props) {
  const n = items.length;

  const total = useMemo(
    () => (n ? n * Math.ceil(MIN_SLOTS / n) : 0),
    [n]
  );
  const step = total ? 360 / total : 0;
  const radius = Math.round(((CARD_W + GAP) * total) / (2 * Math.PI));
  const degPerPx = step / (CARD_W + GAP);

  const ringRef = useRef<HTMLDivElement>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);

  const s = useRef({
    rot: 0,
    vel: 0,
    hovered: false,
    dragging: false,
    captured: false,
    moved: 0,
    lastX: 0,
    lastT: 0,
    visible: false,
    started: false,
    pauseUntil: 0,
    tween: null as null | { from: number; to: number; t0: number; dur: number },
  });

  /* ---------------------------- animation loop ---------------------------- */
  useEffect(() => {
    if (!total) return;
    const st = s.current;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let last = performance.now();
    let lastScroll = window.scrollY;

    const apply = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translateZ(${-radius}px) rotateY(${st.rot}deg)`;
      }

      for (let i = 0; i < total; i++) {
        const el = slotRefs.current[i];
        if (!el) continue;
        const rel = wrap180(i * step + st.rot);
        const abs = Math.abs(rel);
        const o = clamp(1 - (abs - 18) / 60, 0, 1);
        el.style.opacity = o.toFixed(3);
        el.style.visibility = o < 0.01 ? "hidden" : "visible";
        el.style.pointerEvents = abs > 80 ? "none" : "auto";
        el.style.setProperty("--dim", (clamp(abs / 75, 0, 1) * 0.6).toFixed(3));
      }

      const front = Math.round(-st.rot / step);
      const slot = ((front % total) + total) % total;
      setIndex(slot % n);
    };

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);

      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const y = window.scrollY;
      const scrollSpeed = dt > 0 ? Math.abs(y - lastScroll) / dt : 0;
      lastScroll = y;

      if (!st.visible) return;

      if (st.tween) {
        const p = clamp((now - st.tween.t0) / st.tween.dur, 0, 1);
        st.rot = st.tween.from + (st.tween.to - st.tween.from) * easeOut(p);
        st.vel = 0;
        if (p >= 1) st.tween = null;
      } else if (!st.dragging) {
        let target = AUTO_SPEED;
        if (reduce || now < st.pauseUntil || st.hovered) target = 0;
        if (!reduce && target !== 0) {
          target -= clamp(scrollSpeed * 0.02, 0, 14); // surge when the page scrolls
        }
        st.vel += (target - st.vel) * Math.min(1, dt * 3);
        st.rot += st.vel * dt;
      }

      apply();
    };

    // start when first visible (entrance animation)
    const io = new IntersectionObserver(([entry]) => {
      st.visible = entry.isIntersecting;
      if (entry.isIntersecting && !st.started) {
        st.started = true;
        setReady(true);
        if (!reduce) {
          st.rot = 55;
          st.tween = { from: 55, to: 0, t0: performance.now(), dur: 2000 };
        }
        apply();
      }
    });
    if (ringRef.current?.parentElement) io.observe(ringRef.current.parentElement);

    apply();
    raf = requestAnimationFrame(tick);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [total, step, radius, n]);

  /* ------------------------------- controls ------------------------------- */
  const tweenTo = (to: number, dur = 900) => {
    const st = s.current;
    st.tween = { from: st.rot, to, t0: performance.now(), dur };
    st.pauseUntil = performance.now() + 4500;
  };

  const goBy = (dir: 1 | -1) => {
    const st = s.current;
    const f = Math.round(-st.rot / step);
    tweenTo(-(f + dir) * step);
  };

  const onKeyDown = (e: ReactKeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goBy(1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goBy(-1);
    }
  };

  /* ------------------------------ pointer drag ---------------------------- */
  const stageRef = useRef<HTMLDivElement>(null);

  const onPointerEnter = (e: ReactPointerEvent) => {
    if (e.pointerType === "mouse") s.current.hovered = true;
  };
  const onPointerLeave = (e: ReactPointerEvent) => {
    if (e.pointerType === "mouse") s.current.hovered = false;
  };

  const onPointerDown = (e: ReactPointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const st = s.current;
    st.dragging = true;
    st.captured = false;
    st.moved = 0;
    st.lastX = e.clientX;
    st.lastT = performance.now();
    st.vel = 0;
    st.tween = null;
  };

  const onPointerMove = (e: ReactPointerEvent) => {
    const st = s.current;
    if (!st.dragging) return;

    const dx = e.clientX - st.lastX;
    const now = performance.now();
    const dtm = (now - st.lastT) / 1000;

    st.moved += Math.abs(dx);
    st.rot += dx * degPerPx;

    if (!st.captured && st.moved > 6) {
      st.captured = true;
      stageRef.current?.setPointerCapture(e.pointerId);
    }
    if (dtm > 0) {
      st.vel = st.vel * 0.6 + ((dx * degPerPx) / dtm) * 0.4;
    }
    st.lastX = e.clientX;
    st.lastT = now;
  };

  const endDrag = (e: ReactPointerEvent) => {
    const st = s.current;
    if (!st.dragging) return;
    st.dragging = false;
    if (st.captured) stageRef.current?.releasePointerCapture?.(e.pointerId);
    st.vel = clamp(st.vel, -140, 140);
  };

  const onClickCapture = (e: ReactMouseEvent) => {
    const st = s.current;

    // a drag must never count as a click
    if (st.moved > 6) {
      e.stopPropagation();
      e.preventDefault();
      st.moved = 0;
      return;
    }

    // clicking a side card brings it to the front instead of opening it
    const slotEl = (e.target as HTMLElement).closest("[data-slot]") as HTMLElement | null;
    if (!slotEl) return;
    const i = Number(slotEl.dataset.slot);
    const rel = wrap180(i * step + st.rot);
    if (Math.abs(rel) > step * 0.45) {
      e.stopPropagation();
      e.preventDefault();
      tweenTo(st.rot - rel);
    }
  };

  if (!n) return null;

  const fade =
    "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Verified talents"
      className={`relative w-full ${className}`}
      onKeyDown={onKeyDown}
    >
      {/* stage */}
      <div
        ref={stageRef}
        className={`relative h-[330px] w-full cursor-grab touch-pan-y select-none overflow-hidden transition-opacity duration-1000 active:cursor-grabbing md:h-[370px] ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        style={{
          perspective: "1900px",
          perspectiveOrigin: "50% 38%",
          WebkitMaskImage: fade,
          maskImage: fade,
        }}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
      >
        {/* light beam from above */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[80%] w-[460px] -translate-x-1/2 bg-gradient-to-b from-violet-400/25 via-violet-500/10 to-transparent blur-2xl"
          style={{ clipPath: "polygon(36% 0, 64% 0, 100% 100%, 0 100%)" }}
        />
        {/* floor glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-2 left-1/2 h-24 w-[72%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.45),transparent_70%)] blur-xl"
        />
        {/* floor line */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-[34px] h-px bg-gradient-to-r from-transparent via-violet-300/25 to-transparent"
        />

        {/* the ring */}
        <div
          ref={ringRef}
          className="absolute left-1/2 top-[44%] h-0 w-0"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(${-radius}px) rotateY(0deg)`,
          }}
        >
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              data-slot={i}
              ref={(el) => {
                slotRefs.current[i] = el;
              }}
              className="absolute"
              style={{
                width: CARD_W,
                height: CARD_H,
                left: -CARD_W / 2,
                top: -CARD_H / 2,
                transform: `rotateY(${i * step}deg) translateZ(${radius}px)`,
                backfaceVisibility: "hidden",
                willChange: "opacity",
              }}
            >
              {items[i % n]}
              {/* depth dimming overlay */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[22px] bg-[#06030b]"
                style={{ opacity: "var(--dim, 0)" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* controls */}
      {/* <div className="mt-2 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Previous talent"
          onClick={() => goBy(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/15 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>

        <p className="min-w-[84px] text-center font-mono text-[12px] tracking-[0.28em] text-white/60">
          <span className="text-white">{String(index + 1).padStart(2, "0")}</span>
          <span className="mx-2 text-white/25">/</span>
          {String(n).padStart(2, "0")}
        </p>

        <button
          type="button"
          aria-label="Next talent"
          onClick={() => goBy(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 backdrop-blur transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/15 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div> */}
    </div>
  );
}