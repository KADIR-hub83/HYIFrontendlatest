import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Cloud,
  Cpu,
  Database,
  Factory,
  Gauge,
  Layers3,
  Network,
  PackageCheck,
  Radio,
  ScanLine,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Workflow,
  Zap,
} from "lucide-react";

import type { ElementType, ReactNode } from "react";

/* =========================================================
   DATA
========================================================= */

const factoryStats = [
  {
    label: "Production Line",
    value: "ACTIVE",
    sub: "Connected",
    icon: Factory,
  },
  {
    label: "Robot Cells",
    value: "ONLINE",
    sub: "Synchronized",
    icon: Bot,
  },
  {
    label: "Factory Data",
    value: "LIVE",
    sub: "Streaming",
    icon: Database,
  },
];

const capabilities = [
  {
    number: "01",
    title: "Connected Production",
    description:
      "Connect robots, machines, controllers and production systems into a coordinated manufacturing environment with clearer operational visibility.",
    icon: Network,
  },
  {
    number: "02",
    title: "AI Production Intelligence",
    description:
      "Apply AI and analytical systems to manufacturing information to help teams understand production behavior, patterns and operational conditions.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Robotic Automation",
    description:
      "Coordinate industrial robots and automated equipment across production workflows while maintaining clear control boundaries and operational context.",
    icon: Bot,
  },
  {
    number: "04",
    title: "Real-Time Monitoring",
    description:
      "Bring machine events, process information and production status together so engineering teams can observe manufacturing as it operates.",
    icon: Activity,
  },
  {
    number: "05",
    title: "Quality Intelligence",
    description:
      "Integrate inspection signals, production information and analytical workflows to support more consistent manufacturing quality processes.",
    icon: ScanLine,
  },
  {
    number: "06",
    title: "Factory Integration",
    description:
      "Create structured connections between shop-floor automation and enterprise systems so information can move through the manufacturing lifecycle.",
    icon: Workflow,
  },
];

const intelligenceLayers = [
  {
    number: "L01",
    title: "Physical Production",
    tag: "FACTORY",
    description:
      "Robots, machines, tooling, conveyors and production equipment form the physical manufacturing environment.",
    icon: Factory,
  },
  {
    number: "L02",
    title: "Control Systems",
    tag: "CONTROL",
    description:
      "Controllers and automation systems coordinate machine behavior and expose important operational states.",
    icon: Cpu,
  },
  {
    number: "L03",
    title: "Industrial Connectivity",
    tag: "NETWORK",
    description:
      "Industrial communication connects equipment and enables structured exchange of operational information.",
    icon: Network,
  },
  {
    number: "L04",
    title: "Manufacturing Data",
    tag: "DATA",
    description:
      "Production events, machine states and process information are organized into usable manufacturing context.",
    icon: Database,
  },
  {
    number: "L05",
    title: "AI Intelligence",
    tag: "AI",
    description:
      "AI and analytics can interpret manufacturing information to support engineering and operational decisions.",
    icon: BrainCircuit,
  },
  {
    number: "L06",
    title: "Business Systems",
    tag: "ENTERPRISE",
    description:
      "Manufacturing intelligence can connect with planning, quality, inventory and other enterprise workflows.",
    icon: Cloud,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Sense",
    description:
      "Capture relevant information from machines, robots and production systems.",
    icon: Radio,
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Create structured communication across manufacturing equipment and systems.",
    icon: Network,
  },
  {
    number: "03",
    title: "Understand",
    description:
      "Turn machine information into usable production context and operational visibility.",
    icon: Database,
  },
  {
    number: "04",
    title: "Analyze",
    description:
      "Use analytics and AI to identify meaningful patterns in manufacturing operations.",
    icon: BrainCircuit,
  },
  {
    number: "05",
    title: "Coordinate",
    description:
      "Connect insights with production workflows, automation and engineering actions.",
    icon: Workflow,
  },
  {
    number: "06",
    title: "Improve",
    description:
      "Use operational outcomes to continuously refine manufacturing processes.",
    icon: Sparkles,
  },
];

const factorySystems = [
  {
    code: "SYS / 01",
    title: "Industrial Robots",
    text: "Robot cells can be coordinated as part of connected production environments with clear machine states and operational interfaces.",
    icon: Bot,
  },
  {
    code: "SYS / 02",
    title: "Machine Control",
    text: "Controllers provide the deterministic control layer required to operate industrial machinery and automated processes.",
    icon: Cpu,
  },
  {
    code: "SYS / 03",
    title: "Production Data",
    text: "Manufacturing data creates a shared information layer for monitoring, analysis and operational decision support.",
    icon: Database,
  },
  {
    code: "SYS / 04",
    title: "Quality Systems",
    text: "Inspection and quality information can be connected with production context to support structured quality workflows.",
    icon: PackageCheck,
  },
  {
    code: "SYS / 05",
    title: "Edge Computing",
    text: "Edge infrastructure can process relevant information close to equipment when manufacturing applications require local execution.",
    icon: Server,
  },
  {
    code: "SYS / 06",
    title: "AI Services",
    text: "AI services can support interpretation, classification, anomaly analysis and other manufacturing intelligence workflows.",
    icon: BrainCircuit,
  },
];

const outcomes = [
  {
    number: "01",
    title: "Connected operations",
    text: "Create stronger information flow between machines, robots and manufacturing systems.",
  },
  {
    number: "02",
    title: "Operational visibility",
    text: "Give engineering teams clearer context around production state and machine behavior.",
  },
  {
    number: "03",
    title: "Smarter automation",
    text: "Combine deterministic industrial control with higher-level analytical and AI capabilities.",
  },
  {
    number: "04",
    title: "Structured quality",
    text: "Connect inspection information with production context and manufacturing workflows.",
  },
  {
    number: "05",
    title: "Scalable architecture",
    text: "Build reusable manufacturing foundations that can expand across cells, lines and facilities.",
  },
];

const delivery = [
  ["01", "Discover", "Understand production systems and operational requirements"],
  ["02", "Architect", "Define manufacturing, data and integration architecture"],
  ["03", "Connect", "Establish industrial communication and information flow"],
  ["04", "Automate", "Integrate robotics and manufacturing workflows"],
  ["05", "Intelligence", "Introduce analytics and AI where they add operational value"],
  ["06", "Operate", "Observe, maintain and continuously improve the environment"],
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[8px] text-[#a78bfa]">
        {number}
      </span>

      <span className="h-px w-10 bg-[#8b5cf6]/40" />

      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">
        {children}
      </span>
    </div>
  );
}

function Status({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a78bfa] opacity-40" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a78bfa]" />
      </span>

      <span className="font-mono text-[5px] tracking-[0.15em] text-[#c4b5fd]/70">
        {children}
      </span>
    </div>
  );
}

/* =========================================================
   SMART FACTORY MODEL
========================================================= */

function MachineNode({
  icon: Icon,
  title,
  status,
  className,
  delay = "0s",
}: {
  icon: ElementType;
  title: string;
  status: string;
  className: string;
  delay?: string;
}) {
  return (
    <div
      className={`factory-node absolute z-30 w-[145px] rounded-[15px] border border-[#8b5cf6]/20 bg-[#09060f]/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,.4)] backdrop-blur-xl ${className}`}
      style={{
        animationDelay: delay,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-8 w-8 items-center justify-center rounded-[9px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07]">
          <Icon
            size={13}
            strokeWidth={1}
            className="text-[#c4b5fd]"
          />
        </div>

        <CircleDot
          size={7}
          className="text-[#a78bfa]"
        />
      </div>

      <span className="mt-4 block text-[7px] text-white/60">
        {title}
      </span>

      <span className="mt-1 block font-mono text-[4px] tracking-[0.1em] text-[#a78bfa]/55">
        {status}
      </span>
    </div>
  );
}

function SmartFactoryModel() {
  return (
    <div className="relative mx-auto h-[660px] w-full max-w-[720px] overflow-hidden rounded-[30px] border border-[#8b5cf6]/20 bg-[#060409] shadow-[0_50px_120px_rgba(0,0,0,.65)]">
      {/* grid */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.045)_1px,transparent_1px)] bg-[size:38px_38px]" />

      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.09] blur-[150px]" />

      {/* top bar */}

      <div className="absolute left-0 right-0 top-0 z-40 flex h-[54px] items-center justify-between border-b border-[#8b5cf6]/15 bg-[#09060e]/95 px-5 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <Factory
            size={13}
            strokeWidth={1}
            className="text-[#c4b5fd]"
          />

          <span className="font-mono text-[6px] tracking-[0.15em] text-white/35">
            SMART FACTORY / LIVE
          </span>
        </div>

        <Status>CONNECTED</Status>
      </div>

      {/* connection SVG */}

      <svg
        className="absolute inset-0 z-10 h-full w-full"
        viewBox="0 0 720 660"
        fill="none"
      >
        <path
          d="M360 310 C250 310 220 205 145 205"
          stroke="rgba(139,92,246,.25)"
          strokeWidth="1"
          strokeDasharray="4 7"
        />

        <path
          d="M360 310 C470 310 500 205 575 205"
          stroke="rgba(139,92,246,.25)"
          strokeWidth="1"
          strokeDasharray="4 7"
        />

        <path
          d="M360 310 C250 320 220 425 145 425"
          stroke="rgba(139,92,246,.25)"
          strokeWidth="1"
          strokeDasharray="4 7"
        />

        <path
          d="M360 310 C470 320 500 425 575 425"
          stroke="rgba(139,92,246,.25)"
          strokeWidth="1"
          strokeDasharray="4 7"
        />

        <path
          d="M360 310 L360 515"
          stroke="rgba(196,181,253,.28)"
          strokeWidth="1"
          strokeDasharray="4 7"
        />
      </svg>

      {/* animated signals */}

      <div className="factory-signal signal-one absolute left-[180px] top-[242px] z-20 h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_18px_#8b5cf6]" />

      <div className="factory-signal signal-two absolute right-[180px] top-[242px] z-20 h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_18px_#8b5cf6]" />

      <div className="factory-signal signal-three absolute bottom-[175px] left-[180px] z-20 h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_18px_#8b5cf6]" />

      <div className="factory-signal signal-four absolute bottom-[175px] right-[180px] z-20 h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_18px_#8b5cf6]" />

      {/* center intelligence */}

      <div className="absolute left-1/2 top-[310px] z-30 -translate-x-1/2 -translate-y-1/2">
        <div className="factory-orbit absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#8b5cf6]/20" />

        <div className="factory-orbit-reverse absolute left-1/2 top-1/2 h-[165px] w-[165px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/15" />

        <div className="relative flex h-[115px] w-[115px] flex-col items-center justify-center rounded-full border border-[#a78bfa]/35 bg-[#0c0812] shadow-[0_0_80px_rgba(124,58,237,.25)]">
          <BrainCircuit
            size={32}
            strokeWidth={0.8}
            className="text-[#ddd6fe]"
          />

          <span className="mt-2 font-mono text-[5px] tracking-[0.12em] text-white/30">
            FACTORY AI
          </span>
        </div>
      </div>

      {/* nodes */}

      <MachineNode
        icon={Bot}
        title="Robot Cell"
        status="ACTIVE"
        className="left-[38px] top-[135px]"
        delay="0s"
      />

      <MachineNode
        icon={Cpu}
        title="Machine Control"
        status="ONLINE"
        className="right-[38px] top-[135px]"
        delay=".3s"
      />

      <MachineNode
        icon={ScanLine}
        title="Quality Vision"
        status="INSPECTING"
        className="bottom-[150px] left-[38px]"
        delay=".6s"
      />

      <MachineNode
        icon={Database}
        title="Production Data"
        status="STREAMING"
        className="bottom-[150px] right-[38px]"
        delay=".9s"
      />

      {/* bottom intelligence */}

      <div className="absolute bottom-5 left-5 right-5 z-40 rounded-[17px] border border-[#8b5cf6]/15 bg-[#09060e]/95 p-5 backdrop-blur-xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <span className="font-mono text-[5px] tracking-[0.14em] text-white/25">
              PRODUCTION INTELLIGENCE
            </span>

            <div className="mt-2 flex items-center gap-3">
              <CheckCircle2
                size={13}
                className="text-[#c4b5fd]"
              />

              <span className="text-[8px] text-white/55">
                Manufacturing systems synchronized
              </span>
            </div>
          </div>

          <div className="rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
            <span className="font-mono text-[5px] text-[#c4b5fd]/65">
              LIVE OPERATIONS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-5 pb-24 pt-36 md:px-10 md:pt-44">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.025)_1px,transparent_1px)] bg-[size:58px_58px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />

      <div className="absolute right-[-15%] top-[-20%] h-[900px] w-[900px] rounded-full bg-[#7c3aed]/[0.07] blur-[230px]" />

      <div className="absolute bottom-[-30%] left-[-15%] h-[800px] w-[800px] rounded-full bg-[#9333ea]/[0.04] blur-[220px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <Status>SMART FACTORY ONLINE</Status>

          <span className="hidden font-mono text-[7px] tracking-[0.18em] text-white/20 md:block">
            MACHINES → DATA → AI → ACTION
          </span>
        </div>

        <div className="grid min-h-[820px] items-center gap-16 py-16 lg:grid-cols-[.95fr_1.05fr]">
          <div className="smart-hero-copy relative z-20">
            <div className="flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
              <Factory
                size={11}
                strokeWidth={1}
                className="text-[#c4b5fd]"
              />

              <span className="font-mono text-[7px] tracking-[0.17em] text-[#c4b5fd]/70">
                SMART MANUFACTURING
              </span>
            </div>

            <h1 className="mt-9 max-w-[800px] text-[clamp(4rem,7.2vw,7.7rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              Make the
              <span className="block text-white/20">
                factory
              </span>

              think
              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
                {" "}together.
              </span>
            </h1>

            <p className="mt-9 max-w-[620px] text-[14px] leading-8 text-white/[0.58] md:text-[16px] md:leading-9">
              HYI.AI designs connected manufacturing environments
              where robotics, industrial systems, production data and
              AI work together to create more observable, coordinated
              and intelligent operations.
            </p>

            <div className="mt-11 flex flex-wrap gap-4">
              <a
                href="#capabilities"
                className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-7 py-4 text-[12px] font-medium shadow-[0_0_45px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
              >
                Explore Smart Factory

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#architecture"
                className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.025] px-7 py-4 text-[12px] text-white/65 transition hover:border-[#8b5cf6]/40"
              >
                View Architecture

                <ChevronRight size={13} />
              </a>
            </div>

            <div className="mt-16 grid max-w-[660px] grid-cols-3 border-y border-white/[0.07] py-6">
              {[
                ["CONNECT", "Factory systems"],
                ["UNDERSTAND", "Production data"],
                ["OPTIMIZE", "Operations"],
              ].map(([label, value], index) => (
                <div
                  key={label}
                  className={
                    index === 0
                      ? ""
                      : "border-l border-white/[0.07] pl-5"
                  }
                >
                  <span className="block font-mono text-[6px] tracking-[0.12em] text-[#a78bfa]/65">
                    {label}
                  </span>

                  <span className="mt-2 block text-[9px] text-white/35">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <SmartFactoryModel />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MARQUEE
========================================================= */

function FactoryMarquee() {
  const words = [
    "ROBOTICS",
    "MACHINES",
    "FACTORY DATA",
    "AI",
    "QUALITY",
    "EDGE",
    "AUTOMATION",
    "CONTROL",
    "PRODUCTION",
    "INTELLIGENCE",
  ];

  return (
    <section className="overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] py-6">
      <div className="factory-marquee flex w-max whitespace-nowrap">
        {[...words, ...words].map((word, index) => (
          <div
            key={`${word}-${index}`}
            className="flex items-center"
          >
            <span className="px-10 font-mono text-[7px] tracking-[0.22em] text-white/35 md:px-14">
              {word}
            </span>

            <CircleDot
              size={7}
              className="text-[#8b5cf6]/60"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   INTRO
========================================================= */

function FactoryIntro() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-32 md:px-10 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.045] blur-[200px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.35fr_1.65fr]">
          <SectionLabel number="01">
            Manufacturing Intelligence
          </SectionLabel>

          <div>
            <h2 className="max-w-[1200px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[86px]">
              A smart factory is not
              <span className="text-white/25">
                {" "}a collection of smart machines.
              </span>
            </h2>

            <div className="mt-16 grid gap-10 border-t border-white/[0.07] pt-10 md:grid-cols-2">
              <p className="max-w-[540px] text-[13px] leading-8 text-white/[0.57]">
                Manufacturing becomes smarter when equipment,
                automation, information and people operate through a
                connected architecture instead of isolated technology
                layers.
              </p>

              <p className="max-w-[540px] text-[13px] leading-8 text-white/[0.57]">
                HYI.AI approaches smart manufacturing as an integrated
                system where robotics and deterministic control remain
                reliable while data and AI create additional
                operational intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
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
      className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="absolute right-[-15%] top-0 h-[750px] w-[750px] rounded-full bg-[#7c3aed]/[0.05] blur-[220px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <SectionLabel number="02">
          Smart Factory Capabilities
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Connect production.
            <span className="block text-white/25">
              Create intelligence.
            </span>
          </h2>

          <p className="max-w-[450px] text-[13px] leading-8 text-white/[0.55]">
            Build the digital and automation foundations required for
            connected, observable and adaptable manufacturing.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="capability-card group relative min-h-[390px] overflow-hidden rounded-[25px] border border-[#8b5cf6]/15 bg-[#08060d] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#8b5cf6]/40"
              >
                <div className="absolute -right-20 -top-20 h-[250px] w-[250px] rounded-full bg-[#7c3aed]/[0.06] blur-[90px]" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07]">
                      <Icon
                        size={18}
                        strokeWidth={1}
                        className="text-[#c4b5fd]"
                      />
                    </div>

                    <span className="font-mono text-[6px] text-white/20">
                      {item.number}
                    </span>
                  </div>

                  <div className="mt-20">
                    <h3 className="text-3xl font-medium tracking-[-0.05em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[12px] leading-7 text-white/[0.53]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#7c3aed] via-[#c084fc] to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FACTORY SYSTEMS
========================================================= */

function FactorySystems() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel number="03">
              Connected Systems
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              One factory.
              <span className="block text-white/25">
                Many systems.
              </span>
            </h2>

            <p className="mt-8 max-w-[500px] text-[13px] leading-8 text-white/[0.55]">
              Smart manufacturing requires different technology layers
              to cooperate without losing the reliability and control
              expected from industrial systems.
            </p>

            <div className="mt-10 rounded-[22px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.035] p-6">
              <Network
                size={18}
                strokeWidth={1}
                className="text-[#c4b5fd]"
              />

              <p className="mt-5 text-[11px] leading-7 text-white/[0.5]">
                Connectivity is valuable when it creates useful
                operational context, not simply more data.
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {factorySystems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.code}
                  className="system-card group relative min-h-[300px] overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#08060d] p-7 transition duration-500 hover:border-[#8b5cf6]/35"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
                      <Icon
                        size={16}
                        strokeWidth={1}
                        className="text-[#c4b5fd]"
                      />
                    </div>

                    <span className="font-mono text-[5px] text-[#a78bfa]/50">
                      {item.code}
                    </span>
                  </div>

                  <h3 className="mt-16 text-2xl font-medium tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[11px] leading-7 text-white/[0.51]">
                    {item.text}
                  </p>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[#8b5cf6]/70 transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ARCHITECTURE
========================================================= */

function ManufacturingArchitecture() {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="04">
          Factory Architecture
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Physical systems.
            <span className="block text-white/25">
              Digital intelligence.
            </span>
          </h2>

          <p className="max-w-[450px] text-[13px] leading-8 text-white/[0.55]">
            Smart manufacturing architecture connects the factory
            floor with data, analytics and enterprise workflows while
            preserving clear system responsibilities.
          </p>
        </div>

        <div className="mt-20 space-y-3">
          {intelligenceLayers.map((layer) => {
            const Icon = layer.icon;

            return (
              <article
                key={layer.number}
                className="architecture-layer group relative grid gap-5 overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#08060d] p-6 transition duration-500 hover:translate-x-2 hover:border-[#8b5cf6]/35 md:grid-cols-[70px_.8fr_1.4fr_100px] md:items-center md:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07]">
                  <Icon
                    size={18}
                    strokeWidth={1}
                    className="text-[#c4b5fd]"
                  />
                </div>

                <div>
                  <span className="font-mono text-[5px] tracking-[0.12em] text-[#a78bfa]/55">
                    {layer.number}
                  </span>

                  <h3 className="mt-2 text-xl font-medium text-white/75">
                    {layer.title}
                  </h3>
                </div>

                <p className="text-[11px] leading-7 text-white/[0.51]">
                  {layer.description}
                </p>

                <span className="font-mono text-[5px] tracking-[0.12em] text-white/20 md:text-right">
                  {layer.tag}
                </span>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#7c3aed] to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   AI PRODUCTION INTELLIGENCE
========================================================= */

function ProductionIntelligence() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="absolute right-[-15%] top-[-15%] h-[800px] w-[800px] rounded-full bg-[#7c3aed]/[0.055] blur-[220px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel number="05">
              Production Intelligence
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              See the factory
              <span className="block text-white/25">
                as a system.
              </span>
            </h2>

            <p className="mt-8 max-w-[520px] text-[13px] leading-8 text-white/[0.56]">
              Manufacturing intelligence creates a common operational
              view from machine signals, production information and
              automation events so teams can understand what is
              happening across the factory.
            </p>

            <div className="mt-10 space-y-3">
              {[
                "Machine-state visibility",
                "Production event context",
                "AI-assisted pattern analysis",
                "Quality information",
                "Operational workflows",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/[0.07] py-4"
                >
                  <Sparkles
                    size={12}
                    strokeWidth={1}
                    className="text-[#a78bfa]"
                  />

                  <span className="text-[11px] text-white/55">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[610px] overflow-hidden rounded-[30px] border border-[#8b5cf6]/15 bg-[#07050b] p-6 md:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.035)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.08] blur-[150px]" />

            <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-5">
              <div className="flex items-center gap-3">
                <BarChart3
                  size={14}
                  className="text-[#c4b5fd]"
                />

                <span className="font-mono text-[6px] tracking-[0.14em] text-white/35">
                  FACTORY OPERATIONS
                </span>
              </div>

              <Status>LIVE</Status>
            </div>

            <div className="relative mt-6 grid gap-3 sm:grid-cols-3">
              {factoryStats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="factory-stat rounded-[16px] border border-[#8b5cf6]/15 bg-[#09060e]/90 p-5"
                  >
                    <Icon
                      size={15}
                      strokeWidth={1}
                      className="text-[#c4b5fd]"
                    />

                    <span className="mt-5 block text-[7px] text-white/35">
                      {item.label}
                    </span>

                    <span className="mt-2 block font-mono text-[6px] text-[#c4b5fd]/70">
                      {item.value}
                    </span>

                    <span className="mt-1 block font-mono text-[4px] text-white/20">
                      {item.sub}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="relative mt-3 rounded-[18px] border border-[#8b5cf6]/15 bg-[#09060e]/90 p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[5px] tracking-[0.12em] text-white/25">
                  PRODUCTION SIGNAL
                </span>

                <Activity
                  size={13}
                  className="text-[#a78bfa]"
                />
              </div>

              <div className="mt-7 flex h-[110px] items-end gap-[5px]">
                {[
                  44, 51, 48, 62, 58, 66, 61, 72, 68, 74, 71, 78,
                  72, 76, 80, 75, 82, 79, 84, 81, 86, 83,
                ].map((height, index) => (
                  <div
                    key={index}
                    className="production-bar flex-1 rounded-t-[2px] bg-gradient-to-t from-[#6d28d9]/25 to-[#c4b5fd]/70"
                    style={{
                      height: `${height}%`,
                      animationDelay: `${index * 0.06}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative mt-3 space-y-2">
              {[
                ["Robot cell coordination", "SYNCHRONIZED"],
                ["Machine information", "STREAMING"],
                ["Quality inspection", "ACTIVE"],
                ["Production context", "AVAILABLE"],
              ].map(([label, status], index) => (
                <div
                  key={label}
                  className="production-row flex items-center justify-between rounded-[13px] border border-white/[0.06] bg-[#09060e]/80 px-5 py-4"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] font-mono text-[5px] text-[#a78bfa]/60">
                      0{index + 1}
                    </span>

                    <span className="text-[9px] text-white/50">
                      {label}
                    </span>
                  </div>

                  <span className="font-mono text-[4px] text-[#c4b5fd]/55">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS
========================================================= */

function SmartManufacturingProcess() {
  return (
    <section className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.04] blur-[220px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <SectionLabel number="06">
          Intelligence Loop
        </SectionLabel>

        <h2 className="mt-8 max-w-[1000px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
          Sense.
          <span className="text-white/25">
            {" "}Connect.
          </span>

          <span className="block">
            Understand.
            <span className="text-white/25">
              {" "}Improve.
            </span>
          </span>
        </h2>

        <div className="relative mt-20">
          <div className="absolute left-[7%] right-[7%] top-[42px] hidden h-px bg-gradient-to-r from-[#6d28d9]/20 via-[#c4b5fd]/45 to-[#6d28d9]/20 lg:block" />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {processSteps.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="process-card group relative min-h-[350px] overflow-hidden rounded-[22px] border border-[#8b5cf6]/15 bg-[#08060d] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#8b5cf6]/40"
                >
                  <div className="relative z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#0c0811]">
                    <Icon
                      size={15}
                      strokeWidth={1}
                      className="text-[#c4b5fd]"
                    />
                  </div>

                  <span className="mt-6 block font-mono text-[5px] text-[#a78bfa]/45">
                    STEP / {item.number}
                  </span>

                  <div className="mt-14">
                    <h3 className="text-2xl font-medium tracking-[-0.04em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[10px] leading-6 text-white/[0.5]">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[#8b5cf6]/70 transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   OUTCOMES
========================================================= */

function ManufacturingOutcomes() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <SectionLabel number="07">
              Manufacturing Outcomes
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Intelligence
              <span className="block text-white/25">
                where work happens.
              </span>
            </h2>

            <p className="mt-8 max-w-[490px] text-[13px] leading-8 text-white/[0.55]">
              The goal of smart manufacturing is not technology for
              its own sake. It is a factory architecture that makes
              production easier to observe, coordinate and improve.
            </p>
          </div>

          <div className="border-t border-white/[0.08]">
            {outcomes.map((item) => (
              <article
                key={item.number}
                className="outcome-row group grid gap-5 border-b border-white/[0.08] py-8 transition duration-300 hover:pl-4 md:grid-cols-[60px_1fr_1.3fr]"
              >
                <span className="font-mono text-[6px] text-[#a78bfa]/50">
                  {item.number}
                </span>

                <h3 className="text-[16px] font-medium leading-6 text-white/70">
                  {item.title}
                </h3>

                <p className="text-[11px] leading-6 text-white/[0.48]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DELIVERY
========================================================= */

function DeliveryModel() {
  return (
    <section className="relative overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="08">
          Smart Manufacturing Delivery
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[950px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Start with production.
            <span className="block text-white/25">
              Build the digital layer around it.
            </span>
          </h2>

          <div className="flex items-center gap-3">
            <Settings2
              size={16}
              strokeWidth={1}
              className="text-[#a78bfa]"
            />

            <span className="font-mono text-[6px] tracking-[0.12em] text-white/30">
              ENGINEERING MODEL
            </span>
          </div>
        </div>

        <div className="mt-20 border-t border-white/[0.08]">
          {delivery.map(([number, title, text]) => (
            <div
              key={number}
              className="delivery-row group grid gap-5 border-b border-white/[0.08] py-7 transition duration-300 hover:pl-4 md:grid-cols-[80px_1fr_1fr_40px] md:items-center"
            >
              <span className="font-mono text-[6px] text-[#a78bfa]/50">
                {number}
              </span>

              <h3 className="text-2xl font-medium tracking-[-0.04em] text-white/75">
                {title}
              </h3>

              <p className="text-[11px] text-white/40">
                {text}
              </p>

              <ArrowRight
                size={13}
                className="text-[#8b5cf6]/50 transition-transform duration-300 group-hover:translate-x-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-36 md:px-10 md:py-56">
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.08] blur-[230px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.025)_1px,transparent_1px)] bg-[size:55px_55px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="relative mx-auto max-w-[1450px] text-center">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
          <Factory
            size={11}
            className="text-[#c4b5fd]"
          />

          <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
            HYI.AI / SMART MANUFACTURING
          </span>
        </div>

        <h2 className="mx-auto mt-10 max-w-[1350px] text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.09em]">
          Connect the floor.
          <span className="block text-white/20">
            Understand production.
          </span>

          <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
            Build the intelligent factory.
          </span>
        </h2>

        <p className="mx-auto mt-10 max-w-[720px] text-[14px] leading-8 text-white/[0.55]">
          Bring robotics, automation, manufacturing data and AI into
          one connected architecture designed around real production
          operations.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="#capabilities"
            className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-8 py-4 text-[12px] font-medium shadow-[0_0_45px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
          >
            Explore Smart Manufacturing

            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function SmartManufacturingPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes smartHeroEnter {
              from {
                opacity: 0;
                transform: translateY(40px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes factoryOrbit {
              from {
                transform:
                  translate(-50%, -50%)
                  rotate(0deg);
              }

              to {
                transform:
                  translate(-50%, -50%)
                  rotate(360deg);
              }
            }

            @keyframes factoryOrbitReverse {
              from {
                transform:
                  translate(-50%, -50%)
                  rotate(360deg);
              }

              to {
                transform:
                  translate(-50%, -50%)
                  rotate(0deg);
              }
            }

            @keyframes factoryNodeFloat {
              0%,
              100% {
                transform: translateY(0);
              }

              50% {
                transform: translateY(-7px);
              }
            }

            @keyframes productionBar {
              0%,
              100% {
                transform: scaleY(.55);
                opacity: .4;
              }

              50% {
                transform: scaleY(1);
                opacity: 1;
              }
            }

            @keyframes factoryMarquee {
              from {
                transform: translateX(0);
              }

              to {
                transform: translateX(-50%);
              }
            }

            @keyframes productionRowPulse {
              0%,
              100% {
                border-color: rgba(255,255,255,.06);
              }

              50% {
                border-color: rgba(139,92,246,.22);
              }
            }

            @keyframes signalOne {
              0% {
                transform: translate(0, 0);
                opacity: 0;
              }

              20% {
                opacity: 1;
              }

              100% {
                transform: translate(160px, 68px);
                opacity: 0;
              }
            }

            @keyframes signalTwo {
              0% {
                transform: translate(0, 0);
                opacity: 0;
              }

              20% {
                opacity: 1;
              }

              100% {
                transform: translate(-160px, 68px);
                opacity: 0;
              }
            }

            @keyframes signalThree {
              0% {
                transform: translate(0, 0);
                opacity: 0;
              }

              20% {
                opacity: 1;
              }

              100% {
                transform: translate(160px, -92px);
                opacity: 0;
              }
            }

            @keyframes signalFour {
              0% {
                transform: translate(0, 0);
                opacity: 0;
              }

              20% {
                opacity: 1;
              }

              100% {
                transform: translate(-160px, -92px);
                opacity: 0;
              }
            }

            .smart-hero-copy {
              animation:
                smartHeroEnter
                .9s
                cubic-bezier(.16,1,.3,1)
                both;
            }

            .factory-orbit {
              animation:
                factoryOrbit
                22s
                linear
                infinite;
            }

            .factory-orbit-reverse {
              animation:
                factoryOrbitReverse
                15s
                linear
                infinite;
            }

            .factory-node {
              animation:
                factoryNodeFloat
                4s
                ease-in-out
                infinite;
            }

            .production-bar {
              transform-origin: bottom;
              animation:
                productionBar
                2.4s
                ease-in-out
                infinite;
            }

            .factory-marquee {
              animation:
                factoryMarquee
                32s
                linear
                infinite;
            }

            .production-row {
              animation:
                productionRowPulse
                3s
                ease-in-out
                infinite;
            }

            .signal-one {
              animation:
                signalOne
                3s
                ease-in-out
                infinite;
            }

            .signal-two {
              animation:
                signalTwo
                3.4s
                ease-in-out
                infinite;
            }

            .signal-three {
              animation:
                signalThree
                3.2s
                ease-in-out
                infinite;
            }

            .signal-four {
              animation:
                signalFour
                3.6s
                ease-in-out
                infinite;
            }

            .capability-card:hover,
            .system-card:hover,
            .process-card:hover {
              box-shadow:
                0 25px 80px
                rgba(0,0,0,.4);
            }

            @media (prefers-reduced-motion: reduce) {
              .smart-hero-copy,
              .factory-orbit,
              .factory-orbit-reverse,
              .factory-node,
              .production-bar,
              .factory-marquee,
              .production-row,
              .signal-one,
              .signal-two,
              .signal-three,
              .signal-four {
                animation: none !important;
              }
            }

            @media (max-width: 640px) {
              .factory-node {
                width: 120px;
              }
            }
          `,
        }}
      />

      <Header />

      <Hero />

      <FactoryMarquee />

      <FactoryIntro />

      <Capabilities />

      <FactorySystems />

      <ManufacturingArchitecture />

      <ProductionIntelligence />

      <SmartManufacturingProcess />

      <ManufacturingOutcomes />

      <DeliveryModel />

      <FinalCTA />

      <Footer />
    </main>
  );
}