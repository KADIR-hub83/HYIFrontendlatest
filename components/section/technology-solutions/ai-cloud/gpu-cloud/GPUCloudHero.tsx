"use client";

import { motion } from "framer-motion";
import { ArrowDown, Boxes, Cpu, Network, Sparkles } from "lucide-react";
import NeuralComputeGrid from "./NeuralComputeGrid";

const features = [
  { Icon: Cpu, label: "Accelerated compute" },
  { Icon: Boxes, label: "Elastic GPU pools" },
  { Icon: Network, label: "Distributed fabric" },
];

export default function GPUCloudHero() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-5  pt-32 md:px-10 ">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(circle at 50% 30%,black,transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 30%,black,transparent 72%)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[300px] h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-[#7046e6]/[0.09] blur-[190px]" />

      <div className="relative mx-auto max-w-[1350px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1100px] text-center"
        >

          <h1 className=" hyi-h1 hyi-white ">
            Compute without
            <span className="block hyi-blue">
              boundaries.
            </span>
          </h1>

          <p className="mx-auto mt-2 max-w-[780px] hyi-p">
            Build elastic GPU environments for AI training, fine-tuning,
            inference and accelerated computing — connected through a cloud
            architecture designed around the unique behavior of modern AI
            workloads.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {features.map(({ Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2"
              >
                <Icon size={11} className="text-[#ad91f7]" />
                <span className="hyi-p">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-6">
          <NeuralComputeGrid />
        </div>
      </div>
    </section>
  );
}