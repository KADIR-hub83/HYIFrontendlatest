"use client";

import { motion } from "framer-motion";
import {
  Braces,
  CheckCircle2,
  Database,
  Filter,
  ShieldCheck,
} from "lucide-react";

const rules = [
  {
    rule: "Required field",
    logic: "customer_id IS NOT NULL",
    purpose: "Completeness",
  },
  {
    rule: "Valid range",
    logic: "quantity >= 0",
    purpose: "Validity",
  },
  {
    rule: "Unique key",
    logic: "COUNT(customer_id) = 1",
    purpose: "Uniqueness",
  },
  {
    rule: "Freshness",
    logic: "updated_at <= threshold",
    purpose: "Timeliness",
  },
];

export default function QualityRuleEngine() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[7px] tracking-[0.25em] text-[#8f6aed]">
              04 / RULE ENGINE
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
              Turn expectations
              <span className="block text-white/28">
                into executable rules.
              </span>
            </h2>

            <p className="mt-7 max-w-[570px] text-[10px] leading-7 text-white/43">
              A quality requirement becomes operational when it can be tested.
              Rules may evaluate individual fields, complete records,
              relationships between tables, aggregates or the freshness and
              behavior of entire datasets.
            </p>

            <p className="mt-5 max-w-[570px] text-[10px] leading-7 text-white/43">
              The important part is not merely writing checks. Each important
              rule should have business context, an accountable owner, an
              expected threshold and a response when the expectation is not met.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[30px] border border-[#7046e6]/20 bg-[#050505]"
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] p-5">
              <div className="flex items-center gap-3">
                <Braces size={14} className="text-[#9875ef]" />

                <span className="font-mono text-[6px] tracking-[0.15em] text-white/35">
                  QUALITY RULE ENGINE
                </span>
              </div>

              <motion.span
                animate={{ opacity: [0.25, 1, 0.25] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="h-1.5 w-1.5 rounded-full bg-[#7046e6]"
              />
            </div>

            <div className="p-5">
              {rules.map((item, index) => (
                <motion.div
                  key={item.rule}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-3 grid gap-4 rounded-[18px] border border-white/[0.06] bg-white/[0.015] p-5 md:grid-cols-[.8fr_1.4fr_.7fr]"
                >
                  <div>
                    <p className="text-[9px] text-white/65">
                      {item.rule}
                    </p>
                  </div>

                  <code className="text-[7px] text-[#9b7bf0]">
                    {item.logic}
                  </code>

                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      size={10}
                      className="text-[#7046e6]"
                    />

                    <span className="text-[7px] text-white/30">
                      {item.purpose}
                    </span>
                  </div>
                </motion.div>
              ))}

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  [Database, "Dataset"],
                  [Filter, "Validation"],
                  [ShieldCheck, "Trusted"],
                ].map(([Icon, label]) => {
                  const I = Icon as typeof Database;

                  return (
                    <div
                      key={label as string}
                      className="rounded-xl border border-white/[0.05] p-4 text-center"
                    >
                      <I
                        size={13}
                        className="mx-auto text-[#7046e6]/70"
                      />

                      <p className="mt-3 font-mono text-[5px] text-white/25">
                        {label as string}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}