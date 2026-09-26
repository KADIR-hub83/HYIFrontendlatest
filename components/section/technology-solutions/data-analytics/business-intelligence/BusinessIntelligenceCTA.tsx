"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3 } from "lucide-react";

export default function BusinessIntelligenceCTA() {
  return (
    <section className="relative flex min-h-[900px] items-center overflow-hidden border-t border-white/[0.06] bg-[#080706] py-32">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 h-[750px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.09] blur-[190px]"
      />

      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(circle at center,black,transparent 70%)",
        }}
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-100/[0.08]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-[20px] border border-violet-100/20 bg-violet-100/[0.05]"
        >
          <BarChart3 size={25} className="text-violet-100" />
        </motion.div>

        <p className="mt-10 text-[8px] uppercase tracking-[0.45em] text-violet-100/55">
          Business Intelligence
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto mt-8 max-w-[1300px] text-[clamp(4rem,8.5vw,9rem)] font-medium leading-[0.87] tracking-[-0.075em]"
        >
          Stop looking at data.
          <span className="block bg-gradient-to-r from-white via-[#ddd6fe] to-[#9f7aea] bg-clip-text text-transparent">
            Start seeing the business.
          </span>
        </motion.h2>

        <p className="mx-auto mt-9 max-w-[760px] text-[15px] leading-8 text-white/65 md:text-lg">
          Build a modern intelligence layer that connects enterprise data,
          reveals meaningful signals and gives every decision-maker a clearer
          view of what comes next.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#f4eff9] px-10 text-sm font-medium text-black transition duration-300 hover:scale-[1.04]"
          >
            Build Your BI Platform

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center rounded-full border border-white/[0.11] bg-white/[0.025] px-10 text-sm text-white/65 backdrop-blur-xl transition hover:border-violet-200/30 hover:text-white"
          >
            Talk to Data Experts
          </Link>
        </div>
      </div>
    </section>
  );
}