"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { SOCService } from "./socServices";

export default function SOCProcess({ service }: { service: SOCService }) {
  return (
    <section className=" bg-black">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12 py-10">
        <div className="">
     

          <h2 className=" hyi-h1 hyi-white text-center mx-auto">
            A repeatable security operations loop.
          </h2>
        </div>

        <div className="mt-8">
          {service.process.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group grid gap-5 border-t border-white/[0.08] py-7 md:grid-cols-[70px_0.7fr_1.2fr_0.7fr] md:items-center md:gap-8"
            >
              <span className="font-mono text-[9px] text-white">
                {step.number}
              </span>

              <h3 className="hyi-h3 hyi-white">
                {step.title}
              </h3>

              <p className="max-w-xl hyi-p">
                {step.description}
              </p>

              <div className="flex items-center gap-2 md:justify-end">
                <CheckCircle2 className="h-3.5 w-3.5 hyi-blue-icon" />

                <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-white/80">
                  {step.output}
                </span>
              </div>
            </motion.div>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}