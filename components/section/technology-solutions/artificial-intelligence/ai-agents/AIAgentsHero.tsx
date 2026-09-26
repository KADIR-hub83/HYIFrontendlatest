"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  CircleDot,
  Network,
} from "lucide-react";

import AgentCore3D from "./AgentCore3D";

export default function AIAgentsHero() {
  return (
    <section className="relative isolate min-h-[1180px] overflow-hidden bg-[#020203]">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.48, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[43%] h-[750px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7428ff]/15 blur-[190px]"
        />

        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(160,120,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(160,120,255,.055) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 78%, transparent)",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-[250px] bg-gradient-to-b from-black via-black/80 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 pb-28 pt-28 md:px-10 md:pt-40 lg:px-14">
        <div className="mx-auto max-w-[1200px] text-center">
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 rounded-full border border-violet-300/20 bg-violet-500/[0.06] px-5 py-2.5 backdrop-blur-xl"
          >
            <CircleDot
              size={10}
              className="animate-pulse text-emerald-400"
            />

            <span className="text-[7px] uppercase tracking-[0.38em] text-violet-100/65">
              Agentic Intelligence Network Online
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-[9px] uppercase tracking-[0.55em] text-white/30"
          >
            Perceive · Reason · Collaborate · Act
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-7 flex flex-col text-2xl font-semibold capitalize cursor-default gap-2 lg:text-4xl bg-gradient-to-t from-brand-600 to-brand-500 bg-clip-text text-transparent"
          >
            AI that doesn&apos;t
            <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              wait for prompts.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mx-auto text-[18px] text-dark_mode-300 md:text-base max-w-[60%] mt-5"
          >
            Build autonomous AI agents that understand objectives,
            reason across enterprise context, collaborate with
            specialist agents and execute complex multi-step work.
          </motion.p>
        </div>

        <AgentCore3D />

        <div className="relative z-30 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#agent-runtime"
            className="group flex h-14 items-center gap-3 rounded-full bg-[#F5EFFF] px-8 text-sm font-medium text-black transition duration-300 hover:scale-105"
          >
            Enter Agent Network
            <ArrowDown
              size={15}
              className="transition group-hover:translate-y-1"
            />
          </a>

          <a
            href="#agent-cta"
            className="group flex h-14 items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-8 text-sm text-[#E7DFEF]/65 backdrop-blur-xl transition hover:border-violet-300/30 hover:text-white"
          >
            Build AI Agents
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="mx-auto mt-24 grid max-w-[1100px] grid-cols-2 border-y border-white/[0.06] md:grid-cols-4">
          {[
            ["MULTI", "AGENT SYSTEM"],
            ["24/7", "AUTONOMY"],
            ["LIVE", "REASONING"],
            ["∞", "TOOL ACCESS"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className="border-r border-white/[0.06] px-4 py-7 text-center last:border-r-0"
            >
              <p className="text-2xl font-light text-[#EEE7F5]/75">
                {value}
              </p>
              <p className="mt-2 text-[7px] uppercase tracking-[0.27em] text-white/25">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}