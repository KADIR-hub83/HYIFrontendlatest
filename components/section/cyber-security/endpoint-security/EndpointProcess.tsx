"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { EndpointService } from "./endpointServices";

export default function EndpointProcess({
  service,
}: {
  service: EndpointService;
}) {
  return (
    <section className="border-b border-white/[0.06] bg-black py-28">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-white/25">
              {service.processEyebrow}
            </p>

            <h2 className="mt-5 max-w-[460px] text-[30px] font-medium tracking-[-0.03em] text-white md:text-[38px]">
              {service.processTitle}
            </h2>

            <p className="mt-5 max-w-[450px] text-[12px] leading-7 text-white/35">
              {service.processIntro}
            </p>
          </div>

          <div>
            {service.process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="grid gap-4 border-t border-white/[0.07] py-7 md:grid-cols-[60px_160px_1fr_auto] md:items-center"
              >
                <span className="font-mono text-[8px] text-white/20">
                  {item.step}
                </span>

                <h3 className="text-[13px] text-white/70">
                  {item.title}
                </h3>

                <p className="text-[10px] leading-6 text-white/28">
                  {item.description}
                </p>

                <div className="flex w-fit items-center gap-2 rounded-full border border-white/[0.07] px-3 py-2">
                  <CheckCircle2 className="h-3 w-3 text-white/30" />

                  <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-white/20">
                    {item.output}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}