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
    <section className="bg-black py-13">
      <div className="mx-auto max-w-[1350px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
       

          <h2 className="mt-3 hyi-h1 hyi-white">
            Defense built as
            <span className="hyi-blue"> a system.</span>
          </h2>
        </motion.div>

        <div className="grid border-l border-t border-white/90 md:grid-cols-2  lg:grid-cols-3 gap-5 rounded-[30px]">
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
                  backgroundColor: "white",
                  color:"black"
                }}
                className="group min-h-[100px] border-b border-r border-purple-500 p-8 md:p-10 rounded-[30px]  gap-5"
              >
                <div className="flex items-start justify-between ">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70">
                    <Icon
                      size={17}
                      className=""
                    />
                  </div>

              
                </div>

                <h3 className="mt-2 font-bold text-[22px] max-md:text-[16px]">
                  {item.title}
                </h3>

                <p className="mt-2 font-medium max-md:text-sm">
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