"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  CheckCircle2,
  GitBranch,
  Radio,
  Tag,
} from "lucide-react";

const versions = [
  { version: "v4.8", state: "PRODUCTION", stage: "Champion" },
  { version: "v4.9", state: "STAGING", stage: "Candidate" },
  { version: "v5.0-rc", state: "VALIDATION", stage: "Experiment" },
  { version: "v4.7", state: "ARCHIVED", stage: "Previous" },
];

export default function ModelRegistryModel() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#070707]">
      <div className="flex items-center justify-between border-b border-white/[0.06] p-6">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            MODEL REGISTRY
          </p>
          <p className="mt-2 text-[10px] text-white/[0.28]">
            Versioned production assets
          </p>
        </div>

        <GitBranch size={15} className="text-[#9878ef]" />
      </div>

      <div className="p-6">
        <div className="rounded-[20px] border border-[#7046e6]/20 bg-[#7046e6]/[0.05] p-5">
          <div className="flex items-center gap-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-[#9878ef]/40"
            >
              <BrainCircuit size={18} className="text-[#d3c5ff]" />
            </motion.div>

            <div>
              <p className="text-sm">recommendation-core</p>
              <p className="mt-1 font-mono text-[6px] text-white/[0.25]">
                MODEL FAMILY / PRODUCTION
              </p>
            </div>

            <Radio size={11} className="ml-auto animate-pulse text-[#9878ef]" />
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {versions.map((item, index) => (
            <motion.div
              key={item.version}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ x: 4 }}
              className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-[18px] border border-white/[0.06] bg-black p-5 md:grid-cols-[1fr_1fr_1fr_auto]"
            >
              <div className="flex items-center gap-3">
                <Tag size={10} className="text-[#9878ef]" />
                <span className="font-mono text-[8px] text-white/[0.55]">
                  {item.version}
                </span>
              </div>

              <span className="hidden font-mono text-[6px] text-white/[0.28] md:block">
                {item.stage}
              </span>

              <span className="hidden font-mono text-[6px] text-[#9878ef] md:block">
                {item.state}
              </span>

              <CheckCircle2
                size={11}
                className={
                  index === 0 ? "text-[#c9b6ff]" : "text-white/[0.2]"
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}