"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cpu,
  Database,
  Network,
  Server,
  Sparkles,
} from "lucide-react";

const nodes = [
  { Icon: Cpu, label: "GPU", sub: "COMPUTE" },
  { Icon: Server, label: "CLUSTER", sub: "SCALE" },
  { Icon: Network, label: "FABRIC", sub: "NETWORK" },
  { Icon: Database, label: "DATA", sub: "STORAGE" },
];

export default function ComputeFabricModel() {
  return (
    <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[42px] border border-white/[0.08] bg-[#060606]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5 md:px-8">
        <div>
          <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-[#9d80ee]">
            HYI AI COMPUTE FABRIC
          </p>
          <p className="mt-2 text-[10px] text-white/[0.3]">
            Accelerated infrastructure topology
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-[7px] tracking-[0.2em] text-[#9d80ee]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#9d80ee]" />
          ACTIVE
        </div>
      </div>

      <div className="relative min-h-[660px] overflow-hidden md:min-h-[720px]">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6]/[0.06] blur-[100px]" />

        {[460, 340, 220].map((size, index) => (
          <motion.div
            key={size}
            animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
            transition={{
              duration: 30 + index * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#9878ef]/[0.15]"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
            }}
          >
            <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-[#d9cbef] shadow-[0_0_20px_#9878ef]" />
          </motion.div>
        ))}

        <motion.div
          animate={{
            boxShadow: [
              "0 0 30px rgba(112,70,230,.15)",
              "0 0 80px rgba(112,70,230,.4)",
              "0 0 30px rgba(112,70,230,.15)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute left-1/2 top-1/2 flex h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#a98cf4]/30 bg-[#09070e]"
        >
          <BrainCircuit size={28} className="text-[#c4afff]" />

          <span className="mt-4 text-sm font-medium">AI CORE</span>

          <span className="mt-2 font-mono text-[6px] tracking-[0.25em] text-white/[0.3]">
            ORCHESTRATING
          </span>
        </motion.div>

        <div className="absolute inset-x-6 bottom-7 grid grid-cols-2 gap-3 md:inset-x-10 md:grid-cols-4">
          {nodes.map(({ Icon, label, sub }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[20px] border border-white/[0.07] bg-black/70 p-4 backdrop-blur-xl"
            >
              <Icon size={14} className="text-[#a98cf4]" />
              <p className="mt-5 text-sm">{label}</p>
              <p className="mt-2 font-mono text-[6px] tracking-[0.2em] text-white/[0.25]">
                {sub}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 top-[46%] h-px w-full bg-gradient-to-r from-transparent via-[#c4afff] to-transparent opacity-40"
        />

        <Sparkles
          size={16}
          className="absolute right-[12%] top-[18%] text-[#b99cff]"
        />
      </div>
    </div>
  );
}