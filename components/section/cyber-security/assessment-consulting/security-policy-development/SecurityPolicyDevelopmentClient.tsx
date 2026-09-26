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
  Database,
  Eye,
  FileSearch,
  GitBranch,
  Layers3,
  Network,
  RefreshCcw,
  Server,
  Settings2,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

import type { ElementType, ReactNode } from "react";

/* =========================================================
   TYPES
========================================================= */

type Capability = {
  number: string;
  title: string;
  description: string;
  Icon: ElementType;
};

type PolicyRow = {
  policy: string;
  domain: string;
  status: string;
  coverage: number;
};

type LifecycleItem = {
  number: string;
  title: string;
  description: string;
  Icon: ElementType;
};

/* =========================================================
   DATA
========================================================= */

const policyRows: PolicyRow[] = [
  {
    policy: "Information Security",
    domain: "Enterprise",
    status: "ACTIVE",
    coverage: 94,
  },
  {
    policy: "Access Control",
    domain: "Identity",
    status: "REVIEW",
    coverage: 82,
  },
  {
    policy: "Data Protection",
    domain: "Data",
    status: "ACTIVE",
    coverage: 91,
  },
  {
    policy: "Incident Response",
    domain: "Operations",
    status: "UPDATE",
    coverage: 76,
  },
  {
    policy: "Third-Party Security",
    domain: "Vendor Risk",
    status: "ACTIVE",
    coverage: 87,
  },
];

const policySignals = [
  34, 43, 39, 51, 46, 57, 53, 62, 58, 69, 65, 76, 71, 82,
];

const capabilities: Capability[] = [
  {
    number: "01",
    title: "Policy Architecture",
    description:
      "Establish a coherent hierarchy of security policies, standards, procedures and supporting guidance so governance expectations are structured, understandable and connected to business operations.",
    Icon: Layers3,
  },
  {
    number: "02",
    title: "Control Alignment",
    description:
      "Translate security objectives and governance requirements into practical policy statements that connect with technical, administrative and operational controls across the organization.",
    Icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Ownership & Accountability",
    description:
      "Define clear policy owners, reviewers, approvers and responsible stakeholders so security expectations have accountable governance throughout their lifecycle.",
    Icon: Network,
  },
  {
    number: "04",
    title: "Policy Gap Analysis",
    description:
      "Review existing policy coverage to identify missing topics, outdated requirements, duplicated language, unclear responsibilities and areas requiring stronger governance direction.",
    Icon: FileSearch,
  },
  {
    number: "05",
    title: "Operational Integration",
    description:
      "Connect policy expectations with day-to-day security processes, technology operations, access management, incident response, data protection and third-party relationships.",
    Icon: Workflow,
  },
  {
    number: "06",
    title: "Lifecycle Governance",
    description:
      "Create a sustainable process for review, approval, communication, exception handling and policy updates as technologies, risks and business requirements evolve.",
    Icon: RefreshCcw,
  },
];

const architecture = [
  {
    number: "L01",
    title: "Security Policy",
    description:
      "High-level management direction defining the organization's security expectations and governance intent.",
    Icon: ShieldCheck,
  },
  {
    number: "L02",
    title: "Security Standards",
    description:
      "Specific mandatory requirements that establish consistent security expectations across relevant environments.",
    Icon: Layers3,
  },
  {
    number: "L03",
    title: "Procedures",
    description:
      "Operational steps describing how teams perform activities required to support security policy and standards.",
    Icon: Workflow,
  },
  {
    number: "L04",
    title: "Guidelines",
    description:
      "Supporting recommendations that help teams make consistent security decisions in practical situations.",
    Icon: GitBranch,
  },
  {
    number: "L05",
    title: "Control Evidence",
    description:
      "Operational records and supporting artifacts demonstrating how relevant requirements are implemented.",
    Icon: FileSearch,
  },
];

const lifecycle: LifecycleItem[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Review existing policies, business context and governance requirements.",
    Icon: Eye,
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Define the policy hierarchy, scope, ownership and relationships.",
    Icon: Layers3,
  },
  {
    number: "03",
    title: "Draft",
    description:
      "Create clear requirements using practical and consistent language.",
    Icon: FileSearch,
  },
  {
    number: "04",
    title: "Validate",
    description:
      "Review requirements with security, technology and business stakeholders.",
    Icon: CheckCircle2,
  },
  {
    number: "05",
    title: "Approve",
    description:
      "Establish formal approval and accountable policy ownership.",
    Icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Operate",
    description:
      "Communicate, monitor, review and update policies over time.",
    Icon: RefreshCcw,
  },
];

const domains = [
  "Information Security",
  "Identity & Access Management",
  "Acceptable Use",
  "Data Classification",
  "Data Protection",
  "Cryptography",
  "Cloud Security",
  "Network Security",
  "Endpoint Security",
  "Secure Development",
  "Vulnerability Management",
  "Incident Response",
  "Business Continuity",
  "Third-Party Security",
  "Logging & Monitoring",
  "Change Management",
];

const principles = [
  "Policies should communicate clear expectations rather than unnecessary technical complexity.",
  "Every policy should have defined ownership, scope, review responsibility and approval authority.",
  "Requirements should reflect actual business operations and relevant security risks.",
  "Policies, standards and procedures should have distinct purposes within the governance hierarchy.",
  "Security requirements should be practical enough for teams to implement and demonstrate.",
  "Exceptions should follow a defined process with ownership, justification and appropriate review.",
  "Policy language should remain consistent across security, technology and operational domains.",
  "Policies should be reviewed as business services, technologies and security conditions change.",
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

function StatusDot() {
  return (
    <motion.span
      animate={{
        opacity: [0.35, 1, 0.35],
        scale: [0.9, 1.2, 0.9],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
      }}
      className="h-1.5 w-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_14px_rgba(167,139,250,.9)]"
    />
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  const { scrollY } = useScroll();

  const titleY = useTransform(scrollY, [0, 700], [0, 75]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.25]);
  const consoleY = useTransform(scrollY, [0, 900], [0, 90]);

  return (
    <section className="relative overflow-hidden bg-black px-5 pb-24 pt-16 md:px-10 md:pt-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 68%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 68%, transparent 100%)",
        }}
      />

      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.06, 0.15, 0.06],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[420px] h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[#6d28d9] blur-[230px]"
      />

      <Container className="relative">
        <motion.div
          style={{
            y: titleY,
            opacity: heroOpacity,
          }}
          className="mx-auto max-w-[1150px] text-center"
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
              duration: 0.6,
            }}
            className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.025] px-5 py-2.5"
          >
            <StatusDot />

            <span className="text-[11px] text-white/[0.55]">
              Security Policy Development
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
            className="mx-auto mt-8 max-w-[1200px] text-[clamp(3.2rem,7vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.07em]"
          >
            Turn Security

            <span className="block text-white/[0.62]">
              Into Clear Direction.
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
            className="mx-auto mt-8 max-w-[850px] text-[17px] leading-8 text-white/[0.52]"
          >
            Build practical, structured and maintainable cybersecurity
            policies that translate security objectives into clear governance,
            responsibilities and operational expectations.
          </motion.p>

          <motion.a
            href="#policy-intelligence"
            initial={{
              opacity: 0,
              scale: 0.94,
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
            className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[12px] font-medium shadow-[0_0_45px_rgba(124,58,237,.30)]"
          >
            Explore Policy Governance
            <ArrowRight size={13} />
          </motion.a>
        </motion.div>

        <motion.div
          style={{
            y: consoleY,
          }}
          className="relative mt-20"
        >
          <PolicyGovernanceConsole />
        </motion.div>
      </Container>
    </section>
  );
}

/* =========================================================
   POLICY GOVERNANCE CONSOLE
========================================================= */

function PolicyGovernanceConsole() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 65,
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
      className="relative overflow-hidden rounded-[30px] border border-white/[0.14] bg-[#030303] shadow-[0_50px_160px_rgba(0,0,0,.9)]"
    >
      <motion.div
        animate={{
          x: ["-120%", "250%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute top-0 z-30 h-px w-1/2 bg-gradient-to-r from-transparent via-[#a78bfa] to-transparent"
      />

      <div className="flex items-center justify-between border-b border-white/[0.10] px-5 py-4 md:px-7">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ed6a5e]" />
          <span className="h-3 w-3 rounded-full bg-[#f4bf4f]" />
          <span className="h-3 w-3 rounded-full bg-[#61c454]" />

          <span className="ml-5 hidden text-white/20 md:block">
            ◧
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-2">
          <ShieldCheck size={10} className="text-[#a78bfa]" />

          <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-white/35">
            HYI.AI / POLICY GOVERNANCE
          </span>
        </div>

        <div className="hidden items-center gap-4 text-white/25 sm:flex">
          <RefreshCcw size={12} />
          <Eye size={12} />
          <CircleDot size={12} />
        </div>
      </div>

      <div className="grid min-h-[720px] lg:grid-cols-[82px_1fr]">
        <ConsoleSidebar />

        <div className="p-5 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <TinyLabel>Enterprise Security Governance</TinyLabel>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                Policy Intelligence Center
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2">
                <StatusDot />

                <span className="font-mono text-[7px] text-white/35">
                  GOVERNANCE ACTIVE
                </span>
              </div>

              <button className="rounded-full bg-[#7046e6] px-5 py-2.5 text-[9px]">
                Policy Library
              </button>
            </div>
          </div>

          <div className="mt-7 grid gap-4 xl:grid-cols-[1.2fr_.7fr_.7fr]">
            <PolicyCoverageGraph />

            <MetricCard
              label="Policy Domains"
              value="16"
              progress={88}
              footer="Illustrative governance view"
            />

            <MetricCard
              label="Review Coverage"
              value="91%"
              progress={91}
              footer="Illustrative interface data"
            />
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1.45fr_.75fr]">
            <PolicyTable />
            <PolicyControlMap />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   CONSOLE SIDEBAR
========================================================= */

function ConsoleSidebar() {
  const icons = [
    ShieldCheck,
    FileSearch,
    Layers3,
    Workflow,
    Network,
    Settings2,
  ];

  return (
    <div className="hidden border-r border-white/[0.09] lg:block">
      <div className="flex h-full flex-col items-center py-7">
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(124,58,237,0)",
              "0 0 28px rgba(124,58,237,.4)",
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
   COVERAGE GRAPH
========================================================= */

function PolicyCoverageGraph() {
  return (
    <div className="rounded-[18px] border border-white/[0.08] bg-[#070707] p-5">
      <div className="flex items-start justify-between">
        <div>
          <span className="block text-[15px] font-medium text-white/75">
            Policy Coverage
          </span>

          <span className="mt-2 block text-[8px] text-white/25">
            Governance lifecycle activity
          </span>
        </div>

        <TinyLabel purple>Live Signal</TinyLabel>
      </div>

      <div className="relative mt-8 h-[210px] overflow-hidden border-b border-white/[0.08]">
        {[25, 50, 75].map((top) => (
          <div
            key={top}
            style={{
              top: `${top}%`,
            }}
            className="absolute left-0 right-0 border-t border-dashed border-white/[0.05]"
          />
        ))}

        <div className="absolute inset-0 flex items-end gap-2">
          {policySignals.map((height, index) => (
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
                  duration: 0.8,
                  delay: index * 0.04,
                }}
                className={`relative w-full rounded-t-full ${
                  index === policySignals.length - 2
                    ? "bg-[#7546ef]"
                    : "bg-white/[0.15]"
                }`}
              >
                {index === policySignals.length - 2 && (
                  <motion.span
                    animate={{
                      scale: [1, 1.7, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.7,
                      repeat: Infinity,
                    }}
                    className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#c4b5fd]"
                  />
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between font-mono text-[6px] uppercase tracking-[0.12em] text-white/20">
        <span>Draft</span>
        <span>Review</span>
        <span>Operate</span>
      </div>
    </div>
  );
}

/* =========================================================
   METRIC CARD
========================================================= */

function MetricCard({
  label,
  value,
  progress,
  footer,
}: {
  label: string;
  value: string;
  progress: number;
  footer: string;
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
        {footer}
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
            duration: 1.2,
          }}
          className="h-full rounded-full bg-[#8b5cf6]"
        />
      </div>

      <div className="mt-8 flex items-end gap-1">
        {Array.from({
          length: 15,
        }).map((_, index) => (
          <motion.span
            key={index}
            animate={{
              height: [5, 17, 8, 22, 5],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: index * 0.06,
            }}
            className="w-[3px] bg-[#8b5cf6]/55"
          />
        ))}
      </div>
    </motion.div>
  );
}

/* =========================================================
   POLICY TABLE
========================================================= */

function PolicyTable() {
  return (
    <div className="rounded-[18px] border border-white/[0.08] bg-[#070707] p-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="block text-[15px] font-medium text-white/75">
            Policy Portfolio
          </span>

          <span className="mt-1 block text-[8px] text-white/20">
            Governance library status
          </span>
        </div>

        <FileSearch size={15} className="text-[#a78bfa]" />
      </div>

      <div className="mt-6 grid grid-cols-[1.2fr_.8fr_.55fr_.5fr] border-b border-white/[0.07] pb-3">
        <TinyLabel>Policy</TinyLabel>
        <TinyLabel>Domain</TinyLabel>
        <TinyLabel>Coverage</TinyLabel>
        <TinyLabel>Status</TinyLabel>
      </div>

      <div className="mt-2">
        {policyRows.map((item, index) => (
          <motion.div
            key={item.policy}
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
              delay: index * 0.07,
            }}
            className="grid grid-cols-[1.2fr_.8fr_.55fr_.5fr] items-center border-b border-white/[0.05] py-4"
          >
            <span className="text-[9px] text-white/60">
              {item.policy}
            </span>

            <span className="text-[8px] text-white/30">
              {item.domain}
            </span>

            <span className="font-mono text-[8px] text-white/40">
              {item.coverage}%
            </span>

            <span
              className={`font-mono text-[7px] ${
                item.status === "ACTIVE"
                  ? "text-[#c4b5fd]"
                  : "text-white/40"
              }`}
            >
              {item.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   CONTROL MAP
========================================================= */

function PolicyControlMap() {
  const nodes = [
    {
      x: "50%",
      y: "8%",
    },
    {
      x: "84%",
      y: "28%",
    },
    {
      x: "82%",
      y: "70%",
    },
    {
      x: "50%",
      y: "90%",
    },
    {
      x: "16%",
      y: "70%",
    },
    {
      x: "16%",
      y: "28%",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#070707] p-5">
      <TinyLabel>Governance Map</TinyLabel>

      <div className="relative mx-auto mt-5 h-[260px] w-[260px]">
        {[0, 1, 2].map((ring) => (
          <div
            key={ring}
            style={{
              inset: `${ring * 35}px`,
            }}
            className="absolute rounded-full border border-white/[0.08]"
          />
        ))}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[12px] rounded-full border border-dashed border-[#8b5cf6]/25"
        />

        {nodes.map((node, index) => (
          <motion.span
            key={index}
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.25,
            }}
            style={{
              left: node.x,
              top: node.y,
            }}
            className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a78bfa] shadow-[0_0_15px_rgba(167,139,250,.8)]"
          />
        ))}

        <div className="absolute left-1/2 top-1/2 flex h-[78px] w-[78px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-black">
          <ShieldCheck size={21} className="text-[#c4b5fd]" />

          <span className="mt-2 font-mono text-[5px] text-white/30">
            POLICY
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   POLICY INTELLIGENCE INTRO
========================================================= */

function PolicyIntelligence() {
  return (
    <section
      id="policy-intelligence"
      className="relative overflow-hidden bg-black px-5 py-28 md:px-10"
    >
      <motion.div
        animate={{
          x: ["-8%", "8%", "-8%"],
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-0 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-[#6d28d9] blur-[220px]"
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
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
              Security Governance
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Security needs

              <span className="block text-white/25">
                a common language.
              </span>
            </h2>

            <p className="mt-7 max-w-[560px] text-[13px] leading-8 text-white/[0.55]">
              Security policies establish the expectations that connect
              leadership intent with technology, people and operational
              processes. They create a common reference for how security
              decisions should be made across the organization.
            </p>

            <p className="mt-5 max-w-[560px] text-[13px] leading-8 text-white/[0.45]">
              Effective policy development goes beyond writing documents. It
              requires understanding business operations, responsibilities,
              technology environments and how governance expectations will be
              implemented in practice.
            </p>
          </motion.div>

          <PolicyArchitectureModel />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   POLICY ARCHITECTURE MODEL
========================================================= */

function PolicyArchitectureModel() {
  const orbitNodes = [
    {
      label: "Identity",
      Icon: Network,
      position: "left-[5%] top-[16%]",
    },
    {
      label: "Data",
      Icon: Database,
      position: "right-[5%] top-[16%]",
    },
    {
      label: "Cloud",
      Icon: Server,
      position: "left-[5%] bottom-[16%]",
    },
    {
      label: "Operations",
      Icon: Workflow,
      position: "right-[5%] bottom-[16%]",
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.93,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      className="relative min-h-[560px] overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#060606]"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.055) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d28d9]/10 blur-[100px]" />

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

      {orbitNodes.map(({ label, Icon, position }, index) => (
        <motion.div
          key={label}
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 3 + index * 0.3,
            repeat: Infinity,
          }}
          className={`absolute ${position} z-20 w-[130px] rounded-[16px] border border-white/[0.10] bg-black/90 p-4`}
        >
          <Icon size={15} className="text-[#c4b5fd]" />

          <span className="mt-3 block text-[10px] text-white/55">
            {label}
          </span>

          <span className="mt-1 block font-mono text-[6px] text-white/20">
            GOVERNED DOMAIN
          </span>
        </motion.div>
      ))}

      <div className="absolute left-1/2 top-1/2 z-20 flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 16,
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
            duration: 11,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[22px] rounded-full border border-white/[0.10]"
        />

        <motion.div
          animate={{
            scale: [1, 1.07, 1],
          }}
          transition={{
            duration: 2.7,
            repeat: Infinity,
          }}
          className="flex h-[105px] w-[105px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#7046e6]/10 shadow-[0_0_70px_rgba(124,58,237,.25)]"
        >
          <ShieldCheck size={27} className="text-[#c4b5fd]" />

          <span className="mt-2 font-mono text-[6px] text-white/40">
            POLICY CORE
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   CAPABILITIES
========================================================= */

function Capabilities() {
  return (
    <section className="border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel number="02">
              Policy Capabilities
            </SectionLabel>
          </div>

          <h2 className="mx-auto mt-8 max-w-[950px] text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            From Governance Intent To Operational Security
          </h2>

          <p className="mx-auto mt-5 max-w-[870px] text-[13px] leading-7 text-white/[0.52]">
            Build a security policy environment that creates clear
            expectations while remaining connected to real technology,
            operational processes and accountable ownership.
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
                className="group relative min-h-[330px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-black p-7"
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
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.12em] text-[#a78bfa]">
                    Governance Capability

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
   GOVERNANCE HIERARCHY
========================================================= */

function GovernanceHierarchy() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10">
      <div className="absolute right-[-300px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-[#5b21b6]/10 blur-[190px]" />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <SectionLabel number="03">
              Governance Architecture
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              One hierarchy.

              <span className="block text-white/25">
                Clear purpose.
              </span>
            </h2>

            <p className="mt-7 max-w-[520px] text-[13px] leading-8 text-white/[0.50]">
              Policies, standards, procedures and guidelines should not become
              interchangeable documents. Each layer serves a different
              governance purpose and helps translate direction into practical
              execution.
            </p>
          </div>

          <div className="space-y-3">
            {architecture.map(
              ({ number, title, description, Icon }, index) => (
                <motion.div
                  key={title}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    x: 6,
                  }}
                  className="grid gap-5 rounded-[18px] border border-white/[0.08] bg-[#060606] p-6 md:grid-cols-[50px_1fr_90px] md:items-center"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8b5cf6]/25">
                    <Icon size={15} className="text-[#c4b5fd]" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[7px] text-[#8b5cf6]">
                        {number}
                      </span>

                      <h3 className="text-[16px] font-medium">
                        {title}
                      </h3>
                    </div>

                    <p className="mt-3 max-w-[620px] text-[11px] leading-6 text-white/[0.45]">
                      {description}
                    </p>
                  </div>

                  <div className="hidden justify-end md:flex">
                    <motion.div
                      animate={{
                        scaleX: [0.35, 1, 0.35],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="h-px w-14 origin-left bg-[#8b5cf6]/60"
                    />
                  </div>
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
   POLICY DOMAINS
========================================================= */

function PolicyDomains() {
  return (
    <section className="border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionLabel number="04">
              Security Domains
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Governance across

              <span className="block text-white/25">
                the security landscape.
              </span>
            </h2>

            <p className="mt-7 max-w-[540px] text-[13px] leading-8 text-white/[0.50]">
              Policy architecture can provide consistent governance across
              identity, data, infrastructure, applications, security
              operations and external relationships without forcing every
              domain into the same document.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {domains.map((domain, index) => (
              <motion.div
                key={domain}
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
                  delay: index * 0.035,
                }}
                whileHover={{
                  x: 5,
                  borderColor: "rgba(139,92,246,.35)",
                }}
                className="flex items-center justify-between rounded-[14px] border border-white/[0.07] bg-black px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[7px] text-[#8b5cf6]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[10px] text-white/[0.55]">
                    {domain}
                  </span>
                </div>

                <ChevronRight size={11} className="text-white/20" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   LIFECYCLE
========================================================= */

function PolicyLifecycle() {
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
          Policy Lifecycle
        </SectionLabel>

        <h2 className="mt-9 max-w-[930px] text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
          Policies should evolve

          <span className="block text-white/25">
            with the organization.
          </span>
        </h2>

        <p className="mt-7 max-w-[760px] text-[13px] leading-8 text-white/[0.48]">
          Security policy development is not finished when a document is
          approved. Policies require communication, operational adoption,
          review and controlled updates as environments and risks change.
        </p>

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

          {lifecycle.map(
            ({ number, title, description, Icon }, index) => (
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
                className="relative z-20 min-h-[250px] rounded-[18px] border border-white/[0.08] bg-[#070707] p-5"
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

                <p className="mt-4 text-[10px] leading-6 text-white/[0.44]">
                  {description}
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
   DOCUMENT INTELLIGENCE
========================================================= */

function DocumentIntelligence() {
  const sections = [
    {
      title: "Purpose",
      value: 96,
    },
    {
      title: "Scope",
      value: 92,
    },
    {
      title: "Roles & Responsibilities",
      value: 88,
    },
    {
      title: "Security Requirements",
      value: 94,
    },
    {
      title: "Exceptions",
      value: 81,
    },
    {
      title: "Review & Approval",
      value: 90,
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <div className="absolute left-[-300px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-[#6d28d9]/10 blur-[190px]" />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <SectionLabel number="06">
              Policy Structure
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Write for people

              <span className="block text-white/25">
                who must act.
              </span>
            </h2>

            <p className="mt-7 max-w-[520px] text-[13px] leading-8 text-white/[0.50]">
              Strong policy language should be clear enough for stakeholders
              to understand what is required, who is responsible and how
              exceptions or questions should be handled.
            </p>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="overflow-hidden rounded-[26px] border border-white/[0.09] bg-black"
          >
            <div className="flex items-center justify-between border-b border-white/[0.07] p-6">
              <div>
                <TinyLabel>Policy Composer</TinyLabel>

                <h3 className="mt-3 text-xl font-medium">
                  Security Policy Structure
                </h3>
              </div>

              <FileSearch size={17} className="text-[#a78bfa]" />
            </div>

            <div className="grid md:grid-cols-[170px_1fr]">
              <div className="border-b border-white/[0.07] p-5 md:border-b-0 md:border-r">
                <TinyLabel>Document</TinyLabel>

                <div className="mt-7 space-y-4">
                  {sections.map((section, index) => (
                    <div
                      key={section.title}
                      className={`flex items-center gap-2 ${
                        index === 3
                          ? "text-[#c4b5fd]"
                          : "text-white/30"
                      }`}
                    >
                      <span className="font-mono text-[6px]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[8px]">
                        {section.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <TinyLabel purple>Section 04</TinyLabel>

                <h4 className="mt-4 text-[18px] font-medium">
                  Security Requirements
                </h4>

                <div className="mt-7 space-y-5">
                  {sections.slice(0, 5).map((section, index) => (
                    <div key={section.title}>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-white/45">
                          {section.title}
                        </span>

                        <span className="font-mono text-[7px] text-white/25">
                          {section.value}%
                        </span>
                      </div>

                      <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-white/[0.07]">
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: `${section.value}%`,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 1,
                            delay: index * 0.08,
                          }}
                          className="h-full bg-[#8b5cf6]"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[12px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04] p-4">
                  <div className="flex items-start gap-3">
                    <Zap
                      size={13}
                      className="mt-0.5 shrink-0 text-[#c4b5fd]"
                    />

                    <p className="text-[9px] leading-5 text-white/35">
                      Policy requirements should remain specific enough to
                      guide action while allowing supporting standards and
                      procedures to contain detailed implementation guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   OWNERSHIP MODEL
========================================================= */

function OwnershipModel() {
  const owners = [
    {
      title: "Policy Owner",
      text: "Accountable for policy content, relevance and lifecycle.",
      position: "left-[5%] top-[12%]",
    },
    {
      title: "Security",
      text: "Provides security requirements and subject-matter guidance.",
      position: "right-[5%] top-[12%]",
    },
    {
      title: "Technology",
      text: "Validates operational and technical implementation context.",
      position: "left-[5%] bottom-[12%]",
    },
    {
      title: "Business",
      text: "Validates applicability, responsibilities and operational impact.",
      position: "right-[5%] bottom-[12%]",
    },
  ];

  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div className="relative min-h-[560px] overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#060606]">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <svg className="absolute inset-0 h-full w-full">
              {[
                ["18%", "24%", "50%", "50%"],
                ["82%", "24%", "50%", "50%"],
                ["18%", "76%", "50%", "50%"],
                ["82%", "76%", "50%", "50%"],
              ].map((line, index) => (
                <motion.line
                  key={index}
                  x1={line[0]}
                  y1={line[1]}
                  x2={line[2]}
                  y2={line[3]}
                  stroke="rgba(139,92,246,.32)"
                  strokeWidth="1"
                  strokeDasharray="5 8"
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
                    duration: 1.4,
                    delay: index * 0.12,
                  }}
                />
              ))}
            </svg>

            {owners.map((owner, index) => (
              <motion.div
                key={owner.title}
                animate={{
                  y: [-4, 4, -4],
                }}
                transition={{
                  duration: 3 + index * 0.3,
                  repeat: Infinity,
                }}
                className={`absolute ${owner.position} z-20 w-[155px] rounded-[15px] border border-white/[0.09] bg-black p-4`}
              >
                <span className="font-mono text-[6px] text-[#8b5cf6]">
                  ROLE / {String(index + 1).padStart(2, "0")}
                </span>

                <h4 className="mt-2 text-[10px] text-white/65">
                  {owner.title}
                </h4>

                <p className="mt-2 text-[7px] leading-4 text-white/25">
                  {owner.text}
                </p>
              </motion.div>
            ))}

            <div className="absolute left-1/2 top-1/2 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
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

              <div className="flex h-[95px] w-[95px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-black shadow-[0_0_60px_rgba(124,58,237,.25)]">
                <Network size={23} className="text-[#c4b5fd]" />

                <span className="mt-2 font-mono text-[6px] text-white/30">
                  OWNERSHIP
                </span>
              </div>
            </div>
          </div>

          <div>
            <SectionLabel number="07">
              Accountability Model
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Every policy needs

              <span className="block text-white/25">
                accountable ownership.
              </span>
            </h2>

            <p className="mt-7 max-w-[540px] text-[13px] leading-8 text-white/[0.50]">
              Policy governance works when ownership is explicit. Security,
              technology, business stakeholders and formal approvers each
              contribute different perspectives to policy development and
              maintenance.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Defined policy owner",
                "Named review stakeholders",
                "Formal approval authority",
                "Documented review cycle",
                "Controlled exception process",
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
                    delay: index * 0.07,
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
   POLICY PRINCIPLES
========================================================= */

function PolicyPrinciples() {
  return (
    <section className="border-y border-white/[0.06] bg-[#070707] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel number="08">
              Policy Principles
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Governance people

              <span className="block text-white/25">
                can actually use.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[13px] leading-8 text-white/[0.48]">
              Security policies are more effective when requirements are
              understandable, accountable, maintainable and connected to
              operational reality.
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
                    POLICY / {String(index + 1).padStart(2, "0")}
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
   GOVERNANCE LOOP
========================================================= */

function GovernanceLoop() {
  const items = [
    "Policy",
    "Standard",
    "Process",
    "Control",
    "Evidence",
    "Review",
  ];

  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10">
      <Container>
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel number="09">
              Governance Loop
            </SectionLabel>
          </div>

          <h2 className="mx-auto mt-8 max-w-[920px] text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Policy Is The Beginning Of The Control Story
          </h2>

          <p className="mx-auto mt-5 max-w-[820px] text-[13px] leading-7 text-white/[0.50]">
            Governance becomes meaningful when policy direction connects with
            standards, operational processes, implemented controls, evidence
            and continuous review.
          </p>
        </div>

        <div className="relative mx-auto mt-16 flex min-h-[560px] max-w-[800px] items-center justify-center overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#050505]">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {[420, 330, 240].map((size, index) => (
            <motion.div
              key={size}
              animate={{
                rotate: index % 2 === 0 ? 360 : -360,
              }}
              transition={{
                duration: 18 + index * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: size,
                height: size,
              }}
              className="absolute rounded-full border border-dashed border-[#8b5cf6]/15"
            />
          ))}

          {items.map((item, index) => {
            const angle = (index / items.length) * Math.PI * 2 - Math.PI / 2;
            const radius = 190;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <motion.div
                key={item}
                animate={{
                  scale: [1, 1.06, 1],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                className="absolute z-20 flex h-[74px] w-[112px] items-center justify-center rounded-[14px] border border-white/[0.09] bg-black"
              >
                <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-white/45">
                  {item}
                </span>
              </motion.div>
            );
          })}

          <div className="relative z-20 flex h-[145px] w-[145px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-black shadow-[0_0_90px_rgba(124,58,237,.22)]">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[10px] rounded-full border border-dashed border-[#a78bfa]/25"
            />

            <ShieldCheck
              size={30}
              className="relative text-[#c4b5fd]"
            />

            <span className="relative mt-3 font-mono text-[6px] text-white/35">
              GOVERNANCE
            </span>
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
              <ShieldCheck size={24} className="text-[#c4b5fd]" />
            </div>

            <h2 className="mt-7 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Build Security Policies That Work In Practice.
            </h2>

            <p className="mx-auto mt-5 max-w-[780px] text-[12px] leading-7 text-white/[0.50]">
              Create a structured security governance foundation with clear
              policies, standards, ownership, lifecycle management and
              operational alignment.
            </p>

            <motion.a
              href="#policy-intelligence"
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

        <p className="mx-auto mt-7 max-w-[920px] text-center font-mono text-[7px] uppercase leading-5 tracking-[0.12em] text-white/15">
          Policy counts, coverage percentages, status indicators and
          governance metrics displayed in the interface above are
          illustrative design data and do not represent actual HYI.AI client
          results, certifications, guarantees or measured security outcomes.
        </p>
      </Container>
    </section>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function SecurityPolicyDevelopmentClient() {
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

      <PolicyIntelligence />

      <Capabilities />

      <GovernanceHierarchy />

      <PolicyDomains />

      <PolicyLifecycle />

      <DocumentIntelligence />

      <OwnershipModel />

      <PolicyPrinciples />

      <GovernanceLoop />

      <FinalCTA />
    </div>
  );
}