"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Object Detection",
    text: "Identify and localize people, products, vehicles, equipment and custom objects across images and video.",
    tag: "DETECTION",
  },
  {
    number: "02",
    title: "Image Classification",
    text: "Automatically categorize visual data with custom deep-learning models trained for your domain.",
    tag: "CLASSIFY",
  },
  {
    number: "03",
    title: "Visual Inspection",
    text: "Detect defects, anomalies and quality issues across manufacturing and industrial processes.",
    tag: "INSPECTION",
  },
  {
    number: "04",
    title: "Object Tracking",
    text: "Continuously track movement, trajectories and behaviors across live camera streams.",
    tag: "TRACKING",
  },
  {
    number: "05",
    title: "OCR & Document Vision",
    text: "Extract text, fields, tables and visual structures from documents, forms and scanned content.",
    tag: "DOCUMENT AI",
  },
  {
    number: "06",
    title: "Segmentation",
    text: "Understand images at pixel level for advanced medical, industrial and autonomous applications.",
    tag: "SEGMENT",
  },
  {
    number: "07",
    title: "Visual Search",
    text: "Find visually similar products, assets and content using intelligent image representations.",
    tag: "SEARCH",
  },
  {
    number: "08",
    title: "Edge Vision",
    text: "Deploy optimized vision models closer to cameras and devices for low-latency processing.",
    tag: "EDGE AI",
  },
];

export default function VisionCapabilities() {
  return (
    <section className="relative bg-[#030303] py-28 md:py-40">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="max-w-[900px]">
          <span className="text-[8px] uppercase tracking-[0.35em] text-fuchsia-300/55">
            Computer Vision Capabilities
          </span>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-7xl">
            One vision platform.
            <span className="block text-violet-300">
              Endless ways to perceive.
            </span>
          </h2>

          <p className="mt-7 max-w-[720px] text-[15px] leading-8 text-white/60">
            Build visual intelligence for detection, recognition, inspection,
            search, automation and real-time decision-making across your
            operations.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative min-h-[390px] overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#09090c] p-7"
            >
              <div className="absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-violet-500/[0.04] blur-[70px] transition-all duration-700 group-hover:bg-violet-500/[0.12]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] tracking-[0.22em] text-white/30">
                    {item.number}
                  </span>

                  <span className="text-[6px] tracking-[0.2em] text-violet-300/50">
                    {item.tag}
                  </span>
                </div>

                <div className="mt-14 flex h-[74px] w-[74px] items-center justify-center rounded-2xl border border-violet-300/[0.15] bg-violet-400/[0.04]">
                  <div className="relative h-9 w-9 border border-violet-300/50">
                    <span className="absolute -left-1 -top-1 h-2 w-2 border-l border-t border-white" />
                    <span className="absolute -right-1 -top-1 h-2 w-2 border-r border-t border-white" />
                    <span className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-white" />
                    <span className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-white" />
                  </div>
                </div>

                <h3 className="mt-9 text-xl font-medium text-white/90">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {item.text}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-violet-500 via-fuchsia-300 to-transparent transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}