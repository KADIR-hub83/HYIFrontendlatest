"use client";

import { motion } from "framer-motion";

const stages = [
  {
    number: "01",
    title: "Discover",
    text: "Understand sources, workloads, data consumers and infrastructure requirements.",
  },
  {
    number: "02",
    title: "Architect",
    text: "Design the target platform, schemas, pipelines and governance model.",
  },
  {
    number: "03",
    title: "Engineer",
    text: "Build ingestion, transformation, storage and serving layers.",
  },
  {
    number: "04",
    title: "Validate",
    text: "Test quality, performance, resilience and operational reliability.",
  },
  {
    number: "05",
    title: "Operate",
    text: "Monitor and continuously improve production data infrastructure.",
  },
];

export default function EngineeringWorkflow() {
  return (
    <section className="border-y border-white/[0.06] bg-[#090806] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="text-center">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            Engineering Lifecycle
          </span>

          <h2 className="mx-auto mt-7 max-w-[1050px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            Designed. Built.
            <span className="text-white/50"> Operated.</span>
          </h2>
        </div>

        <div className="mt-24 grid gap-4 lg:grid-cols-5">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative min-h-[370px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#0c0b0c] p-7"
            >
              <span className="font-mono text-[8px] text-violet-200/45">
                {stage.number}
              </span>

              <div className="mt-14 flex h-12 items-center">
                <motion.div
                  animate={{
                    width: ["25%", "85%", "25%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="h-px bg-gradient-to-r from-violet-100 to-transparent"
                />
              </div>

              <h3 className="mt-9 text-2xl">{stage.title}</h3>

              <p className="mt-5 text-sm leading-7 text-white/60">
                {stage.text}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-violet-100 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}