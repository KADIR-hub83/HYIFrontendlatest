"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import NeuralNetworkVisual from "./NeuralNetworkVisual";

export default function MachineLearningHero() {
  const { scrollY } = useScroll();

  const visualY = useTransform(scrollY, [0, 700], [0, 100]);
  const textY = useTransform(scrollY, [0, 700], [0, 55]);

  return (
    <section className="relative overflow-hidden bg-[#f7f5ff] pb-24 pt-24 text-[#111127] md:pb-32 md:pt-32">
      <div className="absolute left-[-10%] top-[8%] h-[600px] w-[600px] rounded-full bg-[#c4b5fd]/35 blur-[140px]" />
      <div className="absolute right-[-10%] top-[20%] h-[700px] w-[700px] rounded-full bg-[#bfdbfe]/45 blur-[160px]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute right-[-160px] top-[-160px] h-[520px] w-[520px] rounded-full border border-dashed border-purple-500/10"
      />

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 md:px-10 lg:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-[.78fr_1.22fr]">
          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-3 rounded-full border border-purple-700/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-xl"
            >
              <span className="h-[6px] w-[6px] rounded-full bg-purple-600 shadow-[0_0_12px_#9333ea]" />

              <span className="text-[8px] uppercase tracking-[2px] text-purple-950/50">
                Machine Learning Engineering
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-8 text-[55px] font-semibold leading-[0.92] tracking-[-3px] sm:text-[70px] md:text-[86px] lg:text-[94px]"
            >
              Turn data
              <span className="block bg-gradient-to-r from-[#5b21b6] via-[#9333ea] to-[#4f46e5] bg-clip-text text-transparent">
                into intelligence.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-7 max-w-[610px] text-[15px] leading-8 text-[#24243b]/55"
            >
              Design, train and operationalize machine learning systems that
              learn from enterprise data, automate complex decisions and
              continuously improve business performance.
            </motion.p>

            <div className="mt-9 flex flex-wrap gap-3">
              <motion.button
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-[#171329] px-8 py-4 text-[12px] font-medium text-white shadow-[0_20px_60px_rgba(31,25,55,.2)]"
              >
                Explore ML Solutions →
              </motion.button>

              <motion.button
                whileHover={{ y: -5 }}
                className="rounded-full border border-[#171329]/10 bg-white/60 px-8 py-4 text-[12px] text-[#171329]/65 backdrop-blur-xl"
              >
                Build an ML Model
              </motion.button>
            </div>

            <div className="mt-12 grid max-w-[570px] grid-cols-3 border-t border-[#171329]/10 pt-6">
              {[
                ["01", "Predict"],
                ["02", "Optimize"],
                ["03", "Automate"],
              ].map(([number, label]) => (
                <div key={number}>
                  <div className="text-[8px] text-purple-700/45">{number}</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[1px] text-[#171329]/40">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ y: visualY }}
            initial={{ opacity: 0, scale: 0.92, rotateY: 8 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            <NeuralNetworkVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}