"use client";

import { motion } from "framer-motion";
import { Cpu, Server } from "lucide-react";

const racks = Array.from({ length: 12 });

export default function GPUClusterModel() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-[#7046e6]/20 bg-[#070707]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            ACCELERATED COMPUTE CLUSTER
          </p>
          <p className="mt-2 text-[10px] text-white/[0.3]">
            Distributed compute topology
          </p>
        </div>

        <Server size={16} className="text-[#9878ef]" />
      </div>

      <div className="relative p-6 md:p-10">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {racks.map((_, index) => (
            <motion.div
              key={index}
              animate={{
                borderColor: [
                  "rgba(255,255,255,.07)",
                  "rgba(152,120,239,.35)",
                  "rgba(255,255,255,.07)",
                ],
              }}
              transition={{
                duration: 3,
                delay: index * 0.15,
                repeat: Infinity,
              }}
              className="relative min-h-[180px] rounded-[20px] border bg-black p-4"
            >
              <div className="flex items-center justify-between">
                <Cpu size={13} className="text-[#a98cf4]" />
                <span className="font-mono text-[6px] text-white/[0.2]">
                  N-{String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-7 space-y-2">
                {[1, 2, 3, 4].map((gpu) => (
                  <motion.div
                    key={gpu}
                    animate={{ opacity: [0.25, 1, 0.25] }}
                    transition={{
                      duration: 2,
                      delay: index * 0.1 + gpu * 0.12,
                      repeat: Infinity,
                    }}
                    className="flex items-center gap-2 rounded-md border border-white/[0.05] bg-white/[0.02] p-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a98cf4]" />
                    <span className="font-mono text-[6px] text-white/[0.3]">
                      ACCELERATOR {gpu}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {[
            ["COMPUTE POOLS", "Elastic allocation"],
            ["SCHEDULING", "Workload aware"],
            ["FABRIC STATE", "Synchronized"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-[18px] border border-white/[0.06] bg-white/[0.02] p-4"
            >
              <p className="font-mono text-[6px] tracking-[0.2em] text-white/[0.25]">
                {label}
              </p>
              <p className="mt-3 text-sm text-white/[0.7]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}