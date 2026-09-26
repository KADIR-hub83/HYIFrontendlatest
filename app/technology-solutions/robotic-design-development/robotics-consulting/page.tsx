import Image from "next/image";

import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  Binary,
  Bot,
  Boxes,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleDot,
  Cpu,
  Crosshair,
  Database,
  Eye,
  Factory,
  Gauge,
  GitBranch,
  Hand,
  Layers3,
  Move3d,
  Network,
  Orbit,
  Radar,
  Rotate3d,
  ScanLine,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";

import type { ReactNode } from "react";

/* ============================================================
   ROBOTICS CONSULTING
   Route:
   /technology-solutions/robotic-design-development/robotics-consulting

   IMPORTANT:
   Put robot image here:
   public/robotics/robot-arm.png

   Single page.tsx
   Server Component safe
   CSS animation based
============================================================ */

/* ============================================================
   DATA
============================================================ */

const roboticsCapabilities = [
  {
    number: "01",
    code: "MECHANICAL",
    title: "Robotic System Design",
    description:
      "Translate operational requirements into practical robotic system concepts covering reach, payload, motion, tooling, workspace constraints, cycle requirements and maintainability.",
    icon: Rotate3d,
  },
  {
    number: "02",
    code: "CONTROL",
    title: "Motion & Control",
    description:
      "Design control architectures that coordinate motors, actuators, sensors, safety systems and motion logic while maintaining predictable machine behavior.",
    icon: Crosshair,
  },
  {
    number: "03",
    code: "PERCEPTION",
    title: "Machine Vision",
    description:
      "Introduce cameras, depth sensing and computer vision where robots need to locate objects, inspect environments, estimate position or understand changing workspaces.",
    icon: Eye,
  },
  {
    number: "04",
    code: "INTELLIGENCE",
    title: "AI for Robotics",
    description:
      "Evaluate where AI can improve perception, planning, inspection, anomaly detection, adaptive behavior and human-machine interaction without creating uncontrolled autonomy.",
    icon: BrainCircuit,
  },
  {
    number: "05",
    code: "SIMULATION",
    title: "Digital Simulation",
    description:
      "Use virtual environments to explore reach, collisions, layouts, sequences, throughput assumptions and robotic behavior before committing to physical deployment.",
    icon: Boxes,
  },
  {
    number: "06",
    code: "INTEGRATION",
    title: "System Integration",
    description:
      "Connect robotic equipment with production systems, sensors, PLCs, enterprise applications, data platforms and operational workflows.",
    icon: Network,
  },
  {
    number: "07",
    code: "SAFETY",
    title: "Safety Architecture",
    description:
      "Define safe operating boundaries, controlled states, emergency behavior, access requirements and human interaction considerations around robotic systems.",
    icon: ShieldCheck,
  },
  {
    number: "08",
    code: "OPERATIONS",
    title: "Robot Operations",
    description:
      "Design observability, maintenance, diagnostics and operational processes that help engineering teams understand robotic performance after deployment.",
    icon: Activity,
  },
];

const robotAnatomy = [
  {
    number: "01",
    label: "MECHANICAL",
    title: "Structure",
    description:
      "Links, joints, frames, bearings and mechanical assemblies define the physical movement envelope of the robotic system.",
    icon: Wrench,
  },
  {
    number: "02",
    label: "ACTUATION",
    title: "Motion",
    description:
      "Motors, drives and actuators convert control commands into controlled physical movement.",
    icon: Move3d,
  },
  {
    number: "03",
    label: "SENSING",
    title: "Awareness",
    description:
      "Encoders, cameras, force sensors and environmental sensing provide information about the robot and its surroundings.",
    icon: Radar,
  },
  {
    number: "04",
    label: "CONTROL",
    title: "Coordination",
    description:
      "Control systems translate planned behavior into synchronized movement while enforcing operating constraints.",
    icon: Cpu,
  },
  {
    number: "05",
    label: "AI",
    title: "Intelligence",
    description:
      "AI can add perception, classification, prediction, planning and adaptive decision support where deterministic logic alone is insufficient.",
    icon: BrainCircuit,
  },
  {
    number: "06",
    label: "TOOLING",
    title: "Interaction",
    description:
      "Grippers, tools and end effectors determine how the robot physically interacts with parts, products and environments.",
    icon: Hand,
  },
];

const autonomyLevels = [
  {
    level: "L0",
    title: "Manual",
    description:
      "Human operators directly perform the task with conventional tools and equipment.",
  },
  {
    level: "L1",
    title: "Assisted",
    description:
      "Technology assists the operator with sensing, positioning, guidance or repetitive movement.",
  },
  {
    level: "L2",
    title: "Automated",
    description:
      "A robotic system executes a predefined task sequence under controlled operating conditions.",
  },
  {
    level: "L3",
    title: "Adaptive",
    description:
      "The system adjusts selected actions using sensor feedback, vision or changing environmental information.",
  },
  {
    level: "L4",
    title: "Intelligent",
    description:
      "AI contributes to perception, planning or decision support while operating within defined constraints and controls.",
  },
];

const consultingQuestions = [
  {
    number: "01",
    question: "Should this process be robotic?",
    answer:
      "Begin with the work itself. Consider repetition, ergonomics, precision, variability, safety, throughput, environment and the economic value of changing the process.",
  },
  {
    number: "02",
    question: "What type of robot fits the task?",
    answer:
      "Robot selection should follow payload, reach, speed, degrees of freedom, accuracy, environment, tooling and human-interaction requirements rather than brand preference.",
  },
  {
    number: "03",
    question: "Where does AI add value?",
    answer:
      "AI becomes useful when the task requires perception, classification, prediction or adaptive interpretation that cannot be handled reliably through fixed deterministic rules alone.",
  },
  {
    number: "04",
    question: "How should safety be designed?",
    answer:
      "Safety must be considered at the system level across physical layout, robot behavior, tooling, access, operating states, control logic and human interaction.",
  },
  {
    number: "05",
    question: "How will the robot integrate?",
    answer:
      "Robotic systems frequently depend on upstream and downstream machines, PLCs, sensors, production software, data systems and operator workflows.",
  },
  {
    number: "06",
    question: "How will performance be observed?",
    answer:
      "Design diagnostics and operational telemetry from the beginning so teams can understand availability, faults, cycle behavior and maintenance requirements.",
  },
];

const industries = [
  {
    number: "01",
    title: "Manufacturing",
    description:
      "Material handling, assembly assistance, machine tending, inspection and repeatable production workflows.",
    icon: Factory,
  },
  {
    number: "02",
    title: "Warehousing",
    description:
      "Movement, sorting, picking assistance and automated handling across structured logistics environments.",
    icon: Boxes,
  },
  {
    number: "03",
    title: "Inspection",
    description:
      "Vision-guided robotic inspection for surfaces, components, environments and repeatable quality workflows.",
    icon: Eye,
  },
  {
    number: "04",
    title: "Laboratories",
    description:
      "Precise manipulation and repeatable execution for controlled research and testing workflows.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Infrastructure",
    description:
      "Robotic assistance for environments where repeatability, remote operation or reduced human exposure can be valuable.",
    icon: Layers3,
  },
  {
    number: "06",
    title: "Digital Operations",
    description:
      "Connected robotic systems integrated with data, AI and operational platforms for observable automation.",
    icon: Database,
  },
];

const consultingRoadmap = [
  {
    number: "01",
    code: "DISCOVER",
    title: "Understand the task",
    description:
      "Study the physical workflow, operators, materials, environment, constraints, failure modes and expected business outcome before selecting technology.",
  },
  {
    number: "02",
    code: "FEASIBILITY",
    title: "Test the robotic case",
    description:
      "Evaluate reach, payload, precision, variability, tooling, safety, integration complexity and operational economics.",
  },
  {
    number: "03",
    code: "CONCEPT",
    title: "Design the system",
    description:
      "Define robot class, mechanical configuration, end effector, sensing, controls, workspace and system interfaces.",
  },
  {
    number: "04",
    code: "SIMULATE",
    title: "Validate digitally",
    description:
      "Use simulation and virtual testing to explore motion, collisions, sequence logic, accessibility and layout assumptions.",
  },
  {
    number: "05",
    code: "PROTOTYPE",
    title: "Prove critical behavior",
    description:
      "Prototype uncertain interactions such as gripping, perception, positioning, motion or AI-assisted interpretation.",
  },
  {
    number: "06",
    code: "INTEGRATE",
    title: "Connect the environment",
    description:
      "Integrate controls, safety, sensors, machines, software and operational data into a coordinated robotic system.",
  },
  {
    number: "07",
    code: "DEPLOY",
    title: "Move into operation",
    description:
      "Commission the system, validate operating states and prepare teams to use, maintain and support the robotic solution.",
  },
  {
    number: "08",
    code: "EVOLVE",
    title: "Learn from operation",
    description:
      "Use telemetry, maintenance evidence and process feedback to improve reliability, performance and future automation decisions.",
  },
];

const principles = [
  "Design around the task, not the robot.",
  "Simulate uncertainty before physical deployment.",
  "Treat safety as a system architecture requirement.",
  "Use deterministic control where deterministic control is enough.",
  "Introduce AI only where interpretation creates real value.",
  "Design human interaction deliberately.",
  "Build diagnostics into the robotic system.",
  "Plan maintenance before production begins.",
];

const telemetry = [
  ["SYSTEM", "ONLINE"],
  ["MODE", "CONSULTING"],
  ["CONTROL", "READY"],
  ["VISION", "ACTIVE"],
  ["AI", "AVAILABLE"],
  ["SAFETY", "MONITORED"],
];

/* ============================================================
   SHARED SMALL COMPONENTS
============================================================ */

function Label({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[7px] tracking-[0.18em] text-white/[0.16]">
        {index}
      </span>

      <span className="h-px w-10 bg-white/[0.12]" />

      <span className="font-mono text-[7px] tracking-[0.22em] text-white/[0.38]">
        {children}
      </span>
    </div>
  );
}

/* ============================================================
   ROBOT HERO MODEL
============================================================ */

function RobotHeroModel() {
  return (
    <div className="relative mx-auto h-[650px] w-full max-w-[1100px] md:h-[820px]">
      {/* ======================================================
          BACKGROUND TECHNICAL GRID
      ====================================================== */}

      <div className="robot-grid absolute inset-[6%] opacity-50" />

      {/* horizontal guides */}

      <div className="absolute left-[4%] top-[18%] h-px w-[92%] bg-white/[0.035]" />
      <div className="absolute left-[4%] top-[50%] h-px w-[92%] bg-white/[0.05]" />
      <div className="absolute left-[4%] top-[82%] h-px w-[92%] bg-white/[0.035]" />

      {/* vertical guides */}

      <div className="absolute left-[18%] top-[5%] h-[90%] w-px bg-white/[0.035]" />
      <div className="absolute left-1/2 top-[5%] h-[90%] w-px bg-white/[0.05]" />
      <div className="absolute right-[18%] top-[5%] h-[90%] w-px bg-white/[0.035]" />

      {/* corner markers */}

      <div className="absolute left-[5%] top-[5%] h-12 w-12 border-l border-t border-white/[0.14]" />
      <div className="absolute right-[5%] top-[5%] h-12 w-12 border-r border-t border-white/[0.14]" />
      <div className="absolute bottom-[5%] left-[5%] h-12 w-12 border-b border-l border-white/[0.14]" />
      <div className="absolute bottom-[5%] right-[5%] h-12 w-12 border-b border-r border-white/[0.14]" />

      {/* ======================================================
          HUGE BACKGROUND TEXT
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
        <span className="text-[clamp(8rem,18vw,18rem)] font-semibold leading-none tracking-[-0.09em] text-white/[0.018]">
          ROBOT
        </span>
      </div>

      {/* ======================================================
          ROBOT IMAGE
      ====================================================== */}

      <div className="robot-float absolute inset-[7%] z-20">
        <Image
          src="/robotics/robot-arm.png"
          alt="Industrial robotic arm"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1100px"
          className="object-contain object-center grayscale"
        />
      </div>

      {/* ======================================================
          SCANNING LAYER
      ====================================================== */}

      <div className="pointer-events-none absolute inset-[8%] z-30 overflow-hidden">
        <div className="robot-scan-line absolute left-0 top-0 h-px w-full bg-white/[0.35]" />
      </div>

      {/* ======================================================
          TARGET RINGS
      ====================================================== */}

      <div className="target-pulse absolute left-[49%] top-[34%] z-30 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.14]" />

      <div className="target-pulse target-delay absolute left-[49%] top-[34%] z-30 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />

      <div className="absolute left-[49%] top-[34%] z-30 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.75]" />

      {/* ======================================================
          LEFT TELEMETRY
      ====================================================== */}

      <div className="absolute left-[2%] top-[24%] z-40 hidden w-[190px] lg:block">
        <div className="border-l border-white/[0.12] pl-5">
          <span className="font-mono text-[6px] tracking-[0.2em] text-white/[0.2]">
            ROBOT SYSTEM
          </span>

          <div className="mt-6 space-y-4">
            {telemetry.slice(0, 3).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center justify-between border-b border-white/[0.06] pb-3"
              >
                <span className="font-mono text-[6px] tracking-[0.14em] text-white/[0.17]">
                  {key}
                </span>

                <span className="font-mono text-[6px] tracking-[0.14em] text-white/[0.45]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================================================
          RIGHT TELEMETRY
      ====================================================== */}

      <div className="absolute right-[2%] top-[28%] z-40 hidden w-[190px] lg:block">
        <div className="border-r border-white/[0.12] pr-5 text-right">
          <span className="font-mono text-[6px] tracking-[0.2em] text-white/[0.2]">
            INTELLIGENCE
          </span>

          <div className="mt-6 space-y-4">
            {telemetry.slice(3).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center justify-between border-b border-white/[0.06] pb-3"
              >
                <span className="font-mono text-[6px] tracking-[0.14em] text-white/[0.17]">
                  {key}
                </span>

                <span className="font-mono text-[6px] tracking-[0.14em] text-white/[0.45]">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================================================
          FLOATING ENGINEERING LABELS
      ====================================================== */}

      <div className="floating-label absolute left-[15%] top-[14%] z-40 hidden md:block">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-white/[0.5]" />
          <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.28]">
            MOTION CONTROL
          </span>
        </div>
      </div>

      <div className="floating-label floating-delay-1 absolute right-[17%] top-[18%] z-40 hidden md:block">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-white/[0.5]" />
          <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.28]">
            MACHINE VISION
          </span>
        </div>
      </div>

      <div className="floating-label floating-delay-2 absolute bottom-[17%] left-[18%] z-40 hidden md:block">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-white/[0.5]" />
          <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.28]">
            SAFETY SYSTEM
          </span>
        </div>
      </div>

      <div className="floating-label floating-delay-3 absolute bottom-[19%] right-[18%] z-40 hidden md:block">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-white/[0.5]" />
          <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.28]">
            AI CONTROL
          </span>
        </div>
      </div>

      {/* ======================================================
          BOTTOM STATUS
      ====================================================== */}

      <div className="absolute bottom-[3%] left-1/2 z-40 flex -translate-x-1/2 items-center gap-5 whitespace-nowrap">
        <span className="status-pulse h-1.5 w-1.5 rounded-full bg-white/[0.75]" />

        <span className="font-mono text-[6px] tracking-[0.22em] text-white/[0.28]">
          ROBOTICS CONSULTING SYSTEM / ONLINE
        </span>
      </div>
    </div>
  );
}

/* ============================================================
   HERO
============================================================ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#000000] px-5 pb-20 pt-36 md:px-10 md:pb-32 md:pt-48">
      <div className="mx-auto max-w-[1500px]">
        {/* ====================================================
            TOP META BAR
        ==================================================== */}

        <div className="grid grid-cols-2 border-y border-white/[0.07] py-5 md:grid-cols-3">
          <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.3]">
            HYI.AI / ROBOTICS
          </span>

          <span className="hidden text-center font-mono text-[7px] tracking-[0.2em] text-white/[0.15] md:block">
            ROBOTIC DESIGN & DEVELOPMENT
          </span>

          <span className="text-right font-mono text-[7px] tracking-[0.2em] text-white/[0.3]">
            CONSULTING / 001
          </span>
        </div>

        {/* ====================================================
            HERO TITLE
        ==================================================== */}

        <div className="hero-intro mx-auto max-w-[1200px] pb-10 pt-24 text-center md:pt-32">
          <div className="mx-auto flex w-fit items-center gap-4">
            <span className="h-px w-10 bg-white/[0.14]" />

            <Bot
              size={13}
              strokeWidth={1}
              className="text-white/[0.45]"
            />

            <span className="font-mono text-[7px] tracking-[0.22em] text-white/[0.38]">
              ROBOTICS CONSULTING
            </span>

            <span className="h-px w-10 bg-white/[0.14]" />
          </div>

          <h1 className="mt-12 text-[clamp(4.7rem,10.5vw,10.8rem)] font-semibold leading-[0.77] tracking-[-0.095em]">
            Machines
            <span className="block text-white/[0.17]">
              that move.
            </span>
            Systems that
            <span className="block">
              understand.
            </span>
          </h1>

          <p className="mx-auto mt-12 max-w-[820px] text-[14px] leading-8 text-white/[0.48] md:text-[16px] md:leading-9">
            Design robotic systems around real physical work. HYI.AI
            Robotics Consulting connects mechanical engineering,
            controls, sensing, computer vision, AI, simulation, safety
            and system integration into practical robotic solutions.
          </p>

          <a
            href="#robot-system"
            className="group mx-auto mt-12 flex w-fit items-center gap-4 border-b border-white/[0.16] pb-3"
          >
            <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.45]">
              EXPLORE ROBOT SYSTEM
            </span>

            <ArrowDown
              size={11}
              className="text-white/[0.45] transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>
        </div>

        {/* ====================================================
            ROBOT MODEL
        ==================================================== */}

        <div
          id="robot-system"
          className="relative mt-10 border-t border-white/[0.07] pt-12"
        >
          <div className="absolute left-0 top-5 font-mono text-[6px] tracking-[0.18em] text-white/[0.16]">
            PHYSICAL INTELLIGENCE
          </div>

          <div className="absolute right-0 top-5 font-mono text-[6px] tracking-[0.18em] text-white/[0.16]">
            ROBOT / SYSTEM / MODEL
          </div>

          <RobotHeroModel />
        </div>

        {/* ====================================================
            HERO BOTTOM STRIP
        ==================================================== */}

        <div className="grid border-y border-white/[0.07] md:grid-cols-5">
          {[
            "MECHANICS",
            "CONTROL",
            "VISION",
            "AI",
            "SAFETY",
          ].map((item, index) => (
            <div
              key={item}
              className="flex items-center justify-between border-b border-white/[0.07] px-5 py-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <span className="font-mono text-[6px] text-white/[0.12]">
                0{index + 1}
              </span>

              <span className="font-mono text-[7px] tracking-[0.18em] text-white/[0.3]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MOVING ROBOTICS STRIP
============================================================ */

function RoboticsMarquee() {
  const items = [
    "ROBOT DESIGN",
    "MOTION",
    "PERCEPTION",
    "CONTROL",
    "COMPUTER VISION",
    "AI",
    "SIMULATION",
    "SAFETY",
    "INTEGRATION",
    "AUTONOMY",
  ];

  return (
    <section className="overflow-hidden border-b border-white/[0.07] bg-black py-7">
      <div className="robotics-marquee flex w-max whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center"
          >
            <span className="px-10 font-mono text-[7px] tracking-[0.22em] text-white/[0.28] md:px-16">
              {item}
            </span>

            <CircleDot
              size={7}
              className="text-white/[0.14]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   INTRO STATEMENT
============================================================ */

function RoboticsStatement() {
  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <Label index="01">
          PHYSICAL INTELLIGENCE
        </Label>

        <div className="mt-20 grid gap-16 lg:grid-cols-[.35fr_1.65fr]">
          <div className="hidden lg:block">
            <div className="flex flex-col gap-6">
              <Bot
                size={22}
                strokeWidth={1}
                className="text-white/[0.42]"
              />

              <Move3d
                size={22}
                strokeWidth={1}
                className="text-white/[0.28]"
              />

              <BrainCircuit
                size={22}
                strokeWidth={1}
                className="text-white/[0.17]"
              />
            </div>
          </div>

          <div>
            <h2 className="max-w-[1200px] text-[clamp(3.7rem,7.8vw,8rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              Robotics brings
              <span className="block text-white/[0.18]">
                software into
              </span>
              the physical world.
            </h2>

            <div className="mt-20 grid gap-10 border-t border-white/[0.08] pt-10 md:grid-cols-2">
              <p className="max-w-[600px] text-[14px] leading-8 text-white/[0.46]">
                A robot is not simply a mechanical arm. Useful robotic
                systems combine physical design, motion, sensing,
                controls, software, safety and operational integration.
              </p>

              <p className="max-w-[600px] text-[14px] leading-8 text-white/[0.46]">
                AI expands this system by allowing machines to interpret
                visual information, recognize patterns and support more
                adaptive behavior where controlled variability is
                required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CAPABILITIES
============================================================ */

function RoboticsCapabilities() {
  return (
    <section className="border-y border-white/[0.07] bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.6fr_1.4fr]">
          {/* left */}

          <div>
            <div className="lg:sticky lg:top-32">
              <Label index="02">
                CONSULTING CAPABILITIES
              </Label>

              <h2 className="mt-12 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
                Design the
                <span className="block text-white/[0.18]">
                  complete
                </span>
                robot system.
              </h2>

              <p className="mt-10 max-w-[460px] text-[13px] leading-8 text-white/[0.42]">
                Robotics consulting connects the physical machine with
                the software, intelligence and operating environment
                required to make it useful.
              </p>
            </div>
          </div>

          {/* right */}

          <div className="grid md:grid-cols-2">
            {roboticsCapabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="robot-card group relative min-h-[410px] overflow-hidden border border-white/[0.07] p-8"
                >
                  <div className="robot-card-fill absolute inset-0 translate-y-full bg-white/[0.022]" />

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center border border-white/[0.08]">
                        <Icon
                          size={18}
                          strokeWidth={1}
                          className="text-white/[0.52]"
                        />
                      </div>

                      <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.14]">
                        {item.number}
                      </span>
                    </div>

                    <div className="mt-24">
                      <span className="font-mono text-[6px] tracking-[0.2em] text-white/[0.2]">
                        {item.code}
                      </span>

                      <h3 className="mt-5 text-3xl font-medium leading-[1] tracking-[-0.05em]">
                        {item.title}
                      </h3>

                      <p className="mt-6 text-[12px] leading-7 text-white/[0.4]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ROBOT ANATOMY
============================================================ */

function RobotAnatomy() {
  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col justify-between gap-16 lg:flex-row">
          <Label index="03">
            ROBOT ANATOMY
          </Label>

          <h2 className="max-w-[950px] text-5xl font-semibold leading-[0.92] tracking-[-0.07em] md:text-8xl">
            Intelligence needs
            <span className="block text-white/[0.18]">
              a physical system.
            </span>
          </h2>
        </div>

        <div className="mt-28 border border-white/[0.08]">
          <div className="hidden grid-cols-[90px_170px_1fr_1.3fr] border-b border-white/[0.08] px-7 py-5 md:grid">
            <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.14]">
              ID
            </span>

            <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.14]">
              SYSTEM
            </span>

            <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.14]">
              FUNCTION
            </span>

            <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.14]">
              DESCRIPTION
            </span>
          </div>

          {robotAnatomy.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="anatomy-row group grid gap-8 border-b border-white/[0.07] px-7 py-9 last:border-b-0 md:grid-cols-[90px_170px_1fr_1.3fr] md:items-center"
              >
                <span className="font-mono text-[7px] text-white/[0.15]">
                  {item.number}
                </span>

                <div className="flex items-center gap-4">
                  <Icon
                    size={15}
                    strokeWidth={1}
                    className="text-white/[0.4]"
                  />

                  <span className="font-mono text-[6px] tracking-[0.17em] text-white/[0.25]">
                    {item.label}
                  </span>
                </div>

                <h3 className="text-2xl font-medium tracking-[-0.045em] md:text-3xl">
                  {item.title}
                </h3>

                <p className="max-w-[620px] text-[12px] leading-7 text-white/[0.4]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ROBOT IMAGE / ENGINEERING SECTION
============================================================ */

function EngineeringVisual() {
  return (
    <section className="border-y border-white/[0.07] bg-black px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1500px]">
        <Label index="04">
          ROBOTIC ENGINEERING
        </Label>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
          {/* ==================================================
              LARGE ROBOT IMAGE
          ================================================== */}

          <div className="robot-image-panel group relative min-h-[700px] overflow-hidden border border-white/[0.08]">
            <div className="absolute inset-0 robot-grid opacity-40" />

            <div className="absolute inset-[5%]">
              <Image
                src="/robotics/robot-arm.png"
                alt="Robotic arm engineering system"
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-contain grayscale transition-transform duration-[1800ms] group-hover:scale-[1.04]"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

            {/* scan */}

            <div className="robot-image-scan absolute left-0 top-0 h-px w-full bg-white/[0.25]" />

            {/* labels */}

            <div className="absolute left-7 top-7 flex items-center gap-3">
              <span className="status-pulse h-1.5 w-1.5 rounded-full bg-white/[0.7]" />

              <span className="font-mono text-[6px] tracking-[0.2em] text-white/[0.45]">
                ROBOTIC SYSTEM / ANALYSIS
              </span>
            </div>

            <div className="absolute bottom-10 left-8 right-8 md:left-12">
              <span className="font-mono text-[6px] tracking-[0.2em] text-white/[0.3]">
                MECHANICS × CONTROL × INTELLIGENCE
              </span>

              <h3 className="mt-5 max-w-[800px] text-4xl font-medium leading-[0.95] tracking-[-0.06em] md:text-7xl">
                Design movement
                <span className="block text-white/[0.4]">
                  with purpose.
                </span>
              </h3>
            </div>
          </div>

          {/* ==================================================
              SIDE ENGINEERING PANELS
          ================================================== */}

          <div className="grid gap-5">
            <div className="relative min-h-[335px] overflow-hidden border border-white/[0.08] p-8">
              <div className="absolute inset-0 robot-grid opacity-30" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <Crosshair
                    size={20}
                    strokeWidth={1}
                    className="text-white/[0.5]"
                  />

                  <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.14]">
                    MOTION / 01
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-medium tracking-[-0.05em]">
                    Motion architecture
                  </h3>

                  <p className="mt-5 text-[12px] leading-7 text-white/[0.4]">
                    Understand how reach, payload, joint movement,
                    velocity, precision and tooling requirements shape
                    the robotic mechanism.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[345px] overflow-hidden border border-white/[0.08] p-8">
              <div className="absolute inset-0 robot-grid opacity-30" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <BrainCircuit
                    size={20}
                    strokeWidth={1}
                    className="text-white/[0.5]"
                  />

                  <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.14]">
                    AI / 02
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-medium tracking-[-0.05em]">
                    Physical AI
                  </h3>

                  <p className="mt-5 text-[12px] leading-7 text-white/[0.4]">
                    Add machine intelligence where robots need to
                    perceive changing environments or interpret
                    information beyond fixed automation logic.
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

/* ============================================================
   AUTONOMY
============================================================ */

function AutonomySection() {
  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.5fr_1.5fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <Label index="05">
                AUTONOMY
              </Label>

              <h2 className="mt-12 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
                Autonomy is
                <span className="block text-white/[0.18]">
                  not binary.
                </span>
              </h2>

              <p className="mt-10 max-w-[430px] text-[13px] leading-8 text-white/[0.42]">
                Robotic systems can use different levels of automation
                and intelligence depending on task variability, risk and
                the amount of human oversight required.
              </p>
            </div>
          </div>

          <div>
            {autonomyLevels.map((item, index) => (
              <article
                key={item.level}
                className="autonomy-row group relative grid min-h-[190px] gap-8 border-t border-white/[0.08] py-9 md:grid-cols-[90px_.65fr_1fr]"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.12]">
                    <span className="font-mono text-[7px] tracking-[0.14em] text-white/[0.38]">
                      {item.level}
                    </span>
                  </div>

                  {index < autonomyLevels.length - 1 && (
                    <div className="absolute bottom-0 left-[23px] top-[84px] w-px bg-white/[0.05]" />
                  )}
                </div>

                <h3 className="text-3xl font-medium tracking-[-0.05em]">
                  {item.title}
                </h3>

                <p className="max-w-[600px] text-[12px] leading-7 text-white/[0.4]">
                  {item.description}
                </p>
              </article>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   AI PERCEPTION LAB
============================================================ */

function PerceptionLab() {
  return (
    <section className="border-y border-white/[0.07] bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col justify-between gap-16 lg:flex-row">
          <Label index="06">
            PERCEPTION LAB
          </Label>

          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.07em] md:text-8xl">
            Before a robot
            <span className="block text-white/[0.18]">
              can adapt,
            </span>
            it must perceive.
          </h2>
        </div>

        <div className="mt-28 grid gap-5 lg:grid-cols-[1fr_1fr]">
          {/* ==================================================
              MACHINE VISION VIEWPORT
          ================================================== */}

          <div className="relative min-h-[620px] overflow-hidden border border-white/[0.08]">
            <div className="absolute inset-0 robot-grid opacity-50" />

            <div className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 border border-white/[0.08]">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.04]" />
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/[0.04]" />

              <div className="absolute left-[18%] top-[20%] h-[24%] w-[28%] border border-white/[0.2]">
                <span className="absolute -top-5 left-0 font-mono text-[5px] tracking-[0.15em] text-white/[0.3]">
                  OBJECT / A
                </span>
              </div>

              <div className="absolute bottom-[17%] right-[13%] h-[20%] w-[31%] border border-white/[0.13]">
                <span className="absolute -top-5 right-0 font-mono text-[5px] tracking-[0.15em] text-white/[0.25]">
                  OBJECT / B
                </span>
              </div>

              <div className="vision-scan absolute left-0 top-0 h-px w-full bg-white/[0.35]" />
            </div>

            <div className="absolute left-7 top-7 flex items-center gap-3">
              <Eye
                size={15}
                strokeWidth={1}
                className="text-white/[0.45]"
              />

              <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.25]">
                MACHINE VISION
              </span>
            </div>

            <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
              <span className="font-mono text-[6px] tracking-[0.16em] text-white/[0.18]">
                PERCEPTION STREAM
              </span>

              <span className="font-mono text-[6px] tracking-[0.16em] text-white/[0.35]">
                ACTIVE
              </span>
            </div>
          </div>

          {/* ==================================================
              PERCEPTION TEXT
          ================================================== */}

          <div className="grid md:grid-cols-2">
            {[
              {
                icon: Eye,
                title: "Detection",
                text: "Identify relevant objects, parts, features or environmental conditions from visual information.",
              },
              {
                icon: Target,
                title: "Localization",
                text: "Estimate where objects or features are located relative to the robot and its workspace.",
              },
              {
                icon: ScanLine,
                title: "Inspection",
                text: "Use vision to support repeatable inspection and detection of visible anomalies.",
              },
              {
                icon: BrainCircuit,
                title: "Interpretation",
                text: "Apply AI where perception requires classification or contextual understanding beyond fixed thresholds.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group min-h-[310px] border border-white/[0.07] p-8"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={19}
                      strokeWidth={1}
                      className="text-white/[0.5]"
                    />

                    <span className="font-mono text-[6px] text-white/[0.12]">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-24">
                    <h3 className="text-3xl font-medium tracking-[-0.05em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[12px] leading-7 text-white/[0.4]">
                      {item.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONSULTING QUESTIONS
============================================================ */

function QuestionsSection() {
  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.6fr_1.4fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <Label index="07">
                CONSULTING QUESTIONS
              </Label>

              <h2 className="mt-12 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
                Start with
                <span className="block text-white/[0.18]">
                  the problem.
                </span>
                Then design
                <span className="block text-white/[0.18]">
                  the machine.
                </span>
              </h2>
            </div>
          </div>

          <div>
            {consultingQuestions.map((item) => (
              <article
                key={item.number}
                className="question-row group border-t border-white/[0.08] py-11"
              >
                <div className="grid gap-8 md:grid-cols-[70px_.8fr_1fr]">
                  <span className="font-mono text-[7px] text-white/[0.15]">
                    {item.number}
                  </span>

                  <h3 className="max-w-[470px] text-3xl font-medium leading-[1.04] tracking-[-0.05em] md:text-4xl">
                    {item.question}
                  </h3>

                  <p className="max-w-[620px] text-[12px] leading-7 text-white/[0.4]">
                    {item.answer}
                  </p>
                </div>
              </article>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ROBOT CONTROL CONSOLE
============================================================ */

function RobotControlConsole() {
  const controlItems = [
    {
      label: "JOINT CONTROL",
      status: "READY",
      value: "J01 — J06",
    },
    {
      label: "VISION",
      status: "ACTIVE",
      value: "PERCEPTION",
    },
    {
      label: "SAFETY",
      status: "MONITORED",
      value: "CONTROLLED",
    },
    {
      label: "AI ENGINE",
      status: "AVAILABLE",
      value: "ASSISTED",
    },
    {
      label: "TELEMETRY",
      status: "STREAMING",
      value: "OBSERVABLE",
    },
  ];

  return (
    <section className="border-y border-white/[0.07] bg-black px-5 py-40 md:px-10 md:py-56">
      <div className="mx-auto max-w-[1500px]">
        <Label index="08">
          ROBOT CONTROL
        </Label>

        <div className="mt-16 grid gap-16 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Physical action
              <span className="block text-white/[0.18]">
                needs controlled
              </span>
              intelligence.
            </h2>

            <p className="mt-10 max-w-[520px] text-[13px] leading-8 text-white/[0.42]">
              Robotic intelligence must eventually become physical
              movement. Controls provide the structured layer between
              software decisions and machine behavior.
            </p>
          </div>

          <div className="relative overflow-hidden border border-white/[0.09]">
            <div className="absolute inset-0 robot-grid opacity-30" />

            {/* top */}

            <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] px-7 py-5">
              <div className="flex items-center gap-3">
                <span className="status-pulse h-1.5 w-1.5 rounded-full bg-white/[0.65]" />

                <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.28]">
                  ROBOT_CONTROL.SYSTEM
                </span>
              </div>

              <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.15]">
                ONLINE
              </span>
            </div>

            {/* body */}

            <div className="relative z-10 p-7 md:p-10">
              <div className="grid gap-8 md:grid-cols-[.7fr_1.3fr]">
                {/* mini control visual */}

                <div className="relative min-h-[360px] border border-white/[0.07]">
                  <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]">
                    <div className="control-ring absolute inset-[18px] rounded-full border border-dashed border-white/[0.09]" />

                    <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.1]">
                      <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/[0.12]">
                        <Cpu
                          size={22}
                          strokeWidth={1}
                          className="text-white/[0.55]"
                        />
                      </div>
                    </div>

                    <span className="absolute left-1/2 top-[-3px] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/[0.6]" />
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex justify-between font-mono text-[5px] tracking-[0.15em] text-white/[0.15]">
                    <span>CONTROL</span>
                    <span>6 AXIS</span>
                  </div>
                </div>

                {/* control rows */}

                <div>
                  {controlItems.map((item, index) => (
                    <div
                      key={item.label}
                      className="grid grid-cols-[1fr_auto] gap-6 border-t border-white/[0.07] py-5 first:border-t-0"
                    >
                      <div>
                        <span className="font-mono text-[6px] tracking-[0.17em] text-white/[0.2]">
                          {item.label}
                        </span>

                        <p className="mt-2 font-mono text-[8px] tracking-[0.12em] text-white/[0.45]">
                          {item.value}
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="font-mono text-[6px] tracking-[0.15em] text-white/[0.3]">
                          {item.status}
                        </span>

                        <div className="mt-3 flex justify-end gap-1">
                          {[0, 1, 2, 3, 4].map((bar) => (
                            <span
                              key={bar}
                              className="control-bar block h-1 w-3 bg-white/[0.18]"
                              style={{
                                animationDelay: `${
                                  index * 0.2 + bar * 0.12
                                }s`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   INDUSTRIES
============================================================ */

function IndustrySection() {
  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col justify-between gap-16 lg:flex-row">
          <Label index="09">
            ROBOTIC ENVIRONMENTS
          </Label>

          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.07em] md:text-8xl">
            Machines designed
            <span className="block text-white/[0.18]">
              for real work.
            </span>
          </h2>
        </div>

        <div className="mt-28 grid md:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="industry-card group min-h-[360px] border border-white/[0.07] p-8"
              >
                <div className="flex items-start justify-between">
                  <Icon
                    size={20}
                    strokeWidth={1}
                    className="text-white/[0.5]"
                  />

                  <span className="font-mono text-[6px] text-white/[0.13]">
                    {item.number}
                  </span>
                </div>

                <div className="mt-32">
                  <h3 className="text-3xl font-medium tracking-[-0.05em]">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-[12px] leading-7 text-white/[0.4]">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SIMULATION LAB
============================================================ */

function SimulationLab() {
  return (
    <section className="border-y border-white/[0.07] bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.7fr_1.3fr]">
          {/* text */}

          <div>
            <Label index="10">
              SIMULATION
            </Label>

            <h2 className="mt-12 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Test movement
              <span className="block text-white/[0.18]">
                before metal
              </span>
              moves.
            </h2>

            <p className="mt-10 max-w-[520px] text-[13px] leading-8 text-white/[0.42]">
              Simulation helps teams explore geometry, motion, reach,
              collisions and workflow assumptions before committing to
              physical implementation.
            </p>
          </div>

          {/* simulation visual */}

          <div className="relative min-h-[650px] overflow-hidden border border-white/[0.08]">
            <div className="absolute inset-0 simulation-grid" />

            {/* axis */}

            <div className="absolute bottom-[14%] left-[12%] h-px w-[70%] rotate-[-18deg] bg-white/[0.08]" />

            <div className="absolute bottom-[14%] left-[12%] h-px w-[55%] rotate-[28deg] bg-white/[0.06]" />

            <div className="absolute bottom-[14%] left-[12%] h-[55%] w-px bg-white/[0.07]" />

            {/* simulated robot links */}

            <div className="simulation-arm absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute bottom-[15%] left-[42%] h-16 w-16 rounded-full border border-white/[0.16]">
                <div className="absolute left-1/2 top-1/2 h-[140px] w-8 origin-bottom -translate-x-1/2 -translate-y-full rotate-[-25deg] border border-white/[0.13]">
                  <div className="absolute left-1/2 top-0 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.16]">
                    <div className="absolute left-1/2 top-1/2 h-[120px] w-7 origin-bottom -translate-x-1/2 -translate-y-full rotate-[70deg] border border-white/[0.13]">
                      <div className="absolute left-1/2 top-0 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.16]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* motion trajectory */}

            <div className="trajectory absolute left-[27%] top-[25%] h-[260px] w-[48%] rounded-[50%] border border-dashed border-white/[0.09]" />

            {/* points */}

            {[
              ["27%", "60%"],
              ["38%", "39%"],
              ["58%", "31%"],
              ["73%", "45%"],
            ].map(([left, top], index) => (
              <div
                key={index}
                className="simulation-point absolute z-20"
                style={{
                  left,
                  top,
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                <span className="block h-2 w-2 rounded-full border border-white/[0.35] bg-black" />

                <span className="absolute left-4 top-[-2px] whitespace-nowrap font-mono text-[5px] tracking-[0.14em] text-white/[0.18]">
                  P0{index + 1}
                </span>
              </div>
            ))}

            {/* top bar */}

            <div className="absolute left-7 right-7 top-7 flex items-center justify-between border-b border-white/[0.07] pb-5">
              <div className="flex items-center gap-3">
                <Orbit
                  size={14}
                  strokeWidth={1}
                  className="text-white/[0.4]"
                />

                <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.25]">
                  ROBOT SIMULATION
                </span>
              </div>

              <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.15]">
                VIRTUAL CELL
              </span>
            </div>

            {/* bottom */}

            <div className="absolute bottom-7 left-7 right-7 grid grid-cols-3 border-t border-white/[0.07] pt-5">
              <div>
                <span className="block font-mono text-[5px] tracking-[0.15em] text-white/[0.14]">
                  MOTION
                </span>

                <span className="mt-2 block font-mono text-[7px] text-white/[0.35]">
                  ANALYSIS
                </span>
              </div>

              <div className="text-center">
                <span className="block font-mono text-[5px] tracking-[0.15em] text-white/[0.14]">
                  COLLISION
                </span>

                <span className="mt-2 block font-mono text-[7px] text-white/[0.35]">
                  CHECK
                </span>
              </div>

              <div className="text-right">
                <span className="block font-mono text-[5px] tracking-[0.15em] text-white/[0.14]">
                  WORKSPACE
                </span>

                <span className="mt-2 block font-mono text-[7px] text-white/[0.35]">
                  MODEL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SAFETY
============================================================ */

function SafetySection() {
  const safety = [
    {
      number: "01",
      title: "Workspace",
      text: "Define physical operating boundaries and understand where people, machines and materials can enter the robotic workspace.",
    },
    {
      number: "02",
      title: "Operating states",
      text: "Design predictable states for startup, normal operation, pause, recovery, maintenance and emergency conditions.",
    },
    {
      number: "03",
      title: "Human interaction",
      text: "Understand how operators, technicians and other employees interact with the robotic system throughout its lifecycle.",
    },
    {
      number: "04",
      title: "Failure behavior",
      text: "Consider how the complete system should respond when sensing, communication, power, tooling or control conditions fail.",
    },
  ];

  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <Label index="11">
          SAFETY BY DESIGN
        </Label>

        <div className="mt-16 grid gap-20 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <ShieldCheck
              size={30}
              strokeWidth={1}
              className="text-white/[0.5]"
            />

            <h2 className="mt-10 max-w-[650px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Intelligence
              <span className="block text-white/[0.18]">
                does not replace
              </span>
              safety.
            </h2>

            <p className="mt-10 max-w-[530px] text-[13px] leading-8 text-white/[0.42]">
              Robotics introduces physical movement into environments
              shared with people, products and equipment. Safety
              considerations therefore belong in the architecture from
              the beginning.
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            {safety.map((item) => (
              <article
                key={item.number}
                className="safety-card min-h-[330px] border border-white/[0.07] p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.15]">
                    SAFE / {item.number}
                  </span>

                  <Check
                    size={13}
                    className="text-white/[0.3]"
                  />
                </div>

                <div className="mt-24">
                  <h3 className="text-3xl font-medium tracking-[-0.05em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[12px] leading-7 text-white/[0.4]">
                    {item.text}
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

/* ============================================================
   ROADMAP
============================================================ */

function RoadmapSection() {
  return (
    <section className="border-y border-white/[0.07] bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col justify-between gap-16 lg:flex-row">
          <Label index="12">
            ROBOTICS ROADMAP
          </Label>

          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.07em] md:text-8xl">
            From task
            <span className="block text-white/[0.18]">
              to machine.
            </span>
          </h2>
        </div>

        <div className="mt-28">
          {consultingRoadmap.map((item) => (
            <article
              key={item.number}
              className="roadmap-row group grid min-h-[240px] gap-9 border-t border-white/[0.08] py-11 md:grid-cols-[90px_.7fr_1fr]"
            >
              <div>
                <span className="font-mono text-[7px] text-white/[0.15]">
                  {item.number}
                </span>

                <div className="mt-6 flex items-center">
                  <span className="h-2 w-2 rounded-full border border-white/[0.35] bg-black" />
                  <span className="h-px flex-1 bg-white/[0.06]" />
                </div>
              </div>

              <div>
                <span className="font-mono text-[6px] tracking-[0.2em] text-white/[0.2]">
                  {item.code}
                </span>

                <h3 className="mt-5 max-w-[470px] text-3xl font-medium leading-[1.03] tracking-[-0.05em] md:text-4xl">
                  {item.title}
                </h3>
              </div>

              <p className="max-w-[620px] text-[12px] leading-7 text-white/[0.4]">
                {item.description}
              </p>
            </article>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PRINCIPLES
============================================================ */

function PrinciplesSection() {
  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.6fr_1.4fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <Label index="13">
                ENGINEERING PRINCIPLES
              </Label>

              <h2 className="mt-12 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
                Build machines
                <span className="block text-white/[0.18]">
                  that belong
                </span>
                in the workflow.
              </h2>
            </div>
          </div>

          <div className="border-t border-white/[0.08]">
            {principles.map((principle, index) => (
              <div
                key={principle}
                className="principle-row group flex min-h-[110px] items-center justify-between gap-8 border-b border-white/[0.08]"
              >
                <div className="flex items-center gap-7">
                  <span className="font-mono text-[6px] text-white/[0.13]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-xl font-medium tracking-[-0.035em] text-white/[0.7] transition-colors duration-300 group-hover:text-white md:text-2xl">
                    {principle}
                  </span>
                </div>

                <ChevronRight
                  size={13}
                  className="text-white/[0.15] transition-transform duration-300 group-hover:translate-x-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ROBOTICS STACK
============================================================ */

function RoboticsStack() {
  const stack = [
    {
      number: "01",
      icon: Wrench,
      title: "Mechanical",
      sub: "STRUCTURE",
    },
    {
      number: "02",
      icon: Move3d,
      title: "Motion",
      sub: "ACTUATION",
    },
    {
      number: "03",
      icon: Radar,
      title: "Sensors",
      sub: "PERCEPTION",
    },
    {
      number: "04",
      icon: Cpu,
      title: "Control",
      sub: "COORDINATION",
    },
    {
      number: "05",
      icon: BrainCircuit,
      title: "AI",
      sub: "INTELLIGENCE",
    },
    {
      number: "06",
      icon: Network,
      title: "Integration",
      sub: "SYSTEM",
    },
  ];

  return (
    <section className="border-y border-white/[0.07] bg-black px-5 py-40 md:px-10 md:py-56">
      <div className="mx-auto max-w-[1500px]">
        <Label index="14">
          ROBOTICS STACK
        </Label>

        <h2 className="mt-14 max-w-[1100px] text-5xl font-semibold leading-[0.92] tracking-[-0.07em] md:text-8xl">
          One machine.
          <span className="block text-white/[0.18]">
            Multiple engineering systems.
          </span>
        </h2>

        <div className="mt-28 border border-white/[0.08]">
          {stack.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="stack-row group grid min-h-[140px] items-center gap-8 border-b border-white/[0.07] px-7 py-7 last:border-b-0 md:grid-cols-[80px_80px_1fr_auto]"
              >
                <span className="font-mono text-[7px] text-white/[0.14]">
                  {item.number}
                </span>

                <div className="flex h-11 w-11 items-center justify-center border border-white/[0.08]">
                  <Icon
                    size={17}
                    strokeWidth={1}
                    className="text-white/[0.45]"
                  />
                </div>

                <h3 className="text-3xl font-medium tracking-[-0.05em] md:text-4xl">
                  {item.title}
                </h3>

                <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.2]">
                  {item.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL CTA
============================================================ */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-48 md:px-10 md:py-72">
      {/* giant moving background */}

      <div className="final-robot-marquee pointer-events-none absolute bottom-0 flex w-max whitespace-nowrap">
        <span className="text-[clamp(10rem,24vw,28rem)] font-semibold leading-none tracking-[-0.1em] text-white/[0.018]">
          DESIGN / BUILD / MOVE / THINK / DESIGN / BUILD / MOVE /
          THINK /
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <Label index="15">
          ROBOTIC DESIGN & DEVELOPMENT
        </Label>

        <div className="mt-16 grid gap-16 lg:grid-cols-[.18fr_1.82fr]">
          {/* icons */}

          <div className="hidden lg:block">
            <div className="flex flex-col gap-6">
              <Bot
                size={22}
                strokeWidth={1}
                className="text-white/[0.42]"
              />

              <Move3d
                size={22}
                strokeWidth={1}
                className="text-white/[0.28]"
              />

              <BrainCircuit
                size={22}
                strokeWidth={1}
                className="text-white/[0.16]"
              />
            </div>
          </div>

          {/* content */}

          <div>
            <h2 className="max-w-[1250px] text-[clamp(4.3rem,8.8vw,9.3rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              Give software
              <span className="block text-white/[0.18]">
                a body.
              </span>
              Give machines
              <span className="block text-white/[0.18]">
                intelligence.
              </span>
            </h2>

            <div className="mt-24 grid gap-12 border-t border-white/[0.08] pt-12 md:grid-cols-[170px_1fr]">
              <span className="font-mono text-[6px] leading-6 tracking-[0.18em] text-white/[0.16]">
                ROBOTICS
                <br />
                MECHANICS
                <br />
                CONTROL
                <br />
                VISION
                <br />
                AI
                <br />
                SAFETY
              </span>

              <div>
                <p className="max-w-[850px] text-[15px] leading-9 text-white/[0.47]">
                  Robotics creates a bridge between digital intelligence
                  and physical action. Build that bridge through
                  deliberate mechanical design, reliable control,
                  perception, simulation, safe operation and AI where
                  adaptive intelligence genuinely improves the task.
                </p>

                <a
                  href="#robot-system"
                  className="group mt-14 flex w-fit items-center gap-5 border-b border-white/[0.16] pb-3"
                >
                  <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.48]">
                    EXPLORE ROBOTICS
                  </span>

                  <ArrowRight
                    size={11}
                    className="text-white/[0.45] transition-transform duration-300 group-hover:translate-x-2"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function RoboticsConsultingPage() {
  return (
    <main className="relative overflow-hidden bg-[#000000] text-white">
      {/* ======================================================
          ALL ANIMATIONS
          Keeping page as Server Component.
      ====================================================== */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* ==================================================
               HERO
            ================================================== */

            @keyframes heroIntro {
              0% {
                opacity: 0;
                transform: translateY(45px);
              }

              100% {
                opacity: 1;
                transform: translateY(0px);
              }
            }

            .hero-intro {
              animation:
                heroIntro
                1s
                cubic-bezier(.16, 1, .3, 1)
                both;
            }

            /* ==================================================
               ROBOT FLOAT
            ================================================== */

            @keyframes robotFloat {
              0%,
              100% {
                transform:
                  translateY(0px)
                  rotate(0deg);
              }

              50% {
                transform:
                  translateY(-12px)
                  rotate(.35deg);
              }
            }

            .robot-float {
              animation:
                robotFloat
                5.5s
                ease-in-out
                infinite;
            }

            /* ==================================================
               ROBOT GRID
            ================================================== */

            .robot-grid {
              background-image:
                linear-gradient(
                  rgba(255,255,255,.025) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,.025) 1px,
                  transparent 1px
                );

              background-size:
                34px
                34px;
            }

            /* ==================================================
               SCANNER
            ================================================== */

            @keyframes robotScanner {
              0% {
                top: 0%;
                opacity: 0;
              }

              8% {
                opacity: .7;
              }

              50% {
                opacity: .35;
              }

              92% {
                opacity: .7;
              }

              100% {
                top: 100%;
                opacity: 0;
              }
            }

            .robot-scan-line {
              animation:
                robotScanner
                5s
                linear
                infinite;
            }

            /* ==================================================
               TARGET PULSE
            ================================================== */

            @keyframes targetPulse {
              0% {
                transform:
                  translate(-50%, -50%)
                  scale(.6);

                opacity: .5;
              }

              100% {
                transform:
                  translate(-50%, -50%)
                  scale(2);

                opacity: 0;
              }
            }

            .target-pulse {
              animation:
                targetPulse
                3s
                ease-out
                infinite;
            }

            .target-delay {
              animation-delay:
                1.4s;
            }

            /* ==================================================
               STATUS
            ================================================== */

            @keyframes statusPulse {
              0%,
              100% {
                opacity: .25;
                transform: scale(.75);
              }

              50% {
                opacity: 1;
                transform: scale(1);
              }
            }

            .status-pulse {
              animation:
                statusPulse
                1.7s
                ease-in-out
                infinite;
            }

            /* ==================================================
               FLOATING LABELS
            ================================================== */

            @keyframes floatingLabel {
              0%,
              100% {
                transform: translateY(0px);
                opacity: .45;
              }

              50% {
                transform: translateY(-7px);
                opacity: 1;
              }
            }

            .floating-label {
              animation:
                floatingLabel
                3.4s
                ease-in-out
                infinite;
            }

            .floating-delay-1 {
              animation-delay:
                .5s;
            }

            .floating-delay-2 {
              animation-delay:
                1s;
            }

            .floating-delay-3 {
              animation-delay:
                1.5s;
            }

            /* ==================================================
               MARQUEE
            ================================================== */

            @keyframes roboticsMarquee {
              0% {
                transform:
                  translateX(0%);
              }

              100% {
                transform:
                  translateX(-50%);
              }
            }

            .robotics-marquee {
              animation:
                roboticsMarquee
                28s
                linear
                infinite;
            }

            /* ==================================================
               ROBOT CARDS
            ================================================== */

            .robot-card {
              transition:
                transform
                .5s
                cubic-bezier(.16, 1, .3, 1),
                border-color
                .5s
                ease;
            }

            .robot-card:hover {
              transform:
                translateY(-7px);

              border-color:
                rgba(255,255,255,.16);
            }

            .robot-card-fill {
              transition:
                transform
                .7s
                cubic-bezier(.16, 1, .3, 1);
            }

            .robot-card:hover
            .robot-card-fill {
              transform:
                translateY(0%);
            }

            /* ==================================================
               ANATOMY
            ================================================== */

            .anatomy-row {
              transition:
                padding-left
                .45s
                cubic-bezier(.16,1,.3,1),
                background-color
                .45s
                ease;
            }

            .anatomy-row:hover {
              padding-left:
                38px;

              background:
                rgba(255,255,255,.014);
            }

            /* ==================================================
               ROBOT IMAGE SCAN
            ================================================== */

            @keyframes robotImageScan {
              0% {
                top: 0%;
                opacity: 0;
              }

              10% {
                opacity: .6;
              }

              90% {
                opacity: .4;
              }

              100% {
                top: 100%;
                opacity: 0;
              }
            }

            .robot-image-scan {
              animation:
                robotImageScan
                6s
                linear
                infinite;
            }

            .robot-image-panel::after {
              content: "";

              position:
                absolute;

              inset:
                0;

              pointer-events:
                none;

              background:
                linear-gradient(
                  90deg,
                  transparent,
                  rgba(255,255,255,.03),
                  transparent
                );

              transform:
                translateX(-100%);

              animation:
                robotImageSweep
                7s
                ease-in-out
                infinite;
            }

            @keyframes robotImageSweep {
              0%,
              25% {
                transform:
                  translateX(-100%);
              }

              75%,
              100% {
                transform:
                  translateX(100%);
              }
            }

            /* ==================================================
               AUTONOMY
            ================================================== */

            .autonomy-row {
              transition:
                padding-left
                .45s
                cubic-bezier(.16,1,.3,1),
                background-color
                .45s
                ease;
            }

            .autonomy-row:hover {
              padding-left:
                14px;

              background:
                rgba(255,255,255,.012);
            }

            /* ==================================================
               VISION
            ================================================== */

            @keyframes visionScan {
              0% {
                top:
                  0%;
              }

              50% {
                top:
                  100%;
              }

              100% {
                top:
                  0%;
              }
            }

            .vision-scan {
              animation:
                visionScan
                5s
                ease-in-out
                infinite;
            }

            /* ==================================================
               QUESTIONS
            ================================================== */

            .question-row {
              transition:
                padding-left
                .45s
                cubic-bezier(.16,1,.3,1),
                background-color
                .45s
                ease;
            }

            .question-row:hover {
              padding-left:
                16px;

              background:
                rgba(255,255,255,.012);
            }

            /* ==================================================
               CONTROL
            ================================================== */

            @keyframes controlRing {
              0% {
                transform:
                  rotate(0deg);
              }

              100% {
                transform:
                  rotate(360deg);
              }
            }

            .control-ring {
              animation:
                controlRing
                18s
                linear
                infinite;
            }

            @keyframes controlBar {
              0%,
              100% {
                opacity:
                  .12;
              }

              50% {
                opacity:
                  .65;
              }
            }

            .control-bar {
              animation:
                controlBar
                1.7s
                ease-in-out
                infinite;
            }

            /* ==================================================
               INDUSTRIES
            ================================================== */

            .industry-card {
              transition:
                transform
                .5s
                cubic-bezier(.16,1,.3,1),
                background-color
                .5s
                ease,
                border-color
                .5s
                ease;
            }

            .industry-card:hover {
              transform:
                translateY(-6px);

              background:
                rgba(255,255,255,.012);

              border-color:
                rgba(255,255,255,.14);
            }

            /* ==================================================
               SIMULATION
            ================================================== */

            .simulation-grid {
              background-image:
                linear-gradient(
                  rgba(255,255,255,.026) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,.026) 1px,
                  transparent 1px
                );

              background-size:
                38px
                38px;

              transform:
                perspective(600px)
                rotateX(55deg)
                scale(1.6);

              transform-origin:
                center
                bottom;

              opacity:
                .65;
            }

            @keyframes simulationArm {
              0%,
              100% {
                transform:
                  translate(-50%, -50%)
                  rotate(-2deg);
              }

              50% {
                transform:
                  translate(-50%, -50%)
                  rotate(3deg);
              }
            }

            .simulation-arm {
              animation:
                simulationArm
                5s
                ease-in-out
                infinite;
            }

            @keyframes trajectory {
              0%,
              100% {
                opacity:
                  .25;
              }

              50% {
                opacity:
                  .7;
              }
            }

            .trajectory {
              animation:
                trajectory
                3s
                ease-in-out
                infinite;
            }

            @keyframes simulationPoint {
              0%,
              100% {
                transform:
                  scale(.7);

                opacity:
                  .25;
              }

              50% {
                transform:
                  scale(1);

                opacity:
                  1;
              }
            }

            .simulation-point {
              animation:
                simulationPoint
                2.4s
                ease-in-out
                infinite;
            }

            /* ==================================================
               SAFETY
            ================================================== */

            .safety-card {
              transition:
                transform
                .5s
                cubic-bezier(.16,1,.3,1),
                border-color
                .5s
                ease,
                background-color
                .5s
                ease;
            }

            .safety-card:hover {
              transform:
                translateY(-6px);

              border-color:
                rgba(255,255,255,.14);

              background:
                rgba(255,255,255,.012);
            }

            /* ==================================================
               ROADMAP
            ================================================== */

            .roadmap-row {
              transition:
                padding-left
                .45s
                cubic-bezier(.16,1,.3,1),
                background-color
                .45s
                ease;
            }

            .roadmap-row:hover {
              padding-left:
                15px;

              background:
                rgba(255,255,255,.012);
            }

            /* ==================================================
               PRINCIPLES
            ================================================== */

            .principle-row {
              transition:
                padding-left
                .4s
                cubic-bezier(.16,1,.3,1),
                background-color
                .4s
                ease;
            }

            .principle-row:hover {
              padding-left:
                12px;

              background:
                rgba(255,255,255,.012);
            }

            /* ==================================================
               ROBOT STACK
            ================================================== */

            .stack-row {
              transition:
                padding-left
                .45s
                cubic-bezier(.16,1,.3,1),
                background-color
                .45s
                ease;
            }

            .stack-row:hover {
              padding-left:
                40px;

              background:
                rgba(255,255,255,.012);
            }

            /* ==================================================
               FINAL MARQUEE
            ================================================== */

            @keyframes finalRobotMarquee {
              0% {
                transform:
                  translateX(0%);
              }

              100% {
                transform:
                  translateX(-35%);
              }
            }

            .final-robot-marquee {
              animation:
                finalRobotMarquee
                38s
                linear
                infinite;
            }

            /* ==================================================
               MOBILE
            ================================================== */

            @media (max-width: 768px) {
              .robot-float {
                inset:
                  12% 0;
              }

              .simulation-grid {
                transform:
                  perspective(600px)
                  rotateX(55deg)
                  scale(2);
              }
            }

            /* ==================================================
               REDUCED MOTION
            ================================================== */

            @media (prefers-reduced-motion: reduce) {
              .hero-intro,
              .robot-float,
              .robot-scan-line,
              .target-pulse,
              .status-pulse,
              .floating-label,
              .robotics-marquee,
              .robot-image-scan,
              .robot-image-panel::after,
              .vision-scan,
              .control-ring,
              .control-bar,
              .simulation-arm,
              .trajectory,
              .simulation-point,
              .final-robot-marquee {
                animation:
                  none
                  !important;
              }
            }
          `,
        }}
      />

      {/* ======================================================
          EXISTING HEADER
      ====================================================== */}

      <Header />

      {/* ======================================================
          PAGE
      ====================================================== */}

      <Hero />

      <RoboticsMarquee />

      <RoboticsStatement />

      <RoboticsCapabilities />

      <RobotAnatomy />

      <EngineeringVisual />

      <AutonomySection />

      <PerceptionLab />

      <QuestionsSection />

      <RobotControlConsole />

      <IndustrySection />

      <SimulationLab />

      <SafetySection />

      <RoadmapSection />

      <PrinciplesSection />

      <RoboticsStack />

      <FinalCTA />

      {/* ======================================================
          EXISTING FOOTER
      ====================================================== */}

      <Footer />
    </main>
  );
}