"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "1:1",
    title: "Customer Experiences",
    text: "Deliver experiences tailored to individual context and preference.",
  },
  {
    value: "24/7",
    title: "Adaptive Ranking",
    text: "Continuously respond to changing behavior and contextual signals.",
  },
  {
    value: "360°",
    title: "Preference Context",
    text: "Combine multiple interaction signals into richer personalization.",
  },
  {
    value: "∞",
    title: "Recommendation Scale",
    text: "Apply intelligent ranking across products, content, services and actions.",
  },
];

export default function RecommendationImpact() {
  return (
    <section className="relative overflow-hidden bg-[#020203] py-32 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9f70e8]/[0.06] blur-[180px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-10">
        <span className="text-[8px] uppercase tracking-[0.42em] text-[#d9c7f5]/60">
          08 / Business Impact
        </span>

        <h2 className="mt-7 max-w-[1100px] text-5xl font-medium leading-[0.96] tracking-[-0.055em] md:text-7xl">
          Make every digital experience
          <span className="block bg-gradient-to-r from-white via-[#dfd3ed] to-[#9f7bce] bg-clip-text text-transparent">
            feel personally designed.
          </span>
        </h2>

        <div className="mt-20 grid overflow-hidden rounded-[30px] border border-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.article
              key={metric.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="min-h-[390px] border-b border-r border-white/[0.07] bg-[#07070a] p-8 transition duration-500 hover:bg-[#d8c7f5]/[0.035]"
            >
              <span className="text-[8px] text-white/20">
                0{index + 1}
              </span>

              <p className="mt-16 bg-gradient-to-r from-white to-[#d9c8f3] bg-clip-text text-6xl font-light tracking-[-0.06em] text-transparent">
                {metric.value}
              </p>

              <h3 className="mt-8 text-lg text-white/85">
                {metric.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {metric.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}