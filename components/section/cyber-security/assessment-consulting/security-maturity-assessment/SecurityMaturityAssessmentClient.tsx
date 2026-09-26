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

const maturityStages = [
  {
    number: "01",
    level: "INITIAL",
    title: "Reactive",
    text: "Security activities are primarily event-driven, with limited standardization and inconsistent ownership.",
  },
  {
    number: "02",
    level: "DEVELOPING",
    title: "Defined",
    text: "Core security processes begin to take shape with documented responsibilities and repeatable practices.",
  },
  {
    number: "03",
    level: "ESTABLISHED",
    title: "Managed",
    text: "Security capabilities are consistently implemented, measured and integrated into operational processes.",
  },
  {
    number: "04",
    level: "ADVANCED",
    title: "Measured",
    text: "Security performance is increasingly informed by metrics, automation, intelligence and risk context.",
  },
  {
    number: "05",
    level: "ADAPTIVE",
    title: "Optimized",
    text: "Security continuously evolves through intelligence, automation, measurement and changing business risk.",
  },
];

const maturityDomains = [
  {
    Icon: ShieldCheck,
    title: "Governance & Risk",
    score: 76,
    target: 90,
    text: "Evaluate governance structures, ownership, policies, risk processes and security decision-making.",
  },
  {
    Icon: Network,
    title: "Infrastructure Security",
    score: 68,
    target: 86,
    text: "Review network, infrastructure and platform security capabilities across the technology environment.",
  },
  {
    Icon: Cloud,
    title: "Cloud Security",
    score: 72,
    target: 92,
    text: "Assess cloud governance, identity, workload protection, configuration and security operating practices.",
  },
  {
    Icon: Database,
    title: "Data Protection",
    score: 63,
    target: 88,
    text: "Understand how sensitive information is classified, accessed, protected, monitored and governed.",
  },
  {
    Icon: Eye,
    title: "Detection & Response",
    score: 58,
    target: 91,
    text: "Assess monitoring, detection, incident response and the ability to identify and contain security events.",
  },
  {
    Icon: BrainCircuit,
    title: "Security Intelligence",
    score: 51,
    target: 84,
    text: "Evaluate how threat intelligence, analytics, automation and contextual signals support security operations.",
  },
];

const capabilityRows = [
  {
    name: "Governance",
    values: [true, true, true, false, false],
  },
  {
    name: "Identity",
    values: [true, true, true, true, false],
  },
  {
    name: "Cloud",
    values: [true, true, false, false, false],
  },
  {
    name: "Data",
    values: [true, true, true, false, false],
  },
  {
    name: "Detection",
    values: [true, true, false, false, false],
  },
  {
    name: "Response",
    values: [true, true, true, false, false],
  },
  {
    name: "Automation",
    values: [true, false, false, false, false],
  },
];

const roadmap = [
  {
    number: "01",
    Icon: Eye,
    title: "Baseline",
    text: "Establish the current state of cybersecurity capabilities, processes, controls and operating practices.",
  },
  {
    number: "02",
    Icon: Gauge,
    title: "Benchmark",
    text: "Organize observations into maturity domains and compare current capabilities with desired future states.",
  },
  {
    number: "03",
    Icon: GitBranch,
    title: "Prioritize",
    text: "Identify capability gaps and sequence improvements according to risk, dependencies and business priorities.",
  },
  {
    number: "04",
    Icon: Settings2,
    title: "Transform",
    text: "Strengthen security capabilities through practical process, technology, governance and operating-model changes.",
  },
  {
    number: "05",
    Icon: Activity,
    title: "Measure",
    text: "Track meaningful indicators to understand whether security capabilities are becoming more consistent and effective.",
  },
  {
    number: "06",
    Icon: RefreshCcw,
    title: "Improve",
    text: "Reassess maturity as threats, technology environments and organizational priorities continue to evolve.",
  },
];

const operatingLayers = [
  {
    number: "L01",
    title: "Strategy",
    description:
      "Security objectives, priorities, risk appetite and alignment with business direction.",
    Icon: BrainCircuit,
  },
  {
    number: "L02",
    title: "Governance",
    description:
      "Accountability, policies, decision rights, standards and oversight mechanisms.",
    Icon: ShieldCheck,
  },
  {
    number: "L03",
    title: "Process",
    description:
      "Repeatable operational practices for managing security responsibilities and risk.",
    Icon: Workflow,
  },
  {
    number: "L04",
    title: "Technology",
    description:
      "Security platforms, architecture, infrastructure safeguards and technical capabilities.",
    Icon: Cpu,
  },
  {
    number: "L05",
    title: "Intelligence",
    description:
      "Telemetry, analytics, threat context and information supporting security decisions.",
    Icon: Activity,
  },
  {
    number: "L06",
    title: "Automation",
    description:
      "Orchestration and automated workflows that improve consistency and operational scale.",
    Icon: Zap,
  },
];

const principles = [
  "Measure capability, not the number of security tools.",
  "Connect maturity targets to business and risk priorities.",
  "Treat maturity as a progression rather than a binary state.",
  "Assess people, process, governance and technology together.",
  "Make capability gaps understandable to technical and executive teams.",
  "Prioritize improvements that reduce meaningful organizational risk.",
  "Use measurable indicators to evaluate progress over time.",
  "Continuously reassess as the organization and threat environment evolve.",
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
        y: 32,
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

  const titleY = useTransform(scrollY, [0, 650], [0, 85]);
  const titleOpacity = useTransform(scrollY, [0, 550], [1, 0.25]);
  const modelScale = useTransform(scrollY, [0, 900], [1, 0.95]);

  return (
    <section className="relative overflow-hidden bg-black px-5  md:px-10 ">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, black 15%, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 15%, transparent 85%)",
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
        className="pointer-events-none absolute left-1/2 top-[550px] h-[550px] w-[950px] -translate-x-1/2 rounded-full bg-[#6d28d9] blur-[220px]"
      />

      <Container className="relative">
        <motion.div
          style={{
            y: titleY,
            opacity: titleOpacity,
          }}
          className="mx-auto max-w-[1100px] text-center"
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
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/[0.14] bg-white/[0.025] px-5 py-2.5"
          >
            <LiveDot />

            <span className="text-[10px] text-white/55">
              Security Maturity Intelligence
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.08,
            }}
            className="mx-auto mt-9 max-w-[1080px] text-[clamp(3.3rem,3.4vw,7rem)] font-semibold leading-[0.9] tracking-[-0.075em]"
          >
            Know where your

            <span className="block text-white/70">
              security stands.
            </span>

            <span className="block text-[#a78bfa]">
              Know what comes next.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mx-auto mt-8 max-w-[800px] text-[13px] leading-7 text-white/[0.50] md:text-sm"
          >
            HYI.AI Security Maturity Assessment creates a structured view of
            cybersecurity capabilities across governance, people, process,
            technology and operations — helping organizations understand their
            current state and define a practical path toward stronger security.
          </motion.p>

          <motion.a
            href="#maturity-observatory"
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
            Explore Maturity Assessment

            <ArrowRight size={13} />
          </motion.a>
        </motion.div>

        <motion.div
          style={{
            scale: modelScale,
          }}
          className="mt-20"
        >
          <MaturityObservatory />
        </motion.div>
      </Container>
    </section>
  );
}

/* =========================================================
   MATURITY OBSERVATORY
========================================================= */

function MaturityObservatory() {
  return (
    <motion.div
      id="maturity-observatory"
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
      className="relative overflow-hidden rounded-[30px] border border-white/[0.15] bg-[#030303] shadow-[0_60px_180px_rgba(0,0,0,.9)]"
    >
      <motion.div
        animate={{
          x: ["-100%", "250%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 z-50 h-px w-[40%] bg-gradient-to-r from-transparent via-[#c4b5fd] to-transparent"
      />

      <ObservatoryToolbar />

      <div className="grid min-h-[760px] lg:grid-cols-[88px_1fr]">
        <ObservatorySidebar />

        <div className="p-5 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <TinyLabel>
                Enterprise Security Capability
              </TinyLabel>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                Security Maturity Observatory
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2">
                <LiveDot />

                <span className="font-mono text-[7px] text-white/35">
                  ASSESSMENT ACTIVE
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                className="rounded-full bg-[#7046e6] px-5 py-2.5 text-[9px]"
              >
                View Roadmap
              </motion.button>
            </div>
          </div>

          <div className="mt-7 grid gap-4 xl:grid-cols-[1.35fr_.65fr]">
            <MaturityOrbit />

            <CurrentTargetPanel />
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_.8fr]">
            <DomainProgress />

            <CapabilitySignal />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ObservatoryToolbar() {
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
          HYI.AI / SECURITY MATURITY
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

function ObservatorySidebar() {
  const icons: ElementType[] = [
    Gauge,
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
          <Gauge
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
   MATURITY ORBIT
========================================================= */

function MaturityOrbit() {
  const orbitNodes = [
    {
      label: "Governance",
      x: "50%",
      y: "4%",
    },
    {
      label: "Identity",
      x: "89%",
      y: "28%",
    },
    {
      label: "Cloud",
      x: "82%",
      y: "77%",
    },
    {
      label: "Response",
      x: "18%",
      y: "77%",
    },
    {
      label: "Data",
      x: "11%",
      y: "28%",
    },
  ];

  return (
    <div className="relative min-h-[455px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#060606]">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.07] p-5">
        <div>
          <span className="text-[15px] font-medium text-white/75">
            Capability Maturity Model
          </span>

          <span className="mt-1 block font-mono text-[7px] text-white/20">
            CURRENT STATE / TARGET STATE
          </span>
        </div>

        <div className="flex items-center gap-2">
          <LiveDot />
          <TinyLabel>Analyzing</TinyLabel>
        </div>
      </div>

      <div className="relative mx-auto h-[375px] max-w-[680px]">
        <div className="absolute left-1/2 top-1/2 flex h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          {[0, 1, 2].map((ring) => (
            <motion.div
              key={ring}
              animate={{
                rotate: ring % 2 === 0 ? 360 : -360,
              }}
              transition={{
                duration: 16 + ring * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                inset: `${ring * 36}px`,
              }}
              className="absolute rounded-full border border-dashed border-[#8b5cf6]/20"
            />
          ))}

          <motion.div
            animate={{
              scale: [1, 1.07, 1],
              boxShadow: [
                "0 0 30px rgba(124,58,237,.12)",
                "0 0 90px rgba(124,58,237,.35)",
                "0 0 30px rgba(124,58,237,.12)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="relative z-20 flex h-[130px] w-[130px] flex-col items-center justify-center rounded-full border border-[#a78bfa]/30 bg-[#7046e6]/10"
          >
            <span className="text-4xl font-semibold tracking-[-0.07em]">
              3.2
            </span>

            <span className="mt-1 font-mono text-[6px] text-white/30">
              CURRENT LEVEL
            </span>
          </motion.div>

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[3px] rounded-full"
          >
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#c4b5fd] shadow-[0_0_20px_#8b5cf6]" />
          </motion.div>
        </div>

        {orbitNodes.map((node, index) => (
          <motion.div
            key={node.label}
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
                delay: 0.5 + index * 0.08,
              },
              scale: {
                delay: 0.5 + index * 0.08,
              },
              y: {
                duration: 3 + index * 0.35,
                repeat: Infinity,
              },
            }}
            style={{
              left: node.x,
              top: node.y,
            }}
            className="absolute -translate-x-1/2 rounded-full border border-white/[0.09] bg-[#090909] px-4 py-2"
          >
            <span className="font-mono text-[7px] text-white/45">
              {node.label}
            </span>
          </motion.div>
        ))}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 315deg, rgba(139,92,246,.05) 320deg, rgba(196,181,253,.3) 360deg)",
            maskImage:
              "radial-gradient(circle, transparent 0%, transparent 59%, black 60%, black 100%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 0%, transparent 59%, black 60%, black 100%)",
          }}
        />
      </div>
    </div>
  );
}

/* =========================================================
   CURRENT VS TARGET
========================================================= */

function CurrentTargetPanel() {
  return (
    <div className="grid gap-4">
      <MaturityMetric
        title="Current Maturity"
        value="3.2"
        label="MANAGED"
        progress={64}
      />

      <MaturityMetric
        title="Target Maturity"
        value="4.4"
        label="ADVANCED"
        progress={88}
      />

      <div className="rounded-[20px] border border-white/[0.08] bg-[#060606] p-5">
        <div className="flex items-center justify-between">
          <TinyLabel>Transformation Gap</TinyLabel>
          <GitBranch
            size={13}
            className="text-[#a78bfa]"
          />
        </div>

        <div className="mt-6 flex items-end gap-3">
          <span className="text-4xl font-medium tracking-[-0.06em]">
            +1.2
          </span>

          <span className="mb-1 font-mono text-[7px] text-white/25">
            LEVELS
          </span>
        </div>

        <p className="mt-4 text-[9px] leading-5 text-white/30">
          Illustrative interface values used to demonstrate the maturity
          assessment experience.
        </p>
      </div>
    </div>
  );
}

function MaturityMetric({
  title,
  value,
  label,
  progress,
}: {
  title: string;
  value: string;
  label: string;
  progress: number;
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="rounded-[20px] border border-white/[0.08] bg-[#060606] p-5"
    >
      <TinyLabel>{title}</TinyLabel>

      <div className="mt-5 flex items-end justify-between">
        <span className="text-5xl font-medium tracking-[-0.07em]">
          {value}
        </span>

        <span className="font-mono text-[7px] text-[#a78bfa]">
          {label}
        </span>
      </div>

      <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: `${progress}%`,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
          }}
          className="h-full bg-gradient-to-r from-[#5b21b6] to-[#c4b5fd]"
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   DOMAIN PROGRESS
========================================================= */

function DomainProgress() {
  const items = [
    ["Governance", 76],
    ["Identity", 82],
    ["Cloud", 72],
    ["Data", 63],
    ["Detection", 58],
  ];

  return (
    <div className="rounded-[20px] border border-white/[0.08] bg-[#060606] p-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[15px] font-medium text-white/75">
            Domain Maturity
          </span>

          <span className="mt-1 block font-mono text-[7px] text-white/20">
            CAPABILITY DISTRIBUTION
          </span>
        </div>

        <TinyLabel>Current State</TinyLabel>
      </div>

      <div className="mt-6 space-y-5">
        {items.map(([name, value], index) => (
          <div key={name}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[9px] text-white/45">
                {name}
              </span>

              <span className="font-mono text-[7px] text-white/25">
                {value}%
              </span>
            </div>

            <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${value}%`,
                }}
                viewport={{ once: true }}
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
    </div>
  );
}

/* =========================================================
   CAPABILITY SIGNAL
========================================================= */

function CapabilitySignal() {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#060606] p-5">
      <div className="absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#7046e6]/10 blur-[80px]" />

      <div className="relative">
        <TinyLabel>Capability Intelligence</TinyLabel>

        <div className="mt-8 flex justify-center">
          <div className="relative flex h-[180px] w-[180px] items-center justify-center">
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
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[22px] rounded-full border border-white/[0.08]"
            />

            <motion.div
              animate={{
                scale: [1, 1.07, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="flex h-[95px] w-[95px] items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.06]"
            >
              <Gauge
                size={29}
                className="text-[#c4b5fd]"
              />
            </motion.div>
          </div>
        </div>

        <p className="mt-5 text-center text-[9px] leading-5 text-white/30">
          Convert observations across security domains into a structured view
          of current capability and improvement priorities.
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   MATURITY INTRO
========================================================= */

function MaturityIntro() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-32 md:px-10">
      <motion.div
        animate={{
          x: ["-5%", "5%", "-5%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-0 h-[750px] w-full bg-[radial-gradient(circle_at_50%_35%,rgba(91,33,182,.34),transparent_58%)]"
      />

      <Container className="relative">
        <Reveal className="text-center">
          <SectionLabel number="01">
            Security Maturity
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[1000px] text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
            Security maturity is the ability to perform consistently.
          </h2>

          <p className="mx-auto mt-7 max-w-[950px] text-[13px] leading-7 text-white/[0.52]">
            Security maturity is not simply about owning more technology. It
            reflects how effectively governance, people, processes,
            architecture and security operations work together to manage
            cyber risk in a repeatable and sustainable way.
          </p>
        </Reveal>

        <div className="mt-16">
          <MaturitySpectrum />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   MATURITY SPECTRUM
========================================================= */

function MaturitySpectrum() {
  return (
    <div className="relative mx-auto max-w-[1200px]">
      <div className="absolute left-[5%] right-[5%] top-[47px] hidden h-px bg-gradient-to-r from-white/[0.06] via-[#8b5cf6]/60 to-white/[0.06] lg:block" />

      <motion.div
        animate={{
          left: ["5%", "94%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[43px] z-30 hidden h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_20px_#8b5cf6] lg:block"
      />

      <div className="grid gap-3 lg:grid-cols-5">
        {maturityStages.map((stage, index) => (
          <motion.article
            key={stage.level}
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
            whileHover={{
              y: -7,
              borderColor: "rgba(167,139,250,.28)",
            }}
            className="relative z-20 min-h-[320px] rounded-[20px] border border-white/[0.08] bg-[#070707] p-5"
          >
            <motion.div
              animate={
                index === 2
                  ? {
                      boxShadow: [
                        "0 0 0 rgba(124,58,237,0)",
                        "0 0 35px rgba(124,58,237,.35)",
                        "0 0 0 rgba(124,58,237,0)",
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                index === 2
                  ? "border-[#a78bfa]/50 bg-[#7046e6]/15"
                  : "border-white/[0.1] bg-black"
              }`}
            >
              <span className="font-mono text-[8px] text-[#c4b5fd]">
                {stage.number}
              </span>
            </motion.div>

            <span className="mt-10 block font-mono text-[7px] text-[#a78bfa]">
              {stage.level}
            </span>

            <h3 className="mt-3 text-xl font-medium">
              {stage.title}
            </h3>

            <p className="mt-5 text-[11px] leading-7 text-white/[0.43]">
              {stage.text}
            </p>

            {index === 2 && (
              <div className="mt-5 flex items-center gap-2">
                <LiveDot />

                <span className="font-mono text-[6px] text-white/30">
                  ILLUSTRATIVE CURRENT STATE
                </span>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MATURITY DOMAINS
========================================================= */

function MaturityDomains() {
  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <Reveal>
          <SectionLabel number="02">
            Maturity Domains
          </SectionLabel>

          <div className="mt-8 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <h2 className="max-w-[720px] text-5xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-6xl">
              Measure security

              <span className="block text-white/25">
                across the organization.
              </span>
            </h2>

            <p className="max-w-[650px] text-[13px] leading-7 text-white/[0.48]">
              Mature cybersecurity depends on multiple capabilities working
              together. Assessment provides a structured view across major
              domains rather than reducing organizational security to a single
              score.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {maturityDomains.map((domain, index) => {
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

                    <div className="text-right">
                      <span className="block text-3xl font-medium tracking-[-0.06em]">
                        {domain.score}
                      </span>

                      <span className="font-mono text-[6px] text-white/20">
                        /100 DEMO
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-10 text-xl font-medium tracking-[-0.03em]">
                    {domain.title}
                  </h3>

                  <p className="mt-4 min-h-[84px] text-[11px] leading-7 text-white/[0.45]">
                    {domain.text}
                  </p>

                  <div className="mt-7">
                    <div className="flex justify-between font-mono text-[6px] text-white/25">
                      <span>CURRENT {domain.score}</span>
                      <span>TARGET {domain.target}</span>
                    </div>

                    <div className="relative mt-3 h-1 rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${domain.target}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                        }}
                        className="absolute h-full bg-white/[0.08]"
                      />

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${domain.score}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: 0.15,
                        }}
                        className="absolute h-full bg-[#8b5cf6]"
                      />
                    </div>
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
   CAPABILITY HEATMAP
========================================================= */

function CapabilityHeatmap() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
          <Reveal>
            <SectionLabel number="03">
              Capability Heatmap
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              See the gaps.

              <span className="block text-[#a78bfa]">
                See the path.
              </span>
            </h2>

            <p className="mt-7 max-w-[520px] text-[12px] leading-7 text-white/[0.47]">
              Capability mapping helps teams see where security practices are
              established, where consistency needs improvement and where
              future investment may provide meaningful value.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Current-state capability",
                "Target-state maturity",
                "Process consistency",
                "Technology enablement",
                "Operational integration",
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

          <HeatmapModel />
        </div>
      </Container>
    </section>
  );
}

function HeatmapModel() {
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
      <div className="absolute left-1/2 top-0 h-20 w-[70%] -translate-x-1/2 bg-[#7046e6]/15 blur-[60px]" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <TinyLabel>Capability Matrix</TinyLabel>

            <h3 className="mt-2 text-xl font-medium">
              Security Maturity Heatmap
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <LiveDot />
            <TinyLabel>Current</TinyLabel>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-[110px_repeat(5,1fr)] gap-2">
          <div />

          {["L1", "L2", "L3", "L4", "L5"].map((level) => (
            <div
              key={level}
              className="py-2 text-center font-mono text-[7px] text-white/25"
            >
              {level}
            </div>
          ))}

          {capabilityRows.map((row, rowIndex) => (
            <div
              key={row.name}
              className="contents"
            >
              <div className="flex items-center text-[9px] text-white/40">
                {row.name}
              </div>

              {row.values.map((active, cellIndex) => (
                <motion.div
                  key={cellIndex}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay:
                      rowIndex * 0.05 +
                      cellIndex * 0.025,
                  }}
                  animate={
                    active && cellIndex === row.values.lastIndexOf(true)
                      ? {
                          opacity: [0.45, 1, 0.45],
                        }
                      : {}
                  }
                  className={`h-12 rounded-[8px] border ${
                    active
                      ? "border-[#8b5cf6]/25 bg-[#7046e6]/20"
                      : "border-white/[0.05] bg-white/[0.025]"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-white/[0.06] pt-5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-[#7046e6]/70" />
            <TinyLabel>Established</TinyLabel>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-white/[0.08]" />
            <TinyLabel>Future State</TinyLabel>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   OPERATING MODEL
========================================================= */

function SecurityOperatingModel() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="04">
            Security Operating Model
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[900px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Mature security works as a system.
          </h2>

          <p className="mx-auto mt-6 max-w-[850px] text-[13px] leading-7 text-white/[0.47]">
            Security capability depends on more than individual controls.
            Strategy, governance, processes, technology, intelligence and
            automation need to work together as an operating system for cyber
            risk management.
          </p>
        </Reveal>

        <div className="mt-16">
          <OperatingSystemModel />
        </div>
      </Container>
    </section>
  );
}

function OperatingSystemModel() {
  return (
    <div className="relative mx-auto max-w-[1150px]">
      <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#8b5cf6]/40 to-transparent lg:block" />

      <motion.div
        animate={{
          top: ["0%", "95%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 z-30 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-[#c4b5fd] shadow-[0_0_20px_#8b5cf6] lg:block"
      />

      <div className="space-y-3">
        {operatingLayers.map((layer, index) => {
          const Icon = layer.Icon;

          return (
            <motion.div
              key={layer.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -35 : 35,
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
                scale: 1.01,
              }}
              className="relative grid gap-5 rounded-[18px] border border-white/[0.08] bg-[#070707] p-5 md:grid-cols-[80px_1fr_1.4fr] md:items-center"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04]">
                <Icon
                  size={16}
                  className="text-[#c4b5fd]"
                />
              </div>

              <div>
                <span className="font-mono text-[7px] text-[#a78bfa]">
                  {layer.number}
                </span>

                <h3 className="mt-2 text-lg font-medium">
                  {layer.title}
                </h3>
              </div>

              <p className="text-[11px] leading-7 text-white/[0.43]">
                {layer.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   CURRENT VS TARGET SECTION
========================================================= */

function TransformationGap() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#28103f_0%,#0d0610_36%,#000_72%)] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <TransformationEngine />

          <Reveal>
            <SectionLabel number="05">
              Current → Target
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Define the gap.

              <span className="block text-white/25">
                Build the roadmap.
              </span>
            </h2>

            <p className="mt-7 max-w-[570px] text-[12px] leading-7 text-white/[0.48]">
              A maturity assessment becomes actionable when the current state
              is connected to a realistic target state. The difference between
              those two states helps structure security transformation
              priorities.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {[
                "Capability gaps",
                "Priority initiatives",
                "Dependencies",
                "Target outcomes",
                "Ownership",
                "Measurement",
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

function TransformationEngine() {
  const current = [42, 58, 67, 51, 73, 46];
  const target = [78, 85, 90, 82, 92, 80];

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
            <TinyLabel>Maturity Transformation</TinyLabel>

            <h3 className="mt-2 text-xl font-medium">
              Current vs Target
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <LiveDot />
            <TinyLabel>Demo Model</TinyLabel>
          </div>
        </div>

        <div className="mt-10 space-y-6">
          {current.map((value, index) => (
            <div key={index}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[7px] text-white/25">
                  DOMAIN {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-mono text-[7px] text-white/25">
                  {value} → {target[index]}
                </span>
              </div>

              <div className="relative mt-3 h-2 overflow-hidden rounded-full bg-white/[0.05]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${target[index]}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.08,
                  }}
                  className="absolute h-full bg-white/[0.08]"
                />

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${value}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2 + index * 0.08,
                  }}
                  className="absolute h-full bg-gradient-to-r from-[#5b21b6] to-[#8b5cf6]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3">
          {[
            ["Current", "3.2"],
            ["Target", "4.4"],
            ["Gap", "1.2"],
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
   ROADMAP
========================================================= */

function MaturityRoadmap() {
  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <Reveal>
          <SectionLabel number="06">
            Improvement Roadmap
          </SectionLabel>

          <h2 className="mt-8 max-w-[850px] text-5xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-6xl">
            Assess.

            <span className="text-white/25">
              {" "}Prioritize. Improve.
            </span>
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

          {roadmap.map((item, index) => {
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
   CONTINUOUS MATURITY
========================================================= */

function ContinuousMaturity() {
  const nodes = [
    {
      Icon: Eye,
      title: "Observe",
    },
    {
      Icon: Activity,
      title: "Measure",
    },
    {
      Icon: BrainCircuit,
      title: "Understand",
    },
    {
      Icon: Settings2,
      title: "Improve",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="07">
            Continuous Maturity
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[900px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Maturity is not a destination.
          </h2>

          <p className="mx-auto mt-6 max-w-[820px] text-[13px] leading-7 text-white/[0.47]">
            Technology environments, business priorities and cyber threats
            continue to change. Security maturity therefore benefits from
            ongoing measurement, reassessment and improvement.
          </p>
        </Reveal>

        <div className="mt-16">
          <ContinuousLoop nodes={nodes} />
        </div>
      </Container>
    </section>
  );
}

function ContinuousLoop({
  nodes,
}: {
  nodes: {
    Icon: ElementType;
    title: string;
  }[];
}) {
  return (
    <div className="relative mx-auto flex min-h-[540px] max-w-[900px] items-center justify-center overflow-hidden rounded-[28px] border border-white/[0.08] bg-black">
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
            duration: 12,
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
          <RefreshCcw
            size={32}
            className="text-[#c4b5fd]"
          />

          <span className="mt-3 font-mono text-[7px] text-white/35">
            CONTINUOUS
          </span>
        </motion.div>

        {nodes.map(({ Icon, title }, index) => {
          const positions = [
            "left-1/2 top-0 -translate-x-1/2",
            "right-0 top-1/2 -translate-y-1/2",
            "bottom-0 left-1/2 -translate-x-1/2",
            "left-0 top-1/2 -translate-y-1/2",
          ];

          return (
            <motion.div
              key={title}
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
                {title}
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
  );
}

/* =========================================================
   PRINCIPLES
========================================================= */

function MaturityPrinciples() {
  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <SectionLabel number="08">
              Assessment Principles
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Measure what

              <span className="block text-white/25">
                actually matters.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[12px] leading-7 text-white/[0.47]">
              Maturity should describe the organization's ability to manage
              security consistently — not simply count technologies,
              documents or individual controls.
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

function MaturityOutcomes() {
  const outcomes = [
    {
      title: "Current-State Visibility",
      text: "Create a structured view of cybersecurity capabilities across important organizational domains.",
    },
    {
      title: "Target-State Direction",
      text: "Define realistic future maturity objectives aligned with organizational priorities and cyber risk.",
    },
    {
      title: "Improvement Priorities",
      text: "Identify capability gaps and organize initiatives into a more practical security transformation roadmap.",
    },
    {
      title: "Measurable Progress",
      text: "Establish a foundation for tracking how security capabilities evolve through future improvement cycles.",
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="09">
            Assessment Outcomes
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[900px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Turn maturity into direction.
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
   CTA
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
              <Gauge
                size={23}
                className="text-[#c4b5fd]"
              />
            </motion.div>

            <h2 className="mx-auto mt-8 max-w-[850px] text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Understand today&apos;s security maturity. Build tomorrow&apos;s
              capability.
            </h2>

            <p className="mx-auto mt-5 max-w-[720px] text-[12px] leading-7 text-white/[0.48]">
              Establish a structured current-state view, identify capability
              gaps and define a practical cybersecurity improvement roadmap.
            </p>

            <motion.a
              href="#maturity-observatory"
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

export default function SecurityMaturityAssessmentClient() {
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

      <MaturityIntro />

      <MaturityDomains />

      <CapabilityHeatmap />

      <SecurityOperatingModel />

      <TransformationGap />

      <MaturityRoadmap />

      <ContinuousMaturity />

      <MaturityPrinciples />

      <MaturityOutcomes />

      <FinalCTA />
    </div>
  );
}