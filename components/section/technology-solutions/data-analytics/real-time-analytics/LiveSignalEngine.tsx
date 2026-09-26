"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Cloud,
  Cpu,
  Database,
  Radio,
  Server,
  Zap,
} from "lucide-react";

const lanes = [
  { top: "18%", delay: 0 },
  { top: "31%", delay: 0.8 },
  { top: "44%", delay: 1.5 },
  { top: "57%", delay: 0.3 },
  { top: "70%", delay: 1.1 },
  { top: "83%", delay: 1.8 },
];

const sources = [
  {
    Icon: Cloud,
    label: "CLOUD",
    position: "top-[15%]",
  },
  {
    Icon: Server,
    label: "APPS",
    position: "top-[43%]",
  },
  {
    Icon: Database,
    label: "DATA",
    position: "top-[71%]",
  },
];

export default function LiveSignalEngine() {
  return (
    <div className="relative mx-auto mt-16 max-w-[1400px]">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ded3eb]/[0.05] blur-[130px]" />

      <div className="relative overflow-hidden rounded-[42px] border border-white/[0.08] bg-[#070708] shadow-[0_50px_160px_rgba(0,0,0,.75)]">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] px-7 py-5">
          <div className="flex items-center gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025]">
              <Radio
                size={14}
                strokeWidth={1}
                className="text-[#eee5f8]/65"
              />
            </div>

            <div>
              <p className="font-mono text-[6px] tracking-[0.23em] text-[#e8def3]/35">
                HYI LIVE SIGNAL NETWORK
              </p>

              <p className="mt-1 text-[9px] text-white/45">
                Continuous event processing
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-[6px] tracking-[0.16em] text-white/30">
            <motion.span
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-[#eee7f7]"
            />
            LIVE
          </div>
        </div>

        <div className="relative h-[650px] overflow-hidden md:h-[720px]">
          <div
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(circle at center,black,transparent 90%)",
            }}
          />

          {lanes.map((lane, index) => (
            <div
              key={index}
              className="absolute left-[11%] right-[11%] h-px bg-gradient-to-r from-transparent via-[#e8def3]/15 to-transparent"
              style={{ top: lane.top }}
            >
              <motion.span
                animate={{
                  left: ["0%", "100%"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 4 + index * 0.3,
                  delay: lane.delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-[#f0e9f8] shadow-[0_0_22px_rgba(240,233,248,.9)]"
              />
            </div>
          ))}

          {sources.map(({ Icon, label, position }, index) => (
            <motion.div
              key={label}
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
              }}
              className={`absolute left-[6%] hidden ${position} md:block`}
            >
              <div className="flex h-[95px] w-[105px] items-center justify-center rounded-[25px] border border-white/[0.09] bg-[#09090a]/90 backdrop-blur-xl">
                <div className="text-center">
                  <Icon
                    size={17}
                    strokeWidth={1}
                    className="mx-auto text-[#e8def3]/60"
                  />

                  <p className="mt-4 font-mono text-[5px] tracking-[0.2em] text-white/30">
                    {label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {[420, 310, 210].map((size, index) => (
              <motion.div
                key={size}
                animate={{
                  rotate: index % 2 ? -360 : 360,
                }}
                transition={{
                  duration: 25 + index * 9,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 rounded-full border"
                style={{
                  width: size,
                  height: size,
                  marginLeft: -size / 2,
                  marginTop: -size / 2,
                  borderColor: "rgba(238,229,248,.08)",
                }}
              >
                <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 rounded-full bg-[#eee7f7] shadow-[0_0_15px_#eee7f7]" />
              </motion.div>
            ))}

            <motion.div
              animate={{
                y: [-7, 7, -7],
                boxShadow: [
                  "0 0 30px rgba(238,229,248,.04)",
                  "0 0 100px rgba(238,229,248,.14)",
                  "0 0 30px rgba(238,229,248,.04)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative z-20 flex h-[175px] w-[175px] items-center justify-center rounded-[48px] border border-[#eee6f7]/25 bg-gradient-to-br from-[#eee6f7]/[0.12] to-[#81758d]/[0.03] backdrop-blur-xl"
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-[#eee6f7]/25"
                >
                  <Cpu
                    size={25}
                    strokeWidth={1}
                    className="text-[#f2ebfa]"
                  />
                </motion.div>

                <p className="mt-5 font-mono text-[5px] tracking-[0.2em] text-[#eee6f7]/40">
                  STREAM CORE
                </p>

                <div className="mt-2 flex items-center justify-center gap-2">
                  <Zap size={8} />
                  <span className="text-[7px] text-white/50">
                    Processing
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute right-[5%] top-1/2 hidden -translate-y-1/2 md:block">
            <div className="space-y-3">
              {[
                ["ANOMALY", "Detected"],
                ["SIGNAL", "Qualified"],
                ["ACTION", "Triggered"],
              ].map(([label, status], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="w-[145px] rounded-[20px] border border-white/[0.08] bg-[#09090a]/90 p-4 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between">
                    <Activity
                      size={10}
                      className="text-[#e8def3]/45"
                    />

                    <motion.span
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className="h-1 w-1 rounded-full bg-[#eee7f7]"
                    />
                  </div>

                  <p className="mt-4 font-mono text-[5px] tracking-[0.16em] text-white/25">
                    {label}
                  </p>

                  <p className="mt-2 text-[8px] text-white/55">
                    {status}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid border-t border-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["84.2K", "EVENTS / SEC"],
            ["18 ms", "PROCESSING"],
            ["1.8M", "ACTIVE SIGNALS"],
            ["24 / 7", "CONTINUOUS"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-b border-r border-white/[0.06] px-7 py-6 lg:border-b-0"
            >
              <p className="text-2xl font-light tracking-[-0.04em] text-[#eee8f5]">
                {value}
              </p>

              <p className="mt-3 font-mono text-[5px] tracking-[0.18em] text-white/22">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}