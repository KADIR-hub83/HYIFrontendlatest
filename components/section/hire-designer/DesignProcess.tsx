"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Tell us what you're building.",
    text: "Share your product stage, design challenge, timeline and the kind of expertise you need.",
  },
  {
    number: "02",
    title: "Meet matched designers.",
    text: "We identify senior designers whose experience aligns with your product, industry and workflow.",
  },
  {
    number: "03",
    title: "Start designing.",
    text: "Collaborate directly with your designer while HYI supports continuity, quality and delivery.",
  },
];

export default function DesignProcess() {
  return (
    <section className="relative border-y border-white/[0.06] bg-[#080808] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
            How it works
          </span>

          <h2 className="mt-5 max-w-[850px] text-[clamp(45px,6vw,90px)] font-medium leading-[0.92] tracking-[-0.065em]">
            From brief to brilliant,
            <span className="text-white/25"> without the hiring drag.</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[19px] top-0 hidden h-full w-px bg-white/[0.08] md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid min-h-[330px] border-t border-white/[0.07] py-12 md:grid-cols-[80px_.9fr_1fr]"
            >
              <div>
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#080808] font-mono text-[9px] text-white/35">
                  {step.number}
                </div>
              </div>

              <h3 className="max-w-[450px] text-[30px] font-medium leading-[1.05] tracking-[-0.04em] md:text-[42px]">
                {step.title}
              </h3>

              <div className="mt-7 md:mt-0">
                <p className="max-w-[410px] text-[12px] leading-6 text-white/40">
                  {step.text}
                </p>

                <div className="mt-10 flex items-center gap-3">
                  <div className="h-[1px] w-10 bg-[#8b5cf6]" />

                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                    Step {index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}