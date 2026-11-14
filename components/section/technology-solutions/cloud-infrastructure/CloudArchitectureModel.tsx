"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Network, ShieldCheck } from "lucide-react";
import type { CloudService } from "./cloudServices";

const layerIcons = [Network, Cpu, ShieldCheck];

export default function CloudArchitectureModel({
  service,
}: {
  service: CloudService;
}) {
  return (
    <section
      id="cloud-architecture"
      className="relative overflow-hidden bg-[#030303] px-5 py-10 md:px-10 md:py-14 lg:px-20"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-[#7c3aed]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="hyi-h3 hyi-blue">01 / SYSTEM MODEL</p>

          <h2 className="hyi-h1 mt-4 max-w-[750px] text-[38px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[52px]">
            <span className="hyi-white">Understand the</span>
            <span className="block hyi-blue">architecture.</span>
          </h2>

          <p className="hyi-p mt-4 max-w-[720px]">{service.definition}</p>
        </motion.div>

        <div className="relative mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {service.architecture.map((item, index) => {
            const Icon = layerIcons[index % layerIcons.length];

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative"
              >
                <div className="hyi-skeu h-full p-5">
                  <Icon size={20} className="hyi-blue-icon" />

                  <p className="mt-6 font-mono text-[12px] text-[#a78bfa]">
                    LAYER 0{index + 1}
                  </p>

                  <h3 className="hyi-h3 hyi-white mt-2">{item}</h3>
                </div>

                {index < service.architecture.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute -right-[13px] top-1/2 z-20 hidden -translate-y-1/2 lg:block"
                  >
                    <ArrowRight size={16} className="hyi-white-icon" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}