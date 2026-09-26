"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BellRing,
  CheckCheck,
  RefreshCw,
  ScanSearch,
  Settings2,
} from "lucide-react";

const steps = [
  {
    Icon: ScanSearch,
    number: "01",
    title: "Profile",
    text: "Examine distributions, nulls, patterns, duplicates, ranges and anomalies to understand the current condition of a dataset.",
  },
  {
    Icon: Settings2,
    number: "02",
    title: "Define",
    text: "Translate business expectations into explicit quality rules, thresholds and service expectations.",
  },
  {
    Icon: CheckCheck,
    number: "03",
    title: "Validate",
    text: "Execute checks against incoming and existing data to identify records that violate defined expectations.",
  },
  {
    Icon: Activity,
    number: "04",
    title: "Monitor",
    text: "Observe quality continuously and identify degradation, drift, unusual patterns or freshness failures.",
  },
  {
    Icon: BellRing,
    number: "05",
    title: "Respond",
    text: "Create incidents, notify accountable teams and assess the downstream impact of detected problems.",
  },
  {
    Icon: RefreshCw,
    number: "06",
    title: "Improve",
    text: "Resolve root causes, improve source processes and update controls so recurring defects become less likely.",
  },
];

export default function QualityLifecycle() {
  return (
    <section className="bg-[#050505] py-32">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#8f6aed]">
            03 / QUALITY LIFECYCLE
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
            Quality is a loop,
            <span className="text-white/28"> not a cleanup project.</span>
          </h2>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-[7%] right-[7%] top-[42px] hidden h-px bg-gradient-to-r from-transparent via-[#7046e6]/40 to-transparent lg:block" />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {steps.map((item, index) => {
              const Icon = item.Icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="relative z-10 flex h-[84px] w-[84px] items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#08060d] shadow-[0_0_35px_rgba(112,70,230,.08)]"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1}
                      className="text-[#9875ef]"
                    />
                  </motion.div>

                  <p className="mt-7 font-mono text-[5px] text-[#7046e6]">
                    {item.number}
                  </p>

                  <h3 className="mt-3 text-[13px] font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[8px] leading-6 text-white/35">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}