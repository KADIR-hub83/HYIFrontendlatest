"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Plus,
  Radio,
  Server,
  Zap,
} from "lucide-react";

const demand = [3, 4, 5, 5, 7, 9, 12, 10, 8, 11, 7, 5];

export default function ReplicaScaleModel() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#070707] p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            REPLICA ORCHESTRATOR
          </p>
          <p className="mt-2 text-[10px] text-white/[0.3]">
            Dynamic model-serving capacity
          </p>
        </div>

        <Radio size={14} className="animate-pulse text-[#9878ef]" />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-[1.2fr_.8fr]">
        <div className="rounded-[22px] border border-white/[0.06] bg-black p-5">
          <div className="flex items-center justify-between">
            <span className="text-[10px]">Request demand</span>
            <Activity size={12} className="text-[#9878ef]" />
          </div>

          <div className="mt-7 flex h-[220px] items-end gap-2">
            {demand.map((value, index) => (
              <motion.div
                key={index}
                animate={{
                  height: [
                    `${Math.max(20, value * 6 - 10)}%`,
                    `${value * 6}%`,
                    `${Math.max(25, value * 6 - 5)}%`,
                  ],
                }}
                transition={{
                  duration: 2.5,
                  delay: index * 0.08,
                  repeat: Infinity,
                }}
                className="relative flex-1 overflow-hidden rounded-t bg-[#7046e6]/25"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[#c9b6ff]" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-[22px] border border-white/[0.06] bg-black p-5">
          <p className="font-mono text-[6px] text-white/[0.25]">
            SERVING REPLICAS
          </p>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  borderColor: [
                    "rgba(255,255,255,.07)",
                    "rgba(152,120,239,.45)",
                    "rgba(255,255,255,.07)",
                  ],
                }}
                transition={{
                  duration: 2.7,
                  delay: index * 0.18,
                  repeat: Infinity,
                }}
                className="flex aspect-square items-center justify-center rounded-[11px] border bg-[#070707]"
              >
                <Server size={11} className="text-[#9878ef]" />
              </motion.div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap size={10} className="text-[#9878ef]" />
              <span className="font-mono text-[6px] text-white/[0.3]">
                ELASTIC
              </span>
            </div>

            <motion.div
              animate={{ rotate: 180 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Plus size={12} className="text-[#9878ef]" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4 rounded-[18px] border border-[#7046e6]/20 bg-[#7046e6]/[0.05] p-4">
        <BrainCircuit size={13} className="text-[#c9b6ff]" />

        <div>
          <p className="text-[9px]">Model capacity synchronized</p>
          <p className="mt-1 font-mono text-[5px] text-white/[0.25]">
            REQUEST DEMAND → REPLICA CAPACITY
          </p>
        </div>
      </div>
    </div>
  );
}