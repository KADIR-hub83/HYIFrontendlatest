"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Braces,
  Database,
  GitBranch,
  Workflow,
} from "lucide-react";

const features = [
  {
    Icon: Workflow,
    title: "Pipeline Engineering",
    text: "Create repeatable workflows for moving and transforming data.",
  },
  {
    Icon: GitBranch,
    title: "Data Transformation",
    text: "Convert raw information into reusable and understandable datasets.",
  },
  {
    Icon: Database,
    title: "Data Modeling",
    text: "Structure information around analytical and operational requirements.",
  },
  {
    Icon: Braces,
    title: "Automation",
    text: "Reduce manual processing through managed data workflows.",
  },
];

export default function DataEngineeringSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#070707] py-28">
      <div className="absolute -right-[300px] top-[20%] h-[700px] w-[700px] rounded-full bg-[#390b44]/40 blur-[190px]" />

      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
              05 / DATA ENGINEERING
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
              Turn raw data
              <span className="block text-[#7046e6]">
                into usable data.
              </span>
            </h2>

            <p className="mt-7 text-[13px] leading-7 text-white/[0.52]">
              Data engineering provides the workflows that collect, transform,
              validate and organize information before it reaches analytics,
              applications or AI systems.
            </p>

            <div className="mt-10 space-y-3">
              {features.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-[18px] border border-white/[0.07] bg-[#030303] p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] border border-[#7046e6]/25 bg-[#7046e6]/[0.08]">
                    <Icon size={14} className="text-[#9e7cec]" />
                  </div>

                  <div>
                    <h3 className="text-[14px]">{title}</h3>
                    <p className="mt-2 text-[10px] leading-5 text-white/[0.42]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[760px] overflow-hidden rounded-[38px] border border-white/[0.08]"
          >
            <Image
              src="/images/data-platforms/data-engineering.webp"
              alt="Data engineering and pipeline development"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/10 to-transparent" />
            <div className="absolute inset-0 bg-[#7046e6]/10 mix-blend-color" />

            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-mono text-[6px] tracking-[0.25em] text-[#c3affb]">
                ENGINEERED DATA FLOW
              </p>

              <h3 className="mt-5 max-w-[620px] text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                Reliable pipelines.
                <span className="block text-white/[0.42]">
                  Repeatable transformations.
                </span>
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}