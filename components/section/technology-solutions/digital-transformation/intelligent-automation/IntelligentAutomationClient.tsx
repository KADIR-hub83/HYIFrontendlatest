"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronDown,
  Circle,
  Database,
  Eye,
  FileText,
  GitBranch,
  Layers3,
  Network,
  RefreshCcw,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

/* ============================================================
   TYPES
============================================================ */

type Capability = {
  number: string;
  title: string;
  description: string;
  terms: string[];
};

type IntelligenceLayer = {
  number: string;
  label: string;
  title: string;
  description: string;
};

type AutomationDomain = {
  number: string;
  title: string;
  description: string;
};

type Principle = {
  number: string;
  title: string;
  description: string;
};

type Stage = {
  number: string;
  label: string;
  title: string;
  description: string;
};

type HumanMachineItem = {
  number: string;
  title: string;
  description: string;
};

type Outcome = {
  number: string;
  title: string;
  description: string;
};

/* ============================================================
   DATA
============================================================ */

const capabilities: Capability[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "AI can interpret language, documents, messages, records and contextual information entering an enterprise process.",
    terms: [
      "Language",
      "Documents",
      "Context",
      "Classification",
    ],
  },
  {
    number: "02",
    title: "Retrieve",
    description:
      "Automation can locate relevant enterprise knowledge, records, policies and historical information before an action is taken.",
    terms: [
      "Knowledge",
      "Search",
      "Context",
      "Enterprise Data",
    ],
  },
  {
    number: "03",
    title: "Reason",
    description:
      "AI can evaluate information against instructions, business rules and available context to assist with process decisions.",
    terms: [
      "Rules",
      "Policies",
      "Reasoning",
      "Decision Support",
    ],
  },
  {
    number: "04",
    title: "Generate",
    description:
      "Generative AI can prepare summaries, responses, structured records and working documents required by downstream processes.",
    terms: [
      "Responses",
      "Summaries",
      "Documents",
      "Structured Output",
    ],
  },
  {
    number: "05",
    title: "Orchestrate",
    description:
      "Workflow systems coordinate AI, APIs, applications, databases and people as one controlled operational process.",
    terms: [
      "Workflow",
      "APIs",
      "Applications",
      "Humans",
    ],
  },
  {
    number: "06",
    title: "Execute",
    description:
      "Approved actions can be performed automatically across connected enterprise platforms while preserving appropriate controls.",
    terms: [
      "Actions",
      "Systems",
      "Transactions",
      "Automation",
    ],
  },
  {
    number: "07",
    title: "Observe",
    description:
      "Operational signals can reveal workflow failures, repeated exceptions, bottlenecks and opportunities for process improvement.",
    terms: [
      "Monitoring",
      "Exceptions",
      "Signals",
      "Improvement",
    ],
  },
];

const intelligenceLayers: IntelligenceLayer[] = [
  {
    number: "01",
    label: "INPUT",
    title: "Enterprise information",
    description:
      "Documents, messages, databases, applications, events and user requests create the information entering intelligent workflows.",
  },
  {
    number: "02",
    label: "PERCEPTION",
    title: "AI understanding",
    description:
      "Language and document intelligence convert unstructured information into context that software can use.",
  },
  {
    number: "03",
    label: "KNOWLEDGE",
    title: "Enterprise context",
    description:
      "Relevant policies, records, knowledge bases and historical information are retrieved when the process requires them.",
  },
  {
    number: "04",
    label: "REASONING",
    title: "Decision intelligence",
    description:
      "AI reasoning and deterministic business rules work together to determine appropriate next steps.",
  },
  {
    number: "05",
    label: "ORCHESTRATION",
    title: "Process coordination",
    description:
      "Workflow logic coordinates applications, APIs, agents, services and human approval points.",
  },
  {
    number: "06",
    label: "ACTION",
    title: "Enterprise execution",
    description:
      "Approved actions update systems, create records, send communications or initiate additional processes.",
  },
  {
    number: "07",
    label: "CONTROL",
    title: "Governance",
    description:
      "Identity, authorization, policy, auditability and human review constrain how automation behaves.",
  },
  {
    number: "08",
    label: "FEEDBACK",
    title: "Operational learning",
    description:
      "Workflow outcomes provide information for improving process design, controls and automation coverage.",
  },
];

const domains: AutomationDomain[] = [
  {
    number: "01",
    title: "Customer operations",
    description:
      "Interpret customer requests, retrieve account context, assist response generation and coordinate service workflows.",
  },
  {
    number: "02",
    title: "Finance operations",
    description:
      "Coordinate document processing, validation, reconciliation, approvals and controlled financial workflows.",
  },
  {
    number: "03",
    title: "IT operations",
    description:
      "Connect events, diagnostics, knowledge and remediation workflows across technology environments.",
  },
  {
    number: "04",
    title: "Employee operations",
    description:
      "Automate repeatable internal requests while providing employees with faster access to information and services.",
  },
  {
    number: "05",
    title: "Knowledge operations",
    description:
      "Retrieve, synthesize and transform organizational knowledge into useful information inside operational workflows.",
  },
  {
    number: "06",
    title: "Document operations",
    description:
      "Classify, extract, validate, summarize and route document information across business processes.",
  },
  {
    number: "07",
    title: "Data operations",
    description:
      "Coordinate ingestion, validation, transformation, enrichment and exception handling across data workflows.",
  },
  {
    number: "08",
    title: "Compliance operations",
    description:
      "Support repeatable evidence collection, policy evaluation, review and controlled approval processes.",
  },
];

const stages: Stage[] = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Find work worth automating.",
    description:
      "Identify repetitive process steps, high-volume information movement, delays, manual decisions and recurring exceptions.",
  },
  {
    number: "02",
    label: "DECOMPOSE",
    title: "Separate rules from judgment.",
    description:
      "Determine which steps are deterministic, which require AI interpretation and which should remain under human control.",
  },
  {
    number: "03",
    label: "CONNECT",
    title: "Create system access.",
    description:
      "Connect the applications, APIs, data and knowledge required to complete the process from end to end.",
  },
  {
    number: "04",
    label: "INTELLIGENCE",
    title: "Introduce AI selectively.",
    description:
      "Use AI where language, documents, ambiguity or contextual reasoning create genuine value for the workflow.",
  },
  {
    number: "05",
    label: "CONTROL",
    title: "Define boundaries.",
    description:
      "Establish permissions, confidence thresholds, approval points, audit requirements and exception behavior.",
  },
  {
    number: "06",
    label: "OPERATE",
    title: "Observe production behavior.",
    description:
      "Monitor workflow execution, failures, intervention rates and operational outcomes after deployment.",
  },
  {
    number: "07",
    label: "IMPROVE",
    title: "Expand from evidence.",
    description:
      "Use real operational data to decide where additional automation or process redesign should happen next.",
  },
];

const principles: Principle[] = [
  {
    number: "P / 01",
    title: "Intelligence where intelligence is needed.",
    description:
      "Do not replace simple deterministic logic with AI when clear rules already solve the problem reliably.",
  },
  {
    number: "P / 02",
    title: "Automation should reduce complexity.",
    description:
      "A solution that introduces more operational complexity than the work it removes is not successful automation.",
  },
  {
    number: "P / 03",
    title: "Human judgment remains intentional.",
    description:
      "People should remain inside workflows where accountability, ambiguity, sensitivity or complex judgment requires them.",
  },
  {
    number: "P / 04",
    title: "Every action needs authority.",
    description:
      "Automated systems should only access information and execute actions permitted by their defined identity and role.",
  },
  {
    number: "P / 05",
    title: "Exceptions are part of the architecture.",
    description:
      "Production workflows need explicit behavior for missing data, uncertain AI output and unavailable downstream systems.",
  },
  {
    number: "P / 06",
    title: "Observability is not optional.",
    description:
      "Teams need enough operational evidence to understand workflow state, decisions, failures and outcomes.",
  },
];

const humanItems: HumanMachineItem[] = [
  {
    number: "H01",
    title: "Accountability",
    description:
      "Important decisions may require a person who is responsible for the final outcome.",
  },
  {
    number: "H02",
    title: "Ambiguity",
    description:
      "Some situations contain context that cannot be safely reduced to predefined rules or automated reasoning.",
  },
  {
    number: "H03",
    title: "Relationships",
    description:
      "Negotiation, empathy and relationship management remain fundamentally human activities.",
  },
  {
    number: "H04",
    title: "Creative judgment",
    description:
      "Novel situations can require synthesis, trade-offs and decisions beyond the intended automation boundary.",
  },
];

const outcomes: Outcome[] = [
  {
    number: "01",
    title: "Reduce repetitive coordination",
    description:
      "Move information and routine work between systems without requiring people to coordinate every transition manually.",
  },
  {
    number: "02",
    title: "Accelerate operational response",
    description:
      "Interpret events and information closer to the moment they enter the organization.",
  },
  {
    number: "03",
    title: "Increase process consistency",
    description:
      "Apply defined rules, controls and workflow behavior repeatedly across operational processes.",
  },
  {
    number: "04",
    title: "Make enterprise AI actionable",
    description:
      "Connect AI understanding and reasoning with the systems where real business actions actually happen.",
  },
  {
    number: "05",
    title: "Improve process visibility",
    description:
      "Create operational evidence around workflow execution, exceptions, intervention and process outcomes.",
  },
  {
    number: "06",
    title: "Focus people on higher-value work",
    description:
      "Reduce time spent on repetitive information handling so human attention can move toward judgment and complex problems.",
  },
];

/* ============================================================
   ANIMATION
============================================================ */

const ease = [0.16, 1, 0.3, 1] as const;

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

/* ============================================================
   SMALL COMPONENTS
============================================================ */

function SectionIndex({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -15,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        ease,
      }}
      className="flex items-center gap-5"
    >
      <span className="font-mono text-[7px] text-white/[0.16]">
        {index}
      </span>

      <div className="h-px w-10 bg-white/[0.12]" />

      <span className="font-mono text-[7px] tracking-[0.24em] text-white/[0.38]">
        {label}
      </span>
    </motion.div>
  );
}

function AnimatedRule() {
  return (
    <div className="relative h-px overflow-hidden bg-white/[0.07]">
      <motion.div
        initial={{
          x: "-100%",
        }}
        whileInView={{
          x: "500%",
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 2.2,
          ease,
        }}
        className="absolute inset-y-0 w-[15%] bg-white/[0.55]"
      />
    </div>
  );
}

/* ============================================================
   PAGE
============================================================ */

export default function IntelligentAutomationClient() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  });

  const heroTextY = useTransform(
    scrollYProgress,
    [0, 0.13],
    [0, 120],
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.1],
    [1, 0.15],
  );

  const wordX = useTransform(
    scrollYProgress,
    [0.05, 0.55],
    ["3%", "-30%"],
  );

  return (
    <div className="relative overflow-hidden bg-[#000000] text-white">
      {/* ======================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        style={{
          scaleX: progress,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[9999] h-px w-full bg-white"
      />

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[110vh] bg-[#000000] px-5 pb-12 pt-36 md:px-10 md:pt-44">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid min-h-[calc(110vh-11rem)] lg:grid-cols-[120px_1fr]">
            {/* vertical index */}

            <div className="hidden border-r border-white/[0.08] lg:block">
              <div className="flex h-full flex-col justify-between py-5">
                <span className="font-mono text-[6px] tracking-[0.2em] text-white/[0.2]">
                  IA / 01
                </span>

                <div className="pb-8">
                  <p
                    className="font-mono text-[7px] tracking-[0.25em] text-white/[0.2]"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    INTELLIGENT AUTOMATION
                  </p>
                </div>
              </div>
            </div>

            {/* hero body */}

            <motion.div
              style={{
                y: heroTextY,
                opacity: heroOpacity,
              }}
              className="flex flex-col justify-between lg:pl-12"
            >
              <div className="flex items-start justify-between border-t border-white/[0.08] pt-5">
                <p className="font-mono text-[6px] leading-5 tracking-[0.2em] text-white/[0.28]">
                  DIGITAL TRANSFORMATION
                  <br />
                  INTELLIGENT AUTOMATION
                </p>

                <p className="hidden text-right font-mono text-[6px] leading-5 tracking-[0.2em] text-white/[0.2] md:block">
                  AI + WORKFLOW
                  <br />
                  ENTERPRISE OPERATIONS
                </p>
              </div>

              <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="py-20 md:py-28"
              >
                <motion.p
                  variants={reveal}
                  className="mb-10 font-mono text-[7px] tracking-[0.24em] text-white/[0.3]"
                >
                  WHEN AUTOMATION CAN UNDERSTAND BEFORE IT ACTS.
                </motion.p>

                <motion.h1
                  variants={reveal}
                  className="text-[clamp(4.4rem,10.8vw,11rem)] font-semibold leading-[0.78] tracking-[-0.09em]"
                >
                  Intelligent
                </motion.h1>

                <motion.h1
                  variants={reveal}
                  className="text-[clamp(4.4rem,10.8vw,11rem)] font-semibold leading-[0.78] tracking-[-0.09em] text-white/[0.24]"
                >
                  Automation.
                </motion.h1>
              </motion.div>

              <div className="grid gap-10 border-t border-white/[0.08] py-9 md:grid-cols-[.35fr_1fr]">
                <div>
                  <p className="font-mono text-[6px] leading-6 tracking-[0.18em] text-white/[0.22]">
                    UNDERSTAND
                    <br />
                    REASON
                    <br />
                    DECIDE
                    <br />
                    ORCHESTRATE
                    <br />
                    ACT
                  </p>
                </div>

                <div>
                  <p className="max-w-[820px] text-[15px] leading-8 text-white/[0.48] md:text-[17px] md:leading-9">
                    Intelligent automation combines artificial
                    intelligence, workflow orchestration, enterprise
                    integration and controlled execution so software can
                    do more than follow static instructions. It can
                    interpret information, retrieve context, assist
                    decisions and coordinate work across the enterprise.
                  </p>

                  <motion.a
                    href="#definition"
                    whileHover={{
                      x: 7,
                    }}
                    className="mt-8 flex w-fit items-center gap-4 font-mono text-[7px] tracking-[0.2em] text-white/[0.32]"
                  >
                    READ THE SYSTEM

                    <ArrowDown size={11} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================================================
          WORD STRIP
      ====================================================== */}

      <section className="overflow-hidden border-y border-white/[0.08] bg-black py-9">
        <motion.div
          style={{
            x: wordX,
          }}
          className="flex w-max items-center whitespace-nowrap"
        >
          {[
            "PERCEPTION",
            "CONTEXT",
            "KNOWLEDGE",
            "REASONING",
            "WORKFLOW",
            "ACTION",
            "CONTROL",
            "LEARNING",
            "PERCEPTION",
            "CONTEXT",
            "KNOWLEDGE",
            "REASONING",
          ].map((word, index) => (
            <div
              key={`${word}-${index}`}
              className="flex items-center"
            >
              <span className="px-10 text-3xl font-medium tracking-[-0.045em] text-white/[0.16] md:text-5xl">
                {word}
              </span>

              <Circle
                size={5}
                fill="currentColor"
                className="text-white/[0.16]"
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* ======================================================
          DEFINITION
      ====================================================== */}

      <section
        id="definition"
        className="bg-black px-5 py-36 md:px-10 md:py-56"
      >
        <div className="mx-auto max-w-[1500px]">
          <SectionIndex
            index="01"
            label="DEFINITION"
          />

          <div className="mt-16 grid gap-14 lg:grid-cols-[.28fr_1.72fr]">
            <div>
              <span className="font-mono text-[6px] leading-6 tracking-[0.18em] text-white/[0.18]">
                INTELLIGENCE
                <br />
                +
                <br />
                AUTOMATION
              </span>
            </div>

            <div>
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 55,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.9,
                  ease,
                }}
                className="max-w-[1250px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[92px]"
              >
                Traditional automation asks:
                <span className="block text-white/[0.24]">
                  what rule should I follow?
                </span>

                <span className="mt-5 block">
                  Intelligent automation asks:
                </span>

                <span className="block text-white/[0.24]">
                  what is happening here?
                </span>
              </motion.h2>

              <div className="mt-20 grid gap-12 border-t border-white/[0.08] pt-10 md:grid-cols-2">
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  className="text-[13px] leading-8 text-white/[0.4]"
                >
                  Conventional automation performs extremely well when
                  inputs, decisions and process paths are predictable.
                  But enterprise work frequently contains documents,
                  language, changing context and information that cannot
                  be represented by a simple sequence of fixed rules.
                </motion.p>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1,
                  }}
                  className="text-[13px] leading-8 text-white/[0.4]"
                >
                  Intelligent automation adds AI capabilities to those
                  workflows. The result is not unrestricted autonomous
                  software. It is controlled automation that can
                  interpret information before applying rules,
                  requesting judgment or performing an approved action.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedRule />

      {/* ======================================================
          THE EQUATION
      ====================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <SectionIndex
            index="02"
            label="THE EQUATION"
          />

          <div className="mt-20">
            {[
              {
                number: "01",
                title: "AI",
                text:
                  "Understands information that traditional workflow logic cannot interpret directly.",
              },
              {
                number: "02",
                title: "Automation",
                text:
                  "Executes repeatable actions with speed and consistency.",
              },
              {
                number: "03",
                title: "Orchestration",
                text:
                  "Coordinates systems, AI services, rules and people as one process.",
              },
              {
                number: "04",
                title: "Governance",
                text:
                  "Defines what automation is permitted to understand, decide and execute.",
              },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -30 : 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease,
                }}
                className="border-t border-white/[0.08] py-10"
              >
                <div className="grid gap-7 md:grid-cols-[100px_.7fr_1fr]">
                  <span className="font-mono text-[7px] text-white/[0.17]">
                    {item.number}
                  </span>

                  <h3 className="text-5xl font-medium tracking-[-0.06em] md:text-7xl">
                    {item.title}
                  </h3>

                  <div className="flex items-end">
                    <p className="max-w-[600px] text-[13px] leading-8 text-white/[0.38]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </section>

      {/* ======================================================
          GIANT STATEMENT
      ====================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-44 md:px-10 md:py-64">
        <div className="mx-auto max-w-[1500px]">
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            className="font-mono text-[7px] tracking-[0.24em] text-white/[0.22]"
          >
            THE FUNDAMENTAL SHIFT
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1,
              ease,
            }}
            className="mt-14 max-w-[1450px] text-[clamp(4rem,9vw,9.6rem)] font-semibold leading-[0.84] tracking-[-0.085em]"
          >
            Software that can
            <span className="text-white/[0.23]">
              {" "}
              understand
            </span>

            <span className="block">
              before it
              <span className="text-white/[0.23]">
                {" "}
                acts.
              </span>
            </span>
          </motion.h2>

          <div className="mt-24 grid gap-12 border-t border-white/[0.08] pt-10 lg:grid-cols-[.25fr_.45fr_1fr]">
            <BrainCircuit
              size={20}
              className="text-white/[0.3]"
            />

            <p className="font-mono text-[6px] leading-6 tracking-[0.18em] text-white/[0.2]">
              INFORMATION
              <br />
              CONTEXT
              <br />
              REASONING
              <br />
              DECISION
              <br />
              ACTION
            </p>

            <p className="max-w-[720px] text-[14px] leading-9 text-white/[0.43]">
              The difference between ordinary automation and
              intelligent automation is not simply the presence of an
              AI model. The difference is whether intelligence has been
              integrated into the operational process with clear
              context, boundaries and controlled execution.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          CAPABILITIES
      ====================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.38fr_1.62fr]">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <SectionIndex
                index="03"
                label="CAPABILITIES"
              />

              <h2 className="mt-9 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-6xl">
                What makes
                <span className="block text-white/[0.25]">
                  automation intelligent?
                </span>
              </h2>

              <p className="mt-8 max-w-[370px] text-[12px] leading-8 text-white/[0.34]">
                Intelligence enters the process through specific
                capabilities. Each capability should solve a defined
                operational problem rather than existing only because
                an AI technology is available.
              </p>
            </div>

            <div>
              {capabilities.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    ease,
                  }}
                  className="min-h-[360px] border-t border-white/[0.08] py-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[7px] text-white/[0.17]">
                      {item.number}
                    </span>

                    <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.2]">
                      INTELLIGENCE CAPABILITY
                    </span>
                  </div>

                  <div className="mt-20 grid gap-10 md:grid-cols-[.7fr_1fr]">
                    <h3 className="text-5xl font-medium tracking-[-0.06em] md:text-6xl">
                      {item.title}
                    </h3>

                    <div>
                      <p className="max-w-[620px] text-[13px] leading-8 text-white/[0.4]">
                        {item.description}
                      </p>

                      <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/[0.07] pt-5">
                        {item.terms.map((term) => (
                          <span
                            key={term}
                            className="font-mono text-[6px] tracking-[0.14em] text-white/[0.22]"
                          >
                            {term.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          INTELLIGENCE STACK
      ====================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <SectionIndex
            index="04"
            label="INTELLIGENCE STACK"
          />

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="mt-12 max-w-[1100px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl"
          >
            Intelligence is a layer
            <span className="text-white/[0.25]">
              {" "}
              inside the operating system of work.
            </span>
          </motion.h2>

          <div className="mt-20">
            {intelligenceLayers.map((layer, index) => (
              <motion.div
                key={layer.number}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.04,
                }}
                whileHover={{
                  x: 6,
                }}
                className="grid gap-6 border-t border-white/[0.08] py-8 md:grid-cols-[80px_.35fr_.6fr_1fr]"
              >
                <span className="font-mono text-[6px] text-white/[0.16]">
                  {layer.number}
                </span>

                <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.28]">
                  {layer.label}
                </span>

                <h3 className="text-xl font-medium tracking-[-0.035em]">
                  {layer.title}
                </h3>

                <p className="text-[12px] leading-7 text-white/[0.36]">
                  {layer.description}
                </p>
              </motion.div>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </section>

      {/* ======================================================
          KNOWLEDGE
      ====================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-56">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-20 lg:grid-cols-[.55fr_1.45fr]">
            <div>
              <SectionIndex
                index="05"
                label="KNOWLEDGE"
              />

              <Search
                size={20}
                className="mt-16 text-white/[0.27]"
              />
            </div>

            <div>
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl lg:text-[90px]"
              >
                AI should not guess
                <span className="block text-white/[0.25]">
                  what the enterprise already knows.
                </span>
              </motion.h2>

              <p className="mt-12 max-w-[760px] text-[14px] leading-9 text-white/[0.42]">
                Intelligent workflows become more useful when AI can
                access appropriate organizational context. Retrieval
                connects models with approved knowledge, policies,
                records and historical information at the moment the
                process requires them.
              </p>

              <div className="mt-16 grid md:grid-cols-2">
                {[
                  {
                    title: "Policies",
                    text:
                      "Retrieve the rules that constrain the current process.",
                  },
                  {
                    title: "Knowledge",
                    text:
                      "Use organizational information relevant to the current request.",
                  },
                  {
                    title: "Records",
                    text:
                      "Bring operational and customer context into the workflow.",
                  },
                  {
                    title: "History",
                    text:
                      "Use appropriate previous activity to understand the current situation.",
                  },
                ].map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="min-h-[220px] border border-white/[0.08] p-7"
                  >
                    <span className="font-mono text-[6px] text-white/[0.18]">
                      K-{String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-12 text-2xl font-medium tracking-[-0.04em]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[12px] leading-7 text-white/[0.34]">
                      {item.text}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          REASONING
      ====================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-40 md:px-10 md:py-60">
        <div className="mx-auto max-w-[1500px]">
          <SectionIndex
            index="06"
            label="REASONING"
          />

          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease,
            }}
            className="mt-16 max-w-[1400px] text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.08em]"
          >
            Not every decision
            <span className="text-white/[0.23]">
              {" "}
              belongs to AI.
            </span>
          </motion.h2>

          <div className="mt-24 grid gap-12 lg:grid-cols-3">
            <div className="border-t border-white/[0.08] pt-7">
              <span className="font-mono text-[7px] tracking-[0.18em] text-white/[0.25]">
                DETERMINISTIC
              </span>

              <h3 className="mt-9 text-3xl font-medium tracking-[-0.05em]">
                Clear rule.
              </h3>

              <p className="mt-5 text-[12px] leading-7 text-white/[0.35]">
                When the correct decision can be represented explicitly,
                deterministic logic remains appropriate.
              </p>
            </div>

            <div className="border-t border-white/[0.08] pt-7">
              <span className="font-mono text-[7px] tracking-[0.18em] text-white/[0.25]">
                AI ASSISTED
              </span>

              <h3 className="mt-9 text-3xl font-medium tracking-[-0.05em]">
                Context required.
              </h3>

              <p className="mt-5 text-[12px] leading-7 text-white/[0.35]">
                AI can interpret variable information and provide
                structured context or recommendations to the workflow.
              </p>
            </div>

            <div className="border-t border-white/[0.08] pt-7">
              <span className="font-mono text-[7px] tracking-[0.18em] text-white/[0.25]">
                HUMAN
              </span>

              <h3 className="mt-9 text-3xl font-medium tracking-[-0.05em]">
                Judgment required.
              </h3>

              <p className="mt-5 text-[12px] leading-7 text-white/[0.35]">
                Decisions involving accountability, unusual ambiguity
                or significant consequences can remain under human
                authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          ORCHESTRATION
      ====================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <SectionIndex
                index="07"
                label="ORCHESTRATION"
              />

              <h2 className="mt-10 text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl">
                Intelligence without action
                <span className="block text-white/[0.24]">
                  is only information.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-[720px] text-[14px] leading-9 text-white/[0.43]">
                Orchestration connects AI outputs with actual enterprise
                processes. It determines what happens next, which system
                participates, whether approval is required and what
                should happen when execution fails.
              </p>

              <div className="mt-14">
                {[
                  "Receive an enterprise event",
                  "Collect required context",
                  "Interpret unstructured information",
                  "Retrieve relevant knowledge",
                  "Apply business rules",
                  "Use AI reasoning where appropriate",
                  "Request human review when required",
                  "Execute approved actions",
                  "Verify the result",
                  "Record operational evidence",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.035,
                    }}
                    className="grid grid-cols-[60px_1fr_30px] items-center border-t border-white/[0.08] py-6"
                  >
                    <span className="font-mono text-[6px] text-white/[0.16]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[13px] text-white/[0.42]">
                      {item}
                    </span>

                    <ArrowRight
                      size={10}
                      className="text-white/[0.2]"
                    />
                  </motion.div>
                ))}

                <div className="border-t border-white/[0.08]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          DOMAINS
      ====================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <SectionIndex
            index="08"
            label="ENTERPRISE DOMAINS"
          />

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="mt-12 max-w-[1000px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl"
          >
            Intelligence can enter
            <span className="text-white/[0.25]">
              {" "}
              almost any workflow.
            </span>
          </motion.h2>

          <div className="mt-20">
            {domains.map((domain, index) => (
              <motion.article
                key={domain.number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -25 : 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  ease,
                }}
                className="border-t border-white/[0.08] py-9"
              >
                <div className="grid gap-7 md:grid-cols-[90px_.8fr_1fr]">
                  <span className="font-mono text-[7px] text-white/[0.17]">
                    {domain.number}
                  </span>

                  <h3 className="text-3xl font-medium tracking-[-0.05em]">
                    {domain.title}
                  </h3>

                  <p className="max-w-[600px] text-[12px] leading-7 text-white/[0.36]">
                    {domain.description}
                  </p>
                </div>
              </motion.article>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </section>

      {/* ======================================================
          DOCUMENT INTELLIGENCE
      ====================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-56">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.5fr_1.5fr]">
            <div>
              <SectionIndex
                index="09"
                label="DOCUMENT INTELLIGENCE"
              />

              <FileText
                size={20}
                className="mt-16 text-white/[0.27]"
              />
            </div>

            <div>
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="max-w-[1050px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl"
              >
                Documents stop being
                <span className="text-white/[0.25]">
                  {" "}
                  dead information.
                </span>
              </motion.h2>

              <p className="mt-10 max-w-[750px] text-[14px] leading-9 text-white/[0.42]">
                A large amount of enterprise work begins inside PDFs,
                emails, forms, contracts, reports and other
                unstructured information. AI can convert those
                documents into useful context for automated processes.
              </p>

              <div className="mt-14 border-t border-white/[0.08]">
                {[
                  "Identify document type",
                  "Extract relevant information",
                  "Interpret language",
                  "Validate required fields",
                  "Summarize complex content",
                  "Compare against policy",
                  "Route to appropriate workflow",
                  "Request review when confidence is insufficient",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between border-b border-white/[0.08] py-5"
                  >
                    <div className="flex items-center gap-5">
                      <span className="font-mono text-[6px] text-white/[0.17]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[12px] text-white/[0.4]">
                        {item}
                      </span>
                    </div>

                    <ChevronDown
                      size={9}
                      className="text-white/[0.18]"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          HUMAN + AI
      ====================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-40 md:px-10 md:py-56">
        <div className="mx-auto max-w-[1500px]">
          <SectionIndex
            index="10"
            label="HUMAN + AI"
          />

          <div className="mt-16 grid gap-16 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="max-w-[700px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl"
              >
                Human judgment
                <span className="block text-white/[0.24]">
                  becomes a designed step.
                </span>
              </motion.h2>

              <p className="mt-10 max-w-[600px] text-[13px] leading-8 text-white/[0.38]">
                Intelligent automation does not require every decision
                to become autonomous. A well-designed workflow makes
                explicit where software acts and where human authority
                enters the process.
              </p>
            </div>

            <div>
              {humanItems.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className="grid gap-6 border-t border-white/[0.08] py-8 md:grid-cols-[70px_.5fr_1fr]"
                >
                  <span className="font-mono text-[6px] text-white/[0.17]">
                    {item.number}
                  </span>

                  <h3 className="text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="text-[12px] leading-7 text-white/[0.35]">
                    {item.description}
                  </p>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          GOVERNANCE
      ====================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <SectionIndex
            index="11"
            label="GOVERNANCE"
          />

          <div className="mt-16 grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <ShieldCheck
                size={22}
                className="text-white/[0.28]"
              />

              <h2 className="mt-10 max-w-[650px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl">
                Intelligence needs
                <span className="block text-white/[0.25]">
                  boundaries.
                </span>
              </h2>
            </div>

            <div>
              {[
                {
                  title: "What can AI read?",
                  text:
                    "Define which enterprise information and knowledge sources the workflow may access.",
                },
                {
                  title: "What can AI decide?",
                  text:
                    "Define whether AI classifies, recommends, selects a workflow path or only prepares context.",
                },
                {
                  title: "What can AI generate?",
                  text:
                    "Determine where generated content can be used directly and where review is required.",
                },
                {
                  title: "What can automation execute?",
                  text:
                    "Limit downstream actions according to system identity, permissions and business risk.",
                },
                {
                  title: "When must a human intervene?",
                  text:
                    "Establish explicit escalation conditions for uncertainty, policy conflicts and high-impact actions.",
                },
                {
                  title: "What evidence must remain?",
                  text:
                    "Capture enough workflow history to support operations, investigation and required auditability.",
                },
              ].map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  className="grid gap-6 border-t border-white/[0.08] py-8 md:grid-cols-[70px_.7fr_1fr]"
                >
                  <span className="font-mono text-[6px] text-white/[0.16]">
                    G-{String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-[15px] font-medium">
                    {item.title}
                  </h3>

                  <p className="text-[12px] leading-7 text-white/[0.35]">
                    {item.text}
                  </p>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          DELIVERY STAGES
      ====================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.35fr_1.65fr]">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <SectionIndex
                index="12"
                label="DELIVERY"
              />

              <h2 className="mt-9 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-6xl">
                From process
                <span className="block text-white/[0.25]">
                  to intelligence.
                </span>
              </h2>
            </div>

            <div>
              {stages.map((stage) => (
                <motion.article
                  key={stage.number}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    ease,
                  }}
                  className="min-h-[330px] border-t border-white/[0.08] py-10"
                >
                  <div className="flex justify-between">
                    <span className="font-mono text-[7px] text-white/[0.16]">
                      {stage.number}
                    </span>

                    <span className="font-mono text-[6px] tracking-[0.2em] text-white/[0.28]">
                      {stage.label}
                    </span>
                  </div>

                  <div className="mt-16 grid gap-9 md:grid-cols-[.75fr_1fr]">
                    <h3 className="text-4xl font-medium leading-[1] tracking-[-0.055em] md:text-5xl">
                      {stage.title}
                    </h3>

                    <p className="max-w-[580px] text-[13px] leading-8 text-white/[0.38]">
                      {stage.description}
                    </p>
                  </div>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          PRINCIPLES
      ====================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <SectionIndex
            index="13"
            label="DESIGN PRINCIPLES"
          />

          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="mt-12 max-w-[1050px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl"
          >
            Automate deliberately.
            <span className="block text-white/[0.25]">
              Not automatically.
            </span>
          </motion.h2>

          <div className="mt-20">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -25 : 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  ease,
                }}
                className="border-t border-white/[0.08] py-10"
              >
                <div className="grid gap-7 md:grid-cols-[100px_1fr_1fr]">
                  <span className="font-mono text-[7px] text-white/[0.18]">
                    {principle.number}
                  </span>

                  <h3 className="max-w-[500px] text-2xl font-medium tracking-[-0.04em] md:text-3xl">
                    {principle.title}
                  </h3>

                  <p className="max-w-[580px] text-[13px] leading-8 text-white/[0.37]">
                    {principle.description}
                  </p>
                </div>
              </motion.article>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </section>

      {/* ======================================================
          AI AGENTS
      ====================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-40 md:px-10 md:py-60">
        <div className="mx-auto max-w-[1500px]">
          <SectionIndex
            index="14"
            label="AI AGENTS"
          />

          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="mt-14 max-w-[1300px] text-[clamp(4rem,8vw,8.4rem)] font-semibold leading-[0.86] tracking-[-0.08em]"
          >
            Agents can become
            <span className="text-white/[0.24]">
              {" "}
              participants
            </span>

            <span className="block">
              inside controlled workflows.
            </span>
          </motion.h2>

          <div className="mt-20 grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-3">
            <div>
              <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.22]">
                OBSERVE
              </span>

              <p className="mt-7 text-[13px] leading-8 text-white/[0.37]">
                An agent receives a task together with the context,
                instructions and resources required to work on it.
              </p>
            </div>

            <div>
              <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.22]">
                REASON
              </span>

              <p className="mt-7 text-[13px] leading-8 text-white/[0.37]">
                It determines which approved tools or information are
                required to progress toward the requested outcome.
              </p>
            </div>

            <div>
              <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.22]">
                ACT
              </span>

              <p className="mt-7 text-[13px] leading-8 text-white/[0.37]">
                Actions remain constrained by permissions, workflow
                boundaries, tool access and appropriate human approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          OBSERVABILITY
      ====================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <SectionIndex
                index="15"
                label="OBSERVABILITY"
              />

              <Eye
                size={21}
                className="mt-16 text-white/[0.28]"
              />

              <h2 className="mt-10 max-w-[650px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl">
                Automation must
                <span className="block text-white/[0.25]">
                  explain its operation.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-[720px] text-[14px] leading-9 text-white/[0.42]">
                Intelligent workflows combine deterministic systems
                with probabilistic AI components. Production teams
                therefore need visibility into both process execution
                and AI-assisted steps.
              </p>

              <div className="mt-14 border-t border-white/[0.08]">
                {[
                  "Which workflow started?",
                  "What information entered the process?",
                  "Which knowledge was retrieved?",
                  "Where was AI used?",
                  "Was human review requested?",
                  "Which systems were changed?",
                  "Did execution succeed?",
                  "Where did exceptions occur?",
                  "How long did each stage wait?",
                  "What outcome completed the process?",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.03,
                    }}
                    className="flex items-center gap-5 border-b border-white/[0.08] py-5"
                  >
                    <span className="font-mono text-[6px] text-white/[0.16]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[12px] text-white/[0.4]">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          OUTCOMES
      ====================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <SectionIndex
            index="16"
            label="OUTCOMES"
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item, index) => (
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
                viewport={{ once: true }}
                transition={{
                  delay: (index % 3) * 0.06,
                }}
                className="min-h-[380px] border border-white/[0.08] p-8"
              >
                <span className="font-mono text-[7px] text-white/[0.18]">
                  OUTCOME / {item.number}
                </span>

                <h3 className="mt-24 max-w-[430px] text-3xl font-medium leading-[1.02] tracking-[-0.05em]">
                  {item.title}
                </h3>

                <p className="mt-7 max-w-[430px] text-[12px] leading-7 text-white/[0.36]">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          MANIFESTO
      ====================================================== */}

      <section className="bg-black px-5 py-44 md:px-10 md:py-64">
        <div className="mx-auto max-w-[1500px]">
          <SectionIndex
            index="17"
            label="MANIFESTO"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="mt-16"
          >
            {[
              "Understand before acting.",
              "Retrieve before guessing.",
              "Use rules when rules are enough.",
              "Use AI when context matters.",
              "Escalate when judgment matters.",
              "Observe what automation does.",
              "Control what automation can do.",
            ].map((item, index) => (
              <motion.div
                key={item}
                variants={reveal}
                className="border-t border-white/[0.08] py-8"
              >
                <div className="grid gap-5 md:grid-cols-[90px_1fr]">
                  <span className="font-mono text-[7px] text-white/[0.16]">
                    M-{String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-3xl font-medium tracking-[-0.045em] md:text-5xl">
                    {item}
                  </h3>
                </div>
              </motion.div>
            ))}

            <div className="border-t border-white/[0.08]" />
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          LARGE MOVING TEXT
      ====================================================== */}

      <section className="overflow-hidden border-y border-white/[0.08] bg-black py-20">
        <motion.div
          initial={{
            x: "8%",
          }}
          whileInView={{
            x: "-38%",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 2.4,
            ease,
          }}
          className="w-max whitespace-nowrap"
        >
          <span className="text-[clamp(6rem,14vw,14rem)] font-semibold leading-none tracking-[-0.09em] text-white/[0.065]">
            UNDERSTAND → REASON → ORCHESTRATE → ACT
          </span>
        </motion.div>
      </section>

      {/* ======================================================
          FINAL
      ====================================================== */}

      <section className="relative bg-black px-5 py-44 md:px-10 md:py-64">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[120px_1fr]">
            <div className="hidden border-r border-white/[0.08] lg:block">
              <span
                className="font-mono text-[7px] tracking-[0.22em] text-white/[0.2]"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                INTELLIGENT AUTOMATION / HYI.AI
              </span>
            </div>

            <div className="lg:pl-12">
              <SectionIndex
                index="18"
                label="INTELLIGENT ENTERPRISE"
              />

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 1,
                  ease,
                }}
                className="mt-16 max-w-[1400px] text-[clamp(4.4rem,9vw,9.5rem)] font-semibold leading-[0.83] tracking-[-0.087em]"
              >
                Give software
                <span className="text-white/[0.24]">
                  {" "}
                  context.
                </span>

                <span className="mt-4 block">
                  Give people
                  <span className="text-white/[0.24]">
                    {" "}
                    control.
                  </span>
                </span>

                <span className="mt-4 block">
                  Let work
                  <span className="text-white/[0.24]">
                    {" "}
                    move.
                  </span>
                </span>
              </motion.h2>

              <div className="mt-24 grid gap-12 border-t border-white/[0.08] pt-10 lg:grid-cols-[.3fr_1fr]">
                <div>
                  <p className="font-mono text-[6px] leading-6 tracking-[0.18em] text-white/[0.2]">
                    AI
                    <br />
                    KNOWLEDGE
                    <br />
                    WORKFLOW
                    <br />
                    SYSTEMS
                    <br />
                    PEOPLE
                    <br />
                    GOVERNANCE
                  </p>
                </div>

                <div>
                  <p className="max-w-[800px] text-[15px] leading-9 text-white/[0.45]">
                    Intelligent automation turns AI from an isolated
                    capability into part of the operational fabric of
                    the enterprise. Information enters, context is
                    established, decisions are constrained, work is
                    orchestrated and approved actions move through
                    connected systems.
                  </p>

                  <p className="mt-8 max-w-[800px] text-[13px] leading-8 text-white/[0.34]">
                    The objective is not autonomous technology for its
                    own sake. The objective is an operating environment
                    where routine work can move with less friction,
                    artificial intelligence can assist where context
                    matters and people retain authority where judgment
                    matters.
                  </p>

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileInView={{
                      width: "100%",
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      ease,
                    }}
                    className="mt-12 h-px bg-white/[0.1]"
                  />

                  <div className="mt-8 flex flex-wrap gap-x-8 gap-y-5">
                    {[
                      "UNDERSTAND",
                      "RETRIEVE",
                      "REASON",
                      "DECIDE",
                      "ORCHESTRATE",
                      "EXECUTE",
                      "OBSERVE",
                    ].map((item, index) => (
                      <motion.span
                        key={item}
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.05,
                        }}
                        whileHover={{
                          y: -3,
                        }}
                        className="font-mono text-[6px] tracking-[0.18em] text-white/[0.25]"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{
                      x: 7,
                    }}
                    className="mt-16 flex w-fit items-center gap-4 border-b border-white/[0.2] pb-3"
                  >
                    <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.4]">
                      BUILD INTELLIGENT OPERATIONS
                    </span>

                    <ArrowRight
                      size={11}
                      className="text-white/[0.4]"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}