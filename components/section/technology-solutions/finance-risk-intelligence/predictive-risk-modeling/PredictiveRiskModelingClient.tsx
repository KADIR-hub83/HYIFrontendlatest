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
  Gauge,
  GitBranch,
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

const horizonData = [
  { label: "NOW", value: 22, risk: "LOW" },
  { label: "+7D", value: 29, risk: "LOW" },
  { label: "+14D", value: 38, risk: "WATCH" },
  { label: "+30D", value: 47, risk: "WATCH" },
  { label: "+60D", value: 58, risk: "ELEVATED" },
  { label: "+90D", value: 66, risk: "ELEVATED" },
];

const signalCards = [
  {
    label: "Risk probability",
    value: "0.64",
    detail: "Illustrative",
  },
  {
    label: "Model confidence",
    value: "82%",
    detail: "Demo signal",
  },
  {
    label: "Features",
    value: "128",
    detail: "Observed",
  },
  {
    label: "Risk horizon",
    value: "90D",
    detail: "Forward view",
  },
];

const capabilities = [
  {
    Icon: BrainCircuit,
    number: "01",
    title: "Predictive Risk Models",
    text:
      "Build analytical models that use historical and current signals to estimate defined future risk outcomes within clearly specified analytical contexts.",
  },
  {
    Icon: Activity,
    number: "02",
    title: "Early-Warning Signals",
    text:
      "Identify changes in relevant variables and surface patterns that may warrant earlier investigation by analysts and risk teams.",
  },
  {
    Icon: GitBranch,
    number: "03",
    title: "Scenario Modeling",
    text:
      "Explore how different assumptions and input conditions can influence modeled risk trajectories across selected future horizons.",
  },
  {
    Icon: Database,
    number: "04",
    title: "Feature Intelligence",
    text:
      "Structure financial, operational and contextual variables into governed feature sets that can support repeatable predictive analysis.",
  },
  {
    Icon: Eye,
    number: "05",
    title: "Model Explainability",
    text:
      "Expose relevant drivers, model inputs and analytical context so predictive outputs can be investigated rather than treated as opaque scores.",
  },
  {
    Icon: ShieldCheck,
    number: "06",
    title: "Model Governance",
    text:
      "Support versioning, monitoring, review and controlled deployment of predictive risk models across enterprise workflows.",
  },
];

const features = [
  { name: "Payment behavior", score: 86 },
  { name: "Exposure movement", score: 74 },
  { name: "Liquidity signal", score: 68 },
  { name: "Market volatility", score: 61 },
  { name: "Transaction pattern", score: 54 },
  { name: "External indicators", score: 43 },
];

const pipeline = [
  {
    Icon: Database,
    number: "01",
    title: "Data",
    text: "Historical, operational and contextual signals.",
  },
  {
    Icon: Network,
    number: "02",
    title: "Features",
    text: "Structured variables for analytical modeling.",
  },
  {
    Icon: BrainCircuit,
    number: "03",
    title: "Model",
    text: "Defined predictive analytical methods.",
  },
  {
    Icon: Gauge,
    number: "04",
    title: "Score",
    text: "Risk probability and supporting context.",
  },
  {
    Icon: Eye,
    number: "05",
    title: "Explain",
    text: "Drivers, evidence and investigation context.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Define",
    text: "Specify the risk question, outcome and prediction horizon.",
  },
  {
    number: "02",
    title: "Prepare",
    text: "Organize historical and current information for modeling.",
  },
  {
    number: "03",
    title: "Engineer",
    text: "Develop governed analytical features from relevant signals.",
  },
  {
    number: "04",
    title: "Model",
    text: "Train and evaluate appropriate predictive approaches.",
  },
  {
    number: "05",
    title: "Validate",
    text: "Review performance, stability and analytical limitations.",
  },
  {
    number: "06",
    title: "Operationalize",
    text: "Integrate approved risk signals into controlled workflows.",
  },
];

const principles = [
  "Define the prediction target before selecting a model.",
  "Keep the prediction horizon explicit and measurable.",
  "Separate model probability from business certainty.",
  "Evaluate predictive performance on appropriate holdout data.",
  "Monitor feature and model behavior after deployment.",
  "Keep important risk decisions subject to appropriate human review.",
  "Document assumptions, limitations and model versions.",
  "Design explainability around the needs of risk investigators.",
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
          scale: [1, 2.4, 1],
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
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 82%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 82%, transparent 100%)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[430px] h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-[#7c3aed]/[0.055] blur-[230px]" />

      <Container className="relative">
        {/* <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <LiveDot />
            <Micro>Predictive Risk Modeling</Micro>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <Micro>Signals</Micro>
            <Micro>Probability</Micro>
            <Micro>Forecast</Micro>
            <Micro>Decision</Micro>
          </div>
        </div> */}

        <div className="mx-auto max-w-[1180px] pt-20 text-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-4 py-2"
          >
            <BrainCircuit size={11} className="text-[#c4b5fd]" />
            <Micro>AI / Finance / Forward Risk Intelligence</Micro>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-9 text-[clamp(4rem,8.5vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.085em]"
          >
            Model what risk

            <span className="block bg-gradient-to-r from-white/20 via-[#c4b5fd]/80 to-white/20 bg-clip-text text-transparent">
              could become.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mx-auto mt-9 max-w-[850px] text-[14px] leading-8 text-white/[0.55]"
          >
            HYI designs predictive risk modeling systems that transform
            historical patterns, current conditions and governed analytical
            features into forward-looking risk signals for investigation,
            monitoring and decision support.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#observatory"
              className="flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-medium text-black"
            >
              Explore forecasting engine
              <ArrowDown size={13} />
            </a>

            <a
              href="#capabilities"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[11px] text-white/50"
            >
              Modeling capabilities
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        <div id="observatory" className="mt-20">
          <ForecastObservatory />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   FORECAST OBSERVATORY
========================================================= */

function ForecastObservatory() {
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
              <Activity size={15} className="text-[#c4b5fd]" />
            </div>

            <div>
              <Micro>Risk Forecast Observatory</Micro>

              <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.12em] text-white/15">
                SIGNAL / MODEL / PROBABILITY / HORIZON
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LiveDot />
            <Micro>Forecast stream active</Micro>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {signalCards.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              className="rounded-[15px] border border-white/[0.06] bg-[#050505] p-4"
            >
              <div className="flex items-center justify-between">
                <Micro>{item.label}</Micro>
                <CircleDot size={9} className="text-[#a78bfa]" />
              </div>

              <div className="mt-5 flex items-end justify-between gap-3">
                <span className="text-[23px] font-medium tracking-[-0.05em] text-white/80">
                  {item.value}
                </span>

                <span className="font-mono text-[6px] text-[#a78bfa]">
                  {item.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.3fr_.7fr]">
          <RiskHorizon />
          <SignalMonitor />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   RISK HORIZON
========================================================= */

function RiskHorizon() {
  return (
    <div className="relative min-h-[510px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505] p-5 md:p-7">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <Micro>Future Risk Horizon</Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Illustrative probability trajectory
          </p>
        </div>

        <div className="rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-3 py-2">
          <span className="font-mono text-[6px] text-[#c4b5fd]">
            90 DAY WINDOW
          </span>
        </div>
      </div>

      <div className="absolute bottom-20 left-7 right-7 top-28">
        <svg
          viewBox="0 0 900 320"
          preserveAspectRatio="none"
          className="h-full w-full overflow-visible"
        >
          <defs>
            <linearGradient id="riskLine" x1="0" x2="1">
              <stop offset="0%" stopColor="#6d4bd8" />
              <stop offset="55%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#ddd6fe" />
            </linearGradient>

            <linearGradient id="riskArea" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="#8b5cf6"
                stopOpacity="0.22"
              />
              <stop
                offset="100%"
                stopColor="#8b5cf6"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {[50, 110, 170, 230, 290].map((y) => (
            <line
              key={y}
              x1="0"
              x2="900"
              y1={y}
              y2={y}
              stroke="rgba(255,255,255,.05)"
            />
          ))}

          <motion.path
            d="M0 270 C110 260 130 225 230 235 C330 245 355 185 445 195 C530 205 560 130 650 145 C730 158 780 80 900 62 L900 320 L0 320 Z"
            fill="url(#riskArea)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
          />

          <motion.path
            d="M0 270 C110 260 130 225 230 235 C330 245 355 185 445 195 C530 205 560 130 650 145 C730 158 780 80 900 62"
            fill="none"
            stroke="url(#riskLine)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />

          <motion.path
            d="M0 295 C100 275 170 260 230 265 C340 274 370 220 450 228 C540 235 580 175 660 182 C760 190 820 110 900 100"
            fill="none"
            stroke="rgba(196,181,253,.15)"
            strokeWidth="18"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
          />
        </svg>

        <motion.div
          animate={{
            left: ["1%", "96%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[36%] z-20"
        >
          <div className="h-3 w-3 rounded-full border border-[#ddd6fe] bg-[#8b5cf6] shadow-[0_0_25px_rgba(167,139,250,.8)]" />
        </motion.div>
      </div>

      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-6 gap-2">
        {horizonData.map((item, index) => (
          <div
            key={item.label}
            className="border-t border-white/[0.06] pt-3"
          >
            <span className="block font-mono text-[6px] text-white/20">
              {item.label}
            </span>

            <span
              className={`mt-1 block font-mono text-[6px] ${
                index >= 4 ? "text-[#c4b5fd]" : "text-white/35"
              }`}
            >
              {item.value} / {item.risk}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   SIGNAL MONITOR
========================================================= */

function SignalMonitor() {
  const rows = [
    { name: "Exposure", value: 76 },
    { name: "Behavior", value: 63 },
    { name: "Liquidity", value: 51 },
    { name: "Volatility", value: 69 },
    { name: "External", value: 42 },
  ];

  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-[#050505] p-5">
      <div className="flex items-center justify-between">
        <div>
          <Micro>Signal Monitor</Micro>
          <p className="mt-2 text-[9px] text-white/25">
            Current feature activity
          </p>
        </div>

        <Zap size={13} className="text-[#a78bfa]" />
      </div>

      <div className="mt-9 space-y-7">
        {rows.map((row, index) => (
          <div key={row.name}>
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-white/35">
                {row.name}
              </span>

              <span className="font-mono text-[7px] text-white/30">
                {row.value}
              </span>
            </div>

            <div className="mt-3 h-[4px] overflow-hidden rounded-full bg-white/[0.05]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${row.value}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.08,
                }}
                className={`h-full rounded-full ${
                  index === 0 || index === 3
                    ? "bg-gradient-to-r from-[#6d4bd8] to-[#c4b5fd]"
                    : "bg-white/15"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-9 rounded-[13px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.04] p-4">
        <div className="flex items-center gap-3">
          <BrainCircuit size={11} className="text-[#c4b5fd]" />
          <Micro accent>Model observation</Micro>
        </div>

        <p className="mt-3 text-[9px] leading-5 text-white/35">
          A rising modeled probability is an analytical signal for
          investigation—not certainty that a future event will occur.
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   THESIS
========================================================= */

function PredictionThesis() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="01">
          Forward Risk Intelligence
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.95fr_1.05fr]">
          <h2 className="max-w-[690px] text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
            Historical data explains.

            <span className="block text-white/20">
              Predictive models explore what may follow.
            </span>
          </h2>

          <div className="self-end">
            <p className="text-[14px] leading-8 text-white/[0.55]">
              Predictive risk modeling combines relevant historical
              information, current signals and defined analytical methods to
              estimate the probability of specified future outcomes.
            </p>

            <p className="mt-5 text-[12px] leading-7 text-white/[0.38]">
              The value comes from disciplined modeling: clearly defining the
              target, prediction horizon, features, validation approach and
              limitations before a model is used inside a decision workflow.
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
              Predictive Capabilities
            </SectionLabel>

            <h2 className="mt-9 max-w-[800px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Move from reporting risk

              <span className="block text-white/20">
                to exploring its direction.
              </span>
            </h2>
          </div>

          <p className="max-w-[470px] text-[12px] leading-7 text-white/40">
            Build controlled predictive environments where signals, models,
            probabilities, explanations and monitoring operate as one
            connected analytical system.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(
            ({ Icon, number, title, text }, index) => (
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
   FEATURE INTELLIGENCE
========================================================= */

function FeatureIntelligence() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div className="self-center">
            <SectionLabel number="03">
              Feature Intelligence
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Prediction begins

              <span className="block bg-gradient-to-r from-white/20 to-[#c4b5fd]/70 bg-clip-text text-transparent">
                with the right signals.
              </span>
            </h2>

            <p className="mt-7 max-w-[470px] text-[12px] leading-7 text-white/40">
              Transform relevant historical and current information into
              governed analytical features that capture meaningful patterns
              for the specific risk question being modeled.
            </p>
          </div>

          <FeatureModel />
        </div>
      </Container>
    </section>
  );
}

function FeatureModel() {
  return (
    <div className="rounded-[24px] border border-white/[0.08] bg-[#080808] p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <Micro>Feature Signal Importance</Micro>
          <p className="mt-2 text-[9px] text-white/25">
            Illustrative analytical view
          </p>
        </div>

        <Activity size={14} className="text-[#a78bfa]" />
      </div>

      <div className="mt-10 space-y-7">
        {features.map((feature, index) => (
          <div key={feature.name}>
            <div className="flex items-end justify-between">
              <div>
                <span className="text-[10px] text-white/45">
                  {feature.name}
                </span>

                <span className="mt-1 block font-mono text-[6px] text-white/20">
                  FEATURE / {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <span className="font-mono text-[8px] text-white/40">
                {feature.score}
              </span>
            </div>

            <div className="mt-3 h-[5px] overflow-hidden rounded-full bg-white/[0.05]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${feature.score}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.07,
                }}
                className={`h-full rounded-full ${
                  index < 2
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
   MODEL PIPELINE
========================================================= */

function ModelPipeline() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="04">
          Predictive Architecture
        </SectionLabel>

        <div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[830px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
            From raw information

            <span className="block text-white/20">
              to explainable risk signal.
            </span>
          </h2>

          <p className="max-w-[450px] text-[11px] leading-7 text-white/35">
            Create a traceable analytical pipeline connecting data,
            engineered features, predictive models and investigation
            experiences.
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

          {pipeline.map(({ Icon, number, title, text }) => (
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
   PROBABILITY ENGINE
========================================================= */

function ProbabilityEngine() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#080808]">
          <div className="grid lg:grid-cols-[.78fr_1.22fr]">
            <div className="p-7 md:p-12">
              <SectionLabel number="05">
                Probability Engine
              </SectionLabel>

              <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
                Risk is not

                <span className="block bg-gradient-to-r from-white/20 to-[#c4b5fd]/70 bg-clip-text text-transparent">
                  a binary future.
                </span>
              </h2>

              <p className="mt-7 max-w-[500px] text-[12px] leading-7 text-white/40">
                Predictive models can express risk as a modeled probability
                within a defined horizon, giving analysts a more nuanced
                signal than a simple yes-or-no classification.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Probability distribution",
                  "Defined forecast horizon",
                  "Confidence context",
                  "Threshold configuration",
                  "Human investigation",
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

            <ProbabilityModel />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProbabilityModel() {
  return (
    <div className="relative min-h-[560px] overflow-hidden border-t border-white/[0.07] lg:border-l lg:border-t-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="absolute left-6 top-6 z-20">
        <Micro>Probability Distribution</Micro>

        <p className="mt-2 text-[8px] text-white/20">
          Illustrative model output
        </p>
      </div>

      <div className="absolute bottom-16 left-8 right-8 top-24">
        <svg
          viewBox="0 0 700 400"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="curve" x1="0" x2="1">
              <stop offset="0%" stopColor="#6d4bd8" />
              <stop offset="60%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#ddd6fe" />
            </linearGradient>

            <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="#8b5cf6"
                stopOpacity=".25"
              />
              <stop
                offset="100%"
                stopColor="#8b5cf6"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          <motion.path
            d="M0 370 C90 370 110 355 160 330 C230 295 255 210 330 150 C390 102 435 72 495 125 C550 172 565 275 620 330 C650 360 675 368 700 370 L700 400 L0 400 Z"
            fill="url(#curveFill)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
          />

          <motion.path
            d="M0 370 C90 370 110 355 160 330 C230 295 255 210 330 150 C390 102 435 72 495 125 C550 172 565 275 620 330 C650 360 675 368 700 370"
            fill="none"
            stroke="url(#curve)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />

          <line
            x1="445"
            x2="445"
            y1="45"
            y2="380"
            stroke="rgba(196,181,253,.3)"
            strokeDasharray="5 8"
          />
        </svg>
      </div>

      <motion.div
        animate={{
          y: [-4, 4, -4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute right-[18%] top-[27%] rounded-[14px] border border-[#8b5cf6]/20 bg-[#050505]/95 p-4 backdrop-blur-xl"
      >
        <Micro accent>Predicted probability</Micro>

        <span className="mt-3 block text-4xl font-medium tracking-[-0.06em] text-white/80">
          64%
        </span>

        <span className="mt-2 block font-mono text-[6px] text-white/20">
          DEMONSTRATION VALUE
        </span>
      </motion.div>

      <div className="absolute bottom-6 left-8 right-8 flex justify-between">
        <Micro>Lower modeled risk</Micro>
        <Micro>Higher modeled risk</Micro>
      </div>
    </div>
  );
}

/* =========================================================
   SCENARIO BRANCHES
========================================================= */

function ScenarioBranches() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_.8fr]">
          <ScenarioModel />

          <div className="self-center">
            <SectionLabel number="06">
              Scenario Branching
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Explore more than

              <span className="block text-white/20">
                one possible path.
              </span>
            </h2>

            <p className="mt-7 max-w-[480px] text-[12px] leading-7 text-white/40">
              Scenario analysis can help teams understand how changes in
              selected assumptions may influence modeled risk trajectories
              without treating any single branch as a guaranteed outcome.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ScenarioModel() {
  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#050505] p-6">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="relative z-20">
        <Micro>Future Scenario Tree</Micro>
      </div>

      <svg
        viewBox="0 0 700 440"
        preserveAspectRatio="none"
        className="absolute inset-x-8 bottom-8 top-16 h-[390px] w-[calc(100%-4rem)]"
      >
        <motion.path
          d="M60 220 C180 220 210 220 300 220"
          stroke="rgba(196,181,253,.5)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
        />

        <motion.path
          d="M300 220 C400 220 420 80 620 70"
          stroke="rgba(196,181,253,.45)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        />

        <motion.path
          d="M300 220 C410 220 430 220 620 220"
          stroke="rgba(255,255,255,.15)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        />

        <motion.path
          d="M300 220 C400 220 420 360 620 370"
          stroke="rgba(139,92,246,.35)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        />
      </svg>

      <ScenarioNode
        className="left-[7%] top-[43%]"
        label="CURRENT"
        value="0.32"
      />

      <ScenarioNode
        className="right-[6%] top-[12%]"
        label="STRESS"
        value="0.71"
      />

      <ScenarioNode
        className="right-[6%] top-[43%]"
        label="BASE"
        value="0.46"
      />

      <ScenarioNode
        className="bottom-[10%] right-[6%]"
        label="RECOVERY"
        value="0.27"
      />
    </div>
  );
}

function ScenarioNode({
  className,
  label,
  value,
}: {
  className: string;
  label: string;
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
      className={`absolute z-20 min-w-[110px] rounded-[12px] border border-white/[0.08] bg-[#080808] p-4 ${className}`}
    >
      <span className="font-mono text-[6px] text-white/25">
        {label}
      </span>

      <span className="mt-2 block text-[18px] font-medium text-[#c4b5fd]">
        {value}
      </span>
    </motion.div>
  );
}

/* =========================================================
   MODEL MONITORING
========================================================= */

function ModelMonitoring() {
  const monitoring = [
    {
      label: "Feature stability",
      value: 86,
      status: "Stable",
    },
    {
      label: "Model quality",
      value: 81,
      status: "Observed",
    },
    {
      label: "Data coverage",
      value: 93,
      status: "Healthy",
    },
    {
      label: "Signal consistency",
      value: 77,
      status: "Watch",
    },
  ];

  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="07">
          Model Monitoring
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              A model is not finished

              <span className="block text-white/20">
                when it goes live.
              </span>
            </h2>

            <p className="mt-7 max-w-[470px] text-[12px] leading-7 text-white/40">
              Production risk models need ongoing observation so teams can
              investigate changes in input distributions, data quality and
              predictive behavior over time.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {monitoring.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="rounded-[17px] border border-white/[0.07] bg-[#080808] p-5"
              >
                <div className="flex items-center justify-between">
                  <Micro>{item.label}</Micro>

                  <Activity size={10} className="text-[#a78bfa]" />
                </div>

                <div className="mt-8 flex items-end justify-between">
                  <span className="text-4xl font-medium tracking-[-0.06em] text-white/75">
                    {item.value}
                  </span>

                  <span className="font-mono text-[6px] text-[#c4b5fd]">
                    {item.status}
                  </span>
                </div>

                <div className="mt-5 h-[3px] overflow-hidden rounded-full bg-white/[0.05]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-[#6d4bd8] to-[#c4b5fd]"
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   WORKFLOW
========================================================= */

function ModelingWorkflow() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="08">
          Modeling Workflow
        </SectionLabel>

        <div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[820px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
            Build prediction

            <span className="block text-white/20">
              as a controlled system.
            </span>
          </h2>

          <p className="max-w-[450px] text-[11px] leading-7 text-white/35">
            Predictive risk modeling requires more than training an algorithm.
            It requires disciplined definition, validation, monitoring and
            operational governance.
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
   GOVERNANCE
========================================================= */

function ModelGovernance() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <SectionLabel number="09">
              Predictive Governance
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Probability needs

              <span className="block text-white/20">
                context and control.
              </span>
            </h2>

            <p className="mt-7 max-w-[430px] text-[11px] leading-7 text-white/35">
              Predictive outputs should be interpreted within their defined
              scope, limitations and evidence rather than presented as
              guaranteed future outcomes.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <motion.div
                key={principle}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
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
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.06] blur-[240px]" />

      <Container className="relative text-center">
        <div className="mx-auto flex w-fit items-center gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#080808]">
            <Activity
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
            <BrainCircuit
              size={18}
              strokeWidth={1}
              className="text-[#c4b5fd]"
            />
          </div>
        </div>

        <h2 className="mx-auto mt-12 max-w-[1100px] text-[clamp(3.7rem,7vw,7.3rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
          Understand today.

          <span className="block bg-gradient-to-r from-[#c4b5fd] via-white/40 to-white/15 bg-clip-text text-transparent">
            Model what may come next.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[740px] text-[12px] leading-7 text-white/[0.43]">
          Build predictive risk intelligence that connects governed data,
          analytical features, model probabilities, explanations and
          monitoring into a controlled decision-support environment.
        </p>

        <a
          href="#observatory"
          className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full bg-white px-9 py-4 text-[11px] font-medium text-black"
        >
          Explore Predictive Risk
          <ArrowRight size={13} />
        </a>

        <p className="mx-auto mt-6 max-w-[650px] font-mono text-[6px] uppercase leading-5 tracking-[0.12em] text-white/15">
          Interface probabilities and metrics shown on this page are
          illustrative demonstration values and are not financial forecasts.
        </p>
      </Container>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function PredictiveRiskModelingClient() {
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

      <PredictionThesis />

      <Capabilities />

      <FeatureIntelligence />

      <ModelPipeline />

      <ProbabilityEngine />

      <ScenarioBranches />

      <ModelMonitoring />

      <ModelingWorkflow />

      <ModelGovernance />

      <FinalCTA />
    </div>
  );
}