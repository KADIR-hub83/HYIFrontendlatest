"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { EndpointService } from "./endpointServices";

export default function EndpointArchitecture({
  service,
}: {
  service: EndpointService;
}) {
  return (
    <section className=" bg-black py-10">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="text-center max-w-[700px] mx-auto">
     

          <h2 className=" hyi-h1 hyi-white ">
            {service.architectureTitle}
          </h2>

          <p className="mt-2 hyi-p hyi-blue  font-bold max-w-[600px] mx-auto">
            {service.architectureIntro}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 lg:grid grid-cols-2 lg:items-stretch">
          {service.architecture.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="flex flex-1 items-center"
            >
              <div className="min-h-[0px] flex-1 rounded-[20px] border border-white/[0.07] bg-white/[0.015] p-5">
              
                <h3 className=" hyi-h3 hyi-white">
                  {item.title}
                </h3>

                <p className="mt-2 hyi-p">
                  {item.description}
                </p>
              </div>

              {index !== service.architecture.length - 1 && (
                <ArrowRight className="mx-2 hidden h-3 w-3 shrink-0 text-white/15 lg:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}