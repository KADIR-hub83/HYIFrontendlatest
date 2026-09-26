"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { EndpointService } from "./endpointServices";

export default function EndpointArchitecture({
  service,
}: {
  service: EndpointService;
}) {
  return (
    <section className="border-b border-white/[0.06] bg-black py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="max-w-[680px]">
          <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-white/25">
            {service.architectureEyebrow}
          </p>

          <h2 className="mt-5 text-[30px] font-medium tracking-[-0.03em] text-white md:text-[38px]">
            {service.architectureTitle}
          </h2>

          <p className="mt-5 text-[12px] leading-7 text-white/35">
            {service.architectureIntro}
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-3 lg:flex-row lg:items-stretch">
          {service.architecture.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="flex flex-1 items-center"
            >
              <div className="min-h-[190px] flex-1 rounded-[20px] border border-white/[0.07] bg-white/[0.015] p-5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]" />

                  <span className="font-mono text-[7px] text-white/20">
                    LAYER 0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 text-[13px] text-white/70">
                  {item.title}
                </h3>

                <p className="mt-4 text-[10px] leading-6 text-white/28">
                  {item.description}
                </p>
              </div>

              {index !== service.architecture.length - 1 && (
                <ArrowRight className="mx-2 hidden h-3 w-3 shrink-0 text-white/15 lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}