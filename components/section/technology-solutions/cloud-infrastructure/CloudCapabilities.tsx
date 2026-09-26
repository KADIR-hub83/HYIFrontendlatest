"use client";

import { motion } from "framer-motion";
import { CloudCog } from "lucide-react";
import { CloudService } from "./cloudServices";

export default function CloudCapabilities({
  service,
}: {
  service: CloudService;
}) {
  return (
    <section className="bg-[#030303] py-32">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="max-w-[850px]">
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9675ed]">
            04 / CAPABILITIES
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            What the system
            <span className="text-[#7046e6]"> needs.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{
                y: -7,
                borderColor: "rgba(112,70,230,.35)",
              }}
              className="relative min-h-[300px] overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#080808] p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7046e6]/20 bg-[#7046e6]/[0.06]">
                  <CloudCog size={15} className="text-[#9878ef]" />
                </div>

                <span className="font-mono text-[5px] text-white/15">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-medium">{item.title}</h3>

              <p className="mt-5 text-[18px] leading-6 text-white/35">
                {item.description}
              </p>

              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
                className="absolute bottom-0 h-px w-1/2 bg-gradient-to-r from-transparent via-[#7046e6] to-transparent"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}