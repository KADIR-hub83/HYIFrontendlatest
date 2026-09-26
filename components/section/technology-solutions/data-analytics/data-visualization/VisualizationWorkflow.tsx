"use client";

import { motion } from "framer-motion";
import {
  Database,
  Filter,
  Lightbulb,
  MonitorUp,
  Shapes,
} from "lucide-react";

const workflow = [
  {
    Icon: Database,
    number: "01",
    title: "Connect",
    text: "Bring together data from business applications, APIs, warehouses and operational systems.",
  },
  {
    Icon: Filter,
    number: "02",
    title: "Structure",
    text: "Clean, organize and prepare information for accurate visual analysis.",
  },
  {
    Icon: Shapes,
    number: "03",
    title: "Visualize",
    text: "Translate complex datasets into intuitive interactive visual experiences.",
  },
  {
    Icon: Lightbulb,
    number: "04",
    title: "Understand",
    text: "Reveal trends, patterns, relationships and important business signals.",
  },
  {
    Icon: MonitorUp,
    number: "05",
    title: "Act",
    text: "Give teams the clarity required to make faster informed decisions.",
  },
];

export default function VisualizationWorkflow() {
  return (
    <section className="bg-[#050505] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="text-center">
          <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            Visualization workflow
          </span>

          <h2 className="mx-auto mt-7 max-w-[1050px] text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            From raw information
            <span className="text-white/55"> to visual intelligence.</span>
          </h2>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-[8%] right-[8%] top-[52px] hidden h-px bg-white/[0.08] lg:block" />

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "84%" }}
            viewport={{ once: true }}
            transition={{ duration: 2.5 }}
            className="absolute left-[8%] top-[52px] hidden h-px bg-gradient-to-r from-violet-600 via-violet-100 to-violet-600 lg:block"
          />

          <div className="grid gap-5 lg:grid-cols-5">
            {workflow.map(({ Icon, number, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative z-10 mx-auto flex h-[104px] w-[104px] items-center justify-center rounded-full border border-violet-200/15 bg-[#050505]">
                  <Icon size={22} className="text-violet-100/70" />

                  <motion.span
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.25,
                    }}
                    className="absolute inset-3 rounded-full border border-violet-200/15"
                  />
                </div>

                <div className="mt-7 min-h-[260px] rounded-[28px] border border-white/[0.08] bg-[#0b0a09] p-7">
                  <span className="text-[7px] tracking-[0.2em] text-white/25">
                    {number}
                  </span>

                  <h3 className="mt-7 text-xl text-white/90">{title}</h3>

                  <p className="mt-4 text-sm leading-7 text-white/58">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}