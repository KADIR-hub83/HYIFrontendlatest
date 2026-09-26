"use client";

import { motion, useReducedMotion } from "framer-motion";

const words = [
  { text: "UNDERSTAND", x: "5%", y: "22%", delay: 0 },
  { text: "CONTEXT", x: "75%", y: "17%", delay: 0.3 },
  { text: "INTENT", x: "82%", y: "62%", delay: 0.6 },
  { text: "MEANING", x: "6%", y: "70%", delay: 0.9 },
  { text: "LANGUAGE", x: "41%", y: "2%", delay: 1.2 },
  { text: "SEMANTICS", x: "39%", y: "90%", delay: 1.5 },
];

const tokens = [
  "AI",
  "understands",
  "human",
  "language",
  "context",
  "intent",
];

export default function SemanticEngine() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto h-[560px] w-full max-w-[850px] md:h-[680px]">
      <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.12] blur-[130px]" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/[0.10]"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-fuchsia-300/[0.13]"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <svg
        viewBox="0 0 800 600"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient id="semanticLine">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity=".5" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[
          [100, 150],
          [400, 40],
          [700, 140],
          [720, 440],
          [400, 560],
          [90, 450],
        ].map(([x, y], index) => (
          <motion.line
            key={index}
            x1="400"
            y1="300"
            x2={x}
            y2={y}
            stroke="url(#semanticLine)"
            strokeWidth="1"
            strokeDasharray="5 8"
            animate={
              reduceMotion
                ? undefined
                : {
                    strokeDashoffset: [0, -100],
                    opacity: [0.2, 0.8, 0.2],
                  }
            }
            transition={{
              duration: 5,
              delay: index * 0.3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      {words.map((word) => (
        <motion.div
          key={word.text}
          className="absolute z-20 rounded-full border border-violet-300/[0.12] bg-[#09070d]/80 px-4 py-2 text-[8px] tracking-[0.25em] text-violet-100/40 backdrop-blur-xl md:text-[9px]"
          style={{ left: word.x, top: word.y }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -8, 0],
                  opacity: [0.35, 0.9, 0.35],
                }
          }
          transition={{
            duration: 4,
            delay: word.delay,
            repeat: Infinity,
          }}
        >
          {word.text}
        </motion.div>
      ))}

      <div className="absolute left-1/2 top-1/2 z-30 w-[88%] max-w-[590px] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="relative overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#070609]/90 p-5 shadow-2xl backdrop-blur-3xl md:p-8"
          animate={
            reduceMotion
              ? undefined
              : {
                  boxShadow: [
                    "0 0 50px rgba(168,85,247,.08)",
                    "0 0 100px rgba(168,85,247,.17)",
                    "0 0 50px rgba(168,85,247,.08)",
                  ],
                }
          }
          transition={{ duration: 5, repeat: Infinity }}
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-fuchsia-300" />
              </span>

              <span className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                Semantic Engine
              </span>
            </div>

            <span className="text-[7px] tracking-[0.2em] text-emerald-300/50">
              PROCESSING
            </span>
          </div>

          <div className="py-8 text-center">
            <div className="text-[8px] uppercase tracking-[0.3em] text-violet-200/25">
              Natural Language Input
            </div>

            <motion.p
              className="mt-5 text-xl font-light leading-relaxed text-white/80 md:text-3xl"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.6, 1, 0.6],
                    }
              }
              transition={{ duration: 4, repeat: Infinity }}
            >
              “AI understands human language.”
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {tokens.map((token, index) => (
              <motion.span
                key={token}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.15,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="rounded-lg border border-violet-300/[0.13] bg-violet-400/[0.04] px-3 py-2 text-[9px] text-violet-100/50"
              >
                {token}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-2">
            {[
              ["INTENT", "Inform"],
              ["SENTIMENT", "Positive"],
              ["CONFIDENCE", "98.4%"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-3 text-center"
              >
                <div className="text-[6px] tracking-[0.2em] text-white/20">
                  {label}
                </div>
                <div className="mt-2 text-[10px] text-white/60 md:text-xs">
                  {value}
                </div>
              </div>
            ))}
          </div>

          <motion.div
            className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300 to-transparent"
            animate={{ left: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ width: "50%" }}
          />
        </motion.div>
      </div>
    </div>
  );
}