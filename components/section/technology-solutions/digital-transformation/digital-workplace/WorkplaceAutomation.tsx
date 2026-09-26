"use client";

import { motion } from "framer-motion";

const automation = [
  ["Request", "An employee expresses an intent or initiates a business request."],
  ["Understand", "The system identifies required context, workflow and authorization boundaries."],
  ["Retrieve", "Relevant enterprise information is gathered from approved sources."],
  ["Decide", "Rules, AI assistance or human judgment determine the appropriate next action."],
  ["Execute", "Approved actions are performed through controlled workflow and system interfaces."],
  ["Review", "Results, exceptions and consequential decisions remain visible to appropriate people."],
  ["Learn", "Operational feedback can improve knowledge, processes and future automation design."],
];

export default function WorkplaceAutomation() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 py-40 md:px-10 md:py-56">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.35fr_1.65fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.27]">
                09 / AUTOMATION
              </p>

              <h2 className="mt-12 text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-6xl">
                Intent
                <span className="block text-white/[0.2]">
                  to action.
                </span>
              </h2>
            </div>
          </div>

          <div>
            {automation.map(([title, description], index) => (
              <motion.article
                key={title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                className="min-h-[250px] border-t border-white/[0.08] py-10"
              >
                <div className="flex justify-between">
                  <span className="font-mono text-[6px] text-white/[0.14]">
                    0{index + 1}
                  </span>

                  <span className="font-mono text-[6px] tracking-[0.17em] text-white/[0.12]">
                    WORKFLOW
                  </span>
                </div>

                <div className="mt-14 grid gap-8 md:grid-cols-[.65fr_1fr]">
                  <h3 className="text-4xl font-medium tracking-[-0.055em] md:text-5xl">
                    {title}
                  </h3>

                  <p className="text-[13px] leading-8 text-white/[0.36]">
                    {description}
                  </p>
                </div>
              </motion.article>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </div>
    </section>
  );
}