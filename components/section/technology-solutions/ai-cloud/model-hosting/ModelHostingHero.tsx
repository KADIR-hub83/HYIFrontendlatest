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
    <section className="relative overflow-hidden bg-[#030303] px-5  pt-32 md:px-10 ">
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

      <div className="relative mx-auto max-w-[1350px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1150px] text-center"
        >
        

          <h1 className="hyi-h1 hyi-white">
            Models deserve
            <span className="block hyi-blue ">
              production systems.
            </span>
          </h1>

          <p className="mx-auto mt-2 max-w-[790px] hyi-p">
            Deploy, host and operate AI models through scalable inference
            infrastructure designed around model runtimes, request routing,
            version control, private environments and continuously changing
            production demand.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {features.map(({ Icon, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2"
              >
                <Icon size={11} className="text-[#ad91f7]" />
                <span className="hyi-p">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-5">
          <LiveHostingDesktop />
        </div>
      </div>
    </section>
  );
}