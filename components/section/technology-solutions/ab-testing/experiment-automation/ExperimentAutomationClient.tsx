"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  Bot,
  CheckCircle2,
  CircleDot,
  Database,
  Eye,
  Gauge,
  GitBranch,
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

import type { ElementType, ReactNode } from "react";

/* =========================================================
   DATA
========================================================= */

const automationCapabilities = [
  {
    number: "01",
    Icon: GitBranch,
    title: "Automated traffic allocation",
    text:
      "Route eligible users into experiment variants according to predefined allocation rules while keeping assignment logic consistent throughout the test.",
  },
  {
    number: "02",
    Icon: Database,
    title: "Event collection",
    text:
      "Connect experiment exposure with the product events and business outcomes required to understand what happened after each user entered a variant.",
  },
  {
    number: "03",
    Icon: Activity,
    title: "Continuous monitoring",
    text:
      "Observe experiment health, exposure patterns, primary outcomes and important guardrail signals without relying on repetitive manual checks.",
  },
  {
    number: "04",
    Icon: ShieldCheck,
    title: "Guardrail automation",
    text:
      "Define operational or experience metrics that should be watched alongside the primary goal so important regressions can be surfaced quickly.",
  },
  {
    number: "05",
    Icon: Bot,
    title: "Decision assistance",
    text:
      "Organize experiment evidence into a structured decision layer that helps teams understand whether to continue, investigate, stop or prepare a rollout.",
  },
  {
    number: "06",
    Icon: RefreshCcw,
    title: "Learning loop",
    text:
      "Store experiment outcomes and observations so completed tests become inputs for future hypotheses instead of disappearing after a launch decision.",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Trigger",
    text: "Experiment becomes eligible to run.",
    Icon: Zap,
  },
  {
    number: "02",
    title: "Assign",
    text: "Traffic enters controlled variants.",
    Icon: GitBranch,
  },
  {
    number: "03",
    title: "Observe",
    text: "Events and outcomes are collected.",
    Icon: Eye,
  },
  {
    number: "04",
    title: "Evaluate",
    text: "Evidence and guardrails are reviewed.",
    Icon: Activity,
  },
  {
    number: "05",
    title: "Act",
    text: "Teams receive decision-ready context.",
    Icon: Play,
  },
];

const operatingRules = [
  "Keep variant assignment deterministic",
  "Separate exposure from conversion events",
  "Define primary metrics before launch",
  "Monitor operational guardrails",
  "Preserve experiment history",
  "Automate repetitive checks, not product judgment",
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
    <div className={`mx-auto w-full max-w-[1400px] ${className}`}>
      {children}
    </div>
  );
}

function Micro({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/30">
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

      <span className="h-px w-8 bg-white/15" />

      <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/35">
        {children}
      </span>
    </div>
  );
}

function StatusDot({
  blue = false,
}: {
  blue?: boolean;
}) {
  return (
    <span className="relative flex h-2 w-2">
      <span
        className={`absolute inline-flex h-full w-full animate-ping rounded-full ${
          blue ? "bg-[#60a5fa]" : "bg-[#a78bfa]"
        } opacity-40`}
      />

      <span
        className={`relative inline-flex h-2 w-2 rounded-full ${
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
    <section className="relative overflow-hidden bg-[#050505] px-5  md:px-10  ">
      {/* background grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "62px 62px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 92%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 92%)",
        }}
      />

      <div className="pointer-events-none absolute -left-[300px] top-[100px] h-[650px] w-[650px] rounded-full bg-[#7c3aed]/[0.08] blur-[180px]" />

      <div className="pointer-events-none absolute -right-[300px] top-[260px] h-[650px] w-[650px] rounded-full bg-[#2563eb]/[0.07] blur-[190px]" />

      <Container className="relative">
        {/* upper status */}

        {/* <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <StatusDot />

            <Micro>HYI / Experiment Automation</Micro>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <Micro>Trigger</Micro>
            <Micro>Route</Micro>
            <Micro>Observe</Micro>
            <Micro>Evaluate</Micro>
            <Micro>Act</Micro>
          </div>
        </div> */}

        {/* centered headline */}

        <div className="mx-auto max-w-[1050px] pt-20 text-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-4 py-2"
          >
            <Bot size={11} className="text-[#a78bfa]" />

            <Micro>Autonomous Experiment Operations</Micro>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="mt-9 text-[clamp(4rem,8.2vw,8.2rem)] font-semibold leading-[0.82] tracking-[-0.085em]"
          >
            Experiments that

            <span className="block text-white/20">
              run with
            </span>

            <span className="block bg-gradient-to-r from-[#c4b5fd] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
              intelligence.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-9 max-w-[760px] text-[14px] leading-8 text-white/[0.55]"
          >
            Experiment automation turns repetitive testing operations into
            a controlled system. HYI helps connect traffic assignment,
            exposure tracking, event collection, monitoring, guardrails
            and experiment evidence so teams can spend less time operating
            tests manually and more time understanding what the tests teach.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <a
              href="#automation-engine"
              className="flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-medium text-black transition hover:bg-white/90"
            >
              Explore automation engine
              <ArrowDown size={13} />
            </a>

            <a
              href="#how-hyi-works"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[11px] text-white/55 transition hover:bg-white/[0.05]"
            >
              How HYI works
              <ArrowRight size={13} />
            </a>
          </motion.div>
        </div>

        <div id="automation-engine" className="mt-20">
          <AutomationControlRoom />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   CONTROL ROOM
========================================================= */

function AutomationControlRoom() {
  return (
    <div className="relative mx-auto max-w-[1260px] overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#080808] p-5 shadow-[0_30px_100px_rgba(0,0,0,.45)] md:p-7">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.055) 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="relative">
        {/* control room header */}

        <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
              <Workflow size={14} className="text-[#a78bfa]" />
            </div>

            <div>
              <Micro>Automation Control Room</Micro>

              <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.12em] text-white/15">
                Experiment / AUTO-024
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <StatusDot blue />
            <Micro>System running</Micro>
          </div>
        </div>

        {/* main model */}

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.35fr_.65fr]">
          <AutomationGraph />
          <ExperimentStatusPanel />
        </div>

        {/* smaller models */}

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <TrafficRouter />
          <GuardrailScanner />
          <DecisionEngine />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   AUTOMATION GRAPH
========================================================= */

function AutomationGraph() {
  return (
    <div className="relative min-h-[440px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505] p-5 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <Micro>Live Experiment Graph</Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Automated movement from eligibility to experiment evidence
          </p>
        </div>

        <Radio size={13} className="text-[#a78bfa]" />
      </div>

      <div className="relative mt-8 h-[335px]">
        {/* SVG network */}

        <svg
          viewBox="0 0 900 340"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          <defs>
            <linearGradient
              id="automationLine"
              x1="0"
              x2="1"
            >
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>

          <motion.path
            d="M90 170 H225"
            stroke="url(#automationLine)"
            strokeOpacity=".35"
            strokeDasharray="6 8"
            animate={{ strokeDashoffset: [0, -50] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.path
            d="M300 170 H420"
            stroke="url(#automationLine)"
            strokeOpacity=".35"
            strokeDasharray="6 8"
            animate={{ strokeDashoffset: [0, -50] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.path
            d="M500 170 H620"
            stroke="url(#automationLine)"
            strokeOpacity=".35"
            strokeDasharray="6 8"
            animate={{ strokeDashoffset: [0, -50] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.path
            d="M700 170 H820"
            stroke="url(#automationLine)"
            strokeOpacity=".35"
            strokeDasharray="6 8"
            animate={{ strokeDashoffset: [0, -50] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* upper branch */}

          <motion.path
            d="M460 145 C460 85 590 70 680 80"
            stroke="rgba(167,139,250,.22)"
            strokeDasharray="4 8"
            animate={{ strokeDashoffset: [0, -40] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* lower branch */}

          <motion.path
            d="M460 195 C460 260 590 275 680 260"
            stroke="rgba(96,165,250,.22)"
            strokeDasharray="4 8"
            animate={{ strokeDashoffset: [0, -40] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>

        <AutomationNode
          className="left-[1%] top-1/2 -translate-y-1/2"
          Icon={Zap}
          title="Trigger"
          subtitle="Eligible"
          tone="purple"
        />

        <AutomationNode
          className="left-[24%] top-1/2 -translate-y-1/2"
          Icon={GitBranch}
          title="Assign"
          subtitle="50 / 50"
          tone="blue"
        />

        <AutomationCore />

        <AutomationNode
          className="right-[22%] top-1/2 -translate-y-1/2"
          Icon={Eye}
          title="Observe"
          subtitle="Events"
          tone="purple"
        />

        <AutomationNode
          className="right-[1%] top-1/2 -translate-y-1/2"
          Icon={CheckCircle2}
          title="Action"
          subtitle="Review"
          tone="blue"
        />

        <SmallSignalNode
          className="right-[15%] top-[6%]"
          label="Primary metric"
          blue={false}
        />

        <SmallSignalNode
          className="right-[15%] bottom-[6%]"
          label="Guardrail"
          blue
        />
      </div>

      <div className="grid grid-cols-3 divide-x divide-white/[0.06] border-t border-white/[0.06] pt-4">
        <GraphMetric label="Traffic" value="50 / 50" />
        <GraphMetric label="Pipeline" value="Active" />
        <GraphMetric label="Signals" value="Healthy" />
      </div>
    </div>
  );
}

function AutomationNode({
  className,
  Icon,
  title,
  subtitle,
  tone,
}: {
  className: string;
  Icon: ElementType;
  title: string;
  subtitle: string;
  tone: "purple" | "blue";
}) {
  return (
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{
        duration: tone === "purple" ? 4 : 4.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute z-10 w-[90px] rounded-[14px] border bg-[#090909] p-3 ${
        tone === "purple"
          ? "border-[#8b5cf6]/25"
          : "border-[#60a5fa]/25"
      } ${className}`}
    >
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-[9px] ${
          tone === "purple"
            ? "bg-[#8b5cf6]/10"
            : "bg-[#60a5fa]/10"
        }`}
      >
        <Icon
          size={12}
          className={
            tone === "purple"
              ? "text-[#a78bfa]"
              : "text-[#60a5fa]"
          }
        />
      </div>

      <span className="mt-4 block text-[10px] font-medium text-white/70">
        {title}
      </span>

      <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.1em] text-white/20">
        {subtitle}
      </span>
    </motion.div>
  );
}

function AutomationCore() {
  return (
    <motion.div
      animate={{
        boxShadow: [
          "0 0 0 rgba(139,92,246,0)",
          "0 0 60px rgba(139,92,246,.16)",
          "0 0 0 rgba(139,92,246,0)",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className="absolute left-1/2 top-1/2 z-20 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#09080d]"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[8px] rounded-full border border-dashed border-[#60a5fa]/25"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[20px] rounded-full border border-dashed border-[#a78bfa]/25"
      />

      <div className="relative text-center">
        <Bot
          size={18}
          className="mx-auto text-[#c4b5fd]"
        />

        <span className="mt-3 block font-mono text-[6px] uppercase tracking-[0.13em] text-white/45">
          HYI Engine
        </span>

        <span className="mt-1 block font-mono text-[5px] uppercase tracking-[0.1em] text-[#60a5fa]/60">
          orchestrating
        </span>
      </div>
    </motion.div>
  );
}

function SmallSignalNode({
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
      animate={{ opacity: [0.45, 1, 0.45] }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className={`absolute rounded-full border bg-[#080808] px-3 py-2 ${
        blue
          ? "border-[#60a5fa]/20"
          : "border-[#8b5cf6]/20"
      } ${className}`}
    >
      <div className="flex items-center gap-2">
        <StatusDot blue={blue} />

        <span className="font-mono text-[5px] uppercase tracking-[0.1em] text-white/30">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

function GraphMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="px-4">
      <Micro>{label}</Micro>

      <span className="mt-2 block font-mono text-[10px] text-white/60">
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   STATUS PANEL
========================================================= */

function ExperimentStatusPanel() {
  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-[#050505] p-6">
      <div className="flex items-center justify-between">
        <Micro>Automation State</Micro>

        <Settings2
          size={13}
          className="text-white/30"
        />
      </div>

      <div className="mt-8">
        <div className="flex items-end justify-between">
          <div>
            <span className="block text-4xl font-semibold tracking-[-0.06em] text-white/90">
              LIVE
            </span>

            <span className="mt-2 block font-mono text-[6px] uppercase tracking-[0.15em] text-[#a78bfa]">
              experiment running
            </span>
          </div>

          <StatusDot />
        </div>

        <div className="mt-8 space-y-3">
          <StatusRow
            label="Eligibility"
            value="Active"
            progress={92}
            purple
          />

          <StatusRow
            label="Assignment"
            value="Stable"
            progress={84}
          />

          <StatusRow
            label="Collection"
            value="Healthy"
            progress={88}
            purple
          />

          <StatusRow
            label="Guardrails"
            value="Watching"
            progress={76}
          />
        </div>

        <div className="mt-8 rounded-[14px] border border-white/[0.06] bg-white/[0.015] p-4">
          <div className="flex items-center gap-2">
            <CircleDot
              size={10}
              className="text-[#60a5fa]"
            />

            <Micro>Automation note</Micro>
          </div>

          <p className="mt-3 text-[9px] leading-5 text-white/30">
            Automation handles repeatable experiment operations while
            product and business teams remain responsible for interpreting
            context and deciding what action is appropriate.
          </p>
        </div>
      </div>
    </div>
  );
}

function StatusRow({
  label,
  value,
  progress,
  purple = false,
}: {
  label: string;
  value: string;
  progress: number;
  purple?: boolean;
}) {
  return (
    <div className="rounded-[11px] border border-white/[0.06] bg-white/[0.012] p-3">
      <div className="flex items-center justify-between">
        <Micro>{label}</Micro>

        <span className="font-mono text-[6px] uppercase tracking-[0.1em] text-white/35">
          {value}
        </span>
      </div>

      <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-white/[0.04]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: `${progress}%`,
          }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={`h-full rounded-full ${
            purple
              ? "bg-[#8b5cf6]"
              : "bg-[#60a5fa]"
          }`}
        />
      </div>
    </div>
  );
}

/* =========================================================
   TRAFFIC ROUTER
========================================================= */

function TrafficRouter() {
  return (
    <MiniModel
      title="Traffic Router"
      Icon={GitBranch}
    >
      <div className="relative mt-7 h-[155px]">
        <div className="absolute left-0 top-1/2 h-px w-[30%] bg-gradient-to-r from-transparent to-white/15" />

        <div className="absolute right-0 top-[28%] h-px w-[30%] bg-gradient-to-r from-white/15 to-transparent" />

        <div className="absolute right-0 top-[72%] h-px w-[30%] bg-gradient-to-r from-white/15 to-transparent" />

        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(139,92,246,0)",
              "0 0 30px rgba(139,92,246,.18)",
              "0 0 0 rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.06]"
        >
          <GitBranch
            size={15}
            className="text-[#a78bfa]"
          />
        </motion.div>

        <div className="absolute right-0 top-[15%] rounded-[8px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-3 py-2">
          <Micro>Variant A</Micro>
        </div>

        <div className="absolute bottom-[15%] right-0 rounded-[8px] border border-[#60a5fa]/20 bg-[#60a5fa]/[0.05] px-3 py-2">
          <Micro>Variant B</Micro>
        </div>
      </div>

      <p className="text-[9px] leading-5 text-white/30">
        Eligible users can be assigned through consistent allocation rules
        without manually routing every experiment session.
      </p>
    </MiniModel>
  );
}

/* =========================================================
   GUARDRAIL SCANNER
========================================================= */

function GuardrailScanner() {
  return (
    <MiniModel
      title="Guardrail Scanner"
      Icon={ShieldCheck}
    >
      <div className="relative mt-7 h-[155px] overflow-hidden rounded-[12px] border border-white/[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px)",
            backgroundSize: "100% 30px",
          }}
        />

        <motion.div
          animate={{
            y: [0, 145, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#60a5fa] to-transparent shadow-[0_0_15px_rgba(96,165,250,.45)]"
        />

        <div className="absolute inset-0 flex flex-col justify-center gap-4 px-5">
          <GuardrailRow
            label="Errors"
            status="Stable"
          />

          <GuardrailRow
            label="Latency"
            status="Stable"
          />

          <GuardrailRow
            label="Drop-off"
            status="Watching"
          />
        </div>
      </div>

      <p className="mt-4 text-[9px] leading-5 text-white/30">
        Supporting metrics provide context around the primary outcome and
        help teams notice potentially undesirable side effects.
      </p>
    </MiniModel>
  );
}

function GuardrailRow({
  label,
  status,
}: {
  label: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <Micro>{label}</Micro>

      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" />

        <span className="font-mono text-[6px] uppercase tracking-[0.1em] text-white/30">
          {status}
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   DECISION ENGINE
========================================================= */

function DecisionEngine() {
  return (
    <MiniModel
      title="Decision Engine"
      Icon={Bot}
    >
      <div className="relative mt-7 flex h-[155px] items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[130px] w-[130px] rounded-full border border-dashed border-white/[0.08]"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[98px] w-[98px] rounded-full border border-dashed border-[#60a5fa]/20"
        />

        <div className="relative flex h-[68px] w-[68px] items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.07]">
          <Bot
            size={17}
            className="text-[#c4b5fd]"
          />
        </div>

        <DecisionChip
          className="left-[2%] top-[5%]"
          text="Continue"
        />

        <DecisionChip
          className="right-[0%] top-[15%]"
          text="Review"
        />

        <DecisionChip
          className="bottom-[4%] left-[10%]"
          text="Pause"
        />

        <DecisionChip
          className="bottom-[0%] right-[3%]"
          text="Rollout"
        />
      </div>

      <p className="text-[9px] leading-5 text-white/30">
        The system organizes evidence into possible operational states;
        final product decisions still require human context and judgment.
      </p>
    </MiniModel>
  );
}

function DecisionChip({
  className,
  text,
}: {
  className: string;
  text: string;
}) {
  return (
    <motion.div
      animate={{ opacity: [0.35, 1, 0.35] }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
      }}
      className={`absolute rounded-full border border-white/[0.07] bg-[#090909] px-3 py-2 ${className}`}
    >
      <span className="font-mono text-[5px] uppercase tracking-[0.1em] text-white/30">
        {text}
      </span>
    </motion.div>
  );
}

function MiniModel({
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
      whileHover={{ y: -3 }}
      className="rounded-[18px] border border-white/[0.07] bg-[#050505] p-5"
    >
      <div className="flex items-center justify-between">
        <Micro>{title}</Micro>

        <Icon
          size={12}
          className="text-white/30"
        />
      </div>

      {children}
    </motion.article>
  );
}

/* =========================================================
   WHAT AUTOMATION MEANS
========================================================= */

function AutomationExplanation() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10 md:py-32">
      <Container>
        <SectionLabel number="01">
          Understanding Experiment Automation
        </SectionLabel>

        <div className="mt-10 grid gap-12 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <h2 className="max-w-[650px] text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              Automate the

              <span className="block text-white/20">
                operations.
              </span>

              <span className="block">
                Keep the thinking.
              </span>
            </h2>
          </div>

          <div className="self-end">
            <p className="text-[14px] leading-8 text-white/[0.55]">
              Experiment automation is not simply about launching more
              tests. Its purpose is to make repeatable testing operations
              consistent: eligibility, assignment, instrumentation,
              monitoring and experiment-state management can follow a
              controlled process rather than a collection of manual tasks.
            </p>

            <p className="mt-5 text-[12px] leading-7 text-white/[0.38]">
              Human judgment remains important. Teams still need to choose
              meaningful hypotheses, define useful metrics and decide how
              evidence should influence a product or business decision.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-3">
          <DefinitionCard
            number="01"
            title="Repeatability"
            text="Common experiment operations follow the same defined workflow instead of being rebuilt manually for every test."
          />

          <DefinitionCard
            number="02"
            title="Observability"
            text="Experiment health and important signals remain visible while the test is running."
          />

          <DefinitionCard
            number="03"
            title="Governance"
            text="Assignment, metrics, guardrails and experiment states can be managed through explicit rules and recorded decisions."
          />
        </div>
      </Container>
    </section>
  );
}

function DefinitionCard({
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
      whileHover={{ y: -4 }}
      className="rounded-[18px] border border-white/[0.07] bg-[#080808] p-7"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[7px] text-white/20">
          {number}
        </span>

        <CircleDot
          size={11}
          className="text-[#a78bfa]"
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
   HYI CAPABILITIES
========================================================= */

function Capabilities() {
  return (
    <section
      id="how-hyi-works"
      className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10 md:py-32"
    >
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel number="02">
              HYI Automation Layer
            </SectionLabel>

            <h2 className="mt-9 max-w-[700px] text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              From test setup to

              <span className="text-white/20">
                {" "}experiment learning.
              </span>
            </h2>
          </div>

          <p className="max-w-[430px] text-[12px] leading-7 text-white/40">
            HYI structures automation around the experiment lifecycle so
            the technical workflow supports reliable learning rather than
            simply increasing testing volume.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {automationCapabilities.map(
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
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{ y: -4 }}
                className="min-h-[250px] rounded-[18px] border border-white/[0.07] bg-[#050505] p-6"
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
   AUTOMATION LOOP
========================================================= */

function AutomationLoop() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div className="self-center">
            <SectionLabel number="03">
              Experiment Lifecycle
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-6xl">
              One connected

              <span className="block text-white/20">
                automation loop.
              </span>
            </h2>

            <p className="mt-7 max-w-[450px] text-[12px] leading-7 text-white/[0.43]">
              Instead of treating experiment setup, data collection and
              analysis as disconnected activities, HYI connects them into
              an observable workflow with clear states and responsibilities.
            </p>
          </div>

          <WorkflowLoopModel />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   WORKFLOW LOOP MODEL
========================================================= */

function WorkflowLoopModel() {
  return (
    <div className="relative min-h-[510px] overflow-hidden rounded-[25px] border border-white/[0.08] bg-[#080808] p-6">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative flex items-center justify-between">
        <div>
          <Micro>Autonomous Lifecycle</Micro>

          <p className="mt-2 text-[9px] text-white/25">
            A continuously observable experiment workflow
          </p>
        </div>

        <RefreshCcw
          size={13}
          className="text-[#60a5fa]"
        />
      </div>

      <div className="relative mt-5 flex h-[400px] items-center justify-center">
        {/* rings */}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-white/[0.07]"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[270px] w-[270px] rounded-full border border-dashed border-[#8b5cf6]/15"
        />

        {/* center */}

        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(139,92,246,0)",
              "0 0 70px rgba(139,92,246,.16)",
              "0 0 0 rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute flex h-[145px] w-[145px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#09080d]"
        >
          <Bot
            size={22}
            strokeWidth={1.2}
            className="text-[#c4b5fd]"
          />

          <span className="mt-4 font-mono text-[7px] uppercase tracking-[0.14em] text-white/45">
            HYI
          </span>

          <span className="mt-1 font-mono text-[5px] uppercase tracking-[0.12em] text-[#60a5fa]/70">
            automation
          </span>
        </motion.div>

        {/* workflow nodes */}

        <LoopNode
          className="left-1/2 top-[2%] -translate-x-1/2"
          Icon={Zap}
          title="Trigger"
          index={0}
        />

        <LoopNode
          className="right-[5%] top-[26%]"
          Icon={GitBranch}
          title="Assign"
          index={1}
        />

        <LoopNode
          className="bottom-[6%] right-[14%]"
          Icon={Eye}
          title="Observe"
          index={2}
        />

        <LoopNode
          className="bottom-[6%] left-[14%]"
          Icon={Activity}
          title="Evaluate"
          index={3}
        />

        <LoopNode
          className="left-[5%] top-[26%]"
          Icon={CheckCircle2}
          title="Act"
          index={4}
        />
      </div>
    </div>
  );
}

function LoopNode({
  className,
  Icon,
  title,
  index,
}: {
  className: string;
  Icon: ElementType;
  title: string;
  index: number;
}) {
  const purple = index % 2 === 0;

  return (
    <motion.div
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 4 + index * 0.2,
        repeat: Infinity,
      }}
      className={`absolute z-10 flex w-[110px] items-center gap-3 rounded-[13px] border bg-[#090909] p-3 ${
        purple
          ? "border-[#8b5cf6]/20"
          : "border-[#60a5fa]/20"
      } ${className}`}
    >
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] ${
          purple
            ? "bg-[#8b5cf6]/10"
            : "bg-[#60a5fa]/10"
        }`}
      >
        <Icon
          size={11}
          className={
            purple
              ? "text-[#a78bfa]"
              : "text-[#60a5fa]"
          }
        />
      </div>

      <div>
        <span className="block text-[9px] text-white/60">
          {title}
        </span>

        <span className="mt-1 block font-mono text-[5px] uppercase tracking-[0.08em] text-white/20">
          Stage {index + 1}
        </span>
      </div>
    </motion.div>
  );
}

/* =========================================================
   WORKFLOW STRIP
========================================================= */

function WorkflowStrip() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-24 md:px-10">
      <Container>
        <SectionLabel number="04">
          Automation Sequence
        </SectionLabel>

        <div className="mt-12 grid gap-3 md:grid-cols-5">
          {workflowSteps.map(
            (
              {
                number,
                title,
                text,
                Icon,
              },
              index,
            ) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.07,
                }}
                className="relative rounded-[17px] border border-white/[0.07] bg-[#050505] p-5"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={13}
                    className={
                      index % 2 === 0
                        ? "text-[#a78bfa]"
                        : "text-[#60a5fa]"
                    }
                  />

                  <span className="font-mono text-[6px] text-white/20">
                    {number}
                  </span>
                </div>

                <h3 className="mt-8 text-[15px] font-medium tracking-[-0.03em] text-white/75">
                  {title}
                </h3>

                <p className="mt-3 text-[9px] leading-5 text-white/35">
                  {text}
                </p>

                {index < workflowSteps.length - 1 && (
                  <ChevronConnector />
                )}
              </motion.div>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}

function ChevronConnector() {
  return (
    <div className="absolute -right-[9px] top-1/2 z-20 hidden h-[18px] w-[18px] -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.08] bg-[#080808] md:flex">
      <ArrowRight
        size={7}
        className="text-white/25"
      />
    </div>
  );
}

/* =========================================================
   OPERATING RULES
========================================================= */

function OperatingRules() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionLabel number="05">
              Automation Principles
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-6xl">
              Automation needs

              <span className="block text-white/20">
                control.
              </span>
            </h2>

            <p className="mt-7 max-w-[440px] text-[12px] leading-7 text-white/40">
              Good experiment automation reduces operational friction
              without hiding how the experiment works. Assignment rules,
              events, metrics and system states should remain observable
              and understandable.
            </p>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#080808]">
            {operatingRules.map(
              (
                rule,
                index,
              ) => (
                <motion.div
                  key={rule}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
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

                    <span className="text-[11px] text-white/[0.5]">
                      {rule}
                    </span>
                  </div>

                  <CheckCircle2
                    size={12}
                    className="shrink-0 text-white/20"
                  />
                </motion.div>
              ),
            )}
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
    <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#050505] px-5 py-32 md:px-10 md:py-40">
      <div className="pointer-events-none absolute left-[15%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.07] blur-[160px]" />

      <div className="pointer-events-none absolute right-[15%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#2563eb]/[0.07] blur-[160px]" />

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
          <Bot
            size={11}
            className="text-[#a78bfa]"
          />

          <Micro>HYI Experiment Automation</Micro>
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
          viewport={{ once: true }}
          className="mx-auto mt-9 max-w-[1050px] text-[clamp(3.7rem,7vw,7rem)] font-semibold leading-[0.84] tracking-[-0.075em]"
        >
          Run the system.

          <span className="block bg-gradient-to-r from-[#c4b5fd] via-white/35 to-[#60a5fa] bg-clip-text text-transparent">
            Focus on the learning.
          </span>
        </motion.h2>

        <p className="mx-auto mt-8 max-w-[680px] text-[12px] leading-7 text-white/[0.44]">
          HYI helps build controlled experimentation workflows that connect
          assignment, instrumentation, monitoring and evidence into one
          repeatable operating system.
        </p>

        <a
          href="#automation-engine"
          className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full bg-white px-9 py-4 text-[11px] font-medium text-black transition hover:bg-white/90"
        >
          View automation engine
          <ArrowRight size={13} />
        </a>
      </Container>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ExperimentAutomationClient() {
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

      <AutomationExplanation />

      <Capabilities />

      <AutomationLoop />

      <WorkflowStrip />

      <OperatingRules />

      <FinalCTA />
    </div>
  );
}