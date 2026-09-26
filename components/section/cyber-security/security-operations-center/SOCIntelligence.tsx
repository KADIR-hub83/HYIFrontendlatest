"use client";

import { motion } from "framer-motion";
import type { SOCService } from "./socServices";

export default function SOCIntelligence({
  service,
}: {
  service: SOCService;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] bg-black py-24 lg:py-32">
      <div className="absolute right-[-100px] top-[15%] h-[300px] w-[300px] rounded-full bg-[#7c3aed]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/30">
            02 / Security Intelligence
          </p>

          <h2 className="mt-5 text-3xl font-medium tracking-[-0.025em] md:text-[42px]">
            Security context comes from connecting signals.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 text-white/35">
            Individual events become more useful when they are interpreted
            alongside identities, assets, behaviors and surrounding activity.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-3 md:grid-cols-2 lg:grid-cols-3">
          {service.intelligence.map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.018] p-6"
            >
              <span className="absolute right-5 top-5 h-3 w-3 rounded-full bg-[#7c3aed]/60" />

              <span className="font-mono text-[8px] text-white/20">
                INTELLIGENCE / 0{index + 1}
              </span>

              <h3 className="mt-8 text-[15px] font-medium text-white/85">
                {item.label}
              </h3>

              <p className="mt-3 text-[11px] leading-6 text-white/30">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}