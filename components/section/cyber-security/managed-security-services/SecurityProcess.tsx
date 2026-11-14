"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import type { ManagedSecurityService } from "./managedSecurityServices";

export default function SecurityProcess({
  service,
}: {
  service: ManagedSecurityService;
}) {
  return (
    <section className="bg-black py-10">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="mb-5 ">
     

          <h2 className="text-center hyi-h1 hyi-white">
            From visibility
            <span className="hyi-blue"> to action.</span>
          </h2>
        </div>

        <div className="space-y-1">
          {service.process.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group grid gap-6 border-t border-white/[0.07] py-6 md:grid-cols-[100px_0.7fr_1.2fr_0.6fr] md:items-center"
            >
              <span className="font-mono text-[11px] text-white">
                {item.step}
              </span>

              <h3 className="hyi-h3">
                {item.title}
              </h3>

              <p className="hyi-p">
                {item.description}
              </p>

              <div className="flex justify-start md:justify-end">
                <div className="flex w-fit items-center justify-center gap-2 rounded-full border border-[#7046e6]/15 bg-[#7046e6]/[0.05] px-3 py-2">
                  <CheckCircle2
                    size={13}
                    className="text-white"
                  />

                  <span className=" hyi-p">
                    {item.output}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="border-t border-white/[0.07]" />
        </div>
      </div>
    </section>
  );
}