"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { SOCService } from "./socServices";

export default function SOCProcess({ service }: { service: SOCService }) {
  return (
    <section className="border-b border-white/[0.07] bg-black">
      <div className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/30">
            04 / Operational Flow
          </p>

          <h2 className="mt-5 text-3xl font-medium tracking-[-0.025em] md:text-[42px]">
            A repeatable security operations loop.
          </h2>
        </div>

        <div className="mt-14">
          {service.process.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group grid gap-5 border-t border-white/[0.08] py-7 md:grid-cols-[70px_0.7fr_1.2fr_0.7fr] md:items-center md:gap-8"
            >
              <span className="font-mono text-[9px] text-white/20">
                {step.number}
              </span>

              <h3 className="text-[15px] font-medium text-white/85">
                {step.title}
              </h3>

              <p className="max-w-xl text-[11px] leading-6 text-white/30">
                {step.description}
              </p>

              <div className="flex items-center gap-2 md:justify-end">
                <CheckCircle2 className="h-3.5 w-3.5 text-white/25" />

                <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/25">
                  {step.output}
                </span>
              </div>
            </motion.div>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}