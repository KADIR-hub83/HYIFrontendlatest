"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowDown,
  GitBranch,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";
import MLOpsMissionControl from "./MLOpsMissionControl";

const features = [
  { Icon: GitBranch, text: "Versioned lifecycle" },
  { Icon: RefreshCcw, text: "Continuous delivery" },
  { Icon: Activity, text: "Model monitoring" },
  { Icon: ShieldCheck, text: "Governed operations" },
];

export default function MLOpsHero() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-5 pb-28 pt-28 md:px-10 md:pt-36">
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage:
            "radial-gradient(circle at 50% 30%,black,transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 30%,black,transparent 72%)",
        }}
      />

      <div className="absolute left-1/2 top-[330px] h-[650px] w-[1100px] -translate-x-1/2 rounded-full bg-[#7046e6]/[0.12] blur-[190px]" />

      <div className="relative mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1150px] text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#9878ef]/25 bg-[#7046e6]/[0.07] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#c4afff] opacity-50" />
              <span className="relative h-2 w-2 rounded-full bg-[#d8cdff]" />
            </span>

            <span className="font-mono text-[7px] uppercase tracking-[0.32em] text-[#b99cff]">
              HYI.AI / MLOPS
            </span>
          </div>

          <h1 className="mt-8 text-[clamp(4.4rem,9.4vw,9.5rem)] font-medium leading-[0.82] tracking-[-0.075em]">
            Build the model.
            <span className="block bg-gradient-to-r from-white via-[#e6def4] to-[#7046e6] bg-clip-text text-transparent">
              Operate the lifecycle.
            </span>
          </h1>

          <p className="mx-auto mt-9 max-w-[800px] text-[12px] leading-7 text-white/[0.52] md:text-[14px]">
            Connect experimentation, model registries, automated pipelines,
            deployment, monitoring and governance into one continuous
            operational system for production machine learning.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {features.map(({ Icon, text }) => (
              <motion.div
                key={text}
                whileHover={{ y: -4 }}
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2"
              >
                <Icon size={10} className="text-[#a98cf4]" />
                <span className="text-[9px] text-white/[0.45]">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16">
          <MLOpsMissionControl />
        </div>

        <a
          href="#mlops-overview"
          className="mx-auto mt-10 flex w-fit items-center gap-3 font-mono text-[7px] uppercase tracking-[0.25em] text-white/[0.3]"
        >
          Explore the lifecycle
          <ArrowDown size={10} />
        </a>
      </div>
    </section>
  );
}