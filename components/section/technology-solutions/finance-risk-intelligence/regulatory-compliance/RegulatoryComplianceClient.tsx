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
  FileCheck2,
  Gauge,
  Layers3,
  LockKeyhole,
  Network,
  RefreshCcw,
  Search,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import type { ElementType, ReactNode } from "react";

/* =========================================================
   DATA
========================================================= */

const capabilities = [
  {
    Icon: Eye,
    number: "01",
    title: "Regulatory Monitoring",
    text:
      "Organize regulatory requirements and relevant changes into a structured monitoring workflow so compliance teams can assess what may affect the organization.",
  },
  {
    Icon: FileCheck2,
    number: "02",
    title: "Policy Mapping",
    text:
      "Connect regulatory obligations with internal policies, procedures and accountable business functions to improve traceability.",
  },
  {
    Icon: ShieldCheck,
    number: "03",
    title: "Control Management",
    text:
      "Map obligations to controls and maintain clearer visibility into ownership, implementation status and supporting evidence.",
  },
  {
    Icon: Database,
    number: "04",
    title: "Evidence Management",
    text:
      "Create structured evidence workflows that help teams collect, organize and retrieve supporting information for review and audit processes.",
  },
  {
    Icon: Activity,
    number: "05",
    title: "Compliance Monitoring",
    text:
      "Monitor selected controls, exceptions and compliance signals so relevant issues can be surfaced for human investigation.",
  },
  {
    Icon: BrainCircuit,
    number: "06",
    title: "AI-Assisted Review",
    text:
      "Apply suitable AI capabilities to classification, document analysis and review assistance while keeping governance and human oversight in the process.",
  },
];

const controlLayers = [
  {
    number: "01",
    title: "Regulation",
    description: "External requirements",
    Icon: FileCheck2,
  },
  {
    number: "02",
    title: "Policy",
    description: "Internal interpretation",
    Icon: Layers3,
  },
  {
    number: "03",
    title: "Control",
    description: "Operational safeguards",
    Icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Evidence",
    description: "Supporting records",
    Icon: Database,
  },
  {
    number: "05",
    title: "Assurance",
    description: "Review & validation",
    Icon: Eye,
  },
];

const monitoringItems = [
  {
    label: "Control environment",
    value: "MONITORED",
  },
  {
    label: "Policy mappings",
    value: "CONNECTED",
  },
  {
    label: "Evidence workflow",
    value: "ACTIVE",
  },
  {
    label: "Review queue",
    value: "READY",
  },
];

const workflow = [
  {
    number: "01",
    title: "Interpret",
    text:
      "Structure relevant regulatory requirements into usable compliance context.",
  },
  {
    number: "02",
    title: "Map",
    text:
      "Connect requirements to policies, processes, controls and responsible owners.",
  },
  {
    number: "03",
    title: "Operate",
    text:
      "Embed controls and evidence collection into suitable operational workflows.",
  },
  {
    number: "04",
    title: "Monitor",
    text:
      "Observe selected compliance signals, exceptions and control status.",
  },
  {
    number: "05",
    title: "Review",
    text:
      "Support investigation, assurance and audit preparation with organized evidence.",
  },
];

const principles = [
  "Keep regulatory requirements traceable to policies and controls.",
  "Maintain clear ownership for controls and supporting evidence.",
  "Preserve human review for consequential compliance decisions.",
  "Design evidence collection as part of the operating workflow.",
  "Monitor exceptions and control changes instead of relying only on periodic review.",
  "Keep analytical and AI-assisted processes explainable and governed.",
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
  purple = false,
}: {
  children: ReactNode;
  purple?: boolean;
}) {
  return (
    <span
      className={`font-mono text-[7px] uppercase tracking-[0.18em] ${
        purple ? "text-[#a78bfa]" : "text-white/30"
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

function StatusDot() {
  return (
    <span className="relative flex h-2 w-2">
      <motion.span
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute inset-0 rounded-full bg-[#a78bfa]"
      />

      <span className="relative h-2 w-2 rounded-full bg-[#a78bfa]" />
    </span>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5  md:px-10">
      {/* BACKGROUND GRID */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 72%, transparent 100%)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[240px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#7c3aed]/[0.055] blur-[200px]" />

      <Container className="relative">
        {/* TOP LINE */}

        {/* <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <StatusDot />

            <Micro>
              HYI / Regulatory Compliance
            </Micro>
          </div>

          <div className="hidden items-center gap-7 md:flex">
            <Micro>Regulation</Micro>
            <Micro>Controls</Micro>
            <Micro>Evidence</Micro>
            <Micro>Assurance</Micro>
          </div>
        </div> */}

        {/* HERO */}

        <div className="mx-auto max-w-[1050px] pt-20 text-center">
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
            <ShieldCheck
              size={11}
              className="text-[#c4b5fd]"
            />

            <Micro>
              Compliance Intelligence
            </Micro>
          </motion.div> */}

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
              duration: 0.7,
            }}
            className="mt-9 text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.83] tracking-[-0.085em]"
          >
            Compliance

            <span className="block text-white/20">
              you can trace.
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
            className="mx-auto mt-9 max-w-[820px] text-[14px] leading-8 text-white/[0.55]"
          >
            HYI helps organizations connect regulatory
            requirements, internal policies, operational
            controls and supporting evidence into a more
            structured compliance environment. Build
            systems that improve traceability, monitoring
            and review without treating compliance as a
            disconnected collection of documents.
          </motion.p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#compliance-engine"
              className="flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-medium text-black"
            >
              Explore compliance engine

              <ArrowDown size={13} />
            </a>

            <a
              href="#capabilities"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[11px] text-white/55"
            >
              View capabilities

              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* MODEL */}

        <div
          id="compliance-engine"
          className="mt-20"
        >
          <ComplianceControlCenter />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   COMPLIANCE CONTROL CENTER
========================================================= */

function ComplianceControlCenter() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#080808] p-5 md:p-7">
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
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">
              <ShieldCheck
                size={15}
                className="text-[#c4b5fd]"
              />
            </div>

            <div>
              <Micro>
                Compliance Control Center
              </Micro>

              <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.12em] text-white/15">
                REQUIREMENT → POLICY → CONTROL → EVIDENCE → ASSURANCE
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <StatusDot />

            <Micro>
              Monitoring active
            </Micro>
          </div>
        </div>

        {/* DASHBOARD */}

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.35fr_.65fr]">
          <ComplianceMap />

          <ControlMonitor />
        </div>

        {/* BOTTOM */}

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <EvidenceFlow />

          <ControlCoverage />

          <ReviewQueue />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   COMPLIANCE MAP
========================================================= */

function ComplianceMap() {
  return (
    <div className="relative min-h-[480px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505] p-5 md:p-7">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 flex items-center justify-between">
        <div>
          <Micro>
            Compliance Architecture
          </Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Requirement-to-assurance traceability
          </p>
        </div>

        <Network
          size={13}
          className="text-[#a78bfa]"
        />
      </div>

      {/* DESKTOP MAP */}

      <div className="relative z-10 mt-14 hidden h-[300px] md:block">
        {/* CONNECTION LINE */}

        <div className="absolute left-[8%] right-[8%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-[#8b5cf6]/20 via-[#c4b5fd]/50 to-[#8b5cf6]/20" />

        {/* MOVING SIGNAL */}

        <motion.div
          animate={{
            left: ["8%", "90%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 z-30 h-2 w-2 -translate-y-1/2 rounded-full bg-[#c4b5fd] shadow-[0_0_20px_rgba(196,181,253,.9)]"
        />

        <div className="absolute inset-0 flex items-center justify-between px-[2%]">
          {controlLayers.map(
            (
              {
                number,
                title,
                description,
                Icon,
              },
              index,
            ) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  scale: 0.9,
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
                className="relative z-20 w-[17%]"
              >
                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  className="rounded-[16px] border border-white/[0.08] bg-[#090909] p-4 text-center"
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
                    <Icon
                      size={15}
                      strokeWidth={1.3}
                      className="text-[#c4b5fd]"
                    />
                  </div>

                  <span className="mt-5 block font-mono text-[6px] text-[#a78bfa]">
                    {number}
                  </span>

                  <h3 className="mt-2 text-[10px] font-medium text-white/65">
                    {title}
                  </h3>

                  <p className="mt-2 text-[7px] leading-4 text-white/25">
                    {description}
                  </p>
                </motion.div>
              </motion.div>
            ),
          )}
        </div>

        {/* TOP LABELS */}

        <div className="absolute left-[2%] top-3">
          <Micro>
            External
          </Micro>
        </div>

        <div className="absolute right-[2%] top-3">
          <Micro purple>
            Assured
          </Micro>
        </div>
      </div>

      {/* MOBILE */}

      <div className="relative z-10 mt-8 space-y-3 md:hidden">
        {controlLayers.map(
          ({
            number,
            title,
            description,
            Icon,
          }) => (
            <div
              key={title}
              className="flex items-center gap-4 rounded-[13px] border border-white/[0.07] bg-[#090909] p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">
                <Icon
                  size={14}
                  className="text-[#c4b5fd]"
                />
              </div>

              <div className="flex-1">
                <span className="font-mono text-[6px] text-[#a78bfa]">
                  {number}
                </span>

                <h3 className="mt-1 text-[10px] text-white/65">
                  {title}
                </h3>

                <p className="mt-1 text-[8px] text-white/25">
                  {description}
                </p>
              </div>

              <ArrowRight
                size={11}
                className="text-white/15"
              />
            </div>
          ),
        )}
      </div>

      {/* FOOTER */}

      <div className="relative z-10 mt-4 flex items-center justify-between border-t border-white/[0.06] pt-5">
        <Micro>
          Traceability layer
        </Micro>

        <div className="flex items-center gap-2">
          <StatusDot />

          <Micro>
            Connected
          </Micro>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CONTROL MONITOR
========================================================= */

function ControlMonitor() {
  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-[#050505] p-6">
      <div className="flex items-center justify-between">
        <div>
          <Micro>
            Control Monitor
          </Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Compliance state
          </p>
        </div>

        <Gauge
          size={13}
          className="text-[#a78bfa]"
        />
      </div>

      {/* RADAR */}

      <div className="relative mx-auto mt-9 flex h-[175px] w-[175px] items-center justify-center">
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

        <div className="absolute inset-[20px] rounded-full border border-white/[0.07]" />

        <div className="absolute inset-[42px] rounded-full border border-white/[0.07]" />

        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.04]" />

        <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.04]" />

        {/* RADAR BEAM */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[8px] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(139,92,246,.13) 45deg, transparent 80deg)",
          }}
        />

        {/* DOTS */}

        <motion.span
          animate={{
            opacity: [0.25, 1, 0.25],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute left-[32px] top-[60px] h-1.5 w-1.5 rounded-full bg-[#a78bfa]"
        />

        <motion.span
          animate={{
            opacity: [1, 0.25, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="absolute bottom-[42px] right-[34px] h-1.5 w-1.5 rounded-full bg-white/50"
        />

        <div className="relative z-20 flex h-[70px] w-[70px] items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#080808]">
          <div className="text-center">
            <ShieldCheck
              size={20}
              strokeWidth={1}
              className="mx-auto text-[#c4b5fd]"
            />

            <span className="mt-2 block font-mono text-[5px] uppercase tracking-[0.12em] text-white/35">
              Controls
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {monitoringItems.map(
          (item, index) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-[10px] border border-white/[0.05] bg-[#080808] px-3 py-3"
            >
              <span className="text-[8px] text-white/35">
                {item.label}
              </span>

              <div className="flex items-center gap-2">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    index % 2 === 0
                      ? "bg-[#a78bfa]"
                      : "bg-white/45"
                  }`}
                />

                <span
                  className={`font-mono text-[5px] ${
                    index % 2 === 0
                      ? "text-[#a78bfa]"
                      : "text-white/35"
                  }`}
                >
                  {item.value}
                </span>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

/* =========================================================
   SMALL MODELS
========================================================= */

function SmallModel({
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

function EvidenceFlow() {
  const steps = [
    "Source",
    "Collect",
    "Verify",
    "Store",
  ];

  return (
    <SmallModel
      title="Evidence Flow"
      Icon={Database}
    >
      <div className="relative mt-8">
        <div className="absolute left-[10%] right-[10%] top-[14px] h-px bg-white/[0.08]" />

        <motion.div
          animate={{
            left: ["8%", "88%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[11px] z-20 h-1.5 w-1.5 rounded-full bg-[#a78bfa]"
        />

        <div className="relative z-10 grid grid-cols-4 gap-2">
          {steps.map(
            (step, index) => (
              <div
                key={step}
                className="text-center"
              >
                <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-[#080808]">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      index % 2 === 0
                        ? "bg-[#a78bfa]"
                        : "bg-white/35"
                    }`}
                  />
                </div>

                <span className="mt-3 block font-mono text-[5px] uppercase text-white/20">
                  {step}
                </span>
              </div>
            ),
          )}
        </div>
      </div>

      <p className="mt-7 text-[9px] leading-5 text-white/30">
        Organize supporting evidence through a controlled
        lifecycle from source collection to review-ready
        records.
      </p>
    </SmallModel>
  );
}

function ControlCoverage() {
  const bars = [76, 91, 68, 84, 73];

  return (
    <SmallModel
      title="Control Coverage"
      Icon={Activity}
    >
      <div className="mt-7 flex h-[90px] items-end gap-3 rounded-[12px] border border-white/[0.05] bg-[#080808] p-4">
        {bars.map(
          (value, index) => (
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
                  delay: index * 0.08,
                }}
                className={`w-full rounded-t-[2px] ${
                  index === 1
                    ? "bg-[#a78bfa]"
                    : "bg-white/20"
                }`}
              />
            </div>
          ),
        )}
      </div>

      <p className="mt-5 text-[9px] leading-5 text-white/30">
        Visualize mapped controls and areas requiring
        additional review without treating a dashboard
        score as proof of compliance.
      </p>
    </SmallModel>
  );
}

function ReviewQueue() {
  const rows = [
    "Policy review",
    "Control evidence",
    "Exception review",
  ];

  return (
    <SmallModel
      title="Review Queue"
      Icon={Search}
    >
      <div className="mt-7 space-y-2">
        {rows.map(
          (row, index) => (
            <motion.div
              key={row}
              initial={{
                opacity: 0,
                x: 10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="flex items-center justify-between rounded-[9px] border border-white/[0.05] bg-[#080808] px-3 py-3"
            >
              <div className="flex items-center gap-3">
                <CircleDot
                  size={8}
                  className={
                    index === 1
                      ? "text-[#a78bfa]"
                      : "text-white/20"
                  }
                />

                <span className="text-[8px] text-white/35">
                  {row}
                </span>
              </div>

              <ArrowRight
                size={9}
                className="text-white/15"
              />
            </motion.div>
          ),
        )}
      </div>

      <p className="mt-5 text-[9px] leading-5 text-white/30">
        Route selected compliance items to accountable
        reviewers with supporting context and evidence.
      </p>
    </SmallModel>
  );
}

/* =========================================================
   INTRO
========================================================= */

function ComplianceIntro() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="01">
          Connected Compliance
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="max-w-[650px] text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              From obligation

              <span className="block text-white/20">
                to evidence.
              </span>
            </h2>
          </div>

          <div className="self-end">
            <p className="text-[14px] leading-8 text-white/[0.55]">
              Regulatory compliance becomes difficult when
              obligations, policies, controls and evidence
              live in separate systems with limited
              traceability. A connected architecture helps
              teams understand how a requirement translates
              into operational action.
            </p>

            <p className="mt-5 text-[12px] leading-7 text-white/[0.38]">
              HYI can help design the technology and data
              layers that support compliance operations,
              including requirement mapping, control
              workflows, evidence management, monitoring
              and AI-assisted document review.
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
              Compliance Capabilities
            </SectionLabel>

            <h2 className="mt-9 max-w-[800px] text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Build compliance

              <span className="block text-white/20">
                into operations.
              </span>
            </h2>
          </div>

          <p className="max-w-[460px] text-[12px] leading-7 text-white/40">
            Create a connected operating environment where
            requirements, controls, evidence and review
            workflows can be understood together.
          </p>
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(
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
   TRACEABILITY
========================================================= */

function TraceabilitySection() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div className="self-center">
            <SectionLabel number="03">
              Traceability
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              Know why

              <span className="block bg-gradient-to-r from-white/20 to-[#a78bfa]/70 bg-clip-text text-transparent">
                every control exists.
              </span>
            </h2>

            <p className="mt-7 max-w-[450px] text-[12px] leading-7 text-white/40">
              Traceability connects a regulatory
              requirement to the internal policy,
              responsible process, operational control and
              evidence used to support review. That
              relationship provides more useful context
              than isolated compliance records.
            </p>
          </div>

          <TraceabilityModel />
        </div>
      </Container>
    </section>
  );
}

function TraceabilityModel() {
  const items = [
    {
      code: "REQ",
      title: "Requirement",
      Icon: FileCheck2,
    },
    {
      code: "POL",
      title: "Policy",
      Icon: Layers3,
    },
    {
      code: "CTL",
      title: "Control",
      Icon: ShieldCheck,
    },
    {
      code: "EVD",
      title: "Evidence",
      Icon: Database,
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#080808] p-6 md:p-8">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="relative flex items-center justify-between">
        <div>
          <Micro>
            Requirement Graph
          </Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Connected compliance context
          </p>
        </div>

        <Network
          size={13}
          className="text-[#a78bfa]"
        />
      </div>

      <div className="relative mt-12">
        <div className="absolute left-[10%] right-[10%] top-[31px] hidden h-px bg-gradient-to-r from-white/10 via-[#8b5cf6]/50 to-white/10 sm:block" />

        <motion.div
          animate={{
            left: ["8%", "90%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[27px] z-30 hidden h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_15px_rgba(196,181,253,.8)] sm:block"
        />

        <div className="relative grid gap-3 sm:grid-cols-4">
          {items.map(
            (
              {
                code,
                title,
                Icon,
              },
              index,
            ) => (
              <motion.div
                key={title}
                whileHover={{
                  y: -5,
                }}
                className="relative z-20 rounded-[14px] border border-white/[0.07] bg-[#050505] p-4 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">
                  <Icon
                    size={17}
                    strokeWidth={1.2}
                    className="text-[#c4b5fd]"
                  />
                </div>

                <span className="mt-5 block font-mono text-[6px] text-[#a78bfa]">
                  {code}
                </span>

                <span className="mt-2 block text-[9px] text-white/45">
                  {title}
                </span>

                <span className="mt-4 block font-mono text-[5px] text-white/15">
                  NODE 0{index + 1}
                </span>
              </motion.div>
            ),
          )}
        </div>
      </div>

      <div className="relative mt-5 rounded-[12px] border border-white/[0.06] bg-[#050505] px-4 py-4">
        <div className="flex items-center gap-3">
          <CheckCircle2
            size={11}
            className="text-[#a78bfa]"
          />

          <span className="text-[8px] leading-5 text-white/35">
            Each layer retains context for ownership,
            review and supporting documentation.
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   AI ASSISTED COMPLIANCE
========================================================= */

function AICompliance() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="04">
          AI-Assisted Compliance
        </SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-[1.2fr_.8fr]">
          <AIReviewModel />

          <div className="self-center">
            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              AI that helps

              <span className="block text-white/20">
                reviewers see more.
              </span>
            </h2>

            <p className="mt-7 max-w-[470px] text-[12px] leading-7 text-white/40">
              Suitable AI systems can assist with document
              classification, information extraction,
              policy comparison and review prioritization.
              For consequential compliance decisions,
              human oversight and appropriate governance
              remain important.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Document classification",
                "Requirement extraction",
                "Policy comparison",
                "Evidence organization",
              ].map((item) => (
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
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AIReviewModel() {
  return (
    <div className="relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#050505] p-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <Micro>
            AI Review Assistant
          </Micro>

          <p className="mt-2 text-[9px] text-white/25">
            Human-governed analytical support
          </p>
        </div>

        <BrainCircuit
          size={14}
          className="text-[#c4b5fd]"
        />
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-[.8fr_1.2fr]">
        {/* DOCUMENT */}

        <div className="relative overflow-hidden rounded-[15px] border border-white/[0.06] bg-[#080808] p-5">
          <div className="flex items-center justify-between">
            <Micro>
              Source Document
            </Micro>

            <FileCheck2
              size={11}
              className="text-white/25"
            />
          </div>

          <div className="mt-7 space-y-3">
            {[92, 72, 85, 58, 76, 64].map(
              (width, index) => (
                <div
                  key={index}
                  className="relative h-[5px] overflow-hidden rounded-full bg-white/[0.05]"
                >
                  <div
                    style={{
                      width: `${width}%`,
                    }}
                    className="h-full rounded-full bg-white/[0.12]"
                  />

                  {index === 2 && (
                    <motion.div
                      animate={{
                        opacity: [0.15, 0.7, 0.15],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="absolute inset-0 bg-[#8b5cf6]/50"
                    />
                  )}
                </div>
              ),
            )}
          </div>

          <motion.div
            animate={{
              top: ["20%", "82%", "20%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-3 right-3 h-px bg-[#a78bfa]/50 shadow-[0_0_12px_rgba(167,139,250,.45)]"
          />
        </div>

        {/* ANALYSIS */}

        <div className="rounded-[15px] border border-white/[0.06] bg-[#080808] p-5">
          <Micro>
            Extracted Context
          </Micro>

          <div className="mt-6 space-y-3">
            <AnalysisRow
              label="Requirement"
              value="IDENTIFIED"
            />

            <AnalysisRow
              label="Policy reference"
              value="MAPPED"
            />

            <AnalysisRow
              label="Control context"
              value="FOUND"
            />

            <AnalysisRow
              label="Human review"
              value="REQUIRED"
              strong
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalysisRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-[9px] border border-white/[0.05] bg-[#050505] px-3 py-3">
      <span className="text-[8px] text-white/30">
        {label}
      </span>

      <span
        className={`font-mono text-[5px] ${
          strong
            ? "text-[#c4b5fd]"
            : "text-white/25"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   WORKFLOW
========================================================= */

function ComplianceWorkflow() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <SectionLabel number="05">
              Compliance Workflow
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl">
              A continuous

              <span className="block text-white/20">
                control loop.
              </span>
            </h2>
          </div>

          <p className="max-w-[450px] text-[12px] leading-7 text-white/40">
            Connect interpretation, control operation,
            monitoring and review so compliance becomes an
            ongoing operating process rather than only a
            periodic exercise.
          </p>
        </div>

        <div className="relative mt-14 grid gap-3 lg:grid-cols-5">
          <div className="absolute left-[7%] right-[7%] top-[34px] hidden h-px bg-gradient-to-r from-[#8b5cf6]/15 via-[#c4b5fd]/40 to-[#8b5cf6]/15 lg:block" />

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
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#050505]">
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
   PRINCIPLES
========================================================= */

function Principles() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel number="06">
              Design Principles
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.06em]">
              Control with

              <span className="block text-white/20">
                context.
              </span>
            </h2>

            <p className="mt-6 max-w-[430px] text-[11px] leading-7 text-white/35">
              Technology can support compliance operations,
              but legal and regulatory obligations depend
              on jurisdiction, business context and
              applicable requirements. Systems should
              support accountable teams rather than
              replace appropriate legal or compliance
              judgment.
            </p>
          </div>

          <div className="overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#050505]">
            {principles.map(
              (item, index) => (
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
                    delay: index * 0.05,
                  }}
                  className="flex items-center justify-between gap-5 border-b border-white/[0.06] px-6 py-5 last:border-b-0"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                        index % 2 === 0
                          ? "bg-[#a78bfa]"
                          : "bg-white/30"
                      }`}
                    />

                    <span className="text-[11px] leading-6 text-white/[0.48]">
                      {item}
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
   CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-32 md:px-10 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.06] blur-[200px]" />

      <Container className="relative text-center">
        {/* SHIELD MODEL */}

        <div className="relative mx-auto flex h-[115px] w-[115px] items-center justify-center">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 15,
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
            className="absolute inset-[14px] rounded-full border border-dashed border-white/10"
          />

          <div className="flex h-[65px] w-[65px] items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#090909]">
            <ShieldCheck
              size={25}
              strokeWidth={1}
              className="text-[#c4b5fd]"
            />
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
            className="absolute inset-[5px]"
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 rounded-full bg-[#a78bfa] shadow-[0_0_16px_rgba(167,139,250,.9)]" />
          </motion.span>
        </div>

        <h2 className="mx-auto mt-10 max-w-[1100px] text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
          Make compliance

          <span className="block bg-gradient-to-r from-[#c4b5fd] via-white/35 to-white/15 bg-clip-text text-transparent">
            easier to understand.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-[720px] text-[12px] leading-7 text-white/[0.43]">
          Build connected compliance infrastructure that
          brings requirements, policies, controls,
          evidence and review workflows into a more
          traceable and governable operating environment.
        </p>

        <a
          href="#compliance-engine"
          className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full bg-white px-9 py-4 text-[11px] font-medium text-black"
        >
          Explore Compliance Intelligence

          <ArrowRight size={13} />
        </a>
      </Container>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function RegulatoryComplianceClient() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="overflow-x-hidden bg-[#050505] text-white">
      {/* PAGE PROGRESS */}

      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#7c3aed] via-[#c4b5fd] to-white/50"
      />

      <Hero />

      <ComplianceIntro />

      <Capabilities />

      <TraceabilitySection />

      <AICompliance />

      <ComplianceWorkflow />

      <Principles />

      <FinalCTA />
    </div>
  );
}