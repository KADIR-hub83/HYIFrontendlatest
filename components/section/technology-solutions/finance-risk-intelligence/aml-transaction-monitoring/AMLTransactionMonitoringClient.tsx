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
  BrainCircuit,
  CheckCircle2,
  CircleDot,
  Database,
  Eye,
  GitBranch,
  Network,
  Radio,
  RefreshCcw,
  Search,
  Server,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import type {
  ElementType,
  ReactNode,
} from "react";

/* =========================================================
   DATA
========================================================= */

const capabilities = [
  {
    number: "01",
    Icon: Activity,
    title: "Transaction Monitoring",
    text:
      "Continuously analyze selected transaction activity against configurable monitoring logic, behavioral patterns and risk indicators.",
  },
  {
    number: "02",
    Icon: BrainCircuit,
    title: "Risk Intelligence",
    text:
      "Combine transaction context, customer information and analytical signals to support more informed AML review workflows.",
  },
  {
    number: "03",
    Icon: GitBranch,
    title: "Network Analysis",
    text:
      "Explore relationships between accounts, counterparties and transaction flows to surface patterns that may require investigation.",
  },
  {
    number: "04",
    Icon: Search,
    title: "Alert Investigation",
    text:
      "Bring relevant transaction context, signals and supporting information together so analysts can investigate alerts efficiently.",
  },
  {
    number: "05",
    Icon: Database,
    title: "Evidence Context",
    text:
      "Maintain structured information around monitoring signals, reviews and supporting records for governed operational workflows.",
  },
  {
    number: "06",
    Icon: Workflow,
    title: "Case Workflow",
    text:
      "Route selected alerts through structured review, escalation and resolution processes with clear ownership and status.",
  },
];

const transactions = [
  {
    id: "TX-80241",
    from: "ACC-482",
    to: "ACC-091",
    amount: "$12,480",
    risk: "LOW",
  },
  {
    id: "TX-80242",
    from: "ACC-182",
    to: "ACC-774",
    amount: "$84,200",
    risk: "REVIEW",
  },
  {
    id: "TX-80243",
    from: "ACC-601",
    to: "ACC-225",
    amount: "$9,820",
    risk: "LOW",
  },
  {
    id: "TX-80244",
    from: "ACC-934",
    to: "ACC-117",
    amount: "$126,400",
    risk: "REVIEW",
  },
  {
    id: "TX-80245",
    from: "ACC-315",
    to: "ACC-782",
    amount: "$31,600",
    risk: "LOW",
  },
];

const workflow = [
  {
    number: "01",
    title: "Ingest",
    text: "Bring relevant transaction and customer data into the monitoring environment.",
  },
  {
    number: "02",
    title: "Observe",
    text: "Evaluate transaction activity using defined monitoring signals and contextual information.",
  },
  {
    number: "03",
    title: "Detect",
    text: "Surface selected patterns or events that meet configured review criteria.",
  },
  {
    number: "04",
    title: "Investigate",
    text: "Provide analysts with connected transaction context for human review.",
  },
  {
    number: "05",
    title: "Resolve",
    text: "Document outcomes and route cases through appropriate governed processes.",
  },
];

const monitoringSignals = [
  "Transaction velocity",
  "Counterparty relationships",
  "Behavioral deviation",
  "Transaction concentration",
  "Cross-account movement",
  "Configured monitoring rules",
];

const architecture = [
  {
    Icon: Database,
    title: "Transaction Data",
    text: "Payments, transfers and relevant financial activity.",
  },
  {
    Icon: Server,
    title: "Monitoring Layer",
    text: "Rules, analytical signals and processing services.",
  },
  {
    Icon: BrainCircuit,
    title: "Risk Intelligence",
    text: "Contextual analysis and selected AI-assisted capabilities.",
  },
  {
    Icon: Search,
    title: "Investigation",
    text: "Analyst review, evidence and case context.",
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
    <div
      className={`mx-auto w-full max-w-[1380px] ${className}`}
    >
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
        purple
          ? "text-[#a78bfa]"
          : "text-white/30"
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

function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <motion.span
        animate={{
          scale: [1, 2.6, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute inset-0 rounded-full bg-[#8b5cf6]"
      />

      <span className="relative h-2 w-2 rounded-full bg-[#a78bfa]" />
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
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 76%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 76%, transparent 100%)",
        }}
      />

      {/* GLOWS */}

      <div className="pointer-events-none absolute left-[15%] top-[280px] h-[500px] w-[500px] rounded-full bg-[#7c3aed]/[0.05] blur-[180px]" />

      <div className="pointer-events-none absolute right-[10%] top-[350px] h-[500px] w-[500px] rounded-full bg-[#2563eb]/[0.04] blur-[180px]" />

      <Container className="relative">
        {/* TOP BAR */}

        {/* <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <LiveDot />

            <Micro>
              AML / Transaction Intelligence
            </Micro>
          </div>

          <div className="hidden items-center gap-7 md:flex">
            <Micro>Monitor</Micro>
            <Micro>Analyze</Micro>
            <Micro>Investigate</Micro>
            <Micro>Review</Micro>
          </div>
        </div> */}

        {/* HERO TEXT */}

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
              duration: 0.5,
            }}
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-4 py-2"
          >
            <Radio
              size={11}
              className="text-[#c4b5fd]"
            />

            <Micro>
              Live Transaction Monitoring
            </Micro>
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
              duration: 0.75,
            }}
            className="mt-9 text-[clamp(4rem,8.3vw,8.3rem)] font-semibold leading-[0.82] tracking-[-0.085em]"
          >
            Follow the money.

            <span className="block bg-gradient-to-r from-white/20 via-[#c4b5fd]/65 to-white/20 bg-clip-text text-transparent">
              Understand the signal.
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
              delay: 0.18,
            }}
            className="mx-auto mt-9 max-w-[830px] text-[14px] leading-8 text-white/[0.54]"
          >
            HYI helps build transaction monitoring
            environments that connect financial activity,
            customer context, monitoring signals and
            investigation workflows. Give AML teams a
            clearer view of transaction movement and the
            context required for structured human review.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#monitoring-engine"
              className="flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-medium text-black"
            >
              Explore monitoring engine

              <ArrowDown size={13} />
            </a>

            <a
              href="#capabilities"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[11px] text-white/50"
            >
              AML capabilities

              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* MAIN MODEL */}

        <div
          id="monitoring-engine"
          className="mt-20"
        >
          <AMLMonitoringEngine />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   AML MONITORING ENGINE
========================================================= */

function AMLMonitoringEngine() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#080808] p-5 md:p-7">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative">
        {/* HEADER */}

        <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
              <Activity
                size={15}
                className="text-[#c4b5fd]"
              />
            </div>

            <div>
              <Micro>
                AML Monitoring Engine
              </Micro>

              <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.12em] text-white/15">
                TRANSACTION NETWORK / LIVE ANALYSIS
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LiveDot />

            <Micro>
              Stream active
            </Micro>
          </div>
        </div>

        {/* MAIN */}

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.3fr_.7fr]">
          <TransactionNetwork />

          <TransactionStream />
        </div>

        {/* BOTTOM */}

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <MoneyFlowModel />

          <RiskSignalModel />

          <CaseQueueModel />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   TRANSACTION NETWORK
========================================================= */

function TransactionNetwork() {
  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505]">
      {/* GRID */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative z-10 flex items-center justify-between p-6">
        <div>
          <Micro>
            Transaction Network
          </Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Connected financial activity
          </p>
        </div>

        <Network
          size={13}
          className="text-[#a78bfa]"
        />
      </div>

      {/* SVG CONNECTIONS */}

      <svg
        viewBox="0 0 800 400"
        className="absolute left-0 top-[75px] h-[390px] w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="amlLine"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#8b5cf6"
              stopOpacity="0.12"
            />

            <stop
              offset="50%"
              stopColor="#c4b5fd"
              stopOpacity="0.6"
            />

            <stop
              offset="100%"
              stopColor="#3b82f6"
              stopOpacity="0.12"
            />
          </linearGradient>
        </defs>

        <motion.path
          d="M400 200 L120 85"
          stroke="url(#amlLine)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="7 7"
          animate={{
            strokeDashoffset: [0, -28],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M400 200 L680 85"
          stroke="url(#amlLine)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="7 7"
          animate={{
            strokeDashoffset: [0, -28],
          }}
          transition={{
            duration: 2.3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M400 200 L125 315"
          stroke="url(#amlLine)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="7 7"
          animate={{
            strokeDashoffset: [0, -28],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M400 200 L675 315"
          stroke="url(#amlLine)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="7 7"
          animate={{
            strokeDashoffset: [0, -28],
          }}
          transition={{
            duration: 2.1,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M120 85 L680 85"
          stroke="#ffffff"
          strokeOpacity="0.06"
          strokeWidth="1"
          fill="none"
        />

        <motion.path
          d="M125 315 L675 315"
          stroke="#ffffff"
          strokeOpacity="0.06"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* CENTRAL ENGINE */}

      <div className="absolute left-1/2 top-[54%] z-20 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-[190px] w-[190px] items-center justify-center">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
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
              duration: 13,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[18px] rounded-full border border-dashed border-white/10"
          />

          <motion.div
            animate={{
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute inset-[37px] rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04]"
          />

          <div className="relative z-20 flex h-[95px] w-[95px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#080808] shadow-[0_0_60px_rgba(124,58,237,.08)]">
            <Activity
              size={23}
              strokeWidth={1}
              className="text-[#c4b5fd]"
            />

            <span className="mt-3 font-mono text-[6px] uppercase tracking-[0.15em] text-white/40">
              AML
            </span>

            <span className="mt-1 font-mono text-[5px] text-[#a78bfa]">
              ENGINE
            </span>
          </div>

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[4px]"
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 rounded-full bg-[#a78bfa] shadow-[0_0_16px_rgba(167,139,250,.9)]" />
          </motion.div>
        </div>
      </div>

      {/* NODES */}

      <NetworkNode
        className="left-[5%] top-[30%]"
        title="Account"
        code="ACC-482"
        value="$84.2K"
      />

      <NetworkNode
        className="right-[5%] top-[30%]"
        title="Counterparty"
        code="ACC-774"
        value="$84.2K"
        active
      />

      <NetworkNode
        className="bottom-[7%] left-[6%]"
        title="Account"
        code="ACC-934"
        value="$126K"
        active
      />

      <NetworkNode
        className="bottom-[7%] right-[6%]"
        title="Counterparty"
        code="ACC-117"
        value="$126K"
      />

      {/* SIGNAL DOTS */}

      <motion.div
        animate={{
          x: [0, 210],
          y: [0, 85],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-[17%] top-[32%] z-30 h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_15px_rgba(196,181,253,.8)]"
      />

      <motion.div
        animate={{
          x: [0, -210],
          y: [0, 85],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3.4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute right-[17%] top-[32%] z-30 h-2 w-2 rounded-full bg-[#60a5fa] shadow-[0_0_15px_rgba(96,165,250,.7)]"
      />
    </div>
  );
}

function NetworkNode({
  className,
  title,
  code,
  value,
  active = false,
}: {
  className: string;
  title: string;
  code: string;
  value: string;
  active?: boolean;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
      }}
      className={`absolute z-20 w-[145px] rounded-[14px] border p-4 ${
        active
          ? "border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.05]"
          : "border-white/[0.07] bg-[#080808]"
      } ${className}`}
    >
      <div className="flex items-center justify-between">
        <CircleDot
          size={9}
          className={
            active
              ? "text-[#a78bfa]"
              : "text-white/25"
          }
        />

        <span
          className={`font-mono text-[5px] ${
            active
              ? "text-[#a78bfa]"
              : "text-white/20"
          }`}
        >
          {active ? "REVIEW" : "ACTIVE"}
        </span>
      </div>

      <span className="mt-5 block font-mono text-[5px] uppercase tracking-[0.12em] text-white/20">
        {title}
      </span>

      <span className="mt-1 block text-[9px] text-white/55">
        {code}
      </span>

      <span className="mt-3 block font-mono text-[7px] text-white/30">
        {value}
      </span>
    </motion.div>
  );
}

/* =========================================================
   TRANSACTION STREAM
========================================================= */

function TransactionStream() {
  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-[#050505] p-5">
      <div className="flex items-center justify-between">
        <div>
          <Micro>
            Transaction Stream
          </Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Illustrative monitoring feed
          </p>
        </div>

        <Radio
          size={12}
          className="text-[#a78bfa]"
        />
      </div>

      <div className="mt-6 space-y-2">
        {transactions.map(
          (transaction, index) => (
            <motion.div
              key={transaction.id}
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
              className="rounded-[11px] border border-white/[0.055] bg-[#080808] p-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[6px] text-white/30">
                  {transaction.id}
                </span>

                <span
                  className={`rounded-full px-2 py-1 font-mono text-[5px] ${
                    transaction.risk === "REVIEW"
                      ? "bg-[#8b5cf6]/10 text-[#c4b5fd]"
                      : "bg-white/[0.04] text-white/25"
                  }`}
                >
                  {transaction.risk}
                </span>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="font-mono text-[6px] text-white/25">
                  {transaction.from}
                </span>

                <span className="h-px flex-1 bg-white/[0.08]" />

                <motion.span
                  animate={{
                    x: [-3, 3, -3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight
                    size={8}
                    className="text-[#a78bfa]"
                  />
                </motion.span>

                <span className="h-px flex-1 bg-white/[0.08]" />

                <span className="font-mono text-[6px] text-white/25">
                  {transaction.to}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-[7px] text-white/20">
                  Amount
                </span>

                <span className="font-mono text-[7px] text-white/45">
                  {transaction.amount}
                </span>
              </div>
            </motion.div>
          ),
        )}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
        <Micro>
          Stream
        </Micro>

        <div className="flex items-center gap-2">
          <LiveDot />

          <Micro purple>
            Live
          </Micro>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SMALL MODEL WRAPPER
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
      className="overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#050505] p-5"
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
   MONEY FLOW MODEL
========================================================= */

function MoneyFlowModel() {
  return (
    <ModelCard
      title="Money Flow"
      Icon={RefreshCcw}
    >
      <div className="relative mt-7 flex h-[115px] items-center justify-between">
        <div className="relative z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-[#080808]">
          <span className="text-[14px] font-medium text-white/45">
            $
          </span>
        </div>

        <div className="relative mx-3 flex-1">
          <div className="h-px w-full bg-gradient-to-r from-white/10 via-[#8b5cf6]/60 to-white/10" />

          <motion.div
            animate={{
              left: ["0%", "95%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-[3px] h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_12px_rgba(196,181,253,.8)]"
          />

          <span className="mt-3 block text-center font-mono text-[5px] text-white/20">
            TRANSFER
          </span>
        </div>

        <div className="relative z-20 flex h-12 w-12 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">
          <span className="text-[14px] font-medium text-[#c4b5fd]">
            $
          </span>
        </div>
      </div>

      <p className="text-[9px] leading-5 text-white/30">
        Follow selected transaction movement across
        connected accounts and counterparties.
      </p>
    </ModelCard>
  );
}

/* =========================================================
   RISK SIGNAL MODEL
========================================================= */

function RiskSignalModel() {
  const bars = [
    28,
    43,
    35,
    69,
    45,
    84,
    52,
    37,
    72,
    48,
    62,
  ];

  return (
    <ModelCard
      title="Signal Analysis"
      Icon={Activity}
    >
      <div className="mt-7 flex h-[115px] items-end gap-2 rounded-[12px] border border-white/[0.05] bg-[#080808] p-4">
        {bars.map(
          (value, index) => (
            <motion.div
              key={index}
              initial={{
                height: "5%",
              }}
              animate={{
                height: [
                  `${Math.max(10, value - 15)}%`,
                  `${value}%`,
                  `${Math.max(10, value - 8)}%`,
                ],
              }}
              transition={{
                duration: 2 + index * 0.1,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className={`flex-1 rounded-t-[2px] ${
                index === 5 || index === 8
                  ? "bg-[#8b5cf6]"
                  : "bg-white/15"
              }`}
            />
          ),
        )}
      </div>

      <p className="mt-5 text-[9px] leading-5 text-white/30">
        Compare selected monitoring signals and surface
        activity that may warrant additional review.
      </p>
    </ModelCard>
  );
}

/* =========================================================
   CASE QUEUE
========================================================= */

function CaseQueueModel() {
  const cases = [
    {
      label: "Transaction pattern",
      status: "REVIEW",
    },
    {
      label: "Account relationship",
      status: "OPEN",
    },
    {
      label: "Velocity signal",
      status: "REVIEW",
    },
  ];

  return (
    <ModelCard
      title="Investigation Queue"
      Icon={Search}
    >
      <div className="mt-7 space-y-2">
        {cases.map(
          (item, index) => (
            <motion.div
              key={item.label}
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
                delay: index * 0.1,
              }}
              className="flex items-center justify-between rounded-[9px] border border-white/[0.05] bg-[#080808] px-3 py-3"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    index === 1
                      ? "bg-white/25"
                      : "bg-[#a78bfa]"
                  }`}
                />

                <span className="text-[7px] text-white/35">
                  {item.label}
                </span>
              </div>

              <span className="font-mono text-[5px] text-white/20">
                {item.status}
              </span>
            </motion.div>
          ),
        )}
      </div>

      <p className="mt-5 text-[9px] leading-5 text-white/30">
        Route selected monitoring alerts into structured
        human investigation workflows.
      </p>
    </ModelCard>
  );
}

/* =========================================================
   INTRO
========================================================= */

function Intro() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="01">
          Transaction Intelligence
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="max-w-[650px] text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              See movement.

              <span className="block text-white/20">
                See context.
              </span>
            </h2>
          </div>

          <div className="self-end">
            <p className="text-[14px] leading-8 text-white/[0.54]">
              Financial activity rarely exists in
              isolation. Understanding a transaction may
              require context about the customer,
              counterparties, previous activity,
              relationships and monitoring signals around
              that movement.
            </p>

            <p className="mt-5 text-[12px] leading-7 text-white/[0.37]">
              A connected transaction monitoring
              architecture helps bring those signals
              together and present relevant information to
              AML teams for governed investigation and
              decision-making.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   CAPABILITIES
========================================================= */

function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10"
    >
      <Container>
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel number="02">
              AML Capabilities
            </SectionLabel>

            <h2 className="mt-9 max-w-[800px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Intelligence across

              <span className="block text-white/20">
                every transaction.
              </span>
            </h2>
          </div>

          <p className="max-w-[470px] text-[12px] leading-7 text-white/40">
            Build monitoring systems around transaction
            context, relationships, analytical signals and
            structured investigation workflows.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(
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
                  y: 20,
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
                whileHover={{
                  y: -5,
                }}
                className="group rounded-[18px] border border-white/[0.07] bg-[#050505] p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">
                    <Icon
                      size={14}
                      strokeWidth={1.3}
                      className="text-[#c4b5fd]"
                    />
                  </div>

                  <span className="font-mono text-[7px] text-white/20">
                    {number}
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
   SIGNAL MONITORING
========================================================= */

function SignalMonitoring() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          {/* TEXT */}

          <div className="self-center">
            <SectionLabel number="03">
              Monitoring Signals
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Look beyond

              <span className="block bg-gradient-to-r from-white/20 to-[#a78bfa]/70 bg-clip-text text-transparent">
                one transaction.
              </span>
            </h2>

            <p className="mt-7 max-w-[470px] text-[12px] leading-7 text-white/40">
              Monitoring becomes more useful when a
              transaction can be understood in the context
              of historical behavior, relationships,
              movement patterns and other relevant
              financial activity.
            </p>

            <div className="mt-8 space-y-3">
              {monitoringSignals.map(
                (signal) => (
                  <div
                    key={signal}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={11}
                      className="text-[#a78bfa]"
                    />

                    <span className="text-[9px] text-white/35">
                      {signal}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          <SignalRadar />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   SIGNAL RADAR
========================================================= */

function SignalRadar() {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#080808] p-6">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.035) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 flex items-center justify-between">
        <div>
          <Micro>
            AML Signal Radar
          </Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Pattern observation model
          </p>
        </div>

        <Eye
          size={13}
          className="text-[#a78bfa]"
        />
      </div>

      <div className="relative mx-auto mt-8 flex h-[390px] max-w-[600px] items-center justify-center">
        {/* RINGS */}

        <div className="absolute h-[340px] w-[340px] rounded-full border border-white/[0.06]" />

        <div className="absolute h-[260px] w-[260px] rounded-full border border-white/[0.06]" />

        <div className="absolute h-[180px] w-[180px] rounded-full border border-white/[0.06]" />

        <div className="absolute h-[100px] w-[100px] rounded-full border border-[#8b5cf6]/20" />

        <div className="absolute h-[340px] w-px bg-white/[0.04]" />

        <div className="absolute h-px w-[340px] bg-white/[0.04]" />

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
          className="absolute h-[330px] w-[330px] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(139,92,246,.16) 42deg, transparent 78deg)",
          }}
        />

        {/* CENTER */}

        <div className="relative z-20 flex h-[86px] w-[86px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#050505]">
          <BrainCircuit
            size={20}
            strokeWidth={1}
            className="text-[#c4b5fd]"
          />

          <span className="mt-2 font-mono text-[5px] text-white/35">
            ANALYSIS
          </span>
        </div>

        {/* SIGNALS */}

        <RadarSignal
          className="left-[19%] top-[23%]"
          label="VELOCITY"
          purple
        />

        <RadarSignal
          className="right-[18%] top-[30%]"
          label="NETWORK"
        />

        <RadarSignal
          className="bottom-[21%] left-[26%]"
          label="BEHAVIOR"
        />

        <RadarSignal
          className="bottom-[18%] right-[24%]"
          label="PATTERN"
          purple
        />
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
        opacity: [0.35, 1, 0.35],
        scale: [0.9, 1.1, 0.9],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
      }}
      className={`absolute z-30 ${className}`}
    >
      <span
        className={`block h-2 w-2 rounded-full ${
          purple
            ? "bg-[#a78bfa] shadow-[0_0_15px_rgba(167,139,250,.8)]"
            : "bg-white/50"
        }`}
      />

      <span className="absolute left-3 top-[-2px] whitespace-nowrap font-mono text-[5px] text-white/25">
        {label}
      </span>
    </motion.div>
  );
}

/* =========================================================
   ARCHITECTURE
========================================================= */

function Architecture() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="04">
          AML Architecture
        </SectionLabel>

        <div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[780px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
            From transaction data

            <span className="block text-white/20">
              to investigation context.
            </span>
          </h2>

          <p className="max-w-[430px] text-[11px] leading-7 text-white/35">
            Connect data, monitoring logic, analytical
            services and analyst workflows through a
            controlled AML technology architecture.
          </p>
        </div>

        <div className="relative mt-14 grid gap-3 lg:grid-cols-4">
          <div className="absolute left-[8%] right-[8%] top-[38px] hidden h-px bg-gradient-to-r from-[#8b5cf6]/20 via-[#c4b5fd]/40 to-[#3b82f6]/20 lg:block" />

          <motion.div
            animate={{
              left: ["8%", "92%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[34px] z-30 hidden h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_15px_rgba(196,181,253,.8)] lg:block"
          />

          {architecture.map(
            (
              {
                Icon,
                title,
                text,
              },
              index,
            ) => (
              <motion.article
                key={title}
                whileHover={{
                  y: -5,
                }}
                className="relative z-20 rounded-[18px] border border-white/[0.07] bg-[#050505] p-6"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#080808]">
                  <Icon
                    size={12}
                    className="text-[#c4b5fd]"
                  />
                </div>

                <span className="mt-8 block font-mono text-[6px] text-[#a78bfa]">
                  0{index + 1}
                </span>

                <h3 className="mt-3 text-[15px] font-medium text-white/70">
                  {title}
                </h3>

                <p className="mt-4 text-[9px] leading-5 text-white/35">
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
   INVESTIGATION
========================================================= */

function Investigation() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_.8fr]">
          <InvestigationModel />

          <div className="self-center">
            <SectionLabel number="05">
              Investigation
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Give analysts

              <span className="block text-white/20">
                the whole picture.
              </span>
            </h2>

            <p className="mt-7 max-w-[470px] text-[12px] leading-7 text-white/40">
              A monitoring alert is only the beginning.
              Analysts need relevant transaction history,
              relationships, signals and supporting
              context to understand why an event was
              surfaced and determine the appropriate next
              step.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Transaction history",
                "Relationship context",
                "Monitoring signals",
                "Supporting records",
              ].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={11}
                      className="text-[#a78bfa]"
                    />

                    <span className="text-[9px] text-white/35">
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   INVESTIGATION MODEL
========================================================= */

function InvestigationModel() {
  return (
    <div className="overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#080808] p-6">
      <div className="flex items-center justify-between">
        <div>
          <Micro>
            Investigation Workspace
          </Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Illustrative analyst interface
          </p>
        </div>

        <Search
          size={13}
          className="text-[#a78bfa]"
        />
      </div>

      <div className="mt-7 grid gap-3 md:grid-cols-[.7fr_1.3fr]">
        {/* CASE */}

        <div className="rounded-[14px] border border-white/[0.06] bg-[#050505] p-5">
          <Micro>
            Case
          </Micro>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">
              <Search
                size={14}
                className="text-[#c4b5fd]"
              />
            </div>

            <div>
              <span className="block font-mono text-[7px] text-white/45">
                AML-2048
              </span>

              <span className="mt-1 block font-mono text-[5px] text-[#a78bfa]">
                UNDER REVIEW
              </span>
            </div>
          </div>

          <div className="mt-7 space-y-3">
            <InfoRow
              label="Transactions"
              value="08"
            />

            <InfoRow
              label="Accounts"
              value="04"
            />

            <InfoRow
              label="Signals"
              value="03"
            />
          </div>
        </div>

        {/* TIMELINE */}

        <div className="rounded-[14px] border border-white/[0.06] bg-[#050505] p-5">
          <Micro>
            Transaction Timeline
          </Micro>

          <div className="relative mt-7 space-y-4">
            <div className="absolute bottom-3 left-[5px] top-3 w-px bg-white/[0.08]" />

            {[
              {
                time: "09:41",
                text: "Transaction observed",
              },
              {
                time: "09:41",
                text: "Monitoring signal created",
              },
              {
                time: "09:42",
                text: "Relationship context attached",
              },
              {
                time: "09:44",
                text: "Analyst review opened",
              },
            ].map(
              (item, index) => (
                <motion.div
                  key={item.text}
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
                    delay: index * 0.08,
                  }}
                  className="relative flex items-center gap-4 pl-0"
                >
                  <span
                    className={`relative z-10 h-[11px] w-[11px] shrink-0 rounded-full border ${
                      index === 3
                        ? "border-[#8b5cf6] bg-[#8b5cf6]"
                        : "border-white/15 bg-[#080808]"
                    }`}
                  />

                  <span className="w-10 font-mono text-[5px] text-white/20">
                    {item.time}
                  </span>

                  <span className="text-[8px] text-white/35">
                    {item.text}
                  </span>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.05] pb-3">
      <span className="text-[7px] text-white/25">
        {label}
      </span>

      <span className="font-mono text-[6px] text-white/45">
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   WORKFLOW
========================================================= */

function AMLWorkflow() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel number="06">
              Monitoring Workflow
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Data to decision

              <span className="block text-white/20">
                without losing context.
              </span>
            </h2>
          </div>

          <p className="max-w-[440px] text-[11px] leading-7 text-white/35">
            Structure transaction monitoring as a
            connected operational workflow from data
            ingestion through analyst review and
            resolution.
          </p>
        </div>

        <div className="relative mt-14 grid gap-3 lg:grid-cols-5">
          <div className="absolute left-[7%] right-[7%] top-[35px] hidden h-px bg-gradient-to-r from-[#8b5cf6]/20 via-[#c4b5fd]/45 to-[#3b82f6]/20 lg:block" />

          <motion.div
            animate={{
              left: ["7%", "92%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[31px] z-30 hidden h-2 w-2 rounded-full bg-[#c4b5fd] lg:block"
          />

          {workflow.map(
            (item) => (
              <motion.article
                key={item.title}
                whileHover={{
                  y: -4,
                }}
                className="relative z-20 rounded-[16px] border border-white/[0.07] bg-[#050505] p-5"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#080808]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
                </div>

                <span className="mt-8 block font-mono text-[6px] text-white/20">
                  {item.number}
                </span>

                <h3 className="mt-3 text-[14px] font-medium text-white/70">
                  {item.title}
                </h3>

                <p className="mt-3 text-[9px] leading-5 text-white/35">
                  {item.text}
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
   HUMAN OVERSIGHT
========================================================= */

function HumanOversight() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#080808]">
          <div className="grid lg:grid-cols-2">
            <div className="p-7 md:p-12">
              <SectionLabel number="07">
                Governed Intelligence
              </SectionLabel>

              <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
                Machine signal.

                <span className="block text-white/20">
                  Human judgment.
                </span>
              </h2>

              <p className="mt-7 max-w-[530px] text-[12px] leading-7 text-white/40">
                Automated monitoring can help surface
                relevant activity, but an analytical
                signal is not by itself a determination of
                wrongdoing. AML systems should support
                appropriately authorized human reviewers
                with context, evidence and governed
                workflows.
              </p>
            </div>

            <div className="relative min-h-[390px] border-t border-white/[0.07] lg:border-l lg:border-t-0">
              <HumanMachineModel />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   HUMAN MACHINE MODEL
========================================================= */

function HumanMachineModel() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="relative flex w-[82%] items-center justify-between">
        {/* MACHINE */}

        <div className="relative z-20 text-center">
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="mx-auto flex h-[95px] w-[95px] items-center justify-center rounded-full border border-dashed border-[#8b5cf6]/30"
          >
            <div className="flex h-[65px] w-[65px] items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#050505]">
              <BrainCircuit
                size={22}
                strokeWidth={1}
                className="text-[#c4b5fd]"
              />
            </div>
          </motion.div>

          <Micro purple>
            Machine
          </Micro>
        </div>

        {/* CONNECTION */}

        <div className="relative mx-5 flex-1">
          <div className="h-px w-full bg-gradient-to-r from-[#8b5cf6]/50 via-white/15 to-white/20" />

          <motion.div
            animate={{
              left: ["0%", "96%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-[3px] h-2 w-2 rounded-full bg-[#c4b5fd]"
          />

          <span className="mt-3 block text-center font-mono text-[5px] text-white/20">
            CONTEXT
          </span>
        </div>

        {/* HUMAN */}

        <div className="relative z-20 text-center">
          <div className="mx-auto flex h-[95px] w-[95px] items-center justify-center rounded-full border border-white/10 bg-[#050505]">
            <Eye
              size={23}
              strokeWidth={1}
              className="text-white/50"
            />
          </div>

          <div className="mt-3">
            <Micro>
              Reviewer
            </Micro>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FINAL CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-32 md:px-10 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.06] blur-[210px]" />

      <Container className="relative text-center">
        {/* MONEY NETWORK */}

        <div className="relative mx-auto flex h-[120px] w-[220px] items-center justify-between">
          <div className="relative z-20 flex h-[65px] w-[65px] items-center justify-center rounded-full border border-white/10 bg-[#080808]">
            <span className="text-xl text-white/45">
              $
            </span>
          </div>

          <div className="relative flex-1">
            <div className="h-px bg-gradient-to-r from-white/10 via-[#8b5cf6]/70 to-white/10" />

            <motion.div
              animate={{
                left: ["0%", "95%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-[4px] h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_16px_rgba(196,181,253,.9)]"
            />
          </div>

          <div className="relative z-20 flex h-[65px] w-[65px] items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.05]">
            <ShieldCheck
              size={22}
              strokeWidth={1}
              className="text-[#c4b5fd]"
            />
          </div>
        </div>

        <h2 className="mx-auto mt-10 max-w-[1100px] text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
          See the transaction.

          <span className="block bg-gradient-to-r from-[#c4b5fd] via-white/35 to-white/15 bg-clip-text text-transparent">
            Understand the network.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[720px] text-[12px] leading-7 text-white/[0.43]">
          Build AML transaction monitoring infrastructure
          that connects financial activity, analytical
          signals and investigation context in a governed
          operating environment.
        </p>

        <a
          href="#monitoring-engine"
          className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full bg-white px-9 py-4 text-[11px] font-medium text-black"
        >
          Explore Transaction Intelligence

          <ArrowRight size={13} />
        </a>
      </Container>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AMLTransactionMonitoringClient() {
  const { scrollYProgress } = useScroll();

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
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#7c3aed] via-[#c4b5fd] to-[#3b82f6]"
      />

      <Hero />

      <Intro />

      <Capabilities />

      <SignalMonitoring />

      <Architecture />

      <Investigation />

      <AMLWorkflow />

      <HumanOversight />

      <FinalCTA />
    </div>
  );
}