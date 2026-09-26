"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  GitBranch,
  Radio,
} from "lucide-react";

const versions = [
  { version: "v4.1", label: "CURRENT", traffic: "Stable" },
  { version: "v4.2", label: "CANDIDATE", traffic: "Evaluating" },
  { version: "v4.3", label: "NEXT", traffic: "Prepared" },
];

export default function VersionRolloutModel() {
  return (
    <div className="relative overflow-hidden rounded-[34px] border border-[#7046e6]/20 bg-[#030303] p-6 md:p-10">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            MODEL RELEASE CONTROL
          </p>
          <p className="mt-2 text-[10px] text-white/[0.28]">
            Version-aware deployment lifecycle
          </p>
        </div>

        <GitBranch size={16} className="text-[#9878ef]" />
      </div>

      <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
        <div className="absolute left-[15%] right-[15%] top-[72px] hidden h-px bg-[#9878ef]/20 lg:block" />

        <motion.div
          animate={{ left: ["15%", "84%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute top-[69px] z-30 hidden h-2 w-2 rounded-full bg-[#d5c5ff] shadow-[0_0_18px_#9878ef] lg:block"
        />

        {versions.map((item, index) => (
          <motion.div
            key={item.version}
            whileHover={{ y: -5 }}
            className={`relative z-10 rounded-[25px] border p-6 ${
              index === 1
                ? "border-[#9878ef]/30 bg-[#7046e6]/[0.07]"
                : "border-white/[0.07] bg-[#080808]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#0a0710]">
                <BrainCircuit size={16} className="text-[#c9b6ff]" />
              </div>

              {index === 0 ? (
                <CheckCircle2 size={13} className="text-[#9878ef]" />
              ) : (
                <Radio size={12} className="text-[#9878ef]" />
              )}
            </div>

            <p className="mt-9 font-mono text-[6px] text-[#9878ef]">
              {item.label}
            </p>

            <h3 className="mt-3 text-3xl">{item.version}</h3>

            <p className="mt-3 text-[10px] text-white/[0.35]">
              {item.traffic}
            </p>

            <div className="mt-7 h-[3px] overflow-hidden rounded-full bg-white/[0.05]">
              <motion.div
                animate={{
                  width:
                    index === 0
                      ? ["90%", "94%", "90%"]
                      : index === 1
                        ? ["20%", "55%", "20%"]
                        : ["5%", "12%", "5%"],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="h-full bg-gradient-to-r from-[#7046e6] to-[#c9b6ff]"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-4 font-mono text-[6px] text-white/[0.25]">
        <span>VALIDATE</span>
        <ArrowRight size={9} />
        <span>DEPLOY</span>
        <ArrowRight size={9} />
        <span>SHIFT</span>
        <ArrowRight size={9} />
        <span>OBSERVE</span>
        <ArrowRight size={9} />
        <span>PROMOTE / ROLLBACK</span>
      </div>
    </div>
  );
}