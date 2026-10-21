// "use client";

// import React, { ReactNode, useCallback, useEffect, useRef } from "react";

// interface CustomSwiperProps {
//   items: ReactNode[];
//   speed?: number;
//   height?: string;
//   hasOnHoverStop?: boolean;
//   slideFromRightToLeft?: boolean;
//   minWidth?: string;
//   gapBetweenItems?: string;
// }

// export default function CustomSwiper({
//   items,
//   speed = 1,
//   height = "h-30",
//   hasOnHoverStop = true,
//   slideFromRightToLeft = true,
//   minWidth = "min-w-[250px]",
//   gapBetweenItems = "gap-5",
// }: CustomSwiperProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const track1Ref = useRef<HTMLDivElement>(null);
//   const track2Ref = useRef<HTMLDivElement>(null);
//   const animationFrameId = useRef<number | null>(null);

//   const isPaused = useRef(false);
//   const pos1 = useRef(0);
//   const pos2 = useRef(0);
//   const trackWidth = useRef(0);

//   const animate = useCallback(() => {
//     if (!track1Ref.current || !track2Ref.current || isPaused.current) return;

//     const direction = slideFromRightToLeft ? -1 : 1;

//     pos1.current += speed * direction;
//     pos2.current += speed * direction;

//     if (slideFromRightToLeft) {
//       if (pos1.current <= -trackWidth.current) {
//         pos1.current = pos2.current + trackWidth.current;
//       }
//       if (pos2.current <= -trackWidth.current) {
//         pos2.current = pos1.current + trackWidth.current;
//       }
//     } else {
//       if (pos1.current >= trackWidth.current) {
//         pos1.current = pos2.current - trackWidth.current;
//       }
//       if (pos2.current >= trackWidth.current) {
//         pos2.current = pos1.current - trackWidth.current;
//       }
//     }

//     track1Ref.current.style.transform = `translateX(${pos1.current}px)`;
//     track2Ref.current.style.transform = `translateX(${pos2.current}px)`;

//     animationFrameId.current = requestAnimationFrame(animate);
//   }, [slideFromRightToLeft, speed]);

//   useEffect(() => {
//     const init = () => {
//       if (track1Ref.current) {
//         trackWidth.current = track1Ref.current.offsetWidth;
//         pos1.current = 0;
//         pos2.current = trackWidth.current;
//         animationFrameId.current = requestAnimationFrame(animate);
//       }
//     };

//     requestAnimationFrame(init);

//     return () => {
//       if (animationFrameId.current)
//         cancelAnimationFrame(animationFrameId.current);
//     };
//   }, [animate]);

//   const handleMouseEnter = () => {
//     isPaused.current = true;
//     if (animationFrameId.current)
//       cancelAnimationFrame(animationFrameId.current);
//   };

//   const handleMouseLeave = () => {
//     isPaused.current = false;
//     animationFrameId.current = requestAnimationFrame(animate);
//   };

//   return (
//     <div
//       ref={containerRef}
//       className={`relative overflow-hidden w-full ${height}`}
//       onMouseEnter={hasOnHoverStop ? handleMouseEnter : undefined}
//       onMouseLeave={hasOnHoverStop ? handleMouseLeave : undefined}
//     >
//       <div
//         ref={track1Ref}
//         className={`flex absolute top-0 left-0 items-center ${height} ${gapBetweenItems}`}
//         style={{ willChange: "transform" }}
//       >
//         <>
//           {items.map((item, i) => (
//             <div
//               key={`track1-${i}`}
//               className={`flex items-center justify-center text-xl font-semibold whitespace-nowrap ${minWidth}`}
//             >
//               {item}
//             </div>
//           ))}
//           <div className="w-fit" />
//         </>
//       </div>

//       <div
//         ref={track2Ref}
//         className={`flex absolute top-0 left-0 items-center ${height} ${gapBetweenItems}`}
//         style={{ willChange: "transform" }}
//       >
//         {items.map((item, i) => (
//           <div
//             key={`track2-${i}`}
//             className={`flex items-center justify-center text-xl font-semibold whitespace-nowrap ${minWidth}`}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


"use client";

import React, {
  PointerEvent as ReactPointerEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

/**
 * CustomSwiper — premium infinite marquee
 * ---------------------------------------------------------------------------
 * - Frame-rate independent (time based), so it runs the same on 60Hz / 120Hz
 * - Seamless loop: copies are measured + repeated automatically, so there are
 *   never gaps, even with only 3–4 cards on a very wide screen
 * - Hover does a smooth slow-down (no abrupt stop) and smooth speed-up on leave
 * - Drag / swipe with inertia (mouse + touch). Clicks still work on cards;
 *   a drag never triggers a click
 * - Scroll-reactive: scrolling the page makes the marquee surge for a moment
 * - Soft edge fade, pauses when off-screen, respects reduced-motion
 *
 * Fully backwards compatible with the old props.
 */

interface CustomSwiperProps {
  items: ReactNode[];
  speed?: number; // roughly "px per frame at 60fps", same meaning as before
  height?: string;
  hasOnHoverStop?: boolean;
  slideFromRightToLeft?: boolean;
  minWidth?: string;
  gapBetweenItems?: string;

  // new, all optional
  draggable?: boolean;
  reactToScroll?: boolean;
  edgeFade?: boolean;
  className?: string;
}

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

export default function CustomSwiper({
  items,
  speed = 1,
  height = "h-30",
  hasOnHoverStop = true,
  slideFromRightToLeft = true,
  minWidth = "min-w-[250px]",
  gapBetweenItems = "gap-5",
  draggable = true,
  reactToScroll = true,
  edgeFade = true,
  className = "",
}: CustomSwiperProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const copyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [copies, setCopies] = useState(2);

  // mutable animation state (kept in a ref -> no re-renders per frame)
  const st = useRef({
    pos: 0,
    vel: 0,
    period: 0,
    hovered: false,
    dragging: false,
    captured: false,
    moved: 0,
    lastX: 0,
    lastT: 0,
    visible: true,
  });

  /* ---- measure one loop length and repeat enough copies to fill the screen ---- */
  useEffect(() => {
    const measure = () => {
      const wrap = wrapRef.current;
      const a = copyRefs.current[0];
      const b = copyRefs.current[1];
      if (!wrap || !a || !b) return;

      const period = b.offsetLeft - a.offsetLeft;
      if (period <= 0) return;

      st.current.period = period;
      const need = Math.max(2, Math.ceil(wrap.offsetWidth / period) + 1);
      setCopies((c) => (c === need ? c : need));
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    if (copyRefs.current[0]) ro.observe(copyRefs.current[0]);

    return () => ro.disconnect();
  }, [items.length, copies]);

  /* ---- visibility: don't animate while off-screen ---- */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(([entry]) => {
      st.current.visible = entry.isIntersecting;
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ---- main animation loop ---- */
  useEffect(() => {
    const s = st.current;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const dir = slideFromRightToLeft ? 1 : -1; // vel > 0  =>  moves left
    const base = speed * 60; // px / second

    let raf = 0;
    let last = performance.now();
    let lastScroll = window.scrollY;

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);

      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const y = window.scrollY;
      const scrollSpeed = dt > 0 ? Math.abs(y - lastScroll) / dt : 0;
      lastScroll = y;

      if (!s.visible || !s.period || !trackRef.current) return;

      if (!s.dragging) {
        let target = reduce ? 0 : base * dir;

        if (!reduce && reactToScroll) {
          target += dir * clamp(scrollSpeed * 0.12, 0, 500);
        }
        if (hasOnHoverStop && s.hovered) target = 0;

        // smooth ease towards the target velocity (slow-down / speed-up)
        s.vel += (target - s.vel) * Math.min(1, dt * 5);
        s.pos -= s.vel * dt;
      }

      // keep position inside (-period, 0]
      const q = (((-s.pos % s.period) + s.period) % s.period);
      s.pos = -q;

      trackRef.current.style.transform = `translate3d(${s.pos}px,0,0)`;
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed, slideFromRightToLeft, hasOnHoverStop, reactToScroll]);

  /* ---- pointer handlers (hover + drag with inertia) ---- */
  const onPointerEnter = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") st.current.hovered = true;
  };

  const onPointerLeave = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") st.current.hovered = false;
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggable) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;

    const s = st.current;
    s.dragging = true;
    s.captured = false;
    s.moved = 0;
    s.lastX = e.clientX;
    s.lastT = performance.now();
    s.vel = 0;
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const s = st.current;
    if (!s.dragging) return;

    const dx = e.clientX - s.lastX;
    const now = performance.now();
    const dtm = (now - s.lastT) / 1000;

    s.moved += Math.abs(dx);
    s.pos += dx;

    // only capture the pointer once it is clearly a drag,
    // so normal clicks on the cards keep working
    if (!s.captured && s.moved > 6) {
      s.captured = true;
      wrapRef.current?.setPointerCapture(e.pointerId);
    }

    if (dtm > 0) {
      const instant = -dx / dtm;
      s.vel = s.vel * 0.6 + instant * 0.4;
    }

    s.lastX = e.clientX;
    s.lastT = now;
  };

  const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    const s = st.current;
    if (!s.dragging) return;
    s.dragging = false;

    if (s.captured) {
      wrapRef.current?.releasePointerCapture?.(e.pointerId);
    }
    // velocity is kept -> the marquee "flicks" and then eases back to normal speed
    s.vel = clamp(s.vel, -2500, 2500);
  };

  // a drag must never count as a click on a card
  const onClickCapture = (e: React.MouseEvent) => {
    if (st.current.moved > 6) {
      e.stopPropagation();
      e.preventDefault();
      st.current.moved = 0;
    }
  };

  if (!items.length) return null;

  const fade = edgeFade
    ? "linear-gradient(90deg, transparent 0%, #000 9%, #000 91%, transparent 100%)"
    : undefined;

  return (
    <div
      ref={wrapRef}
      className={`relative w-full select-none overflow-hidden ${height} ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      } ${className}`}
      style={{
        touchAction: "pan-y",
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
      <div
        ref={trackRef}
        className={`absolute left-0 top-0 flex h-full w-max items-center ${gapBetweenItems}`}
        style={{ willChange: "transform" }}
      >
        {Array.from({ length: copies }).map((_, c) => (
          <div
            key={`copy-${c}`}
            ref={(el) => {
              copyRefs.current[c] = el;
            }}
            className={`flex shrink-0 items-center ${gapBetweenItems}`}
          >
            {items.map((item, i) => (
              <div
                key={`copy-${c}-${i}`}
                className={`flex shrink-0 items-center justify-center whitespace-nowrap text-xl font-semibold ${minWidth}`}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}