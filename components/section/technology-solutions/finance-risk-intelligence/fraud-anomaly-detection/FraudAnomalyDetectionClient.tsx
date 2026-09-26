"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CircleDot,
  Database,
  Eye,
  GitBranch,
  Network,
  RefreshCcw,
  Server,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import type { ReactNode } from "react";

/* =========================================================
   DATA
========================================================= */

const fraudSignals = [
  {
    number: "01",
    title: "Account Takeover Signals",
    description:
      "A legitimate account may begin behaving differently after credentials or access are compromised. New devices, unusual authentication behavior and unexpected activity can become useful investigation signals.",
    indicators: [
      "Unknown device activity",
      "Unusual authentication pattern",
      "Unexpected profile changes",
      "Behavior inconsistent with history",
    ],
  },
  {
    number: "02",
    title: "Transaction Anomalies",
    description:
      "Transactions that differ significantly from established behavior can be evaluated alongside amount, frequency, timing, destination and other contextual signals.",
    indicators: [
      "Unusual transaction amount",
      "Rapid transaction sequence",
      "Unexpected beneficiary",
      "Abnormal time pattern",
    ],
  },
  {
    number: "03",
    title: "Identity Inconsistency",
    description:
      "Conflicting identity, account, device or verification information may warrant additional review before sensitive financial activity is allowed to continue.",
    indicators: [
      "Identity mismatch",
      "Verification inconsistency",
      "Unexpected account attributes",
      "Conflicting contextual information",
    ],
  },
  {
    number: "04",
    title: "Device & Session Risk",
    description:
      "Changes in device, browser, session characteristics or access behavior can contribute additional context when evaluating suspicious activity.",
    indicators: [
      "New device",
      "Session behavior change",
      "Unusual access pattern",
      "Multiple rapid sessions",
    ],
  },
  {
    number: "05",
    title: "Velocity Anomalies",
    description:
      "A sudden increase in activity over a short period can differ substantially from normal account behavior and may trigger additional analytical review.",
    indicators: [
      "Rapid transaction burst",
      "Repeated attempts",
      "Abnormal frequency",
      "Sudden activity increase",
    ],
  },
  {
    number: "06",
    title: "Behavioral Anomalies",
    description:
      "Machine learning can compare current behavior with historical patterns to surface activity that appears statistically unusual for further investigation.",
    indicators: [
      "Behavior deviation",
      "Unexpected sequence",
      "Pattern break",
      "Unusual interaction behavior",
    ],
  },
];

const protectionLayers = [
  {
    number: "01",
    title: "Strong Authentication",
    description:
      "Use appropriate multi-factor authentication and step-up verification around sensitive account actions.",
  },
  {
    number: "02",
    title: "Behavior Monitoring",
    description:
      "Compare current activity with established behavioral patterns and relevant contextual signals.",
  },
  {
    number: "03",
    title: "Transaction Controls",
    description:
      "Apply appropriate limits, verification rules and additional checks to higher-risk activity.",
  },
  {
    number: "04",
    title: "Device Intelligence",
    description:
      "Evaluate device and session context as part of a broader risk assessment rather than relying on a single signal.",
  },
  {
    number: "05",
    title: "Real-Time Detection",
    description:
      "Evaluate important events as they occur so suspicious activity can reach review workflows quickly.",
  },
  {
    number: "06",
    title: "Human Investigation",
    description:
      "Route significant alerts to trained investigators with enough evidence and context to make informed decisions.",
  },
];

const pipeline = [
  {
    Icon: Database,
    number: "01",
    title: "Collect",
    description: "Transactions, sessions, accounts and contextual events.",
  },
  {
    Icon: Network,
    number: "02",
    title: "Connect",
    description: "Link relevant signals into an analytical event context.",
  },
  {
    Icon: BrainCircuit,
    number: "03",
    title: "Analyze",
    description: "Evaluate patterns, rules and anomaly signals.",
  },
  {
    Icon: Activity,
    number: "04",
    title: "Score",
    description: "Generate contextual risk indicators for review.",
  },
  {
    Icon: Eye,
    number: "05",
    title: "Investigate",
    description: "Present evidence and relationships to investigators.",
  },
  {
    Icon: ShieldCheck,
    number: "06",
    title: "Protect",
    description: "Apply approved controls and feed outcomes back.",
  },
];

const anomalyRows = [
  {
    name: "Transaction velocity",
    normal: "Expected",
    current: "Elevated",
    score: 87,
  },
  {
    name: "Device familiarity",
    normal: "Known",
    current: "Unknown",
    score: 78,
  },
  {
    name: "Behavior similarity",
    normal: "Consistent",
    current: "Changed",
    score: 71,
  },
  {
    name: "Session pattern",
    normal: "Stable",
    current: "Unusual",
    score: 64,
  },
  {
    name: "Identity context",
    normal: "Aligned",
    current: "Review",
    score: 56,
  },
];

const responseSteps = [
  {
    title: "Observe",
    text: "Capture relevant account, transaction and session events.",
  },
  {
    title: "Detect",
    text: "Identify deviations, suspicious patterns and configured risk signals.",
  },
  {
    title: "Correlate",
    text: "Connect related events instead of evaluating every signal in isolation.",
  },
  {
    title: "Prioritize",
    text: "Organize alerts using risk context and available evidence.",
  },
  {
    title: "Investigate",
    text: "Give analysts the information required to understand why activity was surfaced.",
  },
  {
    title: "Respond",
    text: "Use approved controls appropriate to the organization's risk policy.",
  },
];

const safePractices = [
  "Enable multi-factor authentication where available.",
  "Use unique passwords and a trusted password manager.",
  "Verify unexpected payment or account-change requests through an independent channel.",
  "Avoid sharing OTPs, recovery codes, passwords or PINs.",
  "Review account and transaction notifications promptly.",
  "Treat unexpected links, attachments and urgent payment requests cautiously.",
  "Keep devices, browsers and applications updated.",
  "Contact the financial institution directly when suspicious activity appears.",
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
        purple ? "text-[#c4b5fd]" : "text-white/30"
      }`}
    >
      {children}
    </span>
  );
}

function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <motion.span
        animate={{
          scale: [1, 2.6, 1],
          opacity: [0.8, 0, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute inset-0 rounded-full bg-[#8b5cf6]"
      />

      <span className="relative h-2 w-2 rounded-full bg-[#c4b5fd]" />
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

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5  md:px-10 ">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom, black, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, black 80%, transparent)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[480px] h-[800px] w-[900px] -translate-x-1/2 rounded-full bg-[#7c3aed]/[0.055] blur-[250px]" />

      <Container className="relative">
        {/* <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <LiveDot />
            <Micro>Fraud & Anomaly Intelligence</Micro>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <Micro>Observe</Micro>
            <Micro>Detect</Micro>
            <Micro>Investigate</Micro>
            <Micro>Protect</Micro>
          </div>
        </div> */}

        <div className="mx-auto max-w-[1150px] pt-20 text-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-4 py-2"
          >
            <ShieldCheck size={11} className="text-[#c4b5fd]" />
            <Micro>AI-Powered Fraud Defense</Micro>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-9 text-[clamp(4rem,8.5vw,8.4rem)] font-semibold leading-[0.82] tracking-[-0.085em]"
          >
            Find the pattern

            <span className="block bg-gradient-to-r from-white/20 via-[#c4b5fd]/80 to-white/20 bg-clip-text text-transparent">
              that should not be there.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-9 max-w-[850px] text-[14px] leading-8 text-white/[0.55]"
          >
            HYI brings transaction signals, account behavior, device context,
            anomaly analytics and investigation workflows together to help
            financial teams surface suspicious activity earlier and respond
            through controlled fraud-management processes.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#detection-engine"
              className="flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-medium text-black"
            >
              Explore detection engine
              <ArrowDown size={13} />
            </a>

            <a
              href="#protection"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[11px] text-white/50"
            >
              Fraud protection
              <ShieldCheck size={13} />
            </a>
          </div>
        </div>

        <div id="detection-engine" className="mt-20">
          <FraudDetectionEngine />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   MAIN FRAUD ENGINE
========================================================= */

function FraudDetectionEngine() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#080808]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative border-b border-white/[0.07] p-5 md:p-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
              <Eye size={14} className="text-[#c4b5fd]" />
            </div>

            <div>
              <Micro>Fraud Intelligence Engine</Micro>

              <span className="mt-1 block font-mono text-[6px] tracking-[0.12em] text-white/15">
                EVENT / SIGNAL / ANOMALY / RESPONSE
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LiveDot />
            <Micro>Monitoring stream active</Micro>
          </div>
        </div>
      </div>

      <div className="relative grid lg:grid-cols-[.7fr_1.3fr_.7fr]">
        <SignalColumn />
        <AnomalyRadar />
        <DecisionColumn />
      </div>
    </div>
  );
}

/* =========================================================
   LEFT SIGNAL COLUMN
========================================================= */

function SignalColumn() {
  const items = [
    ["TXN", "Transaction event"],
    ["DEV", "Device context"],
    ["ACC", "Account behavior"],
    ["SES", "Session activity"],
    ["ID", "Identity context"],
  ];

  return (
    <div className="border-b border-white/[0.07] p-5 lg:border-b-0 lg:border-r">
      <Micro>Incoming Signals</Micro>

      <div className="mt-7 space-y-3">
        {items.map(([code, title], index) => (
          <motion.div
            key={code}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-[12px] border border-white/[0.06] bg-[#050505] p-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-[7px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.04] font-mono text-[6px] text-[#c4b5fd]">
                {code}
              </span>

              <div className="flex-1">
                <span className="block text-[9px] text-white/45">
                  {title}
                </span>

                <span className="mt-1 block font-mono text-[5px] text-white/15">
                  STREAM / ACTIVE
                </span>
              </div>

              <motion.span
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   ANOMALY RADAR
========================================================= */

function AnomalyRadar() {
  return (
    <div className="relative min-h-[600px] overflow-hidden border-b border-white/[0.07] lg:border-b-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="absolute left-5 top-5 z-20">
        <Micro>Anomaly Detection Field</Micro>
      </div>

      <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] max-w-[82vw] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 rounded-full border border-white/[0.06]" />

        <div className="absolute inset-[13%] rounded-full border border-white/[0.07]" />

        <div className="absolute inset-[27%] rounded-full border border-white/[0.08]" />

        <div className="absolute inset-[40%] rounded-full border border-[#8b5cf6]/25" />

        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.05]" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.05]" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(139,92,246,.20) 345deg, rgba(196,181,253,.42) 360deg)",
          }}
        />

        <div className="absolute left-1/2 top-1/2 flex h-[105px] w-[105px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#080808] shadow-[0_0_70px_rgba(124,58,237,.12)]">
          <div className="text-center">
            <BrainCircuit
              size={19}
              className="mx-auto text-[#c4b5fd]"
            />

            <span className="mt-3 block font-mono text-[6px] tracking-[0.12em] text-white/30">
              AI DETECTION
            </span>
          </div>
        </div>

        <RadarPoint
          className="left-[18%] top-[22%]"
          label="DEVICE"
          delay={0}
        />

        <RadarPoint
          className="right-[16%] top-[30%]"
          label="VELOCITY"
          delay={0.7}
        />

        <RadarPoint
          className="bottom-[18%] left-[29%]"
          label="BEHAVIOR"
          delay={1.4}
        />

        <RadarPoint
          className="bottom-[28%] right-[19%]"
          label="SESSION"
          delay={2.1}
        />
      </div>

      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
        {[
          ["SIGNALS", "05"],
          ["STATUS", "ANALYZING"],
          ["MODE", "REAL-TIME"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-[9px] border border-white/[0.06] bg-[#050505]/80 p-3 backdrop-blur"
          >
            <span className="block font-mono text-[5px] text-white/15">
              {label}
            </span>

            <span className="mt-1 block font-mono text-[6px] text-[#c4b5fd]">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RadarPoint({
  className,
  label,
  delay,
}: {
  className: string;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.25, 1],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        delay,
      }}
      className={`absolute ${className}`}
    >
      <span className="absolute -inset-2 rounded-full border border-[#8b5cf6]/20" />

      <span className="block h-3 w-3 rounded-full border border-[#ddd6fe] bg-[#8b5cf6] shadow-[0_0_20px_rgba(167,139,250,.8)]" />

      <span className="absolute left-5 top-0 whitespace-nowrap font-mono text-[5px] text-white/30">
        {label}
      </span>
    </motion.div>
  );
}

/* =========================================================
   DECISION COLUMN
========================================================= */

function DecisionColumn() {
  return (
    <div className="p-5 lg:border-l lg:border-white/[0.07]">
      <Micro>Decision Context</Micro>

      <div className="mt-7 rounded-[15px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04] p-5">
        <div className="flex items-center justify-between">
          <Micro purple>Anomaly surfaced</Micro>
          <Activity size={11} className="text-[#c4b5fd]" />
        </div>

        <span className="mt-6 block text-5xl font-medium tracking-[-0.07em] text-white/80">
          87
        </span>

        <span className="mt-2 block font-mono text-[6px] text-white/20">
          DEMONSTRATION RISK SIGNAL
        </span>
      </div>

      <div className="mt-3 space-y-2">
        {[
          "Correlate events",
          "Review evidence",
          "Verify activity",
          "Apply policy",
        ].map((item, index) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-[10px] border border-white/[0.06] bg-[#050505] p-3"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[5px] text-[#a78bfa]">
                0{index + 1}
              </span>

              <span className="text-[8px] text-white/35">
                {item}
              </span>
            </div>

            <ArrowRight size={9} className="text-white/15" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   FRAUD EXPLANATION
========================================================= */

function HowFraudAppears() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="01">
          Understanding Fraud Signals
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              What can suspicious

              <span className="block text-white/20">
                activity look like?
              </span>
            </h2>

            <p className="mt-7 max-w-[520px] text-[13px] leading-8 text-white/[0.48]">
              Fraud does not always arrive as one obvious event. It can appear
              as a combination of unusual account, identity, device, session
              and transaction signals that differ from expected behavior.
            </p>

            <div className="mt-8 rounded-[15px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.035] p-5">
              <div className="flex items-center gap-3">
                <ShieldCheck size={13} className="text-[#c4b5fd]" />
                <Micro purple>Defensive perspective</Micro>
              </div>

              <p className="mt-4 text-[11px] leading-6 text-white/40">
                No single anomaly necessarily proves fraud. Signals should be
                evaluated together with appropriate verification,
                investigation and organizational policy.
              </p>
            </div>
          </div>

          <FraudJourney />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   FRAUD JOURNEY
========================================================= */

function FraudJourney() {
  const journey = [
    {
      number: "01",
      title: "Access change",
      text: "An account begins showing access characteristics that differ from its established context.",
    },
    {
      number: "02",
      title: "Behavior change",
      text: "Session or account activity deviates from previous patterns.",
    },
    {
      number: "03",
      title: "Financial anomaly",
      text: "A transaction or sequence of transactions appears unusual.",
    },
    {
      number: "04",
      title: "Detection signal",
      text: "Rules or analytical models surface the combined behavior for review.",
    },
    {
      number: "05",
      title: "Verification",
      text: "The activity can be investigated and verified using approved procedures.",
    },
  ];

  return (
    <div className="rounded-[24px] border border-white/[0.08] bg-[#080808] p-6">
      <div className="flex items-center justify-between">
        <Micro>Illustrative Fraud Signal Journey</Micro>
        <GitBranch size={13} className="text-[#a78bfa]" />
      </div>

      <div className="mt-8">
        {journey.map((item, index) => (
          <div key={item.title} className="relative flex gap-5 pb-7">
            {index !== journey.length - 1 && (
              <div className="absolute bottom-0 left-[17px] top-9 w-px bg-gradient-to-b from-[#8b5cf6]/30 to-white/[0.05]" />
            )}

            <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#050505]">
              <span className="font-mono text-[6px] text-[#c4b5fd]">
                {item.number}
              </span>
            </div>

            <div className="rounded-[13px] border border-white/[0.06] bg-[#050505] p-4">
              <h3 className="text-[12px] font-medium text-white/65">
                {item.title}
              </h3>

              <p className="mt-2 text-[10px] leading-6 text-white/35">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   FRAUD TYPES
========================================================= */

function FraudSignalTypes() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel number="02">
              Fraud Signal Categories
            </SectionLabel>

            <h2 className="mt-9 max-w-[850px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Understand where

              <span className="block text-white/20">
                anomalies may appear.
              </span>
            </h2>
          </div>

          <p className="max-w-[470px] text-[12px] leading-7 text-white/40">
            Detection systems can combine multiple signals instead of relying
            on a single rule or isolated event.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {fraudSignals.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="rounded-[18px] border border-white/[0.07] bg-[#050505] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[7px] text-[#a78bfa]">
                  {item.number}
                </span>

                <CircleDot size={10} className="text-white/20" />
              </div>

              <h3 className="mt-7 text-xl font-medium tracking-[-0.03em] text-white/75">
                {item.title}
              </h3>

              <p className="mt-4 text-[11px] leading-6 text-white/[0.42]">
                {item.description}
              </p>

              <div className="mt-6 space-y-2">
                {item.indicators.map((indicator) => (
                  <div
                    key={indicator}
                    className="flex items-center gap-3 rounded-[8px] border border-white/[0.05] bg-white/[0.015] px-3 py-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#a78bfa]" />

                    <span className="font-mono text-[6px] text-white/30">
                      {indicator}
                    </span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   NORMAL VS ANOMALY
========================================================= */

function AnomalyComparison() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="03">
          Behavioral Comparison
        </SectionLabel>

        <div className="mt-10 grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Normal behavior

              <span className="block bg-gradient-to-r from-white/20 to-[#c4b5fd]/70 bg-clip-text text-transparent">
                versus anomaly.
              </span>
            </h2>

            <p className="mt-7 max-w-[450px] text-[12px] leading-7 text-white/40">
              Anomaly detection asks whether current activity differs
              meaningfully from expected patterns and whether that difference
              deserves further investigation.
            </p>
          </div>

          <div className="rounded-[22px] border border-white/[0.08] bg-[#080808] p-5 md:p-7">
            <div className="grid grid-cols-[1fr_.7fr_.7fr] border-b border-white/[0.06] pb-4">
              <Micro>Signal</Micro>
              <Micro>Expected</Micro>
              <Micro>Observed</Micro>
            </div>

            <div className="mt-3 space-y-2">
              {anomalyRows.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className="grid grid-cols-[1fr_.7fr_.7fr] items-center rounded-[11px] border border-white/[0.05] bg-[#050505] p-4"
                >
                  <div>
                    <span className="text-[9px] text-white/45">
                      {item.name}
                    </span>

                    <div className="mt-2 h-[2px] max-w-[120px] bg-white/[0.05]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.score}%` }}
                        viewport={{ once: true }}
                        className="h-full bg-[#8b5cf6]"
                      />
                    </div>
                  </div>

                  <span className="font-mono text-[6px] text-white/25">
                    {item.normal}
                  </span>

                  <span className="font-mono text-[6px] text-[#c4b5fd]">
                    {item.current}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   PIPELINE
========================================================= */

function DetectionPipeline() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="04">
          Detection Architecture
        </SectionLabel>

        <h2 className="mt-9 max-w-[900px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
          From financial event

          <span className="block text-white/20">
            to protected decision.
          </span>
        </h2>

        <div className="relative mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-6">
          <div className="absolute left-[5%] right-[5%] top-[39px] hidden h-px bg-gradient-to-r from-[#8b5cf6]/20 via-[#c4b5fd]/50 to-[#8b5cf6]/20 lg:block" />

          <motion.div
            animate={{
              left: ["5%", "94%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[35px] z-30 hidden h-2 w-2 rounded-full bg-[#c4b5fd] lg:block"
          />

          {pipeline.map(({ Icon, number, title, description }) => (
            <motion.article
              key={title}
              whileHover={{ y: -5 }}
              className="relative z-20 rounded-[16px] border border-white/[0.07] bg-[#050505] p-5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#080808]">
                <Icon size={12} className="text-[#c4b5fd]" />
              </div>

              <span className="mt-8 block font-mono text-[6px] text-[#a78bfa]">
                {number}
              </span>

              <h3 className="mt-3 text-[14px] font-medium text-white/70">
                {title}
              </h3>

              <p className="mt-4 text-[9px] leading-5 text-white/35">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   AI DETECTION
========================================================= */

function AIIntelligence() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#080808]">
          <div className="grid lg:grid-cols-[.8fr_1.2fr]">
            <div className="p-7 md:p-12">
              <SectionLabel number="05">
                AI Fraud Intelligence
              </SectionLabel>

              <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
                Detect patterns

                <span className="block text-white/20">
                  humans cannot manually watch at scale.
                </span>
              </h2>

              <p className="mt-7 text-[12px] leading-7 text-white/40">
                AI-assisted fraud analytics can evaluate large volumes of
                relevant signals, surface unusual relationships and help
                investigators prioritize activity that requires attention.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Behavioral anomaly analysis",
                  "Event correlation",
                  "Contextual risk scoring",
                  "Pattern recognition",
                  "Investigation support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={11}
                      className="text-[#a78bfa]"
                    />

                    <span className="text-[9px] text-white/35">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <AIModel />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   AI MODEL
========================================================= */

function AIModel() {
  const nodes = [
    { x: "15%", y: "20%", label: "DEVICE" },
    { x: "75%", y: "16%", label: "ACCOUNT" },
    { x: "85%", y: "62%", label: "TXN" },
    { x: "20%", y: "72%", label: "SESSION" },
    { x: "52%", y: "84%", label: "IDENTITY" },
  ];

  return (
    <div className="relative min-h-[600px] overflow-hidden border-t border-white/[0.07] lg:border-l lg:border-t-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/20" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]"
      />

      <div className="absolute left-1/2 top-1/2 z-20 flex h-[130px] w-[130px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#050505] shadow-[0_0_90px_rgba(124,58,237,.14)]">
        <div className="text-center">
          <BrainCircuit
            size={24}
            className="mx-auto text-[#c4b5fd]"
          />

          <Micro purple>AI CORE</Micro>
        </div>
      </div>

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          animate={{
            y: [-4, 4, -4],
          }}
          transition={{
            duration: 3 + index * 0.2,
            repeat: Infinity,
          }}
          style={{
            left: node.x,
            top: node.y,
          }}
          className="absolute z-20 rounded-[11px] border border-white/[0.08] bg-[#050505] px-4 py-3"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />

            <span className="font-mono text-[6px] text-white/30">
              {node.label}
            </span>
          </div>
        </motion.div>
      ))}

      <div className="absolute bottom-6 left-6 right-6 rounded-[12px] border border-white/[0.06] bg-[#050505]/80 p-4 backdrop-blur">
        <div className="flex items-center justify-between">
          <Micro>Combined signal context</Micro>
          <RefreshCcw size={10} className="text-[#a78bfa]" />
        </div>

        <p className="mt-3 text-[9px] leading-5 text-white/30">
          Multiple weak signals can become more informative when evaluated
          together within the correct account and transaction context.
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   RESPONSE WORKFLOW
========================================================= */

function ResponseWorkflow() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="06">
          Detection & Response
        </SectionLabel>

        <div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[820px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
            Detection is useful

            <span className="block text-white/20">
              when it leads to action.
            </span>
          </h2>

          <p className="max-w-[460px] text-[12px] leading-7 text-white/40">
            Connect detection with investigation and approved response
            processes so analysts can understand what happened and determine
            the appropriate next step.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {responseSteps.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-[16px] border border-white/[0.07] bg-[#050505] p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[7px] text-[#a78bfa]">
                  0{index + 1}
                </span>

                <Workflow size={11} className="text-white/15" />
              </div>

              <h3 className="mt-7 text-[17px] font-medium text-white/70">
                {item.title}
              </h3>

              <p className="mt-3 text-[10px] leading-6 text-white/35">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   PROTECTION
========================================================= */

function FraudProtection() {
  return (
    <section
      id="protection"
      className="bg-[#050505] px-5 py-28 md:px-10"
    >
      <Container>
        <SectionLabel number="07">
          Fraud Protection
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Make fraud

              <span className="block bg-gradient-to-r from-white/20 to-[#c4b5fd]/70 bg-clip-text text-transparent">
                harder to succeed.
              </span>
            </h2>

            <p className="mt-7 max-w-[470px] text-[12px] leading-7 text-white/40">
              Fraud prevention works best as layered defense. Authentication,
              monitoring, transaction controls, verification and human
              investigation reinforce one another.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {protectionLayers.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-[16px] border border-white/[0.07] bg-[#080808] p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[6px] text-[#a78bfa]">
                    {item.number}
                  </span>

                  <ShieldCheck
                    size={12}
                    className="text-[#c4b5fd]"
                  />
                </div>

                <h3 className="mt-6 text-[15px] font-medium text-white/70">
                  {item.title}
                </h3>

                <p className="mt-3 text-[10px] leading-6 text-white/35">
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

/* =========================================================
   PERSONAL SAFETY
========================================================= */

function StaySafe() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <div className="overflow-hidden rounded-[28px] border border-[#8b5cf6]/15 bg-[#050505]">
          <div className="grid lg:grid-cols-[.85fr_1.15fr]">
            <div className="relative overflow-hidden p-7 md:p-12">
              <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#7c3aed]/[0.07] blur-[150px]" />

              <div className="relative">
                <SectionLabel number="08">
                  Staying Safer
                </SectionLabel>

                <ShieldCheck
                  size={48}
                  strokeWidth={0.8}
                  className="mt-12 text-[#c4b5fd]"
                />

                <h2 className="mt-8 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
                  Protect your

                  <span className="block text-white/20">
                    financial identity.
                  </span>
                </h2>

                <p className="mt-7 max-w-[500px] text-[12px] leading-7 text-white/40">
                  Strong security habits can reduce exposure to common
                  account and payment fraud. Unexpected urgency, requests for
                  credentials and unfamiliar account activity deserve extra
                  verification.
                </p>
              </div>
            </div>

            <div className="border-t border-white/[0.07] p-6 lg:border-l lg:border-t-0 md:p-8">
              <Micro>Practical Defensive Checklist</Micro>

              <div className="mt-7 space-y-2">
                {safePractices.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-4 rounded-[12px] border border-white/[0.06] bg-[#080808] p-4"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/20">
                      <CheckCircle2
                        size={10}
                        className="text-[#c4b5fd]"
                      />
                    </div>

                    <div>
                      <span className="font-mono text-[5px] text-[#a78bfa]">
                        SAFE / {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="mt-2 text-[10px] leading-6 text-white/40">
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   FRAUD COMMAND CENTER
========================================================= */

function CommandCenter() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="09">
          Fraud Operations
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-[24px] border border-white/[0.08] bg-[#080808] p-5 md:p-7">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
              <div className="flex items-center gap-3">
                <LiveDot />
                <Micro>Fraud Operations Console</Micro>
              </div>

              <Server size={12} className="text-white/20" />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                ["EVENTS", "STREAMING"],
                ["ANOMALIES", "REVIEW"],
                ["WORKFLOW", "ACTIVE"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[12px] border border-white/[0.06] bg-[#050505] p-4"
                >
                  <Micro>{label}</Micro>

                  <span className="mt-5 block font-mono text-[7px] text-[#c4b5fd]">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-3 space-y-2">
              {[
                "Transaction behavior changed",
                "New device context observed",
                "Velocity threshold requires review",
                "Account pattern differs from baseline",
              ].map((event, index) => (
                <div
                  key={event}
                  className="flex items-center justify-between rounded-[11px] border border-white/[0.05] bg-[#050505] p-4"
                >
                  <div className="flex items-center gap-4">
                    <Activity
                      size={10}
                      className={
                        index < 2
                          ? "text-[#c4b5fd]"
                          : "text-white/20"
                      }
                    />

                    <span className="text-[9px] text-white/35">
                      {event}
                    </span>
                  </div>

                  <span className="font-mono text-[5px] text-white/15">
                    REVIEW
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="self-center">
            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Give investigators

              <span className="block text-white/20">
                evidence, not noise.
              </span>
            </h2>

            <p className="mt-7 text-[12px] leading-7 text-white/40">
              A useful fraud platform should help analysts understand why an
              alert exists, which signals contributed to it and what related
              activity should be reviewed.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Connected event history",
                "Contextual signal evidence",
                "Investigation workflow",
                "Decision traceability",
                "Feedback into detection systems",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={11}
                    className="text-[#a78bfa]"
                  />

                  <span className="text-[9px] text-white/35">
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
   FINAL CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#050505] px-5 py-32 md:px-10 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.06] blur-[250px]" />

      <Container className="relative text-center">
        <div className="mx-auto flex w-fit items-center gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#080808]">
            <Eye
              size={18}
              strokeWidth={1}
              className="text-white/40"
            />
          </div>

          <div className="relative w-28">
            <div className="h-px bg-gradient-to-r from-white/10 via-[#8b5cf6]/70 to-white/10" />

            <motion.span
              animate={{
                left: ["0%", "95%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.7,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-[3px] h-2 w-2 rounded-full bg-[#c4b5fd]"
            />
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.05]">
            <ShieldCheck
              size={18}
              strokeWidth={1}
              className="text-[#c4b5fd]"
            />
          </div>
        </div>

        <h2 className="mx-auto mt-12 max-w-[1150px] text-[clamp(3.8rem,7vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
          Detect the anomaly.

          <span className="block bg-gradient-to-r from-[#c4b5fd] via-white/40 to-white/15 bg-clip-text text-transparent">
            Protect what matters.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[760px] text-[12px] leading-7 text-white/[0.43]">
          Connect financial events, behavioral intelligence, anomaly
          analytics, investigation workflows and layered security controls
          into a unified fraud-defense environment.
        </p>

        <a
          href="#detection-engine"
          className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full bg-white px-9 py-4 text-[11px] font-medium text-black"
        >
          Explore Fraud Intelligence
          <ArrowRight size={13} />
        </a>

        <p className="mx-auto mt-7 max-w-[700px] font-mono text-[6px] uppercase leading-5 tracking-[0.12em] text-white/15">
          Dashboard values and risk scores shown on this page are
          illustrative interface examples. An anomaly is not by itself proof
          of fraudulent activity.
        </p>
      </Container>
    </section>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function FraudAnomalyDetectionClient() {
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
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#7c3aed] via-[#c4b5fd] to-[#6d4bd8]"
      />

      <Hero />

      <HowFraudAppears />

      <FraudSignalTypes />

      <AnomalyComparison />

      <DetectionPipeline />

      <AIIntelligence />

      <ResponseWorkflow />

      <FraudProtection />

      <StaySafe />

      <CommandCenter />

      <FinalCTA />
    </div>
  );
}