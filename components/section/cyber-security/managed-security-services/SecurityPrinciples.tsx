"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

import type { ManagedSecurityService } from "./managedSecurityServices";

export default function SecurityPrinciples({
  service,
}: {
  service: ManagedSecurityService;
}) {
  return (
    <section className="border-y border-white/[0.06] bg-[#030303] py-32">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#9878ef]">
              SECURITY PRINCIPLES
            </span>

            <h2 className="mt-6 text-[44px] font-semibold leading-[1] tracking-[-0.045em] md:text-[64px]">
              Security built
              <span className="block text-[#a98af4]">
                deliberately.
              </span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.principles.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="min-h-[230px] rounded-[22px] border border-white/[0.07] bg-white/[0.015] p-7"
              >
                <ShieldCheck
                  size={17}
                  className="text-[#9878ef]"
                />

                <h3 className="mt-10 text-[17px] font-medium">
                  {item.title}
                </h3>

                <p className="mt-4 text-[12px] leading-7 text-white/[0.43]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}