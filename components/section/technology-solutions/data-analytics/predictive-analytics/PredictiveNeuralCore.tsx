"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  CircleDot,
  Database,
  Sparkles,
  Target,
} from "lucide-react";

const nodes = [
  { x: 12, y: 20 },
  { x: 13, y: 48 },
  { x: 12, y: 76 },

  { x: 34, y: 14 },
  { x: 34, y: 37 },
  { x: 34, y: 62 },
  { x: 34, y: 84 },

  { x: 58, y: 25 },
  { x: 58, y: 50 },
  { x: 58, y: 75 },

  { x: 80, y: 36 },
  { x: 80, y: 64 },

  { x: 94, y: 50 },
];

export default function PredictiveNeuralCore() {
  return (
    <section className="bg-[#030303] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="text-center">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
            Model 06 · Predictive Neural Core
          </span>

          <h2 className="mx-auto mt-7 max-w-[1150px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            Signals become
            <span className="block text-white/50">
              probabilities.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] text-[15px] leading-8 text-white/60">
            Build predictive systems that continuously combine historical
            patterns with live context to produce decision-ready forecasts.
          </p>
        </div>

        <div className="relative mt-20 min-h-[650px] overflow-hidden rounded-[42px] border border-[#eee5ff]/10 bg-[#0a0a0c]">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eee5ff]/[0.045] blur-[140px]" />

          <div
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {nodes.slice(0, -1).map((node, index) => {
              const next = nodes[Math.min(index + 3, nodes.length - 1)];

              return (
                <motion.line
                  key={index}
                  x1={node.x}
                  y1={node.y}
                  x2={next.x}
                  y2={next.y}
                  stroke="rgba(238,229,255,.16)"
                  strokeWidth="0.15"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.04,
                  }}
                />
              );
            })}
          </svg>

          {nodes.map((node, index) => (
            <motion.div
              key={index}
              animate={{
                scale: [0.8, 1.35, 0.8],
                boxShadow: [
                  "0 0 8px rgba(238,229,255,.2)",
                  "0 0 25px rgba(238,229,255,.7)",
                  "0 0 8px rgba(238,229,255,.2)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.14,
              }}
              className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#eee5ff]/25 bg-[#15131a]"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#f3edff]" />
            </motion.div>
          ))}

          <div className="absolute left-[4%] top-1/2 hidden -translate-y-1/2 md:block">
            <div className="rounded-[24px] border border-white/[0.08] bg-black/50 p-5 backdrop-blur-xl">
              <Database size={15} className="text-[#eee5ff]/55" />

              <p className="mt-4 font-mono text-[7px] tracking-[0.2em] text-white/30">
                SIGNALS
              </p>
            </div>
          </div>

          <div className="absolute right-[2%] top-1/2 hidden -translate-y-1/2 md:block">
            <div className="rounded-[24px] border border-[#eee5ff]/15 bg-[#eee5ff]/[0.05] p-5 backdrop-blur-xl">
              <Target size={15} className="text-[#eee5ff]" />

              <p className="mt-4 font-mono text-[7px] tracking-[0.2em] text-white/40">
                PREDICTION
              </p>
            </div>
          </div>

          <motion.div
            animate={{
              x: ["0%", "800%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-[10%] top-1/2 h-[2px] w-[10%] bg-gradient-to-r from-transparent via-[#f3edff] to-transparent"
          />

          <div className="absolute bottom-7 left-7 flex items-center gap-3">
            <BrainCircuit size={13} className="text-[#eee5ff]/45" />

            <span className="font-mono text-[7px] tracking-[0.2em] text-white/30">
              ENSEMBLE PREDICTION NETWORK
            </span>
          </div>

          <Sparkles
            size={13}
            className="absolute right-8 top-8 text-[#eee5ff]/40"
          />
        </div>
      </div>
    </section>
  );
}