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
  Workflow,
  Zap,
} from "lucide-react";


/* ============================================================
   DATA
============================================================ */

const variables = [
  {
    id: "01",
    Icon: Layers3,
    label: "Variable 01",
    title: "Headline",
    variants: ["Headline A", "Headline B"],
    text:
      "Compare different messaging approaches while other page elements also vary inside the same experiment.",
  },
  {
    id: "02",
    Icon: Eye,
    label: "Variable 02",
    title: "Visual",
    variants: ["Visual A", "Visual B"],
    text:
      "Test whether different visual treatments change how users understand or interact with the experience.",
  },
  {
    id: "03",
    Icon: Zap,
    label: "Variable 03",
    title: "CTA",
    variants: ["CTA A", "CTA B"],
    text:
      "Evaluate alternative actions or labels and understand how they behave alongside other experimental variables.",
  },
];


const combinations = [
  {
    id: "C01",
    headline: "A",
    visual: "A",
    cta: "A",
  },
  {
    id: "C02",
    headline: "A",
    visual: "A",
    cta: "B",
  },
  {
    id: "C03",
    headline: "A",
    visual: "B",
    cta: "A",
  },
  {
    id: "C04",
    headline: "A",
    visual: "B",
    cta: "B",
  },
  {
    id: "C05",
    headline: "B",
    visual: "A",
    cta: "A",
  },
  {
    id: "C06",
    headline: "B",
    visual: "A",
    cta: "B",
  },
  {
    id: "C07",
    headline: "B",
    visual: "B",
    cta: "A",
  },
  {
    id: "C08",
    headline: "B",
    visual: "B",
    cta: "B",
  },
];


const process = [
  {
    number: "01",
    phase: "Question",
    title: "Define what needs to be learned",
    text:
      "HYI starts with a clear product question. Multivariate testing is useful when the team needs to understand several experience elements and how their combinations may influence the target outcome.",
  },
  {
    number: "02",
    phase: "Variables",
    title: "Choose meaningful elements",
    text:
      "We select a limited set of elements worth testing. Each variable needs a clear reason for inclusion so the experiment remains interpretable rather than becoming a collection of random changes.",
  },
  {
    number: "03",
    phase: "Combinations",
    title: "Create the experiment matrix",
    text:
      "Variants are combined into experimental experiences. The resulting matrix makes it possible to study both individual element effects and potential interactions between elements.",
  },
  {
    number: "04",
    phase: "Measure",
    title: "Observe outcomes",
    text:
      "Eligible traffic is assigned according to the experiment design while exposure and predefined outcome metrics are collected consistently across combinations.",
  },
  {
    number: "05",
    phase: "Learn",
    title: "Interpret the pattern",
    text:
      "HYI evaluates which elements appear meaningful, whether combinations behave differently and what the evidence suggests for the next design or product decision.",
  },
];


const principles = [
  "Use multivariate testing when interaction between elements matters.",
  "Keep the number of variables intentional and manageable.",
  "Define the primary outcome before reading the results.",
  "Track exposure consistently across experiment combinations.",
  "Allow sufficient evidence before interpreting small differences.",
  "Turn experiment findings into reusable product knowledge.",
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

      {/* glow */}

      <div className="pointer-events-none absolute left-1/2 top-[-480px] h-[900px] w-[1100px] -translate-x-1/2 rounded-full bg-[#7c3aed]/[0.1] blur-[250px]" />


      {/* grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.025) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
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
              HYI Multivariate Testing
            </TinyLabel>

          </div>


          <div className="hidden items-center gap-7 md:flex">

            <TinyLabel>
              Variables
            </TinyLabel>

            <TinyLabel>
              Combinations
            </TinyLabel>

            <TinyLabel>
              Interactions
            </TinyLabel>

            <TinyLabel>
              Evidence
            </TinyLabel>

          </div>

        </div>


        {/* hero heading */}

        <div className="mx-auto max-w-[1100px] pt-20 text-center md:pt-24">

          <motion.div
            initial={{
              opacity: 0,
              y: 14,
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

            <GitBranch
              size={11}
              className="text-[#c4b5fd]"
            />

            <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[#c4b5fd]/70">
              Combination Experimentation
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

            Test the pieces.

            <span className="block text-white/20">
              Study the mix.
            </span>

            <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
              Understand together.
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
            className="mx-auto mt-9 max-w-[780px] text-[14px] leading-8 text-white/[0.56]"
          >
            HYI Multivariate Testing helps teams evaluate multiple
            experience elements inside one structured experiment. Instead
            of asking only whether complete Version A or Version B performs
            differently, multivariate testing can explore how individual
            elements and their combinations contribute to the observed
            user outcome.
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
              href="#matrix"
              className="flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-8 py-4 text-[12px] shadow-[0_0_45px_rgba(124,58,237,.22)]"
            >
              Explore matrix

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


        {/* unique model */}

        <div
          id="matrix"
          className="mt-20"
        >
          <CombinationMatrix />
        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   UNIQUE MODEL
   MULTIVARIATE COMBINATION MATRIX
============================================================ */

function CombinationMatrix() {
  return (
    <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#08080a] p-5 md:p-7">

      {/* glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/[0.07] blur-[140px]" />


      {/* matrix background */}

      <div
        className="pointer-events-none absolute inset-0"
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

              <Workflow
                size={13}
                className="text-[#c4b5fd]"
              />

            </div>


            <div>

              <TinyLabel>
                Combination Matrix
              </TinyLabel>

              <span className="mt-1 block font-mono text-[6px] uppercase tracking-[0.12em] text-white/20">
                3 Variables / 2 Variants Each / 8 Combinations
              </span>

            </div>

          </div>


          <div className="flex items-center gap-3">

            <LiveDot />

            <TinyLabel>
              Experiment model
            </TinyLabel>

          </div>

        </div>


        {/* variable selector */}

        <div className="mt-6 grid gap-3 md:grid-cols-3">

          <VariableSelector
            label="Headline"
            optionA="A"
            optionB="B"
            active="B"
          />

          <VariableSelector
            label="Visual"
            optionA="A"
            optionB="B"
            active="A"
          />

          <VariableSelector
            label="CTA"
            optionA="A"
            optionB="B"
            active="B"
          />

        </div>


        {/* main */}

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.15fr_.85fr]">

          <CombinationGrid />

          <SelectedCombination />

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   VARIABLE SELECTOR
============================================================ */

function VariableSelector({
  label,
  optionA,
  optionB,
  active,
}: {
  label: string;
  optionA: string;
  optionB: string;
  active: string;
}) {
  return (
    <div className="rounded-[14px] border border-white/[0.07] bg-black/45 p-4">

      <div className="flex items-center justify-between">

        <TinyLabel>
          {label}
        </TinyLabel>

        <GitBranch
          size={10}
          className="text-white/20"
        />

      </div>


      <div className="mt-4 grid grid-cols-2 gap-2">

        {[optionA, optionB].map((option) => {

          const selected =
            option === active;


          return (
            <div
              key={option}
              className={`flex h-9 items-center justify-center rounded-[9px] border font-mono text-[7px] ${
                selected
                  ? "border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[#c4b5fd]"
                  : "border-white/[0.06] bg-white/[0.015] text-white/25"
              }`}
            >
              Variant {option}
            </div>
          );
        })}

      </div>

    </div>
  );
}


/* ============================================================
   COMBINATION GRID
============================================================ */

function CombinationGrid() {
  return (
    <div className="rounded-[20px] border border-white/[0.07] bg-black/45 p-5 md:p-6">

      <div className="flex items-center justify-between">

        <div>

          <TinyLabel>
            Experiment combinations
          </TinyLabel>

          <p className="mt-2 text-[10px] text-white/30">
            Every cell represents one combined experience.
          </p>

        </div>


        <span className="font-mono text-[7px] text-[#c4b5fd]/45">
          08 CELLS
        </span>

      </div>


      <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">

        {combinations.map((combination, index) => {

          const active =
            combination.id === "C06";


          return (
            <motion.div
              key={combination.id}
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -4,
              }}
              className={`relative min-h-[145px] overflow-hidden rounded-[15px] border p-4 ${
                active
                  ? "border-[#8b5cf6]/35 bg-[#8b5cf6]/[0.055]"
                  : "border-white/[0.06] bg-white/[0.015]"
              }`}
            >

              {active && (
                <motion.div
                  animate={{
                    opacity: [0.2, 0.7, 0.2],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="absolute right-[-30px] top-[-30px] h-[90px] w-[90px] rounded-full bg-[#8b5cf6]/25 blur-[35px]"
                />
              )}


              <div className="relative flex items-center justify-between">

                <span className="font-mono text-[6px] text-white/25">
                  {combination.id}
                </span>


                {active ? (
                  <LiveDot />
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
                )}

              </div>


              <div className="relative mt-6 flex gap-1.5">

                <MatrixChip
                  label={`H${combination.headline}`}
                  active={active}
                />

                <MatrixChip
                  label={`V${combination.visual}`}
                  active={active}
                />

                <MatrixChip
                  label={`C${combination.cta}`}
                  active={active}
                />

              </div>


              <div className="relative mt-6">

                <div className="h-1.5 w-[70%] rounded-full bg-white/[0.07]" />

                <div className="mt-2 h-1.5 w-[45%] rounded-full bg-white/[0.035]" />

              </div>


              {active && (
                <span className="relative mt-4 block font-mono text-[5px] uppercase tracking-[0.12em] text-[#c4b5fd]/55">
                  Selected example
                </span>
              )}

            </motion.div>
          );
        })}

      </div>

    </div>
  );
}


function MatrixChip({
  label,
  active,
}: {
  label: string;
  active: boolean;
}) {
  return (
    <span
      className={`rounded-[5px] border px-2 py-1 font-mono text-[5px] ${
        active
          ? "border-[#8b5cf6]/25 bg-[#8b5cf6]/10 text-[#c4b5fd]"
          : "border-white/[0.06] text-white/25"
      }`}
    >
      {label}
    </span>
  );
}


/* ============================================================
   SELECTED EXPERIENCE
============================================================ */

function SelectedCombination() {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-[#8b5cf6]/20 bg-[#0b0910] p-5 md:p-6">

      <div className="absolute right-[-100px] top-[-100px] h-[250px] w-[250px] rounded-full bg-[#7c3aed]/15 blur-[90px]" />


      <div className="relative">

        <div className="flex items-center justify-between">

          <div>

            <TinyLabel>
              Combination preview
            </TinyLabel>

            <span className="mt-2 block font-mono text-[7px] text-[#c4b5fd]/55">
              C06 / HB + VA + CB
            </span>

          </div>


          <div className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.06]">

            <Eye
              size={13}
              className="text-[#c4b5fd]"
            />

          </div>

        </div>


        {/* fake landing experience */}

        <div className="mt-8 rounded-[16px] border border-white/[0.07] bg-black/50 p-5">

          <div className="flex items-center gap-2 border-b border-white/[0.06] pb-4">

            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#8b5cf6]/70" />

          </div>


          <motion.div
            animate={{
              opacity: [0.65, 1, 0.65],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="mt-7"
          >

            <div className="h-3 w-[75%] rounded-full bg-white/15" />

            <div className="mt-3 h-3 w-[52%] rounded-full bg-white/15" />

          </motion.div>


          <div className="mt-5 h-2 w-[88%] rounded-full bg-white/[0.05]" />

          <div className="mt-2 h-2 w-[70%] rounded-full bg-white/[0.035]" />


          {/* visual */}

          <div className="relative mt-7 h-[115px] overflow-hidden rounded-[12px] border border-[#8b5cf6]/15 bg-[#8b5cf6]/[0.035]">

            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(139,92,246,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.05) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />


            <motion.div
              animate={{
                x: [-40, 190, -40],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 h-[1px] w-16 bg-gradient-to-r from-transparent via-[#c4b5fd] to-transparent"
            />


            <div className="absolute inset-0 flex items-center justify-center">

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/10">

                <Network
                  size={16}
                  className="text-[#c4b5fd]"
                />

              </div>

            </div>

          </div>


          {/* CTA */}

          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 rgba(139,92,246,0)",
                "0 0 30px rgba(139,92,246,.22)",
                "0 0 0 rgba(139,92,246,0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="mt-6 h-10 w-[55%] rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea]"
          />

        </div>


        <div className="mt-5 grid grid-cols-3 gap-2">

          {[
            ["HEADLINE", "B"],
            ["VISUAL", "A"],
            ["CTA", "B"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-[10px] border border-white/[0.06] bg-black/35 p-3"
            >

              <span className="font-mono text-[5px] text-white/20">
                {label}
              </span>

              <span className="mt-1 block text-[9px] text-[#c4b5fd]/65">
                Variant {value}
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   SMALL STRIP
============================================================ */

function ExperimentStrip() {
  const items = [
    "VARIABLES",
    "VARIANTS",
    "COMBINATIONS",
    "TRAFFIC",
    "MEASUREMENT",
    "INTERACTIONS",
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
   INTRODUCTION
============================================================ */

function Introduction() {
  return (
    <section className="bg-[#050505] px-5 py-28 md:px-10 md:py-36">

      <Container>

        <SectionLabel number="01">
          MULTIVARIATE TESTING
        </SectionLabel>


        <div className="mt-11 grid gap-14 lg:grid-cols-[1.05fr_.95fr]">

          <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">

            A/B compares

            <span className="block text-white/20">
              experiences.
            </span>

            Multivariate studies

            <span className="block text-[#a78bfa]">
              the ingredients.
            </span>

          </h2>


          <div className="self-end">

            <p className="text-[14px] leading-8 text-white/[0.58]">
              In a traditional A/B test, teams commonly compare complete
              experiences. Multivariate testing goes deeper by changing
              multiple defined elements and evaluating combinations of
              those variants within the same experiment.
            </p>


            <p className="mt-6 text-[13px] leading-8 text-white/[0.44]">
              This can help answer questions such as whether the headline
              itself matters, whether the CTA matters, or whether a
              particular headline works differently when paired with a
              particular visual. Because the number of combinations grows
              quickly, experiment scope and traffic requirements need
              careful planning.
            </p>

          </div>

        </div>


        {/* simple equation */}

        <div className="mt-16 overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#08080a] p-6 md:p-9">

          <div className="grid items-center gap-5 md:grid-cols-[1fr_50px_1fr_50px_1fr_70px_1.2fr]">

            <EquationBox
              label="Headline"
              value="2 variants"
            />

            <EquationSymbol>
              ×
            </EquationSymbol>

            <EquationBox
              label="Visual"
              value="2 variants"
            />

            <EquationSymbol>
              ×
            </EquationSymbol>

            <EquationBox
              label="CTA"
              value="2 variants"
            />

            <EquationSymbol>
              =
            </EquationSymbol>

            <div className="rounded-[15px] border border-[#8b5cf6]/25 bg-[#8b5cf6]/[0.045] p-5">

              <TinyLabel>
                Experiment
              </TinyLabel>

              <span className="mt-2 block text-2xl font-medium tracking-[-0.04em] text-[#c4b5fd]">
                8 combinations
              </span>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}


function EquationBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[15px] border border-white/[0.07] bg-black/35 p-5">

      <TinyLabel>
        {label}
      </TinyLabel>

      <span className="mt-2 block text-[13px] text-white/55">
        {value}
      </span>

    </div>
  );
}


function EquationSymbol({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="text-center text-2xl font-light text-[#a78bfa]/50">
      {children}
    </div>
  );
}


/* ============================================================
   VARIABLES
============================================================ */

function VariablesSection() {
  return (
    <section className="bg-black px-5 py-28 md:px-10 md:py-36">

      <Container>

        <SectionLabel number="02">
          EXPERIMENT VARIABLES
        </SectionLabel>


        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_.7fr]">

          <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">

            Change multiple

            <span className="block text-white/20">
              elements with
            </span>

            a clear reason.

          </h2>


          <p className="self-end text-[13px] leading-8 text-white/[0.48]">
            More variables do not automatically create a better
            experiment. HYI keeps the matrix focused on elements connected
            to a real hypothesis so the resulting evidence remains useful.
          </p>

        </div>


        <div className="mt-14 grid gap-3 lg:grid-cols-3">

          {variables.map(
            (
              {
                id,
                Icon,
                label,
                title,
                variants,
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
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -4,
                }}
                className="min-h-[330px] rounded-[21px] border border-white/[0.08] bg-[#08080a] p-7"
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
                    {id}
                  </span>

                </div>


                <TinyLabel>
                  <span className="mt-8 block">
                    {label}
                  </span>
                </TinyLabel>


                <h3 className="mt-2 text-2xl font-medium tracking-[-0.04em]">
                  {title}
                </h3>


                <div className="mt-5 flex gap-2">

                  {variants.map((variant) => (
                    <span
                      key={variant}
                      className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-2 font-mono text-[6px] text-white/35"
                    >
                      {variant}
                    </span>
                  ))}

                </div>


                <p className="mt-6 text-[12px] leading-7 text-white/[0.47]">
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

          {/* intro */}

          <div>

            <SectionLabel number="03">
              HOW HYI WORKS
            </SectionLabel>


            <h2 className="mt-10 text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">

              Build the matrix.

              <span className="block text-white/20">
                Protect the
              </span>

              learning.

            </h2>


            <p className="mt-8 max-w-[500px] text-[13px] leading-8 text-white/[0.5]">
              HYI structures multivariate experiments around a specific
              decision. We define variables, create valid combinations,
              connect exposure to measurement and interpret the resulting
              pattern without turning every small difference into a
              conclusion.
            </p>


            <div className="mt-9 rounded-[16px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.035] p-5">

              <div className="flex items-start gap-4">

                <Activity
                  size={14}
                  className="mt-1 shrink-0 text-[#c4b5fd]"
                />


                <p className="text-[11px] leading-6 text-white/42">
                  As variables increase, combinations increase rapidly.
                  HYI keeps experiment complexity proportional to the
                  question and the available evidence.
                </p>

              </div>

            </div>

          </div>


          {/* steps */}

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
                className="grid gap-5 border-b border-white/[0.08] py-7 md:grid-cols-[55px_.75fr_1.25fr]"
              >

                <span className="font-mono text-[7px] text-[#a78bfa]/60">
                  {item.number}
                </span>


                <div>

                  <TinyLabel>
                    {item.phase}
                  </TinyLabel>

                  <h3 className="mt-2 text-lg font-medium tracking-[-0.03em] text-white/75">
                    {item.title}
                  </h3>

                </div>


                <p className="text-[12px] leading-7 text-white/[0.47]">
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
   INTERACTION MODEL
============================================================ */

function InteractionSection() {
  return (
    <section className="bg-black px-5 py-28 md:px-10 md:py-36">

      <Container>

        <SectionLabel number="04">
          WHY MULTIVARIATE
        </SectionLabel>


        <div className="mt-10 grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">

          <div>

            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">

              Sometimes the

              <span className="block text-white/20">
                combination is
              </span>

              the insight.

            </h2>


            <p className="mt-8 max-w-[540px] text-[13px] leading-8 text-white/[0.5]">
              An element may not have the same effect in every context.
              For example, one CTA could behave differently when paired
              with a different headline. Multivariate testing can help
              reveal these interaction patterns when the experiment is
              designed and powered appropriately.
            </p>

          </div>


          <InteractionModel />

        </div>

      </Container>

    </section>
  );
}


/* ============================================================
   UNIQUE MODEL 2
============================================================ */

function InteractionModel() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[25px] border border-white/[0.08] bg-[#08080a] p-6">

      <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/10 blur-[100px]" />


      <div className="relative flex items-center justify-between">

        <TinyLabel>
          Interaction map
        </TinyLabel>

        <Network
          size={13}
          className="text-[#c4b5fd]"
        />

      </div>


      <div className="relative mt-10 h-[300px]">

        {/* connecting lines */}

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 600 300"
          fill="none"
        >

          <motion.path
            d="M90 70 C210 70 230 150 300 150"
            stroke="rgba(139,92,246,.35)"
            strokeWidth="1"
            strokeDasharray="5 7"
            animate={{
              strokeDashoffset: [0, -30],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.path
            d="M90 230 C210 230 230 150 300 150"
            stroke="rgba(139,92,246,.35)"
            strokeWidth="1"
            strokeDasharray="5 7"
            animate={{
              strokeDashoffset: [0, -30],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.path
            d="M510 70 C390 70 370 150 300 150"
            stroke="rgba(196,181,253,.3)"
            strokeWidth="1"
            strokeDasharray="5 7"
            animate={{
              strokeDashoffset: [0, 30],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.path
            d="M510 230 C390 230 370 150 300 150"
            stroke="rgba(196,181,253,.3)"
            strokeWidth="1"
            strokeDasharray="5 7"
            animate={{
              strokeDashoffset: [0, 30],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />

        </svg>


        <InteractionNode
          className="left-[3%] top-[5%]"
          label="Headline"
          value="B"
        />

        <InteractionNode
          className="left-[3%] bottom-[5%]"
          label="Visual"
          value="A"
        />

        <InteractionNode
          className="right-[3%] top-[5%]"
          label="CTA"
          value="B"
        />

        <InteractionNode
          className="right-[3%] bottom-[5%]"
          label="Audience"
          value="Eligible"
        />


        {/* center */}

        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 rgba(139,92,246,0)",
              "0 0 45px rgba(139,92,246,.25)",
              "0 0 0 rgba(139,92,246,0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 flex h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#8b5cf6]/30 bg-[#0d0915]"
        >

          <GitBranch
            size={19}
            className="text-[#c4b5fd]"
          />

          <span className="mt-2 font-mono text-[5px] uppercase tracking-[0.1em] text-[#c4b5fd]/55">
            Interaction
          </span>

        </motion.div>

      </div>

    </div>
  );
}


function InteractionNode({
  className,
  label,
  value,
}: {
  className: string;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -4, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute z-10 w-[115px] rounded-[13px] border border-white/[0.08] bg-[#0b0b0d] p-4 ${className}`}
    >

      <TinyLabel>
        {label}
      </TinyLabel>

      <span className="mt-2 block text-[10px] text-white/55">
        {value}
      </span>

    </motion.div>
  );
}


/* ============================================================
   PRINCIPLES
============================================================ */

function Principles() {
  return (
    <section className="bg-[#060608] px-5 py-28 md:px-10 md:py-36">

      <Container>

        <SectionLabel number="05">
          TESTING PRINCIPLES
        </SectionLabel>


        <div className="mt-10 grid gap-14 lg:grid-cols-[.8fr_1.2fr]">

          <div>

            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">

              More combinations.

              <span className="block text-white/20">
                More discipline.
              </span>

            </h2>


            <p className="mt-7 max-w-[500px] text-[13px] leading-8 text-white/[0.46]">
              Multivariate experiments can create valuable insight, but
              complexity increases quickly. HYI keeps the experiment
              connected to a defined question, controlled scope and
              measurable decision.
            </p>

          </div>


          <div className="border-t border-white/[0.08]">

            {principles.map((principle, index) => (
              <div
                key={principle}
                className="flex items-start gap-4 border-b border-white/[0.08] py-5"
              >

                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.04]">

                  <Check
                    size={10}
                    className="text-[#c4b5fd]"
                  />

                </div>


                <p className="text-[12px] leading-7 text-white/[0.52]">
                  {principle}
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
   CTA
============================================================ */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-36 md:px-10 md:py-44">

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

        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/[0.05] px-4 py-2">

          <GitBranch
            size={11}
            className="text-[#c4b5fd]"
          />

          <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-[#c4b5fd]/65">
            HYI Multivariate Testing
          </span>

        </div>


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
          className="mx-auto mt-9 max-w-[1050px] text-[clamp(3.8rem,7vw,7rem)] font-semibold leading-[0.83] tracking-[-0.08em]"
        >

          Find what works.

          <span className="block text-white/20">
            Understand why
          </span>

          <span className="block bg-gradient-to-r from-[#8b5cf6] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent">
            it works together.
          </span>

        </motion.h2>


        <p className="mx-auto mt-8 max-w-[680px] text-[13px] leading-8 text-white/[0.5]">
          HYI turns complex combinations into structured experiments,
          helping teams understand the elements and interactions that shape
          a digital experience.
        </p>


        <div className="mt-10 flex flex-wrap justify-center gap-3">

          <a
            href="#hyi-process"
            className="flex items-center gap-4 rounded-full bg-gradient-to-r from-[#6d28d9] to-[#9333ea] px-9 py-4 text-[12px] shadow-[0_0_45px_rgba(124,58,237,.22)]"
          >
            Explore HYI process

            <ArrowRight size={13} />
          </a>


          <a
            href="#matrix"
            className="flex items-center gap-4 rounded-full border border-white/10 px-9 py-4 text-[12px] text-white/50"
          >
            View matrix

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

export default function MultivariateTestingClient() {
  const { scrollYProgress } =
    useScroll();


  const scaleX =
    useSpring(
      scrollYProgress,
      {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
      },
    );


  return (
    <div className="overflow-x-hidden bg-[#050505] text-white">

      {/* progress */}

      <motion.div
        style={{
          scaleX,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[99999] h-[2px] w-full bg-gradient-to-r from-[#6d28d9] via-[#a855f7] to-[#e879f9]"
      />


      <Hero />

      <ExperimentStrip />

      <Introduction />

      <VariablesSection />

      <HYIProcess />

      <InteractionSection />

      <Principles />

      <FinalCTA />

    </div>
  );
}