"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  CopyCheck,
  FileCheck2,
  Layers3,
  Target,
} from "lucide-react";

const dimensions = [
  {
    Icon: Target,
    number: "01",
    title: "Accuracy",
    question: "Does the value correctly represent reality?",
    explanation:
      "Accuracy evaluates whether stored information correctly reflects the real-world entity, event or measurement it is intended to represent.",
    example:
      "If a customer's recorded delivery address is different from the address actually used by the customer, the record may be inaccurate.",
  },
  {
    Icon: FileCheck2,
    number: "02",
    title: "Completeness",
    question: "Is required information present?",
    explanation:
      "Completeness measures whether the expected records and required attributes exist. Missing information can prevent analysis or operational processes from functioning correctly.",
    example:
      "A customer record that requires country and contact information may fail a completeness rule when those attributes are empty.",
  },
  {
    Icon: Layers3,
    number: "03",
    title: "Consistency",
    question: "Do equivalent values agree?",
    explanation:
      "Consistency evaluates whether the same concept is represented compatibly across datasets, applications or points in time.",
    example:
      "A customer marked active in a CRM but inactive in a billing system may create a consistency issue that requires reconciliation.",
  },
  {
    Icon: CheckCircle2,
    number: "04",
    title: "Validity",
    question: "Does the value follow expected rules?",
    explanation:
      "Validity determines whether data conforms to defined formats, types, ranges, domains and business constraints.",
    example:
      "A date value containing an impossible calendar date or a country field containing an unsupported code may be invalid.",
  },
  {
    Icon: Clock3,
    number: "05",
    title: "Timeliness",
    question: "Is the information current enough?",
    explanation:
      "Timeliness considers whether information becomes available within the period required by the business process that consumes it.",
    example:
      "Inventory information refreshed once per day may be insufficient for an application making decisions every few minutes.",
  },
  {
    Icon: CopyCheck,
    number: "06",
    title: "Uniqueness",
    question: "Is each entity represented appropriately?",
    explanation:
      "Uniqueness identifies unwanted duplicate records or identifiers that should represent a single entity.",
    example:
      "The same customer appearing multiple times under slightly different names can distort counts, segmentation and customer analytics.",
  },
];

export default function QualityDimensions() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[900px]"
        >
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#8f6aed]">
            02 / QUALITY DIMENSIONS
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
            Six ways to ask:
            <span className="text-white/28">
              {" "}can this data be trusted?
            </span>
          </h2>

          <p className="mt-7 max-w-[700px] text-[10px] leading-7 text-white/42">
            Different organizations may define or group quality dimensions
            differently. These six provide a practical framework for
            understanding many common enterprise data-quality problems.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {dimensions.map((item, index) => {
            const Icon = item.Icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group min-h-[390px] rounded-[28px] border border-white/[0.07] bg-[#050505] p-7 transition-colors hover:border-[#7046e6]/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#7046e6]/20 bg-[#7046e6]/[0.06]">
                    <Icon
                      size={16}
                      strokeWidth={1}
                      className="text-[#9b7bf0]"
                    />
                  </div>

                  <span className="font-mono text-[6px] text-white/18">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-medium">
                  {item.title}
                </h3>

                <p className="mt-3 text-[9px] font-medium text-[#8f6aed]">
                  {item.question}
                </p>

                <p className="mt-5 text-[9px] leading-6 text-white/40">
                  {item.explanation}
                </p>

                <div className="mt-7 border-t border-white/[0.06] pt-5">
                  <p className="font-mono text-[5px] tracking-[0.15em] text-white/20">
                    EXAMPLE
                  </p>

                  <p className="mt-3 text-[8px] leading-5 text-white/30">
                    {item.example}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}