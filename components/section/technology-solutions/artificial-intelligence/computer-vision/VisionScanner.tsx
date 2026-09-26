"use client";

import { motion, useReducedMotion } from "framer-motion";

const detections = [
  {
    label: "PERSON",
    confidence: "99.2%",
    className: "left-[12%] top-[16%] h-[54%] w-[25%]",
  },
  {
    label: "VEHICLE",
    confidence: "97.8%",
    className: "right-[9%] top-[36%] h-[31%] w-[34%]",
  },
  {
    label: "OBJECT",
    confidence: "96.4%",
    className: "bottom-[11%] left-[39%] h-[21%] w-[20%]",
  },
];

export default function VisionScanner() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[1100px]">
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.15] blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden rounded-[34px] border border-white/[0.10] bg-[#070709] shadow-[0_40px_120px_rgba(0,0,0,.8)]"
      >
        <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 md:px-7">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400/60" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
              <span className="h-2 w-2 rounded-full bg-green-400/60" />
            </div>

            <span className="text-[7px] uppercase tracking-[0.28em] text-white/40">
              HYI.AI / Vision Engine
            </span>
          </div>

          <div className="flex items-center gap-2 text-[7px] tracking-[0.22em] text-emerald-300/60">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            LIVE PERCEPTION
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_260px]">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#050507]">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(167,139,250,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(167,139,250,.08) 1px,transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />

            <div className="absolute left-[18%] top-[20%] h-[46%] w-[17%] rounded-t-[80px] rounded-b-[30px] bg-gradient-to-b from-violet-300/20 to-violet-900/5 blur-[1px]" />

            <div className="absolute right-[12%] top-[43%] h-[23%] w-[32%] skew-x-[-8deg] rounded-[20px] bg-gradient-to-br from-purple-300/15 to-purple-900/5" />

            <div className="absolute bottom-[12%] left-[42%] h-[17%] w-[17%] rounded-[18px] bg-fuchsia-300/[0.09]" />

            {detections.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5 + index * 0.3,
                  duration: 0.6,
                }}
                className={`absolute border border-violet-300/70 ${item.className}`}
              >
                <span className="absolute -top-[21px] left-[-1px] bg-violet-400 px-2 py-1 text-[6px] font-semibold tracking-[0.15em] text-black">
                  {item.label} {item.confidence}
                </span>

                <span className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-white" />
                <span className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-white" />
                <span className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-white" />
                <span className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-white" />
              </motion.div>
            ))}

            {!reduceMotion && (
              <motion.div
                className="absolute left-0 right-0 z-30 h-px bg-gradient-to-r from-transparent via-fuchsia-300 to-transparent shadow-[0_0_18px_rgba(232,121,249,.9)]"
                animate={{
                  top: ["5%", "95%", "5%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}

            <div className="absolute bottom-5 left-5 flex gap-2">
              {["RGB", "DEPTH", "OBJECT", "TRACK"].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-md border px-3 py-2 text-[6px] tracking-[0.2em] ${
                    index === 2
                      ? "border-violet-300/30 bg-violet-400/10 text-violet-200"
                      : "border-white/10 bg-black/30 text-white/40"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="absolute right-5 top-5 font-mono text-[7px] leading-5 text-white/40">
              FRAME 004829
              <br />
              1920 × 1080
              <br />
              60 FPS
            </div>
          </div>

          <div className="border-t border-white/[0.07] bg-[#09090c] p-6 lg:border-l lg:border-t-0">
            <div className="text-[7px] uppercase tracking-[0.25em] text-white/40">
              Scene Analysis
            </div>

            <div className="mt-8 space-y-7">
              {[
                ["Objects", "12"],
                ["Tracked", "09"],
                ["Confidence", "98.7%"],
                ["Latency", "14ms"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="border-b border-white/[0.06] pb-5"
                >
                  <div className="text-[7px] uppercase tracking-[0.2em] text-white/35">
                    {label}
                  </div>

                  <div className="mt-2 text-2xl font-medium text-white/90">
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.03] p-4">
              <div className="flex items-center gap-3 text-[7px] uppercase tracking-[0.18em] text-emerald-300/60">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Model healthy
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}