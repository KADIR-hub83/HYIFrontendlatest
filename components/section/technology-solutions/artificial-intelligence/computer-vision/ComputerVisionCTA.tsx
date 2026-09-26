"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ComputerVisionCTA() {
  return (
    <section className="relative flex min-h-[900px] items-center overflow-hidden bg-[#020202] py-28">
      <div className="absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.10] blur-[180px]" />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/[0.07]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-fuchsia-300/[0.08]"
        animate={{ rotate: -360 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-300/30 to-transparent"
        animate={{
          top: ["15%", "85%", "15%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 rounded-full border border-violet-300/[0.16] bg-violet-400/[0.04] px-5 py-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-300 shadow-[0_0_12px_#e879f9]" />

          <span className="text-[8px] uppercase tracking-[0.3em] text-violet-100/55">
            Build Visual Intelligence
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto mt-8 max-w-[1200px] text-[48px] font-medium leading-[0.95] tracking-[-0.06em] sm:text-[70px] md:text-[100px] lg:text-[120px]"
        >
          Turn the physical world
          <br />

          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-purple-500 bg-clip-text text-transparent">
            into intelligence.
          </span>
        </motion.h2>

        <p className="mx-auto mt-8 max-w-[720px] text-[15px] leading-8 text-white/60 md:text-lg">
          Build production-ready computer vision solutions for inspection,
          monitoring, automation, visual search and intelligent real-world
          operations.
        </p>

        <div className="mt-11 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 px-10 py-4 text-sm font-medium shadow-[0_0_50px_rgba(139,92,246,.22)] transition-all duration-300 hover:scale-[1.04]"
          >
            Build Vision Solution
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/[0.12] bg-white/[0.025] px-10 py-4 text-sm text-white/65 backdrop-blur-xl transition-all hover:border-violet-300/30 hover:text-white"
          >
            Talk to AI Experts
          </Link>
        </div>

        <div className="mx-auto mt-24 flex max-w-[800px] items-center gap-5">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-violet-300/25" />

          <span className="text-[7px] uppercase tracking-[0.3em] text-white/35">
            Capture • Perceive • Understand • Act
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-violet-300/25" />
        </div>
      </div>
    </section>
  );
}