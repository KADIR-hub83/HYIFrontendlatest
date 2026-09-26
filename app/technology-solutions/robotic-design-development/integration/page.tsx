import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  Activity,
  ArrowRight,
  Bot,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Cloud,
  Cpu,
  Database,
  Eye,
  Factory,
  Gauge,
  GitBranch,
  Layers3,
  Network,
  Plug,
  Radio,
  RefreshCcw,
  Router,
  Server,
  Settings2,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const integrationLayers = [
  {
    number: "01",
    title: "Robot",
    label: "PHYSICAL SYSTEM",
    description:
      "Industrial robots, autonomous machines, cobots, actuators and robotic equipment operating inside the physical environment.",
    icon: Bot,
  },
  {
    number: "02",
    title: "Controller",
    label: "MACHINE CONTROL",
    description:
      "Robot controllers, PLCs, motion systems and machine logic coordinate deterministic operations close to the hardware.",
    icon: Cpu,
  },
  {
    number: "03",
    title: "Perception",
    label: "SENSING",
    description:
      "Cameras, machine vision, sensors and perception pipelines provide environmental context to robotic applications.",
    icon: Eye,
  },
  {
    number: "04",
    title: "Edge",
    label: "LOCAL COMPUTE",
    description:
      "Edge systems process machine data, run local services and connect robotic equipment with higher-level software.",
    icon: Server,
  },
  {
    number: "05",
    title: "Enterprise",
    label: "BUSINESS SYSTEMS",
    description:
      "Manufacturing, operations and enterprise platforms exchange production information with the robotic environment.",
    icon: Database,
  },
  {
    number: "06",
    title: "AI + Cloud",
    label: "INTELLIGENCE",
    description:
      "Cloud and AI services extend robotic environments with analytics, model workflows, fleet intelligence and operational insights.",
    icon: BrainCircuit,
  },
];

const integrationCapabilities = [
  {
    number: "01",
    title: "Robot & PLC Integration",
    description:
      "Connect robot controllers with PLC logic, machine states, safety conditions and production sequences to coordinate automated cells.",
    icon: Cpu,
  },
  {
    number: "02",
    title: "Machine Vision Integration",
    description:
      "Integrate cameras and perception systems with robot software for inspection, localization, guidance and intelligent machine interaction.",
    icon: Eye,
  },
  {
    number: "03",
    title: "Industrial Networking",
    description:
      "Design reliable communication between robotic equipment, controllers, sensors, edge systems and industrial infrastructure.",
    icon: Network,
  },
  {
    number: "04",
    title: "Edge Computing",
    description:
      "Deploy local compute services close to robotic systems for data processing, application integration and operational connectivity.",
    icon: Server,
  },
  {
    number: "05",
    title: "Enterprise Connectivity",
    description:
      "Connect robotic operations with manufacturing and enterprise platforms so machine events can participate in wider digital workflows.",
    icon: Database,
  },
  {
    number: "06",
    title: "AI System Integration",
    description:
      "Integrate intelligent perception, inference and decision-support services into robotic workflows while maintaining clear system boundaries.",
    icon: BrainCircuit,
  },
];

const integrationFlow = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand robot hardware, controllers, interfaces, networks, operational workflows and surrounding enterprise systems.",
  },
  {
    step: "02",
    title: "Architect",
    description:
      "Define system boundaries, communication paths, integration contracts and responsibilities across the robotics stack.",
  },
  {
    step: "03",
    title: "Connect",
    description:
      "Integrate robots, controllers, sensors, software and operational systems through appropriate interfaces.",
  },
  {
    step: "04",
    title: "Validate",
    description:
      "Test communication, state synchronization, failures, recovery behavior and end-to-end operational sequences.",
  },
  {
    step: "05",
    title: "Deploy",
    description:
      "Introduce the integrated system into the target environment with controlled commissioning and operational visibility.",
  },
  {
    step: "06",
    title: "Operate",
    description:
      "Monitor interfaces, machine states and integration health while continuously improving reliability and maintainability.",
  },
];

const protocols = [
  "Robot APIs",
  "PLC Interfaces",
  "OPC UA",
  "MQTT",
  "REST APIs",
  "Industrial Ethernet",
  "TCP/IP",
  "Event Streams",
  "Machine Vision",
  "Edge Services",
  "Telemetry",
  "Enterprise APIs",
];

const architectureChecks = [
  {
    title: "Clear ownership",
    text: "Every service, interface and machine integration should have a defined operational owner.",
  },
  {
    title: "Observable communication",
    text: "Integration health should be measurable instead of becoming visible only after production failure.",
  },
  {
    title: "Controlled failure",
    text: "Systems should define what happens when sensors, networks, services or downstream platforms become unavailable.",
  },
  {
    title: "Secure interfaces",
    text: "Machine connectivity should follow controlled identity, network and access boundaries.",
  },
  {
    title: "Maintainable contracts",
    text: "Interfaces should be documented and structured so components can evolve without unnecessary coupling.",
  },
  {
    title: "Operational recovery",
    text: "Restart, reconnect and recovery behavior should be considered as part of the integration architecture.",
  },
];

const outcomes = [
  {
    title: "Connected Operations",
    text: "Robots become part of a coordinated digital environment instead of isolated automation islands.",
  },
  {
    title: "Unified Machine Data",
    text: "Operational information can move from equipment into applications, analytics and enterprise workflows.",
  },
  {
    title: "Better Visibility",
    text: "Engineering teams gain clearer insight into communication paths, machine states and integration health.",
  },
  {
    title: "Scalable Architecture",
    text: "Reusable interfaces and integration patterns make future robotic expansion easier to manage.",
  },
];

/* =========================================================
   HELPERS
========================================================= */

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[8px] text-[#9f7aea]">
        {number}
      </span>

      <span className="h-px w-10 bg-[#8b5cf6]/40" />

      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/35">
        {children}
      </span>
    </div>
  );
}

/* =========================================================
   INTEGRATION NETWORK MODEL
========================================================= */

function NetworkNode({
  className,
  icon: Icon,
  label,
  sublabel,
  delay = "0s",
}: {
  className: string;
  icon: React.ElementType;
  label: string;
  sublabel: string;
  delay?: string;
}) {
  return (
    <div
      className={`network-node absolute z-30 ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="group flex min-w-[120px] items-center gap-3 rounded-[14px] border border-[#8b5cf6]/25 bg-[#0a0710]/90 p-3 shadow-[0_10px_40px_rgba(0,0,0,.35)] backdrop-blur-xl">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07]">
          <Icon
            size={15}
            strokeWidth={1}
            className="text-[#c4b5fd]"
          />
        </div>

        <div>
          <span className="block text-[8px] font-medium text-white/70">
            {label}
          </span>

          <span className="mt-1 block font-mono text-[5px] tracking-[0.08em] text-white/25">
            {sublabel}
          </span>
        </div>
      </div>
    </div>
  );
}

function IntegrationNetwork() {
  return (
    <div className="relative mx-auto h-[650px] w-full max-w-[730px] overflow-hidden rounded-[30px] border border-[#8b5cf6]/20 bg-[#060409] shadow-[0_50px_120px_rgba(0,0,0,.55)]">
      {/* background */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.04)_1px,transparent_1px)] bg-[size:38px_38px]" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.08] blur-[130px]" />

      {/* top header */}

      <div className="absolute left-0 right-0 top-0 z-40 flex h-[50px] items-center justify-between border-b border-[#8b5cf6]/15 bg-[#09060d]/95 px-5 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <Network
            size={13}
            strokeWidth={1}
            className="text-[#a78bfa]"
          />

          <span className="font-mono text-[6px] tracking-[0.15em] text-white/35">
            ROBOTICS INTEGRATION FABRIC
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a78bfa] shadow-[0_0_10px_#8b5cf6]" />

          <span className="font-mono text-[5px] tracking-[0.1em] text-[#b9a4ff]/70">
            CONNECTED
          </span>
        </div>
      </div>

      {/* SVG connections */}

      <svg
        className="absolute inset-0 z-10 h-full w-full"
        viewBox="0 0 730 650"
        fill="none"
      >
        <path
          d="M365 325 L365 130"
          stroke="rgba(139,92,246,.18)"
          strokeWidth="1"
        />

        <path
          d="M365 325 L555 190"
          stroke="rgba(139,92,246,.18)"
          strokeWidth="1"
        />

        <path
          d="M365 325 L580 390"
          stroke="rgba(139,92,246,.18)"
          strokeWidth="1"
        />

        <path
          d="M365 325 L365 525"
          stroke="rgba(139,92,246,.18)"
          strokeWidth="1"
        />

        <path
          d="M365 325 L145 390"
          stroke="rgba(139,92,246,.18)"
          strokeWidth="1"
        />

        <path
          d="M365 325 L160 190"
          stroke="rgba(139,92,246,.18)"
          strokeWidth="1"
        />

        <path
          className="network-path path-one"
          d="M365 325 L365 130"
          stroke="url(#networkGradient)"
          strokeWidth="1.4"
          strokeDasharray="5 9"
        />

        <path
          className="network-path path-two"
          d="M365 325 L555 190"
          stroke="url(#networkGradient)"
          strokeWidth="1.4"
          strokeDasharray="5 9"
        />

        <path
          className="network-path path-three"
          d="M365 325 L580 390"
          stroke="url(#networkGradient)"
          strokeWidth="1.4"
          strokeDasharray="5 9"
        />

        <path
          className="network-path path-four"
          d="M365 325 L365 525"
          stroke="url(#networkGradient)"
          strokeWidth="1.4"
          strokeDasharray="5 9"
        />

        <path
          className="network-path path-five"
          d="M365 325 L145 390"
          stroke="url(#networkGradient)"
          strokeWidth="1.4"
          strokeDasharray="5 9"
        />

        <path
          className="network-path path-six"
          d="M365 325 L160 190"
          stroke="url(#networkGradient)"
          strokeWidth="1.4"
          strokeDasharray="5 9"
        />

        <circle
          cx="365"
          cy="130"
          r="3"
          fill="#c4b5fd"
        />

        <circle
          cx="555"
          cy="190"
          r="3"
          fill="#c4b5fd"
        />

        <circle
          cx="580"
          cy="390"
          r="3"
          fill="#c4b5fd"
        />

        <circle
          cx="365"
          cy="525"
          r="3"
          fill="#c4b5fd"
        />

        <circle
          cx="145"
          cy="390"
          r="3"
          fill="#c4b5fd"
        />

        <circle
          cx="160"
          cy="190"
          r="3"
          fill="#c4b5fd"
        />

        <defs>
          <linearGradient
            id="networkGradient"
            x1="0"
            y1="0"
            x2="730"
            y2="650"
          >
            <stop stopColor="#6d28d9" />
            <stop
              offset=".5"
              stopColor="#c4b5fd"
            />
            <stop
              offset="1"
              stopColor="#e879f9"
            />
          </linearGradient>
        </defs>
      </svg>

      {/* core */}

      <div className="absolute left-1/2 top-1/2 z-30 flex h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="integration-core absolute inset-0 rounded-full border border-dashed border-[#8b5cf6]/30" />

        <div className="absolute inset-[12px] rounded-full border border-[#8b5cf6]/15" />

        <div className="core-pulse absolute inset-[25px] rounded-full bg-[#7c3aed]/15 blur-[15px]" />

        <div className="relative flex h-[88px] w-[88px] flex-col items-center justify-center rounded-full border border-[#a78bfa]/40 bg-[#0d0913] shadow-[0_0_70px_rgba(124,58,237,.25)]">
          <Workflow
            size={25}
            strokeWidth={0.9}
            className="text-[#d8ccff]"
          />

          <span className="mt-2 font-mono text-[5px] tracking-[0.1em] text-white/30">
            INTEGRATION
          </span>
        </div>
      </div>

      {/* nodes */}

      <NetworkNode
        className="left-1/2 top-[72px] -translate-x-1/2"
        icon={Bot}
        label="Robot"
        sublabel="MACHINE"
      />

      <NetworkNode
        className="right-[42px] top-[150px]"
        icon={Eye}
        label="Vision"
        sublabel="PERCEPTION"
        delay=".4s"
      />

      <NetworkNode
        className="right-[22px] top-[350px]"
        icon={Server}
        label="Edge"
        sublabel="COMPUTE"
        delay=".8s"
      />

      <NetworkNode
        className="bottom-[50px] left-1/2 -translate-x-1/2"
        icon={Cloud}
        label="Cloud + AI"
        sublabel="INTELLIGENCE"
        delay="1.2s"
      />

      <NetworkNode
        className="left-[25px] top-[350px]"
        icon={Factory}
        label="MES / ERP"
        sublabel="ENTERPRISE"
        delay="1.6s"
      />

      <NetworkNode
        className="left-[42px] top-[150px]"
        icon={Cpu}
        label="PLC"
        sublabel="CONTROL"
        delay="2s"
      />

      {/* telemetry */}

      <div className="absolute bottom-4 left-4 z-40 rounded-[10px] border border-[#8b5cf6]/10 bg-black/50 px-3 py-2 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Activity
            size={9}
            className="text-[#a78bfa]"
          />

          <span className="font-mono text-[5px] tracking-[0.08em] text-white/25">
            DATA FLOW ACTIVE
          </span>
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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.025)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="absolute right-[-15%] top-[-15%] h-[900px] w-[900px] rounded-full bg-[#7c3aed]/[0.07] blur-[220px]" />

      <div className="absolute bottom-[-30%] left-[-10%] h-[700px] w-[700px] rounded-full bg-[#9333ea]/[0.04] blur-[200px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a78bfa]" />

            <span className="font-mono text-[7px] tracking-[0.2em] text-white/40">
              HYI.AI / ROBOT INTEGRATION
            </span>
          </div>

          <span className="hidden font-mono text-[7px] tracking-[0.18em] text-white/20 md:block">
            ROBOTS → SYSTEMS → DATA → AI
          </span>
        </div>

        <div className="grid min-h-[820px] items-center gap-16 py-16 lg:grid-cols-[.9fr_1.1fr]">
          <div className="hero-copy relative z-20">
            <div className="flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
              <Plug
                size={11}
                className="text-[#c4b5fd]"
              />

              <span className="font-mono text-[7px] tracking-[0.17em] text-[#c4b5fd]/70">
                CONNECTED ROBOTICS INFRASTRUCTURE
              </span>
            </div>

            <h1 className="mt-9 max-w-[760px] text-[clamp(4.3rem,7.4vw,8rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              Robots
              <span className="block text-white/20">
                should not
              </span>

              work
              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
                {" "}alone.
              </span>
            </h1>

            <p className="mt-9 max-w-[610px] text-[14px] leading-8 text-white/[0.58] md:text-[16px] md:leading-9">
              HYI.AI Robot Integration connects robotic systems with
              controllers, vision, industrial networks, edge
              computing, enterprise software and AI infrastructure —
              creating one coordinated automation environment.
            </p>

            <div className="mt-11 flex flex-wrap gap-4">
              <a
                href="#architecture"
                className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-7 py-4 text-[12px] font-medium shadow-[0_0_40px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
              >
                Explore Architecture

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#capabilities"
                className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.025] px-7 py-4 text-[12px] text-white/65 transition hover:border-[#8b5cf6]/40"
              >
                Integration Capabilities

                <ChevronRight size={13} />
              </a>
            </div>

            <div className="mt-16 grid max-w-[650px] grid-cols-3 border-y border-white/[0.07] py-6">
              {[
                ["ROBOT", "Hardware"],
                ["SYSTEM", "Integration"],
                ["DATA", "Connected"],
              ].map(([value, label], index) => (
                <div
                  key={value}
                  className={
                    index === 0
                      ? ""
                      : "border-l border-white/[0.07] pl-5"
                  }
                >
                  <span className="block font-mono text-[6px] tracking-[0.12em] text-[#a78bfa]/65">
                    {value}
                  </span>

                  <span className="mt-2 block text-[9px] text-white/35">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <IntegrationNetwork />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MOVING STRIP
========================================================= */

function IntegrationStrip() {
  const words = [
    "ROBOT",
    "PLC",
    "VISION",
    "EDGE",
    "INDUSTRIAL NETWORK",
    "MES",
    "ERP",
    "CLOUD",
    "AI",
    "TELEMETRY",
    "AUTOMATION",
  ];

  return (
    <section className="overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] py-6">
      <div className="integration-marquee flex w-max whitespace-nowrap">
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

function IntegrationIntro() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-32 md:px-10 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.045] blur-[190px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.35fr_1.65fr]">
          <SectionLabel number="01">
            Integration Philosophy
          </SectionLabel>

          <div>
            <h2 className="max-w-[1200px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[88px]">
              The robot is only
              <span className="text-white/25">
                {" "}one part of the automation system.
              </span>
            </h2>

            <div className="mt-16 grid gap-10 border-t border-white/[0.07] pt-10 md:grid-cols-2">
              <p className="max-w-[530px] text-[13px] leading-8 text-white/[0.56]">
                A production robot rarely operates independently. It
                exchanges information with controllers, sensors,
                safety systems, vision platforms, edge applications
                and surrounding machines.
              </p>

              <p className="max-w-[530px] text-[13px] leading-8 text-white/[0.56]">
                Robot integration creates the architecture that allows
                these components to communicate, coordinate and
                operate as one maintainable system rather than a
                collection of disconnected technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ARCHITECTURE
========================================================= */

function Architecture() {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1450px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel number="02">
              Integration Architecture
            </SectionLabel>

            <h2 className="mt-8 max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              From machine
              <span className="block text-white/25">
                to intelligence.
              </span>
            </h2>
          </div>

          <p className="max-w-[430px] text-[13px] leading-8 text-white/[0.54]">
            A connected robotics architecture organizes physical
            equipment, machine control, sensing, compute and digital
            systems into clear operational layers.
          </p>
        </div>

        <div className="relative mt-20">
          {/* vertical center */}

          <div className="absolute bottom-[8%] left-[49px] top-[8%] hidden w-px bg-gradient-to-b from-[#6d28d9]/10 via-[#a78bfa]/50 to-[#6d28d9]/10 md:block" />

          <div className="space-y-3">
            {integrationLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <article
                  key={layer.number}
                  className="architecture-row group relative grid min-h-[155px] gap-6 overflow-hidden rounded-[22px] border border-[#8b5cf6]/12 bg-[#08060d] p-6 transition duration-500 hover:translate-x-2 hover:border-[#8b5cf6]/35 md:grid-cols-[50px_70px_170px_1fr] md:items-center md:p-8"
                >
                  <span className="font-mono text-[6px] text-[#a78bfa]/60">
                    {layer.number}
                  </span>

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07]">
                    <Icon
                      size={18}
                      strokeWidth={1}
                      className="text-[#c4b5fd]"
                    />
                  </div>

                  <div>
                    <span className="font-mono text-[6px] tracking-[0.13em] text-white/25">
                      {layer.label}
                    </span>

                    <h3 className="mt-2 text-xl font-medium text-white/75">
                      {layer.title}
                    </h3>
                  </div>

                  <p className="max-w-[700px] text-[11px] leading-7 text-white/[0.5]">
                    {layer.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#7c3aed] to-transparent transition-all duration-500 group-hover:w-full" />
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
   CAPABILITIES
========================================================= */

function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40"
    >
      <div className="absolute right-[-15%] top-[10%] h-[700px] w-[700px] rounded-full bg-[#7c3aed]/[0.05] blur-[200px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <SectionLabel number="03">
          Integration Capabilities
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Connect every
            <span className="block text-white/25">
              critical layer.
            </span>
          </h2>

          <p className="max-w-[440px] text-[13px] leading-8 text-white/[0.54]">
            Integration engineering creates reliable interfaces
            between robotic hardware, industrial systems and modern
            software infrastructure.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {integrationCapabilities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="capability-card group relative min-h-[390px] overflow-hidden rounded-[25px] border border-[#8b5cf6]/15 bg-[#08060d] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#8b5cf6]/35"
              >
                <div className="absolute -right-20 -top-20 h-[240px] w-[240px] rounded-full bg-[#7c3aed]/[0.06] blur-[80px]" />

                <div className="relative">
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

                    <p className="mt-5 text-[12px] leading-7 text-white/[0.52]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-transparent transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DATA FLOW VISUAL
========================================================= */

function DataFlowVisual() {
  const systems = [
    {
      icon: Bot,
      title: "Robot",
      label: "MACHINE",
    },
    {
      icon: Cpu,
      title: "Control",
      label: "PLC",
    },
    {
      icon: Server,
      title: "Edge",
      label: "COMPUTE",
    },
    {
      icon: Database,
      title: "Operations",
      label: "MES",
    },
    {
      icon: Cloud,
      title: "Cloud",
      label: "PLATFORM",
    },
    {
      icon: BrainCircuit,
      title: "AI",
      label: "INTELLIGENCE",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-[30px] border border-[#8b5cf6]/15 bg-[#07050b] p-5 md:p-8">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.035)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.06] blur-[130px]" />

      <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-5">
        <div className="flex items-center gap-3">
          <Radio
            size={13}
            className="text-[#a78bfa]"
          />

          <span className="font-mono text-[6px] tracking-[0.15em] text-white/35">
            MACHINE DATA PIPELINE
          </span>
        </div>

        <span className="font-mono text-[5px] text-[#b9a4ff]/60">
          ONLINE
        </span>
      </div>

      <div className="relative mt-10 grid gap-3 md:grid-cols-6">
        {systems.map((system, index) => {
          const Icon = system.icon;

          return (
            <div
              key={system.title}
              className="relative"
            >
              <div className="data-system relative z-10 flex min-h-[170px] flex-col items-center justify-center rounded-[18px] border border-[#8b5cf6]/15 bg-[#09060e]/90 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07]">
                  <Icon
                    size={18}
                    strokeWidth={1}
                    className="text-[#c4b5fd]"
                  />
                </div>

                <span className="mt-5 text-[10px] font-medium text-white/65">
                  {system.title}
                </span>

                <span className="mt-2 font-mono text-[5px] tracking-[0.1em] text-white/20">
                  {system.label}
                </span>
              </div>

              {index < systems.length - 1 && (
                <div className="absolute left-[90%] top-1/2 z-20 hidden w-[30%] items-center md:flex">
                  <span className="h-px flex-1 bg-[#8b5cf6]/35" />

                  <ChevronRight
                    size={10}
                    className="text-[#a78bfa]"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="relative mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          ["MACHINE STATE", "STREAMING"],
          ["EVENTS", "CONNECTED"],
          ["TELEMETRY", "ACTIVE"],
          ["AI CONTEXT", "AVAILABLE"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-[12px] border border-white/[0.06] bg-black/30 p-4"
          >
            <span className="block font-mono text-[5px] text-white/20">
              {label}
            </span>

            <span className="mt-2 block font-mono text-[6px] text-[#b9a4ff]/65">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   DATA SECTION
========================================================= */

function ConnectedData() {
  return (
    <section className="relative overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <SectionLabel number="04">
              Connected Data
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Machine data
              <span className="block text-white/25">
                should move.
              </span>
            </h2>

            <p className="mt-8 max-w-[500px] text-[13px] leading-8 text-white/[0.54]">
              Robot integration creates structured paths for machine
              states, production events and operational telemetry to
              move between physical equipment and digital systems.
            </p>

            <div className="mt-10 space-y-3">
              {[
                "Machine states",
                "Robot events",
                "Production signals",
                "Vision results",
                "System telemetry",
                "Operational context",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/[0.07] py-4"
                >
                  <CheckCircle2
                    size={13}
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

          <DataFlowVisual />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROTOCOL STRIP
========================================================= */

function ProtocolSection() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel number="05">
              Interfaces
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Different systems.
              <span className="block text-white/25">
                One architecture.
              </span>
            </h2>

            <p className="mt-8 max-w-[500px] text-[13px] leading-8 text-white/[0.54]">
              Robotic environments frequently contain multiple
              communication methods and technology generations. The
              integration layer creates clear boundaries between them.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {protocols.map((protocol, index) => (
              <div
                key={protocol}
                className="protocol-card group relative min-h-[130px] overflow-hidden rounded-[17px] border border-white/[0.07] bg-[#08060d] p-5 transition duration-300 hover:border-[#8b5cf6]/30"
              >
                <span className="font-mono text-[5px] text-[#a78bfa]/45">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="absolute bottom-5 left-5">
                  <Plug
                    size={13}
                    strokeWidth={1}
                    className="mb-3 text-[#8b5cf6]/55"
                  />

                  <span className="text-[10px] text-white/55">
                    {protocol}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#8b5cf6]/70 transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   INTEGRATION PROCESS
========================================================= */

function IntegrationProcess() {
  return (
    <section className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="06">
          Integration Delivery
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Connect with
            <span className="block text-white/25">
              engineering discipline.
            </span>
          </h2>

          <p className="max-w-[430px] text-[13px] leading-8 text-white/[0.54]">
            Successful robot integration requires more than connecting
            cables or APIs. The complete system must be understood,
            tested and operated as one architecture.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-[7%] right-[7%] top-[42px] hidden h-px bg-gradient-to-r from-[#6d28d9]/20 via-[#c4b5fd]/45 to-[#6d28d9]/20 lg:block" />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {integrationFlow.map((item) => (
              <article
                key={item.step}
                className="process-card group relative min-h-[340px] overflow-hidden rounded-[22px] border border-[#8b5cf6]/15 bg-[#08060d] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#8b5cf6]/35"
              >
                <div className="relative z-10 flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#0c0811]">
                  <span className="font-mono text-[6px] text-[#c4b5fd]/70">
                    {item.step}
                  </span>
                </div>

                <div className="mt-20">
                  <h3 className="text-2xl font-medium tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[10px] leading-6 text-white/[0.49]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   RELIABILITY
========================================================= */

function Reliability() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="absolute left-[-20%] top-[20%] h-[700px] w-[700px] rounded-full bg-[#7c3aed]/[0.04] blur-[190px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.72fr_1.28fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel number="07">
              Integration Reliability
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Connected
              <span className="block text-white/25">
                must also mean reliable.
              </span>
            </h2>

            <p className="mt-8 max-w-[500px] text-[13px] leading-8 text-white/[0.54]">
              Every new connection introduces a dependency.
              Integration architecture should therefore consider
              ownership, observability, security, recovery and
              maintainability from the beginning.
            </p>

            <div className="mt-10 flex items-center gap-4 rounded-[17px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.035] p-5">
              <ShieldCheck
                size={20}
                strokeWidth={1}
                className="text-[#c4b5fd]"
              />

              <div>
                <span className="block font-mono text-[6px] tracking-[0.12em] text-white/25">
                  SYSTEM PRINCIPLE
                </span>

                <span className="mt-2 block text-[11px] text-white/55">
                  Integrate for operations, not only commissioning.
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {architectureChecks.map((item, index) => (
              <article
                key={item.title}
                className="reliability-row group grid gap-5 rounded-[20px] border border-white/[0.07] bg-[#08060d] p-6 transition duration-300 hover:translate-x-2 hover:border-[#8b5cf6]/30 md:grid-cols-[60px_1fr_1.5fr] md:items-center md:p-8"
              >
                <span className="font-mono text-[6px] text-[#a78bfa]/50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-lg font-medium text-white/70">
                  {item.title}
                </h3>

                <p className="text-[11px] leading-7 text-white/[0.49]">
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
   OUTCOMES
========================================================= */

function Outcomes() {
  return (
    <section className="relative overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="08">
          Integration Outcomes
        </SectionLabel>

        <h2 className="mt-8 max-w-[950px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
          Turn robotic equipment
          <span className="block text-white/25">
            into connected infrastructure.
          </span>
        </h2>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((item, index) => (
            <article
              key={item.title}
              className="outcome-card group relative min-h-[310px] overflow-hidden rounded-[23px] border border-[#8b5cf6]/15 bg-[#08060d] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#8b5cf6]/35"
            >
              <div className="absolute -right-16 -top-16 h-[190px] w-[190px] rounded-full bg-[#7c3aed]/[0.06] blur-[70px]" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[6px] text-[#a78bfa]/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Activity
                    size={13}
                    strokeWidth={1}
                    className="text-[#8b5cf6]/45"
                  />
                </div>

                <div className="mt-20">
                  <h3 className="text-2xl font-medium tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[11px] leading-7 text-white/[0.5]">
                    {item.text}
                  </p>
                </div>
              </div>
            </article>
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
    <section className="relative overflow-hidden bg-black px-5 py-36 md:px-10 md:py-52">
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.08] blur-[220px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.025)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="relative mx-auto max-w-[1450px] text-center">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
          <Network
            size={11}
            className="text-[#c4b5fd]"
          />

          <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
            HYI.AI / ROBOT INTEGRATION
          </span>
        </div>

        <h2 className="mx-auto mt-10 max-w-[1300px] text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.09em]">
          Connect
          <span className="text-white/20">
            {" "}machines.
          </span>

          <span className="block">
            Connect
            <span className="text-white/20">
              {" "}systems.
            </span>
          </span>

          <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
            Connect intelligence.
          </span>
        </h2>

        <p className="mx-auto mt-10 max-w-[700px] text-[14px] leading-8 text-white/[0.54]">
          Build a robotics architecture where machines, software,
          industrial systems and AI can operate as one connected
          environment.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="#architecture"
            className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-8 py-4 text-[12px] font-medium shadow-[0_0_45px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
          >
            Explore Integration

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

export default function RobotIntegrationPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes integrationCoreRotate {
              from {
                transform: rotate(0deg);
              }

              to {
                transform: rotate(360deg);
              }
            }

            @keyframes integrationCorePulse {
              0%, 100% {
                transform: scale(.9);
                opacity: .35;
              }

              50% {
                transform: scale(1.18);
                opacity: .8;
              }
            }

            @keyframes networkPathMove {
              from {
                stroke-dashoffset: 0;
              }

              to {
                stroke-dashoffset: -56;
              }
            }

            @keyframes nodeFloat {
              0%, 100% {
                transform: translateY(0);
              }

              50% {
                transform: translateY(-6px);
              }
            }

            @keyframes integrationMarquee {
              from {
                transform: translateX(0);
              }

              to {
                transform: translateX(-50%);
              }
            }

            @keyframes heroEnter {
              from {
                opacity: 0;
                transform: translateY(35px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes cardEnter {
              from {
                opacity: 0;
                transform: translateY(20px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes dataPulse {
              0%, 100% {
                box-shadow: inset 0 0 0 rgba(139,92,246,0);
              }

              50% {
                box-shadow: inset 0 0 35px rgba(139,92,246,.035);
              }
            }

            .integration-core {
              animation: integrationCoreRotate 18s linear infinite;
            }

            .core-pulse {
              animation: integrationCorePulse 3s ease-in-out infinite;
            }

            .network-path {
              animation: networkPathMove 2.8s linear infinite;
            }

            .path-two {
              animation-delay: .35s;
            }

            .path-three {
              animation-delay: .7s;
            }

            .path-four {
              animation-delay: 1.05s;
            }

            .path-five {
              animation-delay: 1.4s;
            }

            .path-six {
              animation-delay: 1.75s;
            }

            .network-node {
              animation: nodeFloat 4s ease-in-out infinite;
            }

            .integration-marquee {
              animation: integrationMarquee 32s linear infinite;
            }

            .hero-copy {
              animation: heroEnter .9s cubic-bezier(.16,1,.3,1) both;
            }

            .architecture-row,
            .capability-card,
            .process-card,
            .reliability-row,
            .outcome-card,
            .protocol-card {
              animation: cardEnter .8s cubic-bezier(.16,1,.3,1) both;
            }

            .data-system {
              animation: dataPulse 3.5s ease-in-out infinite;
            }

            @media (prefers-reduced-motion: reduce) {
              .integration-core,
              .core-pulse,
              .network-path,
              .network-node,
              .integration-marquee,
              .hero-copy,
              .architecture-row,
              .capability-card,
              .process-card,
              .reliability-row,
              .outcome-card,
              .protocol-card,
              .data-system {
                animation: none !important;
              }
            }
          `,
        }}
      />

      <Header />

      <Hero />

      <IntegrationStrip />

      <IntegrationIntro />

      <Architecture />

      <Capabilities />

      <ConnectedData />

      <ProtocolSection />

      <IntegrationProcess />

      <Reliability />

      <Outcomes />

      <FinalCTA />

      <Footer />
    </main>
  );
}