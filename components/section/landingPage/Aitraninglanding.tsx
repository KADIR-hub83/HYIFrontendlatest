"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Workflow, Rocket, Sparkles } from "lucide-react";

/* =====================================================
   TYPES + DATA (Section 02 grid)
===================================================== */

type IconName = "brain" | "spark" | "command" | "flow" | "layers" | "arrow";
type Visual = "foundations" | "generative" | "prompt";

const capabilities: {
  number: string;
  title: string;
  label: string;
  description: string;
  icon: IconName;
  bg: string;
  visual?: Visual;
  tag?: string;
}[] = [
  {
    number: "01",
    title: "AI Foundations",
    label: "UNDERSTAND",
    description:
      "Build a strong mental model of artificial intelligence, machine learning and modern AI systems.",
    icon: "brain",
    bg: "/Card-bg-04.webp",
    visual: "foundations",
    tag: "Start here",
  },
  {
    number: "02",
    title: "Generative AI",
    label: "CREATE",
    description:
      "Explore models that generate text, images, code and ideas — and learn how to work with them.",
    icon: "spark",
    bg: "/Card-bg-05.webp",
    visual: "generative",
    tag: "Create",
  },
  {
    number: "03",
    title: "Prompt Engineering",
    label: "DIRECT",
    description:
      "Learn how to communicate with intelligent systems through structured and reliable instructions.",
    icon: "command",
    bg: "/Card-bg-04.webp",
    visual: "prompt",
    tag: "Direct",
  },
  {
    number: "04",
    title: "AI Automation",
    label: "AUTOMATE",
    description:
      "Connect AI with workflows, tools and processes to eliminate repetitive digital work.",
    icon: "flow",
    bg: "/Card-bg-05.webp",
  },
  {
    number: "05",
    title: "Hands-on Learning",
    label: "EXPERIMENT",
    description:
      "Move beyond theory through practical challenges, experiments and real implementation.",
    icon: "layers",
    bg: "/Card-bg-04.webp",
  },
  {
    number: "06",
    title: "Real-World Projects",
    label: "DEPLOY",
    description:
      "Turn everything you learn into useful systems inspired by real products and businesses.",
    icon: "arrow",
    bg: "/Card-bg-05.webp",
  },
];

const ringColors = [
  "border-pink-400",
  "border-fuchsia-400",
  "border-orange-300",
  "border-emerald-300",
];

const clusterIcons: IconName[] = ["brain", "spark", "command", "flow"];

/* =====================================================
   SVG ICON PATHS
===================================================== */

function Icon({ name }: { name: IconName }) {
  return (
    <>
      {name === "brain" && (
        <>
          <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3 3 3 0 0 0 2 3v2a3 3 0 0 0 3 3" />
          <path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 3 3 3 0 0 1-2 3v2a3 3 0 0 1-3 3" />
          <path d="M9 3v18M15 3v18M9 8h6M9 16h6" />
        </>
      )}
      {name === "spark" && (
        <>
          <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" />
          <path d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
        </>
      )}
      {name === "command" && (
        <>
          <rect x="5" y="5" width="6" height="6" rx="2" />
          <rect x="13" y="13" width="6" height="6" rx="2" />
          <path d="M11 8h2M8 11v2M16 11v2M11 16h2" />
        </>
      )}
      {name === "flow" && (
        <>
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="14" width="6" height="6" rx="1" />
          <path d="M10 7h4v10M14 17h-4" />
        </>
      )}
      {name === "layers" && (
        <>
          <path d="m12 4 8 4-8 4-8-4 8-4Z" />
          <path d="m4 12 8 4 8-4M4 16l8 4 8-4" />
        </>
      )}
      {name === "arrow" && (
        <>
          <path d="M5 12h13" />
          <path d="m13 6 6 6-6 6" />
        </>
      )}
    </>
  );
}

/* =====================================================
   SHARED PIECES (ek hi baar define)
===================================================== */

function Cursor() {
  return (
    <svg
      className="h-3 w-3 -mt-1 text-white/80"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M3 2l18 8-8 3-3 8L3 2Z" />
    </svg>
  );
}

function FloatChip({
  text,
  color,
  pos,
  delay = 0,
  duration = 3.5,
}: {
  text: string;
  color: string;
  pos: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute ${pos} flex items-start gap-1`}
    >
      <Cursor />
      <span
        className={`rounded-full px-3 py-1 text-xs font-medium text-white shadow-md ${color}`}
      >
        {text}
      </span>
    </motion.div>
  );
}

function Tag({
  text,
  dot,
  className = "",
}: {
  text: string;
  dot: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80 backdrop-blur-md ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {text}
    </span>
  );
}

/* =====================================================
   SECTION 02 VISUALS (01, 02, 03 cards)
===================================================== */

function FoundationsVisual() {
  return (
    <div className="relative mt-auto h-24 pt-4">
      <div className="absolute left-[20%] top-3 flex -space-x-3">
        {clusterIcons.map((icon, i) => (
          <motion.div
            key={icon}
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 3,
              delay: i * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`flex h-14 w-14 items-center justify-center rounded-full border-2 ${ringColors[i]} bg-black/60 backdrop-blur-md shadow-lg`}
          >
            <svg
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <Icon name={icon} />
            </svg>
          </motion.div>
        ))}
      </div>

      <FloatChip text="Prompt" color="bg-pink-500" pos="left-[2%] top-0" delay={0} />
      <FloatChip text="Model" color="bg-orange-400" pos="left-[52%] -top-2" delay={0.6} duration={3.9} />
      <FloatChip text="Agent" color="bg-blue-500" pos="left-[10%] -bottom-4" delay={1.2} duration={4.3} />
      <FloatChip text="You" color="bg-green-500" pos="left-[58%] -bottom-3" delay={1.8} duration={4.7} />
    </div>
  );
}

function GenerativeVisual() {
  const lines = [
    { w: ["20%", "90%", "20%"], delay: 0 },
    { w: ["20%", "70%", "20%"], delay: 0.4 },
    { w: ["20%", "55%", "20%"], delay: 0.8 },
  ];

  return (
    <div className="relative mt-auto h-28 pt-4">
      <div className="absolute left-[6%] right-[6%] top-5 rounded-xl border border-white/15 bg-black/40 p-3 backdrop-blur-md shadow-lg">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          <span className="ml-auto text-[10px] text-white/60">generating…</span>
        </div>

        <div className="flex flex-col gap-1.5">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              animate={{ width: line.w }}
              transition={{
                duration: 3,
                delay: line.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-blue-400"
            />
          ))}
        </div>
      </div>

      <FloatChip text="Text" color="bg-pink-500" pos="left-[2%] -top-1" delay={0} />
      <FloatChip text="Image" color="bg-orange-400" pos="left-[38%] -top-3" delay={0.5} duration={3.9} />
      <FloatChip text="Code" color="bg-blue-500" pos="left-[72%] -top-1" delay={1} duration={4.3} />
      <FloatChip text="Ideas" color="bg-green-500" pos="left-[62%] -bottom-3" delay={1.5} duration={4.7} />
    </div>
  );
}

function PromptVisual() {
  const rows = [
    { key: "Role", value: "Analyst", color: "bg-pink-500" },
    { key: "Task", value: "Summarize", color: "bg-orange-400" },
    { key: "Format", value: "Bullets", color: "bg-blue-500" },
  ];

  return (
    <div className="relative mt-auto h-28 pt-4">
      <div className="absolute left-[6%] right-[6%] top-5 rounded-xl border border-white/15 bg-black/40 p-3 backdrop-blur-md shadow-lg">
        <div className="flex flex-col gap-1.5">
          {rows.map((row, i) => (
            <motion.div
              key={row.key}
              animate={{ opacity: [0.35, 1, 1, 0.35], x: [-4, 0, 0, -4] }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center gap-2 text-xs"
            >
              <span
                className={`rounded px-1.5 py-0.5 text-[10px] font-medium text-white ${row.color}`}
              >
                {row.key}
              </span>
              <span className="text-white/80">{row.value}</span>
            </motion.div>
          ))}

          <div className="flex items-center gap-1 text-xs text-white/60">
            <span>&gt;</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block h-3 w-1.5 bg-white/70"
            />
          </div>
        </div>
      </div>

      <FloatChip text="Reliable" color="bg-green-500" pos="right-[2%] -top-2" delay={0.4} duration={3.9} />
      <FloatChip text="You" color="bg-pink-500" pos="left-[58%] -bottom-3" delay={1.2} duration={4.5} />
    </div>
  );
}

/* =====================================================
   "FROM UNDERSTANDING AI" SECTION — MINI VISUALS
===================================================== */

function NodesVisual() {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-1.5">
          <motion.span
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 2,
              delay: i * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-2.5 w-2.5 rounded-full bg-[#9d80ff] shadow-[0_0_12px_#7046ff]"
          />
          {i < 4 && <span className="h-px w-5 bg-white/20" />}
        </div>
      ))}
    </div>
  );
}

function StepsVisual() {
  const steps = [
    { label: "Theory", state: "done" },
    { label: "Practice", state: "active" },
    { label: "Project", state: "todo" },
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          animate={{ width: ["20%", "66%", "20%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-blue-400"
        />
      </div>

      <div className="flex items-center justify-between text-[10px] text-white/60">
        {steps.map((s) => (
          <span key={s.label} className="flex items-center gap-1">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                s.state === "done"
                  ? "bg-emerald-300"
                  : s.state === "active"
                  ? "animate-pulse bg-orange-300"
                  : "bg-white/25"
              }`}
            />
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function FlowVisual() {
  return (
    <div className="relative flex items-center justify-between">
      <div className="absolute left-3 right-3 top-1/2 h-px bg-white/15" />

      <motion.span
        animate={{ left: ["4%", "92%"] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#b39cff] shadow-[0_0_12px_#7046ff]"
      />

      {["Prompt", "AI", "Result"].map((n) => (
        <span
          key={n}
          className="relative z-10 rounded-lg border border-white/15 bg-[#0b0a14] px-2.5 py-1 text-[10px] text-white/80"
        >
          {n}
        </span>
      ))}
    </div>
  );
}

function LiveVisual() {
  return (
    <div className="flex items-center gap-3">
      <span className="rounded-lg border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] text-white/90">
        Idea
      </span>
      <motion.span
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="text-white/60"
      >
        →
      </motion.span>
      <span className="flex items-center gap-1.5 rounded-lg border border-emerald-300/40 bg-emerald-400/15 px-2.5 py-1 text-[10px] text-emerald-200">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
        Live
      </span>
    </div>
  );
}

/* =====================================================
   RIGHT CARDS DATA ("From understanding AI")
===================================================== */

const cards = [
  {
    number: "01",
    tag: "Understand",
    dot: "bg-[#9d80ff]",
    title: "Understand Modern AI",
    description:
      "Explore how modern AI systems and Generative AI work, where they are useful, and how they can become part of everyday digital workflows.",
    icon: Brain,
    visual: <NodesVisual />,
    variant: "glass",
  },
  {
    number: "02",
    tag: "Hands-on",
    dot: "bg-orange-300",
    title: "Learn By Doing",
    description:
      "Move from theory to implementation through hands-on exercises, experiments and practical challenges using modern AI tools.",
    icon: Sparkles,
    visual: <StepsVisual />,
    variant: "purple",
  },
  {
    number: "03",
    tag: "Automate",
    dot: "bg-blue-400",
    title: "Build Smarter Workflows",
    description:
      "Structure better prompts, automate repetitive processes, analyze information and accelerate everyday workflows with AI.",
    icon: Workflow,
    visual: <FlowVisual />,
    variant: "blue",
  },
  {
    number: "04",
    tag: "Deploy",
    dot: "bg-emerald-300",
    title: "Create Real Solutions",
    description:
      "Transform ideas into practical AI-powered solutions across technology, productivity, research, creativity and business operations.",
    icon: Rocket,
    visual: <LiveVisual />,
    variant: "pink",
  },
];

const variantStyles: Record<string, { wrap: string; glow: string }> = {
  glass: {
    wrap: "border-white/[0.12] bg-white/[0.03] backdrop-blur-xl hover:border-white/25 hover:shadow-[0_20px_60px_rgba(255,255,255,0.06)]",
    glow: "bg-[#7046ff]/20",
  },
  purple: {
    wrap: "border-[#8d70ff]/30 bg-gradient-to-br from-[#7c4dff]/45 via-[#3b22a8]/35 to-[#0b0720] hover:border-[#a58bff]/60 hover:shadow-[0_20px_60px_rgba(121,88,255,0.35)]",
    glow: "bg-[#a78bff]/40",
  },
  blue: {
    wrap: "border-[#5b8cff]/30 bg-gradient-to-br from-[#3b82f6]/40 via-[#1e2a78]/35 to-[#0b0720] hover:border-[#7aa2ff]/60 hover:shadow-[0_20px_60px_rgba(70,120,255,0.35)]",
    glow: "bg-[#3b82f6]/40",
  },
  pink: {
    wrap: "border-[#ff5ad1]/25 bg-gradient-to-br from-[#d946ef]/35 via-[#6d28d9]/30 to-[#0b0720] hover:border-[#ff7be0]/55 hover:shadow-[0_20px_60px_rgba(217,70,239,0.35)]",
    glow: "bg-[#ff5ad1]/35",
  },
};

/* =====================================================
   MAIN COMPONENT NEECHE SE SHURU
   (yahan se `export default function AITrainingLanding()` jaisa tha waisa hi rakho)
===================================================== */
export default function AITrainingLanding() {
  return (
    <section className="relative w-full overflow-hidden bg-[#030304] text-white">
      {/* =====================================================
          GLOBAL BACKGROUND
      \====================================================== */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-300px] top-[2%] h-[800px] w-[800px] rounded-full bg-[#7046ff]/[0.08] blur-[200px]" />
        <div className="absolute -left-[400px] top-[32%] h-[700px] w-[700px] rounded-full bg-[#7046ff]/[0.045] blur-[200px]" />
        <div
          className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.03)\_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)\_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        />
      </div> */}
      {/* =====================================================
          HERO
      \====================================================== */}
      <div className="relative overflow-hidden">
        {/* Dark fade over image */}
        {/* HERO CONTENT */}
        <div
          className="relative z-10 mx-auto gap-20 justify-between px-5 sm:px-10 lg:px-20 mt-10 max-md:flex-col flex">
          {/* Label */}
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 hyi-h1 hyi-white"
          >
            <span className="block">Don&apos;t just learn AI.</span>
            <span
              className="block"
            >
              Build with it.
            </span>
          </motion.h1>
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex max-w-[680px] gap-5"
          >
            <div
              className="hidden h-[105px] w-px bg-gradient-to-b from-[#9878ff]/70 to-transparent sm:block"
            />
            <div>
              <p
                className="hyi-p"
              >
                Artificial Intelligence is changing how we work, create, solve
                problems and build the future.
              </p>
              <p
                className="mt-3 hyi-p"
              >
                Develop practical AI skills through hands-on learning, modern
                tools and real-world projects designed for what comes next.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* =====================================================
          INTRO / LEARNING PHILOSOPHY
      \====================================================== */}
{/* =========================================================
    SECTION 01 — AI INTELLIGENCE
========================================================= */}

<section className="relative overflow-hidden bg-black ">

  {/* Background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5b3df5]/[0.07] blur-[160px]" />

    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        maskImage:
          "radial-gradient(circle at center, black 0%, transparent 72%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, black 0%, transparent 72%)",
      }}
    />
  </div>

  <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-10 lg:px-20">




    {/* Main layout */}
    <div className="grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">

      {/* =====================================================
          LEFT — BIG TYPOGRAPHY
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <span className="text-sm hyi-blue font-bold">
           Intelligence starts with understanding
        </span>

        <h2 className="mt-3 hyi-h1 hyi-white font-bold max-w-[800px]">
          Think
          <br />

          <span className="opacity-30">
            beyond
          </span>{" "}

          <span className="relative">
            prompts.
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#7861ff]" />
          </span>
        </h2>

        <p className="mt-3 max-w-[570px] hyi-p">
          Artificial intelligence is more than a tool.
          It is a new layer of computation, creativity and
          decision making — and learning how it works changes
          what you can build with it.
        </p>


        {/* Mini metrics */}
        {/* <div className="mt-12 grid max-w-[570px] grid-cols-3 border-y border-white/[0.08]">

          {[
            ["01", "Understand"],
            ["02", "Experiment"],
            ["03", "Create"],
          ].map(([number, title]) => (
            <div
              key={number}
              className="border-r border-white/[0.08] px-4 py-5 first:pl-0 last:border-r-0"
            >
              <span className="text-sm hyi-blue">
                {number}
              </span>

              <p className="mt-2 text-sm hyi-white">
                {title}
              </p>
            </div>
          ))}

        </div> */}

      </motion.div>


      {/* =====================================================
          RIGHT — AI CORE
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative flex min-h-[520px] items-center justify-center"
      >

        {/* Large orbit */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[330px] w-[330px] rounded-full border border-white/[0.08] sm:h-[460px] sm:w-[460px]"
        >
          <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#8b6cff] shadow-[0_0_18px_#8b6cff]" />

          <span className="absolute bottom-[12%] right-[4%] h-1.5 w-1.5 rounded-full bg-white/60" />
        </motion.div>


        {/* Second orbit */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[250px] w-[250px] rounded-full border border-[#7861ff]/20 sm:h-[360px] sm:w-[360px]"
        >
          <span className="absolute right-[-3px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#7861ff] shadow-[0_0_15px_#7861ff]" />
        </motion.div>


        {/* Core glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-[250px] w-[250px] rounded-full bg-[#6848ff]/20 blur-[100px]"
        />


        {/* Core */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 50px rgba(104,72,255,.05)",
              "0 0 120px rgba(104,72,255,.20)",
              "0 0 50px rgba(104,72,255,.05)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="relative flex h-[190px] w-[190px] items-center justify-center rounded-full border border-white/[0.12] bg-black/90 backdrop-blur-2xl sm:h-[230px] sm:w-[230px]"
        >

          <div className="absolute inset-6 rounded-full border border-[#7861ff]/20" />

          <div className="relative text-center">

            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#7861ff]/30 bg-[#7861ff]/10">
              <svg
                className="h-5 w-5 hyi-bule-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>

            <p className="text-sm hyi-blue font-bold">
              AI CORE
            </p>

            <p className="mt-2 text-sm hyi-white font-bold">
              Intelligence
            </p>

          </div>

        </motion.div>


        {/* =================================================
            FLOATING NODE 01
        ================================================= */}

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute left-[0%] top-[18%] hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 backdrop-blur-xl sm:block"
        >
          <span className="text-sm hyi-blue font-bold">
            INPUT
          </span>

          <p className="mt-2 text-sm hyi-white font-bold">
            Human Intent
          </p>

          <div className="mt-3 h-1 w-24 overflow-hidden rounded-full bg-white/[0.08]">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="h-full w-1/2 bg-[#7861ff]"
            />
          </div>
        </motion.div>


        {/* =================================================
            FLOATING NODE 02
        ================================================= */}

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute bottom-[15%] right-[0%] hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 backdrop-blur-xl sm:block"
        >
          <span className="text-sm hyi-blue font-bold">
            OUTPUT
          </span>

          <p className="mt-2 text-sm hyi-white font-bold">
            Useful Intelligence
          </p>

          <div className="mt-3 flex gap-1">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.span
                key={item}
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 1.5,
                  delay: item * 0.12,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-[#7861ff]"
              />
            ))}
          </div>
        </motion.div>



      </motion.div>

    </div>
  </div>
</section>
      {/* =====================================================
          WHAT YOU WILL LEARN
      \====================================================== */}
{/* =========================================================
    SECTION 02 — AI CAPABILITY MATRIX
========================================================= */}

 <section className="relative w-full overflow-hidden bg-black flex flex-col items-center justify-center py-6 lg:py-8">
      {/* =====================================================
          BACKGROUND WRAPPER (same as GCC)
      ===================================================== */}
      <div className="relative w-full flex items-center justify-center px-4 pb-6 bg-[url('/buildbackground.png')] bg-no-repeat bg-contain md:bg-cover bg-center md:px-6 lg:pb-8">
        {/* Blur layers */}
        <div className="pointer-events-none absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#6848ff]/25 blur-[140px]" />
        <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#c026d3]/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#2563eb]/20 blur-[120px]" />

        {/* Top & bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent backdrop-blur-[1px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent backdrop-blur-[1px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] flex flex-col gap-5 md:gap-10">
          {/* =====================================================
              HEADER
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid  pt-6  text-center justify-center items-center "
          >
            <div>
              <h2 className="mt-3 hyi-h1 hyi-white">
                Build your AI advantage
              
              </h2>
            </div>

            <div className="flex mt-5">
              <p className="max-w-[650px] hyi-p ">
                A practical path through the technologies, systems and skills
                that are shaping the next generation of digital work.
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              CAPABILITY GRID
          ===================================================== */}
          <div className="flex overflow-x-auto md:overflow-visible scrollbar-hide snap-x snap-mandatory cursor-default gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-y-10">
            {capabilities.map((item, index) =>
              item.visual ? (
                /* ---------------- UNIQUE CARDS (01, 02, 03) ---------------- */
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="relative min-h-[206px] flex-shrink-0 w-[90%] snap-center md:w-full flex flex-col glass-gradient rounded-2xl p-6 gap-2.5 border border-white/20 transform transition-transform duration-300 ease-in-out will-change-transform hover:scale-106 hover:shadow-xl hover:shadow-brand-600/80"
                >
                  {/* Number + Icon */}
                  <div className="flex items-start justify-between">
                    <span className="text-sm hyi-white">
                      {item.number} · {item.tag}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
                      <svg
                        className="h-4 w-4 hyi-white-icon opacity-90"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      >
                        <Icon name={item.icon} />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white">{item.title}</h3>

                  <p className="max-w-[430px] text-sm text-white">{item.description}</p>

                  {/* Unique floating visual */}
                  {item.visual === "foundations" && <FoundationsVisual />}
                  {item.visual === "generative" && <GenerativeVisual />}
                  {item.visual === "prompt" && <PromptVisual />}
                </motion.div>
              ) : (
                /* ---------------- NORMAL DARK CARDS (04, 05, 06) ---------------- */
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="min-h-[206px] flex-shrink-0 w-[90%] snap-center md:w-full flex flex-col rounded-2xl p-6 gap-2.5 bg-no-repeat bg-cover cursor-default transition-all duration-300 ease-out hover:scale-106 hover:shadow-xl hover:shadow-brand-600/80"
                  style={{ backgroundImage: `url("${item.bg}")` }}
                >
                  {/* Number + Icon */}
                  <div className="flex items-start justify-between">
                    <span className="text-sm hyi-white">{item.number}</span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02]">
                      <svg
                        className="h-4 w-4 hyi-white-icon opacity-70"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      >
                        <Icon name={item.icon} />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white">{item.title}</h3>

                  <p className="max-w-[430px] text-sm text-white">{item.description}</p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>

{/* =====================================================
    FROM UNDERSTANDING AI TO BUILDING WITH IT
====================================================== */}
    <section className="relative mt-10 overflow-hidden bg-[#030304]">
      {/* Background glow + grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046ff]/[0.09] blur-[180px]" />
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#c026d3]/10 blur-[140px]" />
        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#2563eb]/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5  sm:px-10 lg:px-20">
        {/* =====================================================
            SECTION HEADING
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col text-center justify-center mx-auto mb-10"
        >
          <div className="w-full ">
            {/* <Tag text="From idea to impact" dot="bg-[#9d80ff]" className="mb-5" /> */}

            <h2 className="hyi-h1 hyi-white">
              From understanding AI to building with it.
      
            </h2>
          </div>

          <div className="w-full justify-center mt-5 flex ">
            <p className="max-w-[780px] hyi-p">
              Move beyond understanding Artificial Intelligence and learn how
              to apply it across real workflows, products, automation,
              creativity, research and digital innovation.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            MAIN GRID
        ===================================================== */}
        <div className="grid gap-4 lg:grid-cols-2">
          {/* ---------------- LARGE VISUAL CARD ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative min-h-[520px] overflow-hidden rounded-[26px] border border-white/[0.1] bg-[#08080b] transition-all duration-500 hover:border-[#8d70ff]/40 hover:shadow-[0_25px_80px_rgba(112,70,255,0.25)]"
          >
            <img
              src="/KPI-Bg.png"
              alt="AI training and practical learning"
              className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#7046ff]/15 to-transparent" />

            {/* Top: tags */}
            <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between p-6 sm:p-8">
              <Tag text="Practical AI" dot="bg-emerald-300" />

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.12] bg-black/40 backdrop-blur-md transition-all duration-300 group-hover:border-[#9d80ff]/50 group-hover:bg-[#7658ff]/20">
                <ArrowUpRight size={18} className="text-[#b39cff]" />
              </div>
            </div>

            {/* Floating chips */}
            <div className="absolute inset-x-0 top-[22%] z-10 h-24">
              <FloatChip text="Learn" color="bg-pink-500" pos="left-[10%] top-2" />
              <FloatChip
                text="Experiment"
                color="bg-orange-400"
                pos="left-[38%] top-10"
                delay={0.7}
                duration={4.4}
              />
              <FloatChip
                text="Build"
                color="bg-blue-500"
                pos="left-[72%] top-0"
                delay={1.4}
                duration={4.8}
              />
            </div>

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:p-10">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#9d80ff]/80">
                Learn • Experiment • Build
              </p>

              <h3 className="max-w-[500px] hyi-h2 hyi-white font-bold">
                Turn AI knowledge into
                <span className="block">practical experience.</span>
              </h3>

              <p className="mt-5 max-w-[540px] hyi-p">
                Work with modern AI tools, explore their capabilities and
                limitations, and learn how Artificial Intelligence can solve
                practical problems across real-world environments.
              </p>

              {/* Progress strip */}
              <div className="mt-6 flex items-center gap-3">
                {["Learn", "Experiment", "Build"].map((s, i) => (
                  <div key={s} className="flex flex-1 flex-col gap-1.5">
                    <div className="h-1 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4 + i * 0.4 }}
                        className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-blue-400"
                      />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/50">
                      0{i + 1} {s}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ---------------- RIGHT CARDS ---------------- */}
          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map((card, index) => {
              const Icon = card.icon;
              const style = variantStyles[card.variant];

              return (
                <motion.div
                  key={card.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className={`group relative min-h-[250px] overflow-hidden rounded-[24px] border p-6 transition-all duration-500 sm:p-7 ${style.wrap}`}
                >
                  {/* Glow */}
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-[70px] transition-opacity duration-500 group-hover:opacity-100 ${style.glow} opacity-60`}
                  />

                  {/* Glass shine */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent" />

                  <div className="relative z-10 flex h-full flex-col">
                    {/* Top row: unique tag + icon */}
                    <div className="flex items-start justify-between">
                      <Tag text={card.tag} dot={card.dot} />

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-md transition-all duration-300 group-hover:bg-white/15">
                        <Icon
                          size={15}
                          className="text-white/70 transition-colors duration-300 group-hover:text-white"
                        />
                      </div>
                    </div>

                    {/* Unique mini visual */}
                    <div className="mt-5">{card.visual}</div>

                    {/* Bottom content */}
                    <div className="mt-auto pt-6">
                      <span className="font-mono text-[9px] text-white/30">
                        {card.number}
                      </span>

                      <h3 className="mt-1 hyi-h4 hyi-white font-bold">
                        {card.title}
                      </h3>

                      <p className="mt-3 hyi-p">{card.description}</p>
                    </div>
                  </div>

                  {/* Bottom highlight line */}
                  <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8b6aff]/0 to-transparent transition-all duration-500 group-hover:via-[#8b6aff]/60" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
     
      {/* =====================================================
          FINAL CTA
      \====================================================== */}
      {/* <section
        className="relative overflow-hidden "
      >
        <img
          src="/support-bg.png"
          alt=""
          className="pointer-events-none absolute bottom-[-60%] right-[-20%] h-[130%] w-[80%] object-contain opacity-100"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#030304] via-[#030304]/90 to-transparent"
        />
        <div
          className="relative z-10 mx-auto max-w-[1500px] px-5 py-10 sm:px-10 lg:px-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between "
          >
            <div>
            
              <h2
                className="mt-6 max-w-[850px] hyi-h1 hyi-white"
              >
                Your AI journey
                <span
                  className="block "
                >
                  starts here.
                </span>
              </h2>
            
            </div>
            <button
              type="button"
              className="group flex w-fit shrink-0 items-center gap-4 rounded-full bg-white px-6 py-4 text-[10px] font-medium text-black transition-all duration-300 hover:scale-[1.03]"
            >
              Start Your AI Journey
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </motion.div>
        </div>
      </section> */}
    </section>
  );
}
