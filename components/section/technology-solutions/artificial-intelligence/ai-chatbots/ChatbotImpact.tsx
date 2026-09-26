"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "24/7",
    title: "Availability",
    text: "Always-on conversational experiences across customer channels.",
  },
  {
    value: "<1s",
    title: "Response",
    text: "Fast AI-driven interactions designed for real-time experiences.",
  },
  {
    value: "100+",
    title: "Languages",
    text: "Build multilingual conversational experiences for global audiences.",
  },
  {
    value: "360°",
    title: "Context",
    text: "Connect conversation, customer, knowledge and workflow context.",
  },
];

export default function ChatbotImpact() {
  return (
    <section className="border-y border-white/[0.06] bg-[#060609] py-32 md:py-44">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-purple-300/50">
            07 / Business Impact
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Every conversation
            <span className="block text-white/30">becomes an opportunity.</span>
          </h2>
        </div>

        <div className="mt-20 grid border-y border-white/[0.07] md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group min-h-[350px] border-b border-white/[0.07] p-7 transition hover:bg-purple-500/[0.03] md:border-r lg:border-b-0"
            >
              <span className="text-[9px] text-white/20">
                0{i + 1}
              </span>

              <div className="mt-16">
                <p className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-6xl font-light tracking-[-0.06em] text-transparent md:text-7xl">
                  {metric.value}
                </p>

                <h3 className="mt-7 text-lg font-medium">
                  {metric.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  {metric.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}