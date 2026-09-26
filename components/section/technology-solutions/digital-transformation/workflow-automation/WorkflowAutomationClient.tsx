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
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  Circle,
  Clock3,
  Database,
  FileCheck2,
  Gauge,
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

type WorkflowStep = {
  number: string;
  label: string;
  title: string;
  description: string;
};

type AutomationArea = {
  number: string;
  title: string;
  description: string;
  examples: string[];
};

type AIAbility = {
  number: string;
  title: string;
  description: string;
};

type Principle = {
  number: string;
  title: string;
  description: string;
};

type Outcome = {
  number: string;
  title: string;
  description: string;
};

type Layer = {
  number: string;
  label: string;
  title: string;
  description: string;
};

/* ============================================================
   DATA
============================================================ */

const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    label: "TRIGGER",
    title: "Something happens.",
    description:
      "A customer request arrives, a record changes, a document is uploaded, an approval is required, a threshold is reached or another business event starts the workflow.",
  },
  {
    number: "02",
    label: "UNDERSTAND",
    title: "AI interprets the context.",
    description:
      "Structured data, documents, messages and historical information can be analyzed to determine what happened and what information is relevant to the process.",
  },
  {
    number: "03",
    label: "DECIDE",
    title: "The next action is determined.",
    description:
      "Business rules, policies, AI reasoning and workflow conditions determine which path should be taken and whether human judgment is required.",
  },
  {
    number: "04",
    label: "ACT",
    title: "Systems execute the work.",
    description:
      "Applications, APIs, databases and enterprise platforms perform approved actions such as updating records, generating documents or creating tasks.",
  },
  {
    number: "05",
    label: "REVIEW",
    title: "Humans enter where judgment matters.",
    description:
      "Automation does not need to remove people from every workflow. High-impact decisions can be routed to appropriate teams with useful context already prepared.",
  },
  {
    number: "06",
    label: "VERIFY",
    title: "The result is checked.",
    description:
      "Workflow controls verify whether the required action completed successfully and identify exceptions that require investigation.",
  },
  {
    number: "07",
    label: "LEARN",
    title: "The process produces new intelligence.",
    description:
      "Operational data can reveal delays, repeated exceptions and unnecessary manual work that inform the next cycle of process improvement.",
  },
];

const automationAreas: AutomationArea[] = [
  {
    number: "01",
    title: "Document workflows",
    description:
      "Use AI to classify, extract, summarize and route information from business documents before downstream systems or teams act on it.",
    examples: [
      "Document classification",
      "Information extraction",
      "Validation",
      "Routing",
    ],
  },
  {
    number: "02",
    title: "Approval workflows",
    description:
      "Coordinate approvals across teams with clear rules, contextual information, escalation paths and complete process visibility.",
    examples: [
      "Request intake",
      "Policy checks",
      "Approvals",
      "Escalation",
    ],
  },
  {
    number: "03",
    title: "Customer operations",
    description:
      "Connect customer requests with data, knowledge and operational systems so common service processes can move faster.",
    examples: [
      "Request routing",
      "Case enrichment",
      "Response assistance",
      "Follow-up",
    ],
  },
  {
    number: "04",
    title: "Finance operations",
    description:
      "Automate repeatable finance workflows while retaining controls around validation, authorization and exception handling.",
    examples: [
      "Invoice processing",
      "Reconciliation",
      "Validation",
      "Reporting",
    ],
  },
  {
    number: "05",
    title: "Employee workflows",
    description:
      "Reduce repetitive administrative work across employee requests, onboarding and internal service operations.",
    examples: [
      "Onboarding",
      "Access requests",
      "Internal support",
      "Notifications",
    ],
  },
  {
    number: "06",
    title: "IT operations",
    description:
      "Coordinate operational events, tickets, diagnostics and remediation steps across infrastructure and software environments.",
    examples: [
      "Incident routing",
      "Diagnostics",
      "Remediation",
      "Escalation",
    ],
  },
  {
    number: "07",
    title: "Data operations",
    description:
      "Automate repeatable data movement, validation, transformation and quality workflows across enterprise platforms.",
    examples: [
      "Data ingestion",
      "Validation",
      "Transformation",
      "Quality checks",
    ],
  },
  {
    number: "08",
    title: "Compliance workflows",
    description:
      "Create repeatable processes around evidence collection, policy checks, reviews and controlled approvals.",
    examples: [
      "Evidence",
      "Policy checks",
      "Review",
      "Audit trail",
    ],
  },
];

const aiAbilities: AIAbility[] = [
  {
    number: "AI / 01",
    title: "Read",
    description:
      "Interpret documents, messages, forms and unstructured information entering a workflow.",
  },
  {
    number: "AI / 02",
    title: "Understand",
    description:
      "Determine intent, entities, context and relevant information before selecting the next process step.",
  },
  {
    number: "AI / 03",
    title: "Retrieve",
    description:
      "Find appropriate enterprise knowledge, policies and historical context required by the workflow.",
  },
  {
    number: "AI / 04",
    title: "Reason",
    description:
      "Evaluate available information against workflow rules and decision criteria.",
  },
  {
    number: "AI / 05",
    title: "Generate",
    description:
      "Prepare summaries, responses, documents and structured information for downstream work.",
  },
  {
    number: "AI / 06",
    title: "Route",
    description:
      "Determine which workflow, system or human team should receive the next task.",
  },
  {
    number: "AI / 07",
    title: "Assist",
    description:
      "Provide people with relevant context and recommendations when human judgment is required.",
  },
  {
    number: "AI / 08",
    title: "Observe",
    description:
      "Analyze workflow outcomes and exceptions to identify opportunities for further improvement.",
  },
];

const layers: Layer[] = [
  {
    number: "01",
    label: "EVENT",
    title: "Trigger",
    description:
      "Business events, requests, system changes and scheduled conditions initiate automated processes.",
  },
  {
    number: "02",
    label: "CONTEXT",
    title: "Understand",
    description:
      "Data, documents, messages and historical information establish the context required by the workflow.",
  },
  {
    number: "03",
    label: "INTELLIGENCE",
    title: "Decide",
    description:
      "AI, business rules and policies determine which process path or action should follow.",
  },
  {
    number: "04",
    label: "ORCHESTRATION",
    title: "Coordinate",
    description:
      "Workflow engines coordinate tasks across APIs, applications, people and enterprise systems.",
  },
  {
    number: "05",
    label: "EXECUTION",
    title: "Act",
    description:
      "Systems execute approved operations while people handle decisions requiring accountability or judgment.",
  },
  {
    number: "06",
    label: "OBSERVABILITY",
    title: "Measure",
    description:
      "Operational signals reveal process status, delays, exceptions and recurring sources of friction.",
  },
];

const principles: Principle[] = [
  {
    number: "P01",
    title: "Automate the process, not the chaos.",
    description:
      "A poorly designed workflow does not become a good workflow simply because technology executes it faster.",
  },
  {
    number: "P02",
    title: "Use AI where interpretation matters.",
    description:
      "AI is particularly useful where workflows depend on language, documents, context and variable information.",
  },
  {
    number: "P03",
    title: "Keep deterministic rules deterministic.",
    description:
      "Clear business rules should remain explicit when probabilistic reasoning does not provide additional value.",
  },
  {
    number: "P04",
    title: "Keep humans where accountability matters.",
    description:
      "High-impact decisions should preserve appropriate review, authorization and escalation controls.",
  },
  {
    number: "P05",
    title: "Design exceptions first.",
    description:
      "Production automation needs clear behavior when information is missing, systems fail or confidence is insufficient.",
  },
  {
    number: "P06",
    title: "Observe every workflow.",
    description:
      "Automation should expose enough operational information to understand what happened and why.",
  },
];

const outcomes: Outcome[] = [
  {
    number: "01",
    title: "Less repetitive work",
    description:
      "Move repeatable information processing and system coordination away from manual execution.",
  },
  {
    number: "02",
    title: "Faster process movement",
    description:
      "Reduce waiting between workflow steps when decisions and actions can be coordinated automatically.",
  },
  {
    number: "03",
    title: "Better operational consistency",
    description:
      "Execute defined workflow rules and controls consistently across repeated business processes.",
  },
  {
    number: "04",
    title: "More useful human attention",
    description:
      "Allow teams to spend more time on exceptions, judgment and complex work instead of routine coordination.",
  },
];

/* ============================================================
   ANIMATION
============================================================ */

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

/* ============================================================
   COMPONENTS
============================================================ */

function Label({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -12,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease,
      }}
      className="flex items-center gap-4"
    >
      <span className="font-mono text-[7px] text-white/[0.18]">
        {number}
      </span>

      <div className="h-px w-8 bg-white/[0.16]" />

      <span className="font-mono text-[7px] tracking-[0.22em] text-white/[0.38]">
        {children}
      </span>
    </motion.div>
  );
}

function Line() {
  return (
    <div className="relative h-px overflow-hidden bg-white/[0.08]">
      <motion.div
        initial={{
          x: "-100%",
        }}
        whileInView={{
          x: "400%",
        }}
        viewport={{ once: true }}
        transition={{
          duration: 2,
          ease,
        }}
        className="absolute inset-y-0 w-[20%] bg-white/[0.5]"
      />
    </div>
  );
}

/* ============================================================
   MAIN
============================================================ */

export default function WorkflowAutomationClient() {
  const { scrollYProgress } = useScroll();

  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 0.12],
    [0, 90],
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.1],
    [1, 0.25],
  );

  const marqueeX = useTransform(
    scrollYProgress,
    [0.05, 0.5],
    ["0%", "-25%"],
  );

  return (
    <div className="relative overflow-hidden bg-[#000000] text-white">
      {/* ====================================================
          SCROLL PROGRESS
      ==================================================== */}

      <motion.div
        style={{
          scaleX: scrollProgress,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[9999] h-[2px] w-full bg-white"
      />

      {/* ====================================================
          HERO
      ==================================================== */}

      <section className="relative min-h-screen bg-[#000000] px-5 pb-10 pt-36 md:px-10 md:pt-44">
        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
          }}
          className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1500px] flex-col justify-between"
        >
          <div className="flex items-start justify-between border-t border-white/[0.09] pt-5">
            <p className="font-mono text-[6px] leading-5 tracking-[0.2em] text-white/[0.3]">
              DIGITAL TRANSFORMATION
              <br />
              WORKFLOW AUTOMATION
            </p>

            <p className="hidden text-right font-mono text-[6px] leading-5 tracking-[0.2em] text-white/[0.2] md:block">
              AI / AUTOMATION
              <br />
              ORCHESTRATION / OPERATIONS
            </p>
          </div>

          <div className="py-20">
            <motion.p
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
                delay: 0.15,
                ease,
              }}
              className="font-mono text-[7px] tracking-[0.24em] text-white/[0.3]"
            >
              WORK SHOULD MOVE WITHOUT WAITING FOR SOMEONE TO MOVE IT.
            </motion.p>

            <motion.h1
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="mt-9 max-w-[1450px] text-[clamp(4.5rem,11vw,11rem)] font-semibold leading-[0.78] tracking-[-0.09em]"
            >
              <motion.span
                variants={fadeUp}
                className="block"
              >
                Workflows
              </motion.span>

              <motion.span
                variants={fadeUp}
                className="block text-white/[0.27]"
              >
                that move.
              </motion.span>
            </motion.h1>
          </div>

          <motion.div
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
              delay: 0.5,
              ease,
            }}
            className="grid gap-10 border-t border-white/[0.09] py-8 lg:grid-cols-[.35fr_.45fr_1fr]"
          >
            <div>
              <span className="font-mono text-[6px] tracking-[0.2em] text-white/[0.18]">
                WA / 2026
              </span>
            </div>

            <div>
              <p className="font-mono text-[6px] leading-6 tracking-[0.18em] text-white/[0.24]">
                TRIGGER
                <br />
                UNDERSTAND
                <br />
                DECIDE
                <br />
                ACT
                <br />
                VERIFY
              </p>
            </div>

            <div>
              <p className="max-w-[760px] text-[15px] leading-8 text-white/[0.5] md:text-[17px] md:leading-9">
                Design AI-enabled workflows that connect information,
                decisions, people and enterprise systems so repetitive
                work can move automatically while important decisions
                remain governed.
              </p>

              <motion.a
                href="#automation"
                whileHover={{
                  x: 6,
                }}
                className="mt-7 flex w-fit items-center gap-4 font-mono text-[7px] tracking-[0.2em] text-white/[0.32]"
              >
                EXPLORE AUTOMATION

                <ArrowDown size={11} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ====================================================
          MOVING TEXT
      ==================================================== */}

      <section className="overflow-hidden border-y border-white/[0.08] bg-black py-8">
        <motion.div
          style={{
            x: marqueeX,
          }}
          className="flex w-max items-center whitespace-nowrap"
        >
          {[
            "TRIGGER",
            "UNDERSTAND",
            "DECIDE",
            "ROUTE",
            "ACT",
            "VERIFY",
            "LEARN",
            "TRIGGER",
            "UNDERSTAND",
            "DECIDE",
            "ROUTE",
            "ACT",
            "VERIFY",
            "LEARN",
          ].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center"
            >
              <span className="px-8 text-3xl font-medium tracking-[-0.04em] text-white/[0.18] md:text-4xl">
                {item}
              </span>

              <Circle
                size={5}
                fill="currentColor"
                className="text-white/[0.15]"
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* ====================================================
          INTRO
      ==================================================== */}

      <section
        id="automation"
        className="bg-black px-5 py-36 md:px-10 md:py-52"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.32fr_1.68fr]">
            <div>
              <Label number="01">
                AUTOMATION
              </Label>
            </div>

            <div>
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 50,
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
                className="max-w-[1250px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl lg:text-[92px]"
              >
                Automation is not about
                <span className="text-white/[0.27]">
                  {" "}
                  removing people.
                </span>

                <span className="mt-3 block">
                  It is about removing
                  <span className="text-white/[0.27]">
                    {" "}
                    unnecessary work.
                  </span>
                </span>
              </motion.h2>

              <div className="mt-16 grid gap-10 border-t border-white/[0.08] pt-10 md:grid-cols-2">
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  className="text-[13px] leading-8 text-white/[0.4]"
                >
                  Enterprise processes often contain repeated data
                  entry, manual routing, status checks, document
                  handling, approvals and coordination between systems.
                  Much of that work exists because applications do not
                  naturally understand each other.
                </motion.p>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.08,
                  }}
                  className="text-[13px] leading-8 text-white/[0.4]"
                >
                  Modern workflow automation combines APIs, integration,
                  business rules, event-driven architecture and AI so
                  information can move between systems and people
                  without requiring manual coordination at every step.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Line />

      {/* ====================================================
          BIG STATEMENT
      ==================================================== */}

      <section className="bg-black px-5 py-40 md:px-10 md:py-60">
        <div className="mx-auto max-w-[1500px]">
          <Label number="02">
            THE SHIFT
          </Label>

          <motion.h2
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease,
            }}
            className="mt-14 max-w-[1450px] text-[clamp(4rem,8.8vw,9.3rem)] font-semibold leading-[0.84] tracking-[-0.085em]"
          >
            From people
            <span className="text-white/[0.25]">
              {" "}
              moving information
            </span>

            <span className="mt-4 block">
              to systems
              <span className="text-white/[0.25]">
                {" "}
                moving work.
              </span>
            </span>
          </motion.h2>

          <div className="mt-24 grid gap-10 border-t border-white/[0.08] pt-10 lg:grid-cols-[.3fr_.7fr_1fr]">
            <Workflow
              size={18}
              className="text-white/[0.3]"
            />

            <p className="font-mono text-[6px] leading-6 tracking-[0.18em] text-white/[0.22]">
              EVENT
              <br />
              CONTEXT
              <br />
              DECISION
              <br />
              ACTION
              <br />
              OUTCOME
            </p>

            <p className="max-w-[700px] text-[14px] leading-9 text-white/[0.45]">
              Workflow automation creates a controlled path between a
              business event and the actions required to complete the
              process. AI expands that path by helping software work
              with language, documents and contextual information that
              traditional automation struggles to interpret.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================
          WORKFLOW
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.35fr_1.65fr]">
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <Label number="03">
                WORKFLOW
              </Label>

              <h2 className="mt-8 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-6xl">
                From event
                <span className="block text-white/[0.27]">
                  to outcome.
                </span>
              </h2>

              <p className="mt-8 max-w-[360px] text-[12px] leading-8 text-white/[0.35]">
                A workflow is a sequence of coordinated decisions and
                actions. Automation determines which of those steps can
                move without waiting for manual intervention.
              </p>
            </div>

            <div>
              {workflowSteps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 45,
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
                    duration: 0.75,
                    ease,
                  }}
                  className="min-h-[380px] border-t border-white/[0.08] py-11"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[7px] text-white/[0.18]">
                      {step.number}
                    </span>

                    <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.34]">
                      {step.label}
                    </span>
                  </div>

                  <div className="mt-20 grid gap-10 md:grid-cols-[.8fr_1.2fr]">
                    <motion.h3
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      className="max-w-[430px] text-4xl font-medium leading-[1] tracking-[-0.055em] md:text-5xl"
                    >
                      {step.title}
                    </motion.h3>

                    <div>
                      <p className="max-w-[600px] text-[13px] leading-8 text-white/[0.4]">
                        {step.description}
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
                          duration: 1,
                          delay: 0.15,
                        }}
                        className="mt-10 h-px bg-white/[0.08]"
                      />

                      <div className="mt-5 flex items-center justify-between">
                        <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.18]">
                          STEP {step.number}
                        </span>

                        {index !== workflowSteps.length - 1 && (
                          <ArrowDown
                            size={10}
                            className="text-white/[0.2]"
                          />
                        )}
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

      {/* ====================================================
          AI AUTOMATION
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-56">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <Label number="04">
                AI AUTOMATION
              </Label>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="mt-10 max-w-[650px] text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl"
              >
                Traditional automation follows.
                <span className="mt-3 block text-white/[0.27]">
                  AI can interpret.
                </span>
              </motion.h2>

              <p className="mt-10 max-w-[540px] text-[13px] leading-8 text-white/[0.38]">
                Traditional workflow engines work extremely well when
                inputs and decisions are predictable. AI extends
                automation into processes containing language,
                documents, ambiguity and contextual information.
              </p>
            </div>

            <div className="border-t border-white/[0.08]">
              {aiAbilities.map((item, index) => (
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
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  className="grid gap-5 border-b border-white/[0.08] py-7 md:grid-cols-[100px_.4fr_1fr]"
                >
                  <span className="font-mono text-[6px] text-white/[0.2]">
                    {item.number}
                  </span>

                  <h3 className="text-xl font-medium tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="text-[12px] leading-7 text-white/[0.36]">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          QUOTE
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-40 md:px-10 md:py-60">
        <div className="mx-auto max-w-[1500px]">
          <motion.span
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            className="block text-[110px] font-light leading-none text-white/[0.1] md:text-[180px]"
          >
            “
          </motion.span>

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
            className="-mt-12 max-w-[1350px] text-5xl font-medium leading-[1] tracking-[-0.065em] md:text-7xl lg:text-[90px]"
          >
            If a person spends every day moving information
            <span className="text-white/[0.27]">
              {" "}
              between systems,
            </span>

            <span className="block">
              the workflow is asking
              <span className="text-white/[0.27]">
                {" "}
                to be redesigned.
              </span>
            </span>
          </motion.h2>
        </div>
      </section>

      {/* ====================================================
          AUTOMATION AREAS
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <Label number="05">
            AUTOMATION AREAS
          </Label>

          <div className="mt-16">
            {automationAreas.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -25 : 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  ease,
                }}
                className="border-t border-white/[0.08] py-10"
              >
                <div className="grid gap-8 lg:grid-cols-[100px_.7fr_1fr_1fr]">
                  <span className="font-mono text-[7px] text-white/[0.18]">
                    {item.number}
                  </span>

                  <h3 className="text-3xl font-medium leading-[1.05] tracking-[-0.05em]">
                    {item.title}
                  </h3>

                  <p className="max-w-[500px] text-[12px] leading-7 text-white/[0.38]">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                    {item.examples.map((example) => (
                      <div
                        key={example}
                        className="border-t border-white/[0.07] pt-3"
                      >
                        <span className="font-mono text-[6px] tracking-[0.12em] text-white/[0.24]">
                          {example.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </section>

      {/* ====================================================
          OPERATING LAYERS
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.35fr_1.65fr]">
            <div>
              <Label number="06">
                OPERATING LAYERS
              </Label>

              <h2 className="mt-9 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-6xl">
                One workflow.
                <span className="block text-white/[0.27]">
                  Multiple layers.
                </span>
              </h2>
            </div>

            <div>
              {layers.map((layer, index) => (
                <motion.div
                  key={layer.number}
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
                    delay: index * 0.05,
                  }}
                  className="grid gap-7 border-t border-white/[0.08] py-9 md:grid-cols-[80px_.4fr_.6fr_1fr]"
                >
                  <span className="font-mono text-[6px] text-white/[0.18]">
                    {layer.number}
                  </span>

                  <span className="font-mono text-[6px] tracking-[0.17em] text-white/[0.3]">
                    {layer.label}
                  </span>

                  <h3 className="text-2xl font-medium tracking-[-0.04em]">
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
        </div>
      </section>

      {/* ====================================================
          HUMAN + MACHINE
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-56">
        <div className="mx-auto max-w-[1500px]">
          <Label number="07">
            HUMAN + MACHINE
          </Label>

          <div className="mt-16 grid lg:grid-cols-2">
            <motion.article
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              className="min-h-[650px] border border-white/[0.08] p-8 md:p-12"
            >
              <Bot
                size={20}
                className="text-white/[0.3]"
              />

              <span className="mt-8 block font-mono text-[7px] tracking-[0.2em] text-white/[0.25]">
                AUTOMATE
              </span>

              <h3 className="mt-10 text-5xl font-medium tracking-[-0.06em] md:text-6xl">
                Machines handle
                <span className="block text-white/[0.27]">
                  repetition.
                </span>
              </h3>

              <div className="mt-20">
                {[
                  "Data movement",
                  "Classification",
                  "Validation",
                  "System updates",
                  "Notifications",
                  "Routine routing",
                  "Status tracking",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-t border-white/[0.07] py-4"
                  >
                    <span className="font-mono text-[6px] text-white/[0.16]">
                      0{index + 1}
                    </span>

                    <span className="text-[12px] text-white/[0.38]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              className="min-h-[650px] border border-l-0 border-white/[0.1] p-8 md:p-12"
            >
              <Users
                size={20}
                className="text-white/[0.3]"
              />

              <span className="mt-8 block font-mono text-[7px] tracking-[0.2em] text-white/[0.25]">
                AUGMENT
              </span>

              <h3 className="mt-10 text-5xl font-medium tracking-[-0.06em] md:text-6xl">
                People handle
                <span className="block text-white/[0.27]">
                  judgment.
                </span>
              </h3>

              <div className="mt-20">
                {[
                  "Complex exceptions",
                  "Accountability",
                  "Negotiation",
                  "Sensitive decisions",
                  "Creative problem solving",
                  "Relationship management",
                  "Final authorization",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-t border-white/[0.07] py-4"
                  >
                    <Check
                      size={9}
                      className="text-white/[0.3]"
                    />

                    <span className="text-[12px] text-white/[0.44]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ====================================================
          EXCEPTIONS
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <Label number="08">
                EXCEPTIONS
              </Label>

              <h2 className="mt-9 max-w-[650px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl">
                The happy path
                <span className="block text-white/[0.27]">
                  is the easy part.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-[700px] text-[15px] leading-9 text-white/[0.46]">
                Production workflow automation needs to know what to do
                when something does not happen as expected. Exceptions
                should be designed into the workflow rather than added
                after failures appear.
              </p>

              <div className="mt-12">
                {[
                  {
                    title: "Missing information",
                    text:
                      "Request required data or route the workflow for manual completion.",
                  },
                  {
                    title: "Low AI confidence",
                    text:
                      "Escalate interpretation to a human rather than treating uncertain output as certain.",
                  },
                  {
                    title: "System unavailable",
                    text:
                      "Retry appropriately, preserve workflow state and expose operational status.",
                  },
                  {
                    title: "Policy conflict",
                    text:
                      "Stop automatic execution and route the decision to an authorized reviewer.",
                  },
                  {
                    title: "Unexpected result",
                    text:
                      "Capture the exception with enough context for investigation and recovery.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
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
                      delay: index * 0.05,
                    }}
                    className="grid gap-5 border-t border-white/[0.08] py-7 md:grid-cols-[70px_.5fr_1fr]"
                  >
                    <span className="font-mono text-[6px] text-white/[0.18]">
                      EX-{String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-[14px] font-medium">
                      {item.title}
                    </h3>

                    <p className="text-[12px] leading-7 text-white/[0.35]">
                      {item.text}
                    </p>
                  </motion.div>
                ))}

                <div className="border-t border-white/[0.08]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          INTEGRATION
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <Label number="09">
            INTEGRATION
          </Label>

          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="mt-12 max-w-[1200px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl"
          >
            Automation becomes valuable when
            <span className="text-white/[0.27]">
              {" "}
              systems can participate.
            </span>
          </motion.h2>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: Database,
                title: "Data",
                text:
                  "Read and update governed information required by business workflows.",
              },
              {
                Icon: Network,
                title: "APIs",
                text:
                  "Connect applications and services through controlled interfaces.",
              },
              {
                Icon: GitBranch,
                title: "Events",
                text:
                  "Respond when meaningful changes occur across operational systems.",
              },
              {
                Icon: Layers3,
                title: "Applications",
                text:
                  "Coordinate work across CRM, ERP, service and custom platforms.",
              },
              {
                Icon: BrainCircuit,
                title: "AI",
                text:
                  "Interpret language, documents and contextual information.",
              },
              {
                Icon: Users,
                title: "People",
                text:
                  "Route judgment and authorization to appropriate teams.",
              },
              {
                Icon: ShieldCheck,
                title: "Controls",
                text:
                  "Apply security, policy and approval requirements to execution.",
              },
              {
                Icon: Gauge,
                title: "Observability",
                text:
                  "Understand process status, failures and operational behavior.",
              },
            ].map(({ Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: (index % 4) * 0.05,
                }}
                className="min-h-[300px] border-b border-r border-t border-white/[0.08] p-7"
              >
                <Icon
                  size={15}
                  className="text-white/[0.28]"
                />

                <h3 className="mt-20 text-2xl font-medium tracking-[-0.04em]">
                  {title}
                </h3>

                <p className="mt-5 text-[12px] leading-7 text-white/[0.35]">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          CONTROL
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <Label number="10">
                CONTROL
              </Label>

              <h2 className="mt-9 max-w-[700px] text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl">
                Faster work
                <span className="block text-white/[0.27]">
                  still needs control.
                </span>
              </h2>

              <p className="mt-9 max-w-[520px] text-[13px] leading-8 text-white/[0.37]">
                Automation can increase operational speed. Governance
                ensures that speed does not remove required security,
                accountability or business controls.
              </p>
            </div>

            <div>
              {[
                {
                  title: "Identity",
                  text:
                    "Every automated action should execute with appropriate system and user permissions.",
                },
                {
                  title: "Authorization",
                  text:
                    "High-impact operations should require the level of approval appropriate to the action.",
                },
                {
                  title: "Auditability",
                  text:
                    "Record enough workflow history to understand what happened and which decision path was followed.",
                },
                {
                  title: "Data governance",
                  text:
                    "Control which information workflows and AI systems are permitted to access.",
                },
                {
                  title: "AI boundaries",
                  text:
                    "Define when AI may recommend, decide, generate or execute within the workflow.",
                },
                {
                  title: "Human escalation",
                  text:
                    "Provide explicit paths for situations requiring judgment, review or accountability.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
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
                    delay: index * 0.05,
                  }}
                  className="grid gap-5 border-t border-white/[0.08] py-7 md:grid-cols-[70px_.45fr_1fr]"
                >
                  <span className="font-mono text-[6px] text-white/[0.18]">
                    C-{String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-[14px] font-medium">
                    {item.title}
                  </h3>

                  <p className="text-[12px] leading-7 text-white/[0.35]">
                    {item.text}
                  </p>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          OBSERVABILITY
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <Label number="11">
            WORKFLOW OBSERVABILITY
          </Label>

          <div className="mt-16 grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="text-5xl font-semibold leading-[0.95] tracking-[-0.065em] md:text-7xl"
              >
                You cannot improve
                <span className="block text-white/[0.27]">
                  what you cannot see.
                </span>
              </motion.h2>
            </div>

            <div>
              <p className="max-w-[700px] text-[14px] leading-9 text-white/[0.43]">
                Automated workflows create operational data that can
                reveal where processes slow down, where exceptions
                occur and which activities continue to require
                unnecessary manual intervention.
              </p>

              <div className="mt-12 border-t border-white/[0.08]">
                {[
                  "Workflow completion",
                  "Processing time",
                  "Waiting time",
                  "Exception frequency",
                  "Human intervention",
                  "Retry frequency",
                  "Failure category",
                  "Process abandonment",
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
                      delay: index * 0.04,
                    }}
                    className="flex items-center justify-between border-b border-white/[0.08] py-5"
                  >
                    <div className="flex items-center gap-5">
                      <span className="font-mono text-[6px] text-white/[0.17]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[12px] text-white/[0.42]">
                        {item}
                      </span>
                    </div>

                    <ChevronRight
                      size={10}
                      className="text-white/[0.2]"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          PRINCIPLES
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1500px]">
          <Label number="12">
            AUTOMATION PRINCIPLES
          </Label>

          <div className="mt-16">
            {principles.map((principle, index) => (
              <motion.article
                key={principle.number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -20 : 20,
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
                className="border-t border-white/[0.08] py-11"
              >
                <div className="grid gap-7 md:grid-cols-[100px_1fr_1fr]">
                  <span className="font-mono text-[7px] text-white/[0.2]">
                    {principle.number}
                  </span>

                  <h3 className="max-w-[500px] text-2xl font-medium tracking-[-0.04em] md:text-3xl">
                    {principle.title}
                  </h3>

                  <p className="max-w-[570px] text-[13px] leading-8 text-white/[0.38]">
                    {principle.description}
                  </p>
                </div>
              </motion.article>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </section>

      {/* ====================================================
          BEFORE / AFTER
      ==================================================== */}

      <section className="bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <Label number="13">
            PROCESS SHIFT
          </Label>

          <div className="mt-16 grid lg:grid-cols-2">
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              className="border border-white/[0.08] p-8 md:p-12"
            >
              <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.22]">
                MANUAL
              </span>

              <h3 className="mt-12 text-4xl font-medium leading-[1] tracking-[-0.055em] md:text-6xl">
                People coordinate
                <span className="block text-white/[0.27]">
                  every step.
                </span>
              </h3>

              <div className="mt-16">
                {[
                  "Read incoming request",
                  "Copy information",
                  "Search another system",
                  "Send for approval",
                  "Wait for response",
                  "Update record",
                  "Send notification",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-t border-white/[0.07] py-5"
                  >
                    <span className="font-mono text-[6px] text-white/[0.16]">
                      0{index + 1}
                    </span>

                    <span className="text-[12px] text-white/[0.34]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              className="border border-l-0 border-white/[0.11] p-8 md:p-12"
            >
              <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.42]">
                ORCHESTRATED
              </span>

              <h3 className="mt-12 text-4xl font-medium leading-[1] tracking-[-0.055em] md:text-6xl">
                Systems coordinate
                <span className="block text-white/[0.27]">
                  routine work.
                </span>
              </h3>

              <div className="mt-16">
                {[
                  "Capture event",
                  "Interpret information",
                  "Retrieve context",
                  "Apply workflow rules",
                  "Request judgment if required",
                  "Execute approved action",
                  "Record outcome",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-t border-white/[0.08] py-5"
                  >
                    <Check
                      size={9}
                      className="text-white/[0.35]"
                    />

                    <span className="text-[12px] text-white/[0.46]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================================================
          OUTCOMES
      ==================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-36 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <Label number="14">
            OUTCOMES
          </Label>

          <div className="mt-16 grid md:grid-cols-2">
            {outcomes.map((outcome, index) => (
              <motion.article
                key={outcome.number}
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
                  delay: index * 0.05,
                }}
                className="min-h-[380px] border border-white/[0.08] p-8 md:p-11"
              >
                <span className="font-mono text-[7px] text-white/[0.2]">
                  OUTCOME / {outcome.number}
                </span>

                <h3 className="mt-24 max-w-[520px] text-4xl font-medium leading-[1] tracking-[-0.055em] md:text-5xl">
                  {outcome.title}
                </h3>

                <p className="mt-7 max-w-[520px] text-[13px] leading-8 text-white/[0.38]">
                  {outcome.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          MOVING GIANT TEXT
      ==================================================== */}

      <section className="overflow-hidden bg-black py-24">
        <motion.div
          initial={{
            x: "10%",
          }}
          whileInView={{
            x: "-28%",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 2.2,
            ease,
          }}
          className="w-max whitespace-nowrap"
        >
          <span className="text-[clamp(5rem,12vw,12rem)] font-semibold leading-none tracking-[-0.085em] text-white/[0.07]">
            EVENT → INTELLIGENCE → DECISION → ACTION → OUTCOME
          </span>
        </motion.div>
      </section>

      {/* ====================================================
          FINAL SECTION
      ==================================================== */}

      <section className="border-t border-white/[0.08] bg-black px-5 py-40 md:px-10 md:py-64">
        <div className="mx-auto max-w-[1500px]">
          <Label number="15">
            WORKFLOW AUTOMATION
          </Label>

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
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease,
            }}
            className="mt-14 max-w-[1450px] text-[clamp(4.3rem,9.4vw,10rem)] font-semibold leading-[0.82] tracking-[-0.09em]"
          >
            Let people
            <span className="text-white/[0.27]">
              {" "}
              make decisions.
            </span>

            <span className="mt-5 block">
              Let systems
            </span>

            <span className="block text-white/[0.27]">
              move the work.
            </span>
          </motion.h2>

          <div className="mt-24 grid gap-12 border-t border-white/[0.08] pt-10 lg:grid-cols-[.3fr_.4fr_1fr]">
            <div>
              <Workflow
                size={19}
                className="text-white/[0.28]"
              />
            </div>

            <div>
              <p className="font-mono text-[6px] leading-6 tracking-[0.2em] text-white/[0.22]">
                AUTOMATION
                <br />
                AI
                <br />
                INTEGRATION
                <br />
                ORCHESTRATION
                <br />
                GOVERNANCE
              </p>
            </div>

            <div>
              <p className="max-w-[760px] text-[15px] leading-9 text-white/[0.47]">
                AI-powered workflow automation connects enterprise
                information with decisions and actions so work can move
                through the organization with less manual coordination.
              </p>

              <p className="mt-7 max-w-[760px] text-[13px] leading-8 text-white/[0.34]">
                The objective is not automation everywhere. The
                objective is to determine where machines can handle
                repetitive coordination, where AI can interpret
                information and where people should retain judgment,
                responsibility and control.
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
                className="mt-12 h-px bg-white/[0.12]"
              />

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-5">
                {[
                  "TRIGGER",
                  "UNDERSTAND",
                  "DECIDE",
                  "ORCHESTRATE",
                  "EXECUTE",
                  "VERIFY",
                  "IMPROVE",
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
                    className="font-mono text-[6px] tracking-[0.18em] text-white/[0.27]"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}