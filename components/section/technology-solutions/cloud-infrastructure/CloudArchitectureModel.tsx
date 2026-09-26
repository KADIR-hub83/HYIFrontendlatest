"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Network, ShieldCheck } from "lucide-react";
import { CloudService } from "./cloudServices";

export default function CloudArchitectureModel({
  service,
}: {
  service: CloudService;
}) {
  return (
    <section
      id="cloud-architecture"
      className="relative border-b border-white/[0.06] bg-[#050505] py-32"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9675ed]">
            01 / SYSTEM MODEL
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            Understand the
            <span className="text-[#7046e6]"> architecture.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[720px] text-[10px] leading-7 text-white/42">
            {service.definition}
          </p>
        </div>

        <div className="relative mt-20 overflow-hidden rounded-[32px] border border-[#7046e6]/20 bg-[#080808] p-7 md:p-12">
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-[#7046e6]/10 blur-[150px]" />

          <div className="relative grid gap-4 lg:grid-cols-6">
            {service.architecture.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -7 }}
                className="relative"
              >
                <div className="min-h-[210px] rounded-[22px] border border-white/[0.07] bg-[#050505] p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7046e6]/20 bg-[#7046e6]/10">
                    {index % 3 === 0 ? (
                      <Network size={13} className="text-[#a083ef]" />
                    ) : index % 3 === 1 ? (
                      <Cpu size={13} className="text-[#a083ef]" />
                    ) : (
                      <ShieldCheck
                        size={13}
                        className="text-[#a083ef]"
                      />
                    )}
                  </div>

                  <p className="mt-12 font-mono text-[5px] text-[#7046e6]">
                    LAYER 0{index + 1}
                  </p>

                  <h3 className="mt-3 text-[13px] font-medium">{item}</h3>
                </div>

                {index < service.architecture.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute -right-[11px] top-1/2 z-20 hidden lg:block"
                  >
                    <ArrowRight size={12} className="text-[#7046e6]" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}