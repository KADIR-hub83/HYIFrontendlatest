"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Sparkles } from "lucide-react";
import type { CloudService } from "./cloudServices";

const contextSteps = [
  { number: "01", title: "Understand", text: "Define the business situation." },
  { number: "02", title: "Evaluate", text: "Assess requirements and constraints." },
  { number: "03", title: "Design", text: "Build the appropriate cloud approach." },
];

export default function CloudUseCases({ service }: { service: CloudService }) {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-5 py-10 md:px-10 md:py-14 lg:px-20">
      <div className="pointer-events-none absolute left-1/2 top-[28%] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#7c3aed]/[0.07] blur-[180px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="hyi-h3 hyi-blue">06 / WHERE IT APPLIES</p>

          <h2 className="hyi-h1 mt-4 max-w-[800px] text-[38px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[52px]">
            <span className="hyi-white">Business situations</span>
            <span className="block hyi-blue">where it creates value.</span>
          </h2>

          <p className="hyi-p mt-4 max-w-[760px]">
            {service.title} becomes valuable when technology decisions must
            respond to real operational requirements, business constraints and
            changing demand. These scenarios show where the capability can
            become part of a practical cloud strategy.
          </p>
        </motion.div>

        {/* USE CASES */}
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {service.useCases.map((item, index) => (
            <motion.article
              key={`${service.slug}-${item.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className="hyi-skeu group relative overflow-hidden p-6 md:p-7"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#7c3aed]/10 blur-3xl" />

              <div className="relative flex items-center justify-between">
                <BriefcaseBusiness size={20} className="hyi-blue-icon" />
                <span className="font-mono text-[12px] text-white/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative mt-6">
                <span className="font-mono text-[12px] tracking-[0.2em] text-[#a78bfa]">
                  BUSINESS SCENARIO
                </span>
                <h3 className="hyi-h3 hyi-white mt-3">{item.title}</h3>
                <p className="hyi-p mt-2 pr-8">{item.description}</p>
              </div>

              <ArrowUpRight
                size={18}
                className="hyi-white-icon absolute bottom-6 right-6 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#a78bfa]"
              />
            </motion.article>
          ))}
        </div>

        {/* BUSINESS CONTEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hyi-skeu mt-4 grid gap-6 p-6 md:p-8 lg:grid-cols-[.8fr_1.2fr]"
        >
          <div>
            <Sparkles size={20} className="hyi-blue-icon" />
            <p className="hyi-h3 hyi-blue mt-4">BUSINESS CONTEXT</p>
            <h3 className="hyi-h1 hyi-white mt-3 max-w-[480px] text-[26px] font-medium leading-[1.15] tracking-[-0.035em] md:text-[32px]">
              Technology becomes useful when it solves the right problem.
            </h3>
          </div>

          <div>
            <p className="hyi-p max-w-[760px]">
              A successful {service.title} initiative should begin with a
              clearly understood business situation. Teams can then evaluate
              workload requirements, technical constraints, operating
              expectations and measurable outcomes before selecting the
              architecture and services required to support them.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {contextSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4"
                >
                  <span className="font-mono text-[12px] text-[#a78bfa]">
                    {step.number}
                  </span>
                  <p className="hyi-h3 hyi-white mt-3">{step.title}</p>
                  <p className="hyi-p mt-1">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}