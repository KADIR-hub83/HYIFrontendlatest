import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Camera,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Cpu,
  Database,
  Eye,
  GitBranch,
  Layers3,
  Network,
  Radar,
  Route,
  Scan,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const intelligenceNodes = [
  {
    number: "01",
    label: "PERCEPTION",
    title: "See",
    text: "Transform cameras, depth sensors and machine signals into structured environmental awareness.",
    icon: Eye,
  },
  {
    number: "02",
    label: "REASONING",
    title: "Understand",
    text: "Use AI models, context and machine knowledge to interpret what is happening around the robot.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    label: "PLANNING",
    title: "Decide",
    text: "Evaluate goals, constraints and available actions to generate an appropriate machine plan.",
    icon: Route,
  },
  {
    number: "04",
    label: "CONTROL",
    title: "Act",
    text: "Translate intelligent decisions into controlled robotic motion, manipulation and system behavior.",
    icon: Bot,
  },
];

const capabilities = [
  {
    number: "01",
    icon: BrainCircuit,
    eyebrow: "MACHINE INTELLIGENCE",
    title: "AI Decision Systems",
    text: "Design intelligence layers that allow robots to interpret observations, evaluate context and select actions based on goals, constraints and environmental conditions.",
  },
  {
    number: "02",
    icon: Camera,
    eyebrow: "VISUAL PERCEPTION",
    title: "Computer Vision",
    text: "Connect robotic cameras with detection, segmentation, tracking, pose estimation and visual understanding pipelines.",
  },
  {
    number: "03",
    icon: Radar,
    eyebrow: "SPATIAL AWARENESS",
    title: "Environment Understanding",
    text: "Combine spatial sensing, depth information and perception models to help machines understand obstacles, surfaces, objects and navigable space.",
  },
  {
    number: "04",
    icon: Route,
    eyebrow: "AUTONOMOUS BEHAVIOR",
    title: "Planning & Navigation",
    text: "Develop planning systems that connect perception with path generation, task execution and adaptive robotic movement.",
  },
  {
    number: "05",
    icon: Database,
    eyebrow: "KNOWLEDGE",
    title: "Robot Memory",
    text: "Structure operational context, task history and machine knowledge so robotic systems can use previous information during future decisions.",
  },
  {
    number: "06",
    icon: Network,
    eyebrow: "CONNECTED AI",
    title: "Multi-System Intelligence",
    text: "Coordinate AI services, sensors, edge systems and robotic controllers through modular communication and orchestration layers.",
  },
];

const architecture = [
  {
    id: "L06",
    title: "Goals & Policies",
    label: "INTENT",
    text: "Objectives, task definitions, operational rules and system constraints.",
  },
  {
    id: "L05",
    title: "AI Reasoning",
    label: "INTELLIGENCE",
    text: "Context interpretation, decision logic and intelligent behavior selection.",
  },
  {
    id: "L04",
    title: "Planning",
    label: "AUTONOMY",
    text: "Task planning, motion planning, navigation and behavior sequencing.",
  },
  {
    id: "L03",
    title: "Perception",
    label: "AWARENESS",
    text: "Vision, sensor fusion, detection, tracking and spatial understanding.",
  },
  {
    id: "L02",
    title: "Robot Control",
    label: "EXECUTION",
    text: "Motion controllers, actuators, manipulation and real-time machine control.",
  },
  {
    id: "L01",
    title: "Physical System",
    label: "ROBOT",
    text: "Sensors, motors, cameras, compute hardware and mechanical components.",
  },
];

const useCases = [
  {
    number: "01",
    title: "Intelligent Manufacturing",
    text: "AI-enabled robots can combine perception and task logic to support adaptive production, inspection and material handling workflows.",
    icon: Cpu,
  },
  {
    number: "02",
    title: "Autonomous Mobile Robots",
    text: "Connect localization, mapping, obstacle awareness and planning to create robotic systems capable of navigating dynamic environments.",
    icon: Route,
  },
  {
    number: "03",
    title: "Smart Manipulation",
    text: "Use vision, pose estimation and intelligent planning to help robotic arms locate, understand and manipulate physical objects.",
    icon: Bot,
  },
  {
    number: "04",
    title: "AI Inspection",
    text: "Combine robotic motion with visual AI to inspect products, equipment and physical environments consistently.",
    icon: Scan,
  },
];

const engineeringPrinciples = [
  "Human-defined operational boundaries",
  "Observable AI decisions",
  "Deterministic safety controls",
  "Simulation before deployment",
  "Modular perception architecture",
  "Hardware-aware AI inference",
  "Controlled model updates",
  "Fallback behavior for uncertainty",
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

      <div className="h-px w-10 bg-[#8b5cf6]/40" />

      <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/35">
        {children}
      </span>
    </div>
  );
}

/* =========================================================
   AI ROBOT NEURAL CORE
========================================================= */

function AIRobotCore() {
  return (
    <div className="relative mx-auto h-[680px] w-full max-w-[720px]">
      {/* background glow */}

      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[140px]" />

      {/* large orbit */}

      <div className="ai-orbit absolute left-1/2 top-1/2 h-[560px] w-[560px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#8b5cf6]/20" />

      <div className="ai-orbit-reverse absolute left-1/2 top-1/2 h-[440px] w-[440px] max-w-[75vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/15" />

      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/10 bg-[#8b5cf6]/[0.025]" />

      {/* connecting cross lines */}

      <div className="absolute left-1/2 top-[16%] h-[68%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#8b5cf6]/25 to-transparent" />

      <div className="absolute left-[16%] right-[16%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#8b5cf6]/25 to-transparent" />

      {/* diagonal lines */}

      <div className="absolute left-1/2 top-1/2 h-px w-[430px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-r from-transparent via-[#8b5cf6]/15 to-transparent" />

      <div className="absolute left-1/2 top-1/2 h-px w-[430px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-gradient-to-r from-transparent via-[#8b5cf6]/15 to-transparent" />

      {/* robot */}

      <div className="ai-robot-float absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-[330px] w-[230px]">
          {/* antenna */}

          <div className="absolute left-1/2 top-[-36px] h-[38px] w-px -translate-x-1/2 bg-[#8b5cf6]/50" />

          <div className="ai-pulse absolute left-1/2 top-[-43px] h-3 w-3 -translate-x-1/2 rounded-full border border-[#c4b5fd] bg-[#8b5cf6] shadow-[0_0_25px_#8b5cf6]" />

          {/* ears */}

          <div className="absolute left-[-10px] top-[48px] h-[60px] w-[24px] rounded-l-xl border border-[#8b5cf6]/30 bg-[#0b0711]" />

          <div className="absolute right-[-10px] top-[48px] h-[60px] w-[24px] rounded-r-xl border border-[#8b5cf6]/30 bg-[#0b0711]" />

          {/* head */}

          <div className="relative h-[155px] w-full overflow-hidden rounded-[48px] border border-[#a78bfa]/30 bg-gradient-to-b from-[#171020] via-[#0d0912] to-[#08060b] shadow-[0_0_90px_rgba(124,58,237,.18)]">
            <div className="absolute inset-[15px] rounded-[36px] border border-white/[0.05]" />

            {/* forehead processor */}

            <div className="absolute left-1/2 top-[20px] flex h-[32px] w-[32px] -translate-x-1/2 items-center justify-center rounded-[9px] border border-[#8b5cf6]/25 bg-[#8b5cf6]/10">
              <BrainCircuit
                size={15}
                strokeWidth={1}
                className="text-[#c4b5fd]"
              />
            </div>

            {/* eyes */}

            <div className="absolute left-[42px] top-[78px] h-[13px] w-[44px] overflow-hidden rounded-full border border-[#a78bfa]/30 bg-black">
              <div className="ai-eye absolute inset-y-[3px] left-[8px] w-[20px] rounded-full bg-gradient-to-r from-[#7c3aed] to-[#e879f9] shadow-[0_0_20px_#8b5cf6]" />
            </div>

            <div className="absolute right-[42px] top-[78px] h-[13px] w-[44px] overflow-hidden rounded-full border border-[#a78bfa]/30 bg-black">
              <div className="ai-eye absolute inset-y-[3px] left-[8px] w-[20px] rounded-full bg-gradient-to-r from-[#7c3aed] to-[#e879f9] shadow-[0_0_20px_#8b5cf6]" />
            </div>

            <div className="absolute bottom-[27px] left-1/2 h-px w-[46px] -translate-x-1/2 bg-[#8b5cf6]/30" />

            {/* scan */}

            <div className="robot-scan absolute left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#c4b5fd] to-transparent shadow-[0_0_14px_#8b5cf6]" />
          </div>

          {/* neck */}

          <div className="absolute left-1/2 top-[151px] h-[35px] w-[55px] -translate-x-1/2 border-x border-[#8b5cf6]/25 bg-[#0b0710]" />

          {/* shoulders */}

          <div className="absolute left-1/2 top-[181px] h-[130px] w-[270px] -translate-x-1/2 overflow-hidden rounded-t-[70px] border border-[#8b5cf6]/25 bg-gradient-to-b from-[#120c1a] to-[#060408]">
            <div className="absolute left-1/2 top-[28px] flex h-[64px] w-[64px] -translate-x-1/2 items-center justify-center rounded-[20px] border border-[#a78bfa]/25 bg-[#8b5cf6]/10">
              <Cpu
                size={27}
                strokeWidth={0.9}
                className="text-[#c4b5fd]"
              />

              <div className="ai-core-pulse absolute inset-[-8px] rounded-[25px] border border-[#8b5cf6]/15" />
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[5px] tracking-[0.18em] text-white/20">
              AI ROBOTICS CORE
            </div>
          </div>
        </div>
      </div>

      {/* orbit cards */}

      <div className="ai-node node-one absolute left-[4%] top-[15%] z-30">
        <CoreNode
          icon={<Eye size={15} />}
          label="PERCEPTION"
          value="SEE"
        />
      </div>

      <div className="ai-node node-two absolute right-[2%] top-[22%] z-30">
        <CoreNode
          icon={<BrainCircuit size={15} />}
          label="REASONING"
          value="THINK"
        />
      </div>

      <div className="ai-node node-three absolute bottom-[16%] right-[4%] z-30">
        <CoreNode
          icon={<Route size={15} />}
          label="PLANNING"
          value="DECIDE"
        />
      </div>

      <div className="ai-node node-four absolute bottom-[13%] left-[3%] z-30">
        <CoreNode
          icon={<Zap size={15} />}
          label="CONTROL"
          value="ACT"
        />
      </div>

      {/* status */}

      <div className="absolute bottom-[-5px] left-1/2 z-40 flex -translate-x-1/2 items-center gap-4 rounded-full border border-[#8b5cf6]/20 bg-[#09060d]/90 px-5 py-3 backdrop-blur-xl">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a78bfa] shadow-[0_0_10px_#8b5cf6]" />

        <span className="whitespace-nowrap font-mono text-[6px] tracking-[0.15em] text-white/35">
          INTELLIGENCE SYSTEM ACTIVE
        </span>
      </div>
    </div>
  );
}

function CoreNode({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-[125px] rounded-[16px] border border-[#8b5cf6]/20 bg-[#09060e]/90 p-3.5 shadow-[0_20px_60px_rgba(0,0,0,.45)] backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#8b5cf6]/10 text-[#c4b5fd]">
          {icon}
        </div>

        <div>
          <span className="block font-mono text-[5px] tracking-[0.1em] text-white/20">
            {label}
          </span>

          <span className="mt-1 block font-mono text-[6px] tracking-[0.12em] text-[#b9a4ff]">
            {value}
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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.025)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="absolute right-[-20%] top-[-10%] h-[900px] w-[900px] rounded-full bg-[#7c3aed]/[0.08] blur-[220px]" />

      <div className="absolute bottom-[-20%] left-[-15%] h-[700px] w-[700px] rounded-full bg-[#9333ea]/[0.05] blur-[200px]" />

      <div className="relative mx-auto max-w-[1450px]">
        {/* top meta */}

        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a78bfa]" />

            <span className="font-mono text-[7px] tracking-[0.2em] text-white/40">
              HYI.AI / AI ROBOTICS
            </span>
          </div>

          <span className="hidden font-mono text-[7px] tracking-[0.18em] text-white/20 md:block">
            PERCEPTION → REASONING → ACTION
          </span>
        </div>

        <div className="grid min-h-[800px] items-center gap-12 lg:grid-cols-[.92fr_1.08fr]">
          {/* hero content */}

          <div className="hero-reveal relative z-20">
            <div className="flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
              <Sparkles
                size={11}
                className="text-[#c4b5fd]"
              />

              <span className="font-mono text-[7px] tracking-[0.17em] text-[#c4b5fd]/70">
                PHYSICAL AI SYSTEMS
              </span>
            </div>

            <h1 className="mt-9 max-w-[760px] text-[clamp(4.5rem,7.3vw,8rem)] font-semibold leading-[0.82] tracking-[-0.09em]">
              Intelligence
              <span className="block text-white/22">
                that can
              </span>

              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
                move.
              </span>
            </h1>

            <p className="mt-9 max-w-[610px] text-[14px] leading-8 text-white/[0.58] md:text-[16px] md:leading-9">
              AI Robotics connects machine perception, reasoning,
              planning and physical control — creating robotic systems
              capable of understanding their environment and acting
              within it.
            </p>

            <div className="mt-11 flex flex-wrap gap-4">
              <a
                href="#intelligence"
                className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-7 py-4 text-[12px] font-medium shadow-[0_0_40px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
              >
                Explore AI Robotics

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#architecture"
                className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.025] px-7 py-4 text-[12px] text-white/65 transition hover:border-[#8b5cf6]/40"
              >
                Intelligence Stack

                <ChevronDown size={13} />
              </a>
            </div>

            <div className="mt-16 grid max-w-[650px] grid-cols-4 border-y border-white/[0.07] py-6">
              {[
                ["01", "Sense"],
                ["02", "Think"],
                ["03", "Plan"],
                ["04", "Act"],
              ].map(([number, title], index) => (
                <div
                  key={number}
                  className={
                    index === 0
                      ? ""
                      : "border-l border-white/[0.07] pl-5"
                  }
                >
                  <span className="block font-mono text-[6px] text-[#a78bfa]/55">
                    {number}
                  </span>

                  <span className="mt-2 block text-[10px] text-white/45">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <AIRobotCore />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MARQUEE
========================================================= */

function IntelligenceStrip() {
  const words = [
    "PHYSICAL AI",
    "PERCEPTION",
    "REASONING",
    "PLANNING",
    "AUTONOMY",
    "ROBOT VISION",
    "MOTION",
    "CONTROL",
    "LEARNING",
  ];

  return (
    <section className="overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] py-6">
      <div className="ai-marquee flex w-max whitespace-nowrap">
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
   PHYSICAL AI STATEMENT
========================================================= */

function PhysicalAI() {
  return (
    <section
      id="intelligence"
      className="relative overflow-hidden bg-black px-5 py-32 md:px-10 md:py-48"
    >
      <div className="absolute left-1/2 top-1/2 h-[550px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.05] blur-[180px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.35fr_1.65fr]">
          <SectionLabel number="01">
            Physical Intelligence
          </SectionLabel>

          <div>
            <h2 className="section-reveal max-w-[1180px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[90px]">
              AI understands information.
              <span className="text-white/25">
                {" "}Robotics turns understanding into physical action.
              </span>
            </h2>

            <div className="mt-16 grid gap-10 border-t border-white/[0.07] pt-10 md:grid-cols-2">
              <p className="max-w-[510px] text-[13px] leading-8 text-white/[0.56]">
                AI robotics brings software intelligence into the
                physical world. Sensors provide observations, AI
                interprets those observations, planning systems
                determine behavior and controllers execute movement.
              </p>

              <p className="max-w-[510px] text-[13px] leading-8 text-white/[0.56]">
                The challenge is not simply adding an AI model to a
                robot. The complete system must connect perception,
                context, planning, safety and physical execution into
                one controlled architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   INTELLIGENCE LOOP
========================================================= */

function IntelligenceLoop() {
  return (
    <section className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <SectionLabel number="02">
              Intelligence Loop
            </SectionLabel>

            <h2 className="mt-8 max-w-[850px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              From observation
              <span className="block text-white/25">
                to machine behavior.
              </span>
            </h2>
          </div>

          <p className="max-w-[430px] text-[13px] leading-8 text-white/[0.54]">
            Intelligent robotic behavior emerges from a continuous
            loop between sensing, interpretation, planning and
            controlled action.
          </p>
        </div>

        <div className="relative mt-20 grid gap-4 lg:grid-cols-4">
          <div className="absolute left-[10%] right-[10%] top-[72px] hidden h-px bg-gradient-to-r from-[#6d28d9]/20 via-[#c4b5fd]/70 to-[#9333ea]/20 lg:block" />

          {intelligenceNodes.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative min-h-[410px] overflow-hidden rounded-[26px] border border-[#8b5cf6]/15 bg-[#08060d] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#8b5cf6]/35"
              >
                <div className="absolute -right-20 -top-20 h-[240px] w-[240px] rounded-full bg-[#7c3aed]/[0.07] blur-[80px]" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="relative z-20 flex h-[72px] w-[72px] items-center justify-center rounded-[22px] border border-[#8b5cf6]/25 bg-[#0d0913] shadow-[0_0_40px_rgba(124,58,237,.08)]">
                      <Icon
                        size={25}
                        strokeWidth={1}
                        className="text-[#c4b5fd]"
                      />

                      <div className="absolute inset-[-6px] rounded-[27px] border border-[#8b5cf6]/10" />
                    </div>

                    <span className="font-mono text-[7px] text-white/20">
                      {item.number}
                    </span>
                  </div>

                  <div className="mt-24">
                    <span className="font-mono text-[6px] tracking-[0.16em] text-[#a78bfa]/60">
                      {item.label}
                    </span>

                    <h3 className="mt-4 text-4xl font-medium tracking-[-0.055em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[12px] leading-7 text-white/[0.52]">
                      {item.text}
                    </p>
                  </div>
                </div>

                {index !== intelligenceNodes.length - 1 && (
                  <ArrowRight
                    size={13}
                    className="absolute right-4 top-[66px] hidden text-[#a78bfa]/30 lg:block"
                  />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   AI BRAIN MODEL
========================================================= */

function RobotBrainModel() {
  const brainNodes = [
    { left: "22%", top: "25%" },
    { left: "38%", top: "16%" },
    { left: "57%", top: "18%" },
    { left: "72%", top: "29%" },
    { left: "18%", top: "46%" },
    { left: "34%", top: "42%" },
    { left: "50%", top: "35%" },
    { left: "66%", top: "45%" },
    { left: "80%", top: "51%" },
    { left: "26%", top: "66%" },
    { left: "43%", top: "62%" },
    { left: "58%", top: "68%" },
    { left: "72%", top: "67%" },
  ];

  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1450px] items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
        {/* model */}

        <div className="relative h-[650px] overflow-hidden rounded-[32px] border border-[#8b5cf6]/15 bg-[#07050b]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.035)_1px,transparent_1px)] bg-[size:36px_36px]" />

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.08] blur-[110px]" />

          <div className="absolute left-6 top-6 flex items-center gap-3">
            <BrainCircuit
              size={13}
              className="text-[#a78bfa]"
            />

            <span className="font-mono text-[7px] tracking-[0.16em] text-white/35">
              ROBOT NEURAL CORE
            </span>
          </div>

          {/* brain shape */}

          <div className="absolute left-1/2 top-1/2 h-[390px] w-[500px] max-w-[85%] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute left-[8%] top-[13%] h-[72%] w-[42%] rounded-[48%_42%_35%_48%] border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.025]" />

            <div className="absolute right-[8%] top-[13%] h-[72%] w-[42%] rounded-[42%_48%_48%_35%] border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.025]" />

            <div className="absolute left-1/2 top-[16%] h-[68%] w-px -translate-x-1/2 bg-[#8b5cf6]/15" />

            {/* neural lines */}

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 500 390"
              fill="none"
            >
              <path
                d="M110 100 L190 65 L285 72 L360 110"
                stroke="rgba(139,92,246,.25)"
              />

              <path
                d="M90 180 L170 160 L250 135 L330 175 L405 200"
                stroke="rgba(196,181,253,.28)"
              />

              <path
                d="M125 255 L215 240 L290 265 L360 260"
                stroke="rgba(139,92,246,.24)"
              />

              <path
                d="M190 65 L170 160 L215 240"
                stroke="rgba(139,92,246,.18)"
              />

              <path
                d="M285 72 L250 135 L290 265"
                stroke="rgba(139,92,246,.18)"
              />

              <path
                d="M360 110 L330 175 L360 260"
                stroke="rgba(139,92,246,.18)"
              />

              <path
                d="M110 100 L90 180 L125 255"
                stroke="rgba(139,92,246,.18)"
              />
            </svg>

            {brainNodes.map((node, index) => (
              <div
                key={index}
                className="brain-node absolute h-3 w-3 rounded-full border border-[#c4b5fd]/50 bg-[#8b5cf6] shadow-[0_0_20px_rgba(139,92,246,.9)]"
                style={{
                  left: node.left,
                  top: node.top,
                  animationDelay: `${index * 0.18}s`,
                }}
              >
                <span className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/15" />
              </div>
            ))}

            {/* center processor */}

            <div className="absolute left-1/2 top-1/2 flex h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[25px] border border-[#a78bfa]/35 bg-[#100a18] shadow-[0_0_60px_rgba(124,58,237,.2)]">
              <Cpu
                size={34}
                strokeWidth={0.8}
                className="text-[#d8ccff]"
              />

              <div className="brain-core-ring absolute inset-[-14px] rounded-[32px] border border-dashed border-[#8b5cf6]/25" />
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2">
            {[
              ["INPUT", "SENSORS"],
              ["STATE", "REASONING"],
              ["OUTPUT", "ACTION"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[11px] border border-white/[0.06] bg-black/40 p-3"
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

        {/* content */}

        <div>
          <SectionLabel number="03">
            Robot Intelligence
          </SectionLabel>

          <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            A brain for
            <span className="block text-white/25">
              physical machines.
            </span>
          </h2>

          <p className="mt-8 max-w-[540px] text-[13px] leading-8 text-white/[0.55]">
            The AI layer can combine observations from multiple
            sensors with task context and machine state to determine
            what information matters and what behavior should happen
            next.
          </p>

          <div className="mt-12 space-y-3">
            {[
              "Multimodal sensor interpretation",
              "Context-aware machine decisions",
              "Task and behavior planning",
              "Environmental understanding",
              "Robot state awareness",
              "Controlled action generation",
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
          AI Robotics Capabilities
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Intelligence across
            <span className="block text-white/25">
              the robotic system.
            </span>
          </h2>

          <p className="max-w-[430px] text-[13px] leading-8 text-white/[0.54]">
            Build modular AI capabilities that can be connected to
            existing robotic platforms or designed as part of a new
            autonomous machine architecture.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="capability-card group relative min-h-[400px] overflow-hidden rounded-[25px] border border-[#8b5cf6]/15 bg-[#08060d] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#8b5cf6]/35"
              >
                <div className="absolute -right-24 -top-24 h-[260px] w-[260px] rounded-full bg-[#7c3aed]/[0.07] blur-[85px]" />

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
                      {item.text}
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
   ARCHITECTURE
========================================================= */

function AIArchitecture() {
  return (
    <section
      id="architecture"
      className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.72fr_1.28fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel number="05">
              Intelligence Architecture
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Software above.
              <span className="block text-white/25">
                Physics below.
              </span>
            </h2>

            <p className="mt-8 max-w-[480px] text-[13px] leading-8 text-white/[0.54]">
              AI robotics needs clear boundaries between physical
              hardware, control software, perception, autonomy and
              higher-level reasoning.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <ShieldCheck
                size={15}
                className="text-[#a78bfa]"
              />

              <span className="font-mono text-[6px] tracking-[0.13em] text-white/30">
                CONTROLLED INTELLIGENCE STACK
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {architecture.map((item, index) => (
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

                <div className="relative grid gap-5 md:grid-cols-[70px_130px_1fr_1.2fr] md:items-center">
                  <span className="font-mono text-[6px] text-[#a78bfa]/60">
                    {item.id}
                  </span>

                  <span className="font-mono text-[6px] tracking-[0.14em] text-white/25">
                    {item.label}
                  </span>

                  <h3 className="text-xl font-medium text-white/75">
                    {item.title}
                  </h3>

                  <p className="text-[11px] leading-6 text-white/[0.49]">
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

/* =========================================================
   AUTONOMY PIPELINE
========================================================= */

function AutonomyPipeline() {
  const stages = [
    {
      number: "01",
      icon: Camera,
      title: "Observe",
      text: "Capture information from cameras and sensors.",
    },
    {
      number: "02",
      icon: Layers3,
      title: "Represent",
      text: "Build a structured representation of the environment.",
    },
    {
      number: "03",
      icon: BrainCircuit,
      title: "Reason",
      text: "Interpret state, context, objectives and constraints.",
    },
    {
      number: "04",
      icon: GitBranch,
      title: "Plan",
      text: "Evaluate possible actions and generate behavior.",
    },
    {
      number: "05",
      icon: Zap,
      title: "Execute",
      text: "Translate selected behavior into robotic control.",
    },
  ];

  return (
    <section className="border-y border-[#8b5cf6]/10 bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="mx-auto max-w-[900px] text-center">
          <div className="flex justify-center">
            <SectionLabel number="06">
              Autonomous Loop
            </SectionLabel>
          </div>

          <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Intelligence becomes
            <span className="block text-white/25">
              a continuous loop.
            </span>
          </h2>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-[8%] right-[8%] top-[35px] hidden h-px bg-gradient-to-r from-[#6d28d9] via-[#c4b5fd] to-[#9333ea] lg:block" />

          <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {stages.map((stage) => {
              const Icon = stage.icon;

              return (
                <div
                  key={stage.number}
                  className="group text-center"
                >
                  <div className="pipeline-node relative z-10 mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-[20px] border border-[#8b5cf6]/25 bg-[#0b0711] transition duration-300 group-hover:border-[#a78bfa]/50 group-hover:bg-[#8b5cf6]/10"
                  >
                    <Icon
                      size={20}
                      strokeWidth={1}
                      className="text-[#c4b5fd]"
                    />
                  </div>

                  <span className="mt-6 block font-mono text-[6px] text-[#a78bfa]/50">
                    {stage.number}
                  </span>

                  <h3 className="mt-3 text-2xl font-medium">
                    {stage.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-[190px] text-[10px] leading-6 text-white/[0.46]">
                    {stage.text}
                  </p>
                </div>
              );
            })}
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
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="absolute right-[-15%] top-[10%] h-[700px] w-[700px] rounded-full bg-[#7c3aed]/[0.05] blur-[190px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <SectionLabel number="07">
          Physical AI Applications
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            AI that operates
            <span className="block text-white/25">
              beyond the screen.
            </span>
          </h2>

          <p className="max-w-[430px] text-[13px] leading-8 text-white/[0.54]">
            Physical AI connects digital intelligence with machines
            capable of sensing, moving and interacting with real
            environments.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {useCases.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="use-case-card group relative min-h-[330px] overflow-hidden rounded-[26px] border border-[#8b5cf6]/15 bg-[#08060d] p-7 transition duration-500 hover:border-[#8b5cf6]/35 md:p-9"
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

                  <div className="mt-20">
                    <h3 className="text-3xl font-medium tracking-[-0.05em] md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-[520px] text-[12px] leading-7 text-white/[0.52]">
                      {item.text}
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
   RESPONSIBLE ROBOTICS
========================================================= */

function ResponsibleRobotics() {
  return (
    <section className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel number="08">
              Engineering Principles
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Intelligence needs
              <span className="block text-white/25">
                boundaries.
              </span>
            </h2>

            <p className="mt-8 max-w-[510px] text-[13px] leading-8 text-white/[0.54]">
              AI-generated decisions should operate inside explicit
              robotic constraints. Safety-critical control,
              uncertainty handling and system observability remain
              essential parts of the architecture.
            </p>

            <div className="mt-10 flex items-center gap-4 rounded-[16px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.035] p-5">
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
                  AI proposes. Controlled systems execute.
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/[0.07]">
            {engineeringPrinciples.map((item, index) => (
              <div
                key={item}
                className="group flex items-center justify-between border-b border-white/[0.07] py-6 transition duration-300 hover:pl-2"
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
                  className="text-white/15 transition group-hover:translate-x-1 group-hover:text-[#a78bfa]"
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
   FINAL
========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-36 md:px-10 md:py-52">
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.09] blur-[220px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.025)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="relative mx-auto max-w-[1450px] text-center">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
          <Bot
            size={11}
            className="text-[#c4b5fd]"
          />

          <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
            HYI.AI / PHYSICAL INTELLIGENCE
          </span>
        </div>

        <h2 className="final-title mx-auto mt-10 max-w-[1350px] text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.82] tracking-[-0.09em]">
          Build machines
          <span className="block text-white/20">
            that perceive.
          </span>

          Systems that
          <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
            understand.
          </span>

          Robots that act.
        </h2>

        <p className="mx-auto mt-10 max-w-[700px] text-[14px] leading-8 text-white/[0.54]">
          Connect AI, perception, autonomy and robotics into one
          intelligent physical system.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="#intelligence"
            className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-8 py-4 text-[12px] font-medium shadow-[0_0_45px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
          >
            Explore AI Robotics

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

export default function AIRoboticsPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes aiOrbit {
              from {
                transform: translate(-50%, -50%) rotate(0deg);
              }

              to {
                transform: translate(-50%, -50%) rotate(360deg);
              }
            }

            @keyframes aiOrbitReverse {
              from {
                transform: translate(-50%, -50%) rotate(360deg);
              }

              to {
                transform: translate(-50%, -50%) rotate(0deg);
              }
            }

            @keyframes robotFloat {
              0%, 100% {
                transform: translate(-50%, -50%) translateY(0px);
              }

              50% {
                transform: translate(-50%, -50%) translateY(-12px);
              }
            }

            @keyframes aiPulse {
              0%, 100% {
                opacity: .45;
                transform: translateX(-50%) scale(.85);
                box-shadow: 0 0 12px rgba(139,92,246,.5);
              }

              50% {
                opacity: 1;
                transform: translateX(-50%) scale(1.15);
                box-shadow: 0 0 30px rgba(139,92,246,1);
              }
            }

            @keyframes robotScan {
              0% {
                top: 20%;
                opacity: 0;
              }

              10% {
                opacity: 1;
              }

              90% {
                opacity: 1;
              }

              100% {
                top: 85%;
                opacity: 0;
              }
            }

            @keyframes eyeMove {
              0%, 100% {
                left: 8px;
              }

              35% {
                left: 14px;
              }

              70% {
                left: 3px;
              }
            }

            @keyframes corePulse {
              0%, 100% {
                transform: scale(.92);
                opacity: .35;
              }

              50% {
                transform: scale(1.08);
                opacity: .9;
              }
            }

            @keyframes nodeFloatOne {
              0%, 100% {
                transform: translateY(0px);
              }

              50% {
                transform: translateY(-9px);
              }
            }

            @keyframes nodeFloatTwo {
              0%, 100% {
                transform: translateY(0px);
              }

              50% {
                transform: translateY(8px);
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

            @keyframes brainNode {
              0%, 100% {
                opacity: .35;
                transform: scale(.8);
              }

              50% {
                opacity: 1;
                transform: scale(1.3);
              }
            }

            @keyframes brainCoreRing {
              from {
                transform: rotate(0deg);
              }

              to {
                transform: rotate(360deg);
              }
            }

            @keyframes pipelineFloat {
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
                transform: translateY(35px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes sectionReveal {
              from {
                opacity: 0;
                transform: translateY(30px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .ai-orbit {
              animation: aiOrbit 32s linear infinite;
            }

            .ai-orbit-reverse {
              animation: aiOrbitReverse 24s linear infinite;
            }

            .ai-robot-float {
              animation: robotFloat 5s ease-in-out infinite;
            }

            .ai-pulse {
              animation: aiPulse 2s ease-in-out infinite;
            }

            .robot-scan {
              animation: robotScan 3.2s ease-in-out infinite;
            }

            .ai-eye {
              animation: eyeMove 4.5s ease-in-out infinite;
            }

            .ai-core-pulse {
              animation: corePulse 2.8s ease-in-out infinite;
            }

            .node-one,
            .node-three {
              animation: nodeFloatOne 4.5s ease-in-out infinite;
            }

            .node-two,
            .node-four {
              animation: nodeFloatTwo 5s ease-in-out infinite;
            }

            .ai-marquee {
              animation: marquee 34s linear infinite;
            }

            .brain-node {
              animation: brainNode 2.4s ease-in-out infinite;
            }

            .brain-core-ring {
              animation: brainCoreRing 14s linear infinite;
            }

            .pipeline-node {
              animation: pipelineFloat 4s ease-in-out infinite;
            }

            .hero-reveal {
              animation: heroReveal .9s cubic-bezier(.16,1,.3,1) both;
            }

            .section-reveal,
            .final-title {
              animation: sectionReveal .9s cubic-bezier(.16,1,.3,1) both;
            }

            @media (max-width: 640px) {
              .ai-node {
                transform: scale(.82);
              }

              .node-one {
                left: 0%;
                top: 11%;
              }

              .node-two {
                right: 0%;
                top: 17%;
              }

              .node-three {
                right: 0%;
                bottom: 12%;
              }

              .node-four {
                left: 0%;
                bottom: 9%;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .ai-orbit,
              .ai-orbit-reverse,
              .ai-robot-float,
              .ai-pulse,
              .robot-scan,
              .ai-eye,
              .ai-core-pulse,
              .node-one,
              .node-two,
              .node-three,
              .node-four,
              .ai-marquee,
              .brain-node,
              .brain-core-ring,
              .pipeline-node,
              .hero-reveal,
              .section-reveal,
              .final-title {
                animation: none !important;
              }
            }
          `,
        }}
      />

      <Header />

      <Hero />

      <IntelligenceStrip />

      <PhysicalAI />

      <IntelligenceLoop />

      <RobotBrainModel />

      <Capabilities />

      <AIArchitecture />

      <AutonomyPipeline />

      <UseCases />

      <ResponsibleRobotics />

      <FinalCTA />

      <Footer />
    </main>
  );
}