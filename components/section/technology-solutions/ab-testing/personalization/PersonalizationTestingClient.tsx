"use client";

import type { ElementType, ReactNode } from "react";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Check,
  CircleDot,
  Cpu,
  Database,
  Eye,
  GitBranch,
  Layers3,
  Network,
  RefreshCcw,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";


/* ============================================================
   DATA
============================================================ */

const signals = [
  {
    label: "Visitor context",
    value: "Returning user",
  },
  {
    label: "Device",
    value: "Mobile",
  },
  {
    label: "Journey",
    value: "Product discovery",
  },
  {
    label: "Behavior",
    value: "High intent",
  },
];


const experiences = [
  {
    id: "A",
    label: "Control",
    title: "Standard Experience",
    description:
      "The baseline experience remains available as the reference point for the personalization experiment.",
  },
  {
    id: "B",
    label: "Personalized",
    title: "Intent-led Experience",
    description:
      "Content hierarchy and messaging adapt to the audience hypothesis being evaluated.",
  },
  {
    id: "C",
    label: "Personalized",
    title: "Journey-led Experience",
    description:
      "The experience emphasizes actions relevant to the visitor's current stage in the product journey.",
  },
];


const testingAreas = [
  {
    Icon: Eye,
    number: "01",
    title: "Content",
    text:
      "Test whether different audience groups respond differently to headlines, explanations, recommendations or supporting content.",
  },
  {
    Icon: Layers3,
    number: "02",
    title: "Experience",
    text:
      "Evaluate alternative layouts, information hierarchy and interface patterns for defined visitor segments.",
  },
  {
    Icon: GitBranch,
    number: "03",
    title: "Journey",
    text:
      "Experiment with different next steps based on where a user appears to be in the customer or product journey.",
  },
  {
    Icon: Zap,
    number: "04",
    title: "Call to action",
    text:
      "Compare actions and prompts that reflect different levels of user intent instead of showing every visitor the same CTA.",
  },
];


const process = [
  {
    number: "01",
    eyebrow: "Understand",
    title: "Define the audience hypothesis",
    text:
      "HYI begins by identifying why a particular audience may need a different experience. Segmentation should support a real product hypothesis rather than simply creating more variants.",
  },
  {
    number: "02",
    eyebrow: "Design",
    title: "Build meaningful experiences",
    text:
      "We create controlled experience variations around messaging, content, journey structure or interaction patterns while preserving a clear baseline for comparison.",
  },
  {
    number: "03",
    eyebrow: "Experiment",
    title: "Route eligible visitors",
    text:
      "Users enter the appropriate experiment according to defined eligibility and assignment rules. Exposure is tracked so measurement reflects the experience actually received.",
  },
  {
    number: "04",
    eyebrow: "Measure",
    title: "Observe behavior",
    text:
      "Primary outcomes and guardrails are evaluated across the experiment. HYI looks beyond clicks to understand whether personalization improves the intended user outcome.",
  },
  {
    number: "05",
    eyebrow: "Learn",
    title: "Turn results into knowledge",
    text:
      "The experiment helps determine whether the personalization hypothesis should be expanded, refined, rejected or investigated through another controlled test.",
  },
];


const principles = [
  "Start with an audience hypothesis, not a collection of segments.",
  "Keep a meaningful control experience for comparison.",
  "Personalize only when context can improve the user decision.",
  "Track actual exposure to the personalized experience.",
  "Measure user outcomes instead of visual preference alone.",
  "Protect privacy and avoid unnecessary personal data.",
];


/* ============================================================
   SHARED
============================================================ */

function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] ${className}`}>
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

      <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#b69cff]">
        {number} / {children}
      </span>
    </div>
  );
}


function TinyLabel({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-white/30">
      {children}
    </span>
  );
}


function LiveDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute h-full w-full animate-ping rounded-full bg-[#a78bfa] opacity-40" />
      <span className="relative h-2 w-2 rounded-full bg-[#a78bfa]" />
    </span>
  );
}


/* ============================================================
   HERO
============================================================ */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">

      {/* ambient glow */}

      <div className="pointer-events-none absolute left-1/2 top-[-420px] h-[850px] w-[1000px] -translate-x-1/2 rounded-full bg-[#7c3aed]/[0.11] blur-[230px]" />


      {/* grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />


      <Container className="relative">

        {/* top line */}

        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">

          <div className="flex items-center gap-3">
            <LiveDot />

            <TinyLabel>
              HYI Personalization Testing
            </TinyLabel>
          </div>


          <div className="hidden items-center gap-7 md:flex">
            <TinyLabel>Audience</TinyLabel>
            <TinyLabel>Context</TinyLabel>
            <TinyLabel>Experience</TinyLabel>
            <TinyLabel>Evidence</TinyLabel>
          </div>

        </div>


        {/* headline */}

        <div className="mx-auto max-w-[1100px] pt-20 text-center md:pt-24">

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-4 py-2"
          >
            <BrainCircuit
              size={11}
              className="text-[#c4b5fd]"
            />

            <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[#c4b5fd]/70">
              Personalization Experimentation
            </span>
          </motion.div>


          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
            }}
            className="mt-9 text-[clamp(4rem,8.5vw,8rem)] font-semibold leading-[0.82] tracking-[-0.085em]"
          >
            One product.

            <span className="block text-white/20">
              Different context.
            </span>

            <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
              Better relevance.
            </span>
          </motion.h1>


          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="mx-auto mt-9 max-w-[760px] text-[14px] leading-8 text-white/[0.56]"
          >
            HYI Personalization Testing helps teams understand whether
            adapting an experience to meaningful audience context actually
            improves the user journey. We combine controlled experimentation,
            audience logic and behavioral measurement so personalization is
            evaluated with evidence instead of assumption.
          </motion.p>


          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
            }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >

            <a
              href="#personalization-model"
              className="flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-8 py-4 text-[12px] shadow-[0_0_45px_rgba(124,58,237,.22)]"
            >
              Explore the model

              <ArrowDown size={13} />
            </a>


            <a
              href="#hyi-process"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[12px] text-white/55"
            >
              How HYI works

              <ArrowRight size={13} />
            </a>

          </motion.div>

        </div>


        {/* model */}

        <div
          id="personalization-model"
          className="mt-20"
        >
          <PersonalizationEngine />
        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   UNIQUE MODEL
   SIGNAL -> INTELLIGENCE -> EXPERIENCE
============================================================ */

function PersonalizationEngine() {
  return (
    <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#08080a] p-5 md:p-7">

      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.08] blur-[120px]" />


      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.03) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 90%)",
        }}
      />


      <div className="relative">

        {/* toolbar */}

        <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">
              <Network
                size={13}
                className="text-[#c4b5fd]"
              />
            </div>


            <div>
              <TinyLabel>
                Personalization Intelligence
              </TinyLabel>

              <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.12em] text-white/20">
                Context → Decision → Experience
              </span>
            </div>

          </div>


          <div className="flex items-center gap-3">
            <LiveDot />

            <TinyLabel>
              Observing
            </TinyLabel>
          </div>

        </div>


        <div className="mt-7 grid items-stretch gap-4 lg:grid-cols-[.8fr_120px_1fr]">

          <VisitorSignals />

          <DecisionCore />

          <ExperienceOutput />

        </div>


        {/* learning loop */}

        <div className="mt-4 flex flex-col gap-4 rounded-[16px] border border-white/[0.07] bg-black/40 p-5 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-4">

            <RefreshCcw
              size={13}
              className="text-[#c4b5fd]"
            />

            <div>
              <TinyLabel>
                Learning loop
              </TinyLabel>

              <p className="mt-1 text-[10px] text-white/40">
                Measure response → evaluate hypothesis → improve next experiment
              </p>
            </div>

          </div>


          <div className="flex items-center gap-2">

            {[0, 1, 2, 3, 4].map((item) => (
              <motion.span
                key={item}
                animate={{
                  opacity: [0.15, 1, 0.15],
                }}
                transition={{
                  duration: 2,
                  delay: item * 0.22,
                  repeat: Infinity,
                }}
                className="h-1.5 w-7 rounded-full bg-[#8b5cf6]"
              />
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   VISITOR SIGNALS
============================================================ */

function VisitorSignals() {
  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-black/45 p-5">

      <div className="flex items-center justify-between">

        <TinyLabel>
          Context signals
        </TinyLabel>

        <Eye
          size={12}
          className="text-white/25"
        />

      </div>


      <div className="mt-7 flex items-center gap-4">

        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(139,92,246,0)",
              "0 0 30px rgba(139,92,246,.25)",
              "0 0 0 rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.06]"
        >
          <CircleDot
            size={17}
            className="text-[#c4b5fd]"
          />
        </motion.div>


        <div>

          <span className="text-[12px] font-medium text-white/70">
            Visitor session
          </span>

          <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.13em] text-[#a78bfa]/60">
            Eligible context
          </span>

        </div>

      </div>


      <div className="mt-7 space-y-2">

        {signals.map((signal, index) => (
          <motion.div
            key={signal.label}
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
              delay: index * 0.08,
            }}
            className="rounded-[12px] border border-white/[0.06] bg-white/[0.015] p-4"
          >

            <TinyLabel>
              {signal.label}
            </TinyLabel>

            <span className="mt-2 block text-[10px] text-white/48">
              {signal.value}
            </span>

          </motion.div>
        ))}

      </div>


      <p className="mt-6 border-t border-white/[0.07] pt-5 text-[9px] leading-5 text-white/30">
        Example context is illustrative. Personalization should use only
        signals appropriate to the product, consent model and privacy
        requirements.
      </p>

    </div>
  );
}


/* ============================================================
   DECISION CORE
============================================================ */

function DecisionCore() {
  return (
    <div className="flex min-h-[470px] flex-col items-center justify-center">

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative flex h-[105px] w-[105px] items-center justify-center rounded-full border border-dashed border-[#8b5cf6]/35"
      >

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[10px] rounded-full border border-[#a78bfa]/20"
        />


        <div className="absolute -top-1 h-2 w-2 rounded-full bg-[#c4b5fd] shadow-[0_0_14px_rgba(196,181,253,.8)]" />


        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex h-[62px] w-[62px] items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#0d0915]"
        >

          <BrainCircuit
            size={21}
            strokeWidth={1}
            className="text-[#c4b5fd]"
          />

        </motion.div>

      </motion.div>


      <span className="mt-5 text-center font-mono text-[6px] uppercase tracking-[0.15em] text-[#c4b5fd]/60">
        Decision Engine
      </span>


      <span className="mt-2 text-center text-[9px] text-white/25">
        Evaluate context
      </span>


      <div className="mt-7 flex gap-2">

        {[0, 1, 2].map((item) => (
          <motion.div
            key={item}
            animate={{
              opacity: [0.15, 1, 0.15],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 1.8,
              delay: item * 0.2,
              repeat: Infinity,
            }}
            className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]"
          />
        ))}

      </div>

    </div>
  );
}


/* ============================================================
   EXPERIENCE OUTPUT
============================================================ */

function ExperienceOutput() {
  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-black/45 p-5">

      <div className="flex items-center justify-between">

        <TinyLabel>
          Experience candidates
        </TinyLabel>

        <GitBranch
          size={12}
          className="text-[#c4b5fd]"
        />

      </div>


      <div className="mt-6 space-y-3">

        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{
              opacity: 0,
              x: 12,
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
            whileHover={{
              x: 3,
            }}
            className={`relative overflow-hidden rounded-[14px] border p-4 ${
              index === 1
                ? "border-[#8b5cf6]/30 bg-[#8b5cf6]/[0.045]"
                : "border-white/[0.06] bg-white/[0.015]"
            }`}
          >

            {index === 1 && (
              <div className="absolute right-[-40px] top-[-40px] h-[100px] w-[100px] rounded-full bg-[#8b5cf6]/15 blur-[45px]" />
            )}


            <div className="relative flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-[8px] border ${
                    index === 1
                      ? "border-[#8b5cf6]/30 bg-[#8b5cf6]/10"
                      : "border-white/[0.07] bg-white/[0.02]"
                  }`}
                >
                  <span className="font-mono text-[7px] text-white/50">
                    {experience.id}
                  </span>
                </div>


                <div>

                  <TinyLabel>
                    {experience.label}
                  </TinyLabel>

                  <span className="mt-1 block text-[10px] text-white/60">
                    {experience.title}
                  </span>

                </div>

              </div>


              {index === 1 && (
                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="h-2 w-2 rounded-full bg-[#a78bfa]"
                />
              )}

            </div>


            <p className="relative mt-4 text-[9px] leading-5 text-white/35">
              {experience.description}
            </p>

          </motion.div>
        ))}

      </div>

    </div>
  );
}


/* ============================================================
   MARQUEE
============================================================ */

function PersonalizationStrip() {
  const items = [
    "AUDIENCE",
    "CONTEXT",
    "HYPOTHESIS",
    "EXPERIENCE",
    "ASSIGNMENT",
    "EXPOSURE",
    "MEASUREMENT",
    "LEARNING",
  ];


  return (
    <div className="overflow-hidden border-y border-white/[0.07] bg-[#060607] py-5">

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max"
      >

        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center"
          >

            <span className="px-8 font-mono text-[7px] tracking-[0.18em] text-white/25">
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
   WHAT IS PERSONALIZATION TESTING
============================================================ */

function Introduction() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10 md:py-36">

      <Container>

        <SectionLabel number="01">
          PERSONALIZATION TESTING
        </SectionLabel>


        <div className="mt-11 grid gap-14 lg:grid-cols-[1.05fr_.95fr]">

          <div>

            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              Personalization

              <span className="block text-white/20">
                should solve
              </span>

              a real difference.
            </h2>

          </div>


          <div className="self-end">

            <p className="text-[14px] leading-8 text-white/[0.58]">
              Personalization testing evaluates whether a different
              experience works better for a defined audience or context.
              Instead of assuming that a returning visitor, new visitor,
              high-intent user or different journey stage requires a
              different interface, the hypothesis is tested through
              controlled comparison.
            </p>


            <p className="mt-6 text-[13px] leading-8 text-white/[0.43]">
              This distinction matters. Personalization is not automatically
              valuable because an interface changes. It becomes useful when
              the adapted experience improves a meaningful outcome without
              introducing unacceptable trade-offs.
            </p>

          </div>

        </div>


        {/* comparison */}

        <div className="mt-16 grid gap-[1px] overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-2">

          <article className="bg-[#08080a] p-7 md:p-9">

            <TinyLabel>
              Traditional experience
            </TinyLabel>


            <h3 className="mt-9 text-3xl font-medium tracking-[-0.05em] text-white/70">
              One experience
              <span className="block text-white/20">
                for every visitor.
              </span>
            </h3>


            <p className="mt-6 max-w-[500px] text-[12px] leading-7 text-white/[0.45]">
              Every eligible user receives the same content, structure and
              call to action regardless of meaningful differences in
              context or journey.
            </p>

          </article>


          <article className="relative overflow-hidden bg-[#0a0810] p-7 md:p-9">

            <div className="absolute right-[-100px] top-[-100px] h-[260px] w-[260px] rounded-full bg-[#7c3aed]/15 blur-[100px]" />


            <div className="relative">

              <TinyLabel>
                Tested personalization
              </TinyLabel>


              <h3 className="mt-9 text-3xl font-medium tracking-[-0.05em]">
                Context becomes

                <span className="block text-[#b69cff]">
                  a testable hypothesis.
                </span>
              </h3>


              <p className="mt-6 max-w-[500px] text-[12px] leading-7 text-white/[0.5]">
                Defined audiences can receive controlled experience
                variations while a baseline remains available for
                comparison and measurement.
              </p>

            </div>

          </article>

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   TESTING AREAS
============================================================ */

function TestingAreas() {
  return (
    <section className="bg-black px-5 py-28 md:px-10 md:py-36">

      <Container>

        <SectionLabel number="02">
          WHAT CAN BE TESTED
        </SectionLabel>


        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_.7fr]">

          <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
            Personalize the

            <span className="block text-white/20">
              part that matters.
            </span>
          </h2>


          <p className="self-end text-[13px] leading-8 text-white/[0.48]">
            HYI focuses personalization experiments on meaningful
            experience differences rather than changing everything at
            once. A narrower hypothesis usually creates clearer learning.
          </p>

        </div>


        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-4">

          {testingAreas.map(
            (
              {
                Icon,
                number,
                title,
                text,
              },
              index,
            ) => (
              <motion.article
                key={title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group min-h-[310px] rounded-[20px] border border-white/[0.08] bg-[#08080a] p-6"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05]">

                    <Icon
                      size={15}
                      strokeWidth={1.2}
                      className="text-[#c4b5fd]"
                    />

                  </div>


                  <span className="font-mono text-[6px] text-white/20">
                    {number}
                  </span>

                </div>


                <h3 className="mt-14 text-2xl font-medium tracking-[-0.04em]">
                  {title}
                </h3>


                <p className="mt-5 text-[12px] leading-7 text-white/[0.48]">
                  {text}
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
   HYI PROCESS
============================================================ */

function HYIProcess() {
  return (
    <section
      id="hyi-process"
      className="bg-[#060608] px-5 py-28 md:px-10 md:py-36"
    >

      <Container>

        <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">

          {/* left */}

          <div>

            <SectionLabel number="03">
              HOW HYI WORKS
            </SectionLabel>


            <h2 className="mt-10 text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              Context into

              <span className="block text-white/20">
                controlled
              </span>

              learning.
            </h2>


            <p className="mt-8 max-w-[520px] text-[13px] leading-8 text-white/[0.5]">
              HYI combines audience strategy, experience design,
              experimentation and analytics into one personalization
              workflow. The goal is not to create as many segments as
              possible. The goal is to discover where relevance actually
              improves the experience.
            </p>


            <div className="mt-8 flex items-center gap-3">

              <BrainCircuit
                size={14}
                className="text-[#c4b5fd]"
              />

              <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-[#c4b5fd]/55">
                Audience → Experience → Evidence
              </span>

            </div>

          </div>


          {/* right */}

          <div className="border-t border-white/[0.08]">

            {process.map((item, index) => (
              <motion.article
                key={item.number}
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
                className="grid gap-5 border-b border-white/[0.08] py-7 md:grid-cols-[55px_.8fr_1.2fr]"
              >

                <span className="font-mono text-[7px] text-[#a78bfa]/60">
                  {item.number}
                </span>


                <div>

                  <TinyLabel>
                    {item.eyebrow}
                  </TinyLabel>

                  <h3 className="mt-2 text-lg font-medium tracking-[-0.03em] text-white/75">
                    {item.title}
                  </h3>

                </div>


                <p className="text-[12px] leading-7 text-white/[0.46]">
                  {item.text}
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
   PRINCIPLES
============================================================ */

function Principles() {
  return (
    <section className="bg-black px-5 py-28 md:px-10 md:py-36">

      <Container>

        <SectionLabel number="04">
          RESPONSIBLE PERSONALIZATION
        </SectionLabel>


        <div className="mt-10 grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

          <div>

            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              Relevant.

              <span className="block text-white/20">
                Measurable.
              </span>

              Respectful.
            </h2>


            <p className="mt-7 max-w-[500px] text-[13px] leading-8 text-white/[0.46]">
              Good personalization should make an experience more useful,
              not more invasive. HYI designs experiments around necessary
              context, clear measurement and appropriate data boundaries.
            </p>

          </div>


          <div className="border-t border-white/[0.08]">

            {principles.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 border-b border-white/[0.08] py-5"
              >

                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04]">

                  <Check
                    size={10}
                    className="text-[#c4b5fd]"
                  />

                </div>


                <p className="text-[12px] leading-7 text-white/[0.52]">
                  {item}
                </p>


                <span className="ml-auto hidden font-mono text-[6px] text-white/15 sm:block">
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
   FINAL CTA
============================================================ */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-36 md:px-10 md:py-44">

      <div className="absolute left-1/2 top-1/2 h-[650px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.09] blur-[220px]" />


      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.025) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 76%)",
        }}
      />


      <Container className="relative text-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-4 py-2"
        >

          <BrainCircuit
            size={11}
            className="text-[#c4b5fd]"
          />

          <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-[#c4b5fd]/65">
            HYI Personalization Testing
          </span>

        </motion.div>


        <motion.h2
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
            delay: 0.08,
          }}
          className="mx-auto mt-9 max-w-[1000px] text-[clamp(3.7rem,7vw,7rem)] font-semibold leading-[0.83] tracking-[-0.08em]"
        >
          Make experiences

          <span className="block text-white/20">
            more relevant.
          </span>

          <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
            Prove that they are.
          </span>
        </motion.h2>


        <p className="mx-auto mt-8 max-w-[680px] text-[13px] leading-8 text-white/[0.5]">
          HYI helps teams move from broad personalization ideas to
          controlled experiments that reveal when context genuinely
          improves the user experience.
        </p>


        <div className="mt-10 flex flex-wrap justify-center gap-3">

          <a
            href="#hyi-process"
            className="flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-9 py-4 text-[12px] shadow-[0_0_45px_rgba(124,58,237,.22)]"
          >
            Explore HYI approach

            <ArrowRight size={13} />
          </a>


          <a
            href="#personalization-model"
            className="flex items-center gap-4 rounded-full border border-white/10 px-9 py-4 text-[12px] text-white/50"
          >
            View model

            <Network size={13} />
          </a>

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   PAGE
============================================================ */

export default function PersonalizationTestingClient() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  return (
    <div className="overflow-x-hidden bg-[#050505] text-white">

      {/* scroll progress */}

      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#6d28d9] via-[#a855f7] to-[#e879f9]"
      />


      <Hero />

      <PersonalizationStrip />

      <Introduction />

      <TestingAreas />

      <HYIProcess />

      <Principles />

      <FinalCTA />

    </div>
  );
}