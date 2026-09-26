"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  CheckCircle2,
  Radio,
  Server,
  Terminal,
} from "lucide-react";

const bars = [31, 46, 39, 58, 52, 71, 62, 80, 68, 87, 73, 91, 79, 85];

const events = [
  "pipeline training completed",
  "candidate registered",
  "validation gate passed",
  "canary deployment healthy",
  "monitoring baseline updated",
];

export default function ObservabilityConsole() {
  return (
    <div className="overflow-hidden rounded-[34px] border border-[#7046e6]/20 bg-[#030303]">
      <div className="flex items-center justify-between border-b border-white/[0.06] p-6">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            ML OPERATIONS CONSOLE
          </p>
          <p className="mt-2 text-[10px] text-white/[0.28]">
            Continuous lifecycle telemetry
          </p>
        </div>

        <Radio size={12} className="animate-pulse text-[#9878ef]" />
      </div>

      <div className="grid gap-4 p-6 md:p-8 lg:grid-cols-[1.4fr_.6fr]">
        <div className="rounded-[22px] border border-white/[0.06] bg-[#070707] p-5">
          <div className="flex justify-between">
            <span className="text-[9px]">Lifecycle activity</span>
            <Activity size={11} className="text-[#9878ef]" />
          </div>

          <div className="mt-7 flex h-[260px] items-end gap-2">
            {bars.map((height, index) => (
              <motion.div
                key={index}
                animate={{
                  height: [
                    `${Math.max(20, height - 15)}%`,
                    `${height}%`,
                    `${Math.max(24, height - 7)}%`,
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
        </div>

        <div className="space-y-3">
          {[
            { Icon: BrainCircuit, label: "MODELS", value: "Observed" },
            { Icon: Server, label: "SERVING", value: "Healthy" },
            { Icon: Activity, label: "PIPELINES", value: "Active" },
          ].map(({ Icon, label, value }) => (
            <div
              key={label}
              className="rounded-[18px] border border-white/[0.06] bg-[#070707] p-5"
            >
              <Icon size={12} className="text-[#9878ef]" />
              <p className="mt-4 font-mono text-[5px] text-white/[0.2]">
                {label}
              </p>
              <p className="mt-2 text-[10px]">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.06] p-6 md:p-8">
        <div className="flex items-center gap-2">
          <Terminal size={11} className="text-[#9878ef]" />
          <span className="font-mono text-[6px] text-white/[0.25]">
            EVENT STREAM
          </span>
        </div>

        <div className="mt-5 grid gap-2 md:grid-cols-5">
          {events.map((event, index) => (
            <motion.div
              key={event}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 4,
                delay: index * 0.55,
                repeat: Infinity,
              }}
              className="rounded-[14px] border border-white/[0.06] bg-[#070707] p-4"
            >
              <CheckCircle2 size={9} className="text-[#9878ef]" />
              <p className="mt-3 text-[7px] leading-4 text-white/[0.35]">
                {event}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}