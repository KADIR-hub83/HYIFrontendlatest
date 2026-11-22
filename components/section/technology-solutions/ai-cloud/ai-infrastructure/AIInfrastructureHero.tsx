"use client";

import { motion } from "framer-motion";
import { ArrowDown, Cpu, Radio, Sparkles } from "lucide-react";
import ComputeFabricModel from "./ComputeFabricModel";

const features = [
  { Icon: Cpu, text: "Accelerated compute" },
  { Icon: Radio, text: "High-speed fabric" },
  { Icon: Sparkles, text: "AI-ready architecture" },
];

export default function AIInfrastructureHero() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-5 pt-32 text-white md:px-10 max-w-[1350px] mx-auto">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(circle at 50% 40%, black, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 40%, black, transparent 72%)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[320px] h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-[#7046e6]/[0.08] blur-[190px]" />

      <div className="relative mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1100px] text-center"
        >
      

          <h1 className="hyi-h1 hyi-white">
            Infrastructure
            <span className="block hyi-blue">
              built for AI.
            </span>
          </h1>

          <p className="mx-auto mt-2 max-w-[760px] hyi-p">
            Design the compute, networking, storage and operational foundation
            required to train, deploy and scale modern AI workloads without
            treating infrastructure as a collection of isolated resources.
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            {features.map(({ Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2"
              >
                <Icon size={11} className="hyi-blue-icon" />
                <span className="hyi-p">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-6">
          <ComputeFabricModel />
        </div>
      </div>
    </section>
  );
}