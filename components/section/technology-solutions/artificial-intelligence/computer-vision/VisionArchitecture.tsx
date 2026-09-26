"use client";

import { motion } from "framer-motion";

const layers = [
  {
    title: "Capture Layer",
    text: "Cameras • Video • Images • Sensors",
  },
  {
    title: "Edge Intelligence",
    text: "Preprocessing • Edge inference • Streaming",
  },
  {
    title: "Vision Models",
    text: "Detection • Classification • Segmentation",
  },
  {
    title: "Intelligence Layer",
    text: "Tracking • Context • Rules • Analytics",
  },
  {
    title: "Enterprise Actions",
    text: "Alerts • APIs • Automation • Applications",
  },
];

export default function VisionArchitecture() {
  return (
    <section className="relative bg-[#030303] py-28 md:py-44">
      <div className="mx-auto max-w-[1300px] px-5 md:px-8">
        <div className="text-center">
          <span className="text-[8px] uppercase tracking-[0.35em] text-fuchsia-300/55">
            Vision Architecture
          </span>

          <h2 className="mx-auto mt-6 max-w-[900px] text-4xl font-medium tracking-[-0.05em] md:text-7xl">
            From camera to
            <span className="text-violet-300"> enterprise action.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[720px] text-[15px] leading-8 text-white/60">
            A production-ready visual AI architecture designed for real-time
            inference, scalable deployment and integration with enterprise
            systems.
          </p>
        </div>

        <div className="relative mx-auto mt-20 max-w-[900px]">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-violet-400/30 to-transparent" />

          <div className="space-y-4">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="relative z-10 mx-auto max-w-[720px] rounded-[22px] border border-white/[0.08] bg-[#09090c]/95 p-6 backdrop-blur-xl md:p-8"
              >
                <div className="flex items-center gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-300/20 bg-violet-400/[0.05] text-[8px] text-violet-200/60">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg text-white/90">{layer.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {layer.text}
                    </p>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-violet-300/50"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}