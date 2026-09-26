"use client";

import { motion } from "framer-motion";

const cases = [
  ["Retail", "Demand forecasting & personalization", "01"],
  ["Finance", "Fraud, risk & predictive scoring", "02"],
  ["Healthcare", "Clinical and operational intelligence", "03"],
  ["Manufacturing", "Predictive maintenance & quality", "04"],
  ["Logistics", "Routing, ETA & network optimization", "05"],
  ["Enterprise", "Process prediction & decision automation", "06"],
];

export default function MLUseCases() {
  return (
    <section className="bg-[#eee9ff] py-24 text-[#17152a] md:py-32">
      <div className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-[9px] uppercase tracking-[3px] text-purple-700/45">
              Applied Machine Learning
            </p>

            <h2 className="mt-5 max-w-[700px] text-4xl font-semibold tracking-[-2px] md:text-6xl">
              Built around your
              <span className="block text-purple-700">business reality.</span>
            </h2>
          </div>

          <p className="max-w-[440px] text-[13px] leading-7 text-[#17152a]/42">
            ML solutions designed around operational outcomes instead of
            technology demonstrations.
          </p>
        </div>

        <div className="mt-16 divide-y divide-purple-950/10 border-y border-purple-950/10">
          {cases.map(([industry, useCase, no], i) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 12 }}
              transition={{ delay: i * 0.06 }}
              className="group grid items-center gap-4 py-7 md:grid-cols-[80px_.6fr_1.4fr_50px]"
            >
              <span className="text-[8px] text-purple-700/35">{no}</span>
              <h3 className="text-xl font-medium">{industry}</h3>
              <p className="text-[12px] text-[#17152a]/40">{useCase}</p>
              <motion.span
                whileHover={{ x: 5 }}
                className="text-xl text-purple-700/40"
              >
                ↗
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}