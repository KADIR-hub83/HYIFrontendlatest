"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  CircleDot,
  Eye,
} from "lucide-react";

export default function AgentVisualExperience() {
  return (
    <section className="border-y border-white/[0.06] bg-[#07070A] py-32 md:py-44">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[36px] border border-white/[0.08] bg-black"
          >
            <div className="relative aspect-[1.2/1]">
              <Image
                src="/images/ai-agents/agent-future.jpg"
                alt="Futuristic artificial intelligence visualization"
                fill
                className="object-cover opacity-70"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#08050D]/70 via-transparent to-[#5E24C8]/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent" />

              <div className="absolute left-7 top-7 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">
                <CircleDot
                  size={9}
                  className="text-emerald-400"
                />
                <span className="text-[8px] tracking-[0.25em] text-white/45">
                  MULTIMODAL PERCEPTION
                </span>
              </div>

              <motion.div
                animate={{
                  top: ["12%", "82%", "12%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-[7%] right-[7%] h-px bg-gradient-to-r from-transparent via-violet-200/70 to-transparent shadow-[0_0_15px_rgba(196,181,253,.7)]"
              />

              <div className="absolute bottom-7 left-7 right-7 grid grid-cols-3 gap-2">
                {[
                  ["VISION", "ONLINE"],
                  ["CONTEXT", "SYNCED"],
                  ["REASONING", "ACTIVE"],
                ].map(([label, status]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl"
                  >
                    <p className="text-[7px] tracking-[0.2em] text-white/30">
                      {label}
                    </p>

                    <p className="mt-2 text-[9px] text-violet-200/70">
                      {status}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div>
            <span className="text-[9px] uppercase tracking-[0.42em] text-violet-300/55">
              05 / Multimodal Agents
            </span>

            <h2 className="mt-7 text-5xl font-medium leading-[0.98] tracking-[-0.055em] md:text-7xl">
              Agents that can
              <span className="block text-[#C5B7D7]/58">
                perceive context.
              </span>
            </h2>

            <p className="mt-8 max-w-[530px] text-base leading-8 text-[#D4CDDC]/58">
              Extend agent experiences beyond text by
              connecting models with documents, images,
              structured data and enterprise knowledge.
            </p>

            <div className="mt-10 space-y-3">
              {[
                "Visual information understanding",
                "Document and knowledge retrieval",
                "Context-aware reasoning",
                "Cross-system enterprise intelligence",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                >
                  <Eye
                    size={13}
                    className="text-violet-300/70"
                  />
                  <span className="text-sm text-[#DDD6E5]/55">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}