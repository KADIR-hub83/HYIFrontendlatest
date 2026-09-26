import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  ArrowRight,
  Bot,
  Box,
  BrainCircuit,
  Camera,
  CheckCircle2,
  CircleDot,
  Cpu,
  Crosshair,
  Database,
  Eye,
  Focus,
  Gauge,
  Layers3,
  Radar,
  Scan,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Target,
  Video,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const visionCapabilities = [
  {
    icon: Scan,
    number: "01",
    label: "DETECTION",
    title: "Object Detection",
    text: "Identify and localize relevant objects inside camera streams so robotic systems can understand what exists within their operating environment.",
  },
  {
    icon: Target,
    number: "02",
    label: "TRACKING",
    title: "Object Tracking",
    text: "Maintain object identity across consecutive frames to support motion understanding, interaction planning and continuous robotic awareness.",
  },
  {
    icon: Layers3,
    number: "03",
    label: "SEGMENTATION",
    title: "Scene Segmentation",
    text: "Separate visual scenes into meaningful regions such as objects, surfaces, obstacles and navigable areas for richer machine understanding.",
  },
  {
    icon: Crosshair,
    number: "04",
    label: "POSE",
    title: "Pose Estimation",
    text: "Estimate object position and orientation so robotic manipulators and autonomous systems can reason about physical geometry.",
  },
  {
    icon: Radar,
    number: "05",
    label: "DEPTH",
    title: "Depth Perception",
    text: "Combine depth sensors, stereo vision and spatial models to estimate distance and reconstruct three-dimensional environments.",
  },
  {
    icon: BrainCircuit,
    number: "06",
    label: "AI VISION",
    title: "Visual Intelligence",
    text: "Connect computer vision pipelines with AI models to classify, interpret and reason about visual information in complex environments.",
  },
];

const perceptionPipeline = [
  {
    number: "01",
    title: "Capture",
    subtitle: "RGB / Depth / Thermal",
    icon: Camera,
  },
  {
    number: "02",
    title: "Process",
    subtitle: "Filter / Transform",
    icon: Cpu,
  },
  {
    number: "03",
    title: "Detect",
    subtitle: "Objects / Features",
    icon: Scan,
  },
  {
    number: "04",
    title: "Understand",
    subtitle: "Context / Geometry",
    icon: BrainCircuit,
  },
  {
    number: "05",
    title: "Decide",
    subtitle: "Planning / Behavior",
    icon: Workflow,
  },
  {
    number: "06",
    title: "Act",
    subtitle: "Robot / Machine",
    icon: Bot,
  },
];

const applications = [
  {
    icon: Bot,
    number: "01",
    title: "Robot Guidance",
    text: "Enable robotic systems to locate objects, understand workspace geometry and align physical actions with visual observations.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Visual Inspection",
    text: "Analyze components, surfaces and production outputs for anomalies, defects and quality conditions.",
  },
  {
    icon: Box,
    number: "03",
    title: "Pick & Place",
    text: "Estimate object position, orientation and boundaries to support robotic grasping and manipulation workflows.",
  },
  {
    icon: Radar,
    number: "04",
    title: "Autonomous Navigation",
    text: "Use visual information alongside spatial sensing to detect obstacles and understand navigable environments.",
  },
];

const architectureLayers = [
  {
    number: "L05",
    label: "INTELLIGENCE",
    title: "Visual Reasoning",
    text: "Scene understanding, contextual AI and decision support.",
  },
  {
    number: "L04",
    label: "PERCEPTION",
    title: "Detection & Segmentation",
    text: "Objects, classes, masks, features and visual relationships.",
  },
  {
    number: "L03",
    label: "SPATIAL",
    title: "Depth & Geometry",
    text: "Distance, pose, coordinates and three-dimensional structure.",
  },
  {
    number: "L02",
    label: "PROCESSING",
    title: "Image Pipeline",
    text: "Calibration, filtering, transformations and preprocessing.",
  },
  {
    number: "L01",
    label: "SENSORS",
    title: "Vision Hardware",
    text: "RGB cameras, stereo cameras, depth sensors and thermal imaging.",
  },
];

const principles = [
  "Calibrated visual inputs",
  "Predictable inference pipelines",
  "Observable confidence levels",
  "Controlled model deployment",
  "Hardware-aware processing",
  "Simulation and dataset validation",
  "Failure-state visibility",
  "Human-controlled safety boundaries",
];

/* =========================================================
   SECTION LABEL
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

      <div className="h-px w-9 bg-[#8b5cf6]/40" />

      <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/35">
        {children}
      </span>
    </div>
  );
}

/* =========================================================
   HERO VISION VIEWPORT
========================================================= */

function VisionViewport() {
  return (
    <div className="relative mx-auto h-[620px] w-full max-w-[720px]">
      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[130px]" />

      {/* Main camera */}

      <div className="absolute inset-x-0 top-1/2 h-[470px] -translate-y-1/2 overflow-hidden rounded-[32px] border border-[#8b5cf6]/20 bg-[#06040a] shadow-[0_50px_120px_rgba(0,0,0,.55)]">
        {/* top bar */}

        <div className="absolute left-0 right-0 top-0 z-30 flex h-[58px] items-center justify-between border-b border-white/[0.06] bg-black/40 px-5 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-[#8b5cf6]/20 bg-[#8b5cf6]/10">
              <Camera
                size={13}
                strokeWidth={1.2}
                className="text-[#c4b5fd]"
              />

              <span className="absolute -right-1 -top-1 h-2 w-2 animate-pulse rounded-full bg-[#a78bfa]" />
            </div>

            <div>
              <span className="block font-mono text-[6px] tracking-[0.15em] text-white/20">
                CAMERA STREAM
              </span>

              <span className="mt-1 block font-mono text-[7px] tracking-[0.12em] text-white/55">
                ROBOT_CAM_01
              </span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <span className="hidden font-mono text-[6px] text-white/25 sm:block">
              1920 × 1080
            </span>

            <div className="flex items-center gap-2 rounded-full border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.05] px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a78bfa]" />

              <span className="font-mono text-[6px] tracking-[0.12em] text-white/40">
                LIVE
              </span>
            </div>
          </div>
        </div>

        {/* camera background */}

        <div className="absolute inset-0 top-[58px] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(124,58,237,.13),transparent_45%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.04)_1px,transparent_1px)] bg-[size:34px_34px]" />

          {/* Perspective floor */}

          <div
            className="absolute bottom-[-80px] left-1/2 h-[280px] w-[700px] -translate-x-1/2 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(rgba(139,92,246,.16) 1px, transparent 1px), linear-gradient(90deg,rgba(139,92,246,.16) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
              transform:
                "translateX(-50%) perspective(400px) rotateX(62deg)",
              transformOrigin: "bottom",
            }}
          />

          {/* central robot silhouette */}

          <div className="absolute left-1/2 top-[51%] -translate-x-1/2 -translate-y-1/2">
            <div className="relative h-[205px] w-[150px]">
              {/* head */}

              <div className="absolute left-1/2 top-0 h-[70px] w-[90px] -translate-x-1/2 rounded-[24px] border border-[#a78bfa]/30 bg-[#110b19] shadow-[0_0_50px_rgba(124,58,237,.15)]">
                <div className="absolute left-[18px] top-[28px] h-[7px] w-[13px] rounded-full bg-[#a78bfa] shadow-[0_0_14px_#8b5cf6]" />

                <div className="absolute right-[18px] top-[28px] h-[7px] w-[13px] rounded-full bg-[#a78bfa] shadow-[0_0_14px_#8b5cf6]" />
              </div>

              {/* neck */}

              <div className="absolute left-1/2 top-[67px] h-[20px] w-[28px] -translate-x-1/2 border-x border-[#8b5cf6]/25 bg-[#0c0811]" />

              {/* body */}

              <div className="absolute left-1/2 top-[84px] h-[96px] w-[116px] -translate-x-1/2 rounded-[26px] border border-[#8b5cf6]/25 bg-gradient-to-b from-[#120b1b] to-[#07050a]">
                <div className="absolute left-1/2 top-[22px] flex h-[42px] w-[42px] -translate-x-1/2 items-center justify-center rounded-[14px] border border-[#a78bfa]/20 bg-[#8b5cf6]/10">
                  <BrainCircuit
                    size={20}
                    strokeWidth={1}
                    className="text-[#c4b5fd]"
                  />
                </div>
              </div>

              {/* arms */}

              <div className="absolute left-[-3px] top-[95px] h-[88px] w-[18px] rotate-[8deg] rounded-full border border-[#8b5cf6]/20 bg-[#0c0811]" />

              <div className="absolute right-[-3px] top-[95px] h-[88px] w-[18px] -rotate-[8deg] rounded-full border border-[#8b5cf6]/20 bg-[#0c0811]" />
            </div>
          </div>

          {/* detection box robot */}

          <div className="absolute left-1/2 top-[49%] h-[270px] w-[215px] -translate-x-1/2 -translate-y-1/2 border border-[#b9a4ff]/55">
            <span className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-[#d8ccff]" />
            <span className="absolute -right-px -top-px h-5 w-5 border-r-2 border-t-2 border-[#d8ccff]" />
            <span className="absolute -bottom-px -left-px h-5 w-5 border-b-2 border-l-2 border-[#d8ccff]" />
            <span className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-[#d8ccff]" />

            <div className="absolute -top-[26px] left-[-1px] flex items-center gap-2 bg-[#8b5cf6] px-2.5 py-1.5">
              <span className="font-mono text-[6px] font-semibold tracking-[0.08em] text-white">
                ROBOT
              </span>

              <span className="font-mono text-[6px] text-white/70">
                98.7%
              </span>
            </div>
          </div>

          {/* left object */}

          <div className="absolute bottom-[55px] left-[7%] h-[95px] w-[115px] border border-[#8b5cf6]/45">
            <div className="absolute inset-[15px] rounded-[8px] border border-white/10 bg-[#8b5cf6]/10" />

            <div className="absolute -top-[22px] left-[-1px] bg-[#21122f] px-2 py-1">
              <span className="font-mono text-[5px] tracking-[0.08em] text-[#c4b5fd]">
                CONTAINER 94%
              </span>
            </div>
          </div>

          {/* right object */}

          <div className="absolute right-[8%] top-[30%] h-[90px] w-[100px] border border-[#8b5cf6]/45">
            <div className="absolute left-1/2 top-1/2 h-[38px] w-[38px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a78bfa]/30 bg-[#8b5cf6]/10" />

            <div className="absolute -top-[22px] left-[-1px] bg-[#21122f] px-2 py-1">
              <span className="font-mono text-[5px] tracking-[0.08em] text-[#c4b5fd]">
                TARGET 91%
              </span>
            </div>
          </div>

          {/* center target */}

          <div className="absolute left-1/2 top-1/2 h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c4b5fd]/25">
            <div className="absolute left-1/2 top-[-10px] h-[18px] w-px -translate-x-1/2 bg-[#c4b5fd]/40" />
            <div className="absolute bottom-[-10px] left-1/2 h-[18px] w-px -translate-x-1/2 bg-[#c4b5fd]/40" />
            <div className="absolute left-[-10px] top-1/2 h-px w-[18px] -translate-y-1/2 bg-[#c4b5fd]/40" />
            <div className="absolute right-[-10px] top-1/2 h-px w-[18px] -translate-y-1/2 bg-[#c4b5fd]/40" />

            <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c4b5fd]" />
          </div>

          {/* scanning line */}

          <div className="vision-scan-line absolute left-0 right-0 top-[20%] z-20 h-px bg-gradient-to-r from-transparent via-[#c4b5fd] to-transparent shadow-[0_0_18px_rgba(196,181,253,.8)]" />

          {/* corner details */}

          <div className="absolute bottom-4 left-4 font-mono text-[5px] leading-4 tracking-[0.1em] text-white/20">
            X 032.847
            <br />
            Y 018.201
            <br />
            Z 002.912
          </div>

          <div className="absolute bottom-4 right-4 text-right font-mono text-[5px] leading-4 tracking-[0.1em] text-white/20">
            FPS 60
            <br />
            LAT 12MS
            <br />
            AI ACTIVE
          </div>
        </div>
      </div>

      {/* floating cards */}

      <div className="vision-float absolute left-[-10px] top-[35px] z-40 hidden w-[155px] rounded-[18px] border border-[#8b5cf6]/20 bg-[#09060e]/95 p-4 shadow-2xl backdrop-blur-xl sm:block">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#8b5cf6]/10">
            <Eye size={14} className="text-[#c4b5fd]" />
          </div>

          <div>
            <span className="block font-mono text-[5px] text-white/20">
              VISION
            </span>

            <span className="mt-1 block font-mono text-[7px] text-white/55">
              PERCEPTION
            </span>
          </div>
        </div>
      </div>

      <div className="vision-float-delay absolute bottom-[30px] right-[-5px] z-40 hidden w-[165px] rounded-[18px] border border-[#8b5cf6]/20 bg-[#09060e]/95 p-4 shadow-2xl backdrop-blur-xl sm:block">
        <div className="flex items-center justify-between">
          <div>
            <span className="block font-mono text-[5px] text-white/20">
              CONFIDENCE
            </span>

            <span className="mt-2 block text-xl font-medium text-[#c4b5fd]">
              98.7
            </span>
          </div>

          <Gauge
            size={20}
            strokeWidth={1}
            className="text-[#a78bfa]"
          />
        </div>

        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.06]">
          <div className="h-full w-[98%] bg-gradient-to-r from-[#6d28d9] to-[#c4b5fd]" />
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
    <section className="relative min-h-screen overflow-hidden bg-[#000000] px-5 pb-24 pt-36 md:px-10 md:pt-44">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="pointer-events-none absolute right-[-15%] top-[5%] h-[900px] w-[900px] rounded-full bg-[#7c3aed]/[0.09] blur-[220px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#a78bfa]" />

            <span className="font-mono text-[7px] tracking-[0.2em] text-white/40">
              HYI.AI / ROBOT COMPUTER VISION
            </span>
          </div>

          <span className="hidden font-mono text-[7px] tracking-[0.18em] text-white/20 md:block">
            SEE / UNDERSTAND / ACT
          </span>
        </div>

        <div className="grid min-h-[780px] items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div className="hero-enter relative z-10">
            <div className="flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.07] px-4 py-2">
              <Eye
                size={11}
                className="text-[#c4b5fd]"
              />

              <span className="font-mono text-[7px] tracking-[0.18em] text-[#c4b5fd]/70">
                MACHINE PERCEPTION SYSTEMS
              </span>
            </div>

            <h1 className="mt-9 max-w-[760px] text-[clamp(4rem,7vw,7.7rem)] font-semibold leading-[0.83] tracking-[-0.085em]">
              Give robots
              <span className="block text-white/25">
                the ability
              </span>
              to{" "}
              <span className="bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
                see.
              </span>
            </h1>

            <p className="mt-9 max-w-[600px] text-[14px] leading-8 text-white/[0.56] md:text-[16px] md:leading-9">
              Computer vision transforms raw camera streams into
              structured perception — allowing robotic systems to
              detect objects, estimate geometry, understand scenes and
              connect visual intelligence with physical action.
            </p>

            <div className="mt-11 flex flex-wrap gap-4">
              <a
                href="#vision-system"
                className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-7 py-4 text-[12px] font-medium shadow-[0_0_35px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
              >
                Explore Vision System

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#applications"
                className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.025] px-7 py-4 text-[12px] text-white/65 transition hover:border-[#8b5cf6]/40"
              >
                Applications
                <Crosshair size={13} />
              </a>
            </div>

            <div className="mt-16 grid max-w-[620px] grid-cols-3 border-y border-white/[0.07] py-6">
              <div>
                <span className="font-mono text-[6px] tracking-[0.15em] text-white/20">
                  INPUT
                </span>

                <p className="mt-2 text-[11px] text-white/55">
                  Camera
                </p>
              </div>

              <div className="border-l border-white/[0.07] pl-6">
                <span className="font-mono text-[6px] tracking-[0.15em] text-white/20">
                  PROCESS
                </span>

                <p className="mt-2 text-[11px] text-white/55">
                  Vision AI
                </p>
              </div>

              <div className="border-l border-white/[0.07] pl-6">
                <span className="font-mono text-[6px] tracking-[0.15em] text-white/20">
                  OUTPUT
                </span>

                <p className="mt-2 text-[11px] text-white/55">
                  Understanding
                </p>
              </div>
            </div>
          </div>

          <VisionViewport />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MOVING STRIP
========================================================= */

function VisionStrip() {
  const words = [
    "OBJECT DETECTION",
    "DEPTH",
    "TRACKING",
    "SEGMENTATION",
    "POSE",
    "AI VISION",
    "MAPPING",
    "PERCEPTION",
    "ROBOTICS",
  ];

  return (
    <section className="overflow-hidden border-y border-[#8b5cf6]/10 bg-[#050307] py-6">
      <div className="vision-marquee flex w-max whitespace-nowrap">
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

function VisionStatement() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-32 md:px-10 md:py-48">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.05] blur-[170px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid gap-14 lg:grid-cols-[.35fr_1.65fr]">
          <SectionLabel number="01">
            Machine Perception
          </SectionLabel>

          <div>
            <h2 className="reveal-up max-w-[1150px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[88px]">
              A camera captures pixels.
              <span className="text-white/25">
                {" "}Vision software turns them into meaning.
              </span>
            </h2>

            <div className="mt-14 grid gap-8 border-t border-white/[0.07] pt-10 md:grid-cols-2">
              <p className="max-w-[500px] text-[13px] leading-8 text-white/[0.55]">
                Robots need more than images. They need structured
                information about objects, boundaries, motion,
                distance, position and relationships inside their
                environment.
              </p>

              <p className="max-w-[500px] text-[13px] leading-8 text-white/[0.55]">
                Computer vision creates that perception layer and
                connects visual observations with planning, autonomy
                and controlled machine behavior.
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

function VisionCapabilities() {
  return (
    <section
      id="vision-system"
      className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-[1450px]">
        <SectionLabel number="02">
          Vision Intelligence
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Understand more
            <span className="block text-white/25">
              than the image.
            </span>
          </h2>

          <p className="max-w-[430px] text-[13px] leading-8 text-white/[0.52]">
            Build visual perception pipelines that convert sensor
            inputs into useful machine-readable representations of the
            physical environment.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visionCapabilities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="vision-card group relative min-h-[370px] overflow-hidden rounded-[24px] border border-[#8b5cf6]/15 bg-[#08060d] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#8b5cf6]/35"
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

                  <div className="mt-20">
                    <span className="font-mono text-[6px] tracking-[0.16em] text-[#a78bfa]/60">
                      {item.label}
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
   PERCEPTION MODEL
========================================================= */

function PerceptionModel() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid items-center gap-16 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionLabel number="03">
              Perception Engine
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Pixels enter.
              <span className="block text-white/25">
                Context leaves.
              </span>
            </h2>

            <p className="mt-8 max-w-[520px] text-[13px] leading-8 text-white/[0.54]">
              A robotic perception engine can combine image
              processing, neural inference, geometry and temporal
              information to construct a continuously updated view of
              the environment.
            </p>

            <div className="mt-12 space-y-3">
              {[
                "Camera calibration",
                "Frame preprocessing",
                "AI model inference",
                "Object localization",
                "Spatial estimation",
                "Temporal tracking",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/[0.06] py-4"
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

          {/* Perception engine visual */}

          <div className="relative min-h-[600px] overflow-hidden rounded-[30px] border border-[#8b5cf6]/15 bg-[#07050b] p-6 md:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.035)_1px,transparent_1px)] bg-[size:34px_34px]" />

            <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.07] blur-[100px]" />

            <div className="relative flex h-full min-h-[520px] items-center justify-center">
              <div className="relative h-[420px] w-[420px] max-w-full">
                {/* outer rings */}

                <div className="vision-ring absolute inset-0 rounded-full border border-dashed border-[#8b5cf6]/20" />

                <div className="vision-ring-reverse absolute inset-[55px] rounded-full border border-[#8b5cf6]/15" />

                <div className="absolute inset-[115px] rounded-full border border-[#a78bfa]/20 bg-[#8b5cf6]/[0.04]" />

                {/* core */}

                <div className="absolute left-1/2 top-1/2 flex h-[135px] w-[135px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[38px] border border-[#a78bfa]/30 bg-[#100a18] shadow-[0_0_70px_rgba(124,58,237,.18)]">
                  <Eye
                    size={48}
                    strokeWidth={0.8}
                    className="text-[#c4b5fd]"
                  />

                  <div className="vision-core-scan absolute left-5 right-5 h-px bg-[#c4b5fd] shadow-[0_0_12px_#8b5cf6]" />
                </div>

                {/* nodes */}

                <div className="absolute left-1/2 top-[-18px] -translate-x-1/2">
                  <VisionNode
                    icon={<Camera size={14} />}
                    title="CAMERA"
                  />
                </div>

                <div className="absolute right-[-32px] top-1/2 -translate-y-1/2">
                  <VisionNode
                    icon={<Scan size={14} />}
                    title="DETECT"
                  />
                </div>

                <div className="absolute bottom-[-18px] left-1/2 -translate-x-1/2">
                  <VisionNode
                    icon={<Layers3 size={14} />}
                    title="SCENE"
                  />
                </div>

                <div className="absolute left-[-32px] top-1/2 -translate-y-1/2">
                  <VisionNode
                    icon={<Radar size={14} />}
                    title="DEPTH"
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2">
              {[
                ["FRAME", "ACTIVE"],
                ["MODEL", "READY"],
                ["OUTPUT", "STREAMING"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[10px] border border-white/[0.06] bg-black/40 p-3"
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
        </div>
      </div>
    </section>
  );
}

function VisionNode({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="vision-node flex min-w-[95px] items-center gap-2 rounded-[13px] border border-[#8b5cf6]/20 bg-[#0a0710] px-3 py-2.5 shadow-xl">
      <span className="text-[#a78bfa]">{icon}</span>

      <span className="font-mono text-[6px] tracking-[0.1em] text-white/40">
        {title}
      </span>
    </div>
  );
}

/* =========================================================
   PIPELINE
========================================================= */

function Pipeline() {
  return (
    <section className="border-y border-[#8b5cf6]/10 bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="mx-auto max-w-[900px] text-center">
          <div className="flex justify-center">
            <SectionLabel number="04">
              Vision Pipeline
            </SectionLabel>
          </div>

          <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            See.
            <span className="text-white/25"> Understand. </span>
            Move.
          </h2>

          <p className="mx-auto mt-7 max-w-[600px] text-[13px] leading-8 text-white/[0.5]">
            Visual information moves through multiple software layers
            before becoming useful robotic behavior.
          </p>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-[8%] right-[8%] top-[31px] hidden h-px bg-gradient-to-r from-[#6d28d9] via-[#c4b5fd] to-[#9333ea] lg:block" />

          <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-6">
            {perceptionPipeline.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group text-center"
                >
                  <div className="vision-pipeline-node relative z-10 mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-[18px] border border-[#8b5cf6]/25 bg-[#0b0711] transition duration-300 group-hover:border-[#a78bfa]/50 group-hover:bg-[#8b5cf6]/10">
                    <Icon
                      size={18}
                      strokeWidth={1.1}
                      className="text-[#c4b5fd]"
                    />
                  </div>

                  <span className="mt-6 block font-mono text-[6px] text-[#a78bfa]/50">
                    {item.number}
                  </span>

                  <h3 className="mt-3 text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-3 font-mono text-[6px] tracking-[0.08em] text-white/25">
                    {item.subtitle}
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
   DEPTH MODEL
========================================================= */

function DepthIntelligence() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* visual */}

          <div className="relative h-[560px] overflow-hidden rounded-[30px] border border-[#8b5cf6]/15 bg-[#07050b]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,.13),transparent_52%)]" />

            <div className="absolute left-6 top-6 z-20 flex items-center gap-3">
              <Radar
                size={13}
                className="text-[#a78bfa]"
              />

              <span className="font-mono text-[7px] tracking-[0.15em] text-white/35">
                DEPTH RECONSTRUCTION
              </span>
            </div>

            <div className="absolute inset-x-[-120px] bottom-[-130px] h-[470px]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(139,92,246,.22) 1px, transparent 1px), linear-gradient(90deg,rgba(139,92,246,.22) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                  transform: "perspective(500px) rotateX(62deg)",
                  transformOrigin: "bottom",
                }}
              />
            </div>

            {/* points */}

            {[
              ["20%", "34%", "5px"],
              ["27%", "52%", "4px"],
              ["34%", "27%", "6px"],
              ["41%", "45%", "3px"],
              ["49%", "31%", "5px"],
              ["57%", "51%", "4px"],
              ["64%", "25%", "6px"],
              ["72%", "43%", "4px"],
              ["79%", "33%", "5px"],
              ["45%", "63%", "4px"],
              ["62%", "67%", "5px"],
              ["31%", "70%", "3px"],
            ].map(([left, top, size], index) => (
              <span
                key={index}
                className="vision-point absolute rounded-full bg-[#c4b5fd] shadow-[0_0_10px_#8b5cf6]"
                style={{
                  left,
                  top,
                  width: size,
                  height: size,
                  animationDelay: `${index * 0.15}s`,
                }}
              />
            ))}

            <div className="absolute left-1/2 top-[47%] h-[200px] w-[150px] -translate-x-1/2 -translate-y-1/2 border border-[#a78bfa]/40">
              <div className="absolute inset-[25px] rounded-[20px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]" />

              <span className="absolute -top-[24px] left-[-1px] bg-[#8b5cf6] px-2 py-1 font-mono text-[5px] tracking-[0.08em]">
                3D OBJECT
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
              <span className="font-mono text-[5px] tracking-[0.12em] text-white/20">
                POINT CLOUD ACTIVE
              </span>

              <span className="font-mono text-[5px] tracking-[0.12em] text-[#a78bfa]/60">
                XYZ SPACE
              </span>
            </div>
          </div>

          <div>
            <SectionLabel number="05">
              Spatial Vision
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Images become
              <span className="block text-white/25">
                physical space.
              </span>
            </h2>

            <p className="mt-8 max-w-[540px] text-[13px] leading-8 text-white/[0.54]">
              Depth perception helps robotic systems move beyond
              two-dimensional recognition by estimating distance,
              geometry and spatial relationships between objects.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-3">
              {[
                "Stereo Vision",
                "Depth Cameras",
                "Point Clouds",
                "3D Reconstruction",
                "Pose Estimation",
                "Spatial Mapping",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[14px] border border-[#8b5cf6]/12 bg-[#8b5cf6]/[0.035] p-4"
                >
                  <span className="text-[10px] text-white/50">
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
   ARCHITECTURE
========================================================= */

function VisionArchitecture() {
  return (
    <section className="relative overflow-hidden bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.72fr_1.28fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel number="06">
              Vision Architecture
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Build perception
              <span className="block text-white/25">
                layer by layer.
              </span>
            </h2>

            <p className="mt-8 max-w-[470px] text-[13px] leading-8 text-white/[0.52]">
              A modular architecture separates sensing, processing,
              spatial reasoning and intelligence so the visual system
              can evolve without tightly coupling every robotic
              subsystem.
            </p>
          </div>

          <div className="space-y-3">
            {architectureLayers.map((item, index) => (
              <article
                key={item.number}
                className="group relative overflow-hidden rounded-[20px] border border-[#8b5cf6]/15 bg-[#08060d] p-6 transition duration-300 hover:translate-x-2 hover:border-[#8b5cf6]/30 md:p-8"
              >
                <div
                  className="absolute bottom-0 left-0 top-0 bg-[#7c3aed]/[0.04]"
                  style={{
                    width: `${100 - index * 8}%`,
                  }}
                />

                <div className="relative grid gap-5 md:grid-cols-[75px_130px_1fr_1.1fr] md:items-center">
                  <span className="font-mono text-[6px] text-[#a78bfa]/55">
                    {item.number}
                  </span>

                  <span className="font-mono text-[6px] tracking-[0.14em] text-white/25">
                    {item.label}
                  </span>

                  <h3 className="text-xl font-medium text-white/75">
                    {item.title}
                  </h3>

                  <p className="text-[11px] leading-6 text-white/[0.47]">
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
   APPLICATIONS
========================================================= */

function Applications() {
  return (
    <section
      id="applications"
      className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-40"
    >
      <div className="absolute right-[-10%] top-[10%] h-[700px] w-[700px] rounded-full bg-[#7c3aed]/[0.05] blur-[180px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <SectionLabel number="07">
          Robotic Applications
        </SectionLabel>

        <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Vision connected
            <span className="block text-white/25">
              to physical action.
            </span>
          </h2>

          <p className="max-w-[420px] text-[13px] leading-8 text-white/[0.52]">
            Computer vision becomes especially valuable when visual
            understanding directly informs robotic movement,
            inspection and interaction.
          </p>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {applications.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative min-h-[360px] overflow-hidden rounded-[24px] border border-[#8b5cf6]/15 bg-[#08060d] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#8b5cf6]/35"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">
                    <Icon
                      size={17}
                      strokeWidth={1.1}
                      className="text-[#c4b5fd]"
                    />
                  </div>

                  <span className="font-mono text-[6px] text-white/20">
                    {item.number}
                  </span>
                </div>

                <div className="mt-24">
                  <h3 className="text-3xl font-medium tracking-[-0.05em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[11px] leading-7 text-white/[0.5]">
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

/* =========================================================
   QUALITY
========================================================= */

function VisionEngineering() {
  return (
    <section className="border-y border-[#8b5cf6]/10 bg-[#050307] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel number="08">
              Vision Engineering
            </SectionLabel>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Detection is only
              <span className="block text-white/25">
                the beginning.
              </span>
            </h2>

            <p className="mt-8 max-w-[500px] text-[13px] leading-8 text-white/[0.52]">
              Production robotic vision requires attention to camera
              calibration, environmental variation, model confidence,
              latency, failure behavior and the physical consequences
              of incorrect perception.
            </p>
          </div>

          <div className="border-t border-white/[0.07]">
            {principles.map((item, index) => (
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
   FINAL CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-36 md:px-10 md:py-52">
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.09] blur-[200px]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="relative mx-auto max-w-[1450px] text-center">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06] px-4 py-2">
          <Sparkles
            size={11}
            className="text-[#c4b5fd]"
          />

          <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
            ROBOT VISION / HYI.AI
          </span>
        </div>

        <h2 className="reveal-up mx-auto mt-10 max-w-[1300px] text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.83] tracking-[-0.085em]">
          Let machines
          <span className="block text-white/20">
            see the world.
          </span>

          Then teach them
          <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
            what it means.
          </span>
        </h2>

        <p className="mx-auto mt-10 max-w-[720px] text-[14px] leading-8 text-white/[0.52]">
          Build robotic perception systems that connect cameras,
          spatial intelligence and AI with autonomous machine
          behavior.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="#vision-system"
            className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-8 py-4 text-[12px] font-medium shadow-[0_0_40px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
          >
            Explore Computer Vision

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

export default function RobotComputerVisionPage() {
  return (
    <main className="relative overflow-hidden bg-[#000000] text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes visionScan {
              0% {
                top: 15%;
                opacity: 0;
              }

              8% {
                opacity: 1;
              }

              92% {
                opacity: 1;
              }

              100% {
                top: 90%;
                opacity: 0;
              }
            }

            @keyframes visionFloat {
              0%, 100% {
                transform: translateY(0px);
              }

              50% {
                transform: translateY(-10px);
              }
            }

            @keyframes visionMarquee {
              from {
                transform: translateX(0);
              }

              to {
                transform: translateX(-50%);
              }
            }

            @keyframes visionRing {
              from {
                transform: rotate(0deg);
              }

              to {
                transform: rotate(360deg);
              }
            }

            @keyframes visionRingReverse {
              from {
                transform: rotate(360deg);
              }

              to {
                transform: rotate(0deg);
              }
            }

            @keyframes coreScan {
              0%, 100% {
                top: 25%;
                opacity: .25;
              }

              50% {
                top: 75%;
                opacity: 1;
              }
            }

            @keyframes visionNodeFloat {
              0%, 100% {
                transform: translateY(0px);
              }

              50% {
                transform: translateY(-6px);
              }
            }

            @keyframes visionPoint {
              0%, 100% {
                opacity: .25;
                transform: scale(.8);
              }

              50% {
                opacity: 1;
                transform: scale(1.3);
              }
            }

            @keyframes pipelineFloat {
              0%, 100% {
                transform: translateY(0px);
              }

              50% {
                transform: translateY(-5px);
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

            @keyframes revealUp {
              from {
                opacity: 0;
                transform: translateY(35px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .vision-scan-line {
              animation: visionScan 3.4s ease-in-out infinite;
            }

            .vision-float {
              animation: visionFloat 4.5s ease-in-out infinite;
            }

            .vision-float-delay {
              animation: visionFloat 5s ease-in-out .8s infinite;
            }

            .vision-marquee {
              animation: visionMarquee 32s linear infinite;
            }

            .vision-ring {
              animation: visionRing 28s linear infinite;
            }

            .vision-ring-reverse {
              animation: visionRingReverse 20s linear infinite;
            }

            .vision-core-scan {
              animation: coreScan 2.8s ease-in-out infinite;
            }

            .vision-node {
              animation: visionNodeFloat 4s ease-in-out infinite;
            }

            .vision-point {
              animation: visionPoint 2.2s ease-in-out infinite;
            }

            .vision-pipeline-node {
              animation: pipelineFloat 4s ease-in-out infinite;
            }

            .hero-enter {
              animation: heroEnter .85s cubic-bezier(.16,1,.3,1) both;
            }

            .reveal-up {
              animation: revealUp .9s cubic-bezier(.16,1,.3,1) both;
            }

            @media (prefers-reduced-motion: reduce) {
              .vision-scan-line,
              .vision-float,
              .vision-float-delay,
              .vision-marquee,
              .vision-ring,
              .vision-ring-reverse,
              .vision-core-scan,
              .vision-node,
              .vision-point,
              .vision-pipeline-node,
              .hero-enter,
              .reveal-up {
                animation: none !important;
              }
            }
          `,
        }}
      />

      <Header />

      <Hero />

      <VisionStrip />

      <VisionStatement />

      <VisionCapabilities />

      <PerceptionModel />

      <Pipeline />

      <DepthIntelligence />

      <VisionArchitecture />

      <Applications />

      <VisionEngineering />

      <FinalCTA />

      <Footer />
    </main>
  );
}