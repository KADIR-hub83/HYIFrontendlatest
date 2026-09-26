"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import ProbabilityOrb from "./ProbabilityOrb";

export default function PredictiveAnalyticsHero() {
  return (
    <section className="relative min-h-[1250px] overflow-hidden bg-[#030303] pb-28 pt-36 md:pt-44">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[38%] h-[1000px] w-[1300px] -translate-x-1/2 rounded-full bg-violet-500/[0.055] blur-[210px]" />

        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
            backgroundSize: "74px 74px",
            maskImage:
              "linear-gradient(to bottom,transparent,black 18%,black 75%,transparent)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1550px] px-5 md:px-8">
        <div className="mx-auto max-w-[1250px] text-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 rounded-full border border-[#eee5ff]/15 bg-[#eee5ff]/[0.04] px-5 py-2.5"
          >
            <Sparkles size={11} className="text-[#eee5ff]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.36em] text-[#eee5ff]/60">
              Predictive Analytics
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-9 text-[clamp(4rem,9.4vw,9.8rem)] font-medium leading-[0.84] tracking-[-0.075em]"
          >
            See what&apos;s next.
            <span className="block bg-gradient-to-r from-white via-[#eee5ff] to-[#aa8dd1] bg-clip-text text-transparent">
              Before it happens.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-10 max-w-[900px] text-[15px] leading-8 text-[#e5deeb]/65 md:text-lg md:leading-9"
          >
            HYI.AI combines historical behavior, real-time signals and advanced
            machine learning to forecast outcomes, detect emerging risks and
            reveal opportunities before they become obvious.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.4,
            duration: 1.1,
          }}
        >
          <ProbabilityOrb />
        </motion.div>

        <a
          href="#forecast-horizon"
          className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 font-mono text-[8px] uppercase tracking-[0.25em] text-white/55 transition hover:border-[#eee5ff]/30 hover:text-white"
        >
          Explore future intelligence
          <ArrowDown size={12} />
        </a>
      </div>
    </section>
  );
}