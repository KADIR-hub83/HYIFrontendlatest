"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  Database,
  Gauge,
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

const financeCapabilities = [
  {
    Icon: CircleDollarSign,
    number: "01",
    title: "Revenue Intelligence",
    text:
      "Bring revenue signals together across products, customers, channels and periods so finance teams can understand where growth is coming from and where performance is changing.",
  },
  {
    Icon: Activity,
    number: "02",
    title: "Financial Performance",
    text:
      "Transform financial data into structured performance views covering income, costs, margins, operating trends and other decision-relevant indicators.",
  },
  {
    Icon: Database,
    number: "03",
    title: "Financial Data Analytics",
    text:
      "Connect fragmented financial information into governed analytical datasets that can support dashboards, reporting, forecasting and deeper business analysis.",
  },
  {
    Icon: Gauge,
    number: "04",
    title: "Cash-Flow Visibility",
    text:
      "Create clearer visibility into inflows, outflows and liquidity-related patterns so teams can study how financial movement changes over time.",
  },
  {
    Icon: Layers3,
    number: "05",
    title: "Portfolio Analytics",
    text:
      "Analyze financial portfolios across meaningful dimensions and provide decision makers with structured views of allocation, exposure and performance.",
  },
  {
    Icon: Workflow,
    number: "06",
    title: "Finance Automation",
    text:
      "Reduce repetitive analytical work by connecting finance data pipelines, reporting workflows, monitoring rules and AI-assisted analysis.",
  },
];

const process = [
  {
    step: "01",
    title: "Connect",
    text: "Bring together relevant financial and operational data sources.",
  },
  {
    step: "02",
    title: "Structure",
    text: "Standardize financial information into analysis-ready models.",
  },
  {
    step: "03",
    title: "Analyze",
    text: "Explore trends, relationships, anomalies and performance signals.",
  },
  {
    step: "04",
    title: "Understand",
    text: "Turn analytical outputs into decision-ready financial context.",
  },
  {
    step: "05",
    title: "Monitor",
    text: "Continuously observe important financial indicators and changes.",
  },
];

const principles = [
  "Connect finance metrics to their underlying business context.",
  "Maintain clear definitions for important financial measures.",
  "Separate observed data from forecasts and assumptions.",
  "Design dashboards around decisions rather than decoration.",
  "Preserve traceability from analytical output back to source data.",
  "Use automation to accelerate analysis without hiding financial logic.",
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

function Micro({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/30">
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

      <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/35">
        {children}
      </span>
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
      {/* GRID */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "62px 62px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 95%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 95%)",
        }}
      />

      {/* GLOWS */}

      <div className="pointer-events-none absolute -left-[300px] top-[150px] h-[600px] w-[600px] rounded-full bg-[#7c3aed]/[0.09] blur-[190px]" />

      <div className="pointer-events-none absolute -right-[300px] top-[220px] h-[600px] w-[600px] rounded-full bg-[#2563eb]/[0.07] blur-[190px]" />

      <Container className="relative">
        {/* TOP LINE */}

        {/* <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <LiveDot />

            <Micro>HYI / Financial Analytics</Micro>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <Micro>Revenue</Micro>
            <Micro>Cash Flow</Micro>
            <Micro>Margin</Micro>
            <Micro>Forecast</Micro>
            <Micro>Intelligence</Micro>
          </div>
        </div> */}

        {/* HERO TEXT */}

        <div className="mx-auto max-w-[1000px] pt-20 text-center">
          {/* <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-4 py-2"
          >
            <CircleDollarSign
              size={11}
              className="text-[#a78bfa]"
            />

            <Micro>Finance Intelligence System</Micro>
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
              duration: 0.8,
            }}
            className="mt-9 text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.82] tracking-[-0.085em]"
          >
            Money moves.

            <span className="block text-white/20">
              Data explains.
            </span>

            <span className="block bg-gradient-to-r from-[#c4b5fd] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
              Intelligence decides.
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
            className="mx-auto mt-9 max-w-[790px] text-[14px] leading-8 text-white/[0.55]"
          >
            HYI Financial Analytics helps organizations transform
            fragmented financial information into structured analytical
            intelligence. We connect financial data, performance
            indicators, cash-flow signals, operational context and
            analytical workflows so teams can understand what is happening
            across the business and investigate why.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#finance-terminal"
              className="flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-medium text-black"
            >
              Explore finance intelligence
              <ArrowDown size={13} />
            </a>

            <a
              href="#hyi-finance"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[11px] text-white/55"
            >
              How HYI works
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* MAIN MONEY MODEL */}

        <div id="finance-terminal" className="mt-20">
          <FinanceIntelligenceTerminal />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   FINANCE INTELLIGENCE TERMINAL
========================================================= */

function FinanceIntelligenceTerminal() {
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
        {/* TERMINAL HEADER */}

        <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
              <CircleDollarSign
                size={15}
                className="text-[#a78bfa]"
              />
            </div>

            <div>
              <Micro>Financial Intelligence Terminal</Micro>

              <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.12em] text-white/15">
                HYI / FINANCE ANALYTICS / LIVE MODEL
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LiveDot blue />
            <Micro>Finance data connected</Micro>
          </div>
        </div>

        {/* MAIN MODEL */}

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.3fr_.7fr]">
          <MoneyUniverse />
          <FinancialSnapshot />
        </div>

        {/* LOWER MODELS */}

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <CashFlowModel />
          <RevenueModel />
          <PortfolioModel />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MONEY UNIVERSE
========================================================= */

function MoneyUniverse() {
  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505] p-6">
      <div className="flex items-center justify-between">
        <div>
          <Micro>Financial Flow Network</Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Money movement across the analytical system
          </p>
        </div>

        <Activity
          size={13}
          className="text-[#60a5fa]"
        />
      </div>

      <div className="relative mt-4 flex h-[400px] items-center justify-center">
        {/* LARGE ORBIT */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[350px] w-[350px] rounded-full border border-dashed border-white/[0.08]"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[280px] w-[280px] rounded-full border border-dashed border-[#8b5cf6]/20"
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[205px] w-[205px] rounded-full border border-[#60a5fa]/15"
        />

        {/* AXIS */}

        <div className="absolute h-[360px] w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />

        <div className="absolute h-px w-[360px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* CENTER MONEY CORE */}

        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(139,92,246,0)",
              "0 0 90px rgba(139,92,246,.25)",
              "0 0 0 rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute z-20 flex h-[150px] w-[150px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/35 bg-[#0a0810]"
        >
          <motion.span
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-[64px] font-light leading-none tracking-[-0.08em] text-[#c4b5fd]"
          >
            $
          </motion.span>

          <span className="mt-3 font-mono text-[6px] uppercase tracking-[0.16em] text-white/35">
            Finance Core
          </span>

          <span className="mt-1 font-mono text-[5px] uppercase tracking-[0.12em] text-[#60a5fa]/60">
            intelligence active
          </span>
        </motion.div>

        {/* MONEY NODES */}

        <MoneyNode
          title="Revenue"
          value="IN"
          className="left-[5%] top-[15%]"
          purple
        />

        <MoneyNode
          title="Expenses"
          value="OUT"
          className="right-[4%] top-[16%]"
        />

        <MoneyNode
          title="Cash Flow"
          value="FLOW"
          className="bottom-[8%] left-[12%]"
        />

        <MoneyNode
          title="Margin"
          value="MARGIN"
          className="bottom-[7%] right-[12%]"
          purple
        />

        <MoneyNode
          title="Forecast"
          value="MODEL"
          className="left-[2%] top-[50%]"
          purple
        />

        <MoneyNode
          title="Portfolio"
          value="VALUE"
          className="right-[2%] top-[50%]"
        />

        {/* FLOATING DOLLARS */}

        <FloatingDollar
          className="left-[28%] top-[12%]"
          delay={0}
        />

        <FloatingDollar
          className="right-[27%] top-[8%]"
          delay={0.7}
        />

        <FloatingDollar
          className="bottom-[12%] left-[43%]"
          delay={1.2}
        />
      </div>
    </div>
  );
}

function MoneyNode({
  title,
  value,
  className,
  purple = false,
}: {
  title: string;
  value: string;
  className: string;
  purple?: boolean;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className={`absolute z-10 w-[110px] rounded-[14px] border bg-[#090909] p-3 ${
        purple
          ? "border-[#8b5cf6]/25"
          : "border-[#60a5fa]/20"
      } ${className}`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            purple ? "bg-[#a78bfa]" : "bg-[#60a5fa]"
          }`}
        />

        <span className="font-mono text-[5px] text-white/20">
          {value}
        </span>
      </div>

      <span className="mt-3 block text-[8px] text-white/55">
        {title}
      </span>
    </motion.div>
  );
}

function FloatingDollar({
  className,
  delay,
}: {
  className: string;
  delay: number;
}) {
  return (
    <motion.span
      animate={{
        y: [0, -10, 0],
        opacity: [0.15, 0.8, 0.15],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
      }}
      className={`absolute font-mono text-[14px] text-[#a78bfa] ${className}`}
    >
      $
    </motion.span>
  );
}

/* =========================================================
   FINANCIAL SNAPSHOT
========================================================= */

function FinancialSnapshot() {
  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-[#050505] p-6">
      <div className="flex items-center justify-between">
        <Micro>Financial Snapshot</Micro>

        <CircleDollarSign
          size={13}
          className="text-[#a78bfa]"
        />
      </div>

      <div className="mt-9">
        <span className="font-mono text-[6px] uppercase tracking-[0.13em] text-white/20">
          Analytical workspace
        </span>

        <div className="mt-3 flex items-end gap-2">
          <span className="text-5xl font-semibold tracking-[-0.07em] text-white/90">
            $
          </span>

          <span className="pb-1 text-2xl font-medium tracking-[-0.05em] text-white/60">
            Finance
          </span>
        </div>

        <p className="mt-4 text-[10px] leading-5 text-white/30">
          A unified view of financial movement, performance and analytical
          signals.
        </p>
      </div>

      <div className="mt-8 space-y-3">
        <MetricRow
          label="Revenue signal"
          value="Tracking"
          width="82%"
          purple
        />

        <MetricRow
          label="Cash movement"
          value="Connected"
          width="72%"
        />

        <MetricRow
          label="Cost visibility"
          value="Analyzing"
          width="64%"
          purple
        />

        <MetricRow
          label="Forecast model"
          value="Ready"
          width="88%"
        />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-2">
        <MiniMetric
          label="Sources"
          value="Unified"
        />

        <MiniMetric
          label="Signals"
          value="Live"
          blue
        />

        <MiniMetric
          label="Model"
          value="Finance"
          blue
        />

        <MiniMetric
          label="Status"
          value="Active"
        />
      </div>

      <div className="mt-6 rounded-[13px] border border-white/[0.06] bg-white/[0.015] p-4">
        <p className="text-[8px] leading-5 text-white/25">
          Interface values on this page are illustrative visualizations,
          not financial statements, investment advice or reported HYI
          customer performance.
        </p>
      </div>
    </div>
  );
}

function MetricRow({
  label,
  value,
  width,
  purple = false,
}: {
  label: string;
  value: string;
  width: string;
  purple?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-[8px] text-white/35">
          {label}
        </span>

        <span className="font-mono text-[6px] uppercase tracking-[0.1em] text-white/20">
          {value}
        </span>
      </div>

      <div className="mt-2 h-[4px] overflow-hidden rounded-full bg-white/[0.04]">
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
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

function MiniMetric({
  label,
  value,
  blue = false,
}: {
  label: string;
  value: string;
  blue?: boolean;
}) {
  return (
    <div className="rounded-[11px] border border-white/[0.06] bg-white/[0.015] p-3">
      <span className="block font-mono text-[5px] uppercase tracking-[0.12em] text-white/20">
        {label}
      </span>

      <span
        className={`mt-2 block text-[9px] ${
          blue ? "text-[#60a5fa]" : "text-[#c4b5fd]"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   CASH FLOW
========================================================= */

function CashFlowModel() {
  const bars = [38, 55, 43, 70, 52, 78, 61, 86, 69, 91];

  return (
    <ModelCard
      title="Cash Flow"
      Icon={CircleDollarSign}
    >
      <div className="mt-7 flex h-[145px] items-end gap-2 rounded-[12px] border border-white/[0.05] p-4">
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
                  ? "bg-[#8b5cf6]/70"
                  : "bg-[#60a5fa]/65"
              }`}
            />
          </div>
        ))}
      </div>

      <p className="mt-4 text-[9px] leading-5 text-white/30">
        Visualize the movement of financial inflows and outflows across
        meaningful periods and operational dimensions.
      </p>
    </ModelCard>
  );
}

/* =========================================================
   REVENUE MODEL
========================================================= */

function RevenueModel() {
  return (
    <ModelCard
      title="Financial Trend"
      Icon={Activity}
    >
      <div className="relative mt-7 h-[145px] overflow-hidden rounded-[12px] border border-white/[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <svg
          viewBox="0 0 300 130"
          preserveAspectRatio="none"
          className="absolute inset-4 h-[115px] w-[calc(100%-32px)]"
          fill="none"
        >
          <motion.path
            d="M0 105 C30 95 45 100 70 78 C95 55 110 72 135 62 C160 52 175 30 205 40 C235 50 245 22 300 14"
            stroke="url(#moneyLine)"
            strokeWidth="3"
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
              duration: 1.8,
            }}
          />

          <defs>
            <linearGradient
              id="moneyLine"
              x1="0"
              x2="1"
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

        <motion.div
          animate={{
            x: ["-100%", "500%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 top-0 w-[50px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
        />
      </div>

      <p className="mt-4 text-[9px] leading-5 text-white/30">
        Study financial direction over time and connect changes to the
        underlying business context that produced them.
      </p>
    </ModelCard>
  );
}

/* =========================================================
   PORTFOLIO
========================================================= */

function PortfolioModel() {
  return (
    <ModelCard
      title="Portfolio Distribution"
      Icon={Layers3}
    >
      <div className="relative mt-7 flex h-[145px] items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[125px] w-[125px] rounded-full"
          style={{
            background:
              "conic-gradient(#8b5cf6 0deg 115deg, #60a5fa 115deg 220deg, rgba(196,181,253,.45) 220deg 285deg, rgba(255,255,255,.08) 285deg 360deg)",
          }}
        />

        <div className="absolute h-[88px] w-[88px] rounded-full bg-[#050505]" />

        <div className="absolute z-10 text-center">
          <span className="block text-2xl font-semibold text-white/80">
            $
          </span>

          <span className="mt-1 block font-mono text-[5px] uppercase tracking-[0.12em] text-white/25">
            allocation
          </span>
        </div>
      </div>

      <p className="text-[9px] leading-5 text-white/30">
        Organize portfolio information into understandable analytical views
        for allocation, exposure and performance exploration.
      </p>
    </ModelCard>
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
   FINANCIAL ANALYTICS EXPLANATION
========================================================= */

function FinancialAnalyticsIntro() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10 md:py-32">
      <Container>
        <SectionLabel number="01">
          Financial Analytics
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="max-w-[620px] text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              Understand where

              <span className="block text-white/20">
                the money moves.
              </span>
            </h2>
          </div>

          <div className="self-end">
            <p className="text-[14px] leading-8 text-white/[0.55]">
              Financial analytics uses financial and related operational
              data to understand performance, patterns and changes across
              an organization. It can help teams move beyond static reports
              by making financial information easier to explore, compare
              and connect to business activity.
            </p>

            <p className="mt-5 text-[12px] leading-7 text-white/[0.38]">
              The analytical layer may include revenue, expenses, margins,
              cash movement, budgets, forecasts, portfolios and other
              finance-specific measures. Which measures matter depends on
              the organization, the decision being supported and the
              underlying accounting or business definitions.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-3">
          <KnowledgeCard
            number="$01"
            title="See financial movement"
            text="Bring financial signals into analytical views that make changes across periods, categories and business dimensions easier to understand."
          />

          <KnowledgeCard
            number="$02"
            title="Understand performance"
            text="Connect financial outcomes with the operational context behind them rather than treating every metric as an isolated number."
          />

          <KnowledgeCard
            number="$03"
            title="Support decisions"
            text="Provide finance and business teams with structured evidence they can use alongside their own financial judgment and governance processes."
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
        <span className="font-mono text-[8px] text-[#a78bfa]">
          {number}
        </span>

        <CircleDollarSign
          size={12}
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
   HYI CAPABILITIES
========================================================= */

function HYIFinance() {
  return (
    <section
      id="hyi-finance"
      className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10 md:py-32"
    >
      <Container>
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel number="02">
              HYI Finance Intelligence
            </SectionLabel>

            <h2 className="mt-9 max-w-[760px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Financial data becomes

              <span className="text-white/20">
                {" "}decision intelligence.
              </span>
            </h2>
          </div>

          <p className="max-w-[430px] text-[12px] leading-7 text-white/40">
            HYI can help structure the technology and analytics layer around
            financial information — connecting sources, building analytical
            models, creating dashboards, automating workflows and enabling
            deeper data exploration.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {financeCapabilities.map(
            (
              {
                Icon,
                number,
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
                className="min-h-[265px] rounded-[18px] border border-white/[0.07] bg-[#050505] p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">
                    <Icon
                      size={15}
                      strokeWidth={1.4}
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
   MONEY FLOW SECTION
========================================================= */

function MoneyFlowSection() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div className="self-center">
            <SectionLabel number="03">
              Financial Flow
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-6xl">
              Follow the

              <span className="block bg-gradient-to-r from-[#c4b5fd] to-[#60a5fa] bg-clip-text text-transparent">
                $ signal.
              </span>
            </h2>

            <p className="mt-7 max-w-[430px] text-[12px] leading-7 text-white/[0.43]">
              Financial analytics becomes more useful when teams can trace
              how information moves from source systems into structured
              financial models, analytical logic, dashboards and monitoring
              workflows.
            </p>
          </div>

          <DollarFlowEngine />
        </div>
      </Container>
    </section>
  );
}

function DollarFlowEngine() {
  const nodes = [
    {
      title: "Sources",
      sub: "Transactions",
      x: "left-[4%]",
      color: "purple",
    },
    {
      title: "Finance Data",
      sub: "Structured",
      x: "left-[24%]",
      color: "blue",
    },
    {
      title: "Analytics",
      sub: "Intelligence",
      x: "left-[45%]",
      color: "purple",
    },
    {
      title: "Insight",
      sub: "Context",
      x: "left-[66%]",
      color: "blue",
    },
    {
      title: "Decision",
      sub: "Action",
      x: "right-[3%]",
      color: "purple",
    },
  ];

  return (
    <div className="relative min-h-[390px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#080808] p-6">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="relative flex items-center justify-between">
        <Micro>Money Intelligence Pipeline</Micro>

        <div className="flex items-center gap-2">
          <LiveDot />
          <Micro>Flow active</Micro>
        </div>
      </div>

      <div className="relative mt-10 h-[250px]">
        <div className="absolute left-[8%] right-[8%] top-1/2 h-px bg-gradient-to-r from-[#8b5cf6]/10 via-[#a78bfa]/50 to-[#60a5fa]/10" />

        <motion.div
          animate={{
            left: ["8%", "88%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[calc(50%-5px)] z-20 flex h-3 w-3 items-center justify-center rounded-full bg-[#a78bfa] shadow-[0_0_20px_rgba(167,139,250,.8)]"
        >
          <span className="text-[5px] font-bold text-black">
            $
          </span>
        </motion.div>

        {nodes.map((node, index) => (
          <motion.div
            key={node.title}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              delay: index * 0.25,
              repeat: Infinity,
            }}
            className={`absolute top-1/2 z-10 w-[105px] -translate-y-1/2 rounded-[13px] border bg-[#090909] p-4 ${
              node.color === "purple"
                ? "border-[#8b5cf6]/25"
                : "border-[#60a5fa]/20"
            } ${node.x}`}
          >
            <span className="block text-[9px] text-white/55">
              {node.title}
            </span>

            <span className="mt-2 block font-mono text-[5px] uppercase tracking-[0.1em] text-white/20">
              {node.sub}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   PROCESS
========================================================= */

function FinanceProcess() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-24 md:px-10">
      <Container>
        <SectionLabel number="04">
          HYI Delivery Model
        </SectionLabel>

        <div className="mt-10 grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em]">
              From financial data

              <span className="block text-white/20">
                to useful context.
              </span>
            </h2>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505]">
            {process.map((item, index) => (
              <motion.div
                key={item.title}
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
                  delay: index * 0.06,
                }}
                className="grid gap-4 border-b border-white/[0.06] p-6 last:border-b-0 sm:grid-cols-[55px_130px_1fr]"
              >
                <span className="font-mono text-[7px] text-[#a78bfa]">
                  {item.step}
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

function FinancePrinciples() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel number="05">
              Financial Analytics Principles
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em]">
              Numbers need

              <span className="block text-white/20">
                context.
              </span>
            </h2>

            <p className="mt-6 max-w-[430px] text-[11px] leading-7 text-white/35">
              Good financial analytics should make information more
              understandable without disguising assumptions, definitions or
              data limitations behind attractive dashboards.
            </p>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#080808]">
            {principles.map((principle, index) => (
              <div
                key={principle}
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
    <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#050505] px-5 py-32 md:px-10 md:py-40">
      <div className="pointer-events-none absolute left-[15%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.08] blur-[170px]" />

      <div className="pointer-events-none absolute right-[15%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#2563eb]/[0.06] blur-[170px]" />

      <Container className="relative text-center">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full border border-dashed border-[#8b5cf6]/30"
        >
          <div className="flex h-[65px] w-[65px] items-center justify-center rounded-full border border-[#60a5fa]/20 bg-[#8b5cf6]/[0.05]">
            <span className="text-3xl text-[#c4b5fd]">
              $
            </span>
          </div>
        </motion.div>

        <h2 className="mx-auto mt-9 max-w-[1050px] text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
          Turn financial data

          <span className="block bg-gradient-to-r from-[#c4b5fd] via-white/40 to-[#60a5fa] bg-clip-text text-transparent">
            into intelligence.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[680px] text-[12px] leading-7 text-white/[0.43]">
          Build financial analytics systems that connect data, reporting,
          analytical models and business context into a clearer foundation
          for finance and operational decision-making.
        </p>

        <a
          href="#finance-terminal"
          className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full bg-white px-9 py-4 text-[11px] font-medium text-black"
        >
          Explore Financial Analytics
          <ArrowRight size={13} />
        </a>
      </Container>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function FinancialAnalyticsClient() {
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

      <FinancialAnalyticsIntro />

      <HYIFinance />

      <MoneyFlowSection />

      <FinanceProcess />

      <FinancePrinciples />

      <FinalCTA />
    </div>
  );
}