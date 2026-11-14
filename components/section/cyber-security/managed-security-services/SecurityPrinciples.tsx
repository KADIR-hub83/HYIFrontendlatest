"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

import type { ManagedSecurityService } from "./managedSecurityServices";

export default function SecurityPrinciples({
  service,
}: {
  service: ManagedSecurityService;
}) {
  return (
    <section className="">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="flex flex-col ">
          <div className="text-center mb-8">
      

            <h2 className="hyi-h1 hyi-white">
              Security built deliberately
             
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.principles.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="min-h-[30px] rounded-[22px] border border-white/[0.07] bg-white/[0.015] p-7 hover:border-white/30"
              >
                <ShieldCheck
                  size={22}
                  className="hyi-white-icon"
                />

                <h3 className="mt-5 hyi-h3 hyi-white">
                  {item.title}
                </h3>

                <p className="mt-2 hyi-p">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}