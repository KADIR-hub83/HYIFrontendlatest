"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CircleDollarSign,
  CircleDot,
  Database,
  Eye,
  Gauge,
  GitBranch,
  Layers3,
  Network,
  RefreshCcw,
  Server,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import type { ElementType, ReactNode } from "react";

/* =========================================================
   DATA
========================================================= */

const portfolioAssets = [
  {
    label: "Equities",
    value: "38%",
    risk: "Moderate",
    amount: "$18.4M",
  },
  {
    label: "Fixed Income",
    value: "26%",
    risk: "Low",
    amount: "$12.6M",
  },
  {
    label: "Alternatives",
    value: "16%",
    risk: "Elevated",
    amount: "$7.8M",
  },
  {
    label: "Real Assets",
    value: "12%",
    risk: "Moderate",
    amount: "$5.8M",
  },
  {
    label: "Cash",
    value: "8%",
    risk: "Low",
    amount: "$3.9M",
  },
];

const riskMetrics = [
  {
    label: "Portfolio Value",
    value: "$48.5M",
    detail: "Illustrative",
  },
  {
    label: "Risk Index",
    value: "62.4",
    detail: "Moderate",
  },
  {
    label: "Diversification",
    value: "78%",
    detail: "Observed",
  },
  {
    label: "Liquidity",
    value: "84%",
    detail: "Available",
  },
];

const capabilities = [
  {
    number: "01",
    Icon: Activity,
    title: "Portfolio Risk Analytics",
    text:
      "Analyze portfolio-level risk by combining asset exposures, concentrations, market factors and portfolio structure into a connected analytical view.",
  },
  {
    number: "02",
    Icon: Layers3,
    title: "Exposure Intelligence",
    text:
      "Understand how capital is distributed across asset classes, sectors, geographies, strategies and other portfolio dimensions.",
  },
  {
    number: "03",
    Icon: Network,
    title: "Correlation Analysis",
    text:
      "Explore relationships between portfolio components and identify where apparently diversified positions may share underlying risk drivers.",
  },
  {
    number: "04",
    Icon: RefreshCcw,
    title: "Scenario Analysis",
    text:
      "Model hypothetical market conditions and examine how selected portfolio components could behave under defined analytical scenarios.",
  },
  {
    number: "05",
    Icon: BrainCircuit,
    title: "Risk Intelligence",
    text:
      "Use analytics and selected AI techniques to surface portfolio patterns, unusual movements and relationships for further human investigation.",
  },
  {
    number: "06",
    Icon: ShieldCheck,
    title: "Risk Governance",
    text:
      "Support controlled risk processes with consistent metrics, analytical traceability and clearly structured portfolio information.",
  },
];

const architecture = [
  {
    number: "01",
    Icon: Database,
    title: "Portfolio Data",
    text: "Positions, holdings, transactions and reference data.",
  },
  {
    number: "02",
    Icon: Server,
    title: "Risk Data Layer",
    text: "Structured and governed analytical datasets.",
  },
  {
    number: "03",
    Icon: GitBranch,
    title: "Risk Models",
    text: "Exposure, concentration and relationship models.",
  },
  {
    number: "04",
    Icon: BrainCircuit,
    title: "Intelligence",
    text: "Analytical signals and scenario exploration.",
  },
  {
    number: "05",
    Icon: Eye,
    title: "Risk Experience",
    text: "Decision-oriented portfolio risk views.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Ingest",
    text: "Connect portfolio, position and market-related data.",
  },
  {
    number: "02",
    title: "Normalize",
    text: "Structure portfolio information into consistent analytical dimensions.",
  },
  {
    number: "03",
    title: "Measure",
    text: "Calculate defined portfolio risk and exposure metrics.",
  },
  {
    number: "04",
    title: "Stress",
    text: "Explore selected hypothetical portfolio scenarios.",
  },
  {
    number: "05",
    title: "Investigate",
    text: "Surface concentrations, relationships and unusual movements.",
  },
  {
    number: "06",
    title: "Decide",
    text: "Deliver risk context into human decision workflows.",
  },
];

const concentrationRows = [
  {
    name: "Technology",
    value: 72,
    label: "High exposure",
  },
  {
    name: "Financials",
    value: 48,
    label: "Moderate",
  },
  {
    name: "Industrials",
    value: 36,
    label: "Balanced",
  },
  {
    name: "Energy",
    value: 29,
    label: "Limited",
  },
  {
    name: "Healthcare",
    value: 42,
    label: "Moderate",
  },
];

const scenarios = [
  {
    id: "S-01",
    title: "Market contraction",
    impact: "-8.4%",
    intensity: 78,
  },
  {
    id: "S-02",
    title: "Rate movement",
    impact: "-3.1%",
    intensity: 42,
  },
  {
    id: "S-03",
    title: "Liquidity pressure",
    impact: "-5.7%",
    intensity: 61,
  },
  {
    id: "S-04",
    title: "Sector shock",
    impact: "-6.2%",
    intensity: 67,
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
    <div className={`mx-auto w-full max-w-[1380px] ${className}`}>
      {children}
    </div>
  );
}

function Micro({
  children,
  accent = false,
}: {
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <span
      className={`font-mono text-[7px] uppercase tracking-[0.18em] ${
        accent ? "text-[#c4b5fd]" : "text-white/30"
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
          scale: [1, 2.5, 1],
          opacity: [0.7, 0, 0.7],
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
            "linear-gradient(to bottom, black 0%, black 82%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 82%, transparent 100%)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[380px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#7c3aed]/[0.06] blur-[220px]" />

      <Container className="relative">
        {/* <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <LiveDot />
            <Micro>Portfolio Risk Intelligence</Micro>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <Micro>Exposure</Micro>
            <Micro>Concentration</Micro>
            <Micro>Scenario</Micro>
            <Micro>Decision</Micro>
          </div>
        </div> */}

        <div className="mx-auto max-w-[1200px] pt-20 text-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-4 py-2"
          >
            <ShieldCheck size={11} className="text-[#c4b5fd]" />

            <Micro>Finance / Portfolio / Risk Intelligence</Micro>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-9 text-[clamp(4rem,8.5vw,8.7rem)] font-semibold leading-[0.82] tracking-[-0.085em]"
          >
            See risk before

            <span className="block bg-gradient-to-r from-white/20 via-[#c4b5fd]/75 to-white/20 bg-clip-text text-transparent">
              it becomes exposure.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mx-auto mt-9 max-w-[850px] text-[14px] leading-8 text-white/[0.55]"
          >
            HYI designs portfolio risk analytics environments that connect
            holdings, exposures, concentration, relationships and scenario
            analysis into a unified intelligence layer for informed risk
            investigation and decision support.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#risk-command-center"
              className="flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-medium text-black"
            >
              Explore risk command center
              <ArrowDown size={13} />
            </a>

            <a
              href="#capabilities"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[11px] text-white/50"
            >
              Risk capabilities
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        <div id="risk-command-center" className="mt-20">
          <PortfolioUniverse />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   PORTFOLIO UNIVERSE
========================================================= */

function PortfolioUniverse() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#080808] p-5 md:p-7">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="relative">
        <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
              <Network size={15} className="text-[#c4b5fd]" />
            </div>

            <div>
              <Micro>Portfolio Risk Command Center</Micro>

              <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.12em] text-white/15">
                EXPOSURE / RISK / CORRELATION / SCENARIO
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LiveDot />
            <Micro>Risk engine active</Micro>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {riskMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              className="rounded-[15px] border border-white/[0.06] bg-[#050505] p-4"
            >
              <div className="flex items-center justify-between">
                <Micro>{metric.label}</Micro>
                <Activity size={9} className="text-[#a78bfa]" />
              </div>

              <div className="mt-5 flex items-end justify-between gap-3">
                <span className="text-[23px] font-medium tracking-[-0.05em] text-white/80">
                  {metric.value}
                </span>

                <span className="font-mono text-[6px] text-[#a78bfa]">
                  {metric.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
          <RiskOrbit />
          <ExposurePanel />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   RISK ORBIT
========================================================= */

function RiskOrbit() {
  return (
    <div className="relative min-h-[540px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="absolute left-5 top-5 z-30">
        <Micro>Portfolio Risk Universe</Micro>

        <p className="mt-2 text-[9px] text-white/25">
          Illustrative analytical model
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[390px] w-[390px] max-w-[85vw]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border border-dashed border-white/[0.08]"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 29,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[42px] rounded-full border border-dashed border-[#8b5cf6]/25"
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 21,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[86px] rounded-full border border-white/[0.08]"
          />

          <div className="absolute inset-[125px] flex items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.05] shadow-[0_0_70px_rgba(124,58,237,.08)]">
            <div className="text-center">
              <ShieldCheck
                size={28}
                strokeWidth={1}
                className="mx-auto text-[#c4b5fd]"
              />

              <span className="mt-4 block text-[25px] font-medium tracking-[-0.05em] text-white/75">
                62.4
              </span>

              <Micro>Risk Index</Micro>
            </div>
          </div>

          <RiskNode
            className="-left-3 top-[65px]"
            title="Equities"
            value="38%"
          />

          <RiskNode
            className="-right-7 top-[120px]"
            title="Fixed Income"
            value="26%"
          />

          <RiskNode
            className="bottom-[25px] left-[15px]"
            title="Alternatives"
            value="16%"
          />

          <RiskNode
            className="bottom-[-4px] right-[55px]"
            title="Real Assets"
            value="12%"
          />

          <RiskNode
            className="left-[145px] top-[-14px]"
            title="Cash"
            value="8%"
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[6px]"
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_18px_rgba(196,181,253,.9)]" />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 13,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[48px]"
          >
            <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 rounded-full bg-[#8b5cf6] shadow-[0_0_15px_rgba(139,92,246,.8)]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function RiskNode({
  className,
  title,
  value,
}: {
  className: string;
  title: string;
  value: string;
}) {
  return (
    <motion.div
      animate={{
        y: [-3, 3, -3],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
      }}
      className={`absolute z-30 min-w-[100px] rounded-[11px] border border-white/[0.08] bg-[#080808]/95 p-3 backdrop-blur-xl ${className}`}
    >
      <span className="block text-[7px] text-white/30">{title}</span>

      <span className="mt-1 block font-mono text-[7px] text-[#c4b5fd]">
        {value}
      </span>
    </motion.div>
  );
}

/* =========================================================
   EXPOSURE PANEL
========================================================= */

function ExposurePanel() {
  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-[#050505] p-5">
      <div className="flex items-center justify-between">
        <div>
          <Micro>Portfolio Allocation</Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Illustrative portfolio distribution
          </p>
        </div>

        <Layers3 size={13} className="text-[#a78bfa]" />
      </div>

      <div className="mt-8 space-y-6">
        {portfolioAssets.map((asset, index) => (
          <div key={asset.label}>
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="text-[9px] text-white/40">
                  {asset.label}
                </span>

                <span className="mt-1 block font-mono text-[6px] text-white/20">
                  {asset.risk}
                </span>
              </div>

              <div className="text-right">
                <span className="block text-[12px] text-white/60">
                  {asset.value}
                </span>

                <span className="font-mono text-[6px] text-white/20">
                  {asset.amount}
                </span>
              </div>
            </div>

            <div className="mt-3 h-[4px] overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: asset.value }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.08,
                }}
                className={`h-full rounded-full ${
                  index === 0
                    ? "bg-gradient-to-r from-[#7c3aed] to-[#c4b5fd]"
                    : "bg-white/20"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[13px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.035] p-4">
        <div className="flex items-center gap-3">
          <CircleDot size={10} className="text-[#c4b5fd]" />

          <Micro accent>Portfolio observation</Micro>
        </div>

        <p className="mt-3 text-[9px] leading-5 text-white/35">
          Concentration, diversification and exposure should be interpreted
          together rather than as isolated portfolio measures.
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   THESIS
========================================================= */

function RiskThesis() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="01">Portfolio Intelligence</SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.95fr_1.05fr]">
          <h2 className="max-w-[680px] text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
            Portfolio value is visible.

            <span className="block text-white/20">
              Risk is distributed underneath.
            </span>
          </h2>

          <div className="self-end">
            <p className="text-[14px] leading-8 text-white/[0.55]">
              A portfolio can appear diversified at the asset level while
              remaining exposed to common sectors, market factors, liquidity
              conditions or correlated positions. Portfolio risk analytics
              helps make those relationships easier to investigate.
            </p>

            <p className="mt-5 text-[12px] leading-7 text-white/[0.38]">
              The objective is not to replace investment or risk judgment.
              It is to organize portfolio information so analysts and
              decision-makers can evaluate exposures with richer context.
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
            <SectionLabel number="02">Risk Capabilities</SectionLabel>

            <h2 className="mt-9 max-w-[780px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Understand the portfolio

              <span className="block text-white/20">
                behind the percentage.
              </span>
            </h2>
          </div>

          <p className="max-w-[470px] text-[12px] leading-7 text-white/40">
            Connect exposure analysis, concentration intelligence, scenario
            exploration and governed portfolio information through a single
            risk analytics environment.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(
            ({ number, Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -5 }}
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

                <p className="mt-4 text-[11px] leading-6 text-white/[0.43]">
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
   CONCENTRATION INTELLIGENCE
========================================================= */

function ConcentrationIntelligence() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div className="self-center">
            <SectionLabel number="03">Concentration</SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Find where risk

              <span className="block bg-gradient-to-r from-white/20 to-[#c4b5fd]/70 bg-clip-text text-transparent">
                begins to cluster.
              </span>
            </h2>

            <p className="mt-7 max-w-[470px] text-[12px] leading-7 text-white/40">
              Analyze portfolio concentration across relevant dimensions and
              make dominant exposures easier to investigate before they are
              hidden inside aggregate portfolio totals.
            </p>
          </div>

          <ConcentrationModel />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   CONCENTRATION MODEL
========================================================= */

function ConcentrationModel() {
  return (
    <div className="rounded-[24px] border border-white/[0.08] bg-[#080808] p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <Micro>Exposure Concentration</Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Illustrative sector view
          </p>
        </div>

        <Gauge size={14} className="text-[#a78bfa]" />
      </div>

      <div className="mt-10 space-y-7">
        {concentrationRows.map((row, index) => (
          <div key={row.name}>
            <div className="flex items-end justify-between gap-5">
              <div>
                <span className="text-[10px] text-white/45">
                  {row.name}
                </span>

                <span className="mt-1 block font-mono text-[6px] text-white/20">
                  {row.label}
                </span>
              </div>

              <span className="font-mono text-[8px] text-white/45">
                {row.value}
              </span>
            </div>

            <div className="relative mt-3 h-[6px] overflow-hidden rounded-full bg-white/[0.05]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${row.value}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.08,
                }}
                className={`h-full rounded-full ${
                  index === 0
                    ? "bg-gradient-to-r from-[#6d4bd8] to-[#c4b5fd]"
                    : "bg-white/15"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   CORRELATION MATRIX
========================================================= */

function CorrelationIntelligence() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="04">Correlation Intelligence</SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <CorrelationMatrix />

          <div className="self-center">
            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Diversified assets can

              <span className="block text-white/20">
                share the same risk.
              </span>
            </h2>

            <p className="mt-7 max-w-[480px] text-[12px] leading-7 text-white/40">
              Correlation analysis helps teams investigate how portfolio
              components may move together and where apparently independent
              positions could share underlying drivers.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Asset relationship analysis",
                "Cross-sector dependencies",
                "Concentration context",
                "Portfolio interaction patterns",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={11} className="text-[#a78bfa]" />

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
   CORRELATION MATRIX MODEL
========================================================= */

function CorrelationMatrix() {
  const values = [
    90, 65, 30, 45, 22,
    65, 90, 38, 27, 41,
    30, 38, 90, 52, 34,
    45, 27, 52, 90, 58,
    22, 41, 34, 58, 90,
  ];

  return (
    <div className="rounded-[24px] border border-white/[0.08] bg-[#050505] p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <Micro>Portfolio Correlation Matrix</Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Illustrative relationship visualization
          </p>
        </div>

        <Network size={14} className="text-[#a78bfa]" />
      </div>

      <div className="mx-auto mt-10 grid max-w-[450px] grid-cols-5 gap-2">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.018 }}
            className="flex aspect-square items-center justify-center rounded-[7px] border border-white/[0.05]"
            style={{
              backgroundColor: `rgba(139,92,246,${0.03 + value / 250})`,
            }}
          >
            <span className="font-mono text-[6px] text-white/35">
              {value}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto mt-7 flex max-w-[450px] items-center justify-between">
        <Micro>Lower relationship</Micro>

        <div className="mx-5 h-[3px] flex-1 rounded-full bg-gradient-to-r from-white/[0.04] via-[#8b5cf6]/30 to-[#c4b5fd]/70" />

        <Micro>Higher relationship</Micro>
      </div>
    </div>
  );
}

/* =========================================================
   STRESS TEST
========================================================= */

function StressTesting() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel number="05">Scenario Analysis</SectionLabel>

            <h2 className="mt-9 max-w-[850px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Ask the portfolio

              <span className="block text-white/20">
                “what if?”
              </span>
            </h2>
          </div>

          <p className="max-w-[470px] text-[12px] leading-7 text-white/40">
            Explore defined hypothetical scenarios to understand how selected
            portfolio exposures could respond under different analytical
            assumptions.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2">
          {scenarios.map((scenario, index) => (
            <motion.article
              key={scenario.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="rounded-[18px] border border-white/[0.07] bg-[#080808] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[6px] text-[#a78bfa]">
                  {scenario.id}
                </span>

                <RefreshCcw size={11} className="text-white/20" />
              </div>

              <div className="mt-7 flex items-end justify-between gap-5">
                <div>
                  <h3 className="text-[17px] font-medium text-white/70">
                    {scenario.title}
                  </h3>

                  <span className="mt-2 block text-[8px] text-white/25">
                    Hypothetical analytical scenario
                  </span>
                </div>

                <span className="text-[25px] font-medium tracking-[-0.05em] text-[#c4b5fd]">
                  {scenario.impact}
                </span>
              </div>

              <div className="mt-7 h-[4px] overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${scenario.intensity}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-[#6d4bd8] to-[#c4b5fd]"
                />
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-5 text-center text-[8px] leading-5 text-white/20">
          Scenario values above are interface demonstrations only and are not
          forecasts, investment advice or actual portfolio results.
        </p>
      </Container>
    </section>
  );
}

/* =========================================================
   RISK ARCHITECTURE
========================================================= */

function RiskArchitecture() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="06">Risk Architecture</SectionLabel>

        <div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[850px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
            One architecture.

            <span className="block text-white/20">
              From position to decision.
            </span>
          </h2>

          <p className="max-w-[450px] text-[11px] leading-7 text-white/35">
            Structure portfolio information, analytical models and risk
            experiences through a connected risk intelligence architecture.
          </p>
        </div>

        <div className="relative mt-14 grid gap-3 lg:grid-cols-5">
          <div className="absolute left-[7%] right-[7%] top-[39px] hidden h-px bg-gradient-to-r from-[#8b5cf6]/20 via-[#c4b5fd]/45 to-[#8b5cf6]/20 lg:block" />

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
            className="absolute top-[35px] z-30 hidden h-2 w-2 rounded-full bg-[#c4b5fd] lg:block"
          />

          {architecture.map(({ number, Icon, title, text }) => (
            <motion.article
              key={title}
              whileHover={{ y: -5 }}
              className="relative z-20 rounded-[17px] border border-white/[0.07] bg-[#050505] p-5"
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
                {text}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   AI RISK ENGINE
========================================================= */

function AIRiskEngine() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#080808]">
          <div className="grid lg:grid-cols-[.8fr_1.2fr]">
            <div className="p-7 md:p-12">
              <SectionLabel number="07">AI Risk Intelligence</SectionLabel>

              <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
                Give analysts

                <span className="block bg-gradient-to-r from-white/20 to-[#c4b5fd]/70 bg-clip-text text-transparent">
                  another analytical lens.
                </span>
              </h2>

              <p className="mt-7 max-w-[520px] text-[12px] leading-7 text-white/40">
                Selected analytical and AI techniques can help surface unusual
                portfolio movements, relationships and concentration signals
                for further human investigation.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Pattern exploration",
                  "Exposure signal detection",
                  "Relationship discovery",
                  "Analyst investigation support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={11} className="text-[#a78bfa]" />

                    <span className="text-[9px] text-white/35">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <RiskEngineModel />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   AI RISK MODEL
========================================================= */

function RiskEngineModel() {
  const nodes = [
    {
      label: "EXPOSURE",
      x: "12%",
      y: "22%",
    },
    {
      label: "LIQUIDITY",
      x: "72%",
      y: "17%",
    },
    {
      label: "CORRELATION",
      x: "75%",
      y: "70%",
    },
    {
      label: "SCENARIO",
      x: "10%",
      y: "72%",
    },
  ];

  return (
    <div className="relative min-h-[520px] overflow-hidden border-t border-white/[0.07] lg:border-l lg:border-t-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 700 520"
        preserveAspectRatio="none"
      >
        {[
          "M350 260 L100 110",
          "M350 260 L590 90",
          "M350 260 L610 390",
          "M350 260 L90 395",
        ].map((path, index) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke={
              index === 0
                ? "rgba(167,139,250,.45)"
                : "rgba(255,255,255,.09)"
            }
            strokeWidth="1"
            strokeDasharray="5 8"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: index * 0.15,
            }}
          />
        ))}
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-[190px] w-[190px] items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border border-dashed border-[#8b5cf6]/30"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[25px] rounded-full border border-white/[0.08]"
          />

          <div className="relative z-20 flex h-[110px] w-[110px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#050505]">
            <BrainCircuit
              size={26}
              strokeWidth={1}
              className="text-[#c4b5fd]"
            />

            <span className="mt-3 font-mono text-[6px] tracking-[0.12em] text-white/35">
              RISK AI
            </span>
          </div>
        </div>
      </div>

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 }}
          animate={{
            y: [-3, 3, -3],
          }}
          className="absolute z-20 rounded-full border border-white/[0.08] bg-[#050505] px-4 py-2"
          style={{
            left: node.x,
            top: node.y,
          }}
        >
          <span className="font-mono text-[6px] tracking-[0.12em] text-white/30">
            {node.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* =========================================================
   WORKFLOW
========================================================= */

function RiskWorkflow() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="08">Risk Workflow</SectionLabel>

        <div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[850px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
            Turn portfolio data

            <span className="block text-white/20">
              into investigation.
            </span>
          </h2>

          <p className="max-w-[450px] text-[11px] leading-7 text-white/35">
            Create a repeatable analytical path from raw portfolio information
            to risk context and controlled human decision-making.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {workflow.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="rounded-[16px] border border-white/[0.07] bg-[#050505] p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[7px] text-[#a78bfa]">
                  {item.number}
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
   RISK CONTROL
========================================================= */

function RiskControl() {
  const principles = [
    "Use clearly defined portfolio and risk metrics.",
    "Keep analytical assumptions visible and reviewable.",
    "Treat scenario outputs as analytical inputs, not predictions.",
    "Maintain traceability between risk views and source data.",
    "Apply appropriate access controls to financial information.",
    "Keep human review central to material portfolio decisions.",
  ];

  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <SectionLabel number="09">Risk Governance</SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Intelligence with

              <span className="block text-white/20">
                analytical control.
              </span>
            </h2>

            <p className="mt-7 max-w-[430px] text-[11px] leading-7 text-white/35">
              Portfolio risk analytics should make assumptions, data and
              analytical logic easier to understand—not hide them behind a
              visualization.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <motion.div
                key={principle}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex min-h-[130px] items-start gap-4 rounded-[14px] border border-white/[0.06] bg-[#080808] p-5"
              >
                <CheckCircle2
                  size={12}
                  className="mt-1 shrink-0 text-[#a78bfa]"
                />

                <p className="text-[10px] leading-6 text-white/40">
                  {principle}
                </p>
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
    <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#050505] px-5 py-32 md:px-10 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.06] blur-[230px]" />

      <Container className="relative text-center">
        <div className="mx-auto flex w-fit items-center gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#080808]">
            <CircleDollarSign
              size={18}
              strokeWidth={1}
              className="text-white/40"
            />
          </div>

          <div className="relative w-24">
            <div className="h-px bg-gradient-to-r from-white/10 via-[#8b5cf6]/70 to-white/10" />

            <motion.span
              animate={{
                left: ["0%", "94%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.5,
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

        <h2 className="mx-auto mt-12 max-w-[1100px] text-[clamp(3.7rem,7vw,7.3rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
          Understand the portfolio.

          <span className="block bg-gradient-to-r from-[#c4b5fd] via-white/40 to-white/15 bg-clip-text text-transparent">
            See the risk underneath.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[730px] text-[12px] leading-7 text-white/[0.43]">
          Build portfolio risk analytics that connect exposures,
          concentration, relationships, scenarios and governed data into one
          analytical environment for informed human decision-making.
        </p>

        <a
          href="#risk-command-center"
          className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full bg-white px-9 py-4 text-[11px] font-medium text-black"
        >
          Explore Portfolio Risk

          <ArrowRight size={13} />
        </a>
      </Container>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function PortfolioRiskClient() {
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

      <RiskThesis />

      <Capabilities />

      <ConcentrationIntelligence />

      <CorrelationIntelligence />

      <StressTesting />

      <RiskArchitecture />

      <AIRiskEngine />

      <RiskWorkflow />

      <RiskControl />

      <FinalCTA />
    </div>
  );
}