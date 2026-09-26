"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Network, Radio, Sparkles, Zap } from "lucide-react";

const gpuNodes = [
  { x: 10, y: 20, label: "GPU-01" },
  { x: 10, y: 72, label: "GPU-02" },
  { x: 29, y: 12, label: "GPU-03" },
  { x: 29, y: 82, label: "GPU-04" },
  { x: 71, y: 12, label: "GPU-05" },
  { x: 71, y: 82, label: "GPU-06" },
  { x: 90, y: 20, label: "GPU-07" },
  { x: 90, y: 72, label: "GPU-08" },
];

export default function NeuralComputeGrid() {
  return (
    <div className="relative mx-auto max-w-[1420px] overflow-hidden rounded-[42px] border border-[#7653df]/25 bg-[#060606]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5 md:px-8">
        <div>
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#a98cf4]">
            NEURAL COMPUTE GRID
          </p>
          <p className="mt-2 text-[10px] text-white/[0.28]">
            Distributed accelerator orchestration
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-[7px] tracking-[0.2em] text-[#a98cf4]">
          <Radio size={11} />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a98cf4]" />
          FABRIC ACTIVE
        </div>
      </div>

      <div className="relative min-h-[720px] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "radial-gradient(circle,rgba(169,140,244,.32) 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6]/[0.08] blur-[110px]" />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {gpuNodes.map((node, index) => (
            <motion.path
              key={node.label}
              d={`M ${node.x} ${node.y} Q 50 ${
                index % 2 === 0 ? 30 : 70
              } 50 50`}
              fill="none"
              stroke="#9878ef"
              strokeWidth="0.12"
              strokeDasharray="1.5 1.5"
              animate={{ strokeDashoffset: [0, -15] }}
              transition={{
                duration: 3 + index * 0.15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </svg>

        {[430, 320, 220].map((size, index) => (
          <motion.div
            key={size}
            animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
            transition={{
              duration: 22 + index * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 rounded-full border border-[#a98cf4]/[0.16]"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
            }}
          >
            <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-[#e6ddff] shadow-[0_0_22px_#a98cf4]" />
          </motion.div>
        ))}

        <motion.div
          animate={{
            scale: [1, 1.04, 1],
            boxShadow: [
              "0 0 40px rgba(112,70,230,.15)",
              "0 0 100px rgba(112,70,230,.35)",
              "0 0 40px rgba(112,70,230,.15)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute left-1/2 top-1/2 z-10 flex h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#b59aff]/35 bg-[#0b0811]"
        >
          <BrainCircuit size={29} className="text-[#d4c4ff]" />
          <p className="mt-4 text-sm">GPU CLOUD</p>
          <p className="mt-2 font-mono text-[6px] tracking-[0.22em] text-white/[0.3]">
            ORCHESTRATING
          </p>
        </motion.div>

        {gpuNodes.map((node, index) => (
          <motion.div
            key={node.label}
            animate={{
              y: [0, -5, 0],
              boxShadow: [
                "0 0 0 rgba(152,120,239,0)",
                "0 0 25px rgba(152,120,239,.18)",
                "0 0 0 rgba(152,120,239,0)",
              ],
            }}
            transition={{
              duration: 3,
              delay: index * 0.25,
              repeat: Infinity,
            }}
            className="absolute z-20 w-[105px] -translate-x-1/2 -translate-y-1/2 rounded-[15px] border border-white/[0.08] bg-black/90 p-3 backdrop-blur-xl"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
            }}
          >
            <div className="flex items-center gap-2">
              <Cpu size={11} className="text-[#a98cf4]" />
              <span className="font-mono text-[6px] text-white/[0.5]">
                {node.label}
              </span>
            </div>

            <div className="mt-3 h-[2px] overflow-hidden bg-white/[0.05]">
              <motion.div
                animate={{ x: ["-100%", "300%"] }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                }}
                className="h-full w-1/3 bg-[#b99cff]"
              />
            </div>
          </motion.div>
        ))}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2"
        >
          <Sparkles
            size={14}
            className="absolute right-0 top-1/2 text-[#d9ccff]"
          />
          <Zap
            size={13}
            className="absolute bottom-[15%] left-[12%] text-[#9878ef]"
          />
          <Network
            size={14}
            className="absolute left-[20%] top-[5%] text-[#9878ef]"
          />
        </motion.div>
      </div>
    </div>
  );
}