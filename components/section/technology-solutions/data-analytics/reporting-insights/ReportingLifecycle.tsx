"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Database,
  FileCheck2,
  FileSearch,
  Gauge,
  MessageSquareText,
  RefreshCw,
  Target,
} from "lucide-react";

const process = [
  {
    Icon: Target,
    step: "01",
    title: "Define the audience",
    text: "Understand who consumes the report, which decisions they make and the level of detail appropriate for their role.",
    output: "Audience & decision scope",
  },
  {
    Icon: FileSearch,
    step: "02",
    title: "Define reporting questions",
    text: "Translate business needs into explicit questions such as performance versus target, period-over-period movement or segment contribution.",
    output: "Reporting requirements",
  },
  {
    Icon: Database,
    step: "03",
    title: "Establish trusted data",
    text: "Identify source systems, validate definitions and ensure reporting measures are calculated from governed data.",
    output: "Trusted reporting dataset",
  },
  {
    Icon: Gauge,
    step: "04",
    title: "Create metric logic",
    text: "Define measures, dimensions, time logic, targets and comparison rules so interpretation remains consistent.",
    output: "Metric framework",
  },
  {
    Icon: MessageSquareText,
    step: "05",
    title: "Build the narrative",
    text: "Organize information according to importance: summary first, supporting evidence next and detailed investigation afterward.",
    output: "Information hierarchy",
  },
  {
    Icon: FileCheck2,
    step: "06",
    title: "Validate the report",
    text: "Check calculations, labels, filters, time periods, access rules and whether users interpret the information as intended.",
    output: "Validated report",
  },
  {
    Icon: RefreshCw,
    step: "07",
    title: "Operationalize",
    text: "Establish refresh schedules, distribution, ownership, monitoring and processes for evolving reporting requirements.",
    output: "Production reporting",
  },
];

export default function ReportingLifecycle() {
  return (
    <section className="bg-[#030303] py-32">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-[7px] tracking-[0.25em] text-[#9575ed]">
                04 / REPORTING LIFECYCLE
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-6xl">
                From business question
                <span className="block text-[#7046e6]">
                  to trusted report.
                </span>
              </h2>

              <p className="mt-7 max-w-[470px] text-[10px] leading-7 text-white/42">
                Professional reporting begins before a chart is created. The
                audience, business question, metric definition and data
                foundation determine whether the final report will be useful.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-[27px] top-0 w-px bg-gradient-to-b from-[#7046e6] via-[#7046e6]/20 to-transparent" />

            <div className="space-y-5">
              {process.map((item, index) => {
                const Icon = item.Icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.04,
                    }}
                    className="relative grid grid-cols-[56px_1fr] gap-5"
                  >
                    <motion.div
                      whileInView={{
                        boxShadow: [
                          "0 0 0 rgba(112,70,230,0)",
                          "0 0 30px rgba(112,70,230,.25)",
                          "0 0 0 rgba(112,70,230,0)",
                        ],
                      }}
                      transition={{ duration: 2 }}
                      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#08060e]"
                    >
                      <Icon size={15} className="text-[#9878ef]" />
                    </motion.div>

                    <div className="rounded-[24px] border border-white/[0.07] bg-[#080808] p-6 md:p-7">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <p className="font-mono text-[5px] tracking-[0.17em] text-[#8e6bec]">
                            STEP {item.step}
                          </p>

                          <h3 className="mt-3 text-lg font-medium">
                            {item.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-[#7046e6]/15 bg-[#7046e6]/[0.04] px-3 py-2">
                          <CheckCircle2
                            size={8}
                            className="text-[#9472ef]"
                          />

                          <span className="font-mono text-[5px] text-white/25">
                            {item.output}
                          </span>
                        </div>
                      </div>

                      <p className="mt-5 max-w-[700px] text-[8px] leading-6 text-white/36">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}