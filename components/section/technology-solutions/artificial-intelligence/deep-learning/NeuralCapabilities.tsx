"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Computer Vision",
    description:
      "Build neural systems that understand images, video, objects and visual environments.",
    tags: ["Detection", "Vision", "Recognition"],
  },
  {
    number: "02",
    title: "Natural Language",
    description:
      "Transform unstructured language into semantic understanding, classification and intelligence.",
    tags: ["NLP", "Semantic", "Language"],
  },
  {
    number: "03",
    title: "Predictive Intelligence",
    description:
      "Discover complex patterns across historical signals and predict future outcomes.",
    tags: ["Forecasting", "Risk", "Signals"],
  },
  {
    number: "04",
    title: "Recommendation Systems",
    description:
      "Create personalized ranking and recommendation engines that continuously learn.",
    tags: ["Ranking", "Personalize", "Retrieval"],
  },
  {
    number: "05",
    title: "Generative Models",
    description:
      "Engineer advanced generative systems across text, vision and multimodal workloads.",
    tags: ["LLM", "GenAI", "Multimodal"],
  },
  {
    number: "06",
    title: "Autonomous Intelligence",
    description:
      "Develop intelligent systems capable of learning policies and adapting to environments.",
    tags: ["Agents", "RL", "Automation"],
  },
];

export default function NeuralCapabilities() {
  return (
    <section className="relative bg-[#020308] py-28 md:py-40">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="text-center">
          <span className="text-[9px] uppercase tracking-[0.35em] text-blue-300/50">
            Deep Learning Capabilities
          </span>

          <h2 className="mx-auto mt-6 max-w-[900px] text-4xl font-medium tracking-[-0.045em] md:text-7xl">
            Neural intelligence for
            <span className="text-blue-300"> complex problems.</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -8 }}
              className="group relative min-h-[370px] overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#05070d] p-8 md:p-10"
            >
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-500/[0.06] blur-[80px] transition-all duration-700 group-hover:bg-cyan-400/[0.13]" />

              <div className="flex items-center justify-between">
                <span className="text-[9px] tracking-[0.3em] text-white/20">
                  {item.number}
                </span>

                <div className="relative h-10 w-10">
                  <motion.div
                    className="absolute inset-0 rounded-full border border-cyan-300/20"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_15px_#22d3ee]" />
                </div>
              </div>

              <div className="mt-20">
                <h3 className="text-2xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/38">
                  {item.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.07] px-3 py-1.5 text-[8px] uppercase tracking-[0.15em] text-white/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-500 via-cyan-300 to-transparent"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.2, delay: index * 0.08 }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}