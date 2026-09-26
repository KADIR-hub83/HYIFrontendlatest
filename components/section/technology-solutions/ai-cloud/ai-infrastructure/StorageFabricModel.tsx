"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, HardDrive, Layers3 } from "lucide-react";

const stores = [
  { Icon: Database, title: "DATA LAKE", value: "TRAINING DATA" },
  { Icon: HardDrive, title: "FAST TIER", value: "ACTIVE SET" },
  { Icon: Layers3, title: "ARTIFACTS", value: "MODELS" },
];

export default function StorageFabricModel() {
  return (
    <div className="relative min-h-[620px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#070707]">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative flex h-full min-h-[620px] flex-col justify-center p-7 md:p-10">
        <div className="mx-auto flex h-32 w-32 flex-col items-center justify-center rounded-full border border-[#9878ef]/30 bg-[#0b0812] shadow-[0_0_80px_rgba(112,70,230,.15)]">
          <BrainCircuit size={23} className="text-[#b99cff]" />
          <p className="mt-3 font-mono text-[7px] text-white/[0.5]">
            AI WORKLOAD
          </p>
        </div>

        <div className="relative mx-auto mt-16 grid w-full max-w-[700px] gap-4 md:grid-cols-3">
          {stores.map(({ Icon, title, value }, index) => (
            <motion.div
              key={title}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                delay: index * 0.4,
                repeat: Infinity,
              }}
              className="rounded-[22px] border border-white/[0.07] bg-black/80 p-6"
            >
              <Icon size={17} className="text-[#a98cf4]" />
              <p className="mt-7 text-sm">{title}</p>
              <p className="mt-3 font-mono text-[6px] tracking-[0.18em] text-white/[0.3]">
                {value}
              </p>

              <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/[0.05]">
                <motion.div
                  animate={{ x: ["-100%", "300%"] }}
                  transition={{
                    duration: 2.5,
                    delay: index * 0.3,
                    repeat: Infinity,
                  }}
                  className="h-full w-1/3 bg-[#9878ef]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}