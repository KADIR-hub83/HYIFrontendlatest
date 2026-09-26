"use client";

import { motion } from "framer-motion";

export default function MachineLearningCTA() {
  return (
    <section className="relative overflow-hidden bg-[#faf9ff] px-5 py-24 text-[#17152a] md:px-10 md:py-32 lg:px-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[44px] bg-gradient-to-br from-[#25134d] via-[#4c1d95] to-[#6d28d9] px-6 py-24 text-center text-white shadow-[0_40px_120px_rgba(91,33,182,.25)] md:py-32"
      >
        <motion.div
          animate={{
            x: ["-20%", "20%", "-20%"],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute left-[10%] top-[-150px] h-[500px] w-[500px] rounded-full bg-fuchsia-400/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: ["20%", "-20%", "20%"],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-[-200px] right-[5%] h-[600px] w-[600px] rounded-full bg-blue-400/20 blur-[140px]"
        />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[950px]">
          <p className="text-[8px] uppercase tracking-[3px] text-purple-100/55">
            Machine Learning with HYI.AI
          </p>

          <h2 className="mt-7 text-4xl font-semibold leading-[1.02] tracking-[-2px] md:text-6xl lg:text-[76px]">
            Your data already knows
            <span className="block text-purple-200">
              more than you think.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[680px] text-[14px] leading-7 text-white/55">
            Turn enterprise data into predictive models, automated decisions
            and continuously improving intelligent systems.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{
                y: -6,
                scale: 1.04,
                boxShadow: "0 25px 70px rgba(255,255,255,.18)",
              }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-white px-9 py-4 text-[12px] font-semibold text-purple-900"
            >
              Start Your ML Project →
            </motion.button>

            <motion.button
              whileHover={{ y: -6 }}
              className="rounded-full border border-white/20 bg-white/[0.07] px-9 py-4 text-[12px] text-white/75 backdrop-blur-xl"
            >
              Talk to ML Engineers
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}