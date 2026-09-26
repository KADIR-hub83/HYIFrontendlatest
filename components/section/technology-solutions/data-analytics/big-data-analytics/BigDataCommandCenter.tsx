"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Cpu,
  Database,
  Gauge,
} from "lucide-react";

export default function BigDataCommandCenter() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div>
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
            Live Command Center
          </span>

          <h2 className="mt-7 max-w-[1100px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            See billions of events
            <span className="block text-white/50">as one system.</span>
          </h2>
        </div>

        <div className="mt-20 overflow-hidden rounded-[40px] border border-[#eee5ff]/10 bg-[#0b0b0d] p-4 md:p-6">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Activity,
                value: "4.2M/s",
                label: "EVENT THROUGHPUT",
              },
              {
                Icon: Database,
                value: "2.1 PB",
                label: "DAILY DATA",
              },
              {
                Icon: Cpu,
                value: "64",
                label: "ACTIVE WORKERS",
              },
              {
                Icon: Gauge,
                value: "18 ms",
                label: "PROCESS LATENCY",
              },
            ].map(({ Icon, value, label }) => (
              <div
                key={label}
                className="rounded-[25px] border border-[#eee5ff]/[0.08] bg-[#eee5ff]/[0.018] p-6"
              >
                <Icon size={16} className="text-[#eee5ff]/55" />

                <p className="mt-8 text-3xl font-light">{value}</p>

                <p className="mt-2 font-mono text-[6px] tracking-[0.2em] text-white/30">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.35fr_.65fr]">
            <div className="rounded-[28px] border border-white/[0.07] bg-black/20 p-7">
              <div className="flex justify-between">
                <span className="font-mono text-[7px] tracking-[0.2em] text-white/30">
                  EVENT VELOCITY
                </span>

                <span className="font-mono text-[7px] text-emerald-300/55">
                  LIVE
                </span>
              </div>

              <div className="mt-12 flex h-[300px] items-end gap-1.5">
                {Array.from({ length: 50 }).map((_, index) => {
                  const height = 18 + ((index * 29) % 75);

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
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.025,
                      }}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-[#eee5ff]/[0.03] to-[#eee5ff]/55"
                    />
                  );
                })}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/[0.07] bg-black/20 p-7">
              <span className="font-mono text-[7px] tracking-[0.2em] text-white/30">
                ACTIVE STREAMS
              </span>

              <div className="mt-8 space-y-3">
                {[
                  ["Transactions", "1.4M/s"],
                  ["Customer Events", "980K/s"],
                  ["Telemetry", "760K/s"],
                  ["Applications", "620K/s"],
                  ["External Feeds", "440K/s"],
                ].map(([name, value], index) => (
                  <div
                    key={name}
                    className="rounded-[17px] border border-white/[0.06] p-4"
                  >
                    <div className="flex justify-between">
                      <span className="text-xs text-white/50">{name}</span>

                      <span className="font-mono text-[7px] text-[#eee5ff]/45">
                        {value}
                      </span>
                    </div>

                    <div className="mt-3 h-[2px] overflow-hidden rounded-full bg-white/[0.05]">
                      <motion.div
                        animate={{
                          x: ["-100%", "180%"],
                        }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#eee5ff] to-transparent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}