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
  CircleDot,
  Cloud,
  Cpu,
  Database,
  Eye,
  Gauge,
  GitBranch,
  Layers3,
  Network,
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

const gapDomains = [
  {
    Icon: ShieldCheck,
    code: "GOV",
    title: "Governance & Risk",
    current: 62,
    target: 88,
    gap: 26,
    text:
      "Identify gaps across governance structures, ownership, policies, risk management practices and security oversight.",
  },
  {
    Icon: Network,
    code: "NET",
    title: "Network Security",
    current: 71,
    target: 91,
    gap: 20,
    text:
      "Review segmentation, network controls, visibility, secure connectivity and infrastructure protection practices.",
  },
  {
    Icon: Cloud,
    code: "CLD",
    title: "Cloud Security",
    current: 54,
    target: 90,
    gap: 36,
    text:
      "Assess cloud governance, workload protection, identity controls, configuration practices and monitoring coverage.",
  },
  {
    Icon: Database,
    code: "DAT",
    title: "Data Protection",
    current: 58,
    target: 87,
    gap: 29,
    text:
      "Understand gaps in classification, access control, encryption, monitoring and sensitive information protection.",
  },
  {
    Icon: Eye,
    code: "DET",
    title: "Detection & Response",
    current: 47,
    target: 92,
    gap: 45,
    text:
      "Evaluate telemetry, detection engineering, alert investigation, incident response and operational readiness.",
  },
  {
    Icon: BrainCircuit,
    code: "INT",
    title: "Security Intelligence",
    current: 43,
    target: 82,
    gap: 39,
    text:
      "Review the use of threat intelligence, analytics, automation and contextual information in security operations.",
  },
];

const gapMatrix = [
  {
    domain: "Governance",
    current: 62,
    target: 88,
    priority: "MEDIUM",
  },
  {
    domain: "Identity",
    current: 69,
    target: 93,
    priority: "HIGH",
  },
  {
    domain: "Cloud",
    current: 54,
    target: 90,
    priority: "HIGH",
  },
  {
    domain: "Data",
    current: 58,
    target: 87,
    priority: "MEDIUM",
  },
  {
    domain: "Detection",
    current: 47,
    target: 92,
    priority: "CRITICAL",
  },
  {
    domain: "Response",
    current: 51,
    target: 89,
    priority: "HIGH",
  },
];

const process = [
  {
    number: "01",
    Icon: Eye,
    title: "Discover",
    text:
      "Understand the environment, security objectives, existing capabilities, operating practices and business context.",
  },
  {
    number: "02",
    Icon: Layers3,
    title: "Map",
    text:
      "Organize existing security capabilities across governance, technology, processes and operational domains.",
  },
  {
    number: "03",
    Icon: Gauge,
    title: "Compare",
    text:
      "Compare the current security state with an agreed target state and identify meaningful capability differences.",
  },
  {
    number: "04",
    Icon: Activity,
    title: "Analyze",
    text:
      "Evaluate gaps according to risk significance, operational impact, dependencies and implementation complexity.",
  },
  {
    number: "05",
    Icon: GitBranch,
    title: "Prioritize",
    text:
      "Sequence remediation initiatives so security improvements can be delivered in a practical and coordinated way.",
  },
  {
    number: "06",
    Icon: RefreshCcw,
    title: "Improve",
    text:
      "Track remediation progress and reassess gaps as technologies, threats and organizational priorities change.",
  },
];

const remediationItems = [
  {
    id: "GAP-001",
    title: "Detection Coverage",
    domain: "SOC",
    severity: "CRITICAL",
    progress: 34,
  },
  {
    id: "GAP-002",
    title: "Cloud Configuration",
    domain: "CLOUD",
    severity: "HIGH",
    progress: 48,
  },
  {
    id: "GAP-003",
    title: "Identity Governance",
    domain: "IAM",
    severity: "HIGH",
    progress: 57,
  },
  {
    id: "GAP-004",
    title: "Data Classification",
    domain: "DATA",
    severity: "MEDIUM",
    progress: 69,
  },
  {
    id: "GAP-005",
    title: "Incident Readiness",
    domain: "IR",
    severity: "HIGH",
    progress: 44,
  },
];

const operatingLayers = [
  {
    number: "L01",
    Icon: ShieldCheck,
    title: "Governance",
    text:
      "Policies, ownership, accountability, oversight and risk decision structures.",
  },
  {
    number: "L02",
    Icon: Cpu,
    title: "Technology",
    text:
      "Security platforms, infrastructure controls, architecture and technical safeguards.",
  },
  {
    number: "L03",
    Icon: Workflow,
    title: "Process",
    text:
      "Repeatable security processes, procedures, operational workflows and responsibilities.",
  },
  {
    number: "L04",
    Icon: Eye,
    title: "Visibility",
    text:
      "Telemetry, monitoring, asset context and security information required for informed decisions.",
  },
  {
    number: "L05",
    Icon: BrainCircuit,
    title: "Intelligence",
    text:
      "Analytics, threat context and security knowledge supporting prioritization and response.",
  },
  {
    number: "L06",
    Icon: Zap,
    title: "Automation",
    text:
      "Automated controls and orchestration that improve consistency, response speed and operational scale.",
  },
];

const principles = [
  "Start with the organization's actual environment and business context.",
  "Define the target state before evaluating the distance to it.",
  "Separate capability gaps from simple technology wish lists.",
  "Prioritize remediation according to risk and business importance.",
  "Consider governance, people, process and technology together.",
  "Make dependencies visible before sequencing transformation work.",
  "Assign ownership and measurable outcomes to remediation initiatives.",
  "Reassess gaps as the security environment continues to evolve.",
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

function TinyLabel({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
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
      <span className="font-mono text-[8px] text-[#a78bfa]">
        {number}
      </span>

      <span className="h-px w-10 bg-white/15" />

      <TinyLabel>{children}</TinyLabel>
    </div>
  );
}

function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <motion.span
        animate={{
          scale: [1, 2.4, 1],
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

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.75,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  const { scrollY } = useScroll();

  const titleY = useTransform(scrollY, [0, 700], [0, 95]);
  const titleOpacity = useTransform(scrollY, [0, 600], [1, 0.2]);

  return (
    <section className="relative overflow-hidden bg-black px-5 md:px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "82px 82px",
          maskImage:
            "linear-gradient(to bottom, black 15%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 15%, transparent 90%)",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.05, 0.16, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[560px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#6d28d9] blur-[210px]"
      />

      <Container className="relative">
        <motion.div
          style={{
            y: titleY,
            opacity: titleOpacity,
          }}
          className="mx-auto max-w-[1120px] text-center"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.025] px-5 py-2.5"
          >
            <LiveDot />

            <span className="text-[10px] text-white/55">
              Cybersecurity Gap Analysis
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 45,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.08,
            }}
            className="mx-auto mt-9 max-w-[1100px] text-[clamp(3.5rem,3.5vw,7.3rem)] font-semibold leading-[0.89] tracking-[-0.078em]"
          >
            Find what&apos;s missing.

            <span className="block text-white/65">
              Understand why.
            </span>

            <span className="block text-[#a78bfa]">
              Close the gap.
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mx-auto mt-8 max-w-[820px] text-[18px] leading-7 text-white/[0.52] "
          >
            HYI.AI Cybersecurity Gap Analysis examines the difference between
            your current security capabilities and the state your organization
            needs to reach — transforming fragmented observations into
            prioritized, actionable security improvement initiatives.
          </motion.p>

          <motion.a
            href="#gap-intelligence"
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.45,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mx-auto mt-9 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[11px] font-medium shadow-[0_0_45px_rgba(124,58,237,.28)]"
          >
            Explore Gap Intelligence

            <ArrowRight size={13} />
          </motion.a>
        </motion.div>

        <div className="mt-20">
          <GapIntelligenceConsole />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   GAP INTELLIGENCE CONSOLE
========================================================= */

function GapIntelligenceConsole() {
  return (
    <motion.div
      id="gap-intelligence"
      initial={{
        opacity: 0,
        y: 70,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 1,
        delay: 0.3,
      }}
      className="relative overflow-hidden rounded-[30px] border border-white/[0.14] bg-[#030303] shadow-[0_60px_180px_rgba(0,0,0,.9)]"
    >
      <motion.div
        animate={{
          x: ["-100%", "260%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 z-50 h-px w-[40%] bg-gradient-to-r from-transparent via-[#c4b5fd] to-transparent"
      />

      <ConsoleToolbar />

      <div className="grid min-h-[770px] lg:grid-cols-[88px_1fr]">
        <ConsoleSidebar />

        <div className="p-5 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <TinyLabel>
                Current State / Target State
              </TinyLabel>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                Cybersecurity Gap Intelligence
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2">
                <LiveDot />

                <span className="font-mono text-[7px] text-white/35">
                  ANALYSIS ACTIVE
                </span>
              </div>

              <div className="rounded-full bg-[#7046e6] px-5 py-2.5 text-[9px]">
                Generate Roadmap
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-4 xl:grid-cols-[1.35fr_.65fr]">
            <GapScanner />

            <GapSummary />
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1.25fr_.75fr]">
            <GapTimeline />

            <PrioritySignal />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ConsoleToolbar() {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.1] px-6 py-5">
      <div className="flex items-center gap-3">
        <span className="h-3 w-3 rounded-full bg-[#ed6a5e]" />
        <span className="h-3 w-3 rounded-full bg-[#f4bf4f]" />
        <span className="h-3 w-3 rounded-full bg-[#61c454]" />

        <span className="ml-5 text-white/20">◧</span>
        <span className="ml-3 text-white/40">‹</span>
        <span className="text-white/20">›</span>
      </div>

      <div className="flex items-center gap-2 text-white/35">
        <ShieldCheck size={12} />

        <span className="font-mono text-[8px]">
          HYI.AI / GAP ANALYSIS
        </span>
      </div>

      <div className="hidden items-center gap-5 text-white/25 sm:flex">
        <RefreshCcw size={13} />
        <Radio size={13} />
        <CircleDot size={13} />
      </div>
    </div>
  );
}

function ConsoleSidebar() {
  const icons: ElementType[] = [
    GitBranch,
    ShieldCheck,
    Activity,
    Layers3,
    Workflow,
    Settings2,
  ];

  return (
    <div className="hidden border-r border-white/[0.1] lg:block">
      <div className="flex h-full flex-col items-center py-7">
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(124,58,237,0)",
              "0 0 30px rgba(124,58,237,.45)",
              "0 0 0 rgba(124,58,237,0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="relative flex h-9 w-9 items-center justify-center rounded-[11px] bg-white"
        >
          <GitBranch
            size={17}
            className="text-black"
          />

          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#8b5cf6]" />
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
              <Icon
                size={17}
                strokeWidth={1.5}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   GAP SCANNER MODEL
========================================================= */

function GapScanner() {
  const rows = [
    {
      name: "Governance",
      current: 62,
      target: 88,
    },
    {
      name: "Identity",
      current: 69,
      target: 93,
    },
    {
      name: "Cloud",
      current: 54,
      target: 90,
    },
    {
      name: "Data",
      current: 58,
      target: 87,
    },
    {
      name: "Detection",
      current: 47,
      target: 92,
    },
  ];

  return (
    <div className="relative min-h-[450px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#060606] p-5">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "100% 48px",
        }}
      />

      <motion.div
        animate={{
          top: ["8%", "92%", "8%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-0 right-0 z-20 h-px bg-gradient-to-r from-transparent via-[#a78bfa]/60 to-transparent"
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[15px] font-medium text-white/75">
              Current → Target Analysis
            </span>

            <span className="mt-1 block font-mono text-[7px] text-white/20">
              CAPABILITY DIFFERENTIAL
            </span>
          </div>

          <div className="flex items-center gap-2">
            <LiveDot />
            <TinyLabel>Scanning</TinyLabel>
          </div>
        </div>

        <div className="mt-10 space-y-7">
          {rows.map((row, index) => {
            const gap = row.target - row.current;

            return (
              <div key={row.name}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-white/45">
                    {row.name}
                  </span>

                  <div className="flex items-center gap-4 font-mono text-[7px]">
                    <span className="text-white/25">
                      {row.current}
                    </span>

                    <ArrowRight
                      size={9}
                      className="text-white/20"
                    />

                    <span className="text-[#c4b5fd]">
                      {row.target}
                    </span>

                    <span className="rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-2 py-1 text-[#a78bfa]">
                      GAP {gap}
                    </span>
                  </div>
                </div>

                <div className="relative mt-3 h-3 overflow-hidden rounded-full bg-white/[0.04]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${row.target}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.08,
                    }}
                    className="absolute inset-y-0 left-0 bg-white/[0.06]"
                  />

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${row.current}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.9,
                      delay: 0.15 + index * 0.08,
                    }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#5b21b6] to-[#8b5cf6]"
                  />

                  <motion.span
                    initial={{
                      left: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      left: `${row.target}%`,
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.08,
                    }}
                    className="absolute top-1/2 h-4 w-px -translate-y-1/2 bg-[#c4b5fd]"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-9 flex flex-wrap gap-5 border-t border-white/[0.06] pt-5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-4 rounded-sm bg-[#7046e6]" />
            <TinyLabel>Current</TinyLabel>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-4 rounded-sm bg-white/[0.09]" />
            <TinyLabel>Target</TinyLabel>
          </div>

          <div className="ml-auto">
            <TinyLabel>Illustrative Data</TinyLabel>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   GAP SUMMARY
========================================================= */

function GapSummary() {
  return (
    <div className="grid gap-4">
      <SummaryCard
        label="Current State"
        value="57"
        suffix="/100"
        progress={57}
      />

      <SummaryCard
        label="Target State"
        value="89"
        suffix="/100"
        progress={89}
      />

      <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#060606] p-5">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#7046e6]/15 blur-[50px]" />

        <div className="relative">
          <div className="flex items-center justify-between">
            <TinyLabel>Capability Gap</TinyLabel>

            <GitBranch
              size={13}
              className="text-[#a78bfa]"
            />
          </div>

          <div className="mt-6 flex items-end gap-2">
            <span className="text-5xl font-medium tracking-[-0.07em]">
              32
            </span>

            <span className="mb-1 font-mono text-[7px] text-white/25">
              POINTS
            </span>
          </div>

          <p className="mt-4 text-[9px] leading-5 text-white/30">
            Demonstration values visualizing the current-to-target security
            capability difference.
          </p>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({
  label,
  value,
  suffix,
  progress,
}: {
  label: string;
  value: string;
  suffix: string;
  progress: number;
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="rounded-[20px] border border-white/[0.08] bg-[#060606] p-5"
    >
      <TinyLabel>{label}</TinyLabel>

      <div className="mt-5 flex items-end">
        <span className="text-5xl font-medium tracking-[-0.07em]">
          {value}
        </span>

        <span className="mb-1 ml-2 font-mono text-[7px] text-white/25">
          {suffix}
        </span>
      </div>

      <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/[0.05]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: `${progress}%`,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
          className="h-full bg-gradient-to-r from-[#5b21b6] to-[#c4b5fd]"
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   GAP TIMELINE
========================================================= */

function GapTimeline() {
  return (
    <div className="rounded-[20px] border border-white/[0.08] bg-[#060606] p-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[15px] font-medium text-white/75">
            Remediation Queue
          </span>

          <span className="mt-1 block font-mono text-[7px] text-white/20">
            PRIORITIZED SECURITY GAPS
          </span>
        </div>

        <TinyLabel>05 Open</TinyLabel>
      </div>

      <div className="mt-6 space-y-2">
        {remediationItems.map((item, index) => (
          <motion.div
            key={item.id}
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
              delay: index * 0.06,
            }}
            whileHover={{
              x: 4,
              backgroundColor: "rgba(255,255,255,.025)",
            }}
            className="grid gap-4 rounded-[12px] border border-white/[0.05] p-4 md:grid-cols-[80px_1fr_80px_120px] md:items-center"
          >
            <span className="font-mono text-[7px] text-[#a78bfa]">
              {item.id}
            </span>

            <div>
              <span className="block text-[10px] text-white/55">
                {item.title}
              </span>

              <span className="mt-1 block font-mono text-[6px] text-white/20">
                {item.domain}
              </span>
            </div>

            <span
              className={`font-mono text-[6px] ${
                item.severity === "CRITICAL"
                  ? "text-[#d8b4fe]"
                  : item.severity === "HIGH"
                  ? "text-[#a78bfa]"
                  : "text-white/30"
              }`}
            >
              {item.severity}
            </span>

            <div className="h-1 overflow-hidden rounded-full bg-white/[0.05]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${item.progress}%`,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                className="h-full bg-[#8b5cf6]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   PRIORITY SIGNAL
========================================================= */

function PrioritySignal() {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#060606] p-5">
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#7046e6]/10 blur-[70px]" />

      <div className="relative">
        <TinyLabel>Priority Intelligence</TinyLabel>

        <div className="mt-8 flex justify-center">
          <div className="relative flex h-[180px] w-[180px] items-center justify-center">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
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
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[25px] rounded-full border border-white/[0.08]"
            />

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="flex h-[95px] w-[95px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#7046e6]/10"
            >
              <Activity
                size={25}
                className="text-[#c4b5fd]"
              />

              <span className="mt-2 font-mono text-[6px] text-white/30">
                PRIORITIZE
              </span>
            </motion.div>
          </div>
        </div>

        <p className="mt-5 text-center text-[9px] leading-5 text-white/30">
          Connect capability gaps with risk context, dependencies and business
          importance to guide remediation priorities.
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   GAP THESIS
========================================================= */

function GapThesis() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-32 md:px-10">
      <motion.div
        animate={{
          x: ["-6%", "6%", "-6%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(circle_at_50%_30%,rgba(91,33,182,.3),transparent_58%)]"
      />

      <Container className="relative">
        <Reveal className="text-center">
          <SectionLabel number="01">
            Gap Intelligence
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[1050px] text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
            A security gap is the distance between what exists and what is
            required.
          </h2>

          <p className="mx-auto mt-7 max-w-[950px] text-[13px] leading-7 text-white/[0.52]">
            Cybersecurity Gap Analysis creates visibility into where security
            capabilities currently stand, where they need to be and what must
            change to move from one state to the other.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          <StateCard
            number="01"
            title="Current State"
            text="Understand existing controls, processes, technologies, responsibilities and operational practices."
            value="NOW"
          />

          <GapBridge />

          <StateCard
            number="03"
            title="Target State"
            text="Define the desired level of security capability based on risk, business needs and technology direction."
            value="NEXT"
          />
        </div>
      </Container>
    </section>
  );
}

function StateCard({
  number,
  title,
  text,
  value,
}: {
  number: string;
  title: string;
  text: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -7,
      }}
      className="min-h-[330px] rounded-[22px] border border-white/[0.08] bg-[#070707] p-7"
    >
      <span className="font-mono text-[7px] text-[#a78bfa]">
        {number}
      </span>

      <span className="mt-14 block text-5xl font-medium tracking-[-0.07em] text-white/15">
        {value}
      </span>

      <h3 className="mt-8 text-2xl font-medium">
        {title}
      </h3>

      <p className="mt-5 text-[11px] leading-7 text-white/[0.44]">
        {text}
      </p>
    </motion.div>
  );
}

function GapBridge() {
  return (
    <motion.div
      whileHover={{
        y: -7,
      }}
      className="relative min-h-[330px] overflow-hidden rounded-[22px] border border-[#8b5cf6]/20 bg-[#7046e6]/[0.06] p-7"
    >
      <motion.div
        animate={{
          x: ["-100%", "180%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 h-px w-[60%] bg-gradient-to-r from-transparent via-[#c4b5fd] to-transparent"
      />

      <span className="font-mono text-[7px] text-[#a78bfa]">
        02
      </span>

      <div className="mt-14 flex items-center justify-center">
        <div className="relative flex h-[90px] w-[90px] items-center justify-center rounded-full border border-[#8b5cf6]/30">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[-14px] rounded-full border border-dashed border-[#8b5cf6]/25"
          />

          <GitBranch
            size={25}
            className="text-[#c4b5fd]"
          />
        </div>
      </div>

      <h3 className="mt-9 text-center text-2xl font-medium">
        Capability Gap
      </h3>

      <p className="mt-5 text-center text-[11px] leading-7 text-white/[0.44]">
        Identify the controls, processes, operating practices and capabilities
        required to move securely from current state to target state.
      </p>
    </motion.div>
  );
}

/* =========================================================
   DOMAIN ANALYSIS
========================================================= */

function DomainAnalysis() {
  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <Reveal>
          <SectionLabel number="02">
            Security Domains
          </SectionLabel>

          <div className="mt-8 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <h2 className="max-w-[720px] text-5xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-6xl">
              Find gaps across

              <span className="block text-white/25">
                the security landscape.
              </span>
            </h2>

            <p className="max-w-[650px] text-[13px] leading-7 text-white/[0.48]">
              Gap analysis examines multiple security domains independently
              while also understanding how weaknesses and dependencies connect
              across the wider environment.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gapDomains.map((domain, index) => {
            const Icon = domain.Icon;

            return (
              <motion.article
                key={domain.title}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  y: -8,
                  borderColor: "rgba(167,139,250,.28)",
                }}
                className="relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#070707] p-6"
              >
                <div className="absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-[#7046e6]/[0.05] blur-[80px]" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04]">
                      <Icon
                        size={17}
                        className="text-[#c4b5fd]"
                      />
                    </div>

                    <span className="font-mono text-[7px] text-white/20">
                      {domain.code}
                    </span>
                  </div>

                  <h3 className="mt-9 text-xl font-medium tracking-[-0.03em]">
                    {domain.title}
                  </h3>

                  <p className="mt-4 min-h-[84px] text-[11px] leading-7 text-white/[0.45]">
                    {domain.text}
                  </p>

                  <div className="mt-7 grid grid-cols-3 gap-2">
                    <MiniMetric
                      label="CURRENT"
                      value={domain.current}
                    />

                    <MiniMetric
                      label="TARGET"
                      value={domain.target}
                    />

                    <MiniMetric
                      label="GAP"
                      value={domain.gap}
                      accent
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function MiniMetric({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div className="rounded-[10px] border border-white/[0.06] bg-black p-3">
      <span className="font-mono text-[5px] text-white/20">
        {label}
      </span>

      <span
        className={`mt-2 block text-xl font-medium ${
          accent ? "text-[#c4b5fd]" : "text-white/70"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   PRIORITY MATRIX
========================================================= */

function PriorityMatrixSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <Reveal>
            <SectionLabel number="03">
              Gap Prioritization
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Not every gap

              <span className="block text-[#a78bfa]">
                deserves equal priority.
              </span>
            </h2>

            <p className="mt-7 max-w-[530px] text-[12px] leading-7 text-white/[0.47]">
              Prioritization helps distinguish between capability differences
              that create meaningful security exposure and those that can be
              addressed through longer-term improvement.
            </p>

            <div className="mt-9 space-y-3">
              {[
                "Risk significance",
                "Business criticality",
                "Threat exposure",
                "Implementation effort",
                "Technology dependencies",
                "Operational impact",
              ].map((item, index) => (
                <motion.div
                  key={item}
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
                    delay: index * 0.05,
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={12}
                    className="text-[#a78bfa]"
                  />

                  <span className="text-[11px] text-white/45">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <PriorityMatrix />
        </div>
      </Container>
    </section>
  );
}

function PriorityMatrix() {
  const dots = [
    {
      x: 22,
      y: 68,
      label: "Governance",
    },
    {
      x: 72,
      y: 23,
      label: "Detection",
    },
    {
      x: 62,
      y: 38,
      label: "Cloud",
    },
    {
      x: 38,
      y: 54,
      label: "Data",
    },
    {
      x: 78,
      y: 48,
      label: "Identity",
    },
    {
      x: 52,
      y: 28,
      label: "Response",
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-[26px] border border-white/[0.09] bg-black p-6 md:p-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <TinyLabel>Remediation Intelligence</TinyLabel>

          <h3 className="mt-2 text-xl font-medium">
            Risk / Gap Priority Matrix
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <LiveDot />
          <TinyLabel>Analyzing</TinyLabel>
        </div>
      </div>

      <div className="relative mt-8 h-[460px] border-b border-l border-white/[0.12]">
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.05]" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.05]" />

        <div className="absolute bottom-3 left-3 font-mono text-[6px] text-white/20">
          LOW PRIORITY
        </div>

        <div className="absolute right-3 top-3 font-mono text-[6px] text-[#a78bfa]">
          HIGH PRIORITY
        </div>

        <div className="absolute -left-4 top-1/2 -rotate-90 font-mono text-[6px] text-white/20">
          RISK IMPACT
        </div>

        <div className="absolute bottom-[-26px] left-1/2 -translate-x-1/2 font-mono text-[6px] text-white/20">
          CAPABILITY GAP
        </div>

        <motion.div
          animate={{
            left: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-[#8b5cf6]/35 to-transparent"
        />

        {dots.map((dot, index) => (
          <motion.div
            key={dot.label}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2 + index * 0.08,
            }}
            animate={{
              y: [-3, 3, -3],
            }}
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <motion.span
                animate={{
                  scale: [1, 2.3, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="absolute inset-0 rounded-full bg-[#8b5cf6]"
              />

              <span className="relative block h-3 w-3 rounded-full bg-[#c4b5fd] shadow-[0_0_18px_rgba(167,139,250,.7)]" />

              <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/[0.08] bg-[#080808] px-3 py-1.5 font-mono text-[6px] text-white/40">
                {dot.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* =========================================================
   GAP MATRIX TABLE
========================================================= */

function GapMatrixSection() {
  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="04">
            Capability Matrix
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[900px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Make security differences visible.
          </h2>

          <p className="mx-auto mt-6 max-w-[820px] text-[13px] leading-7 text-white/[0.47]">
            A structured matrix helps technical and business stakeholders
            understand where capability differences exist and which areas
            require the greatest attention.
          </p>
        </Reveal>

        <div className="mt-14 overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#060606]">
          <div className="grid grid-cols-[1.3fr_.7fr_.7fr_.7fr_.8fr] border-b border-white/[0.08] px-6 py-5 font-mono text-[7px] text-white/25">
            <span>DOMAIN</span>
            <span>CURRENT</span>
            <span>TARGET</span>
            <span>GAP</span>
            <span>PRIORITY</span>
          </div>

          {gapMatrix.map((row, index) => {
            const gap = row.target - row.current;

            return (
              <motion.div
                key={row.domain}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06,
                }}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,.02)",
                }}
                className="grid grid-cols-[1.3fr_.7fr_.7fr_.7fr_.8fr] items-center border-b border-white/[0.05] px-6 py-6 last:border-b-0"
              >
                <span className="text-[11px] text-white/60">
                  {row.domain}
                </span>

                <span className="font-mono text-[9px] text-white/35">
                  {row.current}
                </span>

                <span className="font-mono text-[9px] text-[#c4b5fd]">
                  {row.target}
                </span>

                <span className="font-mono text-[9px] text-white/40">
                  +{gap}
                </span>

                <span
                  className={`font-mono text-[7px] ${
                    row.priority === "CRITICAL"
                      ? "text-[#d8b4fe]"
                      : row.priority === "HIGH"
                      ? "text-[#a78bfa]"
                      : "text-white/30"
                  }`}
                >
                  {row.priority}
                </span>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   OPERATING LAYERS
========================================================= */

function GapOperatingLayers() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.82fr_1.18fr]">
          <Reveal>
            <SectionLabel number="05">
              Analysis Layers
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Look beyond

              <span className="block text-white/25">
                individual controls.
              </span>
            </h2>

            <p className="mt-7 max-w-[520px] text-[12px] leading-7 text-white/[0.47]">
              Security gaps can exist because of missing technology, unclear
              governance, inconsistent processes, limited visibility or weak
              operational integration. Analysis should examine the complete
              security operating environment.
            </p>
          </Reveal>

          <div className="space-y-3">
            {operatingLayers.map((layer, index) => {
              const Icon = layer.Icon;

              return (
                <motion.article
                  key={layer.title}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    x: 5,
                    borderColor: "rgba(167,139,250,.25)",
                  }}
                  className="grid gap-5 rounded-[16px] border border-white/[0.07] bg-[#070707] p-5 md:grid-cols-[60px_150px_1fr] md:items-center"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04]">
                    <Icon
                      size={15}
                      className="text-[#c4b5fd]"
                    />
                  </div>

                  <div>
                    <span className="font-mono text-[6px] text-[#a78bfa]">
                      {layer.number}
                    </span>

                    <h3 className="mt-1 text-[14px] font-medium">
                      {layer.title}
                    </h3>
                  </div>

                  <p className="text-[10px] leading-6 text-white/[0.42]">
                    {layer.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   REMEDIATION ROADMAP
========================================================= */

function RemediationRoadmap() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#251039_0%,#0c0610_34%,#000_72%)] px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="06">
            Remediation Roadmap
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[900px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Move from finding gaps to closing them.
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-6">
          <div className="absolute left-[7%] right-[7%] top-[37px] hidden h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/50 to-transparent lg:block" />

          <motion.div
            animate={{
              left: ["7%", "92%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[33px] z-30 hidden h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_20px_#8b5cf6] lg:block"
          />

          {process.map((item, index) => {
            const Icon = item.Icon;

            return (
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
                  y: -6,
                }}
                className="relative z-20 rounded-[18px] border border-white/[0.08] bg-[#070707] p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-black">
                  <Icon
                    size={14}
                    className="text-[#c4b5fd]"
                  />
                </div>

                <span className="mt-8 block font-mono text-[7px] text-[#a78bfa]">
                  {item.number}
                </span>

                <h3 className="mt-3 text-[15px] font-medium">
                  {item.title}
                </h3>

                <p className="mt-4 text-[10px] leading-6 text-white/[0.42]">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   REMEDIATION ENGINE
========================================================= */

function RemediationEngineSection() {
  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <RemediationEngine />

          <Reveal>
            <SectionLabel number="07">
              Transformation Engine
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Convert findings

              <span className="block text-[#a78bfa]">
                into action.
              </span>
            </h2>

            <p className="mt-7 max-w-[570px] text-[12px] leading-7 text-white/[0.48]">
              Gap analysis should not end with a list of weaknesses. Findings
              become useful when they are translated into owned, sequenced and
              measurable remediation initiatives.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {[
                "Remediation initiative",
                "Business priority",
                "Security owner",
                "Dependencies",
                "Target capability",
                "Success measure",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="flex items-center gap-3 rounded-[12px] border border-white/[0.07] bg-[#070707] p-4"
                >
                  <CircleDot
                    size={9}
                    className="text-[#a78bfa]"
                  />

                  <span className="text-[10px] text-white/45">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function RemediationEngine() {
  const phases = [
    {
      label: "Immediate",
      count: 4,
      progress: 76,
    },
    {
      label: "Near Term",
      count: 7,
      progress: 58,
    },
    {
      label: "Strategic",
      count: 5,
      progress: 39,
    },
    {
      label: "Continuous",
      count: 3,
      progress: 24,
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -35,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-[26px] border border-white/[0.1] bg-[#060606] p-6 md:p-7"
    >
      <div className="absolute left-1/2 top-0 h-20 w-[80%] -translate-x-1/2 bg-[#7046e6]/20 blur-[60px]" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <TinyLabel>Remediation Sequencing</TinyLabel>

            <h3 className="mt-2 text-xl font-medium">
              Security Transformation Queue
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <LiveDot />
            <TinyLabel>Active</TinyLabel>
          </div>
        </div>

        <div className="mt-9 space-y-4">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.label}
              whileHover={{
                x: 4,
              }}
              className="rounded-[14px] border border-white/[0.06] bg-black p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-white/55">
                    {phase.label}
                  </span>

                  <span className="mt-1 block font-mono text-[6px] text-white/20">
                    {phase.count} INITIATIVES
                  </span>
                </div>

                <span className="font-mono text-[8px] text-[#a78bfa]">
                  {phase.progress}%
                </span>
              </div>

              <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[0.05]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${phase.progress}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.08,
                  }}
                  className="h-full bg-gradient-to-r from-[#5b21b6] to-[#c4b5fd]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 rounded-[14px] border border-[#8b5cf6]/15 bg-[#7046e6]/[0.04] p-5">
          <div className="flex items-center gap-3">
            <BrainCircuit
              size={15}
              className="text-[#c4b5fd]"
            />

            <div>
              <span className="block text-[10px] text-white/55">
                Prioritization Context
              </span>

              <span className="mt-1 block text-[8px] text-white/25">
                Risk + impact + dependency + implementation effort
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   CONTINUOUS GAP MANAGEMENT
========================================================= */

function ContinuousGapManagement() {
  const nodes = [
    {
      Icon: Eye,
      label: "Observe",
    },
    {
      Icon: Gauge,
      label: "Measure",
    },
    {
      Icon: GitBranch,
      label: "Prioritize",
    },
    {
      Icon: RefreshCcw,
      label: "Improve",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="08">
            Continuous Improvement
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[900px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Today&apos;s target becomes tomorrow&apos;s baseline.
          </h2>

          <p className="mx-auto mt-6 max-w-[820px] text-[13px] leading-7 text-white/[0.47]">
            Security gaps change as organizations adopt new technology,
            introduce new services and respond to evolving threats. Gap
            management therefore benefits from continuous reassessment.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-16 flex min-h-[540px] max-w-[900px] items-center justify-center overflow-hidden rounded-[28px] border border-white/[0.08] bg-black">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,.08) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative flex h-[380px] w-[380px] items-center justify-center">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
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
                duration: 11,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[55px] rounded-full border border-white/[0.08]"
            />

            <motion.div
              animate={{
                scale: [1, 1.07, 1],
                boxShadow: [
                  "0 0 30px rgba(124,58,237,.1)",
                  "0 0 100px rgba(124,58,237,.35)",
                  "0 0 30px rgba(124,58,237,.1)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="relative z-20 flex h-[150px] w-[150px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#7046e6]/10"
            >
              <GitBranch
                size={32}
                className="text-[#c4b5fd]"
              />

              <span className="mt-3 font-mono text-[7px] text-white/35">
                GAP LOOP
              </span>
            </motion.div>

            {nodes.map(({ Icon, label }, index) => {
              const positions = [
                "left-1/2 top-0 -translate-x-1/2",
                "right-0 top-1/2 -translate-y-1/2",
                "bottom-0 left-1/2 -translate-x-1/2",
                "left-0 top-1/2 -translate-y-1/2",
              ];

              return (
                <motion.div
                  key={label}
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                  className={`absolute ${positions[index]} z-30 flex h-[82px] w-[82px] flex-col items-center justify-center rounded-full border border-white/[0.1] bg-[#080808]`}
                >
                  <Icon
                    size={16}
                    className="text-[#c4b5fd]"
                  />

                  <span className="mt-2 font-mono text-[6px] text-white/35">
                    {label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            animate={{
              top: ["5%", "95%", "5%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/25 to-transparent"
          />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   PRINCIPLES
========================================================= */

function GapPrinciples() {
  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <SectionLabel number="09">
              Analysis Principles
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Find the gap.

              <span className="block text-white/25">
                Understand the cause.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[12px] leading-7 text-white/[0.47]">
              Effective gap analysis goes beyond identifying what is missing.
              It should explain why the difference matters and how the
              organization can practically improve.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((item, index) => (
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
                  x: 5,
                  borderColor: "rgba(167,139,250,.25)",
                }}
                className="flex items-start gap-4 rounded-[15px] border border-white/[0.07] bg-[#070707] p-5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/25">
                  <CheckCircle2
                    size={12}
                    className="text-[#c4b5fd]"
                  />
                </div>

                <div>
                  <span className="font-mono text-[6px] text-[#8b5cf6]">
                    PRINCIPLE /{" "}
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-2 text-[10px] leading-6 text-white/[0.44]">
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
   OUTCOMES
========================================================= */

function GapOutcomes() {
  const outcomes = [
    {
      title: "Current-State Clarity",
      text:
        "Create a structured understanding of existing cybersecurity capabilities and operating practices.",
    },
    {
      title: "Gap Visibility",
      text:
        "Identify meaningful differences between the current environment and the organization's desired security state.",
    },
    {
      title: "Priority Direction",
      text:
        "Connect gaps with risk and business context to help teams determine where improvement should begin.",
    },
    {
      title: "Actionable Roadmap",
      text:
        "Translate findings into sequenced initiatives that support practical cybersecurity transformation.",
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="10">
            Gap Analysis Outcomes
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[900px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            From uncertainty to an improvement plan.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {outcomes.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -7,
              }}
              className="relative min-h-[280px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-black p-6"
            >
              <motion.div
                animate={{
                  opacity: [0.03, 0.1, 0.03],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="absolute -right-16 -top-16 h-[180px] w-[180px] rounded-full bg-[#7046e6] blur-[70px]"
              />

              <span className="relative font-mono text-[7px] text-[#a78bfa]">
                0{index + 1}
              </span>

              <h3 className="relative mt-16 text-xl font-medium">
                {item.title}
              </h3>

              <p className="relative mt-4 text-[11px] leading-7 text-white/[0.45]">
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
   FINAL CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="bg-black px-5 pb-28 pt-14 md:px-10">
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
          className="relative overflow-hidden rounded-[28px] border border-[#6366f1]/25 bg-[#080a16] px-6 py-24 text-center"
        >
          <motion.div
            animate={{
              x: ["-20%", "20%", "-20%"],
              opacity: [0.22, 0.5, 0.22],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-170px] left-1/2 h-[320px] w-[950px] -translate-x-1/2 rounded-full bg-[#7046e6] blur-[120px]"
          />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.04]"
          />

          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.07]"
            >
              <GitBranch
                size={23}
                className="text-[#c4b5fd]"
              />
            </motion.div>

            <h2 className="mx-auto mt-8 max-w-[850px] text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Find the gaps between your current security and where it needs
              to be.
            </h2>

            <p className="mx-auto mt-5 max-w-[720px] text-[12px] leading-7 text-white/[0.48]">
              Build visibility across cybersecurity capabilities, understand
              improvement priorities and create a practical roadmap toward a
              stronger security state.
            </p>

            <motion.a
              href="#gap-intelligence"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mx-auto mt-9 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[11px] font-medium shadow-[0_0_45px_rgba(124,58,237,.3)]"
            >
              Start Gap Assessment

              <ArrowRight size={13} />
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

/* =========================================================
   MAIN CLIENT
========================================================= */

export default function CybersecurityGapAnalysisClient() {
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
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#5b21b6] via-[#c4b5fd] to-[#7c3aed]"
      />

      <Hero />

      <GapThesis />

      <DomainAnalysis />

      <PriorityMatrixSection />

      <GapMatrixSection />

      <GapOperatingLayers />

      <RemediationRoadmap />

      <RemediationEngineSection />

      <ContinuousGapManagement />

      <GapPrinciples />

      <GapOutcomes />

      <FinalCTA />
    </div>
  );
}