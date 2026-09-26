"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Gauge,
  Radio,
  Zap,
} from "lucide-react";

const charts = [
  {
    Icon: Activity,
    value: "84.2K",
    label: "Events / second",
    bars: [35, 46, 40, 62, 55, 74, 68, 83, 76, 91, 80, 88],
  },
  {
    Icon: Gauge,
    value: "18 ms",
    label: "Processing latency",
    bars: [80, 72, 65, 59, 52, 46, 40, 35, 31, 28, 24, 20],
  },
  {
    Icon: Radio,
    value: "1.8M",
    label: "Signals monitored",
    bars: [25, 29, 34, 38, 44, 51, 57, 63, 70, 76, 84, 92],
  },
  {
    Icon: Zap,
    value: "326",
    label: "Actions triggered",
    bars: [20, 42, 29, 56, 35, 67, 44, 73, 53, 82, 62, 89],
  },
];

export default function LiveMetrics() {
  return (
    <section className="bg-[#050505] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-[#e8def3]/40">
          Live Operational View
        </p>

        <h2 className="mt-5 max-w-[800px] text-4xl font-medium tracking-[-0.05em] md:text-6xl">
          See the system
          <span className="text-white/35"> as it changes.</span>
        </h2>

        <div className="mt-16 grid gap-3 md:grid-cols-2">
          {charts.map(({ Icon, value, label, bars }, cardIndex) => (
            <div
              key={label}
              className="min-h-[380px] rounded-[30px] border border-white/[0.07] bg-[#070708] p-7"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-4xl font-light tracking-[-0.05em]">
                    {value}
                  </p>

                  <p className="mt-3 text-[9px] text-white/35">
                    {label}
                  </p>
                </div>

                <Icon
                  size={17}
                  strokeWidth={1}
                  className="text-[#e8def3]/45"
                />
              </div>

              <div className="mt-16 flex h-[170px] items-end gap-2">
                {bars.map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    whileInView={{
                      height: `${height}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay:
                        cardIndex * 0.05 +
                        index * 0.035,
                    }}
                    className="relative flex-1 rounded-t-sm bg-gradient-to-t from-[#8f829c]/10 to-[#e8def3]/55"
                  >
                    <motion.span
                      animate={{
                        opacity: [0.2, 0.8, 0.2],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.1,
                      }}
                      className="absolute left-0 right-0 top-0 h-px bg-[#f0e8f8]"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 flex justify-between border-t border-white/[0.06] pt-4 font-mono text-[5px] tracking-[0.15em] text-white/20">
                <span>-60 SEC</span>
                <span>LIVE</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}