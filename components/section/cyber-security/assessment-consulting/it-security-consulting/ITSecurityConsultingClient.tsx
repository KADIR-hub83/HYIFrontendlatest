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

const consultingDomains = [
  {
    Icon: ShieldCheck,
    number: "01",
    title: "Security Strategy",
    code: "STRATEGY",
    description:
      "Translate business priorities, technology dependencies and cyber risk into a structured security strategy with clear initiatives and ownership.",
  },
  {
    Icon: Network,
    number: "02",
    title: "Infrastructure Security",
    code: "INFRA",
    description:
      "Review networks, platforms, connectivity, segmentation and infrastructure controls to strengthen the foundation supporting enterprise systems.",
  },
  {
    Icon: Cloud,
    number: "03",
    title: "Cloud Security",
    code: "CLOUD",
    description:
      "Establish practical security architecture, governance and control patterns across public cloud, hybrid environments and cloud-native workloads.",
  },
  {
    Icon: ShieldCheck,
    number: "04",
    title: "Identity Security",
    code: "IDENTITY",
    description:
      "Strengthen authentication, authorization, privileged access and identity governance across workforce, service and machine identities.",
  },
  {
    Icon: Eye,
    number: "05",
    title: "Security Operations",
    code: "SECOPS",
    description:
      "Improve visibility, detection, investigation and response by aligning telemetry, operating processes and security technologies.",
  },
  {
    Icon: Database,
    number: "06",
    title: "Data Protection",
    code: "DATA",
    description:
      "Understand sensitive data exposure and define security controls around access, storage, movement, encryption and monitoring.",
  },
];

const programSteps = [
  {
    number: "01",
    title: "Understand",
    Icon: Eye,
    text:
      "Understand the business environment, technology estate, security priorities and current operating challenges.",
  },
  {
    number: "02",
    title: "Assess",
    Icon: Activity,
    text:
      "Evaluate security architecture, controls, processes, capabilities and technology dependencies.",
  },
  {
    number: "03",
    title: "Prioritize",
    Icon: Gauge,
    text:
      "Prioritize initiatives according to risk, business value, complexity, dependencies and implementation readiness.",
  },
  {
    number: "04",
    title: "Architect",
    Icon: Layers3,
    text:
      "Define target security patterns, operating models, technology principles and architectural guardrails.",
  },
  {
    number: "05",
    title: "Transform",
    Icon: RefreshCcw,
    text:
      "Convert recommendations into coordinated security transformation initiatives and implementation workstreams.",
  },
  {
    number: "06",
    title: "Operate",
    Icon: Workflow,
    text:
      "Establish governance, metrics and continuous improvement mechanisms that keep security aligned with change.",
  },
];

const advisoryAreas = [
  "Cybersecurity strategy",
  "Security architecture",
  "Cloud security transformation",
  "Identity & access management",
  "Network security",
  "Zero Trust architecture",
  "Security operations",
  "Data protection",
  "Security governance",
  "Technology modernization",
  "Third-party security",
  "Cyber resilience",
];

const operatingLayers = [
  {
    label: "Business",
    code: "01",
    description:
      "Business priorities, critical services and risk tolerance.",
  },
  {
    label: "Governance",
    code: "02",
    description:
      "Security policies, ownership, standards and decision structures.",
  },
  {
    label: "Architecture",
    code: "03",
    description:
      "Security patterns, trust boundaries and technical guardrails.",
  },
  {
    label: "Technology",
    code: "04",
    description:
      "Platforms, controls, tooling and security integrations.",
  },
  {
    label: "Operations",
    code: "05",
    description:
      "Monitoring, response, maintenance and continuous improvement.",
  },
];

const recommendations = [
  {
    id: "SEC-01",
    title: "Strengthen identity control plane",
    category: "IDENTITY",
    priority: "PRIORITY 01",
    status: "PLANNED",
  },
  {
    id: "SEC-02",
    title: "Improve network segmentation",
    category: "NETWORK",
    priority: "PRIORITY 02",
    status: "DESIGN",
  },
  {
    id: "SEC-03",
    title: "Standardize cloud guardrails",
    category: "CLOUD",
    priority: "PRIORITY 03",
    status: "PLANNED",
  },
  {
    id: "SEC-04",
    title: "Expand detection coverage",
    category: "SECOPS",
    priority: "PRIORITY 04",
    status: "REVIEW",
  },
];

const principles = [
  "Align security investment with business importance.",
  "Design controls around real technology dependencies.",
  "Reduce unnecessary trust across the environment.",
  "Make security architecture repeatable and scalable.",
  "Prioritize identity as a core security control plane.",
  "Build visibility into critical technology paths.",
  "Create practical roadmaps with clear ownership.",
  "Treat security improvement as a continuous program.",
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
    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">
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
          scale: [1, 2.5, 1],
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

  const heroY = useTransform(scrollY, [0, 700], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.15]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-5  md:px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black 10%, transparent 95%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 10%, transparent 95%)",
        }}
      />

      <motion.div
        animate={{
          opacity: [0.05, 0.18, 0.05],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="pointer-events-none absolute left-1/2 top-[500px] h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-[#6d28d9] blur-[220px]"
      />

      <Container className="relative">
        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
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
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.025] px-5 py-2.5"
          >
            <LiveDot />

            <span className="text-[10px] text-white/50">
              IT Security Consulting
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
            className="mx-auto mt-9 max-w-[1100px] text-[clamp(3.8rem,3.5vw,8rem)] font-semibold leading-[0.86] tracking-[-0.08em]"
          >
            Turn security

            <span className="block text-white/55">
              complexity into
            </span>

            <span className="block text-[#a78bfa]">
              direction.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.35,
            }}
            className="mx-auto mt-8 max-w-[850px] text-[13px] leading-7 text-white/[0.55] md:text-[18px]"
          >
            HYI.AI IT Security Consulting helps organizations connect cyber
            risk, technology architecture and business priorities into a
            practical security transformation program — from assessment and
            strategy through architecture, implementation planning and
            continuous improvement.
          </motion.p>

          <motion.a
            href="#mission-control"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mx-auto mt-9 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[11px] font-medium shadow-[0_0_45px_rgba(124,58,237,.3)]"
          >
            Explore Security Program

            <ArrowRight size={13} />
          </motion.a>
        </motion.div>

        <div className="mt-20">
          <SecurityMissionControl />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   MISSION CONTROL
========================================================= */

function SecurityMissionControl() {
  return (
    <motion.div
      id="mission-control"
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
        delay: 0.4,
      }}
      className="relative overflow-hidden rounded-[30px] border border-white/[0.12] bg-[#030303] shadow-[0_60px_180px_rgba(0,0,0,.95)]"
    >
      <motion.div
        animate={{
          x: ["-100%", "300%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 z-50 h-px w-[35%] bg-gradient-to-r from-transparent via-[#c4b5fd] to-transparent"
      />

      <MissionToolbar />

      <div className="grid min-h-[760px] lg:grid-cols-[88px_1fr]">
        <MissionSidebar />

        <div className="p-5 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <TinyLabel>
                Enterprise Cybersecurity Advisory
              </TinyLabel>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                Cyber Defense Mission Control
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2">
                <LiveDot />

                <TinyLabel>Program Active</TinyLabel>
              </div>

              <div className="rounded-full bg-[#7046e6] px-5 py-2.5 text-[9px]">
                View Roadmap
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-4 xl:grid-cols-[1.35fr_.65fr]">
            <SecurityCommandGraph />

            <SecurityMetrics />
          </div>

          <div className="mt-4">
            <RecommendationConsole />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MissionToolbar() {
  return (
    <div className="flex items-center justify-between border-b border-white/[0.1] px-6 py-5">
      <div className="flex items-center gap-3">
        <span className="h-3 w-3 rounded-full bg-[#ed6a5e]" />
        <span className="h-3 w-3 rounded-full bg-[#f4bf4f]" />
        <span className="h-3 w-3 rounded-full bg-[#61c454]" />

        <span className="ml-5 text-white/20">◧</span>
        <span className="ml-3 text-white/35">‹</span>
        <span className="text-white/20">›</span>
      </div>

      <div className="flex items-center gap-2 text-white/35">
        <ShieldCheck size={12} />

        <span className="font-mono text-[8px]">
          HYI.AI / SECURITY CONSULTING
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

function MissionSidebar() {
  const icons: ElementType[] = [
    ShieldCheck,
    Network,
    Cloud,
    Eye,
    Database,
    Settings2,
  ];

  return (
    <div className="hidden border-r border-white/[0.1] lg:block">
      <div className="flex h-full flex-col items-center py-7">
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(124,58,237,0)",
              "0 0 30px rgba(124,58,237,.5)",
              "0 0 0 rgba(124,58,237,0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="relative flex h-9 w-9 items-center justify-center rounded-[11px] bg-white"
        >
          <ShieldCheck
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
   SECURITY GRAPH
========================================================= */

function SecurityCommandGraph() {
  return (
    <div className="relative min-h-[485px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#060606]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <motion.div
        animate={{
          top: ["5%", "95%", "5%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 right-0 z-30 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/45 to-transparent"
      />

      <div className="relative z-20 flex items-center justify-between border-b border-white/[0.06] p-5">
        <div>
          <span className="text-[14px] font-medium text-white/70">
            Enterprise Security Map
          </span>

          <span className="mt-1 block font-mono text-[6px] text-white/20">
            SECURITY DOMAINS + TRANSFORMATION SIGNALS
          </span>
        </div>

        <div className="flex items-center gap-2">
          <LiveDot />
          <TinyLabel>Analyzing</TinyLabel>
        </div>
      </div>

      <div className="relative h-[395px]">
        <svg
          viewBox="0 0 900 395"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          {[
            [450, 198, 150, 75],
            [450, 198, 150, 320],
            [450, 198, 300, 90],
            [450, 198, 600, 90],
            [450, 198, 750, 75],
            [450, 198, 750, 320],
            [450, 198, 600, 310],
            [450, 198, 300, 310],
          ].map((line, index) => (
            <motion.line
              key={index}
              x1={line[0]}
              y1={line[1]}
              x2={line[2]}
              y2={line[3]}
              stroke="rgba(139,92,246,.35)"
              strokeWidth="1"
              strokeDasharray="6 8"
              animate={{
                strokeDashoffset: [0, -28],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </svg>

        <SecurityNode
          className="left-[8%] top-[7%]"
          Icon={ShieldCheck}
          title="Identity"
          code="IAM"
        />

        <SecurityNode
          className="left-[8%] bottom-[7%]"
          Icon={Network}
          title="Network"
          code="NET"
        />

        <SecurityNode
          className="left-[29%] top-[10%]"
          Icon={Cloud}
          title="Cloud"
          code="CLD"
        />

        <SecurityNode
          className="left-[29%] bottom-[10%]"
          Icon={Server}
          title="Platform"
          code="PLT"
        />

        <SecurityNode
          className="right-[29%] top-[10%]"
          Icon={Database}
          title="Data"
          code="DAT"
        />

        <SecurityNode
          className="right-[29%] bottom-[10%]"
          Icon={Eye}
          title="SecOps"
          code="SOC"
        />

        <SecurityNode
          className="right-[8%] top-[7%]"
          Icon={Cpu}
          title="Apps"
          code="APP"
        />

        <SecurityNode
          className="right-[8%] bottom-[7%]"
          Icon={Workflow}
          title="Governance"
          code="GOV"
        />

        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-[145px] w-[145px] items-center justify-center">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-dashed border-[#8b5cf6]/35"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[14px] rounded-full border border-white/[0.1]"
            />

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                boxShadow: [
                  "0 0 20px rgba(124,58,237,.15)",
                  "0 0 80px rgba(124,58,237,.45)",
                  "0 0 20px rgba(124,58,237,.15)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="flex h-[88px] w-[88px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#7046e6]/10"
            >
              <BrainCircuit
                size={24}
                className="text-[#c4b5fd]"
              />

              <span className="mt-2 font-mono text-[5px] text-white/35">
                SECURITY CORE
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecurityNode({
  Icon,
  title,
  code,
  className,
}: {
  Icon: ElementType;
  title: string;
  code: string;
  className: string;
}) {
  return (
    <motion.div
      animate={{
        y: [-3, 3, -3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      whileHover={{
        scale: 1.08,
      }}
      className={`absolute z-20 ${className}`}
    >
      <div className="min-w-[92px] rounded-[13px] border border-white/[0.1] bg-[#080808]/95 p-3 shadow-xl backdrop-blur">
        <div className="flex items-center gap-2">
          <Icon
            size={12}
            className="text-[#c4b5fd]"
          />

          <span className="text-[8px] text-white/50">
            {title}
          </span>
        </div>

        <span className="mt-2 block font-mono text-[5px] text-white/20">
          DOMAIN / {code}
        </span>
      </div>
    </motion.div>
  );
}

/* =========================================================
   SECURITY METRICS
========================================================= */

function SecurityMetrics() {
  const metrics = [
    {
      label: "Security Domains",
      value: "08",
      Icon: ShieldCheck,
    },
    {
      label: "Workstreams",
      value: "12",
      Icon: Workflow,
    },
    {
      label: "Priorities",
      value: "07",
      Icon: Gauge,
    },
    {
      label: "Roadmap Waves",
      value: "04",
      Icon: GitBranch,
    },
  ];

  return (
    <div className="grid gap-4">
      {metrics.map((metric, index) => {
        const Icon = metric.Icon;

        return (
          <motion.div
            key={metric.label}
            whileHover={{
              y: -4,
            }}
            className="relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#060606] p-5"
          >
            <motion.div
              animate={{
                opacity: [0.03, 0.12, 0.03],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.3,
              }}
              className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#7046e6] blur-[50px]"
            />

            <div className="relative flex items-center justify-between">
              <div>
                <TinyLabel>{metric.label}</TinyLabel>

                <span className="mt-4 block text-4xl font-medium tracking-[-0.06em]">
                  {metric.value}
                </span>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8b5cf6]/20">
                <Icon
                  size={15}
                  className="text-[#c4b5fd]"
                />
              </div>
            </div>
          </motion.div>
        );
      })}

      <div className="rounded-[18px] border border-[#8b5cf6]/20 bg-[#7046e6]/[0.05] p-5">
        <div className="flex items-center gap-3">
          <BrainCircuit
            size={15}
            className="text-[#c4b5fd]"
          />

          <div>
            <span className="block text-[10px] text-white/55">
              Advisory Intelligence
            </span>

            <span className="mt-1 block text-[8px] leading-5 text-white/25">
              Security transformation planning active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   RECOMMENDATION CONSOLE
========================================================= */

function RecommendationConsole() {
  return (
    <div className="rounded-[20px] border border-white/[0.08] bg-[#060606] p-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[14px] font-medium text-white/70">
            Transformation Queue
          </span>

          <span className="mt-1 block font-mono text-[6px] text-white/20">
            PRIORITIZED SECURITY INITIATIVES
          </span>
        </div>

        <TinyLabel>04 Active</TinyLabel>
      </div>

      <div className="mt-5 space-y-2">
        {recommendations.map((item, index) => (
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
              delay: index * 0.07,
            }}
            whileHover={{
              x: 4,
              backgroundColor: "rgba(255,255,255,.025)",
            }}
            className="grid gap-3 rounded-[12px] border border-white/[0.05] p-4 md:grid-cols-[80px_1.4fr_.7fr_.7fr_20px] md:items-center"
          >
            <span className="font-mono text-[7px] text-[#a78bfa]">
              {item.id}
            </span>

            <span className="text-[10px] text-white/55">
              {item.title}
            </span>

            <span className="font-mono text-[6px] text-white/25">
              {item.category}
            </span>

            <div>
              <span className="font-mono text-[6px] text-[#c4b5fd]">
                {item.priority}
              </span>

              <span className="mt-1 block text-[7px] text-white/20">
                {item.status}
              </span>
            </div>

            <ChevronRight
              size={11}
              className="text-white/20"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   SECURITY THESIS
========================================================= */

function SecurityThesis() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-32 md:px-10">
      <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#5b21b6]/10 blur-[180px]" />

      <Container className="relative">
        <Reveal className="text-center">
          <SectionLabel number="01">
            Security Advisory
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[1050px] text-4xl font-semibold leading-[1] tracking-[-0.055em] md:text-6xl">
            Security decisions should connect technology risk with business
            direction.
          </h2>

          <p className="mx-auto mt-7 max-w-[900px] text-[13px] leading-7 text-white/[0.52]">
            Effective IT security consulting is not simply a list of controls.
            It creates a structured relationship between business priorities,
            technology architecture, cyber risk, operating capabilities and
            the investments required to improve security over time.
          </p>
        </Reveal>

        <SecurityAlignmentModel />
      </Container>
    </section>
  );
}

function SecurityAlignmentModel() {
  const items = [
    {
      Icon: Workflow,
      title: "Business",
      code: "01",
    },
    {
      Icon: Activity,
      title: "Risk",
      code: "02",
    },
    {
      Icon: Layers3,
      title: "Architecture",
      code: "03",
    },
    {
      Icon: ShieldCheck,
      title: "Controls",
      code: "04",
    },
    {
      Icon: Eye,
      title: "Operations",
      code: "05",
    },
  ];

  return (
    <div className="relative mt-16 grid gap-3 md:grid-cols-5">
      <div className="absolute left-[10%] right-[10%] top-[44px] hidden h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/45 to-transparent md:block" />

      <motion.div
        animate={{
          left: ["10%", "90%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[40px] z-30 hidden h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_20px_#8b5cf6] md:block"
      />

      {items.map(({ Icon, title, code }, index) => (
        <motion.div
          key={title}
          initial={{
            opacity: 0,
            y: 20,
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
            y: -6,
          }}
          className="relative z-20 rounded-[18px] border border-white/[0.08] bg-[#070707] p-5 text-center"
        >
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-black">
            <Icon
              size={17}
              className="text-[#c4b5fd]"
            />
          </div>

          <span className="mt-6 block font-mono text-[6px] text-[#8b5cf6]">
            ALIGNMENT / {code}
          </span>

          <h3 className="mt-2 text-[13px] font-medium">
            {title}
          </h3>
        </motion.div>
      ))}
    </div>
  );
}

/* =========================================================
   CONSULTING DOMAINS
========================================================= */

function ConsultingDomains() {
  return (
    <section className="border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <Reveal>
          <SectionLabel number="02">
            Consulting Domains
          </SectionLabel>

          <div className="mt-8 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <h2 className="max-w-[720px] text-5xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-6xl">
              Connect security

              <span className="block text-white/25">
                across the enterprise.
              </span>
            </h2>

            <p className="max-w-[650px] text-[13px] leading-7 text-white/[0.5]">
              Security programs become fragmented when identity, cloud,
              infrastructure, data and operations evolve independently. Our
              consulting approach connects these domains into one coherent
              security direction.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {consultingDomains.map((item, index) => {
            const Icon = item.Icon;

            return (
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
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -8,
                  borderColor: "rgba(167,139,250,.3)",
                }}
                className="group relative min-h-[315px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#070707] p-6"
              >
                <motion.div
                  className="absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-[#7046e6]/10 blur-[80px]"
                  whileHover={{
                    scale: 1.3,
                  }}
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04]">
                      <Icon
                        size={17}
                        className="text-[#c4b5fd]"
                      />
                    </div>

                    <span className="font-mono text-[7px] text-white/20">
                      {item.number}
                    </span>
                  </div>

                  <span className="mt-10 block font-mono text-[6px] text-[#a78bfa]">
                    {item.code}
                  </span>

                  <h3 className="mt-2 text-xl font-medium tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[11px] leading-7 text-white/[0.47]">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 font-mono text-[6px] text-[#a78bfa]">
                    CONSULTING DOMAIN
                    <ArrowRight size={9} />
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

/* =========================================================
   OPERATING MODEL
========================================================= */

function SecurityOperatingModel() {
  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <Reveal>
            <SectionLabel number="03">
              Security Operating Model
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Strategy becomes useful

              <span className="block text-[#a78bfa]">
                when it can operate.
              </span>
            </h2>

            <p className="mt-7 max-w-[520px] text-[12px] leading-7 text-white/[0.5]">
              We connect security strategy to governance, architecture,
              technology and operational responsibilities so recommendations
              can move from documents into repeatable enterprise capabilities.
            </p>
          </Reveal>

          <OperatingModelVisual />
        </div>
      </Container>
    </section>
  );
}

function OperatingModelVisual() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 35,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#050505] p-5 md:p-7"
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      <div className="relative">
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div>
            <TinyLabel>Operating Model Stack</TinyLabel>

            <h3 className="mt-2 text-lg font-medium">
              Security Capability System
            </h3>
          </div>

          <LiveDot />
        </div>

        <div className="mt-6 space-y-3">
          {operatingLayers.map((layer, index) => (
            <motion.div
              key={layer.label}
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                x: 5,
              }}
              className="relative overflow-hidden rounded-[14px] border border-white/[0.07] bg-black p-5"
            >
              <motion.div
                animate={{
                  width: [
                    `${25 + index * 12}%`,
                    `${55 + index * 8}%`,
                    `${25 + index * 12}%`,
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: index * 0.4,
                }}
                className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#7c3aed] to-transparent"
              />

              <div className="grid gap-3 md:grid-cols-[60px_140px_1fr] md:items-center">
                <span className="font-mono text-[7px] text-[#a78bfa]">
                  {layer.code}
                </span>

                <span className="text-[13px] font-medium">
                  {layer.label}
                </span>

                <span className="text-[10px] leading-6 text-white/[0.42]">
                  {layer.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   ADVISORY AREAS
========================================================= */

function AdvisoryAreas() {
  return (
    <section className="border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="04">
            Advisory Coverage
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[900px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Security expertise across the technology environment.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {advisoryAreas.map((area, index) => (
            <motion.div
              key={area}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.04,
              }}
              whileHover={{
                y: -5,
                borderColor: "rgba(167,139,250,.3)",
              }}
              className="flex min-h-[105px] items-center justify-between rounded-[16px] border border-white/[0.07] bg-[#070707] p-5"
            >
              <div>
                <span className="font-mono text-[6px] text-[#8b5cf6]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-2 text-[12px] font-medium text-white/65">
                  {area}
                </h3>
              </div>

              <ChevronRight
                size={13}
                className="text-white/20"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   SECURITY TRANSFORMATION ENGINE
========================================================= */

function TransformationEngine() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <TransformationVisual />

          <Reveal>
            <SectionLabel number="05">
              Transformation Engine
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Move from scattered controls

              <span className="block text-[#a78bfa]">
                to coordinated security.
              </span>
            </h2>

            <p className="mt-7 max-w-[530px] text-[12px] leading-7 text-white/[0.5]">
              Security transformation requires more than deploying additional
              tools. The architecture, operating processes, ownership model
              and technology controls need to evolve together.
            </p>

            <div className="mt-9 space-y-3">
              {[
                "Consolidate overlapping security capabilities",
                "Establish reusable security architecture patterns",
                "Align security ownership across technology teams",
                "Sequence improvements through practical roadmap waves",
                "Create measurable operational security capabilities",
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
                    delay: index * 0.06,
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
        </div>
      </Container>
    </section>
  );
}

function TransformationVisual() {
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
      className="relative min-h-[590px] overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#050505]"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#8b5cf6]/20"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.1]"
      />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/20"
      />

      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            boxShadow: [
              "0 0 20px rgba(124,58,237,.1)",
              "0 0 100px rgba(124,58,237,.4)",
              "0 0 20px rgba(124,58,237,.1)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="flex h-[145px] w-[145px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#7046e6]/10"
        >
          <BrainCircuit
            size={31}
            className="text-[#c4b5fd]"
          />

          <span className="mt-3 font-mono text-[6px] text-white/35">
            TRANSFORM
          </span>
        </motion.div>
      </div>

      <TransformationNode
        position="left-[8%] top-[12%]"
        title="Strategy"
        Icon={Workflow}
      />

      <TransformationNode
        position="right-[8%] top-[12%]"
        title="Architecture"
        Icon={Layers3}
      />

      <TransformationNode
        position="left-[7%] bottom-[14%]"
        title="Technology"
        Icon={Cpu}
      />

      <TransformationNode
        position="right-[7%] bottom-[14%]"
        title="Operations"
        Icon={Eye}
      />

      <motion.div
        animate={{
          top: ["5%", "95%", "5%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/35 to-transparent"
      />

      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
        <TinyLabel>Transformation Program</TinyLabel>

        <div className="flex items-center gap-2">
          <LiveDot />
          <TinyLabel>Active</TinyLabel>
        </div>
      </div>
    </motion.div>
  );
}

function TransformationNode({
  position,
  title,
  Icon,
}: {
  position: string;
  title: string;
  Icon: ElementType;
}) {
  return (
    <motion.div
      animate={{
        y: [-4, 4, -4],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className={`absolute ${position}`}
    >
      <div className="flex h-[85px] w-[110px] flex-col items-center justify-center rounded-[15px] border border-white/[0.1] bg-[#080808]">
        <Icon
          size={17}
          className="text-[#c4b5fd]"
        />

        <span className="mt-3 font-mono text-[6px] text-white/35">
          {title}
        </span>
      </div>
    </motion.div>
  );
}

/* =========================================================
   CONSULTING PROGRAM
========================================================= */

function ConsultingProgram() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[radial-gradient(circle_at_50%_0%,#251039_0%,#0c0610_34%,#000_72%)] px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="06">
            Consulting Program
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[900px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            From security questions to an executable program.
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

          {programSteps.map((item, index) => {
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

                <p className="mt-4 text-[10px] leading-6 text-white/[0.44]">
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
   ROADMAP
========================================================= */

function SecurityRoadmap() {
  const roadmap = [
    {
      wave: "WAVE 01",
      title: "Stabilize",
      text:
        "Address foundational weaknesses and clarify immediate security ownership.",
    },
    {
      wave: "WAVE 02",
      title: "Standardize",
      text:
        "Introduce consistent architecture patterns, security controls and governance.",
    },
    {
      wave: "WAVE 03",
      title: "Modernize",
      text:
        "Transform identity, cloud, network and operational security capabilities.",
    },
    {
      wave: "WAVE 04",
      title: "Optimize",
      text:
        "Improve automation, visibility, measurement and continuous security improvement.",
    },
  ];

  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal>
            <SectionLabel number="07">
              Security Roadmap
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Prioritize change.

              <span className="block text-[#a78bfa]">
                Sequence transformation.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[12px] leading-7 text-white/[0.5]">
              A practical roadmap organizes security initiatives into
              achievable waves so dependencies, architecture changes and
              operational improvements can evolve in a controlled sequence.
            </p>
          </Reveal>

          <div className="space-y-3">
            {roadmap.map((item, index) => (
              <motion.div
                key={item.title}
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
                  delay: index * 0.08,
                }}
                whileHover={{
                  x: 5,
                }}
                className="relative overflow-hidden rounded-[16px] border border-white/[0.08] bg-[#070707] p-6"
              >
                <motion.div
                  animate={{
                    width: ["10%", "85%", "10%"],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    delay: index * 0.4,
                  }}
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#7c3aed] to-transparent"
                />

                <div className="grid gap-4 md:grid-cols-[100px_160px_1fr] md:items-center">
                  <span className="font-mono text-[7px] text-[#a78bfa]">
                    {item.wave}
                  </span>

                  <h3 className="text-[15px] font-medium">
                    {item.title}
                  </h3>

                  <p className="text-[10px] leading-6 text-white/[0.43]">
                    {item.text}
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
   HUMAN + AI
========================================================= */

function HumanAISection() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="08">
            Human + Intelligence
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[950px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Expert security judgment supported by structured intelligence.
          </h2>

          <p className="mx-auto mt-6 max-w-[800px] text-[12px] leading-7 text-white/[0.5]">
            Security consulting requires context. Technology analysis can
            organize complex relationships, while experienced security
            judgment connects those signals to business priorities,
            architecture decisions and implementation realities.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-[1050px] gap-4 md:grid-cols-[1fr_150px_1fr] md:items-center">
          <IntelligenceCard
            Icon={BrainCircuit}
            label="INTELLIGENCE"
            title="Analyze complexity"
            text="Organize architecture, controls, dependencies, risk signals and security relationships."
          />

          <div className="relative hidden h-[150px] items-center justify-center md:flex">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[110px] w-[110px] rounded-full border border-dashed border-[#8b5cf6]/30"
            />

            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#7046e6]/10">
              <Zap
                size={20}
                className="text-[#c4b5fd]"
              />
            </div>
          </div>

          <IntelligenceCard
            Icon={ShieldCheck}
            label="EXPERTISE"
            title="Make decisions"
            text="Apply business context, security experience and practical judgment to prioritize meaningful change."
          />
        </div>
      </Container>
    </section>
  );
}

function IntelligenceCard({
  Icon,
  label,
  title,
  text,
}: {
  Icon: ElementType;
  label: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="min-h-[260px] rounded-[22px] border border-white/[0.08] bg-[#070707] p-7"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8b5cf6]/25">
        <Icon
          size={18}
          className="text-[#c4b5fd]"
        />
      </div>

      <span className="mt-10 block font-mono text-[7px] text-[#a78bfa]">
        {label}
      </span>

      <h3 className="mt-3 text-xl font-medium">
        {title}
      </h3>

      <p className="mt-4 text-[11px] leading-7 text-white/[0.45]">
        {text}
      </p>
    </motion.div>
  );
}

/* =========================================================
   PRINCIPLES
========================================================= */

function ConsultingPrinciples() {
  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <SectionLabel number="09">
              Consulting Principles
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Practical security.

              <span className="block text-white/25">
                Designed to move.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[12px] leading-7 text-white/[0.5]">
              Security recommendations should create a realistic path forward,
              not simply describe an ideal future state disconnected from
              business and technology constraints.
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

                  <p className="mt-2 text-[10px] leading-6 text-white/[0.46]">
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

function ConsultingOutcomes() {
  const outcomes = [
    {
      title: "Clear Direction",
      text:
        "Create a security strategy that connects technology priorities, risk and business requirements.",
    },
    {
      title: "Coherent Architecture",
      text:
        "Align identity, cloud, infrastructure, applications and data around consistent security patterns.",
    },
    {
      title: "Prioritized Investment",
      text:
        "Focus security investment on initiatives with meaningful business and risk impact.",
    },
    {
      title: "Executable Roadmap",
      text:
        "Translate recommendations into sequenced workstreams, ownership and practical transformation waves.",
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="10">
            Consulting Outcomes
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[900px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Create security direction your organization can execute.
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
              className="relative min-h-[285px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#070707] p-6"
            >
              <motion.div
                animate={{
                  opacity: [0.02, 0.09, 0.02],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.4,
                }}
                className="absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-[#7046e6] blur-[80px]"
              />

              <span className="relative font-mono text-[7px] text-[#a78bfa]">
                OUTCOME / 0{index + 1}
              </span>

              <div className="relative mt-14 flex h-11 w-11 items-center justify-center rounded-full border border-[#8b5cf6]/20">
                <CheckCircle2
                  size={15}
                  className="text-[#c4b5fd]"
                />
              </div>

              <h3 className="relative mt-7 text-xl font-medium">
                {item.title}
              </h3>

              <p className="relative mt-4 text-[11px] leading-7 text-white/[0.46]">
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
    <section className="bg-black px-5 pb-28 pt-12 md:px-10">
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
          className="relative overflow-hidden rounded-[30px] border border-[#6366f1]/25 bg-[#080a16] px-6 py-24 text-center"
        >
          <motion.div
            animate={{
              x: ["-20%", "20%", "-20%"],
              opacity: [0.2, 0.55, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute bottom-[-180px] left-1/2 h-[350px] w-[1000px] -translate-x-1/2 rounded-full bg-[#7046e6] blur-[130px]"
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
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.04]"
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
              <ShieldCheck
                size={23}
                className="text-[#c4b5fd]"
              />
            </motion.div>

            <span className="mt-7 block font-mono text-[7px] uppercase tracking-[0.25em] text-[#a78bfa]">
              HYI.AI / IT SECURITY CONSULTING
            </span>

            <h2 className="mx-auto mt-6 max-w-[880px] text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Build a security program that moves with your technology.
            </h2>

            <p className="mx-auto mt-5 max-w-[730px] text-[12px] leading-7 text-white/[0.5]">
              Connect cybersecurity strategy, architecture, governance and
              operational capabilities through a practical transformation
              roadmap.
            </p>

            <motion.a
              href="#mission-control"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mx-auto mt-9 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[11px] font-medium shadow-[0_0_45px_rgba(124,58,237,.3)]"
            >
              Start Security Consulting

              <ArrowRight size={13} />
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ITSecurityConsultingClient() {
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

      <SecurityThesis />

      <ConsultingDomains />

      <SecurityOperatingModel />

      <AdvisoryAreas />

      <TransformationEngine />

      <ConsultingProgram />

      <SecurityRoadmap />

      <HumanAISection />

      <ConsultingPrinciples />

      <ConsultingOutcomes />

      <FinalCTA />
    </div>
  );
}