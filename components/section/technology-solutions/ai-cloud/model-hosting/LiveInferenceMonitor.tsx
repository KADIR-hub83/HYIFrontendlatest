"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Gauge,
  Radio,
  Server,
  Timer,
} from "lucide-react";

const chart = [35, 49, 42, 57, 52, 69, 62, 78, 71, 84, 67, 89, 74, 81];

const events = [
  "endpoint /llm/chat healthy",
  "replica r-03 capacity updated",
  "model v4.2 validation completed",
  "request routed to serving pool",
  "runtime health probe completed",
];

export default function LiveInferenceMonitor() {
  return (
    <div className="overflow-hidden rounded-[34px] border border-[#7046e6]/20 bg-[#030303]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            INFERENCE OPERATIONS
          </p>
          <p className="mt-2 text-[10px] text-white/[0.28]">
            Live serving telemetry
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Radio size={11} className="animate-pulse text-[#9878ef]" />
          <span className="font-mono text-[6px] text-[#9878ef]">STREAMING</span>
        </div>
      </div>

      <div className="grid gap-4 p-6 md:p-8 lg:grid-cols-[1.4fr_.6fr]">
        <div className="rounded-[24px] border border-white/[0.06] bg-[#070707] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm">Inference activity</p>
              <p className="mt-1 text-[8px] text-white/[0.25]">
                Request-volume visualization
              </p>
            </div>

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
                    `${Math.max(24, height - 6)}%`,
                  ],
                }}
                transition={{
                  duration: 2.5,
                  delay: index * 0.07,
                  repeat: Infinity,
                }}
                className="relative flex-1 overflow-hidden rounded-t bg-[#7046e6]/25"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[#c9b6ff]" />
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex justify-between font-mono text-[6px] text-white/[0.2]">
            <span>-60 SEC</span>
            <span>REQUESTS</span>
            <span>NOW</span>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { Icon: Server, label: "ENDPOINTS", value: "Healthy" },
            { Icon: Gauge, label: "CAPACITY", value: "Available" },
            { Icon: Timer, label: "RUNTIME", value: "Observed" },
          ].map(({ Icon, label, value }) => (
            <div
              key={label}
              className="rounded-[19px] border border-white/[0.06] bg-[#070707] p-5"
            >
              <Icon size={12} className="text-[#9878ef]" />
              <p className="mt-5 font-mono text-[6px] text-white/[0.22]">
                {label}
              </p>
              <p className="mt-2 text-sm">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.06] p-6 md:p-8">
        <p className="font-mono text-[6px] tracking-[0.2em] text-white/[0.2]">
          LIVE EVENT FEED
        </p>

        <div className="mt-4 grid gap-2 md:grid-cols-2 lg:grid-cols-5">
          {events.map((event, index) => (
            <motion.div
              key={event}
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{
                duration: 4,
                delay: index * 0.6,
                repeat: Infinity,
              }}
              className="rounded-[14px] border border-white/[0.06] bg-[#070707] p-4"
            >
              <CheckCircle2 size={10} className="text-[#9878ef]" />
              <p className="mt-3 text-[8px] leading-4 text-white/[0.35]">
                {event}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}