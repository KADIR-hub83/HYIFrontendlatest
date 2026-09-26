"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CircleDollarSign,
  Clock3,
  Database,
} from "lucide-react";

export default function WarehouseCommandCenter() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
              Warehouse Command Center
            </span>

            <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-8xl">
              See the whole
              <span className="block text-white/50">warehouse breathe.</span>
            </h2>
          </div>

          <p className="max-w-[650px] text-[15px] leading-8 text-white/60">
            Monitor warehouse health, workload performance, data volume and
            query behavior through a unified operational layer.
          </p>
        </div>

        <div className="mt-20 rounded-[40px] border border-[#eee5ff]/[0.10] bg-[#0b0b0d] p-4 md:p-6">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Database,
                value: "12.8 PB",
                label: "Stored data",
              },
              {
                Icon: Activity,
                value: "18.4M",
                label: "Queries / day",
              },
              {
                Icon: Clock3,
                value: "31 ms",
                label: "Average latency",
              },
              {
                Icon: CircleDollarSign,
                value: "-28%",
                label: "Compute cost",
              },
            ].map(({ Icon, value, label }) => (
              <div
                key={label}
                className="rounded-[26px] border border-[#eee5ff]/[0.08] bg-[#eee5ff]/[0.018] p-6"
              >
                <Icon size={16} className="text-[#eee5ff]/55" />

                <p className="mt-8 text-3xl font-light">{value}</p>

                <p className="mt-2 font-mono text-[7px] uppercase tracking-[0.18em] text-white/30">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.4fr_.6fr]">
            <div className="rounded-[28px] border border-white/[0.07] bg-black/20 p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[7px] tracking-[0.2em] text-white/30">
                  COMPUTE LOAD / 24H
                </span>

                <span className="font-mono text-[7px] text-emerald-300/50">
                  NORMAL
                </span>
              </div>

              <div className="mt-10 flex h-[280px] items-end gap-2">
                {Array.from({ length: 42 }).map((_, index) => {
                  const height = 18 + ((index * 23) % 76);

                  return (
                    <motion.span
                      key={index}
                      animate={{
                        height: [
                          `${height}%`,
                          `${Math.min(height + 12, 100)}%`,
                          `${height}%`,
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.03,
                      }}
                      className="flex-1 rounded-t bg-[#eee5ff]/40"
                    />
                  );
                })}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/[0.07] bg-black/20 p-7">
              <span className="font-mono text-[7px] tracking-[0.2em] text-white/30">
                LIVE WORKLOADS
              </span>

              <div className="mt-7 space-y-3">
                {[
                  ["Finance BI", "RUNNING"],
                  ["Customer 360", "RUNNING"],
                  ["Sales Analytics", "RUNNING"],
                  ["AI Features", "RUNNING"],
                  ["Executive BI", "RUNNING"],
                ].map(([name, status], index) => (
                  <motion.div
                    key={name}
                    animate={{ opacity: [0.65, 1, 0.65] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="flex items-center justify-between rounded-[16px] border border-white/[0.06] px-4 py-4"
                  >
                    <span className="text-xs text-white/50">{name}</span>

                    <span className="font-mono text-[6px] text-emerald-300/50">
                      {status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}