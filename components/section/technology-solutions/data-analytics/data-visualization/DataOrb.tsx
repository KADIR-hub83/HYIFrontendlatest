"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: "14%", y: "29%", size: 7 },
  { x: "25%", y: "64%", size: 5 },
  { x: "38%", y: "20%", size: 6 },
  { x: "47%", y: "76%", size: 7 },
  { x: "62%", y: "18%", size: 5 },
  { x: "73%", y: "61%", size: 7 },
  { x: "84%", y: "34%", size: 5 },
  { x: "57%", y: "48%", size: 8 },
  { x: "31%", y: "45%", size: 5 },
];

export default function DataOrb() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px]">
      <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.15] blur-[100px]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[4%] rounded-full border border-white/[0.06]"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[12%] rounded-full border border-dashed border-violet-200/[0.15]"
      />

      <motion.div
        animate={{ rotateX: [64, 74, 64], rotateZ: 360 }}
        transition={{
          rotateX: { duration: 8, repeat: Infinity },
          rotateZ: { duration: 25, repeat: Infinity, ease: "linear" },
        }}
        className="absolute inset-[19%] rounded-full border border-violet-200/[0.22]"
        style={{
          transformStyle: "preserve-3d",
          boxShadow:
            "0 0 80px rgba(139,92,246,.12), inset 0 0 70px rgba(139,92,246,.05)",
        }}
      />

      <motion.div
        animate={{ rotateY: 360, rotateZ: -20 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[19%] rounded-full border border-fuchsia-200/[0.13]"
      />

      <div className="absolute inset-[24%] overflow-hidden rounded-full border border-white/[0.08] bg-gradient-to-br from-white/[0.07] via-violet-400/[0.05] to-black shadow-[0_0_100px_rgba(139,92,246,.15)] backdrop-blur-2xl">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(196,181,253,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(196,181,253,.08) 1px,transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <motion.div
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-100/80 to-transparent shadow-[0_0_15px_rgba(221,214,254,.7)]"
        />

        <div className="absolute inset-0">
          {nodes.map((node, index) => (
            <motion.span
              key={index}
              className="absolute rounded-full bg-violet-100 shadow-[0_0_18px_rgba(221,214,254,.9)]"
              style={{
                left: node.x,
                top: node.y,
                width: node.size,
                height: node.size,
              }}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 2.2 + index * 0.15,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mx-auto h-3 w-3 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,.9)]"
          />

          <div className="mt-4 text-[7px] tracking-[0.3em] text-white/45">
            LIVE DATA
          </div>
        </div>
      </div>

      {[
        ["24.8M", "DATA POINTS", "8%", "20%"],
        ["128", "STREAMS", "70%", "17%"],
        ["14ms", "REFRESH", "75%", "72%"],
        ["99.9%", "UPTIME", "6%", "72%"],
      ].map(([value, label, left, top], index) => (
        <motion.div
          key={label}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-2xl border border-white/[0.08] bg-black/50 px-5 py-4 backdrop-blur-xl"
          style={{ left, top }}
        >
          <div className="text-lg text-white/90">{value}</div>
          <div className="mt-1 text-[6px] tracking-[0.2em] text-white/35">
            {label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}