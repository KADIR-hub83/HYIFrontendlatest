import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  Box,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  CircleDot,
  Cpu,
  Gauge,
  GitBranch,
  Layers3,
  Monitor,
  Network,
  Orbit,
  Play,
  RefreshCcw,
  Route,
  Scan,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const simulationStages = [
  {
    number: "01",
    title: "Model",
    label: "VIRTUAL SYSTEM",
    description:
      "Represent robot geometry, joints, sensors, actuators, workcells and surrounding environments inside a controlled digital workspace.",
    icon: Boxes,
  },
  {
    number: "02",
    title: "Configure",
    label: "SYSTEM PARAMETERS",
    description:
      "Define motion limits, payload assumptions, sensor configurations, control logic and environmental conditions before execution.",
    icon: SlidersHorizontal,
  },
  {
    number: "03",
    title: "Simulate",
    label: "VIRTUAL EXECUTION",
    description:
      "Run robotic behavior inside repeatable scenarios to observe motion, interactions, timing and system response.",
    icon: Play,
  },
  {
    number: "04",
    title: "Measure",
    label: "TELEMETRY",
    description:
      "Capture trajectories, state transitions, timing, collisions, sensor outputs and other engineering signals during simulation.",
    icon: Activity,
  },
  {
    number: "05",
    title: "Refine",
    label: "ITERATION",
    description:
      "Use simulation results to adjust software, robot configuration, planning logic and operational assumptions before deployment.",
    icon: RefreshCcw,
  },
];

const capabilities = [
  {
    icon: Boxes,
    number: "01",
    eyebrow: "DIGITAL ENVIRONMENTS",
    title: "Virtual Workcells",
    description:
      "Create structured digital environments for robots, machines, fixtures, objects and operational zones so engineering teams can evaluate complete robotic workflows before physical commissioning.",
  },
  {
    icon: Route,
    number: "02",
    eyebrow: "MOTION ENGINEERING",
    title: "Trajectory Simulation",
    description:
      "Evaluate planned robotic paths, joint movement, reachability and sequence behavior within a virtual environment before executing motion on physical hardware.",
  },
  {
    icon: Scan,
    number: "03",
    eyebrow: "SENSOR SYSTEMS",
    title: "Sensor Simulation",
    description:
      "Represent cameras, range sensors and machine signals to support perception development and test how robotic software responds to different observations.",
  },
  {
    icon: BrainCircuit,
    number: "04",
    eyebrow: "AI + AUTONOMY",
    title: "Autonomy Testing",
    description:
      "Test perception, planning and intelligent behavior across controlled scenarios where conditions can be repeated, modified and compared.",
  },
  {
    icon: GitBranch,
    number: "05",
    eyebrow: "SCENARIO ENGINEERING",
    title: "Scenario Testing",
    description:
      "Build alternative operating situations, edge cases and environmental variations to understand how robotic behavior changes before real-world deployment.",
  },
  {
    icon: Activity,
    number: "06",
    eyebrow: "ENGINEERING DATA",
    title: "Simulation Telemetry",
    description:
      "Capture machine states, events, trajectories and timing information so engineers can inspect what happened during each simulation run.",
  },
];

const digitalTwinLayers = [
  {
    id: "06",
    title: "Operational Intelligence",
    label: "ANALYZE",
    description:
      "Interpret simulation and machine data to understand system behavior.",
  },
  {
    id: "05",
    title: "Robot Software",
    label: "CONTROL",
    description:
      "Planning, autonomy, perception and robot control software.",
  },
  {
    id: "04",
    title: "Sensor Model",
    label: "PERCEIVE",
    description:
      "Virtual representation of cameras and machine sensing systems.",
  },
  {
    id: "03",
    title: "Physics",
    label: "INTERACT",
    description:
      "Motion, collision, contact and environmental behavior.",
  },
  {
    id: "02",
    title: "Robot Model",
    label: "MACHINE",
    description:
      "Robot geometry, joints, limits, actuators and kinematic structure.",
  },
  {
    id: "01",
    title: "Virtual Environment",
    label: "WORLD",
    description:
      "Digital representation of workcells, objects and operating space.",
  },
];

const useCases = [
  {
    number: "01",
    title: "Robot Cell Validation",
    description:
      "Evaluate robot placement, reachability, movement and workcell interaction before physical installation.",
    icon: Target,
  },
  {
    number: "02",
    title: "Autonomous Robot Testing",
    description:
      "Create repeatable environments for navigation, planning and obstacle-response development.",
    icon: Route,
  },
  {
    number: "03",
    title: "AI Perception Development",
    description:
      "Use simulated sensor environments to support vision and perception pipeline engineering.",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "Software Integration",
    description:
      "Connect robotic software components in a virtual system before integrating them with physical hardware.",
    icon: Network,
  },
];

const engineeringChecks = [
  "Robot reach and workspace",
  "Joint limits and motion",
  "Collision conditions",
  "Trajectory behavior",
  "Sensor configuration",
  "Control response",
  "Task sequencing",
  "Scenario variation",
  "Software integration",
  "System telemetry",
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
      <span className="font-mono text-[8px] text-[#9b87f5]">
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
   ROBOT ARM
========================================================= */

function RobotArm() {
  return (
    <div className="absolute bottom-[13%] left-1/2 h-[390px] w-[390px] -translate-x-1/2">
      {/* base shadow */}

      <div className="absolute bottom-[4px] left-1/2 h-[38px] w-[250px] -translate-x-1/2 rounded-[50%] bg-[#8b5cf6]/10 blur-[20px]" />

      {/* base */}

      <div className="absolute bottom-0 left-1/2 h-[44px] w-[150px] -translate-x-1/2 rounded-[50%] border border-[#9b87f5]/30 bg-[#0d0913] shadow-[0_0_50px_rgba(124,58,237,.15)]">
        <div className="absolute left-1/2 top-1/2 h-[22px] w-[95px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-[#8b5cf6]/20" />
      </div>

      {/* lower motor */}

      <div className="absolute bottom-[35px] left-1/2 z-20 flex h-[78px] w-[78px] -translate-x-1/2 items-center justify-center rounded-full border border-[#a78bfa]/35 bg-[#0d0913] shadow-[0_0_45px_rgba(124,58,237,.12)]">
        <div className="h-[43px] w-[43px] rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.05]" />

        <div className="absolute h-[8px] w-[8px] rounded-full bg-[#a78bfa] shadow-[0_0_14px_#8b5cf6]" />
      </div>

      {/* lower arm */}

      <div className="robot-lower-arm absolute bottom-[93px] left-[191px] z-10 h-[150px] w-[46px] origin-bottom -rotate-[32deg] rounded-[22px] border border-[#8b5cf6]/30 bg-gradient-to-r from-[#0b0810] via-[#171020] to-[#09060d]">
        <div className="absolute left-1/2 top-5 h-[80px] w-px -translate-x-1/2 bg-[#8b5cf6]/25" />

        <div className="absolute bottom-5 left-1/2 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[#8b5cf6]" />
      </div>

      {/* elbow */}

      <div className="robot-elbow absolute bottom-[214px] left-[120px] z-30 flex h-[66px] w-[66px] items-center justify-center rounded-full border border-[#a78bfa]/35 bg-[#0d0913] shadow-[0_0_35px_rgba(124,58,237,.13)]">
        <div className="h-[37px] w-[37px] rounded-full border border-[#8b5cf6]/30" />

        <div className="absolute h-[8px] w-[8px] rounded-full bg-[#a78bfa] shadow-[0_0_14px_#8b5cf6]" />
      </div>

      {/* upper arm */}

      <div className="robot-upper-arm absolute bottom-[245px] left-[93px] z-20 h-[142px] w-[40px] origin-bottom rotate-[42deg] rounded-[20px] border border-[#8b5cf6]/30 bg-gradient-to-r from-[#09060d] via-[#171020] to-[#09060d]">
        <div className="absolute left-1/2 top-5 h-[75px] w-px -translate-x-1/2 bg-[#8b5cf6]/25" />
      </div>

      {/* wrist */}

      <div className="robot-wrist absolute left-[185px] top-[25px] z-30 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#a78bfa]/35 bg-[#0d0913]">
        <div className="h-[22px] w-[22px] rounded-full border border-[#8b5cf6]/30" />
      </div>

      {/* gripper */}

      <div className="robot-gripper absolute left-[218px] top-[31px] z-30">
        <div className="h-[18px] w-[54px] rounded-r-lg border border-[#8b5cf6]/30 bg-[#0d0913]" />

        <div className="absolute right-[-4px] top-[-17px] h-[20px] w-[8px] rotate-[18deg] rounded-full border border-[#8b5cf6]/40 bg-[#0d0913]" />

        <div className="absolute right-[-4px] top-[15px] h-[20px] w-[8px] -rotate-[18deg] rounded-full border border-[#8b5cf6]/40 bg-[#0d0913]" />
      </div>

      {/* joint labels */}

      <div className="absolute bottom-[73px] right-[54px] flex items-center gap-2">
        <span className="h-px w-10 bg-[#8b5cf6]/25" />

        <span className="font-mono text-[5px] tracking-[0.12em] text-white/25">
          J01
        </span>
      </div>

      <div className="absolute left-[30px] top-[130px] flex items-center gap-2">
        <span className="font-mono text-[5px] tracking-[0.12em] text-white/25">
          J02
        </span>

        <span className="h-px w-10 bg-[#8b5cf6]/25" />
      </div>

      <div className="absolute right-[35px] top-[20px] flex items-center gap-2">
        <span className="h-px w-10 bg-[#8b5cf6]/25" />

        <span className="font-mono text-[5px] tracking-[0.12em] text-white/25">
          TCP
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   SIMULATION VIEWPORT
========================================================= */

function SimulationViewport() {
  return (
    <div className="relative mx-auto h-[670px] w-full max-w-[760px] overflow-hidden rounded-[28px] border border-[#8b5cf6]/20 bg-[#060409] shadow-[0_40px_120px_rgba(0,0,0,.55)]">
      {/* top bar */}

      <div className="absolute left-0 right-0 top-0 z-40 flex h-[48px] items-center justify-between border-b border-[#8b5cf6]/15 bg-[#09060d]/95 px-5 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#8b5cf6]" />
          </div>

          <span className="font-mono text-[6px] tracking-[0.15em] text-white/30">
            HYI.ROBOTICS / SIMULATION
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a78bfa] shadow-[0_0_10px_#8b5cf6]" />

          <span className="font-mono text-[5px] tracking-[0.12em] text-[#b9a4ff]">
            RUNNING
          </span>
        </div>
      </div>

      {/* viewport */}

      <div className="absolute inset-x-0 bottom-[105px] top-[48px] overflow-hidden">
        {/* glow */}

        <div className="absolute left-1/2 top-1/2 h-[420px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.09] blur-[110px]" />

        {/* vertical grid */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.04)_1px,transparent_1px)] bg-[size:34px_34px]" />

        {/* floor perspective */}

        <div className="simulation-floor absolute bottom-[-150px] left-1/2 h-[420px] w-[850px] -translate-x-1/2 rotate-x-[65deg] border border-[#8b5cf6]/10 bg-[linear-gradient(rgba(139,92,246,.11)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.11)_1px,transparent_1px)] bg-[size:45px_45px]" />

        {/* coordinate axes */}

        <div className="absolute bottom-[80px] left-[50px] z-20">
          <div className="absolute bottom-0 left-0 h-[70px] w-px bg-[#c4b5fd]/45">
            <span className="absolute -top-4 -left-1 font-mono text-[6px] text-white/35">
              Y
            </span>
          </div>

          <div className="absolute bottom-0 left-0 h-px w-[70px] bg-[#8b5cf6]/45">
            <span className="absolute -right-4 -top-1 font-mono text-[6px] text-white/35">
              X
            </span>
          </div>

          <div className="absolute bottom-0 left-0 h-px w-[58px] -rotate-[38deg] origin-left bg-[#e9d5ff]/35">
            <span className="absolute -right-4 -top-1 font-mono text-[6px] text-white/35">
              Z
            </span>
          </div>
        </div>

        {/* trajectory */}

        <svg
          className="absolute inset-0 z-10 h-full w-full"
          viewBox="0 0 760 520"
          fill="none"
        >
          <path
            d="M305 400 C 350 345, 320 260, 390 215 C 450 175, 510 205, 565 145"
            stroke="rgba(139,92,246,.18)"
            strokeWidth="9"
          />

          <path
            className="trajectory-line"
            d="M305 400 C 350 345, 320 260, 390 215 C 450 175, 510 205, 565 145"
            stroke="url(#trajectoryGradient)"
            strokeWidth="1.5"
            strokeDasharray="6 7"
          />

          <defs>
            <linearGradient
              id="trajectoryGradient"
              x1="305"
              y1="400"
              x2="565"
              y2="145"
            >
              <stop stopColor="#6d28d9" />
              <stop
                offset="0.55"
                stopColor="#c4b5fd"
              />
              <stop
                offset="1"
                stopColor="#e879f9"
              />
            </linearGradient>
          </defs>
        </svg>

        {/* target */}

        <div className="target-point absolute right-[23%] top-[20%] z-30 flex h-10 w-10 items-center justify-center rounded-full border border-[#c4b5fd]/40">
          <span className="h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_18px_#8b5cf6]" />

          <span className="absolute inset-[-8px] rounded-full border border-[#8b5cf6]/15" />
        </div>

        {/* robot */}

        <RobotArm />

        {/* scanning line */}

        <div className="simulation-scan absolute left-0 right-0 z-30 h-px bg-gradient-to-r from-transparent via-[#a78bfa]/80 to-transparent shadow-[0_0_14px_#8b5cf6]" />

        {/* viewport labels */}

        <div className="absolute left-5 top-5 z-30 rounded-[9px] border border-[#8b5cf6]/15 bg-black/50 px-3 py-2 backdrop-blur-md">
          <span className="font-mono text-[5px] tracking-[0.12em] text-white/30">
            CAMERA / PERSPECTIVE
          </span>
        </div>

        <div className="absolute right-5 top-5 z-30 space-y-2">
          {[
            ["PHYSICS", "ACTIVE"],
            ["COLLISION", "ON"],
            ["CONTROL", "SYNC"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex min-w-[115px] items-center justify-between rounded-[8px] border border-[#8b5cf6]/10 bg-black/45 px-3 py-2 backdrop-blur-md"
            >
              <span className="font-mono text-[5px] text-white/20">
                {label}
              </span>

              <span className="font-mono text-[5px] text-[#b9a4ff]/70">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* bottom telemetry */}

      <div className="absolute bottom-0 left-0 right-0 z-40 grid h-[105px] grid-cols-4 border-t border-[#8b5cf6]/15 bg-[#08050c]">
        {[
          ["SIM TIME", "00:18.42"],
          ["JOINTS", "06 / 06"],
          ["TRAJECTORY", "ACTIVE"],
          ["STATE", "NOMINAL"],
        ].map(([label, value], index) => (
          <div
            key={label}
            className={`flex flex-col justify-center px-4 ${
              index !== 0 ? "border-l border-[#8b5cf6]/10" : ""
            }`}
          >
            <span className="font-mono text-[5px] tracking-[0.1em] text-white/20">
              {label}
            </span>

            <span className="mt-2 font-mono text-[7px] tracking-[0.08em] text-[#c4b5fd]/70">
              {value}
            </span>
          </div>
        ))}
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
      {/* background */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.025)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="absolute right-[-20%] top-[-10%] h-[900px] w-[900px] rounded-full bg-[#7c3aed]/[0.07] blur-[220px]" />

      <div className="absolute bottom-[-20%] left-[-15%] h-[700px] w-[700px] rounded-full bg-[#9333ea]/[0.045] blur-[200px]" />

      <div className="relative mx-auto max-w-[1450px]">
        {/* top meta */}

        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a78bfa]" />

            <span className="font-mono text-[7px] tracking-[0.2em] text-white/40">
              HYI.AI / ROBOTIC SIMULATION
            </span>
          </div>

          <span className="hidden font-mono text-[7px] tracking-[0.18em] text-white/20 md:block">
            DESIGN → SIMULATE → VALIDATE → DEPLOY
          </span>
        </div>

        <div className="grid min-h-[850px] items-center gap-16 py-16 lg:grid-cols-[.88fr_1.12fr]">
          {/* content */}

          <div className="hero-content relative z-20">
            <div className="flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
              <Orbit
                size={11}
                className="text-[#c4b5fd]"
              />

              <span className="font-mono text-[7px] tracking-[0.17em] text-[#c4b5fd]/70">
                VIRTUAL ROBOTICS ENGINEERING
              </span>
            </div>

            <h1 className="mt-9 max-w-[760px] text-[clamp(4.2rem,7vw,7.7rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              Build it
              <span className="block text-white/22">
                virtually.
              </span>

              Validate it
              <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
                before reality.
              </span>
            </h1>

            <p className="mt-9 max-w-[600px] text-[14px] leading-8 text-white/[0.58] md:text-[16px] md:leading-9">
              Robotic simulation creates a controlled digital
              environment for designing, testing and refining robot
              behavior before software and motion are transferred to
              physical machines.
            </p>

            <div className="mt-11 flex flex-wrap gap-4">
              <a
                href="#simulation"
                className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-7 py-4 text-[12px] font-medium shadow-[0_0_40px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
              >
                Explore Simulation

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#digital-twin"
                className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.025] px-7 py-4 text-[12px] text-white/65 transition hover:border-[#8b5cf6]/40"
              >
                Digital Twin

                <ArrowDown size={13} />
              </a>
            </div>

            {/* metrics */}

            <div className="mt-16 grid max-w-[650px] grid-cols-3 border-y border-white/[0.07] py-6">
              {[
                ["VIRTUAL", "Environment"],
                ["REPEATABLE", "Scenarios"],
                ["CONNECTED", "Telemetry"],
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

          {/* model */}

          <SimulationViewport />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MARQUEE
========================================================= */

function SimulationStrip() {
  const words = [
    "DIGITAL TWIN",
    "PHYSICS",
    "ROBOT MOTION",
    "TRAJECTORY",
    "PERCEPTION",
    "AUTONOMY",
    "VALIDATION",
    "TELEMETRY",
    "VIRTUAL COMMISSIONING",
  ];

  return (
    <section className="overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] py-6">
      <div className="simulation-marquee flex w-max whitespace-nowrap">
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

function SimulationIntro() {
  return (
    <section
      id="simulation"
      className="relative overflow-hidden bg-black px-5 py-32 md:px-10 md:py-48"
    >
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.045] blur-[190px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.35fr_1.65fr]">
          <SectionLabel number="01">
            Simulation First
          </SectionLabel>

          <div>
            <h2 className="section-title max-w-[1200px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[88px]">
              Move complexity
              <span className="text-white/25">
                {" "}into the virtual world before it reaches the physical one.
              </span>
            </h2>

            <div className="mt-16 grid gap-10 border-t border-white/[0.07] pt-10 md:grid-cols-2">
              <p className="max-w-[520px] text-[13px] leading-8 text-white/[0.56]">
                Robotics combines software, geometry, sensors,
                controls and physical motion. Simulation gives
                engineering teams a repeatable environment where
                these elements can be integrated and evaluated
                without depending entirely on physical hardware.
              </p>

              <p className="max-w-[520px] text-[13px] leading-8 text-white/[0.56]">
                Instead of discovering every integration problem
                during commissioning, teams can explore robot
                behavior, trajectories, scenarios and software
                interactions earlier in the development lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SIMULATION PROCESS
========================================================= */

function SimulationProcess() {
  return (
    <section className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel number="02">
              Simulation Workflow
            </SectionLabel>

            <h2 className="mt-8 max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Engineer.
              <span className="text-white/25">
                {" "}Run. Observe. Improve.
              </span>
            </h2>
          </div>

          <p className="max-w-[430px] text-[13px] leading-8 text-white/[0.54]">
            A simulation workflow turns robotic development into a
            repeatable engineering loop rather than a one-time
            hardware test.
          </p>
        </div>

        <div className="relative mt-20 grid gap-4 lg:grid-cols-5">
          <div className="absolute left-[8%] right-[8%] top-[64px] hidden h-px bg-gradient-to-r from-[#6d28d9]/30 via-[#c4b5fd]/60 to-[#9333ea]/30 lg:block" />

          {simulationStages.map((stage) => {
            const Icon = stage.icon;

            return (
              <article
                key={stage.number}
                className="group relative min-h-[390px] overflow-hidden rounded-[24px] border border-[#8b5cf6]/15 bg-[#08060d] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#8b5cf6]/35"
              >
                <div className="absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#7c3aed]/[0.06] blur-[80px]" />

                <div className="relative">
                  <div className="process-icon relative z-20 flex h-[64px] w-[64px] items-center justify-center rounded-[19px] border border-[#8b5cf6]/25 bg-[#0d0913]">
                    <Icon
                      size={21}
                      strokeWidth={1}
                      className="text-[#c4b5fd]"
                    />
                  </div>

                  <div className="mt-20">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[6px] tracking-[0.14em] text-[#a78bfa]/60">
                        {stage.label}
                      </span>

                      <span className="font-mono text-[6px] text-white/20">
                        {stage.number}
                      </span>
                    </div>

                    <h3 className="mt-4 text-3xl font-medium tracking-[-0.05em]">
                      {stage.title}
                    </h3>

                    <p className="mt-5 text-[11px] leading-7 text-white/[0.5]">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DIGITAL TWIN MODEL
========================================================= */

function DigitalTwinVisual() {
  return (
    <div className="relative h-[620px] overflow-hidden rounded-[30px] border border-[#8b5cf6]/15 bg-[#07050b]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.035)_1px,transparent_1px)] bg-[size:38px_38px]" />

      <div className="absolute left-1/2 top-1/2 h-[450px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.07] blur-[120px]" />

      {/* heading */}

      <div className="absolute left-6 right-6 top-6 z-30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <RefreshCcw
            size={13}
            className="text-[#a78bfa]"
          />

          <span className="font-mono text-[6px] tracking-[0.15em] text-white/35">
            DIGITAL TWIN SYNCHRONIZATION
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a78bfa]" />

          <span className="font-mono text-[5px] text-[#b9a4ff]/70">
            CONNECTED
          </span>
        </div>
      </div>

      {/* center sync */}

      <div className="absolute left-1/2 top-1/2 z-30 flex h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#a78bfa]/30 bg-[#0b0711] shadow-[0_0_80px_rgba(124,58,237,.2)]">
        <RefreshCcw
          size={31}
          strokeWidth={0.8}
          className="sync-icon text-[#d8ccff]"
        />

        <div className="sync-ring absolute inset-[-14px] rounded-full border border-dashed border-[#8b5cf6]/25" />

        <div className="absolute inset-[-30px] rounded-full border border-[#8b5cf6]/10" />
      </div>

      {/* left system */}

      <div className="absolute left-[8%] top-1/2 z-20 w-[190px] -translate-y-1/2">
        <div className="rounded-[22px] border border-[#8b5cf6]/20 bg-[#0a0710]/90 p-5 backdrop-blur-xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
            <Boxes
              size={19}
              strokeWidth={1}
              className="text-[#c4b5fd]"
            />
          </div>

          <span className="mt-6 block font-mono text-[6px] tracking-[0.13em] text-[#a78bfa]/60">
            VIRTUAL
          </span>

          <h4 className="mt-2 text-xl font-medium">
            Simulation
          </h4>

          <p className="mt-3 text-[9px] leading-5 text-white/40">
            Geometry, physics, sensors and robot software.
          </p>
        </div>
      </div>

      {/* right system */}

      <div className="absolute right-[8%] top-1/2 z-20 w-[190px] -translate-y-1/2">
        <div className="rounded-[22px] border border-[#8b5cf6]/20 bg-[#0a0710]/90 p-5 backdrop-blur-xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
            <Cpu
              size={19}
              strokeWidth={1}
              className="text-[#c4b5fd]"
            />
          </div>

          <span className="mt-6 block font-mono text-[6px] tracking-[0.13em] text-[#a78bfa]/60">
            PHYSICAL
          </span>

          <h4 className="mt-2 text-xl font-medium">
            Robot
          </h4>

          <p className="mt-3 text-[9px] leading-5 text-white/40">
            Hardware state, control and machine telemetry.
          </p>
        </div>
      </div>

      {/* connections */}

      <div className="absolute left-[31%] top-1/2 h-px w-[13%] bg-gradient-to-r from-[#8b5cf6]/20 to-[#c4b5fd]/60" />

      <div className="absolute right-[31%] top-1/2 h-px w-[13%] bg-gradient-to-r from-[#c4b5fd]/60 to-[#8b5cf6]/20" />

      <div className="data-packet-one absolute left-[35%] top-[calc(50%-2px)] h-1 w-1 rounded-full bg-[#e9d5ff] shadow-[0_0_10px_#8b5cf6]" />

      <div className="data-packet-two absolute right-[35%] top-[calc(50%-2px)] h-1 w-1 rounded-full bg-[#e9d5ff] shadow-[0_0_10px_#8b5cf6]" />

      {/* telemetry */}

      <div className="absolute bottom-7 left-7 right-7 grid grid-cols-4 gap-2">
        {[
          ["MODEL", "SYNC"],
          ["STATE", "STREAM"],
          ["CONTROL", "LINK"],
          ["DATA", "ACTIVE"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-[10px] border border-white/[0.06] bg-black/35 p-3"
          >
            <span className="block font-mono text-[5px] text-white/20">
              {label}
            </span>

            <span className="mt-2 block font-mono text-[6px] text-[#b9a4ff]/70">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   DIGITAL TWIN
========================================================= */

function DigitalTwin() {
  return (
    <section
      id="digital-twin"
      className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-[1450px] items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
        <DigitalTwinVisual />

        <div>
          <SectionLabel number="03">
            Digital Twin
          </SectionLabel>

          <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            One machine.
            <span className="block text-white/25">
              Two realities.
            </span>
          </h2>

          <p className="mt-8 max-w-[530px] text-[13px] leading-8 text-white/[0.56]">
            A robotic digital twin creates a software representation
            of the physical system that can support engineering,
            validation and operational analysis throughout the robot
            lifecycle.
          </p>

          <div className="mt-10 space-y-3">
            {[
              "Robot geometry and kinematics",
              "Virtual sensors and environments",
              "Software and control integration",
              "Machine state representation",
              "Simulation telemetry",
              "Physical-to-digital comparison",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-white/[0.07] py-4"
              >
                <CheckCircle2
                  size={13}
                  strokeWidth={1.2}
                  className="text-[#a78bfa]"
                />

                <span className="text-[12px] text-white/[0.58]">
                  {item}
                </span>
              </div>
            ))}
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
    <section className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="04">
          Simulation Capabilities
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            A virtual lab for
            <span className="block text-white/25">
              robotic engineering.
            </span>
          </h2>

          <p className="max-w-[430px] text-[13px] leading-8 text-white/[0.54]">
            Combine digital environments, robot models, software and
            engineering telemetry into a single simulation workflow.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="capability-card group relative min-h-[410px] overflow-hidden rounded-[25px] border border-[#8b5cf6]/15 bg-[#08060d] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#8b5cf6]/35"
              >
                <div className="absolute -right-20 -top-20 h-[250px] w-[250px] rounded-full bg-[#7c3aed]/[0.06] blur-[85px]" />

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
                    <span className="font-mono text-[6px] tracking-[0.15em] text-[#a78bfa]/60">
                      {item.eyebrow}
                    </span>

                    <h3 className="mt-4 text-3xl font-medium tracking-[-0.05em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[12px] leading-7 text-white/[0.52]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#7c3aed] to-[#c4b5fd] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DIGITAL TWIN STACK
========================================================= */

function TwinArchitecture() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.72fr_1.28fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel number="05">
              Simulation Stack
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Model the
              <span className="block text-white/25">
                complete system.
              </span>
            </h2>

            <p className="mt-8 max-w-[480px] text-[13px] leading-8 text-white/[0.54]">
              Useful robotic simulation goes beyond a visual 3D
              model. It connects the environment, machine structure,
              physics, sensors, software and engineering data.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <Layers3
                size={15}
                className="text-[#a78bfa]"
              />

              <span className="font-mono text-[6px] tracking-[0.13em] text-white/30">
                DIGITAL ROBOT SYSTEM
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {digitalTwinLayers.map((item, index) => (
              <article
                key={item.id}
                className="group relative overflow-hidden rounded-[20px] border border-[#8b5cf6]/15 bg-[#08060d] p-6 transition duration-300 hover:translate-x-2 hover:border-[#8b5cf6]/35 md:p-8"
              >
                <div
                  className="absolute bottom-0 left-0 top-0 bg-gradient-to-r from-[#7c3aed]/[0.08] to-transparent"
                  style={{
                    width: `${100 - index * 7}%`,
                  }}
                />

                <div className="relative grid gap-5 md:grid-cols-[60px_120px_1fr_1.2fr] md:items-center">
                  <span className="font-mono text-[6px] text-[#a78bfa]/60">
                    L{item.id}
                  </span>

                  <span className="font-mono text-[6px] tracking-[0.14em] text-white/25">
                    {item.label}
                  </span>

                  <h3 className="text-xl font-medium text-white/75">
                    {item.title}
                  </h3>

                  <p className="text-[11px] leading-6 text-white/[0.49]">
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
   TELEMETRY
========================================================= */

function TelemetrySection() {
  return (
    <section className="relative overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel number="06">
              Simulation Telemetry
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              See what
              <span className="block text-white/25">
                the robot did.
              </span>
            </h2>

            <p className="mt-8 max-w-[500px] text-[13px] leading-8 text-white/[0.54]">
              Simulation becomes more useful when behavior can be
              inspected. Telemetry provides engineering context for
              trajectories, robot states, events and system timing.
            </p>
          </div>

          {/* dashboard */}

          <div className="rounded-[28px] border border-[#8b5cf6]/15 bg-[#08060d] p-5 md:p-7">
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
              <div className="flex items-center gap-3">
                <Activity
                  size={14}
                  className="text-[#a78bfa]"
                />

                <span className="font-mono text-[6px] tracking-[0.15em] text-white/35">
                  SIMULATION TELEMETRY
                </span>
              </div>

              <span className="font-mono text-[5px] text-[#b9a4ff]/60">
                LIVE
              </span>
            </div>

            {/* graph */}

            <div className="relative mt-6 h-[240px] overflow-hidden rounded-[18px] border border-white/[0.06] bg-black/30">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.04)_1px,transparent_1px)] bg-[size:32px_32px]" />

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 700 240"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 170 C45 160 65 95 110 120 C155 145 180 65 225 85 C270 105 300 165 345 130 C390 95 420 45 465 78 C510 111 545 145 590 110 C635 75 660 92 700 50"
                  fill="none"
                  stroke="rgba(139,92,246,.22)"
                  strokeWidth="8"
                />

                <path
                  className="telemetry-path"
                  d="M0 170 C45 160 65 95 110 120 C155 145 180 65 225 85 C270 105 300 165 345 130 C390 95 420 45 465 78 C510 111 545 145 590 110 C635 75 660 92 700 50"
                  fill="none"
                  stroke="url(#telemetryGradient)"
                  strokeWidth="2"
                />

                <defs>
                  <linearGradient
                    id="telemetryGradient"
                    x1="0"
                    y1="0"
                    x2="700"
                    y2="0"
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

              <div className="absolute left-4 top-4">
                <span className="font-mono text-[5px] tracking-[0.1em] text-white/20">
                  JOINT VELOCITY / TIMELINE
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                ["J01", "42.1°"],
                ["J02", "18.6°"],
                ["J03", "63.4°"],
                ["TCP", "ACTIVE"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[13px] border border-white/[0.06] bg-black/30 p-4"
                >
                  <span className="font-mono text-[5px] text-white/20">
                    {label}
                  </span>

                  <span className="mt-2 block font-mono text-[8px] text-[#c4b5fd]/70">
                    {value}
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
   ENGINEERING CHECKS
========================================================= */

function ValidationSection() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionLabel number="07">
              Virtual Validation
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Test assumptions
              <span className="block text-white/25">
                before hardware.
              </span>
            </h2>

            <p className="mt-8 max-w-[520px] text-[13px] leading-8 text-white/[0.54]">
              Simulation gives engineers a place to investigate
              system assumptions, identify integration issues and
              refine robotic behavior before relying on physical
              commissioning.
            </p>

            <div className="mt-10 flex items-center gap-4 rounded-[17px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.035] p-5">
              <ShieldCheck
                size={20}
                strokeWidth={1}
                className="text-[#c4b5fd]"
              />

              <div>
                <span className="block font-mono text-[6px] tracking-[0.12em] text-white/25">
                  ENGINEERING PRINCIPLE
                </span>

                <span className="mt-2 block text-[11px] text-white/55">
                  Validate virtually. Verify physically.
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {engineeringChecks.map((item, index) => (
              <div
                key={item}
                className="validation-card group flex min-h-[105px] items-center justify-between rounded-[18px] border border-white/[0.07] bg-[#08060d] px-5 transition duration-300 hover:border-[#8b5cf6]/30"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[6px] text-[#a78bfa]/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[12px] text-white/[0.58]">
                    {item}
                  </span>
                </div>

                <CheckCircle2
                  size={13}
                  strokeWidth={1}
                  className="text-[#8b5cf6]/45"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   USE CASES
========================================================= */

function UseCases() {
  return (
    <section className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="absolute right-[-15%] top-[10%] h-[700px] w-[700px] rounded-full bg-[#7c3aed]/[0.05] blur-[190px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <SectionLabel number="08">
          Simulation Applications
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Build confidence
            <span className="block text-white/25">
              before deployment.
            </span>
          </h2>

          <p className="max-w-[430px] text-[13px] leading-8 text-white/[0.54]">
            Virtual robotics environments support development across
            industrial robots, autonomous systems, perception and
            software integration.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {useCases.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="usecase-card group relative min-h-[310px] overflow-hidden rounded-[26px] border border-[#8b5cf6]/15 bg-[#08060d] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#8b5cf6]/35 md:p-9"
              >
                <div className="absolute -right-20 -top-20 h-[250px] w-[250px] rounded-full bg-[#7c3aed]/[0.06] blur-[80px]" />

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

                  <div className="mt-16">
                    <h3 className="text-3xl font-medium tracking-[-0.05em] md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-[540px] text-[12px] leading-7 text-white/[0.52]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
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
    <section className="relative overflow-hidden bg-black px-5 py-36 md:px-10 md:py-52">
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.08] blur-[220px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.025)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="relative mx-auto max-w-[1450px] text-center">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
          <Orbit
            size={11}
            className="text-[#c4b5fd]"
          />

          <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
            HYI.AI / ROBOTIC SIMULATION
          </span>
        </div>

        <h2 className="final-title mx-auto mt-10 max-w-[1350px] text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.82] tracking-[-0.09em]">
          Simulate first.
          <span className="block text-white/20">
            Learn earlier.
          </span>

          Deploy with
          <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
            confidence.
          </span>
        </h2>

        <p className="mx-auto mt-10 max-w-[700px] text-[14px] leading-8 text-white/[0.54]">
          Connect robot models, physics, software, autonomy and
          engineering telemetry inside a virtual robotics workflow.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="#simulation"
            className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-8 py-4 text-[12px] font-medium shadow-[0_0_45px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
          >
            Explore Simulation

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

export default function RoboticSimulationPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes simulationScan {
              0% {
                top: 5%;
                opacity: 0;
              }

              10% {
                opacity: 1;
              }

              90% {
                opacity: 1;
              }

              100% {
                top: 95%;
                opacity: 0;
              }
            }

            @keyframes trajectoryMove {
              from {
                stroke-dashoffset: 0;
              }

              to {
                stroke-dashoffset: -52;
              }
            }

            @keyframes targetPulse {
              0%, 100% {
                transform: scale(.9);
                opacity: .6;
              }

              50% {
                transform: scale(1.12);
                opacity: 1;
              }
            }

            @keyframes lowerArm {
              0%, 100% {
                transform: rotate(-32deg);
              }

              50% {
                transform: rotate(-26deg);
              }
            }

            @keyframes upperArm {
              0%, 100% {
                transform: rotate(42deg);
              }

              50% {
                transform: rotate(35deg);
              }
            }

            @keyframes elbowPulse {
              0%, 100% {
                box-shadow: 0 0 25px rgba(124,58,237,.08);
              }

              50% {
                box-shadow: 0 0 45px rgba(124,58,237,.22);
              }
            }

            @keyframes wristMove {
              0%, 100% {
                transform: rotate(0deg);
              }

              50% {
                transform: rotate(12deg);
              }
            }

            @keyframes gripperMove {
              0%, 100% {
                transform: translateX(0);
              }

              50% {
                transform: translateX(5px);
              }
            }

            @keyframes marquee {
              from {
                transform: translateX(0);
              }

              to {
                transform: translateX(-50%);
              }
            }

            @keyframes syncRotate {
              from {
                transform: rotate(0deg);
              }

              to {
                transform: rotate(360deg);
              }
            }

            @keyframes syncIcon {
              0%, 100% {
                transform: rotate(0deg);
              }

              50% {
                transform: rotate(180deg);
              }
            }

            @keyframes packetOne {
              0% {
                left: 31%;
                opacity: 0;
              }

              15% {
                opacity: 1;
              }

              85% {
                opacity: 1;
              }

              100% {
                left: 45%;
                opacity: 0;
              }
            }

            @keyframes packetTwo {
              0% {
                right: 31%;
                opacity: 0;
              }

              15% {
                opacity: 1;
              }

              85% {
                opacity: 1;
              }

              100% {
                right: 45%;
                opacity: 0;
              }
            }

            @keyframes telemetryPath {
              from {
                stroke-dasharray: 0 1000;
              }

              to {
                stroke-dasharray: 1000 0;
              }
            }

            @keyframes processFloat {
              0%, 100% {
                transform: translateY(0);
              }

              50% {
                transform: translateY(-6px);
              }
            }

            @keyframes heroReveal {
              from {
                opacity: 0;
                transform: translateY(32px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes titleReveal {
              from {
                opacity: 0;
                transform: translateY(28px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .simulation-scan {
              animation: simulationScan 4s ease-in-out infinite;
            }

            .trajectory-line {
              animation: trajectoryMove 3s linear infinite;
            }

            .target-point {
              animation: targetPulse 2.4s ease-in-out infinite;
            }

            .robot-lower-arm {
              animation: lowerArm 5s ease-in-out infinite;
            }

            .robot-upper-arm {
              animation: upperArm 5s ease-in-out infinite;
            }

            .robot-elbow {
              animation: elbowPulse 2.8s ease-in-out infinite;
            }

            .robot-wrist {
              animation: wristMove 4s ease-in-out infinite;
            }

            .robot-gripper {
              animation: gripperMove 4s ease-in-out infinite;
            }

            .simulation-marquee {
              animation: marquee 35s linear infinite;
            }

            .sync-ring {
              animation: syncRotate 14s linear infinite;
            }

            .sync-icon {
              animation: syncIcon 6s ease-in-out infinite;
            }

            .data-packet-one {
              animation: packetOne 2.4s linear infinite;
            }

            .data-packet-two {
              animation: packetTwo 2.4s linear infinite;
              animation-delay: 1.2s;
            }

            .telemetry-path {
              animation: telemetryPath 4s ease-out infinite;
            }

            .process-icon {
              animation: processFloat 4s ease-in-out infinite;
            }

            .hero-content {
              animation: heroReveal .9s cubic-bezier(.16,1,.3,1) both;
            }

            .section-title,
            .final-title {
              animation: titleReveal .9s cubic-bezier(.16,1,.3,1) both;
            }

            .simulation-floor {
              transform: perspective(700px) rotateX(64deg);
              transform-origin: center bottom;
            }

            @media (max-width: 768px) {
              .simulation-floor {
                width: 650px;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .simulation-scan,
              .trajectory-line,
              .target-point,
              .robot-lower-arm,
              .robot-upper-arm,
              .robot-elbow,
              .robot-wrist,
              .robot-gripper,
              .simulation-marquee,
              .sync-ring,
              .sync-icon,
              .data-packet-one,
              .data-packet-two,
              .telemetry-path,
              .process-icon,
              .hero-content,
              .section-title,
              .final-title {
                animation: none !important;
              }
            }
          `,
        }}
      />

      <Header />

      <Hero />

      <SimulationStrip />

      <SimulationIntro />

      <SimulationProcess />

      <DigitalTwin />

      <Capabilities />

      <TwinArchitecture />

      <TelemetrySection />

      <ValidationSection />

      <UseCases />

      <FinalCTA />

      <Footer />
    </main>
  );
}