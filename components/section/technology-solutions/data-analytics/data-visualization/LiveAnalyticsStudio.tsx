"use client";

import { motion } from "framer-motion";
import { Activity, CircleDot, Eye } from "lucide-react";

const stream = [
  "Customer activity synchronized",
  "Revenue dataset refreshed",
  "New conversion signal detected",
  "Regional dashboard updated",
  "Forecast visualization recalculated",
];

export default function LiveAnalyticsStudio() {
  return (
    <section className="bg-[#050505] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="text-center">
          <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            Live analytics studio
          </span>

          <h2 className="mx-auto mt-7 max-w-[1050px] text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Visualization that moves
            <span className="text-white/55"> with your business.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-[720px] text-[15px] leading-8 text-white/65">
            Monitor changing metrics, streaming events and business signals
            through responsive visual systems built for real-time operations.
          </p>
        </div>

        <div className="mt-20 overflow-hidden rounded-[40px] border border-white/[0.09] bg-[#080808]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-7 py-6">
            <div className="flex items-center gap-3">
              <Eye size={14} className="text-violet-200/70" />

              <span className="text-[8px] tracking-[0.23em] text-white/35">
                VISUALIZATION CONTROL ROOM
              </span>
            </div>

            <div className="flex items-center gap-2 text-[7px] text-emerald-300/60">
              <CircleDot size={9} />
              STREAMING
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.4fr_.6fr]">
            <div className="border-b border-white/[0.07] p-7 md:p-10 lg:border-b-0 lg:border-r">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Active Users", "18,428", "+12.8%"],
                  ["Events / min", "42,891", "+21.4%"],
                  ["Conversion", "31.82%", "+3.6%"],
                  ["Data Health", "99.94%", "Healthy"],
                ].map(([label, value, status], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-[24px] border border-white/[0.07] bg-white/[0.015] p-6"
                  >
                    <span className="text-[8px] uppercase tracking-[0.16em] text-white/35">
                      {label}
                    </span>

                    <div className="mt-7 text-3xl font-light">{value}</div>

                    <div className="mt-3 text-[8px] text-emerald-300/60">
                      {status}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 rounded-[24px] border border-white/[0.07] bg-white/[0.015] p-6">
                <span className="text-[8px] tracking-[0.2em] text-white/35">
                  EVENT VELOCITY
                </span>

                <div className="mt-8 flex h-[160px] items-end gap-1.5">
                  {Array.from({ length: 32 }).map((_, index) => {
                    const base = 28 + ((index * 19 + 11) % 65);

                    return (
                      <motion.div
                        key={index}
                        animate={{
                          height: [
                            `${base}%`,
                            `${Math.min(100, base + 18)}%`,
                            `${base}%`,
                          ],
                        }}
                        transition={{
                          duration: 2 + (index % 5) * 0.35,
                          repeat: Infinity,
                        }}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-800/20 to-violet-200/65"
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="p-7 md:p-9">
              <div className="flex items-center gap-3">
                <Activity size={14} className="text-violet-200/65" />
                <span className="text-[8px] tracking-[0.2em] text-white/35">
                  LIVE FEED
                </span>
              </div>

              <div className="mt-8 overflow-hidden">
                <motion.div
                  animate={{ y: [0, -86, -172, 0] }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="space-y-3"
                >
                  {[...stream, ...stream].map((item, index) => (
                    <div
                      key={index}
                      className="flex min-h-[74px] items-center gap-4 rounded-[18px] border border-white/[0.07] bg-white/[0.015] px-5"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />

                      <div>
                        <div className="text-[10px] text-white/60">{item}</div>
                        <div className="mt-2 text-[7px] tracking-[0.15em] text-white/25">
                          JUST NOW
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}