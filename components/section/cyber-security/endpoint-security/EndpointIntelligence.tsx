"use client";

import { motion } from "framer-motion";
import type { EndpointService } from "./endpointServices";

export default function EndpointIntelligence({
  service,
}: {
  service: EndpointService;
}) {
  return (
    <section
      id="intelligence"
      className="relative overflow-hidden border-b border-white/[0.06] bg-black py-28"
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[720px] text-center"
        >
          <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-white/25">
            {service.intelligenceEyebrow}
          </p>

          <h2 className="mt-5 text-[30px] font-medium tracking-[-0.03em] text-white md:text-[38px]">
            {service.intelligenceTitle}
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[12px] leading-7 text-white/35">
            {service.intelligenceIntro}
          </p>
        </motion.div>

        <div className="mt-16 grid overflow-hidden rounded-[24px] border border-white/[0.07] md:grid-cols-4">
          {service.intelligence.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
              }}
              className={`relative min-h-[240px] p-6 ${
                index !== service.intelligence.length - 1
                  ? "border-b border-white/[0.07] md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]" />

              <p className="mt-7 font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
                {item.label}
              </p>

              <h3 className="mt-3 text-[17px] text-white/75">
                {item.value}
              </h3>

              <p className="mt-5 text-[10px] leading-6 text-white/28">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}