"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Eye,
  Lock,
  Network,
  ShieldCheck,
} from "lucide-react";

import type { EndpointService } from "./endpointServices";

const icons = [
  ShieldCheck,
  Eye,
  Activity,
  Lock,
  Network,
  CheckCircle2,
];

export default function EndpointCapabilities({
  service,
}: {
  service: EndpointService;
}) {
  return (
    <section
      id="capabilities"
      className="relative  bg-black py-10"
    >
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
       

            <h2 className="mt- max-w-[460px] hyi-h1 hyi-white">
              {service.capabilitiesTitle}
            </h2>

            <p className="mt-3 max-w-[450px] hyi-blue font-bold  hyi-p">
              {service.capabilitiesIntro}
            </p>
          </motion.div>

          <div className="grid gap-3 md:grid-cols-2">
            {service.capabilities.map((item, index) => {
              const Icon = icons[index % icons.length];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -5,
                    borderColor:"white"
                  }}
                  className="group min-h-[20px] rounded-[22px] border border-white/[0.07] bg-white/[0.018] p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08]">
                      <Icon className="h-4 w-4 hyi-white-icon" />
                    </div>

                   
                  </div>

                  <h3 className="mt-2 hyi-h3">
                    {item.title}
                  </h3>

                  <p className="mt-2 hyi-p">
                    {item.description}
                  </p>

                  <div className="mt-3 h-px overflow-hidden bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "55%" }}
                      viewport={{ once: true }}
                      className="h-full bg-[#7c3aed]/70"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}