"use client";

import { motion } from "framer-motion";

const impact = [
  {
    value: "98.7%",
    title: "Detection Accuracy",
    text: "High-confidence visual recognition for production workflows.",
  },
  {
    value: "70%",
    title: "Faster Inspection",
    text: "Reduce manual inspection time with automated visual analysis.",
  },
  {
    value: "24/7",
    title: "Continuous Vision",
    text: "Monitor environments continuously without human fatigue.",
  },
  {
    value: "10×",
    title: "Visual Scale",
    text: "Analyze more images and video streams with intelligent automation.",
  },
];

export default function VisionImpact() {
  return (
    <section className="relative overflow-hidden bg-[#08070a] py-28 md:py-40">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.05] blur-[160px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="max-w-[950px]">
          <span className="text-[8px] uppercase tracking-[0.35em] text-violet-300/60">
            Business Impact
          </span>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-7xl">
            See more.
            <br />
            <span className="text-violet-300">Respond faster.</span>
          </h2>

          <p className="mt-7 max-w-[650px] text-[15px] leading-8 text-white/60">
            Visual intelligence helps organizations automate repetitive
            inspection, improve operational visibility and make faster
            decisions from real-world data.
          </p>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative min-h-[380px] bg-[#08070a] p-8"
            >
              <div className="text-[8px] tracking-[0.25em] text-white/30">
                0{index + 1}
              </div>

              <div className="mt-16 bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-5xl font-medium tracking-[-0.06em] text-transparent md:text-6xl">
                {item.value}
              </div>

              <h3 className="mt-8 text-lg text-white/85">{item.title}</h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {item.text}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-violet-500 to-fuchsia-300 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}