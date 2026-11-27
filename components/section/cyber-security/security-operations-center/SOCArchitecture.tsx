"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { SOCService } from "./socServices";

export default function SOCArchitecture({
  service,
}: {
  service: SOCService;
}) {
  return (
    <section
      id="operations"
      className=" bg-[#000000]"
    >
      <div className="mx-auto max-w-[1350px] px-5  py-10 md:px-8 lg:px-12 ">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
           

            <h2 className=" max-w-md hyi-blue hyi-h1">
              From raw activity to security action.
            </h2>

            <p className="mt-2 max-w-md hyi-p text-black">
              The operating architecture creates a structured path from
              distributed security sources to investigation and controlled
              operational action.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[20px] top-6 h-[calc(100%-48px)] w-px bg-white/10 md:hidden" />

            <div className="grid gap-3 md:grid-cols-3">
              {service.architecture.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative rounded-[20px] border border-white/[0.08] bg-gray-700 p-5"
                >
              

                  <p className=" hyi-h3 text-white">
                    {item}
                  </p>

                  {index < service.architecture.length - 1 && (
                    <ChevronRight className="absolute -right-[13px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 rounded-full border border-white/10 bg-gray-500 p-1 text-white md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}