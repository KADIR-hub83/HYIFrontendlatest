"use client";

import { motion } from "framer-motion";
import {
  BellRing,
  BrainCircuit,
  Cloud,
  Database,
  RadioTower,
  Zap,
} from "lucide-react";

const layers = [
  {
    Icon: Cloud,
    title: "Event Sources",
    text: "Applications, devices, transactions, APIs and operational systems continuously produce events.",
  },
  {
    Icon: RadioTower,
    title: "Streaming Layer",
    text: "Event streams move through distributed messaging infrastructure for continuous processing.",
  },
  {
    Icon: Zap,
    title: "Processing",
    text: "Transform, enrich, aggregate and evaluate events as they move through the system.",
  },
  {
    Icon: BrainCircuit,
    title: "Intelligence",
    text: "Models, rules and analytics identify anomalies, patterns and meaningful signals.",
  },
  {
    Icon: BellRing,
    title: "Action",
    text: "Dashboards, alerts and downstream applications receive continuously updated results.",
  },
];

export default function StreamingArchitecture() {
  return (
    <section
      id="streaming-architecture"
      className="border-t border-white/[0.06] bg-[#050505] py-28"
    >
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-[#e8def3]/40">
              Streaming Architecture
            </p>

            <h2 className="mt-5 max-w-[650px] text-4xl font-medium tracking-[-0.05em] md:text-6xl">
              Data in motion.
              <span className="block text-white/35">
                Intelligence in motion.
              </span>
            </h2>
          </div>

          <p className="max-w-[600px] text-[12px] leading-7 text-white/50 lg:ml-auto lg:pt-12">
            Real-time analytics continuously processes events as they arrive,
            allowing operational views and automated systems to react to
            changing conditions without waiting for a traditional batch cycle.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-[10%] right-[10%] top-[50px] hidden h-px bg-gradient-to-r from-transparent via-[#e8def3]/20 to-transparent lg:block" />

          <motion.div
            animate={{ left: ["8%", "90%"] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[47px] z-20 hidden h-2 w-2 rounded-full bg-[#eee7f7] shadow-[0_0_18px_#eee7f7] lg:block"
          />

          <div className="relative z-10 grid gap-3 lg:grid-cols-5">
            {layers.map(({ Icon, title, text }, index) => (
              <div
                key={title}
                className="min-h-[310px] rounded-[28px] border border-white/[0.07] bg-[#070707] p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-[#eee6f7]/[0.025]">
                    <Icon
                      size={18}
                      strokeWidth={1}
                      className="text-[#e7dcf2]/55"
                    />
                  </div>

                  <span className="font-mono text-[6px] text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-14 text-lg font-medium">
                  {title}
                </h3>

                <p className="mt-5 text-[10px] leading-6 text-white/40">
                  {text}
                </p>

                <div className="mt-8 h-px overflow-hidden bg-white/[0.05]">
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="h-full w-1/3 bg-[#e8def3]/40"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-[8px] text-white/25">
          <Database size={10} />
          Continuous pipelines connect event producers to analytics and
          operational consumers.
        </div>
      </div>
    </section>
  );
}