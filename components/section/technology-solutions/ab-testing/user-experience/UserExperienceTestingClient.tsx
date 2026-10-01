"use client";

import type { ElementType, ReactNode } from "react";

import { motion, useScroll, useSpring } from "framer-motion";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Database,
  Eye,
  FileText,
  Gauge,
  GitBranch,
  Layers3,
  MousePointer2,
  Network,
  Play,
  Radio,
  Search,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

/* ============================================================
   USER EXPERIENCE TESTING
   HYI.AI
   ------------------------------------------------------------
   Concept:
   Human Behavior Observatory / UX Testing Lab

   IMPORTANT:
   - No Header/Footer here.
   - This is Client Component.
   - Header/Footer remain in server page.tsx.
============================================================ */


/* ============================================================
   DATA
============================================================ */

const researchSignals = [
  {
    Icon: Eye,
    number: "01",
    title: "Observe",
    description:
      "Watch how real or representative users attempt important tasks. Instead of assuming where the experience is difficult, observe where hesitation, confusion, backtracking or abandonment actually occurs.",
  },
  {
    Icon: MousePointer2,
    number: "02",
    title: "Interact",
    description:
      "Study the sequence of taps, clicks, navigation choices and interface interactions that users make while trying to reach a goal.",
  },
  {
    Icon: Search,
    number: "03",
    title: "Investigate",
    description:
      "Ask carefully structured questions to understand expectations, interpretations and decision context without unnecessarily leading participants.",
  },
  {
    Icon: Activity,
    number: "04",
    title: "Measure",
    description:
      "Capture useful behavioral signals such as task completion, errors, time, retries, navigation paths and relevant subjective feedback.",
  },
  {
    Icon: BrainCircuit,
    number: "05",
    title: "Interpret",
    description:
      "Combine observations across participants and evidence sources to identify recurring usability patterns instead of treating one isolated behavior as universal.",
  },
  {
    Icon: Workflow,
    number: "06",
    title: "Improve",
    description:
      "Turn validated findings into prioritized design, content, interaction and engineering improvements that can be tested again.",
  },
];

const uxDimensions = [
  {
    index: "01",
    title: "Clarity",
    description:
      "Can users understand what the interface is communicating without unnecessary interpretation?",
  },
  {
    index: "02",
    title: "Navigation",
    description:
      "Can users determine where they are, where they can go and how to reach their intended destination?",
  },
  {
    index: "03",
    title: "Interaction",
    description:
      "Do controls behave in ways that match user expectations and provide understandable feedback?",
  },
  {
    index: "04",
    title: "Content",
    description:
      "Does language help people make decisions and complete tasks without introducing avoidable ambiguity?",
  },
  {
    index: "05",
    title: "Accessibility",
    description:
      "Can the experience support people using different devices, input methods and accessibility technologies?",
  },
  {
    index: "06",
    title: "Confidence",
    description:
      "Does the experience provide enough context, feedback and reassurance for users to continue?",
  },
];

const methods = [
  {
    number: "01",
    title: "Moderated usability testing",
    description:
      "A facilitator works with participants while they attempt realistic tasks. The moderator can ask follow-up questions and explore unexpected behavior.",
    usefulFor:
      "Complex workflows, early discovery and understanding why users make particular decisions.",
  },
  {
    number: "02",
    title: "Unmoderated testing",
    description:
      "Participants complete structured tasks independently. This can support broader research when direct facilitation is not required.",
    usefulFor:
      "Defined workflows, distributed participants and repeatable research protocols.",
  },
  {
    number: "03",
    title: "Prototype testing",
    description:
      "Users interact with an early representation of a product before full engineering investment is made.",
    usefulFor:
      "Navigation, information hierarchy, interaction concepts and early design validation.",
  },
  {
    number: "04",
    title: "Task-based testing",
    description:
      "Participants are given realistic goals rather than being told exactly which buttons or screens to use.",
    usefulFor:
      "Evaluating whether people can independently discover and complete important journeys.",
  },
  {
    number: "05",
    title: "Preference research",
    description:
      "Alternative approaches can be explored to understand participant reactions, but preference alone should not be confused with usability performance.",
    usefulFor:
      "Visual direction, communication approaches and supporting qualitative research.",
  },
  {
    number: "06",
    title: "Accessibility evaluation",
    description:
      "Interfaces are reviewed and tested for barriers related to keyboard use, semantics, contrast, focus, screen readers and other accessibility concerns.",
    usefulFor:
      "Building more inclusive digital products and identifying barriers conventional testing may overlook.",
  },
];

const taskJourney = [
  {
    number: "01",
    title: "Discover",
    description:
      "The user first encounters the experience and attempts to understand what it offers.",
  },
  {
    number: "02",
    title: "Orient",
    description:
      "They build a mental model of navigation, information and available actions.",
  },
  {
    number: "03",
    title: "Decide",
    description:
      "They evaluate available options and select a path toward their goal.",
  },
  {
    number: "04",
    title: "Act",
    description:
      "They interact with controls, forms, navigation or product functionality.",
  },
  {
    number: "05",
    title: "Verify",
    description:
      "They look for feedback that confirms whether the intended action succeeded.",
  },
  {
    number: "06",
    title: "Continue",
    description:
      "The next step should remain understandable so the journey can continue.",
  },
];

const frictionSignals = [
  "Repeated clicks or taps",
  "Unexpected backtracking",
  "Navigation loops",
  "Long hesitation",
  "Misinterpreted labels",
  "Missed controls",
  "Form correction",
  "Task abandonment",
  "Unexpected scrolling",
  "Search dependence",
  "Incorrect assumptions",
  "Missing feedback",
];

const metrics = [
  {
    title: "Task completion",
    description:
      "Whether participants can successfully complete a defined task under the research conditions.",
  },
  {
    title: "Time on task",
    description:
      "How long a task takes. Interpretation requires context because faster is not automatically better for every experience.",
  },
  {
    title: "Error patterns",
    description:
      "Repeated mistakes can reveal mismatches between the interface and users' expectations.",
  },
  {
    title: "Path efficiency",
    description:
      "How participants move through the experience and whether unnecessary detours repeatedly appear.",
  },
  {
    title: "Assistance required",
    description:
      "Whether participants can proceed independently or repeatedly need clarification.",
  },
  {
    title: "User feedback",
    description:
      "Qualitative reactions can help explain observed behavior when collected without over-interpreting individual comments.",
  },
];

const hyiProcess = [
  {
    step: "01",
    phase: "Understand",
    title: "Define the product question",
    description:
      "HYI starts with the business and product decision the research needs to support. A broad request such as 'test our website' becomes a focused question about a specific audience, journey or risk.",
  },
  {
    step: "02",
    phase: "Scope",
    title: "Select critical journeys",
    description:
      "We identify the tasks that matter most: registration, product discovery, checkout, onboarding, dashboard use, booking, form completion or another meaningful workflow.",
  },
  {
    step: "03",
    phase: "Audience",
    title: "Define participant criteria",
    description:
      "Testing becomes more useful when participants reasonably represent the intended users for the research question. Recruitment criteria are aligned with product context.",
  },
  {
    step: "04",
    phase: "Protocol",
    title: "Design realistic tasks",
    description:
      "Tasks describe goals without unnecessarily revealing the exact interface path. This allows us to observe whether navigation and controls are discoverable.",
  },
  {
    step: "05",
    phase: "Instrument",
    title: "Prepare evidence capture",
    description:
      "The research setup is prepared to capture relevant observations, notes, task outcomes and technical context while respecting the agreed research protocol.",
  },
  {
    step: "06",
    phase: "Run",
    title: "Conduct testing sessions",
    description:
      "Participants attempt the defined tasks while HYI observes behavior. In moderated studies, follow-up questions can investigate important moments without turning the session into product training.",
  },
  {
    step: "07",
    phase: "Synthesize",
    title: "Find recurring patterns",
    description:
      "Individual observations are organized into patterns. We distinguish recurring evidence from isolated events and document the context in which issues appear.",
  },
  {
    step: "08",
    phase: "Prioritize",
    title: "Connect findings to impact",
    description:
      "Findings are evaluated using factors such as task importance, observed severity, frequency, audience relevance and implementation considerations.",
  },
  {
    step: "09",
    phase: "Design",
    title: "Create improvement directions",
    description:
      "HYI converts findings into design and product recommendations tied directly to the evidence that motivated them.",
  },
  {
    step: "10",
    phase: "Validate",
    title: "Test the improved experience",
    description:
      "Important changes can return to research. Iterative validation helps determine whether the new experience actually resolves the original usability problem.",
  },
];

const principles = [
  "Test realistic user goals rather than demonstrating the interface.",
  "Recruit participants relevant to the research question.",
  "Avoid teaching participants how the interface is supposed to work.",
  "Separate observed behavior from researcher interpretation.",
  "Capture context around usability problems.",
  "Look for patterns instead of universalizing one participant.",
  "Prioritize findings based on task importance and evidence.",
  "Treat preference and usability as different research questions.",
  "Include accessibility in product quality.",
  "Document successful behavior as well as failures.",
  "Connect recommendations directly to research evidence.",
  "Retest important improvements where appropriate.",
];


/* ============================================================
   LAYOUT HELPERS
============================================================ */

function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1460px] ${className}`}>
      {children}
    </div>
  );
}


function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-[1px] w-8 bg-[#8b5cf6]" />

      <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#b69cff]">
        {number} / {children}
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


function MiniLabel({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="font-mono text-[6px] uppercase tracking-[0.16em] text-white/25">
      {children}
    </span>
  );
}


/* ============================================================
   HERO — COMPLETELY DIFFERENT LAYOUT
============================================================ */

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030303] px-5  md:px-10 ">

      {/* background */}
      <div className="absolute left-[-20%] top-[-20%] h-[800px] w-[800px] rounded-full bg-[#7c3aed]/[0.08] blur-[220px]" />

      <div className="absolute bottom-[-30%] right-[-15%] h-[900px] w-[900px] rounded-full bg-[#9333ea]/[0.06] blur-[250px]" />

      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.025) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <Container className="relative">

        {/* top metadata */}
{/* 
        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">

          <div className="flex items-center gap-3">
            <StatusDot />

            <MiniLabel>
              HYI Human Experience Lab
            </MiniLabel>
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <MiniLabel>
              Observe
            </MiniLabel>

            <MiniLabel>
              Understand
            </MiniLabel>

            <MiniLabel>
              Improve
            </MiniLabel>
          </div>

        </div> */}


        {/* centered editorial hero */}

        <div className="pt-20 text-center md:pt-28">

          {/* <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-4 py-2"
          >
            <Eye
              size={11}
              strokeWidth={1.2}
              className="text-[#c4b5fd]"
            />

            <span className="font-mono text-[7px] uppercase tracking-[0.17em] text-[#c4b5fd]/70">
              User Experience Testing
            </span>
          </motion.div> */}


          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.08,
            }}
            className="mx-auto mt-10 max-w-[1350px] text-[clamp(2.7rem,8vw,5rem)] font-extrabold leading-[0.88] tracking-[0.1em]  "
          >
            Watch people

            <span className="block text-white/20">
              experience
            </span>

            <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
              your product.
            </span>
          </motion.h1>


          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mx-auto mt-10 max-w-[780px] text-[22px] leading-8 text-white/[0.55]  md:leading-9"
          >
            User Experience Testing helps teams move beyond assumptions.
            HYI studies how people understand, navigate and interact with
            digital products, then turns observed friction into evidence
            that product, design and engineering teams can act on.
          </motion.p>


          <div className="mt-10 flex flex-wrap justify-center gap-3">

            <a
              href="#ux-lab"
              className="flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-8 py-4 text-[12px] shadow-[0_0_50px_rgba(124,58,237,.22)]"
            >
              Enter the UX lab

              <ArrowDown size={14} />
            </a>


            <a
              href="#hyi-method"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[12px] text-white/55"
            >
              How HYI works

              <ArrowRight size={14} />
            </a>

          </div>

        </div>


        {/* giant testing model */}

        <div className="mt-20">
          <UsabilityLabModel />
        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   MAIN UX TESTING MODEL
============================================================ */

function UsabilityLabModel() {
  return (
    <div className="relative mx-auto min-h-[720px] max-w-[1280px] overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#070609] p-4 md:p-7">

      {/* background grid */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.04) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 85%)",
        }}
      />


      <div className="relative">

        {/* model header */}

        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">
              <Eye
                size={14}
                className="text-[#c4b5fd]"
              />
            </div>

            <div>
              <span className="block font-mono text-[6px] tracking-[0.15em] text-white/25">
                USABILITY SESSION
              </span>

              <span className="mt-1 block font-mono text-[7px] tracking-[0.1em] text-white/50">
                PRODUCT DISCOVERY / TASK 03
              </span>
            </div>

          </div>


          <div className="flex items-center gap-3">
            <StatusDot />

            <span className="font-mono text-[6px] tracking-[0.13em] text-[#c4b5fd]/60">
              OBSERVING
            </span>
          </div>

        </div>


        {/* lab body */}

        <div className="mt-6 grid min-h-[610px] gap-4 lg:grid-cols-[260px_1fr_270px]">

          <ParticipantPanel />

          <ProductObservation />

          <ResearchConsole />

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   PARTICIPANT PANEL
============================================================ */

function ParticipantPanel() {
  return (
    <div className="rounded-[22px] border border-white/[0.07] bg-black/45 p-5">

      <MiniLabel>
        Participant context
      </MiniLabel>


      <div className="mt-8 flex items-center gap-4">

        <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.06]">

          <Users
            size={19}
            strokeWidth={1}
            className="text-[#c4b5fd]"
          />

          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-[3px] border-[#08070a] bg-[#a78bfa]" />

        </div>


        <div>
          <span className="block text-[13px] text-white/65">
            Participant 07
          </span>

          <span className="mt-1 block font-mono text-[5px] tracking-[0.1em] text-white/20">
            REPRESENTATIVE USER
          </span>
        </div>

      </div>


      <div className="mt-8 space-y-3">

        {[
          ["DEVICE", "Mobile"],
          ["SESSION", "18:42"],
          ["TASK", "Product discovery"],
          ["STATUS", "In progress"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-[12px] border border-white/[0.06] bg-white/[0.015] p-4"
          >
            <span className="block font-mono text-[5px] text-white/20">
              {label}
            </span>

            <span className="mt-2 block text-[10px] text-white/50">
              {value}
            </span>
          </div>
        ))}

      </div>


      <div className="mt-8 border-t border-white/[0.07] pt-6">

        <MiniLabel>
          Current task
        </MiniLabel>

        <p className="mt-4 text-[11px] leading-6 text-white/45">
          Find a suitable service and determine how you would begin
          working with the company.
        </p>

      </div>


      <div className="mt-7">

        <div className="flex items-center justify-between">
          <MiniLabel>
            Task progress
          </MiniLabel>

          <span className="font-mono text-[6px] text-[#c4b5fd]/50">
            62%
          </span>
        </div>

        <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "62%",
            }}
            transition={{
              duration: 2,
            }}
            className="h-full bg-gradient-to-r from-[#7c3aed] to-[#c084fc]"
          />
        </div>

      </div>

    </div>
  );
}


/* ============================================================
   PRODUCT OBSERVATION
============================================================ */

function ProductObservation() {
  return (
    <div className="relative overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#09080c] p-5">

      <div className="flex items-center justify-between">

        <MiniLabel>
          Product viewport
        </MiniLabel>

        <div className="flex items-center gap-2">
          <Radio
            size={10}
            className="text-[#a78bfa]"
          />

          <span className="font-mono text-[5px] text-white/20">
            LIVE SIGNAL
          </span>
        </div>

      </div>


      {/* fake browser */}

      <div className="relative mx-auto mt-6 max-w-[640px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#050506]">

        <div className="flex h-11 items-center gap-2 border-b border-white/[0.07] px-4">

          <span className="h-1.5 w-1.5 rounded-full bg-white/15" />

          <span className="h-1.5 w-1.5 rounded-full bg-white/10" />

          <span className="h-1.5 w-1.5 rounded-full bg-white/10" />


          <div className="ml-3 h-5 flex-1 rounded-full border border-white/[0.05] bg-white/[0.02]" />

        </div>


        <div className="relative min-h-[490px] overflow-hidden p-7">

          {/* navbar */}

          <div className="flex items-center justify-between">

            <div className="h-3 w-16 rounded-full bg-white/15" />

            <div className="flex gap-3">
              <div className="h-2 w-9 rounded-full bg-white/[0.06]" />
              <div className="h-2 w-9 rounded-full bg-white/[0.06]" />
              <div className="h-2 w-9 rounded-full bg-white/[0.06]" />
            </div>

          </div>


          {/* heading */}

          <div className="mt-16">

            <div className="h-6 w-[75%] rounded-full bg-white/15" />

            <div className="mt-3 h-6 w-[52%] rounded-full bg-white/10" />

            <div className="mt-7 h-2 w-[85%] rounded-full bg-white/[0.05]" />

            <div className="mt-2 h-2 w-[72%] rounded-full bg-white/[0.05]" />

            <div className="mt-2 h-2 w-[58%] rounded-full bg-white/[0.05]" />

          </div>


          {/* actions */}

          <div className="mt-8 flex gap-3">

            <div className="h-10 w-32 rounded-full bg-[#8b5cf6]/70" />

            <div className="h-10 w-28 rounded-full border border-white/[0.08]" />

          </div>


          {/* cards */}

          <div className="mt-16 grid grid-cols-3 gap-3">

            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className="h-[125px] rounded-[14px] border border-white/[0.06] bg-white/[0.015] p-4"
              >
                <div className="h-7 w-7 rounded-[7px] bg-[#8b5cf6]/10" />

                <div className="mt-6 h-2 w-[65%] rounded-full bg-white/[0.08]" />

                <div className="mt-2 h-2 w-[85%] rounded-full bg-white/[0.04]" />

                <div className="mt-2 h-2 w-[55%] rounded-full bg-white/[0.04]" />
              </div>
            ))}

          </div>


          {/* heat zones */}

          <HeatZone
            className="left-[8%] top-[25%]"
            size={90}
            delay={0}
          />

          <HeatZone
            className="left-[38%] top-[42%]"
            size={125}
            delay={0.5}
          />

          <HeatZone
            className="right-[8%] top-[62%]"
            size={80}
            delay={1}
          />


          {/* cursor */}

          <motion.div
            animate={{
              x: [0, 100, 180, 220, 100, 0],
              y: [0, 40, 115, 180, 240, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[35%] top-[22%] z-30"
          >
            <MousePointer2
              size={24}
              className="fill-[#c4b5fd] text-[#c4b5fd] drop-shadow-[0_0_12px_rgba(196,181,253,.8)]"
            />
          </motion.div>


          {/* path */}

          <svg
            viewBox="0 0 600 480"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <motion.path
              d="M220 120 C290 145 340 170 365 225 C395 290 325 330 425 390"
              fill="none"
              stroke="rgba(196,181,253,.35)"
              strokeWidth="1.2"
              strokeDasharray="5 8"
              animate={{
                strokeDashoffset: [0, -40],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>

        </div>

      </div>


      <div className="absolute bottom-8 left-8 rounded-[13px] border border-[#8b5cf6]/20 bg-[#09070f]/90 px-4 py-3 backdrop-blur-xl">

        <div className="flex items-center gap-3">

          <Activity
            size={12}
            className="text-[#c4b5fd]"
          />

          <div>
            <span className="block font-mono text-[5px] text-white/20">
              OBSERVATION
            </span>

            <span className="mt-1 block font-mono text-[6px] text-white/50">
              HESITATION DETECTED
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}


function HeatZone({
  className,
  size,
  delay,
}: {
  className: string;
  size: number;
  delay: number;
}) {
  return (
    <motion.div
      animate={{
        scale: [0.75, 1.2, 0.75],
        opacity: [0.15, 0.55, 0.15],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
      }}
      style={{
        width: size,
        height: size,
      }}
      className={`absolute rounded-full bg-[#a855f7]/35 blur-[20px] ${className}`}
    />
  );
}


/* ============================================================
   RESEARCH CONSOLE
============================================================ */

function ResearchConsole() {
  return (
    <div className="rounded-[22px] border border-white/[0.07] bg-black/45 p-5">

      <MiniLabel>
        Research signals
      </MiniLabel>


      <div className="mt-8 space-y-3">

        <SignalCard
          icon={Eye}
          label="Attention"
          value="CTA located"
          state="positive"
        />

        <SignalCard
          icon={Activity}
          label="Hesitation"
          value="6.2 sec"
          state="warning"
        />

        <SignalCard
          icon={MousePointer2}
          label="Retries"
          value="02"
          state="warning"
        />

        <SignalCard
          icon={CheckCircle2}
          label="Task state"
          value="Progressing"
          state="positive"
        />

      </div>


      <div className="mt-8 border-t border-white/[0.07] pt-6">

        <MiniLabel>
          Research note
        </MiniLabel>


        <div className="mt-4 rounded-[14px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.035] p-4">

          <p className="text-[10px] leading-6 text-white/40">
            Participant located the correct category but paused before
            selecting the primary action. Review whether action language
            clearly communicates the expected next step.
          </p>

        </div>

      </div>


      <div className="mt-7">

        <MiniLabel>
          Session timeline
        </MiniLabel>


        <div className="mt-5 space-y-5">

          {[
            "Page opened",
            "Navigation explored",
            "Service selected",
            "Hesitation observed",
            "Action continued",
          ].map((item, index) => (
            <div
              key={item}
              className="relative flex gap-3"
            >

              {index !== 4 && (
                <span className="absolute left-[4px] top-3 h-6 w-[1px] bg-white/[0.07]" />
              )}

              <span
                className={`mt-1 h-[9px] w-[9px] shrink-0 rounded-full border ${
                  index === 3
                    ? "border-[#a78bfa] bg-[#a78bfa]/30"
                    : "border-white/15 bg-black"
                }`}
              />

              <span className="text-[9px] text-white/35">
                {item}
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}


function SignalCard({
  icon: Icon,
  label,
  value,
  state,
}: {
  icon: ElementType;
  label: string;
  value: string;
  state: "positive" | "warning";
}) {
  return (
    <div className="rounded-[13px] border border-white/[0.06] bg-white/[0.015] p-4">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <Icon
            size={12}
            strokeWidth={1}
            className={
              state === "warning"
                ? "text-[#c084fc]"
                : "text-white/35"
            }
          />

          <span className="font-mono text-[5px] uppercase tracking-[0.1em] text-white/20">
            {label}
          </span>

        </div>


        <span
          className={`h-1.5 w-1.5 rounded-full ${
            state === "warning"
              ? "bg-[#c084fc]"
              : "bg-white/20"
          }`}
        />

      </div>


      <span className="mt-3 block text-[10px] text-white/50">
        {value}
      </span>

    </div>
  );
}


/* ============================================================
   MOVING STRIP
============================================================ */

function ResearchStrip() {
  const items = [
    "USABILITY",
    "RESEARCH",
    "BEHAVIOR",
    "ACCESSIBILITY",
    "NAVIGATION",
    "INTERACTION",
    "TASKS",
    "EVIDENCE",
    "DESIGN",
    "VALIDATION",
  ];

  return (
    <div className="overflow-hidden border-y border-white/[0.07] bg-[#050506] py-5">

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max items-center"
      >

        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center"
          >

            <span className="px-8 font-mono text-[7px] tracking-[0.2em] text-white/25">
              {item}
            </span>

            <span className="h-1 w-1 rounded-full bg-[#8b5cf6]" />

          </div>
        ))}

      </motion.div>

    </div>
  );
}


/* ============================================================
   WHAT IS UX TESTING
============================================================ */

function UXIntroduction() {
  return (
    <section
      id="ux-lab"
      className="bg-[#050506] px-5 py-32 md:px-10 md:py-48"
    >

      <Container>

        <SectionLabel number="01">
          UNDERSTANDING UX TESTING
        </SectionLabel>


        <div className="mt-12 grid gap-16 lg:grid-cols-[1.1fr_.9fr]">

          <div>

            <h2 className="max-w-[1000px] text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl lg:text-[90px]">
              Your interface has

              <span className="block text-white/20">
                an intended path.
              </span>

              Users may see another.
            </h2>

          </div>


          <div className="self-end">

            <p className="text-[14px] leading-8 text-white/[0.58]">
              User Experience Testing evaluates how people experience a
              digital product while trying to accomplish meaningful
              goals. Researchers observe what participants understand,
              where they navigate, which controls they notice, where they
              hesitate and whether they can successfully complete the
              intended task.
            </p>


            <p className="mt-6 text-[14px] leading-8 text-white/[0.48]">
              This matters because the product team&apos;s mental model is not
              automatically the user&apos;s mental model. Designers and
              engineers know how the system was built. Users arrive with
              expectations created by previous experiences, language,
              context and their immediate goal.
            </p>

          </div>

        </div>


        <div className="mt-20 grid gap-[1px] overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-3">

          {[
            {
              title: "What users say",
              text:
                "Feedback can reveal expectations, confusion, perceived value and language users naturally use to describe the experience.",
            },
            {
              title: "What users do",
              text:
                "Observed interaction can reveal behavior that participants may not remember or describe accurately after completing a task.",
            },
            {
              title: "What the system records",
              text:
                "Analytics and product events can provide broader behavioral context around journeys, drop-off and repeated patterns.",
            },
          ].map((item, index) => (
            <article
              key={item.title}
              className="min-h-[310px] bg-[#08080a] p-8"
            >

              <span className="font-mono text-[6px] text-[#a78bfa]/60">
                EVIDENCE / 0{index + 1}
              </span>


              <h3 className="mt-16 text-3xl font-medium tracking-[-0.05em]">
                {item.title}
              </h3>


              <p className="mt-5 text-[13px] leading-7 text-white/[0.5]">
                {item.text}
              </p>

            </article>
          ))}

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   RESEARCH SIGNALS
============================================================ */

function ResearchSignals() {
  return (
    <section className="bg-black px-5 py-32 md:px-10 md:py-48">

      <Container>

        <SectionLabel number="02">
          RESEARCH SIGNALS
        </SectionLabel>


        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_.7fr]">

          <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
            See the experience

            <span className="block text-white/20">
              through user behavior.
            </span>
          </h2>


          <p className="self-end text-[13px] leading-8 text-white/[0.5]">
            HYI combines multiple research signals because no single
            observation automatically explains an entire experience.
            Behavioral evidence becomes more useful when context is
            preserved.
          </p>

        </div>


        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">

          {researchSignals.map(
            (
              {
                Icon,
                number,
                title,
                description,
              },
              index,
            ) => (
              <motion.article
                key={title}
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
                  delay: index * 0.05,
                }}
                className="group relative min-h-[350px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#08080a] p-7"
              >

                <div className="absolute right-[-70px] top-[-70px] h-[170px] w-[170px] rounded-full bg-[#7c3aed]/0 blur-[60px] transition-all duration-500 group-hover:bg-[#7c3aed]/15" />


                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">

                    <Icon
                      size={18}
                      strokeWidth={1}
                      className="text-[#c4b5fd]"
                    />

                  </div>


                  <span className="font-mono text-[6px] text-white/20">
                    {number}
                  </span>

                </div>


                <h3 className="mt-16 text-3xl font-medium tracking-[-0.05em]">
                  {title}
                </h3>


                <p className="mt-5 text-[13px] leading-7 text-white/[0.5]">
                  {description}
                </p>

              </motion.article>
            ),
          )}

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   UX DIMENSIONS
============================================================ */

function UXDimensions() {
  return (
    <section className="bg-[#060608] px-5 py-32 md:px-10 md:py-48">

      <Container>

        <SectionLabel number="03">
          EXPERIENCE DIMENSIONS
        </SectionLabel>


        <h2 className="mt-10 max-w-[1100px] text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
          Good UX is

          <span className="block text-white/20">
            more than visual polish.
          </span>
        </h2>


        <p className="mt-8 max-w-[780px] text-[13px] leading-8 text-white/[0.52]">
          A beautiful interface can still be difficult to understand.
          User experience testing evaluates whether the product supports
          the user&apos;s goal across multiple dimensions.
        </p>


        <div className="mt-16 border-t border-white/[0.08]">

          {uxDimensions.map((item) => (
            <div
              key={item.index}
              className="group grid gap-5 border-b border-white/[0.08] py-8 transition-all duration-300 hover:pl-4 md:grid-cols-[80px_.65fr_1.35fr]"
            >

              <span className="font-mono text-[6px] text-[#a78bfa]/60">
                {item.index}
              </span>


              <h3 className="text-2xl font-medium tracking-[-0.04em] text-white/75">
                {item.title}
              </h3>


              <p className="text-[13px] leading-7 text-white/[0.48]">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   TASK JOURNEY VISUAL
============================================================ */

function TaskJourney() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-32 md:px-10 md:py-48">

      <div className="absolute left-1/2 top-1/2 h-[800px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.045] blur-[220px]" />


      <Container className="relative">

        <SectionLabel number="04">
          TASK JOURNEY
        </SectionLabel>


        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_.7fr]">

          <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
            Follow the user,

            <span className="block text-white/20">
              not the sitemap.
            </span>
          </h2>


          <p className="self-end text-[13px] leading-8 text-white/[0.5]">
            A product may be organized around internal features while a
            user thinks in goals. Task-based testing follows the user&apos;s
            objective across the interface.
          </p>

        </div>


        <div className="relative mt-20">

          <div className="absolute left-0 right-0 top-[48px] hidden h-[1px] bg-white/[0.07] lg:block" />


          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: "100%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 2,
            }}
            className="absolute left-0 top-[48px] hidden h-[1px] bg-gradient-to-r from-transparent via-[#8b5cf6]/70 to-transparent lg:block"
          />


          <div className="relative grid gap-3 md:grid-cols-2 lg:grid-cols-6">

            {taskJourney.map((item, index) => (
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
                  delay: index * 0.08,
                }}
                className="relative min-h-[300px] rounded-[22px] border border-white/[0.08] bg-[#08080a] p-6"
              >

                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#0b0811] shadow-[0_0_25px_rgba(139,92,246,.12)]">

                  <span className="font-mono text-[6px] text-[#c4b5fd]">
                    {item.number}
                  </span>

                </div>


                <h3 className="mt-16 text-xl font-medium tracking-[-0.04em]">
                  {item.title}
                </h3>


                <p className="mt-5 text-[11px] leading-6 text-white/[0.46]">
                  {item.description}
                </p>

              </motion.article>
            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   FRICTION DETECTOR
============================================================ */

function FrictionDetector() {
  return (
    <section className="bg-[#060608] px-5 py-32 md:px-10 md:py-48">

      <Container>

        <SectionLabel number="05">
          FRICTION DETECTION
        </SectionLabel>


        <div className="mt-10 grid items-center gap-16 lg:grid-cols-[.85fr_1.15fr]">

          <div>

            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Friction leaves

              <span className="block text-white/20">
                behavioral traces.
              </span>
            </h2>


            <p className="mt-8 text-[13px] leading-8 text-white/[0.52]">
              Usability problems are not limited to complete failure.
              Users may eventually finish a task while experiencing
              uncertainty, unnecessary effort or repeated correction.
            </p>


            <p className="mt-6 text-[13px] leading-8 text-white/[0.42]">
              HYI records these moments and investigates whether they
              represent a recurring experience problem worth addressing.
            </p>

          </div>


          <div className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#08080a] p-7">

            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(139,92,246,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.035) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />


            <div className="relative">

              <div className="flex items-center justify-between">

                <MiniLabel>
                  Friction signal matrix
                </MiniLabel>

                <Activity
                  size={14}
                  className="text-[#c4b5fd]"
                />

              </div>


              <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">

                {frictionSignals.map((signal, index) => (
                  <motion.div
                    key={signal}
                    animate={{
                      borderColor:
                        index % 4 === 0
                          ? [
                              "rgba(255,255,255,.07)",
                              "rgba(167,139,250,.4)",
                              "rgba(255,255,255,.07)",
                            ]
                          : "rgba(255,255,255,.07)",
                    }}
                    transition={{
                      duration: 3,
                      delay: index * 0.15,
                      repeat: Infinity,
                    }}
                    className="min-h-[100px] rounded-[14px] border border-white/[0.07] bg-black/50 p-4"
                  >

                    <div className="flex items-center justify-between">

                      <span className="font-mono text-[5px] text-white/15">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          index % 4 === 0
                            ? "bg-[#a78bfa]"
                            : "bg-white/10"
                        }`}
                      />

                    </div>


                    <p className="mt-6 text-[9px] leading-5 text-white/40">
                      {signal}
                    </p>

                  </motion.div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   RESEARCH METHODS
============================================================ */

function ResearchMethods() {
  return (
    <section className="bg-black px-5 py-32 md:px-10 md:py-48">

      <Container>

        <SectionLabel number="06">
          RESEARCH METHODS
        </SectionLabel>


        <h2 className="mt-10 max-w-[1050px] text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
          Different questions need

          <span className="block text-white/20">
            different methods.
          </span>
        </h2>


        <p className="mt-8 max-w-[780px] text-[13px] leading-8 text-white/[0.5]">
          HYI selects a testing approach based on the decision that
          needs evidence. A prototype exploration and a mature
          production workflow do not necessarily require the same
          research design.
        </p>


        <div className="mt-16 grid gap-3 lg:grid-cols-2">

          {methods.map((method) => (
            <article
              key={method.number}
              className="group rounded-[24px] border border-white/[0.08] bg-[#08080a] p-7 md:p-8"
            >

              <div className="flex items-center justify-between">

                <span className="font-mono text-[6px] text-[#a78bfa]/55">
                  METHOD / {method.number}
                </span>

                <ChevronRight
                  size={14}
                  className="text-white/15 transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#a78bfa]"
                />

              </div>


              <h3 className="mt-12 text-3xl font-medium tracking-[-0.05em]">
                {method.title}
              </h3>


              <p className="mt-5 text-[13px] leading-7 text-white/[0.5]">
                {method.description}
              </p>


              <div className="mt-8 border-t border-white/[0.07] pt-5">

                <MiniLabel>
                  Useful for
                </MiniLabel>


                <p className="mt-3 text-[11px] leading-6 text-white/38">
                  {method.usefulFor}
                </p>

              </div>

            </article>
          ))}

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   MOBILE TESTING MODEL
============================================================ */

function MobileTesting() {
  return (
    <section className="relative overflow-hidden bg-[#060608] px-5 py-32 md:px-10 md:py-48">

      <div className="absolute right-[-15%] top-[10%] h-[800px] w-[800px] rounded-full bg-[#7c3aed]/[0.06] blur-[220px]" />


      <Container className="relative">

        <SectionLabel number="07">
          MOBILE EXPERIENCE
        </SectionLabel>


        <div className="mt-10 grid items-center gap-16 lg:grid-cols-[1fr_1fr]">

          <MobileDeviceLab />


          <div>

            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Mobile changes

              <span className="block text-white/20">
                the interaction
              </span>

              environment.
            </h2>


            <p className="mt-8 text-[13px] leading-8 text-white/[0.52]">
              A responsive layout is only one part of mobile usability.
              Touch targets, keyboard behavior, viewport constraints,
              navigation patterns, interruption, content density and
              performance can all affect whether a task remains easy to
              complete.
            </p>


            <div className="mt-10 space-y-3">

              {[
                "Touch target discoverability",
                "Mobile navigation",
                "Form and keyboard behavior",
                "Content hierarchy",
                "Responsive state changes",
                "Feedback after interaction",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/[0.07] py-4"
                >

                  <Check
                    size={11}
                    className="text-[#a78bfa]"
                  />

                  <span className="text-[12px] text-white/48">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}


function MobileDeviceLab() {
  return (
    <div className="relative mx-auto h-[720px] w-full max-w-[650px]">

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[140px]" />


      {/* phone */}

      <motion.div
        animate={{
          y: [-7, 7, -7],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[610px] w-[295px] -translate-x-1/2 -translate-y-1/2 rounded-[48px] border border-white/[0.15] bg-[#070709] p-[8px] shadow-[0_40px_100px_rgba(0,0,0,.7)]"
      >

        <div className="relative h-full overflow-hidden rounded-[40px] border border-white/[0.06] bg-[#0b0a0e]">

          <div className="absolute left-1/2 top-3 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />


          <div className="p-5 pt-14">

            <div className="flex items-center justify-between">

              <div className="h-3 w-12 rounded-full bg-white/15" />

              <div className="h-7 w-7 rounded-full border border-white/[0.08]" />

            </div>


            <div className="mt-14 h-6 w-[85%] rounded-full bg-white/15" />

            <div className="mt-3 h-6 w-[62%] rounded-full bg-white/10" />


            <div className="mt-7 h-2 w-[90%] rounded-full bg-white/[0.05]" />

            <div className="mt-2 h-2 w-[78%] rounded-full bg-white/[0.05]" />

            <div className="mt-2 h-2 w-[60%] rounded-full bg-white/[0.05]" />


            <div className="mt-8 h-11 w-full rounded-full bg-[#8b5cf6]/70" />


            <div className="mt-10 grid grid-cols-2 gap-3">

              {[0, 1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-[105px] rounded-[14px] border border-white/[0.06] bg-white/[0.015]"
                />
              ))}

            </div>

          </div>


          <motion.div
            animate={{
              x: [0, 55, -20, 45, 0],
              y: [0, 80, 160, 260, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[45%] top-[27%]"
          >

            <div className="relative">

              <span className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a855f7]/25 blur-[12px]" />

              <MousePointer2
                size={22}
                className="relative fill-[#c4b5fd] text-[#c4b5fd]"
              />

            </div>

          </motion.div>

        </div>

      </motion.div>


      <FloatingDeviceSignal
        className="left-0 top-[16%]"
        title="Touch"
        value="Target analysis"
        Icon={MousePointer2}
      />


      <FloatingDeviceSignal
        className="right-0 top-[28%]"
        title="Navigation"
        value="Journey state"
        Icon={GitBranch}
      />


      <FloatingDeviceSignal
        className="bottom-[17%] left-[2%]"
        title="Viewport"
        value="Responsive"
        Icon={Layers3}
      />


      <FloatingDeviceSignal
        className="bottom-[10%] right-[2%]"
        title="Feedback"
        value="Interaction"
        Icon={Activity}
      />

    </div>
  );
}


function FloatingDeviceSignal({
  className,
  title,
  value,
  Icon,
}: {
  className: string;
  title: string;
  value: string;
  Icon: ElementType;
}) {
  return (
    <motion.div
      animate={{
        y: [-4, 4, -4],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute z-30 hidden w-[150px] rounded-[16px] border border-white/[0.08] bg-[#09080c]/90 p-4 backdrop-blur-xl sm:block ${className}`}
    >

      <Icon
        size={13}
        className="text-[#c4b5fd]"
      />

      <span className="mt-5 block text-[10px] text-white/55">
        {title}
      </span>

      <span className="mt-1 block font-mono text-[5px] uppercase tracking-[0.1em] text-white/20">
        {value}
      </span>

    </motion.div>
  );
}


/* ============================================================
   UX METRICS
============================================================ */

function UXMetrics() {
  return (
    <section className="bg-black px-5 py-32 md:px-10 md:py-48">

      <Container>

        <SectionLabel number="08">
          UX MEASUREMENT
        </SectionLabel>


        <h2 className="mt-10 max-w-[1100px] text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
          Measure behavior

          <span className="block text-white/20">
            without reducing people
          </span>

          to one number.
        </h2>


        <p className="mt-8 max-w-[800px] text-[13px] leading-8 text-white/[0.52]">
          UX testing can include quantitative signals, but metrics need
          interpretation. HYI combines task outcomes with observed
          behavior and participant context rather than assuming a single
          score explains the experience.
        </p>


        <div className="mt-16 grid gap-[1px] overflow-hidden rounded-[26px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">

          {metrics.map((metric, index) => (
            <article
              key={metric.title}
              className="min-h-[280px] bg-[#08080a] p-7"
            >

              <div className="flex items-center justify-between">

                <span className="font-mono text-[6px] text-[#a78bfa]/55">
                  SIGNAL / 0{index + 1}
                </span>

                <BarChart3
                  size={13}
                  className="text-white/15"
                />

              </div>


              <h3 className="mt-14 text-2xl font-medium tracking-[-0.04em]">
                {metric.title}
              </h3>


              <p className="mt-5 text-[12px] leading-7 text-white/[0.48]">
                {metric.description}
              </p>

            </article>
          ))}

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   INSIGHT ENGINE
============================================================ */

function InsightEngine() {
  return (
    <section className="relative overflow-hidden bg-[#060608] px-5 py-32 md:px-10 md:py-48">

      <div className="absolute left-1/2 top-1/2 h-[850px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.05] blur-[220px]" />


      <Container className="relative">

        <SectionLabel number="09">
          INSIGHT ENGINE
        </SectionLabel>


        <div className="mt-10 grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">

          <div>

            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Evidence becomes

              <span className="block text-white/20">
                useful when it
              </span>

              changes decisions.
            </h2>


            <p className="mt-8 text-[13px] leading-8 text-white/[0.52]">
              Research synthesis connects observations to product
              decisions. HYI organizes findings around recurring
              behaviors, affected tasks, supporting evidence and
              potential improvement directions.
            </p>

          </div>


          <InsightModel />

        </div>

      </Container>

    </section>
  );
}


function InsightModel() {
  return (
    <div className="relative min-h-[600px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#08080a] p-7">

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.035) 1px, transparent 1px)",
          backgroundSize: "35px 35px",
        }}
      />


      <div className="relative">

        <div className="flex items-center justify-between">

          <MiniLabel>
            Research synthesis
          </MiniLabel>

          <BrainCircuit
            size={15}
            className="text-[#c4b5fd]"
          />

        </div>


        <div className="mt-10 grid gap-3 md:grid-cols-[.8fr_1.2fr]">

          {/* raw signals */}

          <div className="space-y-3">

            {[
              "User hesitated",
              "CTA overlooked",
              "Label misread",
              "Backtracked",
              "Task recovered",
            ].map((item, index) => (
              <motion.div
                key={item}
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 3 + index * 0.3,
                  repeat: Infinity,
                }}
                className="rounded-[14px] border border-white/[0.07] bg-black/60 p-4"
              >

                <span className="font-mono text-[5px] text-white/15">
                  OBSERVATION / 0{index + 1}
                </span>

                <p className="mt-3 text-[10px] text-white/40">
                  {item}
                </p>

              </motion.div>
            ))}

          </div>


          {/* synthesis */}

          <div className="rounded-[20px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.035] p-6">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8b5cf6]/25">

                <BrainCircuit
                  size={15}
                  className="text-[#c4b5fd]"
                />

              </div>


              <div>

                <MiniLabel>
                  Pattern synthesis
                </MiniLabel>

                <span className="mt-1 block text-[11px] text-white/55">
                  Navigation clarity
                </span>

              </div>

            </div>


            <div className="mt-8 space-y-4">

              {[
                ["Evidence", "Multiple participants pause at the same decision point."],
                ["Interpretation", "Primary action may not communicate its next step clearly."],
                ["Risk", "Important journey progression is delayed or abandoned."],
                ["Direction", "Explore clearer action language and supporting context."],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="border-b border-white/[0.07] pb-4"
                >

                  <span className="font-mono text-[5px] uppercase text-[#c4b5fd]/45">
                    {label}
                  </span>

                  <p className="mt-2 text-[10px] leading-5 text-white/40">
                    {value}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>


        <div className="mt-6 grid grid-cols-3 gap-3">

          {[
            ["FREQUENCY", "Recurring"],
            ["TASK IMPACT", "High"],
            ["CONFIDENCE", "Review"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-[13px] border border-white/[0.07] bg-black/50 p-4"
            >

              <span className="font-mono text-[5px] text-white/15">
                {label}
              </span>

              <span className="mt-2 block font-mono text-[7px] text-white/45">
                {value}
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   HOW HYI WORKS
============================================================ */

function HYIUXProcess() {
  return (
    <section
      id="hyi-method"
      className="bg-black px-5 py-32 md:px-10 md:py-48"
    >

      <Container>

        <div className="grid gap-16 lg:grid-cols-[.72fr_1.28fr]">

          <div className="lg:sticky lg:top-32 lg:self-start">

            <SectionLabel number="10">
              HOW HYI WORKS
            </SectionLabel>


            <h2 className="mt-10 text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Research

              <span className="block text-white/20">
                becomes a product
              </span>

              workflow.
            </h2>


            <p className="mt-8 text-[13px] leading-8 text-white/[0.52]">
              HYI does not treat usability testing as an isolated
              presentation. Research is connected to product decisions,
              design improvements and validation.
            </p>


            <div className="mt-10 rounded-[18px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.035] p-5">

              <div className="flex gap-4">

                <BrainCircuit
                  size={16}
                  className="mt-1 shrink-0 text-[#c4b5fd]"
                />

                <p className="text-[11px] leading-6 text-white/42">
                  The objective is not to collect criticism. The objective
                  is to reduce uncertainty about how people experience an
                  important product journey.
                </p>

              </div>

            </div>

          </div>


          <div className="border-t border-white/[0.08]">

            {hyiProcess.map((item, index) => (
              <motion.article
                key={item.step}
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
                  margin: "-60px",
                }}
                transition={{
                  delay: Math.min(index * 0.04, 0.2),
                }}
                className="grid gap-5 border-b border-white/[0.08] py-9 md:grid-cols-[65px_.65fr_1.35fr]"
              >

                <span className="font-mono text-[7px] text-[#a78bfa]/60">
                  {item.step}
                </span>


                <div>

                  <span className="font-mono text-[5px] uppercase tracking-[0.12em] text-white/20">
                    {item.phase}
                  </span>

                  <h3 className="mt-2 text-xl font-medium tracking-[-0.04em] text-white/75">
                    {item.title}
                  </h3>

                </div>


                <p className="text-[12px] leading-7 text-white/[0.48]">
                  {item.description}
                </p>

              </motion.article>
            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   ACCESSIBILITY
============================================================ */

function AccessibilitySection() {
  return (
    <section className="bg-[#060608] px-5 py-32 md:px-10 md:py-48">

      <Container>

        <SectionLabel number="11">
          ACCESSIBILITY
        </SectionLabel>


        <div className="mt-10 grid gap-16 lg:grid-cols-[1.1fr_.9fr]">

          <div>

            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
              A usable product

              <span className="block text-white/20">
                should not depend
              </span>

              on one way of using it.
            </h2>


            <p className="mt-8 max-w-[700px] text-[13px] leading-8 text-white/[0.52]">
              Accessibility evaluation considers barriers that may be
              invisible during conventional visual review. HYI can
              include accessibility-focused checks alongside broader
              user experience research.
            </p>

          </div>


          <div className="grid gap-3 sm:grid-cols-2">

            {[
              ["Keyboard", "Can important workflows be completed without relying on a pointer?"],
              ["Focus", "Is keyboard focus visible and logically ordered?"],
              ["Semantics", "Does interface structure communicate meaning to assistive technology?"],
              ["Contrast", "Is important information visually distinguishable?"],
              ["Labels", "Do controls communicate understandable names and purpose?"],
              ["Feedback", "Are errors and state changes communicated clearly?"],
            ].map(([title, description], index) => (
              <div
                key={title}
                className="rounded-[18px] border border-white/[0.08] bg-[#08080a] p-5"
              >

                <div className="flex items-center justify-between">

                  <ShieldCheck
                    size={13}
                    className="text-[#c4b5fd]"
                  />

                  <span className="font-mono text-[5px] text-white/15">
                    0{index + 1}
                  </span>

                </div>


                <h3 className="mt-8 text-lg font-medium">
                  {title}
                </h3>


                <p className="mt-3 text-[10px] leading-6 text-white/40">
                  {description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   DESIGN VALIDATION LOOP
============================================================ */

function ValidationLoop() {
  const loop = [
    {
      label: "Observe",
      angle: 0,
    },
    {
      label: "Synthesize",
      angle: 60,
    },
    {
      label: "Prioritize",
      angle: 120,
    },
    {
      label: "Design",
      angle: 180,
    },
    {
      label: "Build",
      angle: 240,
    },
    {
      label: "Validate",
      angle: 300,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black px-5 py-32 md:px-10 md:py-48">

      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.06] blur-[220px]" />


      <Container className="relative">

        <SectionLabel number="12">
          VALIDATION LOOP
        </SectionLabel>


        <div className="mt-10 grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">

          <div>

            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Research should

              <span className="block text-white/20">
                return to the
              </span>

              product.
            </h2>


            <p className="mt-8 text-[13px] leading-8 text-white/[0.52]">
              A usability report has limited value if findings never
              influence implementation. HYI connects observation,
              synthesis, prioritization, design and validation into an
              iterative loop.
            </p>

          </div>


          <div className="relative mx-auto h-[620px] w-full max-w-[650px]">

            <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />


            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#8b5cf6]/25"
            />


            <div className="absolute left-1/2 top-1/2 flex h-[175px] w-[175px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#0b0811] shadow-[0_0_80px_rgba(124,58,237,.12)]">

              <BrainCircuit
                size={27}
                strokeWidth={0.9}
                className="text-[#c4b5fd]"
              />

              <span className="mt-4 font-mono text-[7px] tracking-[0.14em] text-white/35">
                UX LEARNING
              </span>

            </div>


            {loop.map((node, index) => {
              const radians =
                (node.angle * Math.PI) / 180;

              const radius = 235;

              const x =
                Math.cos(radians) * radius;

              const y =
                Math.sin(radians) * radius;

              return (
                <motion.div
                  key={node.label}
                  animate={{
                    y: [-4, 4, -4],
                  }}
                  transition={{
                    duration: 4 + index * 0.25,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  className="absolute flex h-[88px] w-[125px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[16px] border border-white/[0.08] bg-[#08080a]"
                >

                  <span className="font-mono text-[7px] text-white/45">
                    {node.label}
                  </span>

                </motion.div>
              );
            })}

          </div>

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   PRINCIPLES
============================================================ */

function UXPrinciples() {
  return (
    <section className="bg-[#060608] px-5 py-32 md:px-10 md:py-48">

      <Container>

        <SectionLabel number="13">
          RESEARCH PRINCIPLES
        </SectionLabel>


        <div className="mt-10 grid gap-16 lg:grid-cols-[.75fr_1.25fr]">

          <div>

            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
              Observe carefully.

              <span className="block text-white/20">
                Interpret
              </span>

              responsibly.
            </h2>

          </div>


          <div className="border-t border-white/[0.08]">

            {principles.map((principle, index) => (
              <div
                key={principle}
                className="flex items-center gap-5 border-b border-white/[0.08] py-5"
              >

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04]">

                  <Check
                    size={11}
                    className="text-[#c4b5fd]"
                  />

                </div>


                <p className="text-[13px] leading-7 text-white/[0.55]">
                  {principle}
                </p>


                <span className="ml-auto hidden font-mono text-[5px] text-white/15 sm:block">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>
            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   UX TESTING VS ASSUMPTION
============================================================ */

function UXComparison() {
  const rows = [
    [
      "Navigation",
      "Users will understand it",
      "Observe whether participants discover the correct path",
    ],
    [
      "Content",
      "The copy is clear",
      "Test how participants interpret the language",
    ],
    [
      "CTA",
      "The button is obvious",
      "Observe whether the action is noticed and understood",
    ],
    [
      "Forms",
      "The fields are easy",
      "Watch for hesitation, correction and abandonment",
    ],
    [
      "Mobile",
      "Responsive means usable",
      "Evaluate real mobile interaction and constraints",
    ],
    [
      "Design",
      "Stakeholders like it",
      "Evaluate whether users can achieve their goals",
    ],
  ];

  return (
    <section className="bg-black px-5 py-32 md:px-10 md:py-48">

      <Container>

        <SectionLabel number="14">
          ASSUMPTION VS EVIDENCE
        </SectionLabel>


        <h2 className="mt-10 max-w-[1050px] text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl">
          Internal confidence

          <span className="block text-white/20">
            is not user evidence.
          </span>
        </h2>


        <div className="mt-16 overflow-hidden rounded-[24px] border border-white/[0.08]">

          <div className="grid grid-cols-[.6fr_1fr_1.4fr] border-b border-white/[0.08] bg-[#08080a] p-5 md:p-7">

            <MiniLabel>
              Area
            </MiniLabel>

            <MiniLabel>
              Assumption
            </MiniLabel>

            <span className="font-mono text-[6px] uppercase tracking-[0.16em] text-[#c4b5fd]/55">
              UX evidence
            </span>

          </div>


          {rows.map(([area, assumption, evidence]) => (
            <div
              key={area}
              className="grid grid-cols-[.6fr_1fr_1.4fr] border-b border-white/[0.07] p-5 last:border-b-0 md:p-7"
            >

              <span className="text-[11px] font-medium text-white/55">
                {area}
              </span>

              <span className="pr-4 text-[11px] leading-6 text-white/28">
                {assumption}
              </span>

              <span className="text-[11px] leading-6 text-white/55">
                {evidence}
              </span>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   FINAL STATEMENT
============================================================ */

function FinalStatement() {
  return (
    <section className="relative overflow-hidden bg-[#050506] px-5 py-40 md:px-10 md:py-60">

      <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.07] blur-[260px]" />


      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.03) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 75%)",
        }}
      />


      <Container className="relative text-center">

        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-4 py-2">

          <Zap
            size={11}
            className="text-[#c4b5fd]"
          />

          <span className="font-mono text-[7px] uppercase tracking-[0.17em] text-[#c4b5fd]/70">
            HYI User Experience Testing
          </span>

        </div>


        <h2 className="mx-auto mt-10 max-w-[1350px] text-[clamp(4.3rem,9vw,9.5rem)] font-semibold leading-[0.79] tracking-[-0.1em]">

          Stop guessing

          <span className="block text-white/20">
            what users need.
          </span>

          <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
            Watch them use it.
          </span>

        </h2>


        <p className="mx-auto mt-10 max-w-[760px] text-[14px] leading-8 text-white/[0.55]">
          HYI combines structured usability research, behavioral
          observation, product thinking and iterative validation to help
          teams understand where digital experiences support users — and
          where they create unnecessary friction.
        </p>


        <div className="mt-12 flex flex-wrap justify-center gap-3">

          <a
            href="#hyi-method"
            className="flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-9 py-5 text-[12px] shadow-[0_0_60px_rgba(124,58,237,.25)]"
          >
            Explore HYI methodology

            <ArrowRight size={14} />
          </a>


          <a
            href="#ux-lab"
            className="flex items-center gap-4 rounded-full border border-white/10 px-9 py-5 text-[12px] text-white/55"
          >
            Review UX testing

            <ArrowDown size={14} />
          </a>

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   MAIN CLIENT COMPONENT
============================================================ */

export default function UserExperienceTestingClient() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="overflow-x-hidden bg-black text-white">

      {/* page progress */}

      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#6d28d9] via-[#a855f7] to-[#e879f9]"
      />


      <Hero />


      <ResearchStrip />


      <UXIntroduction />


      <ResearchSignals />


      <UXDimensions />


      <TaskJourney />


      <FrictionDetector />


      <ResearchMethods />


      <MobileTesting />


      <UXMetrics />


      <InsightEngine />


      <HYIUXProcess />


      <AccessibilitySection />


      <ValidationLoop />


      <UXPrinciples />


      <UXComparison />


      <FinalStatement />

    </div>
  );
}