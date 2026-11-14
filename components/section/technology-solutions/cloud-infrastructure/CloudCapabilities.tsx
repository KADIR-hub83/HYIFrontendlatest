"use client";

import { motion } from "framer-motion";
import { CloudCog } from "lucide-react";
import type { CloudService } from "./cloudServices";

export default function CloudCapabilities({
  service,
}: {
  service: CloudService;
}) {
  return (
    <section className="bg-[#030303] px-5 py-10 md:px-10 md:py-14 lg:px-20">
      <div className="mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="hyi-h3 hyi-blue">04 / CAPABILITIES</p>

          <h2 className="hyi-h1 mt-4 max-w-[750px] text-[38px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[52px]">
            <span className="hyi-white">What the system</span>
            <span className="block hyi-blue">needs.</span>
          </h2>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="hyi-skeu group relative overflow-hidden p-6 md:p-7"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#7c3aed]/10 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <CloudCog size={20} className="hyi-blue-icon" />
                <span className="font-mono text-[12px] text-white/50">
                  0{index + 1}
                </span>
              </div>

              <div className="relative mt-6">
                <h3 className="hyi-h3 hyi-white">{item.title}</h3>
                <p className="hyi-p mt-2">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}