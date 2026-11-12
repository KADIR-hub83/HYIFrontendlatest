"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { LottieRefCurrentProps } from "lottie-react";

// lottie-web needs the browser, so load it client-side only
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const cache = new Map<string, Promise<object>>();
function load(src: string) {
  if (!cache.has(src)) {
    cache.set(
      src,
      fetch(src).then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
    );
  }
  return cache.get(src)!;
}

/**
 * Plays /public/lotties/<name>.json  (the file MUST be inside the `public` folder).
 * Plays only while visible, speeds up on hover. Shows a placeholder + console error if the file is missing.
 */
export default function LottiePlayer({
  name,
  className = "",
  speed = 1,
  hoverSpeed = 2.2,
  loop = true,
}: {
  name: string;
  className?: string;
  speed?: number;
  hoverSpeed?: number;
  loop?: boolean;
}) {
  const [data, setData] = useState<object | null>(null);
  const [failed, setFailed] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const ref = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    let ok = true;
    const src = `/lotties/${name}.json`;
    setFailed(false);
    load(src)
      .then((d) => ok && setData(d))
      .catch((err) => {
        cache.delete(src);
        console.error(`[LottiePlayer] Lottie not found or invalid: ${src} (${err}). Put the file in public/lotties/.`);
        if (ok) setFailed(true);
      });
    return () => {
      ok = false;
    };
  }, [name]);

  useEffect(() => {
    if (!data || !box.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        const l = ref.current;
        if (!l) return;
        l.setSpeed(speed);
        if (e.isIntersecting) l.play();
        else l.pause();
      },
      { threshold: 0.1 }
    );
    io.observe(box.current);
    return () => io.disconnect();
  }, [data, speed]);

  return (
    <div
      ref={box}
      className={className}
      onMouseEnter={() => ref.current?.setSpeed(hoverSpeed)}
      onMouseLeave={() => ref.current?.setSpeed(speed)}
    >
      {data ? (
        <Lottie
          animationData={data}
          loop={loop}
          autoplay
          lottieRef={ref}
          style={{ width: "100%", height: "100%" }}
          rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span
            className={`hyi-pulse block h-10 w-10 rounded-full border-2 ${failed ? "border-red-400/70" : "border-[#4f9dff]/60"}`}
            title={failed ? `Missing /lotties/${name}.json` : "Loading…"}
          />
        </div>
      )}
    </div>
  );
}