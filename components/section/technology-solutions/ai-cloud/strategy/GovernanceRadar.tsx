"use client";

import { motion } from "framer-motion";
import { Crosshair, ShieldCheck } from "lucide-react";

const controls = [
  { label: "Identity", x: "29%", y: "34%" },
  { label: "Data", x: "66%", y: "28%" },
  { label: "Models", x: "72%", y: "62%" },
  { label: "Cost", x: "38%", y: "70%" },
];

export default function GovernanceRadar() {
  return (
    <div className="relative min-h-[600px] overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#070707]">
      <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-[#7046e6]/25">
        {[25, 50, 75].map((size) => (
          <div
            key={size}
            className="absolute left-1/2 top-1/2 rounded-full border border-white/[0.07]"
            style={{
              width: `${size}%`,
              height: `${size}%`,
              transform: "translate(-50%,-50%)",
            }}
          />
        ))}

        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.06]" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.06]" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(112,70,230,.18) 35deg, transparent 70deg)",
          }}
        />

        {controls.map((control, index) => (
          <motion.div
            key={control.label}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.35 }}
            className="absolute"
            style={{ left: control.x, top: control.y }}
          >
            <div className="h-3 w-3 rounded-full border border-[#a98cf4] bg-[#7046e6] shadow-[0_0_18px_#7046e6]" />
            <span className="mt-2 block text-[8px] text-white/[0.45]">
              {control.label}
            </span>
          </motion.div>
        ))}

        <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#0c0814]">
          <ShieldCheck size={25} className="text-[#b39af5]" />
        </div>
      </div>

      <div className="absolute bottom-6 left-6 flex items-center gap-2">
        <Crosshair size={12} className="text-[#9878ef]" />
        <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.3]">
          CONTINUOUS CONTROL VISIBILITY
        </span>
      </div>
    </div>
  );
}