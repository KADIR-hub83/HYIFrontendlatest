"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  CircleDot,
  Sparkles,
} from "lucide-react";

import type { CloudService } from "./cloudServices";

type Props = {
  service: CloudService;
};

export default function CloudUseCases({ service }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#030303] py-28 md:py-36">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "62px 62px",
          maskImage:
            "radial-gradient(circle at 50% 45%, black, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 45%, black, transparent 78%)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[28%] h-[620px] w-[1100px] -translate-x-1/2 rounded-full bg-[#7046e6]/[0.045] blur-[180px]" />

      <div className="pointer-events-none absolute -left-[200px] bottom-[5%] h-[450px] w-[450px] rounded-full bg-[#7046e6]/[0.035] blur-[150px]" />

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-10">
        {/* =====================================================
            SECTION INTRO
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-[980px] text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#7046e6]/20 bg-[#7046e6]/[0.05] px-4 py-2">
            <CircleDot size={10} className="text-[#a98cf4]" />

            <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#a98cf4]">
              06 / WHERE IT APPLIES
            </p>
          </div>

          <h2 className="mt-7 text-4xl font-medium leading-[0.98] tracking-[-0.06em] md:text-6xl lg:text-[76px]">
            Business situations
            <span className="block text-[#7046e6]">
              where it creates value.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[760px] text-[13px] leading-7 text-white/[0.52] md:text-[15px] md:leading-8">
            {service.title} becomes valuable when technology decisions must
            respond to real operational requirements, business constraints,
            changing demand and long-term objectives. These scenarios show
            where the capability can become part of a practical cloud
            strategy.
          </p>
        </motion.div>

        {/* =====================================================
            USE CASE GRID
        ====================================================== */}

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {service.useCases.map((item, index) => (
            <motion.article
              key={`${service.slug}-${item.title}`}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
              }}
              whileHover={{
                y: -7,
              }}
              className="group relative min-h-[390px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#080808] p-7 md:p-8"
            >
              {/* =============================================
                  CARD BACKGROUND
              ============================================== */}

              <div className="pointer-events-none absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full bg-[#7046e6]/0 blur-[85px] transition-all duration-500 group-hover:bg-[#7046e6]/[0.14]" />

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-[#7046e6]/[0.035] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                {/* =============================================
                    TOP
                ============================================== */}

                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/[0.08]">
                    <BriefcaseBusiness
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#a98cf4]"
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/[0.22]">
                      Use Case
                    </span>

                    <span className="font-mono text-[10px] text-[#9675ed]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02]">
                      <ArrowUpRight
                        size={13}
                        className="text-white/[0.25] transition-all duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px] group-hover:text-[#a98cf4]"
                      />
                    </div>
                  </div>
                </div>

                {/* =============================================
                    CONTENT
                ============================================== */}

                <div className="mt-10">
                  <span className="font-mono text-[7px] uppercase tracking-[0.25em] text-[#7046e6]">
                    BUSINESS SCENARIO
                  </span>

                  <h3 className="mt-4 max-w-[420px] text-[23px] font-medium leading-[1.15] tracking-[-0.03em] text-white md:text-[26px]">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-[520px] text-[13px] leading-7 text-white/[0.52] md:text-[14px] md:leading-8">
                    {item.description}
                  </p>
                </div>

                {/* =============================================
                    BOTTOM
                ============================================== */}

                <div className="mt-auto pt-9">
                  <div className="border-t border-white/[0.06] pt-5">
                    <div className="flex items-center justify-between gap-5">
                      <div className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#7046e6]/25 bg-[#7046e6]/[0.08]">
                          <Check
                            size={10}
                            strokeWidth={2}
                            className="text-[#a98cf4]"
                          />
                        </div>

                        <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/[0.30]">
                          Applicable scenario
                        </span>
                      </div>

                      <ArrowRight
                        size={14}
                        className="text-[#7046e6] transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>

                    {/* animated line */}

                    <div className="mt-5 h-px overflow-hidden bg-white/[0.05]">
                      <motion.div
                        initial={{
                          x: "-100%",
                        }}
                        whileInView={{
                          x: "0%",
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.25 + index * 0.06,
                        }}
                        className="h-full w-[42%] bg-gradient-to-r from-[#7046e6] via-[#9675ed] to-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            BUSINESS CONTEXT PANEL
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-5 overflow-hidden rounded-[30px] border border-[#7046e6]/20 bg-[#070707]"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-[300px] w-[500px] bg-[#7046e6]/[0.055] blur-[120px]" />

          <div className="relative grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT */}

            <div className="border-b border-white/[0.06] p-7 md:p-9 lg:border-b-0 lg:border-r">
              <div className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#7046e6]/25 bg-[#7046e6]/[0.08]">
                <Sparkles
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#a98cf4]"
                />
              </div>

              <p className="mt-7 font-mono text-[8px] uppercase tracking-[0.25em] text-[#9675ed]">
                BUSINESS CONTEXT
              </p>

              <h3 className="mt-4 max-w-[500px] text-2xl font-medium leading-tight tracking-[-0.035em] md:text-3xl">
                Technology becomes useful when it solves the right problem.
              </h3>
            </div>

            {/* RIGHT */}

            <div className="p-7 md:p-9">
              <p className="max-w-[760px] text-[13px] leading-7 text-white/[0.52] md:text-[14px] md:leading-8">
                A successful {service.title} initiative should begin with a
                clearly understood business situation. Teams can then evaluate
                workload requirements, technical constraints, operating
                expectations and measurable outcomes before selecting the
                architecture and services required to support them.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    number: "01",
                    title: "Understand",
                    text: "Define the business situation.",
                  },
                  {
                    number: "02",
                    title: "Evaluate",
                    text: "Assess requirements and constraints.",
                  },
                  {
                    number: "03",
                    title: "Design",
                    text: "Build the appropriate cloud approach.",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="rounded-[18px] border border-white/[0.06] bg-white/[0.015] p-5"
                  >
                    <span className="font-mono text-[8px] text-[#9675ed]">
                      {step.number}
                    </span>

                    <p className="mt-4 text-[14px] font-medium text-white/[0.85]">
                      {step.title}
                    </p>

                    <p className="mt-2 text-[11px] leading-5 text-white/[0.38]">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}