"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

const orbitLabels = [
  { label: "VISION", angle: 0 },
  { label: "NLP", angle: 60 },
  { label: "PREDICT", angle: 120 },
  { label: "GEN AI", angle: 180 },
  { label: "SIGNALS", angle: 240 },
  { label: "MODELS", angle: 300 },
];

export default function NeuralBrain() {
  const reduceMotion = useReducedMotion();

  const nodes = useMemo(
    () =>
      Array.from({ length: 34 }, (_, i) => {
        const angle = (i / 34) * Math.PI * 2;
        const radius = 82 + (i % 5) * 17;

        return {
          id: i,
          x: 250 + Math.cos(angle * 1.7) * radius,
          y: 250 + Math.sin(angle * 1.35) * radius,
          r: i % 6 === 0 ? 4 : i % 3 === 0 ? 3 : 2,
        };
      }),
    []
  );

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[650px]">
      {/* ambient light */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]"
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [0.9, 1.15, 0.9],
                opacity: [0.3, 0.75, 0.3],
              }
        }
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.div
        className="absolute inset-[7%] rounded-full border border-blue-400/10"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-[15%] rounded-full border border-dashed border-cyan-400/15"
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-[23%] rounded-full border border-violet-400/20"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      {/* orbital markers */}
      <div className="absolute inset-0">
        {orbitLabels.map((item) => {
          const radius = 43;
          const rad = (item.angle * Math.PI) / 180;
          const left = 50 + Math.cos(rad) * radius;
          const top = 50 + Math.sin(rad) * radius;

          return (
            <motion.div
              key={item.label}
              className="absolute z-30 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15 bg-[#050811]/80 px-3 py-1.5 text-[8px] tracking-[0.24em] text-cyan-100/45 backdrop-blur-xl"
              style={{ left: `${left}%`, top: `${top}%` }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -5, 0],
                      opacity: [0.45, 1, 0.45],
                    }
              }
              transition={{
                duration: 3 + item.angle / 200,
                repeat: Infinity,
                delay: item.angle / 300,
              }}
            >
              {item.label}
            </motion.div>
          );
        })}
      </div>

      {/* neural SVG */}
      <motion.svg
        viewBox="0 0 500 500"
        className="absolute inset-[11%] h-[78%] w-[78%]"
        animate={reduceMotion ? undefined : { rotate: [0, 1.5, 0, -1.5, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      >
        <defs>
          <linearGradient id="neuralLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563eb" stopOpacity=".08" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity=".55" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity=".08" />
          </linearGradient>

          <radialGradient id="brainCore">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity=".28" />
            <stop offset="45%" stopColor="#2563eb" stopOpacity=".12" />
            <stop offset="100%" stopColor="#020308" stopOpacity="0" />
          </radialGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="250" cy="250" r="145" fill="url(#brainCore)" />

        {nodes.map((node, i) => {
          const next = nodes[(i + 4 + (i % 5)) % nodes.length];

          return (
            <motion.line
              key={`line-${node.id}`}
              x1={node.x}
              y1={node.y}
              x2={next.x}
              y2={next.y}
              stroke="url(#neuralLine)"
              strokeWidth=".8"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.12, 0.8, 0.12],
                    }
              }
              transition={{
                duration: 2.5 + (i % 4),
                repeat: Infinity,
                delay: i * 0.06,
              }}
            />
          );
        })}

        {nodes.map((node, i) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={i % 3 === 0 ? "#22d3ee" : "#60a5fa"}
            filter="url(#glow)"
            animate={
              reduceMotion
                ? undefined
                : {
                    r: [node.r, node.r * 2.2, node.r],
                    opacity: [0.3, 1, 0.3],
                  }
            }
            transition={{
              duration: 1.8 + (i % 4) * 0.4,
              repeat: Infinity,
              delay: i * 0.08,
            }}
          />
        ))}

        {/* brain hemispheres */}
        <motion.path
          d="M248 135 C205 115 155 148 155 198 C126 214 130 270 158 286 C145 330 187 369 225 350 C235 373 248 365 248 340 Z"
          fill="rgba(37,99,235,.07)"
          stroke="rgba(96,165,250,.65)"
          strokeWidth="1.2"
          strokeDasharray="5 7"
          animate={
            reduceMotion
              ? undefined
              : { strokeDashoffset: [0, -100] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />

        <motion.path
          d="M252 135 C295 115 345 148 345 198 C374 214 370 270 342 286 C355 330 313 369 275 350 C265 373 252 365 252 340 Z"
          fill="rgba(139,92,246,.06)"
          stroke="rgba(34,211,238,.65)"
          strokeWidth="1.2"
          strokeDasharray="5 7"
          animate={
            reduceMotion
              ? undefined
              : { strokeDashoffset: [0, 100] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>

      {/* center */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-20 flex h-[25%] w-[25%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/25 bg-[#030713]/80 backdrop-blur-2xl"
        style={{
          boxShadow:
            "0 0 70px rgba(34,211,238,.12), inset 0 0 35px rgba(59,130,246,.10)",
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 50px rgba(34,211,238,.08)",
                  "0 0 100px rgba(34,211,238,.22)",
                  "0 0 50px rgba(34,211,238,.08)",
                ],
              }
        }
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <div className="text-center">
          <div className="text-[8px] tracking-[0.35em] text-cyan-200/35">
            HYI.AI
          </div>
          <div className="mt-2 text-2xl font-semibold md:text-4xl">DL</div>
          <div className="mt-1 text-[8px] tracking-[0.2em] text-blue-200/45">
            NEURAL CORE
          </div>
        </div>
      </motion.div>
    </div>
  );
}