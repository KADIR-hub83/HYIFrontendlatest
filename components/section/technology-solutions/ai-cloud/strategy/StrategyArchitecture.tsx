"use client";

import { motion } from "framer-motion";
import ArchitectureUniverse from "./ArchitectureUniverse";

export default function StrategyArchitecture() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] py-28 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="font-mono text-[8px] tracking-[0.28em] text-[#9878ef]">
            02 / TARGET ARCHITECTURE
          </p>

          <h2 className="mt-6 text-5xl font-medium tracking-[-0.06em] md:text-7xl">
            Design the environment
            <span className="block text-[#7046e6]">AI needs next.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[720px] text-[14px] leading-8 text-white/[0.5]">
            A target architecture describes how applications, data, AI
            services, compute, networks, security and operational controls
            should work together instead of evolving as disconnected systems.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <ArchitectureUniverse />
        </motion.div>
      </div>
    </section>
  );
}