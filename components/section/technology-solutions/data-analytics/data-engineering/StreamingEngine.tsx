"use client";

import { motion } from "framer-motion";
import { Radio, Terminal } from "lucide-react";

const logs = [
  "events.orders → kafka.orders.raw",
  "stream validated: schema.orders.v12",
  "transforming 18,429 records...",
  "quality score: 99.97%",
  "writing → warehouse.sales.orders",
  "checkpoint committed: 08f21",
  "analytics layer refreshed",
  "pipeline latency: 14ms",
];

export default function StreamingEngine() {
  return (
    <section className="bg-[#050505] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="text-center">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            Real-Time Data Engineering
          </span>

          <h2 className="mx-auto mt-7 max-w-[1100px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            Data doesn't wait.
            <span className="block text-white/50">Neither should your systems.</span>
          </h2>
        </div>

        <div className="mt-20 overflow-hidden rounded-[40px] border border-white/[0.09] bg-[#080808]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-7 py-5">
            <div className="flex items-center gap-3">
              <Terminal size={13} className="text-violet-100/60" />

              <span className="font-mono text-[8px] tracking-[0.22em] text-white/35">
                STREAM PROCESSOR / PROD
              </span>
            </div>

            <span className="flex items-center gap-2 font-mono text-[7px] text-emerald-300/60">
              <Radio size={9} />
              CONSUMING
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.15fr_.85fr]">
            <div className="min-h-[560px] overflow-hidden border-b border-white/[0.07] p-7 font-mono lg:border-b-0 lg:border-r md:p-10">
              <div className="text-[9px] leading-8 text-white/45">
                <span className="text-violet-300">$</span>{" "}
                hyi-data stream --environment production
              </div>

              <div className="mt-7 h-[430px] overflow-hidden">
                <motion.div
                  animate={{ y: [0, -210, 0] }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="space-y-3"
                >
                  {[...logs, ...logs].map((log, index) => (
                    <div
                      key={index}
                      className="flex min-h-[52px] items-center gap-4 border-b border-white/[0.04] text-[9px]"
                    >
                      <span className="text-white/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />

                      <span className="text-white/55">{log}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="p-7 md:p-10">
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["82.4K", "EVENTS / SEC"],
                  ["14ms", "LATENCY"],
                  ["12", "PARTITIONS"],
                  ["0", "FAILED"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[20px] border border-white/[0.07] bg-white/[0.015] p-5"
                  >
                    <div className="text-2xl font-light">{value}</div>
                    <div className="mt-2 font-mono text-[6px] tracking-[0.16em] text-white/35">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-9">
                <div className="font-mono text-[8px] tracking-[0.18em] text-white/35">
                  STREAM VELOCITY
                </div>

                <div className="mt-8 flex h-[220px] items-end gap-1.5">
                  {Array.from({ length: 36 }).map((_, index) => {
                    const height = 25 + ((index * 19 + 7) % 70);

                    return (
                      <motion.div
                        key={index}
                        animate={{
                          height: [
                            `${height}%`,
                            `${Math.min(100, height + 15)}%`,
                            `${height}%`,
                          ],
                        }}
                        transition={{
                          duration: 1.8 + (index % 5) * 0.3,
                          repeat: Infinity,
                        }}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-800/20 to-violet-200/65"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}