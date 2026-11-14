"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { EndpointService } from "./endpointServices";

export default function EndpointProcess({
  service,
}: {
  service: EndpointService;
}) {
  return (
    <section className=" bg-black py-">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>


            <h2 className=" max-w-[460px] hyi-h1 hyi-white">
              {service.processTitle}
            </h2>

            <p className="mt-2 max-w-[450px] hyi-p hyi-blue font-bold">
              {service.processIntro}
            </p>
          </div>

 
<div>
  {service.process.map((item, index) => (
    <motion.div
      key={item.step}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: "easeOut",
      }}
      className="grid grid-cols-1 gap-4 border-t border-white/[0.07] py-7 md:grid-cols-[160px_1fr_auto] md:items-center"
    >
      <h3 className="hyi-h3 hyi-white">
        {item.title}
      </h3>

      <p className="hyi-p">
        {item.description}
      </p>

      <div className="flex w-fit items-center gap-2 rounded-full border border-white/[0.07] px-3 py-2">
        <CheckCircle2 className="h-3 w-3 hyi-white-icon" />

        <span className="font-mono text-[7px] uppercase tracking-[0.14em] hyi-white">
          {item.output}
        </span>
      </div>
    </motion.div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
}