"use client";

import { motion } from "framer-motion";
import { ArrowDown, BarChart3, Sparkles } from "lucide-react";
import IntelligenceDashboard from "./IntelligenceDashboard";

export default function BusinessIntelligenceHero() {
  return (
    <section className="relative min-h-[1200px] overflow-hidden bg-[#050505] pb-32 pt-36 md:pt-48">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[25%] h-[850px] w-[1200px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[190px]" />

        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom,transparent,black 18%,black 75%,transparent)",
          }}
        />

        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[48%] h-px w-[50%] bg-gradient-to-r from-transparent via-violet-300/30 to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="mx-auto max-w-[1250px] text-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 rounded-full border border-violet-200/[0.16] bg-violet-300/[0.04] px-5 py-2.5"
          >
            <BarChart3 size={12} className="text-violet-200" />

            <span className="text-[8px] uppercase tracking-[0.4em] text-violet-100/65">
              Business Intelligence
            </span>

            <Sparkles size={10} className="text-fuchsia-200/70" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.08,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-9 text-[clamp(4rem,9vw,9.4rem)] font-medium leading-[0.86] tracking-[-0.075em]"
          >
            See the business
            <span className="block bg-gradient-to-r from-white via-[#ddd6fe] to-[#a78bfa] bg-clip-text text-transparent">
              before it happens.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-10 max-w-[850px] text-[15px] leading-8 text-white/65 md:text-lg md:leading-9"
          >
            HYI.AI transforms fragmented enterprise data into live dashboards,
            measurable intelligence and decision-ready insights—giving teams a
            clear view of performance, opportunities and what needs attention
            next.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="mt-20"
        >
          <IntelligenceDashboard />
        </motion.div>

        <div className="mx-auto mt-8 flex justify-center">
          <a
            href="#intelligence"
            className="group flex h-14 items-center gap-3 rounded-full border border-white/[0.10] bg-white/[0.025] px-8 text-sm text-white/60 backdrop-blur-xl transition hover:border-violet-200/30 hover:text-white"
          >
            Explore Intelligence
            <ArrowDown
              size={14}
              className="transition-transform group-hover:translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}