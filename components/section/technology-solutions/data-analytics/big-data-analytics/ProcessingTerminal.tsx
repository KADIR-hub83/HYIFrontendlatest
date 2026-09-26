"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Terminal } from "lucide-react";

const logs = [
  "[STREAM] consumer-group-07 connected",
  "[INGEST] 184,820 events received",
  "[SPARK] distributed job initialized",
  "[NODE] 64 workers active",
  "[SHUFFLE] partitioning dataset",
  "[MODEL] anomaly features generated",
  "[QUERY] aggregation completed",
  "[SYSTEM] processing healthy",
];

export default function ProcessingTerminal() {
  return (
    <div className="overflow-hidden rounded-[30px] border border-[#eee5ff]/10 bg-[#08080a]">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-5">
        <div className="flex items-center gap-3">
          <Terminal size={13} className="text-[#eee5ff]/60" />

          <span className="font-mono text-[7px] tracking-[0.2em] text-white/35">
            DISTRIBUTED PROCESSOR
          </span>
        </div>

        <span className="flex items-center gap-2 font-mono text-[7px] text-emerald-300/55">
          <CheckCircle2 size={10} />
          LIVE
        </span>
      </div>

      <div className="p-6">
        {logs.map((log, index) => (
          <motion.div
            key={log}
            animate={{
              opacity: [0.35, 1, 0.55],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: index * 0.25,
            }}
            className="border-b border-white/[0.04] py-4 font-mono text-[8px] text-[#eee5ff]/45"
          >
            <span className="mr-4 text-white/15">
              {String(index + 1).padStart(2, "0")}
            </span>

            {log}
          </motion.div>
        ))}

        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
          }}
          className="mt-5 block h-4 w-[2px] bg-[#eee5ff]"
        />
      </div>
    </div>
  );
}