"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Boxes,
  CloudCog,
  LockKeyhole,
  Radio,
} from "lucide-react";

import LiveHostingDesktop from "./LiveHostingDesktop";

const features = [
  { Icon: Boxes, label: "Model serving" },
  { Icon: Radio, label: "Live inference" },
  { Icon: CloudCog, label: "Elastic runtime" },
  { Icon: LockKeyhole, label: "Private deployment" },
];

export default function ModelHostingHero() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-5 pb-28 pt-32 md:px-10 md:pt-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage:
            "radial-gradient(circle at 50% 35%,black,transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 35%,black,transparent 72%)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[300px] h-[700px] w-[1200px] -translate-x-1/2 rounded-full bg-[#7046e6]/[0.10] blur-[190px]" />

      <div className="relative mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1150px] text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#9878ef]/25 bg-[#7046e6]/[0.07] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#b99cff] opacity-40" />
              <span className="relative h-2 w-2 rounded-full bg-[#d4c5ff]" />
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.32em] text-[#b99cff]">
              HYI.AI / MODEL HOSTING
            </span>
          </div>

          <h1 className="mt-8 text-[clamp(4.4rem,9.5vw,9.6rem)] font-medium leading-[0.82] tracking-[-0.075em]">
            Models deserve
            <span className="block bg-gradient-to-r from-white via-[#e7e0f4] to-[#7653df] bg-clip-text text-transparent">
              production systems.
            </span>
          </h1>

          <p className="mx-auto mt-9 max-w-[790px] text-[13px] leading-7 text-white/[0.55] md:text-[15px]">
            Deploy, host and operate AI models through scalable inference
            infrastructure designed around model runtimes, request routing,
            version control, private environments and continuously changing
            production demand.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {features.map(({ Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2"
              >
                <Icon size={11} className="text-[#ad91f7]" />
                <span className="text-[10px] text-white/[0.5]">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16">
          <LiveHostingDesktop />
        </div>

        <a
          href="#hosting-overview"
          className="mx-auto mt-10 flex w-fit items-center gap-3 font-mono text-[8px] uppercase tracking-[0.25em] text-white/[0.3] transition hover:text-white"
        >
          Explore model hosting
          <ArrowDown size={11} />
        </a>
      </div>
    </section>
  );
}