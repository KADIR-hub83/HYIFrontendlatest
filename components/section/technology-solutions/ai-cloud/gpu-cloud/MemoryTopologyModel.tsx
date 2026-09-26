"use client";

import { motion } from "framer-motion";
import { Cpu, Database, HardDrive, MemoryStick, Server } from "lucide-react";

const stages = [
  { Icon: Database, title: "DATA", subtitle: "Persistent" },
  { Icon: HardDrive, title: "CACHE", subtitle: "Fast access" },
  { Icon: Server, title: "HOST", subtitle: "System memory" },
  { Icon: MemoryStick, title: "GPU MEMORY", subtitle: "Accelerator" },
  { Icon: Cpu, title: "COMPUTE", subtitle: "Execution" },
];

export default function MemoryTopologyModel() {
  return (
    <div className="relative overflow-hidden rounded-[34px] border border-[#7046e6]/20 bg-[#030303] p-6 md:p-10">
      <div className="relative grid gap-4 lg:grid-cols-5">
        <div className="absolute left-[10%] right-[10%] top-[56px] hidden h-px bg-white/[0.1] lg:block" />

        <motion.div
          animate={{ left: ["10%", "89%"] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[53px] z-20 hidden h-2 w-2 rounded-full bg-[#d5c5ff] shadow-[0_0_18px_#9878ef] lg:block"
        />

        {stages.map(({ Icon, title, subtitle }, index) => (
          <motion.div
            key={title}
            whileHover={{ y: -6 }}
            className="relative z-10 rounded-[22px] border border-white/[0.07] bg-[#080808] p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#0a0710]">
              <Icon size={16} className="text-[#b99cff]" />
            </div>

            <span className="mt-9 block font-mono text-[6px] text-[#7653df]">
              MEMORY LAYER 0{index + 1}
            </span>

            <h3 className="mt-3 text-sm">{title}</h3>
            <p className="mt-2 text-[9px] text-white/[0.3]">{subtitle}</p>

            <div className="mt-6 h-1 overflow-hidden bg-white/[0.04]">
              <motion.div
                animate={{ x: ["-100%", "300%"] }}
                transition={{
                  duration: 2.4,
                  delay: index * 0.25,
                  repeat: Infinity,
                }}
                className="h-full w-1/3 bg-[#9878ef]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}