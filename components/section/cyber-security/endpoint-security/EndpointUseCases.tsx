"use client";

import { motion } from "framer-motion";
import type { EndpointService } from "./endpointServices";

export default function EndpointUseCases({
  service,
}: {
  service: EndpointService;
}) {
  return (
    <section className="border-b border-white/[0.06] bg-black py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="max-w-[680px]">
          <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-white/25">
            {service.useCasesEyebrow}
          </p>

          <h2 className="mt-5 text-[30px] font-medium tracking-[-0.03em] text-white md:text-[38px]">
            {service.useCasesTitle}
          </h2>

          <p className="mt-5 text-[12px] leading-7 text-white/35">
            {service.useCasesIntro}
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2">
          {service.useCases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="relative min-h-[190px] overflow-hidden rounded-[22px] border border-white/[0.07] p-6"
            >
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.08, 0.18, 0.08],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                }}
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#7c3aed]"
              />

              <div className="relative">
                <span className="font-mono text-[8px] text-white/15">
                  0{index + 1}
                </span>

                <h3 className="mt-7 text-[15px] text-white/75">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[500px] text-[10px] leading-6 text-white/28">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}