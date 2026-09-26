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

const riskDomains = [
  {
    number: "01",
    Icon: Network,
    title: "Attack Surface",
    description:
      "Understand exposed systems, services, identities and digital entry points that may increase organizational cyber risk.",
  },
  {
    number: "02",
    Icon: ShieldCheck,
    title: "Security Controls",
    description:
      "Evaluate whether technical and organizational safeguards are appropriately aligned with identified threats and critical assets.",
  },
  {
    number: "03",
    Icon: Database,
    title: "Data Exposure",
    description:
      "Review where sensitive information exists, how it moves and which access paths may create unnecessary exposure.",
  },
  {
    number: "04",
    Icon: Cloud,
    title: "Cloud Risk",
    description:
      "Assess cloud configurations, identity boundaries, workloads and infrastructure dependencies across modern environments.",
  },
  {
    number: "05",
    Icon: Cpu,
    title: "Technology Risk",
    description:
      "Analyze infrastructure, applications and connected systems to identify weaknesses that may affect resilience.",
  },
  {
    number: "06",
    Icon: Workflow,
    title: "Operational Risk",
    description:
      "Connect cybersecurity findings with business processes to understand potential operational consequences.",
  },
];

const assets = [
  {
    name: "Identity Platform",
    type: "Critical Service",
    exposure: "Elevated",
    score: 78,
  },
  {
    name: "Cloud Workloads",
    type: "Infrastructure",
    exposure: "Moderate",
    score: 56,
  },
  {
    name: "Customer Data",
    type: "Data Asset",
    exposure: "Review",
    score: 63,
  },
  {
    name: "Public APIs",
    type: "Application",
    exposure: "Elevated",
    score: 72,
  },
];

const lifecycle = [
  {
    number: "01",
    Icon: Eye,
    title: "Discover",
    text: "Identify critical systems, business services, data and technology dependencies.",
  },
  {
    number: "02",
    Icon: Network,
    title: "Map",
    text: "Understand relationships between assets, identities, networks and external exposure.",
  },
  {
    number: "03",
    Icon: Activity,
    title: "Assess",
    text: "Evaluate weaknesses, threats, existing controls and relevant business context.",
  },
  {
    number: "04",
    Icon: Gauge,
    title: "Prioritize",
    text: "Organize findings according to potential impact, exposure and remediation context.",
  },
  {
    number: "05",
    Icon: Settings2,
    title: "Mitigate",
    text: "Define practical actions for reducing identified cyber risk and strengthening controls.",
  },
  {
    number: "06",
    Icon: RefreshCcw,
    title: "Monitor",
    text: "Continuously revisit risk as infrastructure, threats and business conditions change.",
  },
];

const principles = [
  "Connect technical findings with business context.",
  "Prioritize critical assets before treating every issue equally.",
  "Evaluate existing controls alongside identified weaknesses.",
  "Keep risk assumptions visible and reviewable.",
  "Treat cybersecurity risk as a changing condition, not a one-time score.",
  "Include identity, cloud, data, application and infrastructure exposure.",
  "Define remediation ownership and expected outcomes.",
  "Reassess material changes to systems and attack surfaces.",
];

const matrix = [
  { label: "Critical", x: 86, y: 19 },
  { label: "High", x: 69, y: 34 },
  { label: "Medium", x: 48, y: 57 },
  { label: "Observed", x: 27, y: 73 },
];

const topologyNodes = [
  {
    id: "cloud",
    title: "CLOUD",
    subtitle: "WORKLOADS",
    x: "14%",
    y: "22%",
    Icon: Cloud,
  },
  {
    id: "identity",
    title: "IDENTITY",
    subtitle: "ACCESS",
    x: "78%",
    y: "18%",
    Icon: ShieldCheck,
  },
  {
    id: "data",
    title: "DATA",
    subtitle: "ASSETS",
    x: "82%",
    y: "70%",
    Icon: Database,
  },
  {
    id: "network",
    title: "NETWORK",
    subtitle: "EDGE",
    x: "13%",
    y: "72%",
    Icon: Network,
  },
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
          scale: [1, 2.3, 1],
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
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
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

  const headingY = useTransform(scrollY, [0, 600], [0, 80]);
  const headingOpacity = useTransform(scrollY, [0, 500], [1, 0.25]);
  const modelY = useTransform(scrollY, [0, 850], [0, 100]);
  const modelScale = useTransform(scrollY, [0, 850], [1, 0.94]);

  return (
    <section className="relative overflow-hidden bg-black px-5  md:px-10 ">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
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
          scale: [1, 1.18, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[550px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#6d28d9] blur-[220px]"
      />

      <Container className="relative">
        <motion.div
          style={{
            y: headingY,
            opacity: headingOpacity,
          }}
          className="mx-auto max-w-[1050px] text-center"
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
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/[0.15] bg-white/[0.025] px-5 py-2.5"
          >
            <LiveDot />

            <span className="text-[10px] text-white/55">
              Cyber Risk Intelligence
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
              duration: 0.85,
              delay: 0.08,
            }}
            className="mx-auto mt-8 max-w-[1050px] text-[clamp(3.3rem,6vw,6.8rem)] font-semibold leading-[0.91] tracking-[-0.07em]"
          >
            See the risk

            <span className="block text-white/75">
              before it becomes
            </span>

            <span className="block text-[#a78bfa]">
              an incident.
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
            className="mx-auto mt-8 max-w-[780px] text-[13px] leading-7 text-white/[0.50] md:text-sm"
          >
            HYI.AI Cyber Risk Assessment helps organizations understand
            technology exposure, critical assets, security controls and
            potential business impact so teams can prioritize cybersecurity
            improvements with clearer context.
          </motion.p>

          <motion.a
            href="#risk-command-center"
            initial={{
              opacity: 0,
              scale: 0.9,
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
            Explore Risk Assessment

            <ArrowRight size={13} />
          </motion.a>
        </motion.div>

        <motion.div
          style={{
            y: modelY,
            scale: modelScale,
          }}
          className="mt-20"
        >
          <RiskCommandCenter />
        </motion.div>
      </Container>
    </section>
  );
}

/* =========================================================
   COMMAND CENTER
========================================================= */

function RiskCommandCenter() {
  return (
    <motion.div
      id="risk-command-center"
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
        delay: 0.25,
      }}
      className="relative overflow-hidden rounded-[30px] border border-white/[0.16] bg-[#030303] shadow-[0_50px_150px_rgba(0,0,0,.9)]"
    >
      <motion.div
        animate={{
          x: ["-100%", "220%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 z-40 h-px w-[40%] bg-gradient-to-r from-transparent via-[#a78bfa] to-transparent"
      />

      <div className="flex items-center justify-between border-b border-white/[0.12] px-6 py-5">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[#ed6a5e]" />
          <span className="h-3 w-3 rounded-full bg-[#f4bf4f]" />
          <span className="h-3 w-3 rounded-full bg-[#61c454]" />

          <span className="ml-5 text-white/20">
            ◧
          </span>

          <span className="ml-3 text-white/40">
            ‹
          </span>

          <span className="text-white/20">
            ›
          </span>
        </div>

        <div className="flex items-center gap-2 text-white/35">
          <ShieldCheck size={12} />

          <span className="font-mono text-[8px]">
            HYI.AI / RISK COMMAND CENTER
          </span>
        </div>

        <div className="hidden items-center gap-5 text-white/25 sm:flex">
          <RefreshCcw size={13} />
          <Radio size={13} />
          <CircleDot size={13} />
        </div>
      </div>

      <div className="grid min-h-[760px] lg:grid-cols-[88px_1fr]">
        <CommandSidebar />

        <div className="p-5 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <TinyLabel>
                Enterprise Security Assessment
              </TinyLabel>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                Cyber Risk Intelligence
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2">
                <LiveDot />

                <span className="font-mono text-[7px] text-white/35">
                  ASSESSMENT ACTIVE
                </span>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                className="rounded-full bg-[#7046e6] px-5 py-2.5 text-[9px]"
              >
                + New Assessment
              </motion.button>
            </div>
          </div>

          <div className="mt-7 grid gap-4 xl:grid-cols-[1.35fr_.65fr]">
            <AttackSurfaceRadar />

            <RiskSummary />
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1.25fr_.75fr]">
            <AssetExposureTable />

            <RiskSignalPanel />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   COMMAND SIDEBAR
========================================================= */

function CommandSidebar() {
  const icons: ElementType[] = [
    ShieldCheck,
    Activity,
    Network,
    Database,
    Cloud,
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
   ATTACK SURFACE RADAR
========================================================= */

function AttackSurfaceRadar() {
  return (
    <div className="relative min-h-[440px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#060606]">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)",
          backgroundSize: "35px 35px",
        }}
      />

      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.07] p-5">
        <div>
          <span className="text-[15px] font-medium text-white/75">
            Attack Surface Radar
          </span>

          <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.12em] text-white/20">
            Exposure relationship model
          </span>
        </div>

        <div className="flex items-center gap-2">
          <LiveDot />

          <TinyLabel>Scanning</TinyLabel>
        </div>
      </div>

      <div className="relative mx-auto h-[360px] max-w-[680px]">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 680 360"
        >
          <motion.line
            x1="340"
            y1="180"
            x2="110"
            y2="85"
            stroke="rgba(139,92,246,.32)"
            strokeDasharray="6 8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4 }}
          />

          <motion.line
            x1="340"
            y1="180"
            x2="555"
            y2="75"
            stroke="rgba(139,92,246,.32)"
            strokeDasharray="6 8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.4,
              delay: 0.15,
            }}
          />

          <motion.line
            x1="340"
            y1="180"
            x2="560"
            y2="270"
            stroke="rgba(139,92,246,.32)"
            strokeDasharray="6 8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.4,
              delay: 0.3,
            }}
          />

          <motion.line
            x1="340"
            y1="180"
            x2="100"
            y2="275"
            stroke="rgba(139,92,246,.32)"
            strokeDasharray="6 8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.4,
              delay: 0.45,
            }}
          />
        </svg>

        <div className="absolute left-1/2 top-1/2 flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 14,
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
              duration: 9,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[25px] rounded-full border border-white/[0.09]"
          />

          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              boxShadow: [
                "0 0 30px rgba(124,58,237,.15)",
                "0 0 75px rgba(124,58,237,.38)",
                "0 0 30px rgba(124,58,237,.15)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="relative z-10 flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full border border-[#a78bfa]/30 bg-[#7046e6]/10"
          >
            <ShieldCheck
              size={27}
              className="text-[#c4b5fd]"
            />

            <span className="mt-2 font-mono text-[7px] text-white/40">
              RISK CORE
            </span>
          </motion.div>

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[5px] rounded-full"
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#c4b5fd] shadow-[0_0_18px_#8b5cf6]" />
          </motion.div>
        </div>

        {topologyNodes.map((node, index) => {
          const Icon = node.Icon;

          return (
            <motion.div
              key={node.id}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [-3, 3, -3],
              }}
              transition={{
                opacity: {
                  delay: 0.5 + index * 0.1,
                },
                scale: {
                  delay: 0.5 + index * 0.1,
                },
                y: {
                  duration: 3 + index * 0.4,
                  repeat: Infinity,
                },
              }}
              style={{
                left: node.x,
                top: node.y,
              }}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-[13px] border border-white/[0.10] bg-[#090909] px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.05]">
                  <Icon
                    size={12}
                    className="text-[#c4b5fd]"
                  />
                </div>

                <div>
                  <span className="block font-mono text-[7px] text-white/55">
                    {node.title}
                  </span>

                  <span className="mt-1 block font-mono text-[5px] text-white/20">
                    {node.subtitle}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 315deg, rgba(139,92,246,.18) 350deg, rgba(196,181,253,.3) 360deg)",
            maskImage:
              "radial-gradient(circle, transparent 0%, transparent 53%, black 54%, black 100%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 0%, transparent 53%, black 54%, black 100%)",
          }}
        />
      </div>
    </div>
  );
}

/* =========================================================
   RISK SUMMARY
========================================================= */

function RiskSummary() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
      <RiskMetric
        label="Risk Visibility"
        value="82"
        description="Illustrative assessment interface"
        progress={82}
      />

      <RiskMetric
        label="Control Coverage"
        value="71"
        description="Illustrative assessment interface"
        progress={71}
      />

      <div className="rounded-[20px] border border-white/[0.08] bg-[#060606] p-5">
        <div className="flex items-center justify-between">
          <TinyLabel>Assessment Status</TinyLabel>

          <LiveDot />
        </div>

        <div className="mt-6 space-y-4">
          {[
            ["Assets", "Mapped"],
            ["Controls", "Reviewing"],
            ["Exposure", "Analyzing"],
          ].map((item, index) => (
            <div
              key={item[0]}
              className="flex items-center justify-between border-b border-white/[0.05] pb-3"
            >
              <span className="text-[9px] text-white/45">
                {item[0]}
              </span>

              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="font-mono text-[7px] text-[#a78bfa]"
              >
                {item[1]}
              </motion.span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RiskMetric({
  label,
  value,
  description,
  progress,
}: {
  label: string;
  value: string;
  description: string;
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

      <div className="mt-6 flex items-end gap-2">
        <span className="text-5xl font-medium tracking-[-0.07em]">
          {value}
        </span>

        <span className="mb-1 text-[10px] text-white/20">
          /100
        </span>
      </div>

      <p className="mt-3 text-[8px] text-white/25">
        {description}
      </p>

      <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: `${progress}%`,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          className="h-full bg-[#8b5cf6]"
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   ASSET TABLE
========================================================= */

function AssetExposureTable() {
  return (
    <div className="rounded-[20px] border border-white/[0.08] bg-[#060606] p-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[15px] font-medium text-white/75">
            Critical Asset Exposure
          </span>

          <span className="mt-1 block font-mono text-[7px] text-white/20">
            ASSET / EXPOSURE / CONTEXT
          </span>
        </div>

        <TinyLabel>Live Model</TinyLabel>
      </div>

      <div className="mt-6">
        {assets.map((asset, index) => (
          <motion.div
            key={asset.name}
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
            className="grid grid-cols-[1.3fr_.8fr_.5fr] items-center gap-4 border-t border-white/[0.06] py-4"
          >
            <div>
              <span className="block text-[10px] text-white/55">
                {asset.name}
              </span>

              <span className="mt-1 block font-mono text-[6px] text-white/20">
                {asset.type}
              </span>
            </div>

            <div>
              <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${asset.score}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                  }}
                  className="h-full bg-gradient-to-r from-[#5b21b6] to-[#c4b5fd]"
                />
              </div>
            </div>

            <span className="text-right font-mono text-[7px] text-[#a78bfa]">
              {asset.exposure}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   RISK SIGNAL PANEL
========================================================= */

function RiskSignalPanel() {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#060606] p-5">
      <div className="absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#7046e6]/10 blur-[80px]" />

      <div className="relative">
        <TinyLabel>Risk Intelligence</TinyLabel>

        <div className="mt-7 flex items-center justify-center">
          <div className="relative flex h-[170px] w-[170px] items-center justify-center">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 13,
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
              className="absolute inset-[20px] rounded-full border border-white/[0.08]"
            />

            <motion.div
              animate={{
                scale: [1, 1.07, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="flex h-[90px] w-[90px] items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.06]"
            >
              <BrainCircuit
                size={27}
                className="text-[#c4b5fd]"
              />
            </motion.div>
          </div>
        </div>

        <p className="mt-5 text-center text-[9px] leading-5 text-white/30">
          Organize technical findings into a clearer risk context for
          security and business stakeholders.
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   INTRO
========================================================= */

function RiskIntro() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10">
      <motion.div
        animate={{
          x: ["-5%", "5%", "-5%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-0 h-[750px] w-full bg-[radial-gradient(circle_at_50%_35%,rgba(91,33,182,.38),transparent_58%)]"
      />

      <Container className="relative">
        <Reveal className="text-center">
          <SectionLabel number="01">
            Cyber Risk Assessment
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[950px] text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
            Risk is more than a vulnerability list.
          </h2>

          <p className="mx-auto mt-6 max-w-[950px] text-[13px] leading-7 text-white/[0.52]">
            A useful cybersecurity risk assessment considers what the
            organization depends on, where exposure exists, which threats are
            relevant, what controls are already in place and how a security
            event could affect important business operations.
          </p>
        </Reveal>

        <div className="mt-16">
          <RiskMatrix />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   RISK MATRIX
========================================================= */

function RiskMatrix() {
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
      transition={{
        duration: 0.8,
      }}
      className="relative mx-auto max-w-[1050px] overflow-hidden rounded-[26px] border border-white/[0.12] bg-[#08070a] p-6 md:p-8"
    >
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <TinyLabel>Risk Prioritization Model</TinyLabel>

          <h3 className="mt-2 text-2xl font-medium">
            Exposure × Impact
          </h3>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2">
          <LiveDot />
          <TinyLabel>Illustrative Model</TinyLabel>
        </div>
      </div>

      <div className="relative mt-8 h-[480px] overflow-hidden rounded-[18px] border border-white/[0.07] bg-black">
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
          {Array.from({ length: 16 }).map((_, index) => (
            <div
              key={index}
              className="border-b border-r border-white/[0.055]"
            />
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#5b21b6]/[0.07] to-transparent" />

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[7px] uppercase tracking-[0.15em] text-white/20">
          Likelihood →
        </div>

        <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 font-mono text-[7px] uppercase tracking-[0.15em] text-white/20">
          Business Impact →
        </div>

        {matrix.map((point, index) => (
          <motion.div
            key={point.label}
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
              type: "spring",
              delay: 0.3 + index * 0.15,
            }}
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0 rgba(139,92,246,0)",
                  "0 0 35px rgba(139,92,246,.4)",
                  "0 0 0 rgba(139,92,246,0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.4,
              }}
              className="flex items-center gap-2 rounded-full border border-[#a78bfa]/30 bg-[#160c24] px-4 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-[#a78bfa]" />

              <span className="font-mono text-[7px] text-white/60">
                {point.label}
              </span>
            </motion.div>
          </motion.div>
        ))}

        <motion.div
          animate={{
            left: ["10%", "90%", "10%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-[#8b5cf6]/30 to-transparent"
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   RISK DOMAINS
========================================================= */

function RiskDomains() {
  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <Reveal>
          <SectionLabel number="02">
            Assessment Domains
          </SectionLabel>

          <div className="mt-8 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <h2 className="max-w-[700px] text-5xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-6xl">
              Understand where

              <span className="block text-white/25">
                cyber risk lives.
              </span>
            </h2>

            <p className="max-w-[650px] text-[13px] leading-7 text-white/[0.48]">
              Modern cyber risk spans identities, cloud environments,
              applications, infrastructure, data and operational
              dependencies. Assessment should connect those areas rather than
              evaluating each one in isolation.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {riskDomains.map((item, index) => {
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
                  borderColor: "rgba(167,139,250,.28)",
                }}
                className="group relative min-h-[310px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#070707] p-6"
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
                  className="absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#7046e6] blur-[90px]"
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
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

                  <h3 className="mt-14 text-xl font-medium tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[12px] leading-7 text-white/[0.45]">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 font-mono text-[7px] text-[#a78bfa]">
                    ASSESS RISK

                    <ChevronRight
                      size={10}
                      className="transition-transform group-hover:translate-x-1"
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

/* =========================================================
   EXPOSURE TOPOLOGY
========================================================= */

function ExposureTopology() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <Reveal>
            <SectionLabel number="03">
              Exposure Topology
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Find the

              <span className="block text-[#a78bfa]">
                connected risk.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[12px] leading-7 text-white/[0.47]">
              A weakness becomes more meaningful when it is connected to a
              critical system, privileged identity, sensitive data set or
              important business service. Mapping relationships helps teams
              understand that context.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Assets and services",
                "Identity relationships",
                "Network exposure",
                "Cloud dependencies",
                "Sensitive information",
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

          <ExposureTopologyModel />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   TOPOLOGY MODEL
========================================================= */

function ExposureTopologyModel() {
  const nodeData = [
    {
      Icon: Cloud,
      label: "Cloud",
      position: "left-[8%] top-[16%]",
    },
    {
      Icon: Database,
      label: "Data",
      position: "right-[8%] top-[16%]",
    },
    {
      Icon: Server,
      label: "Infrastructure",
      position: "left-[8%] bottom-[16%]",
    },
    {
      Icon: ShieldCheck,
      label: "Identity",
      position: "right-[8%] bottom-[16%]",
    },
  ];

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
      className="relative min-h-[560px] overflow-hidden rounded-[26px] border border-white/[0.08] bg-black"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 700 560"
      >
        {[
          [350, 280, 105, 100],
          [350, 280, 595, 100],
          [350, 280, 105, 460],
          [350, 280, 595, 460],
        ].map((line, index) => (
          <motion.line
            key={index}
            x1={line[0]}
            y1={line[1]}
            x2={line[2]}
            y2={line[3]}
            stroke="rgba(139,92,246,.28)"
            strokeWidth="1"
            strokeDasharray="7 9"
            initial={{
              pathLength: 0,
            }}
            whileInView={{
              pathLength: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.4,
              delay: index * 0.15,
            }}
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 flex h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 16,
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
          className="absolute inset-[28px] rounded-full border border-white/[0.08]"
        />

        <motion.div
          animate={{
            scale: [1, 1.07, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#7046e6]/[0.07] shadow-[0_0_80px_rgba(124,58,237,.25)]"
        >
          <Network
            size={30}
            className="text-[#c4b5fd]"
          />

          <span className="mt-3 font-mono text-[7px] text-white/40">
            RISK GRAPH
          </span>
        </motion.div>
      </div>

      {nodeData.map(({ Icon, label, position }, index) => (
        <motion.div
          key={label}
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 3.5 + index * 0.4,
            repeat: Infinity,
          }}
          className={`absolute ${position} flex w-[145px] items-center gap-3 rounded-[15px] border border-white/[0.1] bg-[#090909] p-4`}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/20">
            <Icon
              size={14}
              className="text-[#c4b5fd]"
            />
          </div>

          <div>
            <span className="block text-[9px] text-white/55">
              {label}
            </span>

            <span className="mt-1 block font-mono text-[6px] text-white/20">
              CONNECTED
            </span>
          </div>
        </motion.div>
      ))}

      <motion.div
        animate={{
          top: ["8%", "90%", "8%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-[#a78bfa]/50 to-transparent"
      />
    </motion.div>
  );
}

/* =========================================================
   LIFECYCLE
========================================================= */

function AssessmentLifecycle() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="04">
            Assessment Lifecycle
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[850px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            From exposure to action.
          </h2>

          <p className="mx-auto mt-6 max-w-[850px] text-[13px] leading-7 text-white/[0.47]">
            Risk assessment becomes more useful when findings move through a
            repeatable process from discovery and context to prioritization,
            mitigation and continuous review.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-6">
          <div className="absolute left-[7%] right-[7%] top-[36px] hidden h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/50 to-transparent lg:block" />

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
            className="absolute top-[32px] z-30 hidden h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_20px_#8b5cf6] lg:block"
          />

          {lifecycle.map((item, index) => {
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
   PRIORITIZATION
========================================================= */

function RiskPrioritization() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#27103d_0%,#0d0610_35%,#000_72%)] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <RiskPriorityEngine />

          <Reveal>
            <SectionLabel number="05">
              Risk Prioritization
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Not every finding

              <span className="block text-white/25">
                carries equal risk.
              </span>
            </h2>

            <p className="mt-7 max-w-[570px] text-[12px] leading-7 text-white/[0.48]">
              Prioritization can consider asset importance, exposure,
              potential impact, control effectiveness and other relevant
              context rather than relying on a vulnerability severity value
              alone.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {[
                "Asset criticality",
                "Business impact",
                "External exposure",
                "Existing controls",
                "Identity privileges",
                "Data sensitivity",
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
                  className="flex items-center gap-3 rounded-[12px] border border-white/[0.07] bg-black/40 p-4"
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

/* =========================================================
   PRIORITY ENGINE
========================================================= */

function RiskPriorityEngine() {
  const bars = [34, 52, 68, 43, 82, 59, 91, 63];

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
      className="relative overflow-hidden rounded-[26px] border border-white/[0.1] bg-[#060606] p-6"
    >
      <div className="absolute left-1/2 top-0 h-16 w-[80%] -translate-x-1/2 bg-[#7046e6]/25 blur-[50px]" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <TinyLabel>Risk Priority Engine</TinyLabel>

            <h3 className="mt-2 text-xl font-medium">
              Exposure Analysis
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <LiveDot />
            <TinyLabel>Analyzing</TinyLabel>
          </div>
        </div>

        <div className="mt-10 flex h-[300px] items-end gap-3 border-b border-white/[0.08]">
          {bars.map((value, index) => (
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
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.07,
                }}
                className={`relative rounded-t-full ${
                  index === 6
                    ? "bg-[#7046e6]"
                    : "bg-white/[0.14]"
                }`}
              >
                {index === 6 && (
                  <motion.span
                    animate={{
                      scale: [1, 1.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#c4b5fd]"
                  />
                )}
              </motion.div>

              <span className="mt-3 text-center font-mono text-[6px] text-white/20">
                R{index + 1}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-3 gap-3">
          {[
            ["Critical", "04"],
            ["Elevated", "11"],
            ["Review", "23"],
          ].map((item) => (
            <div
              key={item[0]}
              className="rounded-[12px] border border-white/[0.06] bg-black p-4"
            >
              <span className="font-mono text-[6px] text-white/25">
                {item[0]}
              </span>

              <span className="mt-2 block text-2xl font-medium">
                {item[1]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PRINCIPLES
========================================================= */

function RiskPrinciples() {
  return (
    <section className="border-y border-white/[0.06] bg-[#060606] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <SectionLabel number="06">
              Assessment Principles
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Context before

              <span className="block text-white/25">
                conclusions.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[12px] leading-7 text-white/[0.47]">
              Cybersecurity risk assessment should help people make informed
              decisions. Findings need enough technical and business context
              for teams to understand why an issue matters and what practical
              action may reduce the associated risk.
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

function AssessmentOutcomes() {
  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="07">
            Assessment Outcomes
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[900px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Turn findings into a security roadmap.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {[
            {
              title: "Risk Visibility",
              text: "Create a clearer view of critical assets, exposure and relevant security concerns.",
            },
            {
              title: "Prioritized Actions",
              text: "Organize remediation work according to risk context and organizational priorities.",
            },
            {
              title: "Control Insight",
              text: "Understand where existing safeguards are strong and where additional attention may be needed.",
            },
            {
              title: "Continuous Review",
              text: "Build a foundation for reassessing cyber risk as environments and business conditions change.",
            },
          ].map((item, index) => (
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
              className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#070707] p-6"
            >
              <div className="absolute -right-16 -top-16 h-[170px] w-[170px] rounded-full bg-[#7046e6]/[0.06] blur-[60px]" />

              <span className="relative font-mono text-[7px] text-[#a78bfa]">
                0{index + 1}
              </span>

              <h3 className="relative mt-14 text-xl font-medium">
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
   CTA
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
              duration: 20,
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
              <ShieldCheck
                size={23}
                className="text-[#c4b5fd]"
              />
            </motion.div>

            <h2 className="mx-auto mt-8 max-w-[850px] text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Understand your cyber risk before deciding what to fix next.
            </h2>

            <p className="mx-auto mt-5 max-w-[700px] text-[12px] leading-7 text-white/[0.48]">
              Build a clearer view of assets, exposure, security controls and
              business context through a structured cybersecurity risk
              assessment.
            </p>

            <motion.a
              href="#risk-command-center"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mx-auto mt-9 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[11px] font-medium shadow-[0_0_45px_rgba(124,58,237,.3)]"
            >
              Talk To Our Expert

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

export default function RiskAssessmentClient() {
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

      <RiskIntro />

      <RiskDomains />

      <ExposureTopology />

      <AssessmentLifecycle />

      <RiskPrioritization />

      <RiskPrinciples />

      <AssessmentOutcomes />

      <FinalCTA />
    </div>
  );
}