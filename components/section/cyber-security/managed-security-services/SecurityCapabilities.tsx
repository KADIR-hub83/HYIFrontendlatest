"use client";

import { motion } from "framer-motion";

import {
  Activity,
  Cloud,
  Cpu,
  Database,
  Eye,
  Gauge,
  Network,
  Radio,
  Server,
  Settings2,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import type {
  ManagedSecurityService,
  SecurityIconName,
} from "./managedSecurityServices";

const icons = {
  shield: ShieldCheck,
  activity: Activity,
  eye: Eye,
  network: Network,
  cloud: Cloud,
  database: Database,
  workflow: Workflow,
  cpu: Cpu,
  server: Server,
  radio: Radio,
  settings: Settings2,
  gauge: Gauge,
} satisfies Record<SecurityIconName, typeof ShieldCheck>;

export default function SecurityCapabilities({
  service,
}: {
  service: ManagedSecurityService;
}) {
  return (
    <section className="bg-black py-28 md:py-40">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-[720px]"
        >
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#9878ef]">
            SECURITY CAPABILITIES
          </span>

          <h2 className="mt-6 text-[42px] font-semibold tracking-[-0.04em] md:text-[62px]">
            Defense built as
            <span className="text-[#a98af4]"> a system.</span>
          </h2>
        </motion.div>

        <div className="grid border-l border-t border-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((item, index) => {
            const Icon = icons[item.icon];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{
                  backgroundColor: "rgba(112,70,230,.055)",
                }}
                className="group min-h-[300px] border-b border-r border-white/[0.07] p-8 md:p-10"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08]">
                    <Icon
                      size={17}
                      className="text-[#a98af4]"
                    />
                  </div>

                  <span className="font-mono text-[9px] text-white/[0.20]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-16 text-[20px] font-medium tracking-[-0.025em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-white/[0.48]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}