"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  CheckCircle2,
  Database,
  GitBranch,
  Rocket,
} from "lucide-react";

const stages = [
  { Icon: Database, title: "Data", sub: "VERSIONED INPUT" },
  { Icon: BrainCircuit, title: "Train", sub: "EXPERIMENT" },
  { Icon: CheckCircle2, title: "Validate", sub: "QUALITY GATE" },
  { Icon: GitBranch, title: "Register", sub: "MODEL ASSET" },
  { Icon: Rocket, title: "Deploy", sub: "RELEASE" },
  { Icon: Activity, title: "Monitor", sub: "FEEDBACK" },
];

export default function LifecyclePipelineModel() {
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-[#7046e6]/20 bg-[#030303] px-6 py-10 md:px-10 md:py-14">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(152,120,239,.3) 1px,transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
              CONTINUOUS ML LOOP
            </p>
            <p className="mt-2 text-[10px] text-white/[0.28]">
              Model lifecycle orchestration
            </p>
          </div>

          <Activity size={14} className="text-[#9878ef]" />
        </div>

        <div className="relative mt-14">
          <div className="absolute left-[6%] right-[6%] top-[48px] hidden h-px bg-[#9878ef]/25 lg:block" />

          <motion.span
            animate={{ left: ["6%", "93%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute top-[45px] z-30 hidden h-2 w-2 rounded-full bg-[#e0d7ff] shadow-[0_0_20px_#9878ef] lg:block"
          />

          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {stages.map(({ Icon, title, sub }, index) => (
              <motion.div
                key={title}
                whileHover={{ y: -7 }}
                className="relative z-10 rounded-[22px] border border-white/[0.07] bg-[#080808] p-5"
              >
                <motion.div
                  animate={{ rotate: index % 2 === 0 ? [0, 5, 0] : [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    delay: index * 0.2,
                    repeat: Infinity,
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#0a0710]"
                >
                  <Icon size={17} className="text-[#c9b6ff]" />
                </motion.div>

                <p className="mt-8 font-mono text-[5px] text-[#7046e6]">
                  STAGE 0{index + 1}
                </p>
                <h3 className="mt-3 text-lg">{title}</h3>
                <p className="mt-2 font-mono text-[5px] text-white/[0.22]">
                  {sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3 font-mono text-[6px] tracking-[0.2em] text-white/[0.22]">
          PRODUCTION FEEDBACK
          <motion.span
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
          NEXT ITERATION
        </div>
      </div>
    </div>
  );
}