"use client";

import { motion } from "framer-motion";

const scenarios = [
  {
    name: "Conservative",
    score: "72",
    cost: "$1.84M",
    risk: "08%",
    service: "96.2%",
  },
  {
    name: "Balanced",
    score: "94",
    cost: "$2.12M",
    risk: "11%",
    service: "98.7%",
  },
  {
    name: "Aggressive",
    score: "81",
    cost: "$2.38M",
    risk: "24%",
    service: "99.1%",
  },
];

export default function ScenarioExplorer() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="max-w-[750px]">
          <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-[#e9dfff]/40">
            Scenario Intelligence
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] md:text-6xl">
            Test decisions before
            <span className="text-white/35"> making them.</span>
          </h2>

          <p className="mt-7 max-w-[600px] text-[12px] leading-7 text-white/50">
            Scenario analysis lets teams compare alternatives under different
            assumptions instead of relying on a single forecast.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {scenarios.map((scenario, index) => (
            <div
              key={scenario.name}
              className={`relative overflow-hidden rounded-[30px] border p-7 ${
                index === 1
                  ? "border-[#e6daf3]/20 bg-[#e6daf3]/[0.045]"
                  : "border-white/[0.07] bg-[#070707]"
              }`}
            >
              <div className="flex justify-between">
                <p className="font-mono text-[6px] tracking-[0.2em] text-white/30">
                  SCENARIO 0{index + 1}
                </p>

                {index === 1 && (
                  <span className="text-[6px] tracking-[0.15em] text-[#e7dcf4]/60">
                    RECOMMENDED
                  </span>
                )}
              </div>

              <h3 className="mt-12 text-2xl font-medium">
                {scenario.name}
              </h3>

              <div className="mt-12">
                <p className="text-[9px] text-white/30">
                  Decision score
                </p>

                <p className="mt-2 text-6xl font-light tracking-[-0.06em]">
                  {scenario.score}
                </p>

                <div className="mt-5 h-px bg-white/[0.07]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${scenario.score}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="h-full bg-[#e7ddf2]/65"
                  />
                </div>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-2">
                {[
                  ["COST", scenario.cost],
                  ["RISK", scenario.risk],
                  ["SERVICE", scenario.service],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="font-mono text-[5px] tracking-[0.14em] text-white/20">
                      {label}
                    </p>

                    <p className="mt-2 text-[11px] text-white/65">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}