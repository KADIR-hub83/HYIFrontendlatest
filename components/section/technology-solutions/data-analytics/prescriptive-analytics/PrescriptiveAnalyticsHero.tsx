"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import DecisionOrbit from "./DecisionOrbit";

export default function PrescriptiveAnalyticsHero() {
  return (
    <section className="relative min-h-[1120px] overflow-hidden bg-[#030303] pb-24 pt-36 md:pt-44">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[40%] h-[850px] w-[1100px] -translate-x-1/2 rounded-full bg-[#ddd2ea]/[0.045] blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom,transparent,black 15%,black 75%,transparent)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1550px] px-5 md:px-10">
        <div className="mx-auto max-w-[1100px] text-center">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-5 py-2"
          >
            <Sparkles size={10} className="text-[#e9dfff]" />

            <span className="font-mono text-[7px] uppercase tracking-[0.32em] text-white/45">
              Decision Intelligence / Prescriptive Analytics
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-8 text-[clamp(3.8rem,9vw,9rem)] font-medium leading-[0.86] tracking-[-0.075em]"
          >
            Knowing the future
            <span className="block bg-gradient-to-r from-white via-[#ded4e9] to-[#9386a4] bg-clip-text text-transparent">
              isn&apos;t enough.
            </span>
          </motion.h1>

          <p className="mx-auto mt-9 max-w-[790px] text-[13px] leading-7 text-white/58 md:text-[15px] md:leading-8">
            HYI.AI transforms forecasts into decisions. Prescriptive analytics
            evaluates objectives, constraints, uncertainty and possible actions
            to recommend what an organization should do next.
          </p>
        </div>

        <DecisionOrbit />

        <div className="mx-auto -mt-4 grid max-w-[1050px] grid-cols-2 border-y border-white/[0.07] md:grid-cols-4">
          {[
            ["01", "OBSERVE"],
            ["02", "PREDICT"],
            ["03", "OPTIMIZE"],
            ["04", "ACT"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="border-r border-white/[0.06] px-4 py-6 text-center last:border-r-0"
            >
              <p className="font-mono text-[7px] text-[#e9dfff]/35">
                {number}
              </p>

              <p className="mt-2 text-[9px] tracking-[0.2em] text-white/65">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#analytics-evolution"
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/40 transition hover:text-white"
          >
            Explore decision intelligence
            <ArrowDown size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}