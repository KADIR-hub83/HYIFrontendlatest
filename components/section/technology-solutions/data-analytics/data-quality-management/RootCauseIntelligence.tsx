"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowDown,
  Database,
  GitBranch,
  Server,
  Wrench,
} from "lucide-react";

const chain = [
  {
    Icon: Server,
    title: "Source system",
    text: "Incorrect source value introduced",
  },
  {
    Icon: Database,
    title: "Ingestion",
    text: "Invalid record enters pipeline",
  },
  {
    Icon: GitBranch,
    title: "Transformation",
    text: "Error propagates downstream",
  },
  {
    Icon: AlertCircle,
    title: "Quality incident",
    text: "Monitoring detects violation",
  },
  {
    Icon: Wrench,
    title: "Remediation",
    text: "Root cause corrected",
  },
];

export default function RootCauseIntelligence() {
  return (
    <section className="bg-[#050505] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[7px] tracking-[0.25em] text-[#8f6aed]">
              07 / ROOT CAUSE
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              Fix the source.
              <span className="block text-white/28">
                Not just the symptom.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[10px] leading-7 text-white/42">
              Correcting a bad record may solve today problem while leaving
              the underlying defect untouched. Sustainable quality management
              investigates where problems originate and how they propagate
              through the data estate.
            </p>

            <p className="mt-5 max-w-[500px] text-[10px] leading-7 text-white/42">
              Lineage, metadata, pipeline observability and accountable
              ownership can help teams determine which source or transformation
              created the defect and which downstream consumers may be affected.
            </p>
          </motion.div>

          <div className="rounded-[30px] border border-[#7046e6]/15 bg-[#080808] p-6 md:p-8">
            {chain.map((item, index) => {
              const Icon = item.Icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                >
                  <div className="flex items-center gap-5 rounded-[18px] border border-white/[0.06] bg-[#050505] p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#7046e6]/20 bg-[#7046e6]/[0.05]">
                      <Icon
                        size={14}
                        className="text-[#9472ee]"
                      />
                    </div>

                    <div>
                      <p className="text-[10px] text-white/65">
                        {item.title}
                      </p>

                      <p className="mt-2 text-[8px] text-white/30">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  {index !== chain.length - 1 && (
                    <div className="flex h-8 items-center pl-5">
                      <ArrowDown
                        size={10}
                        className="text-[#7046e6]/45"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}