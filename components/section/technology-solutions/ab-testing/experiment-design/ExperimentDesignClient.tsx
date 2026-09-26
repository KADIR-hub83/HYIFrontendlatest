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
  Check,
  CircleDot,
  Eye,
  Gauge,
  GitBranch,
  Layers3,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";


/* =========================================================
   DATA
========================================================= */

const blueprintSteps = [
  {
    number: "01",
    Icon: CircleDot,
    title: "Question",
    text:
      "Start with the product or business question that the experiment needs to answer.",
  },
  {
    number: "02",
    Icon: GitBranch,
    title: "Hypothesis",
    text:
      "Translate the question into a specific, testable expectation about user behavior.",
  },
  {
    number: "03",
    Icon: Layers3,
    title: "Variants",
    text:
      "Design controlled experiences where the intended experimental difference is clear.",
  },
  {
    number: "04",
    Icon: Eye,
    title: "Audience",
    text:
      "Define who is eligible for the experiment and how exposure will be assigned.",
  },
  {
    number: "05",
    Icon: Gauge,
    title: "Measurement",
    text:
      "Choose the primary outcome and supporting guardrails before the experiment begins.",
  },
  {
    number: "06",
    Icon: ShieldCheck,
    title: "Decision",
    text:
      "Define how evidence will be interpreted and what decisions the result can support.",
  },
];


const principles = [
  {
    number: "01",
    title: "One clear question",
    text:
      "Every experiment should begin with a decision-relevant question rather than a collection of unrelated changes.",
  },
  {
    number: "02",
    title: "Predefined measurement",
    text:
      "Primary metrics, supporting metrics and important guardrails should be selected before results are inspected.",
  },
  {
    number: "03",
    title: "Controlled exposure",
    text:
      "Eligibility and assignment rules should be consistent so observed differences can be interpreted more confidently.",
  },
  {
    number: "04",
    title: "Documented learning",
    text:
      "The experiment should produce reusable knowledge even when the expected outcome does not appear.",
  },
];


const hyiProcess = [
  {
    number: "01",
    label: "Frame",
    title: "Understand the decision",
    text:
      "HYI first clarifies the product decision, user behavior and business context behind the proposed experiment.",
  },
  {
    number: "02",
    label: "Design",
    title: "Build the experiment specification",
    text:
      "We define the hypothesis, variants, eligible audience, exposure logic, metrics and important guardrails.",
  },
  {
    number: "03",
    label: "Validate",
    title: "Check experiment readiness",
    text:
      "Before launch, implementation and measurement assumptions are reviewed so the test can answer the intended question.",
  },
  {
    number: "04",
    label: "Learn",
    title: "Connect evidence to action",
    text:
      "Results are interpreted against the original hypothesis and translated into product learning and the next decision.",
  },
];


/* =========================================================
   SHARED COMPONENTS
========================================================= */

function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1380px] ${className}`}>
      {children}
    </div>
  );
}


function Eyebrow({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-[1px] w-7 bg-white/40" />

      <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/40">
        {children}
      </span>
    </div>
  );
}


function MicroLabel({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="font-mono text-[6px] uppercase tracking-[0.14em] text-white/25">
      {children}
    </span>
  );
}


function StatusDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-20" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-white/70" />
    </span>
  );
}


/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">

      {/* soft monochrome glow */}

      <div className="pointer-events-none absolute left-1/2 top-[-450px] h-[900px] w-[1000px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[220px]" />


      {/* background grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />


      <Container className="relative">

        {/* top utility row */}

        <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">

          <div className="flex items-center gap-3">
            <StatusDot />

            <MicroLabel>
              HYI / Experiment Design
            </MicroLabel>
          </div>


          <div className="hidden items-center gap-7 md:flex">
            <MicroLabel>Question</MicroLabel>
            <MicroLabel>Hypothesis</MicroLabel>
            <MicroLabel>Measurement</MicroLabel>
            <MicroLabel>Decision</MicroLabel>
          </div>

        </div>


        {/* headline */}

        <div className="mx-auto max-w-[1100px] pt-20 text-center">

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2"
          >
            <Workflow
              size={11}
              className="text-white/60"
            />

            <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/45">
              Experiment Architecture
            </span>
          </motion.div>


          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
            }}
            className="mt-9 text-[clamp(4rem,8.5vw,8.2rem)] font-semibold leading-[0.82] tracking-[-0.085em]"
          >
            Good experiments

            <span className="block text-white/20">
              start before
            </span>

            <span className="block text-white/75">
              the test begins.
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
            className="mx-auto mt-9 max-w-[760px] text-[14px] leading-8 text-white/[0.54]"
          >
            Experiment design is the structure behind trustworthy
            experimentation. HYI helps teams move from an unclear idea
            to a defined hypothesis, controlled variants, eligible
            audience, meaningful measurement and an explicit decision
            framework.
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
              href="#blueprint"
              className="flex items-center gap-4 rounded-full bg-[#ededed] px-8 py-4 text-[11px] font-medium text-black transition hover:bg-white"
            >
              Explore blueprint

              <ArrowDown size={13} />
            </a>

            <a
              href="#hyi-process"
              className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-[11px] text-white/55 transition hover:bg-white/[0.05]"
            >
              HYI methodology

              <ArrowRight size={13} />
            </a>
          </motion.div>

        </div>


        <div
          id="blueprint"
          className="mt-20"
        >
          <ExperimentBlueprint />
        </div>

      </Container>

    </section>
  );
}


/* =========================================================
   UNIQUE EXPERIMENT BLUEPRINT MODEL
========================================================= */

function ExperimentBlueprint() {
  return (
    <div className="relative mx-auto max-w-[1150px] overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#090909] p-5 md:p-7">

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />


      <div className="relative">

        {/* toolbar */}

        <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.03]">
              <Network
                size={13}
                className="text-white/60"
              />
            </div>


            <div>
              <MicroLabel>
                Experiment Blueprint
              </MicroLabel>

              <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.1em] text-white/18">
                Design before exposure
              </span>
            </div>

          </div>


          <div className="flex items-center gap-3">
            <StatusDot />

            <MicroLabel>
              Draft specification
            </MicroLabel>
          </div>

        </div>


        {/* main model */}

        <div className="mt-6 grid gap-4 lg:grid-cols-[.9fr_1.1fr]">

          <HypothesisCard />

          <DecisionArchitecture />

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   HYPOTHESIS CARD
========================================================= */

function HypothesisCard() {
  return (
    <div className="rounded-[20px] border border-white/[0.08] bg-[#060606]/90 p-6 md:p-7">

      <div className="flex items-center justify-between">
        <MicroLabel>
          01 / Hypothesis
        </MicroLabel>

        <GitBranch
          size={12}
          className="text-white/30"
        />
      </div>


      <h3 className="mt-8 max-w-[420px] text-2xl font-medium leading-tight tracking-[-0.04em] text-white/85">
        A precise statement about what may change and why.
      </h3>


      <div className="mt-7 space-y-3">

        <BlueprintField
          label="Observation"
          value="Users encounter friction before completing the target action."
        />

        <BlueprintField
          label="Change"
          value="Introduce a clearer experience for the decision point."
        />

        <BlueprintField
          label="Expected effect"
          value="Eligible users may complete the intended action more often."
        />

      </div>


      <div className="mt-6 border-t border-white/[0.07] pt-5">

        <p className="text-[11px] leading-6 text-white/35">
          The hypothesis is written before results exist. Its purpose is
          to make the experiment falsifiable and keep interpretation
          connected to the original question.
        </p>

      </div>

    </div>
  );
}


function BlueprintField({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{
        x: 3,
      }}
      className="rounded-[13px] border border-white/[0.07] bg-white/[0.018] p-4"
    >
      <MicroLabel>
        {label}
      </MicroLabel>

      <p className="mt-2 text-[10px] leading-5 text-white/45">
        {value}
      </p>
    </motion.div>
  );
}


/* =========================================================
   DECISION ARCHITECTURE MODEL
========================================================= */

function DecisionArchitecture() {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#070707] p-6 md:p-7">

      <div className="flex items-center justify-between">

        <div>
          <MicroLabel>
            02 / Decision Architecture
          </MicroLabel>

          <p className="mt-2 text-[10px] text-white/25">
            Question → exposure → evidence → decision
          </p>
        </div>

        <Activity
          size={13}
          className="text-white/35"
        />

      </div>


      {/* diagram */}

      <div className="relative mt-10 min-h-[300px]">

        <svg
          viewBox="0 0 700 300"
          className="pointer-events-none absolute inset-0 h-full w-full"
          fill="none"
        >
          <motion.path
            d="M110 150 H260"
            stroke="rgba(255,255,255,.16)"
            strokeWidth="1"
            strokeDasharray="5 8"
            animate={{
              strokeDashoffset: [0, -35],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.path
            d="M350 150 H500"
            stroke="rgba(255,255,255,.16)"
            strokeWidth="1"
            strokeDasharray="5 8"
            animate={{
              strokeDashoffset: [0, -35],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.path
            d="M305 110 V55"
            stroke="rgba(255,255,255,.12)"
            strokeWidth="1"
            strokeDasharray="4 7"
            animate={{
              strokeDashoffset: [0, -25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.path
            d="M305 190 V245"
            stroke="rgba(255,255,255,.12)"
            strokeWidth="1"
            strokeDasharray="4 7"
            animate={{
              strokeDashoffset: [0, 25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>


        <DiagramNode
          className="left-0 top-1/2 -translate-y-1/2"
          label="Audience"
          value="Eligible users"
          Icon={Eye}
        />


        <DiagramNode
          className="left-1/2 top-0 -translate-x-1/2"
          label="Primary"
          value="Target metric"
          Icon={Gauge}
        />


        <DiagramNode
          className="bottom-0 left-1/2 -translate-x-1/2"
          label="Guardrail"
          value="Protect quality"
          Icon={ShieldCheck}
        />


        <DiagramNode
          className="right-0 top-1/2 -translate-y-1/2"
          label="Decision"
          value="Interpret evidence"
          Icon={Check}
        />


        {/* center */}

        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(255,255,255,0)",
              "0 0 35px rgba(255,255,255,.07)",
              "0 0 0 rgba(255,255,255,0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 flex h-[94px] w-[94px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/15 bg-[#0d0d0d]"
        >
          <Workflow
            size={18}
            strokeWidth={1.3}
            className="text-white/70"
          />

          <span className="mt-2 font-mono text-[5px] uppercase tracking-[0.12em] text-white/35">
            Experiment
          </span>
        </motion.div>

      </div>

    </div>
  );
}


function DiagramNode({
  className,
  label,
  value,
  Icon,
}: {
  className: string;
  label: string;
  value: string;
  Icon: ElementType;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -3, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute z-10 w-[120px] rounded-[13px] border border-white/[0.09] bg-[#0b0b0b] p-4 ${className}`}
    >
      <div className="flex items-center justify-between">
        <MicroLabel>
          {label}
        </MicroLabel>

        <Icon
          size={10}
          className="text-white/30"
        />
      </div>

      <span className="mt-2 block text-[9px] text-white/55">
        {value}
      </span>
    </motion.div>
  );
}


/* =========================================================
   INTRO
========================================================= */

function ExperimentIntro() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10 md:py-32">

      <Container>

        <Eyebrow>
          01 / WHY DESIGN MATTERS
        </Eyebrow>


        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_.85fr]">

          <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
            Testing is not

            <span className="block text-white/20">
              just launching
            </span>

            two versions.
          </h2>


          <div className="self-end">

            <p className="text-[14px] leading-8 text-white/[0.56]">
              A useful experiment connects a question to a measurable
              decision. Before traffic is exposed, teams need to know
              what they are changing, why the change could matter, who
              should see it and which outcome will be used to evaluate
              the hypothesis.
            </p>


            <p className="mt-5 text-[12px] leading-7 text-white/[0.4]">
              Experiment design creates that structure. It reduces
              ambiguity after launch and helps teams distinguish
              evidence from convenient interpretation.
            </p>

          </div>

        </div>

      </Container>

    </section>
  );
}


/* =========================================================
   BLUEPRINT STEPS
========================================================= */

function BlueprintSteps() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10 md:py-32">

      <Container>

        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">

          <div>
            <Eyebrow>
              02 / EXPERIMENT BLUEPRINT
            </Eyebrow>

            <h2 className="mt-8 max-w-[700px] text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-6xl">
              Six decisions before
              <span className="text-white/20"> exposure.</span>
            </h2>
          </div>


          <p className="max-w-[420px] text-[12px] leading-7 text-white/40">
            HYI treats experiment design as a connected system. Each
            decision makes the final result easier to interpret.
          </p>

        </div>


        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">

          {blueprintSteps.map(
            (
              {
                number,
                Icon,
                title,
                text,
              },
              index,
            ) => (
              <motion.article
                key={title}
                initial={{
                  opacity: 0,
                  y: 18,
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
                whileHover={{
                  y: -3,
                }}
                className="min-h-[235px] rounded-[18px] border border-white/[0.08] bg-[#050505] p-6"
              >
                <div className="flex items-center justify-between">

                  <div className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-white/10 bg-white/[0.025]">
                    <Icon
                      size={14}
                      strokeWidth={1.3}
                      className="text-white/55"
                    />
                  </div>

                  <span className="font-mono text-[6px] text-white/20">
                    {number}
                  </span>

                </div>


                <h3 className="mt-8 text-xl font-medium tracking-[-0.035em] text-white/80">
                  {title}
                </h3>


                <p className="mt-4 text-[11px] leading-6 text-white/[0.42]">
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


/* =========================================================
   HYI PROCESS
========================================================= */

function HYIProcess() {
  return (
    <section
      id="hyi-process"
      className="bg-[#050505] px-5 py-28 md:px-10 md:py-32"
    >

      <Container>

        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

          <div>

            <Eyebrow>
              03 / HOW HYI WORKS
            </Eyebrow>


            <h2 className="mt-9 text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
              From idea

              <span className="block text-white/20">
                to evidence.
              </span>
            </h2>


            <p className="mt-7 max-w-[480px] text-[12px] leading-7 text-white/[0.44]">
              HYI works with product, design, engineering and analytics
              teams to turn an experiment request into an executable
              learning plan.
            </p>

          </div>


          <div className="border-t border-white/[0.08]">

            {hyiProcess.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  x: 15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                className="grid gap-4 border-b border-white/[0.08] py-7 md:grid-cols-[45px_.7fr_1.2fr]"
              >
                <span className="font-mono text-[7px] text-white/20">
                  {item.number}
                </span>


                <div>
                  <MicroLabel>
                    {item.label}
                  </MicroLabel>

                  <h3 className="mt-2 text-[15px] font-medium tracking-[-0.025em] text-white/75">
                    {item.title}
                  </h3>
                </div>


                <p className="text-[11px] leading-6 text-white/[0.43]">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}


/* =========================================================
   PRINCIPLES
========================================================= */

function Principles() {
  return (
    <section className="border-y border-white/[0.07] bg-[#080808] px-5 py-28 md:px-10 md:py-32">

      <Container>

        <Eyebrow>
          04 / DESIGN PRINCIPLES
        </Eyebrow>


        <div className="mt-10 grid gap-12 lg:grid-cols-[.75fr_1.25fr]">

          <div>

            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-6xl">
              Design for
              <span className="block text-white/20">
                learning.
              </span>
            </h2>


            <p className="mt-7 max-w-[430px] text-[12px] leading-7 text-white/40">
              The goal is not simply to produce a winner. A well-designed
              experiment should reduce uncertainty and create knowledge
              the team can use again.
            </p>

          </div>


          <div className="grid gap-3 sm:grid-cols-2">

            {principles.map((item) => (
              <div
                key={item.number}
                className="rounded-[17px] border border-white/[0.08] bg-[#050505] p-6"
              >
                <div className="flex items-center justify-between">

                  <span className="font-mono text-[6px] text-white/20">
                    {item.number}
                  </span>

                  <Check
                    size={11}
                    className="text-white/30"
                  />

                </div>


                <h3 className="mt-7 text-lg font-medium tracking-[-0.03em] text-white/75">
                  {item.title}
                </h3>


                <p className="mt-3 text-[10px] leading-6 text-white/[0.4]">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}


/* =========================================================
   FINAL CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 py-32 md:px-10 md:py-40">

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[180px]" />


      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 76%)",
        }}
      />


      <Container className="relative text-center">

        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2">
          <Workflow
            size={11}
            className="text-white/55"
          />

          <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/40">
            HYI Experiment Design
          </span>
        </div>


        <motion.h2
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
          className="mx-auto mt-9 max-w-[950px] text-[clamp(3.6rem,7vw,6.8rem)] font-semibold leading-[0.84] tracking-[-0.075em]"
        >
          Ask a better question.

          <span className="block text-white/20">
            Design a better test.
          </span>
        </motion.h2>


        <p className="mx-auto mt-8 max-w-[620px] text-[12px] leading-7 text-white/[0.44]">
          HYI helps teams structure experiments around clear hypotheses,
          reliable measurement and decisions that can be connected back
          to evidence.
        </p>


        <a
          href="#blueprint"
          className="mx-auto mt-9 flex w-fit items-center gap-4 rounded-full bg-[#ededed] px-9 py-4 text-[11px] font-medium text-black transition hover:bg-white"
        >
          Explore experiment design

          <ArrowRight size={13} />
        </a>

      </Container>

    </section>
  );
}


/* =========================================================
   PAGE
========================================================= */

export default function ExperimentDesignClient() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(
    scrollYProgress,
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    },
  );


  return (
    <div className="overflow-x-hidden bg-[#050505] text-white">

      {/* monochrome progress line */}

      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-white/70"
      />


      <Hero />

      <ExperimentIntro />

      <BlueprintSteps />

      <HYIProcess />

      <Principles />

      <FinalCTA />

    </div>
  );
}