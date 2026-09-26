"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  CircleDot,
  Sparkles,
} from "lucide-react";

const futures = [
  {
    name: "Growth",
    probability: "68%",
    impact: "+24.8%",
    delay: 0,
  },
  {
    name: "Baseline",
    probability: "21%",
    impact: "+8.2%",
    delay: 0.35,
  },
  {
    name: "Risk",
    probability: "11%",
    impact: "-4.6%",
    delay: 0.7,
  },
];

export default function DecisionMatrix() {
  return (
    <div className="relative min-h-[720px] overflow-hidden rounded-[40px] border border-[#eee5ff]/10 bg-[#0a0a0c] p-7 md:p-10">
      {/* ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-[48%] h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9ddff]/[0.045] blur-[120px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
          backgroundSize: "38px 38px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 22%, black 85%, transparent)",
        }}
      />

      {/* heading */}
      <div className="relative z-20 flex items-start justify-between">
        <div>
          <p className="font-mono text-[7px] uppercase tracking-[0.32em] text-[#e9ddff]/45">
            MODEL 05
          </p>

          <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em]">
            Future Probability
          </h3>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eee5ff]/10 bg-[#eee5ff]/[0.025]">
          <BrainCircuit
            size={17}
            strokeWidth={1.2}
            className="text-[#eee5ff]/65"
          />
        </div>
      </div>

      <p className="relative z-20 mt-4 max-w-[510px] text-sm leading-7 text-white/55">
        Continuously evaluate possible future outcomes and calculate which
        trajectory is becoming most likely as new signals arrive.
      </p>

      {/* FUTURE ENGINE */}
      <div className="relative z-10 mt-10 h-[390px] overflow-hidden rounded-[28px] border border-[#eee5ff]/[0.08] bg-[#070708]">
        {/* graph */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* center vertical NOW line */}
        <div className="absolute bottom-8 left-[18%] top-8 border-l border-dashed border-[#eee5ff]/15">
          <div className="absolute -left-[17px] -top-1 rounded-full border border-[#eee5ff]/10 bg-[#0a0a0c] px-3 py-1 font-mono text-[5px] tracking-[0.18em] text-white/25">
            NOW
          </div>
        </div>

        {/* baseline */}
        <div className="absolute bottom-[17%] left-[10%] right-[6%] h-px bg-gradient-to-r from-transparent via-[#eee5ff]/10 to-transparent" />

        {/* source node */}
        <div className="absolute left-[18%] top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 15px rgba(238,229,255,.1)",
                "0 0 50px rgba(238,229,255,.35)",
                "0 0 15px rgba(238,229,255,.1)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="flex h-[74px] w-[74px] items-center justify-center rounded-full border border-[#eee5ff]/25 bg-[#15131a]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#eee5ff]/[0.05]">
              <Sparkles
                size={16}
                className="text-[#f2ebff]"
              />
            </div>
          </motion.div>

          <p className="mt-4 text-center font-mono text-[5px] tracking-[0.18em] text-white/25">
            CURRENT STATE
          </p>
        </div>

        {/* SVG prediction paths */}
        <svg
          viewBox="0 0 1000 390"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          {/* growth */}
          <motion.path
            d="M 180 195 C 330 190, 430 115, 600 90 C 730 70, 830 60, 920 50"
            fill="none"
            stroke="rgba(242,235,255,.72)"
            strokeWidth="1.3"
            initial={{
              pathLength: 0,
            }}
            whileInView={{
              pathLength: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
            }}
          />

          {/* baseline */}
          <motion.path
            d="M 180 195 C 350 195, 480 185, 620 170 C 750 155, 840 150, 920 145"
            fill="none"
            stroke="rgba(218,207,232,.42)"
            strokeWidth="1"
            initial={{
              pathLength: 0,
            }}
            whileInView={{
              pathLength: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              delay: 0.2,
            }}
          />

          {/* risk */}
          <motion.path
            d="M 180 195 C 330 200, 460 245, 610 275 C 750 305, 835 315, 920 325"
            fill="none"
            stroke="rgba(189,176,205,.27)"
            strokeWidth="1"
            strokeDasharray="5 7"
            initial={{
              pathLength: 0,
            }}
            whileInView={{
              pathLength: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              delay: 0.4,
            }}
          />
        </svg>

        {/* moving particles - growth */}
        <motion.div
          animate={{
            left: ["18%", "91%"],
            top: ["50%", "13%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute z-30 h-2 w-2 rounded-full bg-[#f5efff] shadow-[0_0_20px_#f5efff]"
        />

        {/* baseline particle */}
        <motion.div
          animate={{
            left: ["18%", "91%"],
            top: ["50%", "37%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
          className="absolute z-30 h-1.5 w-1.5 rounded-full bg-[#ded4e9] shadow-[0_0_15px_rgba(222,212,233,.8)]"
        />

        {/* risk particle */}
        <motion.div
          animate={{
            left: ["18%", "91%"],
            top: ["50%", "82%"],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
          className="absolute z-30 h-1.5 w-1.5 rounded-full bg-[#b9afc4]/70"
        />

        {/* endpoint 1 */}
        <div className="absolute right-[5%] top-[8%] z-20">
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="h-3 w-3 rounded-full border border-[#f3edff]/50 bg-[#f3edff] shadow-[0_0_24px_rgba(243,237,255,.8)]"
          />

          <div className="absolute right-5 top-[-14px] w-[90px] text-right">
            <p className="text-sm text-[#f2ecfa]">
              68%
            </p>

            <p className="mt-1 font-mono text-[5px] tracking-[0.15em] text-white/25">
              GROWTH
            </p>
          </div>
        </div>

        {/* endpoint 2 */}
        <div className="absolute right-[5%] top-[35%] z-20">
          <span className="block h-2.5 w-2.5 rounded-full bg-[#d8cde4]/70 shadow-[0_0_16px_rgba(216,205,228,.4)]" />

          <div className="absolute right-5 top-[-13px] w-[90px] text-right">
            <p className="text-sm text-white/65">
              21%
            </p>

            <p className="mt-1 font-mono text-[5px] tracking-[0.15em] text-white/20">
              BASELINE
            </p>
          </div>
        </div>

        {/* endpoint 3 */}
        <div className="absolute bottom-[14%] right-[5%] z-20">
          <span className="block h-2.5 w-2.5 rounded-full border border-[#b9afc4]/40 bg-[#b9afc4]/30" />

          <div className="absolute right-5 top-[-13px] w-[90px] text-right">
            <p className="text-sm text-white/45">
              11%
            </p>

            <p className="mt-1 font-mono text-[5px] tracking-[0.15em] text-white/20">
              RISK
            </p>
          </div>
        </div>

        {/* bottom future */}
        <div className="absolute bottom-4 right-6 flex items-center gap-2 font-mono text-[5px] tracking-[0.18em] text-white/20">
          FUTURE HORIZON
          <ArrowUpRight size={8} />
        </div>
      </div>

      {/* probabilities */}
      <div className="relative z-20 mt-4 grid grid-cols-3 gap-2">
        {futures.map((future, index) => (
          <motion.div
            key={future.name}
            animate={{
              borderColor:
                index === 0
                  ? [
                      "rgba(238,229,255,.08)",
                      "rgba(238,229,255,.24)",
                      "rgba(238,229,255,.08)",
                    ]
                  : "rgba(255,255,255,.06)",
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: future.delay,
            }}
            className="rounded-[18px] border border-white/[0.06] bg-black/20 p-4"
          >
            <div className="flex items-center gap-2">
              <CircleDot
                size={8}
                className={
                  index === 0
                    ? "text-[#eee5ff]"
                    : "text-white/25"
                }
              />

              <p className="font-mono text-[5px] uppercase tracking-[0.15em] text-white/25">
                {future.name}
              </p>
            </div>

            <div className="mt-4 flex items-end justify-between gap-2">
              <p className="text-xl font-light">
                {future.probability}
              </p>

              <p className="text-[10px] text-white/35">
                {future.impact}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* footer */}
      <div className="relative z-20 mt-5 flex items-center gap-2 font-mono text-[6px] tracking-[0.18em] text-white/25">
        <Activity size={10} />

        18.2M SIGNALS ANALYZED

        <div className="ml-auto flex items-center gap-2 text-[#eee5ff]/35">
          <motion.span
            animate={{
              opacity: [0.25, 1, 0.25],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
            }}
            className="h-1.5 w-1.5 rounded-full bg-[#eee5ff]"
          />

          RECALCULATING
        </div>
      </div>
    </div>
  );
}