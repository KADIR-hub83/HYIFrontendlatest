"use client";

import { motion } from "framer-motion";
import ProcessingTerminal from "./ProcessingTerminal";

export default function ProcessingEngine() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
              Processing Engine
            </span>

            <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-8xl">
              Compute without
              <span className="block text-white/50">the bottleneck.</span>
            </h2>
          </div>

          <p className="max-w-[620px] text-[15px] leading-8 text-white/60">
            Break enormous analytical workloads into parallel tasks and execute
            them across distributed infrastructure built for throughput.
          </p>
        </div>

        <div className="mt-20 grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ProcessingTerminal />
          </div>

          <div className="grid gap-5 lg:col-span-5">
            <div className="rounded-[30px] border border-[#eee5ff]/10 bg-[#0b0b0d] p-7">
              <div className="flex justify-between">
                <span className="font-mono text-[7px] tracking-[0.2em] text-white/30">
                  CLUSTER LOAD
                </span>

                <span className="font-mono text-[7px] text-emerald-300/55">
                  72%
                </span>
              </div>

              <div className="mt-10 grid grid-cols-8 gap-2">
                {Array.from({ length: 40 }).map((_, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      opacity: [0.12, 0.8, 0.12],
                    }}
                    transition={{
                      duration: 2 + (index % 4),
                      repeat: Infinity,
                      delay: index * 0.04,
                    }}
                    className="aspect-square rounded-[6px] border border-[#eee5ff]/15 bg-[#eee5ff]/20"
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["64", "WORKERS"],
                ["128", "PARTITIONS"],
                ["18ms", "LATENCY"],
                ["4.2M/s", "EVENTS"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[26px] border border-[#eee5ff]/10 bg-[#0b0b0d] p-6"
                >
                  <p className="text-3xl font-light text-[#f1ebf8]">
                    {value}
                  </p>

                  <p className="mt-3 font-mono text-[6px] tracking-[0.2em] text-white/30">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}