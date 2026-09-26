"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Understand the outcome.",
    description:
      "Clarify business goals, stakeholders, scope, constraints and what success actually means.",
  },
  {
    number: "02",
    label: "PLAN",
    title: "Turn ambiguity into a roadmap.",
    description:
      "Create milestones, priorities, ownership, dependencies and realistic delivery expectations.",
  },
  {
    number: "03",
    label: "EXECUTE",
    title: "Keep every team moving.",
    description:
      "Coordinate work, remove blockers and keep decisions flowing across functions.",
  },
  {
    number: "04",
    label: "DELIVER",
    title: "Close with confidence.",
    description:
      "Manage release readiness, stakeholder communication and a clean path into the next phase.",
  },
];

export default function DeliveryWorkflow() {
  return (
    <section className="px-5 py-10 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1450px]">
        <div className="mb-20 grid gap-10 lg:grid-cols-2">
          <div>
          

            <h2 className="mt-5 hyi-h1 hyi-white">
              Less chaos.
              <br />
              <span className="text-white/25">More momentum.</span>
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <p className="max-w-[400px] hyi-p">
              Good project management isn't more meetings. It's the right
              information, decisions and people connecting at the right time.
            </p>
          </div>
        </div>

        <div className="border-t border-white/[0.07]">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group grid gap-8 border-b border-white/[0.07] py-10 transition md:grid-cols-[80px_150px_1fr_1fr]"
            >
              <span className="font-mono text-[12px] text-white/70">
                {step.number}
              </span>

              <span className="text-[12px] tracking-[0.2em] text-[#8b5cf6]">
                {step.label}
              </span>

              <h3 className="max-w-[430px] hyi-h3 hyi-white">
                {step.title}
              </h3>

              <p className="max-w-[400px] hyi-small hyi-gray">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}