"use client";

import { motion } from "framer-motion";

const nodes = [
  { name: "Customer", x: 15, y: 26 },
  { name: "Product", x: 76, y: 20 },
  { name: "Intent", x: 82, y: 66 },
  { name: "Context", x: 17, y: 73 },
  { name: "Sentiment", x: 49, y: 88 },
];

export default function SemanticGraph() {
  return (
    <section className="relative overflow-hidden bg-[#08060a] py-28 md:py-40">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-[8px] uppercase tracking-[0.35em] text-fuchsia-300/45">
              Semantic Intelligence
            </span>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.045em] md:text-7xl">
              Understand the
              <span className="block text-violet-300">meaning between words.</span>
            </h2>

            <p className="mt-8 max-w-[560px] text-sm leading-7 text-white/35 md:text-base">
              Language is more than individual words. HYI.AI models
              relationships between entities, context, intent and sentiment to
              build richer semantic understanding.
            </p>

            <div className="mt-10 space-y-3">
              {[
                "Context-aware language understanding",
                "Entity and relationship extraction",
                "Semantic representation & embeddings",
                "Domain-specific language intelligence",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/[0.05] py-4 text-sm text-white/45"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square">
            <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.08] blur-[100px]" />

            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
            >
              {nodes.map((node, index) => (
                <motion.line
                  key={node.name}
                  x1="50"
                  y1="50"
                  x2={node.x}
                  y2={node.y}
                  stroke="rgba(192,132,252,.25)"
                  strokeWidth=".2"
                  strokeDasharray="1 1.5"
                  animate={{ strokeDashoffset: [0, -10] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.2,
                  }}
                />
              ))}
            </svg>

            {nodes.map((node, index) => (
              <motion.div
                key={node.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: index * 0.35,
                }}
              >
                <div className="rounded-2xl border border-violet-300/[0.13] bg-[#0c0910]/90 px-4 py-3 text-[8px] uppercase tracking-[0.18em] text-violet-100/45 backdrop-blur-xl md:px-6 md:text-[9px]">
                  {node.name}
                </div>
              </motion.div>
            ))}

            <motion.div
              className="absolute left-1/2 top-1/2 flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-300/20 bg-[#08060c]"
              animate={{
                boxShadow: [
                  "0 0 30px rgba(168,85,247,.08)",
                  "0 0 90px rgba(168,85,247,.2)",
                  "0 0 30px rgba(168,85,247,.08)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <motion.div
                className="absolute inset-4 rounded-full border border-dashed border-fuchsia-300/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              />

              <div className="text-center">
                <span className="text-[7px] tracking-[0.3em] text-white/20">
                  HYI.AI
                </span>
                <div className="mt-2 text-2xl">Meaning</div>
                <div className="mt-2 text-[7px] tracking-[0.2em] text-violet-200/30">
                  SEMANTIC CORE
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}