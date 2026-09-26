"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Database,
  RadioTower,
  ScanLine,
} from "lucide-react";

const signals = [
  {
    title: "Historical Data",
    description:
      "Discover recurring behavior, cycles and long-term patterns hidden across enterprise datasets.",
    icon: Database,
  },
  {
    title: "Live Signals",
    description:
      "Continuously interpret transactions, customer activity, operations and real-time business events.",
    icon: RadioTower,
  },
  {
    title: "Pattern Detection",
    description:
      "Machine learning models identify relationships and changes that traditional analysis can miss.",
    icon: ScanLine,
  },
  {
    title: "Future Probability",
    description:
      "Translate signals into forecasts, confidence ranges and decision-ready predictive intelligence.",
    icon: Activity,
  },
];

export default function FutureSignals() {
  return (
    <section className="relative border-y border-white/[0.06] bg-[#07070A] py-32 md:py-44">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <span className="text-[9px] uppercase tracking-[0.42em] text-violet-300/60">
              01 / Signal Intelligence
            </span>

            <h2 className="mt-7 max-w-[800px] text-5xl font-medium leading-[0.98] tracking-[-0.055em] md:text-7xl">
              The future leaves
              <span className="block text-[#BDA6DF]/65">
                signals everywhere.
              </span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-[550px] text-base leading-8 text-[#D7D0E1]/60">
              Predictive intelligence connects historical patterns with
              real-time signals to identify what may happen next and where
              organizations should focus their attention.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[32px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-4">
          {signals.map((signal, index) => {
            const Icon = signal.icon;

            return (
              <motion.article
                key={signal.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -6 }}
                className="group relative min-h-[390px] overflow-hidden bg-[#08080C] p-8"
              >
                <div className="absolute right-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-violet-600/[0.06] blur-[80px] transition group-hover:bg-violet-500/[0.15]" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-300/15 bg-violet-500/[0.07]">
                      <Icon size={20} className="text-violet-300" />
                    </div>

                    <span className="text-[9px] text-[#D9D0E5]/25">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-medium text-[#F5F0FC]">
                      {signal.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-[#CEC7D8]/55">
                      {signal.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}