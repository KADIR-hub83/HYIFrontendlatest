"use client";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Database,
  Eye,
  Gauge,
  GitBranch,
  Layers3,
  Network,
  Server,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import type {
  ElementType,
  ReactNode,
} from "react";


/* ============================================================
   DATA
============================================================ */

const analysisSteps = [
  {
    number: "01",
    Icon: Database,
    title: "Validate experiment data",
    text:
      "Before interpreting performance, HYI reviews exposure, assignment, event collection and metric availability so the analysis starts from a trustworthy dataset.",
  },
  {
    number: "02",
    Icon: Activity,
    title: "Estimate the observed effect",
    text:
      "We compare experiment groups and quantify the observed difference in the primary outcome instead of relying only on raw conversion totals.",
  },
  {
    number: "03",
    Icon: Gauge,
    title: "Measure uncertainty",
    text:
      "An observed lift is not enough by itself. Statistical analysis also examines the uncertainty surrounding that estimate.",
  },
  {
    number: "04",
    Icon: ShieldCheck,
    title: "Inspect guardrails",
    text:
      "Supporting metrics help determine whether an improvement in one outcome is accompanied by deterioration somewhere else.",
  },
  {
    number: "05",
    Icon: Network,
    title: "Understand segments",
    text:
      "Where appropriate, results can be explored across meaningful dimensions while avoiding unsupported conclusions from noisy subgroup comparisons.",
  },
  {
    number: "06",
    Icon: Workflow,
    title: "Translate evidence",
    text:
      "The final output connects statistical evidence with the original hypothesis, product context and the decision the experiment was designed to inform.",
  },
];


const principles = [
  {
    number: "01",
    title: "Effect before excitement",
    text:
      "A large-looking percentage is not automatically meaningful. The effect should be interpreted together with baseline performance, uncertainty and business context.",
  },
  {
    number: "02",
    title: "Uncertainty is information",
    text:
      "Statistical analysis does not remove uncertainty. It helps teams understand how much uncertainty remains around an estimated effect.",
  },
  {
    number: "03",
    title: "Metrics need context",
    text:
      "Primary metrics, diagnostic metrics and guardrails answer different questions. Reading them together produces a more complete experiment story.",
  },
  {
    number: "04",
    title: "Learning survives a neutral result",
    text:
      "An experiment can still produce useful knowledge when evidence does not support the expected effect.",
  },
];


const metricRows = [
  {
    label: "Primary conversion",
    control: "4.28%",
    variant: "4.61%",
    delta: "+0.33 pp",
    width: 74,
  },
  {
    label: "Completion",
    control: "61.2%",
    variant: "63.0%",
    delta: "+1.8 pp",
    width: 82,
  },
  {
    label: "Error rate",
    control: "1.84%",
    variant: "1.79%",
    delta: "-0.05 pp",
    width: 46,
  },
];


const pipeline = [
  {
    number: "01",
    title: "Collect",
    text: "Exposure and outcome data",
  },
  {
    number: "02",
    title: "Validate",
    text: "Quality and assignment checks",
  },
  {
    number: "03",
    title: "Estimate",
    text: "Effect and uncertainty",
  },
  {
    number: "04",
    title: "Interpret",
    text: "Metrics and guardrails",
  },
  {
    number: "05",
    title: "Decide",
    text: "Evidence connected to action",
  },
];


/* ============================================================
   SHARED
============================================================ */

function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1400px] ${className}`}
    >
      {children}
    </div>
  );
}


function Eyebrow({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">

      <span className="h-[1px] w-8 bg-white/30" />

      <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/35">
        {children}
      </span>

    </div>
  );
}


function MicroLabel({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="font-mono text-[6px] uppercase tracking-[0.14em] text-white/25">
      {children}
    </span>
  );
}


function LiveDot({
  tone = "purple",
}: {
  tone?: "purple" | "blue";
}) {
  const bg =
    tone === "blue"
      ? "bg-[#60a5fa]"
      : "bg-[#a78bfa]";

  return (
    <span className="relative flex h-2 w-2">

      <span
        className={`absolute inline-flex h-full w-full animate-ping rounded-full ${bg} opacity-40`}
      />

      <span
        className={`relative inline-flex h-2 w-2 rounded-full ${bg}`}
      />

    </span>
  );
}


/* ============================================================
   HERO
============================================================ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5  md:px-10 md:pb-32">

      {/* GRID */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 88%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 88%)",
        }}
      />


      {/* PURPLE GLOW */}

      <div className="pointer-events-none absolute -left-[250px] top-[100px] h-[600px] w-[600px] rounded-full bg-[#7c3aed]/[0.08] blur-[180px]" />


      {/* BLUE GLOW */}

      <div className="pointer-events-none absolute -right-[250px] top-[250px] h-[650px] w-[650px] rounded-full bg-[#2563eb]/[0.08] blur-[190px]" />


      <Container className="relative">

        {/* TOP BAR */}

        {/* <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">

          <div className="flex items-center gap-3">

            <LiveDot />

            <MicroLabel>
              HYI / Statistical Intelligence
            </MicroLabel>

          </div>


          <div className="hidden items-center gap-7 md:flex">

            <MicroLabel>
              Effect
            </MicroLabel>

            <MicroLabel>
              Uncertainty
            </MicroLabel>

            <MicroLabel>
              Evidence
            </MicroLabel>

            <MicroLabel>
              Decision
            </MicroLabel>

          </div>

        </div> */}


        {/* CENTERED HERO */}

        <div className="mx-auto max-w-[1100px] pt-20 text-center">

          {/* <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2"
          >
            <Activity
              size={11}
              className="text-[#a78bfa]"
            />

            <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/45">
              Statistical Analysis
            </span>

          </motion.div> */}


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
              duration: 0.8,
              delay: 0.08,
            }}
            className="mt-9 text-[clamp(4rem,8.5vw,8.4rem)] font-semibold leading-[0.82] tracking-[-0.085em]"
          >
            Turn experiment

            <span className="block text-white/20">
              data into
            </span>

            <span className="block bg-gradient-to-r from-[#a78bfa] via-white/90 to-[#60a5fa] bg-clip-text text-transparent">
              evidence.
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
              duration: 0.7,
              delay: 0.22,
            }}
            className="mx-auto mt-9 max-w-[780px] text-[14px] leading-8 text-white/[0.55]"
          >
            Statistical analysis helps teams understand whether an
            observed experiment difference represents useful evidence
            or could reasonably be explained by uncertainty. HYI
            combines experiment context, effect estimation, uncertainty,
            guardrail analysis and careful interpretation to turn test
            results into decision-ready learning.
          </motion.p>


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
              delay: 0.36,
            }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >

            <a
              href="#analysis-lab"
              className="flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-medium text-black transition hover:bg-white/90"
            >
              Enter analysis lab

              <ArrowDown size={13} />
            </a>


            <a
              href="#hyi-method"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[11px] text-white/55 transition hover:bg-white/[0.05]"
            >
              HYI methodology

              <ArrowRight size={13} />
            </a>

          </motion.div>

        </div>


        {/* MAIN HERO MODEL */}

        <div
          id="analysis-lab"
          className="mt-20"
        >
          <StatisticalLab />
        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   STATISTICAL LAB
============================================================ */

function StatisticalLab() {
  return (
    <div className="relative mx-auto max-w-[1250px] overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#080808] p-5 md:p-7">

      {/* MODEL GRID */}

      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />


      <div className="relative">

        {/* HEADER */}

        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
              <Activity
                size={13}
                className="text-[#a78bfa]"
              />
            </div>


            <div>

              <MicroLabel>
                Statistical Analysis Lab
              </MicroLabel>

              <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.12em] text-white/15">
                Experiment EXP-042
              </span>

            </div>

          </div>


          <div className="flex items-center gap-3">

            <LiveDot tone="blue" />

            <MicroLabel>
              Analysis ready
            </MicroLabel>

          </div>

        </div>


        {/* MODEL GRID */}

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.35fr_.65fr]">

          <DistributionModel />

          <SignificanceModel />

        </div>


        <div className="mt-4 grid gap-4 md:grid-cols-3">

          <ConfidenceModel />

          <SampleModel />

          <EvidenceModel />

        </div>


        <div className="mt-4">

          <MetricComparisonModel />

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   DISTRIBUTION MODEL
============================================================ */

function DistributionModel() {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#050505] p-6">

      <div className="flex items-center justify-between">

        <div>
          <MicroLabel>
            Distribution Explorer
          </MicroLabel>

          <p className="mt-2 text-[9px] text-white/25">
            Control and variant outcome distributions
          </p>
        </div>


        <div className="flex items-center gap-4">

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8b5cf6]" />

            <MicroLabel>
              Control
            </MicroLabel>
          </div>


          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" />

            <MicroLabel>
              Variant
            </MicroLabel>
          </div>

        </div>

      </div>


      <div className="relative mt-7 h-[280px] overflow-hidden rounded-[14px] border border-white/[0.06] bg-[#070707]">

        {/* GRID */}

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />


        {/* SCAN LINE */}

        <motion.div
          animate={{
            x: [
              "-5%",
              "900%",
              "-5%",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 top-0 z-10 w-[1px] bg-gradient-to-b from-transparent via-[#a78bfa]/60 to-transparent"
        />


        <svg
          viewBox="0 0 800 280"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >

          {/* CONTROL AREA */}

          <defs>

            <linearGradient
              id="purpleDistribution"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#8b5cf6"
                stopOpacity=".28"
              />

              <stop
                offset="100%"
                stopColor="#8b5cf6"
                stopOpacity="0"
              />
            </linearGradient>


            <linearGradient
              id="blueDistribution"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#60a5fa"
                stopOpacity=".25"
              />

              <stop
                offset="100%"
                stopColor="#60a5fa"
                stopOpacity="0"
              />
            </linearGradient>

          </defs>


          <motion.path
            d="
              M0 250
              C90 250 110 235 150 215
              C205 188 225 100 300 72
              C370 45 410 120 450 175
              C490 230 560 248 800 250
              L800 280
              L0 280
              Z
            "
            fill="url(#purpleDistribution)"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
          />


          <motion.path
            d="
              M0 250
              C120 250 185 242 230 218
              C290 185 315 95 390 66
              C465 36 500 105 545 165
              C590 225 650 246 800 250
              L800 280
              L0 280
              Z
            "
            fill="url(#blueDistribution)"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
          />


          {/* PURPLE CURVE */}

          <motion.path
            d="
              M0 250
              C90 250 110 235 150 215
              C205 188 225 100 300 72
              C370 45 410 120 450 175
              C490 230 560 248 800 250
            "
            fill="none"
            stroke="#a78bfa"
            strokeWidth="2"
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />


          {/* BLUE CURVE */}

          <motion.path
            d="
              M0 250
              C120 250 185 242 230 218
              C290 185 315 95 390 66
              C465 36 500 105 545 165
              C590 225 650 246 800 250
            "
            fill="none"
            stroke="#60a5fa"
            strokeWidth="2"
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 2,
              delay: 0.25,
              ease: "easeInOut",
            }}
          />

        </svg>


        {/* MEAN CONTROL */}

        <div className="absolute bottom-[20px] left-[37%] top-[35px] border-l border-dashed border-[#a78bfa]/30">

          <span className="absolute left-2 top-0 whitespace-nowrap font-mono text-[6px] uppercase tracking-[0.12em] text-[#a78bfa]/70">
            μ Control
          </span>

        </div>


        {/* MEAN VARIANT */}

        <div className="absolute bottom-[20px] left-[49%] top-[35px] border-l border-dashed border-[#60a5fa]/30">

          <span className="absolute left-2 top-5 whitespace-nowrap font-mono text-[6px] uppercase tracking-[0.12em] text-[#60a5fa]/70">
            μ Variant
          </span>

        </div>


        <div className="absolute bottom-4 left-5">
          <MicroLabel>
            Lower outcome
          </MicroLabel>
        </div>


        <div className="absolute bottom-4 right-5">
          <MicroLabel>
            Higher outcome
          </MicroLabel>
        </div>

      </div>


      <div className="mt-5 grid grid-cols-3 divide-x divide-white/[0.06] rounded-[12px] border border-white/[0.06] bg-white/[0.015]">

        <StatCell
          label="Observed effect"
          value="+7.71%"
        />

        <StatCell
          label="Difference"
          value="+0.33 pp"
        />

        <StatCell
          label="Status"
          value="Review"
        />

      </div>


      <p className="mt-4 text-[9px] leading-5 text-white/25">
        Illustrative interface data only. These values demonstrate how
        an experiment analysis view can communicate observed effects and
        are not HYI customer performance claims.
      </p>

    </div>
  );
}


function StatCell({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="p-4">

      <MicroLabel>
        {label}
      </MicroLabel>

      <span className="mt-2 block font-mono text-[12px] text-white/70">
        {value}
      </span>

    </div>
  );
}


/* ============================================================
   SIGNIFICANCE MODEL
============================================================ */

function SignificanceModel() {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#050505] p-6">

      <div className="flex items-center justify-between">

        <MicroLabel>
          Evidence Meter
        </MicroLabel>

        <Gauge
          size={12}
          className="text-[#a78bfa]"
        />

      </div>


      <div className="relative mx-auto mt-8 flex aspect-square max-w-[270px] items-center justify-center">

        {/* GLOW */}

        <div className="absolute inset-[15%] rounded-full bg-[#7c3aed]/10 blur-[35px]" />


        {/* OUTER RING */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border border-dashed border-white/[0.08]"
        />


        {/* SECOND RING */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[10%] rounded-full border border-dashed border-[#60a5fa]/20"
        />


        {/* THIRD RING */}

        <div className="absolute inset-[20%] rounded-full border border-[#8b5cf6]/20" />


        {/* PROGRESS RING */}

        <svg
          viewBox="0 0 200 200"
          className="absolute inset-[14%] h-[72%] w-[72%] -rotate-90"
        >

          <circle
            cx="100"
            cy="100"
            r="88"
            fill="none"
            stroke="rgba(255,255,255,.04)"
            strokeWidth="4"
          />


          <motion.circle
            cx="100"
            cy="100"
            r="88"
            fill="none"
            stroke="url(#evidenceGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="553"
            initial={{
              strokeDashoffset: 553,
            }}
            whileInView={{
              strokeDashoffset: 110,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 2,
            }}
          />


          <defs>
            <linearGradient
              id="evidenceGradient"
              x1="0"
              x2="1"
            >
              <stop
                offset="0"
                stopColor="#8b5cf6"
              />

              <stop
                offset="1"
                stopColor="#60a5fa"
              />
            </linearGradient>
          </defs>

        </svg>


        <div className="relative z-10 text-center">

          <MicroLabel>
            Evidence
          </MicroLabel>

          <span className="mt-2 block text-4xl font-semibold tracking-[-0.06em] text-white/90">
            80
          </span>

          <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.15em] text-white/25">
            illustrative index
          </span>

        </div>

      </div>


      <div className="mt-6 border-t border-white/[0.07] pt-5">

        <p className="text-[10px] leading-6 text-white/[0.38]">
          Statistical evidence should be interpreted alongside effect
          size, uncertainty, experiment quality and the original
          decision context rather than through a single threshold alone.
        </p>

      </div>

    </div>
  );
}


/* ============================================================
   CONFIDENCE INTERVAL MODEL
============================================================ */

function ConfidenceModel() {
  return (
    <SmallModel
      label="Uncertainty Range"
      Icon={Activity}
    >

      <div className="mt-8">

        <div className="flex items-center justify-between">

          <MicroLabel>
            Relative effect
          </MicroLabel>

          <span className="font-mono text-[8px] text-[#a78bfa]">
            +7.7%
          </span>

        </div>


        <div className="relative mt-7 h-[65px]">

          {/* BASELINE */}

          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/[0.08]" />


          {/* ZERO */}

          <div className="absolute bottom-1 top-1 left-[38%] w-[1px] bg-white/[0.13]">

            <span className="absolute -bottom-5 -translate-x-1/2 font-mono text-[5px] text-white/20">
              0
            </span>

          </div>


          {/* INTERVAL */}

          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            style={{
              transformOrigin: "left",
            }}
            className="absolute left-[44%] top-1/2 h-[2px] w-[42%] bg-gradient-to-r from-[#8b5cf6] to-[#60a5fa]"
          />


          <div className="absolute left-[44%] top-1/2 h-3 w-[1px] -translate-y-1/2 bg-[#a78bfa]" />

          <div className="absolute left-[86%] top-1/2 h-3 w-[1px] -translate-y-1/2 bg-[#60a5fa]" />


          {/* POINT */}

          <motion.div
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.7,
            }}
            className="absolute left-[66%] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#050505] bg-white shadow-[0_0_18px_rgba(139,92,246,.5)]"
          />

        </div>


        <p className="mt-6 text-[9px] leading-5 text-white/30">
          An interval visual communicates a range of estimates compatible
          with the analysis assumptions rather than pretending the effect
          is known exactly.
        </p>

      </div>

    </SmallModel>
  );
}


/* ============================================================
   SAMPLE MODEL
============================================================ */

function SampleModel() {
  const dots = Array.from({
    length: 40,
  });

  return (
    <SmallModel
      label="Traffic Sample"
      Icon={Network}
    >

      <div className="mt-7 grid grid-cols-8 gap-2">

        {dots.map((_, index) => {

          const control =
            index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0.1,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.018,
              }}
              className={`aspect-square rounded-[4px] border ${
                control
                  ? "border-[#8b5cf6]/25 bg-[#8b5cf6]/10"
                  : "border-[#60a5fa]/25 bg-[#60a5fa]/10"
              }`}
            />
          );
        })}

      </div>


      <div className="mt-6 flex items-center justify-between">

        <div className="flex items-center gap-2">

          <span className="h-1.5 w-1.5 rounded-full bg-[#8b5cf6]" />

          <MicroLabel>
            Control
          </MicroLabel>

        </div>


        <div className="flex items-center gap-2">

          <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" />

          <MicroLabel>
            Variant
          </MicroLabel>

        </div>

      </div>


      <p className="mt-5 text-[9px] leading-5 text-white/30">
        Exposure volume affects the precision available to estimate
        differences between experiment groups.
      </p>

    </SmallModel>
  );
}


/* ============================================================
   EVIDENCE MODEL
============================================================ */

function EvidenceModel() {
  return (
    <SmallModel
      label="Evidence Flow"
      Icon={GitBranch}
    >

      <div className="relative mt-7 h-[150px]">

        <svg
          viewBox="0 0 400 150"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >

          <motion.path
            d="M40 75 H140"
            stroke="rgba(167,139,250,.35)"
            strokeDasharray="4 6"
            animate={{
              strokeDashoffset: [0, -30],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />


          <motion.path
            d="M190 75 H290"
            stroke="rgba(96,165,250,.35)"
            strokeDasharray="4 6"
            animate={{
              strokeDashoffset: [0, -30],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

        </svg>


        <EvidenceNode
          className="left-0 top-1/2 -translate-y-1/2"
          label="Data"
        />


        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(139,92,246,0)",
              "0 0 30px rgba(139,92,246,.16)",
              "0 0 0 rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 flex h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.07]"
        >
          <Activity
            size={15}
            className="text-[#a78bfa]"
          />
        </motion.div>


        <EvidenceNode
          className="right-0 top-1/2 -translate-y-1/2"
          label="Decision"
        />

      </div>


      <p className="text-[9px] leading-5 text-white/30">
        HYI connects statistical output back to the question the
        experiment was designed to answer.
      </p>

    </SmallModel>
  );
}


function EvidenceNode({
  className,
  label,
}: {
  className: string;
  label: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -3, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className={`absolute z-10 flex h-[50px] w-[72px] items-center justify-center rounded-[10px] border border-white/[0.08] bg-[#090909] ${className}`}
    >
      <MicroLabel>
        {label}
      </MicroLabel>
    </motion.div>
  );
}


/* ============================================================
   SMALL MODEL
============================================================ */

function SmallModel({
  label,
  Icon,
  children,
}: {
  label: string;
  Icon: ElementType;
  children: ReactNode;
}) {
  return (
    <motion.article
      whileHover={{
        y: -3,
      }}
      className="rounded-[18px] border border-white/[0.08] bg-[#050505] p-6"
    >

      <div className="flex items-center justify-between">

        <MicroLabel>
          {label}
        </MicroLabel>

        <Icon
          size={12}
          className="text-white/30"
        />

      </div>

      {children}

    </motion.article>
  );
}


/* ============================================================
   METRIC COMPARISON MODEL
============================================================ */

function MetricComparisonModel() {
  return (
    <div className="rounded-[18px] border border-white/[0.08] bg-[#050505] p-6">

      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

        <div>

          <MicroLabel>
            Metric Comparison
          </MicroLabel>

          <p className="mt-2 text-[9px] text-white/25">
            Primary outcome and supporting guardrails
          </p>

        </div>


        <div className="flex items-center gap-5">

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8b5cf6]" />

            <MicroLabel>
              Control
            </MicroLabel>
          </div>


          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" />

            <MicroLabel>
              Variant
            </MicroLabel>
          </div>

        </div>

      </div>


      <div className="mt-6 space-y-3">

        {metricRows.map(
          (
            item,
            index,
          ) => (
            <div
              key={item.label}
              className="grid items-center gap-4 rounded-[12px] border border-white/[0.06] bg-white/[0.015] p-4 md:grid-cols-[1fr_1.6fr_.7fr]"
            >

              <div>

                <MicroLabel>
                  {item.label}
                </MicroLabel>


                <div className="mt-2 flex gap-4 font-mono text-[8px]">

                  <span className="text-[#a78bfa]">
                    {item.control}
                  </span>

                  <span className="text-[#60a5fa]">
                    {item.variant}
                  </span>

                </div>

              </div>


              <div className="relative h-[6px] overflow-hidden rounded-full bg-white/[0.04]">

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${item.width}%`,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                  }}
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#60a5fa]"
                />

              </div>


              <span className="text-right font-mono text-[8px] text-white/45">
                {item.delta}
              </span>

            </div>
          ),
        )}

      </div>

    </div>
  );
}


/* ============================================================
   STATISTICS EXPLANATION
============================================================ */

function UnderstandingStatistics() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10 md:py-32">

      <Container>

        <Eyebrow>
          01 / READING THE EVIDENCE
        </Eyebrow>


        <div className="mt-10 grid gap-12 lg:grid-cols-[.95fr_1.05fr]">

          <div>

            <h2 className="max-w-[720px] text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              A result is more

              <span className="block text-white/20">
                than one number.
              </span>
            </h2>

          </div>


          <div className="self-end">

            <p className="text-[14px] leading-8 text-white/[0.55]">
              When two experiment groups perform differently, the
              observed difference is only the beginning of the analysis.
              Teams also need to understand how precisely that effect has
              been estimated, whether the data collection behaved as
              expected and whether important supporting outcomes moved.
            </p>


            <p className="mt-5 text-[12px] leading-7 text-white/[0.38]">
              HYI structures statistical analysis around the complete
              evidence picture rather than reducing an experiment to a
              single green or red indicator.
            </p>

          </div>

        </div>


        <div className="mt-16 grid gap-3 md:grid-cols-3">

          <KnowledgeCard
            number="01"
            title="Effect size"
            text="Describes the magnitude and direction of the observed difference between experiment groups."
          />

          <KnowledgeCard
            number="02"
            title="Uncertainty"
            text="Communicates how much precision the available experiment data provides around an estimated effect."
          />

          <KnowledgeCard
            number="03"
            title="Guardrails"
            text="Help identify whether movement in the primary outcome is accompanied by undesirable changes elsewhere."
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
      className="rounded-[18px] border border-white/[0.08] bg-[#080808] p-7"
    >

      <div className="flex items-center justify-between">

        <span className="font-mono text-[7px] text-white/20">
          {number}
        </span>

        <CircleDot
          size={11}
          className="text-[#a78bfa]/60"
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


/* ============================================================
   ANALYSIS SYSTEM
============================================================ */

function AnalysisSystem() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10 md:py-32">

      <Container>

        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">

          <div>

            <Eyebrow>
              02 / ANALYSIS SYSTEM
            </Eyebrow>


            <h2 className="mt-8 max-w-[700px] text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              What HYI examines

              <span className="text-white/20">
                {" "}after a test.
              </span>
            </h2>

          </div>


          <p className="max-w-[420px] text-[12px] leading-7 text-white/40">
            Each analytical layer answers a different question about the
            experiment and helps reduce the risk of interpreting an
            isolated metric without context.
          </p>

        </div>


        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">

          {analysisSteps.map(
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
                  y: -3,
                }}
                className="min-h-[245px] rounded-[18px] border border-white/[0.08] bg-[#050505] p-6"
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


/* ============================================================
   CORRELATION MODEL SECTION
============================================================ */

function CorrelationSection() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10 md:py-32">

      <Container>

        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">

          <div className="self-center">

            <Eyebrow>
              03 / METRIC CONTEXT
            </Eyebrow>


            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-6xl">
              Metrics move

              <span className="block text-white/20">
                together.
              </span>
            </h2>


            <p className="mt-7 max-w-[470px] text-[12px] leading-7 text-white/[0.43]">
              Experiments can affect multiple parts of a user journey.
              HYI looks beyond the primary metric to understand related
              behavioral signals and guardrails that can change how the
              result should be interpreted.
            </p>

          </div>


          <CorrelationModel />

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   CORRELATION NETWORK
============================================================ */

function CorrelationModel() {
  return (
    <div className="relative min-h-[470px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#080808] p-6">

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />


      <div className="relative flex items-center justify-between">

        <div>
          <MicroLabel>
            Metric Relationship Map
          </MicroLabel>

          <p className="mt-2 text-[9px] text-white/25">
            Behavioral signals surrounding the primary outcome
          </p>
        </div>

        <Network
          size={13}
          className="text-[#60a5fa]"
        />

      </div>


      <div className="relative mt-6 h-[360px]">

        {/* SVG CONNECTIONS */}

        <svg
          viewBox="0 0 800 360"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >

          {[
            "M400 180 L120 75",
            "M400 180 L680 80",
            "M400 180 L105 285",
            "M400 180 L690 285",
            "M400 180 L400 30",
            "M400 180 L400 330",
          ].map(
            (
              path,
              index,
            ) => (
              <motion.path
                key={path}
                d={path}
                stroke={
                  index % 2 === 0
                    ? "rgba(167,139,250,.25)"
                    : "rgba(96,165,250,.25)"
                }
                strokeWidth="1"
                strokeDasharray="5 8"
                animate={{
                  strokeDashoffset: [
                    0,
                    -40,
                  ],
                }}
                transition={{
                  duration: 4 + index * 0.25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ),
          )}

        </svg>


        <MetricNode
          className="left-[6%] top-[10%]"
          label="Engagement"
          tone="purple"
        />

        <MetricNode
          className="right-[5%] top-[12%]"
          label="Completion"
          tone="blue"
        />

        <MetricNode
          className="bottom-[8%] left-[4%]"
          label="Errors"
          tone="blue"
        />

        <MetricNode
          className="bottom-[8%] right-[4%]"
          label="Retention"
          tone="purple"
        />

        <MetricNode
          className="left-1/2 top-0 -translate-x-1/2"
          label="Latency"
          tone="blue"
        />

        <MetricNode
          className="bottom-0 left-1/2 -translate-x-1/2"
          label="Guardrail"
          tone="purple"
        />


        {/* CORE */}

        <motion.div
          animate={{
            scale: [
              1,
              1.035,
              1,
            ],
            boxShadow: [
              "0 0 0 rgba(139,92,246,0)",
              "0 0 60px rgba(139,92,246,.14)",
              "0 0 0 rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.055]"
        >

          <Activity
            size={20}
            strokeWidth={1.2}
            className="text-[#a78bfa]"
          />


          <span className="mt-3 font-mono text-[6px] uppercase tracking-[0.14em] text-white/35">
            Primary
          </span>


          <span className="mt-1 text-[10px] text-white/65">
            Conversion
          </span>

        </motion.div>

      </div>

    </div>
  );
}


function MetricNode({
  className,
  label,
  tone,
}: {
  className: string;
  label: string;
  tone: "purple" | "blue";
}) {
  return (
    <motion.div
      animate={{
        y: [
          0,
          -4,
          0,
        ],
      }}
      transition={{
        duration:
          tone === "purple"
            ? 4
            : 5,
        repeat: Infinity,
      }}
      className={`absolute z-10 rounded-[12px] border bg-[#0a0a0a] px-4 py-3 ${
        tone === "purple"
          ? "border-[#8b5cf6]/20"
          : "border-[#60a5fa]/20"
      } ${className}`}
    >

      <div className="flex items-center gap-2">

        <span
          className={`h-1.5 w-1.5 rounded-full ${
            tone === "purple"
              ? "bg-[#a78bfa]"
              : "bg-[#60a5fa]"
          }`}
        />

        <span className="font-mono text-[6px] uppercase tracking-[0.1em] text-white/40">
          {label}
        </span>

      </div>

    </motion.div>
  );
}


/* ============================================================
   HYI METHOD
============================================================ */

function HYIMethod() {
  return (
    <section
      id="hyi-method"
      className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10 md:py-32"
    >

      <Container>

        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">

          <div>

            <Eyebrow>
              04 / HOW HYI WORKS
            </Eyebrow>


            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              Evidence

              <span className="block text-white/20">
                has a pipeline.
              </span>
            </h2>


            <p className="mt-7 max-w-[460px] text-[12px] leading-7 text-white/[0.42]">
              HYI approaches experiment analysis as a sequence of
              validation, estimation and interpretation steps. This
              keeps the final recommendation connected to both the data
              and the original experiment design.
            </p>

          </div>


          <div className="relative">

            <div className="absolute bottom-0 left-[19px] top-0 w-[1px] bg-gradient-to-b from-[#8b5cf6]/50 via-white/10 to-[#60a5fa]/50" />


            {pipeline.map(
              (
                item,
                index,
              ) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: 20,
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
                  className="relative grid gap-4 border-b border-white/[0.07] py-6 pl-14 md:grid-cols-[.7fr_1fr]"
                >

                  <div
                    className={`absolute left-[13px] top-[28px] h-[13px] w-[13px] rounded-full border-2 border-[#080808] ${
                      index % 2 === 0
                        ? "bg-[#a78bfa]"
                        : "bg-[#60a5fa]"
                    }`}
                  />


                  <div>

                    <span className="font-mono text-[6px] uppercase tracking-[0.12em] text-white/20">
                      {item.number}
                    </span>

                    <h3 className="mt-2 text-[15px] font-medium tracking-[-0.03em] text-white/75">
                      {item.title}
                    </h3>

                  </div>


                  <p className="self-center text-[11px] leading-6 text-white/[0.4]">
                    {item.text}
                  </p>

                </motion.div>
              ),
            )}

          </div>

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   PRINCIPLES
============================================================ */

function Principles() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10 md:py-32">

      <Container>

        <Eyebrow>
          05 / ANALYSIS PRINCIPLES
        </Eyebrow>


        <div className="mt-10 grid gap-12 lg:grid-cols-[.72fr_1.28fr]">

          <div>

            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-6xl">
              Numbers need

              <span className="block text-white/20">
                interpretation.
              </span>
            </h2>


            <p className="mt-7 max-w-[430px] text-[12px] leading-7 text-white/40">
              Statistical tools provide structure for reasoning under
              uncertainty. They are most useful when their outputs are
              connected to experiment quality, effect magnitude and
              practical context.
            </p>

          </div>


          <div className="grid gap-3 sm:grid-cols-2">

            {principles.map(
              (
                item,
                index,
              ) => (
                <motion.div
                  key={item.number}
                  whileHover={{
                    y: -3,
                  }}
                  className="rounded-[17px] border border-white/[0.08] bg-[#080808] p-6"
                >

                  <div className="flex items-center justify-between">

                    <span className="font-mono text-[6px] text-white/20">
                      {item.number}
                    </span>


                    <CheckCircle2
                      size={12}
                      className={
                        index % 2 === 0
                          ? "text-[#a78bfa]/70"
                          : "text-[#60a5fa]/70"
                      }
                    />

                  </div>


                  <h3 className="mt-7 text-lg font-medium tracking-[-0.03em] text-white/75">
                    {item.title}
                  </h3>


                  <p className="mt-3 text-[10px] leading-6 text-white/[0.4]">
                    {item.text}
                  </p>

                </motion.div>
              ),
            )}

          </div>

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   FINAL CTA
============================================================ */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#050505] px-5 py-32 md:px-10 md:py-40">

      {/* PURPLE */}

      <div className="pointer-events-none absolute left-[10%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.07] blur-[160px]" />


      {/* BLUE */}

      <div className="pointer-events-none absolute right-[10%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#2563eb]/[0.07] blur-[160px]" />


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

          <Zap
            size={11}
            className="text-[#a78bfa]"
          />

          <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/40">
            HYI Statistical Intelligence
          </span>

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
          className="mx-auto mt-9 max-w-[1000px] text-[clamp(3.6rem,7vw,7rem)] font-semibold leading-[0.84] tracking-[-0.075em]"
        >
          Measure the difference.

          <span className="block bg-gradient-to-r from-[#a78bfa] via-white/30 to-[#60a5fa] bg-clip-text text-transparent">
            Understand the evidence.
          </span>

        </motion.h2>


        <p className="mx-auto mt-8 max-w-[660px] text-[12px] leading-7 text-white/[0.44]">
          HYI helps teams move beyond raw experiment numbers by
          connecting effect estimates, uncertainty, guardrails and
          product context into a structured analysis.
        </p>


        <a
          href="#analysis-lab"
          className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full bg-white px-9 py-4 text-[11px] font-medium text-black transition hover:bg-white/90"
        >
          Explore the analysis model

          <ArrowRight size={13} />
        </a>

      </Container>

    </section>
  );
}


/* ============================================================
   PAGE
============================================================ */

export default function StatisticalAnalysisClient() {
  const {
    scrollYProgress,
  } = useScroll();


  const scaleX = useSpring(
    scrollYProgress,
    {
      stiffness: 110,
      damping: 30,
      restDelta: 0.001,
    },
  );


  return (
    <div className="overflow-x-hidden bg-[#050505] text-white">

      {/* PROGRESS */}

      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#8b5cf6] via-white/70 to-[#60a5fa]"
      />


      <Hero />

      <UnderstandingStatistics />

      <AnalysisSystem />

      <CorrelationSection />

      <HYIMethod />

      <Principles />

      <FinalCTA />

    </div>
  );
}