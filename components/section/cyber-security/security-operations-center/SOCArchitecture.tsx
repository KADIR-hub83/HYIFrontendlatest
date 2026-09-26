"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { SOCService } from "./socServices";

export default function SOCArchitecture({
  service,
}: {
  service: SOCService;
}) {
  return (
    <section
      id="operations"
      className="border-b border-white/[0.07] bg-[#030303]"
    >
      <div className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/30">
              03 / Operating Architecture
            </p>

            <h2 className="mt-5 max-w-md text-3xl font-medium leading-tight tracking-[-0.025em] md:text-[42px]">
              From raw activity to security action.
            </h2>

            <p className="mt-6 max-w-md text-[12px] leading-7 text-white/35">
              The operating architecture creates a structured path from
              distributed security sources to investigation and controlled
              operational action.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[20px] top-6 h-[calc(100%-48px)] w-px bg-white/10 md:hidden" />

            <div className="grid gap-3 md:grid-cols-3">
              {service.architecture.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative min-h-[145px] rounded-[20px] border border-white/[0.08] bg-black p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] text-white/20">
                      LAYER 0{index + 1}
                    </span>

                    <span className="h-2.5 w-2.5 rounded-full bg-[#7c3aed]/60" />
                  </div>

                  <p className="mt-12 text-[13px] font-medium text-white/75">
                    {item}
                  </p>

                  {index < service.architecture.length - 1 && (
                    <ChevronRight className="absolute -right-[13px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 rounded-full border border-white/10 bg-black p-1 text-white/25 md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}