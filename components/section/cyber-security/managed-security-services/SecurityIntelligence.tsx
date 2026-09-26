"use client";

import { motion } from "framer-motion";
import { Activity, Radio } from "lucide-react";

import type { ManagedSecurityService } from "./managedSecurityServices";

export default function SecurityIntelligence({
  service,
}: {
  service: ManagedSecurityService;
}) {
  return (
    <section className="bg-black py-32 md:py-44">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#9878ef]">
              {service.intelligence.eyebrow}
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-7 max-w-[650px] text-[46px] font-semibold leading-[1] tracking-[-0.045em] md:text-[70px]"
            >
              {service.intelligence.title}
            </motion.h2>

            <p className="mt-8 max-w-[620px] text-[14px] leading-8 text-white/[0.48] md:text-[15px]">
              {service.intelligence.description}
            </p>
          </div>

          <div className="rounded-[28px] border border-white/[0.08] bg-[#050505] p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
              <div className="flex items-center gap-3">
                <Radio size={14} className="text-[#9878ef]" />

                <span className="font-mono text-[9px] tracking-[0.22em] text-white/[0.30]">
                  LIVE SECURITY TELEMETRY
                </span>
              </div>

              <span className="h-2 w-2 animate-pulse rounded-full bg-[#9878ef]" />
            </div>

            <div className="mt-7 space-y-3">
              {service.intelligence.signals.map(
                (signal, index) => (
                  <motion.div
                    key={signal}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className="group flex items-center justify-between rounded-xl border border-white/[0.055] px-5 py-4"
                  >
                    <div className="flex items-center gap-4">
                      <Activity
                        size={12}
                        className="text-[#9878ef]"
                      />

                      <span className="text-[12px] text-white/[0.52]">
                        {signal}
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((bar) => (
                        <motion.span
                          key={bar}
                          animate={{
                            height: [
                              4 + bar,
                              9 + ((index + bar) % 8),
                              4 + bar,
                            ],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: bar * 0.08,
                          }}
                          className="block w-[2px] rounded-full bg-[#9878ef]/60"
                        />
                      ))}
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}