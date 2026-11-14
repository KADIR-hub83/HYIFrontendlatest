"use client";

import { motion } from "framer-motion";
import type { EndpointService } from "./endpointServices";

export default function EndpointIntelligence({
  service,
}: {
  service: EndpointService;
}) {
  return (
    <section
      id="intelligence"
      className="relative overflow-hidden "
    >
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-[1320px] px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[720px] text-center"
        >
         

          <h2 className="hyi-h1 hyi-white">
            {service.intelligenceTitle}
          </h2>

          <p className="mx-auto mt-3 max-w-[600px] hyi-p hyi-blue font-bold">
            {service.intelligenceIntro}
          </p>
        </motion.div>

        <div className="mt-8 grid overflow-hidden rounded-[24px] border border-white/[0.07] md:grid-cols-4">
          {service.intelligence.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
               whileHover={{
                    y: -15,
                    
                  }}
              transition={{
                delay: index * 0,
              }}
              className={`relative min-h-[0px] p-6 ${
                index !== service.intelligence.length - 1
                  ? "border-b border-white/[0.07] md:border-b-0 md:border-r "
                  : ""
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]" />

              <p className=" hyi-p hyi-blue">
                {item.label}
              </p>

              <h3 className="mt-2 hyi-h3 hyi-white">
                {item.value}
              </h3>

              <p className="mt-2 hyi-p ">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}