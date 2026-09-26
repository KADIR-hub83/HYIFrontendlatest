"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cloud, Cpu, Database, Network, Shield } from "lucide-react";

const satellites = [
  { Icon: Cloud, name: "Cloud", angle: 0 },
  { Icon: Database, name: "Data", angle: 60 },
  { Icon: Cpu, name: "Compute", angle: 120 },
  { Icon: Shield, name: "Security", angle: 180 },
  { Icon: Network, name: "Network", angle: 240 },
  { Icon: BrainCircuit, name: "AI", angle: 300 },
];

export default function ArchitectureUniverse() {
  return (
    <div className="relative min-h-[700px] overflow-hidden rounded-[38px] border border-[#7046e6]/20 bg-[#030303]">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6]/[0.06] blur-[120px]" />

      {[500, 390, 280].map((size, i) => (
        <motion.div
          key={size}
          animate={{ rotate: i % 2 ? -360 : 360 }}
          transition={{
            duration: 45 + i * 10,
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

      <div className="absolute left-1/2 top-1/2 z-10 flex h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#7046e6]/35 bg-[#0c0814]">
        <BrainCircuit size={30} className="text-[#b39af5]" />
        <p className="mt-4 text-[14px]">AI Cloud Core</p>
      </div>

      {satellites.map(({ Icon, name, angle }, index) => {
        const rad = (angle * Math.PI) / 180;
        const x = 50 + Math.cos(rad) * 34;
        const y = 50 + Math.sin(rad) * 34;

        return (
          <motion.div
            key={name}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3 + index * 0.3,
              repeat: Infinity,
            }}
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className="flex w-[125px] flex-col items-center rounded-[18px] border border-white/[0.08] bg-[#090909] p-4 text-center">
              <Icon size={16} className="text-[#9878ef]" />
              <span className="mt-3 text-[11px]">{name}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}