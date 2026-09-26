"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  CircleCheck,
  Gauge,
  Radio,
} from "lucide-react";

const metrics = [
  ["Model Confidence", "96.7%"],
  ["Signals Processed", "2.84M"],
  ["Active Forecasts", "148"],
  ["Model Health", "99.2%"],
];

export default function PredictiveCommandCenter() {
  return (
    <section className="border-y border-white/[0.06] bg-[#07070A] py-32 md:py-48">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <div className="mb-16">
          <span className="text-[9px] uppercase tracking-[0.4em] text-violet-300/55">
            05 / Predictive Operations
          </span>

          <h2 className="mt-7 max-w-[900px] text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Predictive Intelligence
            <span className="block text-[#C7B9DA]/55">
              Command Center.
            </span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#07070B]"
        >
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-white/[0.07] px-6 py-5">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
              </div>

              <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                HYI.AI / Prediction Runtime
              </span>
            </div>

            <span className="flex items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-emerald-400/60">
              <Radio size={11} />
              Live forecasting
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_330px]">
            <div className="border-white/[0.07] p-6 md:p-9 lg:border-r">
              <div className="flex justify-between">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                    Forecast trajectory
                  </p>
                  <p className="mt-3 text-xl text-[#F2ECFA]/75">
                    Enterprise Demand Index
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-4xl font-light text-violet-200">
                    +18.4%
                  </p>
                  <p className="mt-2 text-[8px] uppercase tracking-wider text-emerald-400/50">
                    Positive trend
                  </p>
                </div>
              </div>

              <div className="relative mt-10 h-[360px] overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#040406]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
                    backgroundSize: "55px 55px",
                  }}
                />

                <div className="absolute inset-x-7 bottom-8 flex h-[240px] items-end gap-2">
                  {Array.from({ length: 44 }).map((_, index) => {
                    const height =
                      25 +
                      ((index * 11) % 40) +
                      index * 0.7;

                    return (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        whileInView={{
                          height: `${Math.min(height, 92)}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.025,
                          duration: 0.8,
                        }}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-900/20 via-violet-500/35 to-violet-200/80"
                      />
                    );
                  })}
                </div>

                <motion.div
                  animate={{
                    left: ["4%", "96%", "4%"],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-violet-200/60 to-transparent"
                />
              </div>
            </div>

            <div className="p-7">
              <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                Runtime Metrics
              </p>

              <div className="mt-8">
                {metrics.map(([label, value], index) => {
                  const icons = [
                    BrainCircuit,
                    Activity,
                    Gauge,
                    CircleCheck,
                  ];

                  const Icon = icons[index];

                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.12 }}
                      className="border-b border-white/[0.06] py-6 first:pt-0"
                    >
                      <Icon size={14} className="text-violet-300/65" />

                      <p className="mt-4 text-[8px] uppercase tracking-[0.22em] text-[#D8D0E2]/30">
                        {label}
                      </p>

                      <p className="mt-2 text-3xl font-light text-[#F3ECFB]/75">
                        {value}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}