"use client";

import { motion } from "framer-motion";

const phases = [
  ["01", "Understand", "Business priorities, readiness and opportunity landscape"],
  ["02", "Prioritize", "Use-case portfolio, value cases and investment decisions"],
  ["03", "Design", "Architecture, governance and enterprise operating model"],
  ["04", "Activate", "Pilot high-value initiatives and establish delivery foundations"],
  ["05", "Scale", "Industrialize successful patterns across teams and functions"],
];

export default function TransformationRoadmap() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#050407] py-24 md:py-32">
      <div className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
              Transformation Roadmap
            </p>

            <h2 className="mt-5 max-w-[570px] text-4xl font-semibold leading-[1.05] md:text-6xl">
              A practical path from
              <span className="block bg-gradient-to-r from-[#e4bcff] to-[#7558ff] bg-clip-text text-transparent">
                ambition to scale.
              </span>
            </h2>
          </div>

          <p className="max-w-[550px] self-end text-[14px] leading-7 text-white/32 lg:justify-self-end">
            Transformation is sequenced around value and readiness rather than
            technology alone—allowing organizations to learn quickly without
            creating fragmented AI initiatives.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute bottom-0 left-[37px] top-0 w-px bg-white/[0.06] md:left-1/2" />

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="absolute left-[37px] top-0 w-px bg-gradient-to-b from-purple-200 via-purple-600 to-transparent shadow-[0_0_18px_rgba(168,85,247,.4)] md:left-1/2"
          />

          <div className="space-y-12 md:space-y-6">
            {phases.map(([no, title, text], index) => (
              <motion.div
                key={no}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -60 : 60,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className={`relative grid md:grid-cols-2 ${
                  index % 2 === 0 ? "" : "md:text-right"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-[17px] top-7 z-20 flex h-[41px] w-[41px] items-center justify-center rounded-full border border-purple-300/20 bg-[#09060e] text-[7px] text-purple-200/45 shadow-[0_0_25px_rgba(168,85,247,.12)] md:left-1/2 md:-translate-x-1/2"
                >
                  {no}
                </motion.div>

                <div
                  className={`ml-20 md:ml-0 ${
                    index % 2 === 0
                      ? "md:pr-16"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="rounded-[25px] border border-white/[0.06] bg-[#08070b] p-7"
                  >
                    <span className="text-[7px] uppercase tracking-[1.5px] text-purple-300/30">
                      Phase {no}
                    </span>

                    <h3 className="mt-3 text-xl text-white/78">{title}</h3>

                    <p className="mt-3 text-[13px] leading-7 text-white/30">
                      {text}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}