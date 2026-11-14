"use client";

import { motion } from "framer-motion";
import { ChevronRight, CircleDot } from "lucide-react";

import type { ManagedSecurityService } from "./managedSecurityServices";

export default function SecurityArchitecture({
  service,
}: {
  service: ManagedSecurityService;
}) {
  return (
    <section className="relative overflow-hidden  bg-[#030303] ">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6]/[0.055] blur-[180px]" />

      <div className="relative mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
        

            <h2 className="hyi-h1 hyi-white">
              {service.architecture.title}
            </h2>

            <p className="mt-4 hyi-p">
              {service.architecture.description}
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute bottom-0 left-[29px] top-0 w-px bg-gradient-to-b from-transparent via-[#7046e6]/40 to-transparent" />

            <div className="space-y-4">
              {service.architecture.layers.map(
                (layer, index) => (
                  <motion.div
                    key={layer.title}
                    initial={{ opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="relative grid grid-cols-[60px_1fr] items-center"
                  >
                    <div className="relative z-10 flex h-[30px] items-center justify-center">
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 0 0 rgba(152,120,239,0)",
                            "0 0 22px rgba(152,120,239,.35)",
                            "0 0 0 rgba(152,120,239,0)",
                          ],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-[#9878ef]/30 bg-black"
                      >
                        <CircleDot
                          size={9}
                          className="text-[#9878ef]"
                        />
                      </motion.div>
                    </div>

                    <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6 transition hover:border-[#9878ef]/20 hover:bg-[#7046e6]/[0.035]">
                      <div className="flex items-center justify-between gap-6">
                        <div>
                        
                          <h3 className="mt-2 hyi-h3 hyi-white">
                            {layer.title}
                          </h3>

                          <p className="mt-2 hyi-p">
                            {layer.description}
                          </p>
                        </div>

                        <ChevronRight
                          size={16}
                          className="shrink-0 text-white/80 transition group-hover:text-[#9878ef]"
                        />
                      </div>
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