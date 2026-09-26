"use client";

import { motion } from "framer-motion";

const industries = [
  {
    title: "Manufacturing",
    label: "QUALITY VISION",
    text: "Automated defect detection, quality inspection, assembly verification and worker safety monitoring.",
    stats: ["Defect AI", "Inspection", "Safety"],
  },
  {
    title: "Retail",
    label: "VISUAL COMMERCE",
    text: "Visual search, shelf intelligence, inventory monitoring and intelligent in-store experiences.",
    stats: ["Search", "Inventory", "Analytics"],
  },
  {
    title: "Healthcare",
    label: "MEDICAL VISION",
    text: "Assist image analysis, segmentation and clinical visual workflows with specialized AI systems.",
    stats: ["Imaging", "Analysis", "Workflow"],
  },
  {
    title: "Logistics",
    label: "SMART OPERATIONS",
    text: "Package recognition, warehouse monitoring, asset tracking and automated visual verification.",
    stats: ["Tracking", "OCR", "Automation"],
  },
  {
    title: "Smart Cities",
    label: "URBAN INTELLIGENCE",
    text: "Traffic analytics, infrastructure monitoring and visual intelligence for connected environments.",
    stats: ["Traffic", "Monitor", "Edge AI"],
  },
  {
    title: "Enterprise",
    label: "DOCUMENT VISION",
    text: "Convert documents, forms and scanned content into structured, searchable enterprise information.",
    stats: ["OCR", "Extract", "Classify"],
  },
];

export default function IndustryVision() {
  return (
    <section className="relative bg-[#030303] py-28 md:py-40">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="text-center">
          <span className="text-[8px] uppercase tracking-[0.35em] text-fuchsia-300/55">
            Industry Vision Systems
          </span>

          <h2 className="mx-auto mt-6 max-w-[1000px] text-4xl font-medium tracking-[-0.05em] md:text-7xl">
            Visual AI for the
            <span className="text-violet-300"> physical world.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[760px] text-[15px] leading-8 text-white/60">
            Deploy intelligent perception across factories, stores, warehouses,
            healthcare systems and connected environments.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ delay: (index % 3) * 0.1 }}
              className="group relative min-h-[430px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#09090c] p-8"
            >
              <div className="absolute right-0 top-0 h-[180px] w-[180px] bg-gradient-to-bl from-violet-500/[0.08] to-transparent blur-[40px]" />

              <span className="text-[7px] tracking-[0.25em] text-violet-300/50">
                {industry.label}
              </span>

              <div className="mt-16 h-[110px] w-full overflow-hidden rounded-xl border border-white/[0.06] bg-black/30">
                <div
                  className="h-full w-full opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(196,181,253,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(196,181,253,.12) 1px,transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <motion.div
                  className="relative -mt-[75px] ml-[20%] h-[45px] w-[55%] border border-violet-300/60"
                  animate={{ x: [0, 20, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>

              <h3 className="mt-8 text-2xl text-white/90">
                {industry.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {industry.text}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {industry.stats.map((stat) => (
                  <span
                    key={stat}
                    className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[6px] uppercase tracking-[0.18em] text-white/40"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}