"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Predictive Intelligence",
    text: "Forecast demand, behavior, risk and operational outcomes from complex historical and real-time signals.",
    tag: "FORECASTING",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Computer Vision",
    text: "Extract intelligence from images, video and visual environments.",
    tag: "VISION",
    className: "",
  },
  {
    title: "Recommendation Systems",
    text: "Deliver adaptive ranking and personalized experiences.",
    tag: "PERSONALIZATION",
    className: "",
  },
  {
    title: "Anomaly Detection",
    text: "Identify unusual patterns, fraud, failures and emerging risk.",
    tag: "DETECTION",
    className: "",
  },
  {
    title: "Optimization Models",
    text: "Improve scheduling, pricing, allocation and operational decisions.",
    tag: "OPTIMIZATION",
    className: "md:col-span-2",
  },
];

export default function MLCapabilities() {
  return (
    <section className="bg-[#f4f1fb] py-24 text-[#151427] md:py-32">
      <div className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-16">
        <div className="max-w-[800px]">
          <p className="text-[9px] uppercase tracking-[3px] text-purple-700/45">
            Machine Learning Capabilities
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-2px] md:text-6xl">
            Intelligence engineered for
            <span className="block text-purple-700">real-world decisions.</span>
          </h2>
        </div>

        <div className="mt-16 grid auto-rows-[260px] gap-4 md:grid-cols-3">
          {capabilities.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-[30px] border border-purple-950/[0.08] bg-white p-7 ${item.className}`}
            >
              <motion.div
                animate={{
                  x: ["-20%", "30%", "-20%"],
                  y: ["-20%", "20%", "-20%"],
                }}
                transition={{
                  duration: 9 + i,
                  repeat: Infinity,
                }}
                className="absolute right-[-80px] top-[-80px] h-[250px] w-[250px] rounded-full bg-purple-300/30 blur-[80px]"
              />

              {i === 0 && (
                <div className="absolute bottom-8 right-8 hidden h-[220px] w-[220px] md:block">
                  {[0, 1, 2, 3].map((ring) => (
                    <motion.div
                      key={ring}
                      animate={{ rotate: ring % 2 ? -360 : 360 }}
                      transition={{
                        duration: 14 + ring * 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute rounded-full border border-dashed border-purple-700/10"
                      style={{
                        inset: ring * 25,
                      }}
                    />
                  ))}
                </div>
              )}

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="text-[7px] uppercase tracking-[2px] text-purple-700/35">
                  {item.tag}
                </div>

                <div>
                  <h3
                    className={`font-semibold tracking-[-1px] ${
                      i === 0 ? "text-3xl md:text-4xl" : "text-xl"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[550px] text-[12px] leading-6 text-[#151427]/42">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}