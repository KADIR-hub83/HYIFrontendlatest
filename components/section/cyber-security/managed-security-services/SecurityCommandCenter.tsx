"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

import type { ManagedSecurityService } from "./managedSecurityServices";

export default function SecurityCommandCenter({
  service,
}: {
  service: ManagedSecurityService;
}) {
  return (
    <section
      id="security-overview"
      className="relative overflow-hidden "
    >
      <div className="mx-auto max-w-[1350px] px-6 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className=" hyi-h4 hyi-blue font-bold">
              {service.overview.eyebrow}
            </span>

            <h2 className="mt-3 max-w-[600px] hyi-h1 hyi-white">
              {service.overview.title}

              <span className="mt-2 block ">
                {service.overview.accent}
              </span>
            </h2>
          </motion.div>

          <div className="space-y-3 ">
            {service.overview.paragraphs.map(
              (paragraph, index) => (
                <motion.p
                  key={paragraph}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.1,
                  }}
                  className="max-w-[720px] hyi-p"
                >
                  {paragraph}
                </motion.p>
              )
            )}

         
          </div>
        </div>
      </div>
    </section>
  );
}