"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  Activity,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  CircleDot,
  Cloud,
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

import type { ReactNode } from "react";

/* =========================================================
   DATA
========================================================= */

const monthlyBars = [
  { month: "Jan", value: 43 },
  { month: "Feb", value: 31 },
  { month: "Mar", value: 56 },
  { month: "Apr", value: 68 },
  { month: "May", value: 44 },
  { month: "Jun", value: 72 },
  { month: "Jul", value: 38 },
  { month: "Aug", value: 84, active: true },
  { month: "Sep", value: 47 },
  { month: "Oct", value: 63 },
  { month: "Nov", value: 52 },
  { month: "Dec", value: 69 },
];

const financeFeatures = [
  {
    number: "01",
    title: "Financial Intelligence",
    description:
      "Bring financial data, operational signals and AI analytics together to help teams understand performance, trends and emerging financial patterns.",
    Icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Forecasting & Planning",
    description:
      "Use historical information and contextual signals to support scenario planning, forecasting and more informed financial decisions.",
    Icon: Activity,
  },
  {
    number: "03",
    title: "Risk-Aware Decisions",
    description:
      "Combine financial analysis with risk context, anomaly signals and governance controls to support responsible decision workflows.",
    Icon: ShieldCheck,
  },
];

const financeCapabilities = [
  {
    title: "AI Financial Analytics",
    text: "Analyze financial and operational information through unified analytical workflows.",
  },
  {
    title: "Predictive Forecasting",
    text: "Explore possible future financial conditions using historical patterns and relevant signals.",
  },
  {
    title: "Cash Flow Intelligence",
    text: "Create clearer visibility into inflows, outflows and liquidity-related information.",
  },
  {
    title: "Cost Intelligence",
    text: "Understand cost structures, movements and operational drivers through connected data.",
  },
  {
    title: "Financial Risk Signals",
    text: "Surface unusual patterns and contextual indicators that may require additional review.",
  },
  {
    title: "Automated Reporting",
    text: "Streamline recurring financial reporting and provide consistent decision-ready information.",
  },
];

const transactions = [
  {
    name: "Cloud Infrastructure",
    category: "Technology",
    amount: "$18,420",
    status: "Reviewed",
  },
  {
    name: "Enterprise Operations",
    category: "Operations",
    amount: "$12,860",
    status: "Analyzed",
  },
  {
    name: "Data Platform",
    category: "Infrastructure",
    amount: "$9,540",
    status: "Reviewed",
  },
  {
    name: "AI Services",
    category: "Technology",
    amount: "$16,290",
    status: "Analyzed",
  },
];

const intelligenceFlow = [
  {
    Icon: Database,
    number: "01",
    title: "Connect",
    text: "Bring relevant financial information into a governed analytical environment.",
  },
  {
    Icon: Layers3,
    number: "02",
    title: "Structure",
    text: "Organize financial data into consistent and usable analytical models.",
  },
  {
    Icon: BrainCircuit,
    number: "03",
    title: "Analyze",
    text: "Apply analytical models and AI-assisted intelligence to identify patterns.",
  },
  {
    Icon: Activity,
    number: "04",
    title: "Forecast",
    text: "Explore trends and possible future financial scenarios.",
  },
  {
    Icon: ShieldCheck,
    number: "05",
    title: "Govern",
    text: "Keep financial decision workflows aligned with appropriate controls.",
  },
  {
    Icon: Workflow,
    number: "06",
    title: "Act",
    text: "Turn analytical insight into structured business decision workflows.",
  },
];

const financePrinciples = [
  "Keep financial data connected and traceable.",
  "Treat AI output as decision support rather than unquestioned truth.",
  "Maintain human review for material financial decisions.",
  "Separate observed financial data from forecasts and scenarios.",
  "Monitor model assumptions as business conditions change.",
  "Apply appropriate access controls to sensitive financial information.",
  "Keep analytical workflows explainable to relevant stakeholders.",
  "Measure business outcomes, not only model performance.",
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

function TinyLabel({
  children,
  purple = false,
}: {
  children: ReactNode;
  purple?: boolean;
}) {
  return (
    <span
      className={`font-mono text-[8px] uppercase tracking-[0.16em] ${
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

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[8px] text-[#a78bfa]">
        {number}
      </span>

      <span className="h-px w-10 bg-white/15" />

      <TinyLabel>{children}</TinyLabel>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  const { scrollY } = useScroll();

  const dashboardY = useTransform(scrollY, [0, 700], [0, 80]);
  const dashboardScale = useTransform(scrollY, [0, 700], [1, 0.96]);
  const titleY = useTransform(scrollY, [0, 500], [0, 55]);
  const titleOpacity = useTransform(scrollY, [0, 500], [1, 0.35]);

  return (
    <section className="relative overflow-hidden bg-black px-5 md:px-10 ">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "75px 75px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.11, 0.05],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[620px] h-[650px] w-[950px] -translate-x-1/2 rounded-full bg-[#6d28d9] blur-[220px]"
      />

      <Container className="relative">
        <motion.div
          style={{
            y: titleY,
            opacity: titleOpacity,
          }}
          className="mx-auto max-w-[1000px] text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/[0.025] px-5 py-2.5"
          >
            <Zap size={11} className="text-[#c4b5fd]" />

            <span className="text-[11px] text-white/60">
              Our AI finance intelligence just landed
            </span>
          </motion.div>

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
              duration: 0.85,
              delay: 0.1,
            }}
            className="mx-auto mt-8 max-w-[950px] text-[clamp(3rem,2.5vw,5.8rem)] font-semibold leading-[0.96] tracking-[-0.065em]"
          >
            AI-Powered Finance For

            <span className="block text-white/70">
              Smarter Financial Decisions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.35,
              duration: 0.7,
            }}
            className="mx-auto mt-7 max-w-[750px] text-[18px] leading-7 text-white/45"
          >
            Connect financial data, AI intelligence, forecasting and
            risk-aware workflows to help finance teams understand what is
            happening, explore what may happen next and make better-informed
            business decisions.
          </motion.p>

          <motion.a
            href="#finance-intelligence"
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              delay: 0.45,
            }}
            className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[12px] font-medium text-white shadow-[0_0_45px_rgba(124,58,237,.25)]"
          >
            Talk To Our Expert
            <ArrowRight size={13} />
          </motion.a>
        </motion.div>

        <motion.div
          style={{
            y: dashboardY,
            scale: dashboardScale,
          }}
          className="mt-16"
        >
          <FinanceDashboard />
        </motion.div>
      </Container>
    </section>
  );
}

/* =========================================================
   MAIN FINANCE DASHBOARD
========================================================= */

function FinanceDashboard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 1,
        delay: 0.25,
      }}
      className="relative overflow-hidden rounded-[28px] border border-white/[0.18] bg-[#030303] shadow-[0_40px_120px_rgba(0,0,0,.8)]"
    >
      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute top-0 z-20 h-px w-1/2 bg-gradient-to-r from-transparent via-[#a78bfa] to-transparent"
      />

      <div className="flex items-center justify-between border-b border-white/[0.15] px-6 py-5">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[#ef6461]" />
          <span className="h-3 w-3 rounded-full bg-[#d7a64a]" />
          <span className="h-3 w-3 rounded-full bg-[#70a75a]" />

          <span className="ml-5 text-white/25">◧</span>
          <span className="ml-4 text-white/55">‹</span>
          <span className="text-white/30">›</span>
        </div>

        <div className="flex items-center gap-2 text-white/40">
          <ShieldCheck size={11} />

          <span className="text-[9px]">
            HYI.AI FINANCE INTELLIGENCE
          </span>
        </div>

        <div className="hidden items-center gap-5 text-white/30 sm:flex">
          <RefreshCcw size={13} />
          <Cloud size={13} />
          <CircleDot size={13} />
        </div>
      </div>

      <div className="grid min-h-[680px] lg:grid-cols-[90px_1fr]">
        <DashboardSidebar />

        <div className="p-6 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <TinyLabel>AI Finance Workspace</TinyLabel>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                AI Powered Finance
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <Eye size={15} className="text-white/30" />

              <motion.button
                whileHover={{ scale: 1.04 }}
                className="rounded-full border border-[#a78bfa]/30 bg-[#7046e6] px-6 py-2.5 text-[10px]"
              >
                + Create Scenario
              </motion.button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 xl:grid-cols-[1.15fr_.8fr_.8fr]">
            <FinanceChart />

            <MetricPanel
              title="Forecast Confidence"
              value="86%"
              note="Illustrative model signal"
              progress={86}
            />

            <MetricPanel
              title="Cost Visibility"
              value="74%"
              note="Illustrative interface metric"
              progress={74}
            />
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1.45fr_.75fr]">
            <TransactionPanel />
            <DecisionPanel />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   SIDEBAR
========================================================= */

function DashboardSidebar() {
  const icons = [
    BrainCircuit,
    Activity,
    CircleDollarSign,
    Database,
    Network,
    ShieldCheck,
  ];

  return (
    <div className="hidden border-r border-white/[0.12] lg:block">
      <div className="flex h-full flex-col items-center py-7">
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(124,58,237,0)",
              "0 0 30px rgba(124,58,237,.4)",
              "0 0 0 rgba(124,58,237,0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="relative flex h-8 w-8 items-center justify-center rounded-[10px] bg-white"
        >
          <div className="h-3 w-3 rounded-full bg-[#7046e6]" />

          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#9d7aff]" />
        </motion.div>

        <div className="mt-16 space-y-8">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.2,
                color: "#c4b5fd",
              }}
              className={
                index === 0
                  ? "text-[#c4b5fd]"
                  : "text-white/25"
              }
            >
              <Icon size={17} strokeWidth={1.5} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FINANCE CHART
========================================================= */

function FinanceChart() {
  return (
    <div className="rounded-[18px] border border-white/[0.08] bg-[#070707] p-5">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-[16px] font-medium text-white/75">
            Financial Performance
          </span>

          <span className="mt-2 block text-[9px] text-white/25">
            AI-assisted trend visualization
          </span>
        </div>

        <div className="rounded-full border border-white/10 px-3 py-1">
          <TinyLabel>1 Year</TinyLabel>
        </div>
      </div>

      <div className="mt-7 flex h-[220px] items-end gap-2 border-b border-white/[0.08]">
        {monthlyBars.map((item, index) => (
          <div
            key={item.month}
            className="flex h-full flex-1 flex-col justify-end"
          >
            <motion.div
              initial={{
                height: 0,
              }}
              whileInView={{
                height: `${item.value}%`,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              whileHover={{
                scaleY: 1.05,
              }}
              style={{
                transformOrigin: "bottom",
              }}
              className={`relative rounded-t-full ${
                item.active
                  ? "bg-[#7046e6]"
                  : "bg-white/[0.18]"
              }`}
            >
              {item.active && (
                <>
                  <motion.span
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 1.7,
                      repeat: Infinity,
                    }}
                    className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full border border-white bg-[#a78bfa]"
                  />

                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2d2533] px-3 py-1.5 text-[8px] text-white/65">
                    AI SIGNAL
                  </div>
                </>
              )}
            </motion.div>

            <span className="mt-3 text-center text-[7px] text-white/20">
              {item.month}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   METRIC PANEL
========================================================= */

function MetricPanel({
  title,
  value,
  note,
  progress,
}: {
  title: string;
  value: string;
  note: string;
  progress: number;
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="rounded-[18px] border border-white/[0.08] bg-[#070707] p-5"
    >
      <TinyLabel>{title}</TinyLabel>

      <span className="mt-8 block text-5xl font-medium tracking-[-0.06em]">
        {value}
      </span>

      <span className="mt-3 block text-[8px] text-white/25">
        {note}
      </span>

      <div className="mt-8 flex gap-[4px]">
        {Array.from({ length: 14 }).map((_, index) => (
          <motion.span
            key={index}
            initial={{
              height: 5,
            }}
            animate={{
              height: [5, 22, 10, 18, 5],
            }}
            transition={{
              duration: 2.3,
              repeat: Infinity,
              delay: index * 0.06,
            }}
            className={`w-[3px] ${
              index < Math.round((progress / 100) * 14)
                ? "bg-[#8b5cf6]"
                : "bg-white/15"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* =========================================================
   TRANSACTION PANEL
========================================================= */

function TransactionPanel() {
  return (
    <div className="rounded-[18px] border border-white/[0.08] bg-[#070707] p-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[15px] font-medium text-white/75">
            Finance Intelligence Feed
          </span>

          <span className="mt-1 block text-[8px] text-white/20">
            Connected financial activity
          </span>
        </div>

        <TinyLabel>Live</TinyLabel>
      </div>

      <div className="mt-5 space-y-2">
        {transactions.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{
              opacity: 0,
              x: -15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
            }}
            className="grid grid-cols-[1fr_.8fr_.6fr] items-center rounded-[10px] border border-white/[0.05] bg-black p-3"
          >
            <div>
              <span className="block text-[9px] text-white/55">
                {item.name}
              </span>

              <span className="mt-1 block text-[6px] text-white/20">
                {item.category}
              </span>
            </div>

            <span className="text-[8px] text-white/35">
              {item.amount}
            </span>

            <span className="text-right font-mono text-[6px] text-[#a78bfa]">
              {item.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   DECISION PANEL
========================================================= */

function DecisionPanel() {
  return (
    <div className="relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#070707] p-5">
      <div className="absolute -right-24 -top-24 h-[220px] w-[220px] rounded-full bg-[#7046e6]/10 blur-[80px]" />

      <div className="relative">
        <TinyLabel>AI Decision Support</TinyLabel>

        <div className="mt-8 flex items-center justify-center">
          <div className="relative flex h-[145px] w-[145px] items-center justify-center">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
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
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[16px] rounded-full border border-white/10"
            />

            <div className="flex h-[85px] w-[85px] items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.05] shadow-[0_0_50px_rgba(124,58,237,.18)]">
              <BrainCircuit
                size={25}
                className="text-[#c4b5fd]"
              />
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-[9px] leading-5 text-white/30">
          AI organizes financial signals to support structured human
          decision-making.
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   INTRO / PURPLE ANALYTICS SECTION
========================================================= */

function FinanceIntelligence() {
  return (
    <section
      id="finance-intelligence"
      className="relative overflow-hidden bg-black px-5 py-28 md:px-10"
    >
      <motion.div
        animate={{
          x: ["-5%", "5%", "-5%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-0 h-[750px] w-full bg-[radial-gradient(circle_at_50%_40%,rgba(91,33,182,.45),transparent_55%)]"
      />

      <Container className="relative">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
            What Is AI-Powered Finance?
          </h2>

          <p className="mx-auto mt-5 max-w-[1000px] text-[13px] leading-7 text-white/55">
            AI-powered finance combines financial data, analytical models,
            automation and intelligent workflows to help organizations
            understand performance, explore possible future scenarios,
            identify relevant risks and provide decision-makers with clearer
            financial context.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-[980px]">
          <FinanceOverviewCard />

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.25,
            }}
            className="absolute -left-4 top-[120px] hidden w-[280px] rounded-[20px] border border-white/[0.12] bg-[#180b22]/95 p-5 shadow-2xl backdrop-blur-xl md:block"
          >
            <TinyLabel>Finance Scenario</TinyLabel>

            <span className="mt-5 block text-xl font-medium">
              Planning Model
            </span>

            <div className="mt-5 flex items-center justify-between">
              <span className="text-[9px] text-white/40">
                Scenario
              </span>

              <span className="rounded-full bg-[#7046e6] px-4 py-1.5 text-[8px]">
                Optimized
              </span>
            </div>

            <div className="mt-5 flex gap-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  animate={{
                    opacity: [0.25, 1, 0.25],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: item * 0.12,
                  }}
                  className="h-2 flex-1 rounded-full bg-[#8b5cf6]"
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.35,
            }}
            className="absolute -right-4 top-[90px] hidden w-[250px] rounded-[20px] border border-white/[0.12] bg-[#220b2b]/95 p-5 shadow-2xl backdrop-blur-xl md:block"
          >
            <TinyLabel>AI Forecast</TinyLabel>

            <span className="mt-5 block text-4xl font-medium">
              86
            </span>

            <span className="mt-2 block text-[9px] text-white/40">
              Illustrative confidence signal
            </span>

            <MiniLine />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   OVERVIEW CARD
========================================================= */

function FinanceOverviewCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.94,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
      className="rounded-[22px] border border-white/[0.12] bg-[#120b16]/90 p-7 backdrop-blur"
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row">
        <div>
          <span className="text-lg font-medium text-white/70">
            Financial Intelligence Overview
          </span>

          <span className="mt-4 block text-[11px] text-white/40">
            Connected financial scenario
          </span>

          <span className="mt-2 block text-3xl font-semibold">
            AI ANALYSIS
          </span>
        </div>

        <div className="flex h-fit gap-5 text-[10px] text-white/50">
          <span>3 Month</span>
          <span>6 Month</span>

          <span className="rounded-full bg-[#7046e6] px-4 py-1.5 text-white">
            1 Year
          </span>
        </div>
      </div>

      <div className="mt-8 flex h-[250px] items-end gap-3 border-b border-white/10">
        {monthlyBars.map((item, index) => (
          <div
            key={item.month}
            className="flex h-full flex-1 flex-col justify-end"
          >
            <motion.div
              initial={{ height: 0 }}
              whileInView={{
                height: `${item.value}%`,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: index * 0.04,
              }}
              className={`rounded-t-full ${
                item.active
                  ? "bg-[#7046e6]"
                  : "bg-white/[0.20]"
              }`}
            />

            <span className="mt-3 text-center text-[8px] text-white/30">
              {item.month}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* =========================================================
   MINI LINE
========================================================= */

function MiniLine() {
  return (
    <svg
      viewBox="0 0 160 50"
      className="mt-5 h-[45px] w-full"
      fill="none"
    >
      <motion.path
        d="M2 39 L20 25 L34 31 L49 11 L63 26 L78 7 L94 21 L110 12 L127 29 L143 17 L158 24"
        stroke="#8b5cf6"
        strokeWidth="2"
        initial={{
          pathLength: 0,
        }}
        whileInView={{
          pathLength: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.7,
        }}
      />
    </svg>
  );
}

/* =========================================================
   SMART FINANCE RECOMMENDATIONS
========================================================= */

function SmartFinanceRecommendations() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10">
      <div className="absolute bottom-0 left-1/2 h-[450px] w-[900px] -translate-x-1/2 rounded-full bg-[#5b21b6]/15 blur-[160px]" />

      <Container className="relative">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold tracking-[-0.04em]">
            Smarter Financial Intelligence
          </h2>

          <p className="mx-auto mt-5 max-w-[1000px] text-[13px] leading-7 text-white/50">
            Instead of presenting disconnected financial information, the
            platform can organize relevant signals into a clearer analytical
            view for forecasting, planning, monitoring and human
            decision-making.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {financeFeatures.map((item, index) => (
            <FinanceFeatureCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   FEATURE CARD
========================================================= */

function FinanceFeatureCard({
  item,
  index,
}: {
  item: (typeof financeFeatures)[number];
  index: number;
}) {
  const Icon = item.Icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -10,
      }}
      className="group relative min-h-[520px] overflow-hidden rounded-[24px] border border-white/[0.16] bg-[#080a15]"
    >
      <motion.div
        animate={{
          opacity: [0.12, 0.28, 0.12],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: index * 0.4,
        }}
        className="absolute -bottom-24 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#7046e6] blur-[100px]"
      />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative flex h-full min-h-[520px] flex-col p-7">
        <div className="flex items-center justify-between">
          <TinyLabel>AI Finance / {item.number}</TinyLabel>

          <CircleDot size={11} className="text-[#8b5cf6]" />
        </div>

        <div className="flex flex-1 items-center justify-center">
          {index === 0 && <OrbitFinance />}

          {index === 1 && <DecisionNetwork />}

          {index === 2 && <ForecastModel />}
        </div>

        <div>
          <h3 className="text-xl font-medium">
            {item.title}
          </h3>

          <p className="mt-4 text-[12px] leading-7 text-white/50">
            {item.description}
          </p>

          <div className="mt-5 flex items-center gap-2 text-[8px] text-[#c4b5fd]">
            <Icon size={11} />
            AI POWERED FINANCE
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   CARD MODEL 1
========================================================= */

function OrbitFinance() {
  return (
    <div className="relative h-[260px] w-[260px]">
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          animate={{
            rotate: ring % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 15 + ring * 5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            inset: `${ring * 32}px`,
          }}
          className="absolute rounded-full border border-white/[0.10]"
        >
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#8b5cf6]" />
        </motion.div>
      ))}

      <div className="absolute left-1/2 top-1/2 flex h-80px w-80px -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#7046e6]/10 shadow-[0_0_50px_rgba(124,58,237,.25)]">
          <CircleDollarSign
            size={26}
            className="text-[#c4b5fd]"
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CARD MODEL 2
========================================================= */

function DecisionNetwork() {
  const points = [
    ["15%", "25%"],
    ["72%", "20%"],
    ["80%", "68%"],
    ["20%", "75%"],
  ];

  return (
    <div className="relative h-[260px] w-full">
      <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#7046e6] shadow-[0_0_70px_rgba(124,58,237,.5)]">
        <BrainCircuit size={27} />
      </div>

      {points.map(([left, top], index) => (
        <motion.div
          key={index}
          animate={{
            y: [-5, 5, -5],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 3 + index * 0.3,
            repeat: Infinity,
          }}
          style={{
            left,
            top,
          }}
          className="absolute flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0c0e18]"
        >
          <span className="h-2 w-2 rounded-full bg-[#8b5cf6]" />
        </motion.div>
      ))}

      <svg className="absolute inset-0 h-full w-full">
        {[
          ["25%", "30%", "50%", "50%"],
          ["75%", "25%", "50%", "50%"],
          ["78%", "70%", "50%", "50%"],
          ["25%", "75%", "50%", "50%"],
        ].map((line, index) => (
          <motion.line
            key={index}
            x1={line[0]}
            y1={line[1]}
            x2={line[2]}
            y2={line[3]}
            stroke="rgba(139,92,246,.35)"
            strokeWidth="1"
            strokeDasharray="5 7"
            initial={{
              pathLength: 0,
            }}
            whileInView={{
              pathLength: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: index * 0.1,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/* =========================================================
   CARD MODEL 3
========================================================= */

function ForecastModel() {
  return (
    <div className="relative flex h-[260px] w-full items-center justify-center">
      <div className="w-full max-w-[300px]">
        <MiniLine />

        <div className="mt-5 grid grid-cols-7 gap-2">
          {[40, 60, 38, 80, 54, 72, 91].map((value, index) => (
            <motion.div
              key={index}
              initial={{
                height: 0,
              }}
              whileInView={{
                height: value,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className={
                index === 6
                  ? "rounded-t-full bg-[#7046e6]"
                  : "rounded-t-full bg-white/15"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CAPABILITIES
========================================================= */

function Capabilities() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#321052_0%,#100614_36%,#000_72%)] px-5 py-28 md:px-10">
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <SectionLabel number="03">
            Finance Capabilities
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[900px] text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Transparent Financial Intelligence & Decision Support
          </h2>

          <p className="mx-auto mt-5 max-w-[900px] text-[13px] leading-7 text-white/50">
            Build connected financial workflows that help finance,
            operations and leadership teams work from clearer data and a
            shared analytical context.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {financeCapabilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.07,
              }}
              whileHover={{
                y: -5,
                borderColor: "rgba(167,139,250,.35)",
              }}
              className="rounded-[20px] border border-white/[0.10] bg-black/50 p-6 backdrop-blur"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[7px] text-[#a78bfa]">
                  0{index + 1}
                </span>

                <ChevronRight
                  size={12}
                  className="text-white/20"
                />
              </div>

              <h3 className="mt-8 text-lg font-medium">
                {item.title}
              </h3>

              <p className="mt-4 text-[11px] leading-6 text-white/45">
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
   LARGE FINANCE CARDS
========================================================= */

function FinanceControl() {
  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold tracking-[-0.04em]">
            AI Finance Planning & Control
          </h2>

          <p className="mx-auto mt-5 max-w-[950px] text-[13px] leading-7 text-white/50">
            Combine analytical visibility, forecasting and structured
            decision workflows to help finance teams plan with greater
            context and operational clarity.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <FinancialTrackingCard />
          <PlanningCard />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   FINANCIAL TRACKING CARD
========================================================= */

function FinancialTrackingCard() {
  return (
    <motion.article
      initial={{
        opacity: 0,
        x: -35,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
      }}
      className="relative overflow-hidden rounded-[28px] border border-[#818cf8]/30 bg-[#070811] p-6"
    >
      <div className="absolute left-1/2 top-0 h-16 w-[80%] -translate-x-1/2 bg-[#7046e6]/30 blur-[45px]" />

      <div className="relative rounded-[20px] border border-white/10 bg-[#050505] p-5">
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">
            Finance Overview
          </span>

          <TinyLabel>12 Month</TinyLabel>
        </div>

        <div className="mt-7 flex h-[220px] items-end gap-3">
          {monthlyBars.slice(0, 9).map((item, index) => (
            <motion.div
              key={item.month}
              initial={{
                height: 0,
              }}
              whileInView={{
                height: `${item.value}%`,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
              }}
              className={`flex-1 rounded-t-full ${
                item.active
                  ? "bg-[#7046e6]"
                  : "bg-white/[0.18]"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative mt-7">
        <h3 className="text-xl font-medium">
          Financial Performance Intelligence
        </h3>

        <p className="mt-3 text-[12px] leading-6 text-white/50">
          Visualize financial signals, historical patterns and planning
          scenarios through a connected analytical interface.
        </p>
      </div>
    </motion.article>
  );
}

/* =========================================================
   PLANNING CARD
========================================================= */

function PlanningCard() {
  return (
    <motion.article
      initial={{
        opacity: 0,
        x: 35,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
      }}
      className="relative overflow-hidden rounded-[28px] border border-[#818cf8]/30 bg-[#070811] p-6"
    >
      <div className="absolute left-1/2 top-0 h-16 w-[80%] -translate-x-1/2 bg-[#7046e6]/30 blur-[45px]" />

      <div className="relative rounded-[20px] border border-white/10 bg-[#07070c] p-6">
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium">
            AI Financial Planning
          </span>

          <Gauge size={17} className="text-white/50" />
        </div>

        <div className="mt-8 grid grid-cols-[1fr_.6fr_.6fr] border-b border-white/[0.08] pb-3">
          <TinyLabel>Scenario</TinyLabel>
          <TinyLabel>Signal</TinyLabel>
          <TinyLabel>Status</TinyLabel>
        </div>

        <div className="mt-3 space-y-2">
          {[
            ["Growth Planning", "Strong", "Analyzed"],
            ["Cost Scenario", "Moderate", "Review"],
            ["Cash Flow Model", "Stable", "Analyzed"],
            ["Risk Scenario", "Variable", "Review"],
          ].map((row, index) => (
            <motion.div
              key={row[0]}
              initial={{
                opacity: 0,
                x: 15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="grid grid-cols-[1fr_.6fr_.6fr] items-center border-b border-white/[0.05] py-4"
            >
              <span className="text-[10px] text-white/55">
                {row[0]}
              </span>

              <span className="text-[8px] text-white/35">
                {row[1]}
              </span>

              <span className="font-mono text-[7px] text-[#a78bfa]">
                {row[2]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative mt-7">
        <h3 className="text-xl font-medium">
          Scenario-Based Financial Planning
        </h3>

        <p className="mt-3 text-[12px] leading-6 text-white/50">
          Explore alternative financial scenarios while keeping assumptions,
          signals and review status visible to relevant decision-makers.
        </p>
      </div>
    </motion.article>
  );
}

/* =========================================================
   INTELLIGENCE FLOW
========================================================= */

function IntelligenceFlow() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <Container className="relative">
        <SectionLabel number="04">
          AI Finance Operating Flow
        </SectionLabel>

        <h2 className="mt-9 max-w-[850px] text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
          Financial data becomes

          <span className="block text-white/25">
            decision intelligence.
          </span>
        </h2>

        <div className="relative mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-6">
          <div className="absolute left-[7%] right-[7%] top-[35px] hidden h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/60 to-transparent lg:block" />

          <motion.span
            animate={{
              left: ["7%", "92%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[31px] z-30 hidden h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_20px_#8b5cf6] lg:block"
          />

          {intelligenceFlow.map(
            ({ Icon, number, title, text }, index) => (
              <motion.article
                key={title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.07,
                }}
                className="relative z-20 rounded-[18px] border border-white/[0.08] bg-[#070707] p-5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-black">
                  <Icon
                    size={13}
                    className="text-[#c4b5fd]"
                  />
                </div>

                <span className="mt-8 block font-mono text-[7px] text-[#a78bfa]">
                  {number}
                </span>

                <h3 className="mt-3 text-[15px] font-medium">
                  {title}
                </h3>

                <p className="mt-4 text-[10px] leading-6 text-white/40">
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
   PRINCIPLES
========================================================= */

function FinancePrinciples() {
  return (
    <section className="border-y border-white/[0.07] bg-[#070707] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel number="05">
              Responsible Finance AI
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Intelligence with

              <span className="block text-white/25">
                financial discipline.
              </span>
            </h2>

            <p className="mt-7 max-w-[480px] text-[12px] leading-7 text-white/45">
              AI can strengthen financial analysis, but material decisions
              still need appropriate governance, traceability, human judgment
              and clear understanding of the assumptions behind analytical
              outputs.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {financePrinciples.map((item, index) => (
              <motion.div
                key={item}
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
                  delay: index * 0.05,
                }}
                whileHover={{
                  x: 4,
                }}
                className="flex items-start gap-4 rounded-[15px] border border-white/[0.07] bg-black p-5"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/25">
                  <CheckCircle2
                    size={11}
                    className="text-[#c4b5fd]"
                  />
                </div>

                <div>
                  <span className="font-mono text-[6px] text-[#8b5cf6]">
                    PRINCIPLE / {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-2 text-[10px] leading-6 text-white/45">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="bg-black px-5 py-24 md:px-10">
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[24px] border border-[#6366f1]/30 bg-[#080a16] px-6 py-20 text-center"
        >
          <motion.div
            animate={{
              x: ["-15%", "15%", "-15%"],
              opacity: [0.25, 0.55, 0.25],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
            className="absolute bottom-[-150px] left-1/2 h-[280px] w-[900px] -translate-x-1/2 rounded-full bg-[#7046e6] blur-[110px]"
          />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.04]"
          />

          <div className="relative">
            <BrainCircuit
              size={28}
              className="mx-auto text-[#c4b5fd]"
            />

            <h2 className="mt-7 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              Ready To Transform Financial Intelligence?
            </h2>

            <p className="mx-auto mt-4 max-w-[650px] text-[12px] leading-7 text-white/50">
              Bring financial data, forecasting, AI analytics and
              decision-support workflows together in a connected finance
              intelligence environment.
            </p>

            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="#finance-intelligence"
              className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[11px] font-medium shadow-[0_0_40px_rgba(124,58,237,.3)]"
            >
              Talk To Our Expert
              <ArrowRight size={12} />
            </motion.a>
          </div>
        </motion.div>

        <p className="mx-auto mt-7 max-w-[780px] text-center font-mono text-[7px] uppercase leading-5 tracking-[0.12em] text-white/15">
          Financial values, percentages, forecasts and dashboard signals
          displayed on this page are illustrative interface examples and are
          not financial advice, customer performance claims or guaranteed
          outcomes.
        </p>
      </Container>
    </section>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function AIPoweredFinanceClient() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="overflow-x-hidden bg-black text-white">
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#6d28d9] via-[#c4b5fd] to-[#7c3aed]"
      />

      <Hero />

      <FinanceIntelligence />

      <SmartFinanceRecommendations />

      <Capabilities />

      <FinanceControl />

      <IntelligenceFlow />

      <FinancePrinciples />

      <FinalCTA />
    </div>
  );
}