"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue, useMotionTemplate,AnimatePresence
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
    AlertTriangle,
    Timer,
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
import { useEffect, useRef, useState , useMemo } from "react";

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

          const SCOPE_ITEMS = [
  "Assets and services",
  "Identity relationships",
  "Network exposure",
  "Cloud dependencies",
  "Sensitive information",
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
    <section className="relative overflow-hidden bg-black px-5  md:px-10 py-20">
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
            className="mx-auto mt-8 max-w-[1050px] font-bold hyi-white max-md:text-3xl text-5xl"
          >
            See The Risk

            <span className="block ">
              Before It Becomes
            </span>

            <span className="block hyi-blue">
              An Incident.
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
            className="mx-auto mt-3 max-w-[780px] hyi-p "
          >
            HYI.AI Cyber Risk Assessment helps organizations understand
            technology exposure, critical assets, security controls and
            potential business impact so teams can prioritize cybersecurity
            improvements with clearer context.
          </motion.p>
        </motion.div>

        <motion.div
          style={{
            y: modelY,
            scale: modelScale,
          }}
          className="mt-10"
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

// ======================================================
// DATA
// ======================================================

const KPIS = [
  { label: "Risk Score", value: 78, suffix: "/100", icon: ShieldCheck, trend: "-6 pts" },
  { label: "Critical Findings", value: 12, suffix: "", icon: AlertTriangle, trend: "-3 this week" },
  { label: "Assets Scanned", value: 2486, suffix: "", icon: Server, trend: "+148 new" },
  { label: "Mean Time To Fix", value: 4.2, suffix: "h", icon: Timer, trend: "-18%", decimals: 1 },
];

const TABS = ["Overview", "Assets", "Threats"] as const;
type Tab = (typeof TABS)[number];

const FEED = [
  "CVE-2026-1182 patched on 14 edge servers",
  "Anomalous login blocked from 3 regions",
  "S3 bucket exposure remediated",
  "Phishing campaign neutralised",
  "Zero-trust policy updated for 212 endpoints",
  "TLS 1.0 deprecated across API gateway",
];

// ======================================================
// HELPERS
// ======================================================

function CountUp({
  to,
  decimals = 0,
  duration = 1.6,
}: {
  to: number;
  decimals?: number;
  duration?: number;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return <>{val.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}</>;
}

function ScoreRing({ score }: { score: number }) {
  const r = 34;

  return (
    <div className="relative h-24 w-24 shrink-0">
      <svg viewBox="0 0 80 80" className="-rotate-90">
        <circle
          cx="40"
          cy="40"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,.08)"
          strokeWidth="6"
        />
        <motion.circle
          cx="40"
          cy="40"
          r={r}
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: score / 100 }}
          transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="hyi-white text-xl font-semibold leading-none">
          <CountUp to={score} />
        </span>
        <span className="mt-1 font-mono text-[8px] uppercase tracking-widest text-white/40">
          Secure
        </span>
      </div>
    </div>
  );
}

function KpiCard({
  item,
  index,
}: {
  item: (typeof KPIS)[number];
  index: number;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.03] p-4 backdrop-blur-xl transition-colors hover:border-[#a78bfa]/40"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#7046e6]/20 blur-2xl transition-opacity group-hover:opacity-100 opacity-60" />

      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
          {item.label}
        </span>
        <Icon size={14} className="text-[#a78bfa]" />
      </div>

      <div className="mt-3 flex items-end gap-1">
        <span className="hyi-white text-2xl font-semibold tracking-tight">
          <CountUp to={item.value} decimals={item.decimals ?? 0} />
        </span>
        <span className="mb-0.5 text-xs text-white/40">{item.suffix}</span>
      </div>

      <p className="hyi-blue mt-1 text-[10px]">{item.trend}</p>
    </motion.div>
  );
}

function ThreatTicker() {
  const loop = [...FEED, ...FEED];

  return (
    <div className="relative overflow-hidden border-t border-white/[0.1] bg-black/60 py-2.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#030303] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#030303] to-transparent" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center gap-10 whitespace-nowrap"
      >
        {loop.map((text, i) => (
          <span key={i} className="flex items-center gap-2 font-mono text-[10px] text-white/45">
            <Activity size={11} className="text-[#38bdf8]" />
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ======================================================
// MAIN
// ======================================================

function RiskCommandCenter() {
  const [tab, setTab] = useState<Tab>("Overview");
  const ref = useRef<HTMLDivElement>(null);

  // mouse spotlight
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(112,70,230,0.16), transparent 70%)`;

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={ref}
      id="risk-command-center"
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 70, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.25 }}
      className="relative overflow-hidden rounded-[30px] border border-white/[0.16] bg-[#030303] shadow-[0_50px_150px_rgba(0,0,0,.9),0_0_80px_rgba(112,70,230,.12)]"
    >
      {/* BACKGROUND LAYERS */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%)",
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: spotlight }}
      />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#7046e6]/15 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#38bdf8]/10 blur-[110px]" />

      {/* SCAN LINE */}
      <motion.div
        animate={{ x: ["-100%", "220%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 z-40 h-px w-full bg-gradient-to-r from-transparent via-[#a78bfa] to-transparent"
      />

      {/* WINDOW BAR */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/[0.12] bg-black/40 px-6 py-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[#ed6a5e]" />
          <span className="h-3 w-3 rounded-full bg-[#f4bf4f]" />
          <span className="h-3 w-3 rounded-full bg-[#61c454]" />
        </div>

        <div className="flex items-center gap-2 text-white/35">
          <ShieldCheck size={12} />
          <span className="font-mono text-[9px] tracking-wider">
            HYI.AI / RISK COMMAND CENTER
          </span>
        </div>

        <div className="hidden items-center gap-5 text-white/25 sm:flex">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <RefreshCcw size={13} />
          </motion.span>
          <Radio size={13} />
          <CircleDot size={13} />
        </div>
      </div>

      <div className="relative z-10 grid min-h-[760px] lg:grid-cols-[88px_1fr]">
        <CommandSidebar />

        <div className="p-5 md:p-8">
          {/* HEADER */}
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div className="flex items-center gap-5">
              <ScoreRing score={78} />

              <div>
                <TinyLabel>Enterprise Security Assessment</TinyLabel>

                <h2 className="hyi-h1 mt-2 tracking-[-0.04em]">
                  Cyber <span className="hyi-blue">Risk</span> Intelligence
                </h2>

                <p className="hyi-white mt-1 text-xs opacity-60">
                  Continuous posture monitoring across cloud, endpoint and identity.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2">
                <LiveDot />
                <span className="font-mono text-[8px] text-white/45">
                  ASSESSMENT ACTIVE
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="hyi-white rounded-full bg-gradient-to-r from-[#7046e6] to-[#5b7cfa] px-5 py-2.5 text-[10px] font-medium shadow-[0_0_30px_rgba(112,70,230,.45)]"
              >
                + New Assessment
              </motion.button>
            </div>
          </div>

          {/* KPI STRIP */}
          <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {KPIS.map((item, i) => (
              <KpiCard key={item.label} item={item} index={i} />
            ))}
          </div>

          {/* TABS */}
          <div className="mt-7 flex items-center gap-1 border-b border-white/[0.08]">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-4 py-2.5 text-[16px] font-medium transition-colors ${
                  tab === t ? "hyi-white" : "text-white/80 hover:text-white/70"
                }`}
              >
                {t}
                {tab === t && (
                  <motion.span
                    layoutId="risk-tab"
                    className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-gradient-to-r from-[#a78bfa] to-[#38bdf8]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-5"
          >
            {tab === "Overview" && (
              <>
                <div className="grid gap-4 xl:grid-cols-[1.35fr_.65fr]">
                  <AttackSurfaceRadar />
                  <RiskSummary />
                </div>

                <div className="mt-4 grid gap-4 xl:grid-cols-[1.25fr_.75fr]">
                  <AssetExposureTable />
                  <RiskSignalPanel />
                </div>
              </>
            )}

            {tab === "Assets" && (
              <div className="grid gap-4">
                <h3 className="hyi-h2">Asset Exposure</h3>
                <AssetExposureTable />
              </div>
            )}

            {tab === "Threats" && (
              <div className="grid gap-4 xl:grid-cols-[1.35fr_.65fr]">
                <div className="grid gap-4">
                  <h3 className="hyi-h2">Attack Surface</h3>
                  <AttackSurfaceRadar />
                </div>
                <div className="grid gap-4">
                  <h3 className="hyi-h2">Live Signals</h3>
                  <RiskSignalPanel />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* LIVE FEED */}
      <ThreatTicker />
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
    <section className="relative overflow-hidden bg-black px-5 py-10 md:px-10">
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
        
       <h2 className="mx-auto hyi-white hyi-h1 max-w-[950px] ">
            Risk is more than a vulnerability list.
          </h2>

          <p className="mx-auto mt-2 max-w-[950px] hyi-p">
            A useful cybersecurity risk assessment considers what the
            organization depends on, where exposure exists, which threats are
            relevant, what controls are already in place and how a security
            event could affect important business operations.
          </p>
        </Reveal>

        <div className="mt-5">
          <RiskMatrix />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   RISK MATRIX
========================================================= */

// ======================================================
// RISK MATRIX CONFIG
// ======================================================

type Severity = "low" | "medium" | "high" | "critical";

type MatrixPoint = {
  label: string;
  x: number; // likelihood 0-100 (left -> right)
  y: number; // 0-100 (top -> bottom), top = high impact
};

const SEVERITY: Record<
  Severity,
  { name: string; color: string; bg: string; action: string }
> = {
  low: {
    name: "Low",
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.10)",
    action: "Monitor and review quarterly.",
  },
  medium: {
    name: "Medium",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.14)",
    action: "Schedule remediation in the next sprint.",
  },
  high: {
    name: "High",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.16)",
    action: "Prioritise fix within 7 days.",
  },
  critical: {
    name: "Critical",
    color: "#f43f5e",
    bg: "rgba(244,63,94,0.20)",
    action: "Immediate action. Escalate to leadership.",
  },
};

const LIKELIHOOD_LEVELS = [
  "Rare",
  "Unlikely",
  "Possible",
  "Likely",
  "Almost Certain",
];

const IMPACT_LEVELS = [
  "Negligible",
  "Minor",
  "Moderate",
  "Major",
  "Severe",
];

const scoreToSeverity = (score: number): Severity => {
  if (score <= 4) return "low";
  if (score <= 9) return "medium";
  if (score <= 15) return "high";
  return "critical";
};

// x, y (0-100) -> likelihood (1-5), impact (1-5)
const toLevel = (value: number) =>
  Math.min(5, Math.max(1, Math.ceil(value / 20) || 1));

const describePoint = (point: MatrixPoint) => {
  const likelihood = toLevel(point.x);
  const impact = toLevel(100 - point.y);
  const score = likelihood * impact;

  return {
    likelihood,
    impact,
    score,
    severity: scoreToSeverity(score),
  };
};

// ======================================================
// RISK MATRIX
// ======================================================

function RiskMatrix() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const points = useMemo(
    () =>
      (matrix as MatrixPoint[]).map((point) => ({
        ...point,
        ...describePoint(point),
      })),
    []
  );

  const counts = useMemo(() => {
    const base: Record<Severity, number> = {
      low: 0,
      medium: 0,
      high: 0,
      critical: 0,
    };
    points.forEach((p) => {
      base[p.severity] += 1;
    });
    return base;
  }, [points]);

  const activeLabel = hovered ?? selected;
  const active = points.find((p) => p.label === activeLabel) ?? null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[26px] border border-white/[0.12] bg-[#08070a] p-6 shadow-[0_40px_120px_rgba(0,0,0,.7),0_0_70px_rgba(112,70,230,.10)] md:p-8"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#7046e6]/15 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#38bdf8]/10 blur-[100px]" />

      {/* HEADER */}
      <div className="relative flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <TinyLabel>Risk Prioritization Model</TinyLabel>

          <h3 className="hyi-h1 mt-2 tracking-[-0.03em]">
            Exposure <span className="hyi-blue">×</span> Impact
          </h3>

          <p className="hyi-white mt-1 max-w-xl text-xs opacity-60">
            Every risk is scored by likelihood and business impact, so remediation
            effort goes where it matters most.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2">
          <LiveDot />
          <TinyLabel>Illustrative Model</TinyLabel>
        </div>
      </div>

      {/* ZONE SUMMARY */}
      <div className="relative mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {(Object.keys(SEVERITY) as Severity[]).map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.08 }}
            className="rounded-xl border bg-white/[0.02] px-4 py-3"
            style={{ borderColor: `${SEVERITY[key].color}33` }}
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background: SEVERITY[key].color,
                  boxShadow: `0 0 10px ${SEVERITY[key].color}`,
                }}
              />
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">
                {SEVERITY[key].name}
              </span>
            </div>
            <p className="hyi-white mt-1.5 text-2xl font-semibold leading-none">
              {counts[key]}
            </p>
          </motion.div>
        ))}
      </div>

      {/* BODY */}
      <div className="relative mt-6 grid gap-5 lg:grid-cols-[1fr_300px]">
        {/* MATRIX */}
        <div className="flex gap-2">
          {/* Y axis title */}
          <div className="flex w-5 shrink-0 items-center justify-center">
            <span className="-rotate-90 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
              Business Impact →
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex gap-2">
              {/* Y levels */}
              <div className="hidden w-[70px] shrink-0 grid-rows-5 sm:grid">
                {[...IMPACT_LEVELS].reverse().map((level) => (
                  <div
                    key={level}
                    className="flex items-center justify-end pr-1 font-mono text-[8px] uppercase tracking-wider text-white/30"
                  >
                    {level}
                  </div>
                ))}
              </div>

              {/* GRID AREA */}
              <div
                className="relative h-[440px] min-w-0 flex-1 overflow-hidden rounded-[16px] border border-white/[0.1] bg-black"
                onMouseLeave={() => setHovered(null)}
              >
                {/* heatmap cells */}
                <div className="absolute inset-0 grid grid-cols-5 grid-rows-5">
                  {Array.from({ length: 25 }).map((_, index) => {
                    const col = index % 5;
                    const row = Math.floor(index / 5);
                    const likelihood = col + 1;
                    const impact = 5 - row;
                    const score = likelihood * impact;
                    const sev = SEVERITY[scoreToSeverity(score)];

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + (col + row) * 0.05 }}
                        className="relative flex items-start justify-end border-b border-r border-white/[0.05] p-1.5"
                        style={{ background: sev.bg }}
                      >
                        <span
                          className="font-mono text-[8px]"
                          style={{ color: sev.color, opacity: 0.45 }}
                        >
                          {score}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* sweep line */}
                <motion.div
                  animate={{ left: ["0%", "100%", "0%"] }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute bottom-0 top-0 w-px bg-gradient-to-b from-transparent via-[#a78bfa]/50 to-transparent"
                />

                {/* POINTS */}
                {points.map((point, index) => {
                  const sev = SEVERITY[point.severity];
                  const isActive = activeLabel === point.label;

                  return (
                    <motion.button
                      key={point.label}
                      type="button"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        delay: 0.4 + index * 0.12,
                      }}
                      onMouseEnter={() => setHovered(point.label)}
                      onFocus={() => setHovered(point.label)}
                      onBlur={() => setHovered(null)}
                      onClick={() =>
                        setSelected((prev) =>
                          prev === point.label ? null : point.label
                        )
                      }
                      style={{
                        left: `${point.x}%`,
                        top: `${point.y}%`,
                        zIndex: isActive ? 30 : 10,
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 outline-none"
                    >
                      {/* pulse ring */}
                      <motion.span
                        animate={{
                          scale: [1, 2.2],
                          opacity: [0.5, 0],
                        }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                        className="absolute inset-0 rounded-full"
                        style={{ background: sev.color }}
                      />

                      <span
                        className="relative flex items-center gap-2 rounded-full border bg-[#0d0916]/95 px-3 py-1.5 backdrop-blur-md transition-all duration-200"
                        style={{
                          borderColor: isActive
                            ? sev.color
                            : `${sev.color}55`,
                          boxShadow: isActive
                            ? `0 0 28px ${sev.color}66`
                            : `0 0 14px ${sev.color}22`,
                          transform: isActive ? "scale(1.08)" : "scale(1)",
                        }}
                      >
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: sev.color }}
                        />
                        <span className="whitespace-nowrap font-mono text-[9px] text-white/80">
                          {point.label}
                        </span>
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* X levels */}
            <div className="mt-2 flex gap-2">
              <div className="hidden w-[70px] shrink-0 sm:block" />
              <div className="grid flex-1 grid-cols-5">
                {LIKELIHOOD_LEVELS.map((level) => (
                  <span
                    key={level}
                    className="text-center font-mono text-[8px] uppercase tracking-wider text-white/30"
                  >
                    {level}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
              Likelihood →
            </p>
          </div>
        </div>

        {/* SIDE PANEL */}
        <div className="flex flex-col gap-4">
          <div className="min-h-[220px] rounded-2xl border border-white/[0.1] bg-white/[0.03] p-5 backdrop-blur-xl">
            <TinyLabel>Risk Details</TinyLabel>

            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="mt-3"
                >
                  <h4 className="hyi-h2">{active.label}</h4>

                  <span
                    className="mt-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[9px] uppercase tracking-wider"
                    style={{
                      color: SEVERITY[active.severity].color,
                      borderColor: `${SEVERITY[active.severity].color}55`,
                      background: SEVERITY[active.severity].bg,
                    }}
                  >
                    {SEVERITY[active.severity].name} · Score {active.score}
                  </span>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-white/[0.08] px-3 py-2">
                      <p className="font-mono text-[8px] uppercase tracking-widest text-white/35">
                        Likelihood
                      </p>
                      <p className="hyi-white mt-1 text-sm">
                        {LIKELIHOOD_LEVELS[active.likelihood - 1]}
                      </p>
                    </div>

                    <div className="rounded-lg border border-white/[0.08] px-3 py-2">
                      <p className="font-mono text-[8px] uppercase tracking-widest text-white/35">
                        Impact
                      </p>
                      <p className="hyi-white mt-1 text-sm">
                        {IMPACT_LEVELS[active.impact - 1]}
                      </p>
                    </div>
                  </div>

                  <p className="hyi-blue mt-4 text-xs leading-5">
                    {SEVERITY[active.severity].action}
                  </p>
                </motion.div>
              ) : (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="hyi-white mt-3 text-xs leading-5 opacity-50"
                >
                  Hover or click a risk on the matrix to see its likelihood,
                  impact and recommended action.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* LEGEND */}
          <div className="rounded-2xl border border-white/[0.1] bg-white/[0.02] p-5">
            <TinyLabel>Severity Scale</TinyLabel>

            <div className="mt-3 flex h-2 overflow-hidden rounded-full">
              {(Object.keys(SEVERITY) as Severity[]).map((key) => (
                <span
                  key={key}
                  className="flex-1"
                  style={{ background: SEVERITY[key].color }}
                />
              ))}
            </div>

            <div className="mt-3 flex justify-between font-mono text-[8px] uppercase tracking-wider text-white/40">
              {(Object.keys(SEVERITY) as Severity[]).map((key) => (
                <span key={key}>{SEVERITY[key].name}</span>
              ))}
            </div>

            <p className="mt-3 font-mono text-[8px] leading-4 text-white/30">
              Score = Likelihood (1-5) × Impact (1-5)
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   RISK DOMAINS
========================================================= */

function RiskDomains() {
  return (
    <section className="bg-black px-5 py- md:px-10">
      <Container>
        <Reveal>
        

          <div className="mt- grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <h2 className="max-w-[700px] hyi-h1 hyi-white">
              Understand where

              <span className="block ">
                cyber risk lives.
              </span>
            </h2>

            <p className="max-w-[650px] hyi-p">
              Modern cyber risk spans identities, cloud environments,
              applications, infrastructure, data and operational
              dependencies. Assessment should connect those areas rather than
              evaluating each one in isolation.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                className="group relative min-h-[210px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#070707] p-6"
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
                        className="text-white"
                      />
                    </div>

                   
                  </div>

                  <h3 className="mt-5 hyi-h3">
                    {item.title}
                  </h3>

                  <p className="mt-2 hyi-p">
                    {item.description}
                  </p>

                  <div className="mt-3 flex items-center gap-2 font-mono text-[7px] text-[#a78bfa]">
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
    <section className="relative overflow-hidden text-center   px-5 py-10 md:px-10">
      <Container>
        <div className=" items-center text-center" >
          <Reveal>
          

            <h2 className=" hyi-h1 ">
              Find the

              <span className="block ">
                connected risk.
              </span>
            </h2>

            <p className="mt-3  text-[12px] max-w-[500px] text-center mx-auto hyi-p">
              A weakness becomes more meaningful when it is connected to a
              critical system, privileged identity, sensitive data set or
              important business service. Mapping relationships helps teams
              understand that context.
            </p>



<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.02] p-6 md:p-"
>
  <h3 className="hyi-h2 hyi-white text-center">Discovery Scope</h3>

  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {SCOPE_ITEMS.map((item, index) => (
      <motion.div
        key={item}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 + index * 0.08 }}
        whileHover={{ y: -4 }}
        className="hyi-skeu flex  flex-col justify-between p-5"
      >
       

        <div className="mt-6 flex gap-3 items-center text-center justify-start">
           <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
          <CheckCircle2 size={16} className="text-white" />
        </span>
       
          <p className="hyi-white mt-1 hyi-h1 hyi-white font-medium">{item}</p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>
          </Reveal>

        
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
    <section className="relative overflow-hidden bg-black px-5  md:px-10">
      <Container>
        <Reveal className="text-center">
        

          <h2 className="mx-auto  max-w-[850px] hyi-h1 hyi-white">
            From exposure to action.
          </h2>

          <p className="mx-auto mt-2 hyi-p max-w-[850px]">
            Risk assessment becomes more useful when findings move through a
            repeatable process from discovery and context to prioritization,
            mitigation and continuous review.
          </p>
        </Reveal>

        <div className="relative py-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
  
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
                    className="text-white"
                  />
                </div>

             

                <h3 className="mt-3 hyi-h3 text-white">
                  {item.title}
                </h3>

                <p className="mt-2 hyi-p">
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
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#27103d_0%,#0d0610_35%,#000_72%)] px-5 py-10 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <RiskPriorityEngine />

          <Reveal>
          

            <h2 className=" hyi-h1 hyi-white">
              Not every finding

              <span className="block text-white/25">
                carries equal risk.
              </span>
            </h2>

            <p className="mt-3 max-w-[570px] hyi-p">
              Prioritization can consider asset importance, exposure,
              potential impact, control effectiveness and other relevant
              context rather than relying on a vulnerability severity value
              alone.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
                    size={12}
                    className="text-white"
                  />

                  <span className="hyi-h3 text-white/80">
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
          

            <h3 className="mt-2 text-2xl font-bold hyi-white">
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
    <section className=" px-5  md:px-10">
      <Container>
        <div className="grid gap-8 lg:grid-cols-1 text-center">
          <Reveal>
            <h2 className=" hyi-h1 hyi-white ">
              Context before conclusions

          </h2>

            <p className="mt-3 hyi-p max-w-[800px] mx-auto">
              Cybersecurity risk assessment should help people make informed
              decisions. Findings need enough technical and business context
              for teams to understand why an issue matters and what practical
              action may reduce the associated risk.
            </p>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 text-start">
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/25">
                  <CheckCircle2
                    size={16}
                    className="text-white"
                  />
                </div>

                <div>
                  <span className="font-mono hyi-p hyi-blue">
                    PRINCIPLE /{" "}
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-2 hyi-h3">
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
    <section className="bg-black px-5 py-10 md:px-10">
      <Container>
        <Reveal className="text-center">

          <h2 className="mx-auto hyi-h1 hyi-white max-w-[900px] ">
            Turn findings into a security roadmap.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
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
              
            <div className="absolute -right-16 -top-16 h-[170px] w-[170px] rounded-full bg-[#7046e6]/80 blur-[60px]" />
            <div className="absolute -left-16 -bottom-16 h-[170px] w-[170px] rounded-full bg-[#7046e6]/80 blur-[60px]" />

  

              <h3 className="relative  hyi-h2 hyi-white">
                {item.title}
              </h3>

              <p className="relative mt-4 hyi-p">
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
    <div className="overflow-x-hidden bg-black text-white mx-auto max-w-[1350px]">
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


    </div>
  );
}