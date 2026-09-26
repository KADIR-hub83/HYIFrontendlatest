"use client";

import { motion } from "framer-motion";

import type { ManagedSecurityService } from "./managedSecurityServices";

export default function SecurityOperations({
  service,
}: {
  service: ManagedSecurityService;
}) {
  return (
    <section className="border-y border-white/[0.06] bg-[#030303] py-28">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="mb-14 text-center">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#9878ef]">
            SECURITY OPERATIONS
          </span>

          <h2 className="mt-5 text-[38px] font-semibold tracking-[-0.04em] md:text-[58px]">
            Continuous operational loop.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-4">
          {service.operations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="relative min-h-[270px] bg-black p-7"
            >
              <span className="font-mono text-[9px] text-[#9878ef]">
                0{index + 1}
              </span>

              <h3 className="mt-20 text-[22px] font-medium">
                {item.title}
              </h3>

              <p className="mt-4 text-[12px] leading-6 text-white/[0.43]">
                {item.description}
              </p>

              <motion.div
                animate={{ width: ["0%", "100%", "0%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: index * 0.8,
                }}
                className="absolute bottom-0 left-0 h-px bg-[#9878ef]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}