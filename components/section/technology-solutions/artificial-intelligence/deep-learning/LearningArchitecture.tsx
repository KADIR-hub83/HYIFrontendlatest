"use client";

import { motion } from "framer-motion";

const layers = [
  {
    number: "01",
    title: "Input Layer",
    subtitle: "Raw Intelligence",
    nodes: 5,
  },
  {
    number: "02",
    title: "Feature Layer",
    subtitle: "Pattern Extraction",
    nodes: 7,
  },
  {
    number: "03",
    title: "Deep Layer",
    subtitle: "Representation",
    nodes: 9,
  },
  {
    number: "04",
    title: "Reasoning Layer",
    subtitle: "Intelligence",
    nodes: 7,
  },
  {
    number: "05",
    title: "Output",
    subtitle: "Prediction",
    nodes: 4,
  },
];

export default function LearningArchitecture() {
  return (
    <section className="relative overflow-hidden bg-[#03050a] py-28 md:py-40">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <div className="text-[9px] uppercase tracking-[0.35em] text-cyan-300/50">
              Neural Architecture
            </div>

            <h2 className="mt-6 max-w-[600px] text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              From raw data to
              <span className="block text-cyan-300">machine intelligence.</span>
            </h2>
          </div>

          <p className="max-w-[600px] text-sm leading-7 text-white/40 md:text-base">
            Deep neural architectures progressively transform complex
            information into useful representations, predictions and automated
            decisions.
          </p>
        </div>

        <div className="relative mt-20 overflow-hidden rounded-[32px] border border-white/[0.07] bg-white/[0.018] p-5 md:p-12">
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

          <div className="relative flex min-h-[500px] items-center justify-between gap-2 overflow-x-auto">
            {layers.map((layer, layerIndex) => (
              <div
                key={layer.title}
                className="relative flex min-w-[130px] flex-1 flex-col items-center"
              >
                <div className="mb-8 text-center">
                  <div className="text-[8px] tracking-[0.3em] text-white/20">
                    {layer.number}
                  </div>

                  <div className="mt-2 text-xs text-white/65">
                    {layer.title}
                  </div>

                  <div className="mt-1 text-[8px] uppercase tracking-[0.18em] text-cyan-200/25">
                    {layer.subtitle}
                  </div>
                </div>

                <div className="flex h-[320px] flex-col justify-around">
                  {Array.from({ length: layer.nodes }).map((_, nodeIndex) => (
                    <motion.div
                      key={nodeIndex}
                      className="relative h-4 w-4 rounded-full border border-cyan-300/30 bg-[#07121c]"
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(34,211,238,0)",
                          "0 0 22px rgba(34,211,238,.7)",
                          "0 0 0 rgba(34,211,238,0)",
                        ],
                        scale: [1, 1.35, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: layerIndex * 0.35 + nodeIndex * 0.12,
                      }}
                    >
                      <div className="absolute inset-[4px] rounded-full bg-cyan-300" />
                    </motion.div>
                  ))}
                </div>

                {layerIndex !== layers.length - 1 && (
                  <div className="pointer-events-none absolute left-[68%] top-[53%] h-px w-[65%] bg-gradient-to-r from-cyan-400/40 to-blue-500/10">
                    <motion.span
                      className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]"
                      animate={{ left: ["0%", "100%"] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: layerIndex * 0.35,
                        ease: "linear",
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}