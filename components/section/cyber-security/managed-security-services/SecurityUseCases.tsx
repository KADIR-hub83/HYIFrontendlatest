"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import type { ManagedSecurityService } from "./managedSecurityServices";

export default function SecurityUseCases({
  service,
}: {
  service: ManagedSecurityService;
}) {
  return (
    <section className="bg-black py-10">
      <div className="mx-auto max-w-[1380px] px-6 md:px-10">
        <div className="mb-8 text-center">
        

          <h2 className="mx-auto  max-w-[800px] hyi-h1 hyi-white">
            Built around real
            <span className="hyi-blue">
              {" "}operational environments
            </span>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {service.useCases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.07 }}
              className="group min-h-[60px] rounded-[25px] border border-white/[0.07] bg-[#050505] p-8"
            >
              <div className="flex h-full flex-col ">
             

                <div className="">
                  <h3 className="hyi-h3 hyi-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 hyi-p">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}