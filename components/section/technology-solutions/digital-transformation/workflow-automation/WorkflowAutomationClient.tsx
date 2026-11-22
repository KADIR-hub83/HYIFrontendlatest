"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";

/* ============================================================
   TYPES
============================================================ */

type WorkflowStep = {
  label: string;
  title: string;
  description: string;
};

type AutomationArea = {
  title: string;
  description: string;
  examples: string[];
};

type AIAbility = {
  title: string;
  description: string;
};

type Principle = {
  title: string;
  description: string;
};

type Outcome = {
  title: string;
  description: string;
};

type Layer = {
  label: string;
  title: string;
  description: string;
};

/* ============================================================
   DATA
============================================================ */

const workflowSteps: WorkflowStep[] = [
  {
    label: "TRIGGER",
    title: "Something happens.",
    description:
      "A customer request arrives, a record changes, a document is uploaded, an approval is required, a threshold is reached or another business event starts the workflow.",
  },
  {
    label: "UNDERSTAND",
    title: "AI interprets the context.",
    description:
      "Structured data, documents, messages and historical information can be analyzed to determine what happened and what information is relevant to the process.",
  },
  {
    label: "DECIDE",
    title: "The next action is determined.",
    description:
      "Business rules, policies, AI reasoning and workflow conditions determine which path should be taken and whether human judgment is required.",
  },
  {
    label: "ACT",
    title: "Systems execute the work.",
    description:
      "Applications, APIs, databases and enterprise platforms perform approved actions such as updating records, generating documents or creating tasks.",
  },
  {
    label: "REVIEW",
    title: "Humans enter where judgment matters.",
    description:
      "Automation does not need to remove people from every workflow. High-impact decisions can be routed to appropriate teams with useful context already prepared.",
  },
  {
    label: "VERIFY",
    title: "The result is checked.",
    description:
      "Workflow controls verify whether the required action completed successfully and identify exceptions that require investigation.",
  },
  {
    label: "LEARN",
    title: "The process produces new intelligence.",
    description:
      "Operational data can reveal delays, repeated exceptions and unnecessary manual work that inform the next cycle of process improvement.",
  },
];

const automationAreas: AutomationArea[] = [
  {
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
    title: "Read",
    description:
      "Interpret documents, messages, forms and unstructured information entering a workflow.",
  },
  {
    title: "Understand",
    description:
      "Determine intent, entities, context and relevant information before selecting the next process step.",
  },
  {
    title: "Retrieve",
    description:
      "Find appropriate enterprise knowledge, policies and historical context required by the workflow.",
  },
  {
    title: "Reason",
    description:
      "Evaluate available information against workflow rules and decision criteria.",
  },
  {
    title: "Generate",
    description:
      "Prepare summaries, responses, documents and structured information for downstream work.",
  },
  {
    title: "Route",
    description:
      "Determine which workflow, system or human team should receive the next task.",
  },
  {
    title: "Assist",
    description:
      "Provide people with relevant context and recommendations when human judgment is required.",
  },
  {
    title: "Observe",
    description:
      "Analyze workflow outcomes and exceptions to identify opportunities for further improvement.",
  },
];

const layers: Layer[] = [
  {
    label: "EVENT",
    title: "Trigger",
    description:
      "Business events, requests, system changes and scheduled conditions initiate automated processes.",
  },
  {
    label: "CONTEXT",
    title: "Understand",
    description:
      "Data, documents, messages and historical information establish the context required by the workflow.",
  },
  {
    label: "INTELLIGENCE",
    title: "Decide",
    description:
      "AI, business rules and policies determine which process path or action should follow.",
  },
  {
    label: "ORCHESTRATION",
    title: "Coordinate",
    description:
      "Workflow engines coordinate tasks across APIs, applications, people and enterprise systems.",
  },
  {
    label: "EXECUTION",
    title: "Act",
    description:
      "Systems execute approved operations while people handle decisions requiring accountability or judgment.",
  },
  {
    label: "OBSERVABILITY",
    title: "Measure",
    description:
      "Operational signals reveal process status, delays, exceptions and recurring sources of friction.",
  },
];

const principles: Principle[] = [
  {
    title: "Automate the process, not the chaos.",
    description:
      "A poorly designed workflow does not become a good workflow simply because technology executes it faster.",
  },
  {
    title: "Use AI where interpretation matters.",
    description:
      "AI is particularly useful where workflows depend on language, documents, context and variable information.",
  },
  {
    title: "Keep deterministic rules deterministic.",
    description:
      "Clear business rules should remain explicit when probabilistic reasoning does not provide additional value.",
  },
  {
    title: "Keep humans where accountability matters.",
    description:
      "High-impact decisions should preserve appropriate review, authorization and escalation controls.",
  },
  {
    title: "Design exceptions first.",
    description:
      "Production automation needs clear behavior when information is missing, systems fail or confidence is insufficient.",
  },
  {
    title: "Observe every workflow.",
    description:
      "Automation should expose enough operational information to understand what happened and why.",
  },
];

const outcomes: Outcome[] = [
  {
    title: "Less repetitive work",
    description:
      "Move repeatable information processing and system coordination away from manual execution.",
  },
  {
    title: "Faster process movement",
    description:
      "Reduce waiting between workflow steps when decisions and actions can be coordinated automatically.",
  },
  {
    title: "Better operational consistency",
    description:
      "Execute defined workflow rules and controls consistently across repeated business processes.",
  },
  {
    title: "More useful human attention",
    description:
      "Allow teams to spend more time on exceptions, judgment and complex work instead of routine coordination.",
  },
];

const exceptions = [
  {
    title: "Missing information",
    text: "Request required data or route the workflow for manual completion.",
  },
  {
    title: "Low AI confidence",
    text: "Escalate interpretation to a human rather than treating uncertain output as certain.",
  },
  {
    title: "System unavailable",
    text: "Retry appropriately, preserve workflow state and expose operational status.",
  },
  {
    title: "Policy conflict",
    text: "Stop automatic execution and route the decision to an authorized reviewer.",
  },
  {
    title: "Unexpected result",
    text: "Capture the exception with enough context for investigation and recovery.",
  },
];

const integrationItems = [
  {
    Icon: Database,
    title: "Data",
    text: "Read and update governed information required by business workflows.",
  },
  {
    Icon: Network,
    title: "APIs",
    text: "Connect applications and services through controlled interfaces.",
  },
  {
    Icon: GitBranch,
    title: "Events",
    text: "Respond when meaningful changes occur across operational systems.",
  },
  {
    Icon: Layers3,
    title: "Applications",
    text: "Coordinate work across CRM, ERP, service and custom platforms.",
  },
  {
    Icon: BrainCircuit,
    title: "AI",
    text: "Interpret language, documents and contextual information.",
  },
  {
    Icon: Users,
    title: "People",
    text: "Route judgment and authorization to appropriate teams.",
  },
  {
    Icon: ShieldCheck,
    title: "Controls",
    text: "Apply security, policy and approval requirements to execution.",
  },
  {
    Icon: Gauge,
    title: "Observability",
    text: "Understand process status, failures and operational behavior.",
  },
];

const controlItems = [
  {
    title: "Identity",
    text: "Every automated action should execute with appropriate system and user permissions.",
  },
  {
    title: "Authorization",
    text: "High-impact operations should require the level of approval appropriate to the action.",
  },
  {
    title: "Auditability",
    text: "Record enough workflow history to understand what happened and which decision path was followed.",
  },
  {
    title: "Data governance",
    text: "Control which information workflows and AI systems are permitted to access.",
  },
  {
    title: "AI boundaries",
    text: "Define when AI may recommend, decide, generate or execute within the workflow.",
  },
  {
    title: "Human escalation",
    text: "Provide explicit paths for situations requiring judgment, review or accountability.",
  },
];

const observabilityItems = [
  "Workflow completion",
  "Processing time",
  "Waiting time",
  "Exception frequency",
  "Human intervention",
  "Retry frequency",
  "Failure category",
  "Process abandonment",
];

const marqueeWords = [
  "TRIGGER",
  "UNDERSTAND",
  "DECIDE",
  "ROUTE",
  "ACT",
  "VERIFY",
  "LEARN",
];

const flowWords = [
  "EVENT",
  "INTELLIGENCE",
  "DECISION",
  "ACTION",
  "OUTCOME",
];

/* ============================================================
   BACKGROUND COMPONENT
============================================================ */

function PurpleGlow({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full bg-[#390b44]/60 blur-[180px] ${className}`}
    />
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

  return (
    <div className="relative overflow-hidden  text-white selection:bg-[#7046e6] selection:text-white ">
      {/* SCROLL PROGRESS */}
      <motion.div
        style={{
          scaleX: scrollProgress,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[9999] h-[2px] w-full bg-[#7046e6]"
      />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden px-5  pt-30 pb-10 md:px-10 ">
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(circle at 50% 45%,black,transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 45%,black,transparent 80%)",
          }}
        />


        <div className="relative mx-auto max-w-[1350px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-[1200px] text-center"
          >
            <h1 className="hyi-h1 hyi-white">
             Workflows That Think, Connect, and 
              <span className="block hyi-blue">
                Move Work Forward.
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-[830px] hyi-p">
              Work should move without waiting for someone to move
              it. Design AI-enabled workflows that connect
              information, decisions, people and enterprise systems
              so repetitive work can move automatically while
              important decisions remain governed.
            </p>
          </motion.div>
        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}
      <section
        id="automation"
        className="relative overflow-hidden  "
      >

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="hyi-h1 hyi-white">
                Automation is not about removing people.
                <span className="block hyi-blue">
                  It is about removing unnecessary work.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7">
                <p className="hyi-p">
                  Enterprise processes often contain repeated data
                  entry, manual routing, status checks, document
                  handling, approvals and coordination between
                  systems. Much of that work exists because
                  applications do not naturally understand each
                  other.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7">
                <p className="hyi-p">
                  Modern workflow automation combines APIs,
                  integration, business rules, event-driven
                  architecture and AI so information can move
                  between systems and people without requiring
                  manual coordination at every step.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          THE SHIFT
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[1000px] text-center"
          >
            <h2 className="hyi-h1 hyi-white">
              From people moving information
              <span className="block hyi-blue">
                to systems moving work.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[820px] hyi-p">
              Workflow automation creates a controlled path between
              a business event and the actions required to complete
              the process. AI expands that path by helping software
              work with language, documents and contextual
              information that traditional automation struggles to
              interpret.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WORKFLOW
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] ">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                From event
                <span className="block hyi-blue">
                  to outcome.
                </span>
              </h2>

              <p className="mt-2 max-w-[360px] hyi-p">
                A workflow is a sequence of coordinated decisions
                and actions. Automation determines which of those
                steps can move without waiting for manual
                intervention.
              </p>
            </div>

            <div>
              {workflowSteps.map((step) => (
                <motion.article
                  key={step.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border-t border-white/[0.07] py-8"
                >
                  <span className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                    {step.label}
                  </span>

                  <div className="mt-2 grid gap-5 md:grid-cols-[0.8fr_1.2fr]">
                    <h3 className="hyi-h3 hyi-white">
                      {step.title}
                    </h3>

                    <p className="hyi-p">{step.description}</p>
                  </div>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AI AUTOMATION
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Traditional automation follows.
                <span className="block hyi-blue">
                  AI can interpret.
                </span>
              </h2>

              <p className="mt-2 max-w-[540px] hyi-p">
                Traditional workflow engines work extremely well
                when inputs and decisions are predictable. AI
                extends automation into processes containing
                language, documents, ambiguity and contextual
                information.
              </p>
            </div>

            <div>
              {aiAbilities.map((item) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="grid gap-5 border-t border-white/[0.07] py-7 md:grid-cols-[0.4fr_1fr]"
                >
                  <h3 className="hyi-h3 hyi-white">
                    {item.title}
                  </h3>

                  <p className="hyi-p">{item.description}</p>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATEMENT
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[1000px] text-center"
          >
            <h2 className="hyi-h1 hyi-white">
              If a person spends every day moving information
              between systems,
              <span className="block hyi-blue">
                the workflow is asking to be redesigned.
              </span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          AUTOMATION AREAS
      ===================================================== */}
      <section className="relative overflow-hidden py-5">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Automation
             
                areas.
 
            </h2>
          </div>

          <div className="mt-5">
            {automationAreas.map((item) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid gap-5 border-t border-white/[0.07] py-8 lg:grid-cols-[0.7fr_1fr_1fr]"
              >
                <h3 className="hyi-h3 hyi-white">
                  {item.title}
                </h3>

                <p className="hyi-p">{item.description}</p>

                <div className="flex flex-wrap content-start gap-2">
                  {item.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full border border-white/[0.08] px-3 py-2 font-mono text-[5px] tracking-[0.16em] text-white/[0.3]"
                    >
                      {example.toUpperCase()}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}

            <div className="border-t border-white/[0.07]" />
          </div>
        </div>
      </section>

      {/* =====================================================
          OPERATING LAYERS
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                One workflow.
                <span className="block hyi-blue">
                  Multiple layers.
                </span>
              </h2>
            </div>

            <div>
              {layers.map((layer) => (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-5 border-t border-white/[0.07] py-4 md:grid-cols-[0.6fr_1.4fr]"
                >
                  <div>
                    <span className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                      {layer.label}
                    </span>

                    <h3 className="mt-2 hyi-h3 hyi-white">
                      {layer.title}
                    </h3>
                  </div>

                  <p className="hyi-p">{layer.description}</p>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HUMAN + MACHINE
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] py-10">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[950px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Human + machine
              <span className="block hyi-blue">
                working together.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/[0.07] bg-[#080609] p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                <Bot size={16} className="text-[#bba4f6]" />
              </div>

              <span className="mt-2 block font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                AUTOMATE
              </span>

              <h3 className="mt-2 hyi-h3 hyi-white">
                Machines handle repetition.
              </h3>

              <div className="mt-4 space-y-3">
                {[
                  "Data movement",
                  "Classification",
                  "Validation",
                  "System updates",
                  "Notifications",
                  "Routine routing",
                  "Status tracking",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />

                    <span className="hyi-p">{item}</span>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-[28px] border border-[#7046e6]/25 bg-[#080609] p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                <Users size={16} className="text-[#bba4f6]" />
              </div>

              <span className="mt-2 block font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                AUGMENT
              </span>

              <h3 className="mt-2 hyi-h3 hyi-white">
                People handle judgment.
              </h3>

              <div className="mt-4 space-y-3">
                {[
                  "Complex exceptions",
                  "Accountability",
                  "Negotiation",
                  "Sensitive decisions",
                  "Creative problem solving",
                  "Relationship management",
                  "Final authorization",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                  >
                    <Check
                      size={13}
                      className="shrink-0 text-[#9878ef]"
                    />

                    <span className="hyi-p">{item}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXCEPTIONS
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                The happy path
                <span className="block hyi-blue">
                  is the easy part.
                </span>
              </h2>

              <p className="mt-2 max-w-[590px] hyi-p">
                Production workflow automation needs to know what to
                do when something does not happen as expected.
                Exceptions should be designed into the workflow
                rather than added after failures appear.
              </p>
            </div>

            <div>
              {exceptions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="grid gap-5 border-t border-white/[0.07] py-7 md:grid-cols-[0.5fr_1fr]"
                >
                  <h3 className="hyi-h3 hyi-white">
                    {item.title}
                  </h3>

                  <p className="hyi-p">{item.text}</p>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTEGRATION
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Automation becomes valuable when
              <span className="block hyi-blue">
                systems can participate.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {integrationItems.map(({ Icon, title, text }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.05 }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(112,70,230,.4)",
                }}
                className=" rounded-[28px] border border-white/[0.07] bg-[#080609] p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                    <Icon
                      size={16}
                      className="text-[#bba4f6]"
                    />
                  </div>
                </div>

                <h3 className="mt-2 hyi-h3 hyi-white">
                  {title}
                </h3>

                <p className="mt-2 hyi-p">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTROL
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Faster work
                <span className="block hyi-blue">
                  still needs control.
                </span>
              </h2>

              <p className="mt-2 max-w-[520px] hyi-p">
                Automation can increase operational speed.
                Governance ensures that speed does not remove
                required security, accountability or business
                controls.
              </p>
            </div>

            <div>
              {controlItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="grid gap-5 border-t border-white/[0.07] py-7 md:grid-cols-[0.45fr_1fr]"
                >
                  <h3 className="hyi-h3 hyi-white">
                    {item.title}
                  </h3>

                  <p className="hyi-p">{item.text}</p>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OBSERVABILITY
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] ">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                You cannot improve
                <span className="block hyi-blue">
                  what you cannot see.
                </span>
              </h2>

              <p className="mt-2 max-w-[590px] hyi-p">
                Automated workflows create operational data that
                can reveal where processes slow down, where
                exceptions occur and which activities continue to
                require unnecessary manual intervention.
              </p>
            </div>

            <div>
              {observabilityItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="flex items-center justify-between border-b border-white/[0.06] py-4"
                >
                  <span className="hyi-p">{item}</span>

                  <ChevronRight
                    size={13}
                    className="text-[#9878ef]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Automation
                <span className="block hyi-blue">
                  principles.
                </span>
              </h2>
            </div>

            <div>
              {principles.map((principle) => (
                <motion.article
                  key={principle.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.8fr_1.2fr]"
                >
                  <h3 className="hyi-h3 hyi-white">
                    {principle.title}
                  </h3>

                  <p className="hyi-p">{principle.description}</p>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS SHIFT
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              From manual
              <span className="block hyi-blue">
                to orchestrated.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/[0.07] bg-[#080609] p-7"
            >
              <p className="font-mono text-[6px] tracking-[0.2em] text-white/[0.3]">
                MANUAL
              </p>

              <h3 className="mt-2 hyi-h3 hyi-white">
                People coordinate every step.
              </h3>

              <div className="mt-4 space-y-3">
                {[
                  "Read incoming request",
                  "Copy information",
                  "Search another system",
                  "Send for approval",
                  "Wait for response",
                  "Update record",
                  "Send notification",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />

                    <span className="hyi-p">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-[28px] border border-[#7046e6]/25 bg-[#080609] p-7"
            >
              <p className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                ORCHESTRATED
              </p>

              <h3 className="mt-2 hyi-h3 hyi-white">
                Systems coordinate routine work.
              </h3>

              <div className="mt-4 space-y-3">
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
                    className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                  >
                    <Check
                      size={13}
                      className="shrink-0 text-[#9878ef]"
                    />

                    <span className="hyi-p">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUTCOMES
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Workflow
              <span className="block hyi-blue">
                outcomes.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {outcomes.map((outcome, index) => (
              <motion.article
                key={outcome.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(112,70,230,.4)",
                }}
                className=" rounded-[28px] border border-white/[0.07] bg-[#080609] p-7"
              >
                <h3 className="hyi-h3 hyi-white">
                  {outcome.title}
                </h3>

                <p className="mt-2 hyi-p">{outcome.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FLOW STRIP
      ===================================================== */}


      {/* =====================================================
          FINAL STATEMENT
      ===================================================== */}
      <section className="relative overflow-hidden ">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[1000px] text-center"
          >
            <h2 className="hyi-h1 hyi-white">
              Let people make decisions.
              <span className="block hyi-blue">
                Let systems move the work.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[820px] hyi-p">
              AI-powered workflow automation connects enterprise
              information with decisions and actions so work can
              move through the organization with less manual
              coordination.
            </p>

            <p className="mx-auto mt-2 max-w-[820px] hyi-p">
              The objective is not automation everywhere. The
              objective is to determine where machines can handle
              repetitive coordination, where AI can interpret
              information and where people should retain judgment,
              responsibility and control.
            </p>

          
          </motion.div>
        </div>
      </section>
    </div>
  );
}