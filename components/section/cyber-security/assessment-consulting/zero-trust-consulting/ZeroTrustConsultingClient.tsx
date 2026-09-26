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
   DATA
========================================================= */

const trustSignals = [
  {
    Icon: ShieldCheck,
    label: "Identity",
    code: "IDN",
    value: "VERIFIED",
    description:
      "Validate workforce, service and machine identities before granting access.",
  },
  {
    Icon: Cpu,
    label: "Device",
    code: "DEV",
    value: "HEALTHY",
    description:
      "Evaluate device posture, management state and security condition.",
  },
  {
    Icon: Network,
    label: "Network",
    code: "NET",
    value: "OBSERVED",
    description:
      "Understand connection context without treating network location as trust.",
  },
  {
    Icon: Activity,
    label: "Behavior",
    code: "BHV",
    value: "NORMAL",
    description:
      "Use behavioral and contextual signals to identify changes in access risk.",
  },
];

const pillars = [
  {
    Icon: ShieldCheck,
    number: "01",
    title: "Identity",
    label: "Identity-first security",
    description:
      "Establish strong identity verification, authentication, authorization and privileged access controls as the foundation of Zero Trust.",
  },
  {
    Icon: Cpu,
    number: "02",
    title: "Devices",
    label: "Device trust",
    description:
      "Evaluate device health and security posture before allowing access to sensitive enterprise resources.",
  },
  {
    Icon: Network,
    number: "03",
    title: "Networks",
    label: "Segmentation",
    description:
      "Reduce implicit trust and unnecessary lateral movement through segmentation and policy-driven connectivity.",
  },
  {
    Icon: Cloud,
    number: "04",
    title: "Applications",
    label: "Application access",
    description:
      "Apply contextual access policies to SaaS, cloud, internal and business-critical applications.",
  },
  {
    Icon: Database,
    number: "05",
    title: "Data",
    label: "Data protection",
    description:
      "Protect sensitive information according to identity, context, classification and business importance.",
  },
  {
    Icon: Eye,
    number: "06",
    title: "Visibility",
    label: "Continuous monitoring",
    description:
      "Observe access activity and trust signals continuously so decisions can adapt as risk changes.",
  },
];

const journey = [
  {
    number: "01",
    title: "Discover",
    Icon: Eye,
    text:
      "Understand users, devices, applications, data flows, trust relationships and critical access paths.",
  },
  {
    number: "02",
    title: "Assess",
    Icon: Activity,
    text:
      "Evaluate identity, device, network, workload and data security capabilities against Zero Trust principles.",
  },
  {
    number: "03",
    title: "Architect",
    Icon: Layers3,
    text:
      "Define target-state trust architecture, policy boundaries and access control patterns.",
  },
  {
    number: "04",
    title: "Prioritize",
    Icon: Gauge,
    text:
      "Sequence improvements according to risk, dependencies, business value and implementation readiness.",
  },
  {
    number: "05",
    title: "Transform",
    Icon: RefreshCcw,
    text:
      "Modernize identity, segmentation, access enforcement, telemetry and security integrations.",
  },
  {
    number: "06",
    title: "Operate",
    Icon: Workflow,
    text:
      "Continuously evaluate access signals, policies and control effectiveness as the environment changes.",
  },
];

const policySignals = [
  "Identity confidence",
  "Authentication strength",
  "Device health",
  "Device ownership",
  "User behavior",
  "Network context",
  "Resource sensitivity",
  "Application criticality",
  "Data classification",
  "Session risk",
  "Location context",
  "Threat intelligence",
];

const principles = [
  "Verify explicitly before granting access.",
  "Use least-privilege access as the default.",
  "Assume that network location alone does not establish trust.",
  "Evaluate identity, device and context together.",
  "Segment access around resources and business requirements.",
  "Continuously observe trust signals during access.",
  "Protect critical applications and data with stronger policy.",
  "Design Zero Trust as an operating model, not a single product.",
];

const roadmap = [
  {
    phase: "PHASE 01",
    title: "Establish",
    progress: "25%",
    text:
      "Strengthen identity foundations, authentication and visibility into users, devices and resources.",
  },
  {
    phase: "PHASE 02",
    title: "Control",
    progress: "45%",
    text:
      "Introduce contextual access policies, privileged access controls and device-aware authorization.",
  },
  {
    phase: "PHASE 03",
    title: "Segment",
    progress: "68%",
    text:
      "Reduce unnecessary connectivity and establish application and workload-oriented trust boundaries.",
  },
  {
    phase: "PHASE 04",
    title: "Automate",
    progress: "86%",
    text:
      "Connect telemetry and risk signals to adaptive access and security orchestration.",
  },
  {
    phase: "PHASE 05",
    title: "Optimize",
    progress: "100%",
    text:
      "Continuously measure policy effectiveness and improve the enterprise trust architecture.",
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
    <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/30">
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

      <span className="h-px w-10 bg-white/[0.15]" />

      <TinyLabel>{children}</TinyLabel>
    </div>
  );
}

function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <motion.span
        animate={{
          scale: [1, 2.6, 1],
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

  const y = useTransform(scrollY, [0, 750], [0, 100]);
  const opacity = useTransform(scrollY, [0, 650], [1, 0.15]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-5 md:px-10 ">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black 5%, transparent 92%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 5%, transparent 92%)",
        }}
      />

      <motion.div
        animate={{
          opacity: [0.06, 0.16, 0.06],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="pointer-events-none absolute left-1/2 top-[480px] h-[450px] w-[950px] -translate-x-1/2 rounded-full bg-[#6d28d9] blur-[210px]"
      />

      <Container className="relative">
        <motion.div
          style={{ y, opacity }}
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
              Zero Trust Consulting
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
            className="mx-auto mt-9 max-w-[1150px] text-[clamp(4rem,3.5vw,8.8rem)] font-semibold leading-[0.84] tracking-[-0.08em]"
          >
            Trust nothing.

            <span className="block text-white/50">
              Verify
            </span>

            <span className="block text-[#a78bfa]">
              continuously.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mx-auto mt-8 max-w-[830px] text-[13px] leading-7 text-white/[0.55] md:text-[18px]"
          >
            HYI.AI helps organizations design practical Zero Trust
            architectures where access decisions are driven by identity,
            device posture, context, resource sensitivity and continuously
            observed security signals — instead of implicit network trust.
          </motion.p>

          <motion.a
            href="#trust-engine"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mx-auto mt-9 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[11px] font-medium shadow-[0_0_45px_rgba(124,58,237,.3)]"
          >
            Explore Zero Trust

            <ArrowRight size={13} />
          </motion.a>
        </motion.div>

        <div className="mt-20">
          <ZeroTrustConsole />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   ZERO TRUST COMMAND CENTER
========================================================= */

function ZeroTrustConsole() {
  return (
    <motion.div
      id="trust-engine"
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
          x: ["-100%", "350%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 z-50 h-px w-[30%] bg-gradient-to-r from-transparent via-[#c4b5fd] to-transparent"
      />

      <ConsoleToolbar />

      <div className="grid min-h-[780px] lg:grid-cols-[88px_1fr]">
        <ConsoleSidebar />

        <div className="p-5 md:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <TinyLabel>
                Adaptive Access Architecture
              </TinyLabel>

              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                Zero Trust Access Command
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2">
                <LiveDot />
                <TinyLabel>Policy Engine Live</TinyLabel>
              </div>

              <div className="rounded-full bg-[#7046e6] px-5 py-2.5 text-[9px]">
                Access Verified
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-4 xl:grid-cols-[1.45fr_.55fr]">
            <TrustDecisionEngine />

            <TrustScorePanel />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-4">
            {trustSignals.map((item, index) => (
              <SignalCard
                key={item.label}
                item={item}
                index={index}
              />
            ))}
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
        <span className="ml-3 text-white/35">‹</span>
        <span className="text-white/20">›</span>
      </div>

      <div className="flex items-center gap-2 text-white/35">
        <ShieldCheck size={12} />

        <span className="font-mono text-[8px]">
          HYI.AI / ZERO TRUST
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
    ShieldCheck,
    Eye,
    Cpu,
    Network,
    Cloud,
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
   TRUST DECISION ENGINE
========================================================= */

function TrustDecisionEngine() {
  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#060606]">
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "27px 27px",
        }}
      />

      <motion.div
        animate={{
          top: ["4%", "96%", "4%"],
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
            Continuous Verification Engine
          </span>

          <span className="mt-1 block font-mono text-[6px] text-white/20">
            IDENTITY + DEVICE + CONTEXT + POLICY
          </span>
        </div>

        <div className="flex items-center gap-2">
          <LiveDot />
          <TinyLabel>Evaluating</TinyLabel>
        </div>
      </div>

      <div className="relative h-[410px]">
        <svg
          viewBox="0 0 900 410"
          fill="none"
          className="absolute inset-0 h-full w-full"
        >
          {[
            [110, 80, 450, 205],
            [110, 205, 450, 205],
            [110, 330, 450, 205],
            [450, 205, 790, 95],
            [450, 205, 790, 205],
            [450, 205, 790, 315],
          ].map((line, index) => (
            <motion.line
              key={index}
              x1={line[0]}
              y1={line[1]}
              x2={line[2]}
              y2={line[3]}
              stroke="rgba(139,92,246,.38)"
              strokeWidth="1"
              strokeDasharray="6 8"
              animate={{
                strokeDashoffset: [0, -30],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </svg>

        <AccessNode
          position="left-[5%] top-[7%]"
          Icon={ShieldCheck}
          title="Identity"
          code="VERIFIED"
        />

        <AccessNode
          position="left-[5%] top-[40%]"
          Icon={Cpu}
          title="Device"
          code="HEALTHY"
        />

        <AccessNode
          position="left-[5%] bottom-[7%]"
          Icon={Activity}
          title="Context"
          code="NORMAL"
        />

        <AccessNode
          position="right-[5%] top-[10%]"
          Icon={Cloud}
          title="Application"
          code="RESOURCE"
        />

        <AccessNode
          position="right-[5%] top-[42%]"
          Icon={Server}
          title="Workload"
          code="RESOURCE"
        />

        <AccessNode
          position="right-[5%] bottom-[7%]"
          Icon={Database}
          title="Data"
          code="PROTECTED"
        />

        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-[175px] w-[175px] items-center justify-center">
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
              className="absolute inset-[18px] rounded-full border border-white/[0.1]"
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
              className="flex h-[105px] w-[105px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/35 bg-[#7046e6]/10"
            >
              <ShieldCheck
                size={26}
                className="text-[#c4b5fd]"
              />

              <span className="mt-2 font-mono text-[5px] text-white/40">
                POLICY ENGINE
              </span>

              <span className="mt-1 font-mono text-[5px] text-[#a78bfa]">
                ALLOW
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccessNode({
  position,
  Icon,
  title,
  code,
}: {
  position: string;
  Icon: ElementType;
  title: string;
  code: string;
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
      className={`absolute z-20 ${position}`}
    >
      <div className="min-w-[105px] rounded-[13px] border border-white/[0.1] bg-[#080808]/95 p-3 backdrop-blur">
        <div className="flex items-center gap-2">
          <Icon
            size={12}
            className="text-[#c4b5fd]"
          />

          <span className="text-[8px] text-white/55">
            {title}
          </span>
        </div>

        <span className="mt-2 block font-mono text-[5px] text-[#8b5cf6]">
          {code}
        </span>
      </div>
    </motion.div>
  );
}

/* =========================================================
   TRUST SCORE
========================================================= */

function TrustScorePanel() {
  return (
    <div className="rounded-[20px] border border-white/[0.08] bg-[#060606] p-6">
      <div className="flex items-center justify-between">
        <div>
          <TinyLabel>Trust Decision</TinyLabel>

          <span className="mt-2 block text-[14px] font-medium">
            Access Confidence
          </span>
        </div>

        <LiveDot />
      </div>

      <div className="relative mx-auto mt-10 flex h-[210px] w-[210px] items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border border-dashed border-[#8b5cf6]/25"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[16px] rounded-full border border-white/[0.08]"
        />

        <div className="absolute inset-[32px] rounded-full border-[6px] border-white/[0.04]" />

        <motion.div
          animate={{
            boxShadow: [
              "0 0 15px rgba(124,58,237,.1)",
              "0 0 65px rgba(124,58,237,.35)",
              "0 0 15px rgba(124,58,237,.1)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="relative flex h-[125px] w-[125px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#7046e6]/[0.05]"
        >
          <span className="text-4xl font-semibold tracking-[-0.07em]">
            92
          </span>

          <span className="mt-1 font-mono text-[5px] text-white/25">
            DEMO TRUST SCORE
          </span>
        </motion.div>
      </div>

      <div className="mt-7 space-y-3">
        {[
          ["Identity", "PASS"],
          ["Device", "PASS"],
          ["Context", "PASS"],
          ["Policy", "ALLOW"],
        ].map(([label, status]) => (
          <div
            key={label}
            className="flex items-center justify-between border-b border-white/[0.05] pb-3"
          >
            <span className="text-[9px] text-white/35">
              {label}
            </span>

            <span className="font-mono text-[6px] text-[#a78bfa]">
              {status}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-[12px] border border-[#8b5cf6]/20 bg-[#7046e6]/[0.05] p-4">
        <div className="flex items-center gap-3">
          <CheckCircle2
            size={13}
            className="text-[#c4b5fd]"
          />

          <div>
            <span className="block text-[9px] text-white/55">
              Access permitted
            </span>

            <span className="mt-1 block text-[7px] text-white/25">
              Continue verification during session
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SignalCard({
  item,
  index,
}: {
  item: (typeof trustSignals)[number];
  index: number;
}) {
  const Icon = item.Icon;

  return (
    <motion.div
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
        delay: index * 0.06,
      }}
      whileHover={{
        y: -5,
      }}
      className="rounded-[15px] border border-white/[0.07] bg-[#060606] p-4"
    >
      <div className="flex items-center justify-between">
        <Icon
          size={13}
          className="text-[#c4b5fd]"
        />

        <span className="font-mono text-[5px] text-[#8b5cf6]">
          {item.value}
        </span>
      </div>

      <span className="mt-4 block text-[10px] text-white/55">
        {item.label}
      </span>

      <span className="mt-1 block font-mono text-[5px] text-white/20">
        SIGNAL / {item.code}
      </span>
    </motion.div>
  );
}

/* =========================================================
   MANIFESTO
========================================================= */

function ZeroTrustManifesto() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-32 md:px-10">
      <div className="absolute left-1/2 top-0 h-[500px] w-[850px] -translate-x-1/2 rounded-full bg-[#5b21b6]/10 blur-[180px]" />

      <Container className="relative">
        <Reveal className="text-center">
          <SectionLabel number="01">
            Zero Trust Philosophy
          </SectionLabel>

          <h2 className="mx-auto mt-9 max-w-[1100px] text-5xl font-semibold leading-[0.96] tracking-[-0.06em] md:text-7xl">
            Access should be earned by context,

            <span className="block text-white/25">
              not assumed by location.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[850px] text-[13px] leading-7 text-white/[0.5]">
            Traditional environments often inherit trust from network
            location. Zero Trust changes the decision model: each request is
            evaluated using identity, device, resource and contextual signals
            before access is granted — and those conditions can continue to
            be evaluated throughout the session.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <ManifestoCard
            number="01"
            title="Never assume"
            text="Network presence alone should not automatically establish trust."
          />

          <ManifestoCard
            number="02"
            title="Verify explicitly"
            text="Access decisions should use strong identity and contextual signals."
          />

          <ManifestoCard
            number="03"
            title="Limit continuously"
            text="Privileges should remain aligned with current business need and risk."
          />
        </div>
      </Container>
    </section>
  );
}

function ManifestoCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <motion.article
      whileHover={{
        y: -7,
        borderColor: "rgba(167,139,250,.25)",
      }}
      className="min-h-[230px] rounded-[20px] border border-white/[0.07] bg-[#060606] p-6"
    >
      <span className="font-mono text-[7px] text-[#a78bfa]">
        PRINCIPLE / {number}
      </span>

      <h3 className="mt-10 text-2xl font-medium tracking-[-0.04em]">
        {title}
      </h3>

      <p className="mt-5 text-[11px] leading-7 text-white/[0.45]">
        {text}
      </p>
    </motion.article>
  );
}

/* =========================================================
   PILLARS
========================================================= */

function ZeroTrustPillars() {
  return (
    <section className="border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <Reveal>
          <SectionLabel number="02">
            Zero Trust Pillars
          </SectionLabel>

          <div className="mt-8 grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <h2 className="max-w-[700px] text-5xl font-semibold leading-[0.94] tracking-[-0.06em] md:text-6xl">
              Trust architecture

              <span className="block text-[#a78bfa]">
                across every layer.
              </span>
            </h2>

            <p className="max-w-[620px] text-[13px] leading-7 text-white/[0.5]">
              Zero Trust requires coordinated improvement across identity,
              devices, connectivity, applications, data and security
              visibility. Strengthening only one layer leaves implicit trust
              elsewhere in the environment.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item, index) => {
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
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -8,
                  borderColor: "rgba(167,139,250,.3)",
                }}
                className="group relative min-h-[320px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#070707] p-6"
              >
                <motion.div
                  className="absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-[#7046e6]/10 blur-[80px]"
                  whileHover={{ scale: 1.3 }}
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

                  <span className="mt-10 block font-mono text-[6px] uppercase tracking-[0.18em] text-[#a78bfa]">
                    {item.label}
                  </span>

                  <h3 className="mt-3 text-xl font-medium tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[11px] leading-7 text-white/[0.47]">
                    {item.description}
                  </p>
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
   POLICY ENGINE
========================================================= */

function PolicyArchitecture() {
  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <Reveal>
            <SectionLabel number="03">
              Policy Architecture
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Every access request

              <span className="block text-[#a78bfa]">
                becomes a decision.
              </span>
            </h2>

            <p className="mt-7 max-w-[520px] text-[12px] leading-7 text-white/[0.5]">
              A Zero Trust policy engine can combine multiple security and
              business signals to determine whether access should be allowed,
              restricted, challenged or denied.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["ALLOW", "CHALLENGE", "LIMIT", "DENY"].map(
                (item, index) => (
                  <span
                    key={item}
                    className={
                      index === 0
                        ? "rounded-full border border-[#8b5cf6]/30 bg-[#7046e6]/10 px-4 py-2 font-mono text-[7px] text-[#c4b5fd]"
                        : "rounded-full border border-white/[0.08] px-4 py-2 font-mono text-[7px] text-white/30"
                    }
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </Reveal>

          <PolicyEngineVisual />
        </div>
      </Container>
    </section>
  );
}

function PolicyEngineVisual() {
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
            <TinyLabel>Policy Decision Inputs</TinyLabel>

            <h3 className="mt-2 text-lg font-medium">
              Context Evaluation Matrix
            </h3>
          </div>

          <LiveDot />
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {policySignals.map((signal, index) => (
            <motion.div
              key={signal}
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
                delay: index * 0.04,
              }}
              whileHover={{
                y: -4,
              }}
              className="relative overflow-hidden rounded-[13px] border border-white/[0.07] bg-black p-4"
            >
              <motion.div
                animate={{
                  width: ["10%", "80%", "10%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#7c3aed] to-transparent"
              />

              <div className="flex items-center justify-between">
                <CircleDot
                  size={10}
                  className="text-[#a78bfa]"
                />

                <span className="font-mono text-[5px] text-white/20">
                  SIG-{String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <span className="mt-5 block text-[9px] text-white/50">
                {signal}
              </span>

              <span className="mt-2 block font-mono text-[5px] text-[#8b5cf6]">
                EVALUATED
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between rounded-[14px] border border-[#8b5cf6]/20 bg-[#7046e6]/[0.05] p-5">
          <div className="flex items-center gap-3">
            <ShieldCheck
              size={15}
              className="text-[#c4b5fd]"
            />

            <div>
              <span className="block text-[10px] text-white/55">
                Adaptive policy decision
              </span>

              <span className="mt-1 block text-[7px] text-white/25">
                Signals combined with resource policy
              </span>
            </div>
          </div>

          <span className="font-mono text-[7px] text-[#c4b5fd]">
            ALLOW
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   IDENTITY SECTION
========================================================= */

function IdentityPerimeter() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <IdentityVisual />

          <Reveal>
            <SectionLabel number="04">
              Identity Perimeter
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Identity becomes

              <span className="block text-[#a78bfa]">
                the new control plane.
              </span>
            </h2>

            <p className="mt-7 max-w-[530px] text-[12px] leading-7 text-white/[0.5]">
              Users, administrators, services and workloads all operate
              through identities. Zero Trust strengthens how those identities
              are verified, governed and authorized before they interact with
              enterprise resources.
            </p>

            <div className="mt-9 space-y-3">
              {[
                "Strong authentication",
                "Conditional access",
                "Least privilege",
                "Privileged access governance",
                "Machine identity security",
                "Session-level visibility",
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

function IdentityVisual() {
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
      className="relative min-h-[590px] overflow-hidden rounded-[28px] border border-white/[0.09] bg-black"
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#8b5cf6]/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]"
      />

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
        className="absolute left-1/2 top-1/2 flex h-[155px] w-[155px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#7046e6]/10"
      >
        <ShieldCheck
          size={32}
          className="text-[#c4b5fd]"
        />

        <span className="mt-3 font-mono text-[6px] text-white/35">
          IDENTITY
        </span>

        <span className="mt-1 font-mono text-[5px] text-[#a78bfa]">
          VERIFIED
        </span>
      </motion.div>

      <OrbitNode
        position="left-[8%] top-[14%]"
        label="Workforce"
      />

      <OrbitNode
        position="right-[8%] top-[14%]"
        label="Admin"
      />

      <OrbitNode
        position="left-[8%] bottom-[14%]"
        label="Service"
      />

      <OrbitNode
        position="right-[8%] bottom-[14%]"
        label="Machine"
      />

      <motion.div
        animate={{
          top: ["5%", "95%", "5%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/35 to-transparent"
      />
    </motion.div>
  );
}

function OrbitNode({
  position,
  label,
}: {
  position: string;
  label: string;
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
      <div className="flex h-[80px] w-[105px] flex-col items-center justify-center rounded-[15px] border border-white/[0.1] bg-[#070707]">
        <CircleDot
          size={13}
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
   SEGMENTATION
========================================================= */

function SegmentationSection() {
  const zones = [
    {
      title: "User Zone",
      Icon: ShieldCheck,
    },
    {
      title: "Application Zone",
      Icon: Cloud,
    },
    {
      title: "Workload Zone",
      Icon: Server,
    },
    {
      title: "Data Zone",
      Icon: Database,
    },
  ];

  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="05">
            Segmentation
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[950px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Reduce the blast radius of unnecessary trust.
          </h2>

          <p className="mx-auto mt-6 max-w-[800px] text-[12px] leading-7 text-white/[0.5]">
            Zero Trust segmentation limits unnecessary connectivity and
            creates policy boundaries around users, applications, workloads
            and sensitive resources.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-[1100px]">
          <div className="grid gap-4 md:grid-cols-4">
            {zones.map((zone, index) => {
              const Icon = zone.Icon;

              return (
                <motion.div
                  key={zone.title}
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
                  className="relative min-h-[260px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#060606] p-5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8b5cf6]/20">
                      <Icon
                        size={16}
                        className="text-[#c4b5fd]"
                      />
                    </div>

                    <span className="font-mono text-[6px] text-[#8b5cf6]">
                      ZONE-0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-12 text-lg font-medium">
                    {zone.title}
                  </h3>

                  <div className="mt-6 space-y-2">
                    {[1, 2, 3].map((item) => (
                      <motion.div
                        key={item}
                        animate={{
                          opacity: [0.2, 0.7, 0.2],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: item * 0.3 + index * 0.2,
                        }}
                        className="h-[5px] rounded-full bg-gradient-to-r from-[#8b5cf6]/50 to-white/[0.03]"
                        style={{
                          width: `${90 - item * 13}%`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-center gap-2">
                    <LiveDot />
                    <TinyLabel>Policy Bound</TinyLabel>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   JOURNEY
========================================================= */

function ZeroTrustJourney() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[radial-gradient(circle_at_50%_0%,#251039_0%,#0c0610_34%,#000_72%)] px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="06">
            Transformation Journey
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[900px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Build Zero Trust as a transformation program.
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-6">
          <div className="absolute left-[7%] right-[7%] top-[38px] hidden h-px bg-gradient-to-r from-transparent via-[#8b5cf6]/50 to-transparent lg:block" />

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
            className="absolute top-[34px] z-30 hidden h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_20px_#8b5cf6] lg:block"
          />

          {journey.map((item, index) => {
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

function ZeroTrustRoadmap() {
  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <Reveal>
            <SectionLabel number="07">
              Zero Trust Roadmap
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Modernize trust

              <span className="block text-[#a78bfa]">
                one capability at a time.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[12px] leading-7 text-white/[0.5]">
              Zero Trust does not need to arrive through one disruptive
              replacement program. A roadmap can sequence identity,
              visibility, segmentation and policy capabilities according to
              existing technology and business priorities.
            </p>
          </Reveal>

          <div className="space-y-3">
            {roadmap.map((item, index) => (
              <motion.div
                key={item.phase}
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
                  delay: index * 0.07,
                }}
                whileHover={{
                  x: 5,
                }}
                className="relative overflow-hidden rounded-[16px] border border-white/[0.08] bg-[#070707] p-6"
              >
                <div className="grid gap-5 md:grid-cols-[90px_120px_1fr_60px] md:items-center">
                  <span className="font-mono text-[7px] text-[#a78bfa]">
                    {item.phase}
                  </span>

                  <h3 className="text-[14px] font-medium">
                    {item.title}
                  </h3>

                  <p className="text-[10px] leading-6 text-white/[0.43]">
                    {item.text}
                  </p>

                  <span className="text-right font-mono text-[7px] text-white/30">
                    {item.progress}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.03]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: item.progress,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.4,
                      delay: index * 0.08,
                    }}
                    className="h-full bg-gradient-to-r from-[#7c3aed] to-[#c4b5fd]"
                  />
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
   CONTINUOUS VERIFICATION
========================================================= */

function ContinuousVerification() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="08">
            Continuous Verification
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[950px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Trust is not permanent.

            <span className="block text-white/25">
              Context keeps changing.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[780px] text-[12px] leading-7 text-white/[0.5]">
            Identity status, device condition, session behavior and resource
            sensitivity can change after authentication. Continuous
            verification keeps access decisions connected to current context.
          </p>
        </Reveal>

        <VerificationLoop />
      </Container>
    </section>
  );
}

function VerificationLoop() {
  const nodes = [
    {
      label: "REQUEST",
      Icon: GitBranch,
    },
    {
      label: "VERIFY",
      Icon: ShieldCheck,
    },
    {
      label: "EVALUATE",
      Icon: Activity,
    },
    {
      label: "ENFORCE",
      Icon: Zap,
    },
    {
      label: "OBSERVE",
      Icon: Eye,
    },
  ];

  return (
    <div className="relative mx-auto mt-16 max-w-[1050px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-black p-6 md:p-10">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative grid gap-4 md:grid-cols-5">
        {nodes.map((node, index) => {
          const Icon = node.Icon;

          return (
            <motion.div
              key={node.label}
              animate={{
                y: [-3, 3, -3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.25,
              }}
              className="relative"
            >
              <div className="flex min-h-[150px] flex-col items-center justify-center rounded-[18px] border border-white/[0.08] bg-[#060606]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8b5cf6]/25">
                  <Icon
                    size={15}
                    className="text-[#c4b5fd]"
                  />
                </div>

                <span className="mt-5 font-mono text-[7px] text-white/40">
                  {node.label}
                </span>

                <span className="mt-2 font-mono text-[5px] text-[#8b5cf6]">
                  STEP 0{index + 1}
                </span>
              </div>

              {index !== nodes.length - 1 && (
                <div className="absolute -right-[18px] top-1/2 z-20 hidden -translate-y-1/2 md:block">
                  <ChevronRight
                    size={13}
                    className="text-[#8b5cf6]"
                  />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        animate={{
          left: ["4%", "95%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-4 h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_20px_#8b5cf6]"
      />
    </div>
  );
}

/* =========================================================
   PRINCIPLES
========================================================= */

function ZeroTrustPrinciples() {
  return (
    <section className="bg-black px-5 py-28 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <SectionLabel number="09">
              Architecture Principles
            </SectionLabel>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.93] tracking-[-0.06em] md:text-6xl">
              Replace implicit trust

              <span className="block text-[#a78bfa]">
                with explicit policy.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-[12px] leading-7 text-white/[0.5]">
              Zero Trust architecture becomes sustainable when principles can
              be reused across identity, applications, cloud, infrastructure
              and data rather than being implemented as isolated controls.
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

function Outcomes() {
  const items = [
    {
      title: "Reduced Implicit Trust",
      text:
        "Move away from access assumptions based primarily on network position.",
    },
    {
      title: "Stronger Access Control",
      text:
        "Combine identity, device, context and resource policy in access decisions.",
    },
    {
      title: "Smaller Attack Paths",
      text:
        "Limit unnecessary connectivity and lateral movement between resources.",
    },
    {
      title: "Adaptive Security",
      text:
        "Use continuously observed signals to adjust access as conditions change.",
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-[#050505] px-5 py-28 md:px-10">
      <Container>
        <Reveal className="text-center">
          <SectionLabel number="10">
            Zero Trust Outcomes
          </SectionLabel>

          <h2 className="mx-auto mt-8 max-w-[900px] text-5xl font-semibold tracking-[-0.06em] md:text-6xl">
            Make access deliberate, contextual and continuously defensible.
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
                <ShieldCheck
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
                boxShadow: [
                  "0 0 15px rgba(124,58,237,.1)",
                  "0 0 70px rgba(124,58,237,.35)",
                  "0 0 15px rgba(124,58,237,.1)",
                ],
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
              HYI.AI / ZERO TRUST CONSULTING
            </span>

            <h2 className="mx-auto mt-6 max-w-[900px] text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Build trust around identity and context — not network location.
            </h2>

            <p className="mx-auto mt-5 max-w-[730px] text-[12px] leading-7 text-white/[0.5]">
              Create a practical Zero Trust roadmap connecting identity,
              devices, applications, workloads, data and continuously
              evaluated security policy.
            </p>

            <motion.a
              href="#trust-engine"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mx-auto mt-9 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[11px] font-medium shadow-[0_0_45px_rgba(124,58,237,.3)]"
            >
              Start Zero Trust Journey

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

export default function ZeroTrustConsultingClient() {
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

      <ZeroTrustManifesto />

      <ZeroTrustPillars />

      <PolicyArchitecture />

      <IdentityPerimeter />

      <SegmentationSection />

      <ZeroTrustJourney />

      <ZeroTrustRoadmap />

      <ContinuousVerification />

      <ZeroTrustPrinciples />

      <Outcomes />

      <FinalCTA />
    </div>
  );
}