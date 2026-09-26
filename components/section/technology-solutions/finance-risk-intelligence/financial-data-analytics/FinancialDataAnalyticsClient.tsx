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
  Database,
  Eye,
  Gauge,
  GitBranch,
  Layers3,
  RefreshCcw,
  Server,
  Workflow,
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
    Icon: Database,
    title: "Financial Data Integration",
    text:
      "Bring financial information from ERP platforms, accounting systems, operational applications, data warehouses and business systems into a connected analytical foundation.",
  },
  {
    number: "02",
    Icon: Activity,
    title: "Performance Analytics",
    text:
      "Transform financial and operational data into structured performance views that help teams understand revenue, cost, margin and business movement.",
  },
  {
    number: "03",
    Icon: CircleDollarSign,
    title: "Revenue Intelligence",
    text:
      "Analyze revenue composition, movement and contributing business dimensions through governed financial datasets and analytical models.",
  },
  {
    number: "04",
    Icon: Gauge,
    title: "KPI Intelligence",
    text:
      "Create consistent financial KPIs and executive metrics so different teams can work from clearly defined analytical measures.",
  },
  {
    number: "05",
    Icon: BrainCircuit,
    title: "AI-Assisted Analysis",
    text:
      "Apply analytical and selected AI capabilities to help explore financial patterns, anomalies, relationships and business signals.",
  },
  {
    number: "06",
    Icon: Eye,
    title: "Executive Visibility",
    text:
      "Turn complex financial information into accessible dashboards, analytical views and decision-support experiences for business leaders.",
  },
];

const financialMetrics = [
  {
    label: "Revenue",
    value: "$24.8M",
    change: "+8.4%",
  },
  {
    label: "Gross Margin",
    value: "42.6%",
    change: "+2.1%",
  },
  {
    label: "Operating Cost",
    value: "$11.2M",
    change: "-1.8%",
  },
  {
    label: "Cash Position",
    value: "$8.7M",
    change: "+4.6%",
  },
];

const dataSources = [
  "ERP",
  "Accounting",
  "CRM",
  "Payments",
  "Operations",
  "Data Warehouse",
];

const analyticsLayers = [
  {
    number: "01",
    Icon: Database,
    title: "Financial Sources",
    text:
      "ERP, accounting, transaction and operational data.",
  },
  {
    number: "02",
    Icon: Server,
    title: "Data Foundation",
    text:
      "Integrated, structured and governed financial datasets.",
  },
  {
    number: "03",
    Icon: Layers3,
    title: "Semantic Metrics",
    text:
      "Consistent business definitions, dimensions and financial KPIs.",
  },
  {
    number: "04",
    Icon: BrainCircuit,
    title: "Analytics & AI",
    text:
      "Models that explore patterns, trends and financial relationships.",
  },
  {
    number: "05",
    Icon: Eye,
    title: "Decision Experience",
    text:
      "Dashboards and analytical views designed around business decisions.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Connect",
    text:
      "Identify and connect the financial and operational systems required for analysis.",
  },
  {
    number: "02",
    title: "Model",
    text:
      "Structure financial entities, measures, dimensions and relationships.",
  },
  {
    number: "03",
    title: "Govern",
    text:
      "Create consistent definitions and controls around important financial information.",
  },
  {
    number: "04",
    title: "Analyze",
    text:
      "Build analytical models, dashboards and decision-support views.",
  },
  {
    number: "05",
    title: "Activate",
    text:
      "Deliver financial intelligence to the teams and workflows where decisions happen.",
  },
];

const intelligenceAreas = [
  "Revenue performance",
  "Cost intelligence",
  "Margin analysis",
  "Cash-flow visibility",
  "Budget variance",
  "Business-unit performance",
  "Financial forecasting",
  "Executive reporting",
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
        accent
          ? "text-[#b9a0ff]"
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
          scale: [1, 2.4, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute inset-0 rounded-full bg-[#8b5cf6]"
      />

      <span className="relative h-2 w-2 rounded-full bg-[#b9a0ff]" />
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
          backgroundSize: "68px 68px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
        }}
      />

      <div className="pointer-events-none absolute left-[20%] top-[250px] h-[500px] w-[500px] rounded-full bg-[#7c3aed]/[0.055] blur-[190px]" />

      <div className="pointer-events-none absolute right-[15%] top-[300px] h-[500px] w-[500px] rounded-full bg-[#2563eb]/[0.035] blur-[190px]" />

      <Container className="relative">
        {/* TOP STATUS */}

        {/* <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <LiveDot />

            <Micro>
              Financial Data Intelligence
            </Micro>
          </div>

          <div className="hidden items-center gap-7 md:flex">
            <Micro>Connect</Micro>
            <Micro>Model</Micro>
            <Micro>Analyze</Micro>
            <Micro>Decide</Micro>
          </div>
        </div> */}

        {/* CENTER HERO */}

        <div className="mx-auto max-w-[1150px] pt-20 text-center">
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
            <Activity
              size={11}
              className="text-[#c4b5fd]"
            />

            <Micro>
              Finance / Analytics / Intelligence
            </Micro>
          </motion.div> */}

          <motion.h1
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
            className="mt-9 text-[clamp(4.2rem,8.4vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.085em]"
          >
            Turn financial data

            <span className="block bg-gradient-to-r from-white/20 via-[#c4b5fd]/70 to-white/20 bg-clip-text text-transparent">
              into business intelligence.
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
            className="mx-auto mt-9 max-w-[840px] text-[14px] leading-8 text-white/[0.55]"
          >
            HYI designs financial data analytics environments
            that connect business data, financial models,
            governed metrics and analytical experiences so
            organizations can understand performance with
            greater context and clarity.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#financial-terminal"
              className="flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-medium text-black"
            >
              Explore financial intelligence

              <ArrowDown size={13} />
            </a>

            <a
              href="#capabilities"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[11px] text-white/50"
            >
              Analytics capabilities

              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        <div
          id="financial-terminal"
          className="mt-20"
        >
          <FinancialIntelligenceTerminal />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   FINANCIAL INTELLIGENCE TERMINAL
========================================================= */

function FinancialIntelligenceTerminal() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#080808] p-5 shadow-[0_40px_120px_rgba(0,0,0,.5)] md:p-7">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative">
        {/* TERMINAL HEADER */}

        <div className="flex flex-col justify-between gap-4 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
              <CircleDollarSign
                size={16}
                className="text-[#c4b5fd]"
              />
            </div>

            <div>
              <Micro>
                Financial Intelligence Terminal
              </Micro>

              <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.12em] text-white/15">
                FINANCE / PERFORMANCE / ANALYTICS
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LiveDot />

            <Micro>
              Data synchronized
            </Micro>
          </div>
        </div>

        {/* METRICS */}

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {financialMetrics.map(
            (metric, index) => (
              <motion.div
                key={metric.label}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="rounded-[15px] border border-white/[0.06] bg-[#050505] p-4"
              >
                <div className="flex items-center justify-between">
                  <Micro>{metric.label}</Micro>

                  <Activity
                    size={9}
                    className="text-[#a78bfa]"
                  />
                </div>

                <div className="mt-5 flex items-end justify-between gap-3">
                  <span className="text-[22px] font-medium tracking-[-0.05em] text-white/80">
                    {metric.value}
                  </span>

                  <span className="font-mono text-[6px] text-[#a78bfa]">
                    {metric.change}
                  </span>
                </div>
              </motion.div>
            ),
          )}
        </div>

        {/* MAIN TERMINAL */}

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.45fr_.55fr]">
          <FinancialChart />

          <FinancialBreakdown />
        </div>

        {/* LOWER TERMINAL */}

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <CashFlowModel />

          <MarginModel />

          <DataQualityModel />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FINANCIAL CHART
========================================================= */

function FinancialChart() {
  const bars = [
    38,
    46,
    41,
    58,
    54,
    65,
    62,
    73,
    69,
    78,
    75,
    88,
  ];

  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505] p-5 md:p-6">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 flex items-start justify-between">
        <div>
          <Micro>
            Financial Performance
          </Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Illustrative analytics visualization
          </p>
        </div>

        <div className="flex items-center gap-2">
          <LiveDot />
          <Micro accent>Live</Micro>
        </div>
      </div>

      {/* CHART */}

      <div className="relative z-10 mt-10 flex h-[265px] items-end gap-[6px] md:gap-3">
        {bars.map(
          (value, index) => (
            <div
              key={index}
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
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className={`relative w-full overflow-hidden rounded-t-[3px] ${
                  index === 11
                    ? "bg-[#8b5cf6]/70"
                    : "bg-white/[0.08]"
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-white/30" />
              </motion.div>
            </div>
          ),
        )}

        {/* TREND LINE */}

        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1000 260"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="financialLine"
              x1="0"
              x2="1"
            >
              <stop
                offset="0%"
                stopColor="#ffffff"
                stopOpacity=".15"
              />

              <stop
                offset="55%"
                stopColor="#c4b5fd"
                stopOpacity=".8"
              />

              <stop
                offset="100%"
                stopColor="#8b5cf6"
                stopOpacity=".9"
              />
            </linearGradient>
          </defs>

          <motion.path
            d="M10 205 C90 194 125 198 170 175 C220 150 270 170 325 142 C385 110 420 135 475 105 C535 80 575 110 630 78 C700 40 740 72 795 48 C855 25 910 42 990 15"
            fill="none"
            stroke="url(#financialLine)"
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
              duration: 2,
            }}
          />
        </svg>
      </div>

      <div className="relative z-10 mt-5 flex justify-between font-mono text-[5px] text-white/15">
        <span>JAN</span>
        <span>MAR</span>
        <span>MAY</span>
        <span>JUL</span>
        <span>SEP</span>
        <span>DEC</span>
      </div>
    </div>
  );
}

/* =========================================================
   FINANCIAL BREAKDOWN
========================================================= */

function FinancialBreakdown() {
  const items = [
    {
      label: "Product Revenue",
      value: "38%",
    },
    {
      label: "Services",
      value: "27%",
    },
    {
      label: "Enterprise",
      value: "21%",
    },
    {
      label: "Other",
      value: "14%",
    },
  ];

  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-[#050505] p-5">
      <Micro>
        Revenue Composition
      </Micro>

      <div className="relative mx-auto mt-8 flex h-[180px] w-[180px] items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border border-dashed border-white/10"
        />

        <div className="absolute inset-[18px] rounded-full border border-[#8b5cf6]/20" />

        <div className="absolute inset-[38px] rounded-full border border-white/[0.07]" />

        <div className="relative z-20 text-center">
          <CircleDollarSign
            size={23}
            strokeWidth={1}
            className="mx-auto text-[#c4b5fd]"
          />

          <span className="mt-3 block text-[21px] font-medium tracking-[-0.04em] text-white/70">
            $24.8M
          </span>

          <Micro>
            Revenue
          </Micro>
        </div>

        <motion.span
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
          <span className="absolute left-1/2 top-0 h-2 w-2 rounded-full bg-[#a78bfa] shadow-[0_0_15px_rgba(167,139,250,.8)]" />
        </motion.span>
      </div>

      <div className="mt-6 space-y-3">
        {items.map(
          (item, index) => (
            <div
              key={item.label}
              className="flex items-center gap-3"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  index === 0
                    ? "bg-[#a78bfa]"
                    : "bg-white/20"
                }`}
              />

              <span className="flex-1 text-[7px] text-white/30">
                {item.label}
              </span>

              <span className="font-mono text-[6px] text-white/40">
                {item.value}
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

/* =========================================================
   MODEL CARD
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
   CASH FLOW MODEL
========================================================= */

function CashFlowModel() {
  const values = [
    34,
    52,
    45,
    68,
    58,
    77,
    64,
    82,
  ];

  return (
    <ModelCard
      title="Cash Flow"
      Icon={RefreshCcw}
    >
      <div className="mt-7 flex h-[105px] items-end gap-2 rounded-[12px] border border-white/[0.05] bg-[#080808] p-4">
        {values.map(
          (value, index) => (
            <motion.div
              key={index}
              initial={{
                height: "5%",
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
              className={`flex-1 rounded-t-[2px] ${
                index === 7
                  ? "bg-[#8b5cf6]"
                  : "bg-white/15"
              }`}
            />
          ),
        )}
      </div>

      <div className="mt-5 flex items-end justify-between">
        <div>
          <span className="block text-[18px] font-medium tracking-[-0.04em] text-white/65">
            $8.7M
          </span>

          <span className="mt-1 block text-[7px] text-white/20">
            Illustrative position
          </span>
        </div>

        <span className="font-mono text-[6px] text-[#a78bfa]">
          +4.6%
        </span>
      </div>
    </ModelCard>
  );
}

/* =========================================================
   MARGIN MODEL
========================================================= */

function MarginModel() {
  return (
    <ModelCard
      title="Margin Intelligence"
      Icon={Gauge}
    >
      <div className="relative mx-auto mt-7 flex h-[105px] items-center justify-center">
        <svg
          viewBox="0 0 180 100"
          className="h-[100px] w-[180px]"
        >
          <path
            d="M20 90 A70 70 0 0 1 160 90"
            fill="none"
            stroke="rgba(255,255,255,.08)"
            strokeWidth="8"
            strokeLinecap="round"
          />

          <motion.path
            d="M20 90 A70 70 0 0 1 160 90"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{
              pathLength: 0,
            }}
            whileInView={{
              pathLength: 0.72,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.4,
            }}
          />
        </svg>

        <div className="absolute bottom-[8px] text-center">
          <span className="block text-[20px] font-medium tracking-[-0.05em] text-white/70">
            42.6%
          </span>

          <Micro>
            Margin
          </Micro>
        </div>
      </div>

      <p className="mt-5 text-[9px] leading-5 text-white/30">
        Explore profitability and margin movement across
        selected business dimensions.
      </p>
    </ModelCard>
  );
}

/* =========================================================
   DATA QUALITY MODEL
========================================================= */

function DataQualityModel() {
  const rows = [
    {
      label: "ERP",
      value: 94,
    },
    {
      label: "Accounting",
      value: 98,
    },
    {
      label: "Operations",
      value: 89,
    },
  ];

  return (
    <ModelCard
      title="Financial Data Quality"
      Icon={Database}
    >
      <div className="mt-7 space-y-5">
        {rows.map(
          (row) => (
            <div key={row.label}>
              <div className="flex items-center justify-between">
                <span className="text-[7px] text-white/25">
                  {row.label}
                </span>

                <span className="font-mono text-[6px] text-white/35">
                  {row.value}%
                </span>
              </div>

              <div className="mt-2 h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
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
                    duration: 1,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-[#6d4bd8] to-[#c4b5fd]"
                />
              </div>
            </div>
          ),
        )}
      </div>

      <p className="mt-5 text-[9px] leading-5 text-white/30">
        Illustrative monitoring view for completeness and
        analytical readiness.
      </p>
    </ModelCard>
  );
}

/* =========================================================
   INTRO
========================================================= */

function FinancialThesis() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="01">
          Financial Intelligence
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.95fr_1.05fr]">
          <h2 className="max-w-[680px] text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
            Finance has data.

            <span className="block text-white/20">
              The challenge is context.
            </span>
          </h2>

          <div className="self-end">
            <p className="text-[14px] leading-8 text-white/[0.55]">
              Financial information is often distributed
              across accounting platforms, ERP systems,
              spreadsheets, operational applications and
              analytical platforms. That fragmentation can
              make even basic business questions difficult
              to answer consistently.
            </p>

            <p className="mt-5 text-[12px] leading-7 text-white/[0.38]">
              Financial data analytics creates a connected
              analytical layer where financial measures,
              operational dimensions and business context
              can be explored through consistent models.
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
              Analytics Capabilities
            </SectionLabel>

            <h2 className="mt-9 max-w-[780px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              One financial picture.

              <span className="block text-white/20">
                Many analytical views.
              </span>
            </h2>
          </div>

          <p className="max-w-[470px] text-[12px] leading-7 text-white/40">
            Build a financial analytics foundation that
            connects data engineering, governed metrics,
            analytical models and business-facing
            intelligence.
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
   DATA PIPELINE
========================================================= */

function FinancialDataPipeline() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div className="self-center">
            <SectionLabel number="03">
              Data Foundation
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Connect the

              <span className="block bg-gradient-to-r from-white/20 to-[#b9a0ff]/70 bg-clip-text text-transparent">
                financial landscape.
              </span>
            </h2>

            <p className="mt-7 max-w-[470px] text-[12px] leading-7 text-white/40">
              Bring relevant financial and operational
              sources together before asking the business
              to trust the dashboard sitting on top of
              them.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {dataSources.map(
                (source) => (
                  <div
                    key={source}
                    className="flex items-center gap-3 rounded-[10px] border border-white/[0.06] bg-white/[0.015] px-4 py-3"
                  >
                    <CheckCircle2
                      size={10}
                      className="text-[#a78bfa]"
                    />

                    <span className="text-[8px] text-white/35">
                      {source}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          <DataPipelineModel />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   DATA PIPELINE MODEL
========================================================= */

function DataPipelineModel() {
  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#080808] p-6">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="relative z-10 flex items-center justify-between">
        <div>
          <Micro>
            Financial Data Pipeline
          </Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Connected analytical foundation
          </p>
        </div>

        <GitBranch
          size={13}
          className="text-[#a78bfa]"
        />
      </div>

      <div className="relative z-10 mt-12 grid min-h-[360px] grid-cols-[.8fr_.4fr_.8fr] items-center gap-4">
        {/* SOURCES */}

        <div className="space-y-3">
          {[
            "ERP",
            "Accounting",
            "CRM",
            "Payments",
          ].map(
            (item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: -20,
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
                className="rounded-[11px] border border-white/[0.07] bg-[#050505] p-4"
              >
                <div className="flex items-center gap-3">
                  <Database
                    size={10}
                    className="text-white/25"
                  />

                  <span className="text-[8px] text-white/40">
                    {item}
                  </span>
                </div>
              </motion.div>
            ),
          )}
        </div>

        {/* FLOW */}

        <div className="relative h-[280px]">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/10 via-[#8b5cf6]/60 to-white/10" />

          <motion.div
            animate={{
              top: ["0%", "95%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#c4b5fd] shadow-[0_0_14px_rgba(196,181,253,.8)]"
          />

          <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#080808]">
            <RefreshCcw
              size={16}
              className="text-[#c4b5fd]"
            />
          </div>
        </div>

        {/* OUTPUT */}

        <div className="space-y-3">
          {[
            "Revenue Model",
            "Margin Model",
            "Cash Model",
            "Executive KPIs",
          ].map(
            (item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: 20,
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
                className={`rounded-[11px] border p-4 ${
                  index === 3
                    ? "border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.05]"
                    : "border-white/[0.07] bg-[#050505]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Activity
                    size={10}
                    className={
                      index === 3
                        ? "text-[#c4b5fd]"
                        : "text-white/25"
                    }
                  />

                  <span className="text-[8px] text-white/40">
                    {item}
                  </span>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ANALYTICS ARCHITECTURE
========================================================= */

function AnalyticsArchitecture() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="04">
          Intelligence Architecture
        </SectionLabel>

        <div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[800px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
            A financial data stack

            <span className="block text-white/20">
              designed for decisions.
            </span>
          </h2>

          <p className="max-w-[450px] text-[11px] leading-7 text-white/35">
            Connect source systems, governed data,
            financial semantics and analytical experiences
            through one intentional architecture.
          </p>
        </div>

        <div className="relative mt-14 grid gap-3 lg:grid-cols-5">
          <div className="absolute left-[7%] right-[7%] top-[38px] hidden h-px bg-gradient-to-r from-[#8b5cf6]/20 via-[#c4b5fd]/45 to-[#8b5cf6]/20 lg:block" />

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
            className="absolute top-[34px] z-30 hidden h-2 w-2 rounded-full bg-[#c4b5fd] lg:block"
          />

          {analyticsLayers.map(
            (
              {
                number,
                Icon,
                title,
                text,
              },
            ) => (
              <motion.article
                key={title}
                whileHover={{
                  y: -5,
                }}
                className="relative z-20 rounded-[17px] border border-white/[0.07] bg-[#050505] p-5"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#080808]">
                  <Icon
                    size={11}
                    className="text-[#c4b5fd]"
                  />
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
            ),
          )}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   KPI INTELLIGENCE
========================================================= */

function KPIIntelligence() {
  const metrics = [
    {
      name: "Revenue Growth",
      current: "8.4%",
      width: 84,
    },
    {
      name: "Gross Margin",
      current: "42.6%",
      width: 68,
    },
    {
      name: "Operating Efficiency",
      current: "74%",
      width: 74,
    },
    {
      name: "Cash Conversion",
      current: "61%",
      width: 61,
    },
  ];

  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-[24px] border border-white/[0.08] bg-[#080808] p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <Micro>
                  Executive KPI Matrix
                </Micro>

                <p className="mt-2 text-[9px] text-white/25">
                  Illustrative financial metrics
                </p>
              </div>

              <Gauge
                size={14}
                className="text-[#a78bfa]"
              />
            </div>

            <div className="mt-10 space-y-7">
              {metrics.map(
                (metric, index) => (
                  <div key={metric.name}>
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-[9px] text-white/30">
                          {metric.name}
                        </span>

                        <span className="mt-2 block text-[20px] font-medium tracking-[-0.04em] text-white/65">
                          {metric.current}
                        </span>
                      </div>

                      <span className="font-mono text-[6px] text-white/20">
                        KPI-0{index + 1}
                      </span>
                    </div>

                    <div className="mt-4 h-[4px] overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: `${metric.width}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1,
                          delay: index * 0.08,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-[#6d4bd8] to-[#c4b5fd]"
                      />
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="self-center">
            <SectionLabel number="05">
              KPI Intelligence
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Define the metric.

              <span className="block text-white/20">
                Then trust the view.
              </span>
            </h2>

            <p className="mt-7 max-w-[470px] text-[12px] leading-7 text-white/40">
              Dashboards become more useful when the
              organization agrees on what each financial
              metric means, how it is calculated and which
              underlying data supports it.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Governed metric definitions",
                "Consistent financial dimensions",
                "Traceable analytical logic",
                "Role-specific business views",
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
   INTELLIGENCE AREAS
========================================================= */

function IntelligenceAreas() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <div className="mx-auto max-w-[900px] text-center">
          <SectionLabelCenter />

          <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
            Explore finance

            <span className="block text-white/20">
              from every angle.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[650px] text-[12px] leading-7 text-white/40">
            Design analytical experiences around the
            financial questions teams need to understand,
            rather than forcing every decision through one
            generic dashboard.
          </p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {intelligenceAreas.map(
            (area, index) => (
              <motion.article
                key={area}
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
                whileHover={{
                  y: -4,
                }}
                className="group flex min-h-[145px] flex-col justify-between rounded-[16px] border border-white/[0.07] bg-[#050505] p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[6px] text-[#a78bfa]">
                    0{index + 1}
                  </span>

                  <ArrowRight
                    size={10}
                    className="text-white/15 transition-all group-hover:translate-x-1 group-hover:text-[#a78bfa]"
                  />
                </div>

                <h3 className="text-[14px] font-medium tracking-[-0.025em] text-white/60">
                  {area}
                </h3>
              </motion.article>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}

function SectionLabelCenter() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-10 bg-white/10" />

      <Micro>
        06 / Financial Views
      </Micro>

      <span className="h-px w-10 bg-white/10" />
    </div>
  );
}

/* =========================================================
   AI ANALYTICS
========================================================= */

function AIAnalytics() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#080808]">
          <div className="grid lg:grid-cols-[.85fr_1.15fr]">
            <div className="p-7 md:p-12">
              <SectionLabel number="07">
                AI + Finance
              </SectionLabel>

              <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
                Add intelligence

                <span className="block bg-gradient-to-r from-white/20 to-[#b9a0ff]/70 bg-clip-text text-transparent">
                  to the analytical layer.
                </span>
              </h2>

              <p className="mt-7 max-w-[520px] text-[12px] leading-7 text-white/40">
                Selected AI and analytical techniques can
                help teams explore financial relationships,
                identify unusual movement and investigate
                patterns across complex datasets while
                maintaining appropriate human oversight.
              </p>
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
  return (
    <div className="relative min-h-[480px] overflow-hidden border-t border-white/[0.07] lg:border-l lg:border-t-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-[310px] w-[310px] items-center justify-center">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
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
              duration: 17,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[35px] rounded-full border border-dashed border-white/10"
          />

          <div className="absolute inset-[70px] rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.025]" />

          <div className="relative z-20 flex h-[110px] w-[110px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#050505]">
            <BrainCircuit
              size={27}
              strokeWidth={1}
              className="text-[#c4b5fd]"
            />

            <span className="mt-3 font-mono text-[6px] tracking-[0.14em] text-white/35">
              FINANCE AI
            </span>
          </div>

          <AIOrbitNode
            className="left-[-18px] top-[65px]"
            text="REVENUE"
          />

          <AIOrbitNode
            className="right-[-15px] top-[90px]"
            text="MARGIN"
          />

          <AIOrbitNode
            className="bottom-[20px] left-[20px]"
            text="COST"
          />

          <AIOrbitNode
            className="bottom-[-4px] right-[60px]"
            text="CASH"
          />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[8px]"
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_16px_rgba(196,181,253,.8)]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function AIOrbitNode({
  className,
  text,
}: {
  className: string;
  text: string;
}) {
  return (
    <motion.div
      animate={{
        y: [-3, 3, -3],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
      }}
      className={`absolute z-30 rounded-full border border-white/[0.08] bg-[#080808] px-3 py-2 ${className}`}
    >
      <span className="font-mono text-[5px] tracking-[0.1em] text-white/30">
        {text}
      </span>
    </motion.div>
  );
}

/* =========================================================
   WORKFLOW
========================================================= */

function AnalyticsWorkflow() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="08">
          Analytics Workflow
        </SectionLabel>

        <div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[800px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
            From source system

            <span className="block text-white/20">
              to financial decision.
            </span>
          </h2>

          <p className="max-w-[440px] text-[11px] leading-7 text-white/35">
            Treat financial analytics as an operating
            system rather than a collection of disconnected
            dashboards.
          </p>
        </div>

        <div className="relative mt-14 grid gap-3 lg:grid-cols-5">
          <div className="absolute left-[7%] right-[7%] top-[36px] hidden h-px bg-gradient-to-r from-[#8b5cf6]/20 via-[#c4b5fd]/45 to-[#8b5cf6]/20 lg:block" />

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
            className="absolute top-[32px] z-30 hidden h-2 w-2 rounded-full bg-[#c4b5fd] lg:block"
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
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#080808]">
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
   DECISION SECTION
========================================================= */

function DecisionIntelligence() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div className="self-center">
            <SectionLabel number="09">
              Decision Intelligence
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Numbers explain

              <span className="block text-white/20">
                what happened.
              </span>

              <span className="block text-white/55">
                Context explains why.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[12px] leading-7 text-white/40">
              Connect financial metrics with operational
              dimensions so business leaders can move from
              observing a KPI to understanding the factors
              associated with its movement.
            </p>
          </div>

          <DecisionModel />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   DECISION MODEL
========================================================= */

function DecisionModel() {
  const rows = [
    {
      name: "Revenue",
      value: "$24.8M",
      status: "UP",
    },
    {
      name: "Margin",
      value: "42.6%",
      status: "UP",
    },
    {
      name: "Operating Cost",
      value: "$11.2M",
      status: "DOWN",
    },
    {
      name: "Cash",
      value: "$8.7M",
      status: "UP",
    },
  ];

  return (
    <div className="rounded-[24px] border border-white/[0.08] bg-[#080808] p-6">
      <div className="flex items-center justify-between">
        <div>
          <Micro>
            Executive Intelligence
          </Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Illustrative decision workspace
          </p>
        </div>

        <Eye
          size={13}
          className="text-[#a78bfa]"
        />
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {rows.map(
          (row, index) => (
            <motion.div
              key={row.name}
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="rounded-[14px] border border-white/[0.06] bg-[#050505] p-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[8px] text-white/30">
                  {row.name}
                </span>

                <span className="font-mono text-[5px] text-[#a78bfa]">
                  {row.status}
                </span>
              </div>

              <span className="mt-5 block text-[26px] font-medium tracking-[-0.055em] text-white/70">
                {row.value}
              </span>

              <div className="mt-5 flex h-8 items-end gap-1">
                {[28, 42, 34, 56, 48, 68, 61, 76].map(
                  (height, barIndex) => (
                    <motion.span
                      key={barIndex}
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
                        delay:
                          index * 0.08 +
                          barIndex * 0.025,
                      }}
                      className={`flex-1 rounded-t-[1px] ${
                        barIndex === 7
                          ? "bg-[#8b5cf6]"
                          : "bg-white/10"
                      }`}
                    />
                  ),
                )}
              </div>
            </motion.div>
          ),
        )}
      </div>
    </div>
  );
}

/* =========================================================
   PRINCIPLES
========================================================= */

function Principles() {
  const principles = [
    "Define financial metrics before visualizing them.",
    "Keep analytical logic traceable to underlying data.",
    "Connect finance with operational business context.",
    "Design dashboards around decisions, not decoration.",
    "Apply access controls appropriate to financial data.",
    "Keep human judgment central to important decisions.",
  ];

  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <SectionLabel number="10">
              Principles
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Intelligence

              <span className="block text-white/20">
                people can trust.
              </span>
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map(
              (principle, index) => (
                <motion.div
                  key={principle}
                  initial={{
                    opacity: 0,
                    y: 10,
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
                  className="flex min-h-[120px] items-start gap-4 rounded-[14px] border border-white/[0.06] bg-[#050505] p-5"
                >
                  <CheckCircle2
                    size={12}
                    className="mt-1 shrink-0 text-[#a78bfa]"
                  />

                  <p className="text-[10px] leading-6 text-white/40">
                    {principle}
                  </p>
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
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.06] blur-[220px]" />

      <Container className="relative text-center">
        {/* MINI FINANCE MODEL */}

        <div className="mx-auto flex w-fit items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#080808]">
            <Database
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

        <h2 className="mx-auto mt-12 max-w-[1100px] text-[clamp(3.7rem,7vw,7.2rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
          Know the numbers.

          <span className="block bg-gradient-to-r from-[#c4b5fd] via-white/40 to-white/15 bg-clip-text text-transparent">
            Understand the business.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[720px] text-[12px] leading-7 text-white/[0.43]">
          Build a financial data analytics environment
          that connects information, metrics, analytical
          models and decision experiences through one
          governed financial intelligence foundation.
        </p>

        <a
          href="#financial-terminal"
          className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full bg-white px-9 py-4 text-[11px] font-medium text-black"
        >
          Explore Financial Intelligence

          <ArrowRight size={13} />
        </a>
      </Container>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function FinancialDataAnalyticsClient() {
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
      {/* PAGE PROGRESS */}

      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#7c3aed] via-[#c4b5fd] to-[#6d4bd8]"
      />

      <Hero />

      <FinancialThesis />

      <Capabilities />

      <FinancialDataPipeline />

      <AnalyticsArchitecture />

      <KPIIntelligence />

      <IntelligenceAreas />

      <AIAnalytics />

      <AnalyticsWorkflow />

      <DecisionIntelligence />

      <Principles />

      <FinalCTA />
    </div>
  );
}