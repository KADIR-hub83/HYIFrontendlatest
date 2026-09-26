"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  Check,
  CircleDot,
  Cpu,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const candidates = [
  { x: "77%", y: "17%", score: "82", label: "S-018" },
  { x: "86%", y: "30%", score: "74", label: "S-104" },
  { x: "91%", y: "49%", score: "96", label: "OPTIMAL" },
  { x: "84%", y: "68%", score: "68", label: "S-227" },
  { x: "74%", y: "82%", score: "51", label: "S-391" },
];

const particles = [
  { top: "22%", duration: 4.5, delay: 0 },
  { top: "35%", duration: 5.2, delay: 0.8 },
  { top: "49%", duration: 4.1, delay: 1.2 },
  { top: "63%", duration: 5.7, delay: 0.4 },
  { top: "76%", duration: 4.8, delay: 1.6 },
];

export default function DecisionOrbit() {
  return (
    <div className="relative mx-auto mt-16 w-full max-w-[1380px]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[1050px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9cbed]/[0.055] blur-[160px]" />

      <div className="relative overflow-hidden rounded-[42px] border border-[#eee5ff]/10 bg-[#070708] shadow-[0_50px_150px_rgba(0,0,0,.8)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(circle at center,black,transparent 88%)",
          }}
        />

        <div className="relative z-20 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] px-6 py-5 md:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#eee5ff]/10 bg-[#eee5ff]/[0.035]">
              <BrainCircuit
                size={15}
                strokeWidth={1.2}
                className="text-[#eee5ff]/70"
              />
            </div>

            <div>
              <p className="font-mono text-[6px] tracking-[0.25em] text-[#eee5ff]/35">
                HYI DECISION INTELLIGENCE
              </p>

              <p className="mt-1 text-[10px] text-white/60">
                Multi-objective optimization environment
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-[6px] tracking-[0.17em] text-white/30">
            <motion.span
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-[#eee5ff]"
            />
            SOLVER RUNNING
          </div>
        </div>

        <div className="relative min-h-[650px] md:min-h-[720px]">
          {/* atmospheric spheres */}
          <div className="absolute left-[46%] top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#eee5ff]/[0.06]" />
          <div className="absolute left-[46%] top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#eee5ff]/[0.07]" />
          <div className="absolute left-[46%] top-1/2 h-[205px] w-[205px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#eee5ff]/[0.08]" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-[46%] top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#eee5ff]/10"
          >
            <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-[#f3edff] shadow-[0_0_25px_rgba(243,237,255,.9)]" />

            <span className="absolute bottom-[12%] right-[10%] h-1.5 w-1.5 rounded-full bg-[#d8cce7]/60" />
          </motion.div>

          {/* SVG universe */}
          <svg
            viewBox="0 0 1200 720"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <linearGradient id="softLine" x1="0" x2="1">
                <stop
                  offset="0%"
                  stopColor="rgba(238,229,255,0)"
                />
                <stop
                  offset="45%"
                  stopColor="rgba(238,229,255,.18)"
                />
                <stop
                  offset="100%"
                  stopColor="rgba(238,229,255,.04)"
                />
              </linearGradient>

              <linearGradient id="optimalLine" x1="0" x2="1">
                <stop
                  offset="0%"
                  stopColor="rgba(246,240,255,.1)"
                />
                <stop
                  offset="50%"
                  stopColor="rgba(246,240,255,.95)"
                />
                <stop
                  offset="100%"
                  stopColor="rgba(246,240,255,.35)"
                />
              </linearGradient>

              <radialGradient id="sphereGlow">
                <stop
                  offset="0%"
                  stopColor="rgba(238,229,255,.13)"
                />
                <stop
                  offset="100%"
                  stopColor="rgba(238,229,255,0)"
                />
              </radialGradient>
            </defs>

            <ellipse
              cx="550"
              cy="360"
              rx="330"
              ry="185"
              fill="url(#sphereGlow)"
            />

            {[
              "M 250 360 C 420 220 610 130 1050 120",
              "M 250 360 C 440 275 650 220 1080 220",
              "M 250 360 C 470 335 690 340 1100 350",
              "M 250 360 C 470 400 680 470 1080 500",
              "M 250 360 C 420 510 630 585 1030 610",
              "M 250 360 C 480 170 690 160 960 90",
              "M 250 360 C 430 570 670 630 920 660",
            ].map((path, index) => (
              <motion.path
                key={index}
                d={path}
                fill="none"
                stroke="url(#softLine)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.6,
                  delay: index * 0.08,
                }}
              />
            ))}

            {/* OPTIMAL ROUTE */}
            <motion.path
              d="M 250 360 C 430 345 670 335 1100 350"
              fill="none"
              stroke="url(#optimalLine)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 2.2,
                delay: 0.5,
              }}
            />

            {/* constraint surfaces */}
            <motion.path
              d="M 480 90 C 540 230 540 500 470 650"
              fill="none"
              stroke="rgba(238,229,255,.13)"
              strokeWidth="1"
              strokeDasharray="5 8"
              animate={{
                strokeDashoffset: [0, -40],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.path
              d="M 730 70 C 680 250 690 490 770 660"
              fill="none"
              stroke="rgba(238,229,255,.1)"
              strokeWidth="1"
              strokeDasharray="3 9"
              animate={{
                strokeDashoffset: [0, 40],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>

          {/* INPUT STATE */}
          <div className="absolute left-[8%] top-1/2 z-20 -translate-y-1/2">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(238,229,255,.04)",
                  "0 0 70px rgba(238,229,255,.17)",
                  "0 0 20px rgba(238,229,255,.04)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="flex h-[115px] w-[115px] items-center justify-center rounded-[32px] border border-[#eee5ff]/20 bg-[#111014]/90 backdrop-blur-xl"
            >
              <div className="text-center">
                <Cpu
                  size={23}
                  strokeWidth={1}
                  className="mx-auto text-[#eee5ff]"
                />

                <p className="mt-4 font-mono text-[5px] tracking-[0.2em] text-white/35">
                  CURRENT STATE
                </p>
              </div>
            </motion.div>
          </div>

          {/* central optimization intelligence */}
          <div className="absolute left-[46%] top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{
                y: [-6, 6, -6],
                rotate: [-1.5, 1.5, -1.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-[175px] w-[175px] items-center justify-center rounded-[48px] border border-[#f0e8ff]/25 bg-gradient-to-br from-[#eee5ff]/[0.12] to-[#9e91af]/[0.035] shadow-[0_0_90px_rgba(238,229,255,.08)] backdrop-blur-xl"
            >
              <div className="absolute inset-3 rounded-[38px] border border-white/[0.05]" />

              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-[#eee5ff]/25"
                >
                  <BrainCircuit
                    size={25}
                    strokeWidth={1}
                    className="text-[#f2ebff]"
                  />
                </motion.div>

                <p className="mt-5 font-mono text-[5px] tracking-[0.22em] text-[#eee5ff]/45">
                  OPTIMIZATION CORE
                </p>

                <div className="mt-2 flex items-center justify-center gap-2">
                  <Zap size={8} />
                  <span className="text-[7px] text-white/55">
                    8,491 solutions
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* moving decision particles */}
          {particles.map((particle, index) => (
            <motion.span
              key={index}
              animate={{
                left: ["18%", "88%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute z-30 h-1.5 w-1.5 rounded-full bg-[#f3edff] shadow-[0_0_18px_rgba(243,237,255,.9)]"
              style={{
                top: particle.top,
              }}
            />
          ))}

          {/* candidate solutions */}
          {candidates.map((candidate, index) => (
            <motion.div
              key={candidate.label}
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.8 + index * 0.1,
              }}
              className="absolute z-30"
              style={{
                left: candidate.x,
                top: candidate.y,
              }}
            >
              {candidate.label === "OPTIMAL" ? (
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.45, 0, 0.45],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute -inset-4 rounded-full border border-[#f2ebff]/35"
                  />

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f2ebff]/40 bg-[#e9dfff]/10 shadow-[0_0_40px_rgba(238,229,255,.25)]">
                    <Target
                      size={15}
                      className="text-[#f4eeff]"
                    />
                  </div>

                  <div className="absolute left-16 top-0 w-[120px]">
                    <p className="font-mono text-[5px] tracking-[0.17em] text-[#eee5ff]/45">
                      OPTIMAL ACTION
                    </p>

                    <p className="mt-2 text-xl font-light text-[#f5efff]">
                      {candidate.score}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full border border-[#eee5ff]/30 bg-[#eee5ff]/15" />

                  <div>
                    <p className="font-mono text-[5px] text-white/20">
                      {candidate.label}
                    </p>

                    <p className="mt-1 text-[9px] text-white/45">
                      {candidate.score}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {/* floating labels */}
          <div className="absolute bottom-[10%] left-[29%] hidden rounded-full border border-white/[0.07] bg-black/50 px-4 py-2 font-mono text-[5px] tracking-[0.16em] text-white/25 md:block">
            CONSTRAINT BOUNDARY
          </div>

          <div className="absolute left-[57%] top-[14%] hidden rounded-full border border-white/[0.07] bg-black/50 px-4 py-2 font-mono text-[5px] tracking-[0.16em] text-white/25 md:block">
            FEASIBLE REGION
          </div>
        </div>

        {/* metrics */}
        <div className="relative z-30 grid border-t border-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["8,491", "SOLUTIONS EVALUATED"],
            ["124", "CONSTRAINTS SATISFIED"],
            ["96.4", "OBJECTIVE SCORE"],
            ["14 ms", "OPTIMIZATION CYCLE"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className="border-b border-r border-white/[0.06] px-7 py-6 lg:border-b-0"
            >
              <div className="flex items-center justify-between">
                <p className="text-2xl font-light tracking-[-0.04em] text-[#eee8f5]">
                  {value}
                </p>

                {index === 2 ? (
                  <Check size={12} className="text-[#eee5ff]/45" />
                ) : (
                  <Activity size={11} className="text-white/20" />
                )}
              </div>

              <p className="mt-3 font-mono text-[5px] tracking-[0.18em] text-white/22">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 flex justify-between px-3 font-mono text-[5px] tracking-[0.15em] text-white/20">
        <div className="flex items-center gap-2">
          <CircleDot size={7} />
          STOCHASTIC OPTIMIZATION
        </div>

        <div className="flex items-center gap-2">
          MULTI-OBJECTIVE SOLVER
          <Sparkles size={7} />
        </div>
      </div>
    </div>
  );
}