"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Cloud,
  Database,
  Layers3,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const sources = [
  { Icon: Database, label: "Operational DB" },
  { Icon: Cloud, label: "Cloud Apps" },
  { Icon: Server, label: "Enterprise" },
];

const outputs = [
  { Icon: Activity, label: "Analytics" },
  { Icon: BrainCircuit, label: "AI / ML" },
  { Icon: Sparkles, label: "Applications" },
];

export default function DataPlatformHeroModel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative mx-auto max-w-[1400px]"
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6]/20 blur-[150px]" />

      <div className="relative overflow-hidden rounded-[38px] border border-[#7046e6]/25 bg-[#060606]/95 shadow-[0_50px_150px_rgba(0,0,0,.8)]">
        {/* window top */}
        <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/[0.12]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#7046e6]" />
          </div>

          <span className="hidden font-mono text-[6px] tracking-[0.22em] text-white/[0.25] md:block">
            ENTERPRISE DATA FOUNDATION / LIVE ARCHITECTURE
          </span>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a88af3]" />
            <span className="font-mono text-[6px] text-[#a88af3]">
              ACTIVE
            </span>
          </div>
        </div>

        <div className="relative min-h-[680px] p-6 md:p-10">
          <div
            className="absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                "radial-gradient(circle,rgba(112,70,230,.45) 1px,transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative grid min-h-[600px] items-center gap-10 lg:grid-cols-[1fr_1.35fr_1fr]">
            {/* Sources */}
            <div className="space-y-4">
              <p className="mb-6 font-mono text-[6px] tracking-[0.25em] text-white/[0.22]">
                DATA SOURCES
              </p>

              {sources.map(({ Icon, label }, index) => (
                <motion.div
                  key={label}
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 3,
                    delay: index * 0.4,
                    repeat: Infinity,
                  }}
                  className="flex items-center gap-4 rounded-[18px] border border-white/[0.07] bg-black/70 p-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-[#7046e6]/30 bg-[#7046e6]/10">
                    <Icon size={15} className="text-[#bda8f8]" />
                  </div>

                  <div>
                    <p className="text-[10px] text-white/[0.65]">
                      {label}
                    </p>
                    <p className="mt-1 font-mono text-[5px] text-white/[0.2]">
                      CONNECTED SOURCE
                    </p>
                  </div>

                  <motion.span
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                      duration: 2,
                      delay: index * 0.4,
                      repeat: Infinity,
                    }}
                    className="ml-auto h-1.5 w-1.5 rounded-full bg-[#7046e6]"
                  />
                </motion.div>
              ))}
            </div>

            {/* CORE */}
            <div className="relative flex min-h-[450px] items-center justify-center">
              {[400, 320, 240].map((size, index) => (
                <motion.div
                  key={size}
                  animate={{
                    rotate: index % 2 === 0 ? 360 : -360,
                  }}
                  transition={{
                    duration: 22 + index * 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute rounded-full border border-[#7046e6]/[0.18]"
                  style={{
                    width: size,
                    height: size,
                  }}
                >
                  <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-[#c7b6fa] shadow-[0_0_18px_#7046e6]" />
                </motion.div>
              ))}

              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                  boxShadow: [
                    "0 0 30px rgba(112,70,230,.1)",
                    "0 0 80px rgba(112,70,230,.35)",
                    "0 0 30px rgba(112,70,230,.1)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="relative z-20 flex h-[170px] w-[170px] flex-col items-center justify-center rounded-full border border-[#7046e6]/45 bg-[#09060e]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-[#7046e6]/30 bg-[#7046e6]/10">
                  <Layers3 size={23} className="text-[#d6c9ff]" />
                </div>

                <p className="mt-4 text-[11px] font-medium">
                  Data Platform
                </p>

                <p className="mt-2 font-mono text-[5px] tracking-[0.18em] text-[#a88af3]">
                  UNIFIED CORE
                </p>
              </motion.div>

              {[
                { Icon: Network, top: "12%", left: "17%" },
                { Icon: ShieldCheck, top: "70%", left: "12%" },
                { Icon: Database, top: "20%", left: "78%" },
                { Icon: Cloud, top: "73%", left: "76%" },
              ].map(({ Icon, top, left }, index) => (
                <motion.div
                  key={index}
                  animate={{
                    y: [0, index % 2 === 0 ? -7 : 7, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.4,
                    repeat: Infinity,
                  }}
                  className="absolute z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#7046e6]/25 bg-[#08060c]"
                  style={{ top, left }}
                >
                  <Icon size={14} className="text-[#a88af3]" />
                </motion.div>
              ))}
            </div>

            {/* consumers */}
            <div className="space-y-4">
              <p className="mb-6 font-mono text-[6px] tracking-[0.25em] text-white/[0.22]">
                DATA CONSUMERS
              </p>

              {outputs.map(({ Icon, label }, index) => (
                <motion.div
                  key={label}
                  animate={{ x: [0, -4, 0] }}
                  transition={{
                    duration: 3,
                    delay: index * 0.4,
                    repeat: Infinity,
                  }}
                  className="flex items-center gap-4 rounded-[18px] border border-white/[0.07] bg-black/70 p-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-[#7046e6]/30 bg-[#7046e6]/10">
                    <Icon size={15} className="text-[#bda8f8]" />
                  </div>

                  <div>
                    <p className="text-[10px] text-white/[0.65]">
                      {label}
                    </p>
                    <p className="mt-1 font-mono text-[5px] text-white/[0.2]">
                      PLATFORM CONSUMER
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}