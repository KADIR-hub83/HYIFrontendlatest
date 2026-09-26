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
  CircleDollarSign,
  CircleDot,
  Database,
  Eye,
  Gauge,
  GitBranch,
  Layers3,
  RefreshCcw,
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

const forecastDrivers = [
  {
    Icon: CircleDollarSign,
    number: "01",
    title: "Revenue Signals",
    text:
      "Connect historical revenue, pipeline movement, customer behavior and relevant commercial drivers into a structured forecasting foundation.",
  },
  {
    Icon: Activity,
    number: "02",
    title: "Demand Patterns",
    text:
      "Identify recurring patterns, seasonality and meaningful changes that can influence future financial performance.",
  },
  {
    Icon: Database,
    number: "03",
    title: "Financial Data",
    text:
      "Bring suitable operational and financial information into governed pipelines with consistent definitions and reliable analytical context.",
  },
  {
    Icon: GitBranch,
    number: "04",
    title: "Scenario Planning",
    text:
      "Compare multiple assumption sets to understand how different business conditions may influence projected outcomes.",
  },
  {
    Icon: BrainCircuit,
    number: "05",
    title: "Forecast Models",
    text:
      "Combine suitable statistical or machine-learning methods with business context for more structured forward-looking analysis.",
  },
  {
    Icon: RefreshCcw,
    number: "06",
    title: "Rolling Forecasts",
    text:
      "Refresh projections as new information arrives so teams can work from a continuously updated analytical view.",
  },
];

const timeline = [
  {
    quarter: "Q1",
    type: "ACTUAL",
    value: 54,
  },
  {
    quarter: "Q2",
    type: "ACTUAL",
    value: 61,
  },
  {
    quarter: "Q3",
    type: "ACTUAL",
    value: 58,
  },
  {
    quarter: "Q4",
    type: "NOW",
    value: 68,
  },
  {
    quarter: "Q1",
    type: "FORECAST",
    value: 73,
  },
  {
    quarter: "Q2",
    type: "FORECAST",
    value: 79,
  },
  {
    quarter: "Q3",
    type: "FORECAST",
    value: 76,
  },
  {
    quarter: "Q4",
    type: "FORECAST",
    value: 86,
  },
];

const scenarioData = [
  {
    title: "Baseline",
    subtitle: "Current assumptions",
    value: "01",
    bars: [42, 51, 56, 63, 69, 74],
  },
  {
    title: "Expansion",
    subtitle: "Higher growth scenario",
    value: "02",
    bars: [43, 55, 61, 72, 80, 91],
  },
  {
    title: "Pressure",
    subtitle: "Conservative scenario",
    value: "03",
    bars: [43, 48, 46, 51, 55, 58],
  },
];

const workflow = [
  {
    number: "01",
    title: "Connect",
    text:
      "Bring relevant financial, commercial and operational information into governed analytical pipelines.",
  },
  {
    number: "02",
    title: "Understand",
    text:
      "Explore historical patterns, business drivers, seasonality and important relationships in the available data.",
  },
  {
    number: "03",
    title: "Model",
    text:
      "Develop and validate suitable forecasting approaches for the intended financial planning context.",
  },
  {
    number: "04",
    title: "Simulate",
    text:
      "Compare alternative assumptions and scenarios to understand possible ranges of future outcomes.",
  },
  {
    number: "05",
    title: "Refresh",
    text:
      "Update forecasts as new observations arrive and monitor whether assumptions or model behavior are changing.",
  },
];

const principles = [
  "Treat forecasts as estimates with uncertainty, not guaranteed future outcomes.",
  "Keep assumptions visible so teams can understand what drives each scenario.",
  "Monitor forecast error and model behavior as new actual results become available.",
  "Use governed, relevant and appropriately prepared financial information.",
  "Combine quantitative models with suitable business context and review.",
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

function LiveDot({
  blue = false,
}: {
  blue?: boolean;
}) {
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
          blue
            ? "bg-[#60a5fa]"
            : "bg-[#a78bfa]"
        }`}
      />

      <span
        className={`relative h-2 w-2 rounded-full ${
          blue
            ? "bg-[#60a5fa]"
            : "bg-[#a78bfa]"
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
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 65%, transparent 100%)",
        }}
      />

      {/* GLOW */}

      <div className="pointer-events-none absolute left-[12%] top-[260px] h-[500px] w-[500px] rounded-full bg-[#7c3aed]/[0.06] blur-[190px]" />

      <div className="pointer-events-none absolute right-[10%] top-[300px] h-[500px] w-[500px] rounded-full bg-[#2563eb]/[0.05] blur-[190px]" />

      <Container className="relative">
        {/* TOP STATUS */}

        {/* <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <LiveDot />

            <Micro>
              HYI / Financial Forecasting
            </Micro>
          </div>

          <div className="hidden items-center gap-7 md:flex">
            <Micro>History</Micro>
            <Micro>Drivers</Micro>
            <Micro>Scenarios</Micro>
            <Micro>Future</Micro>
          </div>
        </div> */}

        {/* HERO TEXT */}

        <div className="mx-auto max-w-[1080px] pt-20 text-center">
          {/* <motion.div
            initial={{
              opacity: 0,
              y: 14,
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
            <BrainCircuit
              size={11}
              className="text-[#c4b5fd]"
            />

            <Micro>
              AI Financial Intelligence
            </Micro> */}
          {/* </motion.div> */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
            }}
            className="mt-9 text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.83] tracking-[-0.085em]"
          >
            Turn history

            <span className="block text-white/20">
              into foresight.
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
            className="mx-auto mt-9 max-w-[830px] text-[14px] leading-8 text-white/[0.55]"
          >
            HYI helps organizations build financial
            forecasting systems that connect historical
            performance, business drivers, scenario
            assumptions and analytical models into a
            continuously evolving view of what may come
            next. Forecasting becomes a structured
            decision-support capability instead of a
            static spreadsheet exercise.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#forecast-engine"
              className="flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-medium text-black"
            >
              Explore forecast engine

              <ArrowDown size={13} />
            </a>

            <a
              href="#forecast-drivers"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[11px] text-white/55"
            >
              Financial drivers

              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* MAIN MODEL */}

        <div
          id="forecast-engine"
          className="mt-20"
        >
          <ForecastTerminal />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   FORECAST TERMINAL
========================================================= */

function ForecastTerminal() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#080808] p-5 md:p-7">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.045) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative">
        {/* HEADER */}

        <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">
              <Activity
                size={15}
                className="text-[#c4b5fd]"
              />
            </div>

            <div>
              <Micro>
                Financial Forecast Terminal
              </Micro>

              <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.12em] text-white/15">
                HISTORY → SIGNAL → MODEL → SCENARIO →
                FORECAST
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LiveDot blue />

            <Micro>
              Rolling forecast active
            </Micro>
          </div>
        </div>

        {/* CONTENT */}

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.35fr_.65fr]">
          <FutureForecastModel />

          <ForecastMonitor />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <ConfidenceModel />

          <DriverPulse />

          <ForecastStatus />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN FORECAST GRAPH
========================================================= */

function FutureForecastModel() {
  return (
    <div className="relative min-h-[470px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505] p-5 md:p-7">
      {/* GRID */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      {/* TOP */}

      <div className="relative z-10 flex items-center justify-between">
        <div>
          <Micro>
            Forward Projection
          </Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Illustrative forecast visualization
          </p>
        </div>

        <div className="flex gap-5">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />

            <span className="font-mono text-[6px] uppercase text-white/25">
              Actual
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />

            <span className="font-mono text-[6px] uppercase text-white/25">
              Forecast
            </span>
          </div>
        </div>
      </div>

      {/* SVG GRAPH */}

      <div className="relative z-10 mt-12 h-[280px]">
        <svg
          viewBox="0 0 900 300"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          {/* HORIZONTAL LINES */}

          {[40, 90, 140, 190, 240].map(
            (y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="900"
                y2={y}
                stroke="rgba(255,255,255,.045)"
                strokeWidth="1"
              />
            ),
          )}

          {/* VERTICAL NOW LINE */}

          <line
            x1="410"
            y1="10"
            x2="410"
            y2="275"
            stroke="rgba(196,181,253,.3)"
            strokeWidth="1"
            strokeDasharray="5 7"
          />

          {/* CONFIDENCE AREA */}

          <motion.path
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            d="
              M410 150
              C500 105 555 92 620 75
              C710 55 785 48 900 34
              L900 170
              C790 158 710 150 620 142
              C540 135 480 142 410 150
              Z
            "
            fill="url(#confidenceArea)"
          />

          {/* ACTUAL */}

          <motion.path
            d="
              M0 230
              C70 220 105 195 155 205
              C210 215 250 165 300 178
              C345 190 370 145 410 150
            "
            fill="none"
            stroke="rgba(255,255,255,.6)"
            strokeWidth="3"
            strokeLinecap="round"
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

          {/* FORECAST */}

          <motion.path
            d="
              M410 150
              C470 135 510 110 560 116
              C620 124 650 80 710 92
              C770 102 810 55 900 48
            "
            fill="none"
            stroke="url(#forecastLine)"
            strokeWidth="4"
            strokeLinecap="round"
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
              duration: 1.7,
              delay: 0.35,
            }}
          />

          {/* FORECAST DASH */}

          <motion.path
            d="
              M410 150
              C470 135 510 110 560 116
              C620 124 650 80 710 92
              C770 102 810 55 900 48
            "
            fill="none"
            stroke="rgba(255,255,255,.16)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="1 20"
            initial={{
              strokeDashoffset: 200,
            }}
            animate={{
              strokeDashoffset: 0,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* NOW DOT */}

          <motion.circle
            cx="410"
            cy="150"
            r="7"
            fill="#c4b5fd"
            animate={{
              r: [5, 8, 5],
              opacity: [1, 0.55, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          <defs>
            <linearGradient
              id="forecastLine"
              x1="410"
              y1="0"
              x2="900"
              y2="0"
            >
              <stop
                offset="0%"
                stopColor="#8b5cf6"
              />

              <stop
                offset="55%"
                stopColor="#c4b5fd"
              />

              <stop
                offset="100%"
                stopColor="#60a5fa"
              />
            </linearGradient>

            <linearGradient
              id="confidenceArea"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#8b5cf6"
                stopOpacity=".18"
              />

              <stop
                offset="100%"
                stopColor="#2563eb"
                stopOpacity=".015"
              />
            </linearGradient>
          </defs>
        </svg>

        {/* NOW */}

        <div className="absolute left-[45.5%] top-0 -translate-x-1/2 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.08] px-3 py-1">
          <span className="font-mono text-[6px] uppercase tracking-[0.14em] text-[#c4b5fd]">
            Now
          </span>
        </div>

        {/* FUTURE LABEL */}

        <div className="absolute right-3 top-3">
          <span className="font-mono text-[6px] uppercase tracking-[0.14em] text-[#60a5fa]/60">
            Future horizon →
          </span>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="relative z-10 mt-4 grid grid-cols-4 gap-2 md:grid-cols-8">
        {timeline.map((item, index) => (
          <div
            key={`${item.quarter}-${index}`}
            className="rounded-[9px] border border-white/[0.05] bg-[#080808] px-2 py-3 text-center"
          >
            <span className="font-mono text-[7px] text-white/45">
              {item.quarter}
            </span>

            <span
              className={`mt-1 block font-mono text-[5px] uppercase tracking-[0.08em] ${
                item.type === "FORECAST"
                  ? "text-[#a78bfa]/60"
                  : item.type === "NOW"
                    ? "text-[#60a5fa]"
                    : "text-white/15"
              }`}
            >
              {item.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   FORECAST MONITOR
========================================================= */

function ForecastMonitor() {
  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-[#050505] p-6">
      <div className="flex items-center justify-between">
        <div>
          <Micro>
            Forecast Monitor
          </Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Model intelligence
          </p>
        </div>

        <Gauge
          size={13}
          className="text-[#60a5fa]"
        />
      </div>

      {/* CIRCLE */}

      <div className="relative mx-auto mt-8 flex h-[165px] w-[165px] items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border border-dashed border-[#8b5cf6]/25"
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
          className="absolute inset-[18px] rounded-full border border-dashed border-[#60a5fa]/20"
        />

        <div className="absolute inset-[35px] rounded-full border border-white/[0.07] bg-[#080808]" />

        <div className="relative z-10 text-center">
          <BrainCircuit
            size={23}
            strokeWidth={1}
            className="mx-auto text-[#c4b5fd]"
          />

          <span className="mt-3 block font-mono text-[7px] uppercase tracking-[0.13em] text-white/50">
            Forecast
          </span>

          <span className="mt-1 block font-mono text-[5px] uppercase tracking-[0.1em] text-[#60a5fa]/70">
            Active
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
          className="absolute inset-[8px]"
        >
          <span className="absolute left-1/2 top-[-3px] h-2 w-2 rounded-full bg-[#a78bfa] shadow-[0_0_16px_rgba(167,139,250,.9)]" />
        </motion.div>
      </div>

      <div className="mt-8 space-y-3">
        <MonitorRow
          title="Historical data"
          status="CONNECTED"
        />

        <MonitorRow
          title="Driver signals"
          status="ACTIVE"
          blue
        />

        <MonitorRow
          title="Scenario engine"
          status="READY"
        />

        <MonitorRow
          title="Rolling update"
          status="SYNCED"
          blue
        />
      </div>
    </div>
  );
}

function MonitorRow({
  title,
  status,
  blue = false,
}: {
  title: string;
  status: string;
  blue?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-[10px] border border-white/[0.05] bg-[#080808] px-3 py-3">
      <span className="text-[8px] text-white/35">
        {title}
      </span>

      <div className="flex items-center gap-2">
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            blue
              ? "bg-[#60a5fa]"
              : "bg-[#a78bfa]"
          }`}
        />

        <span
          className={`font-mono text-[5px] ${
            blue
              ? "text-[#60a5fa]"
              : "text-[#a78bfa]"
          }`}
        >
          {status}
        </span>
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
   CONFIDENCE MODEL
========================================================= */

function ConfidenceModel() {
  return (
    <ModelCard
      title="Forecast Horizon"
      Icon={Eye}
    >
      <div className="relative mt-7 h-[125px] overflow-hidden rounded-[12px] border border-white/[0.05] bg-[#080808]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px)",
            backgroundSize: "100% 24px",
          }}
        />

        <svg
          viewBox="0 0 300 120"
          className="absolute inset-0 h-full w-full"
        >
          <motion.path
            d="
              M10 82
              C55 76 70 62 105 67
              C145 73 160 45 195 53
              C230 61 250 35 290 30
            "
            fill="none"
            stroke="url(#smallForecast)"
            strokeWidth="3"
            strokeLinecap="round"
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
              duration: 1.2,
            }}
          />

          <defs>
            <linearGradient
              id="smallForecast"
              x1="0"
              x2="1"
            >
              <stop
                stopColor="#8b5cf6"
              />

              <stop
                offset="1"
                stopColor="#60a5fa"
              />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          animate={{
            left: ["5%", "90%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-3 top-3 w-px bg-[#c4b5fd]/25"
        />
      </div>

      <p className="mt-4 text-[9px] leading-5 text-white/30">
        Forecast uncertainty generally changes as the
        analytical horizon extends further into the
        future.
      </p>
    </ModelCard>
  );
}

/* =========================================================
   DRIVER PULSE
========================================================= */

function DriverPulse() {
  const values = [42, 67, 54, 81, 63, 72];

  return (
    <ModelCard
      title="Driver Pulse"
      Icon={Activity}
    >
      <div className="mt-7 flex h-[125px] items-end gap-2 rounded-[12px] border border-white/[0.05] bg-[#080808] p-4">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex h-full flex-1 items-end"
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
                duration: 0.7,
                delay: index * 0.06,
              }}
              className={`w-full rounded-t-[3px] ${
                index % 2 === 0
                  ? "bg-[#8b5cf6]/65"
                  : "bg-[#60a5fa]/55"
              }`}
            />
          </div>
        ))}
      </div>

      <p className="mt-4 text-[9px] leading-5 text-white/30">
        Monitor selected business drivers alongside the
        forecast so changes in underlying conditions are
        easier to investigate.
      </p>
    </ModelCard>
  );
}

/* =========================================================
   FORECAST STATUS
========================================================= */

function ForecastStatus() {
  const rows = [
    "Data synchronized",
    "Drivers evaluated",
    "Scenarios generated",
    "Forecast refreshed",
  ];

  return (
    <ModelCard
      title="Forecast State"
      Icon={Workflow}
    >
      <div className="mt-7 space-y-3">
        {rows.map((item, index) => (
          <motion.div
            key={item}
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
            className="flex items-center justify-between rounded-[10px] border border-white/[0.05] bg-[#080808] px-3 py-3"
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  index % 2 === 0
                    ? "bg-[#a78bfa]"
                    : "bg-[#60a5fa]"
                }`}
              />

              <span className="text-[8px] text-white/35">
                {item}
              </span>
            </div>

            <CheckCircle2
              size={10}
              className="text-white/20"
            />
          </motion.div>
        ))}
      </div>
    </ModelCard>
  );
}

/* =========================================================
   INTRO
========================================================= */

function ForecastIntro() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="01">
          Forecast Intelligence
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="max-w-[650px] text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              Planning needs

              <span className="block text-white/20">
                a living view.
              </span>
            </h2>
          </div>

          <div className="self-end">
            <p className="text-[14px] leading-8 text-white/[0.55]">
              Financial planning becomes more useful when
              forecasts can respond to changing business
              conditions. Instead of treating a projection
              as a fixed answer, teams can continuously
              compare actual performance with assumptions,
              drivers and alternative future scenarios.
            </p>

            <p className="mt-5 text-[12px] leading-7 text-white/[0.38]">
              HYI can help engineer the data pipelines,
              forecasting services, scenario workflows,
              monitoring layers and analytical experiences
              required to make this capability operational
              across finance and business teams.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-3">
          <IntroCard
            Icon={Database}
            number="01"
            title="Connect reality"
            text="Bring historical financial and operational information together with consistent definitions and governed analytical pipelines."
          />

          <IntroCard
            Icon={BrainCircuit}
            number="02"
            title="Model possibility"
            text="Use suitable forecasting approaches to estimate potential future outcomes while preserving uncertainty and model limitations."
          />

          <IntroCard
            Icon={RefreshCcw}
            number="03"
            title="Continuously adapt"
            text="Compare forecasts with new actual observations and refresh projections when important business conditions change."
          />
        </div>
      </Container>
    </section>
  );
}

function IntroCard({
  Icon,
  number,
  title,
  text,
}: {
  Icon: ElementType;
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
        <span className="font-mono text-[7px] text-[#a78bfa]">
          {number}
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
   FORECAST DRIVERS
========================================================= */

function ForecastDrivers() {
  return (
    <section
      id="forecast-drivers"
      className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10"
    >
      <Container>
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel number="02">
              Forecast Drivers
            </SectionLabel>

            <h2 className="mt-9 max-w-[800px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Understand what

              <span className="block bg-gradient-to-r from-white/20 to-[#8b5cf6]/70 bg-clip-text text-transparent">
                moves the future.
              </span>
            </h2>
          </div>

          <p className="max-w-[460px] text-[12px] leading-7 text-white/40">
            A useful forecast connects projected outcomes
            with the underlying business signals and
            assumptions that influence them.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {forecastDrivers.map(
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
                className="group rounded-[18px] border border-white/[0.07] bg-[#050505] p-6"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-[11px] border ${
                      index % 2 === 0
                        ? "border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]"
                        : "border-[#60a5fa]/20 bg-[#60a5fa]/[0.04]"
                    }`}
                  >
                    <Icon
                      size={14}
                      strokeWidth={1.3}
                      className={
                        index % 2 === 0
                          ? "text-[#c4b5fd]"
                          : "text-[#60a5fa]"
                      }
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
   SCENARIO SECTION
========================================================= */

function ScenarioSection() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="03">
          Scenario Planning
        </SectionLabel>

        <div className="mt-10 grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              One plan.

              <span className="block text-white/20">
                Multiple futures.
              </span>
            </h2>

            <p className="mt-7 max-w-[440px] text-[12px] leading-7 text-white/40">
              Scenario planning gives teams a structured
              way to compare how different assumptions
              could influence projected financial
              outcomes. The objective is not to predict
              the future perfectly, but to understand a
              useful range of possibilities.
            </p>
          </div>

          <ScenarioUniverse />
        </div>
      </Container>
    </section>
  );
}

function ScenarioUniverse() {
  return (
    <div className="relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#080808] p-5 md:p-7">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="relative flex items-center justify-between border-b border-white/[0.06] pb-5">
        <div>
          <Micro>
            Scenario Universe
          </Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Comparative future states
          </p>
        </div>

        <GitBranch
          size={13}
          className="text-[#a78bfa]"
        />
      </div>

      <div className="relative mt-5 grid gap-3 md:grid-cols-3">
        {scenarioData.map(
          (scenario, scenarioIndex) => (
            <motion.article
              key={scenario.title}
              whileHover={{
                y: -5,
              }}
              className="rounded-[16px] border border-white/[0.07] bg-[#050505] p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-medium text-white/65">
                    {scenario.title}
                  </span>

                  <span className="mt-1 block text-[7px] text-white/20">
                    {scenario.subtitle}
                  </span>
                </div>

                <span
                  className={`font-mono text-[7px] ${
                    scenarioIndex === 1
                      ? "text-[#60a5fa]"
                      : "text-[#a78bfa]"
                  }`}
                >
                  {scenario.value}
                </span>
              </div>

              <div className="mt-7 flex h-[140px] items-end gap-2 rounded-[11px] border border-white/[0.05] bg-[#080808] p-4">
                {scenario.bars.map(
                  (height, index) => (
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
                          delay:
                            index * 0.05 +
                            scenarioIndex * 0.08,
                        }}
                        className={`w-full rounded-t-[2px] ${
                          scenarioIndex === 1
                            ? "bg-[#60a5fa]/60"
                            : "bg-[#8b5cf6]/60"
                        }`}
                      />
                    </div>
                  ),
                )}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <Micro>Present</Micro>

                <ArrowRight
                  size={10}
                  className="text-white/20"
                />

                <Micro purple>Future</Micro>
              </div>
            </motion.article>
          ),
        )}
      </div>
    </div>
  );
}

/* =========================================================
   ROLLING FORECAST
========================================================= */

function RollingForecast() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_.8fr]">
          <RollingModel />

          <div className="self-center">
            <SectionLabel number="04">
              Rolling Forecast
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Keep the future

              <span className="block bg-gradient-to-r from-white/20 to-[#60a5fa]/70 bg-clip-text text-transparent">
                moving.
              </span>
            </h2>

            <p className="mt-7 max-w-[470px] text-[12px] leading-7 text-white/40">
              A rolling forecast can incorporate new
              actual results and refreshed assumptions
              over time. This creates a more dynamic
              planning process where the analytical view
              evolves alongside the business.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Actual results arrive",
                "Drivers are refreshed",
                "Forecast is recalculated",
                "Variance is reviewed",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      index % 2 === 0
                        ? "bg-[#a78bfa]"
                        : "bg-[#60a5fa]"
                    }`}
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

function RollingModel() {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
  ];

  return (
    <div className="relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#050505] p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <Micro>
            Rolling Forecast Engine
          </Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Continuous planning horizon
          </p>
        </div>

        <RefreshCcw
          size={13}
          className="text-[#a78bfa]"
        />
      </div>

      <div className="relative mt-10 overflow-hidden rounded-[15px] border border-white/[0.06] bg-[#080808] p-5">
        <div className="grid grid-cols-4 gap-2 md:grid-cols-8">
          {months.map((month, index) => (
            <motion.div
              key={month}
              animate={{
                borderColor:
                  index === 4
                    ? [
                        "rgba(139,92,246,.15)",
                        "rgba(139,92,246,.5)",
                        "rgba(139,92,246,.15)",
                      ]
                    : "rgba(255,255,255,.05)",
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="rounded-[9px] border bg-[#050505] px-2 py-4 text-center"
            >
              <span className="font-mono text-[6px] text-white/25">
                {month}
              </span>

              <motion.div
                animate={{
                  height: [
                    `${25 + index * 4}px`,
                    `${35 + index * 5}px`,
                    `${25 + index * 4}px`,
                  ],
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.08,
                  repeat: Infinity,
                }}
                className={`mx-auto mt-4 w-[3px] rounded-full ${
                  index < 4
                    ? "bg-white/30"
                    : index % 2 === 0
                      ? "bg-[#a78bfa]"
                      : "bg-[#60a5fa]"
                }`}
              />

              <span
                className={`mt-4 block font-mono text-[5px] ${
                  index < 4
                    ? "text-white/15"
                    : "text-[#a78bfa]/60"
                }`}
              >
                {index < 4
                  ? "ACT"
                  : "FCT"}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          animate={{
            left: ["48%", "94%", "48%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-2 top-2 w-px bg-gradient-to-b from-transparent via-[#c4b5fd]/50 to-transparent"
        />
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <SmallMetric
          label="Input"
          value="Actuals"
        />

        <SmallMetric
          label="Process"
          value="Refresh"
        />

        <SmallMetric
          label="Output"
          value="Forecast"
        />
      </div>
    </div>
  );
}

function SmallMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[11px] border border-white/[0.06] bg-[#080808] p-4">
      <Micro>{label}</Micro>

      <span className="mt-3 block text-[9px] text-white/50">
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   WORKFLOW
========================================================= */

function ForecastWorkflow() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionLabel number="05">
              Forecast Workflow
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              From data

              <span className="block text-white/20">
                to future context.
              </span>
            </h2>
          </div>

          <p className="max-w-[450px] text-[12px] leading-7 text-white/40">
            A production forecasting capability combines
            data engineering, analytical methods,
            scenario design and continuous monitoring
            into one connected workflow.
          </p>
        </div>

        <div className="relative mt-14 grid gap-3 lg:grid-cols-5">
          <div className="absolute left-[7%] right-[7%] top-[34px] hidden h-px bg-gradient-to-r from-[#8b5cf6]/15 via-[#c4b5fd]/40 to-[#60a5fa]/15 lg:block" />

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
            className="absolute top-[30px] z-30 hidden h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_15px_rgba(196,181,253,.9)] lg:block"
          />

          {workflow.map(
            (item, index) => (
              <motion.article
                key={item.title}
                whileHover={{
                  y: -4,
                }}
                className="relative z-10 rounded-[16px] border border-white/[0.07] bg-[#080808] p-5"
              >
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full border ${
                    index % 2 === 0
                      ? "border-[#8b5cf6]/30"
                      : "border-[#60a5fa]/25"
                  } bg-[#050505]`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      index % 2 === 0
                        ? "bg-[#a78bfa]"
                        : "bg-[#60a5fa]"
                    }`}
                  />
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
   PRINCIPLES
========================================================= */

function ForecastPrinciples() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel number="06">
              Forecast Principles
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em]">
              Forecast with

              <span className="block bg-gradient-to-r from-white/20 to-[#8b5cf6]/65 bg-clip-text text-transparent">
                perspective.
              </span>
            </h2>

            <p className="mt-6 max-w-[440px] text-[11px] leading-7 text-white/35">
              Financial forecasts are estimates built
              from data, assumptions and models. Their
              value comes from disciplined interpretation,
              transparent uncertainty and continuous
              learning from actual outcomes.
            </p>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505]">
            {principles.map(
              (principle, index) => (
                <motion.div
                  key={principle}
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
    <section className="relative overflow-hidden bg-[#050505] px-5 py-32 md:px-10 md:py-40">
      <div className="pointer-events-none absolute left-[18%] top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.07] blur-[170px]" />

      <div className="pointer-events-none absolute right-[18%] top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full bg-[#2563eb]/[0.05] blur-[170px]" />

      <Container className="relative text-center">
        {/* MINI FORECAST MODEL */}

        <div className="relative mx-auto flex h-[105px] w-[105px] items-center justify-center">
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
            className="absolute inset-[13px] rounded-full border border-dashed border-[#60a5fa]/20"
          />

          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full border border-white/[0.08] bg-[#090909]">
            <Activity
              size={23}
              strokeWidth={1}
              className="text-[#c4b5fd]"
            />
          </div>
        </div>

        <h2 className="mx-auto mt-10 max-w-[1100px] text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
          Plan beyond

          <span className="block bg-gradient-to-r from-[#c4b5fd] via-white/35 to-[#60a5fa] bg-clip-text text-transparent">
            the next number.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[720px] text-[12px] leading-7 text-white/[0.43]">
          Build financial forecasting infrastructure
          that connects historical performance, business
          drivers, analytical models and scenario
          intelligence into a continuously evolving
          planning capability.
        </p>

        <a
          href="#forecast-engine"
          className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full bg-white px-9 py-4 text-[11px] font-medium text-black"
        >
          Explore Financial Forecasting

          <ArrowRight size={13} />
        </a>
      </Container>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function FinancialForecastingClient() {
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
      {/* SCROLL PROGRESS */}

      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#8b5cf6] via-[#c4b5fd] to-[#60a5fa]"
      />

      <Hero />

      <ForecastIntro />

      <ForecastDrivers />

      <ScenarioSection />

      <RollingForecast />

      <ForecastWorkflow />

      <ForecastPrinciples />

      <FinalCTA />
    </div>
  );
}