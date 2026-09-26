"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { ManagedSecurityService } from "./managedSecurityServices";

export default function SecurityUseCases({
  service,
}: {
  service: ManagedSecurityService;
}) {
  return (
    <section className="bg-black py-32 md:py-44">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="mb-16 text-center">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#9878ef]">
            SECURITY USE CASES
          </span>

          <h2 className="mx-auto mt-6 max-w-[800px] text-[44px] font-semibold tracking-[-0.045em] md:text-[66px]">
            Built around real
            <span className="text-[#a98af4]">
              {" "}operational environments.
            </span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {service.useCases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.07 }}
              className="group min-h-[260px] rounded-[25px] border border-white/[0.07] bg-[#050505] p-8"
            >
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[9px] text-[#9878ef]">
                    CASE / 0{index + 1}
                  </span>

                  <ArrowRight
                    size={16}
                    className="text-white/[0.20] transition group-hover:text-[#9878ef]"
                  />
                </div>

                <div className="mt-20">
                  <h3 className="text-[21px] font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[520px] text-[13px] leading-7 text-white/[0.43]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}