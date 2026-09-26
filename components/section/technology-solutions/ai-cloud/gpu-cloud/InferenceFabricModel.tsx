"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cpu, Radio, Send } from "lucide-react";

const endpoints = ["LLM", "VISION", "EMBED", "RANK"];

export default function InferenceFabricModel() {
  return (
    <div className="relative min-h-[620px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#070707] p-7">
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(152,120,239,.3) 1px,transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="font-mono text-[7px] text-[#9878ef]">
            INFERENCE FABRIC
          </p>
          <p className="mt-2 text-[10px] text-white/[0.3]">
            Request → model → response
          </p>
        </div>

        <Radio size={15} className="animate-pulse text-[#9878ef]" />
      </div>

      <div className="relative mt-12 flex min-h-[470px] items-center justify-between gap-5">
        <div className="space-y-4">
          {[1, 2, 3, 4].map((request) => (
            <motion.div
              key={request}
              animate={{ x: [0, 8, 0] }}
              transition={{
                duration: 2,
                delay: request * 0.3,
                repeat: Infinity,
              }}
              className="flex items-center gap-3 rounded-[15px] border border-white/[0.07] bg-black p-3"
            >
              <Send size={11} className="text-[#9878ef]" />
              <span className="font-mono text-[6px] text-white/[0.4]">
                REQUEST {request}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="relative flex h-[220px] w-[220px] shrink-0 items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-[#9878ef]/30"
          />

          <div className="flex h-[130px] w-[130px] flex-col items-center justify-center rounded-full border border-[#9878ef]/30 bg-[#0b0811]">
            <BrainCircuit size={24} className="text-[#d5c5ff]" />
            <span className="mt-3 font-mono text-[7px]">ROUTER</span>
          </div>
        </div>

        <div className="space-y-4">
          {endpoints.map((endpoint, index) => (
            <motion.div
              key={endpoint}
              animate={{ x: [0, -8, 0] }}
              transition={{
                duration: 2,
                delay: index * 0.3,
                repeat: Infinity,
              }}
              className="flex items-center gap-3 rounded-[15px] border border-white/[0.07] bg-black p-3"
            >
              <Cpu size={11} className="text-[#9878ef]" />
              <span className="font-mono text-[6px] text-white/[0.4]">
                {endpoint}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}