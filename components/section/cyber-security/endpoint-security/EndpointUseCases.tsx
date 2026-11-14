"use client";

import { motion } from "framer-motion";
import type { EndpointService } from "./endpointServices";

export default function EndpointUseCases({
  service,
}: {
  service: EndpointService;
}) {
  return (
    <section className=" bg-black py-10">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className=" text-center max-w-[600px] mx-auto">
    

          <h2 className=" hyi-h1 hyi-white">
            {service.useCasesTitle}
          </h2>

          <p className="mt-2 hyi-blue hyi-p font-bold">
            {service.useCasesIntro}
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {service.useCases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="relative  overflow-hidden rounded-[22px] border border-white/[0.07] p-6"
            >
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.08, 0.18, 0.08],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                }}
                className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#7c3aed]"
              />

              <div className="relative">
      

                <h3 className=" hyi-h3 hyi-white">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-[500px] hyi-p">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}