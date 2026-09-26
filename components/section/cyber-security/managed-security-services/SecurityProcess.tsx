"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import type { ManagedSecurityService } from "./managedSecurityServices";

export default function SecurityProcess({
  service,
}: {
  service: ManagedSecurityService;
}) {
  return (
    <section className="bg-black py-32 md:py-44">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="mb-16 max-w-[700px]">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#9878ef]">
            DELIVERY SYSTEM
          </span>

          <h2 className="mt-6 text-[44px] font-semibold tracking-[-0.045em] md:text-[64px]">
            From visibility
            <span className="text-[#a98af4]"> to action.</span>
          </h2>
        </div>

        <div className="space-y-2">
          {service.process.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group grid gap-6 border-t border-white/[0.07] py-8 md:grid-cols-[100px_0.7fr_1.2fr_0.6fr] md:items-center"
            >
              <span className="font-mono text-[11px] text-[#9878ef]">
                {item.step}
              </span>

              <h3 className="text-[20px] font-medium">
                {item.title}
              </h3>

              <p className="text-[13px] leading-7 text-white/[0.43]">
                {item.description}
              </p>

              <div className="flex justify-start md:justify-end">
                <div className="flex w-fit items-center justify-center gap-2 rounded-full border border-[#7046e6]/15 bg-[#7046e6]/[0.05] px-3 py-2">
                  <CheckCircle2
                    size={13}
                    className="text-[#9878ef]"
                  />

                  <span className="font-mono text-[10px] text-white/[0.40]">
                    {item.output}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="border-t border-white/[0.07]" />
        </div>
      </div>
    </section>
  );
}