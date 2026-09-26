"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

import type { ManagedSecurityService } from "./managedSecurityServices";

export default function SecurityCommandCenter({
  service,
}: {
  service: ManagedSecurityService;
}) {
  return (
    <section
      id="security-overview"
      className="relative overflow-hidden border-b border-white/[0.06] bg-black py-32 md:py-44"
    >
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[10px] tracking-[0.28em] text-[#9878ef]">
              {service.overview.eyebrow}
            </span>

            <h2 className="mt-7 max-w-[600px] text-[42px] font-semibold leading-[1] tracking-[-0.045em] md:text-[65px]">
              {service.overview.title}

              <span className="mt-2 block text-[#a98af4]">
                {service.overview.accent}
              </span>
            </h2>
          </motion.div>

          <div className="space-y-7 pt-2">
            {service.overview.paragraphs.map(
              (paragraph, index) => (
                <motion.p
                  key={paragraph}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                  }}
                  className="max-w-[720px] text-[15px] leading-8 text-white/[0.52] md:text-[17px]"
                >
                  {paragraph}
                </motion.p>
              )
            )}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-5"
            >
              <div className="inline-flex items-center gap-3 border-b border-white/[0.15] pb-2 text-[12px] text-white/[0.65]">
                <ShieldCheck size={14} className="text-[#9878ef]" />

                HYI.AI Security Intelligence

                <ArrowRight size={13} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}