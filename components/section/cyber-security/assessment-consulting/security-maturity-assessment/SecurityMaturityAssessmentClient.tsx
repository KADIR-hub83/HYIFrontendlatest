"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";

import {
  Activity,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
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
  Settings2,
  ShieldCheck,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

import type {
  ElementType,
  MouseEvent as ReactMouseEvent,
  ReactNode,
} from "react";
import { useEffect, useRef, useState } from "react";

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
  { name: "Governance", values: [true, true, true, false, false] },
  { name: "Identity", values: [true, true, true, true, false] },
  { name: "Cloud", values: [true, true, false, false, false] },
  { name: "Data", values: [true, true, true, false, false] },
  { name: "Detection", values: [true, true, false, false, false] },
  { name: "Response", values: [true, true, true, false, false] },
  { name: "Automation", values: [true, false, false, false, false] },
];

const SCOPE_ITEMS = [
  "Current-state capability",
  "Target-state maturity",
  "Process consistency",
  "Technology enablement",
  "Operational integration",
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

const KPIS = [
  { label: "Current Maturity", value: 3.2, suffix: "/5", icon: Gauge, trend: "+0.4 this year", decimals: 1 },
  { label: "Target Maturity", value: 4.4, suffix: "/5", icon: Target, trend: "Advanced level", decimals: 1 },
  { label: "Maturity Gap", value: 1.2, suffix: " lvl", icon: GitBranch, trend: "-0.3 vs last cycle", decimals: 1 },
  { label: "Domains Assessed", value: 6, suffix: "", icon: Layers3, trend: "All covered", decimals: 0 },
];

const TABS = ["Overview", "Domains", "Roadmap"] as const;
type Tab = (typeof TABS)[number];

const FEED = [
  "Governance policies reviewed and mapped to controls",
  "Cloud security capability moved to Managed level",
  "Detection & Response flagged as priority gap",
  "Automation coverage increased across SOC workflows",
  "Data protection classification baseline completed",
  "Security intelligence target raised to level 4",
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

function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <motion.span
        animate={{ scale: [1, 2.3, 1], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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

  return (
    <>
      {val.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  const { scrollY } = useScroll();

  const titleY = useTransform(scrollY, [0, 650], [0, 80]);
  const titleOpacity = useTransform(scrollY, [0, 550], [1, 0.25]);
  const modelY = useTransform(scrollY, [0, 850], [0, 100]);
  const modelScale = useTransform(scrollY, [0, 900], [1, 0.95]);

  return (
    <section className="relative overflow-hidden bg-black px-5 py-20 md:px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black 20%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 20%, transparent 90%)",
        }}
      />

      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-[550px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#6d28d9] blur-[220px]"
      />

      <Container className="relative">
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="mx-auto max-w-[1050px] text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="hyi-white mx-auto mt-8 max-w-[1050px] text-5xl font-bold max-md:text-3xl"
          >
            Know Where Your
            <span className="block">Security Stands.</span>
            <span className="hyi-blue block">Know What Comes Next.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hyi-p mx-auto mt-3 max-w-[800px]"
          >
            HYI.AI Security Maturity Assessment creates a structured view of
            cybersecurity capabilities across governance, people, process,
            technology and operations, helping organizations understand their
            current state and define a practical path toward stronger security.
          </motion.p>

          <motion.a
            href="#maturity-observatory"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="hyi-white mx-auto mt-7 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[12px] font-medium shadow-[0_0_45px_rgba(124,58,237,.28)]"
          >
            Explore Maturity Assessment
            <ArrowRight size={14} />
          </motion.a>
        </motion.div>

        <motion.div
          style={{ y: modelY, scale: modelScale }}
          className="mt-10"
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

function ScoreRing({ value, max }: { value: number; max: number }) {
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
          stroke="url(#maturityRingGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: value / max }}
          transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="maturityRingGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="hyi-white text-xl font-semibold leading-none">
          <CountUp to={value} decimals={1} />
        </span>
        <span className="mt-1 font-mono text-[8px] uppercase tracking-widest text-white/40">
          Level
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
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#7046e6]/20 opacity-60 blur-2xl transition-opacity group-hover:opacity-100" />

      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
          {item.label}
        </span>
        <Icon size={14} className="text-[#a78bfa]" />
      </div>

      <div className="mt-3 flex items-end gap-1">
        <span className="hyi-white text-2xl font-semibold tracking-tight">
          <CountUp to={item.value} decimals={item.decimals} />
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
          <span
            key={i}
            className="flex items-center gap-2 font-mono text-[10px] text-white/45"
          >
            <Activity size={11} className="text-[#38bdf8]" />
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function MaturityObservatory() {
  const [tab, setTab] = useState<Tab>("Overview");
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const spotlight = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(112,70,230,0.16), transparent 70%)`;

  const onMove = (e: ReactMouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={ref}
      id="maturity-observatory"
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
            HYI.AI / SECURITY MATURITY
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
        <ObservatorySidebar />

        <div className="p-5 md:p-8">
          {/* HEADER */}
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div className="flex items-center gap-5">
              <ScoreRing value={3.2} max={5} />

              <div>
                <TinyLabel>Enterprise Security Capability</TinyLabel>

                <h2 className="hyi-h1 mt-2 tracking-[-0.04em]">
                  Security <span className="hyi-blue">Maturity</span>{" "}
                  Observatory
                </h2>

                <p className="hyi-white mt-1 text-xs opacity-60">
                  Continuous view of capability across governance, cloud, data
                  and response.
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
                View Roadmap
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
                    layoutId="maturity-tab"
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
                  <MaturityOrbit />
                  <CurrentTargetPanel />
                </div>

                <div className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_.8fr]">
                  <DomainProgress />
                  <CapabilitySignal />
                </div>
              </>
            )}

            {tab === "Domains" && (
              <div className="grid gap-4 xl:grid-cols-[1.2fr_.8fr]">
                <div className="grid gap-4">
                  <h3 className="hyi-h2">Domain Maturity</h3>
                  <DomainProgress />
                </div>
                <div className="grid gap-4">
                  <h3 className="hyi-h2">Capability Signal</h3>
                  <CapabilitySignal />
                </div>
              </div>
            )}

            {tab === "Roadmap" && (
              <div className="grid gap-4">
                <h3 className="hyi-h2">Improvement Path</h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {roadmap.map((item) => {
                    const Icon = item.Icon;
                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#060606] p-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-black">
                          <Icon size={15} className="text-white" />
                        </div>
                        <div>
                          <span className="font-mono text-[9px] text-[#a78bfa]">
                            {item.number}
                          </span>
                          <p className="hyi-h3 text-white">{item.title}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <ThreatTicker />
    </motion.div>
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
          transition={{ duration: 3, repeat: Infinity }}
          className="relative flex h-9 w-9 items-center justify-center rounded-[11px] bg-white"
        >
          <Gauge size={17} className="text-black" />
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#8b5cf6]" />
        </motion.div>

        <div className="mt-16 space-y-8">
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, color: "#c4b5fd" }}
              className={index === 0 ? "text-[#c4b5fd]" : "text-white/25"}
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
   MATURITY ORBIT
========================================================= */

function MaturityOrbit() {
  const orbitNodes = [
    { label: "Governance", x: "50%", y: "4%" },
    { label: "Identity", x: "89%", y: "28%" },
    { label: "Cloud", x: "82%", y: "77%" },
    { label: "Response", x: "18%", y: "77%" },
    { label: "Data", x: "11%", y: "28%" },
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
          <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.12em] text-white/25">
            Current state / Target state
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
              animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
              transition={{
                duration: 16 + ring * 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ inset: `${ring * 36}px` }}
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
            transition={{ duration: 3, repeat: Infinity }}
            className="relative z-20 flex h-[130px] w-[130px] flex-col items-center justify-center rounded-full border border-[#a78bfa]/30 bg-[#7046e6]/10"
          >
            <span className="hyi-white text-4xl font-semibold tracking-[-0.07em]">
              3.2
            </span>
            <span className="mt-1 font-mono text-[7px] text-white/40">
              CURRENT LEVEL
            </span>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[3px] rounded-full"
          >
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#c4b5fd] shadow-[0_0_20px_#8b5cf6]" />
          </motion.div>
        </div>

        {orbitNodes.map((node, index) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [-3, 3, -3] }}
            transition={{
              opacity: { delay: 0.5 + index * 0.08 },
              scale: { delay: 0.5 + index * 0.08 },
              y: { duration: 3 + index * 0.35, repeat: Infinity },
            }}
            style={{ left: node.x, top: node.y }}
            className="absolute -translate-x-1/2 rounded-full border border-white/[0.09] bg-[#090909] px-4 py-2"
          >
            <span className="font-mono text-[9px] text-white/55">
              {node.label}
            </span>
          </motion.div>
        ))}

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
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
   CURRENT VS TARGET PANEL
========================================================= */

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
      whileHover={{ y: -4 }}
      className="rounded-[20px] border border-white/[0.08] bg-[#060606] p-5"
    >
      <TinyLabel>{title}</TinyLabel>

      <div className="mt-5 flex items-end justify-between">
        <span className="hyi-white text-5xl font-medium tracking-[-0.07em]">
          {value}
        </span>
        <span className="font-mono text-[9px] text-[#a78bfa]">{label}</span>
      </div>

      <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="h-full bg-gradient-to-r from-[#5b21b6] to-[#c4b5fd]"
        />
      </div>
    </motion.div>
  );
}

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
          <GitBranch size={13} className="text-[#a78bfa]" />
        </div>

        <div className="mt-6 flex items-end gap-3">
          <span className="hyi-white text-4xl font-medium tracking-[-0.06em]">
            +1.2
          </span>
          <span className="mb-1 font-mono text-[9px] text-white/30">
            LEVELS
          </span>
        </div>

        <p className="mt-4 text-[10px] leading-5 text-white/35">
          Illustrative interface values used to demonstrate the maturity
          assessment experience.
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   DOMAIN PROGRESS
========================================================= */

function DomainProgress() {
  const items: [string, number][] = [
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
          <span className="mt-1 block font-mono text-[8px] uppercase text-white/25">
            Capability distribution
          </span>
        </div>

        <TinyLabel>Current State</TinyLabel>
      </div>

      <div className="mt-6 space-y-5">
        {items.map(([name, value], index) => (
          <div key={name}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] text-white/55">{name}</span>
              <span className="font-mono text-[9px] text-white/35">
                {value}%
              </span>
            </div>

            <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.08 }}
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
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-[#8b5cf6]/30"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[22px] rounded-full border border-white/[0.08]"
            />

            <motion.div
              animate={{ scale: [1, 1.07, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="flex h-[95px] w-[95px] items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.06]"
            >
              <Gauge size={29} className="text-[#c4b5fd]" />
            </motion.div>
          </div>
        </div>

        <p className="mt-5 text-center text-[10px] leading-5 text-white/40">
          Convert observations across security domains into a structured view
          of current capability and improvement priorities.
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   INTRO + SPECTRUM
========================================================= */

function MaturityIntro() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-10 md:px-10">
      <motion.div
        animate={{ x: ["-5%", "5%", "-5%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-0 h-[750px] w-full bg-[radial-gradient(circle_at_50%_35%,rgba(91,33,182,.34),transparent_58%)]"
      />

      <Container className="relative">
        <Reveal className="text-center">
          <h2 className="hyi-white hyi-h1 mx-auto max-w-[1000px]">
            Security maturity is the ability to perform consistently.
          </h2>

          <p className="hyi-p mx-auto mt-2 max-w-[950px]">
            Security maturity is not simply about owning more technology. It
            reflects how effectively governance, people, processes,
            architecture and security operations work together to manage cyber
            risk in a repeatable and sustainable way.
          </p>
        </Reveal>

        <div className="mt-8">
          <MaturitySpectrum />
        </div>
      </Container>
    </section>
  );
}

function MaturitySpectrum() {
  return (
    <div className="relative mx-auto max-w-[1200px]">
      <div className="absolute left-[5%] right-[5%] top-[47px] hidden h-px bg-gradient-to-r from-white/[0.06] via-[#8b5cf6]/60 to-white/[0.06] lg:block" />

      <motion.div
        animate={{ left: ["5%", "94%"], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-[43px] z-30 hidden h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_20px_#8b5cf6] lg:block"
      />

      <div className="grid gap-3 lg:grid-cols-5">
        {maturityStages.map((stage, index) => (
          <motion.article
            key={stage.level}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -7, borderColor: "rgba(167,139,250,.28)" }}
            className="relative z-20 min-h-[300px] rounded-[20px] border border-white/[0.08] bg-[#070707] p-5"
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
              transition={{ duration: 3, repeat: Infinity }}
              className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                index === 2
                  ? "border-[#a78bfa]/50 bg-[#7046e6]/15"
                  : "border-white/[0.1] bg-black"
              }`}
            >
              <span className="font-mono text-[10px] text-[#c4b5fd]">
                {stage.number}
              </span>
            </motion.div>

            <span className="hyi-blue mt-8 block font-mono text-[9px]">
              {stage.level}
            </span>

            <h3 className="hyi-h3 mt-2 text-white">{stage.title}</h3>

            <p className="hyi-p mt-3">{stage.text}</p>

            {index === 2 && (
              <div className="mt-4 flex items-center gap-2">
                <LiveDot />
                <span className="font-mono text-[8px] text-white/40">
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
    <section className="bg-black px-5 py-10 md:px-10">
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <h2 className="hyi-h1 hyi-white max-w-[720px]">
              Measure security
              <span className="block">across the organization.</span>
            </h2>

            <p className="hyi-p max-w-[650px]">
              Mature cybersecurity depends on multiple capabilities working
              together. Assessment provides a structured view across major
              domains rather than reducing organizational security to a single
              score.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {maturityDomains.map((domain, index) => {
            const Icon = domain.Icon;

            return (
              <motion.article
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -8, borderColor: "rgba(167,139,250,.28)" }}
                className="relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#070707] p-6"
              >
                <motion.div
                  animate={{ opacity: [0.03, 0.1, 0.03] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                  className="absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full bg-[#7046e6] blur-[90px]"
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04]">
                      <Icon size={17} className="text-white" />
                    </div>

                    <div className="text-right">
                      <span className="hyi-white block text-3xl font-medium tracking-[-0.06em]">
                        {domain.score}
                      </span>
                      <span className="font-mono text-[8px] text-white/30">
                        /100 DEMO
                      </span>
                    </div>
                  </div>

                  <h3 className="hyi-h3 mt-6 text-white">{domain.title}</h3>

                  <p className="hyi-p mt-2 min-h-[84px]">{domain.text}</p>

                  <div className="mt-5">
                    <div className="flex justify-between font-mono text-[8px] text-white/35">
                      <span>CURRENT {domain.score}</span>
                      <span>TARGET {domain.target}</span>
                    </div>

                    <div className="relative mt-3 h-1 rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${domain.target}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="absolute h-full bg-white/[0.12]"
                      />
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${domain.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.15 }}
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
    <section className="relative overflow-hidden bg-black px-5 py-10 md:px-10">
      <Container>
        <Reveal className="text-center">
          <h2 className="hyi-h1 hyi-white">
            See the gaps.
            <span className="hyi-blue block">See the path.</span>
          </h2>

          <p className="hyi-p mx-auto mt-3 max-w-[700px]">
            Capability mapping helps teams see where security practices are
            established, where consistency needs improvement and where future
            investment may provide meaningful value.
          </p>
        </Reveal>

        <div className="mt-8">
          <HeatmapModel />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.02] p-6"
        >
          <h3 className="hyi-h2 hyi-white text-center">Assessment Focus</h3>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SCOPE_ITEMS.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.08 }}
                whileHover={{ y: -4 }}
                className="hyi-skeu flex flex-col justify-between p-5"
              >
                <div className="flex items-center justify-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15">
                    <CheckCircle2 size={16} className="text-white" />
                  </span>
                  <p className="hyi-white hyi-h3 font-medium">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function HeatmapModel() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[26px] border border-white/[0.09] bg-black p-6 md:p-8"
    >
      <div className="absolute left-1/2 top-0 h-20 w-[70%] -translate-x-1/2 bg-[#7046e6]/15 blur-[60px]" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <TinyLabel>Capability Matrix</TinyLabel>
            <h3 className="hyi-h2 hyi-white mt-2">
              Security Maturity Heatmap
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <LiveDot />
            <TinyLabel>Current</TinyLabel>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-[90px_repeat(5,1fr)] gap-2 md:grid-cols-[120px_repeat(5,1fr)]">
          <div />

          {["L1", "L2", "L3", "L4", "L5"].map((level) => (
            <div
              key={level}
              className="py-2 text-center font-mono text-[10px] text-white/40"
            >
              {level}
            </div>
          ))}

          {capabilityRows.map((row, rowIndex) => (
            <div key={row.name} className="contents">
              <div className="flex items-center text-[11px] text-white/60">
                {row.name}
              </div>

              {row.values.map((active, cellIndex) => (
                <motion.div
                  key={cellIndex}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: rowIndex * 0.05 + cellIndex * 0.025 }}
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
    <section className="relative overflow-hidden bg-black px-5 py-10 md:px-10">
      <Container>
        <Reveal className="text-center">
          <h2 className="hyi-h1 hyi-white mx-auto max-w-[900px]">
            Mature security works as a system.
          </h2>

          <p className="hyi-p mx-auto mt-2 max-w-[850px]">
            Security capability depends on more than individual controls.
            Strategy, governance, processes, technology, intelligence and
            automation need to work together as an operating system for cyber
            risk management.
          </p>
        </Reveal>

        <div className="mt-8">
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
        animate={{ top: ["0%", "95%"], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 z-30 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-[#c4b5fd] shadow-[0_0_20px_#8b5cf6] lg:block"
      />

      <div className="space-y-3">
        {operatingLayers.map((layer, index) => {
          const Icon = layer.Icon;

          return (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -35 : 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ scale: 1.01 }}
              className="relative grid gap-5 rounded-[18px] border border-white/[0.08] bg-[#070707] p-5 md:grid-cols-[80px_1fr_1.4fr] md:items-center"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04]">
                <Icon size={16} className="text-white" />
              </div>

              <div>
                <span className="hyi-blue font-mono text-[9px]">
                  {layer.number}
                </span>
                <h3 className="hyi-h3 mt-1 text-white">{layer.title}</h3>
              </div>

              <p className="hyi-p">{layer.description}</p>
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
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_0%,#28103f_0%,#0d0610_36%,#000_72%)] px-5 py-10 md:px-10">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <TransformationEngine />

          <Reveal>
            <h2 className="hyi-h1 hyi-white">
              Define the gap.
              <span className="block text-white/25">Build the roadmap.</span>
            </h2>

            <p className="hyi-p mt-3 max-w-[570px]">
              A maturity assessment becomes actionable when the current state
              is connected to a realistic target state. The difference between
              those two states helps structure security transformation
              priorities.
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 rounded-[12px] border border-white/[0.07] bg-black/40 p-4"
                >
                  <CircleDot size={12} className="text-white" />
                  <span className="hyi-h3 text-white/80">{item}</span>
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
      initial={{ opacity: 0, x: -35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-[26px] border border-white/[0.1] bg-[#060606] p-6"
    >
      <div className="absolute left-1/2 top-0 h-16 w-[80%] -translate-x-1/2 bg-[#7046e6]/25 blur-[50px]" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <TinyLabel>Maturity Transformation</TinyLabel>
            <h3 className="hyi-h2 hyi-white mt-2">Current vs Target</h3>
          </div>

          <div className="flex items-center gap-2">
            <LiveDot />
            <TinyLabel>Demo Model</TinyLabel>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {current.map((value, index) => (
            <div key={index}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-white/35">
                  DOMAIN {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[9px] text-white/35">
                  {value} → {target[index]}
                </span>
              </div>

              <div className="relative mt-3 h-2 overflow-hidden rounded-full bg-white/[0.05]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${target[index]}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.08 }}
                  className="absolute h-full bg-white/[0.1]"
                />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + index * 0.08 }}
                  className="absolute h-full bg-gradient-to-r from-[#5b21b6] to-[#8b5cf6]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-3 gap-3">
          {[
            ["Current", "3.2"],
            ["Target", "4.4"],
            ["Gap", "1.2"],
          ].map((item) => (
            <div
              key={item[0]}
              className="rounded-[12px] border border-white/[0.06] bg-black p-4"
            >
              <span className="font-mono text-[9px] text-white/35">
                {item[0]}
              </span>
              <span className="hyi-white mt-2 block text-2xl font-medium">
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
    <section className="bg-black px-5 py-10 md:px-10">
      <Container>
        <Reveal className="text-center">
          <h2 className="hyi-h1 hyi-white mx-auto max-w-[850px]">
            Assess. <span className="hyi-blue">Prioritize. Improve.</span>
          </h2>

          <p className="hyi-p mx-auto mt-2 max-w-[800px]">
            A repeatable improvement cycle turns assessment findings into
            sequenced, measurable security transformation.
          </p>
        </Reveal>

        <div className="relative mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {roadmap.map((item, index) => {
            const Icon = item.Icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="relative z-20 rounded-[18px] border border-white/[0.08] bg-[#070707] p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-black">
                    <Icon size={14} className="text-white" />
                  </div>
                  <span className="hyi-blue font-mono text-[10px]">
                    {item.number}
                  </span>
                </div>

                <h3 className="hyi-h3 mt-3 text-white">{item.title}</h3>

                <p className="hyi-p mt-2">{item.text}</p>
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
    { Icon: Eye, title: "Observe" },
    { Icon: Activity, title: "Measure" },
    { Icon: BrainCircuit, title: "Understand" },
    { Icon: Settings2, title: "Improve" },
  ];

  return (
    <section className="relative overflow-hidden bg-black px-5 py-10 md:px-10">
      <Container>
        <Reveal className="text-center">
          <h2 className="hyi-h1 hyi-white mx-auto max-w-[900px]">
            Maturity is not a destination.
          </h2>

          <p className="hyi-p mx-auto mt-2 max-w-[820px]">
            Technology environments, business priorities and cyber threats
            continue to change. Security maturity therefore benefits from
            ongoing measurement, reassessment and improvement.
          </p>
        </Reveal>

        <div className="mt-8">
          <ContinuousLoop nodes={nodes} />
        </div>
      </Container>
    </section>
  );
}

function ContinuousLoop({
  nodes,
}: {
  nodes: { Icon: ElementType; title: string }[];
}) {
  const positions = [
    "left-1/2 top-0 -translate-x-1/2",
    "right-0 top-1/2 -translate-y-1/2",
    "bottom-0 left-1/2 -translate-x-1/2",
    "left-0 top-1/2 -translate-y-1/2",
  ];

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
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-dashed border-[#8b5cf6]/25"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
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
          transition={{ duration: 3, repeat: Infinity }}
          className="relative z-20 flex h-[150px] w-[150px] flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#7046e6]/10"
        >
          <RefreshCcw size={32} className="text-[#c4b5fd]" />
          <span className="mt-3 font-mono text-[9px] text-white/45">
            CONTINUOUS
          </span>
        </motion.div>

        {nodes.map(({ Icon, title }, index) => (
          <motion.div
            key={title}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.4 }}
            className={`absolute ${positions[index]} z-30 flex h-[88px] w-[88px] flex-col items-center justify-center rounded-full border border-white/[0.1] bg-[#080808]`}
          >
            <Icon size={16} className="text-[#c4b5fd]" />
            <span className="mt-2 font-mono text-[8px] text-white/50">
              {title}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={{ top: ["5%", "95%", "5%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
    <section className="px-5 md:px-10">
      <Container>
        <div className="grid gap-8 text-center lg:grid-cols-1">
          <Reveal>
            <h2 className="hyi-h1 hyi-white">Measure what actually matters</h2>

            <p className="hyi-p mx-auto mt-3 max-w-[800px]">
              Maturity should describe the organization&apos;s ability to
              manage security consistently, not simply count technologies,
              documents or individual controls.
            </p>
          </Reveal>

          <div className="grid gap-3 text-start sm:grid-cols-2">
            {principles.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 5, borderColor: "rgba(167,139,250,.25)" }}
                className="flex items-start gap-4 rounded-[15px] border border-white/[0.07] bg-black p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/25">
                  <CheckCircle2 size={16} className="text-white" />
                </div>

                <div>
                  <span className="hyi-p hyi-blue font-mono">
                    PRINCIPLE / {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="hyi-h3 mt-2">{item}</p>
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
    <section className="bg-black px-5 py-10 md:px-10">
      <Container>
        <Reveal className="text-center">
          <h2 className="hyi-h1 hyi-white mx-auto max-w-[900px]">
            Turn maturity into direction.
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {outcomes.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -7 }}
              className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#070707] p-6"
            >
              <div className="absolute -right-16 -top-16 h-[170px] w-[170px] rounded-full bg-[#7046e6]/80 blur-[60px]" />
              <div className="absolute -bottom-16 -left-16 h-[170px] w-[170px] rounded-full bg-[#7046e6]/80 blur-[60px]" />

              <h3 className="hyi-h2 hyi-white relative">{item.title}</h3>

              <p className="hyi-p relative mt-4">{item.text}</p>
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
    <section className="bg-black px-5 pb-16 pt-6 md:px-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[28px] border border-[#6366f1]/25 bg-[#080a16] px-6 py-16 text-center"
        >
          <motion.div
            animate={{ x: ["-20%", "20%", "-20%"], opacity: [0.22, 0.5, 0.22] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-170px] left-1/2 h-[320px] w-[950px] -translate-x-1/2 rounded-full bg-[#7046e6] blur-[120px]"
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.04]"
          />

          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.07]"
            >
              <Gauge size={23} className="text-[#c4b5fd]" />
            </motion.div>

            <h2 className="hyi-h1 hyi-white mx-auto mt-6 max-w-[850px]">
              Understand today&apos;s security maturity.
              <span className="hyi-blue block">
                Build tomorrow&apos;s capability.
              </span>
            </h2>

            <p className="hyi-p mx-auto mt-3 max-w-[720px]">
              Establish a structured current-state view, identify capability
              gaps and define a practical cybersecurity improvement roadmap.
            </p>

            <motion.a
              href="#maturity-observatory"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="hyi-white mx-auto mt-7 flex w-fit items-center gap-3 rounded-full bg-[#7546ef] px-7 py-3.5 text-[12px] font-medium shadow-[0_0_45px_rgba(124,58,237,.3)]"
            >
              Talk To Our Expert
              <ArrowRight size={14} />
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
    <div className="mx-auto max-w-[1350px] overflow-x-hidden bg-black text-white">
      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
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

    </div>
  );
}