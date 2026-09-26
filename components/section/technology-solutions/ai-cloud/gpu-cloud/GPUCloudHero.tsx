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
    <section className="relative overflow-hidden bg-[#030303] px-5 pb-24 pt-32 md:px-10 md:pt-40">
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

      <div className="relative mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1100px] text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8f6bf0]/25 bg-[#7046e6]/[0.07] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#b59aff] opacity-50" />
              <span className="relative h-2 w-2 rounded-full bg-[#c9b6ff]" />
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.32em] text-[#b99cff]">
              HYI.AI / GPU CLOUD
            </span>
          </div>

          <h1 className="mt-8 text-[clamp(4.3rem,9.5vw,9.5rem)] font-medium leading-[0.82] tracking-[-0.075em]">
            Compute without
            <span className="block bg-gradient-to-r from-white via-[#e4dbf4] to-[#7653df] bg-clip-text text-transparent">
              boundaries.
            </span>
          </h1>

          <p className="mx-auto mt-9 max-w-[780px] text-[13px] leading-7 text-white/[0.55] md:text-[15px]">
            Build elastic GPU environments for AI training, fine-tuning,
            inference and accelerated computing — connected through a cloud
            architecture designed around the unique behavior of modern AI
            workloads.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {features.map(({ Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2"
              >
                <Icon size={11} className="text-[#ad91f7]" />
                <span className="text-[10px] text-white/[0.5]">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16">
          <NeuralComputeGrid />
        </div>

        <a
          href="#gpu-overview"
          className="mx-auto mt-10 flex w-fit items-center gap-3 font-mono text-[8px] uppercase tracking-[0.25em] text-white/[0.3] transition hover:text-white"
        >
          Explore GPU cloud
          <ArrowDown size={11} />
        </a>
      </div>
    </section>
  );
}