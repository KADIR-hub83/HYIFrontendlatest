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
  Fingerprint,
  GitBranch,
  Network,
  RefreshCcw,
  Search,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import type { ElementType, ReactNode } from "react";

/* =========================================================
   DATA
========================================================= */

const fraudSignals = [
  {
    code: "DV",
    title: "Device intelligence",
    text: "Evaluate device, session and environment signals alongside transaction activity.",
  },
  {
    code: "BH",
    title: "Behavioral patterns",
    text: "Compare current activity with relevant historical and behavioral patterns.",
  },
  {
    code: "TX",
    title: "Transaction signals",
    text: "Analyze transaction attributes, velocity, relationships and contextual indicators.",
  },
  {
    code: "ID",
    title: "Identity context",
    text: "Connect identity-related information with devices, accounts and observed activity.",
  },
  {
    code: "NT",
    title: "Network relationships",
    text: "Explore relationships between accounts, entities, transactions and infrastructure.",
  },
  {
    code: "AN",
    title: "Anomaly detection",
    text: "Surface unusual patterns for further analytical investigation and human review.",
  },
];

const detectionCapabilities = [
  {
    Icon: Activity,
    title: "Transaction monitoring",
    text:
      "Create monitoring pipelines that continuously evaluate relevant transaction events and analytical signals.",
  },
  {
    Icon: Fingerprint,
    title: "Behavioral intelligence",
    text:
      "Model patterns across sessions, customers and activity histories to provide additional context around unusual behavior.",
  },
  {
    Icon: Network,
    title: "Relationship analytics",
    text:
      "Connect entities, devices, accounts and transactions so investigators can understand relationships that may be difficult to see in isolated records.",
  },
  {
    Icon: Search,
    title: "Investigation support",
    text:
      "Organize evidence and contextual information into clearer investigation views for appropriate analyst review.",
  },
  {
    Icon: Database,
    title: "Fraud data foundation",
    text:
      "Bring relevant datasets into a governed analytical layer with consistent definitions, lineage and reusable features.",
  },
  {
    Icon: Workflow,
    title: "Case workflows",
    text:
      "Route relevant analytical signals into review, escalation and resolution processes with defined controls.",
  },
];

const pipeline = [
  {
    id: "01",
    title: "Event",
    sub: "Transaction",
  },
  {
    id: "02",
    title: "Enrich",
    sub: "Context",
  },
  {
    id: "03",
    title: "Analyze",
    sub: "AI Signals",
  },
  {
    id: "04",
    title: "Correlate",
    sub: "Network",
  },
  {
    id: "05",
    title: "Review",
    sub: "Evidence",
  },
];

const investigationSteps = [
  {
    number: "01",
    title: "Collect",
    text:
      "Ingest relevant transaction, account, device, session and operational events.",
  },
  {
    number: "02",
    title: "Enrich",
    text:
      "Add contextual attributes that make individual events more meaningful during analysis.",
  },
  {
    number: "03",
    title: "Detect",
    text:
      "Apply rules, statistical methods or suitable models to identify potentially unusual patterns.",
  },
  {
    number: "04",
    title: "Correlate",
    text:
      "Connect related entities and events to understand the wider activity surrounding a signal.",
  },
  {
    number: "05",
    title: "Investigate",
    text:
      "Present evidence to appropriate reviewers instead of treating an automated signal as a final conclusion.",
  },
];

const principles = [
  "Keep detection signals traceable to their supporting evidence.",
  "Use appropriate human review for consequential decisions.",
  "Evaluate false positives and false negatives in the relevant business context.",
  "Monitor changes in data quality and model behavior over time.",
  "Protect sensitive financial and identity information throughout the workflow.",
  "Separate analytical suspicion from confirmed fraud determinations.",
];

/* =========================================================
   COMMON
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
          scale: [1, 2.4, 1],
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
      {/* GRID */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)",
          backgroundSize: "62px 62px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />

      <div className="pointer-events-none absolute left-[15%] top-[180px] h-[520px] w-[520px] rounded-full bg-[#7c3aed]/[0.09] blur-[190px]" />

      <div className="pointer-events-none absolute right-[8%] top-[260px] h-[480px] w-[480px] rounded-full bg-[#2563eb]/[0.07] blur-[190px]" />

      <Container className="relative">
        {/* TOP STATUS */}

        {/* <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <LiveDot />

            <Micro>HYI / Fraud Detection</Micro>
          </div>

          <div className="hidden items-center gap-7 md:flex">
            <Micro>Monitor</Micro>
            <Micro>Detect</Micro>
            <Micro>Correlate</Micro>
            <Micro>Investigate</Micro>
          </div>
        </div> */}

        {/* HERO CONTENT */}

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
            <Fingerprint
              size={11}
              className="text-[#c4b5fd]"
            />

            <Micro>AI Fraud Intelligence</Micro>
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
              duration: 0.75,
            }}
            className="mt-9 text-[clamp(4rem,8.3vw,8.3rem)] font-semibold leading-[0.82] tracking-[-0.085em]"
          >
            Follow the signal.

            <span className="block text-white/20">
              Understand the
            </span>

            <span className="block bg-gradient-to-r from-[#d8b4fe] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
              pattern.
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
            HYI helps organizations build fraud analytics systems that bring
            transactions, identities, devices, behavioral signals and
            relationships into a connected analytical workflow. The goal is
            to surface relevant evidence earlier, provide richer context to
            investigators and support controlled review processes.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#fraud-engine"
              className="flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-medium text-black transition-transform hover:scale-[1.02]"
            >
              Explore detection engine
              <ArrowDown size={13} />
            </a>

            <a
              href="#hyi-fraud"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[11px] text-white/55"
            >
              How HYI works
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        <div
          id="fraud-engine"
          className="mt-20"
        >
          <FraudInvestigationEngine />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   MAIN FRAUD ENGINE
========================================================= */

function FraudInvestigationEngine() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#080808] p-5 md:p-7">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.045) 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="relative">
        {/* HEADER */}

        <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
              <Fingerprint
                size={15}
                className="text-[#c4b5fd]"
              />
            </div>

            <div>
              <Micro>Fraud Investigation Network</Micro>

              <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.12em] text-white/15">
                EVENT → SIGNAL → RELATIONSHIP → REVIEW
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LiveDot blue />

            <Micro>Stream monitoring</Micro>
          </div>
        </div>

        {/* MAIN */}

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.25fr_.75fr]">
          <FraudNetworkModel />
          <TransactionStream />
        </div>

        {/* SMALL MODELS */}

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <BehaviorFingerprint />
          <AnomalyModel />
          <EvidenceModel />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   NETWORK MODEL
========================================================= */

function FraudNetworkModel() {
  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505] p-6">
      <div className="flex items-center justify-between">
        <div>
          <Micro>Entity Relationship Graph</Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Connected transaction context
          </p>
        </div>

        <div className="flex items-center gap-2">
          <LiveDot />

          <Micro>Analyzing</Micro>
        </div>
      </div>

      <div className="relative mt-5 h-[405px]">
        {/* CONNECTION LINES */}

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 700 405"
          fill="none"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M350 200 L110 75"
            stroke="rgba(139,92,246,.35)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <motion.path
            d="M350 200 L590 70"
            stroke="rgba(96,165,250,.35)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <motion.path
            d="M350 200 L95 320"
            stroke="rgba(96,165,250,.28)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
          />

          <motion.path
            d="M350 200 L600 325"
            stroke="rgba(139,92,246,.32)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
          />

          <motion.path
            d="M350 200 L350 50"
            stroke="rgba(196,181,253,.25)"
            strokeWidth="1"
          />

          <motion.path
            d="M350 200 L350 355"
            stroke="rgba(96,165,250,.25)"
            strokeWidth="1"
          />

          <motion.path
            d="M110 75 L350 50 L590 70"
            stroke="rgba(255,255,255,.08)"
            strokeWidth="1"
            strokeDasharray="5 7"
          />

          <motion.path
            d="M95 320 L350 355 L600 325"
            stroke="rgba(255,255,255,.08)"
            strokeWidth="1"
            strokeDasharray="5 7"
          />
        </svg>

        {/* MOVING SIGNALS */}

        <SignalParticle
          from={{ x: "50%", y: "50%" }}
          to={{ x: "15%", y: "17%" }}
          delay={0}
        />

        <SignalParticle
          from={{ x: "50%", y: "50%" }}
          to={{ x: "84%", y: "16%" }}
          delay={0.8}
          blue
        />

        <SignalParticle
          from={{ x: "50%", y: "50%" }}
          to={{ x: "14%", y: "78%" }}
          delay={1.6}
          blue
        />

        <SignalParticle
          from={{ x: "50%", y: "50%" }}
          to={{ x: "85%", y: "79%" }}
          delay={2.3}
        />

        {/* CENTRAL AI */}

        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(139,92,246,0)",
              "0 0 90px rgba(139,92,246,.22)",
              "0 0 0 rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 z-20 flex h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#09070e]"
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-4 rounded-full border border-dashed border-[#8b5cf6]/20"
          />

          <Fingerprint
            size={28}
            strokeWidth={1}
            className="text-[#c4b5fd]"
          />

          <span className="mt-4 font-mono text-[7px] uppercase tracking-[0.16em] text-white/60">
            Fraud AI
          </span>

          <span className="mt-1 font-mono text-[5px] uppercase tracking-[0.12em] text-[#60a5fa]/70">
            Correlation Core
          </span>
        </motion.div>

        <GraphNode
          className="left-[7%] top-[8%]"
          code="ACC"
          title="Account"
        />

        <GraphNode
          className="right-[6%] top-[7%]"
          code="DEV"
          title="Device"
          blue
        />

        <GraphNode
          className="bottom-[5%] left-[5%]"
          code="TX"
          title="Transaction"
          blue
        />

        <GraphNode
          className="bottom-[4%] right-[5%]"
          code="ID"
          title="Identity"
        />

        <GraphNode
          className="left-1/2 top-0 -translate-x-1/2"
          code="SES"
          title="Session"
        />

        <GraphNode
          className="bottom-0 left-1/2 -translate-x-1/2"
          code="NET"
          title="Network"
          blue
        />
      </div>
    </div>
  );
}

function GraphNode({
  className,
  code,
  title,
  blue = false,
}: {
  className: string;
  code: string;
  title: string;
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
      className={`absolute z-20 min-w-[95px] rounded-[12px] border bg-[#090909]/95 p-3 backdrop-blur-md ${
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
        {title}
      </span>
    </motion.div>
  );
}

function SignalParticle({
  from,
  to,
  delay,
  blue = false,
}: {
  from: {
    x: string;
    y: string;
  };
  to: {
    x: string;
    y: string;
  };
  delay: number;
  blue?: boolean;
}) {
  return (
    <motion.div
      initial={{
        left: from.x,
        top: from.y,
      }}
      animate={{
        left: [from.x, to.x, from.x],
        top: [from.y, to.y, from.y],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute z-30 h-2 w-2 rounded-full ${
        blue
          ? "bg-[#60a5fa] shadow-[0_0_16px_rgba(96,165,250,.9)]"
          : "bg-[#c4b5fd] shadow-[0_0_16px_rgba(196,181,253,.9)]"
      }`}
    />
  );
}

/* =========================================================
   TRANSACTION STREAM
========================================================= */

function TransactionStream() {
  const rows = [
    {
      id: "TX-8417",
      type: "Card",
      state: "Review",
      value: 73,
    },
    {
      id: "TX-8418",
      type: "Transfer",
      state: "Observed",
      value: 36,
    },
    {
      id: "TX-8419",
      type: "Wallet",
      state: "Review",
      value: 65,
    },
    {
      id: "TX-8420",
      type: "Card",
      state: "Observed",
      value: 29,
    },
    {
      id: "TX-8421",
      type: "Transfer",
      state: "Review",
      value: 82,
    },
  ];

  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-[#050505] p-6">
      <div className="flex items-center justify-between">
        <div>
          <Micro>Transaction Stream</Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Illustrative event feed
          </p>
        </div>

        <Activity
          size={13}
          className="text-[#60a5fa]"
        />
      </div>

      <div className="mt-7 space-y-3">
        {rows.map((row, index) => (
          <motion.div
            key={row.id}
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
              delay: index * 0.08,
            }}
            className="rounded-[13px] border border-white/[0.06] bg-[#080808] p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-[7px] text-white/55">
                  {row.id}
                </span>

                <span className="mt-1 block font-mono text-[5px] uppercase tracking-[0.1em] text-white/20">
                  {row.type}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <LiveDot blue={index % 2 !== 0} />

                <span className="font-mono text-[6px] uppercase tracking-[0.1em] text-white/25">
                  {row.state}
                </span>
              </div>
            </div>

            <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-white/[0.04]">
              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: `${row.value}%`,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.06,
                }}
                className={`h-full ${
                  index % 2 === 0
                    ? "bg-[#8b5cf6]"
                    : "bg-[#60a5fa]"
                }`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 rounded-[12px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.04] p-4">
        <div className="flex items-start gap-3">
          <ShieldCheck
            size={13}
            className="mt-0.5 shrink-0 text-[#a78bfa]"
          />

          <p className="text-[8px] leading-5 text-white/30">
            Automated signals should be treated as analytical evidence,
            not as proof that fraud occurred.
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   BEHAVIOR FINGERPRINT
========================================================= */

function BehaviorFingerprint() {
  const bars = [35, 62, 43, 82, 55, 72, 40, 88, 67, 48];

  return (
    <ModelCard
      title="Behavior Fingerprint"
      Icon={Fingerprint}
    >
      <div className="relative mt-7 flex h-[125px] items-center justify-center">
        <div className="absolute h-[110px] w-[110px] rounded-full border border-[#8b5cf6]/15" />
        <div className="absolute h-[80px] w-[80px] rounded-full border border-[#60a5fa]/15" />
        <div className="absolute h-[48px] w-[48px] rounded-full border border-[#8b5cf6]/25" />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[100px] w-[100px] rounded-full border-t border-[#c4b5fd]/70"
        />

        <Fingerprint
          size={27}
          strokeWidth={1}
          className="relative z-10 text-[#c4b5fd]"
        />
      </div>

      <div className="mt-5 flex h-[38px] items-end gap-1">
        {bars.map((height, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            whileInView={{
              height: `${height}%`,
            }}
            viewport={{ once: true }}
            className={`w-full rounded-t-[2px] ${
              index % 2 === 0
                ? "bg-[#8b5cf6]/65"
                : "bg-[#60a5fa]/45"
            }`}
          />
        ))}
      </div>

      <p className="mt-5 text-[9px] leading-5 text-white/30">
        Compare current behavior with relevant patterns and contextual
        history.
      </p>
    </ModelCard>
  );
}

/* =========================================================
   ANOMALY MODEL
========================================================= */

function AnomalyModel() {
  const points = [
    { left: "8%", top: "65%" },
    { left: "18%", top: "51%" },
    { left: "28%", top: "58%" },
    { left: "39%", top: "41%" },
    { left: "49%", top: "47%" },
    { left: "60%", top: "30%" },
    { left: "70%", top: "37%" },
    { left: "80%", top: "22%" },
    { left: "88%", top: "28%" },
  ];

  return (
    <ModelCard
      title="Anomaly Pattern"
      Icon={Activity}
    >
      <div className="relative mt-7 h-[150px] overflow-hidden rounded-[10px] border border-white/[0.05] bg-[#080808]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <svg
          viewBox="0 0 300 150"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M20 110 C55 100 65 88 95 92 C125 96 132 67 160 72 C190 76 192 43 220 50 C245 56 250 32 280 40"
            fill="none"
            stroke="rgba(139,92,246,.7)"
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
              duration: 1.3,
            }}
          />
        </svg>

        {points.map((point, index) => (
          <motion.div
            key={index}
            animate={{
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: 2,
              delay: index * 0.15,
              repeat: Infinity,
            }}
            className={`absolute h-2 w-2 rounded-full ${
              index === 7
                ? "bg-[#c4b5fd] shadow-[0_0_16px_rgba(196,181,253,.8)]"
                : "bg-[#60a5fa]/60"
            }`}
            style={point}
          />
        ))}

        <motion.div
          animate={{
            left: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 top-0 w-px bg-[#60a5fa]/30"
        />
      </div>

      <p className="mt-5 text-[9px] leading-5 text-white/30">
        Surface unusual changes for investigation without assuming that
        every anomaly represents fraudulent activity.
      </p>
    </ModelCard>
  );
}

/* =========================================================
   EVIDENCE MODEL
========================================================= */

function EvidenceModel() {
  const evidence = [
    {
      name: "Device context",
      value: 82,
    },
    {
      name: "Velocity",
      value: 67,
    },
    {
      name: "Identity relation",
      value: 51,
    },
    {
      name: "Behavior deviation",
      value: 73,
    },
  ];

  return (
    <ModelCard
      title="Evidence Stack"
      Icon={LayersIcon}
    >
      <div className="mt-7 space-y-3">
        {evidence.map((item, index) => (
          <div
            key={item.name}
            className="rounded-[10px] border border-white/[0.05] bg-[#080808] p-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-[7px] text-white/35">
                {item.name}
              </span>

              <CircleDot
                size={8}
                className={
                  index % 2 === 0
                    ? "text-[#a78bfa]"
                    : "text-[#60a5fa]"
                }
              />
            </div>

            <div className="mt-2 h-[2px] bg-white/[0.04]">
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

      <p className="mt-5 text-[9px] leading-5 text-white/30">
        Combine supporting context into a structured evidence view for
        appropriate analyst review.
      </p>
    </ModelCard>
  );
}

function LayersIcon({
  size = 12,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Database
      size={size}
      className={className}
    />
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
   INTRO
========================================================= */

function FraudIntro() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="01">
          Understanding Fraud Detection
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="max-w-[650px] text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              A transaction

              <span className="block text-white/20">
                is only one clue.
              </span>
            </h2>
          </div>

          <div className="self-end">
            <p className="text-[14px] leading-8 text-white/[0.55]">
              Fraud detection is stronger when an event can be evaluated
              alongside the wider context surrounding it. Device
              information, identity relationships, historical behavior,
              transaction velocity and network connections can all provide
              useful analytical evidence.
            </p>

            <p className="mt-5 text-[12px] leading-7 text-white/[0.38]">
              No single signal necessarily proves fraudulent activity.
              Effective systems are designed to surface potentially relevant
              patterns and organize evidence so appropriate teams can review
              the situation using defined business controls.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-3">
          <ConceptCard
            code="01"
            Icon={Eye}
            title="Observe activity"
            text="Continuously collect relevant activity so analysts have enough context to understand what happened around a transaction or event."
          />

          <ConceptCard
            code="02"
            Icon={GitBranch}
            title="Connect evidence"
            text="Study relationships between events, identities, accounts and devices instead of treating each observation as an isolated record."
          />

          <ConceptCard
            code="03"
            Icon={Search}
            title="Support investigation"
            text="Organize analytical findings into evidence that can support appropriate investigation, escalation and resolution workflows."
          />
        </div>
      </Container>
    </section>
  );
}

function ConceptCard({
  code,
  Icon,
  title,
  text,
}: {
  code: string;
  Icon: ElementType;
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
          {code}
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
   SIGNAL LAYERS
========================================================= */

function FraudSignals() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel number="02">
              Detection Signals
            </SectionLabel>

            <h2 className="mt-9 max-w-[780px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Context changes

              <span className="block bg-gradient-to-r from-white/20 to-[#8b5cf6]/70 bg-clip-text text-transparent">
                what a signal means.
              </span>
            </h2>
          </div>

          <p className="max-w-[450px] text-[12px] leading-7 text-white/40">
            Fraud intelligence can combine multiple types of evidence to
            support a more contextual analytical view of potentially unusual
            activity.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {fraudSignals.map((signal, index) => (
            <motion.article
              key={signal.title}
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
                <span
                  className={`font-mono text-[8px] ${
                    index % 2 === 0
                      ? "text-[#a78bfa]"
                      : "text-[#60a5fa]"
                  }`}
                >
                  {signal.code}
                </span>

                <div
                  className={`h-2 w-2 rounded-full ${
                    index % 2 === 0
                      ? "bg-[#8b5cf6]"
                      : "bg-[#60a5fa]"
                  }`}
                />
              </div>

              <h3 className="mt-8 text-xl font-medium tracking-[-0.035em] text-white/80">
                {signal.title}
              </h3>

              <p className="mt-4 text-[11px] leading-6 text-white/[0.42]">
                {signal.text}
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px flex-1 bg-white/[0.06]" />

                <ArrowRight
                  size={11}
                  className="text-white/15 transition-all group-hover:translate-x-1 group-hover:text-[#a78bfa]"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   HOW HYI WORKS
========================================================= */

function HYIFraudSystem() {
  return (
    <section
      id="hyi-fraud"
      className="bg-[#050505] px-5 py-28 md:px-10"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <SectionLabel number="03">
              HYI Fraud Intelligence
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Build detection

              <span className="block text-white/20">
                around evidence.
              </span>
            </h2>

            <p className="mt-7 max-w-[450px] text-[12px] leading-7 text-white/[0.4]">
              HYI can help engineer the data, analytics, monitoring and
              workflow layers used around fraud detection. The specific
              models, rules and controls should be designed for the
              organization&apos;s domain, risk tolerance, data and
              regulatory requirements.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <ShieldCheck
                size={14}
                className="text-[#a78bfa]"
              />

              <Micro>Human review remains part of the system</Micro>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {detectionCapabilities.map(
              ({ Icon, title, text }, index) => (
                <motion.article
                  key={title}
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
                  className="rounded-[18px] border border-white/[0.07] bg-[#080808] p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">
                    <Icon
                      size={14}
                      strokeWidth={1.4}
                      className="text-[#c4b5fd]"
                    />
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
   FRAUD PIPELINE
========================================================= */

function FraudPipeline() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-24 md:px-10">
      <Container>
        <SectionLabel number="04">
          Detection Architecture
        </SectionLabel>

        <div className="mt-10 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#050505] p-6 md:p-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <Micro>Transaction Intelligence Pipeline</Micro>

              <p className="mt-2 text-[9px] text-white/25">
                From raw event to reviewable evidence
              </p>
            </div>

            <div className="flex items-center gap-2">
              <LiveDot />
              <Micro>Pipeline active</Micro>
            </div>
          </div>

          <div className="relative mt-12 grid gap-3 md:grid-cols-5">
            {/* LINE */}

            <div className="absolute left-[8%] right-[8%] top-[45px] hidden h-px bg-gradient-to-r from-[#8b5cf6]/20 via-[#c4b5fd]/70 to-[#60a5fa]/20 md:block" />

            {/* MOVING PACKET */}

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
              className="absolute top-[40px] z-30 hidden h-[10px] w-[10px] rounded-full bg-[#c4b5fd] shadow-[0_0_22px_rgba(196,181,253,.9)] md:block"
            />

            {pipeline.map((item, index) => (
              <motion.div
                key={item.id}
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

                <span className="mt-5 block text-[11px] text-white/60">
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
   INVESTIGATION
========================================================= */

function InvestigationWorkflow() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <SectionLabel number="05">
              Investigation Workflow
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em]">
              Detection is

              <span className="block text-white/20">
                not the verdict.
              </span>
            </h2>

            <p className="mt-6 max-w-[420px] text-[11px] leading-7 text-white/35">
              A professional fraud system separates analytical detection
              from investigation and final business decisions. Signals
              should move through defined workflows with evidence and
              appropriate controls.
            </p>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#080808]">
            {investigationSteps.map((item, index) => (
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
                className="grid gap-4 border-b border-white/[0.06] p-6 last:border-b-0 sm:grid-cols-[55px_120px_1fr]"
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

function FraudPrinciples() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel number="06">
              Detection Principles
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em]">
              Detect carefully.

              <span className="block bg-gradient-to-r from-white/20 to-[#60a5fa]/60 bg-clip-text text-transparent">
                Investigate responsibly.
              </span>
            </h2>

            <p className="mt-6 max-w-[430px] text-[11px] leading-7 text-white/35">
              Fraud systems can affect real customers and financial
              activity. Analytical outputs therefore need appropriate
              validation, monitoring, governance and review.
            </p>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505]">
            {principles.map((principle, index) => (
              <div
                key={principle}
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
      <div className="pointer-events-none absolute left-[18%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.08] blur-[160px]" />

      <div className="pointer-events-none absolute right-[18%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#2563eb]/[0.06] blur-[160px]" />

      <Container className="relative text-center">
        <div className="relative mx-auto flex h-[100px] w-[100px] items-center justify-center">
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
            className="absolute inset-[12px] rounded-full border border-dashed border-[#60a5fa]/20"
          />

          <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-white/[0.08] bg-[#090909]">
            <Fingerprint
              size={23}
              strokeWidth={1}
              className="text-[#c4b5fd]"
            />
          </div>
        </div>

        <h2 className="mx-auto mt-10 max-w-[1100px] text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
          Find the pattern

          <span className="block bg-gradient-to-r from-[#c4b5fd] via-white/35 to-[#60a5fa] bg-clip-text text-transparent">
            behind the signal.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[700px] text-[12px] leading-7 text-white/[0.43]">
          Build connected fraud intelligence that combines monitoring,
          contextual analytics, relationship analysis and controlled
          investigation workflows.
        </p>

        <a
          href="#fraud-engine"
          className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full bg-white px-9 py-4 text-[11px] font-medium text-black"
        >
          Explore Fraud Detection
          <ArrowRight size={13} />
        </a>
      </Container>
    </section>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function FraudDetectionClient() {
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

      <FraudIntro />

      <FraudSignals />

      <HYIFraudSystem />

      <FraudPipeline />

      <InvestigationWorkflow />

      <FraudPrinciples />

      <FinalCTA />
    </div>
  );
}