"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  CloudCog,
  GitBranch,
  MonitorCog,
  ShieldCheck,
} from "lucide-react";

const layers = [
  {
    Icon: GitBranch,
    title: "Experiment",
    text: "Versioned datasets • Models • Parameters",
  },
  {
    Icon: Boxes,
    title: "Package",
    text: "Model registry • Artifacts • Containers",
  },
  {
    Icon: ShieldCheck,
    title: "Validate",
    text: "Quality gates • Testing • Governance",
  },
  {
    Icon: CloudCog,
    title: "Deploy",
    text: "Cloud • Edge • APIs • Private infrastructure",
  },
  {
    Icon: MonitorCog,
    title: "Monitor",
    text: "Performance • Drift • Reliability • Feedback",
  },
];

export default function MLOpsArchitecture() {
  return (
    <section className="border-y border-white/[0.06] bg-[#07070a] py-32 md:py-48">
      <div className="mx-auto max-w-[1300px] px-5 md:px-10">
        <div className="text-center">
          <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            07 / MLOps Architecture
          </span>

          <h2 className="mx-auto mt-7 max-w-[950px] text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Engineering beyond
            <span className="text-white/55"> the model.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-[700px] text-[15px] leading-8 text-white/65">
            Production AI requires reliable infrastructure for model versioning,
            validation, deployment, observability and continuous improvement.
          </p>
        </div>

        <div className="relative mx-auto mt-24 max-w-[850px]">
          <div className="absolute left-[28px] top-0 h-full w-px bg-gradient-to-b from-transparent via-violet-200/30 to-transparent md:left-1/2" />

          <div className="space-y-4">
            {layers.map(({ Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 rounded-[24px] border border-white/[0.08] bg-[#09090c]/95 p-6 backdrop-blur-xl md:p-8"
              >
                <div className="flex items-center gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-200/20 bg-violet-200/[0.04]">
                    <Icon size={18} className="text-violet-100/75" />
                  </div>

                  <div>
                    <p className="text-[7px] tracking-[0.22em] text-white/25">
                      STAGE 0{index + 1}
                    </p>

                    <h3 className="mt-2 text-xl text-white/88">{title}</h3>

                    <p className="mt-2 text-sm text-white/55">{text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}