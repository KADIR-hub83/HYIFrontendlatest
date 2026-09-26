"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Database,
  Eye,
  Gauge,
  Layers3,
  Network,
  RefreshCcw,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import type { ElementType, ReactNode } from "react";

/* =========================================================
   DATA
========================================================= */

const capabilities = [
  {
    Icon: Activity,
    number: "01",
    title: "Risk Intelligence",
    text:
      "Bring financial, operational and behavioral signals into a structured analytical layer that helps teams investigate risk across multiple business dimensions.",
  },
  {
    Icon: Eye,
    number: "02",
    title: "Risk Monitoring",
    text:
      "Continuously observe important indicators, thresholds and changes so emerging conditions can be surfaced for appropriate review.",
  },
  {
    Icon: Database,
    number: "03",
    title: "Risk Data Foundation",
    text:
      "Connect fragmented datasets and establish analysis-ready information models with clearer definitions, lineage and governance.",
  },
  {
    Icon: Gauge,
    number: "04",
    title: "Exposure Analytics",
    text:
      "Organize exposures across portfolios, customers, processes or other relevant dimensions to support structured risk investigation.",
  },
  {
    Icon: Network,
    number: "05",
    title: "Signal Correlation",
    text:
      "Study relationships between multiple indicators instead of evaluating every signal independently from the surrounding business context.",
  },
  {
    Icon: Workflow,
    number: "06",
    title: "Risk Workflows",
    text:
      "Connect analytical outputs with review, escalation, monitoring and governance workflows while keeping human decision-making in the loop.",
  },
];

const riskTypes = [
  {
    code: "CR",
    title: "Credit Risk",
    text: "Exposure and repayment-related analytical signals.",
    level: 74,
  },
  {
    code: "FR",
    title: "Fraud Signals",
    text: "Behavioral and transaction anomaly indicators.",
    level: 57,
  },
  {
    code: "MR",
    title: "Market Risk",
    text: "Market-sensitive exposure and movement indicators.",
    level: 66,
  },
  {
    code: "OR",
    title: "Operational Risk",
    text: "Process, system and operational control signals.",
    level: 42,
  },
  {
    code: "LR",
    title: "Liquidity Risk",
    text: "Cash availability and liquidity-related indicators.",
    level: 61,
  },
  {
    code: "RG",
    title: "Regulatory Risk",
    text: "Compliance and policy-related analytical context.",
    level: 49,
  },
];

const workflow = [
  {
    number: "01",
    title: "Connect",
    text: "Connect relevant financial, operational and behavioral sources.",
  },
  {
    number: "02",
    title: "Normalize",
    text: "Create consistent analytical definitions and risk-ready datasets.",
  },
  {
    number: "03",
    title: "Detect",
    text: "Identify signals, anomalies, thresholds and meaningful changes.",
  },
  {
    number: "04",
    title: "Contextualize",
    text: "Evaluate signals alongside related business and historical context.",
  },
  {
    number: "05",
    title: "Review",
    text: "Route analytical evidence into appropriate human review workflows.",
  },
];

const principles = [
  "Keep analytical risk signals traceable to their underlying data.",
  "Distinguish observed evidence from assumptions and model estimates.",
  "Define thresholds in the context of the business decision they support.",
  "Combine automated monitoring with appropriate human review.",
  "Evaluate model behavior and data quality continuously.",
  "Design risk intelligence around explainability and governance.",
];

/* =========================================================
   SHARED COMPONENTS
========================================================= */

function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1380px] ${className}`}>
      {children}
    </div>
  );
}

function Micro({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/30">
      {children}
    </span>
  );
}

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[7px] text-[#a78bfa]">
        {number}
      </span>

      <span className="h-px w-9 bg-white/15" />

      <Micro>{children}</Micro>
    </div>
  );
}

function LiveDot({ blue = false }: { blue?: boolean }) {
  return (
    <span className="relative flex h-2 w-2">
      <motion.span
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className={`absolute inset-0 rounded-full ${
          blue ? "bg-[#60a5fa]" : "bg-[#a78bfa]"
        }`}
      />

      <span
        className={`relative h-2 w-2 rounded-full ${
          blue ? "bg-[#60a5fa]" : "bg-[#a78bfa]"
        }`}
      />
    </span>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5  md:px-10 ">
      {/* BACKGROUND GRID */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 95%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 95%)",
        }}
      />

      {/* PURPLE GLOW */}

      <div className="pointer-events-none absolute -left-[250px] top-[150px] h-[600px] w-[600px] rounded-full bg-[#7c3aed]/[0.09] blur-[190px]" />

      {/* BLUE GLOW */}

      <div className="pointer-events-none absolute -right-[250px] top-[200px] h-[600px] w-[600px] rounded-full bg-[#2563eb]/[0.07] blur-[190px]" />

      <Container className="relative">
        {/* TOP BAR */}
{/* 
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <LiveDot />

            <Micro>HYI / Risk Analytics</Micro>
          </div>

          <div className="hidden items-center gap-7 md:flex">
            <Micro>Observe</Micro>
            <Micro>Detect</Micro>
            <Micro>Analyze</Micro>
            <Micro>Understand</Micro>
            <Micro>Respond</Micro>
          </div>
        </div> */}

        {/* HERO COPY */}

        <div className="mx-auto max-w-[1050px] pt-20 text-center">
          {/* <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-4 py-2"
          >
            <ShieldCheck
              size={11}
              className="text-[#a78bfa]"
            />

            <Micro>AI Risk Intelligence</Micro>
          </motion.div> */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mt-9 text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.82] tracking-[-0.085em]"
          >
            See risk

            <span className="block text-white/20">
              before it becomes
            </span>

            <span className="block bg-gradient-to-r from-[#c4b5fd] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
              the problem.
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="mx-auto mt-9 max-w-[800px] text-[14px] leading-8 text-white/[0.55]"
          >
            HYI Risk Analytics helps organizations connect fragmented risk
            signals into a clearer analytical system. Financial,
            operational, behavioral and compliance-related data can be
            organized into monitoring, analytical and review workflows that
            help teams understand where attention may be required.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#risk-command"
              className="flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-medium text-black"
            >
              Explore risk intelligence
              <ArrowDown size={13} />
            </a>

            <a
              href="#hyi-risk"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[11px] text-white/55"
            >
              How HYI works
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        <div
          id="risk-command"
          className="mt-20"
        >
          <RiskCommandCenter />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   RISK COMMAND CENTER
========================================================= */

function RiskCommandCenter() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#080808] p-5 md:p-7">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative">
        {/* HEADER */}

        <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
              <ShieldCheck
                size={15}
                className="text-[#a78bfa]"
              />
            </div>

            <div>
              <Micro>Risk Intelligence Command Center</Micro>

              <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.12em] text-white/15">
                HYI / ANALYTICAL RISK SYSTEM
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LiveDot blue />

            <Micro>Monitoring active</Micro>
          </div>
        </div>

        {/* PRIMARY MODELS */}

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
          <RiskRadar />
          <RiskSignalPanel />
        </div>

        {/* SECONDARY MODELS */}

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <RiskHeatMap />
          <ProbabilityModel />
          <SignalNetwork />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   RADAR
========================================================= */

function RiskRadar() {
  const nodes = [
    {
      title: "Credit",
      className: "left-[9%] top-[13%]",
    },
    {
      title: "Fraud",
      className: "right-[8%] top-[14%]",
    },
    {
      title: "Market",
      className: "left-[3%] top-[49%]",
    },
    {
      title: "Operations",
      className: "right-[2%] top-[48%]",
    },
    {
      title: "Liquidity",
      className: "bottom-[8%] left-[15%]",
    },
    {
      title: "Compliance",
      className: "bottom-[8%] right-[13%]",
    },
  ];

  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505] p-6">
      <div className="flex items-center justify-between">
        <div>
          <Micro>Risk Radar</Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Multi-dimensional analytical monitoring
          </p>
        </div>

        <div className="flex items-center gap-2">
          <LiveDot />

          <span className="font-mono text-[6px] uppercase tracking-[0.12em] text-white/20">
            scanning
          </span>
        </div>
      </div>

      <div className="relative mt-4 flex h-[410px] items-center justify-center">
        {/* RADAR CIRCLES */}

        <div className="absolute h-[360px] w-[360px] rounded-full border border-white/[0.06]" />

        <div className="absolute h-[285px] w-[285px] rounded-full border border-white/[0.06]" />

        <div className="absolute h-[205px] w-[205px] rounded-full border border-[#8b5cf6]/15" />

        <div className="absolute h-[120px] w-[120px] rounded-full border border-[#60a5fa]/15" />

        {/* CROSS AXIS */}

        <div className="absolute h-[360px] w-px bg-gradient-to-b from-transparent via-white/[0.07] to-transparent" />

        <div className="absolute h-px w-[360px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        {/* DIAGONAL AXES */}

        <div className="absolute h-px w-[350px] rotate-45 bg-gradient-to-r from-transparent via-white/[0.035] to-transparent" />

        <div className="absolute h-px w-[350px] -rotate-45 bg-gradient-to-r from-transparent via-white/[0.035] to-transparent" />

        {/* SCANNER */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[350px] w-[350px] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(139,92,246,0) 0deg, rgba(139,92,246,0) 315deg, rgba(139,92,246,.18) 350deg, rgba(196,181,253,.55) 360deg)",
            maskImage:
              "radial-gradient(circle, transparent 0%, transparent 8%, black 9%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 0%, transparent 8%, black 9%)",
          }}
        />

        {/* ROTATING RING */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-[#8b5cf6]/20"
        />

        {/* CORE */}

        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(139,92,246,0)",
              "0 0 80px rgba(139,92,246,.22)",
              "0 0 0 rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute z-20 flex h-[135px] w-[135px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#09070e]"
        >
          <ShieldCheck
            size={25}
            strokeWidth={1}
            className="text-[#c4b5fd]"
          />

          <span className="mt-4 font-mono text-[7px] uppercase tracking-[0.16em] text-white/55">
            Risk Core
          </span>

          <span className="mt-1 font-mono text-[5px] uppercase tracking-[0.12em] text-[#60a5fa]/60">
            monitoring
          </span>
        </motion.div>

        {/* SIGNAL POINTS */}

        <RadarSignal
          className="left-[36%] top-[18%]"
          delay={0}
        />

        <RadarSignal
          className="right-[27%] top-[31%]"
          delay={0.7}
          blue
        />

        <RadarSignal
          className="bottom-[24%] left-[30%]"
          delay={1.4}
        />

        <RadarSignal
          className="bottom-[17%] right-[34%]"
          delay={2}
          blue
        />

        {/* RISK NODES */}

        {nodes.map((node, index) => (
          <motion.div
            key={node.title}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              delay: index * 0.2,
              repeat: Infinity,
            }}
            className={`absolute z-30 rounded-[10px] border border-white/[0.07] bg-[#090909]/90 px-3 py-2 backdrop-blur-md ${node.className}`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  index % 2 === 0
                    ? "bg-[#a78bfa]"
                    : "bg-[#60a5fa]"
                }`}
              />

              <span className="font-mono text-[6px] uppercase tracking-[0.1em] text-white/40">
                {node.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function RadarSignal({
  className,
  delay,
  blue = false,
}: {
  className: string;
  delay: number;
  blue?: boolean;
}) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.8, 1],
        opacity: [0.25, 1, 0.25],
      }}
      transition={{
        duration: 2.2,
        delay,
        repeat: Infinity,
      }}
      className={`absolute z-10 h-2 w-2 rounded-full ${
        blue
          ? "bg-[#60a5fa] shadow-[0_0_15px_rgba(96,165,250,.8)]"
          : "bg-[#a78bfa] shadow-[0_0_15px_rgba(167,139,250,.8)]"
      } ${className}`}
    />
  );
}

/* =========================================================
   RISK SIGNAL PANEL
========================================================= */

function RiskSignalPanel() {
  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-[#050505] p-6">
      <div className="flex items-center justify-between">
        <Micro>Risk Signal Monitor</Micro>

        <Activity
          size={13}
          className="text-[#60a5fa]"
        />
      </div>

      <div className="mt-8">
        <div className="flex items-end justify-between">
          <div>
            <span className="font-mono text-[6px] uppercase tracking-[0.14em] text-white/20">
              Analytical state
            </span>

            <h3 className="mt-2 text-3xl font-medium tracking-[-0.05em] text-white/80">
              Multi-signal
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <LiveDot />

            <span className="font-mono text-[6px] uppercase tracking-[0.1em] text-[#a78bfa]">
              live
            </span>
          </div>
        </div>

        <p className="mt-4 text-[10px] leading-5 text-white/30">
          Signals shown here are illustrative interface data used to
          demonstrate how a risk analytics workspace could organize
          information.
        </p>
      </div>

      <div className="mt-7 space-y-4">
        {riskTypes.map((risk, index) => (
          <RiskMeter
            key={risk.title}
            title={risk.title}
            code={risk.code}
            level={risk.level}
            blue={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
}

function RiskMeter({
  title,
  code,
  level,
  blue = false,
}: {
  title: string;
  code: string;
  level: number;
  blue?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[6px] text-white/20">
            {code}
          </span>

          <span className="text-[8px] text-white/40">
            {title}
          </span>
        </div>

        <span className="font-mono text-[6px] text-white/20">
          SIGNAL
        </span>
      </div>

      <div className="mt-2 h-[4px] overflow-hidden rounded-full bg-white/[0.04]">
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${level}%`,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
          className={`h-full rounded-full ${
            blue ? "bg-[#60a5fa]" : "bg-[#8b5cf6]"
          }`}
        />
      </div>
    </div>
  );
}

/* =========================================================
   HEATMAP
========================================================= */

function RiskHeatMap() {
  const cells = [
    0.15, 0.35, 0.6, 0.22, 0.75,
    0.4, 0.82, 0.31, 0.5, 0.19,
    0.7, 0.28, 0.92, 0.44, 0.63,
    0.25, 0.55, 0.38, 0.79, 0.33,
    0.61, 0.18, 0.48, 0.87, 0.41,
  ];

  return (
    <ModelCard
      title="Risk Heatmap"
      Icon={Layers3}
    >
      <div className="mt-7 grid grid-cols-5 gap-2">
        {cells.map((opacity, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.025,
            }}
            animate={{
              opacity: [
                Math.max(0.15, opacity - 0.15),
                opacity,
                Math.max(0.15, opacity - 0.15),
              ],
            }}
            className={`aspect-square rounded-[5px] ${
              index % 3 === 0
                ? "bg-[#60a5fa]"
                : "bg-[#8b5cf6]"
            }`}
            style={{
              opacity,
            }}
          />
        ))}
      </div>

      <p className="mt-5 text-[9px] leading-5 text-white/30">
        Compare analytical signal concentration across relevant dimensions
        without reducing risk to a single isolated metric.
      </p>
    </ModelCard>
  );
}

/* =========================================================
   PROBABILITY MODEL
========================================================= */

function ProbabilityModel() {
  const bars = [
    18, 29, 42, 58, 77, 94, 80, 63, 44, 27, 16,
  ];

  return (
    <ModelCard
      title="Probability Distribution"
      Icon={Activity}
    >
      <div className="relative mt-7 flex h-[130px] items-end justify-center gap-[5px] border-b border-white/[0.07]">
        {bars.map((height, index) => (
          <motion.div
            key={index}
            initial={{
              height: 0,
            }}
            whileInView={{
              height: `${height}%`,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.04,
            }}
            className={`w-full max-w-[14px] rounded-t-[3px] ${
              index >= 4 && index <= 7
                ? "bg-[#8b5cf6]/80"
                : "bg-[#60a5fa]/35"
            }`}
          />
        ))}

        <motion.div
          animate={{
            left: ["15%", "80%", "15%"],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 top-0 w-px bg-[#c4b5fd]/50"
        />
      </div>

      <p className="mt-5 text-[9px] leading-5 text-white/30">
        Explore model outputs as distributions and ranges rather than
        presenting analytical uncertainty as false certainty.
      </p>
    </ModelCard>
  );
}

/* =========================================================
   SIGNAL NETWORK
========================================================= */

function SignalNetwork() {
  return (
    <ModelCard
      title="Signal Correlation"
      Icon={Network}
    >
      <div className="relative mt-6 h-[140px]">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 300 140"
          fill="none"
        >
          <motion.path
            d="M40 35 L145 70 L250 28"
            stroke="rgba(139,92,246,.35)"
            strokeWidth="1"
            initial={{
              pathLength: 0,
            }}
            whileInView={{
              pathLength: 1,
            }}
            viewport={{
              once: true,
            }}
          />

          <motion.path
            d="M40 105 L145 70 L255 110"
            stroke="rgba(96,165,250,.35)"
            strokeWidth="1"
            initial={{
              pathLength: 0,
            }}
            whileInView={{
              pathLength: 1,
            }}
            viewport={{
              once: true,
            }}
          />

          <motion.path
            d="M40 35 L40 105"
            stroke="rgba(255,255,255,.1)"
            strokeWidth="1"
          />

          <motion.path
            d="M250 28 L255 110"
            stroke="rgba(255,255,255,.1)"
            strokeWidth="1"
          />
        </svg>

        <NetworkPoint
          className="left-[8%] top-[18%]"
          label="A"
        />

        <NetworkPoint
          className="bottom-[10%] left-[8%]"
          label="B"
          blue
        />

        <NetworkPoint
          className="left-[46%] top-[42%]"
          label="AI"
        />

        <NetworkPoint
          className="right-[7%] top-[14%]"
          label="C"
          blue
        />

        <NetworkPoint
          className="bottom-[8%] right-[6%]"
          label="D"
        />
      </div>

      <p className="mt-4 text-[9px] leading-5 text-white/30">
        Connect related indicators to provide analysts with richer context
        around potentially meaningful changes.
      </p>
    </ModelCard>
  );
}

function NetworkPoint({
  className,
  label,
  blue = false,
}: {
  className: string;
  label: string;
  blue?: boolean;
}) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className={`absolute z-10 flex h-9 w-9 items-center justify-center rounded-full border bg-[#080808] font-mono text-[6px] ${
        blue
          ? "border-[#60a5fa]/35 text-[#60a5fa]"
          : "border-[#8b5cf6]/35 text-[#a78bfa]"
      } ${className}`}
    >
      {label}
    </motion.div>
  );
}

function ModelCard({
  title,
  Icon,
  children,
}: {
  title: string;
  Icon: ElementType;
  children: ReactNode;
}) {
  return (
    <motion.article
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
      className="rounded-[18px] border border-white/[0.07] bg-[#050505] p-5"
    >
      <div className="flex items-center justify-between">
        <Micro>{title}</Micro>

        <Icon
          size={12}
          className="text-[#a78bfa]"
        />
      </div>

      {children}
    </motion.article>
  );
}

/* =========================================================
   WHAT RISK ANALYTICS MEANS
========================================================= */

function RiskAnalyticsIntro() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10 md:py-32">
      <Container>
        <SectionLabel number="01">
          Understanding Risk Analytics
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="max-w-[650px] text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              Risk is rarely

              <span className="block text-white/20">
                one signal.
              </span>
            </h2>
          </div>

          <div className="self-end">
            <p className="text-[14px] leading-8 text-white/[0.55]">
              Risk analytics uses data and analytical methods to help
              organizations investigate uncertainty, exposure, unusual
              behavior and changing conditions. The objective is not to
              replace business judgment, but to make relevant evidence
              easier to identify and understand.
            </p>

            <p className="mt-5 text-[12px] leading-7 text-white/[0.38]">
              Different organizations may examine different categories of
              risk. Financial services may focus heavily on credit,
              liquidity, fraud or market exposure, while other businesses
              may emphasize operational, supply-chain, compliance or
              technology-related risk.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-3">
          <InfoCard
            number="R / 01"
            title="Observe"
            text="Bring relevant indicators into one analytical environment so changes are easier to see across systems and business dimensions."
          />

          <InfoCard
            number="R / 02"
            title="Understand"
            text="Study signals with historical, operational and financial context before drawing conclusions about their meaning."
          />

          <InfoCard
            number="R / 03"
            title="Respond"
            text="Connect analytical evidence to defined review and escalation processes instead of leaving insights isolated inside dashboards."
          />
        </div>
      </Container>
    </section>
  );
}

function InfoCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <motion.article
      whileHover={{
        y: -4,
      }}
      className="rounded-[18px] border border-white/[0.07] bg-[#080808] p-7"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[7px] text-[#a78bfa]">
          {number}
        </span>

        <CircleDot
          size={12}
          className="text-[#60a5fa]"
        />
      </div>

      <h3 className="mt-8 text-xl font-medium tracking-[-0.035em] text-white/80">
        {title}
      </h3>

      <p className="mt-4 text-[11px] leading-6 text-white/[0.42]">
        {text}
      </p>
    </motion.article>
  );
}

/* =========================================================
   RISK TYPES
========================================================= */

function RiskLandscape() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel number="02">
              Risk Landscape
            </SectionLabel>

            <h2 className="mt-9 max-w-[780px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Multiple dimensions.

              <span className="block text-white/20">
                One intelligence layer.
              </span>
            </h2>
          </div>

          <p className="max-w-[450px] text-[12px] leading-7 text-white/40">
            Risk categories are interconnected. A useful analytical
            architecture helps teams investigate individual signals while
            preserving the wider context around them.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {riskTypes.map((risk, index) => (
            <motion.article
              key={risk.title}
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -4,
              }}
              className="rounded-[18px] border border-white/[0.07] bg-[#050505] p-6"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`font-mono text-[8px] ${
                    index % 2 === 0
                      ? "text-[#a78bfa]"
                      : "text-[#60a5fa]"
                  }`}
                >
                  {risk.code}
                </span>

                <LiveDot blue={index % 2 !== 0} />
              </div>

              <h3 className="mt-8 text-xl font-medium tracking-[-0.035em] text-white/80">
                {risk.title}
              </h3>

              <p className="mt-3 text-[11px] leading-6 text-white/[0.42]">
                {risk.text}
              </p>

              <div className="mt-7 h-[4px] overflow-hidden rounded-full bg-white/[0.04]">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${risk.level}%`,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`h-full ${
                    index % 2 === 0
                      ? "bg-[#8b5cf6]"
                      : "bg-[#60a5fa]"
                  }`}
                />
              </div>

              <div className="mt-3 flex justify-between">
                <Micro>Analytical signal</Micro>
                <Micro>Illustrative</Micro>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   HYI CAPABILITIES
========================================================= */

function HYIRisk() {
  return (
    <section
      id="hyi-risk"
      className="bg-[#050505] px-5 py-28 md:px-10 md:py-32"
    >
      <Container>
        <SectionLabel number="03">
          How HYI Works
        </SectionLabel>

        <div className="mt-10 grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Build the

              <span className="block bg-gradient-to-r from-[#c4b5fd] to-[#60a5fa] bg-clip-text text-transparent">
                risk intelligence layer.
              </span>
            </h2>

            <p className="mt-7 max-w-[440px] text-[12px] leading-7 text-white/[0.4]">
              HYI can help design and implement the data, analytics,
              automation and monitoring architecture around risk-related
              workflows. The implementation should be aligned with the
              organization&apos;s own risk policies, controls and domain
              requirements.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map(
              (
                {
                  Icon,
                  number,
                  title,
                  text,
                },
                index,
              ) => (
                <motion.article
                  key={title}
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="rounded-[18px] border border-white/[0.07] bg-[#080808] p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">
                      <Icon
                        size={14}
                        strokeWidth={1.4}
                        className="text-[#a78bfa]"
                      />
                    </div>

                    <span className="font-mono text-[6px] text-white/20">
                      {number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-medium tracking-[-0.03em] text-white/75">
                    {title}
                  </h3>

                  <p className="mt-3 text-[10px] leading-6 text-white/[0.4]">
                    {text}
                  </p>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   RISK PIPELINE
========================================================= */

function RiskPipeline() {
  const nodes = [
    {
      title: "Data",
      text: "Signals",
    },
    {
      title: "Monitor",
      text: "Observe",
    },
    {
      title: "Analyze",
      text: "Context",
    },
    {
      title: "Review",
      text: "Evidence",
    },
    {
      title: "Action",
      text: "Workflow",
    },
  ];

  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-24 md:px-10">
      <Container>
        <SectionLabel number="04">
          Risk Intelligence Flow
        </SectionLabel>

        <div className="mt-10 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#050505] p-6 md:p-10">
          <div className="flex items-center justify-between">
            <Micro>HYI Risk Pipeline</Micro>

            <div className="flex items-center gap-2">
              <LiveDot />
              <Micro>Signals moving</Micro>
            </div>
          </div>

          <div className="relative mt-12 grid gap-3 md:grid-cols-5">
            <div className="absolute left-[8%] right-[8%] top-[45px] hidden h-px bg-gradient-to-r from-[#8b5cf6]/10 via-[#a78bfa]/60 to-[#60a5fa]/10 md:block" />

            <motion.div
              animate={{
                left: ["8%", "89%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-[40px] z-30 hidden h-[10px] w-[10px] rounded-full bg-[#c4b5fd] shadow-[0_0_20px_rgba(196,181,253,.9)] md:block"
            />

            {nodes.map((node, index) => (
              <motion.div
                key={node.title}
                whileHover={{
                  y: -4,
                }}
                className="relative z-10 rounded-[15px] border border-white/[0.07] bg-[#090909] p-5 text-center"
              >
                <div
                  className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full border ${
                    index % 2 === 0
                      ? "border-[#8b5cf6]/30"
                      : "border-[#60a5fa]/25"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      index % 2 === 0
                        ? "bg-[#a78bfa]"
                        : "bg-[#60a5fa]"
                    }`}
                  />
                </div>

                <h3 className="mt-5 text-[11px] text-white/60">
                  {node.title}
                </h3>

                <Micro>{node.text}</Micro>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   WORKFLOW
========================================================= */

function RiskWorkflow() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <SectionLabel number="05">
              Analytical Workflow
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em]">
              Signal to

              <span className="block text-white/20">
                structured review.
              </span>
            </h2>

            <p className="mt-6 max-w-[420px] text-[11px] leading-7 text-white/35">
              A risk analytics system should not end at detection. Relevant
              evidence needs to move through defined analytical, review and
              governance processes.
            </p>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#080808]">
            {workflow.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: 15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                className="grid gap-4 border-b border-white/[0.06] p-6 last:border-b-0 sm:grid-cols-[60px_140px_1fr]"
              >
                <span className="font-mono text-[7px] text-[#a78bfa]">
                  {item.number}
                </span>

                <span className="text-[11px] font-medium text-white/65">
                  {item.title}
                </span>

                <span className="text-[10px] leading-6 text-white/35">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   PRINCIPLES
========================================================= */

function RiskPrinciples() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel number="06">
              Responsible Risk Intelligence
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em]">
              Intelligence with

              <span className="block text-white/20">
                control.
              </span>
            </h2>

            <p className="mt-6 max-w-[430px] text-[11px] leading-7 text-white/35">
              Risk analytics supports decision-making. It should not hide
              uncertainty, erase human accountability or present model
              outputs as guaranteed outcomes.
            </p>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505]">
            {principles.map((item, index) => (
              <div
                key={item}
                className="flex items-center justify-between gap-5 border-b border-white/[0.06] px-6 py-5 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      index % 2 === 0
                        ? "bg-[#a78bfa]"
                        : "bg-[#60a5fa]"
                    }`}
                  />

                  <span className="text-[11px] leading-6 text-white/[0.48]">
                    {item}
                  </span>
                </div>

                <CheckCircle2
                  size={12}
                  className="shrink-0 text-white/20"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   FINAL CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-32 md:px-10 md:py-40">
      <div className="pointer-events-none absolute left-[15%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.08] blur-[170px]" />

      <div className="pointer-events-none absolute right-[15%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#2563eb]/[0.06] blur-[170px]" />

      <Container className="relative text-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="mx-auto flex h-[92px] w-[92px] items-center justify-center rounded-full border border-dashed border-[#8b5cf6]/30"
        >
          <div className="flex h-[66px] w-[66px] items-center justify-center rounded-full border border-[#60a5fa]/20 bg-[#8b5cf6]/[0.05]">
            <ShieldCheck
              size={24}
              strokeWidth={1}
              className="text-[#c4b5fd]"
            />
          </div>
        </motion.div>

        <h2 className="mx-auto mt-9 max-w-[1050px] text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
          Understand risk

          <span className="block bg-gradient-to-r from-[#c4b5fd] via-white/40 to-[#60a5fa] bg-clip-text text-transparent">
            with better context.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[680px] text-[12px] leading-7 text-white/[0.43]">
          Build connected risk analytics systems that help teams organize
          signals, investigate changes and move analytical evidence into
          controlled decision workflows.
        </p>

        <a
          href="#risk-command"
          className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full bg-white px-9 py-4 text-[11px] font-medium text-black"
        >
          Explore Risk Analytics
          <ArrowRight size={13} />
        </a>
      </Container>
    </section>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function RiskAnalyticsClient() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="overflow-x-hidden bg-[#050505] text-white">
      {/* SCROLL PROGRESS */}

      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#8b5cf6] via-[#c4b5fd] to-[#60a5fa]"
      />

      <Hero />

      <RiskAnalyticsIntro />

      <RiskLandscape />

      <HYIRisk />

      <RiskPipeline />

      <RiskWorkflow />

      <RiskPrinciples />

      <FinalCTA />
    </div>
  );
}