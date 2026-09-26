"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, Gauge, MemoryStick, Radio } from "lucide-react";

const chart = [32, 48, 41, 61, 55, 72, 68, 82, 74, 89, 77, 85, 71, 92];

export default function GPUPerformanceModel() {
  return (
    <div className="overflow-hidden rounded-[34px] border border-[#7046e6]/20 bg-[#030303]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            GPU OPERATIONS CENTER
          </p>
          <p className="mt-2 text-[10px] text-white/[0.3]">
            Infrastructure telemetry visualization
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Radio size={11} className="animate-pulse text-[#9878ef]" />
          <span className="font-mono text-[6px] text-[#9878ef]">LIVE</span>
        </div>
      </div>

      <div className="grid gap-4 p-6 md:p-8 lg:grid-cols-[1.5fr_.5fr]">
        <div className="rounded-[24px] border border-white/[0.06] bg-[#070707] p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm">Accelerator activity</span>
            <Activity size={13} className="text-[#9878ef]" />
          </div>

          <div className="mt-8 flex h-[270px] items-end gap-2">
            {chart.map((height, index) => (
              <motion.div
                key={index}
                animate={{
                  height: [
                    `${Math.max(20, height - 12)}%`,
                    `${height}%`,
                    `${Math.max(25, height - 5)}%`,
                  ],
                }}
                transition={{
                  duration: 2.4,
                  delay: index * 0.07,
                  repeat: Infinity,
                }}
                className="relative flex-1 overflow-hidden rounded-t-md bg-[#7046e6]/25"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[#c9b6ff]" />
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex justify-between font-mono text-[6px] text-white/[0.2]">
            <span>HISTORY</span>
            <span>WORKLOAD ACTIVITY</span>
            <span>NOW</span>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { Icon: Cpu, title: "COMPUTE", value: "Observed" },
            { Icon: MemoryStick, title: "MEMORY", value: "Observed" },
            { Icon: Gauge, title: "CAPACITY", value: "Tracked" },
            { Icon: Activity, title: "WORKLOADS", value: "Active" },
          ].map(({ Icon, title, value }) => (
            <div
              key={title}
              className="rounded-[20px] border border-white/[0.06] bg-[#070707] p-5"
            >
              <Icon size={13} className="text-[#9878ef]" />
              <p className="mt-5 font-mono text-[6px] text-white/[0.25]">
                {title}
              </p>
              <p className="mt-2 text-sm">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}