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

const architectureLayers = [
  {
    id: "01",
    Icon: Cloud,
    title: "External & Cloud",
    code: "EXT",
    description:
      "Review internet-facing services, cloud workloads, SaaS integrations, ingress controls and external trust relationships.",
    status: "REVIEW",
  },
  {
    id: "02",
    Icon: Network,
    title: "Network Architecture",
    code: "NET",
    description:
      "Assess segmentation, routing, trust zones, east-west communication, remote connectivity and network enforcement points.",
    status: "ACTIVE",
  },
  {
    id: "03",
    Icon: ShieldCheck,
    title: "Identity & Access",
    code: "IAM",
    description:
      "Examine authentication paths, privileged access, authorization models, service identities and identity trust boundaries.",
    status: "ACTIVE",
  },
  {
    id: "04",
    Icon: Server,
    title: "Compute & Workloads",
    code: "CMP",
    description:
      "Review server, container, application and workload architecture for isolation, hardening and security control coverage.",
    status: "REVIEW",
  },
  {
    id: "05",
    Icon: Database,
    title: "Data Architecture",
    code: "DAT",
    description:
      "Evaluate sensitive data flows, storage boundaries, encryption points, access paths and protection requirements.",
    status: "ACTIVE",
  },
  {
    id: "06",
    Icon: Eye,
    title: "Detection Layer",
    code: "DET",
    description:
      "Understand whether architecture produces the telemetry and security context required for detection and investigation.",
    status: "REVIEW",
  },
];

const reviewDimensions = [
  {
    Icon: ShieldCheck,
    title: "Trust Boundaries",
    text:
      "Identify where systems, users, applications and networks cross security boundaries and where additional verification may be required.",
  },
  {
    Icon: Network,
    title: "Segmentation",
    text:
      "Review network and workload separation to understand whether compromise can move unnecessarily across the environment.",
  },
  {
    Icon: GitBranch,
    title: "Data Flows",
    text:
      "Map how sensitive information moves between applications, infrastructure, cloud platforms and third-party systems.",
  },
  {
    Icon: Cpu,
    title: "Workload Security",
    text:
      "Assess architecture decisions affecting workload isolation, service exposure, hardening and runtime protection.",
  },
  {
    Icon: Eye,
    title: "Security Visibility",
    text:
      "Evaluate whether important architectural components generate sufficient telemetry for monitoring and security operations.",
  },
  {
    Icon: BrainCircuit,
    title: "Control Placement",
    text:
      "Determine whether security controls are positioned at the right architectural enforcement points and trust transitions.",
  },
];

const findings = [
  {
    id: "ARC-017",
    title: "Flat East-West Trust",
    domain: "NETWORK",
    severity: "HIGH",
    location: "Production Zone",
  },
  {
    id: "ARC-024",
    title: "Shared Service Identity",
    domain: "IDENTITY",
    severity: "HIGH",
    location: "Application Tier",
  },
  {
    id: "ARC-031",
    title: "Telemetry Blind Spot",
    domain: "VISIBILITY",
    severity: "MEDIUM",
    location: "Data Services",
  },
  {
    id: "ARC-042",
    title: "Direct Database Path",
    domain: "DATA",
    severity: "HIGH",
    location: "Legacy Application",
  },
];

const reviewProcess = [
  {
    number: "01",
    title: "Discover",
    Icon: Eye,
    text:
      "Understand the business environment, critical systems, architecture scope and important security requirements.",
  },
  {
    number: "02",
    title: "Map",
    Icon: Network,
    text:
      "Build a structured view of applications, identities, infrastructure, integrations, trust zones and data movement.",
  },
  {
    number: "03",
    title: "Trace",
    Icon: GitBranch,
    text:
      "Trace authentication paths, communication flows, sensitive data movement and potential attack paths.",
  },
  {
    number: "04",
    title: "Evaluate",
    Icon: ShieldCheck,
    text:
      "Evaluate architectural decisions, control placement, segmentation and security design against target requirements.",
  },
  {
    number: "05",
    title: "Prioritize",
    Icon: Gauge,
    text:
      "Prioritize architecture findings according to exposure, business importance, dependencies and remediation effort.",
  },
  {
    number: "06",
    title: "Transform",
    Icon: RefreshCcw,
    text:
      "Translate review findings into practical architecture changes and a sequenced security improvement blueprint.",
  },
];

const principles = [
  "Design security around explicit trust boundaries.",
  "Minimize unnecessary communication paths.",
  "Verify identities before granting access.",
  "Separate critical workloads and sensitive data.",
  "Place controls close to meaningful enforcement points.",
  "Build visibility into important architectural flows.",
  "Reduce hidden dependencies and implicit trust.",
  "Review architecture continuously as systems evolve.",
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

  const heroY = useTransform(scrollY, [0, 750], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 650], [1, 0.15]);

  return (
    <section className="relative overflow-hidden bg-black px-5 md:px-10 ">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black 20%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 20%, transparent 90%)",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.18, 0.06],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="pointer-events-none absolute left-1/2 top-[520px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#6d28d9] blur-[220px]"
      />

      <Container className="relative">
        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
          }}
          className="mx-auto max-w-[1150px] text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.025] px-5 py-2.5"
          >
            <LiveDot />

            <span className="text-[10px] text-white/50">
              Security Architecture Review
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
              delay: 0.1,
            }}
            className="mx-auto mt-9 max-w-[1100px] text-[clamp(3.7rem,3.5vw,7.7rem)] font-semibold leading-[0.88] tracking-[-0.08em]"
          >
            See the system.

            <span className="block text-white/60">
              Trace the trust.
            </span>

            <span className="block text-[#a78bfa]">
              Secure the design.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mx-auto mt-8 max-w-[850px] text-[18px] leading-7 text-white/[0.52] "
          >
            HYI.AI Security Architecture Review examines how identities,
            applications, networks, cloud services, workloads and data connect
            across your technology environment — revealing architectural
            weaknesses, unnecessary trust and opportunities to strengthen
            security by design.
          </motion.p>

          <motion.a
            href="#architecture-command"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mx-auto mt-9 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[11px] font-medium shadow-[0_0_45px_rgba(124,58,237,.3)]"
          >
            Explore Architecture

            <ArrowRight size={13} />
          </motion.a>
        </motion.div>

        <div className="mt-20">
          <ArchitectureCommandCenter />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   COMMAND CENTER
========================================================= */

function ArchitectureCommandCenter() {
  return (
    <motion.div
      id="architecture-command"
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
        delay: 0.35,
      }}
      className="relative overflow-hidden rounded-[30px] border border-white/[0.13] bg-[#030303] shadow-[0_60px_180px_rgba(0,0,0,.95)]"
    >
      <motion.div
        animate={{
          x: ["-100%", "280%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 z-50 h-px w-[35%] bg-gradient-to-r from-transparent via-[#c4b5fd] to-transparent"
      />

      <CommandToolbar />

      <div className="grid min-h-[780px] lg:grid-cols-[88px_1fr]">
        <CommandSidebar />

        <div className="p-5 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <TinyLabel>
                Enterprise Security Architecture
              </TinyLabel>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                Architecture Command Center
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2">
                <LiveDot />
                <TinyLabel>Review Active</TinyLabel>
              </div>

              <div className="rounded-full bg-[#7046e6] px-5 py-2.5 text-[9px]">
                View Findings
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-4 xl:grid-cols-[1.4fr_.6fr]">
            <ArchitectureMap />

            <ArchitectureTelemetry />
          </div>

          <div className="mt-4">
            <FindingConsole />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CommandToolbar() {
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
          HYI.AI / ARCHITECTURE REVIEW
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

function CommandSidebar() {
  const icons: ElementType[] = [
    Network,
    ShieldCheck,
    GitBranch,
    Database,
    Eye,
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
          <Network size={17} className="text-black" />

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
              <Icon size={17} strokeWidth={1.5} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ARCHITECTURE MAP
========================================================= */

function ArchitectureMap() {
  return (
    <div className="relative min-h-[480px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#060606]">
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
        className="absolute left-0 right-0 z-30 h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/50 to-transparent"
      />

      <div className="relative z-20 flex items-center justify-between border-b border-white/[0.06] p-5">
        <div>
          <span className="text-[14px] font-medium text-white/70">
            Live Architecture Graph
          </span>

          <span className="mt-1 block font-mono text-[6px] text-white/20">
            TRUST + SYSTEM + DATA RELATIONSHIPS
          </span>
        </div>

        <div className="flex items-center gap-2">
          <LiveDot />
          <TinyLabel>Mapping</TinyLabel>
        </div>
      </div>

      <div className="relative h-[390px]">
        <svg
          viewBox="0 0 900 390"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          {[
            [450, 195, 140, 80],
            [450, 195, 140, 300],
            [450, 195, 310, 80],
            [450, 195, 590, 80],
            [450, 195, 760, 80],
            [450, 195, 760, 300],
            [450, 195, 590, 300],
            [450, 195, 310, 300],
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

        <ArchitectureNode
          className="left-[8%] top-[8%]"
          Icon={Cloud}
          title="Internet"
          code="EXT"
        />

        <ArchitectureNode
          className="left-[8%] bottom-[8%]"
          Icon={ShieldCheck}
          title="Identity"
          code="IAM"
        />

        <ArchitectureNode
          className="left-[30%] top-[8%]"
          Icon={Network}
          title="Gateway"
          code="GW"
        />

        <ArchitectureNode
          className="left-[30%] bottom-[8%]"
          Icon={Cpu}
          title="Workload"
          code="APP"
        />

        <ArchitectureNode
          className="right-[30%] top-[8%]"
          Icon={Server}
          title="Services"
          code="SVC"
        />

        <ArchitectureNode
          className="right-[30%] bottom-[8%]"
          Icon={Database}
          title="Data"
          code="DB"
        />

        <ArchitectureNode
          className="right-[8%] top-[8%]"
          Icon={Cloud}
          title="Cloud"
          code="CLD"
        />

        <ArchitectureNode
          className="right-[8%] bottom-[8%]"
          Icon={Eye}
          title="SOC"
          code="DET"
        />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-[135px] w-[135px] items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-dashed border-[#8b5cf6]/35"
            />

            <motion.div
              animate={{ rotate: -360 }}
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
              className="flex h-[82px] w-[82px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#7046e6]/10"
            >
              <ShieldCheck
                size={23}
                className="text-[#c4b5fd]"
              />

              <span className="mt-2 font-mono text-[5px] text-white/35">
                TRUST CORE
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArchitectureNode({
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
      <div className="min-w-[90px] rounded-[13px] border border-white/[0.1] bg-[#080808]/95 p-3 shadow-xl backdrop-blur">
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
          NODE / {code}
        </span>
      </div>
    </motion.div>
  );
}

/* =========================================================
   TELEMETRY
========================================================= */

function ArchitectureTelemetry() {
  const metrics = [
    {
      label: "Trust Zones",
      value: "08",
    },
    {
      label: "System Nodes",
      value: "24",
    },
    {
      label: "Data Paths",
      value: "17",
    },
    {
      label: "Findings",
      value: "09",
    },
  ];

  return (
    <div className="grid gap-4">
      {metrics.map((metric, index) => (
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

            <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#8b5cf6]/20">
              <Activity
                size={15}
                className="text-[#c4b5fd]"
              />
            </div>
          </div>
        </motion.div>
      ))}

      <div className="rounded-[18px] border border-[#8b5cf6]/20 bg-[#7046e6]/[0.05] p-5">
        <div className="flex items-center gap-3">
          <BrainCircuit
            size={15}
            className="text-[#c4b5fd]"
          />

          <div>
            <span className="block text-[10px] text-white/55">
              Architecture Intelligence
            </span>

            <span className="mt-1 block text-[8px] leading-5 text-white/25">
              Relationship and trust analysis active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FINDINGS
========================================================= */

function FindingConsole() {
  return (
    <div className="rounded-[20px] border border-white/[0.08] bg-[#060606] p-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[14px] font-medium text-white/70">
            Architecture Findings
          </span>

          <span className="mt-1 block font-mono text-[6px] text-white/20">
            DESIGN REVIEW OBSERVATIONS
          </span>
        </div>

        <TinyLabel>04 Priority</TinyLabel>
      </div>

      <div className="mt-5 space-y-2">
        {findings.map((finding, index) => (
          <motion.div
            key={finding.id}
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
            className="grid gap-3 rounded-[12px] border border-white/[0.05] p-4 md:grid-cols-[80px_1.2fr_.7fr_.7fr_20px] md:items-center"
          >
            <span className="font-mono text-[7px] text-[#a78bfa]">
              {finding.id}
            </span>

            <span className="text-[10px] text-white/55">
              {finding.title}
            </span>

            <span className="font-mono text-[6px] text-white/25">
              {finding.domain}
            </span>

            <div>
              <span
                className={
                  finding.severity === "HIGH"
                    ? "font-mono text-[6px] text-[#c4b5fd]"
                    : "font-mono text-[6px] text-white/30"
                }
              >
                {finding.severity}
              </span>

              <span className="mt-1 block text-[7px] text-white/20">
                {finding.location}
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
   THESIS
========================================================= */

function ArchitectureThesis() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-32 md:px-10">
      <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#5b21b6]/10 blur-[180px]" />

      <Container className="relative">
        <Reveal className="text-center">
          <SectionLabel number="01">
            Architecture Security
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[1050px] text-4xl font-semibold leading-[1] tracking-[-0.055em] md:text-6xl">
            Security is stronger when it is part of the architecture — not
            added after it.
          </h2>

          <p className="mx-auto mt-7 max-w-[900px] text-[13px] leading-7 text-white/[0.5]">
            Architecture review examines the relationships between technology
            components. The objective is to understand how trust, identity,
            network communication and data movement are designed across the
            environment.
          </p>
        </Reveal>

        <ArchitectureFlow />
      </Container>
    </section>
  );
}

function ArchitectureFlow() {
  const items = [
    {
      Icon: Cloud,
      title: "Users & External",
    },
    {
      Icon: ShieldCheck,
      title: "Identity",
    },
    {
      Icon: Network,
      title: "Network",
    },
    {
      Icon: Cpu,
      title: "Applications",
    },
    {
      Icon: Database,
      title: "Data",
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

      {items.map(({ Icon, title }, index) => (
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
            LAYER 0{index + 1}
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
   REVIEW DIMENSIONS
========================================================= */

function ReviewDimensions() {
  return (
    <section className="border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <Reveal>
          <SectionLabel number="02">
            Review Dimensions
          </SectionLabel>

          <div className="mt-8 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <h2 className="max-w-[700px] text-5xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-6xl">
              Review the design

              <span className="block text-white/25">
                behind the controls.
              </span>
            </h2>

            <p className="max-w-[650px] text-[13px] leading-7 text-white/[0.48]">
              Security architecture review focuses on structural decisions
              that determine how systems communicate, how access is granted,
              where trust exists and where security controls can be enforced.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviewDimensions.map((item, index) => {
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
                className="group relative min-h-[300px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#070707] p-6"
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
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-10 text-xl font-medium tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[11px] leading-7 text-white/[0.45]">
                    {item.text}
                  </p>

                  <div className="mt-7 flex items-center gap-2 font-mono text-[6px] text-[#a78bfa]">
                    REVIEW DIMENSION
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
   LAYERS
========================================================= */

function ArchitectureLayers() {
  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <Reveal>
            <SectionLabel number="03">
              Security Layers
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              One environment.

              <span className="block text-[#a78bfa]">
                Multiple trust layers.
              </span>
            </h2>

            <p className="mt-7 max-w-[510px] text-[12px] leading-7 text-white/[0.47]">
              Architecture review connects security across infrastructure,
              identity, applications and data instead of evaluating each area
              as an isolated control domain.
            </p>
          </Reveal>

          <div className="space-y-3">
            {architectureLayers.map((layer, index) => {
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
                    borderColor: "rgba(167,139,250,.28)",
                  }}
                  className="grid gap-5 rounded-[16px] border border-white/[0.07] bg-[#070707] p-5 md:grid-cols-[60px_170px_1fr_70px] md:items-center"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04]">
                    <Icon
                      size={15}
                      className="text-[#c4b5fd]"
                    />
                  </div>

                  <div>
                    <span className="font-mono text-[6px] text-[#a78bfa]">
                      {layer.id} / {layer.code}
                    </span>

                    <h3 className="mt-1 text-[14px] font-medium">
                      {layer.title}
                    </h3>
                  </div>

                  <p className="text-[10px] leading-6 text-white/[0.42]">
                    {layer.description}
                  </p>

                  <span className="font-mono text-[6px] text-white/25">
                    {layer.status}
                  </span>
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
   TRUST BOUNDARY VISUAL
========================================================= */

function TrustBoundarySection() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <TrustBoundaryModel />

          <Reveal>
            <SectionLabel number="04">
              Trust Boundary Analysis
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Make implicit trust

              <span className="block text-[#a78bfa]">
                visible.
              </span>
            </h2>

            <p className="mt-7 max-w-[540px] text-[12px] leading-7 text-white/[0.47]">
              Trust boundaries reveal where identities, workloads and data
              transition between different security contexts. These
              transitions are important places to validate identity, enforce
              policy and generate security visibility.
            </p>

            <div className="mt-9 space-y-3">
              {[
                "User → application trust",
                "Application → service trust",
                "Service → database trust",
                "Cloud → on-premises trust",
                "Third-party → enterprise trust",
                "Administrative trust paths",
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
        </div>
      </Container>
    </section>
  );
}

function TrustBoundaryModel() {
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
      className="relative min-h-[590px] overflow-hidden rounded-[28px] border border-white/[0.09] bg-black"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/10" />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#8b5cf6]/30"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.12]"
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
          className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#7046e6]/10"
        >
          <ShieldCheck
            size={30}
            className="text-[#c4b5fd]"
          />

          <span className="mt-3 font-mono text-[6px] text-white/35">
            VERIFY TRUST
          </span>
        </motion.div>
      </div>

      <BoundaryNode
        position="left-[8%] top-[14%]"
        label="External"
        Icon={Cloud}
      />

      <BoundaryNode
        position="right-[8%] top-[14%]"
        label="Identity"
        Icon={ShieldCheck}
      />

      <BoundaryNode
        position="left-[7%] bottom-[14%]"
        label="Workload"
        Icon={Cpu}
      />

      <BoundaryNode
        position="right-[7%] bottom-[14%]"
        label="Data"
        Icon={Database}
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
        <TinyLabel>Boundary Monitor</TinyLabel>

        <div className="flex items-center gap-2">
          <LiveDot />
          <TinyLabel>Active</TinyLabel>
        </div>
      </div>
    </motion.div>
  );
}

function BoundaryNode({
  position,
  label,
  Icon,
}: {
  position: string;
  label: string;
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
      <div className="flex h-[85px] w-[105px] flex-col items-center justify-center rounded-[15px] border border-white/[0.1] bg-[#080808]">
        <Icon
          size={17}
          className="text-[#c4b5fd]"
        />

        <span className="mt-3 font-mono text-[6px] text-white/35">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

/* =========================================================
   ATTACK PATH
========================================================= */

function AttackPathSection() {
  const path = [
    {
      Icon: Cloud,
      title: "External Entry",
      code: "01",
    },
    {
      Icon: ShieldCheck,
      title: "Identity",
      code: "02",
    },
    {
      Icon: Network,
      title: "Internal Network",
      code: "03",
    },
    {
      Icon: Server,
      title: "Application",
      code: "04",
    },
    {
      Icon: Database,
      title: "Sensitive Data",
      code: "05",
    },
  ];

  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="05">
            Attack Path Review
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[950px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Review architecture from an attacker&apos;s perspective.
          </h2>

          <p className="mx-auto mt-6 max-w-[820px] text-[13px] leading-7 text-white/[0.47]">
            Individual controls can appear effective in isolation while their
            combined architecture still creates an unintended path toward
            critical systems.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-3 md:grid-cols-5">
          <div className="absolute left-[10%] right-[10%] top-[55px] hidden h-px bg-white/[0.08] md:block" />

          <motion.div
            animate={{
              left: ["10%", "90%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[51px] z-30 hidden h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_25px_#8b5cf6] md:block"
          />

          {path.map(({ Icon, title, code }, index) => (
            <motion.div
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
                delay: index * 0.08,
              }}
              className="relative z-20"
            >
              <div className="rounded-[20px] border border-white/[0.08] bg-[#070707] p-5 text-center">
                <motion.div
                  animate={{
                    boxShadow:
                      index === 4
                        ? [
                            "0 0 0 rgba(124,58,237,0)",
                            "0 0 35px rgba(124,58,237,.4)",
                            "0 0 0 rgba(124,58,237,0)",
                          ]
                        : "0 0 0 rgba(0,0,0,0)",
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-black"
                >
                  <Icon
                    size={20}
                    className="text-[#c4b5fd]"
                  />
                </motion.div>

                <span className="mt-6 block font-mono text-[6px] text-[#a78bfa]">
                  PATH / {code}
                </span>

                <h3 className="mt-2 text-[13px] font-medium">
                  {title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-[800px] rounded-[15px] border border-[#8b5cf6]/15 bg-[#7046e6]/[0.04] p-5 text-center">
          <span className="font-mono text-[7px] text-[#a78bfa]">
            ARCHITECTURE QUESTION
          </span>

          <p className="mt-3 text-[11px] leading-6 text-white/45">
            If one layer is compromised, what architectural decisions prevent
            an attacker from reaching the next?
          </p>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   ZERO TRUST
========================================================= */

function ZeroTrustArchitecture() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <Reveal>
            <SectionLabel number="06">
              Zero Trust Architecture
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Replace implicit trust

              <span className="block text-[#a78bfa]">
                with explicit verification.
              </span>
            </h2>

            <p className="mt-7 max-w-[530px] text-[12px] leading-7 text-white/[0.47]">
              Architecture review can identify opportunities to move from
              broad network-based trust toward identity-aware, policy-driven
              and context-sensitive access decisions.
            </p>
          </Reveal>

          <ZeroTrustModel />
        </div>
      </Container>
    </section>
  );
}

function ZeroTrustModel() {
  const checks = [
    "Identity",
    "Device",
    "Context",
    "Policy",
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-[26px] border border-white/[0.09] bg-black p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <TinyLabel>Access Decision Engine</TinyLabel>

          <h3 className="mt-2 text-xl font-medium">
            Verify → Decide → Enforce
          </h3>
        </div>

        <LiveDot />
      </div>

      <div className="mt-9 grid gap-3 md:grid-cols-[.7fr_1.3fr_.7fr] md:items-center">
        <div className="rounded-[16px] border border-white/[0.08] bg-[#070707] p-5 text-center">
          <ShieldCheck
            size={22}
            className="mx-auto text-[#c4b5fd]"
          />

          <span className="mt-4 block text-[10px] text-white/50">
            Request
          </span>

          <TinyLabel>User + Device</TinyLabel>
        </div>

        <div className="relative rounded-[18px] border border-[#8b5cf6]/20 bg-[#7046e6]/[0.04] p-5">
          <motion.div
            animate={{
              x: ["-100%", "180%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 h-px w-[50%] bg-gradient-to-r from-transparent via-[#c4b5fd] to-transparent"
          />

          <div className="grid grid-cols-2 gap-2">
            {checks.map((check, index) => (
              <motion.div
                key={check}
                animate={{
                  borderColor: [
                    "rgba(255,255,255,.06)",
                    "rgba(139,92,246,.3)",
                    "rgba(255,255,255,.06)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="rounded-[10px] border bg-black p-4 text-center"
              >
                <CheckCircle2
                  size={12}
                  className="mx-auto text-[#a78bfa]"
                />

                <span className="mt-2 block font-mono text-[6px] text-white/35">
                  {check}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="rounded-[16px] border border-white/[0.08] bg-[#070707] p-5 text-center">
          <Server
            size={22}
            className="mx-auto text-[#c4b5fd]"
          />

          <span className="mt-4 block text-[10px] text-white/50">
            Resource
          </span>

          <TinyLabel>Protected</TinyLabel>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   REVIEW PROCESS
========================================================= */

function ReviewProcess() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#251039_0%,#0c0610_34%,#000_72%)] px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="07">
            Review Methodology
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[900px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            From architecture discovery to security blueprint.
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

          {reviewProcess.map((item, index) => {
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
   BLUEPRINT
========================================================= */

function SecurityBlueprint() {
  const items = [
    {
      number: "01",
      title: "Reduce Trust",
      text:
        "Remove unnecessary implicit trust between identities, networks, workloads and services.",
    },
    {
      number: "02",
      title: "Strengthen Boundaries",
      text:
        "Introduce clear architectural boundaries around critical systems and sensitive data.",
    },
    {
      number: "03",
      title: "Improve Enforcement",
      text:
        "Position identity, network and workload controls where architectural decisions can be enforced.",
    },
    {
      number: "04",
      title: "Increase Visibility",
      text:
        "Generate security telemetry at important architectural transitions and high-value system paths.",
    },
  ];

  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="08">
            Security Blueprint
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[900px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Turn architecture findings into design improvements.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {items.map((item, index) => (
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
              className="relative min-h-[300px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#070707] p-6"
            >
              <motion.div
                animate={{
                  opacity: [0.03, 0.12, 0.03],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-[#7046e6] blur-[80px]"
              />

              <span className="relative font-mono text-[7px] text-[#a78bfa]">
                BLUEPRINT / {item.number}
              </span>

              <div className="relative mt-14 flex h-12 w-12 items-center justify-center rounded-full border border-[#8b5cf6]/20">
                <Network
                  size={17}
                  className="text-[#c4b5fd]"
                />
              </div>

              <h3 className="relative mt-7 text-xl font-medium">
                {item.title}
              </h3>

              <p className="relative mt-4 text-[11px] leading-7 text-white/[0.44]">
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
   PRINCIPLES
========================================================= */

function ArchitecturePrinciples() {
  return (
    <section className="border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <SectionLabel number="09">
              Design Principles
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Secure by design.

              <span className="block text-white/25">
                Visible by default.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[12px] leading-7 text-white/[0.47]">
              Architecture principles create reusable guidance for future
              technology decisions instead of solving every security problem
              independently.
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

function ArchitectureOutcomes() {
  const outcomes = [
    {
      title: "Architecture Visibility",
      text:
        "Create a clearer understanding of how identities, applications, infrastructure and data interact across the environment.",
    },
    {
      title: "Trust Reduction",
      text:
        "Identify unnecessary implicit trust and opportunities to introduce stronger verification and isolation.",
    },
    {
      title: "Attack Path Awareness",
      text:
        "Understand how multiple architectural weaknesses could combine into a path toward important systems.",
    },
    {
      title: "Security Blueprint",
      text:
        "Translate review findings into practical architecture improvements and future design guidance.",
    },
  ];

  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="10">
            Architecture Outcomes
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[900px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Build an architecture that makes security easier to enforce.
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
              className="relative min-h-[280px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#060606] p-6"
            >
              <span className="font-mono text-[7px] text-[#a78bfa]">
                0{index + 1}
              </span>

              <h3 className="mt-16 text-xl font-medium">
                {item.title}
              </h3>

              <p className="mt-4 text-[11px] leading-7 text-white/[0.45]">
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
   CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="bg-black px-5 pb-28 pt-10 md:px-10">
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

            <h2 className="mx-auto mt-8 max-w-[850px] text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Review the architecture before weaknesses become attack paths.
            </h2>

            <p className="mx-auto mt-5 max-w-[720px] text-[12px] leading-7 text-white/[0.48]">
              Understand trust relationships, security boundaries, data flows
              and architectural dependencies across your technology
              environment.
            </p>

            <motion.a
              href="#architecture-command"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mx-auto mt-9 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[11px] font-medium shadow-[0_0_45px_rgba(124,58,237,.3)]"
            >
              Start Architecture Review

              <ArrowRight size={13} />
            </motion.a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function SecurityArchitectureReviewClient() {
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

      <ArchitectureThesis />

      <ReviewDimensions />

      <ArchitectureLayers />

      <TrustBoundarySection />

      <AttackPathSection />

      <ZeroTrustArchitecture />

      <ReviewProcess />

      <SecurityBlueprint />

      <ArchitecturePrinciples />

      <ArchitectureOutcomes />

      <FinalCTA />
    </div>
  );
}