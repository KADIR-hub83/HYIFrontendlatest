"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  CircleDot,
  Cpu,
  Sparkles,
} from "lucide-react";

import AutomationCore3D from "./AutomationCore3D";

export default function AIAutomationHero() {
  return (
    <section className="relative isolate min-h-[1100px] overflow-hidden bg-[#020203]">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[38%] h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-violet-700/[0.15] blur-[190px]"
        />

        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,139,250,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,.06) 1px, transparent 1px)",
            backgroundSize: "75px 75px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 75%, transparent)",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-[250px] bg-gradient-to-b from-black via-black/80 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 pb-24 pt-28 md:px-10 md:pt-40 lg:px-14">
        <div className="mx-auto max-w-[1100px] text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 rounded-full border border-violet-300/20 bg-violet-500/[0.07] px-5 py-2.5 backdrop-blur-xl"
          >
            <CircleDot
              size={11}
              className="animate-pulse text-emerald-400"
            />

            <span className="text-[9px] uppercase tracking-[0.38em] text-violet-100/70">
              Autonomous Operations Online
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mt-8 text-[9px] uppercase tracking-[0.52em] text-[#D4CCDF]/40"
          >
            Observe · Think · Execute · Learn
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-7 text-[clamp(4rem,9vw,9.5rem)] font-medium leading-[0.87] tracking-[-0.07em]"
          >
            Workflows that
            <span className="block bg-gradient-to-r from-[#F0E7FF] via-[#C58AFF] to-[#7557FF] bg-clip-text text-transparent">
              run themselves.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            className="mx-auto mt-9 max-w-[800px] text-base leading-8 text-[#DAD3E4]/65 md:text-lg"
          >
            HYI.AI designs intelligent automation systems that connect data,
            AI models, enterprise applications and business logic to automate
            complex workflows with greater speed, consistency and visibility.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.25,
          }}
        >
          <AutomationCore3D />
        </motion.div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#live-runtime"
            className="group flex h-14 items-center gap-3 rounded-full bg-[#F6F1FF] px-8 text-sm font-medium text-black transition hover:scale-105"
          >
            Enter Automation Runtime

            <ArrowDown
              size={16}
              className="transition group-hover:translate-y-1"
            />
          </a>

          <a
            href="#automation-cta"
            className="group flex h-14 items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-8 text-sm text-[#E9E2F2]/70 backdrop-blur-xl transition hover:border-violet-400/30 hover:text-white"
          >
            Build AI Automation
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}