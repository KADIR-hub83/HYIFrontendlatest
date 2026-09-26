"use client";

import { motion } from "framer-motion";

const stages = [
  {
    no: "01",
    title: "Capture",
    text: "Cameras, images, video streams and edge devices continuously capture visual information.",
    meta: "INPUT",
  },
  {
    no: "02",
    title: "Perceive",
    text: "Vision models detect objects, people, defects, patterns, motion and visual characteristics.",
    meta: "VISION AI",
  },
  {
    no: "03",
    title: "Understand",
    text: "Context, relationships and scene information turn detections into meaningful intelligence.",
    meta: "REASON",
  },
  {
    no: "04",
    title: "Decide",
    text: "Rules and AI systems determine the appropriate business or operational response.",
    meta: "DECISION",
  },
  {
    no: "05",
    title: "Act",
    text: "Automated systems trigger alerts, workflows, robotics or downstream applications.",
    meta: "ACTION",
  },
];

export default function VisionPipeline() {
  return (
    <section className="relative overflow-hidden bg-[#08080b] py-28 md:py-40">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-[8px] uppercase tracking-[0.35em] text-violet-300/60">
              Visual Intelligence Pipeline
            </span>

            <h2 className="mt-6 max-w-[700px] text-4xl font-medium tracking-[-0.05em] md:text-7xl">
              From pixels to
              <span className="block text-violet-300">real-world action.</span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-[610px] text-[15px] leading-8 text-white/60 md:text-base">
              Computer vision connects the physical and digital worlds. Our
              vision systems capture visual information, interpret scenes,
              identify patterns and transform perception into automated
              decisions.
            </p>
          </div>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-0 top-[27px] hidden h-px w-full bg-white/[0.08] lg:block" />

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="absolute left-0 top-[27px] hidden h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent lg:block"
          />

          <div className="grid gap-4 lg:grid-cols-5">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <div className="relative z-10 mb-7 flex h-[54px] w-[54px] items-center justify-center rounded-full border border-violet-300/20 bg-[#08080b] text-[8px] tracking-[0.2em] text-violet-200/60">
                  {stage.no}
                </div>

                <div className="group min-h-[290px] rounded-[24px] border border-white/[0.08] bg-[#0c0c10] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-violet-300/25">
                  <span className="text-[7px] tracking-[0.25em] text-violet-300/45">
                    {stage.meta}
                  </span>

                  <h3 className="mt-8 text-2xl text-white/90">
                    {stage.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/55">
                    {stage.text}
                  </p>

                  <motion.div
                    className="mt-10 h-px bg-gradient-to-r from-violet-500 to-transparent"
                    initial={{ width: "15%" }}
                    whileInView={{ width: "80%" }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}