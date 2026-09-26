"use client";

import { motion } from "framer-motion";

const row1 = [
  "Regression",
  "Classification",
  "Clustering",
  "Forecasting",
  "Ranking",
  "Recommendation",
];

const row2 = [
  "Computer Vision",
  "NLP",
  "Deep Learning",
  "Time Series",
  "Anomaly Detection",
  "Optimization",
];

function Row({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max gap-4"
      >
        {duplicated.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="min-w-[230px] rounded-[24px] border border-purple-950/[0.08] bg-white px-6 py-7 shadow-[0_15px_50px_rgba(55,34,100,.05)]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eee8ff]">
                <span className="h-2 w-2 rounded-full bg-purple-600" />
              </div>

              <span className="text-sm font-medium text-[#18152c]">{item}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ModelEcosystem() {
  return (
    <section className="overflow-hidden bg-[#faf9ff] py-24 text-[#17152a] md:py-32">
      <div className="mx-auto max-w-[1380px] px-5 text-center md:px-10 lg:px-16">
        <p className="text-[9px] uppercase tracking-[3px] text-purple-700/40">
          Model Ecosystem
        </p>

        <h2 className="mx-auto mt-5 max-w-[850px] text-4xl font-semibold tracking-[-2px] md:text-6xl">
          The right learning system
          <span className="block text-purple-700">for every problem.</span>
        </h2>
      </div>

      <div className="mt-16 space-y-4">
        <Row items={row1} />
        <Row items={row2} reverse />
      </div>
    </section>
  );
}