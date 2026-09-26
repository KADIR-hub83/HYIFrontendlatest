"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  CircleDot,
  Database,
  Eye,
  Gauge,
  GitBranch,
  Layers3,
  RefreshCcw,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import type { ElementType, ReactNode } from "react";

/* =========================================================
   DATA
========================================================= */

const riskDimensions = [
  {
    Icon: CircleDollarSign,
    code: "01",
    title: "Affordability",
    text:
      "Bring income, obligations, cash-flow context and relevant financial capacity indicators into a structured analytical view.",
  },
  {
    Icon: Activity,
    code: "02",
    title: "Repayment behavior",
    text:
      "Analyze suitable historical repayment information and behavioral patterns to support a broader understanding of credit performance.",
  },
  {
    Icon: Gauge,
    code: "03",
    title: "Credit utilization",
    text:
      "Evaluate relevant utilization and exposure patterns in context instead of relying on an isolated financial indicator.",
  },
  {
    Icon: Layers3,
    code: "04",
    title: "Exposure context",
    text:
      "Understand existing and proposed exposure across relevant accounts, facilities, products or portfolio relationships.",
  },
  {
    Icon: GitBranch,
    code: "05",
    title: "Scenario analysis",
    text:
      "Explore how changes in selected assumptions can affect analytical risk indicators before consequential decisions are made.",
  },
  {
    Icon: Eye,
    code: "06",
    title: "Decision evidence",
    text:
      "Present important analytical factors and supporting context so appropriate reviewers can understand the basis of an assessment.",
  },
];

const architecture = [
  {
    id: "01",
    title: "Financial Data",
    sub: "Relevant inputs",
  },
  {
    id: "02",
    title: "Feature Layer",
    sub: "Risk context",
  },
  {
    id: "03",
    title: "Risk Models",
    sub: "Analytics",
  },
  {
    id: "04",
    title: "Policy Layer",
    sub: "Controls",
  },
  {
    id: "05",
    title: "Review",
    sub: "Decision support",
  },
];

const principles = [
  "Use relevant and appropriately governed data for the intended credit context.",
  "Keep analytical outputs explainable enough for appropriate review and oversight.",
  "Monitor model behavior, data quality and performance after deployment.",
  "Separate model estimates from final business or lending decisions.",
  "Evaluate fairness, compliance and policy requirements for the applicable jurisdiction and use case.",
  "Maintain traceable evidence around material changes, overrides and review processes.",
];

const scenarios = [
  {
    title: "Income stability",
    value: 72,
    label: "Context signal",
  },
  {
    title: "Repayment pattern",
    value: 84,
    label: "Historical signal",
  },
  {
    title: "Exposure",
    value: 47,
    label: "Portfolio context",
  },
  {
    title: "Utilization",
    value: 61,
    label: "Credit context",
  },
];

/* =========================================================
   SHARED
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

function Micro({
  children,
  purple = false,
}: {
  children: ReactNode;
  purple?: boolean;
}) {
  return (
    <span
      className={`font-mono text-[7px] uppercase tracking-[0.18em] ${
        purple ? "text-[#a78bfa]" : "text-white/30"
      }`}
    >
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

      <span className="h-px w-10 bg-white/15" />

      <Micro>{children}</Micro>
    </div>
  );
}

function LiveDot({ blue = false }: { blue?: boolean }) {
  return (
    <span className="relative flex h-2 w-2">
      <motion.span
        animate={{
          scale: [1, 2.3, 1],
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
    <section className="relative overflow-hidden bg-[#050505] px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 62%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 62%, transparent 100%)",
        }}
      />

      <div className="pointer-events-none absolute left-[10%] top-[220px] h-[500px] w-[500px] rounded-full bg-[#7c3aed]/[0.07] blur-[190px]" />

      <div className="pointer-events-none absolute right-[8%] top-[300px] h-[500px] w-[500px] rounded-full bg-[#2563eb]/[0.06] blur-[190px]" />

      <Container className="relative">
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <LiveDot />
            <Micro>HYI / Credit Risk Intelligence</Micro>
          </div>

          <div className="hidden items-center gap-7 md:flex">
            <Micro>Assess</Micro>
            <Micro>Model</Micro>
            <Micro>Explain</Micro>
            <Micro>Monitor</Micro>
          </div>
        </div>

        <div className="mx-auto max-w-[1080px] pt-20 text-center">
          <motion.div
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
              className="text-[#c4b5fd]"
            />

            <Micro>Credit Decision Intelligence</Micro>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
            }}
            className="mt-9 text-[clamp(4rem,8vw,8.1rem)] font-semibold leading-[0.82] tracking-[-0.085em]"
          >
            See risk

            <span className="block text-white/20">
              in context.
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="mx-auto mt-9 max-w-[820px] text-[14px] leading-8 text-white/[0.55]"
          >
            HYI helps organizations engineer credit risk intelligence
            systems that connect relevant financial data, analytical
            features, risk models, policy controls and review workflows.
            The objective is not simply to generate a number, but to provide
            structured evidence and context that can support responsible
            credit decision processes.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#credit-model"
              className="flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-medium text-black"
            >
              Explore risk model
              <ArrowDown size={13} />
            </a>

            <a
              href="#risk-intelligence"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[11px] text-white/55"
            >
              Credit intelligence
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        <div
          id="credit-model"
          className="mt-20"
        >
          <CreditObservatory />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   CREDIT OBSERVATORY
========================================================= */

function CreditObservatory() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#080808] p-5 md:p-7">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.045) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative">
        <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">
              <Gauge
                size={15}
                className="text-[#c4b5fd]"
              />
            </div>

            <div>
              <Micro>Credit Decision Observatory</Micro>

              <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.12em] text-white/15">
                DATA → CONTEXT → MODEL → POLICY → REVIEW
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LiveDot blue />
            <Micro>Scenario engine active</Micro>
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
          <CreditOrbitModel />
          <RiskProfilePanel />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <RiskBands />
          <ExposureModel />
          <DecisionEvidence />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ORBIT MODEL
========================================================= */

function CreditOrbitModel() {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505]">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute left-6 right-6 top-6 z-30 flex items-center justify-between">
        <div>
          <Micro>Credit Profile</Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Illustrative analytical model
          </p>
        </div>

        <div className="flex items-center gap-2">
          <LiveDot />
          <Micro>Evaluating</Micro>
        </div>
      </div>

      <div className="absolute left-1/2 top-[56%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2">
        {/* ORBITS */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border border-dashed border-[#8b5cf6]/15"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[48px] rounded-full border border-dashed border-[#60a5fa]/15"
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[95px] rounded-full border border-[#8b5cf6]/20"
        />

        {/* AXIS */}

        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.07] to-transparent" />

        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        {/* CENTER */}

        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(139,92,246,0)",
              "0 0 80px rgba(139,92,246,.18)",
              "0 0 0 rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 z-20 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#09070e]"
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-3 rounded-full border border-dashed border-[#8b5cf6]/20"
          />

          <Gauge
            size={27}
            strokeWidth={1}
            className="text-[#c4b5fd]"
          />

          <span className="mt-4 font-mono text-[7px] uppercase tracking-[0.16em] text-white/60">
            Risk Core
          </span>

          <span className="mt-1 font-mono text-[5px] uppercase tracking-[0.12em] text-[#60a5fa]/70">
            Decision Context
          </span>
        </motion.div>

        <OrbitNode
          className="-left-[18px] top-[90px]"
          label="Affordability"
          code="AF"
        />

        <OrbitNode
          className="-right-[20px] top-[100px]"
          label="Repayment"
          code="RP"
          blue
        />

        <OrbitNode
          className="-bottom-[5px] left-[38px]"
          label="Exposure"
          code="EX"
          blue
        />

        <OrbitNode
          className="-bottom-[8px] right-[30px]"
          label="Utilization"
          code="UT"
        />

        <OrbitNode
          className="left-1/2 top-[18px] -translate-x-1/2"
          label="Stability"
          code="ST"
        />

        {/* ORBITING PARTICLES */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[50px]"
        >
          <div className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-[#60a5fa] shadow-[0_0_15px_rgba(96,165,250,.8)]" />
        </motion.div>

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[96px]"
        >
          <div className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_15px_rgba(196,181,253,.8)]" />
        </motion.div>
      </div>
    </div>
  );
}

function OrbitNode({
  className,
  label,
  code,
  blue = false,
}: {
  className: string;
  label: string;
  code: string;
  blue?: boolean;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className={`absolute z-20 min-w-[100px] rounded-[12px] border bg-[#090909]/95 p-3 backdrop-blur-md ${
        blue
          ? "border-[#60a5fa]/20"
          : "border-[#8b5cf6]/20"
      } ${className}`}
    >
      <div className="flex items-center gap-2">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            blue ? "bg-[#60a5fa]" : "bg-[#a78bfa]"
          }`}
        />

        <span
          className={`font-mono text-[6px] ${
            blue ? "text-[#60a5fa]" : "text-[#a78bfa]"
          }`}
        >
          {code}
        </span>
      </div>

      <span className="mt-2 block text-[8px] text-white/45">
        {label}
      </span>
    </motion.div>
  );
}

/* =========================================================
   PROFILE PANEL
========================================================= */

function RiskProfilePanel() {
  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-[#050505] p-6">
      <div className="flex items-center justify-between">
        <div>
          <Micro>Analytical Profile</Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Illustrative signals — not a credit score
          </p>
        </div>

        <Activity
          size={13}
          className="text-[#60a5fa]"
        />
      </div>

      <div className="mt-7 space-y-4">
        {scenarios.map((item, index) => (
          <div
            key={item.title}
            className="rounded-[13px] border border-white/[0.06] bg-[#080808] p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[9px] text-white/55">
                  {item.title}
                </span>

                <span className="mt-1 block font-mono text-[5px] uppercase tracking-[0.1em] text-white/20">
                  {item.label}
                </span>
              </div>

              <span
                className={`font-mono text-[8px] ${
                  index % 2 === 0
                    ? "text-[#a78bfa]"
                    : "text-[#60a5fa]"
                }`}
              >
                {String(item.value).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-white/[0.04]">
              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: `${item.value}%`,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                className={`h-full ${
                  index % 2 === 0
                    ? "bg-[#8b5cf6]"
                    : "bg-[#60a5fa]"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-[13px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.04] p-4">
        <div className="flex items-start gap-3">
          <ShieldCheck
            size={13}
            className="mt-0.5 shrink-0 text-[#a78bfa]"
          />

          <p className="text-[8px] leading-5 text-white/30">
            Values in this visual are illustrative interface data. A real
            credit assessment requires validated models, relevant data,
            applicable policy and appropriate review.
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MODEL CARDS
========================================================= */

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

function RiskBands() {
  return (
    <ModelCard
      title="Risk Bands"
      Icon={Gauge}
    >
      <div className="relative mt-8 h-[135px]">
        <svg
          viewBox="0 0 300 130"
          className="h-full w-full"
        >
          <path
            d="M40 110 A110 110 0 0 1 260 110"
            fill="none"
            stroke="rgba(255,255,255,.05)"
            strokeWidth="15"
            strokeLinecap="round"
          />

          <motion.path
            d="M40 110 A110 110 0 0 1 260 110"
            fill="none"
            stroke="url(#creditGradient)"
            strokeWidth="15"
            strokeLinecap="round"
            initial={{
              pathLength: 0,
            }}
            whileInView={{
              pathLength: 0.68,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.4,
            }}
          />

          <defs>
            <linearGradient
              id="creditGradient"
              x1="40"
              y1="0"
              x2="260"
              y2="0"
            >
              <stop
                offset="0%"
                stopColor="#8b5cf6"
              />

              <stop
                offset="100%"
                stopColor="#60a5fa"
              />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 text-center">
          <span className="font-mono text-[8px] text-white/60">
            MODEL
          </span>

          <span className="mt-1 block font-mono text-[5px] uppercase tracking-[0.12em] text-white/20">
            analytical range
          </span>
        </div>
      </div>

      <p className="mt-3 text-[9px] leading-5 text-white/30">
        Translate suitable model outputs into clearly defined analytical
        ranges without treating a visual band as a standalone decision.
      </p>
    </ModelCard>
  );
}

function ExposureModel() {
  const bars = [38, 54, 44, 72, 61, 48, 79, 57];

  return (
    <ModelCard
      title="Exposure Profile"
      Icon={Layers3}
    >
      <div className="mt-8 flex h-[130px] items-end gap-2 rounded-[12px] border border-white/[0.05] bg-[#080808] p-4">
        {bars.map((height, index) => (
          <div
            key={index}
            className="flex h-full flex-1 items-end"
          >
            <motion.div
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
                delay: index * 0.05,
              }}
              className={`w-full rounded-t-[3px] ${
                index % 2 === 0
                  ? "bg-[#8b5cf6]/65"
                  : "bg-[#60a5fa]/55"
              }`}
            />
          </div>
        ))}
      </div>

      <p className="mt-5 text-[9px] leading-5 text-white/30">
        Organize relevant exposure information across facilities,
        relationships or portfolio dimensions for additional analytical
        context.
      </p>
    </ModelCard>
  );
}

function DecisionEvidence() {
  const items = [
    "Financial context",
    "Model evidence",
    "Policy checks",
    "Review history",
  ];

  return (
    <ModelCard
      title="Decision Evidence"
      Icon={Database}
    >
      <div className="mt-8 space-y-3">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{
              opacity: 0,
              x: 12,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
            }}
            className="flex items-center justify-between rounded-[11px] border border-white/[0.05] bg-[#080808] px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  index % 2 === 0
                    ? "bg-[#a78bfa]"
                    : "bg-[#60a5fa]"
                }`}
              />

              <span className="text-[8px] text-white/40">
                {item}
              </span>
            </div>

            <CheckCircle2
              size={10}
              className="text-white/20"
            />
          </motion.div>
        ))}
      </div>

      <p className="mt-5 text-[9px] leading-5 text-white/30">
        Keep important analytical inputs and review context organized around
        the decision workflow.
      </p>
    </ModelCard>
  );
}

/* =========================================================
   INTRO
========================================================= */

function RiskIntro() {
  return (
    <section
      id="risk-intelligence"
      className="bg-[#050505] px-5 py-28 md:px-10"
    >
      <Container>
        <SectionLabel number="01">
          Credit Risk Intelligence
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="max-w-[650px] text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              Beyond a

              <span className="block text-white/20">
                single score.
              </span>
            </h2>
          </div>

          <div className="self-end">
            <p className="text-[14px] leading-8 text-white/[0.55]">
              Credit risk analysis can involve multiple layers of
              information: financial capacity, existing exposure,
              historical behavior, product context, policy requirements and
              uncertainty. A useful analytical system connects these layers
              rather than reducing every decision to an unexplained number.
            </p>

            <p className="mt-5 text-[12px] leading-7 text-white/[0.38]">
              HYI can help engineer the data and technology foundation around
              these workflows, including data pipelines, analytical
              features, model integration, monitoring, explainability and
              controlled decision-support experiences.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-3">
          <IntroCard
            Icon={Database}
            number="01"
            title="Understand context"
            text="Combine suitable financial and behavioral information into a governed analytical foundation with consistent definitions and traceable data."
          />

          <IntroCard
            Icon={Activity}
            number="02"
            title="Evaluate uncertainty"
            text="Use validated analytical methods to estimate relevant risk dimensions while preserving the limitations and uncertainty around those estimates."
          />

          <IntroCard
            Icon={ShieldCheck}
            number="03"
            title="Support review"
            text="Present model evidence, policy information and contextual factors so appropriate reviewers can understand what contributed to an assessment."
          />
        </div>
      </Container>
    </section>
  );
}

function IntroCard({
  Icon,
  number,
  title,
  text,
}: {
  Icon: ElementType;
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

        <Icon
          size={13}
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
   RISK DIMENSIONS
========================================================= */

function RiskDimensions() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel number="02">
              Analytical Dimensions
            </SectionLabel>

            <h2 className="mt-9 max-w-[780px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              One profile.

              <span className="block bg-gradient-to-r from-white/20 to-[#8b5cf6]/70 bg-clip-text text-transparent">
                Multiple dimensions.
              </span>
            </h2>
          </div>

          <p className="max-w-[460px] text-[12px] leading-7 text-white/40">
            The appropriate dimensions depend on the specific credit
            product, market, available data, organizational policy and
            applicable legal or regulatory requirements.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {riskDimensions.map(
            ({ Icon, code, title, text }, index) => (
              <motion.article
                key={title}
                initial={{
                  opacity: 0,
                  y: 18,
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
                className="group rounded-[18px] border border-white/[0.07] bg-[#050505] p-6"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-[11px] border ${
                      index % 2 === 0
                        ? "border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]"
                        : "border-[#60a5fa]/20 bg-[#60a5fa]/[0.04]"
                    }`}
                  >
                    <Icon
                      size={14}
                      strokeWidth={1.3}
                      className={
                        index % 2 === 0
                          ? "text-[#c4b5fd]"
                          : "text-[#60a5fa]"
                      }
                    />
                  </div>

                  <span className="font-mono text-[7px] text-white/20">
                    {code}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-medium tracking-[-0.035em] text-white/80">
                  {title}
                </h3>

                <p className="mt-4 text-[11px] leading-6 text-white/[0.42]">
                  {text}
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-px flex-1 bg-white/[0.06]" />

                  <ArrowRight
                    size={11}
                    className="text-white/15 transition-all group-hover:translate-x-1 group-hover:text-[#a78bfa]"
                  />
                </div>
              </motion.article>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   ARCHITECTURE
========================================================= */

function CreditArchitecture() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="03">
          Credit Intelligence Architecture
        </SectionLabel>

        <div className="mt-10 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#080808] p-6 md:p-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <Micro>Decision Intelligence Pipeline</Micro>

              <p className="mt-2 text-[9px] text-white/25">
                Governed data to controlled review
              </p>
            </div>

            <div className="flex items-center gap-2">
              <LiveDot />
              <Micro>Pipeline connected</Micro>
            </div>
          </div>

          <div className="relative mt-12 grid gap-3 md:grid-cols-5">
            <div className="absolute left-[8%] right-[8%] top-[45px] hidden h-px bg-gradient-to-r from-[#8b5cf6]/20 via-[#c4b5fd]/70 to-[#60a5fa]/20 md:block" />

            <motion.div
              animate={{
                left: ["8%", "89%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-[40px] z-30 hidden h-[10px] w-[10px] rounded-full bg-[#c4b5fd] shadow-[0_0_20px_rgba(196,181,253,.9)] md:block"
            />

            {architecture.map((item, index) => (
              <motion.div
                key={item.id}
                whileHover={{
                  y: -4,
                }}
                className="relative z-10 rounded-[15px] border border-white/[0.07] bg-[#050505] p-5 text-center"
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

                <span className="mt-5 block text-[10px] text-white/60">
                  {item.title}
                </span>

                <span className="mt-2 block font-mono text-[6px] uppercase tracking-[0.12em] text-white/20">
                  {item.sub}
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
   SCENARIO LAB
========================================================= */

function ScenarioLab() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <SectionLabel number="04">
              Scenario Intelligence
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Explore change

              <span className="block text-white/20">
                before deciding.
              </span>
            </h2>

            <p className="mt-7 max-w-[440px] text-[12px] leading-7 text-white/40">
              Scenario analysis can help teams understand how selected
              assumptions or financial conditions influence analytical
              outputs. It should complement validated risk methodology,
              rather than replace it.
            </p>
          </div>

          <ScenarioModel />
        </div>
      </Container>
    </section>
  );
}

function ScenarioModel() {
  const bars = [
    {
      label: "Base context",
      value: 68,
    },
    {
      label: "Scenario A",
      value: 52,
    },
    {
      label: "Scenario B",
      value: 78,
    },
    {
      label: "Scenario C",
      value: 61,
    },
  ];

  return (
    <div className="overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#050505] p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <Micro>Scenario Comparison</Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Illustrative analytical states
          </p>
        </div>

        <RefreshCcw
          size={13}
          className="text-[#a78bfa]"
        />
      </div>

      <div className="mt-9 space-y-5">
        {bars.map((item, index) => (
          <div key={item.label}>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-white/40">
                {item.label}
              </span>

              <span
                className={`font-mono text-[7px] ${
                  index % 2 === 0
                    ? "text-[#a78bfa]"
                    : "text-[#60a5fa]"
                }`}
              >
                {item.value}
              </span>
            </div>

            <div className="mt-3 h-[6px] overflow-hidden rounded-full bg-white/[0.04]">
              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: `${item.value}%`,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.08,
                }}
                className={`h-full rounded-full ${
                  index % 2 === 0
                    ? "bg-gradient-to-r from-[#7c3aed] to-[#c4b5fd]"
                    : "bg-gradient-to-r from-[#2563eb] to-[#60a5fa]"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-9 grid gap-3 sm:grid-cols-3">
        <SmallMetric
          label="Input"
          value="Context"
        />

        <SmallMetric
          label="Engine"
          value="Model"
        />

        <SmallMetric
          label="Output"
          value="Evidence"
        />
      </div>
    </div>
  );
}

function SmallMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[12px] border border-white/[0.06] bg-[#080808] p-4">
      <Micro>{label}</Micro>

      <span className="mt-3 block text-[10px] text-white/55">
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   GOVERNANCE
========================================================= */

function Governance() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel number="05">
              Responsible Credit Analytics
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em]">
              Intelligence needs

              <span className="block bg-gradient-to-r from-white/20 to-[#8b5cf6]/65 bg-clip-text text-transparent">
                governance.
              </span>
            </h2>

            <p className="mt-6 max-w-[440px] text-[11px] leading-7 text-white/35">
              Credit decisions can have significant effects on individuals
              and businesses. Production systems therefore require
              appropriate validation, oversight, data governance,
              monitoring, explainability and compliance processes.
            </p>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#080808]">
            {principles.map((principle, index) => (
              <motion.div
                key={principle}
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
                  delay: index * 0.04,
                }}
                className="flex items-center justify-between gap-5 border-b border-white/[0.06] px-6 py-5 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                      index % 2 === 0
                        ? "bg-[#a78bfa]"
                        : "bg-[#60a5fa]"
                    }`}
                  />

                  <span className="text-[11px] leading-6 text-white/[0.48]">
                    {principle}
                  </span>
                </div>

                <CheckCircle2
                  size={12}
                  className="shrink-0 text-white/20"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   OPERATING MODEL
========================================================= */

function OperatingModel() {
  const steps = [
    {
      number: "01",
      title: "Connect",
      text:
        "Bring relevant credit and financial information into governed data pipelines.",
    },
    {
      number: "02",
      title: "Structure",
      text:
        "Create reusable analytical features, definitions and contextual data layers.",
    },
    {
      number: "03",
      title: "Evaluate",
      text:
        "Integrate validated models and suitable analytical methods for the intended use case.",
    },
    {
      number: "04",
      title: "Control",
      text:
        "Connect analytical outputs with applicable policy, governance and review processes.",
    },
    {
      number: "05",
      title: "Monitor",
      text:
        "Track data quality, model behavior and operational performance after deployment.",
    },
  ];

  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="06">
          Operating Model
        </SectionLabel>

        <div className="mt-12 overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#050505]">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              whileHover={{
                backgroundColor: "rgba(255,255,255,.018)",
              }}
              className="grid gap-4 border-b border-white/[0.06] p-6 last:border-b-0 md:grid-cols-[70px_180px_1fr_30px] md:items-center"
            >
              <span className="font-mono text-[7px] text-[#a78bfa]">
                {step.number}
              </span>

              <span className="text-[12px] font-medium text-white/65">
                {step.title}
              </span>

              <span className="text-[10px] leading-6 text-white/35">
                {step.text}
              </span>

              <ArrowRight
                size={11}
                className={
                  index % 2 === 0
                    ? "text-[#a78bfa]/50"
                    : "text-[#60a5fa]/50"
                }
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-32 md:px-10 md:py-40">
      <div className="pointer-events-none absolute left-[18%] top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.07] blur-[170px]" />

      <div className="pointer-events-none absolute right-[18%] top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-[#2563eb]/[0.05] blur-[170px]" />

      <Container className="relative text-center">
        <div className="relative mx-auto flex h-[105px] w-[105px] items-center justify-center">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border border-dashed border-[#8b5cf6]/30"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[13px] rounded-full border border-dashed border-[#60a5fa]/20"
          />

          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/[0.08] bg-[#090909]">
            <ShieldCheck
              size={23}
              strokeWidth={1}
              className="text-[#c4b5fd]"
            />
          </div>
        </div>

        <h2 className="mx-auto mt-10 max-w-[1100px] text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
          Make risk

          <span className="block bg-gradient-to-r from-[#c4b5fd] via-white/35 to-[#60a5fa] bg-clip-text text-transparent">
            easier to understand.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[720px] text-[12px] leading-7 text-white/[0.43]">
          Build credit intelligence infrastructure that connects governed
          data, analytical models, policy controls, explainability and
          appropriate human review into one coherent workflow.
        </p>

        <a
          href="#credit-model"
          className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full bg-white px-9 py-4 text-[11px] font-medium text-black"
        >
          Explore Credit Intelligence
          <ArrowRight size={13} />
        </a>
      </Container>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function CreditRiskClient() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="overflow-x-hidden bg-[#050505] text-white">
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#8b5cf6] via-[#c4b5fd] to-[#60a5fa]"
      />

      <Hero />

      <RiskIntro />

      <RiskDimensions />

      <CreditArchitecture />

      <ScenarioLab />

      <Governance />

      <OperatingModel />

      <FinalCTA />
    </div>
  );
}