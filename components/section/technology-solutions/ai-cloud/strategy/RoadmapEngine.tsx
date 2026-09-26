"use client";

import { motion } from "framer-motion";
import { CheckCircle2, CircleDot } from "lucide-react";

const steps = [
  ["Discover", "Baseline applications, data, AI demand and operating constraints."],
  ["Foundation", "Establish identity, networking, security and landing-zone standards."],
  ["Platform", "Create reusable data, compute, AI and observability capabilities."],
  ["Modernize", "Move or redesign priority workloads using the target architecture."],
  ["Scale", "Expand adoption with governance, automation and financial controls."],
  ["Optimize", "Continuously improve reliability, cost, performance and AI operations."],
];

export default function RoadmapEngine() {
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-[#7046e6]/20 bg-[#070707] p-7 md:p-10">
      <div className="absolute bottom-10 left-[8%] top-10 w-px bg-[#7046e6]/20 md:left-1/2" />

      <motion.div
        animate={{ top: ["7%", "88%", "7%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[calc(8%-4px)] h-2 w-2 rounded-full bg-[#7046e6] shadow-[0_0_18px_#7046e6] md:left-[calc(50%-4px)]"
      />

      <div className="relative space-y-5">
        {steps.map(([title, text], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: index % 2 ? 25 : -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className={`grid md:grid-cols-2 ${
              index % 2 ? "" : "md:text-right"
            }`}
          >
            <div
              className={`ml-12 rounded-[22px] border border-white/[0.07] bg-[#0a0a0a] p-6 md:ml-0 ${
                index % 2 ? "md:col-start-2 md:ml-8" : "md:mr-8"
              }`}
            >
              <div
                className={`flex items-center gap-2 ${
                  index % 2 ? "" : "md:justify-end"
                }`}
              >
                {index === 0 ? (
                  <CircleDot size={13} className="text-[#9878ef]" />
                ) : (
                  <CheckCircle2 size={13} className="text-[#9878ef]" />
                )}
                <span className="font-mono text-[7px] text-[#9878ef]">
                  PHASE 0{index + 1}
                </span>
              </div>

              <h3 className="mt-4 text-[19px]">{title}</h3>
              <p className="mt-3 text-[11px] leading-6 text-white/[0.4]">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}