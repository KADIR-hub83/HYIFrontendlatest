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
   TYPES
========================================================= */

type Capability = {
  number: string;
  title: string;
  description: string;
  Icon: ElementType;
};

type ResilienceDomain = {
  code: string;
  title: string;
  description: string;
  value: number;
  Icon: ElementType;
};

type JourneyItem = {
  number: string;
  title: string;
  description: string;
  Icon: ElementType;
};

/* =========================================================
   DATA
========================================================= */

const capabilities: Capability[] = [
  {
    number: "01",
    title: "Critical Service Mapping",
    description:
      "Identify business-critical services, supporting technologies, information flows and operational dependencies so resilience priorities are connected to real business impact.",
    Icon: Network,
  },
  {
    number: "02",
    title: "Resilience Posture Review",
    description:
      "Evaluate how security, continuity, recovery and operational capabilities work together to help the organization withstand and recover from disruptive cyber events.",
    Icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Recovery Readiness",
    description:
      "Review recovery processes, technology dependencies, backup considerations, restoration priorities and operational responsibilities that influence effective cyber recovery.",
    Icon: RefreshCcw,
  },
  {
    number: "04",
    title: "Scenario Analysis",
    description:
      "Use realistic disruption scenarios to examine how critical services could be affected and where response, communication, technology or recovery dependencies require improvement.",
    Icon: GitBranch,
  },
  {
    number: "05",
    title: "Dependency Intelligence",
    description:
      "Understand dependencies across identity, applications, infrastructure, cloud platforms, data services and external providers that support important business operations.",
    Icon: Layers3,
  },
  {
    number: "06",
    title: "Resilience Roadmap",
    description:
      "Translate assessment findings into prioritized initiatives that strengthen prevention, response, continuity and recovery capabilities over time.",
    Icon: Workflow,
  },
];

const resilienceDomains: ResilienceDomain[] = [
  {
    code: "RS-01",
    title: "Protect",
    description:
      "Security capabilities intended to reduce the likelihood and potential impact of disruption.",
    value: 86,
    Icon: ShieldCheck,
  },
  {
    code: "RS-02",
    title: "Detect",
    description:
      "Visibility and monitoring capabilities supporting early recognition of abnormal conditions.",
    value: 78,
    Icon: Eye,
  },
  {
    code: "RS-03",
    title: "Respond",
    description:
      "Operational coordination, decision-making and containment capabilities during cyber events.",
    value: 82,
    Icon: Activity,
  },
  {
    code: "RS-04",
    title: "Recover",
    description:
      "Processes and technology capabilities supporting restoration of critical services.",
    value: 74,
    Icon: RefreshCcw,
  },
  {
    code: "RS-05",
    title: "Adapt",
    description:
      "Learning and improvement mechanisms that strengthen resilience after changes and incidents.",
    value: 69,
    Icon: GitBranch,
  },
];

const resilienceSignals = [
  42, 47, 44, 55, 51, 63, 59, 70, 64, 76, 72, 81, 78, 88, 84, 92,
];

const serviceDependencies = [
  {
    title: "Identity Services",
    code: "IAM",
    value: 92,
    Icon: ShieldCheck,
  },
  {
    title: "Cloud Platform",
    code: "CLD",
    value: 87,
    Icon: Cloud,
  },
  {
    title: "Application Layer",
    code: "APP",
    value: 83,
    Icon: Server,
  },
  {
    title: "Data Services",
    code: "DAT",
    value: 90,
    Icon: Database,
  },
  {
    title: "Network Services",
    code: "NET",
    value: 79,
    Icon: Network,
  },
  {
    title: "Recovery Systems",
    code: "REC",
    value: 85,
    Icon: RefreshCcw,
  },
];

const journey: JourneyItem[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand critical services, technology environments and business priorities.",
    Icon: Eye,
  },
  {
    number: "02",
    title: "Map",
    description:
      "Connect critical services with applications, infrastructure, data and dependencies.",
    Icon: Network,
  },
  {
    number: "03",
    title: "Assess",
    description:
      "Evaluate resilience capabilities across protection, response and recovery.",
    Icon: Gauge,
  },
  {
    number: "04",
    title: "Simulate",
    description:
      "Explore realistic cyber disruption scenarios and operational consequences.",
    Icon: GitBranch,
  },
  {
    number: "05",
    title: "Prioritize",
    description:
      "Identify resilience gaps requiring near-term and strategic improvement.",
    Icon: Layers3,
  },
  {
    number: "06",
    title: "Strengthen",
    description:
      "Build a practical roadmap for improving organizational cyber resilience.",
    Icon: ShieldCheck,
  },
];

const principles = [
  "Start with the business services that matter most.",
  "Understand technology and third-party dependencies before disruption occurs.",
  "Treat prevention, response, continuity and recovery as connected capabilities.",
  "Define clear ownership for critical resilience decisions and actions.",
  "Validate assumptions through realistic disruption scenarios.",
  "Design recovery priorities around business impact and service dependencies.",
  "Use assessment findings to create actionable improvement initiatives.",
  "Continuously adapt resilience capabilities as technology and risk evolve.",
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
      className={`font-mono text-[8px] uppercase tracking-[0.17em] ${
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

function LiveDot() {
  return (
    <motion.span
      animate={{
        scale: [0.85, 1.35, 0.85],
        opacity: [0.35, 1, 0.35],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
      }}
      className="h-1.5 w-1.5 rounded-full bg-[#a78bfa] shadow-[0_0_16px_rgba(167,139,250,.9)]"
    />
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  const { scrollY } = useScroll();

  const titleY = useTransform(scrollY, [0, 800], [0, 80]);
  const titleOpacity = useTransform(scrollY, [0, 650], [1, 0.25]);
  const modelY = useTransform(scrollY, [0, 900], [0, 100]);

  return (
    <section className="relative overflow-hidden bg-black px-5 pb-24 pt-16 md:px-10 md:pt-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        }}
      />

      <motion.div
        animate={{
          opacity: [0.06, 0.16, 0.06],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[430px] h-[620px] w-[1050px] -translate-x-1/2 rounded-full bg-[#6d28d9] blur-[240px]"
      />

      <Container className="relative">
        <motion.div
          style={{
            y: titleY,
            opacity: titleOpacity,
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
            className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/[0.13] bg-white/[0.025] px-5 py-2.5"
          >
            <LiveDot />

            <span className="text-[11px] text-white/[0.55]">
              Cyber Resilience Assessment
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
            className="mx-auto mt-8 max-w-[1200px] text-[clamp(3.2rem,7vw,6.9rem)] font-semibold leading-[0.89] tracking-[-0.07em]"
          >
            Prepare For

            <span className="block text-white/[0.62]">
              What Comes Next.
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
              delay: 0.35,
            }}
            className="mx-auto mt-8 max-w-[860px] text-[17px] leading-8 text-white/[0.52]"
          >
            Understand how effectively your organization can withstand,
            respond to and recover from cyber disruption while maintaining
            the critical services your business depends on.
          </motion.p>

          <motion.a
            href="#resilience-intelligence"
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
              scale: 0.97,
            }}
            className="mx-auto mt-8 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[12px] font-medium shadow-[0_0_45px_rgba(124,58,237,.3)]"
          >
            Explore Resilience
            <ArrowRight size={13} />
          </motion.a>
        </motion.div>

        <motion.div
          style={{
            y: modelY,
          }}
          className="relative mt-20"
        >
          <ResilienceCommandCenter />
        </motion.div>
      </Container>
    </section>
  );
}

/* =========================================================
   MAIN RESILIENCE COMMAND CENTER
========================================================= */

function ResilienceCommandCenter() {
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
        delay: 0.3,
      }}
      className="relative overflow-hidden rounded-[30px] border border-white/[0.13] bg-[#030303] shadow-[0_55px_160px_rgba(0,0,0,.9)]"
    >
      <motion.div
        animate={{
          x: ["-130%", "250%"],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute top-0 z-30 h-px w-1/2 bg-gradient-to-r from-transparent via-[#a78bfa] to-transparent"
      />

      <div className="flex items-center justify-between border-b border-white/[0.09] px-5 py-4 md:px-7">
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
            HYI.AI / RESILIENCE INTELLIGENCE
          </span>
        </div>

        <div className="hidden items-center gap-4 text-white/25 sm:flex">
          <RefreshCcw size={12} />
          <Radio size={12} />
          <CircleDot size={12} />
        </div>
      </div>

      <div className="grid min-h-[730px] lg:grid-cols-[82px_1fr]">
        <CommandSidebar />

        <div className="p-5 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <TinyLabel>Enterprise Cyber Continuity</TinyLabel>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                Resilience Command Center
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2">
                <LiveDot />

                <span className="font-mono text-[7px] text-white/35">
                  ASSESSMENT ACTIVE
                </span>
              </div>

              <button className="rounded-full bg-[#7046e6] px-5 py-2.5 text-[9px]">
                View Roadmap
              </button>
            </div>
          </div>

          <div className="mt-7 grid gap-4 xl:grid-cols-[1.2fr_.7fr_.7fr]">
            <ResilienceSignalGraph />

            <DashboardMetric
              label="Critical Services"
              value="12"
              progress={84}
              footer="Illustrative assessment view"
            />

            <DashboardMetric
              label="Recovery Readiness"
              value="82%"
              progress={82}
              footer="Illustrative interface data"
            />
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[1.25fr_.85fr]">
            <ResilienceDomainTable />
            <RecoveryRadar />
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
  const icons = [
    ShieldCheck,
    Activity,
    Network,
    Database,
    RefreshCcw,
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
          <Activity size={16} className="text-[#7046e6]" />
        </motion.div>

        <div className="mt-16 space-y-8">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.2,
              }}
              className={
                index === 1 ? "text-[#c4b5fd]" : "text-white/25"
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
   SIGNAL GRAPH
========================================================= */

function ResilienceSignalGraph() {
  return (
    <div className="rounded-[18px] border border-white/[0.08] bg-[#070707] p-5">
      <div className="flex items-start justify-between">
        <div>
          <span className="block text-[15px] font-medium text-white/75">
            Resilience Signal
          </span>

          <span className="mt-2 block text-[8px] text-white/25">
            Capability posture across disruption scenarios
          </span>
        </div>

        <TinyLabel purple>Live Analysis</TinyLabel>
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
          {resilienceSignals.map((height, index) => (
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
                  index === resilienceSignals.length - 3
                    ? "bg-[#7546ef]"
                    : "bg-white/[0.14]"
                }`}
              >
                {index === resilienceSignals.length - 3 && (
                  <motion.span
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                    }}
                    className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#c4b5fd] shadow-[0_0_16px_#8b5cf6]"
                  />
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between font-mono text-[6px] uppercase tracking-[0.12em] text-white/20">
        <span>Normal</span>
        <span>Disruption</span>
        <span>Recovery</span>
      </div>
    </div>
  );
}

/* =========================================================
   DASHBOARD METRIC
========================================================= */

function DashboardMetric({
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
              height: [5, 18, 9, 23, 5],
            }}
            transition={{
              duration: 2.1,
              repeat: Infinity,
              delay: index * 0.07,
            }}
            className="w-[3px] bg-[#8b5cf6]/55"
          />
        ))}
      </div>
    </motion.div>
  );
}

/* =========================================================
   RESILIENCE TABLE
========================================================= */

function ResilienceDomainTable() {
  return (
    <div className="rounded-[18px] border border-white/[0.08] bg-[#070707] p-5">
      <div className="flex items-center justify-between">
        <div>
          <span className="block text-[15px] font-medium text-white/75">
            Resilience Domains
          </span>

          <span className="mt-1 block text-[8px] text-white/20">
            Capability assessment
          </span>
        </div>

        <Activity size={15} className="text-[#a78bfa]" />
      </div>

      <div className="mt-6 grid grid-cols-[.5fr_1fr_1.3fr_.5fr] border-b border-white/[0.07] pb-3">
        <TinyLabel>ID</TinyLabel>
        <TinyLabel>Domain</TinyLabel>
        <TinyLabel>Capability</TinyLabel>
        <TinyLabel>Signal</TinyLabel>
      </div>

      {resilienceDomains.map((item, index) => (
        <motion.div
          key={item.code}
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
          className="grid grid-cols-[.5fr_1fr_1.3fr_.5fr] items-center border-b border-white/[0.05] py-4"
        >
          <span className="font-mono text-[7px] text-[#8b5cf6]">
            {item.code}
          </span>

          <span className="text-[9px] text-white/60">
            {item.title}
          </span>

          <div className="mr-5 h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: `${item.value}%`,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: index * 0.07,
              }}
              className="h-full bg-[#8b5cf6]"
            />
          </div>

          <span className="font-mono text-[8px] text-white/35">
            {item.value}%
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* =========================================================
   RECOVERY RADAR
========================================================= */

function RecoveryRadar() {
  const dots = [
    { left: "50%", top: "9%" },
    { left: "82%", top: "28%" },
    { left: "82%", top: "70%" },
    { left: "50%", top: "90%" },
    { left: "17%", top: "70%" },
    { left: "17%", top: "28%" },
  ];

  return (
    <div className="relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#070707] p-5">
      <TinyLabel>Recovery Radar</TinyLabel>

      <div className="relative mx-auto mt-5 h-[270px] w-[270px]">
        {[0, 1, 2, 3].map((ring) => (
          <div
            key={ring}
            style={{
              inset: `${ring * 30}px`,
            }}
            className="absolute rounded-full border border-white/[0.07]"
          />
        ))}

        <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.05]" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.05]" />

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
                "linear-gradient(35deg, rgba(139,92,246,.16), transparent 60%)",
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
            }}
          />
        </motion.div>

        {dots.map((dot, index) => (
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
              left: dot.left,
              top: dot.top,
            }}
            className="absolute z-20 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a78bfa] shadow-[0_0_15px_rgba(167,139,250,.8)]"
          />
        ))}

        <div className="absolute left-1/2 top-1/2 z-20 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-black">
          <RefreshCcw size={19} className="text-[#c4b5fd]" />

          <span className="mt-2 font-mono text-[5px] text-white/30">
            RECOVER
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   RESILIENCE INTELLIGENCE
========================================================= */

function ResilienceIntelligence() {
  return (
    <section
      id="resilience-intelligence"
      className="relative overflow-hidden bg-black px-5 py-28 md:px-10"
    >
      <div className="absolute left-[-300px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-[#6d28d9]/10 blur-[190px]" />

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
              Cyber Resilience
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Security is more

              <span className="block text-white/25">
                than prevention.
              </span>
            </h2>

            <p className="mt-7 max-w-[560px] text-[13px] leading-8 text-white/[0.55]">
              Organizations operate in complex digital environments where
              cyber disruption can affect applications, data, infrastructure,
              suppliers and business operations at the same time.
            </p>

            <p className="mt-5 max-w-[560px] text-[13px] leading-8 text-white/[0.45]">
              Cyber resilience focuses on the ability to prepare for
              disruption, continue critical operations, respond effectively
              and restore services in a controlled manner.
            </p>
          </motion.div>

          <ResilienceCoreModel />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   RESILIENCE CORE MODEL
========================================================= */

function ResilienceCoreModel() {
  const nodes = [
    {
      title: "Protect",
      Icon: ShieldCheck,
      position: "left-[6%] top-[12%]",
    },
    {
      title: "Detect",
      Icon: Eye,
      position: "right-[6%] top-[12%]",
    },
    {
      title: "Respond",
      Icon: Activity,
      position: "left-[6%] bottom-[12%]",
    },
    {
      title: "Recover",
      Icon: RefreshCcw,
      position: "right-[6%] bottom-[12%]",
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
      className="relative min-h-[570px] overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#060606]"
    >
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d28d9]/10 blur-[110px]" />

      <svg className="absolute inset-0 h-full w-full">
        {[
          ["20%", "22%", "50%", "50%"],
          ["80%", "22%", "50%", "50%"],
          ["20%", "78%", "50%", "50%"],
          ["80%", "78%", "50%", "50%"],
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
              delay: index * 0.12,
            }}
          />
        ))}
      </svg>

      {nodes.map(({ title, Icon, position }, index) => (
        <motion.div
          key={title}
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 3 + index * 0.3,
            repeat: Infinity,
          }}
          className={`absolute ${position} z-20 w-[135px] rounded-[16px] border border-white/[0.09] bg-black/90 p-4`}
        >
          <Icon size={16} className="text-[#c4b5fd]" />

          <span className="mt-3 block text-[10px] text-white/55">
            {title}
          </span>

          <span className="mt-1 block font-mono text-[6px] text-white/20">
            RESILIENCE DOMAIN
          </span>
        </motion.div>
      ))}

      <div className="absolute left-1/2 top-1/2 z-20 flex h-[205px] w-[205px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
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
            duration: 11,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[25px] rounded-full border border-white/[0.10]"
        />

        <motion.div
          animate={{
            scale: [1, 1.07, 1],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
          }}
          className="flex h-[112px] w-[112px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#7046e6]/10 shadow-[0_0_75px_rgba(124,58,237,.25)]"
        >
          <Activity size={28} className="text-[#c4b5fd]" />

          <span className="mt-2 font-mono text-[6px] text-white/40">
            RESILIENCE
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
              Assessment Capabilities
            </SectionLabel>
          </div>

          <h2 className="mx-auto mt-8 max-w-[950px] text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Understand Your Ability To Withstand Disruption
          </h2>

          <p className="mx-auto mt-5 max-w-[870px] text-[13px] leading-7 text-white/[0.52]">
            Examine the relationships between business-critical services,
            cybersecurity controls, operational dependencies, response
            capabilities and recovery readiness.
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
                className="group relative min-h-[335px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-black p-7"
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
                    Resilience Capability

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
   CRITICAL SERVICE MAP
========================================================= */

function CriticalServiceMap() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10">
      <div className="absolute right-[-300px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-[#5b21b6]/10 blur-[190px]" />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div>
            <SectionLabel number="03">
              Dependency Intelligence
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Know what

              <span className="block text-white/25">
                keeps you running.
              </span>
            </h2>

            <p className="mt-7 max-w-[530px] text-[13px] leading-8 text-white/[0.50]">
              Critical services often depend on interconnected identity
              platforms, applications, infrastructure, data, cloud services,
              networks and external providers.
            </p>

            <p className="mt-5 max-w-[530px] text-[13px] leading-8 text-white/[0.42]">
              Mapping those relationships helps teams understand where
              disruption could propagate and which dependencies should receive
              greater resilience attention.
            </p>
          </div>

          <DependencyModel />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   DEPENDENCY MODEL
========================================================= */

function DependencyModel() {
  const positions = [
    "left-[8%] top-[10%]",
    "right-[8%] top-[10%]",
    "left-[4%] top-[42%]",
    "right-[4%] top-[42%]",
    "left-[8%] bottom-[8%]",
    "right-[8%] bottom-[8%]",
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
      viewport={{
        once: true,
      }}
      className="relative min-h-[620px] overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#060606]"
    >
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <svg className="absolute inset-0 h-full w-full">
        {[
          ["20%", "18%", "50%", "50%"],
          ["80%", "18%", "50%", "50%"],
          ["16%", "50%", "50%", "50%"],
          ["84%", "50%", "50%", "50%"],
          ["20%", "82%", "50%", "50%"],
          ["80%", "82%", "50%", "50%"],
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
              duration: 1.3,
              delay: index * 0.1,
            }}
          />
        ))}
      </svg>

      {serviceDependencies.map((item, index) => {
        const Icon = item.Icon;

        return (
          <motion.div
            key={item.title}
            animate={{
              y: [-4, 4, -4],
            }}
            transition={{
              duration: 3 + index * 0.25,
              repeat: Infinity,
            }}
            className={`absolute ${positions[index]} z-20 w-[145px] rounded-[15px] border border-white/[0.09] bg-black/95 p-4`}
          >
            <div className="flex items-center justify-between">
              <Icon size={14} className="text-[#c4b5fd]" />

              <span className="font-mono text-[6px] text-[#8b5cf6]">
                {item.code}
              </span>
            </div>

            <span className="mt-3 block text-[9px] text-white/55">
              {item.title}
            </span>

            <div className="mt-3 h-[2px] overflow-hidden bg-white/[0.07]">
              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: `${item.value}%`,
                }}
                viewport={{
                  once: true,
                }}
                className="h-full bg-[#8b5cf6]"
              />
            </div>
          </motion.div>
        );
      })}

      <div className="absolute left-1/2 top-1/2 z-20 flex h-[185px] w-[185px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
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
          className="absolute inset-[22px] rounded-full border border-white/[0.08]"
        />

        <div className="flex h-[110px] w-[110px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-black shadow-[0_0_80px_rgba(124,58,237,.25)]">
          <Workflow size={27} className="text-[#c4b5fd]" />

          <span className="mt-2 text-center font-mono text-[6px] leading-3 text-white/35">
            CRITICAL
            <br />
            SERVICE
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   DISRUPTION SCENARIO
========================================================= */

function DisruptionScenario() {
  const stages = [
    {
      label: "Normal Operations",
      value: 100,
    },
    {
      label: "Cyber Disruption",
      value: 39,
    },
    {
      label: "Containment",
      value: 52,
    },
    {
      label: "Recovery",
      value: 76,
    },
    {
      label: "Restoration",
      value: 96,
    },
  ];

  return (
    <section className="border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel number="04">
              Scenario Intelligence
            </SectionLabel>
          </div>

          <h2 className="mx-auto mt-8 max-w-[920px] text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Understand The Journey From Disruption To Recovery
          </h2>

          <p className="mx-auto mt-5 max-w-[820px] text-[13px] leading-7 text-white/[0.50]">
            Scenario analysis helps reveal how operational dependencies,
            decision-making, response activities and recovery capabilities
            interact during a disruptive cyber event.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[28px] border border-white/[0.09] bg-black p-6 md:p-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <TinyLabel>Scenario Simulation</TinyLabel>

              <h3 className="mt-3 text-xl font-medium">
                Critical Service Recovery
              </h3>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2">
              <LiveDot />

              <span className="font-mono text-[7px] text-white/30">
                SIMULATION ACTIVE
              </span>
            </div>
          </div>

          <div className="relative mt-14 h-[360px] border-b border-white/[0.08]">
            {[25, 50, 75].map((top) => (
              <div
                key={top}
                style={{
                  top: `${top}%`,
                }}
                className="absolute left-0 right-0 border-t border-dashed border-white/[0.05]"
              />
            ))}

            <div className="absolute inset-0 flex items-end justify-around gap-3">
              {stages.map((stage, index) => (
                <div
                  key={stage.label}
                  className="flex h-full flex-1 flex-col justify-end"
                >
                  <motion.div
                    initial={{
                      height: 0,
                    }}
                    whileInView={{
                      height: `${stage.value}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 1,
                      delay: index * 0.15,
                    }}
                    className={`relative mx-auto w-[65%] max-w-[90px] rounded-t-[10px] ${
                      index === 1
                        ? "bg-[#8b5cf6]/40"
                        : index === 4
                          ? "bg-[#8b5cf6]"
                          : "bg-white/[0.12]"
                    }`}
                  >
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 font-mono text-[8px] text-white/35">
                      {stage.value}%
                    </span>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-5 gap-3">
            {stages.map((stage) => (
              <span
                key={stage.label}
                className="text-center font-mono text-[6px] uppercase leading-4 tracking-[0.08em] text-white/25"
              >
                {stage.label}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   RESILIENCE JOURNEY
========================================================= */

function ResilienceJourney() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <Container className="relative">
        <SectionLabel number="05">
          Assessment Journey
        </SectionLabel>

        <h2 className="mt-9 max-w-[930px] text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
          From uncertainty

          <span className="block text-white/25">
            to resilience priorities.
          </span>
        </h2>

        <p className="mt-7 max-w-[760px] text-[13px] leading-8 text-white/[0.48]">
          A structured assessment connects business context with technology
          dependencies, resilience capabilities and practical improvement
          priorities.
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

          {journey.map(
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
                className="relative z-20 min-h-[260px] rounded-[18px] border border-white/[0.08] bg-[#070707] p-5"
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
   RECOVERY INTELLIGENCE
========================================================= */

function RecoveryIntelligence() {
  const items = [
    {
      title: "Business Priority",
      value: "Critical",
      Icon: Activity,
    },
    {
      title: "Service Dependency",
      value: "Mapped",
      Icon: Network,
    },
    {
      title: "Recovery Path",
      value: "Defined",
      Icon: GitBranch,
    },
    {
      title: "Ownership",
      value: "Assigned",
      Icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d28d9]/10 blur-[220px]" />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <SectionLabel number="06">
              Recovery Intelligence
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Recovery needs

              <span className="block text-white/25">
                context.
              </span>
            </h2>

            <p className="mt-7 max-w-[530px] text-[13px] leading-8 text-white/[0.50]">
              Technology recovery decisions are stronger when teams understand
              which business services depend on each system and what must be
              restored first.
            </p>
          </div>

          <div className="overflow-hidden rounded-[27px] border border-white/[0.09] bg-black">
            <div className="flex items-center justify-between border-b border-white/[0.07] p-6">
              <div>
                <TinyLabel>Recovery Control</TinyLabel>

                <h3 className="mt-3 text-xl font-medium">
                  Critical Service Restoration
                </h3>
              </div>

              <RefreshCcw size={17} className="text-[#a78bfa]" />
            </div>

            <div className="grid gap-px bg-white/[0.06] sm:grid-cols-2">
              {items.map((item, index) => {
                const Icon = item.Icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    className="bg-[#050505] p-6"
                  >
                    <Icon size={15} className="text-[#c4b5fd]" />

                    <TinyLabel>{item.title}</TinyLabel>

                    <span className="mt-7 block text-2xl font-medium">
                      {item.value}
                    </span>

                    <div className="mt-6 h-[2px] overflow-hidden bg-white/[0.07]">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: `${72 + index * 7}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1,
                        }}
                        className="h-full bg-[#8b5cf6]"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="p-6">
              <div className="rounded-[15px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04] p-5">
                <div className="flex items-start gap-3">
                  <Zap
                    size={14}
                    className="mt-0.5 shrink-0 text-[#c4b5fd]"
                  />

                  <p className="text-[10px] leading-6 text-white/40">
                    Recovery planning becomes more actionable when service
                    importance, technical dependencies, restoration sequencing
                    and accountable ownership are understood together.
                  </p>
                </div>
              </div>
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

function Principles() {
  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel number="07">
              Resilience Principles
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Build for

              <span className="block text-white/25">
                disruption.
              </span>
            </h2>

            <p className="mt-7 max-w-[510px] text-[13px] leading-8 text-white/[0.48]">
              Resilience is strengthened when critical services, dependencies,
              response decisions and recovery priorities are understood before
              a major disruption occurs.
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
                className="flex items-start gap-4 rounded-[15px] border border-white/[0.07] bg-[#060606] p-5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/25">
                  <CheckCircle2
                    size={12}
                    className="text-[#c4b5fd]"
                  />
                </div>

                <div>
                  <span className="font-mono text-[6px] text-[#8b5cf6]">
                    RESILIENCE / {String(index + 1).padStart(2, "0")}
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
   CONTINUITY LOOP
========================================================= */

function ContinuityLoop() {
  const items = [
    "Prepare",
    "Protect",
    "Detect",
    "Respond",
    "Recover",
    "Adapt",
  ];

  return (
    <section className="border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel number="08">
              Resilience Loop
            </SectionLabel>
          </div>

          <h2 className="mx-auto mt-8 max-w-[920px] text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Resilience Is A Continuous Capability
          </h2>

          <p className="mx-auto mt-5 max-w-[820px] text-[13px] leading-7 text-white/[0.50]">
            Effective resilience connects preparation, protection, detection,
            response, recovery and organizational learning into a continuous
            improvement cycle.
          </p>
        </div>

        <div className="relative mx-auto mt-16 flex min-h-[590px] max-w-[820px] items-center justify-center overflow-hidden rounded-[30px] border border-white/[0.08] bg-black">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,.05) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {[440, 340, 245].map((size, index) => (
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
            const angle =
              (index / items.length) * Math.PI * 2 - Math.PI / 2;

            const radius = 200;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={item}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                className="absolute z-20"
              >
                <motion.div
                  animate={{
                    y: [-3, 3, -3],
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="flex h-[76px] w-[118px] items-center justify-center rounded-[14px] border border-white/[0.09] bg-black"
                >
                  <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-white/45">
                    {item}
                  </span>
                </motion.div>
              </div>
            );
          })}

          <div className="relative z-20 flex h-[150px] w-[150px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-black shadow-[0_0_90px_rgba(124,58,237,.24)]">
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

            <Activity
              size={31}
              className="relative text-[#c4b5fd]"
            />

            <span className="relative mt-3 font-mono text-[6px] text-white/35">
              RESILIENCE
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   OUTCOMES
========================================================= */

function Outcomes() {
  const outcomes = [
    {
      number: "01",
      title: "Critical Service Visibility",
      text: "A clearer view of business-critical services and the technology dependencies that support them.",
    },
    {
      number: "02",
      title: "Resilience Gap Awareness",
      text: "Structured understanding of capability weaknesses affecting preparation, response, continuity and recovery.",
    },
    {
      number: "03",
      title: "Recovery Prioritization",
      text: "Greater clarity around which services and supporting systems should receive recovery attention first.",
    },
    {
      number: "04",
      title: "Actionable Roadmap",
      text: "Prioritized initiatives designed to strengthen cyber resilience in a practical and manageable sequence.",
    },
  ];

  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <SectionLabel number="09">
          Assessment Outcomes
        </SectionLabel>

        <div className="mt-10 grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Turn resilience

              <span className="block text-white/25">
                into action.
              </span>
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {outcomes.map((item, index) => (
              <motion.article
                key={item.title}
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
                  delay: index * 0.07,
                }}
                className="min-h-[230px] rounded-[18px] border border-white/[0.08] bg-[#060606] p-6"
              >
                <span className="font-mono text-[7px] text-[#8b5cf6]">
                  {item.number}
                </span>

                <h3 className="mt-8 text-[17px] font-medium">
                  {item.title}
                </h3>

                <p className="mt-4 text-[11px] leading-7 text-white/[0.46]">
                  {item.text}
                </p>
              </motion.article>
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
            className="absolute bottom-[-180px] left-1/2 h-[340px] w-[950px] -translate-x-1/2 rounded-full bg-[#7046e6] blur-[125px]"
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
            className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.04]"
          />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.06]">
              <Activity size={24} className="text-[#c4b5fd]" />
            </div>

            <h2 className="mt-7 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              Strengthen Your Ability To Recover.
            </h2>

            <p className="mx-auto mt-5 max-w-[780px] text-[12px] leading-7 text-white/[0.50]">
              Understand critical services, cyber dependencies, response
              readiness and recovery priorities through a structured cyber
              resilience assessment.
            </p>

            <motion.a
              href="#resilience-intelligence"
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

        <p className="mx-auto mt-7 max-w-[940px] text-center font-mono text-[7px] uppercase leading-5 tracking-[0.12em] text-white/15">
          Percentages, service counts, recovery indicators and capability
          values displayed throughout this interface are illustrative design
          data only and do not represent actual HYI.AI client performance,
          certifications, guarantees or measured security outcomes.
        </p>
      </Container>
    </section>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function CyberResilienceAssessmentClient() {
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

      <ResilienceIntelligence />

      <Capabilities />

      <CriticalServiceMap />

      <DisruptionScenario />

      <ResilienceJourney />

      <RecoveryIntelligence />

      <Principles />

      <ContinuityLoop />

      <Outcomes />

      <FinalCTA />
    </div>
  );
}