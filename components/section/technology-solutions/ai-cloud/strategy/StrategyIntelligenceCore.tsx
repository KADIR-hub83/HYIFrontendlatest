"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Cpu,
  Database,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

const nodes = [
  { Icon: Cloud, label: "Cloud", x: "13%", y: "25%" },
  { Icon: Database, label: "Data", x: "13%", y: "70%" },
  { Icon: Cpu, label: "Compute", x: "82%", y: "24%" },
  { Icon: ShieldCheck, label: "Governance", x: "82%", y: "69%" },
];

export default function StrategyIntelligenceCore() {
  return (
    <div className="relative mx-auto min-h-[620px] max-w-[1400px] overflow-hidden rounded-[40px] border border-[#7046e6]/20 bg-[#060606]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
        <span className="font-mono text-[8px] tracking-[0.25em] text-white/[0.32]">
          STRATEGY INTELLIGENCE SYSTEM
        </span>

        <div className="flex items-center gap-2">
          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-[#7046e6]"
          />
          <span className="font-mono text-[7px] text-[#9878ef]">ACTIVE</span>
        </div>
      </div>

      <div className="relative h-[560px]">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {[430, 330, 230].map((size, i) => (
          <motion.div
            key={size}
            animate={{ rotate: i % 2 ? -360 : 360 }}
            transition={{
              duration: 30 + i * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#7046e6]/20"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
              borderStyle: i === 1 ? "dashed" : "solid",
            }}
          />
        ))}

        <div className="absolute left-1/2 top-1/2 flex h-[155px] w-[155px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#7046e6]/35 bg-[#0b0712] shadow-[0_0_100px_rgba(112,70,230,.18)]">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          >
            <BrainCircuit size={31} className="text-[#b39af5]" />
          </motion.div>

          <p className="mt-4 text-[13px] font-medium">Strategy Core</p>
          <p className="mt-1 font-mono text-[6px] text-white/[0.28]">
            ALIGN / MODEL / PLAN
          </p>
        </div>

        {nodes.map(({ Icon, label, x, y }, index) => (
          <motion.div
            key={label}
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 3 + index * 0.4,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            className="absolute"
            style={{ left: x, top: y }}
          >
            <div className="w-[145px] rounded-[20px] border border-white/[0.08] bg-[#090909]/95 p-5">
              <Icon size={16} className="text-[#9878ef]" />
              <p className="mt-5 text-[13px]">{label}</p>
              <p className="mt-2 font-mono text-[6px] text-white/[0.25]">
                STRATEGY SIGNAL
              </p>
            </div>
          </motion.div>
        ))}

        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/[0.08] bg-black/80 px-5 py-3">
          <DollarSign size={12} className="text-[#9878ef]" />
          <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.35]">
            VALUE • RISK • PERFORMANCE • SCALE
          </span>
        </div>
      </div>
    </div>
  );
}