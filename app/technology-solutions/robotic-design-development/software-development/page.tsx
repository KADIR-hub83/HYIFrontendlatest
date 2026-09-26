"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Binary,
  Bot,
  Box,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Code2,
  Cpu,
  Database,
  Eye,
  Gauge,
  GitBranch,
  Layers3,
  Network,
  Play,
  Radar,
  ScanLine,
  Server,
  ShieldCheck,
  Sparkles,
  Target,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

/* =========================================================
   DATA
========================================================= */

const stack = [
  {
    icon: Eye,
    number: "01",
    title: "Perception",
    label: "SENSE",
    description:
      "Transform camera, depth, LiDAR and sensor inputs into structured information that robotic software can understand and use.",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "Intelligence",
    label: "UNDERSTAND",
    description:
      "Apply AI, computer vision and learned models to interpret environments, recognize objects and support autonomous decisions.",
  },
  {
    icon: Target,
    number: "03",
    title: "Planning",
    label: "DECIDE",
    description:
      "Build planning systems that translate goals into executable robot behaviors while considering constraints and environment state.",
  },
  {
    icon: Cpu,
    number: "04",
    title: "Control",
    label: "ACT",
    description:
      "Convert planned behaviors into reliable low-level commands for motors, actuators, manipulators and mobile robotic platforms.",
  },
];

const softwareCapabilities = [
  {
    icon: Code2,
    title: "Robot Application Development",
    text: "Develop modular software for autonomous, industrial and intelligent robotic systems with clear interfaces between sensing, reasoning and control.",
  },
  {
    icon: Network,
    title: "Robotics Middleware",
    text: "Structure communication between distributed robot services, hardware interfaces, perception pipelines and application logic.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    text: "Connect computer vision, machine learning and intelligent decision systems with real-world robotic execution.",
  },
  {
    icon: Radar,
    title: "Localization & Mapping",
    text: "Build software foundations for spatial awareness, localization, mapping and environment representation.",
  },
  {
    icon: GitBranch,
    title: "Motion & Task Planning",
    text: "Translate high-level objectives into controlled sequences of robot actions, paths and operational behaviors.",
  },
  {
    icon: Gauge,
    title: "Robot Control Systems",
    text: "Create responsive software layers for actuator commands, feedback loops, motion control and runtime monitoring.",
  },
  {
    icon: Box,
    title: "Simulation",
    text: "Validate robot behaviors in simulated environments before deploying software to physical robotic platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Software",
    text: "Design software boundaries, health checks, failure handling and controlled fallback behavior around robot execution.",
  },
];

const pipeline = [
  {
    number: "01",
    title: "Sense",
    detail: "Camera / LiDAR / IMU / Encoder",
    icon: Radar,
  },
  {
    number: "02",
    title: "Perceive",
    detail: "Vision / Detection / Mapping",
    icon: Eye,
  },
  {
    number: "03",
    title: "Understand",
    detail: "AI / State / Context",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "Plan",
    detail: "Path / Motion / Tasks",
    icon: GitBranch,
  },
  {
    number: "05",
    title: "Control",
    detail: "Velocity / Position / Force",
    icon: Gauge,
  },
  {
    number: "06",
    title: "Act",
    detail: "Motor / Arm / Robot",
    icon: Zap,
  },
];

const industries = [
  {
    number: "01",
    title: "Manufacturing",
    text: "Software for intelligent robotic workcells, inspection, material handling and automated production systems.",
  },
  {
    number: "02",
    title: "Warehousing",
    text: "Autonomy software for navigation, inventory movement, fleet coordination and intelligent logistics workflows.",
  },
  {
    number: "03",
    title: "Inspection",
    text: "Robotic perception and autonomous navigation for repeatable inspection across industrial environments.",
  },
  {
    number: "04",
    title: "Service Robotics",
    text: "Application software for robots operating around people, facilities and dynamic real-world environments.",
  },
];

const architecture = [
  {
    layer: "APPLICATION",
    title: "Mission & Business Logic",
    description:
      "Robot tasks, operational workflows, fleet behaviors and application-specific intelligence.",
  },
  {
    layer: "INTELLIGENCE",
    title: "AI & Decision Layer",
    description:
      "Computer vision, learned models, state estimation, reasoning and autonomous decision software.",
  },
  {
    layer: "AUTONOMY",
    title: "Planning & Navigation",
    description:
      "Localization, mapping, path planning, motion planning and behavior execution.",
  },
  {
    layer: "MIDDLEWARE",
    title: "Robot Communication",
    description:
      "Services, topics, messages, interfaces and distributed communication between robotic components.",
  },
  {
    layer: "CONTROL",
    title: "Motion & Hardware Control",
    description:
      "Controllers, feedback loops, actuator commands and hardware abstraction.",
  },
  {
    layer: "HARDWARE",
    title: "Sensors & Actuators",
    description:
      "Cameras, LiDAR, IMUs, encoders, motors, manipulators and embedded compute.",
  },
];

const principles = [
  "Modular software architecture",
  "Hardware-independent interfaces",
  "Observable runtime behavior",
  "Simulation before deployment",
  "Deterministic control boundaries",
  "Clear failure states",
  "Reusable robot capabilities",
  "AI with controlled execution",
];

/* =========================================================
   REUSABLE
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

      <div className="h-px w-8 bg-[#7c3aed]/40" />

      <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/35">
        {children}
      </span>
    </div>
  );
}

/* =========================================================
   SOFTWARE CORE MODEL
========================================================= */

function RobotSoftwareCore() {
  const nodes = [
    {
      icon: Eye,
      label: "VISION",
      className: "left-[2%] top-[14%]",
    },
    {
      icon: Radar,
      label: "SLAM",
      className: "right-[2%] top-[14%]",
    },
    {
      icon: GitBranch,
      label: "PLANNER",
      className: "left-[0%] bottom-[19%]",
    },
    {
      icon: Gauge,
      label: "CONTROL",
      className: "right-[0%] bottom-[19%]",
    },
  ];

  return (
    <div className="relative mx-auto h-[620px] w-full max-w-[690px]">
      {/* ambient */}

      <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[120px]" />

      {/* rings */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[490px] w-[490px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/15"
      >
        <div className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#a78bfa] shadow-[0_0_15px_#8b5cf6]" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#8b5cf6]/15"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/10"
      />

      {/* SVG network */}

      <svg
        viewBox="0 0 690 620"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <motion.path
          d="M125 135 C205 135 230 245 295 270"
          stroke="rgba(139,92,246,.35)"
          strokeWidth="1"
          strokeDasharray="6 8"
          animate={{
            strokeDashoffset: [100, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M565 135 C485 135 460 245 395 270"
          stroke="rgba(139,92,246,.35)"
          strokeWidth="1"
          strokeDasharray="6 8"
          animate={{
            strokeDashoffset: [100, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M120 485 C210 485 230 375 295 345"
          stroke="rgba(139,92,246,.35)"
          strokeWidth="1"
          strokeDasharray="6 8"
          animate={{
            strokeDashoffset: [0, 100],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M570 485 C480 485 460 375 395 345"
          stroke="rgba(139,92,246,.35)"
          strokeWidth="1"
          strokeDasharray="6 8"
          animate={{
            strokeDashoffset: [0, 100],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* outside nodes */}

      {nodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <motion.div
            key={node.label}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
            className={`absolute ${node.className} z-20 w-[135px] rounded-[18px] border border-[#8b5cf6]/20 bg-[#08060d]/95 p-4 backdrop-blur-xl`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/10">
                <Icon
                  size={14}
                  strokeWidth={1.2}
                  className="text-[#c4b5fd]"
                />
              </div>

              <div>
                <span className="block font-mono text-[6px] tracking-[0.15em] text-white/25">
                  NODE
                </span>

                <span className="mt-1 block font-mono text-[7px] tracking-[0.1em] text-white/60">
                  {node.label}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* core */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 z-30 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-[42px] border border-[#a78bfa]/30 bg-gradient-to-b from-[#1a1028] via-[#0c0712] to-[#050307] shadow-[0_0_100px_rgba(124,58,237,.2)]"
      >
        <div className="absolute left-1/2 top-7 -translate-x-1/2 whitespace-nowrap font-mono text-[6px] tracking-[0.18em] text-white/30">
          ROBOT SOFTWARE CORE
        </div>

        <div className="absolute left-1/2 top-1/2 flex h-[105px] w-[105px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[30px] border border-[#a78bfa]/25 bg-[#8b5cf6]/10">
          <BrainCircuit
            size={46}
            strokeWidth={0.9}
            className="text-[#c4b5fd]"
          />

          <motion.div
            animate={{
              top: ["18%", "82%", "18%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-3 right-3 h-px bg-[#c4b5fd]/70 shadow-[0_0_12px_#8b5cf6]"
          />
        </div>

        <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <motion.span
              key={index}
              animate={{
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="h-1 w-5 rounded-full bg-[#8b5cf6]/60"
            />
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-[2%] left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-5 py-3">
        <motion.span
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="h-1.5 w-1.5 rounded-full bg-[#c4b5fd]"
        />

        <span className="font-mono text-[6px] tracking-[0.17em] text-white/40">
          SOFTWARE STACK ONLINE
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   CODE EDITOR
========================================================= */

function CodeEditor() {
  const codeLines = [
    {
      no: "01",
      code: "class AutonomousRobot:",
      indent: 0,
    },
    {
      no: "02",
      code: "def __init__(self):",
      indent: 1,
    },
    {
      no: "03",
      code: "self.perception = VisionSystem()",
      indent: 2,
    },
    {
      no: "04",
      code: "self.localization = MappingEngine()",
      indent: 2,
    },
    {
      no: "05",
      code: "self.planner = MotionPlanner()",
      indent: 2,
    },
    {
      no: "06",
      code: "self.controller = RobotController()",
      indent: 2,
    },
    {
      no: "07",
      code: "",
      indent: 0,
    },
    {
      no: "08",
      code: "def execute(self, goal):",
      indent: 1,
    },
    {
      no: "09",
      code: "world = self.perception.observe()",
      indent: 2,
    },
    {
      no: "10",
      code: "state = self.localization.update(world)",
      indent: 2,
    },
    {
      no: "11",
      code: "trajectory = self.planner.plan(state, goal)",
      indent: 2,
    },
    {
      no: "12",
      code: "self.controller.follow(trajectory)",
      indent: 2,
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[#8b5cf6]/15 bg-[#07050b] shadow-[0_40px_100px_rgba(0,0,0,.45)]">
      <div className="flex h-14 items-center justify-between border-b border-white/[0.06] px-5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/[0.07]" />
        </div>

        <div className="flex items-center gap-3">
          <Code2 size={11} className="text-[#a78bfa]" />

          <span className="font-mono text-[7px] tracking-[0.12em] text-white/30">
            robot_core.py
          </span>
        </div>

        <div className="flex items-center gap-2">
          <motion.span
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]"
          />

          <span className="font-mono text-[6px] text-white/20">
            RUNNING
          </span>
        </div>
      </div>

      <div className="relative p-5 md:p-7">
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-[#7c3aed]/[0.06] blur-[100px]" />

        <div className="relative space-y-3">
          {codeLines.map((line, index) => (
            <motion.div
              key={line.no}
              initial={{
                opacity: 0,
                x: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
              }}
              className="grid grid-cols-[30px_1fr] gap-4"
            >
              <span className="select-none font-mono text-[8px] text-white/15">
                {line.no}
              </span>

              <span
                style={{
                  paddingLeft: `${line.indent * 20}px`,
                }}
                className="font-mono text-[9px] leading-5 text-white/55 md:text-[10px]"
              >
                {line.code}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.06] bg-black/30 px-5 py-4">
        <div className="flex items-center gap-3">
          <Terminal size={11} className="text-[#a78bfa]" />

          <span className="font-mono text-[7px] text-white/25">
            robot@hyi:~$
          </span>

          <motion.span
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="h-3 w-[5px] bg-[#a78bfa]/60"
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 900], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#000000] px-5 pb-24 pt-36 md:px-10 md:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />

      <div className="pointer-events-none absolute right-[-12%] top-[10%] h-[800px] w-[800px] rounded-full bg-[#7c3aed]/[0.1] blur-[190px]" />

      <motion.div
        style={{
          y: heroY,
          opacity: heroOpacity,
        }}
        className="relative mx-auto max-w-[1450px]"
      >
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <motion.span
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]"
            />

            <span className="font-mono text-[7px] tracking-[0.2em] text-white/40">
              HYI.AI / ROBOT SOFTWARE DEVELOPMENT
            </span>
          </div>

          <span className="hidden font-mono text-[7px] tracking-[0.18em] text-white/20 md:block">
            PERCEPTION / AUTONOMY / CONTROL
          </span>
        </div>

        <div className="grid min-h-[760px] items-center gap-10 lg:grid-cols-[.92fr_1.08fr]">
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10"
          >
            <div className="flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07] px-4 py-2">
              <Binary size={11} className="text-[#c4b5fd]" />

              <span className="font-mono text-[7px] tracking-[0.18em] text-[#c4b5fd]/70">
                SOFTWARE FOR INTELLIGENT MACHINES
              </span>
            </div>

            <h1 className="mt-9 max-w-[780px] text-[clamp(4.2rem,7vw,8rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              Code the
              <span className="block text-white/25">
                intelligence.
              </span>
              Move the
              <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
                machine.
              </span>
            </h1>

            <p className="mt-9 max-w-[620px] text-[14px] leading-8 text-white/[0.55] md:text-[16px] md:leading-9">
              Build the software layer that allows robots to perceive
              environments, understand state, plan actions, coordinate
              subsystems and execute controlled physical behavior.
            </p>

            <div className="mt-11 flex flex-wrap gap-4">
              <a
                href="#software-stack"
                className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-7 py-4 text-[12px] font-medium text-white shadow-[0_0_35px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
              >
                Explore Software Stack

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

            <div className="mt-16 grid max-w-[650px] grid-cols-3 border-y border-white/[0.07] py-6">
              <div>
                <span className="font-mono text-[6px] tracking-[0.16em] text-white/20">
                  INPUT
                </span>

                <p className="mt-2 text-[11px] text-white/55">
                  Sensors
                </p>
              </div>

              <div className="border-l border-white/[0.07] pl-6">
                <span className="font-mono text-[6px] tracking-[0.16em] text-white/20">
                  CORE
                </span>

                <p className="mt-2 text-[11px] text-white/55">
                  Robot Software
                </p>
              </div>

              <div className="border-l border-white/[0.07] pl-6">
                <span className="font-mono text-[6px] tracking-[0.16em] text-white/20">
                  OUTPUT
                </span>

                <p className="mt-2 text-[11px] text-white/55">
                  Motion
                </p>
              </div>
            </div>
          </motion.div>

          <RobotSoftwareCore />
        </div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   MARQUEE
========================================================= */

function TechStrip() {
  const words = [
    "PERCEPTION",
    "COMPUTER VISION",
    "LOCALIZATION",
    "MAPPING",
    "PLANNING",
    "CONTROL",
    "SIMULATION",
    "AI",
    "ROBOTICS",
  ];

  return (
    <section className="overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] py-6">
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max whitespace-nowrap"
      >
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
      </motion.div>
    </section>
  );
}

/* =========================================================
   STATEMENT
========================================================= */

function Statement() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-32 md:px-10 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.05] blur-[170px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid gap-14 lg:grid-cols-[.35fr_1.65fr]">
          <SectionLabel number="01">
            Robot Intelligence
          </SectionLabel>

          <div>
            <motion.h2
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
              }}
              className="max-w-[1120px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[86px]"
            >
              Hardware gives a robot a body.
              <span className="text-white/25">
                {" "}Software gives it behavior.
              </span>
            </motion.h2>

            <div className="mt-14 grid gap-8 border-t border-white/[0.07] pt-10 md:grid-cols-2">
              <p className="max-w-[500px] text-[13px] leading-8 text-white/[0.52]">
                Robot software connects sensors, compute, algorithms,
                controllers and actuators into one coordinated
                operational system.
              </p>

              <p className="max-w-[500px] text-[13px] leading-8 text-white/[0.52]">
                AI extends this architecture by enabling robots to
                interpret richer environments and make useful
                decisions from perception and context.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SOFTWARE STACK
========================================================= */

function SoftwareStack() {
  return (
    <section
      id="software-stack"
      className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="02">
          Core Software
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            One machine.
            <span className="block text-white/25">
              Multiple intelligence layers.
            </span>
          </h2>

          <p className="max-w-[430px] text-[13px] leading-8 text-white/[0.5]">
            Reliable robot behavior emerges when perception, planning
            and control are designed as connected but clearly
            separated software responsibilities.
          </p>
        </div>

        <div className="mt-20 grid gap-4 lg:grid-cols-4">
          {stack.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative min-h-[390px] overflow-hidden rounded-[24px] border border-[#8b5cf6]/15 bg-[#08060d] p-7"
              >
                <div className="absolute -right-20 -top-20 h-[230px] w-[230px] rounded-full bg-[#7c3aed]/[0.07] blur-[70px]" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07]">
                      <Icon
                        size={18}
                        strokeWidth={1.1}
                        className="text-[#b9a4ff]"
                      />
                    </div>

                    <span className="font-mono text-[6px] text-white/20">
                      {item.number}
                    </span>
                  </div>

                  <div className="mt-24">
                    <span className="font-mono text-[6px] tracking-[0.16em] text-[#a78bfa]/60">
                      {item.label}
                    </span>

                    <h3 className="mt-4 text-3xl font-medium tracking-[-0.05em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[12px] leading-7 text-white/[0.5]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DEVELOPMENT ENVIRONMENT
========================================================= */

function DevelopmentEnvironment() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
          <CodeEditor />

          <div>
            <SectionLabel number="03">
              Development Environment
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Software becomes
              <span className="block text-white/25">
                physical behavior.
              </span>
            </h2>

            <p className="mt-8 max-w-[530px] text-[13px] leading-8 text-white/[0.52]">
              Robot development is different from conventional
              application software because every algorithm eventually
              interacts with a physical system, real sensors and
              real-world uncertainty.
            </p>

            <div className="mt-12 space-y-3">
              {[
                "Modular robot services",
                "Sensor and hardware interfaces",
                "Autonomous behavior logic",
                "Real-time feedback",
                "Simulation and validation",
                "Runtime observability",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                >
                  <CheckCircle2
                    size={13}
                    strokeWidth={1.3}
                    className="text-[#a78bfa]"
                  />

                  <span className="text-[12px] text-white/[0.55]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PIPELINE
========================================================= */

function IntelligencePipeline() {
  return (
    <section className="relative overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="mx-auto max-w-[900px] text-center">
          <div className="flex justify-center">
            <SectionLabel number="04">
              Runtime Pipeline
            </SectionLabel>
          </div>

          <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            From sensor data
            <span className="block text-white/25">
              to machine action.
            </span>
          </h2>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-[8%] right-[8%] top-[31px] hidden h-px bg-[#8b5cf6]/20 lg:block" />

          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
            style={{
              transformOrigin: "left",
            }}
            className="absolute left-[8%] right-[8%] top-[31px] hidden h-px bg-gradient-to-r from-[#6d28d9] via-[#c4b5fd] to-[#9333ea] lg:block"
          />

          <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {pipeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
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
                    delay: index * 0.12,
                  }}
                  className="relative"
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      delay: index * 0.25,
                    }}
                    className="relative z-10 mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-[18px] border border-[#8b5cf6]/25 bg-[#0b0711]"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.1}
                      className="text-[#c4b5fd]"
                    />
                  </motion.div>

                  <div className="mt-7 text-center">
                    <span className="font-mono text-[6px] text-[#a78bfa]/50">
                      {item.number}
                    </span>

                    <h3 className="mt-3 text-xl font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-3 font-mono text-[6px] leading-5 tracking-[0.08em] text-white/25">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
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
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="absolute right-[-10%] top-[15%] h-[700px] w-[700px] rounded-full bg-[#7c3aed]/[0.05] blur-[180px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <SectionLabel number="05">
          Engineering Capabilities
        </SectionLabel>

        <div className="mt-8 grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Build the
              <span className="block text-white/25">
                complete robot
              </span>
              software layer.
            </h2>
          </div>

          <div className="border-t border-white/[0.07]">
            {softwareCapabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    x: 8,
                  }}
                  className="group grid gap-5 border-b border-white/[0.07] py-7 md:grid-cols-[55px_1fr_1.3fr_30px] md:items-center"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.05]">
                    <Icon
                      size={14}
                      strokeWidth={1.1}
                      className="text-[#a78bfa]"
                    />
                  </div>

                  <h3 className="text-[15px] font-medium text-white/75">
                    {item.title}
                  </h3>

                  <p className="text-[11px] leading-6 text-white/[0.45]">
                    {item.text}
                  </p>

                  <ArrowRight
                    size={13}
                    className="hidden text-white/15 transition group-hover:text-[#a78bfa] md:block"
                  />
                </motion.article>
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

function Architecture() {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel number="06">
              Software Architecture
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Intelligence
              <span className="block text-white/25">
                is a stack.
              </span>
            </h2>

            <p className="mt-8 max-w-[470px] text-[13px] leading-8 text-white/[0.5]">
              Separate high-level mission intelligence from autonomy,
              middleware and hardware control so individual robotic
              capabilities can evolve without destabilizing the
              entire system.
            </p>
          </div>

          <div className="space-y-3">
            {architecture.map((item, index) => (
              <motion.article
                key={item.layer}
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
                  delay: index * 0.08,
                }}
                whileHover={{
                  x: 6,
                }}
                className="relative overflow-hidden rounded-[20px] border border-[#8b5cf6]/15 bg-[#08060d] p-6 md:p-8"
              >
                <div
                  className="absolute bottom-0 left-0 top-0 bg-[#7c3aed]/[0.04]"
                  style={{
                    width: `${100 - index * 9}%`,
                  }}
                />

                <div className="relative grid gap-5 md:grid-cols-[130px_1fr_1.2fr] md:items-center">
                  <span className="font-mono text-[6px] tracking-[0.15em] text-[#a78bfa]/60">
                    {item.layer}
                  </span>

                  <h3 className="text-xl font-medium text-white/75">
                    {item.title}
                  </h3>

                  <p className="text-[11px] leading-6 text-white/[0.43]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SIMULATION
========================================================= */

function Simulation() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionLabel number="07">
              Simulation First
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Test behavior
              <span className="block text-white/25">
                before hardware.
              </span>
            </h2>

            <p className="mt-8 max-w-[520px] text-[13px] leading-8 text-white/[0.52]">
              Simulation allows robotic teams to test navigation,
              perception, control and application logic against
              repeatable scenarios before exposing physical equipment
              to new software behavior.
            </p>
          </div>

          <div className="relative h-[520px] overflow-hidden rounded-[28px] border border-[#8b5cf6]/15 bg-[#07050b]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.045)_1px,transparent_1px)] bg-[size:32px_32px]" />

            <div className="absolute left-6 right-6 top-6 flex items-center justify-between border-b border-white/[0.06] pb-5">
              <div className="flex items-center gap-3">
                <Box size={12} className="text-[#a78bfa]" />

                <span className="font-mono text-[7px] tracking-[0.15em] text-white/30">
                  ROBOT SIMULATION
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Play
                  size={10}
                  className="text-[#a78bfa]"
                />

                <span className="font-mono text-[6px] text-white/25">
                  RUNNING
                </span>
              </div>
            </div>

            <div className="absolute left-1/2 top-[53%] h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border border-dashed border-[#8b5cf6]/20"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[45px] rounded-full border border-[#8b5cf6]/15"
              />

              <motion.div
                animate={{
                  x: [-55, 55, 55, -55, -55],
                  y: [-55, -55, 55, 55, -55],
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 flex h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[15px] border border-[#a78bfa]/30 bg-[#8b5cf6]/15 shadow-[0_0_35px_rgba(124,58,237,.3)]"
              >
                <Bot
                  size={23}
                  strokeWidth={1}
                  className="text-[#c4b5fd]"
                />
              </motion.div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2">
              {[
                "WORLD READY",
                "SENSORS ONLINE",
                "CONTROL ACTIVE",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-[10px] border border-white/[0.06] bg-black/30 p-3"
                >
                  <motion.span
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="mb-2 block h-1 w-1 rounded-full bg-[#a78bfa]"
                  />

                  <span className="font-mono text-[5px] tracking-[0.1em] text-white/25">
                    {item}
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
   INDUSTRIES
========================================================= */

function Industries() {
  return (
    <section className="border-y border-[#8b5cf6]/10 bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="08">
          Applications
        </SectionLabel>

        <h2 className="mt-8 max-w-[950px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
          Software for robots
          <span className="block text-white/25">
            operating in the real world.
          </span>
        </h2>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((item, index) => (
            <motion.article
              key={item.number}
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -7,
              }}
              className="min-h-[330px] rounded-[22px] border border-[#8b5cf6]/15 bg-[#08060d] p-7"
            >
              <span className="font-mono text-[6px] text-[#a78bfa]/60">
                {item.number}
              </span>

              <div className="mt-28">
                <h3 className="text-3xl font-medium tracking-[-0.05em]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[11px] leading-7 text-white/[0.48]">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
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
    <section className="bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <SectionLabel number="09">
              Engineering Principles
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Build software
              <span className="block text-white/25">
                machines can trust.
              </span>
            </h2>
          </div>

          <div className="border-t border-white/[0.07]">
            {principles.map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  x: 8,
                }}
                className="group flex items-center justify-between border-b border-white/[0.07] py-6"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-[6px] text-[#a78bfa]/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[14px] text-white/65 md:text-[16px]">
                    {item}
                  </span>
                </div>

                <ArrowRight
                  size={13}
                  className="text-white/15 transition-transform group-hover:translate-x-1 group-hover:text-[#a78bfa]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FINAL
========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050307] px-5 py-36 md:px-10 md:py-52">
      <div className="absolute left-1/2 top-1/2 h-[850px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.09] blur-[190px]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="relative mx-auto max-w-[1450px] text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2"
        >
          <Code2 size={11} className="text-[#c4b5fd]" />

          <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
            ROBOT SOFTWARE / HYI.AI
          </span>
        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto mt-10 max-w-[1300px] text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.83] tracking-[-0.085em]"
        >
          Give machines
          <span className="block text-white/20">
            perception.
          </span>

          Give them
          <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
            intelligence.
          </span>
        </motion.h2>

        <p className="mx-auto mt-10 max-w-[720px] text-[14px] leading-8 text-white/[0.5]">
          Build modular robotic software that connects sensing,
          artificial intelligence, autonomous planning and controlled
          machine execution.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="#software-stack"
            className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-8 py-4 text-[12px] font-medium text-white shadow-[0_0_40px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
          >
            Explore Robot Software

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

export default function RobotSoftwareDevelopmentPage() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative overflow-hidden bg-[#000000] text-white">
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[9999] h-px w-full bg-gradient-to-r from-[#6d28d9] via-[#c4b5fd] to-[#e879f9]"
      />

      <Header />

      <Hero />

      <TechStrip />

      <Statement />

      <SoftwareStack />

      <DevelopmentEnvironment />

      <IntelligencePipeline />

      <Capabilities />

      <Architecture />

      <Simulation />

      <Industries />

      <Principles />

      <FinalCTA />

      <Footer />
    </main>
  );
}