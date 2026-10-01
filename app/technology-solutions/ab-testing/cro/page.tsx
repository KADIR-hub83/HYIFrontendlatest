"use client";

import type { ElementType, ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Database,
  Eye,
  FileText,
  Gauge,
  GitBranch,
  Layers3,
  MousePointer2,
  Network,
  Play,
  Search,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const diagnostics = [
  {
    Icon: Eye,
    number: "01",
    title: "Observe",
    text:
      "Understand how visitors actually experience the journey. Review traffic quality, page behavior, conversion paths, device differences, user feedback and areas where attention or intent appears to break.",
  },
  {
    Icon: Search,
    number: "02",
    title: "Diagnose",
    text:
      "Separate symptoms from possible causes. A low conversion rate alone does not explain the problem. HYI looks for evidence around relevance, clarity, friction, trust, motivation and technical experience.",
  },
  {
    Icon: BrainCircuit,
    number: "03",
    title: "Hypothesize",
    text:
      "Translate evidence into a falsifiable idea: what should change, which audience behavior should change with it, why that outcome is expected and which metric will evaluate the hypothesis.",
  },
  {
    Icon: GitBranch,
    number: "04",
    title: "Experiment",
    text:
      "Build controlled alternatives and expose eligible traffic according to the experiment design. Instrumentation, traffic allocation and technical QA are treated as part of the experiment itself.",
  },
  {
    Icon: BarChart3,
    number: "05",
    title: "Evaluate",
    text:
      "Interpret the primary outcome together with uncertainty, diagnostic metrics and guardrails. HYI avoids turning temporary dashboard movement into an unsupported conclusion.",
  },
  {
    Icon: Workflow,
    number: "06",
    title: "Learn",
    text:
      "A useful CRO program accumulates knowledge. Every result should improve the team's understanding of the audience and influence the next optimization question.",
  },
];

const frictionTypes = [
  {
    number: "01",
    title: "Relevance",
    text:
      "Does the experience match the visitor's intent, traffic source and expectation?",
  },
  {
    number: "02",
    title: "Clarity",
    text:
      "Can the visitor quickly understand the offer, product and next action?",
  },
  {
    number: "03",
    title: "Trust",
    text:
      "Does the experience provide enough credible evidence to support the decision?",
  },
  {
    number: "04",
    title: "Friction",
    text:
      "Are forms, navigation, pricing, checkout or interaction requirements creating unnecessary effort?",
  },
  {
    number: "05",
    title: "Motivation",
    text:
      "Is the value of taking action strong enough relative to the perceived effort and risk?",
  },
  {
    number: "06",
    title: "Technical UX",
    text:
      "Do speed, responsiveness, errors or interaction problems interrupt the journey?",
  },
];

const testingTargets = [
  {
    title: "Messaging",
    text:
      "Headline, value proposition, benefit framing, offer positioning and supporting copy.",
  },
  {
    title: "Calls to action",
    text:
      "CTA language, hierarchy, placement, repetition and commitment level.",
  },
  {
    title: "Forms",
    text:
      "Field requirements, sequencing, validation, multi-step flows and qualification.",
  },
  {
    title: "Proof",
    text:
      "Testimonials, customer evidence, product proof, credibility and risk reduction.",
  },
  {
    title: "Information hierarchy",
    text:
      "What visitors see first, what follows, and how information supports a decision.",
  },
  {
    title: "Offers",
    text:
      "Trial structure, consultation framing, pricing communication and incentives.",
  },
  {
    title: "Checkout",
    text:
      "Cart progression, payment friction, unexpected costs and purchase confidence.",
  },
  {
    title: "Product onboarding",
    text:
      "Registration, activation, setup, education and first-value experiences.",
  },
];

const process = [
  {
    step: "01",
    title: "Business context",
    text:
      "HYI first defines what the business considers a valuable conversion. A click is not automatically equivalent to a qualified lead, activated user or completed purchase.",
  },
  {
    step: "02",
    title: "Measurement audit",
    text:
      "We inspect the existing measurement model: conversion events, funnel stages, attribution context, device segmentation and potential tracking gaps.",
  },
  {
    step: "03",
    title: "Journey analysis",
    text:
      "The customer journey is decomposed into meaningful stages so teams can identify where visitors continue, hesitate or abandon.",
  },
  {
    step: "04",
    title: "Behavior research",
    text:
      "Quantitative patterns are combined with qualitative evidence where available to generate explanations worth testing.",
  },
  {
    step: "05",
    title: "Opportunity map",
    text:
      "Potential opportunities are organized by expected impact, supporting evidence, implementation effort and experiment feasibility.",
  },
  {
    step: "06",
    title: "Hypothesis design",
    text:
      "Each selected opportunity becomes a written hypothesis connecting evidence, change, expected behavior and the primary metric.",
  },
  {
    step: "07",
    title: "Experience design",
    text:
      "Design and copy changes are built to represent the hypothesis clearly instead of mixing unrelated ideas into one treatment.",
  },
  {
    step: "08",
    title: "Experiment engineering",
    text:
      "Variants, allocation rules, exposure events, conversions and required integrations are implemented and validated.",
  },
  {
    step: "09",
    title: "Controlled execution",
    text:
      "Eligible traffic enters the experiment under defined rules while technical health and data quality are monitored.",
  },
  {
    step: "10",
    title: "Analysis",
    text:
      "The result is evaluated against the predetermined primary metric, uncertainty, guardrails and practical business significance.",
  },
  {
    step: "11",
    title: "Decision",
    text:
      "Depending on the evidence, the team may ship the challenger, retain the control, iterate the idea or gather more evidence.",
  },
  {
    step: "12",
    title: "Knowledge system",
    text:
      "The hypothesis, implementation, result and learning are documented so future experiments begin with accumulated knowledge rather than memory.",
  },
];

const metrics = [
  {
    label: "Primary conversion",
    description:
      "The main business outcome the experiment is designed to influence.",
  },
  {
    label: "Qualified conversion",
    description:
      "Measures quality where raw conversion volume alone is insufficient.",
  },
  {
    label: "Revenue / session",
    description:
      "Useful where order value and purchase behavior matter together.",
  },
  {
    label: "Funnel progression",
    description:
      "Shows movement through important intermediate journey stages.",
  },
  {
    label: "Activation",
    description:
      "Measures whether acquired users reach a meaningful product state.",
  },
  {
    label: "Guardrails",
    description:
      "Protect important secondary outcomes from local optimization damage.",
  },
];

const principles = [
  "Start with evidence instead of personal preference.",
  "Define the business outcome before selecting the experiment.",
  "Write the hypothesis before building the variant.",
  "Choose the primary metric before seeing the result.",
  "Separate diagnostic metrics from decision metrics.",
  "Design treatments that answer meaningful questions.",
  "Validate tracking before trusting experiment data.",
  "Account for uncertainty instead of reading raw percentages alone.",
  "Evaluate practical significance as well as statistical evidence.",
  "Document unsuccessful and inconclusive experiments.",
  "Protect customer experience with relevant guardrail metrics.",
  "Build a learning system, not a collection of disconnected tests.",
];

const mistakes = [
  {
    title: "Random redesigns",
    text:
      "Changing a page because a stakeholder prefers another layout is not the same as evidence-driven optimization.",
  },
  {
    title: "Metric shopping",
    text:
      "Inspecting many metrics and selecting whichever improved after the experiment weakens the decision process.",
  },
  {
    title: "Stopping too early",
    text:
      "Early differences can move substantially as more observations arrive. A temporary lead is not automatically a durable effect.",
  },
  {
    title: "Changing everything",
    text:
      "A radically different challenger may answer whether the package works, but it often cannot explain which individual change produced the result.",
  },
  {
    title: "Ignoring quality",
    text:
      "Increasing raw leads can be harmful if those leads are less qualified or create poor downstream economics.",
  },
  {
    title: "Copying competitors",
    text:
      "A competitor's experience is not evidence that the same design will improve behavior for your audience.",
  },
];

const systemNodes = [
  {
    Icon: Users,
    title: "Traffic",
    subtitle: "Audience",
  },
  {
    Icon: Eye,
    title: "Behavior",
    subtitle: "Signals",
  },
  {
    Icon: GitBranch,
    title: "Experiment",
    subtitle: "Variants",
  },
  {
    Icon: Database,
    title: "Events",
    subtitle: "Data",
  },
  {
    Icon: BarChart3,
    title: "Analysis",
    subtitle: "Evidence",
  },
  {
    Icon: BrainCircuit,
    title: "Learning",
    subtitle: "Knowledge",
  },
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

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

      <span className="font-mono text-[8px] tracking-[0.2em] text-[#a78bfa]">
        {number} / {children}
      </span>
    </div>
  );
}

function Pill({
  children,
  Icon,
}: {
  children: ReactNode;
  Icon?: ElementType;
}) {
  return (
    <div className="flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
      {Icon ? (
        <Icon size={11} strokeWidth={1.3} className="text-[#c4b5fd]" />
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
      )}

      <span className="font-mono text-[7px] uppercase tracking-[0.17em] text-[#c4b5fd]/70">
        {children}
      </span>
    </div>
  );
}

function GlowDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a78bfa] opacity-50" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a78bfa]" />
    </span>
  );
}

/* =========================================================
   HERO MODEL
========================================================= */

function ConversionCore() {
  return (
    <div className="relative flex h-[190px] w-[190px] items-center justify-center md:h-[240px] md:w-[240px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full border border-dashed border-[#8b5cf6]/30"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[18px] rounded-full border border-[#c4b5fd]/15"
      >
        <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#c4b5fd] shadow-[0_0_20px_#a78bfa]" />
      </motion.div>

      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(139,92,246,.08)",
            "0 0 70px rgba(139,92,246,.25)",
            "0 0 20px rgba(139,92,246,.08)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="relative flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#0c0813] md:h-[150px] md:w-[150px]"
      >
        <BrainCircuit
          size={27}
          strokeWidth={0.8}
          className="text-[#c4b5fd]"
        />

        <span className="mt-3 font-mono text-[7px] tracking-[0.16em] text-white/35">
          CRO ENGINE
        </span>

        <span className="mt-1 font-mono text-[5px] tracking-[0.12em] text-[#a78bfa]/60">
          OPTIMIZING
        </span>
      </motion.div>
    </div>
  );
}

function HeroNode({
  Icon,
  title,
  label,
  className,
  delay = 0,
}: {
  Icon: ElementType;
  title: string;
  label: string;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [-5, 5, -5],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute z-20 w-[150px] rounded-[16px] border border-white/[0.08] bg-[#08070c]/90 p-4 backdrop-blur-xl md:w-[175px] ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-8 w-8 items-center justify-center rounded-[9px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
          <Icon size={13} strokeWidth={1} className="text-[#c4b5fd]" />
        </div>

        <GlowDot />
      </div>

      <p className="mt-5 text-[12px] font-medium text-white/65">
        {title}
      </p>

      <p className="mt-1 font-mono text-[5px] uppercase tracking-[0.13em] text-white/20">
        {label}
      </p>
    </motion.div>
  );
}

function CROHeroModel() {
  return (
    <div className="relative mx-auto h-[620px] w-full max-w-[720px]">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[130px]" />

      <div
        className="absolute inset-[8%] opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.055) 1px, transparent 1px)",
          backgroundSize: "35px 35px",
          maskImage:
            "radial-gradient(circle at center, black 25%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 25%, transparent 75%)",
        }}
      />

      <svg
        viewBox="0 0 720 620"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <motion.path
          d="M170 125 C260 170 275 230 360 310"
          fill="none"
          stroke="rgba(167,139,250,.25)"
          strokeWidth="1"
          strokeDasharray="6 9"
          animate={{
            strokeDashoffset: [0, -30],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M550 125 C460 170 445 230 360 310"
          fill="none"
          stroke="rgba(167,139,250,.25)"
          strokeWidth="1"
          strokeDasharray="6 9"
          animate={{
            strokeDashoffset: [0, -30],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M125 425 C230 405 280 365 360 310"
          fill="none"
          stroke="rgba(167,139,250,.25)"
          strokeWidth="1"
          strokeDasharray="6 9"
          animate={{
            strokeDashoffset: [0, -30],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M595 425 C490 405 440 365 360 310"
          fill="none"
          stroke="rgba(167,139,250,.25)"
          strokeWidth="1"
          strokeDasharray="6 9"
          animate={{
            strokeDashoffset: [0, -30],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      <HeroNode
        Icon={Users}
        title="Visitor Intent"
        label="Audience signals"
        className="left-[2%] top-[9%]"
      />

      <HeroNode
        Icon={Eye}
        title="Behavior"
        label="Journey evidence"
        className="right-[2%] top-[9%]"
        delay={0.5}
      />

      <HeroNode
        Icon={GitBranch}
        title="Experiment"
        label="Controlled change"
        className="bottom-[10%] left-[2%]"
        delay={1}
      />

      <HeroNode
        Icon={BarChart3}
        title="Evidence"
        label="Measured outcome"
        className="bottom-[10%] right-[2%]"
        delay={1.5}
      />

      <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
        <ConversionCore />
      </div>

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/[0.07] bg-black/60 px-4 py-2 backdrop-blur-xl">
        <Activity size={10} className="text-[#a78bfa]" />

        <span className="whitespace-nowrap font-mono text-[5px] tracking-[0.14em] text-white/25">
          OBSERVE → TEST → MEASURE → LEARN
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030205] px-5  md:px-10 m">
      <div className="absolute left-[-20%] top-[-30%] h-[900px] w-[900px] rounded-full bg-[#6d28d9]/[0.09] blur-[220px]" />

      <div className="absolute right-[-20%] top-[5%] h-[850px] w-[850px] rounded-full bg-[#9333ea]/[0.06] blur-[240px]" />

      <Container>
        {/* <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <GlowDot />

            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/30">
              HYI Conversion Intelligence
            </span>
          </div>

          <span className="hidden font-mono text-[6px] tracking-[0.16em] text-white/20 md:block">
            RESEARCH → HYPOTHESIS → EXPERIMENT → EVIDENCE
          </span>
        </div> */}

        <div className="grid min-h-[780px] items-center gap-8 lg:grid-cols-[.95fr_1.05fr]">
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            {/* <Pill Icon={Gauge}>
              Conversion Rate Optimization
            </Pill> */}

            <h1 className="mt-9 max-w-[760px] text-[clamp(4.6rem,8vw,9rem)] font-semibold leading-[0.79] tracking-[-0.095em]">
              More than
              <span className="block text-white/20">
                more clicks.
              </span>

              <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
                Better decisions.
              </span>
            </h1>

            <p className="mt-10 max-w-[650px] text-[14px] leading-8 text-white/[0.58] md:text-[16px] md:leading-9">
              HYI approaches <span className="bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparen">Conversion Rate Optimization </span>  as a
              continuous decision system. We study how people move
              through digital experiences, identify evidence-backed
              friction, design controlled experiments and turn results
              into reusable knowledge.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#learn-cro"
                className="flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-7 py-4 text-[12px] shadow-[0_0_40px_rgba(124,58,237,.2)]"
              >
                Learn CRO
                <ArrowDown size={14} />
              </a>

              <a
                href="#hyi-cro"
                className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-7 py-4 text-[12px] text-white/60"
              >
                HYI methodology
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>

          <CROHeroModel />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   TICKER
========================================================= */

function CROTicker() {
  const items = [
    "RESEARCH",
    "BEHAVIOR",
    "CONVERSION",
    "EXPERIMENTATION",
    "ANALYTICS",
    "UX",
    "HYPOTHESES",
    "MEASUREMENT",
    "LEARNING",
  ];

  return (
    <div className="overflow-hidden border-y border-white/[0.07] bg-[#050407] py-5">
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max items-center"
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center"
          >
            <span className="px-8 font-mono text-[7px] tracking-[0.2em] text-white/25">
              {item}
            </span>

            <span className="h-1 w-1 rounded-full bg-[#8b5cf6]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* =========================================================
   CRO EDUCATION
========================================================= */

function CROIntroduction() {
  return (
    <section
      id="learn-cro"
      className="bg-[#050407] px-5 py-32 md:px-10 md:py-48"
    >
      <Container>
        <SectionLabel number="01">
          UNDERSTANDING CRO
        </SectionLabel>

        <div className="mt-10 grid gap-16 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <h2 className="max-w-[950px] text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl lg:text-[92px]">
              Conversion is not
              <span className="block text-white/20">
                a design problem.
              </span>
              It is a decision journey.
            </h2>
          </div>

          <div className="self-end">
            <p className="text-[14px] leading-8 text-white/[0.58]">
              Conversion Rate Optimization is the systematic practice
              of improving the percentage of eligible visitors who
              complete a meaningful action. That action could be a
              purchase, qualified lead, account registration, product
              activation, subscription or another business-defined
              outcome.
            </p>

            <p className="mt-6 text-[14px] leading-8 text-white/[0.48]">
              CRO is therefore broader than changing buttons or
              rearranging a page. Strong optimization connects
              customer understanding, analytics, UX, copy, product
              thinking, experimentation and business economics.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-[1px] overflow-hidden rounded-[26px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-3">
          {[
            {
              title: "What happened?",
              text:
                "Analytics helps describe where users enter, what they do, where they progress and where the journey loses momentum.",
            },
            {
              title: "Why might it happen?",
              text:
                "Research and behavioral evidence help teams form explanations about intent, friction, uncertainty, relevance and motivation.",
            },
            {
              title: "Does the change help?",
              text:
                "Controlled experimentation evaluates whether a proposed experience actually changes the predefined outcome.",
            },
          ].map((item, index) => (
            <article
              key={item.title}
              className="min-h-[300px] bg-[#08070a] p-8"
            >
              <span className="font-mono text-[6px] text-[#a78bfa]/60">
                QUESTION / 0{index + 1}
              </span>

              <h3 className="mt-16 text-3xl font-medium tracking-[-0.05em]">
                {item.title}
              </h3>

              <p className="mt-5 text-[13px] leading-7 text-white/[0.52]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   CONVERSION EQUATION
========================================================= */

function ConversionEquation() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-32 md:px-10 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.05] blur-[200px]" />

      <Container className="relative">
        <SectionLabel number="02">
          THE CONVERSION EQUATION
        </SectionLabel>

        <div className="mt-14 text-center">
          <p className="font-mono text-[7px] tracking-[0.2em] text-white/25">
            SIMPLE FORMULA / COMPLEX BEHAVIOR
          </p>

          <div className="mx-auto mt-10 max-w-[1200px]">
            <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
              <div className="rounded-[25px] border border-white/[0.08] bg-white/[0.02] px-8 py-8">
                <span className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                  Conversions
                </span>
              </div>

              <span className="text-4xl text-white/20">
                ÷
              </span>

              <div className="rounded-[25px] border border-white/[0.08] bg-white/[0.02] px-8 py-8">
                <span className="text-4xl font-medium tracking-[-0.05em] md:text-6xl">
                  Eligible visitors
                </span>
              </div>

              <span className="text-4xl text-white/20">
                =
              </span>

              <div className="rounded-[25px] border border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.07] px-8 py-8 shadow-[0_0_70px_rgba(124,58,237,.08)]">
                <span className="bg-gradient-to-r from-[#a78bfa] to-[#e879f9] bg-clip-text text-4xl font-medium tracking-[-0.05em] text-transparent md:text-6xl">
                  Conversion rate
                </span>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-12 max-w-[760px] text-[13px] leading-8 text-white/[0.5]">
            The arithmetic is easy. Understanding why people convert
            or fail to convert is not. Traffic quality, audience
            intent, message relevance, product-market fit, price,
            usability, trust and technical experience can all affect
            the observed rate.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   DIAGNOSTIC SYSTEM
========================================================= */

function DiagnosticSystem() {
  return (
    <section className="bg-[#060508] px-5 py-32 md:px-10 md:py-48">
      <Container>
        <SectionLabel number="03">
          CRO DIAGNOSTIC SYSTEM
        </SectionLabel>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_.7fr]">
          <h2 className="text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl">
            Optimization begins
            <span className="block text-white/20">
              before the experiment.
            </span>
          </h2>

          <p className="self-end text-[13px] leading-8 text-white/[0.52]">
            HYI&apos;s CRO workflow is designed to reduce random testing.
            Research creates evidence. Evidence creates hypotheses.
            Hypotheses create experiments. Experiments create new
            evidence.
          </p>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {diagnostics.map(
            ({ Icon, number, title, text }, index) => (
              <motion.article
                key={title}
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
                  delay: index * 0.06,
                }}
                className="group relative min-h-[350px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#09080c] p-7"
              >
                <div className="absolute right-[-70px] top-[-70px] h-[160px] w-[160px] rounded-full bg-[#7c3aed]/0 blur-[60px] transition-all duration-500 group-hover:bg-[#7c3aed]/15" />

                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
                    <Icon
                      size={18}
                      strokeWidth={1}
                      className="text-[#c4b5fd]"
                    />
                  </div>

                  <span className="font-mono text-[6px] text-white/20">
                    {number}
                  </span>
                </div>

                <h3 className="mt-16 text-3xl font-medium tracking-[-0.05em]">
                  {title}
                </h3>

                <p className="mt-5 text-[13px] leading-7 text-white/[0.5]">
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
   FUNNEL MODEL
========================================================= */

function FunnelLayer({
  label,
  width,
  index,
}: {
  label: string;
  width: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scaleX: 0.5,
      }}
      whileInView={{
        opacity: 1,
        scaleX: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.7,
      }}
      style={{
        width,
      }}
      className="relative mx-auto"
    >
      <div className="flex h-[72px] items-center justify-between rounded-[12px] border border-[#8b5cf6]/20 bg-gradient-to-r from-[#6d28d9]/[0.07] via-[#8b5cf6]/[0.12] to-[#6d28d9]/[0.07] px-5">
        <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-white/45">
          {label}
        </span>

        <span className="font-mono text-[6px] text-[#c4b5fd]/45">
          0{index + 1}
        </span>
      </div>
    </motion.div>
  );
}

function FunnelIntelligence() {
  const stages = [
    ["Qualified traffic", "100%"],
    ["Relevant engagement", "88%"],
    ["Product / offer exploration", "76%"],
    ["Intent signal", "64%"],
    ["Conversion process", "52%"],
    ["Business outcome", "40%"],
  ];

  return (
    <section className="bg-black px-5 py-32 md:px-10 md:py-48">
      <Container>
        <SectionLabel number="04">
          FUNNEL INTELLIGENCE
        </SectionLabel>

        <div className="mt-10 grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl">
              Find where
              <span className="block text-white/20">
                intent loses
              </span>
              momentum.
            </h2>

            <p className="mt-8 max-w-[540px] text-[13px] leading-8 text-white/[0.52]">
              A conversion funnel represents important steps in the
              customer journey. CRO analysis asks where meaningful
              progression changes and whether the observed drop
              indicates normal qualification, avoidable friction or a
              measurement problem.
            </p>

            <div className="mt-8 rounded-[18px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04] p-5">
              <div className="flex gap-4">
                <BrainCircuit
                  size={17}
                  className="mt-1 shrink-0 text-[#c4b5fd]"
                />

                <p className="text-[11px] leading-6 text-white/45">
                  A funnel identifies where behavior changes. It does
                  not automatically explain why. HYI uses that signal
                  to decide where deeper research should begin.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#070609] p-6 md:p-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(139,92,246,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.035) 1px, transparent 1px)",
                backgroundSize: "35px 35px",
              }}
            />

            <div className="relative space-y-3">
              {stages.map(([label, width], index) => (
                <FunnelLayer
                  key={label}
                  label={label}
                  width={width}
                  index={index}
                />
              ))}
            </div>

            <p className="relative mt-8 text-center font-mono text-[6px] tracking-[0.12em] text-white/20">
              CONCEPTUAL JOURNEY MODEL — NOT CUSTOMER PERFORMANCE DATA
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   FRICTION
========================================================= */

function FrictionMap() {
  return (
    <section className="bg-[#060508] px-5 py-32 md:px-10 md:py-48">
      <Container>
        <SectionLabel number="05">
          FRICTION MAP
        </SectionLabel>

        <h2 className="mt-10 max-w-[1050px] text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl">
          People rarely leave
          <span className="block text-white/20">
            because of one thing.
          </span>
        </h2>

        <p className="mt-8 max-w-[780px] text-[13px] leading-8 text-white/[0.52]">
          CRO research should consider multiple explanations before a
          treatment is designed. The goal is not to assume every
          abandonment represents bad UX; sometimes visitors are simply
          not the right audience or the offer is not appropriate.
        </p>

        <div className="mt-16 border-t border-white/[0.08]">
          {frictionTypes.map((item) => (
            <div
              key={item.number}
              className="group grid gap-5 border-b border-white/[0.08] py-8 transition-all duration-300 hover:pl-4 md:grid-cols-[80px_.6fr_1.4fr]"
            >
              <span className="font-mono text-[6px] text-[#a78bfa]/60">
                {item.number}
              </span>

              <h3 className="text-2xl font-medium tracking-[-0.04em] text-white/75">
                {item.title}
              </h3>

              <p className="text-[13px] leading-7 text-white/[0.48]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   BEHAVIOR MAP
========================================================= */

function BehaviorMap() {
  const points = [
    {
      left: "18%",
      top: "21%",
      size: 75,
    },
    {
      left: "33%",
      top: "31%",
      size: 50,
    },
    {
      left: "62%",
      top: "20%",
      size: 85,
    },
    {
      left: "72%",
      top: "44%",
      size: 55,
    },
    {
      left: "48%",
      top: "55%",
      size: 100,
    },
    {
      left: "29%",
      top: "68%",
      size: 62,
    },
    {
      left: "68%",
      top: "76%",
      size: 72,
    },
  ];

  return (
    <section className="bg-black px-5 py-32 md:px-10 md:py-48">
      <Container>
        <SectionLabel number="06">
          BEHAVIORAL RESEARCH
        </SectionLabel>

        <div className="mt-10 grid gap-16 lg:grid-cols-[1.15fr_.85fr]">
          <div className="relative min-h-[680px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#070609] p-5">
            <div className="rounded-[22px] border border-white/[0.07] bg-[#0a090c]">
              <div className="flex h-11 items-center gap-2 border-b border-white/[0.07] px-4">
                <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/10" />

                <div className="ml-3 h-5 flex-1 rounded-full border border-white/[0.05] bg-white/[0.02]" />
              </div>

              <div className="relative h-[590px] overflow-hidden p-8">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-20 rounded-full bg-white/10" />

                  <div className="flex gap-3">
                    <div className="h-2 w-10 rounded-full bg-white/[0.05]" />
                    <div className="h-2 w-10 rounded-full bg-white/[0.05]" />
                  </div>
                </div>

                <div className="mt-16 h-6 w-[68%] rounded-full bg-white/10" />
                <div className="mt-3 h-6 w-[48%] rounded-full bg-white/[0.07]" />

                <div className="mt-7 h-2 w-[80%] rounded-full bg-white/[0.04]" />
                <div className="mt-2 h-2 w-[72%] rounded-full bg-white/[0.04]" />
                <div className="mt-2 h-2 w-[55%] rounded-full bg-white/[0.04]" />

                <div className="mt-8 h-11 w-36 rounded-full bg-[#8b5cf6]/30" />

                <div className="mt-16 grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((item) => (
                    <div
                      key={item}
                      className="h-[150px] rounded-[14px] border border-white/[0.05] bg-white/[0.015]"
                    />
                  ))}
                </div>

                {points.map((point, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.2, 0.7, 0.2],
                    }}
                    transition={{
                      duration: 2.5 + index * 0.3,
                      repeat: Infinity,
                    }}
                    style={{
                      left: point.left,
                      top: point.top,
                      width: point.size,
                      height: point.size,
                    }}
                    className="absolute rounded-full bg-[#a855f7]/30 blur-[15px]"
                  />
                ))}

                <motion.div
                  animate={{
                    x: [0, 80, 140, 50, 0],
                    y: [0, 50, 140, 210, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-[42%] top-[28%]"
                >
                  <MousePointer2
                    size={24}
                    className="fill-[#c4b5fd] text-[#c4b5fd]"
                  />
                </motion.div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 rounded-[14px] border border-white/[0.08] bg-black/80 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <Eye size={13} className="text-[#c4b5fd]" />

                <div>
                  <span className="block font-mono text-[5px] text-white/20">
                    BEHAVIOR MAP
                  </span>

                  <span className="mt-1 block font-mono text-[6px] text-white/45">
                    OBSERVATION MODE
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl">
              Observe first.
              <span className="block text-white/20">
                Explain carefully.
              </span>
            </h2>

            <p className="mt-8 text-[13px] leading-8 text-white/[0.52]">
              Heatmaps, session observations, surveys and analytics can
              help generate hypotheses about user behavior. They
              should be treated as evidence inputs rather than
              automatic explanations of intent.
            </p>

            <div className="mt-10 space-y-3">
              {[
                "Where does attention concentrate?",
                "Where does meaningful progression decline?",
                "Which interactions indicate confusion?",
                "Which questions repeatedly appear in feedback?",
                "Do important segments behave differently?",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/[0.07] py-4"
                >
                  <CircleDot
                    size={10}
                    className="shrink-0 text-[#a78bfa]"
                  />

                  <span className="text-[12px] text-white/48">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   WHAT TO OPTIMIZE
========================================================= */

function TestingTargets() {
  return (
    <section className="bg-[#060508] px-5 py-32 md:px-10 md:py-48">
      <Container>
        <SectionLabel number="07">
          OPTIMIZATION SURFACES
        </SectionLabel>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_.65fr]">
          <h2 className="text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl">
            What can CRO
            <span className="block text-white/20">
              actually optimize?
            </span>
          </h2>

          <p className="self-end text-[13px] leading-8 text-white/[0.5]">
            Almost every part of a digital journey can become an
            experiment surface, but prioritization matters. HYI focuses
            on questions where evidence suggests meaningful business
            impact.
          </p>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {testingTargets.map((item, index) => (
            <article
              key={item.title}
              className="group min-h-[300px] rounded-[22px] border border-white/[0.08] bg-[#09080c] p-7 transition-all duration-300 hover:border-[#8b5cf6]/25 hover:bg-[#8b5cf6]/[0.035]"
            >
              <span className="font-mono text-[6px] text-[#a78bfa]/50">
                SURFACE / {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-16 text-2xl font-medium tracking-[-0.04em]">
                {item.title}
              </h3>

              <p className="mt-5 text-[12px] leading-7 text-white/[0.48]">
                {item.text}
              </p>

              <ChevronRight
                size={15}
                className="mt-8 text-white/15 transition-all group-hover:translate-x-2 group-hover:text-[#a78bfa]"
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   EXPERIMENT MODEL
========================================================= */

function VariantCard({
  type,
  active,
}: {
  type: "A" | "B";
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-[22px] border p-5 ${
        active
          ? "border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.05]"
          : "border-white/[0.08] bg-[#08070a]"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[6px] text-white/25">
          VARIANT {type}
        </span>

        {active ? (
          <GlowDot />
        ) : (
          <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
        )}
      </div>

      <div className="mt-10">
        <div
          className={`h-4 rounded-full ${
            active
              ? "w-[85%] bg-[#a78bfa]/40"
              : "w-[68%] bg-white/10"
          }`}
        />

        <div className="mt-3 h-4 w-[55%] rounded-full bg-white/[0.06]" />

        <div className="mt-6 h-1.5 w-[90%] rounded-full bg-white/[0.04]" />
        <div className="mt-2 h-1.5 w-[75%] rounded-full bg-white/[0.04]" />
        <div className="mt-2 h-1.5 w-[60%] rounded-full bg-white/[0.04]" />

        <div
          className={`mt-8 h-9 w-28 rounded-full ${
            active ? "bg-[#8b5cf6]" : "bg-white/10"
          }`}
        />
      </div>

      <div className="mt-10 grid grid-cols-2 gap-2">
        <div className="h-16 rounded-[10px] border border-white/[0.05]" />
        <div className="h-16 rounded-[10px] border border-white/[0.05]" />
      </div>
    </div>
  );
}

function ExperimentEngine() {
  return (
    <section className="bg-black px-5 py-32 md:px-10 md:py-48">
      <Container>
        <SectionLabel number="08">
          EXPERIMENT ENGINE
        </SectionLabel>

        <div className="mt-10 grid items-center gap-16 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl">
              Turn assumptions
              <span className="block text-white/20">
                into testable
              </span>
              questions.
            </h2>

            <p className="mt-8 text-[13px] leading-8 text-white/[0.52]">
              A/B testing compares experiences under controlled
              conditions. A strong experiment starts with a written
              hypothesis and a predefined primary metric rather than
              choosing whichever result looks best afterward.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#070609] p-6 md:p-8">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(139,92,246,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.035) 1px, transparent 1px)",
                backgroundSize: "35px 35px",
              }}
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <GitBranch
                    size={14}
                    className="text-[#c4b5fd]"
                  />

                  <span className="font-mono text-[6px] tracking-[0.15em] text-white/30">
                    LIVE EXPERIMENT MODEL
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <GlowDot />

                  <span className="font-mono text-[5px] text-white/25">
                    RUNNING
                  </span>
                </div>
              </div>

              <div className="mt-10 grid gap-3 md:grid-cols-2">
                <VariantCard type="A" />
                <VariantCard type="B" active />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ["TRAFFIC", "50 / 50"],
                  ["PRIMARY METRIC", "Conversion"],
                  ["STATUS", "Collecting"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[15px] border border-white/[0.07] bg-black/60 p-4"
                  >
                    <span className="font-mono text-[5px] text-white/20">
                      {label}
                    </span>

                    <span className="mt-2 block font-mono text-[8px] text-white/50">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 font-mono text-[5px] tracking-[0.1em] text-white/15">
                VISUAL MODEL ONLY — NOT LIVE CUSTOMER DATA
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   METRICS
========================================================= */

function Metrics() {
  return (
    <section className="bg-[#060508] px-5 py-32 md:px-10 md:py-48">
      <Container>
        <SectionLabel number="09">
          MEASUREMENT FRAMEWORK
        </SectionLabel>

        <h2 className="mt-10 max-w-[1050px] text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl">
          Measure what
          <span className="block text-white/20">
            the business actually values.
          </span>
        </h2>

        <p className="mt-8 max-w-[800px] text-[13px] leading-8 text-white/[0.52]">
          Pageviews, clicks and scroll depth can help explain behavior,
          but they should not automatically become the decision metric.
          HYI connects experiment measurement to the business outcome
          the experience is supposed to create.
        </p>

        <div className="mt-16 grid gap-[1px] overflow-hidden rounded-[25px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="min-h-[260px] bg-[#09080c] p-7"
            >
              <span className="font-mono text-[6px] text-[#a78bfa]/50">
                METRIC / {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-14 text-2xl font-medium tracking-[-0.04em]">
                {metric.label}
              </h3>

              <p className="mt-5 text-[12px] leading-7 text-white/[0.48]">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   ANALYTICS CONSOLE
========================================================= */

function AnalyticsConsole() {
  const barsA = [
    28, 35, 32, 42, 38, 46, 43, 52, 49, 56, 53, 60, 58, 64,
    61, 68, 66, 72,
  ];

  const barsB = [
    31, 38, 36, 46, 43, 52, 49, 58, 55, 63, 61, 69, 66, 74,
    71, 79, 76, 84,
  ];

  return (
    <section className="bg-black px-5 py-32 md:px-10 md:py-48">
      <Container>
        <SectionLabel number="10">
          CONVERSION ANALYTICS
        </SectionLabel>

        <div className="mt-10 grid gap-16 lg:grid-cols-[1.15fr_.85fr]">
          <div className="rounded-[30px] border border-white/[0.08] bg-[#08070a] p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-[6px] tracking-[0.14em] text-white/25">
                  EXPERIMENT ANALYSIS
                </span>

                <p className="mt-2 text-sm text-white/55">
                  Primary conversion signal
                </p>
              </div>

              <Activity
                size={17}
                className="text-[#c4b5fd]"
              />
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3">
              <div className="rounded-[16px] border border-white/[0.07] bg-black p-5">
                <span className="font-mono text-[5px] text-white/20">
                  CONTROL
                </span>

                <span className="mt-3 block text-4xl font-medium tracking-[-0.05em] text-white/45">
                  4.12%
                </span>
              </div>

              <div className="rounded-[16px] border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.05] p-5">
                <span className="font-mono text-[5px] text-[#c4b5fd]/50">
                  CHALLENGER
                </span>

                <span className="mt-3 block text-4xl font-medium tracking-[-0.05em] text-[#c4b5fd]">
                  4.47%
                </span>
              </div>
            </div>

            <div className="relative mt-12 h-[280px] border-b border-l border-white/[0.07]">
              <div className="absolute inset-0 flex items-end gap-[4px] px-3">
                {barsA.map((value, index) => (
                  <div
                    key={`a-${index}`}
                    className="relative flex h-full flex-1 items-end"
                  >
                    <motion.div
                      initial={{
                        height: 0,
                      }}
                      whileInView={{
                        height: `${value}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.025,
                      }}
                      className="absolute bottom-0 left-0 w-[42%] rounded-t-sm bg-white/10"
                    />

                    <motion.div
                      initial={{
                        height: 0,
                      }}
                      whileInView={{
                        height: `${barsB[index]}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.025 + 0.1,
                      }}
                      className="absolute bottom-0 right-0 w-[42%] rounded-t-sm bg-[#8b5cf6]/55"
                    />
                  </div>
                ))}
              </div>

              {[25, 50, 75].map((line) => (
                <div
                  key={line}
                  style={{
                    bottom: `${line}%`,
                  }}
                  className="absolute left-0 right-0 border-t border-dashed border-white/[0.04]"
                />
              ))}
            </div>

            <div className="mt-5 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-sm bg-white/10" />
                <span className="font-mono text-[5px] text-white/20">
                  CONTROL
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-sm bg-[#8b5cf6]/55" />
                <span className="font-mono text-[5px] text-white/20">
                  CHALLENGER
                </span>
              </div>
            </div>

            <p className="mt-5 font-mono text-[5px] leading-5 text-white/15">
              DEMONSTRATION DATA ONLY. VALUES DO NOT REPRESENT HYI
              CUSTOMER RESULTS.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl">
              A bigger number
              <span className="block text-white/20">
                is not automatically
              </span>
              enough evidence.
            </h2>

            <p className="mt-8 text-[13px] leading-8 text-white/[0.52]">
              Experiment interpretation should account for the
              analysis framework, sample size, uncertainty, test
              duration and practical significance. HYI treats the
              experiment dashboard as evidence to interpret rather
              than a scoreboard to watch.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   HYI PROCESS
========================================================= */

function HYIProcess() {
  return (
    <section
      id="hyi-cro"
      className="bg-[#060508] px-5 py-32 md:px-10 md:py-48"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel number="11">
              HOW HYI WORKS
            </SectionLabel>

            <h2 className="mt-10 text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl">
              From business
              <span className="block text-white/20">
                problem to
              </span>
              validated learning.
            </h2>

            <p className="mt-8 text-[13px] leading-8 text-white/[0.52]">
              HYI connects strategy, analytics, UX, engineering and
              experimentation into one optimization workflow. Each
              stage exists to keep the business question, customer
              evidence, implemented treatment and measured outcome
              aligned.
            </p>
          </div>

          <div className="border-t border-white/[0.08]">
            {process.map((item, index) => (
              <motion.article
                key={item.step}
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-70px",
                }}
                transition={{
                  delay: Math.min(index * 0.03, 0.2),
                }}
                className="grid gap-5 border-b border-white/[0.08] py-9 md:grid-cols-[70px_.7fr_1.3fr]"
              >
                <span className="font-mono text-[7px] text-[#a78bfa]/60">
                  {item.step}
                </span>

                <h3 className="text-2xl font-medium tracking-[-0.04em] text-white/75">
                  {item.title}
                </h3>

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

/* =========================================================
   HYI SYSTEM ARCHITECTURE
========================================================= */

function CROSystemArchitecture() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-32 md:px-10 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[1200px] -translate-x-1/2 -translate-y-1/2 bg-[#7c3aed]/[0.045] blur-[220px]" />

      <Container className="relative">
        <SectionLabel number="12">
          CRO SYSTEM ARCHITECTURE
        </SectionLabel>

        <h2 className="mt-10 max-w-[1050px] text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl">
          Optimization is
          <span className="block text-white/20">
            a connected system.
          </span>
        </h2>

        <div className="relative mt-20">
          <div className="hidden lg:block">
            <svg
              viewBox="0 0 1200 300"
              className="absolute left-0 top-0 h-[300px] w-full"
            >
              <motion.path
                d="M100 150 H1100"
                stroke="rgba(167,139,250,.22)"
                strokeWidth="1"
                strokeDasharray="7 10"
                animate={{
                  strokeDashoffset: [0, -40],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </svg>
          </div>

          <div className="relative grid gap-3 md:grid-cols-2 lg:grid-cols-6">
            {systemNodes.map(
              ({ Icon, title, subtitle }, index) => (
                <motion.div
                  key={title}
                  animate={{
                    y: [-4, 4, -4],
                  }}
                  transition={{
                    duration: 5 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex min-h-[210px] flex-col items-center justify-center rounded-[22px] border border-white/[0.08] bg-[#08070a] p-6 text-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.05]">
                    <Icon
                      size={17}
                      strokeWidth={1}
                      className="text-[#c4b5fd]"
                    />
                  </div>

                  <h3 className="mt-6 text-lg font-medium">
                    {title}
                  </h3>

                  <span className="mt-2 font-mono text-[5px] uppercase tracking-[0.14em] text-white/20">
                    {subtitle}
                  </span>
                </motion.div>
              ),
            )}
          </div>
        </div>

        <div className="mt-12 rounded-[24px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.035] p-7 md:p-9">
          <div className="grid gap-8 md:grid-cols-[.7fr_1.3fr]">
            <div>
              <span className="font-mono text-[6px] tracking-[0.15em] text-[#c4b5fd]/50">
                SYSTEM PRINCIPLE
              </span>

              <h3 className="mt-4 text-3xl font-medium tracking-[-0.05em]">
                Evidence should survive the handoff.
              </h3>
            </div>

            <p className="text-[13px] leading-8 text-white/[0.5]">
              The insight found during research should remain visible
              when the hypothesis is written, when the variant is
              designed, when engineering implements it and when the
              result is analyzed. Otherwise the team can accidentally
              test a different question from the one it intended to
              answer.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   SEGMENTATION
========================================================= */

function Segmentation() {
  const segments = [
    ["Device", "Desktop / Mobile / Tablet"],
    ["Traffic source", "Search / Social / Direct / Referral"],
    ["Customer state", "New / Returning / Existing"],
    ["Intent", "Research / Evaluation / Transaction"],
    ["Geography", "Relevant market or region"],
    ["Product state", "Anonymous / Registered / Activated"],
  ];

  return (
    <section className="bg-[#060508] px-5 py-32 md:px-10 md:py-48">
      <Container>
        <SectionLabel number="13">
          SEGMENT CONTEXT
        </SectionLabel>

        <div className="mt-10 grid gap-16 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl">
              One rate can hide
              <span className="block text-white/20">
                many different
              </span>
              journeys.
            </h2>

            <p className="mt-8 text-[13px] leading-8 text-white/[0.52]">
              Aggregate conversion rates can conceal meaningful
              differences. A visitor arriving from a high-intent
              branded search may behave differently from someone
              discovering the product for the first time.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {segments.map(([title, value], index) => (
              <div
                key={title}
                className="rounded-[20px] border border-white/[0.08] bg-[#09080c] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[6px] text-[#a78bfa]/55">
                    SEGMENT / 0{index + 1}
                  </span>

                  <Layers3
                    size={13}
                    className="text-white/15"
                  />
                </div>

                <h3 className="mt-10 text-xl font-medium text-white/70">
                  {title}
                </h3>

                <p className="mt-3 font-mono text-[7px] leading-6 text-white/30">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   GUARDRAILS
========================================================= */

function Guardrails() {
  return (
    <section className="bg-black px-5 py-32 md:px-10 md:py-48">
      <Container>
        <SectionLabel number="14">
          GUARDRAIL METRICS
        </SectionLabel>

        <div className="mt-10 grid gap-16 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl">
              Improve one metric
              <span className="block text-white/20">
                without quietly
              </span>
              damaging another.
            </h2>

            <p className="mt-8 max-w-[680px] text-[13px] leading-8 text-white/[0.52]">
              Local optimization can create unintended effects. A form
              change may increase submissions while reducing lead
              quality. A promotional treatment may increase purchases
              while damaging margin. Guardrails help teams see those
              trade-offs.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/[0.08] bg-[#08070a] p-7">
            <div className="flex items-center gap-3">
              <ShieldCheck
                size={18}
                strokeWidth={1}
                className="text-[#c4b5fd]"
              />

              <span className="font-mono text-[7px] tracking-[0.14em] text-white/30">
                OPTIMIZATION SAFETY
              </span>
            </div>

            <div className="mt-9 space-y-3">
              {[
                ["Primary conversion", "Decision"],
                ["Lead quality", "Guardrail"],
                ["Revenue quality", "Guardrail"],
                ["Error rate", "Technical"],
                ["Cancellation", "Downstream"],
                ["Performance", "Experience"],
              ].map(([label, type], index) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-[14px] border border-white/[0.07] p-4"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        index === 0
                          ? "bg-[#a78bfa]"
                          : "bg-white/15"
                      }`}
                    />

                    <span className="text-[11px] text-white/50">
                      {label}
                    </span>
                  </div>

                  <span className="font-mono text-[5px] uppercase text-white/20">
                    {type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   COMMON MISTAKES
========================================================= */

function CommonMistakes() {
  return (
    <section className="bg-[#060508] px-5 py-32 md:px-10 md:py-48">
      <Container>
        <SectionLabel number="15">
          CRO FAILURE MODES
        </SectionLabel>

        <h2 className="mt-10 max-w-[1050px] text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl">
          What CRO
          <span className="block text-white/20">
            should not become.
          </span>
        </h2>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {mistakes.map((item, index) => (
            <article
              key={item.title}
              className="min-h-[300px] rounded-[22px] border border-white/[0.08] bg-[#09080c] p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[6px] text-[#a78bfa]/55">
                  FAILURE / 0{index + 1}
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] text-sm text-white/25">
                  ×
                </span>
              </div>

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

/* =========================================================
   PRINCIPLES
========================================================= */

function CROPrinciples() {
  return (
    <section className="bg-black px-5 py-32 md:px-10 md:py-48">
      <Container>
        <SectionLabel number="16">
          OPTIMIZATION PRINCIPLES
        </SectionLabel>

        <div className="mt-10 grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl">
              A disciplined
              <span className="block text-white/20">
                CRO program
              </span>
              compounds learning.
            </h2>
          </div>

          <div className="border-t border-white/[0.08]">
            {principles.map((principle, index) => (
              <div
                key={principle}
                className="flex items-center gap-5 border-b border-white/[0.08] py-5"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04]">
                  <Check
                    size={11}
                    className="text-[#c4b5fd]"
                  />
                </div>

                <p className="text-[13px] leading-7 text-white/[0.55]">
                  {principle}
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

/* =========================================================
   OPTIMIZATION LOOP MODEL
========================================================= */

function OptimizationLoop() {
  const nodes = [
    {
      label: "Measure",
      angle: 0,
    },
    {
      label: "Research",
      angle: 60,
    },
    {
      label: "Hypothesize",
      angle: 120,
    },
    {
      label: "Build",
      angle: 180,
    },
    {
      label: "Test",
      angle: 240,
    },
    {
      label: "Learn",
      angle: 300,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#060508] px-5 py-32 md:px-10 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.06] blur-[220px]" />

      <Container className="relative">
        <SectionLabel number="17">
          CONTINUOUS OPTIMIZATION
        </SectionLabel>

        <div className="mt-10 grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl">
              CRO has no
              <span className="block text-white/20">
                permanent finish
              </span>
              line.
            </h2>

            <p className="mt-8 text-[13px] leading-8 text-white/[0.52]">
              Markets change. Products change. Acquisition channels
              change. Customer expectations change. Optimization is
              therefore better treated as a continuous learning loop
              than a one-time website project.
            </p>
          </div>

          <div className="relative mx-auto h-[620px] w-full max-w-[650px]">
            <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#8b5cf6]/25"
            />

            <div className="absolute left-1/2 top-1/2 flex h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#0b0810] shadow-[0_0_80px_rgba(124,58,237,.12)]">
              <RefreshCore />

              <span className="mt-4 font-mono text-[7px] tracking-[0.14em] text-white/35">
                LEARNING LOOP
              </span>
            </div>

            {nodes.map((node, index) => {
              const radians =
                (node.angle * Math.PI) / 180;

              const radius = 235;

              const x =
                Math.cos(radians) * radius;

              const y =
                Math.sin(radians) * radius;

              return (
                <motion.div
                  key={node.label}
                  animate={{
                    y: [-4, 4, -4],
                  }}
                  transition={{
                    duration: 4 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  className="absolute flex h-[90px] w-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[16px] border border-white/[0.08] bg-[#09080c]"
                >
                  <span className="font-mono text-[7px] text-white/45">
                    {node.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function RefreshCore() {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-[#a78bfa]/40"
    >
      <Activity
        size={17}
        className="text-[#c4b5fd]"
      />
    </motion.div>
  );
}

/* =========================================================
   KNOWLEDGE SYSTEM
========================================================= */

function KnowledgeSystem() {
  const knowledge = [
    {
      Icon: FileText,
      title: "Hypothesis",
      text:
        "What did we believe would happen, and why did we believe it?",
    },
    {
      Icon: GitBranch,
      title: "Treatment",
      text:
        "What exactly changed between the evaluated experiences?",
    },
    {
      Icon: Target,
      title: "Metric",
      text:
        "Which predefined outcome determined the experiment decision?",
    },
    {
      Icon: BarChart3,
      title: "Result",
      text:
        "What evidence did the experiment produce and with what uncertainty?",
    },
    {
      Icon: BrainCircuit,
      title: "Learning",
      text:
        "What did the result teach us about customers or the journey?",
    },
    {
      Icon: ArrowRight,
      title: "Next question",
      text:
        "Which new hypothesis becomes more valuable because of this learning?",
    },
  ];

  return (
    <section className="bg-black px-5 py-32 md:px-10 md:py-48">
      <Container>
        <SectionLabel number="18">
          EXPERIMENT KNOWLEDGE
        </SectionLabel>

        <h2 className="mt-10 max-w-[1050px] text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl">
          Experiments disappear.
          <span className="block text-white/20">
            Learning should not.
          </span>
        </h2>

        <p className="mt-8 max-w-[760px] text-[13px] leading-8 text-white/[0.52]">
          A mature CRO program preserves experiment history. This
          reduces repeated mistakes and lets future teams build on
          prior evidence instead of restarting from assumptions.
        </p>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {knowledge.map(
            ({ Icon, title, text }, index) => (
              <article
                key={title}
                className="rounded-[22px] border border-white/[0.08] bg-[#08070a] p-7"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={17}
                    strokeWidth={1}
                    className="text-[#c4b5fd]"
                  />

                  <span className="font-mono text-[5px] text-white/15">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-14 text-2xl font-medium tracking-[-0.04em]">
                  {title}
                </h3>

                <p className="mt-5 text-[12px] leading-7 text-white/[0.48]">
                  {text}
                </p>
              </article>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   CRO VS RANDOM CHANGES
========================================================= */

function CROComparison() {
  const rows = [
    ["Starting point", "Opinion", "Evidence"],
    ["Change", "Whatever looks better", "Hypothesis-driven treatment"],
    ["Success", "Any positive metric", "Predefined primary metric"],
    ["Execution", "Before / after", "Controlled comparison where appropriate"],
    ["Interpretation", "Dashboard movement", "Evidence + uncertainty + business impact"],
    ["Documentation", "Screenshot", "Hypothesis + result + learning"],
    ["Next step", "Another idea", "Next evidence-backed question"],
  ];

  return (
    <section className="bg-[#060508] px-5 py-32 md:px-10 md:py-48">
      <Container>
        <SectionLabel number="19">
          CRO VS RANDOM OPTIMIZATION
        </SectionLabel>

        <h2 className="mt-10 max-w-[1000px] text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl">
          Optimization without
          <span className="block text-white/20">
            learning is just change.
          </span>
        </h2>

        <div className="mt-16 overflow-hidden rounded-[24px] border border-white/[0.08]">
          <div className="grid grid-cols-[.7fr_1fr_1fr] border-b border-white/[0.08] bg-[#09080c] p-5 md:p-7">
            <span className="font-mono text-[6px] text-white/20">
              DIMENSION
            </span>

            <span className="font-mono text-[6px] text-white/20">
              RANDOM CHANGE
            </span>

            <span className="font-mono text-[6px] text-[#c4b5fd]/55">
              HYI CRO
            </span>
          </div>

          {rows.map(([label, random, cro]) => (
            <div
              key={label}
              className="grid grid-cols-[.7fr_1fr_1fr] border-b border-white/[0.07] p-5 last:border-b-0 md:p-7"
            >
              <span className="text-[11px] font-medium text-white/55">
                {label}
              </span>

              <span className="pr-4 text-[11px] leading-6 text-white/30">
                {random}
              </span>

              <span className="text-[11px] leading-6 text-white/55">
                {cro}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   FINAL MANIFESTO
========================================================= */

function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-36 md:px-10 md:py-56">
      <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.06] blur-[260px]" />

      <Container className="relative">
        <div className="border-y border-white/[0.08] py-16 md:py-24">
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]">
            HYI CRO PHILOSOPHY
          </span>

          <h2 className="mt-10 max-w-[1300px] text-[clamp(3.8rem,7.5vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.09em]">
            Don&apos;t optimize
            <span className="block text-white/20">
              pages.
            </span>

            <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
              Optimize decisions.
            </span>
          </h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <p className="max-w-[620px] text-[14px] leading-8 text-white/[0.55]">
              Pages, forms and funnels are interfaces through which
              customer decisions happen. HYI uses CRO to understand
              those decisions and create measurable improvements
              without replacing evidence with design preference.
            </p>

            <p className="max-w-[620px] text-[14px] leading-8 text-white/[0.45]">
              The long-term advantage is not one winning experiment.
              It is an organization that becomes progressively better
              at understanding what its customers need and which
              changes genuinely improve their experience.
            </p>
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
    <section className="relative overflow-hidden bg-[#050407] px-5 py-40 md:px-10 md:py-60">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.035) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 75%)",
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-[800px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.08] blur-[230px]" />

      <Container className="relative text-center">
        <Pill Icon={Zap}>
          HYI Conversion Rate Optimization
        </Pill>

        <h2 className="mx-auto mt-10 max-w-[1300px] text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.8] tracking-[-0.095em]">
          Learn what
          <span className="block text-white/20">
            moves people.
          </span>

          <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
            Then improve it.
          </span>
        </h2>

        <p className="mx-auto mt-10 max-w-[760px] text-[14px] leading-8 text-white/[0.55]">
          HYI brings research, experimentation, analytics and
          engineering together to create a repeatable conversion
          optimization system built around evidence and measurable
          business outcomes.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <motion.a
            whileHover={{
              scale: 1.03,
            }}
            href="#hyi-cro"
            className="flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-9 py-5 text-[12px] shadow-[0_0_60px_rgba(124,58,237,.25)]"
          >
            Explore HYI CRO
            <ArrowRight size={14} />
          </motion.a>

          <a
            href="#learn-cro"
            className="flex items-center gap-4 rounded-full border border-white/10 px-9 py-5 text-[12px] text-white/55"
          >
            Review CRO fundamentals
            <ArrowDown size={14} />
          </a>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ConversionRateOptimizationPage() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#6d28d9] via-[#a855f7] to-[#e879f9]"
      />

      <Header />

      <Hero />

      <CROTicker />

      <CROIntroduction />

      <ConversionEquation />

      <DiagnosticSystem />

      <FunnelIntelligence />

      <FrictionMap />

      <BehaviorMap />

      <TestingTargets />

      <ExperimentEngine />

      <Metrics />

      <AnalyticsConsole />

      <HYIProcess />

      <CROSystemArchitecture />

      <Segmentation />

      <Guardrails />

      <CommonMistakes />

      <CROPrinciples />

      <OptimizationLoop />

      <KnowledgeSystem />

      <CROComparison />

      <Manifesto />

      <FinalCTA />

      <Footer />
    </main>
  );
}