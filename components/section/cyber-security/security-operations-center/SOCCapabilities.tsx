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
      className=" bg-[#030303]"
    >
      <div className="mx-auto max-w-[1350px] px-5 md:px-8 lg:px-12 ">
        <div className="text-center mx-auto ">
          <div>
          

            <h2 className="hyi-h1 hyi-white">
              Security operations designed as a connected system.
            </h2>
          </div>

          <p className="mt-2 max-w-[600px] mx-auto hyi-blue font-bold">
            Effective security operations connect telemetry, detection,
            investigation and response rather than treating each technology as an
            isolated control.
          </p>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 xl:grid-cols-3">
          {service.capabilities.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0 }}
                className="group min-h-[0px] bg-[#050505] p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08]">
                    <Icon className="h-4 w-4 hyi-white-icon" />
                  </div>

                </div>

                <h3 className="mt-2 hyi-h3 hyi-white">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-sm hyi-p">
                  {item.description}
                </p>

                <div className="mt-3 h-px w-10 bg-[#7c3aed]/60 transition-all duration-500 group-hover:w-44" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}