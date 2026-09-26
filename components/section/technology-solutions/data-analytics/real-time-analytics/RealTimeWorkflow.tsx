"use client";

import { motion } from "framer-motion";

const workflow = [
  {
    number: "01",
    title: "Capture",
    text: "Collect events from applications, transactions, devices and connected platforms.",
  },
  {
    number: "02",
    title: "Stream",
    text: "Transport continuously arriving events through scalable streaming infrastructure.",
  },
  {
    number: "03",
    title: "Process",
    text: "Clean, enrich, join, aggregate and transform events while they are moving.",
  },
  {
    number: "04",
    title: "Analyze",
    text: "Apply analytical logic, thresholds and models to identify meaningful signals.",
  },
  {
    number: "05",
    title: "Deliver",
    text: "Push updated intelligence into dashboards, alerts, APIs and operational workflows.",
  },
];

export default function RealTimeWorkflow() {
  return (
    <section className="border-y border-white/[0.06] bg-[#050505] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="mx-auto max-w-[850px] text-center">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#e8def3]/40">
            CONTINUOUS INTELLIGENCE LOOP
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            Event to insight.
            <span className="text-white/35">
              {" "}Continuously.
            </span>
          </h2>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-white/[0.08] lg:block" />

          <motion.div
            animate={{ left: ["8%", "91%"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[29px] z-20 hidden h-2 w-2 rounded-full bg-[#eee7f7] shadow-[0_0_18px_#eee7f7] lg:block"
          />

          <div className="relative grid gap-3 lg:grid-cols-5">
            {workflow.map((item) => (
              <div
                key={item.number}
                className="relative min-h-[270px] rounded-[27px] border border-white/[0.07] bg-[#070707] p-6"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#e8def3]/12 bg-[#e8def3]/[0.025] font-mono text-[7px] text-[#e8def3]/40">
                  {item.number}
                </div>

                <h3 className="mt-12 text-lg font-medium">
                  {item.title}
                </h3>

                <p className="mt-5 text-[10px] leading-6 text-white/40">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}