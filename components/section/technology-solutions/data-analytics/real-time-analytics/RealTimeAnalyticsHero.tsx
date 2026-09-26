"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  Radio,
  Sparkles,
  Zap,
} from "lucide-react";

import LiveSignalEngine from "./LiveSignalEngine";

export default function RealTimeAnalyticsHero() {
  return (
    <section className="relative overflow-hidden bg-[#030303] pb-24 pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[48%] h-[800px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9cdec]/[0.055] blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom,transparent,black 15%,black 80%,transparent)",
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
            <motion.span
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-[#eee6f7]"
            />

            <span className="font-mono text-[7px] uppercase tracking-[0.32em] text-white/45">
              Real-Time Analytics / Live Intelligence
            </span>

            <Radio size={10} className="text-[#eee6f7]/55" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-8 text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.84] tracking-[-0.075em]"
          >
            Intelligence at the
            <span className="block bg-gradient-to-r from-white via-[#e7deef] to-[#91859e] bg-clip-text text-transparent">
              speed of now.
            </span>
          </motion.h1>

          <p className="mx-auto mt-9 max-w-[790px] text-[12px] leading-7 text-white/55 md:text-[14px] md:leading-8">
            Turn continuous streams of events into continuously updated
            intelligence. Detect operational changes, anomalies and business
            signals while they are happening — not hours after they matter.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              [Activity, "Continuous signals"],
              [Zap, "Low-latency processing"],
              [Sparkles, "Live intelligence"],
            ].map(([Icon, text]) => {
              const I = Icon as typeof Activity;

              return (
                <div
                  key={text as string}
                  className="flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.02] px-4 py-2"
                >
                  <I size={9} className="text-[#e6dcf1]/50" />
                  <span className="text-[8px] text-white/40">
                    {text as string}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <LiveSignalEngine />

        <div className="mt-10 flex justify-center">
          <a
            href="#streaming-architecture"
            className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-white/35 transition hover:text-white"
          >
            Explore live architecture
            <ArrowDown size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}