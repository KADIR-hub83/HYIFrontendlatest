"use client";

import { motion } from "framer-motion";
import CloudIcon from "./CloudIcon";
import type { CloudService } from "./cloudServices";

type Props = {
  service: CloudService;
};

export default function CloudHero({ service }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-5 pb-24 pt-36 text-white md:px-10 md:pb-32 md:pt-44">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(circle at 50% 45%, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 45%, black, transparent 70%)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[450px] h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-[#7046e6]/10 blur-[200px]" />

      <div className="relative mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1100px] text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#7046e6]/25 bg-[#7046e6]/[0.07] px-4 py-2">
            <CloudIcon
              name={service.icon}
              size={11}
              strokeWidth={1.7}
              className="text-[#a98ef4]"
            />

            <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-[#a98ef4]">
              HYI.AI / {service.eyebrow}
            </span>
          </div>

          <h1 className="mt-9 text-[clamp(4rem,8vw,8.5rem)] font-medium leading-[0.87] tracking-[-0.075em]">
            {service.title}
          </h1>

          <p className="mx-auto mt-8 max-w-[850px] text-[13px] leading-7 text-white/55 md:text-[15px]">
            {service.description}
          </p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mx-auto mt-12 h-px max-w-[700px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(112,70,230,0.8), transparent)",
            }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mx-auto mt-10 max-w-[760px] text-[11px] uppercase leading-6 tracking-[0.12em] text-white/35"
          >
            {service.accent}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}