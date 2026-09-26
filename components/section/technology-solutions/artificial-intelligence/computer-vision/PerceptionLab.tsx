"use client";

import { motion } from "framer-motion";

export default function PerceptionLab() {
  return (
    <section className="relative overflow-hidden bg-[#08070a] py-28 md:py-44">
      <div className="mx-auto max-w-[1450px] px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <span className="text-[8px] uppercase tracking-[0.35em] text-violet-300/55">
              Perception Laboratory
            </span>

            <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-7xl">
              More than
              <span className="block text-violet-300">object detection.</span>
            </h2>

            <p className="mt-8 max-w-[580px] text-[15px] leading-8 text-white/60">
              Advanced vision systems need to understand entire scenes. We
              combine detection, segmentation, depth, motion and spatial
              reasoning to build richer machine perception.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {[
                "Scene Understanding",
                "Depth Estimation",
                "Pose Detection",
                "Motion Analysis",
                "Instance Segmentation",
                "Spatial Intelligence",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-4 text-xs text-white/55"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-10 rounded-full bg-violet-600/10 blur-[120px]" />

            <div className="relative overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#050507] p-3">
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["RGB", "RAW VISUAL"],
                  ["DEPTH", "SPATIAL MAP"],
                  ["SEGMENT", "PIXEL MASK"],
                  ["POSE", "KEYPOINTS"],
                ].map(([title, subtitle], index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    className="relative aspect-square overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#0b0a0e]"
                  >
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(167,139,250,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(167,139,250,.1) 1px,transparent 1px)",
                        backgroundSize: "26px 26px",
                      }}
                    />

                    <motion.div
                      className="absolute left-1/2 top-1/2 h-[38%] w-[25%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] border border-violet-300/40 bg-violet-400/[0.08]"
                      animate={{
                        scale: [1, 1.08, 1],
                        opacity: [0.4, 0.9, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />

                    <div className="absolute bottom-4 left-4">
                      <div className="text-[8px] tracking-[0.2em] text-white/70">
                        {title}
                      </div>
                      <div className="mt-1 text-[6px] tracking-[0.18em] text-white/35">
                        {subtitle}
                      </div>
                    </div>

                    <motion.div
                      className="absolute left-0 right-0 h-px bg-violet-300/60"
                      animate={{ top: ["10%", "90%", "10%"] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.4,
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}