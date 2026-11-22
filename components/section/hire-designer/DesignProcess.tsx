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
    <section className="relative  bg-[#080808] px-5 py-10 sm:px-8 lg:px-12  ">
      <div className="mx-auto max-w-[1250px]">
        <div className="mb-8">
     

          <h2 className=" hyi-h1 hyi-white text-center mx-autos">
            From brief to brilliant,
            <span className="hyi-blue"> without the hiring drag.</span>
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
              className="grid  border-t border-white/[0.07] py-4 md:grid-cols-[80px_.9fr_1fr]"
            >
              <div>
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#080808] font-mono text-[9px] hyi-white-icon">
                  {step.number}
                </div>
              </div>

              <h3 className="max-w-[450px] hyi-h3 hyi-white">
                {step.title}
              </h3>

              <div className="mt-3 md:mt-0">
                <p className="max-w-[410px] hyi-p">
                  {step.text}
                </p>

                <div className="mt-2 flex items-center gap-3">
                  <div className="h-[1px] w-10 bg-[#8b5cf6]" />

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}