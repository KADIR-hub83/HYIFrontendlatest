"use client";

import { useEffect, useRef } from "react";

const orbitItems = [
  { label: "LLM", angle: 0, radius: 43 },
  { label: "RAG", angle: 45, radius: 43 },
  { label: "Agents", angle: 90, radius: 43 },
  { label: "Vision", angle: 135, radius: 43 },
  { label: "Data", angle: 180, radius: 43 },
  { label: "API", angle: 225, radius: 43 },
  { label: "Safety", angle: 270, radius: 43 },
  { label: "Models", angle: 315, radius: 43 },
];

export default function GenerativeAICore() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current || window.innerWidth < 768) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * -6;

      ref.current.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative mx-auto h-[430px] w-full max-w-[850px] md:h-[610px]">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[110px] md:h-[600px] md:w-[600px]" />

      <div
        ref={ref}
        className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 [transform-style:preserve-3d] md:h-[510px] md:w-[510px]"
      >
        <div className="ai-orbit absolute inset-[2%] rounded-full border border-purple-300/10" />
        <div className="ai-orbit-reverse absolute inset-[13%] rounded-full border border-dashed border-purple-300/[0.09]" />
        <div className="ai-orbit-slow absolute inset-[25%] rounded-full border border-purple-300/[0.08]" />

        <div className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/10 bg-purple-500/[0.025] shadow-[0_0_80px_rgba(126,55,220,.15)]" />

        <svg
          viewBox="0 0 500 500"
          className="absolute inset-0 h-full w-full opacity-50"
        >
          <defs>
            <linearGradient id="ai-line">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
              <stop offset="50%" stopColor="#d8b4fe" stopOpacity=".7" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[
            [250, 250, 80, 90],
            [250, 250, 420, 105],
            [250, 250, 445, 250],
            [250, 250, 405, 395],
            [250, 250, 250, 445],
            [250, 250, 90, 400],
            [250, 250, 55, 250],
            [250, 250, 100, 105],
          ].map((line, i) => (
            <line
              key={i}
              x1={line[0]}
              y1={line[1]}
              x2={line[2]}
              y2={line[3]}
              stroke="url(#ai-line)"
              strokeWidth="1"
              strokeDasharray="4 8"
              className="ai-data-line"
            />
          ))}
        </svg>

        <div className="ai-core absolute left-1/2 top-1/2 flex h-[155px] w-[155px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-300/25 bg-[#09050f] shadow-[0_0_80px_rgba(168,85,247,.28)] md:h-[210px] md:w-[210px]">
          <div className="absolute inset-[9px] rounded-full border border-purple-400/10" />
          <div className="absolute inset-[24px] rounded-full border border-dashed border-purple-400/15 ai-inner-spin" />

          <div className="text-center">
            <div className="bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl">
              GenAI
            </div>

            <div className="mt-2 text-[6px] uppercase tracking-[2px] text-purple-200/30 md:text-[8px]">
              Intelligence Core
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-green-400" />
              <span className="text-[6px] uppercase tracking-[1px] text-green-300/35">
                Active
              </span>
            </div>
          </div>
        </div>

        {orbitItems.map((item) => {
          const rad = (item.angle * Math.PI) / 180;
          const left = 50 + Math.cos(rad) * item.radius;
          const top = 50 + Math.sin(rad) * item.radius;

          return (
            <div
              key={item.label}
              className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <div className="group rounded-xl border border-white/[0.08] bg-[#09070d]/90 px-3 py-2 backdrop-blur-xl transition hover:border-purple-300/30 hover:bg-purple-500/10 md:px-4">
                <div className="flex items-center gap-2">
                  <span className="h-[4px] w-[4px] rounded-full bg-purple-300 shadow-[0_0_8px_#c084fc]" />
                  <span className="whitespace-nowrap text-[7px] uppercase tracking-[1px] text-white/45 md:text-[9px]">
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-[5%] left-1/2 h-[70px] w-[75%] -translate-x-1/2 rounded-[50%] border border-purple-400/[0.07] [transform:translateX(-50%)_rotateX(70deg)]" />

      <style>{`
        @keyframes orbit {
          to { transform: rotate(360deg); }
        }

        @keyframes orbitReverse {
          to { transform: rotate(-360deg); }
        }

        @keyframes corePulse {
          0%,100% {
            box-shadow: 0 0 60px rgba(168,85,247,.18);
          }
          50% {
            box-shadow:
              0 0 90px rgba(168,85,247,.34),
              0 0 160px rgba(124,58,237,.12);
          }
        }

        @keyframes dataLine {
          0%,100% { opacity:.15; }
          50% { opacity:.8; }
        }

        .ai-orbit { animation: orbit 24s linear infinite; }
        .ai-orbit-reverse { animation: orbitReverse 18s linear infinite; }
        .ai-orbit-slow { animation: orbit 34s linear infinite; }
        .ai-inner-spin { animation: orbitReverse 12s linear infinite; }
        .ai-core { animation: corePulse 4s ease-in-out infinite; }
        .ai-data-line { animation: dataLine 3s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .ai-orbit,
          .ai-orbit-reverse,
          .ai-orbit-slow,
          .ai-inner-spin,
          .ai-core,
          .ai-data-line {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}