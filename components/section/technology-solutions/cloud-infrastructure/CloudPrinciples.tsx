"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { CloudService } from "./cloudServices";

export default function CloudPrinciples({
  service,
}: {
  service: CloudService;
}) {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] py-28 md:py-36">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
          maskImage:
            "radial-gradient(circle at 70% 45%, black, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at 70% 45%, black, transparent 72%)",
        }}
      />

      {/* Purple glow */}
      <div className="pointer-events-none absolute right-[5%] top-[20%] h-[520px] w-[520px] rounded-full bg-[#7046e6]/[0.055] blur-[160px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="flex items-center gap-3">
              <span className="h-[5px] w-[5px] rounded-full bg-[#9675ed] shadow-[0_0_14px_#9675ed]" />

              <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#a98cf4]">
                05 / DESIGN PRINCIPLES
              </p>
            </div>

            <h2 className="mt-7 max-w-[560px] text-4xl font-medium leading-[0.96] tracking-[-0.06em] md:text-6xl lg:text-[68px]">
              Principles
              <br />
              before
              <span className="block text-[#7046e6]">products.</span>
            </h2>

            <p className="mt-8 max-w-[540px] text-[13px] leading-7 text-white/[0.58] md:text-[14px] md:leading-8">
              Technology platforms, cloud products and implementation patterns
              will continue to evolve. Strong architecture therefore begins
              with durable engineering principles that remain useful even when
              individual tools, services and infrastructure choices change.
            </p>

            <p className="mt-5 max-w-[540px] text-[13px] leading-7 text-white/[0.45] md:text-[14px] md:leading-8">
              For {service.title}, these principles provide a consistent
              decision framework for evaluating architecture, operations,
              security, reliability and long-term maintainability. They help
              teams make technology decisions based on workload requirements
              instead of short-term product preferences.
            </p>

            {/* small information block */}

            <div className="mt-9 max-w-[540px] rounded-[20px] border border-[#7046e6]/20 bg-[#7046e6]/[0.045] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#7046e6]/25 bg-[#7046e6]/[0.08]">
                  <Sparkles size={14} className="text-[#a98cf4]" />
                </div>

                <div>
                  <p className="text-[13px] font-medium text-white/[0.82]">
                    Engineering over tooling
                  </p>

                  <p className="mt-2 text-[11px] leading-6 text-white/[0.42]">
                    Products are implementation choices. Principles define how
                    those choices should be evaluated, operated and improved
                    throughout the lifecycle of the system.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= PRINCIPLE CARDS ================= */}

          <div className="grid gap-4 md:grid-cols-2">
            {service.principles.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.18,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -5,
                }}
                className={`
                  group relative min-h-[310px] overflow-hidden
                  rounded-[28px]
                  border border-white/[0.08]
                  bg-[#080808]
                  p-7 md:p-8
                  ${
                    index === service.principles.length - 1 &&
                    service.principles.length % 2 !== 0
                      ? "md:col-span-2 md:min-h-[270px]"
                      : ""
                  }
                `}
              >
                {/* Hover glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#7046e6]/0 blur-[75px] transition-all duration-500 group-hover:bg-[#7046e6]/[0.12]" />

                {/* subtle bottom gradient */}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#7046e6]/[0.025] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  {/* TOP */}

                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#7046e6]/30 bg-[#7046e6]/[0.09]">
                      <ShieldCheck
                        size={18}
                        strokeWidth={1.6}
                        className="text-[#a98cf4]"
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/[0.20]">
                        Principle
                      </span>

                      <span className="font-mono text-[10px] text-[#9675ed]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}

                  <div className="mt-9">
                    <h3 className="max-w-[520px] text-[22px] font-medium leading-[1.15] tracking-[-0.025em] text-white md:text-[24px]">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-[680px] text-[13px] leading-7 text-white/[0.52] md:text-[14px] md:leading-8">
                      {item.description}
                    </p>
                  </div>

                  {/* BOTTOM */}

                  <div className="mt-auto pt-8">
                    <div className="flex items-center justify-between border-t border-white/[0.06] pt-5">
                      <div className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#7046e6]/25 bg-[#7046e6]/[0.07]">
                          <Check
                            size={10}
                            strokeWidth={2}
                            className="text-[#a98cf4]"
                          />
                        </div>

                        <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/[0.28]">
                          Architecture standard
                        </span>
                      </div>

                      <ArrowUpRight
                        size={14}
                        className="text-white/[0.20] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#a98cf4]"
                      />
                    </div>

                    {/* animated purple line */}

                    <div className="mt-5 h-px w-full overflow-hidden bg-white/[0.05]">
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.25 + index * 0.06,
                        }}
                        className="h-full w-[38%] bg-gradient-to-r from-[#7046e6] to-[#a98cf4]"
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM PRINCIPLE BAR ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#070707] md:grid-cols-3"
        >
          <div className="border-b border-white/[0.06] p-6 md:border-b-0 md:border-r">
            <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-[#9675ed]">
              01 / DECISION
            </p>

            <p className="mt-3 text-[13px] leading-6 text-white/[0.55]">
              Evaluate technology according to workload and business
              requirements.
            </p>
          </div>

          <div className="border-b border-white/[0.06] p-6 md:border-b-0 md:border-r">
            <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-[#9675ed]">
              02 / IMPLEMENTATION
            </p>

            <p className="mt-3 text-[13px] leading-6 text-white/[0.55]">
              Translate principles into repeatable architecture and engineering
              standards.
            </p>
          </div>

          <div className="p-6">
            <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-[#9675ed]">
              03 / EVOLUTION
            </p>

            <p className="mt-3 text-[13px] leading-6 text-white/[0.55]">
              Continuously improve the system as workloads, risks and cloud
              capabilities evolve.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}