"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Clock3,
  TrendingUp,
} from "lucide-react";

const bars = [
  24, 30, 27, 38, 34, 46, 43, 52, 49, 61, 57, 68, 65, 72, 78, 74, 84, 88,
  82, 91, 87, 95,
];

export default function ForecastHorizon() {
  return (
    <section
      id="forecast-horizon"
      className="relative border-y border-white/[0.06] bg-[#080808] py-28 md:py-44"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="text-center">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
            Forecast Horizon
          </span>

          <h2 className="mx-auto mt-7 max-w-[1200px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            Turn history into a
            <span className="block text-white/50">
              view of tomorrow.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[760px] text-[15px] leading-8 text-white/60">
            Forecast demand, customer behavior, operational performance and
            market movement using continuously updated predictive models.
          </p>
        </div>

        <div className="relative mt-20 overflow-hidden rounded-[40px] border border-[#eee5ff]/10 bg-[#0b0b0d] p-6 md:p-10">
          <div
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="font-mono text-[7px] tracking-[0.25em] text-white/30">
                DEMAND FORECAST
              </p>

              <div className="mt-3 flex items-end gap-3">
                <span className="text-4xl font-light md:text-5xl">
                  +28.4%
                </span>

                <span className="mb-1 flex items-center gap-1 text-xs text-emerald-300/60">
                  <ArrowUpRight size={12} />
                  predicted
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="rounded-full border border-white/[0.08] px-4 py-2 font-mono text-[7px] text-white/35">
                90 DAYS
              </div>

              <div className="rounded-full border border-[#eee5ff]/15 bg-[#eee5ff]/[0.04] px-4 py-2 font-mono text-[7px] text-[#eee5ff]/60">
                LIVE MODEL
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-16 flex h-[420px] items-end gap-1 md:gap-2">
            {bars.map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.035,
                }}
                className="group relative flex-1 rounded-t-md border-x border-t border-[#eee5ff]/10 bg-gradient-to-t from-[#eee5ff]/[0.025] to-[#eee5ff]/35"
              >
                <motion.div
                  animate={{
                    opacity: [0.15, 0.9, 0.15],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.08,
                  }}
                  className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2ebff] shadow-[0_0_15px_#f2ebff]"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            animate={{
              x: ["0%", "800%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-[35%] left-[8%] hidden h-[2px] w-[10%] bg-gradient-to-r from-transparent via-[#eee5ff] to-transparent blur-[1px] md:block"
          />

          <div className="relative z-10 mt-8 grid gap-px overflow-hidden rounded-[24px] border border-white/[0.06] bg-white/[0.06] sm:grid-cols-3">
            {[
              {
                Icon: TrendingUp,
                value: "94.8%",
                label: "MODEL CONFIDENCE",
              },
              {
                Icon: Activity,
                value: "1.8M",
                label: "SIGNALS ANALYZED",
              },
              {
                Icon: Clock3,
                value: "90D",
                label: "FORECAST HORIZON",
              },
            ].map(({ Icon, value, label }) => (
              <div key={label} className="bg-[#09090a] p-6">
                <Icon size={14} className="text-[#eee5ff]/50" />

                <p className="mt-6 text-3xl font-light">{value}</p>

                <p className="mt-2 font-mono text-[6px] tracking-[0.2em] text-white/30">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}