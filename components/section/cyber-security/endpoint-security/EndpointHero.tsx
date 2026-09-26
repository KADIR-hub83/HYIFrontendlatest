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
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-black">
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
          <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.02] px-4 py-2">
            <ShieldCheck className="h-3 w-3 text-white/45" />

            <span className="font-mono text-[8px] uppercase tracking-[0.23em] text-white/35">
              {service.eyebrow}
            </span>
          </div>

          <p className="mt-8 font-mono text-[8px] uppercase tracking-[0.28em] text-white/20">
            {service.kicker}
          </p>

          <h1 className="mx-auto mt-5 max-w-[900px] text-[38px] font-medium leading-[1.08] tracking-[-0.04em] text-white md:text-[52px] lg:text-[58px]">
            {service.title}
          </h1>

          <p className="mx-auto mt-7 max-w-[680px] text-[13px] leading-7 text-white/45">
            {service.intro}
          </p>

          <p className="mx-auto mt-3 max-w-[650px] text-[11px] leading-6 text-white/25">
            {service.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#capabilities"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[11px] font-medium text-black"
            >
              Explore capabilities
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
            </a>

            <a
              href="#intelligence"
              className="inline-flex items-center gap-3 rounded-full border border-white/[0.09] px-6 py-3 text-[11px] text-white/45"
            >
              Endpoint intelligence
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="mx-auto mt-16 max-w-[1220px]"
        >
          <EndpointModel model={service.model} />
        </motion.div>

        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
}