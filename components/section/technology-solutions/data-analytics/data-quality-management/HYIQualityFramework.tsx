"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Database,
  GitBranch,
  ScanSearch,
  Settings2,
  ShieldCheck,
} from "lucide-react";

const framework = [
  {
    Icon: ScanSearch,
    number: "01",
    title: "Assess",
    text: "Identify critical data domains, consumers, existing quality problems and business processes that depend on reliable information.",
  },
  {
    Icon: Database,
    number: "02",
    title: "Profile",
    text: "Analyze important datasets to establish baselines for completeness, validity, uniqueness, distributions and other relevant characteristics.",
  },
  {
    Icon: Settings2,
    number: "03",
    title: "Define",
    text: "Work with business and technical stakeholders to translate expectations into measurable quality rules and thresholds.",
  },
  {
    Icon: ShieldCheck,
    number: "04",
    title: "Validate",
    text: "Implement automated controls at appropriate points across ingestion, transformation and consumption layers.",
  },
  {
    Icon: Activity,
    number: "05",
    title: "Observe",
    text: "Monitor quality trends, freshness, failures and changes in the behavior of important data assets.",
  },
  {
    Icon: GitBranch,
    number: "06",
    title: "Improve",
    text: "Connect incidents with ownership and lineage so teams can investigate root causes and improve upstream processes.",
  },
];

export default function HYIQualityFramework() {
  return (
    <section className="border-y border-[#7046e6]/10 bg-[#08070b] py-32">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"
        >
          <div>
            <div className="w-fit rounded-full border border-[#7046e6]/25 bg-[#7046e6]/[0.06] px-4 py-2">
              <span className="font-mono text-[6px] tracking-[0.2em] text-[#9c7cf2]">
                HYI.AI QUALITY APPROACH
              </span>
            </div>

            <h2 className="mt-7 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              Build quality into
              <span className="block text-[#7046e6]">
                the data lifecycle.
              </span>
            </h2>
          </div>

          <div className="lg:pt-12">
            <p className="max-w-[650px] text-[11px] leading-8 text-white/48">
              HYI's proposed delivery approach treats data quality as an
              operational capability rather than a one-time cleansing
              exercise. The framework connects business expectations with
              profiling, automated validation, monitoring and accountable
              remediation.
            </p>
          </div>
        </motion.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[32px] border border-[#7046e6]/15 bg-[#7046e6]/10 md:grid-cols-2 lg:grid-cols-3">
          {framework.map((item, index) => {
            const Icon = item.Icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group min-h-[320px] bg-[#060608] p-8"
              >
                <div className="flex justify-between">
                  <Icon
                    size={18}
                    strokeWidth={1}
                    className="text-[#9472ee]"
                  />

                  <span className="font-mono text-[6px] text-[#7046e6]/55">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-16 text-xl font-medium">
                  {item.title}
                </h3>

                <p className="mt-5 text-[9px] leading-6 text-white/38">
                  {item.text}
                </p>

                <div className="mt-8 flex items-center gap-2 font-mono text-[5px] tracking-[0.14em] text-[#7046e6]/50">
                  QUALITY LAYER
                  <ArrowRight size={9} />
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-6 max-w-[800px] text-[7px] leading-5 text-white/22">
          This section describes a proposed HYI.AI delivery methodology.
          Specific controls, technologies, quality dimensions and operating
          processes should be adapted to each organization's data environment
          and business requirements.
        </p>
      </div>
    </section>
  );
}