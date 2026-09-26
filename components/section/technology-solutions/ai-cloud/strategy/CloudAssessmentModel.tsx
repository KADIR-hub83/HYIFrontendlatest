"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Database,
  LockKeyhole,
  Network,
  Users,
} from "lucide-react";

const dimensions = [
  { Icon: Cloud, name: "Cloud foundation", value: 76 },
  { Icon: Database, name: "Data readiness", value: 68 },
  { Icon: BrainCircuit, name: "AI capability", value: 57 },
  { Icon: LockKeyhole, name: "Security", value: 83 },
  { Icon: Network, name: "Integration", value: 64 },
  { Icon: Users, name: "Operating model", value: 71 },
];

export default function CloudAssessmentModel() {
  return (
    <div className="overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#080808]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-7 py-5">
        <span className="font-mono text-[8px] tracking-[0.22em] text-white/[0.3]">
          AI CLOUD READINESS SCAN
        </span>
        <span className="font-mono text-[7px] text-[#9878ef]">
          ILLUSTRATIVE MODEL
        </span>
      </div>

      <div className="grid lg:grid-cols-[.7fr_1.3fr]">
        <div className="flex min-h-[440px] items-center justify-center border-b border-white/[0.06] p-8 lg:border-b-0 lg:border-r">
          <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-full border border-[#7046e6]/20">
            {[230, 180].map((size, i) => (
              <motion.div
                key={size}
                animate={{ rotate: i ? -360 : 360 }}
                transition={{
                  duration: i ? 22 : 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute rounded-full border border-dashed border-[#7046e6]/25"
                style={{ width: size, height: size }}
              />
            ))}

            <div className="text-center">
              <p className="text-6xl font-medium tracking-[-0.06em]">70</p>
              <p className="mt-2 font-mono text-[7px] tracking-[0.2em] text-[#9878ef]">
                READINESS INDEX
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-px bg-white/[0.06] sm:grid-cols-2">
          {dimensions.map(({ Icon, name, value }, index) => (
            <div key={name} className="bg-[#080808] p-7">
              <div className="flex items-center justify-between">
                <Icon size={16} className="text-[#9878ef]" />
                <span className="font-mono text-[8px] text-white/[0.25]">
                  0{index + 1}
                </span>
              </div>

              <p className="mt-7 text-[16px] font-medium">{name}</p>

              <div className="mt-5 h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.08 }}
                  className="h-full bg-[#7046e6]"
                />
              </div>

              <div className="mt-3 flex justify-between font-mono text-[7px] text-white/[0.3]">
                <span>MATURITY</span>
                <span>{value}/100</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}