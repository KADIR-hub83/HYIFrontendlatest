"use client";

import { motion } from "framer-motion";
import type { EndpointService } from "./endpointServices";

export default function EndpointPrinciples({
  service,
}: {
  service: EndpointService;
}) {
  return (
    <section className=" bg-black ">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="text-center">
        

          <h2 className="mx-auto  max-w-[680px] hyi-h1 hyi-white">
            {service.principlesTitle}
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-[1000px]">
          {service.principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid gap-5 border-t border-white/[0.07] py-7 md:grid-cols-[70px_240px_1fr]"
            >
              <span className="font-mono text-[8px] text-white/15">
                P-{index + 1}
              </span>

              <h3 className="text-[13px] text-white/65">
                {item.title}
              </h3>

              <p className="text-[10px] leading-6 text-white/28">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}