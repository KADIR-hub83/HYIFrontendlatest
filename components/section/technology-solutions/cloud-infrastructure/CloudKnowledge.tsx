"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CircleDollarSign,
  Gauge,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { CloudService, CloudIconName } from "./cloudServices";

const knowledgeIcons = {
  activity: Activity,
  "shield-check": ShieldCheck,
  "circle-dollar-sign": CircleDollarSign,
  workflow: Workflow,
  gauge: Gauge,
} as const;

export default function CloudKnowledge({
  service,
}: {
  service: CloudService;
}) {
  const knowledge = service.knowledge;

  return (
    <section className="relative overflow-hidden bg-[#030303] py-28 md:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(circle at 70% 50%, black, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at 70% 50%, black, transparent 72%)",
        }}
      />

      <div className="pointer-events-none absolute right-[8%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#7046e6]/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#a98cf4]">
              {knowledge.eyebrow}
            </p>

            <h2 className="mt-6 max-w-[600px] text-4xl font-medium leading-[0.98] tracking-[-0.055em] md:text-6xl">
              {knowledge.heading}
              <span className="mt-1 block text-[#7046e6]">
                {knowledge.accent}
              </span>
            </h2>

            <p className="mt-8 max-w-[590px] text-[13px] leading-7 text-white/[0.58] md:text-[14px] md:leading-8">
              {knowledge.intro}
            </p>

            <p className="mt-6 max-w-[590px] text-[13px] leading-7 text-white/[0.48] md:text-[14px] md:leading-8">
              {knowledge.context}
            </p>

            <div className="mt-9 flex items-center gap-3">
              <div className="h-px w-12 bg-[#7046e6]/70" />
              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/[0.35]">
                {service.title}
              </span>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {knowledge.pillars.map((pillar, index) => {
              const Icon = knowledgeIcons[pillar.icon];

              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  whileHover={{ y: -5 }}
                  className={`group relative min-h-[280px] overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#080808] p-7 md:p-8 ${
                    index === knowledge.pillars.length - 1
                      ? "md:col-span-2 md:min-h-[250px]"
                      : ""
                  }`}
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#7046e6]/0 blur-[65px] transition duration-500 group-hover:bg-[#7046e6]/[0.10]" />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-[#7046e6]/30 bg-[#7046e6]/[0.09]">
                        <Icon size={17} className="text-[#a98cf4]" />
                      </div>

                      <span className="font-mono text-[8px] tracking-[0.2em] text-white/[0.18]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-8 text-[21px] font-medium tracking-[-0.025em] text-white md:text-[23px]">
                      {pillar.title}
                    </h3>

                    <p className="mt-5 max-w-[680px] text-[13px] leading-7 text-white/[0.52] md:text-[14px] md:leading-8">
                      {pillar.description}
                    </p>

                    <div className="mt-auto pt-8">
                      <div className="h-px w-full overflow-hidden bg-white/[0.06]">
                        <motion.div
                          initial={{ x: "-100%" }}
                          whileInView={{ x: "0%" }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: 0.2 + index * 0.06,
                          }}
                          className="h-full w-1/3 bg-[#7046e6]/70"
                        />
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
