"use client";

import { motion } from "framer-motion";

const controls = [
  {
    title: "Identity",
    text:
      "AI-enabled workplace experiences should operate with a clear understanding of the authenticated user and relevant organizational context.",
  },
  {
    title: "Authorization",
    text:
      "Retrieval and actions must respect the permissions that apply to underlying enterprise systems and information.",
  },
  {
    title: "Information boundaries",
    text:
      "Sensitive knowledge should not become broadly visible simply because a conversational interface is easier to use.",
  },
  {
    title: "Action controls",
    text:
      "AI-generated recommendations and automated actions require different levels of review depending on consequence and reversibility.",
  },
  {
    title: "Auditability",
    text:
      "Important AI-assisted actions should provide sufficient operational evidence for investigation and governance.",
  },
  {
    title: "Lifecycle",
    text:
      "Workplace AI experiences require continuous review as knowledge sources, workflows, models and organizational policies change.",
  },
];

export default function WorkplaceGovernance() {
  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col justify-between gap-12 border-b border-white/[0.08] pb-16 lg:flex-row">
          <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.27]">
            10 / AI GOVERNANCE
          </p>

          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl">
            Intelligence needs
            <span className="block text-white/[0.2]">
              boundaries.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2">
          {controls.map((control, index) => (
            <motion.article
              key={control.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="min-h-[320px] border-b border-white/[0.08] p-8 md:border-x md:p-10"
            >
              <span className="font-mono text-[6px] text-white/[0.14]">
                CONTROL {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-20 text-3xl font-medium tracking-[-0.05em]">
                {control.title}
              </h3>

              <p className="mt-7 text-[13px] leading-8 text-white/[0.36]">
                {control.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}