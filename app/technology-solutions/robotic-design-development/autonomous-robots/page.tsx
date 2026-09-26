import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  Activity,
  ArrowRight,
  Bot,
  Box,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Cpu,
  Crosshair,
  Eye,
  Factory,
  Gauge,
  GitBranch,
  Globe2,
  Map,
  MapPin,
  Navigation,
  Network,
  PackageCheck,
  Radar,
  Route,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Target,
  Warehouse,
  Waves,
  Workflow,
  Zap,
} from "lucide-react";

/* ============================================================
   AUTONOMOUS ROBOTS
   HYI.AI

   ROUTE:
   /technology-solutions/robotic-design-development/autonomous-robots

   SINGLE FILE
============================================================ */

const intelligence = [
  {
    icon: Eye,
    number: "01",
    title: "Perception",
    label: "SEE THE ENVIRONMENT",
    text: "Fuse cameras, depth sensing, LiDAR and other sensor inputs to build useful awareness of the robot's operating environment.",
  },
  {
    icon: Map,
    number: "02",
    title: "Localization",
    label: "UNDERSTAND POSITION",
    text: "Estimate the robot's position relative to maps, landmarks and continuously changing surroundings.",
  },
  {
    icon: Route,
    number: "03",
    title: "Path Planning",
    label: "PLAN MOVEMENT",
    text: "Generate navigable routes while accounting for destinations, constraints, obstacles and operating rules.",
  },
  {
    icon: BrainCircuit,
    number: "04",
    title: "AI Decisions",
    label: "INTERPRET CONTEXT",
    text: "Apply AI where robots need to classify situations, interpret sensor information or select context-aware actions.",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Safe Motion",
    label: "CONTROL MOVEMENT",
    text: "Coordinate motion and safety logic so autonomous behavior remains bounded by defined operational constraints.",
  },
  {
    icon: Network,
    number: "06",
    title: "Fleet Intelligence",
    label: "COORDINATE SYSTEMS",
    text: "Connect multiple autonomous robots with shared task management, operational visibility and enterprise systems.",
  },
];

const applications = [
  {
    icon: Warehouse,
    title: "Warehouse Mobility",
    text: "Autonomous movement of material across suitable warehouse and fulfillment environments.",
    tag: "LOGISTICS",
  },
  {
    icon: PackageCheck,
    title: "Material Transport",
    text: "Move components and payloads between defined production or operational locations.",
    tag: "MATERIAL FLOW",
  },
  {
    icon: Factory,
    title: "Factory Operations",
    text: "Support internal logistics and repeatable movement around connected manufacturing environments.",
    tag: "MANUFACTURING",
  },
  {
    icon: ScanLine,
    title: "Autonomous Inspection",
    text: "Navigate selected facilities while collecting visual, thermal or sensor-based inspection data.",
    tag: "INSPECTION",
  },
  {
    icon: Crosshair,
    title: "Precision Navigation",
    text: "Combine localization and control for applications requiring repeatable autonomous positioning.",
    tag: "NAVIGATION",
  },
  {
    icon: Globe2,
    title: "Distributed Operations",
    text: "Coordinate autonomous platforms across facilities through connected fleet and monitoring systems.",
    tag: "FLEET",
  },
];

const stack = [
  {
    number: "01",
    icon: Waves,
    title: "Sensors",
    description: "LiDAR / Camera / Depth / IMU",
  },
  {
    number: "02",
    icon: Eye,
    title: "Perception",
    description: "Detection / Classification / Tracking",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Localization",
    description: "Position / Mapping / SLAM",
  },
  {
    number: "04",
    icon: Route,
    title: "Planning",
    description: "Routes / Constraints / Obstacles",
  },
  {
    number: "05",
    icon: Cpu,
    title: "Control",
    description: "Motion / Steering / Actuation",
  },
  {
    number: "06",
    icon: Network,
    title: "Operations",
    description: "Fleet / Data / Monitoring",
  },
];

const workflow = [
  {
    number: "01",
    title: "Sense",
    text: "Collect environmental and robot-state information.",
  },
  {
    number: "02",
    title: "Understand",
    text: "Convert sensor signals into useful spatial context.",
  },
  {
    number: "03",
    title: "Locate",
    text: "Estimate position and orientation in the environment.",
  },
  {
    number: "04",
    title: "Plan",
    text: "Determine a suitable path toward the assigned objective.",
  },
  {
    number: "05",
    title: "Move",
    text: "Translate planning decisions into controlled physical motion.",
  },
  {
    number: "06",
    title: "Adapt",
    text: "Observe new conditions and continuously update behavior.",
  },
];

/* ============================================================
   AUTONOMOUS ROVER MODEL
============================================================ */

function AutonomousRobotModel() {
  return (
    <div className="relative mx-auto h-[540px] w-full max-w-[680px] md:h-[650px]">
      {/* background glow */}

      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/15 blur-[110px]" />

      {/* outer radar */}

      <div className="robot-radar absolute left-1/2 top-[47%] h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/15">
        <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a78bfa] shadow-[0_0_15px_#8b5cf6]" />

        <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#8b5cf6]/60" />
      </div>

      <div className="robot-radar-reverse absolute left-1/2 top-[47%] h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#a855f7]/20" />

      <div className="absolute left-1/2 top-[47%] h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />

      {/* axis */}

      <div className="absolute left-1/2 top-[9%] h-[77%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#8b5cf6]/20 to-transparent" />

      <div className="absolute left-[10%] top-[47%] h-px w-[80%] bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent" />

      {/* navigation arcs */}

      <svg
        viewBox="0 0 680 650"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path
          d="M70 470 C170 390 190 510 275 445 C355 385 405 435 470 370 C520 320 555 315 620 340"
          stroke="rgba(167,139,250,.28)"
          strokeWidth="1"
          strokeDasharray="6 8"
          className="nav-path"
        />

        <path
          d="M105 170 C190 220 215 140 290 195 C360 245 410 170 470 215 C520 250 570 225 620 190"
          stroke="rgba(139,92,246,.16)"
          strokeWidth="1"
          strokeDasharray="4 9"
          className="nav-path nav-path-delay"
        />
      </svg>

      {/* map nodes */}

      <div className="nav-node absolute left-[10%] top-[71%]">
        <span className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a78bfa]/30" />
        <span className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c4b5fd] shadow-[0_0_12px_#8b5cf6]" />
      </div>

      <div className="nav-node absolute right-[8%] top-[52%]">
        <span className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a78bfa]/30" />
        <span className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c4b5fd] shadow-[0_0_12px_#8b5cf6]" />
      </div>

      {/* ======================================================
          ROBOT BODY
      ====================================================== */}

      <div className="rover absolute left-1/2 top-[52%] h-[270px] w-[390px] -translate-x-1/2 -translate-y-1/2">
        {/* ground shadow */}

        <div className="absolute bottom-[8px] left-1/2 h-[35px] w-[310px] -translate-x-1/2 rounded-[50%] bg-[#7c3aed]/20 blur-xl" />

        {/* wheels back */}

        <div className="wheel wheel-left absolute bottom-[30px] left-[15px] h-[88px] w-[72px] rounded-[28px] border border-[#a78bfa]/35 bg-gradient-to-r from-[#09070d] via-[#281a40] to-[#08060b] shadow-[0_0_25px_rgba(124,58,237,.15)]">
          <div className="absolute left-1/2 top-1/2 h-[38px] w-[38px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a78bfa]/35 bg-black">
            <div className="absolute left-1/2 top-1/2 h-[13px] w-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6]/40" />
          </div>
        </div>

        <div className="wheel wheel-right absolute bottom-[30px] right-[15px] h-[88px] w-[72px] rounded-[28px] border border-[#a78bfa]/35 bg-gradient-to-l from-[#09070d] via-[#281a40] to-[#08060b] shadow-[0_0_25px_rgba(124,58,237,.15)]">
          <div className="absolute left-1/2 top-1/2 h-[38px] w-[38px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a78bfa]/35 bg-black">
            <div className="absolute left-1/2 top-1/2 h-[13px] w-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b5cf6]/40" />
          </div>
        </div>

        {/* chassis */}

        <div className="absolute bottom-[62px] left-1/2 h-[112px] w-[310px] -translate-x-1/2 rounded-[38px_38px_26px_26px] border border-[#a78bfa]/35 bg-gradient-to-b from-[#27173f] via-[#100a19] to-[#060508] shadow-[0_0_55px_rgba(124,58,237,.17)]">
          {/* front face */}

          <div className="absolute left-1/2 top-[24px] flex h-[48px] w-[220px] -translate-x-1/2 items-center justify-between rounded-[18px] border border-[#8b5cf6]/20 bg-black/50 px-6">
            <div className="sensor-eye relative h-5 w-5 rounded-full border border-[#c4b5fd]/40 bg-[#8b5cf6]/15">
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8b4fe] shadow-[0_0_13px_#8b5cf6]" />
            </div>

            <div className="flex gap-2">
              <span className="h-1 w-7 rounded-full bg-[#8b5cf6]/30" />
              <span className="h-1 w-3 rounded-full bg-[#a78bfa]/50" />
            </div>

            <div className="sensor-eye sensor-delay relative h-5 w-5 rounded-full border border-[#c4b5fd]/40 bg-[#8b5cf6]/15">
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8b4fe] shadow-[0_0_13px_#8b5cf6]" />
            </div>
          </div>

          {/* lower strip */}

          <div className="absolute bottom-[13px] left-1/2 flex -translate-x-1/2 gap-2">
            {Array.from({ length: 7 }).map((_, index) => (
              <span
                key={index}
                className="h-[2px] w-[17px] rounded-full bg-[#8b5cf6]/20"
              />
            ))}
          </div>
        </div>

        {/* top platform */}

        <div className="absolute bottom-[166px] left-1/2 h-[45px] w-[175px] -translate-x-1/2 rounded-[18px_18px_8px_8px] border border-[#a78bfa]/30 bg-gradient-to-b from-[#281842] to-[#0a0710]">
          <div className="absolute left-1/2 top-1/2 h-px w-[110px] -translate-x-1/2 bg-[#a78bfa]/25" />
        </div>

        {/* lidar mast */}

        <div className="absolute bottom-[207px] left-1/2 h-[58px] w-[12px] -translate-x-1/2 rounded-full border border-[#a78bfa]/30 bg-[#171020]" />

        {/* lidar head */}

        <div className="lidar-head absolute bottom-[247px] left-1/2 h-[40px] w-[82px] -translate-x-1/2 rounded-[14px] border border-[#c4b5fd]/40 bg-gradient-to-b from-[#342054] to-[#0a0710] shadow-[0_0_30px_rgba(139,92,246,.25)]">
          <div className="absolute left-1/2 top-1/2 h-[8px] w-[58px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a78bfa]/20" />

          <div className="absolute left-1/2 top-1/2 h-[3px] w-[45px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8b4fe]/70 shadow-[0_0_12px_#8b5cf6]" />
        </div>
      </div>

      {/* lidar scan */}

      <div className="lidar-scan absolute left-1/2 top-[29%] h-[220px] w-[220px] -translate-x-1/2 rounded-full">
        <div className="absolute left-1/2 top-1/2 h-px w-[110px] origin-left bg-gradient-to-r from-[#c4b5fd]/70 to-transparent" />
      </div>

      {/* labels */}

      <div className="absolute left-[2%] top-[25%] hidden items-center gap-3 md:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />

        <span className="font-mono text-[7px] tracking-[0.18em] text-white/35">
          3D PERCEPTION
        </span>
      </div>

      <div className="absolute right-[2%] top-[35%] hidden items-center gap-3 md:flex">
        <span className="font-mono text-[7px] tracking-[0.18em] text-white/35">
          AUTONOMOUS NAVIGATION
        </span>

        <span className="h-1.5 w-1.5 rounded-full bg-[#c084fc]" />
      </div>

      <div className="absolute bottom-[14%] left-[7%] hidden items-center gap-3 md:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-[#8b5cf6]" />

        <span className="font-mono text-[7px] tracking-[0.18em] text-white/35">
          AI MOTION CONTROL
        </span>
      </div>

      {/* status */}

      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-5 py-3 backdrop-blur-xl">
        <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#c4b5fd]" />

        <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
          AUTONOMOUS SYSTEM / NAVIGATING
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
    <section className="relative min-h-screen overflow-hidden bg-[#000000] px-5 pb-24 pt-36 md:px-10 md:pt-44">
      {/* glow */}

      <div className="pointer-events-none absolute right-[-5%] top-[12%] h-[700px] w-[700px] rounded-full bg-[#6d28d9]/[0.12] blur-[160px]" />

      <div className="pointer-events-none absolute left-[-15%] top-[45%] h-[450px] w-[450px] rounded-full bg-[#9333ea]/[0.06] blur-[150px]" />

      <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-[1450px]">
        {/* top meta */}

        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />

            <span className="font-mono text-[7px] tracking-[0.2em] text-white/40">
              HYI.AI / AUTONOMOUS ROBOTS
            </span>
          </div>

          <span className="hidden font-mono text-[7px] tracking-[0.18em] text-white/20 md:block">
            ROBOTIC DESIGN & DEVELOPMENT / 03
          </span>
        </div>

        <div className="grid min-h-[760px] items-center gap-10 lg:grid-cols-[.92fr_1.08fr]">
          {/* content */}

          <div className="hero-enter relative z-10 pt-20 lg:pt-0">
            <div className="flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07] px-4 py-2">
              <Navigation
                size={11}
                className="text-[#b9a4ff]"
              />

              <span className="font-mono text-[7px] tracking-[0.18em] text-[#c4b5fd]/70">
                AI / PERCEPTION / NAVIGATION
              </span>
            </div>

            <h1 className="mt-9 max-w-[800px] text-[clamp(4.1rem,7.2vw,8rem)] font-semibold leading-[0.82] tracking-[-0.085em]">
              Machines
              <span className="block text-white/25">
                that understand
              </span>
              <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
                where to go.
              </span>
            </h1>

            <p className="mt-10 max-w-[630px] text-[14px] leading-8 text-white/50 md:text-[16px] md:leading-9">
              Design autonomous robotic systems that perceive their
              surroundings, understand position, plan movement,
              respond to obstacles and coordinate with connected
              operations.
            </p>

            <div className="mt-11 flex flex-wrap gap-4">
              <a
                href="#intelligence"
                className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-7 py-4 text-[12px] font-medium text-white shadow-[0_0_35px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
              >
                Explore Autonomous Systems

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#architecture"
                className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.025] px-7 py-4 text-[12px] text-white/65 transition hover:border-[#8b5cf6]/40 hover:bg-[#8b5cf6]/[0.05]"
              >
                View Architecture

                <ChevronRight size={13} />
              </a>
            </div>

            {/* bottom stats */}

            <div className="mt-16 grid max-w-[650px] grid-cols-3 border-y border-white/[0.07] py-6">
              <div>
                <span className="font-mono text-[6px] tracking-[0.16em] text-white/20">
                  PERCEPTION
                </span>

                <p className="mt-2 text-[11px] text-white/55">
                  Sensor Fusion
                </p>
              </div>

              <div className="border-l border-white/[0.07] pl-6">
                <span className="font-mono text-[6px] tracking-[0.16em] text-white/20">
                  NAVIGATION
                </span>

                <p className="mt-2 text-[11px] text-white/55">
                  Autonomous
                </p>
              </div>

              <div className="border-l border-white/[0.07] pl-6">
                <span className="font-mono text-[6px] tracking-[0.16em] text-white/20">
                  INTELLIGENCE
                </span>

                <p className="mt-2 text-[11px] text-white/55">
                  AI Powered
                </p>
              </div>
            </div>
          </div>

          {/* robot */}

          <AutonomousRobotModel />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SIGNAL BAR
============================================================ */

function SignalBar() {
  const signals = [
    "PERCEPTION",
    "LOCALIZATION",
    "SLAM",
    "PATH PLANNING",
    "OBSTACLE AVOIDANCE",
    "MOTION CONTROL",
    "AI DECISIONS",
    "FLEET INTELLIGENCE",
  ];

  return (
    <section className="overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] py-6">
      <div className="signal-marquee flex w-max items-center whitespace-nowrap">
        {[...signals, ...signals].map((signal, index) => (
          <div
            key={`${signal}-${index}`}
            className="flex items-center"
          >
            <span className="px-10 font-mono text-[7px] tracking-[0.22em] text-white/35 md:px-14">
              {signal}
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

/* ============================================================
   INTELLIGENCE SECTION
============================================================ */

function IntelligenceSection() {
  return (
    <section
      id="intelligence"
      className="relative overflow-hidden bg-[#000000] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.06] blur-[160px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          {/* title */}

          <div>
            <div className="lg:sticky lg:top-28">
              <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
                01 / AUTONOMOUS INTELLIGENCE
              </span>

              <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
                Sense.
                <span className="block text-white/25">
                  Understand.
                </span>
                Move.
              </h2>

              <p className="mt-8 max-w-[430px] text-[13px] leading-8 text-white/45">
                Autonomy emerges from a continuous loop between
                perception, spatial understanding, planning, control
                and feedback.
              </p>

              <div className="mt-10 flex items-center gap-3">
                <Activity
                  size={14}
                  className="text-[#a78bfa]"
                />

                <span className="font-mono text-[7px] tracking-[0.16em] text-white/30">
                  CONTINUOUS DECISION LOOP
                </span>
              </div>
            </div>
          </div>

          {/* cards */}

          <div className="grid gap-4 md:grid-cols-2">
            {intelligence.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="intelligence-card group relative min-h-[350px] overflow-hidden rounded-[24px] border border-[#8b5cf6]/15 bg-[#07050b] p-8"
                >
                  <div className="absolute -right-20 -top-20 h-[240px] w-[240px] rounded-full bg-[#7c3aed]/[0.08] blur-[75px] transition duration-500 group-hover:bg-[#7c3aed]/[0.15]" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07]">
                        <Icon
                          size={18}
                          strokeWidth={1.2}
                          className="text-[#b9a4ff]"
                        />
                      </div>

                      <span className="font-mono text-[6px] text-white/20">
                        {item.number}
                      </span>
                    </div>

                    <div className="mt-20">
                      <span className="font-mono text-[6px] tracking-[0.16em] text-[#a78bfa]/60">
                        {item.label}
                      </span>

                      <h3 className="mt-4 text-3xl font-medium tracking-[-0.05em]">
                        {item.title}
                      </h3>

                      <p className="mt-5 text-[12px] leading-7 text-white/42">
                        {item.text}
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
   AUTONOMOUS NAVIGATION VISUAL
============================================================ */

function NavigationVisual() {
  return (
    <div className="relative min-h-[620px] overflow-hidden rounded-[30px] border border-[#8b5cf6]/15 bg-[#07050b]">
      <div className="navigation-grid absolute inset-0" />

      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[110px]" />

      {/* header */}

      <div className="absolute left-7 right-7 top-7 z-20 flex items-center justify-between border-b border-white/[0.06] pb-5">
        <div className="flex items-center gap-3">
          <Radar
            size={13}
            className="text-[#a78bfa]"
          />

          <span className="font-mono text-[7px] tracking-[0.18em] text-white/35">
            AUTONOMOUS NAVIGATION FIELD
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#c4b5fd]" />

          <span className="font-mono text-[6px] tracking-[0.14em] text-white/25">
            LIVE
          </span>
        </div>
      </div>

      {/* destination */}

      <div className="absolute right-[14%] top-[24%] z-10">
        <div className="destination-pulse absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a78bfa]/20" />

        <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#a78bfa]/35 bg-[#8b5cf6]/10">
          <MapPin
            size={17}
            className="text-[#c4b5fd]"
          />
        </div>

        <span className="absolute left-1/2 top-[62px] -translate-x-1/2 whitespace-nowrap font-mono text-[6px] tracking-[0.14em] text-white/25">
          DESTINATION
        </span>
      </div>

      {/* obstacles */}

      <div className="absolute left-[24%] top-[30%] h-[80px] w-[100px] rounded-[18px] border border-white/[0.07] bg-white/[0.02]">
        <span className="absolute left-3 top-3 font-mono text-[5px] tracking-[0.13em] text-white/15">
          OBJECT 01
        </span>
      </div>

      <div className="absolute right-[25%] top-[55%] h-[110px] w-[85px] rounded-[18px] border border-white/[0.07] bg-white/[0.02]">
        <span className="absolute left-3 top-3 font-mono text-[5px] tracking-[0.13em] text-white/15">
          OBJECT 02
        </span>
      </div>

      <div className="absolute left-[42%] bottom-[18%] h-[70px] w-[120px] rounded-[18px] border border-white/[0.07] bg-white/[0.02]">
        <span className="absolute left-3 top-3 font-mono text-[5px] tracking-[0.13em] text-white/15">
          OBJECT 03
        </span>
      </div>

      {/* route */}

      <svg
        viewBox="0 0 900 620"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <linearGradient
            id="navGradient"
            x1="0"
            x2="1"
          >
            <stop
              offset="0%"
              stopColor="#7c3aed"
              stopOpacity="0.2"
            />

            <stop
              offset="50%"
              stopColor="#c4b5fd"
              stopOpacity="0.9"
            />

            <stop
              offset="100%"
              stopColor="#d946ef"
              stopOpacity="0.4"
            />
          </linearGradient>
        </defs>

        <path
          d="M120 470 C210 430 230 500 315 450 C380 410 350 330 430 315 C520 300 535 400 610 350 C690 295 690 195 765 165"
          stroke="url(#navGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 10"
          className="navigation-route"
        />
      </svg>

      {/* robot navigator */}

      <div className="navigator absolute bottom-[19%] left-[12%] z-20">
        <div className="relative">
          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/15" />

          <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#a78bfa]/25" />

          <div className="relative flex h-14 w-20 items-center justify-center rounded-[16px] border border-[#a78bfa]/40 bg-[#120c1d] shadow-[0_0_30px_rgba(124,58,237,.2)]">
            <Bot
              size={21}
              strokeWidth={1.1}
              className="text-[#c4b5fd]"
            />
          </div>
        </div>
      </div>

      {/* scanner line */}

      <div className="field-scanner absolute left-[5%] right-[5%] top-[15%] h-px bg-gradient-to-r from-transparent via-[#a78bfa]/60 to-transparent shadow-[0_0_15px_#8b5cf6]" />

      {/* footer */}

      <div className="absolute bottom-6 left-7 right-7 grid grid-cols-3 border-t border-white/[0.06] pt-5">
        <div>
          <span className="font-mono text-[5px] tracking-[0.14em] text-white/20">
            LOCALIZATION
          </span>

          <p className="mt-2 text-[9px] text-white/45">
            ACTIVE
          </p>
        </div>

        <div className="text-center">
          <span className="font-mono text-[5px] tracking-[0.14em] text-white/20">
            PATH
          </span>

          <p className="mt-2 text-[9px] text-white/45">
            PLANNING
          </p>
        </div>

        <div className="text-right">
          <span className="font-mono text-[5px] tracking-[0.14em] text-white/20">
            SAFETY
          </span>

          <p className="mt-2 text-[9px] text-white/45">
            MONITORED
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   NAVIGATION SECTION
============================================================ */

function NavigationSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_.8fr]">
          <NavigationVisual />

          <div>
            <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
              02 / AUTONOMOUS NAVIGATION
            </span>

            <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              A route is
              <span className="block text-white/25">
                never just
              </span>
              a line.
            </h2>

            <p className="mt-8 max-w-[520px] text-[13px] leading-8 text-white/45">
              Autonomous movement depends on continuously understanding
              position, free space, obstacles, destination constraints
              and the changing state of the environment.
            </p>

            <div className="mt-12 space-y-3">
              {[
                "Environment mapping and spatial awareness",
                "Localization and position estimation",
                "Dynamic path and motion planning",
                "Obstacle detection and avoidance",
                "Continuous navigation feedback",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                >
                  <CheckCircle2
                    size={13}
                    strokeWidth={1.3}
                    className="text-[#a78bfa]"
                  />

                  <span className="text-[12px] text-white/50">
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

/* ============================================================
   STACK
============================================================ */

function TechnologyStack() {
  return (
    <section
      id="architecture"
      className="bg-[#000000] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1450px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
              03 / AUTONOMY STACK
            </span>

            <h2 className="mt-7 max-w-[850px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Physical systems.
              <span className="block text-white/25">
                Digital intelligence.
              </span>
            </h2>
          </div>

          <p className="max-w-[430px] text-[13px] leading-8 text-white/42">
            Build autonomy as a connected architecture instead of
            treating perception, navigation and control as isolated
            capabilities.
          </p>
        </div>

        <div className="mt-20 border-t border-white/[0.07]">
          {stack.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="stack-row group grid grid-cols-[40px_45px_1fr] items-center gap-4 border-b border-white/[0.07] py-7 md:grid-cols-[70px_60px_1fr_1fr]"
              >
                <span className="font-mono text-[6px] text-white/20">
                  {item.number}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.04]">
                  <Icon
                    size={15}
                    strokeWidth={1}
                    className="text-[#a78bfa]"
                  />
                </div>

                <h3 className="text-xl font-medium tracking-[-0.035em] text-white/75 md:text-2xl">
                  {item.title}
                </h3>

                <span className="col-start-3 font-mono text-[6px] tracking-[0.14em] text-white/25 md:col-start-auto">
                  {item.description}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   APPLICATIONS
============================================================ */

function Applications() {
  return (
    <section className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="absolute right-[-15%] top-[-15%] h-[650px] w-[650px] rounded-full bg-[#7c3aed]/[0.07] blur-[160px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="mx-auto max-w-[850px] text-center">
          <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
            04 / APPLICATIONS
          </span>

          <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Autonomy where
            <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
              work moves.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[650px] text-[13px] leading-8 text-white/42">
            Apply autonomous mobility where the environment, process
            and safety model support a practical robotic solution.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="application-card group min-h-[330px] rounded-[22px] border border-[#8b5cf6]/15 bg-[#08060d] p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
                    <Icon
                      size={17}
                      strokeWidth={1}
                      className="text-[#a78bfa]"
                    />
                  </div>

                  <span className="font-mono text-[6px] tracking-[0.15em] text-[#a78bfa]/50">
                    {item.tag}
                  </span>
                </div>

                <div className="mt-20">
                  <h3 className="text-3xl font-medium tracking-[-0.05em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[12px] leading-7 text-white/40">
                    {item.text}
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
   DECISION LOOP
============================================================ */

function DecisionLoop() {
  return (
    <section className="relative overflow-hidden border-y border-[#8b5cf6]/10 bg-[#000000] px-5 py-28 md:px-10 md:py-40">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
              05 / DECISION LOOP
            </span>

            <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Autonomy
              <span className="block text-white/25">
                never stops
              </span>
              thinking.
            </h2>

            <p className="mt-8 max-w-[440px] text-[13px] leading-8 text-white/42">
              Movement becomes autonomous when sensing and decisions
              form a continuous closed loop rather than a fixed
              sequence.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {workflow.map((item, index) => (
              <article
                key={item.number}
                className="decision-card relative min-h-[210px] overflow-hidden rounded-[20px] border border-white/[0.07] bg-white/[0.015] p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[6px] text-[#a78bfa]/60">
                    {item.number}
                  </span>

                  {index !== workflow.length - 1 && (
                    <ArrowRight
                      size={12}
                      className="text-white/15"
                    />
                  )}
                </div>

                <h3 className="mt-12 text-2xl font-medium tracking-[-0.045em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[11px] leading-6 text-white/38">
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

/* ============================================================
   FLEET SECTION
============================================================ */

function FleetSection() {
  return (
    <section className="bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* text */}

          <div>
            <span className="font-mono text-[7px] tracking-[0.2em] text-[#a78bfa]/70">
              06 / FLEET INTELLIGENCE
            </span>

            <h2 className="mt-7 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              One robot
              <span className="block text-white/25">
                becomes a
              </span>
              connected fleet.
            </h2>

            <p className="mt-8 max-w-[550px] text-[13px] leading-8 text-white/45">
              Autonomous platforms become operational systems when
              tasks, robot state, traffic, exceptions and enterprise
              workflows can be coordinated through a common layer.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-3">
              {[
                "Task orchestration",
                "Fleet visibility",
                "Robot status",
                "Traffic coordination",
                "Exception handling",
                "Operational analytics",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/20 px-4 py-4"
                >
                  <CheckCircle2
                    size={12}
                    className="shrink-0 text-[#a78bfa]"
                  />

                  <span className="text-[10px] text-white/45">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* fleet visual */}

          <div className="relative min-h-[580px] overflow-hidden rounded-[28px] border border-[#8b5cf6]/15 bg-[#08060d]">
            <div className="fleet-grid absolute inset-0" />

            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[100px]" />

            {/* center fleet AI */}

            <div className="absolute left-1/2 top-1/2 z-20 flex h-[115px] w-[115px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#a78bfa]/30 bg-[#8b5cf6]/[0.08] shadow-[0_0_60px_rgba(124,58,237,.2)]">
              <BrainCircuit
                size={37}
                strokeWidth={1}
                className="text-[#c4b5fd]"
              />

              <div className="fleet-ring absolute -inset-10 rounded-full border border-dashed border-[#8b5cf6]/20" />

              <div className="fleet-ring-reverse absolute -inset-24 rounded-full border border-[#8b5cf6]/10" />
            </div>

            {/* robot nodes */}

            {[
              {
                left: "17%",
                top: "24%",
                label: "AMR / 01",
              },
              {
                left: "72%",
                top: "22%",
                label: "AMR / 02",
              },
              {
                left: "14%",
                top: "70%",
                label: "AMR / 03",
              },
              {
                left: "75%",
                top: "70%",
                label: "AMR / 04",
              },
            ].map((node, index) => (
              <div
                key={node.label}
                className="fleet-node absolute z-20"
                style={{
                  left: node.left,
                  top: node.top,
                  animationDelay: `${index * 0.4}s`,
                }}
              >
                <div className="flex h-[66px] w-[80px] items-center justify-center rounded-[16px] border border-[#8b5cf6]/25 bg-black/70 shadow-[0_0_30px_rgba(124,58,237,.12)]">
                  <Bot
                    size={20}
                    strokeWidth={1}
                    className="text-[#a78bfa]"
                  />
                </div>

                <span className="absolute left-1/2 top-[78px] -translate-x-1/2 whitespace-nowrap font-mono text-[6px] tracking-[0.14em] text-white/25">
                  {node.label}
                </span>
              </div>
            ))}

            {/* connecting lines */}

            <svg
              viewBox="0 0 700 580"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              <path
                d="M155 160 L350 290"
                stroke="rgba(139,92,246,.25)"
                strokeWidth="1"
                strokeDasharray="5 7"
              />

              <path
                d="M535 150 L350 290"
                stroke="rgba(139,92,246,.25)"
                strokeWidth="1"
                strokeDasharray="5 7"
              />

              <path
                d="M135 415 L350 290"
                stroke="rgba(139,92,246,.25)"
                strokeWidth="1"
                strokeDasharray="5 7"
              />

              <path
                d="M555 415 L350 290"
                stroke="rgba(139,92,246,.25)"
                strokeWidth="1"
                strokeDasharray="5 7"
              />
            </svg>

            <div className="absolute left-7 top-7 flex items-center gap-3">
              <Network
                size={12}
                className="text-[#a78bfa]"
              />

              <span className="font-mono text-[7px] tracking-[0.16em] text-white/30">
                FLEET ORCHESTRATION
              </span>
            </div>

            <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
              <span className="font-mono text-[6px] tracking-[0.14em] text-white/20">
                DISTRIBUTED AUTONOMY
              </span>

              <div className="flex items-center gap-2">
                <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />

                <span className="font-mono text-[6px] tracking-[0.14em] text-white/30">
                  CONNECTED
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
   FINAL CTA
============================================================ */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-[#8b5cf6]/10 bg-[#000000] px-5 py-36 md:px-10 md:py-52">
      <div className="absolute left-1/2 top-1/2 h-[750px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.1] blur-[180px]" />

      <div className="final-grid absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="mx-auto max-w-[1200px] text-center">
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
            <Sparkles
              size={11}
              className="text-[#c084fc]"
            />

            <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
              AUTONOMOUS ROBOTICS / HYI.AI
            </span>
          </div>

          <h2 className="mt-10 text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.83] tracking-[-0.085em]">
            Give machines
            <span className="block text-white/20">
              awareness.
            </span>
            <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
              Give movement
            </span>
            intelligence.
          </h2>

          <p className="mx-auto mt-10 max-w-[760px] text-[14px] leading-8 text-white/45">
            Bring perception, navigation, AI, controls and connected
            operations together to engineer autonomous robotic systems
            around real-world environments.
          </p>

          <div className="mt-12 flex justify-center">
            <a
              href="#intelligence"
              className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-8 py-4 text-[12px] font-medium text-white shadow-[0_0_40px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
            >
              Explore Autonomous Robotics

              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="mx-auto mt-20 grid max-w-[900px] grid-cols-2 border-y border-white/[0.07] md:grid-cols-4">
            {[
              ["01", "PERCEPTION"],
              ["02", "NAVIGATION"],
              ["03", "AI CONTROL"],
              ["04", "FLEET"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="border-white/[0.07] px-4 py-6 md:border-r last:md:border-r-0"
              >
                <span className="font-mono text-[6px] text-[#a78bfa]/50">
                  {number}
                </span>

                <p className="mt-2 font-mono text-[7px] tracking-[0.14em] text-white/35">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function AutonomousRobotsPage() {
  return (
    <main className="relative overflow-hidden bg-[#000000] text-white">
      {/* ======================================================
          ANIMATION CSS
      ====================================================== */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            html {
              scroll-behavior: smooth;
            }

            /* =================================================
               HERO GRID
            ================================================= */

            .hero-grid {
              background-image:
                linear-gradient(
                  rgba(139, 92, 246, 0.025) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(139, 92, 246, 0.025) 1px,
                  transparent 1px
                );

              background-size:
                48px 48px;

              mask-image:
                linear-gradient(
                  to bottom,
                  black,
                  transparent 92%
                );

              -webkit-mask-image:
                linear-gradient(
                  to bottom,
                  black,
                  transparent 92%
                );
            }

            /* =================================================
               HERO ENTER
            ================================================= */

            @keyframes heroEnter {
              0% {
                opacity: 0;
                transform: translateY(35px);
              }

              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .hero-enter {
              animation:
                heroEnter
                0.9s
                cubic-bezier(.16, 1, .3, 1)
                both;
            }

            /* =================================================
               ROVER FLOAT
            ================================================= */

            @keyframes roverFloat {
              0%,
              100% {
                transform:
                  translate(-50%, -50%)
                  translateY(0);
              }

              50% {
                transform:
                  translate(-50%, -50%)
                  translateY(-9px);
              }
            }

            .rover {
              animation:
                roverFloat
                4.8s
                ease-in-out
                infinite;
            }

            /* =================================================
               WHEEL
            ================================================= */

            @keyframes wheelPulse {
              0%,
              100% {
                box-shadow:
                  0 0 15px
                  rgba(124, 58, 237, .08);
              }

              50% {
                box-shadow:
                  0 0 30px
                  rgba(124, 58, 237, .22);
              }
            }

            .wheel {
              animation:
                wheelPulse
                2.8s
                ease-in-out
                infinite;
            }

            .wheel-right {
              animation-delay:
                .5s;
            }

            /* =================================================
               LIDAR HEAD
            ================================================= */

            @keyframes lidarHead {
              0%,
              100% {
                transform:
                  translateX(-50%)
                  rotateY(0deg);
              }

              50% {
                transform:
                  translateX(-50%)
                  rotateY(180deg);
              }
            }

            .lidar-head {
              animation:
                lidarHead
                2.8s
                ease-in-out
                infinite;
            }

            /* =================================================
               LIDAR SCAN
            ================================================= */

            @keyframes lidarScan {
              from {
                transform:
                  translateX(-50%)
                  rotate(0deg);
              }

              to {
                transform:
                  translateX(-50%)
                  rotate(360deg);
              }
            }

            .lidar-scan {
              animation:
                lidarScan
                4s
                linear
                infinite;
            }

            /* =================================================
               RADAR
            ================================================= */

            @keyframes radarRotate {
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

            .robot-radar {
              animation:
                radarRotate
                24s
                linear
                infinite;
            }

            .robot-radar-reverse {
              animation:
                radarRotate
                18s
                linear
                infinite
                reverse;
            }

            /* =================================================
               SENSOR EYE
            ================================================= */

            @keyframes sensorEye {
              0%,
              100% {
                opacity: .45;
              }

              50% {
                opacity: 1;
              }
            }

            .sensor-eye {
              animation:
                sensorEye
                1.8s
                ease-in-out
                infinite;
            }

            .sensor-delay {
              animation-delay:
                .7s;
            }

            /* =================================================
               STATUS DOT
            ================================================= */

            @keyframes statusDot {
              0%,
              100% {
                opacity: .35;
                transform: scale(.8);
              }

              50% {
                opacity: 1;
                transform: scale(1.2);
              }
            }

            .status-dot {
              animation:
                statusDot
                1.8s
                ease-in-out
                infinite;
            }

            /* =================================================
               NAVIGATION PATH
            ================================================= */

            @keyframes navigationPath {
              from {
                stroke-dashoffset: 300;
              }

              to {
                stroke-dashoffset: 0;
              }
            }

            .nav-path {
              animation:
                navigationPath
                7s
                linear
                infinite;
            }

            .nav-path-delay {
              animation-delay:
                -3s;
            }

            /* =================================================
               NAV NODE
            ================================================= */

            @keyframes navNode {
              0%,
              100% {
                opacity: .45;
                transform: scale(.8);
              }

              50% {
                opacity: 1;
                transform: scale(1.15);
              }
            }

            .nav-node {
              animation:
                navNode
                2.2s
                ease-in-out
                infinite;
            }

            /* =================================================
               SIGNAL MARQUEE
            ================================================= */

            @keyframes signalMarquee {
              from {
                transform:
                  translateX(0);
              }

              to {
                transform:
                  translateX(-50%);
              }
            }

            .signal-marquee {
              animation:
                signalMarquee
                30s
                linear
                infinite;
            }

            /* =================================================
               INTELLIGENCE CARD
            ================================================= */

            .intelligence-card {
              transition:
                transform .45s
                cubic-bezier(.16, 1, .3, 1),
                border-color .45s ease,
                box-shadow .45s ease;
            }

            .intelligence-card:hover {
              transform:
                translateY(-7px);

              border-color:
                rgba(139, 92, 246, .35);

              box-shadow:
                0 25px 80px
                rgba(76, 29, 149, .12);
            }

            /* =================================================
               NAVIGATION GRID
            ================================================= */

            .navigation-grid {
              background-image:
                linear-gradient(
                  rgba(139, 92, 246, .035) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(139, 92, 246, .035) 1px,
                  transparent 1px
                );

              background-size:
                35px 35px;

              mask-image:
                radial-gradient(
                  circle at center,
                  black,
                  transparent 85%
                );

              -webkit-mask-image:
                radial-gradient(
                  circle at center,
                  black,
                  transparent 85%
                );
            }

            /* =================================================
               DESTINATION PULSE
            ================================================= */

            @keyframes destinationPulse {
              0% {
                transform:
                  translate(-50%, -50%)
                  scale(.4);

                opacity:
                  .8;
              }

              100% {
                transform:
                  translate(-50%, -50%)
                  scale(2.2);

                opacity:
                  0;
              }
            }

            .destination-pulse {
              animation:
                destinationPulse
                2.5s
                ease-out
                infinite;
            }

            /* =================================================
               NAVIGATION ROUTE
            ================================================= */

            @keyframes navigationRoute {
              from {
                stroke-dashoffset:
                  500;
              }

              to {
                stroke-dashoffset:
                  0;
              }
            }

            .navigation-route {
              animation:
                navigationRoute
                8s
                linear
                infinite;
            }

            /* =================================================
               NAVIGATOR
            ================================================= */

            @keyframes navigatorMove {
              0%,
              100% {
                transform:
                  translateY(0)
                  rotate(-2deg);
              }

              50% {
                transform:
                  translateY(-8px)
                  rotate(2deg);
              }
            }

            .navigator {
              animation:
                navigatorMove
                3.5s
                ease-in-out
                infinite;
            }

            /* =================================================
               FIELD SCANNER
            ================================================= */

            @keyframes fieldScanner {
              0% {
                top:
                  15%;

                opacity:
                  0;
              }

              10% {
                opacity:
                  .9;
              }

              90% {
                opacity:
                  .5;
              }

              100% {
                top:
                  85%;

                opacity:
                  0;
              }
            }

            .field-scanner {
              animation:
                fieldScanner
                5s
                ease-in-out
                infinite;
            }

            /* =================================================
               STACK ROW
            ================================================= */

            .stack-row {
              transition:
                padding-left .4s
                cubic-bezier(.16, 1, .3, 1),
                background-color .4s ease;
            }

            .stack-row:hover {
              padding-left:
                12px;

              background:
                rgba(124, 58, 237, .025);
            }

            /* =================================================
               APPLICATION CARD
            ================================================= */

            .application-card {
              transition:
                transform .45s
                cubic-bezier(.16, 1, .3, 1),
                border-color .45s ease,
                background-color .45s ease;
            }

            .application-card:hover {
              transform:
                translateY(-6px);

              border-color:
                rgba(139, 92, 246, .32);

              background:
                rgba(124, 58, 237, .035);
            }

            /* =================================================
               DECISION CARD
            ================================================= */

            .decision-card {
              transition:
                transform .4s
                cubic-bezier(.16, 1, .3, 1),
                border-color .4s ease,
                background-color .4s ease;
            }

            .decision-card:hover {
              transform:
                translateY(-5px);

              border-color:
                rgba(139, 92, 246, .28);

              background:
                rgba(124, 58, 237, .03);
            }

            /* =================================================
               FLEET GRID
            ================================================= */

            .fleet-grid {
              background-image:
                linear-gradient(
                  rgba(139, 92, 246, .03) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(139, 92, 246, .03) 1px,
                  transparent 1px
                );

              background-size:
                40px 40px;

              mask-image:
                radial-gradient(
                  circle at center,
                  black,
                  transparent 85%
                );

              -webkit-mask-image:
                radial-gradient(
                  circle at center,
                  black,
                  transparent 85%
                );
            }

            /* =================================================
               FLEET RING
            ================================================= */

            @keyframes fleetRing {
              from {
                transform:
                  rotate(0deg);
              }

              to {
                transform:
                  rotate(360deg);
              }
            }

            .fleet-ring {
              animation:
                fleetRing
                18s
                linear
                infinite;
            }

            .fleet-ring-reverse {
              animation:
                fleetRing
                25s
                linear
                infinite
                reverse;
            }

            /* =================================================
               FLEET NODE
            ================================================= */

            @keyframes fleetNode {
              0%,
              100% {
                transform:
                  translateY(0);
              }

              50% {
                transform:
                  translateY(-7px);
              }
            }

            .fleet-node {
              animation:
                fleetNode
                4s
                ease-in-out
                infinite;
            }

            /* =================================================
               FINAL GRID
            ================================================= */

            .final-grid {
              background-image:
                linear-gradient(
                  rgba(139, 92, 246, .02) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(139, 92, 246, .02) 1px,
                  transparent 1px
                );

              background-size:
                55px 55px;

              mask-image:
                radial-gradient(
                  circle at center,
                  black,
                  transparent 75%
                );

              -webkit-mask-image:
                radial-gradient(
                  circle at center,
                  black,
                  transparent 75%
                );
            }

            /* =================================================
               REDUCED MOTION
            ================================================= */

            @media (
              prefers-reduced-motion:
              reduce
            ) {
              .hero-enter,
              .rover,
              .wheel,
              .lidar-head,
              .lidar-scan,
              .robot-radar,
              .robot-radar-reverse,
              .sensor-eye,
              .status-dot,
              .nav-path,
              .nav-node,
              .signal-marquee,
              .destination-pulse,
              .navigation-route,
              .navigator,
              .field-scanner,
              .fleet-ring,
              .fleet-ring-reverse,
              .fleet-node {
                animation:
                  none
                  !important;
              }
            }
          `,
        }}
      />

      <Header />

      <Hero />

      <SignalBar />

      <IntelligenceSection />

      <NavigationSection />

      <TechnologyStack />

      <Applications />

      <DecisionLoop />

      <FleetSection />

      <FinalCTA />

      <Footer />
    </main>
  );
}