"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CircleDollarSign,
  Gauge,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { CloudService } from "./cloudServices";

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
  const isOdd = knowledge.pillars.length % 2 !== 0;

  return (
    <section className="relative overflow-hidden bg-[#030303] px-5 py-10 md:px-10 md:py-14 lg:px-20">
      <div className="pointer-events-none absolute right-[8%] top-1/2 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="hyi-h3 hyi-blue">{knowledge.eyebrow}</p>

            <h2 className="hyi-h1 mt-4 max-w-[560px] text-[38px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[50px]">
              <span className="hyi-white">{knowledge.heading}</span>
              <span className="block hyi-blue">{knowledge.accent}</span>
            </h2>

            <p className="hyi-p mt-4 max-w-[520px]">{knowledge.intro}</p>
            <p className="hyi-p mt-3 max-w-[520px]">{knowledge.context}</p>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-px w-12 bg-[#8b5cf6]/70" />
              <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/50">
                {service.title}
              </span>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {knowledge.pillars.map((pillar, index) => {
              const Icon = knowledgeIcons[pillar.icon];
              const isLast = index === knowledge.pillars.length - 1;

              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  whileHover={{ y: -6 }}
                  className={`hyi-skeu group relative overflow-hidden p-6 md:p-7 ${
                    isOdd && isLast ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#7c3aed]/10 blur-3xl" />

                  <div className="relative flex items-center justify-between">
                    <Icon size={20} className="hyi-blue-icon" />
                    <span className="font-mono text-[12px] text-white/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative mt-6">
                    <h3 className="hyi-h3 hyi-white">{pillar.title}</h3>
                    <p className="hyi-p mt-2 max-w-[680px]">
                      {pillar.description}
                    </p>
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