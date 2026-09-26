"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Crosshair,
  Radar,
} from "lucide-react";

const points = [
  { left: "26%", top: "34%", critical: false },
  { left: "63%", top: "28%", critical: false },
  { left: "72%", top: "62%", critical: true },
  { left: "38%", top: "68%", critical: false },
  { left: "54%", top: "48%", critical: false },
];

export default function AnomalyRadar() {
  return (
    <section className="bg-[#050505] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#070708]">
          <div className="grid lg:grid-cols-[.65fr_1.35fr]">
            <div className="border-b border-white/[0.07] p-8 lg:border-b-0 lg:border-r">
              <p className="font-mono text-[7px] tracking-[0.28em] text-[#e8def3]/40">
                ANOMALY INTELLIGENCE
              </p>

              <h2 className="mt-6 text-4xl font-medium tracking-[-0.05em]">
                Detect the signal
                <span className="block text-white/35">
                  inside the noise.
                </span>
              </h2>

              <p className="mt-7 max-w-[420px] text-[11px] leading-7 text-white/45">
                Continuous monitoring helps surface deviations, spikes and
                emerging operational conditions as incoming data changes.
              </p>

              <div className="mt-14 space-y-3">
                {[
                  ["Signals monitored", "1.8M"],
                  ["Anomalies detected", "14"],
                  ["High priority", "03"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-white/[0.06] py-4"
                  >
                    <span className="text-[9px] text-white/35">
                      {label}
                    </span>

                    <span className="text-[11px] text-white/70">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[650px] overflow-hidden">
              <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2">
                {[100, 78, 55, 32].map((size) => (
                  <div
                    key={size}
                    className="absolute left-1/2 top-1/2 rounded-full border border-[#e8def3]/10"
                    style={{
                      width: `${size}%`,
                      height: `${size}%`,
                      transform:
                        "translate(-50%, -50%)",
                    }}
                  />
                ))}

                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#e8def3]/[0.07]" />
                <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#e8def3]/[0.07]" />

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(232,222,243,.16) 350deg, rgba(232,222,243,.45) 360deg)",
                  }}
                />

                <div className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8def3]/20 bg-[#0b0a0c]">
                  <Radar
                    size={22}
                    strokeWidth={1}
                    className="text-[#eee7f7]/70"
                  />
                </div>

                {points.map((point, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: point.critical
                        ? [1, 1.8, 1]
                        : [1, 1.25, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: point.critical
                        ? 1.2
                        : 2.4,
                      repeat: Infinity,
                      delay: index * 0.25,
                    }}
                    className="absolute"
                    style={{
                      left: point.left,
                      top: point.top,
                    }}
                  >
                    <span
                      className={`block rounded-full ${
                        point.critical
                          ? "h-3 w-3 bg-[#f2ebfa] shadow-[0_0_30px_rgba(242,235,250,.9)]"
                          : "h-2 w-2 bg-[#cfc4da]/70"
                      }`}
                    />

                    {point.critical && (
                      <div className="absolute left-6 top-[-18px] w-[120px] rounded-xl border border-white/[0.08] bg-black/80 p-3 backdrop-blur-xl">
                        <div className="flex items-center gap-2">
                          <AlertTriangle size={8} />
                          <span className="font-mono text-[5px] tracking-[0.14em] text-white/40">
                            ANOMALY
                          </span>
                        </div>

                        <p className="mt-2 text-[7px] text-white/55">
                          threshold deviation
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="absolute bottom-7 left-7 flex items-center gap-2 font-mono text-[5px] tracking-[0.16em] text-white/20">
                <Crosshair size={8} />
                CONTINUOUS SIGNAL SCANNING
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}