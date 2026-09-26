"use client";

import { motion } from "framer-motion";
import { Activity, Crosshair, Radar, Radio } from "lucide-react";

const points = [
  { left: "28%", top: "31%" },
  { left: "68%", top: "29%" },
  { left: "39%", top: "67%" },
  { left: "71%", top: "63%" },
  { left: "55%", top: "44%" },
];

export default function DriftRadarModel() {
  return (
    <div className="overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#070707] p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            DRIFT OBSERVATORY
          </p>
          <p className="mt-2 text-[10px] text-white/[0.28]">
            Production signal monitoring
          </p>
        </div>

        <Radio size={13} className="animate-pulse text-[#9878ef]" />
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-[1fr_220px]">
        <div className="relative mx-auto aspect-square w-full max-w-[480px] overflow-hidden rounded-full border border-[#9878ef]/25 bg-black">
          {[25, 45, 65, 85].map((size) => (
            <div
              key={size}
              className="absolute left-1/2 top-1/2 rounded-full border border-[#9878ef]/[0.12]"
              style={{
                width: `${size}%`,
                height: `${size}%`,
                transform: "translate(-50%,-50%)",
              }}
            />
          ))}

          <div className="absolute left-1/2 top-[8%] bottom-[8%] w-px bg-[#9878ef]/10" />
          <div className="absolute left-[8%] right-[8%] top-1/2 h-px bg-[#9878ef]/10" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, rgba(152,120,239,.02) 270deg, rgba(152,120,239,.22) 355deg, transparent 360deg)",
            }}
          />

          {points.map((point, index) => (
            <motion.span
              key={index}
              animate={{
                scale: [0.8, 1.5, 0.8],
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 2.4,
                delay: index * 0.45,
                repeat: Infinity,
              }}
              className="absolute h-2.5 w-2.5 rounded-full bg-[#c9b6ff] shadow-[0_0_18px_#9878ef]"
              style={{ left: point.left, top: point.top }}
            />
          ))}

          <div className="absolute left-1/2 top-1/2 flex h-[95px] w-[95px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#9878ef]/30 bg-[#08060c]">
            <Radar size={20} className="text-[#d3c5ff]" />
            <span className="mt-2 font-mono text-[5px] text-white/[0.35]">
              BASELINE
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {[
            ["INPUT SHIFT", "OBSERVED"],
            ["OUTPUT SIGNAL", "STABLE"],
            ["BASELINE", "TRACKED"],
            ["REVIEW", "READY"],
          ].map(([label, value], index) => (
            <motion.div
              key={label}
              animate={{ x: [0, index % 2 === 0 ? 3 : -3, 0] }}
              transition={{
                duration: 3,
                delay: index * 0.3,
                repeat: Infinity,
              }}
              className="rounded-[17px] border border-white/[0.06] bg-black p-4"
            >
              <div className="flex items-center justify-between">
                <Crosshair size={10} className="text-[#9878ef]" />
                <Activity size={9} className="text-white/[0.2]" />
              </div>
              <p className="mt-4 font-mono text-[5px] text-white/[0.22]">
                {label}
              </p>
              <p className="mt-2 text-[9px] text-[#b99cff]">{value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}