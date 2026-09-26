"use client";

import { motion } from "framer-motion";

const copilots = [
  {
    title: "Knowledge copilot",
    text:
      "Helps employees discover and understand information from authorized organizational knowledge sources.",
  },
  {
    title: "Service copilot",
    text:
      "Supports service teams by retrieving relevant customer, case, policy and resolution context.",
  },
  {
    title: "Operations copilot",
    text:
      "Assists operational teams with procedures, system context, incident information and recommended next actions.",
  },
  {
    title: "Engineering copilot",
    text:
      "Supports technical work by connecting developers with code, documentation, architecture and operational context.",
  },
  {
    title: "Employee copilot",
    text:
      "Provides a conversational interface for internal policies, workplace services, onboarding and routine employee questions.",
  },
  {
    title: "Leadership copilot",
    text:
      "Can help synthesize authorized business information into concise context for planning and review.",
  },
];

export default function WorkplaceCopilots() {
  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.27]">
            06 / COPILOTS
          </p>

          <h2 className="max-w-[850px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl">
            AI aligned to
            <span className="block text-white/[0.2]">
              real work.
            </span>
          </h2>
        </div>

        <div className="mt-24 grid md:grid-cols-2">
          {copilots.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="min-h-[330px] border border-white/[0.08] p-8 md:p-10"
            >
              <span className="font-mono text-[6px] text-white/[0.14]">
                COPILOT / {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-24 text-3xl font-medium tracking-[-0.05em]">
                {item.title}
              </h3>

              <p className="mt-7 max-w-[520px] text-[13px] leading-8 text-white/[0.36]">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}