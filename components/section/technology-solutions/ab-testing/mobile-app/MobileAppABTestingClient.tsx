"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import type { ReactNode } from "react";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Database,
  Eye,
  Fingerprint,
  Gauge,
  GitBranch,
  Layers3,
  MousePointer2,
  Network,
  Play,
  RefreshCcw,
  Rocket,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Split,
  Target,
  TestTube2,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

/* =========================================================
   REMOTE IMAGES
   Direct remote URLs -> normal <img>
========================================================= */

const images = {
  mobileDevelopment:
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1800&q=85",

  mobileAnalytics:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85",

  development:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=85",

  team:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=85",
};

/* =========================================================
   DATA
========================================================= */

const learningTopics = [
  {
    number: "01",
    title: "What is mobile A/B testing?",
    text:
      "Mobile app A/B testing is a controlled experimentation method in which eligible users are assigned to different versions of an app experience. Instead of changing an interface for everyone and hoping it performs better, teams can compare a control experience with one or more carefully designed alternatives.",
  },
  {
    number: "02",
    title: "Why is it different from web testing?",
    text:
      "Mobile experimentation has additional operational constraints. App versions may remain installed for long periods, users can be offline, releases pass through app stores, device capabilities differ, and analytics events can arrive asynchronously. A mobile experiment therefore needs both product thinking and reliable technical infrastructure.",
  },
  {
    number: "03",
    title: "What is a hypothesis?",
    text:
      "A hypothesis connects a proposed product change to an expected user behavior. A useful hypothesis identifies what will change, which audience is affected, what behavior may change and which metric will be used to evaluate that expectation.",
  },
  {
    number: "04",
    title: "What is a control?",
    text:
      "The control is the reference experience against which another variant is compared. It is usually the existing product behavior. Keeping a stable control helps teams understand whether observed differences are associated with the tested change.",
  },
  {
    number: "05",
    title: "What is a variant?",
    text:
      "A variant is an alternative experience created for the experiment. It may change onboarding, navigation, copy, pricing presentation, notification timing, recommendations, checkout flow or another defined part of the application.",
  },
  {
    number: "06",
    title: "What is exposure?",
    text:
      "Exposure records that a user was actually eligible for and presented with an experiment experience. Accurate exposure tracking matters because users who never saw a treatment should not casually be mixed into the same interpretation as users who did.",
  },
];

const experimentTargets = [
  {
    icon: Smartphone,
    title: "Onboarding",
    text:
      "Compare onboarding sequences, permission education, progressive profiling and activation steps.",
  },
  {
    icon: MousePointer2,
    title: "Interaction",
    text:
      "Evaluate navigation, buttons, gestures, information hierarchy and interaction patterns.",
  },
  {
    icon: Bell,
    title: "Notifications",
    text:
      "Test notification prompts, timing strategies and messaging while respecting user preferences.",
  },
  {
    icon: Sparkles,
    title: "Personalization",
    text:
      "Explore relevant experiences for defined audiences while preserving clean experiment assignment.",
  },
  {
    icon: Target,
    title: "Conversion",
    text:
      "Study how product changes influence meaningful actions such as activation, purchase or subscription.",
  },
  {
    icon: RefreshCcw,
    title: "Retention",
    text:
      "Investigate product experiences associated with repeat engagement and continued product use.",
  },
];

const hyiProcess = [
  {
    number: "01",
    title: "Understand the decision",
    text:
      "HYI begins with the product question rather than immediately creating variants. We define what decision the experiment is intended to inform, which users are relevant and which outcome matters.",
  },
  {
    number: "02",
    title: "Design the hypothesis",
    text:
      "The product idea is translated into a measurable hypothesis. Primary metrics, supporting metrics and guardrail metrics are defined before the experiment begins.",
  },
  {
    number: "03",
    title: "Create experiment architecture",
    text:
      "We define eligibility, assignment logic, control and treatment behavior, event instrumentation and experiment configuration so the implementation can be observed reliably.",
  },
  {
    number: "04",
    title: "Integrate the mobile experience",
    text:
      "Variant behavior is connected to the application with attention to app version, platform, remote configuration, feature flags and fallback behavior.",
  },
  {
    number: "05",
    title: "Validate instrumentation",
    text:
      "Before meaningful traffic is evaluated, exposure events and conversion events are checked so experiment reporting reflects the intended user journey.",
  },
  {
    number: "06",
    title: "Launch controlled traffic",
    text:
      "Eligible traffic can be introduced according to the experiment plan. Operational health and guardrail signals remain visible while the test is active.",
  },
  {
    number: "07",
    title: "Analyze the evidence",
    text:
      "Observed differences are interpreted with statistical and product context. HYI avoids treating a temporary percentage movement as sufficient evidence on its own.",
  },
  {
    number: "08",
    title: "Turn results into learning",
    text:
      "Experiment results are documented as product knowledge. The result may support a rollout, reject an assumption or generate a stronger hypothesis for the next experiment.",
  },
];

const architectureLayers = [
  {
    number: "L1",
    title: "Application",
    description:
      "iOS, Android or cross-platform application where the user experiences the experiment.",
  },
  {
    number: "L2",
    title: "Experiment Assignment",
    description:
      "Eligibility and allocation logic determines which experiment experience is assigned.",
  },
  {
    number: "L3",
    title: "Feature Delivery",
    description:
      "Feature flags or configuration expose the correct behavior without mixing variant logic.",
  },
  {
    number: "L4",
    title: "Event Instrumentation",
    description:
      "Exposure, interaction, conversion and guardrail events capture what happened.",
  },
  {
    number: "L5",
    title: "Data Pipeline",
    description:
      "Experiment events move into analytics infrastructure where quality and consistency can be checked.",
  },
  {
    number: "L6",
    title: "Experiment Analysis",
    description:
      "Variant outcomes are evaluated with statistical context and product interpretation.",
  },
];

const metrics = [
  {
    label: "Activation",
    description:
      "Did more eligible users successfully reach the intended activation moment?",
  },
  {
    label: "Conversion",
    description:
      "Did the tested experience influence the primary conversion action?",
  },
  {
    label: "Engagement",
    description:
      "Did user interaction with the product meaningfully change?",
  },
  {
    label: "Retention",
    description:
      "Did behavior remain different after the initial experiment interaction?",
  },
  {
    label: "Revenue",
    description:
      "Where appropriate, did monetization behavior change without harming important guardrails?",
  },
  {
    label: "Reliability",
    description:
      "Did the experiment affect crashes, latency or another product-health signal?",
  },
];

const mistakes = [
  "Launching a test without a written hypothesis",
  "Changing several unrelated experiences in one variant",
  "Choosing the primary metric after seeing results",
  "Ignoring app-version differences",
  "Mixing users who were never exposed into the interpretation",
  "Stopping only because the graph temporarily looks positive",
  "Ignoring crashes, latency or other guardrail metrics",
  "Treating correlation as automatic proof of causation",
  "Running overlapping experiments without considering interaction",
  "Keeping no record of what the experiment taught",
];

const lifecycle = [
  "QUESTION",
  "HYPOTHESIS",
  "DESIGN",
  "BUILD",
  "VALIDATE",
  "ALLOCATE",
  "OBSERVE",
  "ANALYZE",
  "LEARN",
  "ROLLOUT",
];

/* =========================================================
   HELPERS
========================================================= */

function Label({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-[9px] text-[#a78bfa]">
        {number}
      </span>

      <span className="h-px w-9 bg-[#8b5cf6]/40" />

      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
        {children}
      </span>
    </div>
  );
}

function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a78bfa] opacity-30" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a78bfa]" />
    </span>
  );
}

/* =========================================================
   PHONE MODEL
========================================================= */

function PhoneScreen({
  variant,
  active = false,
}: {
  variant: string;
  active?: boolean;
}) {
  return (
    <motion.div
      animate={{
        y: active ? [-8, 8, -8] : [8, -8, 8],
      }}
      transition={{
        duration: active ? 6 : 7,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative w-[210px] rounded-[40px] border border-white/[0.14] bg-[#070707] p-[7px] shadow-[0_40px_100px_rgba(0,0,0,.8)] sm:w-[245px]"
    >
      <div
        className={`relative h-[480px] overflow-hidden rounded-[34px] border ${
          active
            ? "border-[#8b5cf6]/35"
            : "border-white/[0.07]"
        } bg-[#0a0a0c] sm:h-[520px]`}
      >
        <div className="absolute left-1/2 top-3 z-20 h-[18px] w-[70px] -translate-x-1/2 rounded-full bg-black" />

        <div className="p-5 pt-12">
          <div className="flex items-center justify-between">
            <div className="h-7 w-7 rounded-full border border-white/10 bg-white/[0.05]" />

            <div className="h-2 w-12 rounded-full bg-white/[0.07]" />
          </div>

          <div className="mt-8">
            <span className="font-mono text-[5px] tracking-[0.15em] text-white/25">
              VARIANT {variant}
            </span>

            <div className="mt-3 h-3 w-[78%] rounded-full bg-white/15" />
            <div className="mt-2 h-3 w-[55%] rounded-full bg-white/10" />

            <div className="mt-4 h-1.5 w-[90%] rounded-full bg-white/[0.05]" />
            <div className="mt-2 h-1.5 w-[70%] rounded-full bg-white/[0.05]" />
          </div>

          <div
            className={`relative mt-8 h-[145px] overflow-hidden rounded-[24px] border ${
              active
                ? "border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.08]"
                : "border-white/[0.07] bg-white/[0.025]"
            }`}
          >
            <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#a78bfa]/30"
            />

            <Smartphone
              size={20}
              strokeWidth={0.8}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/30"
            />
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2">
            <div className="rounded-[14px] border border-white/[0.06] p-3">
              <div className="h-1.5 w-8 rounded-full bg-white/10" />
              <div className="mt-3 h-5 w-12 rounded-full bg-white/[0.05]" />
            </div>

            <div className="rounded-[14px] border border-white/[0.06] p-3">
              <div className="h-1.5 w-8 rounded-full bg-white/10" />
              <div className="mt-3 h-5 w-12 rounded-full bg-white/[0.05]" />
            </div>
          </div>

          <motion.div
            animate={
              active
                ? {
                    boxShadow: [
                      "0 0 0 rgba(139,92,246,0)",
                      "0 0 35px rgba(139,92,246,.25)",
                      "0 0 0 rgba(139,92,246,0)",
                    ],
                  }
                : {}
            }
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className={`mt-5 flex h-12 items-center justify-center rounded-full bottom-12 ${
              active
                ? "bg-[#8b5cf6]"
                : "bg-white/10"
            }`}
          >
            <span className="font-mono text-[6px] tracking-[0.15em] text-white/70">
              CONTINUE
            </span>
          </motion.div>
        </div>

        <motion.div
          animate={{
            top: ["12%", "88%", "12%"],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a78bfa]/50 to-transparent"
        />
      </div>
    </motion.div>
  );
}

function MobileExperimentModel() {
  return (
    <div className="relative mx-auto min-h-[650px] w-full max-w-[720px]">
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/10" />

      <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#8b5cf6]/15" />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#a78bfa]/10"
      >
        <span className="absolute left-1/2 top-[-4px] h-2 w-2 rounded-full bg-[#a78bfa]" />
      </motion.div>

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[150px]" />

      <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 gap-4 sm:gap-8">
        {/* <PhoneScreen variant="A" /> */}
        <PhoneScreen variant="B" active />
      </div>

      <div className="absolute left-4 top-12 hidden rounded-[16px] border border-white/[0.08] bg-black/60 p-4 backdrop-blur-xl md:block">
        <div className="flex items-center gap-2">
          <LiveDot />
          <span className="font-mono text-[6px] text-white/30 z-90">
            EXPERIMENT ACTIVE
          </span>
        </div>
      </div>

      <div className="absolute bottom-12 right-0 hidden rounded-[16px] border border-[#8b5cf6]/20 bg-[#0a0710]/80 p-4 backdrop-blur-xl md:block">
        <span className="font-mono text-[5px] text-white/25">
          TRAFFIC ALLOCATION
        </span>

        <div className="mt-2 flex items-center gap-3">
          <span className="font-mono text-[9px] text-white/50">
            50
          </span>

          <Split size={12} className="text-[#a78bfa]" />

          <span className="font-mono text-[9px] text-[#c4b5fd]">
            50
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
    <section className="relative min-h-screen overflow-hidden bg-black px-5 pb-24  md:px-20 ">
      <div className="absolute left-[-20%] top-[-30%] h-[900px] w-[900px] rounded-full bg-[#7c3aed]/[0.07] blur-[220px]" />

      <div className="absolute bottom-[-30%] right-[-15%] h-[850px] w-[850px] rounded-full bg-[#9333ea]/[0.05] blur-[220px]" />

      <div className="mx-auto max-w-[1450px]">
        {/* <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
          <div className="flex items-center gap-3">
            <LiveDot />

            <span className="font-mono text-[7px] tracking-[0.2em] text-white/30">
              MOBILE EXPERIMENTATION SYSTEM
            </span>
          </div>

          <span className="hidden font-mono text-[6px] tracking-[0.18em] text-white/20 md:block">
            APP → EXPOSURE → EVENTS → EVIDENCE → DECISION
          </span>
        </div> */}

        <div className="grid min-h-[820px] items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            {/* <div className="flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.06] px-4 py-2">
              <Smartphone
                size={11}
                strokeWidth={1}
                className="text-[#c4b5fd]"
              />

              <span className="font-mono text-[7px] tracking-[0.16em] text-[#c4b5fd]/70">
                MOBILE APP A/B TESTING
              </span>
            </div> */}

            <h1 className="mt-9 max-w-[760px] text-[clamp(4.5rem,7.7vw,8.7rem)] font-semibold leading-[0.8] tracking-[-0.09em]">
              Ship ideas.
              <span className="block text-white/20">
                Measure behavior.
              </span>

              <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
                Learn faster.
              </span>
            </h1>

            <p className="mt-10 max-w-[650px] text-[14px] leading-8 text-white/[0.58] md:text-[16px] md:leading-9">
              Mobile app A/B testing helps product teams compare
              controlled application experiences before making a
              broader product decision. HYI designs experimentation
              systems that connect mobile variants, user assignment,
              event instrumentation, analytics and product learning
              into one measurable workflow.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#learn"
                className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-7 py-4 text-[12px] shadow-[0_0_45px_rgba(124,58,237,.25)]"
              >
                Learn Mobile Testing

                <ArrowDown
                  size={14}
                  className="transition-transform group-hover:translate-y-1"
                />
              </a>

              <a
                href="#hyi-process"
                className="flex items-center gap-4 rounded-full border border-white/10 px-7 py-4 text-[12px] text-white/55 transition hover:border-[#8b5cf6]/40"
              >
                How HYI Works

                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <MobileExperimentModel />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   LIFECYCLE STRIP
========================================================= */

function LifecycleStrip() {
  return (
    <section className="overflow-hidden border-y border-white/[0.07] bg-[#080808] py-6">
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max"
      >
        {[...lifecycle, ...lifecycle].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center"
          >
            <span className="px-10 font-mono text-[8px] tracking-[0.2em] text-white/30 md:px-14">
              {item}
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
   LEARNING CENTER
========================================================= */

function LearningCenter() {
  return (
    <section
      id="learn"
      className="relative overflow-hidden bg-[#050505] px-5 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto max-w-[1450px]">
        <Label number="01">
          Mobile Experimentation Fundamentals
        </Label>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.91] tracking-[-0.07em] md:text-7xl lg:text-[90px]">
            First understand
            <span className="block text-white/20">
              experimentation.
            </span>

            Then build it
            <span className="text-[#a78bfa]">
              {" "}correctly.
            </span>
          </h2>

          <div className="flex items-end">
            <p className="max-w-[530px] text-[14px] leading-8 text-white/[0.58]">
              A/B testing is not simply showing two screens and
              choosing the one with the larger number. Reliable
              experimentation requires a clear hypothesis, controlled
              assignment, accurate exposure tracking, meaningful
              metrics and careful interpretation of the evidence.
            </p>
          </div>
        </div>

        <div className="mt-20 grid border-t border-white/[0.08] lg:grid-cols-2">
          {learningTopics.map((item) => (
            <article
              key={item.number}
              className="group border-b border-white/[0.08] px-0 py-10 lg:odd:border-r lg:odd:pr-12 lg:even:pl-12"
            >
              <div className="flex gap-6">
                <span className="mt-1 font-mono text-[7px] text-[#a78bfa]/60">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-2xl font-medium tracking-[-0.04em] text-white/80">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-[620px] text-[13px] leading-8 text-white/[0.53]">
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
   MOBILE VS WEB
========================================================= */

function MobileVsWeb() {
  return (
    <section className="relative overflow-hidden bg-[#090909] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <Label number="02">
          Why Mobile Is Different
        </Label>

        <div className="mt-10 grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Mobile testing
              <span className="block text-white/20">
                has different rules.
              </span>
            </h2>

            <p className="mt-8 max-w-[520px] text-[13px] leading-8 text-white/[0.55]">
              Web applications can often deploy a change immediately.
              Mobile applications live across app-store releases,
              installed versions, device types and operating systems.
              Experiment architecture needs to account for this
              fragmented runtime environment.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              [
                "App versions",
                "Different users may be running different application versions at the same time.",
              ],
              [
                "Store releases",
                "Some product changes still depend on binary releases and app-store distribution.",
              ],
              [
                "Offline behavior",
                "Applications may collect events while connectivity is limited and synchronize later.",
              ],
              [
                "Device diversity",
                "Screen size, hardware capability and operating-system behavior can affect experience.",
              ],
              [
                "Session patterns",
                "Mobile sessions can be short, interrupted and distributed across longer periods.",
              ],
              [
                "Push ecosystem",
                "Notifications and permissions introduce experiment surfaces that do not behave like ordinary web pages.",
              ],
            ].map(([title, text], index) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  y: 25,
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
                className="min-h-[250px] rounded-[22px] border border-white/[0.08] bg-black p-6"
              >
                <span className="font-mono text-[6px] text-[#a78bfa]/55">
                  0{index + 1}
                </span>

                <h3 className="mt-10 text-2xl font-medium tracking-[-0.04em]">
                  {title}
                </h3>

                <p className="mt-5 text-[12px] leading-7 text-white/[0.5]">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   IMAGE STORY
========================================================= */

function ProductExperimentStory() {
  return (
    <section className="relative min-h-[780px] overflow-hidden bg-black">
      <img
        src={images.mobileDevelopment}
        alt="Mobile application development workspace"
        className="absolute inset-0 h-full w-full object-cover opacity-30 grayscale"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

      <div className="relative mx-auto flex min-h-[780px] max-w-[1450px] items-center px-5 py-32 md:px-10">
        <div className="max-w-[900px]">
          <Label number="03">
            Product Experimentation
          </Label>

          <h2 className="mt-10 text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.83] tracking-[-0.085em]">
            Every feature
            <span className="block text-white/25">
              begins as an idea.
            </span>

            Evidence tells you
            <span className="block text-[#c4b5fd]">
              what happens next.
            </span>
          </h2>

          <p className="mt-10 max-w-[650px] text-[14px] leading-8 text-white/55">
            Experimentation creates a structured bridge between
            product intuition and observed user behavior. It does not
            replace product judgment; it gives product teams stronger
            information for making that judgment.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EXPERIMENT TARGETS
========================================================= */

function ExperimentTargets() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1450px]">
        <Label number="04">
          What Can Be Tested
        </Label>

        <div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-[900px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Experiment across
            <span className="block text-white/20">
              the mobile journey.
            </span>
          </h2>

          <p className="max-w-[460px] text-[13px] leading-8 text-white/[0.53]">
            The best experiment surface depends on the product
            question. HYI structures tests around meaningful user
            behavior rather than changing interface elements without
            a reason.
          </p>
        </div>

        <div className="mt-20 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {experimentTargets.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                whileHover={{
                  y: -7,
                }}
                className="group min-h-[340px] rounded-[24px] border border-white/[0.08] bg-[#090909] p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">
                    <Icon
                      size={18}
                      strokeWidth={1}
                      className="text-[#c4b5fd]"
                    />
                  </div>

                  <span className="font-mono text-[6px] text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-20 text-3xl font-medium tracking-[-0.05em]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[12px] leading-7 text-white/[0.5]">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   HYI PROCESS
========================================================= */

function HYIProcess() {
  return (
    <section
      id="hyi-process"
      className="relative overflow-hidden bg-[#090909] px-5 py-28 md:px-10 md:py-44"
    >
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.65fr_1.35fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Label number="05">
              HYI Mobile Testing Method
            </Label>

            <h2 className="mt-8 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              How HYI
              <span className="block text-white/20">
                runs the system.
              </span>
            </h2>

            <p className="mt-8 max-w-[460px] text-[13px] leading-8 text-white/[0.55]">
              HYI approaches mobile experimentation as an engineering,
              analytics and product-learning system. The goal is to
              keep the hypothesis, implementation and measurement
              connected from beginning to end.
            </p>

            <div className="mt-10 rounded-[20px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04] p-6">
              <div className="flex items-center gap-3">
                <Workflow
                  size={16}
                  strokeWidth={1}
                  className="text-[#c4b5fd]"
                />

                <span className="font-mono text-[7px] tracking-[0.15em] text-[#c4b5fd]/60">
                  END-TO-END EXPERIMENTATION
                </span>
              </div>

              <p className="mt-5 text-[11px] leading-7 text-white/45">
                Product question → hypothesis → implementation →
                instrumentation → controlled launch → analysis →
                documented learning.
              </p>
            </div>
          </div>

          <div className="border-t border-white/[0.08]">
            {hyiProcess.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-70px",
                }}
                transition={{
                  duration: 0.5,
                }}
                className="group grid gap-5 border-b border-white/[0.08] py-9 transition-all duration-300 hover:pl-4 md:grid-cols-[70px_.75fr_1.25fr]"
              >
                <span className="font-mono text-[7px] text-[#a78bfa]/60">
                  {item.number}
                </span>

                <h3 className="text-2xl font-medium tracking-[-0.04em] text-white/80">
                  {item.title}
                </h3>

                <p className="text-[12px] leading-7 text-white/[0.5]">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ARCHITECTURE MODEL
========================================================= */

function ArchitectureModel() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-44">
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.05] blur-[240px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <Label number="06">
          Experiment Architecture
        </Label>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Behind one
              <span className="block text-white/20">
                simple experiment.
              </span>
            </h2>

            <p className="mt-8 max-w-[510px] text-[13px] leading-8 text-white/[0.55]">
              The user may only see a different button, onboarding
              flow or recommendation. Behind that experience is an
              experiment system responsible for assignment,
              configuration, event collection and analysis.
            </p>
          </div>

          <div className="relative rounded-[30px] border border-white/[0.08] bg-[#070707] p-5 md:p-8">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.03)_1px,transparent_1px)] bg-[size:34px_34px]" />

            <div className="relative space-y-3">
              {architectureLayers.map((layer, index) => (
                <motion.div
                  key={layer.number}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -30 : 30,
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
                  className="grid gap-4 rounded-[18px] border border-white/[0.07] bg-black/70 p-5 md:grid-cols-[70px_.65fr_1.35fr]"
                >
                  <span className="font-mono text-[7px] text-[#a78bfa]/60">
                    {layer.number}
                  </span>

                  <h3 className="text-[15px] font-medium text-white/70">
                    {layer.title}
                  </h3>

                  <p className="text-[11px] leading-6 text-white/40">
                    {layer.description}
                  </p>
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
   EVENT TELEMETRY MODEL
========================================================= */

function EventTelemetry() {
  const events = [
    ["EXPOSURE", "variant_b"],
    ["SCREEN_VIEW", "onboarding_02"],
    ["CTA_TAP", "continue"],
    ["FORM_START", "profile"],
    ["FORM_COMPLETE", "profile"],
    ["ACTIVATION", "success"],
  ];

  return (
    <section className="bg-[#090909] px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1450px]">
        <Label number="07">
          Event Instrumentation
        </Label>

        <div className="mt-10 grid items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
          <div className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-black">
            <div className="flex items-center justify-between border-b border-white/[0.07] p-6">
              <div className="flex items-center gap-3">
                <Activity
                  size={15}
                  className="text-[#c4b5fd]"
                />

                <span className="font-mono text-[7px] tracking-[0.15em] text-white/30">
                  MOBILE EVENT STREAM
                </span>
              </div>

              <LiveDot />
            </div>

            <div className="p-5 md:p-7">
              {events.map(([event, value], index) => (
                <motion.div
                  key={event}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="grid grid-cols-[45px_1fr_.8fr_70px] items-center border-b border-white/[0.06] py-5"
                >
                  <span className="font-mono text-[5px] text-white/20">
                    0{index + 1}
                  </span>

                  <span className="font-mono text-[7px] text-white/55">
                    {event}
                  </span>

                  <span className="font-mono text-[6px] text-[#c4b5fd]/55">
                    {value}
                  </span>

                  <span className="flex items-center justify-end gap-2 font-mono text-[5px] text-white/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8b5cf6]" />
                    OK
                  </span>
                </motion.div>
              ))}

              <div className="mt-6 flex h-[150px] items-end gap-1.5">
                {[
                  25, 40, 34, 55, 43, 62, 51, 70, 58, 77, 66, 83,
                  72, 88, 79, 93, 82, 90,
                ].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      height: 0,
                    }}
                    whileInView={{
                      height: `${height}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.03,
                    }}
                    className="flex-1 rounded-t-[2px] bg-gradient-to-t from-[#6d28d9]/20 to-[#c4b5fd]/70"
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              If you cannot
              <span className="block text-white/20">
                measure exposure,
              </span>
              you cannot interpret
              <span className="text-[#a78bfa]">
                {" "}the test.
              </span>
            </h2>

            <p className="mt-8 text-[13px] leading-8 text-white/[0.55]">
              Mobile experiments depend on trustworthy event
              instrumentation. HYI maps the experiment journey before
              launch so exposure, interaction, conversion and
              guardrail events have clear meanings.
            </p>

            <p className="mt-5 text-[13px] leading-8 text-white/[0.55]">
              This also helps separate experiment configuration from
              analytics logic. When the data model is explicit,
              debugging becomes easier and experiment results are
              easier for product, engineering and analytics teams to
              discuss together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   METRICS
========================================================= */

function MetricsSection() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1450px]">
        <Label number="08">
          Experiment Metrics
        </Label>

        <h2 className="mt-9 max-w-[1000px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
          Decide what success means
          <span className="block text-white/20">
            before seeing the result.
          </span>
        </h2>

        <p className="mt-8 max-w-[780px] text-[13px] leading-8 text-white/[0.55]">
          A primary metric should correspond to the central
          hypothesis. Supporting metrics help explain behavior, while
          guardrail metrics help reveal whether an apparent
          improvement is accompanied by an undesirable trade-off.
        </p>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="min-h-[240px] rounded-[22px] border border-white/[0.08] bg-[#090909] p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[6px] text-[#a78bfa]/55">
                  M / 0{index + 1}
                </span>

                <Gauge
                  size={15}
                  strokeWidth={1}
                  className="text-white/20"
                />
              </div>

              <h3 className="mt-12 text-2xl font-medium tracking-[-0.04em]">
                {metric.label}
              </h3>

              <p className="mt-5 text-[12px] leading-7 text-white/[0.5]">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STATISTICS EDUCATION
========================================================= */

function StatisticsSection() {
  return (
    <section className="relative overflow-hidden bg-[#090909] px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1450px]">
        <Label number="09">
          Reading Experiment Results
        </Label>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              A bigger number
              <span className="block text-white/20">
                is not automatically
              </span>
              a better conclusion.
            </h2>

            <p className="mt-8 max-w-[550px] text-[13px] leading-8 text-white/[0.55]">
              Experiment results contain uncertainty. Sample size,
              variation, exposure duration, metric definition and the
              analysis method all affect interpretation. Teams should
              avoid making a product decision from a graph that has
              only moved for a short period.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/[0.08] bg-black p-6 md:p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[7px] tracking-[0.15em] text-white/30">
                ILLUSTRATIVE EXPERIMENT
              </span>

              <BarChart3
                size={16}
                className="text-[#c4b5fd]"
              />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[18px] border border-white/[0.07] p-5">
                <span className="font-mono text-[6px] text-white/25">
                  CONTROL
                </span>

                <span className="mt-4 block text-5xl font-medium tracking-[-0.06em] text-white/50">
                  8.4%
                </span>
              </div>

              <div className="rounded-[18px] border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.05] p-5">
                <span className="font-mono text-[6px] text-[#c4b5fd]/50">
                  VARIANT
                </span>

                <span className="mt-4 block text-5xl font-medium tracking-[-0.06em] text-[#c4b5fd]">
                  9.1%
                </span>
              </div>
            </div>

            <div className="mt-4 rounded-[18px] border border-white/[0.07] p-6">
              <span className="font-mono text-[6px] text-white/25">
                IMPORTANT QUESTION
              </span>

              <p className="mt-4 text-[13px] leading-7 text-white/55">
                Is the observed difference sufficiently supported by
                the experiment design and analysis, or could the
                current difference reasonably be noise?
              </p>
            </div>

            <p className="mt-5 text-[10px] leading-6 text-white/30">
              Values shown here are illustrative interface examples,
              not customer results or guaranteed performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FEATURE FLAGS / ROLLOUT
========================================================= */

function RolloutSection() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1450px]">
        <Label number="10">
          Experiment To Rollout
        </Label>

        <div className="mt-10 grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Testing and
              <span className="block text-white/20">
                release are different.
              </span>
            </h2>

            <p className="mt-8 max-w-[520px] text-[13px] leading-8 text-white/[0.55]">
              An experiment answers a question. A rollout changes
              product availability. HYI keeps these concepts
              separated so a successful experiment can move into a
              deliberate release strategy instead of immediately
              becoming an uncontrolled global change.
            </p>
          </div>

          <div className="relative min-h-[600px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#070707]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/10" />
            <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8b5cf6]/20" />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#a78bfa]/20"
            />

            <div className="absolute left-1/2 top-1/2 flex h-[125px] w-[125px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#0d0913] shadow-[0_0_90px_rgba(124,58,237,.2)]">
              <Rocket
                size={30}
                strokeWidth={0.8}
                className="text-[#c4b5fd]"
              />
            </div>

            {[
              ["5%", "VALIDATE", "left-[12%] top-[18%]"],
              ["25%", "CONTROL", "right-[10%] top-[30%]"],
              ["50%", "EXPAND", "left-[10%] bottom-[25%]"],
              ["100%", "ROLLOUT", "right-[9%] bottom-[15%]"],
            ].map(([value, title, position]) => (
              <div
                key={value}
                className={`absolute ${position} rounded-[16px] border border-white/[0.08] bg-black/80 p-4 backdrop-blur-lg`}
              >
                <span className="block text-2xl font-medium tracking-[-0.04em] text-white/70">
                  {value}
                </span>

                <span className="mt-2 block font-mono text-[5px] tracking-[0.13em] text-white/25">
                  {title}
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
   GUARDRAILS
========================================================= */

function GuardrailsSection() {
  return (
    <section className="bg-[#090909] px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1450px]">
        <Label number="11">
          Experiment Guardrails
        </Label>

        <div className="mt-10 grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
              Improvement should not
              <span className="block text-white/20">
                hide product damage.
              </span>
            </h2>

            <p className="mt-8 max-w-[550px] text-[13px] leading-8 text-white/[0.55]">
              A treatment can improve one metric while making another
              part of the product worse. Guardrail metrics help teams
              watch for these trade-offs while an experiment is
              active.
            </p>
          </div>

          <div className="space-y-3">
            {[
              [
                "Crash health",
                "Check whether the treatment introduces instability or application failures.",
              ],
              [
                "Performance",
                "Observe whether additional logic negatively affects latency or responsiveness.",
              ],
              [
                "User friction",
                "Watch abandonment, error events or other indicators of unintended difficulty.",
              ],
              [
                "Business protection",
                "Track important downstream outcomes that should not be damaged by local optimization.",
              ],
              [
                "Experiment integrity",
                "Verify assignment, exposure and event collection remain consistent while the test runs.",
              ],
            ].map(([title, text], index) => (
              <div
                key={title}
                className="grid gap-4 rounded-[20px] border border-white/[0.08] bg-black p-6 sm:grid-cols-[55px_.7fr_1.3fr]"
              >
                <ShieldCheck
                  size={17}
                  strokeWidth={1}
                  className="text-[#a78bfa]"
                />

                <h3 className="text-[14px] font-medium text-white/65">
                  {title}
                </h3>

                <p className="text-[11px] leading-6 text-white/40">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   COMMON MISTAKES
========================================================= */

function CommonMistakes() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1450px]">
        <Label number="12">
          Common Experiment Mistakes
        </Label>

        <h2 className="mt-9 max-w-[1050px] text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
          A sophisticated dashboard
          <span className="block text-white/20">
            cannot repair a weak experiment.
          </span>
        </h2>

        <div className="mt-16 grid gap-x-12 border-t border-white/[0.08] md:grid-cols-2">
          {mistakes.map((item, index) => (
            <div
              key={item}
              className="flex min-h-[92px] items-center gap-5 border-b border-white/[0.08] py-6"
            >
              <span className="font-mono text-[6px] text-[#a78bfa]/55">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="text-[13px] leading-6 text-white/55">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   COLLABORATION
========================================================= */

function CollaborationSection() {
  return (
    <section className="bg-[#090909] px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1450px] overflow-hidden rounded-[32px] border border-white/[0.08] bg-black">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[650px]">
            <img
              src={images.team}
              alt="Product engineering and analytics collaboration"
              className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black" />

            <div className="absolute bottom-10 left-10">
              <div className="flex items-center gap-3">
                <Network
                  size={14}
                  className="text-[#c4b5fd]"
                />

                <span className="font-mono text-[7px] tracking-[0.15em] text-white/35">
                  PRODUCT + ENGINEERING + DATA
                </span>
              </div>
            </div>
          </div>

          <div className="flex min-h-[650px] flex-col justify-center p-8 md:p-14 lg:p-16">
            <Label number="13">
              HYI Collaboration Model
            </Label>

            <h2 className="mt-9 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-6xl">
              Experimentation is
              <span className="block text-white/20">
                a team capability.
              </span>
            </h2>

            <p className="mt-8 text-[13px] leading-8 text-white/[0.55]">
              Product teams define the decision and customer
              experience. Engineering teams make the treatment
              reliable. Data and analytics teams help define events,
              metrics and interpretation. HYI connects these
              responsibilities into a common experiment workflow.
            </p>

            <p className="mt-5 text-[13px] leading-8 text-white/[0.55]">
              This reduces the gap between what a product manager
              believes is being tested, what the application actually
              delivers and what the analytics system ultimately
              measures.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-2">
              {["PRODUCT", "ENGINEERING", "ANALYTICS"].map((item) => (
                <div
                  key={item}
                  className="rounded-[14px] border border-white/[0.07] p-4 text-center"
                >
                  <span className="font-mono text-[5px] tracking-[0.1em] text-white/30">
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
   FINAL LEARNING SUMMARY
========================================================= */

function LearningSummary() {
  const items = [
    "Begin with a product question.",
    "Write the hypothesis before implementation.",
    "Define primary and guardrail metrics before launch.",
    "Keep assignment and exposure logic reliable.",
    "Instrument the actual user journey.",
    "Account for app versions and mobile runtime differences.",
    "Do not make conclusions from raw percentage movement alone.",
    "Treat unsuccessful variants as potential learning.",
    "Document results so knowledge survives the experiment.",
    "Separate experiment decisions from rollout decisions.",
  ];

  return (
    <section className="relative overflow-hidden bg-black px-5 py-28 md:px-10 md:py-44">
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.06] blur-[220px]" />

      <div className="relative mx-auto max-w-[1450px]">
        <Label number="14">
          What To Remember
        </Label>

        <div className="mt-10 grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <h2 className="text-5xl font-semibold leading-[0.92] tracking-[-0.065em] md:text-7xl">
            Experimentation
            <span className="block text-white/20">
              is structured learning.
            </span>
          </h2>

          <div>
            {items.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-5 border-b border-white/[0.08] py-5"
              >
                <Check
                  size={13}
                  className="shrink-0 text-[#a78bfa]"
                />

                <span className="text-[13px] leading-7 text-white/55">
                  {item}
                </span>

                <span className="ml-auto font-mono text-[5px] text-white/15">
                  {String(index + 1).padStart(2, "0")}
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
   FINAL CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-40 md:px-10 md:py-60">
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.08] blur-[250px]" />

      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.025)_1px,transparent_1px)] bg-[size:55px_55px]"
        style={{
          maskImage:
            "radial-gradient(circle at center, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-[1450px] text-center">
        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-4 py-2">
          <TestTube2
            size={11}
            className="text-[#c4b5fd]"
          />

          <span className="font-mono text-[7px] tracking-[0.17em] text-white/40">
            HYI.AI / MOBILE EXPERIMENTATION
          </span>
        </div>

        <h2 className="mx-auto mt-10 max-w-[1300px] text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.09em]">
          Build the idea.
          <span className="block text-white/20">
            Test the behavior.
          </span>

          <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
            Learn what matters.
          </span>
        </h2>

        <p className="mx-auto mt-10 max-w-[760px] text-[14px] leading-8 text-white/[0.55]">
          HYI helps teams design mobile experiments where product
          hypotheses, application behavior, event instrumentation and
          analysis work together as one experimentation system.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#hyi-process"
            className="group flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-8 py-4 text-[12px] shadow-[0_0_50px_rgba(124,58,237,.25)] transition duration-300 hover:scale-[1.03]"
          >
            Explore HYI Process

            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

          <a
            href="#learn"
            className="flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 text-[12px] text-white/55 transition hover:border-[#8b5cf6]/35"
          >
            Read Fundamentals
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function MobileAppABTestingClient() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative overflow-hidden bg-black text-white ">
      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[9999] h-[2px] w-full bg-gradient-to-r from-[#6d28d9] via-[#c084fc] to-[#e879f9]"
      />

      <Hero />

      <LifecycleStrip />

      <LearningCenter />

      <MobileVsWeb />

      <ProductExperimentStory />

      <ExperimentTargets />

      <HYIProcess />

      <ArchitectureModel />

      <EventTelemetry />

      <MetricsSection />

      <StatisticsSection />

      <RolloutSection />

      <GuardrailsSection />

      <CommonMistakes />

      <CollaborationSection />

      <LearningSummary />

      <FinalCTA />
    </div>
  );
}