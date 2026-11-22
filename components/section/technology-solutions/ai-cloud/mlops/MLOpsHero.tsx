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
    <section className="relative overflow-hidden bg-[#030303] px-5  md:px-10 pt-30">
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

      <div className="relative mx-auto max-w-[1350px]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1150px] text-center"
        >
         

          <h1 className="hyi-h1 hyi-white">
            Build the model.
            <span className="block hyi-blue">
              Operate the lifecycle.
            </span>
          </h1>

          <p className="mx-auto mt-2 max-w-[800px] hyi-p">
            Connect experimentation, model registries, automated pipelines,
            deployment, monitoring and governance into one continuous
            operational system for production machine learning.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {features.map(({ Icon, text }) => (
              <motion.div
                key={text}
                whileHover={{ y: -4 }}
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2"
              >
                <Icon size={10} className="hyi-blue-icon" />
                <span className="hyi-p">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-5">
          <MLOpsMissionControl />
        </div>
      </div>
    </section>
  );
}