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
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Cloud,
  Database,
  Eye,
  FileSearch,
  Gauge,
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
   TYPES
========================================================= */

type AuditStatus = "PASS" | "REVIEW" | "GAP";

type AuditRow = {
  control: string;
  domain: string;
  evidence: string;
  status: AuditStatus;
};

type Capability = {
  number: string;
  title: string;
  text: string;
  Icon: ElementType;
};

/* =========================================================
   DATA
========================================================= */

const auditBars = [38, 56, 48, 72, 62, 84, 68, 91, 77, 88, 82, 96];

const auditRows: AuditRow[] = [
  {
    control: "Identity Governance",
    domain: "Identity & Access",
    evidence: "24 artifacts",
    status: "PASS",
  },
  {
    control: "Cloud Configuration",
    domain: "Cloud Security",
    evidence: "18 artifacts",
    status: "REVIEW",
  },
  {
    control: "Privileged Access",
    domain: "Access Control",
    evidence: "11 artifacts",
    status: "GAP",
  },
  {
    control: "Security Logging",
    domain: "Detection",
    evidence: "32 artifacts",
    status: "PASS",
  },
];

const capabilities: Capability[] = [
  {
    number: "01",
    title: "Security Control Review",
    text: "Review how cybersecurity controls are designed, implemented and evidenced across relevant systems, platforms, processes and operational environments.",
    Icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Evidence Assessment",
    text: "Collect and evaluate relevant documentation, configurations, policies, operational records and technical evidence required to understand control implementation.",
    Icon: FileSearch,
  },
  {
    number: "03",
    title: "Gap Identification",
    text: "Identify control weaknesses, missing safeguards, inconsistent implementation and areas requiring additional validation or remediation.",
    Icon: Activity,
  },
  {
    number: "04",
    title: "Cloud & Infrastructure Audit",
    text: "Assess selected cloud, infrastructure, network and platform security controls against defined organizational or assessment requirements.",
    Icon: Cloud,
  },
  {
    number: "05",
    title: "Risk Context",
    text: "Connect audit observations with business criticality, technology exposure and relevant security risk so findings have meaningful operational context.",
    Icon: Gauge,
  },
  {
    number: "06",
    title: "Remediation Planning",
    text: "Turn audit findings into structured remediation actions with clearer ownership, priorities, dependencies and follow-up validation.",
    Icon: Workflow,
  },
];

const domains = [
  {
    Icon: ShieldCheck,
    title: "Identity & Access",
    text: "Authentication, authorization, privileged access and identity governance.",
  },
  {
    Icon: Network,
    title: "Network Security",
    text: "Segmentation, connectivity, perimeter controls and network visibility.",
  },
  {
    Icon: Cloud,
    title: "Cloud Security",
    text: "Cloud configuration, workload protection and governance controls.",
  },
  {
    Icon: Server,
    title: "Infrastructure",
    text: "Server, endpoint, platform and infrastructure security controls.",
  },
  {
    Icon: Database,
    title: "Data Protection",
    text: "Data access, protection, handling and relevant governance controls.",
  },
  {
    Icon: Activity,
    title: "Security Operations",
    text: "Logging, monitoring, detection, response and operational processes.",
  },
];

const auditProcess = [
  {
    number: "01",
    title: "Scope",
    text: "Define audit objectives, systems, business processes, environments and relevant assessment boundaries.",
    Icon: Layers3,
  },
  {
    number: "02",
    title: "Collect",
    text: "Gather policies, configurations, records, architecture information and supporting security evidence.",
    Icon: Database,
  },
  {
    number: "03",
    title: "Validate",
    text: "Review evidence and evaluate whether selected controls are appropriately implemented and operating.",
    Icon: Eye,
  },
  {
    number: "04",
    title: "Analyze",
    text: "Identify gaps, weaknesses, inconsistencies and relevant security observations requiring attention.",
    Icon: Activity,
  },
  {
    number: "05",
    title: "Report",
    text: "Structure findings with evidence, context, priority and clear remediation considerations.",
    Icon: FileSearch,
  },
  {
    number: "06",
    title: "Improve",
    text: "Track remediation activities and validate improvements where follow-up assessment is required.",
    Icon: RefreshCcw,
  },
];

const principles = [
  "Define the audit scope before evidence collection begins.",
  "Connect every material finding with appropriate supporting evidence.",
  "Separate confirmed control gaps from observations requiring additional validation.",
  "Evaluate security controls in the context of the systems and processes they protect.",
  "Prioritize remediation using relevant risk and business context.",
  "Maintain clear ownership for findings and corrective actions.",
  "Use consistent assessment criteria across comparable environments.",
  "Treat auditing as part of continuous security improvement rather than a one-time exercise.",
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

function TinyLabel({
  children,
  purple = false,
}: {
  children: ReactNode;
  purple?: boolean;
}) {
  return (
    <span
      className={`font-mono text-[8px] uppercase tracking-[0.18em] ${
        purple ? "text-[#c4b5fd]" : "text-white/30"
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

  const contentY = useTransform(scrollY, [0, 600], [0, 60]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  const consoleY = useTransform(scrollY, [0, 800], [0, 100]);
  const consoleScale = useTransform(scrollY, [0, 800], [1, 0.96]);

  return (
    <section className="relative overflow-hidden bg-black px-5 pb-24 pt-16 md:px-10 md:pt-24">
      {/* GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />

      {/* GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.07, 0.15, 0.07],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[440px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#6d28d9] blur-[220px]"
      />

      <Container className="relative">
        <motion.div
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
          className="mx-auto max-w-[1050px] text-center"
        >
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/[0.16] bg-white/[0.025] px-5 py-2.5"
          >
            <motion.span
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]"
            />

            <span className="text-[11px] text-white/55">
              Cybersecurity Auditing & Control Assurance
            </span>
          </motion.div>

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
              duration: 0.9,
              delay: 0.1,
            }}
            className="mx-auto mt-8 max-w-[1100px] text-[clamp(3.3rem,7vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.07em]"
          >
            Audit What Protects

            <span className="block text-white/65">
              Your Business.
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
              delay: 0.35,
              duration: 0.7,
            }}
            className="mx-auto mt-8 max-w-[800px] text-[17px] leading-8 text-white/[0.52]"
          >
            Evaluate cybersecurity controls, collect relevant evidence,
            identify security gaps and create a clearer remediation path across
            identity, cloud, infrastructure, data and security operations.
          </motion.p>

          <motion.a
            href="#audit-overview"
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.5,
            }}
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[12px] font-medium shadow-[0_0_45px_rgba(124,58,237,.3)]"
          >
            Explore Security Audit

            <ArrowRight size={13} />
          </motion.a>
        </motion.div>

        <motion.div
          style={{
            y: consoleY,
            scale: consoleScale,
          }}
          className="relative mt-20"
        >
          <AuditCommandCenter />
        </motion.div>
      </Container>
    </section>
  );
}

/* =========================================================
   AUDIT COMMAND CENTER
========================================================= */

function AuditCommandCenter() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
        scale: 0.95,
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
      className="relative overflow-hidden rounded-[30px] border border-white/[0.16] bg-[#030303] shadow-[0_50px_150px_rgba(0,0,0,.85)]"
    >
      <motion.div
        animate={{
          x: ["-100%", "220%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute top-0 z-30 h-px w-1/2 bg-gradient-to-r from-transparent via-[#a78bfa] to-transparent"
      />

      {/* BROWSER BAR */}
      <div className="flex items-center justify-between border-b border-white/[0.12] px-5 py-4 md:px-7">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ed6a5e]" />
          <span className="h-3 w-3 rounded-full bg-[#f4bf4f]" />
          <span className="h-3 w-3 rounded-full bg-[#61c454]" />

          <span className="ml-5 hidden text-white/25 md:block">
            ◧
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2">
          <ShieldCheck size={10} className="text-[#a78bfa]" />

          <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-white/35">
            HYI.AI / AUDIT CONTROL CENTER
          </span>
        </div>

        <div className="hidden items-center gap-4 text-white/25 sm:flex">
          <RefreshCcw size={12} />
          <Eye size={12} />
          <CircleDot size={12} />
        </div>
      </div>

      <div className="grid min-h-[700px] lg:grid-cols-[82px_1fr]">
        <AuditSidebar />

        <div className="p-5 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <TinyLabel>Cybersecurity Audit Workspace</TinyLabel>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                Enterprise Security Audit
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2">
                <motion.span
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]"
                />

                <span className="font-mono text-[7px] text-white/35">
                  AUDIT ACTIVE
                </span>
              </div>

              <button className="rounded-full bg-[#7046e6] px-5 py-2.5 text-[9px]">
                Audit Report
              </button>
            </div>
          </div>

          <div className="mt-7 grid gap-4 xl:grid-cols-[1.25fr_.75fr_.75fr]">
            <AuditProgressChart />

            <AuditMetric
              label="Controls Reviewed"
              value="184"
              progress={82}
            />

            <AuditMetric
              label="Evidence Coverage"
              value="91%"
              progress={91}
            />
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1.45fr_.75fr]">
            <ControlTable />

            <RiskRadar />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   SIDEBAR
========================================================= */

function AuditSidebar() {
  const icons = [
    ShieldCheck,
    FileSearch,
    Activity,
    Database,
    Network,
    Workflow,
  ];

  return (
    <div className="hidden border-r border-white/[0.10] lg:block">
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
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white"
        >
          <ShieldCheck size={16} className="text-[#7046e6]" />
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
                index === 0 ? "text-[#c4b5fd]" : "text-white/25"
              }
            >
              <Icon size={16} strokeWidth={1.5} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PROGRESS CHART
========================================================= */

function AuditProgressChart() {
  return (
    <div className="rounded-[18px] border border-white/[0.08] bg-[#070707] p-5">
      <div className="flex items-start justify-between">
        <div>
          <span className="block text-[15px] font-medium text-white/75">
            Audit Coverage
          </span>

          <span className="mt-2 block text-[8px] text-white/25">
            Control assessment progression
          </span>
        </div>

        <TinyLabel purple>Live Review</TinyLabel>
      </div>

      <div className="mt-8 flex h-[210px] items-end gap-2 border-b border-white/[0.08]">
        {auditBars.map((value, index) => (
          <div
            key={index}
            className="flex h-full flex-1 flex-col justify-end"
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
              }}
              className={`relative rounded-t-full ${
                index === 7
                  ? "bg-[#7046e6]"
                  : "bg-white/[0.17]"
              }`}
            >
              {index === 7 && (
                <motion.span
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                  className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#c4b5fd]"
                />
              )}
            </motion.div>

            <span className="mt-3 text-center font-mono text-[6px] text-white/20">
              C{index + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   AUDIT METRIC
========================================================= */

function AuditMetric({
  label,
  value,
  progress,
}: {
  label: string;
  value: string;
  progress: number;
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="rounded-[18px] border border-white/[0.08] bg-[#070707] p-5"
    >
      <TinyLabel>{label}</TinyLabel>

      <span className="mt-8 block text-5xl font-medium tracking-[-0.06em]">
        {value}
      </span>

      <span className="mt-3 block text-[8px] text-white/25">
        Illustrative audit interface data
      </span>

      <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/[0.08]">
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${progress}%`,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.3,
          }}
          className="h-full rounded-full bg-[#8b5cf6]"
        />
      </div>

      <div className="mt-7 flex items-end gap-1">
        {Array.from({ length: 16 }).map((_, index) => (
          <motion.span
            key={index}
            animate={{
              height: [5, 15, 7, 20, 5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.06,
            }}
            className="w-[3px] bg-[#8b5cf6]/60"
          />
        ))}
      </div>
    </motion.div>
  );
}

/* =========================================================
   CONTROL TABLE
========================================================= */

function ControlTable() {
  const statusClasses: Record<AuditStatus, string> = {
    PASS: "text-[#c4b5fd]",
    REVIEW: "text-white/50",
    GAP: "text-[#a78bfa]",
  };

  return (
    <div className="rounded-[18px] border border-white/[0.08] bg-[#070707] p-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="block text-[15px] font-medium text-white/75">
            Control Evidence Review
          </span>

          <span className="mt-1 block text-[8px] text-white/20">
            Audit evidence and assessment status
          </span>
        </div>

        <FileSearch size={15} className="text-[#a78bfa]" />
      </div>

      <div className="mt-6 grid grid-cols-[1.2fr_.8fr_.6fr_.5fr] border-b border-white/[0.07] pb-3">
        <TinyLabel>Control</TinyLabel>
        <TinyLabel>Domain</TinyLabel>
        <TinyLabel>Evidence</TinyLabel>
        <TinyLabel>Status</TinyLabel>
      </div>

      <div className="mt-2">
        {auditRows.map((row, index) => (
          <motion.div
            key={row.control}
            initial={{
              opacity: 0,
              x: -15,
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
            className="grid grid-cols-[1.2fr_.8fr_.6fr_.5fr] items-center border-b border-white/[0.05] py-4"
          >
            <span className="text-[9px] text-white/60">
              {row.control}
            </span>

            <span className="text-[8px] text-white/30">
              {row.domain}
            </span>

            <span className="font-mono text-[7px] text-white/30">
              {row.evidence}
            </span>

            <span
              className={`font-mono text-[7px] ${statusClasses[row.status]}`}
            >
              {row.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   RISK RADAR
========================================================= */

function RiskRadar() {
  const nodes = [
    { left: "50%", top: "8%" },
    { left: "83%", top: "30%" },
    { left: "78%", top: "72%" },
    { left: "50%", top: "88%" },
    { left: "17%", top: "70%" },
    { left: "12%", top: "30%" },
  ];

  return (
    <div className="relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#070707] p-5">
      <TinyLabel>Finding Distribution</TinyLabel>

      <div className="relative mx-auto mt-6 h-[250px] w-[250px]">
        {[0, 1, 2].map((ring) => (
          <div
            key={ring}
            style={{
              inset: `${ring * 35}px`,
            }}
            className="absolute rounded-full border border-white/[0.08]"
          />
        ))}

        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.06]" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.06]" />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute left-1/2 top-1/2 h-1/2 w-1/2 origin-top-left"
            style={{
              background:
                "linear-gradient(135deg, rgba(139,92,246,.22), transparent 60%)",
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
            }}
          />
        </motion.div>

        {nodes.map((node, index) => (
          <motion.span
            key={index}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.25,
            }}
            style={{
              left: node.left,
              top: node.top,
            }}
            className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a78bfa] shadow-[0_0_15px_rgba(167,139,250,.7)]"
          />
        ))}

        <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-black">
          <ShieldCheck size={20} className="text-[#c4b5fd]" />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   INTRO
========================================================= */

function AuditOverview() {
  return (
    <section
      id="audit-overview"
      className="relative overflow-hidden bg-black px-5 py-28 md:px-10"
    >
      <motion.div
        animate={{
          x: ["-8%", "8%", "-8%"],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-0 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-[#6d28d9] blur-[200px]"
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <SectionLabel number="01">
              Cybersecurity Auditing
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Evidence before

              <span className="block text-white/25">
                assumption.
              </span>
            </h2>

            <p className="mt-7 max-w-[570px] text-[13px] leading-8 text-white/[0.55]">
              Cybersecurity auditing provides a structured way to examine
              security controls and understand whether relevant safeguards are
              appropriately designed, implemented and supported by evidence.
              The objective is not simply to produce a list of findings, but to
              create a clearer picture of the organization&apos;s security control
              environment.
            </p>

            <p className="mt-5 max-w-[570px] text-[13px] leading-8 text-white/[0.45]">
              Our approach connects technical review, documentation, evidence,
              control observations and remediation planning so audit results
              can support meaningful security improvement.
            </p>
          </motion.div>

          <AuditScopeModel />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   AUDIT SCOPE MODEL
========================================================= */

function AuditScopeModel() {
  const nodes = [
    {
      Icon: ShieldCheck,
      title: "Identity",
      position: "left-[5%] top-[16%]",
    },
    {
      Icon: Cloud,
      title: "Cloud",
      position: "right-[5%] top-[16%]",
    },
    {
      Icon: Network,
      title: "Network",
      position: "left-[3%] bottom-[14%]",
    },
    {
      Icon: Database,
      title: "Data",
      position: "right-[3%] bottom-[14%]",
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.92,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      className="relative min-h-[540px] overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#060606]"
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.055) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d28d9]/10 blur-[80px]" />

      <svg className="absolute inset-0 h-full w-full">
        {[
          ["18%", "25%", "50%", "50%"],
          ["82%", "25%", "50%", "50%"],
          ["18%", "75%", "50%", "50%"],
          ["82%", "75%", "50%", "50%"],
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
              duration: 1.5,
              delay: index * 0.1,
            }}
          />
        ))}
      </svg>

      {nodes.map(({ Icon, title, position }, index) => (
        <motion.div
          key={title}
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 3 + index * 0.3,
            repeat: Infinity,
          }}
          className={`absolute ${position} z-20 w-[125px] rounded-[16px] border border-white/[0.10] bg-black/90 p-4`}
        >
          <Icon size={15} className="text-[#c4b5fd]" />

          <span className="mt-3 block text-[10px] text-white/55">
            {title}
          </span>

          <span className="mt-1 block font-mono text-[6px] text-white/20">
            AUDIT DOMAIN
          </span>
        </motion.div>
      ))}

      <div className="absolute left-1/2 top-1/2 z-20 flex h-[155px] w-[155px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 15,
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
          className="absolute inset-[18px] rounded-full border border-white/[0.10]"
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="flex h-[88px] w-[88px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#7046e6]/10 shadow-[0_0_60px_rgba(124,58,237,.25)]"
        >
          <FileSearch size={25} className="text-[#c4b5fd]" />

          <span className="mt-2 font-mono text-[6px] text-white/40">
            AUDIT
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   CAPABILITIES
========================================================= */

function AuditCapabilities() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel number="02">
              Audit Capabilities
            </SectionLabel>
          </div>

          <h2 className="mx-auto mt-8 max-w-[900px] text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Examine Security From Control To Evidence
          </h2>

          <p className="mx-auto mt-5 max-w-[900px] text-[13px] leading-7 text-white/[0.52]">
            A structured audit should make it easier to understand what is
            implemented, what evidence supports it, where uncertainty remains
            and which gaps require further action.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => {
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
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative min-h-[310px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-black p-7"
              >
                <div className="absolute -right-20 -top-20 h-[180px] w-[180px] rounded-full bg-[#7046e6]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#7046e6]/15" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.04]">
                      <Icon size={17} className="text-[#c4b5fd]" />
                    </div>

                    <span className="font-mono text-[7px] text-[#8b5cf6]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-10 text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[12px] leading-7 text-white/[0.50]">
                    {item.text}
                  </p>

                  <div className="mt-7 flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.12em] text-[#a78bfa]">
                    Audit Capability

                    <ChevronRight size={10} />
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
   AUDIT DOMAINS
========================================================= */

function AuditDomains() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5b21b6]/10 blur-[180px]" />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel number="03">
              Audit Domains
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Review security

              <span className="block text-white/25">
                across the stack.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[13px] leading-8 text-white/[0.50]">
              Audit scope can span multiple security domains depending on the
              organization&apos;s environment, assessment objectives and relevant
              business requirements.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {domains.map(({ Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  x: 25,
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
                whileHover={{
                  x: 5,
                }}
                className="rounded-[18px] border border-white/[0.08] bg-[#060606] p-6"
              >
                <div className="flex items-center justify-between">
                  <Icon size={17} className="text-[#c4b5fd]" />

                  <span className="font-mono text-[7px] text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-[17px] font-medium">
                  {title}
                </h3>

                <p className="mt-3 text-[11px] leading-6 text-white/[0.45]">
                  {text}
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
   FINDINGS MATRIX
========================================================= */

function FindingsMatrix() {
  const matrix = [
    [1, 2, 1, 0, 0],
    [2, 3, 2, 1, 0],
    [1, 2, 3, 2, 1],
    [0, 1, 2, 3, 2],
    [0, 0, 1, 2, 3],
  ];

  return (
    <section className="border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[26px] border border-white/[0.09] bg-black p-7">
            <div className="flex items-center justify-between">
              <div>
                <TinyLabel>Audit Finding Matrix</TinyLabel>

                <h3 className="mt-3 text-xl font-medium">
                  Risk Context
                </h3>
              </div>

              <Activity size={17} className="text-[#a78bfa]" />
            </div>

            <div className="mt-10 grid grid-cols-5 gap-2">
              {matrix.flatMap((row, rowIndex) =>
                row.map((value, colIndex) => (
                  <motion.div
                    key={`${rowIndex}-${colIndex}`}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: (rowIndex * 5 + colIndex) * 0.025,
                    }}
                    className={`aspect-square rounded-[10px] border ${
                      value === 3
                        ? "border-[#8b5cf6]/40 bg-[#8b5cf6]/30"
                        : value === 2
                          ? "border-[#8b5cf6]/20 bg-[#8b5cf6]/15"
                          : value === 1
                            ? "border-white/[0.08] bg-white/[0.06]"
                            : "border-white/[0.05] bg-white/[0.02]"
                    }`}
                  />
                )),
              )}
            </div>

            <div className="mt-7 flex items-center justify-between font-mono text-[7px] uppercase tracking-[0.12em] text-white/25">
              <span>Lower Context</span>
              <span>Higher Context</span>
            </div>
          </div>

          <div>
            <SectionLabel number="04">
              Findings & Risk Context
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Findings need

              <span className="block text-white/25">
                meaningful context.
              </span>
            </h2>

            <p className="mt-7 max-w-[560px] text-[13px] leading-8 text-white/[0.52]">
              Not every audit observation represents the same level of
              security concern. Findings should be interpreted using relevant
              evidence, system criticality, exposure, control dependencies and
              business context before remediation priorities are established.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Evidence-supported observations",
                "Clear affected security domain",
                "Relevant risk and business context",
                "Defined remediation ownership",
              ].map((item, index) => (
                <motion.div
                  key={item}
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
                    delay: index * 0.08,
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={13}
                    className="text-[#a78bfa]"
                  />

                  <span className="text-[11px] text-white/45">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   AUDIT PROCESS
========================================================= */

function AuditProcess() {
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
        <SectionLabel number="05">
          Audit Operating Flow
        </SectionLabel>

        <h2 className="mt-9 max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
          From audit scope

          <span className="block text-white/25">
            to security improvement.
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

          {auditProcess.map(
            ({ number, title, text, Icon }, index) => (
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
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.07,
                }}
                className="relative z-20 rounded-[18px] border border-white/[0.08] bg-[#070707] p-5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-black">
                  <Icon size={13} className="text-[#c4b5fd]" />
                </div>

                <span className="mt-8 block font-mono text-[7px] text-[#a78bfa]">
                  {number}
                </span>

                <h3 className="mt-3 text-[15px] font-medium">
                  {title}
                </h3>

                <p className="mt-4 text-[10px] leading-6 text-white/[0.42]">
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
   REMEDIATION
========================================================= */

function RemediationSection() {
  const actions = [
    {
      title: "Privileged Access Review",
      owner: "Identity",
      priority: "Priority 01",
      progress: 82,
    },
    {
      title: "Cloud Configuration Hardening",
      owner: "Cloud",
      priority: "Priority 02",
      progress: 68,
    },
    {
      title: "Detection Coverage",
      owner: "Security Ops",
      priority: "Priority 03",
      progress: 54,
    },
    {
      title: "Data Access Governance",
      owner: "Data",
      priority: "Priority 04",
      progress: 41,
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <div className="absolute right-[-250px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#6d28d9]/10 blur-[180px]" />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div>
            <SectionLabel number="06">
              Remediation
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Findings should

              <span className="block text-white/25">
                lead to action.
              </span>
            </h2>

            <p className="mt-7 max-w-[520px] text-[13px] leading-8 text-white/[0.50]">
              Audit value increases when findings are converted into clear
              remediation activities with appropriate ownership, sequencing
              and follow-up validation.
            </p>
          </div>

          <div className="rounded-[26px] border border-white/[0.09] bg-black p-6">
            <div className="flex items-center justify-between">
              <div>
                <TinyLabel>Remediation Workspace</TinyLabel>

                <h3 className="mt-3 text-xl font-medium">
                  Corrective Action Plan
                </h3>
              </div>

              <Workflow size={17} className="text-[#a78bfa]" />
            </div>

            <div className="mt-8 space-y-3">
              {actions.map((action, index) => (
                <motion.div
                  key={action.title}
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
                    delay: index * 0.08,
                  }}
                  className="rounded-[14px] border border-white/[0.06] bg-[#060606] p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="block text-[11px] text-white/60">
                        {action.title}
                      </span>

                      <span className="mt-1 block text-[8px] text-white/25">
                        Owner / {action.owner}
                      </span>
                    </div>

                    <span className="font-mono text-[7px] text-[#a78bfa]">
                      {action.priority}
                    </span>
                  </div>

                  <div className="mt-4 h-[3px] overflow-hidden rounded-full bg-white/[0.07]">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${action.progress}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1.1,
                        delay: index * 0.08,
                      }}
                      className="h-full bg-[#8b5cf6]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   PRINCIPLES
========================================================= */

function AuditPrinciples() {
  return (
    <section className="bg-[#070707] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel number="07">
              Audit Principles
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Audit with

              <span className="block text-white/25">
                evidence & context.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[13px] leading-8 text-white/[0.48]">
              Effective cybersecurity auditing depends on consistent scope,
              defensible evidence, appropriate assessment criteria and clear
              communication of what was observed.
            </p>
          </div>

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
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  x: 4,
                }}
                className="flex items-start gap-4 rounded-[15px] border border-white/[0.07] bg-black p-5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/25">
                  <CheckCircle2
                    size={12}
                    className="text-[#c4b5fd]"
                  />
                </div>

                <div>
                  <span className="font-mono text-[6px] text-[#8b5cf6]">
                    AUDIT / {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-2 text-[10px] leading-6 text-white/[0.45]">
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
   FINAL CTA
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
          viewport={{
            once: true,
          }}
          className="relative overflow-hidden rounded-[26px] border border-[#6366f1]/30 bg-[#080a16] px-6 py-20 text-center"
        >
          <motion.div
            animate={{
              x: ["-20%", "20%", "-20%"],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
            className="absolute bottom-[-180px] left-1/2 h-[330px] w-[950px] -translate-x-1/2 rounded-full bg-[#7046e6] blur-[120px]"
          />

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.04]"
          />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.06]">
              <ShieldCheck
                size={24}
                className="text-[#c4b5fd]"
              />
            </div>

            <h2 className="mt-7 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Ready To Audit Your Security Environment?
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[12px] leading-7 text-white/[0.50]">
              Review security controls, understand relevant gaps and create a
              clearer remediation path across your cybersecurity environment
              with a structured audit approach.
            </p>

            <motion.a
              href="#audit-overview"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[11px] font-medium shadow-[0_0_40px_rgba(124,58,237,.3)]"
            >
              Talk To Our Expert

              <ArrowRight size={12} />
            </motion.a>
          </div>
        </motion.div>

        <p className="mx-auto mt-7 max-w-[850px] text-center font-mono text-[7px] uppercase leading-5 tracking-[0.12em] text-white/15">
          Dashboard values, control counts, evidence coverage, risk indicators
          and remediation progress shown on this page are illustrative
          interface data and do not represent a specific customer audit,
          certification result or guaranteed security outcome.
        </p>
      </Container>
    </section>
  );
}

/* =========================================================
   MAIN CLIENT
========================================================= */

export default function CybersecurityAuditingClient() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="overflow-x-hidden bg-black text-white">
      {/* PAGE PROGRESS */}
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#6d28d9] via-[#c4b5fd] to-[#7c3aed]"
      />

      <Hero />

      <AuditOverview />

      <AuditCapabilities />

      <AuditDomains />

      <FindingsMatrix />

      <AuditProcess />

      <RemediationSection />

      <AuditPrinciples />

      <FinalCTA />
    </div>
  );
}