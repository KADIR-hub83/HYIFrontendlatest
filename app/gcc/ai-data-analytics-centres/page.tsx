"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

/* =========================================================
   DATA
========================================================= */

const capabilities = [
  {
    no: "01",
    tag: "AI",
    title: "Artificial Intelligence",
    description:
      "Design and operationalize AI capabilities that transform enterprise data into intelligent decisions, automation and measurable business outcomes.",
  },
  {
    no: "02",
    tag: "DATA",
    title: "Data Engineering",
    description:
      "Build scalable data foundations, pipelines and platforms that connect information across the enterprise and prepare it for AI.",
  },
  {
    no: "03",
    tag: "ANALYTICS",
    title: "Advanced Analytics",
    description:
      "Turn complex operational and customer data into actionable intelligence through advanced analytical models and decision systems.",
  },
  {
    no: "04",
    tag: "GEN AI",
    title: "Generative AI",
    description:
      "Create enterprise-grade generative AI experiences for knowledge discovery, productivity, customer engagement and intelligent workflows.",
  },
  {
    no: "05",
    tag: "ML",
    title: "Machine Learning",
    description:
      "Develop predictive and adaptive machine learning systems that continuously improve decisions, forecasting and operational performance.",
  },
  {
    no: "06",
    tag: "GOVERNANCE",
    title: "AI Governance",
    description:
      "Establish responsible AI frameworks covering security, quality, monitoring, governance and enterprise-wide model management.",
  },
];

const intelligenceLayers = [
  {
    number: "01",
    title: "Connect",
    description: "Unify enterprise data across systems, platforms and operations.",
  },
  {
    number: "02",
    title: "Understand",
    description: "Transform raw information into governed and usable intelligence.",
  },
  {
    number: "03",
    title: "Predict",
    description: "Apply AI and machine learning to identify patterns and outcomes.",
  },
  {
    number: "04",
    title: "Act",
    description: "Embed intelligence into automated enterprise decisions.",
  },
];

/* =========================================================
   PARTICLES
========================================================= */

const particles = Array.from({ length: 32 }, (_, index) => ({
  id: index,
  left: `${7 + ((index * 29) % 86)}%`,
  top: `${8 + ((index * 43) % 82)}%`,
  delay: `${(index % 9) * 0.45}s`,
  duration: `${5 + (index % 7)}s`,
}));

/* =========================================================
   AI INTELLIGENCE MODEL
========================================================= */

function AIIntelligenceCore() {
  const modelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!modelRef.current) return;

      const x = (event.clientX / window.innerWidth - 0.5) * 7;
      const y = (event.clientY / window.innerHeight - 0.5) * -5;

      modelRef.current.style.transform = `
        perspective(1300px)
        rotateX(${y}deg)
        rotateY(${x}deg)
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative mx-auto h-[540px] w-full max-w-[1150px] md:h-[690px]">
      {/* huge atmospheric glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/[0.14] blur-[145px]" />

      <div className="pointer-events-none absolute left-1/2 top-[8%] h-[82%] w-[140px] -translate-x-1/2 bg-gradient-to-b from-transparent via-purple-500/[0.10] to-transparent blur-[40px]" />

      {/* particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="ai-particle absolute h-[2px] w-[2px] rounded-full bg-purple-200"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* label */}
      <div className="absolute left-1/2 top-[3%] z-40 -translate-x-1/2">
        <div className="flex items-center gap-3 whitespace-nowrap text-[8px] uppercase tracking-[3px] text-purple-200/40 md:text-[9px]">
          <span className="h-1 w-1 rounded-full bg-purple-400" />
          Enterprise Intelligence Network
          <span className="h-1 w-1 rounded-full bg-purple-400" />
        </div>
      </div>

      <div
        ref={modelRef}
        className="absolute inset-0 transition-transform duration-700 ease-out [transform-style:preserve-3d]"
      >
        {/* =====================================================
            ORBITAL MODEL
        ====================================================== */}

        <div className="absolute left-1/2 top-[51%] h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 md:h-[540px] md:w-[540px]">
          {/* outer rotating ring */}
          <div className="ai-ring-slow absolute inset-0 rounded-full border border-dashed border-purple-300/[0.13]">
            <span className="absolute left-1/2 top-[-5px] h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-purple-200 shadow-[0_0_20px_6px_rgba(192,132,252,.55)]" />
          </div>

          {/* ring 2 */}
          <div className="ai-ring-reverse absolute inset-[8%] rounded-full border border-purple-400/[0.13]">
            <span className="absolute bottom-[10%] right-[7%] h-[7px] w-[7px] rounded-full bg-fuchsia-300 shadow-[0_0_16px_5px_rgba(216,180,254,.45)]" />
          </div>

          {/* ring 3 */}
          <div className="ai-ring-medium absolute inset-[18%] rounded-full border border-dashed border-purple-300/[0.16]">
            <span className="absolute left-[5%] top-[48%] h-[7px] w-[7px] rounded-full bg-purple-200 shadow-[0_0_18px_5px_rgba(192,132,252,.5)]" />
          </div>

          {/* horizontal 3D orbit */}
          <div className="ai-horizontal-orbit absolute left-1/2 top-1/2 h-[130px] w-[125%] rounded-[50%] border border-purple-400/[0.17]" />

          <div className="ai-horizontal-orbit-two absolute left-1/2 top-1/2 h-[190px] w-[145%] rounded-[50%] border border-purple-400/[0.07]" />

          {/* vertical orbit */}
          <div className="absolute left-1/2 top-1/2 h-[100%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-purple-300/[0.12]" />

          <div className="absolute left-1/2 top-1/2 h-[100%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-purple-300/[0.07]" />

          {/* radar sweep */}
          <div className="ai-radar absolute left-1/2 top-1/2 h-[50%] w-[50%] origin-bottom-left rounded-tr-full bg-gradient-to-tr from-transparent via-transparent to-purple-300/[0.10]" />

          {/* =====================================================
              NEURAL CONNECTIONS
          ====================================================== */}

          <svg
            viewBox="0 0 540 540"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <defs>
              <linearGradient
                id="aiLine"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.08" />
                <stop offset="50%" stopColor="#e9d5ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.08" />
              </linearGradient>

              <filter id="aiGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <path
              className="data-path"
              d="M92 270 Q170 90 270 270"
              fill="none"
              stroke="url(#aiLine)"
              strokeWidth="1.3"
              strokeDasharray="5 8"
            />

            <path
              className="data-path data-path-two"
              d="M270 270 Q370 80 448 270"
              fill="none"
              stroke="url(#aiLine)"
              strokeWidth="1.3"
              strokeDasharray="5 8"
            />

            <path
              className="data-path data-path-three"
              d="M92 270 Q180 450 270 270"
              fill="none"
              stroke="url(#aiLine)"
              strokeWidth="1.3"
              strokeDasharray="5 8"
            />

            <path
              className="data-path data-path-four"
              d="M270 270 Q370 455 448 270"
              fill="none"
              stroke="url(#aiLine)"
              strokeWidth="1.3"
              strokeDasharray="5 8"
            />

            <path
              className="data-path data-path-five"
              d="M150 145 Q270 230 390 145"
              fill="none"
              stroke="url(#aiLine)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />

            <path
              className="data-path data-path-six"
              d="M150 395 Q270 310 390 395"
              fill="none"
              stroke="url(#aiLine)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />

            {[
              [92, 270],
              [150, 145],
              [270, 92],
              [390, 145],
              [448, 270],
              [390, 395],
              [270, 448],
              [150, 395],
            ].map(([cx, cy], index) => (
              <g key={index}>
                <circle
                  cx={cx}
                  cy={cy}
                  r="10"
                  fill="#a855f7"
                  opacity=".07"
                />

                <circle
                  cx={cx}
                  cy={cy}
                  r="3"
                  fill="#e9d5ff"
                  filter="url(#aiGlow)"
                />
              </g>
            ))}
          </svg>

          {/* =====================================================
              AI CORE
          ====================================================== */}

          <div className="absolute left-1/2 top-1/2 z-30 flex h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-purple-300/25 bg-[#07030e]/95 shadow-[0_0_100px_rgba(126,55,220,.42)] backdrop-blur-2xl md:h-[190px] md:w-[190px]">
            <div className="ai-core-pulse absolute inset-[-25px] rounded-full border border-purple-400/[0.10]" />

            <div className="ai-core-pulse-two absolute inset-[-48px] rounded-full border border-purple-400/[0.06]" />

            <div className="absolute inset-[11px] rounded-full border border-purple-300/[0.14]" />

            <div className="absolute inset-[24px] rounded-full bg-gradient-to-br from-purple-500/[0.17] via-purple-900/[0.12] to-black" />

            <div className="relative text-center">
              <div className="ai-brain-glow bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-[34px] font-semibold tracking-[-2px] text-transparent md:text-[42px]">
                AI
              </div>

              <div className="mt-1 text-[7px] uppercase tracking-[2.5px] text-white/25">
                Intelligence Core
              </div>

              <div className="mx-auto mt-3 flex w-fit items-center gap-2">
                <span className="relative flex h-[5px] w-[5px]">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                  <span className="relative h-[5px] w-[5px] rounded-full bg-green-400" />
                </span>

                <span className="text-[6px] uppercase tracking-[1.5px] text-green-400/50">
                  Processing
                </span>
              </div>
            </div>
          </div>

          {/* scanning beam */}
          <div className="ai-scan pointer-events-none absolute -left-[20%] top-[5%] h-[90%] w-[20%] rotate-[18deg] bg-gradient-to-r from-transparent via-purple-100/[0.08] to-transparent blur-xl" />
        </div>

        {/* =====================================================
            FLOATING INTELLIGENCE MODULES
        ====================================================== */}

        <div className="ai-float-one absolute left-[3%] top-[29%] z-40 hidden md:block lg:left-[8%]">
          <DataModule
            title="Predictive AI"
            value="ACTIVE"
            label="Decision Intelligence"
          />
        </div>

        <div className="ai-float-two absolute right-[3%] top-[27%] z-40 hidden md:block lg:right-[8%]">
          <DataModule
            title="Data Fabric"
            value="CONNECTED"
            label="Enterprise Data"
          />
        </div>

        <div className="ai-float-three absolute bottom-[18%] left-[3%] z-40 hidden md:block lg:left-[8%]">
          <DataModule
            title="GenAI"
            value="ONLINE"
            label="Knowledge Engine"
          />
        </div>

        <div className="ai-float-four absolute bottom-[17%] right-[3%] z-40 hidden md:block lg:right-[8%]">
          <DataModule
            title="Analytics"
            value="REAL-TIME"
            label="Business Intelligence"
          />
        </div>
      </div>

      {/* bottom system state */}
      <div className="absolute bottom-[2%] left-1/2 z-40 -translate-x-1/2">
        <div className="flex items-center gap-3 rounded-full border border-white/[0.07] bg-black/40 px-5 py-2 backdrop-blur-xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />
            <span className="relative h-2 w-2 rounded-full bg-green-400" />
          </span>

          <span className="whitespace-nowrap text-[8px] uppercase tracking-[2px] text-white/30">
            Enterprise Intelligence Online
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FLOATING MODULE
========================================================= */

function DataModule({
  title,
  value,
  label,
}: {
  title: string;
  value: string;
  label: string;
}) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 rounded-2xl bg-purple-500/[0.09] blur-xl transition duration-300 group-hover:bg-purple-500/[0.18]" />

      <div className="relative min-w-[180px] rounded-2xl border border-white/[0.08] bg-[#08070d]/75 px-4 py-4 backdrop-blur-2xl transition duration-300 group-hover:-translate-y-1 group-hover:border-purple-400/25">
        <div className="flex items-center justify-between gap-5">
          <span className="text-[8px] uppercase tracking-[1.5px] text-white/25">
            {label}
          </span>

          <span className="h-[5px] w-[5px] rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
        </div>

        <p className="mt-3 text-[13px] font-medium text-white/75">{title}</p>

        <p className="mt-1 text-[7px] uppercase tracking-[1.5px] text-purple-300/45">
          {value}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   LIVE AI CONSOLE
========================================================= */

function AIProcessingConsole() {
  const [active, setActive] = useState(0);

  const processes = [
    "Connecting enterprise data sources",
    "Normalizing intelligence layer",
    "Training predictive models",
    "Running real-time analytics",
    "Generating decision intelligence",
    "Enterprise AI system synchronized",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % processes.length);
    }, 1350);

    return () => clearInterval(timer);
  }, [processes.length]);

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#07070a]">
      <div className="absolute right-0 top-0 h-[250px] w-[250px] rounded-full bg-purple-600/[0.08] blur-[80px]" />

      <div className="relative flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
        <div className="flex gap-2">
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-purple-400/60" />
        </div>

        <span className="text-[8px] uppercase tracking-[2px] text-white/20">
          HYI Intelligence Engine
        </span>
      </div>

      <div className="relative p-7 md:p-9">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[8px] uppercase tracking-[2px] text-purple-300/40">
              AI Processing
            </p>

            <h3 className="mt-2 text-xl font-medium text-white/85">
              Intelligence Pipeline
            </h3>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-green-400/10 bg-green-400/[0.04] px-3 py-1">
            <span className="h-[5px] w-[5px] animate-pulse rounded-full bg-green-400" />

            <span className="text-[7px] uppercase tracking-[1.5px] text-green-400/55">
              Live
            </span>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          {processes.map((process, index) => {
            const current = index === active;

            return (
              <div
                key={process}
                className={`relative overflow-hidden rounded-xl border px-4 py-4 transition-all duration-500 ${
                  current
                    ? "border-purple-400/20 bg-purple-500/[0.055]"
                    : "border-white/[0.04] bg-white/[0.01]"
                }`}
              >
                {current && (
                  <div className="console-progress absolute bottom-0 left-0 h-px bg-purple-400/60" />
                )}

                <div className="flex items-center gap-4">
                  <span
                    className={`h-[6px] w-[6px] shrink-0 rounded-full ${
                      current
                        ? "animate-pulse bg-purple-200 shadow-[0_0_12px_#a855f7]"
                        : "bg-white/15"
                    }`}
                  />

                  <span
                    className={`text-[11px] md:text-[12px] ${
                      current ? "text-white/75" : "text-white/28"
                    }`}
                  >
                    {process}
                  </span>

                  <span className="ml-auto text-[7px] uppercase tracking-[1px] text-white/15">
                    {current ? "Processing" : "Ready"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3">
          {[
            ["12.8M", "Events"],
            ["99.8%", "Quality"],
            ["24/7", "Processing"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-xl border border-white/[0.05] bg-white/[0.015] p-3 text-center"
            >
              <div className="text-[13px] font-medium text-purple-100/70">
                {value}
              </div>

              <div className="mt-1 text-[6px] uppercase tracking-[1px] text-white/20">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AIDataAnalyticsCentresPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020203] text-white">
      <Header />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen overflow-hidden border-b border-white/[0.05]">
        {/* ambient background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[33%] h-[950px] w-[1250px] -translate-x-1/2 rounded-full bg-purple-800/[0.11] blur-[190px]" />

          <div className="absolute -left-[280px] top-[18%] h-[650px] w-[650px] rounded-full bg-fuchsia-900/[0.06] blur-[170px]" />

          <div className="absolute -right-[280px] top-[15%] h-[650px] w-[650px] rounded-full bg-indigo-900/[0.07] blur-[170px]" />
        </div>

        {/* technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(145,85,255,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(145,85,255,.18) 1px,transparent 1px)",
            backgroundSize: "85px 85px",
            maskImage:
              "linear-gradient(to bottom,transparent,black 28%,black 72%,transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom,transparent,black 28%,black 72%,transparent)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-24 pt-28 md:px-10 md:pt-32 lg:px-16">
          {/* badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-purple-400/[0.16] bg-purple-500/[0.05] px-4 py-2 backdrop-blur-xl">
              <span className="h-[5px] w-[5px] rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7]" />

              <span className="text-[9px] uppercase tracking-[2.2px] text-purple-100/55">
                HYI.AI Global Capability Center
              </span>
            </div>
          </div>

          {/* headline + paragraph */}
          <div className="relative z-30 mx-auto mt-8 max-w-[1180px] text-center">
            <p className="mb-5 text-[9px] uppercase tracking-[4px] text-white/25 md:text-[10px]">
              Intelligence • Data • AI • Decisions
            </p>

            <h1 className="text-[42px] font-semibold leading-[0.98] tracking-[-2.5px] sm:text-[57px] md:text-[74px] lg:text-[86px]">
              AI, Data &
              <span className="block bg-gradient-to-r from-[#e0b0ff] via-[#a65cff] to-[#7657ff] bg-clip-text text-transparent md:ml-4 md:inline">
                Analytics Centres
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-[850px] text-[14px] leading-7 text-white/42 md:text-[17px] md:leading-8">
              Build an enterprise intelligence engine that transforms connected
              data into predictive insights, AI-powered decisions and scalable
              business outcomes. HYI.AI combines data engineering, advanced
              analytics, machine learning and generative AI within one
              integrated Global Capability Center.
            </p>
          </div>

          {/* MODEL */}
          <div className="-mt-2 md:-mt-6">
            <AIIntelligenceCore />
          </div>

          {/* CTA */}
          <div className="relative z-40 mx-auto -mt-8 max-w-[850px] text-center md:-mt-12">
            <div className="mx-auto h-px w-[220px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />

            <p className="mx-auto mt-6 max-w-[720px] text-[13px] leading-7 text-white/35 md:text-[14px]">
              From enterprise data foundations to production AI, create one
              intelligence ecosystem capable of learning, predicting and
              continuously improving business decisions.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("ai-capabilities")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative overflow-hidden rounded-full border border-purple-300/20 bg-gradient-to-r from-[#742ce5] via-[#9250ff] to-[#7447ff] px-8 py-4 text-[13px] font-medium shadow-[0_12px_45px_rgba(124,58,237,.30)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(124,58,237,.45)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore AI Capabilities
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>

                <span className="absolute inset-y-0 left-[-45%] w-[35%] rotate-[18deg] bg-white/20 blur-xl transition-all duration-700 group-hover:left-[125%]" />
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("intelligence-engine")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full border border-white/[0.09] bg-white/[0.025] px-8 py-4 text-[13px] text-white/50 backdrop-blur-xl transition duration-300 hover:border-purple-400/25 hover:bg-purple-500/[0.05] hover:text-white"
              >
                View Intelligence Engine
              </button>
            </div>
          </div>

          {/* stats */}
          <div className="relative z-30 mx-auto mt-16 grid max-w-[1050px] grid-cols-2 overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.018] backdrop-blur-2xl md:grid-cols-4">
            {[
              ["AI-Native", "Architecture"],
              ["Real-Time", "Intelligence"],
              ["Enterprise", "Data Fabric"],
              ["360°", "AI Governance"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`px-5 py-6 text-center md:py-7 ${
                  index !== 3 ? "md:border-r md:border-white/[0.06]" : ""
                } ${
                  index < 2
                    ? "border-b border-white/[0.06] md:border-b-0"
                    : ""
                }`}
              >
                <div className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-xl font-semibold text-transparent md:text-2xl">
                  {value}
                </div>

                <div className="mt-2 text-[8px] uppercase tracking-[1.6px] text-white/25">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ====================================================== */}

      <section
        id="ai-capabilities"
        className="relative overflow-hidden border-b border-white/[0.05] bg-[#030305] py-24 md:py-32"
      >
        <div className="pointer-events-none absolute left-1/2 top-[25%] h-[750px] w-[1100px] -translate-x-1/2 rounded-full bg-purple-900/[0.07] blur-[180px]" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10 lg:px-16">
          <div className="mx-auto max-w-[850px] text-center">
            <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
              Intelligence Capabilities
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-1.3px] md:text-5xl">
              Build intelligence into
              <span className="block bg-gradient-to-r from-[#ddaaff] via-[#a55cff] to-[#7958ff] bg-clip-text text-transparent">
                every layer of the enterprise.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[700px] text-[14px] leading-7 text-white/36">
              Specialized AI and data capabilities designed to move enterprises
              from fragmented information to continuously improving
              intelligence.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <article
                key={item.no}
                className={`ai-card group relative min-h-[300px] overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#08070d]/80 p-7 transition duration-500 hover:-translate-y-2 hover:border-purple-400/25 md:p-8 ${
                  index === 1 || index === 4 ? "lg:translate-y-8" : ""
                }`}
              >
                <div className="absolute -right-20 -top-20 h-[230px] w-[230px] rounded-full bg-purple-600/[0.07] blur-[75px] transition duration-500 group-hover:bg-purple-600/[0.17]" />

                <div className="card-scan absolute left-[-40%] top-0 h-full w-[25%] rotate-[15deg] bg-gradient-to-r from-transparent via-purple-200/[0.035] to-transparent" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[9px] tracking-[2px] text-purple-300/40">
                    {item.no}
                  </span>

                  <span className="rounded-full border border-white/[0.06] bg-white/[0.015] px-3 py-1 text-[7px] tracking-[1.5px] text-white/25">
                    {item.tag}
                  </span>
                </div>

                <div className="relative z-10 mt-16">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/[0.12] bg-purple-500/[0.05]">
                    <span className="h-[8px] w-[8px] rounded-full bg-purple-300 shadow-[0_0_15px_4px_rgba(192,132,252,.35)]" />
                  </div>

                  <h3 className="text-xl font-medium text-white/90">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-7 text-white/35">
                    {item.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/25 to-transparent" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTELLIGENCE ENGINE
      ====================================================== */}

      <section
        id="intelligence-engine"
        className="relative overflow-hidden border-b border-white/[0.05] bg-[#020203] py-24 md:py-32"
      >
        <div className="pointer-events-none absolute right-[5%] top-[10%] h-[600px] w-[600px] rounded-full bg-purple-800/[0.07] blur-[170px]" />

        <div className="relative z-10 mx-auto max-w-[1350px] px-5 md:px-10 lg:px-16">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/[0.12] bg-purple-500/[0.04] px-4 py-2">
                <span className="h-1 w-1 rounded-full bg-purple-400" />

                <span className="text-[8px] uppercase tracking-[2px] text-purple-200/40">
                  Enterprise Intelligence Engine
                </span>
              </div>

              <h2 className="mt-7 max-w-[580px] text-3xl font-semibold leading-[1.08] tracking-[-1.3px] md:text-5xl">
                Data becomes valuable
                <span className="block bg-gradient-to-r from-[#dba9ff] via-[#a15bff] to-[#7657ff] bg-clip-text text-transparent">
                  when it drives action.
                </span>
              </h2>

              <p className="mt-6 max-w-[550px] text-[14px] leading-7 text-white/38">
                HYI.AI connects data engineering, analytics, machine learning
                and generative AI into a single intelligence pipeline — moving
                information from ingestion to enterprise decision-making.
              </p>

              <div className="mt-9 space-y-4">
                {[
                  "Connected enterprise data foundation",
                  "Real-time analytics and intelligence",
                  "Predictive AI and machine learning",
                  "AI-enabled enterprise decision systems",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/[0.05] pb-4"
                  >
                    <span className="text-[9px] text-purple-300/40">
                      0{index + 1}
                    </span>

                    <span className="text-[13px] text-white/52">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <AIProcessingConsole />
          </div>
        </div>
      </section>

      {/* =====================================================
          INTELLIGENCE FLOW
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#030305] py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/[0.06] blur-[180px]" />

        <div className="relative z-10 mx-auto max-w-[1350px] px-5 md:px-10 lg:px-16">
          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-[9px] uppercase tracking-[3px] text-purple-300/40">
              Intelligence Lifecycle
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-1.2px] md:text-5xl">
              From connected data to
              <span className="block bg-gradient-to-r from-[#ddaaff] to-[#7958ff] bg-clip-text text-transparent">
                autonomous intelligence.
              </span>
            </h2>
          </div>

          <div className="relative mt-16 grid gap-4 md:grid-cols-4">
            <div className="absolute left-[10%] right-[10%] top-[43px] hidden h-px bg-gradient-to-r from-transparent via-purple-400/25 to-transparent md:block" />

            {intelligenceLayers.map((layer) => (
              <article
                key={layer.number}
                className="group relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-white/[0.018] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-purple-500/[0.035]"
              >
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/20 bg-purple-500/[0.08] text-[9px] text-purple-200/60">
                  {layer.number}
                </div>

                <h3 className="mt-9 text-lg font-medium text-white/85">
                  {layer.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-white/34">
                  {layer.description}
                </p>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-purple-400/40 transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>

          {/* =================================================
              CTA
          ================================================== */}

          <div className="relative mt-20 overflow-hidden rounded-[34px] border border-purple-400/[0.11] bg-[#07060b] px-6 py-20 text-center">
            <div className="absolute left-1/2 top-1/2 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/[0.11] blur-[120px]" />

            <div className="cta-ai-ring absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/[0.07]" />

            <div className="cta-ai-ring-two absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/[0.04]" />

            <div className="relative z-10 mx-auto max-w-[850px]">
              <p className="text-[9px] uppercase tracking-[3px] text-purple-200/35">
                HYI.AI Intelligence Centres
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-1.3px] md:text-5xl">
                Turn enterprise data into
                <span className="block bg-gradient-to-r from-[#e0b0ff] via-[#a45dff] to-[#7758ff] bg-clip-text text-transparent">
                  intelligent advantage.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-[650px] text-[14px] leading-7 text-white/38">
                Build an AI, Data & Analytics Centre designed to continuously
                learn, predict and create measurable enterprise value.
              </p>

              <button className="group mt-9 rounded-full border border-purple-300/20 bg-gradient-to-r from-[#742ce4] to-[#8951ff] px-9 py-4 text-[13px] font-medium shadow-[0_15px_45px_rgba(124,58,237,.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(124,58,237,.40)]">
                <span className="flex items-center gap-3">
                  Build Your AI Centre
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* =====================================================
          ALL ANIMATIONS
      ====================================================== */}

      <style jsx global>{`
        @keyframes aiRingSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .ai-ring-slow {
          animation: aiRingSlow 30s linear infinite;
        }

        .ai-ring-medium {
          animation: aiRingSlow 18s linear infinite;
        }

        @keyframes aiRingReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .ai-ring-reverse {
          animation: aiRingReverse 24s linear infinite;
        }

        @keyframes radarRotation {
          from {
            transform: translate(-100%, -100%) rotate(0deg);
          }
          to {
            transform: translate(-100%, -100%) rotate(360deg);
          }
        }

        .ai-radar {
          transform-origin: 100% 100%;
          animation: radarRotation 7s linear infinite;
        }

        @keyframes dataFlow {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -130;
          }
        }

        .data-path {
          animation: dataFlow 6s linear infinite;
        }

        .data-path-two {
          animation-duration: 8s;
        }

        .data-path-three {
          animation-duration: 7s;
        }

        .data-path-four {
          animation-duration: 9s;
        }

        .data-path-five {
          animation-duration: 11s;
        }

        .data-path-six {
          animation-duration: 10s;
        }

        @keyframes aiCorePulse {
          0%,
          100% {
            transform: scale(0.9);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.12);
            opacity: 0.8;
          }
        }

        .ai-core-pulse {
          animation: aiCorePulse 3.5s ease-in-out infinite;
        }

        .ai-core-pulse-two {
          animation: aiCorePulse 5s ease-in-out infinite reverse;
        }

        @keyframes aiScan {
          0% {
            transform: translateX(-100%) rotate(18deg);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(700%) rotate(18deg);
            opacity: 0;
          }
        }

        .ai-scan {
          animation: aiScan 7s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0%,
          100% {
            transform: translateY(0) scale(0.7);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-35px) scale(1.4);
            opacity: 0.75;
            box-shadow: 0 0 10px rgba(192, 132, 252, 0.7);
          }
        }

        .ai-particle {
          animation-name: particleFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @keyframes floatOne {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes floatTwo {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(13px);
          }
        }

        .ai-float-one {
          animation: floatOne 5s ease-in-out infinite;
        }

        .ai-float-two {
          animation: floatTwo 6s ease-in-out infinite;
        }

        .ai-float-three {
          animation: floatTwo 7s ease-in-out infinite reverse;
        }

        .ai-float-four {
          animation: floatOne 5.5s ease-in-out infinite reverse;
        }

        @keyframes horizontalOrbit {
          0%,
          100% {
            transform: translate(-50%, -50%) rotateX(70deg) rotateZ(0deg);
          }
          50% {
            transform: translate(-50%, -50%) rotateX(70deg) rotateZ(180deg);
          }
        }

        .ai-horizontal-orbit {
          animation: horizontalOrbit 20s linear infinite;
        }

        .ai-horizontal-orbit-two {
          animation: horizontalOrbit 30s linear infinite reverse;
        }

        @keyframes brainGlow {
          0%,
          100% {
            filter: drop-shadow(0 0 5px rgba(168, 85, 247, 0.15));
          }
          50% {
            filter: drop-shadow(0 0 18px rgba(192, 132, 252, 0.55));
          }
        }

        .ai-brain-glow {
          animation: brainGlow 3s ease-in-out infinite;
        }

        @keyframes consoleProgress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .console-progress {
          animation: consoleProgress 1.35s linear infinite;
        }

        .ai-card:hover .card-scan {
          animation: cardScan 1s ease forwards;
        }

        @keyframes cardScan {
          from {
            left: -40%;
          }
          to {
            left: 130%;
          }
        }

        @keyframes ctaPulseAI {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0.2;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 0.7;
          }
        }

        .cta-ai-ring {
          animation: ctaPulseAI 5s ease-in-out infinite;
        }

        .cta-ai-ring-two {
          animation: ctaPulseAI 7s ease-in-out infinite reverse;
        }

        @media (prefers-reduced-motion: reduce) {
          .ai-ring-slow,
          .ai-ring-medium,
          .ai-ring-reverse,
          .ai-radar,
          .data-path,
          .ai-core-pulse,
          .ai-core-pulse-two,
          .ai-scan,
          .ai-particle,
          .ai-float-one,
          .ai-float-two,
          .ai-float-three,
          .ai-float-four,
          .ai-horizontal-orbit,
          .ai-horizontal-orbit-two,
          .ai-brain-glow,
          .console-progress,
          .cta-ai-ring,
          .cta-ai-ring-two {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}