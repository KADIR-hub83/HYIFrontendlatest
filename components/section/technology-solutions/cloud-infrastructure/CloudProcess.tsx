"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { CloudService } from "./cloudServices";

export default function CloudProcess({ service }: { service: CloudService }) {
  return (
    <section className="bg-black px-5 py-10 md:px-10 md:py-14 lg:px-20">
      <div className="mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="hyi-h3 hyi-blue">03 / ENGINEERING PROCESS</p>

          <h2 className="hyi-h1 mt-4 max-w-[750px] text-[38px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[52px]">
            <span className="hyi-white">How {service.title}</span>
            <span className="block hyi-blue">is engineered.</span>
          </h2>
        </motion.div>

        <div className="relative mt-8 max-w-[1100px]">
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-[#8b5cf6] via-[#8b5cf6]/20 to-transparent" />

          <div className="space-y-4">
            {service.process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.06 }}
                className="relative grid grid-cols-[40px_1fr] gap-4"
              >
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#8b5cf6]/50 bg-black font-mono text-[12px] text-white/80 shadow-[0_0_0_4px_#000]">
                  {item.step}
                </div>

                <div className="hyi-skeu p-6">
                  <div className="grid items-center gap-4 md:grid-cols-[1fr_auto]">
                    <div>
                      <h3 className="hyi-h3 hyi-white">{item.title}</h3>
                      <p className="hyi-p mt-2 max-w-[650px]">
                        {item.description}
                      </p>
                    </div>

                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.06] px-4 py-2">
                      <CheckCircle2 size={16} className="hyi-blue-icon" />
                      <span className="font-mono text-[12px] text-white/70">
                        {item.output}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}