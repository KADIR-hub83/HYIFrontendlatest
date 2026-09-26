"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Eye,
  Gauge,
  Layers3,
  MousePointer2,
  Play,
  RefreshCcw,
  ScanLine,
  Sparkles,
  Split,
  Target,
  TestTube2,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import type { ReactNode } from "react";

/* =========================================================
   REMOTE IMAGES

   These are remote web images.

   We intentionally use normal <img> instead of next/image,
   so you do NOT need to configure remotePatterns.
========================================================= */

const images = {
  code:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=85",

  laptop:
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1800&q=85",

  analytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85",

  workspace:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
};

/* =========================================================
   DATA
========================================================= */

const metrics = [
  {
    label: "EXPERIMENT",
    value: "A / B",
  },
  {
    label: "TRAFFIC",
    value: "50 / 50",
  },
  {
    label: "SIGNAL",
    value: "LIVE",
  },
];

const experimentLayers = [
  {
    number: "01",
    title: "Hypothesis",
    text:
      "Define the user behavior, page element and measurable outcome the experiment is designed to investigate.",
  },
  {
    number: "02",
    title: "Variants",
    text:
      "Create controlled experiences where meaningful differences can be isolated and compared.",
  },
  {
    number: "03",
    title: "Traffic",
    text:
      "Distribute eligible visitors between experiment variants through a consistent allocation strategy.",
  },
  {
    number: "04",
    title: "Measurement",
    text:
      "Capture conversion events, interactions and supporting behavioral signals for each experience.",
  },
  {
    number: "05",
    title: "Analysis",
    text:
      "Evaluate observed differences with appropriate statistical context rather than relying on raw percentages alone.",
  },
  {
    number: "06",
    title: "Learning",
    text:
      "Translate experiment results into product knowledge that can inform the next design or optimization decision.",
  },
];

const testingAreas = [
  {
    number: "01",
    title: "Hero messaging",
    text:
      "Compare value propositions, headlines and supporting copy to understand how messaging changes user response.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "CTA architecture",
    text:
      "Experiment with calls to action, placement and interaction hierarchy while tracking downstream behavior.",
    icon: MousePointer2,
  },
  {
    number: "03",
    title: "Page structure",
    text:
      "Evaluate alternative layouts and content sequences without confusing structural change with visual preference.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Conversion journeys",
    text:
      "Measure how experiment variants influence meaningful actions across the wider user journey.",
    icon: Target,
  },
  {
    number: "05",
    title: "Interaction design",
    text:
      "Test interface behavior and interaction patterns against clearly defined experience objectives.",
    icon: Eye,
  },
  {
    number: "06",
    title: "Personalization",
    text:
      "Explore differentiated experiences for relevant audiences while preserving clear experiment logic.",
    icon: Users,
  },
];

const workflow = [
  ["01", "Question", "Identify the decision the experiment needs to inform."],
  ["02", "Hypothesis", "Translate the question into a measurable expectation."],
  ["03", "Design", "Create controlled A and B experiences."],
  ["04", "Instrument", "Connect exposure, interaction and conversion events."],
  ["05", "Run", "Allocate eligible traffic and observe the experiment."],
  ["06", "Analyze", "Interpret performance with statistical context."],
  ["07", "Learn", "Capture what the experiment changes about product knowledge."],
];

const principles = [
  "Test one meaningful hypothesis",
  "Measure outcomes, not visual preference",
  "Define metrics before launch",
  "Keep traffic allocation consistent",
  "Protect experiment integrity",
  "Separate signal from noise",
  "Document learning",
  "Use results to create the next question",
];

/* =========================================================
   HELPERS
========================================================= */

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[9px] text-[#a78bfa]">
        {number}
      </span>

      <span className="h-px w-10 bg-[#8b5cf6]/40" />

      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
        {children}
      </span>
    </div>
  );
}

function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a78bfa] opacity-40" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a78bfa]" />
    </span>
  );
}

/* =========================================================
   EXPERIMENT MODEL
========================================================= */

function BrowserVariant({
  variant,
  conversion,
  active,
}: {
  variant: string;
  conversion: string;
  active?: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className={`relative overflow-hidden rounded-[22px] border ${
        active
          ? "border-[#a78bfa]/45"
          : "border-white/[0.09]"
      } bg-[#09090b]`}
    >
      <div className="flex h-11 items-center justify-between border-b border-white/[0.07] px-4">
        <div className="flex gap-1.5">
          <span className="h-[6px] w-[6px] rounded-full bg-white/15" />
          <span className="h-[6px] w-[6px] rounded-full bg-white/10" />
          <span className="h-[6px] w-[6px] rounded-full bg-white/[0.06]" />
        </div>

        <span className="font-mono text-[6px] tracking-[0.16em] text-white/25">
          VARIANT {variant}
        </span>
      </div>

      <div className="p-5">
        <div className="h-2 w-[42%] rounded-full bg-white/10" />

        <div className="mt-3 h-2 w-[72%] rounded-full bg-white/[0.06]" />

        <div className="mt-2 h-2 w-[58%] rounded-full bg-white/[0.06]" />

        <div className="mt-7 grid grid-cols-[1fr_.7fr] gap-3">
          <div className="rounded-[14px] border border-white/[0.07] bg-white/[0.025] p-4">
            <div className="h-2 w-[70%] rounded-full bg-white/10" />
            <div className="mt-3 h-1.5 w-full rounded-full bg-white/[0.05]" />
            <div className="mt-2 h-1.5 w-[80%] rounded-full bg-white/[0.05]" />

            <div
              className={`mt-5 h-8 w-[75%] rounded-full ${
                active
                  ? "bg-[#8b5cf6]"
                  : "bg-white/10"
              }`}
            />
          </div>

          <div className="relative overflow-hidden rounded-[14px] bg-white/[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(139,92,246,.12))]" />

            <ScanLine
              size={25}
              strokeWidth={0.8}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20"
            />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
          <span className="font-mono text-[6px] text-white/25">
            CONVERSION
          </span>

          <span
            className={`font-mono text-[10px] ${
              active
                ? "text-[#c4b5fd]"
                : "text-white/45"
            }`}
          >
            {conversion}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function ExperimentEngine() {
  return (
    <div className="relative mx-auto w-full max-w-[760px]">
      <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[150px]" />

      <div className="relative overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#070708] p-5 shadow-[0_50px_120px_rgba(0,0,0,.6)] md:p-7">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.035)_1px,transparent_1px)] bg-[size:34px_34px]" />

        <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <TestTube2
              size={14}
              strokeWidth={1}
              className="text-[#c4b5fd]"
            />

            <span className="font-mono text-[7px] tracking-[0.15em] text-white/35">
              EXPERIMENT / WEB-024
            </span>
          </div>

          <div className="flex items-center gap-2">
            <LiveDot />

            <span className="font-mono text-[6px] text-[#c4b5fd]/60">
              RUNNING
            </span>
          </div>
        </div>

        <div className="relative mt-6 grid gap-4 md:grid-cols-2">
          <BrowserVariant
            variant="A"
            conversion="4.82%"
          />

          <BrowserVariant
            variant="B"
            conversion="5.61%"
            active
          />
        </div>

        <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="rounded-[15px] border border-white/[0.07] bg-black/30 p-4"
            >
              <span className="font-mono text-[5px] tracking-[0.15em] text-white/20">
                {item.label}
              </span>

              <span className="mt-2 block font-mono text-[9px] text-white/60">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="relative mt-4 overflow-hidden rounded-[18px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04] p-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-[5px] text-white/25">
                OBSERVED SIGNAL
              </span>

              <p className="mt-2 text-[10px] text-white/55">
                Variant B currently shows a higher observed conversion rate.
              </p>
            </div>

            <TrendingUp
              size={18}
              strokeWidth={1}
              className="text-[#c4b5fd]"
            />
          </div>

          <div className="mt-5 h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "76%",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.4,
                delay: 0.3,
              }}
              className="h-full bg-gradient-to-r from-[#6d28d9] via-[#a78bfa] to-[#d8b4fe]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  const { scrollY } = useScroll();

  const headingY = useTransform(
    scrollY,
    [0, 800],
    [0, 100]
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] px-5 pb-28 pt-36 md:px-10 md:pt-44">
      <div className="absolute left-[-20%] top-[-20%] h-[850px] w-[850px] rounded-full bg-[#7c3aed]/[0.08] blur-[220px]" />

      <div className="absolute bottom-[-25%] right-[-15%] h-[800px] w-[800px] rounded-full bg-[#a855f7]/[0.05] blur-[220px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <LiveDot />

            <span className="font-mono text-[7px] tracking-[0.18em] text-white/30">
              WEBSITE EXPERIMENTATION
            </span>
          </div>

          <span className="hidden font-mono text-[7px] tracking-[0.16em] text-white/20 md:block">
            HYPOTHESIS → EXPERIMENT → EVIDENCE
          </span>
        </div>

        <div className="grid min-h-[820px] items-center gap-20 py-16 lg:grid-cols-[.88fr_1.12fr]">
          <motion.div
            style={{
              y: headingY,
            }}
          >
            <div className="flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-4 py-2">
              <Split
                size={11}
                strokeWidth={1}
                className="text-[#c4b5fd]"
              />

              <span className="font-mono text-[7px] tracking-[0.16em] text-[#c4b5fd]/70">
                WEBSITE A/B TESTING
              </span>
            </div>

            <h1 className="mt-9 max-w-[700px] text-[clamp(4.5rem,7.6vw,8rem)] font-semibold leading-[0.8] tracking-[-0.09em]">
              Don&apos;t guess
              <span className="block text-white/20">
                what works.
              </span>

              <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
                Test it.
              </span>
            </h1>

            <p className="mt-10 max-w-[610px] text-[14px] leading-8 text-white/[0.58] md:text-[16px] md:leading-9">
              Build controlled website experiments that turn product
              questions into measurable evidence. Compare experiences,
              observe user behavior and make optimization decisions
              with stronger context.
            </p>

            <div className="mt-11 flex flex-wrap gap-4">
              <a
                href="#experimentation"
                className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-7 py-4 text-[12px] font-medium shadow-[0_0_45px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
              >
                Explore Experimentation

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#workflow"
                className="flex items-center gap-3 rounded-full border border-white/10 px-7 py-4 text-[12px] text-white/55 transition hover:border-[#8b5cf6]/35"
              >
                Testing workflow

                <ArrowDown size={13} />
              </a>
            </div>
          </motion.div>

          <ExperimentEngine />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MARQUEE
========================================================= */

function Marquee() {
  const words = [
    "HYPOTHESIS",
    "VARIANT A",
    "VARIANT B",
    "TRAFFIC",
    "CONVERSION",
    "BEHAVIOR",
    "SIGNAL",
    "EVIDENCE",
    "LEARNING",
  ];

  return (
    <section className="overflow-hidden border-y border-white/[0.07] bg-[#080808] py-6">
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
            <span className="px-10 font-mono text-[8px] tracking-[0.2em] text-white/30 md:px-14">
              {word}
            </span>

            <CircleDot
              size={7}
              className="text-[#8b5cf6]/60"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* =========================================================
   SPLIT REALITY
========================================================= */

function SplitReality() {
  return (
    <section
      id="experimentation"
      className="relative overflow-hidden bg-[#050505] px-5 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="01">
          Split Reality
        </SectionLabel>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <h2 className="max-w-[950px] text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl lg:text-[88px]">
            Same audience.
            <span className="block text-white/20">
              Different experience.
            </span>

            Measurable
            <span className="text-[#a78bfa]">
              {" "}difference.
            </span>
          </h2>

          <div className="flex items-end">
            <p className="max-w-[500px] text-[13px] leading-8 text-white/[0.55]">
              Website A/B testing creates controlled alternatives and
              observes how eligible users respond. The objective is
              not simply to find a prettier design — it is to learn
              whether a deliberate product change influences a
              defined outcome.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-4 lg:grid-cols-2">
          <div className="group relative min-h-[570px] overflow-hidden rounded-[28px] border border-white/[0.08]">
            <img
              src={images.code}
              alt="Software experimentation and development environment"
              className="absolute inset-0 h-full w-full object-cover opacity-45 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-55"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/15" />

            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <span className="font-mono text-[7px] tracking-[0.18em] text-[#c4b5fd]">
                EXPERIENCE / A
              </span>

              <h3 className="mt-4 text-4xl font-medium tracking-[-0.05em]">
                Control.
              </h3>

              <p className="mt-4 max-w-[480px] text-[12px] leading-7 text-white/55">
                The existing experience establishes the comparison
                baseline for the experiment.
              </p>
            </div>
          </div>

          <div className="group relative min-h-[570px] overflow-hidden rounded-[28px] border border-[#8b5cf6]/25">
            <img
              src={images.laptop}
              alt="Alternative digital experience being developed"
              className="absolute inset-0 h-full w-full object-cover opacity-45 grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#09050f] via-black/60 to-black/10" />

            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <span className="font-mono text-[7px] tracking-[0.18em] text-[#c4b5fd]">
                EXPERIENCE / B
              </span>

              <h3 className="mt-4 text-4xl font-medium tracking-[-0.05em]">
                Challenger.
              </h3>

              <p className="mt-4 max-w-[480px] text-[12px] leading-7 text-white/55">
                A deliberate alternative designed around the
                experiment&apos;s hypothesis and target behavior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EXPERIMENT SYSTEM
========================================================= */

function ExperimentSystem() {
  return (
    <section className="relative overflow-hidden bg-[#090909] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.55fr_1.45fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel number="02">
              Experiment System
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Testing is
              <span className="block text-white/20">
                a system.
              </span>
            </h2>

            <p className="mt-8 max-w-[430px] text-[13px] leading-8 text-white/[0.54]">
              Reliable experimentation connects product thinking,
              implementation, measurement and analysis into one
              repeatable operating model.
            </p>
          </div>

          <div className="border-t border-white/[0.08]">
            {experimentLayers.map((item) => (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.55,
                }}
                className="group grid gap-5 border-b border-white/[0.08] py-9 transition duration-300 hover:pl-4 md:grid-cols-[80px_.8fr_1.3fr]"
              >
                <span className="font-mono text-[7px] text-[#a78bfa]/55">
                  {item.number}
                </span>

                <h3 className="text-2xl font-medium tracking-[-0.04em] text-white/75">
                  {item.title}
                </h3>

                <p className="max-w-[600px] text-[12px] leading-7 text-white/[0.5]">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONVERSION SIGNAL
========================================================= */

function ConversionSignal() {
  const bars = [
    36, 44, 41, 52, 47, 58, 54, 61, 57, 68, 64, 72, 69, 75, 71,
    79, 76, 83, 79, 86, 82, 89,
  ];

  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-28 md:px-10 md:py-40">
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.05] blur-[220px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <SectionLabel number="03">
          Conversion Signal
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Observe
              <span className="block text-white/20">
                the difference.
              </span>
            </h2>

            <p className="mt-8 max-w-[500px] text-[13px] leading-8 text-white/[0.55]">
              Experiment dashboards should make exposure,
              conversion and supporting behavioral information
              understandable without pretending that a single number
              explains the complete result.
            </p>

            <div className="mt-12 space-y-3">
              {[
                "Experiment exposure",
                "Primary conversion",
                "Supporting metrics",
                "Behavioral signals",
                "Segment context",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-white/[0.07] py-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[6px] text-[#a78bfa]/55">
                      0{index + 1}
                    </span>

                    <span className="text-[11px] text-white/50">
                      {item}
                    </span>
                  </div>

                  <ChevronRight
                    size={12}
                    className="text-white/20"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#09090b]">
            <div className="flex items-center justify-between border-b border-white/[0.07] p-6">
              <div className="flex items-center gap-3">
                <Activity
                  size={15}
                  className="text-[#c4b5fd]"
                />

                <span className="font-mono text-[7px] tracking-[0.14em] text-white/30">
                  EXPERIMENT SIGNAL
                </span>
              </div>

              <div className="flex items-center gap-2">
                <LiveDot />

                <span className="font-mono text-[5px] text-white/25">
                  LIVE
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-[18px] border border-white/[0.07] bg-black/30 p-5">
                  <span className="font-mono text-[6px] text-white/25">
                    VARIANT A
                  </span>

                  <span className="mt-4 block text-4xl font-medium tracking-[-0.05em] text-white/55">
                    4.82
                    <span className="text-lg">
                      %
                    </span>
                  </span>
                </div>

                <div className="rounded-[18px] border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.05] p-5">
                  <span className="font-mono text-[6px] text-[#c4b5fd]/55">
                    VARIANT B
                  </span>

                  <span className="mt-4 block text-4xl font-medium tracking-[-0.05em] text-[#c4b5fd]">
                    5.61
                    <span className="text-lg">
                      %
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-4 rounded-[20px] border border-white/[0.07] bg-black/25 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[6px] text-white/25">
                    CONVERSION TREND
                  </span>

                  <BarChart3
                    size={14}
                    className="text-[#a78bfa]"
                  />
                </div>

                <div className="mt-10 flex h-[230px] items-end gap-[6px]">
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
                        duration: 0.6,
                        delay: index * 0.025,
                      }}
                      className="flex-1 rounded-t-[3px] bg-gradient-to-t from-[#6d28d9]/25 to-[#c4b5fd]/80"
                    />
                  ))}
                </div>

                <div className="mt-6 flex justify-between border-t border-white/[0.06] pt-4">
                  <span className="font-mono text-[5px] text-white/20">
                    EXPOSURE
                  </span>

                  <span className="font-mono text-[5px] text-white/20">
                    OBSERVATION WINDOW
                  </span>
                </div>
              </div>

              <p className="mt-5 text-[10px] leading-6 text-white/30">
                Interface values above are illustrative demo data for
                the visual model, not HYI.AI customer performance
                claims.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TESTING AREAS
========================================================= */

function TestingAreas() {
  return (
    <section className="relative overflow-hidden bg-[#090909] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="04">
          What To Experiment
        </SectionLabel>

        <div className="mt-9 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Test the experience,
            <span className="block text-white/20">
              not random pixels.
            </span>
          </h2>

          <p className="max-w-[440px] text-[13px] leading-8 text-white/[0.52]">
            Prioritize changes connected to meaningful user behavior
            and a clearly defined product or business question.
          </p>
        </div>

        <div className="mt-20 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {testingAreas.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative min-h-[380px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#050505] p-7"
              >
                <div className="absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full bg-[#7c3aed]/[0.07] blur-[90px]" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">
                      <Icon
                        size={18}
                        strokeWidth={1}
                        className="text-[#c4b5fd]"
                      />
                    </div>

                    <span className="font-mono text-[6px] text-white/20">
                      {item.number}
                    </span>
                  </div>

                  <div className="mt-20">
                    <h3 className="text-3xl font-medium tracking-[-0.05em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[12px] leading-7 text-white/[0.5]">
                      {item.text}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#7c3aed] to-[#d8b4fe] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   VISUAL BREAK
========================================================= */

function VisualBreak() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-black">
      <img
        src={images.analytics}
        alt="Analytics and experimentation workspace"
        className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

      <div className="relative mx-auto flex min-h-[760px] max-w-[1450px] items-center px-5 py-28 md:px-10">
        <div className="max-w-[900px]">
          <SectionLabel number="05">
            Evidence Over Opinion
          </SectionLabel>

          <h2 className="mt-10 text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
            Design creates
            <span className="block text-white/25">
              possibilities.
            </span>

            Experiments create
            <span className="block text-[#c4b5fd]">
              evidence.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WORKFLOW
========================================================= */

function TestingWorkflow() {
  return (
    <section
      id="workflow"
      className="relative overflow-hidden bg-[#050505] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.65fr_1.35fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel number="06">
              Testing Workflow
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Question
              <span className="block text-white/20">
                to learning.
              </span>
            </h2>

            <p className="mt-8 max-w-[450px] text-[13px] leading-8 text-white/[0.53]">
              Strong experimentation is a learning loop. Each test
              should begin with a decision question and finish with
              knowledge that can influence what happens next.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-[24px] top-0 w-px bg-gradient-to-b from-[#8b5cf6]/50 via-[#8b5cf6]/15 to-transparent" />

            <div className="space-y-3">
              {workflow.map(
                ([number, title, text], index) => (
                  <motion.div
                    key={number}
                    initial={{
                      opacity: 0,
                      x: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.04,
                    }}
                    className="relative pl-[70px]"
                  >
                    <div className="absolute left-0 top-7 z-10 flex h-[49px] w-[49px] items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#09090b] font-mono text-[6px] text-[#c4b5fd]">
                      {number}
                    </div>

                    <div className="group rounded-[22px] border border-white/[0.08] bg-[#09090b] p-7 transition duration-300 hover:border-[#8b5cf6]/30">
                      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                        <h3 className="text-2xl font-medium tracking-[-0.04em] text-white/75">
                          {title}
                        </h3>

                        <p className="max-w-[480px] text-[11px] leading-7 text-white/[0.47]">
                          {text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TRAFFIC ROUTER
========================================================= */

function TrafficRouter() {
  return (
    <section className="relative overflow-hidden bg-[#090909] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="07">
          Traffic Allocation
        </SectionLabel>

        <div className="mt-10 grid items-center gap-16 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              One audience.
              <span className="block text-white/20">
                Controlled paths.
              </span>
            </h2>

            <p className="mt-8 max-w-[500px] text-[13px] leading-8 text-white/[0.53]">
              Eligible visitors enter the experiment and are assigned
              to controlled experiences. Exposure and outcome events
              remain connected so each variant can be evaluated in
              context.
            </p>
          </div>

          <div className="relative min-h-[600px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#050505]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.035)_1px,transparent_1px)] bg-[size:35px_35px]" />

            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[130px]" />

            <div className="absolute left-1/2 top-[90px] -translate-x-1/2">
              <div className="flex h-[105px] w-[105px] items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#0b0810] shadow-[0_0_70px_rgba(124,58,237,.15)]">
                <Users
                  size={28}
                  strokeWidth={0.8}
                  className="text-[#c4b5fd]"
                />
              </div>
            </div>

            <div className="absolute left-1/2 top-[215px] h-[95px] w-px -translate-x-1/2 bg-[#8b5cf6]/30" />

            <div className="absolute left-1/2 top-[295px] -translate-x-1/2">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex h-[82px] w-[82px] items-center justify-center rounded-full border border-dashed border-[#a78bfa]/40 bg-[#09090b]"
              >
                <Split
                  size={22}
                  className="text-[#c4b5fd]"
                />
              </motion.div>
            </div>

            <div className="absolute left-[24%] top-[375px] h-[70px] w-px rotate-[35deg] bg-[#8b5cf6]/30" />

            <div className="absolute right-[24%] top-[375px] h-[70px] w-px -rotate-[35deg] bg-[#8b5cf6]/30" />

            <motion.div
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute bottom-[65px] left-[8%] w-[38%] rounded-[20px] border border-white/[0.08] bg-[#09090b] p-6"
            >
              <span className="font-mono text-[6px] text-white/25">
                PATH / A
              </span>

              <h3 className="mt-3 text-xl font-medium">
                Control
              </h3>

              <span className="mt-4 block font-mono text-[6px] text-white/30">
                50% TRAFFIC
              </span>
            </motion.div>

            <motion.div
              animate={{
                y: [7, 0, 7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute bottom-[65px] right-[8%] w-[38%] rounded-[20px] border border-[#8b5cf6]/25 bg-[#0c0812] p-6"
            >
              <span className="font-mono text-[6px] text-[#c4b5fd]/50">
                PATH / B
              </span>

              <h3 className="mt-3 text-xl font-medium">
                Challenger
              </h3>

              <span className="mt-4 block font-mono text-[6px] text-[#c4b5fd]/50">
                50% TRAFFIC
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PRINCIPLES
========================================================= */

function ExperimentPrinciples() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="08">
          Experiment Principles
        </SectionLabel>

        <h2 className="mt-8 max-w-[1000px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
          Better experiments.
          <span className="block text-white/20">
            Better decisions.
          </span>
        </h2>

        <div className="mt-20 grid gap-x-12 border-t border-white/[0.08] md:grid-cols-2">
          {principles.map((item, index) => (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              className="group flex items-center justify-between border-b border-white/[0.08] py-7"
            >
              <div className="flex items-center gap-5">
                <span className="font-mono text-[6px] text-[#a78bfa]/50">
                  0{index + 1}
                </span>

                <span className="text-[14px] text-white/60 transition group-hover:text-white">
                  {item}
                </span>
              </div>

              <Check
                size={13}
                className="text-[#8b5cf6]/50"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EXPERIENCE IMAGE
========================================================= */

function ExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-[#090909] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#050505] lg:grid-cols-2">
          <div className="relative min-h-[600px] overflow-hidden">
            <img
              src={images.workspace}
              alt="Digital product experimentation workspace"
              className="absolute inset-0 h-full w-full object-cover opacity-50 grayscale"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505]" />

            <div className="absolute bottom-8 left-8">
              <div className="flex items-center gap-3">
                <LiveDot />

                <span className="font-mono text-[7px] tracking-[0.16em] text-white/40">
                  CONTINUOUS EXPERIMENTATION
                </span>
              </div>
            </div>
          </div>

          <div className="flex min-h-[600px] flex-col justify-center p-8 md:p-14 lg:p-16">
            <SectionLabel number="09">
              Experiment Culture
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-6xl">
              Every result
              <span className="block text-white/20">
                should teach.
              </span>
            </h2>

            <p className="mt-8 max-w-[520px] text-[13px] leading-8 text-white/[0.54]">
              An experiment is useful even when the challenger does
              not improve the target metric. A well-designed test can
              reduce uncertainty, challenge assumptions and create a
              stronger understanding of user behavior.
            </p>

            <div className="mt-10 flex items-center gap-4 border-t border-white/[0.08] pt-7">
              <RefreshCcw
                size={16}
                strokeWidth={1}
                className="text-[#c4b5fd]"
              />

              <span className="font-mono text-[7px] tracking-[0.13em] text-white/35">
                QUESTION → TEST → LEARN → ITERATE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FINAL CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-36 md:px-10 md:py-56">
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.08] blur-[240px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.025)_1px,transparent_1px)] bg-[size:55px_55px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="relative mx-auto max-w-[1450px] text-center">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-4 py-2">
          <TestTube2
            size={11}
            className="text-[#c4b5fd]"
          />

          <span className="font-mono text-[7px] tracking-[0.17em] text-white/40">
            HYI.AI / WEBSITE A/B TESTING
          </span>
        </div>

        <h2 className="mx-auto mt-10 max-w-[1300px] text-[clamp(4rem,8vw,8.7rem)] font-semibold leading-[0.82] tracking-[-0.09em]">
          Turn assumptions
          <span className="block text-white/20">
            into experiments.
          </span>

          <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
            Turn experiments into learning.
          </span>
        </h2>

        <p className="mx-auto mt-10 max-w-[700px] text-[14px] leading-8 text-white/[0.53]">
          Design controlled digital experiments around meaningful
          questions, measurable behavior and decisions that matter.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="#experimentation"
            className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-8 py-4 text-[12px] font-medium shadow-[0_0_50px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
          >
            Build Better Experiments

            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN CLIENT
========================================================= */

export default function WebsiteABTestingClient() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(
    scrollYProgress,
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  return (
    <div className="relative overflow-hidden bg-[#050505] text-white">
      <motion.div
        style={{
          scaleX: progress,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[9999] h-[2px] w-full bg-gradient-to-r from-[#6d28d9] via-[#c084fc] to-[#e879f9]"
      />

      <Hero />

      <Marquee />

      <SplitReality />

      <ExperimentSystem />

      <ConversionSignal />

      <TestingAreas />

      <VisualBreak />

      <TestingWorkflow />

      <TrafficRouter />

      <ExperimentPrinciples />

      <ExperienceSection />

      <FinalCTA />
    </div>
  );
}