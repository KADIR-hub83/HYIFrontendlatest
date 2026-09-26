"use client";

import { motion } from "framer-motion";

const impact = [
  {
    value: "98%",
    label: "Prediction Accuracy",
    text: "Production-grade predictive intelligence.",
  },
  {
    value: "15M+",
    label: "Daily Inferences",
    text: "Intelligence delivered at enterprise scale.",
  },
  {
    value: "60%",
    label: "Automation Gain",
    text: "Reduce repetitive decision workloads.",
  },
  {
    value: "10×",
    label: "Faster Intelligence",
    text: "Accelerate data-to-decision cycles.",
  },
];

export default function DeepLearningImpact() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.05] bg-[#04060a] py-28 md:py-40">
      <div className="absolute left-[-15%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[170px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-[9px] uppercase tracking-[0.35em] text-cyan-300/45">
              Business Impact
            </span>

            <h2 className="mt-6 max-w-[700px] text-4xl font-medium tracking-[-0.045em] md:text-7xl">
              Intelligence that creates
              <span className="block text-cyan-300">real-world impact.</span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-[570px] text-sm leading-7 text-white/38 md:text-base">
              Move beyond experimental models and operationalize deep learning
              systems designed around measurable business outcomes.
            </p>
          </div>
        </div>

        <div className="mt-20 grid border-l border-t border-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative min-h-[330px] border-b border-r border-white/[0.07] p-7 md:p-9"
            >
              <div className="text-[8px] tracking-[0.25em] text-white/15">
                0{index + 1}
              </div>

              <motion.div
                className="mt-14 text-5xl font-medium tracking-[-0.06em] md:text-6xl"
                whileHover={{ x: 6 }}
              >
                {item.value}
              </motion.div>

              <h3 className="mt-6 text-sm text-white/65">{item.label}</h3>

              <p className="mt-3 text-xs leading-6 text-white/30">
                {item.text}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-300 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}