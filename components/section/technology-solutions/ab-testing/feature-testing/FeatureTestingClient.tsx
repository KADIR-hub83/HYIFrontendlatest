"use client";

import type { ElementType, ReactNode } from "react";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Cpu,
  Database,
  Eye,
  Gauge,
  GitBranch,
  Layers3,
  Network,
  Play,
  Radio,
  RefreshCcw,
  Server,
  Settings2,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";


/* ============================================================
   DATA
============================================================ */

const featureTypes = [
  {
    Icon: GitBranch,
    number: "01",
    title: "Feature variations",
    description:
      "Compare an existing experience with one or more controlled variations so product decisions can be based on measured user behavior rather than internal preference.",
  },
  {
    Icon: Network,
    number: "02",
    title: "Traffic allocation",
    description:
      "Define how eligible users enter control and treatment groups while keeping assignment rules consistent throughout the experiment.",
  },
  {
    Icon: Activity,
    number: "03",
    title: "Exposure tracking",
    description:
      "Record when users actually encounter the experimental feature so analysis reflects real exposure instead of assuming every eligible user saw the change.",
  },
  {
    Icon: Gauge,
    number: "04",
    title: "Primary metrics",
    description:
      "Connect the experiment to a measurable product outcome such as activation, completion, engagement, conversion or another decision-relevant signal.",
  },
  {
    Icon: ShieldCheck,
    number: "05",
    title: "Guardrail metrics",
    description:
      "Monitor important signals that should not deteriorate while the experiment attempts to improve its primary objective.",
  },
  {
    Icon: RefreshCcw,
    number: "06",
    title: "Progressive rollout",
    description:
      "When evidence supports a change, exposure can move through controlled rollout stages rather than immediately switching every user to the new experience.",
  },
];


const experimentSteps = [
  {
    step: "01",
    phase: "QUESTION",
    title: "Define the decision",
    text:
      "HYI begins with the product decision that needs evidence. The objective is not simply to test something different; it is to reduce uncertainty around a meaningful feature decision.",
  },
  {
    step: "02",
    phase: "HYPOTHESIS",
    title: "Describe the expected effect",
    text:
      "The hypothesis connects the proposed feature change to an expected user behavior and a measurable outcome before results are available.",
  },
  {
    step: "03",
    phase: "DESIGN",
    title: "Create control and treatment",
    text:
      "The existing experience becomes the reference condition while the treatment contains the intentional change being evaluated.",
  },
  {
    step: "04",
    phase: "INSTRUMENT",
    title: "Connect exposure and metrics",
    text:
      "Tracking is designed so the experiment can distinguish assignment, actual exposure and downstream outcomes without mixing unrelated traffic.",
  },
  {
    step: "05",
    phase: "VALIDATE",
    title: "Quality-check both states",
    text:
      "Before launch, HYI validates critical paths, event definitions, targeting logic and the experience delivered by each experimental state.",
  },
  {
    step: "06",
    phase: "RUN",
    title: "Route controlled traffic",
    text:
      "Eligible users enter stable experiment groups according to the configured allocation while operational and product signals are observed.",
  },
  {
    step: "07",
    phase: "ANALYZE",
    title: "Interpret the evidence",
    text:
      "Results are reviewed in the context of the experiment design, sample, duration, primary metric, guardrails and relevant segments.",
  },
  {
    step: "08",
    phase: "DECIDE",
    title: "Ship, iterate or stop",
    text:
      "The evidence informs the next product action: expand the feature, refine the idea, investigate further or retire the treatment.",
  },
];


const metrics = [
  {
    name: "Primary outcome",
    text:
      "The main behavior the experiment is designed to influence.",
  },
  {
    name: "Exposure",
    text:
      "Which users actually encountered the experimental experience.",
  },
  {
    name: "Activation",
    text:
      "Whether users reach the meaningful first-use moment for the feature.",
  },
  {
    name: "Completion",
    text:
      "Whether users successfully finish the workflow the feature supports.",
  },
  {
    name: "Engagement",
    text:
      "How users interact with the feature after it becomes available.",
  },
  {
    name: "Guardrails",
    text:
      "Important quality or business signals that should not be harmed.",
  },
];


const lifecycle = [
  {
    title: "Internal",
    percent: "Team",
    description:
      "Validate functionality and instrumentation with internal or controlled users.",
  },
  {
    title: "Limited",
    percent: "Small",
    description:
      "Expose the feature to a deliberately constrained eligible population.",
  },
  {
    title: "Experiment",
    percent: "A / B",
    description:
      "Maintain concurrent comparison groups and collect decision evidence.",
  },
  {
    title: "Expand",
    percent: "Ramp",
    description:
      "Increase exposure when product and operational evidence supports it.",
  },
  {
    title: "Release",
    percent: "Live",
    description:
      "Complete rollout and remove temporary experiment complexity where appropriate.",
  },
];


const principles = [
  "Define the product decision before launching the experiment.",
  "Separate feature delivery from experiment measurement.",
  "Keep user assignment stable for the intended experiment design.",
  "Track actual exposure instead of assuming assignment equals exposure.",
  "Choose the primary metric before reading results.",
  "Monitor guardrails alongside the desired outcome.",
  "Validate analytics and feature states before increasing traffic.",
  "Avoid treating early movement as a final conclusion.",
  "Document experiment ownership and lifecycle.",
  "Remove temporary flags and obsolete experiment code after decisions.",
];


/* ============================================================
   HELPERS
============================================================ */

function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1450px] ${className}`}>
      {children}
    </div>
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
    <div className="flex items-center gap-4">
      <span className="h-[1px] w-8 bg-[#8b5cf6]" />

      <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#b69cff]">
        {number} / {children}
      </span>
    </div>
  );
}


function TinyLabel({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="font-mono text-[6px] uppercase tracking-[0.15em] text-white/25">
      {children}
    </span>
  );
}


function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute h-full w-full animate-ping rounded-full bg-[#a78bfa] opacity-40" />
      <span className="relative h-2 w-2 rounded-full bg-[#a78bfa]" />
    </span>
  );
}


/* ============================================================
   HERO
============================================================ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-5 pb-28 pt-36 md:px-10 md:pt-44">

      <div className="absolute left-1/2 top-[-420px] h-[900px] w-[1100px] -translate-x-1/2 rounded-full bg-[#7c3aed]/[0.1] blur-[240px]" />

      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />


      <Container className="relative">

        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">

          <div className="flex items-center gap-3">
            <LiveDot />

            <TinyLabel>
              HYI Feature Experimentation
            </TinyLabel>
          </div>


          <div className="hidden gap-7 md:flex">
            <TinyLabel>Hypothesis</TinyLabel>
            <TinyLabel>Exposure</TinyLabel>
            <TinyLabel>Evidence</TinyLabel>
            <TinyLabel>Rollout</TinyLabel>
          </div>

        </div>


        <div className="mx-auto max-w-[1180px] pt-20 text-center md:pt-28">

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
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
            <GitBranch
              size={11}
              className="text-[#c4b5fd]"
            />

            <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[#c4b5fd]/70">
              Feature Testing
            </span>
          </motion.div>


          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.85,
              delay: 0.08,
            }}
            className="mt-9 text-[clamp(4.5rem,9.5vw,9rem)] font-semibold leading-[0.8] tracking-[-0.095em]"
          >
            Ship the idea.

            <span className="block text-white/20">
              Test the impact.
            </span>

            <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
              Learn before scale.
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
              delay: 0.28,
            }}
            className="mx-auto mt-9 max-w-[760px] text-[14px] leading-8 text-white/[0.55] md:text-[15px]"
          >
            HYI Feature Testing helps product teams evaluate new
            functionality through controlled experiments. Instead of
            launching a feature to everyone and comparing before-and-after
            numbers, teams can create controlled variations, manage
            exposure, measure meaningful outcomes and use evidence to guide
            the next release decision.
          </motion.p>


          <div className="mt-10 flex flex-wrap justify-center gap-3">

            <a
              href="#experiment"
              className="flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-8 py-4 text-[12px] shadow-[0_0_50px_rgba(124,58,237,.22)]"
            >
              Explore experiment

              <ArrowDown size={14} />
            </a>


            <a
              href="#hyi-process"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[12px] text-white/55"
            >
              How HYI works

              <ArrowRight size={14} />
            </a>

          </div>

        </div>


        <div className="mt-20">
          <ExperimentControlRoom />
        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   MODEL 1 — EXPERIMENT CONTROL ROOM
============================================================ */

function ExperimentControlRoom() {
  return (
    <div
      id="experiment"
      className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#070709] p-5 md:p-7"
    >

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.035) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 88%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 88%)",
        }}
      />


      <div className="relative">

        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">
              <Workflow
                size={14}
                className="text-[#c4b5fd]"
              />
            </div>


            <div>
              <TinyLabel>
                Experiment console
              </TinyLabel>

              <span className="mt-1 block font-mono text-[7px] text-white/45">
                FEATURE / SMART ONBOARDING
              </span>
            </div>

          </div>


          <div className="flex items-center gap-3">
            <LiveDot />

            <span className="font-mono text-[6px] tracking-[0.12em] text-[#c4b5fd]/60">
              RUNNING
            </span>
          </div>

        </div>


        <div className="mt-5 grid gap-4 lg:grid-cols-[220px_1fr_250px]">

          <ExperimentSidebar />

          <VariantArena />

          <MetricsConsole />

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   CONTROL ROOM SIDEBAR
============================================================ */

function ExperimentSidebar() {
  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-black/45 p-5">

      <TinyLabel>
        Experiment state
      </TinyLabel>


      <div className="mt-7">

        <div className="flex items-center justify-between">
          <span className="text-[11px] text-white/55">
            Allocation
          </span>

          <span className="font-mono text-[7px] text-[#c4b5fd]/60">
            50 / 50
          </span>
        </div>


        <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-white/[0.04]">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "50%",
            }}
            transition={{
              duration: 1.4,
            }}
            className="bg-white/15"
          />

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "50%",
            }}
            transition={{
              duration: 1.4,
              delay: 0.2,
            }}
            className="bg-[#8b5cf6]"
          />

        </div>

      </div>


      <div className="mt-8 space-y-3">

        {[
          ["CONTROL", "Variant A"],
          ["TREATMENT", "Variant B"],
          ["AUDIENCE", "Eligible users"],
          ["ASSIGNMENT", "Stable"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-[12px] border border-white/[0.06] bg-white/[0.015] p-4"
          >
            <TinyLabel>
              {label}
            </TinyLabel>

            <span className="mt-2 block text-[10px] text-white/48">
              {value}
            </span>
          </div>
        ))}

      </div>


      <div className="mt-7 border-t border-white/[0.07] pt-6">

        <TinyLabel>
          Hypothesis
        </TinyLabel>

        <p className="mt-4 text-[10px] leading-6 text-white/42">
          A simplified onboarding sequence will help eligible users reach
          their first meaningful product action more efficiently.
        </p>

      </div>

    </div>
  );
}


/* ============================================================
   VARIANT ARENA
============================================================ */

function VariantArena() {
  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#09090b] p-5">

      <div className="flex items-center justify-between">

        <TinyLabel>
          Live feature variants
        </TinyLabel>

        <div className="flex items-center gap-2">
          <Radio
            size={10}
            className="text-[#a78bfa]"
          />

          <TinyLabel>
            Exposure stream
          </TinyLabel>
        </div>

      </div>


      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <FeatureVariant
          variant="A"
          title="Current experience"
          treatment={false}
        />

        <FeatureVariant
          variant="B"
          title="Experimental feature"
          treatment
        />

      </div>


      <TrafficRouter />

    </div>
  );
}


/* ============================================================
   FEATURE VARIANT
============================================================ */

function FeatureVariant({
  variant,
  title,
  treatment,
}: {
  variant: string;
  title: string;
  treatment: boolean;
}) {
  return (
    <div
      className={`relative min-h-[390px] overflow-hidden rounded-[18px] border p-5 ${
        treatment
          ? "border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.025]"
          : "border-white/[0.07] bg-black/40"
      }`}
    >

      {treatment && (
        <div className="absolute right-[-60px] top-[-60px] h-[180px] w-[180px] rounded-full bg-[#7c3aed]/15 blur-[70px]" />
      )}


      <div className="relative flex items-center justify-between">

        <div>
          <TinyLabel>
            VARIANT {variant}
          </TinyLabel>

          <span className="mt-2 block text-[11px] text-white/55">
            {title}
          </span>
        </div>


        <div
          className={`h-2 w-2 rounded-full ${
            treatment
              ? "bg-[#a78bfa]"
              : "bg-white/15"
          }`}
        />

      </div>


      {/* fake product UI */}

      <div className="relative mt-9">

        <div className="h-3 w-[45%] rounded-full bg-white/15" />

        <div className="mt-3 h-2 w-[80%] rounded-full bg-white/[0.05]" />

        <div className="mt-2 h-2 w-[65%] rounded-full bg-white/[0.05]" />


        <div className="mt-9 space-y-3">

          {[0, 1, 2].map((item) => (
            <motion.div
              key={item}
              animate={
                treatment && item === 1
                  ? {
                      borderColor: [
                        "rgba(255,255,255,.06)",
                        "rgba(139,92,246,.35)",
                        "rgba(255,255,255,.06)",
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="flex items-center gap-4 rounded-[12px] border border-white/[0.06] bg-white/[0.015] p-4"
            >

              <div
                className={`h-8 w-8 rounded-[8px] ${
                  treatment && item === 1
                    ? "bg-[#8b5cf6]/20"
                    : "bg-white/[0.04]"
                }`}
              />

              <div className="flex-1">

                <div className="h-2 w-[60%] rounded-full bg-white/[0.08]" />

                <div className="mt-2 h-1.5 w-[85%] rounded-full bg-white/[0.035]" />

              </div>

            </motion.div>
          ))}

        </div>


        <div
          className={`mt-8 h-11 rounded-full ${
            treatment
              ? "bg-gradient-to-r from-[#6d28d9] to-[#9333ea]"
              : "bg-white/10"
          }`}
        />


        {treatment && (
          <motion.div
            animate={{
              x: [0, 90, 130, 60, 0],
              y: [0, 40, 120, 180, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[35%] top-[20%]"
          >
            <div className="h-4 w-4 rounded-full border border-[#c4b5fd] bg-[#8b5cf6]/40 shadow-[0_0_20px_rgba(167,139,250,.8)]" />
          </motion.div>
        )}

      </div>

    </div>
  );
}


/* ============================================================
   TRAFFIC ROUTER
============================================================ */

function TrafficRouter() {
  return (
    <div className="mt-4 rounded-[16px] border border-white/[0.07] bg-black/50 p-4">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">
          <Network
            size={12}
            className="text-[#c4b5fd]"
          />

          <TinyLabel>
            Traffic router
          </TinyLabel>
        </div>

        <span className="font-mono text-[6px] text-white/20">
          STABLE ASSIGNMENT
        </span>

      </div>


      <div className="relative mt-5 h-[34px] overflow-hidden">

        <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/[0.07]" />


        {[5, 20, 35, 50, 65, 80].map((left, index) => (
          <motion.span
            key={left}
            initial={{
              left: `${left}%`,
              opacity: 0,
            }}
            animate={{
              left: [`${left}%`, `${left + 12}%`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.4,
              delay: index * 0.3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[13px] h-2 w-2 rounded-full bg-[#a78bfa]"
          />
        ))}

      </div>

    </div>
  );
}


/* ============================================================
   METRICS CONSOLE
============================================================ */

function MetricsConsole() {
  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-black/45 p-5">

      <TinyLabel>
        Experiment signals
      </TinyLabel>


      <div className="mt-7 space-y-3">

        <MetricSignal
          Icon={Eye}
          label="Exposure"
          value="Tracking"
        />

        <MetricSignal
          Icon={Activity}
          label="Primary metric"
          value="Collecting"
        />

        <MetricSignal
          Icon={ShieldCheck}
          label="Guardrails"
          value="Monitoring"
        />

        <MetricSignal
          Icon={Database}
          label="Data quality"
          value="Observed"
        />

      </div>


      <div className="mt-8 border-t border-white/[0.07] pt-6">

        <TinyLabel>
          Live activity
        </TinyLabel>


        <div className="mt-5 flex h-[110px] items-end gap-1">

          {[35, 52, 43, 70, 58, 78, 48, 85, 65, 74, 92, 68].map(
            (height, index) => (
              <motion.div
                key={index}
                initial={{
                  height: 0,
                }}
                animate={{
                  height: `${height}%`,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.06,
                }}
                className={`flex-1 rounded-t-[3px] ${
                  index > 7
                    ? "bg-[#8b5cf6]/55"
                    : "bg-white/10"
                }`}
              />
            ),
          )}

        </div>

      </div>


      <div className="mt-7 rounded-[13px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.035] p-4">

        <div className="flex gap-3">

          <BrainCircuit
            size={12}
            className="mt-1 shrink-0 text-[#c4b5fd]"
          />

          <p className="text-[9px] leading-5 text-white/40">
            Evidence is still accumulating. Avoid converting early
            movement into a product conclusion.
          </p>

        </div>

      </div>

    </div>
  );
}


function MetricSignal({
  Icon,
  label,
  value,
}: {
  Icon: ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[13px] border border-white/[0.06] bg-white/[0.015] p-4">

      <div className="flex items-center justify-between">

        <Icon
          size={12}
          className="text-[#c4b5fd]"
        />

        <CircleDot
          size={8}
          className="text-[#a78bfa]"
        />

      </div>


      <TinyLabel>
        {label}
      </TinyLabel>

      <span className="mt-2 block text-[10px] text-white/50">
        {value}
      </span>

    </div>
  );
}


/* ============================================================
   MARQUEE
============================================================ */

function ExperimentStrip() {
  const words = [
    "HYPOTHESIS",
    "CONTROL",
    "TREATMENT",
    "ASSIGNMENT",
    "EXPOSURE",
    "METRICS",
    "GUARDRAILS",
    "ANALYSIS",
    "ROLLOUT",
    "LEARNING",
  ];

  return (
    <div className="overflow-hidden border-y border-white/[0.07] bg-[#050506] py-5">

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max"
      >

        {[...words, ...words].map((word, index) => (
          <div
            key={`${word}-${index}`}
            className="flex items-center"
          >

            <span className="px-8 font-mono text-[7px] tracking-[0.2em] text-white/25">
              {word}
            </span>

            <span className="h-1 w-1 rounded-full bg-[#8b5cf6]" />

          </div>
        ))}

      </motion.div>

    </div>
  );
}


/* ============================================================
   INTRODUCTION
============================================================ */

function Introduction() {
  return (
    <section className="bg-[#050506] px-5 py-32 md:px-10 md:py-44">

      <Container>

        <SectionLabel number="01">
          FEATURE EXPERIMENTATION
        </SectionLabel>


        <div className="mt-11 grid gap-14 lg:grid-cols-[1.15fr_.85fr]">

          <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl lg:text-[82px]">
            Deployment answers

            <span className="block text-white/20">
              “can we ship it?”
            </span>

            Testing asks

            <span className="block text-[#a78bfa]">
              “did it help?”
            </span>
          </h2>


          <div className="self-end">

            <p className="text-[14px] leading-8 text-white/[0.58]">
              Feature delivery and feature experimentation solve related
              but different problems. A feature flag can determine which
              experience a user receives. A controlled experiment adds a
              hypothesis, comparison groups, exposure tracking, defined
              metrics and an analysis plan.
            </p>


            <p className="mt-6 text-[14px] leading-8 text-white/[0.45]">
              HYI brings these pieces together so teams can release new
              functionality in a controlled environment while learning
              whether the change actually improves the user or business
              outcome it was designed to influence.
            </p>

          </div>

        </div>


        <div className="mt-16 grid gap-[1px] overflow-hidden rounded-[25px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-3">

          {[
            {
              number: "01",
              title: "Feature flag",
              text:
                "Controls which experience is available to a user or audience.",
            },
            {
              number: "02",
              title: "Progressive rollout",
              text:
                "Gradually changes exposure to reduce operational release risk.",
            },
            {
              number: "03",
              title: "Controlled experiment",
              text:
                "Compares concurrent variations to evaluate a defined product hypothesis.",
            },
          ].map((item) => (
            <article
              key={item.number}
              className="min-h-[260px] bg-[#08080a] p-7"
            >

              <span className="font-mono text-[6px] text-[#a78bfa]/55">
                {item.number}
              </span>


              <h3 className="mt-14 text-2xl font-medium tracking-[-0.04em]">
                {item.title}
              </h3>


              <p className="mt-5 text-[12px] leading-7 text-white/[0.48]">
                {item.text}
              </p>

            </article>
          ))}

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   CAPABILITIES
============================================================ */

function Capabilities() {
  return (
    <section className="bg-black px-5 py-32 md:px-10 md:py-44">

      <Container>

        <SectionLabel number="02">
          EXPERIMENT SYSTEM
        </SectionLabel>


        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_.7fr]">

          <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
            Every experiment

            <span className="block text-white/20">
              needs more than
            </span>

            two screens.
          </h2>


          <p className="self-end text-[13px] leading-8 text-white/[0.5]">
            Reliable feature testing requires a complete system around the
            variation: assignment, exposure, instrumentation, monitoring,
            analysis and a controlled release lifecycle.
          </p>

        </div>


        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">

          {featureTypes.map(
            (
              {
                Icon,
                number,
                title,
                description,
              },
              index,
            ) => (
              <motion.article
                key={title}
                initial={{
                  opacity: 0,
                  y: 25,
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
                  y: -5,
                }}
                className="group relative min-h-[325px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#08080a] p-7"
              >

                <div className="absolute right-[-80px] top-[-80px] h-[200px] w-[200px] rounded-full bg-[#7c3aed]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#7c3aed]/15" />


                <div className="relative flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">

                    <Icon
                      size={17}
                      strokeWidth={1}
                      className="text-[#c4b5fd]"
                    />

                  </div>

                  <span className="font-mono text-[6px] text-white/20">
                    {number}
                  </span>

                </div>


                <h3 className="relative mt-14 text-2xl font-medium tracking-[-0.04em]">
                  {title}
                </h3>


                <p className="relative mt-5 text-[12px] leading-7 text-white/[0.5]">
                  {description}
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
   MODEL 2 — ASSIGNMENT ENGINE
============================================================ */

function AssignmentSection() {
  return (
    <section className="relative overflow-hidden bg-[#060608] px-5 py-32 md:px-10 md:py-44">

      <div className="absolute right-[-20%] top-[-10%] h-[800px] w-[800px] rounded-full bg-[#7c3aed]/[0.06] blur-[230px]" />


      <Container className="relative">

        <SectionLabel number="03">
          USER ASSIGNMENT
        </SectionLabel>


        <div className="mt-10 grid items-center gap-16 lg:grid-cols-[.85fr_1.15fr]">

          <div>

            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
              One audience.

              <span className="block text-white/20">
                Controlled paths.
              </span>

              Comparable evidence.
            </h2>


            <p className="mt-8 text-[13px] leading-8 text-white/[0.52]">
              Assignment determines which experimental experience an
              eligible user receives. For many controlled experiments,
              stable assignment matters because repeatedly switching a
              user between variants can contaminate the experience and
              complicate interpretation.
            </p>


            <p className="mt-5 text-[13px] leading-8 text-white/[0.42]">
              HYI defines eligibility and assignment rules as part of the
              experiment design rather than treating traffic splitting as
              an afterthought.
            </p>

          </div>


          <AssignmentEngine />

        </div>

      </Container>

    </section>
  );
}


function AssignmentEngine() {
  const users = Array.from({
    length: 16,
  });

  return (
    <div className="relative min-h-[540px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#08080a] p-7">

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.035) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />


      <div className="relative">

        <div className="flex items-center justify-between">

          <TinyLabel>
            Assignment engine
          </TinyLabel>

          <Cpu
            size={14}
            className="text-[#c4b5fd]"
          />

        </div>


        <div className="mt-10 grid items-center gap-5 md:grid-cols-[1fr_90px_1fr]">

          {/* audience */}

          <div className="rounded-[18px] border border-white/[0.07] bg-black/55 p-5">

            <TinyLabel>
              Eligible audience
            </TinyLabel>


            <div className="mt-7 grid grid-cols-4 gap-3">

              {users.map((_, index) => (
                <motion.div
                  key={index}
                  animate={{
                    opacity: [0.25, 0.8, 0.25],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.08,
                    repeat: Infinity,
                  }}
                  className="flex aspect-square items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.02]"
                >
                  <CircleDot
                    size={9}
                    className="text-white/25"
                  />
                </motion.div>
              ))}

            </div>

          </div>


          {/* router */}

          <div className="flex flex-col items-center">

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-[#8b5cf6]/40"
            >

              <Network
                size={20}
                className="text-[#c4b5fd]"
              />

            </motion.div>


            <span className="mt-4 font-mono text-[5px] text-white/20">
              ASSIGN
            </span>

          </div>


          {/* variants */}

          <div className="space-y-3">

            <div className="rounded-[18px] border border-white/[0.07] bg-black/55 p-5">

              <div className="flex justify-between">
                <TinyLabel>
                  Control A
                </TinyLabel>

                <span className="font-mono text-[7px] text-white/35">
                  50%
                </span>
              </div>


              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.04]">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: "50%",
                  }}
                  className="h-full bg-white/20"
                />
              </div>

            </div>


            <div className="rounded-[18px] border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.035] p-5">

              <div className="flex justify-between">
                <TinyLabel>
                  Treatment B
                </TinyLabel>

                <span className="font-mono text-[7px] text-[#c4b5fd]/60">
                  50%
                </span>
              </div>


              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.04]">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: "50%",
                  }}
                  className="h-full bg-gradient-to-r from-[#7c3aed] to-[#c084fc]"
                />
              </div>

            </div>

          </div>

        </div>


        <div className="mt-8 grid grid-cols-3 gap-3">

          {[
            ["IDENTITY", "User key"],
            ["BUCKET", "Stable"],
            ["EXPOSURE", "Tracked"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-[13px] border border-white/[0.07] bg-black/50 p-4"
            >

              <TinyLabel>
                {label}
              </TinyLabel>

              <span className="mt-2 block text-[9px] text-white/45">
                {value}
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   METRICS
============================================================ */

function MetricsSection() {
  return (
    <section className="bg-black px-5 py-32 md:px-10 md:py-44">

      <Container>

        <SectionLabel number="04">
          MEASUREMENT
        </SectionLabel>


        <h2 className="mt-10 max-w-[1000px] text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
          A feature test needs

          <span className="block text-white/20">
            a measurement model.
          </span>
        </h2>


        <p className="mt-8 max-w-[760px] text-[13px] leading-8 text-white/[0.52]">
          The goal is not to search through every available dashboard
          until one number looks positive. HYI defines the experiment's
          measurement logic before interpretation begins.
        </p>


        <div className="mt-16 grid gap-[1px] overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">

          {metrics.map((metric, index) => (
            <article
              key={metric.name}
              className="min-h-[250px] bg-[#08080a] p-7"
            >

              <div className="flex items-center justify-between">

                <span className="font-mono text-[6px] text-[#a78bfa]/55">
                  0{index + 1}
                </span>

                <Activity
                  size={12}
                  className="text-white/15"
                />

              </div>


              <h3 className="mt-12 text-2xl font-medium tracking-[-0.04em]">
                {metric.name}
              </h3>


              <p className="mt-5 text-[12px] leading-7 text-white/[0.48]">
                {metric.text}
              </p>

            </article>
          ))}

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   MODEL 3 — RELEASE LIFECYCLE
============================================================ */

function ReleaseLifecycle() {
  return (
    <section className="bg-[#060608] px-5 py-32 md:px-10 md:py-44">

      <Container>

        <SectionLabel number="05">
          FEATURE LIFECYCLE
        </SectionLabel>


        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_.7fr]">

          <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
            From hidden code

            <span className="block text-white/20">
              to controlled
            </span>

            release.
          </h2>


          <p className="self-end text-[13px] leading-8 text-white/[0.5]">
            Feature flags can separate deployment from release. The same
            underlying capability can move through internal validation,
            controlled exposure, experimentation and broader rollout
            without treating every stage as the same decision.
          </p>

        </div>


        <div className="relative mt-20">

          <div className="absolute left-0 right-0 top-[50px] hidden h-[1px] bg-white/[0.08] lg:block" />


          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "100%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 2,
            }}
            className="absolute left-0 top-[50px] hidden h-[1px] bg-gradient-to-r from-[#6d28d9]/10 via-[#a78bfa] to-[#e879f9]/20 lg:block"
          />


          <div className="relative grid gap-3 md:grid-cols-2 lg:grid-cols-5">

            {lifecycle.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="min-h-[300px] rounded-[20px] border border-white/[0.08] bg-[#08080a] p-6"
              >

                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#0b0811]">

                  <span className="font-mono text-[6px] text-[#c4b5fd]">
                    0{index + 1}
                  </span>

                </div>


                <span className="mt-12 block font-mono text-[6px] text-[#a78bfa]/50">
                  {item.percent}
                </span>


                <h3 className="mt-3 text-xl font-medium">
                  {item.title}
                </h3>


                <p className="mt-5 text-[11px] leading-6 text-white/[0.45]">
                  {item.description}
                </p>

              </motion.article>
            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   HYI PROCESS
============================================================ */

function HYIProcess() {
  return (
    <section
      id="hyi-process"
      className="bg-black px-5 py-32 md:px-10 md:py-44"
    >

      <Container>

        <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">

          <div className="lg:sticky lg:top-32 lg:self-start">

            <SectionLabel number="06">
              HOW HYI WORKS
            </SectionLabel>


            <h2 className="mt-10 text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Experiment

              <span className="block text-white/20">
                engineering +
              </span>

              product science.
            </h2>


            <p className="mt-8 text-[13px] leading-8 text-white/[0.5]">
              HYI treats feature testing as a complete product workflow.
              Engineering controls exposure, analytics captures the right
              events, product defines the decision and experimentation
              connects the change to measurable evidence.
            </p>


            <div className="mt-9 rounded-[17px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.035] p-5">

              <div className="flex gap-4">

                <BrainCircuit
                  size={16}
                  className="mt-1 shrink-0 text-[#c4b5fd]"
                />

                <p className="text-[11px] leading-6 text-white/42">
                  A successful experiment is not simply one where Variant B
                  increases a number. It is one that gives the team useful
                  evidence for a real product decision.
                </p>

              </div>

            </div>

          </div>


          <div className="border-t border-white/[0.08]">

            {experimentSteps.map((item, index) => (
              <motion.article
                key={item.step}
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  delay: index * 0.04,
                }}
                className="grid gap-5 border-b border-white/[0.08] py-8 md:grid-cols-[55px_.65fr_1.35fr]"
              >

                <span className="font-mono text-[7px] text-[#a78bfa]/60">
                  {item.step}
                </span>


                <div>

                  <TinyLabel>
                    {item.phase}
                  </TinyLabel>

                  <h3 className="mt-2 text-xl font-medium tracking-[-0.04em] text-white/75">
                    {item.title}
                  </h3>

                </div>


                <p className="text-[12px] leading-7 text-white/[0.48]">
                  {item.text}
                </p>

              </motion.article>
            ))}

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
    <section className="bg-[#060608] px-5 py-32 md:px-10 md:py-44">

      <Container>

        <SectionLabel number="07">
          TESTING PRINCIPLES
        </SectionLabel>


        <div className="mt-10 grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

          <div>

            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Move quickly.

              <span className="block text-white/20">
                Keep the
              </span>

              evidence clean.
            </h2>

          </div>


          <div className="border-t border-white/[0.08]">

            {principles.map((item, index) => (
              <div
                key={item}
                className="flex gap-5 border-b border-white/[0.08] py-5"
              >

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04]">

                  <Check
                    size={10}
                    className="text-[#c4b5fd]"
                  />

                </div>


                <p className="text-[12px] leading-7 text-white/[0.52]">
                  {item}
                </p>


                <span className="ml-auto hidden font-mono text-[5px] text-white/15 sm:block">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>
            ))}

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
    <section className="relative overflow-hidden bg-black px-5 py-40 md:px-10 md:py-52">

      <div className="absolute left-1/2 top-1/2 h-[900px] w-[1300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.075] blur-[250px]" />


      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.03) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 76%)",
        }}
      />


      <Container className="relative text-center">

        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-4 py-2">

          <Zap
            size={11}
            className="text-[#c4b5fd]"
          />

          <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[#c4b5fd]/70">
            HYI Feature Testing
          </span>

        </div>


        <h2 className="mx-auto mt-10 max-w-[1200px] text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.8] tracking-[-0.09em]">

          Every feature

          <span className="block text-white/20">
            starts as an idea.
          </span>

          <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
            Turn it into evidence.
          </span>

        </h2>


        <p className="mx-auto mt-9 max-w-[720px] text-[14px] leading-8 text-white/[0.52]">
          HYI combines feature delivery, experimentation architecture,
          measurement and product thinking so teams can learn from
          controlled releases before making larger product commitments.
        </p>


        <div className="mt-11 flex flex-wrap justify-center gap-3">

          <a
            href="#hyi-process"
            className="flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-9 py-5 text-[12px] shadow-[0_0_55px_rgba(124,58,237,.24)]"
          >
            Explore HYI process

            <ArrowRight size={14} />
          </a>


          <a
            href="#experiment"
            className="flex items-center gap-4 rounded-full border border-white/10 px-9 py-5 text-[12px] text-white/55"
          >
            View experiment model

            <Play size={12} />
          </a>

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   PAGE
============================================================ */

export default function FeatureTestingClient() {
  const {
    scrollYProgress,
  } = useScroll();


  const scaleX = useSpring(
    scrollYProgress,
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    },
  );


  return (
    <div className="overflow-x-hidden bg-black text-white">

      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#6d28d9] via-[#a855f7] to-[#e879f9]"
      />


      <Hero />

      <ExperimentStrip />

      <Introduction />

      <Capabilities />

      <AssignmentSection />

      <MetricsSection />

      <ReleaseLifecycle />

      <HYIProcess />

      <Principles />

      <FinalCTA />

    </div>
  );
}