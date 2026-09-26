"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Eye,
  Network,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import type { SOCService } from "./socServices";

const icons = [Eye, Activity, Network, ShieldCheck, Workflow, Zap];

export default function SOCCapabilities({
  service,
}: {
  service: SOCService;
}) {
  return (
    <section
      id="capabilities"
      className="border-b border-white/[0.07] bg-[#030303]"
    >
      <div className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/30">
              01 / Capabilities
            </p>

            <h2 className="mt-5 max-w-md text-3xl font-medium leading-tight tracking-[-0.025em] text-white md:text-[42px]">
              Security operations designed as a connected system.
            </h2>
          </div>

          <p className="max-w-2xl text-[13px] leading-7 text-white/35 lg:ml-auto lg:pt-10">
            Effective security operations connect telemetry, detection,
            investigation and response rather than treating each technology as an
            isolated control.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 xl:grid-cols-3">
          {service.capabilities.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group min-h-[260px] bg-[#050505] p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08]">
                    <Icon className="h-4 w-4 text-white/45" />
                  </div>

                  <span className="font-mono text-[9px] text-white/20">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-14 text-[17px] font-medium text-white/90">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-sm text-[12px] leading-6 text-white/35">
                  {item.description}
                </p>

                <div className="mt-7 h-px w-10 bg-[#7c3aed]/60 transition-all duration-500 group-hover:w-24" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}