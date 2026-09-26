"use client";

import { motion } from "framer-motion";
import { Activity, Gauge, Radio, Server } from "lucide-react";

const bars = [34, 56, 44, 73, 62, 84, 68, 91, 72, 80, 64, 88];

export default function TelemetryModel() {
  return (
    <div className="rounded-[32px] border border-white/[0.08] bg-[#070707] p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            INFRASTRUCTURE TELEMETRY
          </p>
          <p className="mt-2 text-[10px] text-white/[0.3]">
            Live operational signal model
          </p>
        </div>

        <Activity size={17} className="text-[#9878ef]" />
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {[
          { Icon: Gauge, label: "UTILIZATION", value: "Dynamic" },
          { Icon: Server, label: "CLUSTER STATE", value: "Healthy" },
          { Icon: Radio, label: "TELEMETRY", value: "Streaming" },
        ].map(({ Icon, label, value }) => (
          <div
            key={label}
            className="rounded-[18px] border border-white/[0.06] bg-black p-4"
          >
            <Icon size={12} className="text-[#9878ef]" />
            <p className="mt-4 font-mono text-[6px] text-white/[0.25]">
              {label}
            </p>
            <p className="mt-2 text-sm">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-[24px] border border-white/[0.06] bg-black p-6">
        <div className="flex h-[250px] items-end gap-2">
          {bars.map((height, index) => (
            <motion.div
              key={index}
              animate={{
                height: [
                  `${Math.max(20, height - 15)}%`,
                  `${height}%`,
                  `${Math.max(25, height - 8)}%`,
                ],
              }}
              transition={{
                duration: 2.5,
                delay: index * 0.08,
                repeat: Infinity,
              }}
              className="relative flex-1 overflow-hidden rounded-t-md bg-[#7046e6]/25"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-[#c4afff]" />
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex justify-between font-mono text-[6px] text-white/[0.2]">
          <span>PAST</span>
          <span>INFRASTRUCTURE ACTIVITY</span>
          <span>LIVE</span>
        </div>
      </div>
    </div>
  );
}