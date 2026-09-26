"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Eye,
  Gauge,
  GitBranch,
  RefreshCcw,
  Settings2,
  Workflow,
  Zap,
} from "lucide-react";

import type { ElementType, ReactNode } from "react";

/* =========================================================
   DATA
========================================================= */

const optimizationAreas = [
  {
    number: "01",
    Icon: Eye,
    title: "Experience Signals",
    text:
      "Understand how users interact with an experience before deciding what should be changed. Behavioral signals help teams identify friction, hesitation, abandonment and opportunities for improvement.",
  },
  {
    number: "02",
    Icon: GitBranch,
    title: "Controlled Variants",
    text:
      "Turn optimization ideas into controlled alternatives. Instead of replacing an experience based on opinion, teams can compare meaningful variants under defined experiment conditions.",
  },
  {
    number: "03",
    Icon: Activity,
    title: "Outcome Measurement",
    text:
      "Connect each experiment to outcomes that matter. Primary metrics, supporting metrics and guardrails create a more complete picture than a single conversion number.",
  },
  {
    number: "04",
    Icon: Gauge,
    title: "Performance Diagnosis",
    text:
      "Study where performance changes occur across the journey. Segment-level and funnel-level evidence can reveal whether an improvement is broad or concentrated in a specific audience.",
  },
  {
    number: "05",
    Icon: RefreshCcw,
    title: "Continuous Learning",
    text:
      "A completed test should generate another useful question. Optimization becomes stronger when previous evidence informs the next hypothesis instead of each test starting from zero.",
  },
  {
    number: "06",
    Icon: Workflow,
    title: "Optimization Operations",
    text:
      "Create a repeatable system for prioritizing opportunities, designing tests, monitoring evidence and documenting what the organization learns from experimentation.",
  },
];

const optimizationLoop = [
  {
    number: "01",
    title: "Observe",
    text: "Find meaningful friction and opportunity.",
  },
  {
    number: "02",
    title: "Hypothesize",
    text: "Define what could improve the experience.",
  },
  {
    number: "03",
    title: "Test",
    text: "Compare alternatives under controlled conditions.",
  },
  {
    number: "04",
    title: "Learn",
    text: "Interpret outcomes and supporting evidence.",
  },
  {
    number: "05",
    title: "Optimize",
    text: "Apply learning and create the next question.",
  },
];

const principles = [
  "Optimize meaningful outcomes, not vanity metrics.",
  "Change one important idea at a time when possible.",
  "Define success and guardrails before reading results.",
  "Understand why a variant changed behavior.",
  "Study important audience and journey segments carefully.",
  "Use completed experiments to improve future hypotheses.",
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

function Label({
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

      <span className="h-px w-8 bg-white/15" />

      <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/35">
        {children}
      </span>
    </div>
  );
}

function Micro({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/30">
      {children}
    </span>
  );
}

function LiveDot({ blue = false }: { blue?: boolean }) {
  return (
    <span className="relative flex h-2 w-2">
      <motion.span
        animate={{
          scale: [1, 2.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2.2,
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
      {/* grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      <div className="pointer-events-none absolute -left-[250px] top-[150px] h-[550px] w-[550px] rounded-full bg-[#7c3aed]/[0.08] blur-[180px]" />

      <div className="pointer-events-none absolute -right-[250px] top-[250px] h-[550px] w-[550px] rounded-full bg-[#2563eb]/[0.07] blur-[180px]" />

      <Container className="relative">
        {/* <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <LiveDot />

            <Micro>HYI / Testing & Optimization</Micro>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <Micro>Observe</Micro>
            <Micro>Test</Micro>
            <Micro>Measure</Micro>
            <Micro>Learn</Micro>
            <Micro>Improve</Micro>
          </div>
        </div> */}

        <div className="mx-auto max-w-[1050px] pt-20 text-center">
          {/* <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-4 py-2"
          >
            <Activity size={11} className="text-[#a78bfa]" />

            <Micro>Continuous Optimization Intelligence</Micro>
          </motion.div> */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 28,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
            }}
            className="mt-9 text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.82] tracking-[-0.085em]"
          >
            Test.

            <span className="block text-white/20">
              Understand.
            </span>

            <span className="block bg-gradient-to-r from-[#c4b5fd] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
              Improve.
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
              delay: 0.22,
            }}
            className="mx-auto mt-9 max-w-[760px] text-[14px] leading-8 text-white/[0.55]"
          >
            Testing and optimization is the discipline of improving digital
            experiences through controlled evidence rather than assumption.
            HYI helps teams connect behavioral signals, hypotheses,
            experimentation, measurement and continuous learning into one
            structured optimization system.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#optimization-lab"
              className="flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-medium text-black transition hover:bg-white/90"
            >
              Explore optimization lab
              <ArrowDown size={13} />
            </a>

            <a
              href="#hyi-optimization"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[11px] text-white/55 transition hover:bg-white/[0.05]"
            >
              How HYI works
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        <div id="optimization-lab" className="mt-20">
          <OptimizationLab />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   MAIN OPTIMIZATION LAB
========================================================= */

function OptimizationLab() {
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
        <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
              <Gauge size={14} className="text-[#a78bfa]" />
            </div>

            <div>
              <Micro>Optimization Intelligence Lab</Micro>

              <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.12em] text-white/15">
                EXPERIENCE / OPT-024
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LiveDot blue />
            <Micro>Analyzing opportunity</Micro>
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.25fr_.75fr]">
          <OptimizationRadar />
          <VariantPerformance />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <SignalModel />
          <OptimizationCurve />
          <LearningEngine />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   OPTIMIZATION RADAR
========================================================= */

function OptimizationRadar() {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505] p-6">
      <div className="flex items-center justify-between">
        <div>
          <Micro>Opportunity Radar</Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Experience signals mapped into optimization opportunities
          </p>
        </div>

        <Eye size={13} className="text-[#a78bfa]" />
      </div>

      <div className="relative mt-5 flex h-[330px] items-center justify-center">
        {/* rings */}

        {[300, 235, 170, 105].map((size, index) => (
          <div
            key={size}
            style={{
              width: size,
              height: size,
            }}
            className={`absolute rounded-full border ${
              index % 2 === 0
                ? "border-white/[0.06]"
                : "border-[#8b5cf6]/10"
            }`}
          />
        ))}

        {/* cross */}

        <div className="absolute h-[300px] w-px bg-gradient-to-b from-transparent via-white/[0.07] to-transparent" />

        <div className="absolute h-px w-[300px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

        {/* radar scanner */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[300px] w-[300px] rounded-full"
        >
          <div className="absolute left-1/2 top-1/2 h-px w-1/2 origin-left bg-gradient-to-r from-[#a78bfa] to-transparent shadow-[0_0_18px_rgba(167,139,250,.4)]" />

          <div
            className="absolute left-1/2 top-1/2 h-[140px] w-[140px] origin-top-left opacity-20"
            style={{
              background:
                "conic-gradient(from 270deg, rgba(139,92,246,.6), transparent 28deg)",
            }}
          />
        </motion.div>

        <RadarSignal
          className="left-[23%] top-[23%]"
          label="CTA friction"
          purple
        />

        <RadarSignal
          className="right-[17%] top-[38%]"
          label="Journey drop"
        />

        <RadarSignal
          className="bottom-[18%] left-[35%]"
          label="Message gap"
          purple
        />

        <RadarSignal
          className="bottom-[30%] right-[30%]"
          label="UX signal"
        />

        {/* core */}

        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(139,92,246,0)",
              "0 0 50px rgba(139,92,246,.18)",
              "0 0 0 rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
          }}
          className="absolute flex h-[84px] w-[84px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#09080d]"
        >
          <Gauge size={17} className="text-[#c4b5fd]" />

          <span className="mt-2 font-mono text-[5px] uppercase tracking-[0.1em] text-white/35">
            Optimize
          </span>
        </motion.div>
      </div>
    </div>
  );
}

function RadarSignal({
  className,
  label,
  purple = false,
}: {
  className: string;
  label: string;
  purple?: boolean;
}) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.55, 1, 0.55],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className={`absolute z-10 flex items-center gap-2 rounded-full border bg-[#090909] px-3 py-2 ${
        purple
          ? "border-[#8b5cf6]/25"
          : "border-[#60a5fa]/25"
      } ${className}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          purple ? "bg-[#a78bfa]" : "bg-[#60a5fa]"
        }`}
      />

      <span className="font-mono text-[5px] uppercase tracking-[0.09em] text-white/30">
        {label}
      </span>
    </motion.div>
  );
}

/* =========================================================
   VARIANT PERFORMANCE
========================================================= */

function VariantPerformance() {
  const variants = [
    {
      name: "Control",
      value: 63,
      label: "Baseline",
      color: "bg-white/25",
    },
    {
      name: "Variant A",
      value: 78,
      label: "Observed",
      color: "bg-[#8b5cf6]",
    },
    {
      name: "Variant B",
      value: 86,
      label: "Observed",
      color: "bg-[#60a5fa]",
    },
  ];

  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-[#050505] p-6">
      <div className="flex items-center justify-between">
        <Micro>Variant Comparison</Micro>

        <Activity size={13} className="text-[#60a5fa]" />
      </div>

      <div className="mt-9">
        <span className="block text-4xl font-semibold tracking-[-0.06em] text-white/90">
          Compare
        </span>

        <span className="mt-2 block font-mono text-[6px] uppercase tracking-[0.15em] text-[#a78bfa]">
          relative experience signals
        </span>
      </div>

      <div className="mt-10 space-y-7">
        {variants.map((variant, index) => (
          <div key={variant.name}>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-white/45">
                {variant.name}
              </span>

              <span className="font-mono text-[6px] uppercase tracking-[0.1em] text-white/20">
                {variant.label}
              </span>
            </div>

            <div className="mt-3 h-[5px] overflow-hidden rounded-full bg-white/[0.04]">
              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: `${variant.value}%`,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                }}
                className={`h-full rounded-full ${variant.color}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-9 rounded-[14px] border border-white/[0.06] bg-white/[0.015] p-4">
        <div className="flex items-center gap-2">
          <CircleDot size={9} className="text-[#a78bfa]" />
          <Micro>Important</Micro>
        </div>

        <p className="mt-3 text-[9px] leading-5 text-white/30">
          These visual values are illustrative interface data, not reported
          HYI customer performance results. Real optimization decisions
          depend on the experiment design and observed evidence.
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   SIGNAL MODEL
========================================================= */

function SignalModel() {
  return (
    <ModelCard title="Signal Map" Icon={Eye}>
      <div className="relative mt-7 h-[150px] overflow-hidden rounded-[12px] border border-white/[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,.07) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <SignalPoint
          className="left-[15%] top-[25%]"
          purple
        />

        <SignalPoint
          className="right-[20%] top-[20%]"
        />

        <SignalPoint
          className="bottom-[20%] left-[30%]"
        />

        <SignalPoint
          className="bottom-[30%] right-[28%]"
          purple
        />

        <motion.div
          animate={{
            x: ["-100%", "500%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 top-0 w-[60px] bg-gradient-to-r from-transparent via-[#8b5cf6]/[0.08] to-transparent"
        />
      </div>

      <p className="mt-4 text-[9px] leading-5 text-white/30">
        Behavioral signals help identify where the experience deserves
        deeper investigation before a hypothesis is created.
      </p>
    </ModelCard>
  );
}

function SignalPoint({
  className,
  purple = false,
}: {
  className: string;
  purple?: boolean;
}) {
  return (
    <motion.span
      animate={{
        scale: [1, 1.7, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
      }}
      className={`absolute h-2 w-2 rounded-full ${
        purple
          ? "bg-[#a78bfa] shadow-[0_0_14px_rgba(167,139,250,.7)]"
          : "bg-[#60a5fa] shadow-[0_0_14px_rgba(96,165,250,.7)]"
      } ${className}`}
    />
  );
}

/* =========================================================
   CURVE MODEL
========================================================= */

function OptimizationCurve() {
  return (
    <ModelCard title="Optimization Curve" Icon={Activity}>
      <div className="relative mt-7 h-[150px] overflow-hidden rounded-[12px] border border-white/[0.05] p-4">
        <div className="absolute bottom-5 left-5 top-5 w-px bg-white/[0.07]" />
        <div className="absolute bottom-5 left-5 right-5 h-px bg-white/[0.07]" />

        <svg
          viewBox="0 0 300 120"
          className="absolute inset-5 h-[110px] w-[calc(100%-40px)]"
          preserveAspectRatio="none"
          fill="none"
        >
          <motion.path
            d="M0 100 C35 95 45 78 80 80 C115 82 120 55 150 58 C190 62 195 30 230 35 C260 38 275 18 300 10"
            stroke="url(#curveGradient)"
            strokeWidth="2"
            initial={{
              pathLength: 0,
            }}
            whileInView={{
              pathLength: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.7,
            }}
          />

          <defs>
            <linearGradient
              id="curveGradient"
              x1="0"
              x2="1"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <p className="mt-4 text-[9px] leading-5 text-white/30">
        Optimization is usually cumulative. Many useful experiments can
        gradually improve understanding and product decisions over time.
      </p>
    </ModelCard>
  );
}

/* =========================================================
   LEARNING ENGINE
========================================================= */

function LearningEngine() {
  return (
    <ModelCard title="Learning Engine" Icon={RefreshCcw}>
      <div className="relative mt-7 flex h-[150px] items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[125px] w-[125px] rounded-full border border-dashed border-white/[0.08]"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[90px] w-[90px] rounded-full border border-dashed border-[#60a5fa]/20"
        />

        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(139,92,246,0)",
              "0 0 35px rgba(139,92,246,.18)",
              "0 0 0 rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.06]"
        >
          <RefreshCcw size={14} className="text-[#c4b5fd]" />
        </motion.div>

        <LearningChip
          text="Signal"
          className="left-[3%] top-[12%]"
        />

        <LearningChip
          text="Evidence"
          className="right-[0%] top-[16%]"
        />

        <LearningChip
          text="Learning"
          className="bottom-[7%] left-[12%]"
        />

        <LearningChip
          text="Next test"
          className="bottom-[4%] right-[2%]"
        />
      </div>

      <p className="text-[9px] leading-5 text-white/30">
        Every useful result should strengthen the next experiment by adding
        evidence to the organization&apos;s understanding of users.
      </p>
    </ModelCard>
  );
}

function LearningChip({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <motion.div
      animate={{
        opacity: [0.35, 1, 0.35],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className={`absolute rounded-full border border-white/[0.07] bg-[#090909] px-3 py-2 ${className}`}
    >
      <span className="font-mono text-[5px] uppercase tracking-[0.09em] text-white/30">
        {text}
      </span>
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
        y: -3,
      }}
      className="rounded-[18px] border border-white/[0.07] bg-[#050505] p-5"
    >
      <div className="flex items-center justify-between">
        <Micro>{title}</Micro>

        <Icon size={12} className="text-white/30" />
      </div>

      {children}
    </motion.article>
  );
}

/* =========================================================
   EDUCATIONAL SECTION
========================================================= */

function WhatIsOptimization() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10 md:py-32">
      <Container>
        <Label number="01">
          Testing & Optimization
        </Label>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="max-w-[650px] text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              Optimization is

              <span className="block text-white/20">
                a learning system.
              </span>
            </h2>
          </div>

          <div className="self-end">
            <p className="text-[14px] leading-8 text-white/[0.55]">
              Testing helps answer a controlled question. Optimization uses
              those answers to improve an experience over time. The goal is
              not to make endless random changes; it is to create a reliable
              process for identifying opportunities, testing meaningful
              hypotheses and converting evidence into better decisions.
            </p>

            <p className="mt-5 text-[12px] leading-7 text-white/[0.38]">
              This can include messaging, navigation, onboarding,
              conversion journeys, product interactions, feature
              presentation and many other parts of a digital experience.
              The right optimization target depends on the user problem and
              the business objective being studied.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-3">
          <KnowledgeCard
            number="01"
            title="Find the opportunity"
            text="Start with evidence about user behavior, product performance or business outcomes rather than choosing a page element at random."
          />

          <KnowledgeCard
            number="02"
            title="Test the hypothesis"
            text="Translate the opportunity into a clear statement about what change is expected to influence behavior and why."
          />

          <KnowledgeCard
            number="03"
            title="Build the learning"
            text="Use the experiment outcome to update what the team understands and to create stronger future optimization questions."
          />
        </div>
      </Container>
    </section>
  );
}

function KnowledgeCard({
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
        <span className="font-mono text-[7px] text-white/20">
          {number}
        </span>

        <CircleDot size={11} className="text-[#a78bfa]" />
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
   HYI OPTIMIZATION
========================================================= */

function HYIOptimization() {
  return (
    <section
      id="hyi-optimization"
      className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10 md:py-32"
    >
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Label number="02">
              How HYI Works
            </Label>

            <h2 className="mt-9 max-w-[720px] text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Turn optimization into

              <span className="text-white/20">
                {" "}a repeatable capability.
              </span>
            </h2>
          </div>

          <p className="max-w-[440px] text-[12px] leading-7 text-white/40">
            HYI approaches optimization as an end-to-end experimentation
            workflow: understand the opportunity, define the hypothesis,
            implement measurement, run the test, interpret evidence and
            preserve the learning.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {optimizationAreas.map(
            (
              {
                number,
                Icon,
                title,
                text,
              },
              index,
            ) => (
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
                className="min-h-[260px] rounded-[18px] border border-white/[0.07] bg-[#050505] p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">
                    <Icon
                      size={14}
                      strokeWidth={1.3}
                      className="text-[#a78bfa]"
                    />
                  </div>

                  <span className="font-mono text-[6px] text-white/20">
                    {number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-medium tracking-[-0.035em] text-white/80">
                  {title}
                </h3>

                <p className="mt-4 text-[11px] leading-6 text-white/[0.42]">
                  {text}
                </p>
              </motion.article>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   CONTINUOUS OPTIMIZATION LOOP
========================================================= */

function ContinuousLoop() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div className="self-center">
            <Label number="03">
              Continuous Improvement
            </Label>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-6xl">
              Learning should

              <span className="block text-white/20">
                create momentum.
              </span>
            </h2>

            <p className="mt-7 max-w-[440px] text-[12px] leading-7 text-white/[0.43]">
              A mature testing program does not treat every experiment as
              an isolated project. Each observation can improve the quality
              of the next hypothesis, helping the optimization system become
              more informed over time.
            </p>
          </div>

          <OptimizationLoopModel />
        </div>
      </Container>
    </section>
  );
}

function OptimizationLoopModel() {
  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[25px] border border-white/[0.08] bg-[#080808] p-6">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative flex items-center justify-between">
        <div>
          <Micro>Continuous Optimization Loop</Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Evidence becomes the input for the next question
          </p>
        </div>

        <RefreshCcw size={13} className="text-[#60a5fa]" />
      </div>

      <div className="relative mt-5 flex h-[390px] items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[330px] w-[330px] rounded-full border border-dashed border-white/[0.07]"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[255px] w-[255px] rounded-full border border-dashed border-[#8b5cf6]/15"
        />

        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(139,92,246,0)",
              "0 0 65px rgba(139,92,246,.15)",
              "0 0 0 rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute flex h-[135px] w-[135px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#09080d]"
        >
          <Gauge size={21} className="text-[#c4b5fd]" />

          <span className="mt-4 font-mono text-[6px] uppercase tracking-[0.13em] text-white/40">
            Optimization
          </span>

          <span className="mt-1 font-mono text-[5px] uppercase tracking-[0.1em] text-[#60a5fa]/60">
            continuous
          </span>
        </motion.div>

        {optimizationLoop.map((item, index) => (
          <LoopNode
            key={item.title}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function LoopNode({
  item,
  index,
}: {
  item: {
    number: string;
    title: string;
    text: string;
  };
  index: number;
}) {
  const positions = [
    "left-1/2 top-[1%] -translate-x-1/2",
    "right-[5%] top-[25%]",
    "bottom-[5%] right-[12%]",
    "bottom-[5%] left-[12%]",
    "left-[5%] top-[25%]",
  ];

  const purple = index % 2 === 0;

  return (
    <motion.div
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 4 + index * 0.3,
        repeat: Infinity,
      }}
      className={`absolute z-10 w-[125px] rounded-[13px] border bg-[#090909] p-3 ${
        purple
          ? "border-[#8b5cf6]/20"
          : "border-[#60a5fa]/20"
      } ${positions[index]}`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            purple ? "bg-[#a78bfa]" : "bg-[#60a5fa]"
          }`}
        />

        <span className="font-mono text-[5px] text-white/15">
          {item.number}
        </span>
      </div>

      <span className="mt-3 block text-[9px] font-medium text-white/60">
        {item.title}
      </span>

      <span className="mt-1.5 block text-[6px] leading-3 text-white/20">
        {item.text}
      </span>
    </motion.div>
  );
}

/* =========================================================
   PRINCIPLES
========================================================= */

function Principles() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-24 md:px-10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <Label number="04">
              Optimization Principles
            </Label>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em]">
              Better tests need

              <span className="block text-white/20">
                better questions.
              </span>
            </h2>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505]">
            {principles.map((principle, index) => (
              <motion.div
                key={principle}
                initial={{
                  opacity: 0,
                  x: 10,
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

                  <span className="text-[11px] leading-6 text-white/[0.5]">
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
   FINAL CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-32 md:px-10 md:py-40">
      <div className="pointer-events-none absolute left-[10%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.07] blur-[160px]" />

      <div className="pointer-events-none absolute right-[10%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#2563eb]/[0.06] blur-[160px]" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 76%)",
        }}
      />

      <Container className="relative text-center">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04] px-4 py-2">
          <Zap size={11} className="text-[#a78bfa]" />

          <Micro>HYI Optimization Intelligence</Micro>
        </div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mt-9 max-w-[1050px] text-[clamp(3.6rem,7vw,7rem)] font-semibold leading-[0.84] tracking-[-0.075em]"
        >
          Every test creates

          <span className="block bg-gradient-to-r from-[#c4b5fd] via-white/35 to-[#60a5fa] bg-clip-text text-transparent">
            the next opportunity.
          </span>
        </motion.h2>

        <p className="mx-auto mt-8 max-w-[680px] text-[12px] leading-7 text-white/[0.44]">
          Build an experimentation practice where observation becomes a
          hypothesis, hypotheses become controlled tests and evidence
          becomes the foundation for continuous digital improvement.
        </p>

        <a
          href="#optimization-lab"
          className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full bg-white px-9 py-4 text-[11px] font-medium text-black transition hover:bg-white/90"
        >
          Explore optimization system
          <ArrowRight size={13} />
        </a>
      </Container>
    </section>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function TestingOptimizationClient() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="overflow-x-hidden bg-[#050505] text-white">
      {/* scroll progress */}

      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#8b5cf6] via-[#c4b5fd] to-[#60a5fa]"
      />

      <Hero />

      <WhatIsOptimization />

      <HYIOptimization />

      <ContinuousLoop />

      <Principles />

      <FinalCTA />
    </div>
  );
}