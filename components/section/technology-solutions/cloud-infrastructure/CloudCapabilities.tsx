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
    <section className="bg-[#030303] px-5 md:px-10  lg:px-20">
      <div className="mx-auto max-w-[1350px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="hyi-h1 mt-2 lg:max-w-[750px] mx-auto text-center">
            <span className="hyi-white">What the system</span>
            <span className="block hyi-blue">needs.</span>
          </h2>
        </motion.div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className={`${
  index === 0 || index === 2 ||index === 4 ? "hyi-glass" : "hyi-skeu" }
              group relative overflow-hidden p-4 md:p-5 `}
            >
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#7c3aed]/10 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <CloudCog size={20} className="hyi-white-icon" />
             
              </div>

              <div className="relative mt-2">
                <h3 className="hyi-h3 hyi-white">{item.title}</h3>
                <p className="hyi-p ">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}