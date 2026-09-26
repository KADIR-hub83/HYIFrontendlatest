import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Clock3,
  Cpu,
  Database,
  Gauge,
  HeartPulse,
  History,
  LifeBuoy,
  Radio,
  RefreshCcw,
  Search,
  Server,
  Settings2,
  ShieldCheck,
  Signal,
  Sparkles,
  Stethoscope,
  TimerReset,
  Wrench,
  Zap,
} from "lucide-react";

import type { ElementType, ReactNode } from "react";

/* =========================================================
   DATA
========================================================= */

const healthMetrics = [
  {
    label: "Motor Health",
    value: "NORMAL",
    detail: "Stable",
    icon: Zap,
    bars: [38, 44, 51, 48, 58, 55, 61, 57, 64, 62, 67, 65],
  },
  {
    label: "Joint Vibration",
    value: "MONITORED",
    detail: "Nominal",
    icon: Activity,
    bars: [52, 48, 56, 51, 59, 54, 62, 58, 61, 55, 57, 53],
  },
  {
    label: "Controller",
    value: "ONLINE",
    detail: "Healthy",
    icon: Cpu,
    bars: [68, 66, 70, 69, 72, 71, 75, 72, 74, 76, 73, 75],
  },
];

const maintenanceCapabilities = [
  {
    number: "01",
    title: "Condition Monitoring",
    description:
      "Continuously observe robot states, equipment signals and operating conditions so engineering teams can understand how critical assets are behaving.",
    icon: HeartPulse,
  },
  {
    number: "02",
    title: "Predictive Maintenance",
    description:
      "Use historical operating information and analytical models to identify maintenance signals before they develop into disruptive equipment problems.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Fault Diagnostics",
    description:
      "Combine alarms, machine events, controller information and service history to provide engineers with stronger context during troubleshooting.",
    icon: Stethoscope,
  },
  {
    number: "04",
    title: "Asset Lifecycle",
    description:
      "Maintain structured visibility into robot components, service events, maintenance intervals and operational lifecycle information.",
    icon: History,
  },
  {
    number: "05",
    title: "Maintenance Planning",
    description:
      "Turn equipment condition into structured maintenance actions that can be prioritized around operational requirements and production windows.",
    icon: Wrench,
  },
  {
    number: "06",
    title: "Performance Monitoring",
    description:
      "Track operational behavior over time to identify unusual changes in cycle performance, equipment state and robotic system behavior.",
    icon: Gauge,
  },
];

const signals = [
  {
    code: "SIG / 01",
    title: "Motor current",
    description:
      "Changes in motor current can provide useful context when evaluating mechanical loading and actuator behavior.",
    icon: Zap,
  },
  {
    code: "SIG / 02",
    title: "Vibration",
    description:
      "Vibration trends can help engineering teams investigate changing mechanical conditions across robotic equipment.",
    icon: Activity,
  },
  {
    code: "SIG / 03",
    title: "Temperature",
    description:
      "Thermal information adds another operational signal for motors, drives, controllers and electrical systems.",
    icon: Gauge,
  },
  {
    code: "SIG / 04",
    title: "Cycle behavior",
    description:
      "Changes in cycle characteristics may reveal process, mechanical or control conditions that deserve investigation.",
    icon: RefreshCcw,
  },
  {
    code: "SIG / 05",
    title: "Controller events",
    description:
      "Robot and machine controller events provide essential context for understanding faults and operating conditions.",
    icon: Cpu,
  },
  {
    code: "SIG / 06",
    title: "Service history",
    description:
      "Maintenance records help teams connect current equipment behavior with previous interventions and component changes.",
    icon: History,
  },
];

const maintenanceFlow = [
  {
    number: "01",
    title: "Observe",
    description:
      "Collect relevant robot, controller, sensor and operational information.",
    icon: Radio,
  },
  {
    number: "02",
    title: "Detect",
    description:
      "Identify unusual patterns, machine events or maintenance indicators.",
    icon: Search,
  },
  {
    number: "03",
    title: "Diagnose",
    description:
      "Combine available context to help engineers investigate probable causes.",
    icon: Stethoscope,
  },
  {
    number: "04",
    title: "Prioritize",
    description:
      "Determine which maintenance conditions require immediate or planned attention.",
    icon: AlertTriangle,
  },
  {
    number: "05",
    title: "Maintain",
    description:
      "Perform the required inspection, repair, adjustment or replacement.",
    icon: Wrench,
  },
  {
    number: "06",
    title: "Verify",
    description:
      "Confirm equipment condition after maintenance and return it to operation.",
    icon: CheckCircle2,
  },
];

const maintenanceLayers = [
  {
    number: "L01",
    title: "Robot & Equipment",
    label: "PHYSICAL",
    description:
      "Robots, motors, joints, drives, tooling and surrounding automated equipment create the physical maintenance environment.",
    icon: Bot,
  },
  {
    number: "L02",
    title: "Machine Signals",
    label: "SIGNALS",
    description:
      "Controllers, sensors and automation systems expose operational information that can support condition assessment.",
    icon: Signal,
  },
  {
    number: "L03",
    title: "Operational Data",
    label: "DATA",
    description:
      "Machine events and historical information are organized so they can be inspected, compared and analyzed over time.",
    icon: Database,
  },
  {
    number: "L04",
    title: "Health Analytics",
    label: "ANALYTICS",
    description:
      "Rules, trends and analytical methods convert raw equipment information into useful maintenance indicators.",
    icon: BarChart3,
  },
  {
    number: "L05",
    title: "AI Diagnostics",
    label: "AI",
    description:
      "AI can assist with pattern interpretation, maintenance context and engineering decision support where appropriate.",
    icon: BrainCircuit,
  },
  {
    number: "L06",
    title: "Maintenance Action",
    label: "ACTION",
    description:
      "Maintenance teams translate equipment insight into inspection, servicing, repair and verification workflows.",
    icon: Wrench,
  },
];

const principles = [
  {
    number: "01",
    title: "Observe trends, not isolated numbers.",
    description:
      "Maintenance decisions become more useful when equipment behavior is understood over time and in operating context.",
  },
  {
    number: "02",
    title: "Keep engineering judgment in the loop.",
    description:
      "Analytics should support technicians and engineers rather than hide the evidence they need to make maintenance decisions.",
  },
  {
    number: "03",
    title: "Connect faults with machine context.",
    description:
      "An alarm becomes more useful when operating state, preceding events and maintenance history can be inspected together.",
  },
  {
    number: "04",
    title: "Design for maintainability.",
    description:
      "Robotic systems should expose meaningful diagnostics and remain understandable after deployment.",
  },
  {
    number: "05",
    title: "Close the maintenance loop.",
    description:
      "Completed maintenance should become part of the asset history so future diagnosis has better context.",
  },
];

const serviceStages = [
  ["01", "Baseline", "Understand assets and normal operating behavior"],
  ["02", "Instrument", "Identify useful signals and machine information"],
  ["03", "Observe", "Build operational visibility and history"],
  ["04", "Analyze", "Detect changes and maintenance indicators"],
  ["05", "Respond", "Plan and execute maintenance actions"],
  ["06", "Improve", "Use service outcomes to improve future decisions"],
];

/* =========================================================
   REUSABLE
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

      <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/35">
        {children}
      </span>
    </div>
  );
}

function LiveStatus({ text = "MONITORING" }: { text?: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a78bfa] opacity-40" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a78bfa]" />
      </span>

      <span className="font-mono text-[5px] tracking-[0.14em] text-[#c4b5fd]/70">
        {text}
      </span>
    </div>
  );
}

/* =========================================================
   ROBOT HEALTH MODEL
========================================================= */

function HealthMetric({
  label,
  value,
  detail,
  icon: Icon,
  bars,
}: {
  label: string;
  value: string;
  detail: string;
  icon: ElementType;
  bars: number[];
}) {
  return (
    <div className="health-card rounded-[16px] border border-[#8b5cf6]/15 bg-[#09060e]/90 p-4 backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-[9px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
            <Icon
              size={12}
              strokeWidth={1}
              className="text-[#c4b5fd]"
            />
          </div>

          <div>
            <span className="block text-[7px] text-white/55">
              {label}
            </span>

            <span className="mt-1 block font-mono text-[4px] text-white/20">
              {detail}
            </span>
          </div>
        </div>

        <span className="font-mono text-[5px] text-[#c4b5fd]/65">
          {value}
        </span>
      </div>

      <div className="mt-5 flex h-[25px] items-end gap-[3px]">
        {bars.map((height, index) => (
          <span
            key={index}
            className="health-bar flex-1 rounded-t-[1px] bg-[#8b5cf6]/35"
            style={{
              height: `${height}%`,
              animationDelay: `${index * 0.09}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function RobotHealthModel() {
  return (
    <div className="relative mx-auto h-[670px] w-full max-w-[720px] overflow-hidden rounded-[32px] border border-[#8b5cf6]/20 bg-[#060409] shadow-[0_50px_120px_rgba(0,0,0,.6)]">
      {/* background grid */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.045)_1px,transparent_1px)] bg-[size:38px_38px]" />

      <div className="absolute left-1/2 top-[45%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.1] blur-[140px]" />

      {/* header */}

      <div className="absolute left-0 right-0 top-0 z-40 flex h-[54px] items-center justify-between border-b border-[#8b5cf6]/15 bg-[#09060d]/95 px-5 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <HeartPulse
            size={13}
            strokeWidth={1}
            className="text-[#c4b5fd]"
          />

          <span className="font-mono text-[6px] tracking-[0.15em] text-white/35">
            ROBOT HEALTH INTELLIGENCE
          </span>
        </div>

        <LiveStatus text="LIVE HEALTH" />
      </div>

      {/* central scanner */}

      <div className="absolute left-1/2 top-[245px] z-20 h-[310px] w-[310px] -translate-x-1/2">
        <div className="health-ring absolute inset-0 rounded-full border border-dashed border-[#8b5cf6]/25" />

        <div className="health-ring-reverse absolute inset-[25px] rounded-full border border-[#8b5cf6]/15" />

        <div className="absolute inset-[55px] rounded-full border border-[#a78bfa]/20 bg-[#8b5cf6]/[0.025]" />

        <div className="scanner-line absolute left-1/2 top-1/2 h-px w-[135px] origin-left bg-gradient-to-r from-[#c4b5fd] to-transparent" />

        <div className="absolute left-1/2 top-1/2 flex h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#a78bfa]/35 bg-[#0c0811] shadow-[0_0_70px_rgba(124,58,237,.25)]">
          <Bot
            size={31}
            strokeWidth={0.8}
            className="text-[#ddd6fe]"
          />

          <span className="mt-2 font-mono text-[5px] tracking-[0.12em] text-white/30">
            ROBOT / 01
          </span>
        </div>

        {[
          ["top-[15px] left-1/2 -translate-x-1/2", "J1"],
          ["right-[8px] top-1/2 -translate-y-1/2", "J2"],
          ["bottom-[15px] left-1/2 -translate-x-1/2", "J3"],
          ["left-[8px] top-1/2 -translate-y-1/2", "J4"],
        ].map(([position, label]) => (
          <div
            key={label}
            className={`absolute ${position} flex h-9 w-9 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#0a0710]`}
          >
            <span className="font-mono text-[5px] text-[#c4b5fd]/60">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* metrics */}

      <div className="absolute left-5 right-5 top-[75px] z-30 grid gap-3 sm:grid-cols-3">
        {healthMetrics.map((metric) => (
          <HealthMetric
            key={metric.label}
            {...metric}
          />
        ))}
      </div>

      {/* status lower */}

      <div className="absolute bottom-5 left-5 right-5 z-30 rounded-[18px] border border-[#8b5cf6]/15 bg-[#09060e]/95 p-5 backdrop-blur-xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <span className="font-mono text-[5px] tracking-[0.14em] text-white/25">
              MAINTENANCE ASSESSMENT
            </span>

            <div className="mt-2 flex items-center gap-3">
              <CheckCircle2
                size={13}
                className="text-[#c4b5fd]"
              />

              <span className="text-[9px] text-white/60">
                System condition within monitored operating profile
              </span>
            </div>
          </div>

          <div className="rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
            <span className="font-mono text-[5px] text-[#c4b5fd]/65">
              CONTINUE MONITORING
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
          <LiveStatus text="ROBOT HEALTH ONLINE" />

          <span className="hidden font-mono text-[7px] tracking-[0.18em] text-white/20 md:block">
            OBSERVE → DETECT → DIAGNOSE → MAINTAIN
          </span>
        </div>

        <div className="grid min-h-[820px] items-center gap-16 py-16 lg:grid-cols-[.94fr_1.06fr]">
          <div className="hero-copy relative z-20">
            <div className="flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
              <Stethoscope
                size={11}
                strokeWidth={1}
                className="text-[#c4b5fd]"
              />

              <span className="font-mono text-[7px] tracking-[0.17em] text-[#c4b5fd]/70">
                ROBOTIC MAINTENANCE
              </span>
            </div>

            <h1 className="mt-9 max-w-[800px] text-[clamp(4.1rem,7.3vw,7.8rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              Keep robots
              <span className="block text-white/20">
                ready for
              </span>

              what&apos;s
              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
                {" "}next.
              </span>
            </h1>

            <p className="mt-9 max-w-[620px] text-[14px] leading-8 text-white/[0.58] md:text-[16px] md:leading-9">
              HYI.AI helps build robotic maintenance systems that
              combine equipment monitoring, diagnostic context,
              maintenance history and AI-assisted analytics to make
              complex automation easier to understand and maintain.
            </p>

            <div className="mt-11 flex flex-wrap gap-4">
              <a
                href="#maintenance"
                className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-7 py-4 text-[12px] font-medium shadow-[0_0_45px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
              >
                Explore Maintenance

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#health"
                className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.025] px-7 py-4 text-[12px] text-white/65 transition hover:border-[#8b5cf6]/40"
              >
                Health Architecture

                <ChevronRight size={13} />
              </a>
            </div>

            <div className="mt-16 grid max-w-[660px] grid-cols-3 border-y border-white/[0.07] py-6">
              {[
                ["OBSERVE", "Machine health"],
                ["UNDERSTAND", "Fault context"],
                ["MAINTAIN", "Asset lifecycle"],
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

          <RobotHealthModel />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MARQUEE
========================================================= */

function MaintenanceMarquee() {
  const words = [
    "ROBOT HEALTH",
    "DIAGNOSTICS",
    "VIBRATION",
    "MOTOR",
    "CONTROLLER",
    "SERVICE",
    "LIFECYCLE",
    "AI",
    "CONDITION",
    "MAINTENANCE",
  ];

  return (
    <section className="overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] py-6">
      <div className="maintenance-marquee flex w-max whitespace-nowrap">
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

function MaintenanceIntroduction() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-32 md:px-10 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.045] blur-[200px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.35fr_1.65fr]">
          <SectionLabel number="01">
            Maintenance Intelligence
          </SectionLabel>

          <div>
            <h2 className="max-w-[1200px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[86px]">
              Maintenance starts
              <span className="text-white/25">
                {" "}before a robot stops.
              </span>
            </h2>

            <div className="mt-16 grid gap-10 border-t border-white/[0.07] pt-10 md:grid-cols-2">
              <p className="max-w-[540px] text-[13px] leading-8 text-white/[0.57]">
                Industrial robots operate through interconnected
                mechanical, electrical, control and software systems.
                When maintenance information remains fragmented,
                troubleshooting becomes slower and asset condition is
                harder to understand.
              </p>

              <p className="max-w-[540px] text-[13px] leading-8 text-white/[0.57]">
                A maintenance intelligence layer brings operational
                signals, machine events and service history together
                so technicians can investigate equipment with stronger
                context.
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

function MaintenanceCapabilities() {
  return (
    <section
      id="maintenance"
      className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="absolute right-[-15%] top-0 h-[750px] w-[750px] rounded-full bg-[#7c3aed]/[0.05] blur-[220px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <SectionLabel number="02">
          Maintenance Capabilities
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Understand the
            <span className="block text-white/25">
              condition of automation.
            </span>
          </h2>

          <p className="max-w-[450px] text-[13px] leading-8 text-white/[0.55]">
            Maintenance becomes more structured when robot health,
            machine events and service information can be inspected
            together.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {maintenanceCapabilities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="maintenance-card group relative min-h-[390px] overflow-hidden rounded-[25px] border border-[#8b5cf6]/15 bg-[#08060d] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#8b5cf6]/40"
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
   SIGNALS
========================================================= */

function MaintenanceSignals() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel number="03">
              Equipment Signals
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Listen to
              <span className="block text-white/25">
                the machine.
              </span>
            </h2>

            <p className="mt-8 max-w-[500px] text-[13px] leading-8 text-white/[0.55]">
              Robots continuously produce operational information.
              Maintenance engineering determines which signals are
              useful, how they should be interpreted and when they
              deserve investigation.
            </p>

            <div className="mt-10 rounded-[22px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.035] p-6">
              <Signal
                size={18}
                strokeWidth={1}
                className="text-[#c4b5fd]"
              />

              <p className="mt-5 text-[11px] leading-7 text-white/[0.5]">
                A single signal rarely explains equipment health by
                itself. Operating context matters.
              </p>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {signals.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.code}
                  className="signal-card group relative min-h-[300px] overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#08060d] p-7 transition duration-500 hover:border-[#8b5cf6]/35"
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
                    {item.description}
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
   HEALTH ARCHITECTURE
========================================================= */

function HealthArchitecture() {
  return (
    <section
      id="health"
      className="relative overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="04">
          Health Architecture
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            From machine signal
            <span className="block text-white/25">
              to maintenance action.
            </span>
          </h2>

          <p className="max-w-[450px] text-[13px] leading-8 text-white/[0.55]">
            A maintainable robotics environment connects physical
            equipment with diagnostics, analytics and engineering
            workflows.
          </p>
        </div>

        <div className="mt-20 space-y-3">
          {maintenanceLayers.map((layer) => {
            const Icon = layer.icon;

            return (
              <article
                key={layer.number}
                className="architecture-row group relative grid gap-5 overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#08060d] p-6 transition duration-500 hover:translate-x-2 hover:border-[#8b5cf6]/35 md:grid-cols-[70px_.8fr_1.4fr_100px] md:items-center md:p-8"
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
                  {layer.label}
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
   MAINTENANCE FLOW
========================================================= */

function MaintenanceFlow() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.04] blur-[220px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <SectionLabel number="05">
          Maintenance Loop
        </SectionLabel>

        <h2 className="mt-8 max-w-[950px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
          Detect.
          <span className="text-white/25">
            {" "}Understand.
          </span>

          <span className="block">
            Maintain.
            <span className="text-white/25">
              {" "}Verify.
            </span>
          </span>
        </h2>

        <div className="relative mt-20">
          <div className="absolute left-[7%] right-[7%] top-[42px] hidden h-px bg-gradient-to-r from-[#6d28d9]/20 via-[#c4b5fd]/45 to-[#6d28d9]/20 lg:block" />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {maintenanceFlow.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="flow-card group relative min-h-[350px] overflow-hidden rounded-[22px] border border-[#8b5cf6]/15 bg-[#08060d] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#8b5cf6]/40"
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
   AI DIAGNOSTICS
========================================================= */

function AIDiagnostics() {
  return (
    <section className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="absolute right-[-10%] top-[-10%] h-[800px] w-[800px] rounded-full bg-[#7c3aed]/[0.055] blur-[220px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel number="06">
              AI Diagnostics
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              More context
              <span className="block text-white/25">
                before the wrench.
              </span>
            </h2>

            <p className="mt-8 max-w-[520px] text-[13px] leading-8 text-white/[0.56]">
              AI can assist maintenance teams by organizing machine
              information, comparing patterns and surfacing relevant
              operational context. The goal is better investigation,
              not replacing engineering judgment.
            </p>

            <div className="mt-10 space-y-3">
              {[
                "Anomaly context",
                "Fault history retrieval",
                "Maintenance knowledge assistance",
                "Equipment trend interpretation",
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

          <div className="relative overflow-hidden rounded-[30px] border border-[#8b5cf6]/15 bg-[#07050b] p-6 md:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.035)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.08] blur-[150px]" />

            <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-5">
              <div className="flex items-center gap-3">
                <BrainCircuit
                  size={14}
                  className="text-[#c4b5fd]"
                />

                <span className="font-mono text-[6px] tracking-[0.14em] text-white/35">
                  DIAGNOSTIC INTELLIGENCE
                </span>
              </div>

              <LiveStatus text="ANALYZING" />
            </div>

            <div className="relative mt-6 rounded-[20px] border border-[#8b5cf6]/15 bg-[#09060e]/90 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[5px] text-white/25">
                    ASSET
                  </span>

                  <h3 className="mt-2 text-xl font-medium">
                    Robot Cell / RX-01
                  </h3>
                </div>

                <Bot
                  size={26}
                  strokeWidth={0.8}
                  className="text-[#c4b5fd]"
                />
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["EVENTS", "12"],
                  ["SIGNALS", "08"],
                  ["HISTORY", "ACTIVE"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[12px] border border-[#8b5cf6]/12 bg-[#8b5cf6]/[0.035] p-4"
                  >
                    <span className="block font-mono text-[4px] text-white/20">
                      {label}
                    </span>

                    <span className="mt-2 block font-mono text-[6px] text-[#c4b5fd]/65">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-3 space-y-2">
              {[
                {
                  label: "Operating signal context",
                  status: "AVAILABLE",
                },
                {
                  label: "Previous service records",
                  status: "MATCHED",
                },
                {
                  label: "Controller event history",
                  status: "REVIEWED",
                },
                {
                  label: "Maintenance recommendation",
                  status: "READY",
                },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="diagnostic-row flex items-center justify-between rounded-[14px] border border-white/[0.06] bg-[#09060e]/80 px-5 py-4"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] font-mono text-[5px] text-[#a78bfa]/60">
                      0{index + 1}
                    </span>

                    <span className="text-[9px] text-white/50">
                      {item.label}
                    </span>
                  </div>

                  <span className="font-mono text-[4px] text-[#c4b5fd]/55">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative mt-3 rounded-[16px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] p-5">
              <div className="flex items-start gap-4">
                <Sparkles
                  size={15}
                  className="mt-1 shrink-0 text-[#c4b5fd]"
                />

                <div>
                  <span className="font-mono text-[5px] tracking-[0.12em] text-[#c4b5fd]/60">
                    ENGINEERING CONTEXT
                  </span>

                  <p className="mt-3 text-[10px] leading-6 text-white/[0.5]">
                    Review current operating signals together with
                    controller history and recent service information
                    before determining the maintenance action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PRINCIPLES
========================================================= */

function MaintenancePrinciples() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <SectionLabel number="07">
              Maintenance Principles
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Built for
              <span className="block text-white/25">
                the long run.
              </span>
            </h2>

            <p className="mt-8 max-w-[490px] text-[13px] leading-8 text-white/[0.55]">
              Robotic maintenance should remain understandable,
              traceable and useful throughout the operating life of
              the system.
            </p>
          </div>

          <div className="border-t border-white/[0.08]">
            {principles.map((item) => (
              <article
                key={item.number}
                className="principle-row group grid gap-5 border-b border-white/[0.08] py-7 transition duration-300 hover:pl-4 md:grid-cols-[60px_1fr_1.3fr]"
              >
                <span className="font-mono text-[6px] text-[#a78bfa]/50">
                  {item.number}
                </span>

                <h3 className="text-[15px] font-medium leading-6 text-white/70">
                  {item.title}
                </h3>

                <p className="text-[10px] leading-6 text-white/[0.48]">
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
   SERVICE JOURNEY
========================================================= */

function ServiceJourney() {
  return (
    <section className="relative overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="08">
          Maintenance Engineering
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[950px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Build visibility.
            <span className="block text-white/25">
              Then improve response.
            </span>
          </h2>

          <div className="flex items-center gap-3">
            <TimerReset
              size={16}
              strokeWidth={1}
              className="text-[#a78bfa]"
            />

            <span className="font-mono text-[6px] tracking-[0.12em] text-white/30">
              ASSET LIFECYCLE
            </span>
          </div>
        </div>

        <div className="mt-20 border-t border-white/[0.08]">
          {serviceStages.map(([number, title, text]) => (
            <div
              key={number}
              className="service-row group grid gap-5 border-b border-white/[0.08] py-7 transition duration-300 hover:pl-4 md:grid-cols-[80px_1fr_1fr_40px] md:items-center"
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
   FINAL CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-36 md:px-10 md:py-56">
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.08] blur-[230px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.025)_1px,transparent_1px)] bg-[size:55px_55px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="relative mx-auto max-w-[1450px] text-center">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
          <LifeBuoy
            size={11}
            className="text-[#c4b5fd]"
          />

          <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
            HYI.AI / ROBOTIC MAINTENANCE
          </span>
        </div>

        <h2 className="mx-auto mt-10 max-w-[1350px] text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.09em]">
          Know the machine.
          <span className="block text-white/20">
            Understand the signal.
          </span>

          <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
            Maintain with context.
          </span>
        </h2>

        <p className="mx-auto mt-10 max-w-[720px] text-[14px] leading-8 text-white/[0.55]">
          Build robotic maintenance systems that connect equipment
          condition, operational history and engineering intelligence
          into a clearer maintenance workflow.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="#maintenance"
            className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-8 py-4 text-[12px] font-medium shadow-[0_0_45px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
          >
            Explore Robot Health

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

export default function RoboticMaintenancePage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes healthRingRotate {
              from {
                transform: rotate(0deg);
              }

              to {
                transform: rotate(360deg);
              }
            }

            @keyframes healthRingReverse {
              from {
                transform: rotate(360deg);
              }

              to {
                transform: rotate(0deg);
              }
            }

            @keyframes scannerRotation {
              from {
                transform: rotate(0deg);
              }

              to {
                transform: rotate(360deg);
              }
            }

            @keyframes healthBarAnimation {
              0%, 100% {
                transform: scaleY(.55);
                opacity: .35;
              }

              50% {
                transform: scaleY(1);
                opacity: .9;
              }
            }

            @keyframes maintenanceMarqueeAnimation {
              from {
                transform: translateX(0);
              }

              to {
                transform: translateX(-50%);
              }
            }

            @keyframes heroMaintenanceEnter {
              from {
                opacity: 0;
                transform: translateY(35px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes healthCardPulse {
              0%, 100% {
                box-shadow: inset 0 0 0 rgba(139,92,246,0);
              }

              50% {
                box-shadow: inset 0 0 35px rgba(139,92,246,.035);
              }
            }

            @keyframes diagnosticPulse {
              0%, 100% {
                border-color: rgba(255,255,255,.06);
              }

              50% {
                border-color: rgba(139,92,246,.22);
              }
            }

            @keyframes subtleFloat {
              0%, 100% {
                transform: translateY(0);
              }

              50% {
                transform: translateY(-4px);
              }
            }

            .health-ring {
              animation: healthRingRotate 20s linear infinite;
            }

            .health-ring-reverse {
              animation: healthRingReverse 14s linear infinite;
            }

            .scanner-line {
              animation: scannerRotation 4.5s linear infinite;
            }

            .health-bar {
              transform-origin: bottom;
              animation: healthBarAnimation 2s ease-in-out infinite;
            }

            .maintenance-marquee {
              animation: maintenanceMarqueeAnimation 32s linear infinite;
            }

            .hero-copy {
              animation: heroMaintenanceEnter .9s cubic-bezier(.16,1,.3,1) both;
            }

            .health-card {
              animation: healthCardPulse 4s ease-in-out infinite;
            }

            .diagnostic-row {
              animation: diagnosticPulse 3s ease-in-out infinite;
            }

            .maintenance-card:hover,
            .signal-card:hover,
            .flow-card:hover {
              box-shadow: 0 25px 80px rgba(0,0,0,.35);
            }

            @media (prefers-reduced-motion: reduce) {
              .health-ring,
              .health-ring-reverse,
              .scanner-line,
              .health-bar,
              .maintenance-marquee,
              .hero-copy,
              .health-card,
              .diagnostic-row {
                animation: none !important;
              }
            }
          `,
        }}
      />

      <Header />

      <Hero />

      <MaintenanceMarquee />

      <MaintenanceIntroduction />

      <MaintenanceCapabilities />

      <MaintenanceSignals />

      <HealthArchitecture />

      <MaintenanceFlow />

      <AIDiagnostics />

      <MaintenancePrinciples />

      <ServiceJourney />

      <FinalCTA />

      <Footer />
    </main>
  );
}