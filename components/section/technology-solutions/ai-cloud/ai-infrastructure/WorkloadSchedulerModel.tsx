"use client";

import { motion } from "framer-motion";
import { BrainCircuit, CheckCircle2, Cpu, Gauge, Workflow } from "lucide-react";

const jobs = [
  { name: "LLM TRAINING", pool: "ACCELERATED", progress: 78 },
  { name: "VISION INFERENCE", pool: "REALTIME", progress: 91 },
  { name: "EMBEDDING JOB", pool: "BATCH", progress: 64 },
  { name: "MODEL EVALUATION", pool: "SHARED", progress: 83 },
];

export default function WorkloadSchedulerModel() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#070707] p-6 md:p-8">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            WORKLOAD SCHEDULER
          </p>
          <h3 className="mt-3 text-2xl">Placement intelligence</h3>
        </div>

        <Workflow size={18} className="text-[#9878ef]" />
      </div>

      <div className="mt-8 rounded-[24px] border border-[#7046e6]/20 bg-[#0a0810] p-5">
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#9878ef]/30"
          >
            <BrainCircuit size={18} className="text-[#b99cff]" />
          </motion.div>

          <div>
            <p className="text-sm">Scheduler Core</p>
            <p className="mt-1 text-[9px] text-white/[0.35]">
              Evaluating topology and capacity
            </p>
          </div>

          <span className="ml-auto h-2 w-2 animate-pulse rounded-full bg-[#9878ef]" />
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {jobs.map((job, index) => (
          <motion.div
            key={job.name}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-[20px] border border-white/[0.06] bg-black p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Cpu size={13} className="text-[#9878ef]" />
                <span className="font-mono text-[7px] text-white/[0.55]">
                  {job.name}
                </span>
              </div>

              <span className="font-mono text-[6px] text-[#9878ef]">
                {job.pool}
              </span>
            </div>

            <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[0.05]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${job.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.1 }}
                className="h-full bg-gradient-to-r from-[#7046e6] to-[#c5b2ff]"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-[18px] border border-white/[0.06] p-4">
          <Gauge size={13} className="text-[#9878ef]" />
          <p className="mt-4 text-sm">Capacity aware</p>
        </div>

        <div className="rounded-[18px] border border-white/[0.06] p-4">
          <CheckCircle2 size={13} className="text-[#9878ef]" />
          <p className="mt-4 text-sm">Policy aligned</p>
        </div>
      </div>
    </div>
  );
}