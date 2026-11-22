"use client";

import { motion } from "framer-motion";
import ArchitectureUniverse from "./ArchitectureUniverse";

export default function StrategyArchitecture() {
  return (
    <section className=" bg-[#070707] py-10">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
        

          <h2 className=" hyi-h1 hyi-white">
            Design the environment
            <span className="block hyi-blue">AI needs next.</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[720px] hyi-p">
            A target architecture describes how applications, data, AI
            services, compute, networks, security and operational controls
            should work together instead of evolving as disconnected systems.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <ArchitectureUniverse />
        </motion.div>
      </div>
    </section>
  );
}