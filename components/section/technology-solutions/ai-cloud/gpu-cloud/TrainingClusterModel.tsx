"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Database, Network } from "lucide-react";

const workers = Array.from({ length: 12 });

export default function TrainingClusterModel() {
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-[#7046e6]/20 bg-[#030303] p-6 md:p-10">
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="grid grid-cols-3 gap-3">
          {workers.slice(0, 6).map((_, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2.5,
                delay: index * 0.2,
                repeat: Infinity,
              }}
              className="rounded-[18px] border border-white/[0.07] bg-black p-4"
            >
              <Cpu size={14} className="text-[#9878ef]" />
              <p className="mt-5 font-mono text-[6px] text-white/[0.35]">
                WORKER {String(index + 1).padStart(2, "0")}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="relative mx-auto flex h-[210px] w-[210px] items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-[#9878ef]/30"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[25px] rounded-full border border-[#9878ef]/20"
          />

          <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full border border-[#9878ef]/30 bg-[#0a0710]">
            <BrainCircuit size={24} className="text-[#c9b6ff]" />
            <p className="mt-3 text-xs">TRAINING</p>
            <p className="mt-1 font-mono text-[5px] text-white/[0.25]">
              SYNCHRONIZED
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {workers.slice(6).map((_, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 2.5,
                delay: index * 0.2,
                repeat: Infinity,
              }}
              className="rounded-[18px] border border-white/[0.07] bg-black p-4"
            >
              <Cpu size={14} className="text-[#9878ef]" />
              <p className="mt-5 font-mono text-[6px] text-white/[0.35]">
                WORKER {String(index + 7).padStart(2, "0")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative mt-6 grid gap-3 md:grid-cols-2">
        <div className="flex items-center gap-4 rounded-[18px] border border-white/[0.06] bg-black p-5">
          <Network size={15} className="text-[#9878ef]" />
          <div>
            <p className="text-sm">Worker communication</p>
            <p className="mt-1 text-[9px] text-white/[0.3]">
              Distributed synchronization fabric
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-[18px] border border-white/[0.06] bg-black p-5">
          <Database size={15} className="text-[#9878ef]" />
          <div>
            <p className="text-sm">Training data</p>
            <p className="mt-1 text-[9px] text-white/[0.3]">
              Shared workload data access
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}