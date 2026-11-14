"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import type { CloudService } from "./cloudServices";

const bottomSteps = [
  {
    code: "01 / DECISION",
    text: "Evaluate technology according to workload and business requirements.",
  },
  {
    code: "02 / IMPLEMENTATION",
    text: "Translate principles into repeatable architecture and engineering standards.",
  },
  {
    code: "03 / EVOLUTION",
    text: "Continuously improve the system as workloads, risks and cloud capabilities evolve.",
  },
];

export default function CloudPrinciples({
  service,
}: {
  service: CloudService;
}) {
  const isOdd = service.principles.length % 2 !== 0;

  return (
    <section className="relative overflow-hidden bg-black px-5 py-10 md:px-10 md:py-14 lg:px-20">
      <div className="pointer-events-none absolute right-[5%] top-[20%] h-[480px] w-[480px] rounded-full bg-[#7c3aed]/10 blur-[160px]" />

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="hyi-h3 hyi-blue">05 / DESIGN PRINCIPLES</p>

            <h2 className="hyi-h1 mt-4 max-w-[560px] text-[38px] font-medium leading-[1.06] tracking-[-0.05em] md:text-[50px]">
              <span className="hyi-white">Principles before</span>
              <span className="block hyi-blue">products.</span>
            </h2>

            <p className="hyi-p mt-4 max-w-[520px]">
              Technology platforms, cloud products and implementation patterns
              will continue to evolve. Strong architecture begins with durable
              engineering principles that remain useful even when individual
              tools and services change.
            </p>

            <p className="hyi-p mt-3 max-w-[520px]">
              For {service.title}, these principles provide a consistent
              decision framework for architecture, operations, security,
              reliability and long-term maintainability.
            </p>

            <div className="hyi-skeu mt-6 flex max-w-[520px] items-start gap-4 p-5">
              <Sparkles size={20} className="hyi-blue-icon mt-0.5 shrink-0" />
              <div>
                <p className="hyi-h3 hyi-white">Engineering over tooling</p>
                <p className="hyi-p mt-2">
                  Products are implementation choices. Principles define how
                  those choices are evaluated, operated and improved.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARDS */}
          <div className="grid gap-4 md:grid-cols-2">
            {service.principles.map((item, index) => {
              const isLast = index === service.principles.length - 1;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  whileHover={{ y: -6 }}
                  className={`hyi-skeu group relative overflow-hidden p-6 md:p-7 ${
                    isOdd && isLast ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#7c3aed]/10 blur-3xl" />

                  <div className="relative flex items-center justify-between">
                    <ShieldCheck size={20} className="hyi-blue-icon" />
                    <span className="font-mono text-[12px] text-[#a78bfa]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative mt-6">
                    <h3 className="hyi-h3 hyi-white">{item.title}</h3>
                    <p className="hyi-p mt-2 max-w-[680px] pr-8">
                      {item.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="hyi-white-icon absolute bottom-6 right-6 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#a78bfa]"
                  />
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {bottomSteps.map((step, index) => (
            <motion.div
              key={step.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="hyi-skeu p-6"
            >
              <p className="font-mono text-[12px] tracking-[0.2em] text-[#a78bfa]">
                {step.code}
              </p>
              <p className="hyi-p mt-3">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}