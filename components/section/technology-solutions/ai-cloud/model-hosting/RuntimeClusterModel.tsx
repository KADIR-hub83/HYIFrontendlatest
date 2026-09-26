"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Container,
  Cpu,
  Database,
  MemoryStick,
  Network,
} from "lucide-react";

const runtimeNodes = [
  { model: "LLM", memory: "HIGH", compute: "GPU" },
  { model: "VISION", memory: "MED", compute: "GPU" },
  { model: "EMBED", memory: "LOW", compute: "CPU/GPU" },
  { model: "RERANK", memory: "MED", compute: "GPU" },
  { model: "CLASSIFY", memory: "LOW", compute: "CPU" },
  { model: "CUSTOM", memory: "MED", compute: "GPU" },
];

export default function RuntimeClusterModel() {
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-[#7046e6]/20 bg-[#030303] p-6 md:p-10">
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            MODEL RUNTIME MATRIX
          </p>
          <p className="mt-2 text-[10px] text-white/[0.28]">
            Isolated serving environments
          </p>
        </div>

        <Container size={16} className="text-[#9878ef]" />
      </div>

      <div className="relative mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {runtimeNodes.map((node, index) => (
          <motion.div
            key={node.model}
            animate={{
              borderColor: [
                "rgba(255,255,255,.07)",
                "rgba(152,120,239,.32)",
                "rgba(255,255,255,.07)",
              ],
            }}
            transition={{
              duration: 4,
              delay: index * 0.35,
              repeat: Infinity,
            }}
            whileHover={{ y: -5 }}
            className="rounded-[22px] border bg-[#080808] p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-[#7046e6]/25 bg-[#7046e6]/[0.07]">
                <BrainCircuit size={15} className="text-[#b99cff]" />
              </div>

              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-[#9878ef]"
              />
            </div>

            <p className="mt-7 font-mono text-[6px] text-[#7046e6]">
              RUNTIME 0{index + 1}
            </p>

            <h3 className="mt-3 text-xl">{node.model}</h3>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MemoryStick size={10} className="text-white/[0.25]" />
                  <span className="font-mono text-[6px] text-white/[0.25]">
                    MEMORY
                  </span>
                </div>
                <span className="font-mono text-[6px] text-white/[0.45]">
                  {node.memory}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu size={10} className="text-white/[0.25]" />
                  <span className="font-mono text-[6px] text-white/[0.25]">
                    COMPUTE
                  </span>
                </div>
                <span className="font-mono text-[6px] text-white/[0.45]">
                  {node.compute}
                </span>
              </div>
            </div>

            <div className="mt-6 h-[2px] overflow-hidden bg-white/[0.05]">
              <motion.div
                animate={{ x: ["-100%", "350%"] }}
                transition={{
                  duration: 2.4,
                  delay: index * 0.2,
                  repeat: Infinity,
                }}
                className="h-full w-1/3 bg-[#9878ef]"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative mt-4 grid gap-3 md:grid-cols-3">
        {[
          { Icon: Database, label: "MODEL REGISTRY" },
          { Icon: Network, label: "SERVING FABRIC" },
          { Icon: Cpu, label: "COMPUTE POOL" },
        ].map(({ Icon, label }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-3 rounded-[16px] border border-white/[0.06] bg-black p-4"
          >
            <Icon size={11} className="text-[#9878ef]" />
            <span className="font-mono text-[6px] text-white/[0.3]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}