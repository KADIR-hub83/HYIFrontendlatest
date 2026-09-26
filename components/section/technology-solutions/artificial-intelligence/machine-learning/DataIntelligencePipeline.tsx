"use client";

import { motion } from "framer-motion";

const steps = [
  ["01", "Ingest", "Raw enterprise data"],
  ["02", "Prepare", "Clean & transform"],
  ["03", "Engineer", "Feature intelligence"],
  ["04", "Train", "Model learning"],
  ["05", "Evaluate", "Quality & bias"],
  ["06", "Deploy", "Production inference"],
];

export default function DataIntelligencePipeline() {
  return (
    <section className="relative overflow-hidden bg-[#11142d] py-24 text-white md:py-32">
      <div className="absolute left-[20%] top-[-250px] h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[170px]" />

      <div className="relative mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <h2 className="max-w-[650px] text-4xl font-semibold tracking-[-2px] md:text-6xl">
            Data becomes valuable
            <span className="block text-purple-300">
              when it starts learning.
            </span>
          </h2>

          <p className="max-w-[530px] self-end text-[14px] leading-7 text-white/35 lg:justify-self-end">
            A production ML pipeline transforms fragmented information into
            continuously improving intelligence.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-[49px] hidden h-px bg-white/10 lg:block" />

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="absolute left-0 right-0 top-[49px] hidden h-px origin-left bg-gradient-to-r from-blue-500 via-purple-400 to-pink-300 lg:block"
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {steps.map(([no, title, text], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.14 }}
                  className="relative z-10 mb-7 flex h-[100px] w-[100px] items-center justify-center rounded-[28px] border border-white/10 bg-[#181c3a] shadow-[0_20px_50px_rgba(0,0,0,.2)]"
                >
                  <span className="text-xl font-semibold text-purple-200">
                    {no}
                  </span>

                  <motion.span
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                    className="absolute right-3 top-3 h-[5px] w-[5px] rounded-full bg-purple-300"
                  />
                </motion.div>

                <h3 className="text-sm font-medium text-white/80">{title}</h3>
                <p className="mt-2 text-[10px] leading-5 text-white/27">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}