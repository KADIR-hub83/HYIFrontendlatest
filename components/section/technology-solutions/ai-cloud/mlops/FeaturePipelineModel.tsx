"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  Filter,
  Layers3,
  Server,
  Sparkles,
} from "lucide-react";

const nodes = [
  { Icon: Database, label: "RAW DATA" },
  { Icon: Filter, label: "TRANSFORM" },
  { Icon: Layers3, label: "FEATURES" },
  { Icon: Server, label: "FEATURE STORE" },
  { Icon: BrainCircuit, label: "MODEL" },
];

export default function FeaturePipelineModel() {
  return (
    <div className="relative min-h-[530px] overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#070707] p-6 md:p-8">
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(152,120,239,.25) 1px,transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
              FEATURE FLOW
            </p>
            <p className="mt-2 text-[10px] text-white/[0.28]">
              Data-to-model pipeline
            </p>
          </div>
          <Sparkles size={14} className="text-[#9878ef]" />
        </div>

        <div className="relative mt-20">
          <div className="absolute left-[7%] right-[7%] top-[40px] hidden h-px bg-[#9878ef]/25 md:block" />

          {[0, 1, 2].map((item) => (
            <motion.span
              key={item}
              animate={{ left: ["7%", "92%"] }}
              transition={{
                duration: 4.5,
                delay: item * 1.2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-[37px] z-20 hidden h-2 w-2 rounded-full bg-[#d9ceff] shadow-[0_0_18px_#9878ef] md:block"
            />
          ))}

          <div className="relative grid gap-4 md:grid-cols-5">
            {nodes.map(({ Icon, label }, index) => (
              <motion.div
                key={label}
                animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
                transition={{
                  duration: 3.5,
                  delay: index * 0.25,
                  repeat: Infinity,
                }}
                className="rounded-[20px] border border-white/[0.07] bg-black p-5 text-center"
              >
                <div className="mx-auto flex h-[80px] w-[80px] items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#0a0710]">
                  <Icon size={21} className="text-[#c9b6ff]" />
                </div>

                <p className="mt-6 font-mono text-[6px] text-white/[0.38]">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {[
            "REPEATABLE TRANSFORMS",
            "VERSIONED FEATURES",
            "TRAINING / SERVING FLOW",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[14px] border border-white/[0.06] bg-black p-4 text-center font-mono text-[5px] text-white/[0.25]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}