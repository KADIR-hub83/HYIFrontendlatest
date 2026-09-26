"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Bot,
  BrainCircuit,
  CircleDot,
  Database,
} from "lucide-react";

const agents = [
  ["Research Agent", "Researching market signals", "72%"],
  ["Data Agent", "Retrieving enterprise context", "88%"],
  ["Analyst Agent", "Evaluating opportunity", "61%"],
  ["Validation Agent", "Checking policy constraints", "94%"],
];

export default function AgentCommandCenter() {
  return (
    <section className="bg-[#020203] py-32 md:py-48">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <span className="text-[9px] uppercase tracking-[0.42em] text-violet-300/55">
          06 / Mission Control
        </span>

        <h2 className="mt-7 max-w-[950px] text-5xl font-medium tracking-[-0.055em] md:text-7xl">
          See every agent.
          <span className="block text-[#C5B7D7]/58">
            See every decision.
          </span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#060609]"
        >
          <div className="flex items-center justify-between border-b border-white/[0.07] px-7 py-5">
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
              HYI.AI / Agent Mission Control
            </span>

            <span className="flex items-center gap-2 text-[8px] tracking-[0.23em] text-emerald-300/55">
              <CircleDot size={9} />
              NETWORK ONLINE
            </span>
          </div>

          <div className="grid lg:grid-cols-[350px_1fr]">
            <div className="border-white/[0.07] p-7 lg:border-r">
              <p className="text-[8px] uppercase tracking-[0.27em] text-white/25">
                Active Agents
              </p>

              <div className="mt-6 space-y-3">
                {agents.map(([name, task, progress], index) => (
                  <motion.div
                    key={name}
                    animate={{
                      borderColor: [
                        "rgba(255,255,255,.06)",
                        "rgba(167,139,250,.2)",
                        "rgba(255,255,255,.06)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="rounded-2xl border bg-white/[0.02] p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Bot
                          size={14}
                          className="text-violet-300"
                        />

                        <span className="text-xs text-[#EEE7F5]/65">
                          {name}
                        </span>
                      </div>

                      <span className="text-[8px] text-violet-300/55">
                        {progress}
                      </span>
                    </div>

                    <p className="mt-3 text-[9px] text-white/28">
                      {task}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid gap-3 md:grid-cols-4">
                {[
                  ["12", "AGENTS"],
                  ["48", "TOOLS"],
                  ["24", "TASKS"],
                  ["99.7%", "HEALTH"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5"
                  >
                    <p className="text-2xl font-light text-[#F1EBF7]/75">
                      {value}
                    </p>

                    <p className="mt-2 text-[7px] tracking-[0.2em] text-white/22">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative mt-4 h-[370px] overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#030305]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
                    backgroundSize: "55px 55px",
                  }}
                />

                <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-300/25 bg-violet-500/10">
                  <BrainCircuit
                    size={25}
                    className="text-violet-300"
                  />
                </div>

                {[190, 270, 350].map((size, index) => (
                  <motion.div
                    key={size}
                    animate={{
                      rotate:
                        index % 2 ? -360 : 360,
                    }}
                    transition={{
                      duration: 18 + index * 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-violet-300/10"
                    style={{
                      width: size,
                      height: size,
                      marginLeft: -size / 2,
                      marginTop: -size / 2,
                    }}
                  >
                    <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-violet-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}