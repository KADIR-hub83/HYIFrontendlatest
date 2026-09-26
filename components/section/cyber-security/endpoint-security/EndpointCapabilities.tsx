"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Eye,
  Lock,
  Network,
  ShieldCheck,
} from "lucide-react";

import type { EndpointService } from "./endpointServices";

const icons = [
  ShieldCheck,
  Eye,
  Activity,
  Lock,
  Network,
  CheckCircle2,
];

export default function EndpointCapabilities({
  service,
}: {
  service: EndpointService;
}) {
  return (
    <section
      id="capabilities"
      className="relative border-b border-white/[0.06] bg-black py-28"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-white/25">
              {service.capabilitiesEyebrow}
            </p>

            <h2 className="mt-5 max-w-[460px] text-[28px] font-medium leading-[1.18] tracking-[-0.03em] text-white md:text-[36px]">
              {service.capabilitiesTitle}
            </h2>

            <p className="mt-5 max-w-[450px] text-[12px] leading-7 text-white/35">
              {service.capabilitiesIntro}
            </p>
          </motion.div>

          <div className="grid gap-3 md:grid-cols-2">
            {service.capabilities.map((item, index) => {
              const Icon = icons[index % icons.length];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group min-h-[220px] rounded-[22px] border border-white/[0.07] bg-white/[0.018] p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08]">
                      <Icon className="h-4 w-4 text-white/40" />
                    </div>

                    <span className="font-mono text-[8px] text-white/15">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-9 text-[15px] font-medium text-white/80">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[11px] leading-6 text-white/30">
                    {item.description}
                  </p>

                  <div className="mt-7 h-px overflow-hidden bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "55%" }}
                      viewport={{ once: true }}
                      className="h-full bg-[#7c3aed]/70"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}