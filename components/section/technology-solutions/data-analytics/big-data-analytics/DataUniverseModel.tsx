"use client";

import { motion } from "framer-motion";
import { Database, Globe2 } from "lucide-react";

const nodes = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  x: 10 + ((index * 31) % 80),
  y: 12 + ((index * 47) % 74),
}));

export default function DataUniverseModel() {
  return (
    <div className="relative h-[570px] overflow-hidden rounded-[38px] border border-[#eee5ff]/[0.11] bg-[#09090b]">
      <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9ddff]/[0.06] blur-[100px]" />

      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
          backgroundSize: "35px 35px",
        }}
      />

      {nodes.map((node) => (
        <motion.div
          key={node.id}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.4, 0.7],
          }}
          transition={{
            duration: 2 + (node.id % 4),
            repeat: Infinity,
            delay: node.id * 0.08,
          }}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#f1eaff] shadow-[0_0_15px_rgba(241,234,255,.7)]"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
        />
      ))}

      {[370, 290, 210].map((size, index) => (
        <motion.div
          key={size}
          animate={{
            rotate: index % 2 ? -360 : 360,
          }}
          transition={{
            duration: 20 + index * 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-[#eee5ff]/15"
          style={{
            width: size,
            height: size,
            marginLeft: -size / 2,
            marginTop: -size / 2,
          }}
        />
      ))}

      <motion.div
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#eee5ff]/25 bg-[#eee5ff]/[0.06] shadow-[0_0_80px_rgba(238,229,255,.12)] backdrop-blur-2xl"
      >
        <Globe2
          size={45}
          strokeWidth={1}
          className="text-[#f2ebff]"
        />
      </motion.div>

      <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between rounded-[20px] border border-white/[0.07] bg-black/40 px-5 py-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <Database size={12} className="text-[#eee5ff]/55" />

          <span className="font-mono text-[7px] tracking-[0.2em] text-white/35">
            DISTRIBUTED DATA FABRIC
          </span>
        </div>

        <span className="font-mono text-[7px] text-emerald-300/55">
          ONLINE
        </span>
      </div>
    </div>
  );
}