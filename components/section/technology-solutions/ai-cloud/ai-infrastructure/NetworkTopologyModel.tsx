"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Database, Network, Server } from "lucide-react";

const nodes = [
  { x: 12, y: 22, label: "GPU POOL", Icon: Cpu },
  { x: 12, y: 72, label: "GPU POOL", Icon: Cpu },
  { x: 84, y: 20, label: "STORAGE", Icon: Database },
  { x: 85, y: 70, label: "SERVING", Icon: Server },
  { x: 50, y: 12, label: "CONTROL", Icon: BrainCircuit },
];

export default function NetworkTopologyModel() {
  return (
    <div className="relative min-h-[620px] overflow-hidden rounded-[34px] border border-[#7046e6]/20 bg-[#030303]">
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(152,120,239,.25) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {[
          [12, 22, 50, 50],
          [12, 72, 50, 50],
          [84, 20, 50, 50],
          [85, 70, 50, 50],
          [50, 12, 50, 50],
        ].map((line, index) => (
          <motion.line
            key={index}
            x1={line[0]}
            y1={line[1]}
            x2={line[2]}
            y2={line[3]}
            stroke="#9878ef"
            strokeWidth="0.15"
            strokeDasharray="2 2"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#9878ef]/30"
      />

      <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#9878ef]/30 bg-[#0a0710]">
        <Network size={22} className="text-[#c4afff]" />
        <p className="mt-3 font-mono text-[7px]">FABRIC</p>
      </div>

      {nodes.map(({ x, y, label, Icon }, index) => (
        <motion.div
          key={`${label}-${index}`}
          animate={{
            boxShadow: [
              "0 0 0 rgba(152,120,239,0)",
              "0 0 30px rgba(152,120,239,.15)",
              "0 0 0 rgba(152,120,239,0)",
            ],
          }}
          transition={{
            duration: 3,
            delay: index * 0.4,
            repeat: Infinity,
          }}
          className="absolute flex w-[120px] -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-[16px] border border-white/[0.08] bg-black/90 p-3"
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          <Icon size={13} className="text-[#9878ef]" />
          <span className="font-mono text-[6px] text-white/[0.5]">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}