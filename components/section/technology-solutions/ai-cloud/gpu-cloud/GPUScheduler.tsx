"use client";

import { motion } from "framer-motion";
import { BrainCircuit, CheckCircle2, Cpu, Radio, Workflow } from "lucide-react";

const jobs = [
  { id: "AI-8921", type: "LLM TRAINING", pool: "TRAIN", load: 86 },
  { id: "AI-7134", type: "VISION INFERENCE", pool: "SERVE", load: 64 },
  { id: "AI-4562", type: "FINE-TUNING", pool: "TRAIN", load: 73 },
  { id: "AI-3180", type: "EMBEDDINGS", pool: "BATCH", load: 51 },
  { id: "AI-2241", type: "MODEL EVAL", pool: "SHARED", load: 68 },
];

export default function GPUScheduler() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#070707] p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            GPU SCHEDULER
          </p>
          <p className="mt-2 text-[10px] text-white/[0.3]">
            Workload placement engine
          </p>
        </div>

        <Workflow size={17} className="text-[#9878ef]" />
      </div>

      <div className="mt-7 flex items-center gap-4 rounded-[22px] border border-[#7046e6]/20 bg-[#0a0710] p-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-[#9878ef]/40"
        >
          <BrainCircuit size={20} className="text-[#c9b6ff]" />
        </motion.div>

        <div>
          <p className="text-sm">Placement Core</p>
          <p className="mt-1 text-[9px] text-white/[0.3]">
            Matching workloads with accelerator pools
          </p>
        </div>

        <Radio size={13} className="ml-auto animate-pulse text-[#9878ef]" />
      </div>

      <div className="mt-4 space-y-3">
        {jobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-[18px] border border-white/[0.06] bg-black p-4"
          >
            <div className="flex items-center gap-3">
              <Cpu size={12} className="text-[#a98cf4]" />

              <div>
                <p className="font-mono text-[7px] text-white/[0.55]">
                  {job.type}
                </p>
                <p className="mt-1 font-mono text-[6px] text-white/[0.2]">
                  {job.id}
                </p>
              </div>

              <span className="ml-auto rounded-full border border-[#7046e6]/20 px-3 py-1 font-mono text-[6px] text-[#a98cf4]">
                {job.pool}
              </span>
            </div>

            <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[0.05]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${job.load}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="h-full bg-gradient-to-r from-[#7046e6] to-[#c9b6ff]"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between rounded-[16px] border border-white/[0.06] p-4">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={12} className="text-[#9878ef]" />
          <span className="text-[9px] text-white/[0.4]">
            Scheduler synchronized
          </span>
        </div>

        <span className="font-mono text-[6px] text-[#9878ef]">RUNNING</span>
      </div>
    </div>
  );
}