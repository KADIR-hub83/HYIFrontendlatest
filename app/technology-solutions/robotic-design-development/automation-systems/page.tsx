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
  Cpu,
  Database,
  Eye,
  Factory,
  Gauge,
  GitBranch,
  Layers3,
  Network,
  Play,
  Radio,
  RefreshCcw,
  Server,
  Settings2,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const automationCapabilities = [
  {
    number: "01",
    title: "Robotic Cells",
    description:
      "Coordinate robots, tooling, fixtures, sensors and surrounding machines as structured production cells with clearly defined operating states.",
    icon: Bot,
  },
  {
    number: "02",
    title: "PLC & Control",
    description:
      "Build machine-control logic that synchronizes equipment states, sequences, interlocks and production operations.",
    icon: Cpu,
  },
  {
    number: "03",
    title: "Machine Vision",
    description:
      "Use visual perception for inspection, localization, identification and intelligent robotic guidance inside automated environments.",
    icon: Eye,
  },
  {
    number: "04",
    title: "Workflow Automation",
    description:
      "Coordinate machine operations through repeatable workflows that connect production events with downstream automated actions.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "Safety Systems",
    description:
      "Structure automation around defined safety states, access controls, machine interlocks and controlled recovery behavior.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "AI Intelligence",
    description:
      "Introduce AI-driven perception, analytics and decision support where intelligent capabilities can improve robotic operations.",
    icon: BrainCircuit,
  },
];

const automationLayers = [
  {
    number: "L01",
    title: "Physical Automation",
    description:
      "Robots, conveyors, actuators, tooling, fixtures and production equipment perform physical operations.",
    icon: Bot,
    label: "MACHINE",
  },
  {
    number: "L02",
    title: "Machine Control",
    description:
      "PLCs, robot controllers and motion systems execute deterministic machine logic and coordinate equipment states.",
    icon: Cpu,
    label: "CONTROL",
  },
  {
    number: "L03",
    title: "Perception",
    description:
      "Cameras and sensors provide environmental information required for inspection, guidance and automated decisions.",
    icon: Eye,
    label: "SENSING",
  },
  {
    number: "L04",
    title: "Orchestration",
    description:
      "Automation workflows coordinate tasks, machine states, production sequences and communication across the system.",
    icon: Workflow,
    label: "LOGIC",
  },
  {
    number: "L05",
    title: "Operations",
    description:
      "Operational software exposes machine health, production events, alerts and automation performance to engineering teams.",
    icon: Activity,
    label: "OPERATE",
  },
  {
    number: "L06",
    title: "AI Intelligence",
    description:
      "AI services can interpret information, identify patterns and support higher-level automation decisions.",
    icon: BrainCircuit,
    label: "INTELLIGENCE",
  },
];

const workflow = [
  {
    step: "01",
    title: "Sense",
    text: "Sensors and vision systems capture information from the operating environment.",
    icon: Radio,
  },
  {
    step: "02",
    title: "Interpret",
    text: "Control and perception software converts signals into usable machine context.",
    icon: Eye,
  },
  {
    step: "03",
    title: "Decide",
    text: "Automation logic determines the next permitted operation from the current system state.",
    icon: GitBranch,
  },
  {
    step: "04",
    title: "Execute",
    text: "Robots and automated equipment perform the required physical operation.",
    icon: Zap,
  },
  {
    step: "05",
    title: "Verify",
    text: "Sensors, controllers and software confirm whether the operation completed correctly.",
    icon: CheckCircle2,
  },
  {
    step: "06",
    title: "Continue",
    text: "The system advances the workflow or enters controlled exception handling.",
    icon: RefreshCcw,
  },
];

const systemPrinciples = [
  {
    title: "Deterministic control",
    description:
      "Time-critical machine behavior remains predictable and clearly separated from higher-level intelligence.",
  },
  {
    title: "Visible machine state",
    description:
      "Operators and engineering teams should understand what the automation system is doing and why.",
  },
  {
    title: "Controlled exceptions",
    description:
      "Faults, unavailable equipment and unexpected conditions should enter defined recovery paths.",
  },
  {
    title: "Modular architecture",
    description:
      "Automation cells and software services should remain understandable, replaceable and maintainable.",
  },
  {
    title: "Operational observability",
    description:
      "Machine events, states and failures should produce useful telemetry for troubleshooting and improvement.",
  },
  {
    title: "Safety by design",
    description:
      "Automation logic must operate within the safety architecture and physical constraints of the system.",
  },
];

const industries = [
  {
    title: "Manufacturing",
    code: "MFG",
    text: "Robotic production cells, material movement, machine tending and coordinated assembly workflows.",
  },
  {
    title: "Warehousing",
    code: "LOG",
    text: "Automated movement, sorting, handling and coordinated robotic logistics operations.",
  },
  {
    title: "Quality",
    code: "QMS",
    text: "Vision-enabled inspection and automated quality workflows integrated with production systems.",
  },
  {
    title: "Packaging",
    code: "PKG",
    text: "Automated handling, picking, packing, palletizing and production-line coordination.",
  },
];

const deliveryStages = [
  ["01", "Understand", "Processes, equipment and constraints"],
  ["02", "Design", "Control and automation architecture"],
  ["03", "Develop", "Software, logic and integrations"],
  ["04", "Validate", "Simulation and controlled testing"],
  ["05", "Commission", "Deployment into operations"],
  ["06", "Optimize", "Observe and improve performance"],
];

/* =========================================================
   SMALL COMPONENTS
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
      <span className="font-mono text-[8px] text-[#a78bfa]">
        {number}
      </span>

      <span className="h-px w-10 bg-[#8b5cf6]/40" />

      <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/35">
        {children}
      </span>
    </div>
  );
}

function StatusDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a78bfa] opacity-40" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a78bfa]" />
    </span>
  );
}

/* =========================================================
   AUTOMATION CONTROL MODEL
========================================================= */

function AutomationCell({
  className,
  icon: Icon,
  title,
  code,
  delay = "0s",
}: {
  className: string;
  icon: React.ElementType;
  title: string;
  code: string;
  delay?: string;
}) {
  return (
    <div
      className={`automation-cell absolute z-30 ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="min-w-[120px] rounded-[15px] border border-[#8b5cf6]/20 bg-[#0a0710]/95 p-3 shadow-[0_15px_40px_rgba(0,0,0,.5)] backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07]">
            <Icon
              size={14}
              strokeWidth={1}
              className="text-[#c4b5fd]"
            />
          </div>

          <div>
            <span className="block text-[8px] font-medium text-white/65">
              {title}
            </span>

            <span className="mt-1 block font-mono text-[5px] tracking-[0.1em] text-white/25">
              {code}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationControlModel() {
  return (
    <div className="relative mx-auto h-[650px] w-full max-w-[720px] overflow-hidden rounded-[30px] border border-[#8b5cf6]/20 bg-[#060409] shadow-[0_50px_120px_rgba(0,0,0,.55)]">
      {/* GRID */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.045)_1px,transparent_1px)] bg-[size:38px_38px]" />

      {/* GLOW */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.09] blur-[130px]" />

      {/* TOP BAR */}

      <div className="absolute left-0 right-0 top-0 z-40 flex h-[52px] items-center justify-between border-b border-[#8b5cf6]/15 bg-[#09060d]/95 px-5 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <Factory
            size={13}
            strokeWidth={1}
            className="text-[#a78bfa]"
          />

          <span className="font-mono text-[6px] tracking-[0.15em] text-white/35">
            AUTOMATION CONTROL SYSTEM
          </span>
        </div>

        <div className="flex items-center gap-2">
          <StatusDot />

          <span className="font-mono text-[5px] tracking-[0.12em] text-[#c4b5fd]/70">
            PRODUCTION ACTIVE
          </span>
        </div>
      </div>

      {/* SVG CONNECTIONS */}

      <svg
        viewBox="0 0 720 650"
        fill="none"
        className="absolute inset-0 z-10 h-full w-full"
      >
        <defs>
          <linearGradient
            id="automation-line"
            x1="100"
            y1="100"
            x2="620"
            y2="550"
          >
            <stop stopColor="#6d28d9" />
            <stop offset=".5" stopColor="#c4b5fd" />
            <stop offset="1" stopColor="#e879f9" />
          </linearGradient>
        </defs>

        <path
          d="M360 325 L360 125"
          stroke="rgba(139,92,246,.17)"
        />

        <path
          d="M360 325 L555 190"
          stroke="rgba(139,92,246,.17)"
        />

        <path
          d="M360 325 L575 390"
          stroke="rgba(139,92,246,.17)"
        />

        <path
          d="M360 325 L360 530"
          stroke="rgba(139,92,246,.17)"
        />

        <path
          d="M360 325 L145 390"
          stroke="rgba(139,92,246,.17)"
        />

        <path
          d="M360 325 L165 190"
          stroke="rgba(139,92,246,.17)"
        />

        {[
          "M360 325 L360 125",
          "M360 325 L555 190",
          "M360 325 L575 390",
          "M360 325 L360 530",
          "M360 325 L145 390",
          "M360 325 L165 190",
        ].map((path, index) => (
          <path
            key={path}
            d={path}
            className={`flow-line flow-line-${index}`}
            stroke="url(#automation-line)"
            strokeWidth="1.5"
            strokeDasharray="5 10"
          />
        ))}

        {[
          [360, 125],
          [555, 190],
          [575, 390],
          [360, 530],
          [145, 390],
          [165, 190],
        ].map(([cx, cy], index) => (
          <circle
            key={index}
            cx={cx}
            cy={cy}
            r="3"
            fill="#c4b5fd"
          />
        ))}
      </svg>

      {/* CENTRAL CORE */}

      <div className="absolute left-1/2 top-1/2 z-30 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2">
        <div className="automation-ring absolute inset-0 rounded-full border border-dashed border-[#8b5cf6]/35" />

        <div className="automation-ring-reverse absolute inset-[15px] rounded-full border border-[#8b5cf6]/20" />

        <div className="automation-core-glow absolute inset-[28px] rounded-full bg-[#7c3aed]/20 blur-[22px]" />

        <div className="absolute inset-[36px] flex flex-col items-center justify-center rounded-full border border-[#a78bfa]/40 bg-[#0d0913] shadow-[0_0_70px_rgba(124,58,237,.3)]">
          <BrainCircuit
            size={28}
            strokeWidth={0.9}
            className="text-[#ddd6fe]"
          />

          <span className="mt-2 font-mono text-[5px] tracking-[0.12em] text-white/30">
            AI CONTROL
          </span>
        </div>
      </div>

      {/* CELLS */}

      <AutomationCell
        className="left-1/2 top-[70px] -translate-x-1/2"
        icon={Bot}
        title="Robot Cell"
        code="CELL / 01"
      />

      <AutomationCell
        className="right-[35px] top-[150px]"
        icon={Eye}
        title="Vision"
        code="PERCEPTION"
        delay=".4s"
      />

      <AutomationCell
        className="right-[20px] top-[350px]"
        icon={Cpu}
        title="PLC"
        code="CONTROL"
        delay=".8s"
      />

      <AutomationCell
        className="bottom-[45px] left-1/2 -translate-x-1/2"
        icon={Activity}
        title="Telemetry"
        code="OBSERVE"
        delay="1.2s"
      />

      <AutomationCell
        className="left-[20px] top-[350px]"
        icon={ShieldCheck}
        title="Safety"
        code="INTERLOCK"
        delay="1.6s"
      />

      <AutomationCell
        className="left-[35px] top-[150px]"
        icon={Workflow}
        title="Workflow"
        code="SEQUENCE"
        delay="2s"
      />

      {/* LOWER TELEMETRY */}

      <div className="absolute bottom-4 left-4 z-40 hidden items-center gap-5 rounded-[10px] border border-[#8b5cf6]/10 bg-black/50 px-4 py-2 backdrop-blur-md sm:flex">
        <div>
          <span className="block font-mono text-[4px] text-white/20">
            CELL STATE
          </span>

          <span className="mt-1 block font-mono text-[5px] text-[#c4b5fd]/65">
            RUNNING
          </span>
        </div>

        <div className="h-5 w-px bg-white/[0.07]" />

        <div>
          <span className="block font-mono text-[4px] text-white/20">
            CONTROL
          </span>

          <span className="mt-1 block font-mono text-[5px] text-[#c4b5fd]/65">
            SYNCHRONIZED
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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.025)_1px,transparent_1px)] bg-[size:55px_55px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />

      <div className="absolute right-[-15%] top-[-20%] h-[900px] w-[900px] rounded-full bg-[#7c3aed]/[0.07] blur-[230px]" />

      <div className="absolute bottom-[-30%] left-[-15%] h-[800px] w-[800px] rounded-full bg-[#9333ea]/[0.045] blur-[220px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <StatusDot />

            <span className="font-mono text-[7px] tracking-[0.2em] text-white/40">
              HYI.AI / ROBOTIC AUTOMATION SYSTEMS
            </span>
          </div>

          <span className="hidden font-mono text-[7px] tracking-[0.18em] text-white/20 md:block">
            SENSE → DECIDE → EXECUTE → VERIFY
          </span>
        </div>

        <div className="grid min-h-[820px] items-center gap-16 py-16 lg:grid-cols-[.92fr_1.08fr]">
          <div className="hero-content relative z-20">
            <div className="flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
              <Factory
                size={11}
                className="text-[#c4b5fd]"
              />

              <span className="font-mono text-[7px] tracking-[0.17em] text-[#c4b5fd]/70">
                INTELLIGENT INDUSTRIAL AUTOMATION
              </span>
            </div>

            <h1 className="mt-9 max-w-[800px] text-[clamp(4.2rem,7.4vw,8rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              Machines
              <span className="block text-white/20">
                that move
              </span>

              work
              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
                {" "}forward.
              </span>
            </h1>

            <p className="mt-9 max-w-[620px] text-[14px] leading-8 text-white/[0.58] md:text-[16px] md:leading-9">
              HYI.AI designs robotic automation systems that connect
              physical machines, industrial control, machine vision,
              workflow orchestration and intelligent software into
              coordinated production environments.
            </p>

            <div className="mt-11 flex flex-wrap gap-4">
              <a
                href="#automation"
                className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-7 py-4 text-[12px] font-medium shadow-[0_0_45px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
              >
                Explore Automation

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#architecture"
                className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.025] px-7 py-4 text-[12px] text-white/65 transition hover:border-[#8b5cf6]/40"
              >
                System Architecture

                <ChevronRight size={13} />
              </a>
            </div>

            <div className="mt-16 grid max-w-[660px] grid-cols-3 border-y border-white/[0.07] py-6">
              {[
                ["PHYSICAL", "Robotics"],
                ["CONTROL", "Automation"],
                ["INTELLIGENCE", "AI"],
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

          <AutomationControlModel />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MARQUEE
========================================================= */

function AutomationMarquee() {
  const items = [
    "ROBOTICS",
    "PLC",
    "MACHINE VISION",
    "CONTROL",
    "WORKFLOW",
    "SAFETY",
    "SENSORS",
    "AI",
    "TELEMETRY",
    "AUTOMATION",
  ];

  return (
    <section className="overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] py-6">
      <div className="automation-marquee flex w-max whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center"
          >
            <span className="px-10 font-mono text-[7px] tracking-[0.22em] text-white/35 md:px-14">
              {item}
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
   INTRODUCTION
========================================================= */

function Introduction() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-32 md:px-10 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.045] blur-[200px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.35fr_1.65fr]">
          <SectionLabel number="01">
            Automation Systems
          </SectionLabel>

          <div>
            <h2 className="max-w-[1200px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[88px]">
              Automation is not
              <span className="text-white/25">
                {" "}one machine performing one task.
              </span>
            </h2>

            <div className="mt-16 grid gap-10 border-t border-white/[0.07] pt-10 md:grid-cols-2">
              <p className="max-w-[540px] text-[13px] leading-8 text-white/[0.57]">
                A complete robotic automation system combines physical
                equipment, controllers, sensors, perception,
                production logic and operational software into one
                coordinated environment.
              </p>

              <p className="max-w-[540px] text-[13px] leading-8 text-white/[0.57]">
                The objective is not simply to automate individual
                movements. The complete workflow must understand
                machine states, coordinate dependencies, handle
                exceptions and provide visibility to the people
                operating it.
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
      id="automation"
      className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="absolute right-[-15%] top-[5%] h-[700px] w-[700px] rounded-full bg-[#7c3aed]/[0.05] blur-[210px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <SectionLabel number="02">
          Automation Capabilities
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            One automation
            <span className="block text-white/25">
              environment.
            </span>
          </h2>

          <p className="max-w-[450px] text-[13px] leading-8 text-white/[0.55]">
            Each capability participates in a larger system where
            physical automation and digital intelligence remain
            synchronized.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {automationCapabilities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="automation-card group relative min-h-[390px] overflow-hidden rounded-[25px] border border-[#8b5cf6]/15 bg-[#08060d] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#8b5cf6]/40"
              >
                <div className="absolute -right-20 -top-20 h-[250px] w-[250px] rounded-full bg-[#7c3aed]/[0.065] blur-[85px]" />

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
   ARCHITECTURE
========================================================= */

function Architecture() {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.68fr_1.32fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel number="03">
              System Architecture
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Physical
              <span className="block text-white/25">
                to intelligent.
              </span>
            </h2>

            <p className="mt-8 max-w-[490px] text-[13px] leading-8 text-white/[0.55]">
              Robotic automation becomes easier to understand and
              operate when responsibilities are separated into clear
              architectural layers.
            </p>

            <div className="mt-10 rounded-[20px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.035] p-6">
              <div className="flex items-center gap-3">
                <Layers3
                  size={16}
                  strokeWidth={1}
                  className="text-[#c4b5fd]"
                />

                <span className="font-mono text-[6px] tracking-[0.13em] text-white/30">
                  AUTOMATION STACK
                </span>
              </div>

              <p className="mt-5 text-[11px] leading-7 text-white/[0.5]">
                Machine responsibilities stay explicit while data and
                control move through the architecture.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {automationLayers.map((layer) => {
              const Icon = layer.icon;

              return (
                <article
                  key={layer.number}
                  className="architecture-layer group relative grid gap-5 overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#08060d] p-6 transition duration-500 hover:translate-x-2 hover:border-[#8b5cf6]/35 md:grid-cols-[70px_1fr_1.5fr] md:items-center md:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07]">
                    <Icon
                      size={18}
                      strokeWidth={1}
                      className="text-[#c4b5fd]"
                    />
                  </div>

                  <div>
                    <span className="font-mono text-[6px] tracking-[0.12em] text-[#a78bfa]/55">
                      {layer.number} / {layer.label}
                    </span>

                    <h3 className="mt-2 text-xl font-medium text-white/75">
                      {layer.title}
                    </h3>
                  </div>

                  <p className="text-[11px] leading-7 text-white/[0.51]">
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
   WORKFLOW ENGINE
========================================================= */

function WorkflowEngine() {
  return (
    <section className="relative overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="04">
          Automation Cycle
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Sense. Decide.
            <span className="block text-white/25">
              Execute. Verify.
            </span>
          </h2>

          <p className="max-w-[450px] text-[13px] leading-8 text-white/[0.55]">
            An automation system continuously moves through machine
            context, control decisions, physical actions and
            verification.
          </p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-[7%] right-[7%] top-[42px] hidden h-px bg-gradient-to-r from-[#6d28d9]/20 via-[#c4b5fd]/45 to-[#6d28d9]/20 lg:block" />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {workflow.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.step}
                  className="workflow-card group relative min-h-[360px] overflow-hidden rounded-[22px] border border-[#8b5cf6]/15 bg-[#08060d] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#8b5cf6]/40"
                >
                  <div className="relative z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#0c0811]">
                    <Icon
                      size={15}
                      strokeWidth={1}
                      className="text-[#c4b5fd]"
                    />
                  </div>

                  <span className="mt-6 block font-mono text-[5px] text-[#a78bfa]/45">
                    STEP / {item.step}
                  </span>

                  <div className="mt-16">
                    <h3 className="text-2xl font-medium tracking-[-0.04em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[10px] leading-6 text-white/[0.5]">
                      {item.text}
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
   FACTORY CONTROL PANEL
========================================================= */

function FactoryControlPanel() {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-[#8b5cf6]/15 bg-[#07050b] p-5 md:p-8">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.035)_1px,transparent_1px)] bg-[size:38px_38px]" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.06] blur-[150px]" />

      <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-5">
        <div className="flex items-center gap-3">
          <Gauge
            size={13}
            className="text-[#a78bfa]"
          />

          <span className="font-mono text-[6px] tracking-[0.15em] text-white/35">
            AUTOMATION OPERATIONS
          </span>
        </div>

        <div className="flex items-center gap-2">
          <StatusDot />

          <span className="font-mono text-[5px] text-[#c4b5fd]/65">
            SYSTEM ONLINE
          </span>
        </div>
      </div>

      <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
        {[
          {
            title: "Robot Cell A",
            status: "RUNNING",
            icon: Bot,
          },
          {
            title: "Vision Station",
            status: "READY",
            icon: Eye,
          },
          {
            title: "PLC Controller",
            status: "SYNC",
            icon: Cpu,
          },
          {
            title: "Safety System",
            status: "ACTIVE",
            icon: ShieldCheck,
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="control-module rounded-[17px] border border-[#8b5cf6]/12 bg-[#09060e]/90 p-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
                  <Icon
                    size={15}
                    strokeWidth={1}
                    className="text-[#c4b5fd]"
                  />
                </div>

                <span className="font-mono text-[5px] text-[#b9a4ff]/60">
                  {item.status}
                </span>
              </div>

              <span className="mt-8 block text-[10px] text-white/55">
                {item.title}
              </span>

              <div className="mt-5 flex h-[28px] items-end gap-[3px]">
                {[30, 60, 40, 80, 55, 90, 45, 70, 50, 82, 64, 95].map(
                  (height, index) => (
                    <span
                      key={index}
                      className="telemetry-bar flex-1 rounded-t-[1px] bg-[#8b5cf6]/35"
                      style={{
                        height: `${height}%`,
                        animationDelay: `${index * 0.08}s`,
                      }}
                    />
                  ),
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative mt-3 rounded-[17px] border border-[#8b5cf6]/12 bg-[#09060e]/90 p-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[6px] tracking-[0.12em] text-white/30">
            PRODUCTION SEQUENCE
          </span>

          <Play
            size={11}
            className="text-[#a78bfa]"
          />
        </div>

        <div className="mt-6 flex items-center gap-2">
          {[
            "LOAD",
            "SCAN",
            "PICK",
            "PROCESS",
            "VERIFY",
            "UNLOAD",
          ].map((item, index) => (
            <div
              key={item}
              className="flex flex-1 items-center"
            >
              <div className="flex-1 rounded-[8px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.04] px-2 py-3 text-center">
                <span className="font-mono text-[4px] text-white/35">
                  {item}
                </span>
              </div>

              {index < 5 && (
                <ChevronRight
                  size={8}
                  className="mx-1 shrink-0 text-[#8b5cf6]/50"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   OPERATIONS
========================================================= */

function Operations() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="absolute left-[-15%] top-[10%] h-[700px] w-[700px] rounded-full bg-[#7c3aed]/[0.045] blur-[200px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid items-center gap-16 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <SectionLabel number="05">
              Automation Operations
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              See what the
              <span className="block text-white/25">
                machines are doing.
              </span>
            </h2>

            <p className="mt-8 max-w-[500px] text-[13px] leading-8 text-white/[0.56]">
              Operational visibility turns automation from a black box
              into an understandable production system. Machine
              states, events and faults become available to the teams
              responsible for keeping operations moving.
            </p>

            <div className="mt-10 space-y-3">
              {[
                "Machine state visibility",
                "Production sequence monitoring",
                "Automation event tracking",
                "Fault and exception context",
                "System health telemetry",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/[0.07] py-4"
                >
                  <Activity
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

          <FactoryControlPanel />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PRINCIPLES
========================================================= */

function Principles() {
  return (
    <section className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="06">
          Engineering Principles
        </SectionLabel>

        <div className="mt-8 grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="max-w-[700px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Automation built
              <span className="block text-white/25">
                for operations.
              </span>
            </h2>

            <p className="mt-8 max-w-[500px] text-[13px] leading-8 text-white/[0.55]">
              The best automation architecture considers what happens
              after commissioning: failures, maintenance, change,
              expansion and daily operations.
            </p>
          </div>

          <div className="space-y-3">
            {systemPrinciples.map((item, index) => (
              <article
                key={item.title}
                className="principle-row group grid gap-5 rounded-[19px] border border-white/[0.07] bg-[#08060d] p-6 transition duration-300 hover:translate-x-2 hover:border-[#8b5cf6]/30 md:grid-cols-[55px_1fr_1.4fr] md:items-center"
              >
                <span className="font-mono text-[6px] text-[#a78bfa]/50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-[14px] font-medium text-white/70">
                  {item.title}
                </h3>

                <p className="text-[10px] leading-6 text-white/[0.49]">
                  {item.description}
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
   INDUSTRIES
========================================================= */

function Industries() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="07">
          Automation Environments
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Built around
            <span className="block text-white/25">
              real operations.
            </span>
          </h2>

          <p className="max-w-[440px] text-[13px] leading-8 text-white/[0.55]">
            Automation architecture changes with the physical process,
            production constraints and operating environment.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {industries.map((item, index) => (
            <article
              key={item.title}
              className="industry-card group relative min-h-[320px] overflow-hidden rounded-[25px] border border-[#8b5cf6]/15 bg-[#08060d] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#8b5cf6]/40 md:p-9"
            >
              <div className="absolute right-[-70px] top-[-70px] h-[260px] w-[260px] rounded-full border border-[#8b5cf6]/10" />
              <div className="absolute right-[-35px] top-[-35px] h-[180px] w-[180px] rounded-full border border-[#8b5cf6]/10" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[6px] tracking-[0.15em] text-[#a78bfa]/55">
                    {item.code}
                  </span>

                  <span className="font-mono text-[6px] text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-24">
                  <h3 className="text-3xl font-medium tracking-[-0.05em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-[520px] text-[12px] leading-7 text-white/[0.52]">
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
   DELIVERY
========================================================= */

function Delivery() {
  return (
    <section className="relative overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="08">
          Delivery System
        </SectionLabel>

        <h2 className="mt-8 max-w-[950px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
          From physical process
          <span className="block text-white/25">
            to operational automation.
          </span>
        </h2>

        <div className="mt-20 border-t border-white/[0.08]">
          {deliveryStages.map(([number, title, text]) => (
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
   FINAL STATEMENT
========================================================= */

function FinalStatement() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-36 md:px-10 md:py-56">
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.08] blur-[230px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.025)_1px,transparent_1px)] bg-[size:55px_55px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="relative mx-auto max-w-[1450px] text-center">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
          <Settings2
            size={11}
            className="text-[#c4b5fd]"
          />

          <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
            HYI.AI / AUTOMATION SYSTEMS
          </span>
        </div>

        <h2 className="mx-auto mt-10 max-w-[1350px] text-[clamp(4rem,8vw,8.6rem)] font-semibold leading-[0.82] tracking-[-0.09em]">
          Automate
          <span className="text-white/20">
            {" "}the movement.
          </span>

          <span className="block">
            Orchestrate
            <span className="text-white/20">
              {" "}the system.
            </span>
          </span>

          <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
            Intelligence above it.
          </span>
        </h2>

        <p className="mx-auto mt-10 max-w-[720px] text-[14px] leading-8 text-white/[0.55]">
          Build robotic automation where machines, control systems,
          perception and software operate together as one coordinated
          production environment.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="#automation"
            className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-8 py-4 text-[12px] font-medium shadow-[0_0_45px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
          >
            Explore Automation

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

export default function RoboticAutomationSystemsPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes rotateAutomationRing {
              from {
                transform: rotate(0deg);
              }

              to {
                transform: rotate(360deg);
              }
            }

            @keyframes rotateAutomationRingReverse {
              from {
                transform: rotate(360deg);
              }

              to {
                transform: rotate(0deg);
              }
            }

            @keyframes automationCorePulse {
              0%, 100% {
                transform: scale(.9);
                opacity: .35;
              }

              50% {
                transform: scale(1.18);
                opacity: .85;
              }
            }

            @keyframes automationFlow {
              from {
                stroke-dashoffset: 0;
              }

              to {
                stroke-dashoffset: -60;
              }
            }

            @keyframes automationCellFloat {
              0%, 100% {
                transform: translateY(0);
              }

              50% {
                transform: translateY(-6px);
              }
            }

            @keyframes automationMarqueeMove {
              from {
                transform: translateX(0);
              }

              to {
                transform: translateX(-50%);
              }
            }

            @keyframes automationHeroEnter {
              from {
                opacity: 0;
                transform: translateY(35px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes telemetryMove {
              0%, 100% {
                transform: scaleY(.55);
                opacity: .35;
              }

              50% {
                transform: scaleY(1);
                opacity: .85;
              }
            }

            @keyframes modulePulse {
              0%, 100% {
                box-shadow: inset 0 0 0 rgba(139,92,246,0);
              }

              50% {
                box-shadow: inset 0 0 35px rgba(139,92,246,.035);
              }
            }

            .automation-ring {
              animation: rotateAutomationRing 18s linear infinite;
            }

            .automation-ring-reverse {
              animation: rotateAutomationRingReverse 13s linear infinite;
            }

            .automation-core-glow {
              animation: automationCorePulse 3s ease-in-out infinite;
            }

            .flow-line {
              animation: automationFlow 2.8s linear infinite;
            }

            .flow-line-1 {
              animation-delay: .3s;
            }

            .flow-line-2 {
              animation-delay: .6s;
            }

            .flow-line-3 {
              animation-delay: .9s;
            }

            .flow-line-4 {
              animation-delay: 1.2s;
            }

            .flow-line-5 {
              animation-delay: 1.5s;
            }

            .automation-cell {
              animation: automationCellFloat 4s ease-in-out infinite;
            }

            .automation-marquee {
              animation: automationMarqueeMove 30s linear infinite;
            }

            .hero-content {
              animation: automationHeroEnter .9s cubic-bezier(.16,1,.3,1) both;
            }

            .telemetry-bar {
              transform-origin: bottom;
              animation: telemetryMove 1.8s ease-in-out infinite;
            }

            .control-module {
              animation: modulePulse 3.5s ease-in-out infinite;
            }

            @media (prefers-reduced-motion: reduce) {
              .automation-ring,
              .automation-ring-reverse,
              .automation-core-glow,
              .flow-line,
              .automation-cell,
              .automation-marquee,
              .hero-content,
              .telemetry-bar,
              .control-module {
                animation: none !important;
              }
            }
          `,
        }}
      />

      <Header />

      <Hero />

      <AutomationMarquee />

      <Introduction />

      <Capabilities />

      <Architecture />

      <WorkflowEngine />

      <Operations />

      <Principles />

      <Industries />

      <Delivery />

      <FinalStatement />

      <Footer />
    </main>
  );
}