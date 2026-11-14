"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import type { EndpointService } from "./endpointServices";
import EndpointModel from "./EndpointModel";

export default function EndpointHero({
  service,
}: {
  service: EndpointService;
}) {
  return (
    <section className="relative overflow-hidden pt-30  bg-black">
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(255,255,255,.8) 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute -left-16 top-[24%] h-40 w-40 rounded-full bg-[#7c3aed]"
      />

      <motion.div
        animate={{
          scale: [1, 1.16, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="absolute -right-20 top-[13%] h-56 w-56 rounded-full bg-[#7c3aed]"
      />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[850px] text-center"
        >
      


          <h1 className="mx-auto mt-5 hyi-h1 hyi-white max-w-[700px]">
            {service.title}
          </h1>

          <p className="mx-auto mt-3 max-w-[680px] hyi-p hyi-blue font-bold">
            {service.intro}
          </p>

          <p className="mx-auto mt-3 max-w-[650px] hyi-p ">
            {service.description}
          </p>

   
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="mx-auto mt-5 "
        >
          <EndpointModel model={service.model} />
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
          }}
          className="mx-auto mt-5 grid max-w-[800px] grid-cols-3 overflow-hidden rounded-[18px] border border-white/[0.07] bg-black/80"
        >
          {service.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-4 py-4 text-center ${
                index !== service.stats.length - 1
                  ? "border-r border-white/[0.07]"
                  : ""
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#7c3aed]" />

                <span className="text-[12px] text-white/65">
                  {stat.value}
                </span>
              </div>

              <p className="mt-2 font-mono text-[7px] uppercase tracking-[0.18em] text-white/20">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
}