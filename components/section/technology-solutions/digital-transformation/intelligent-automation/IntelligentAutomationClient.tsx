"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import { ArrowRight, ChevronRight } from "lucide-react";

/* ============================================================
   TYPES
============================================================ */

type Capability = {
  title: string;
  description: string;
  terms: string[];
};

type IntelligenceLayer = {
  label: string;
  title: string;
  description: string;
};

type AutomationDomain = {
  title: string;
  description: string;
};

type Principle = {
  title: string;
  description: string;
};

type Stage = {
  label: string;
  title: string;
  description: string;
};

type HumanMachineItem = {
  title: string;
  description: string;
};

type Outcome = {
  title: string;
  description: string;
};

/* ============================================================
   DATA
============================================================ */

const capabilities: Capability[] = [
  {
    title: "Understand",
    description:
      "AI can interpret language, documents, messages, records and contextual information entering an enterprise process.",
    terms: ["Language", "Documents", "Context", "Classification"],
  },
  {
    title: "Retrieve",
    description:
      "Automation can locate relevant enterprise knowledge, records, policies and historical information before an action is taken.",
    terms: ["Knowledge", "Search", "Context", "Enterprise Data"],
  },
  {
    title: "Reason",
    description:
      "AI can evaluate information against instructions, business rules and available context to assist with process decisions.",
    terms: ["Rules", "Policies", "Reasoning", "Decision Support"],
  },
  {
    title: "Generate",
    description:
      "Generative AI can prepare summaries, responses, structured records and working documents required by downstream processes.",
    terms: ["Responses", "Summaries", "Documents", "Structured Output"],
  },
  {
    title: "Orchestrate",
    description:
      "Workflow systems coordinate AI, APIs, applications, databases and people as one controlled operational process.",
    terms: ["Workflow", "APIs", "Applications", "Humans"],
  },
  {
    title: "Execute",
    description:
      "Approved actions can be performed automatically across connected enterprise platforms while preserving appropriate controls.",
    terms: ["Actions", "Systems", "Transactions", "Automation"],
  },
  {
    title: "Observe",
    description:
      "Operational signals can reveal workflow failures, repeated exceptions, bottlenecks and opportunities for process improvement.",
    terms: ["Monitoring", "Exceptions", "Signals", "Improvement"],
  },
];

const intelligenceLayers: IntelligenceLayer[] = [
  {
    label: "INPUT",
    title: "Enterprise information",
    description:
      "Documents, messages, databases, applications, events and user requests create the information entering intelligent workflows.",
  },
  {
    label: "PERCEPTION",
    title: "AI understanding",
    description:
      "Language and document intelligence convert unstructured information into context that software can use.",
  },
  {
    label: "KNOWLEDGE",
    title: "Enterprise context",
    description:
      "Relevant policies, records, knowledge bases and historical information are retrieved when the process requires them.",
  },
  {
    label: "REASONING",
    title: "Decision intelligence",
    description:
      "AI reasoning and deterministic business rules work together to determine appropriate next steps.",
  },
  {
    label: "ORCHESTRATION",
    title: "Process coordination",
    description:
      "Workflow logic coordinates applications, APIs, agents, services and human approval points.",
  },
  {
    label: "ACTION",
    title: "Enterprise execution",
    description:
      "Approved actions update systems, create records, send communications or initiate additional processes.",
  },
  {
    label: "CONTROL",
    title: "Governance",
    description:
      "Identity, authorization, policy, auditability and human review constrain how automation behaves.",
  },
  {
    label: "FEEDBACK",
    title: "Operational learning",
    description:
      "Workflow outcomes provide information for improving process design, controls and automation coverage.",
  },
];

const domains: AutomationDomain[] = [
  {
    title: "Customer operations",
    description:
      "Interpret customer requests, retrieve account context, assist response generation and coordinate service workflows.",
  },
  {
    title: "Finance operations",
    description:
      "Coordinate document processing, validation, reconciliation, approvals and controlled financial workflows.",
  },
  {
    title: "IT operations",
    description:
      "Connect events, diagnostics, knowledge and remediation workflows across technology environments.",
  },
  {
    title: "Employee operations",
    description:
      "Automate repeatable internal requests while providing employees with faster access to information and services.",
  },
  {
    title: "Knowledge operations",
    description:
      "Retrieve, synthesize and transform organizational knowledge into useful information inside operational workflows.",
  },
  {
    title: "Document operations",
    description:
      "Classify, extract, validate, summarize and route document information across business processes.",
  },
  {
    title: "Data operations",
    description:
      "Coordinate ingestion, validation, transformation, enrichment and exception handling across data workflows.",
  },
  {
    title: "Compliance operations",
    description:
      "Support repeatable evidence collection, policy evaluation, review and controlled approval processes.",
  },
];

const stages: Stage[] = [
  {
    label: "DISCOVER",
    title: "Find work worth automating.",
    description:
      "Identify repetitive process steps, high-volume information movement, delays, manual decisions and recurring exceptions.",
  },
  {
    label: "DECOMPOSE",
    title: "Separate rules from judgment.",
    description:
      "Determine which steps are deterministic, which require AI interpretation and which should remain under human control.",
  },
  {
    label: "CONNECT",
    title: "Create system access.",
    description:
      "Connect the applications, APIs, data and knowledge required to complete the process from end to end.",
  },
  {
    label: "INTELLIGENCE",
    title: "Introduce AI selectively.",
    description:
      "Use AI where language, documents, ambiguity or contextual reasoning create genuine value for the workflow.",
  },
  {
    label: "CONTROL",
    title: "Define boundaries.",
    description:
      "Establish permissions, confidence thresholds, approval points, audit requirements and exception behavior.",
  },
  {
    label: "OPERATE",
    title: "Observe production behavior.",
    description:
      "Monitor workflow execution, failures, intervention rates and operational outcomes after deployment.",
  },
  {
    label: "IMPROVE",
    title: "Expand from evidence.",
    description:
      "Use real operational data to decide where additional automation or process redesign should happen next.",
  },
];

const principles: Principle[] = [
  {
    title: "Intelligence where intelligence is needed.",
    description:
      "Do not replace simple deterministic logic with AI when clear rules already solve the problem reliably.",
  },
  {
    title: "Automation should reduce complexity.",
    description:
      "A solution that introduces more operational complexity than the work it removes is not successful automation.",
  },
  {
    title: "Human judgment remains intentional.",
    description:
      "People should remain inside workflows where accountability, ambiguity, sensitivity or complex judgment requires them.",
  },
  {
    title: "Every action needs authority.",
    description:
      "Automated systems should only access information and execute actions permitted by their defined identity and role.",
  },
  {
    title: "Exceptions are part of the architecture.",
    description:
      "Production workflows need explicit behavior for missing data, uncertain AI output and unavailable downstream systems.",
  },
  {
    title: "Observability is not optional.",
    description:
      "Teams need enough operational evidence to understand workflow state, decisions, failures and outcomes.",
  },
];

const humanItems: HumanMachineItem[] = [
  {
    title: "Accountability",
    description:
      "Important decisions may require a person who is responsible for the final outcome.",
  },
  {
    title: "Ambiguity",
    description:
      "Some situations contain context that cannot be safely reduced to predefined rules or automated reasoning.",
  },
  {
    title: "Relationships",
    description:
      "Negotiation, empathy and relationship management remain fundamentally human activities.",
  },
  {
    title: "Creative judgment",
    description:
      "Novel situations can require synthesis, trade-offs and decisions beyond the intended automation boundary.",
  },
];

const outcomes: Outcome[] = [
  {
    title: "Reduce repetitive coordination",
    description:
      "Move information and routine work between systems without requiring people to coordinate every transition manually.",
  },
  {
    title: "Accelerate operational response",
    description:
      "Interpret events and information closer to the moment they enter the organization.",
  },
  {
    title: "Increase process consistency",
    description:
      "Apply defined rules, controls and workflow behavior repeatedly across operational processes.",
  },
  {
    title: "Make enterprise AI actionable",
    description:
      "Connect AI understanding and reasoning with the systems where real business actions actually happen.",
  },
  {
    title: "Improve process visibility",
    description:
      "Create operational evidence around workflow execution, exceptions, intervention and process outcomes.",
  },
  {
    title: "Focus people on higher-value work",
    description:
      "Reduce time spent on repetitive information handling so human attention can move toward judgment and complex problems.",
  },
];

const equation = [
  {
    title: "AI",
    text: "Understands information that traditional workflow logic cannot interpret directly.",
  },
  {
    title: "Automation",
    text: "Executes repeatable actions with speed and consistency.",
  },
  {
    title: "Orchestration",
    text: "Coordinates systems, AI services, rules and people as one process.",
  },
  {
    title: "Governance",
    text: "Defines what automation is permitted to understand, decide and execute.",
  },
];

const knowledgeItems = [
  {
    title: "Policies",
    text: "Retrieve the rules that constrain the current process.",
  },
  {
    title: "Knowledge",
    text: "Use organizational information relevant to the current request.",
  },
  {
    title: "Records",
    text: "Bring operational and customer context into the workflow.",
  },
  {
    title: "History",
    text: "Use appropriate previous activity to understand the current situation.",
  },
];

const reasoningItems = [
  {
    label: "DETERMINISTIC",
    title: "Clear rule.",
    text: "When the correct decision can be represented explicitly, deterministic logic remains appropriate.",
  },
  {
    label: "AI ASSISTED",
    title: "Context required.",
    text: "AI can interpret variable information and provide structured context or recommendations to the workflow.",
  },
  {
    label: "HUMAN",
    title: "Judgment required.",
    text: "Decisions involving accountability, unusual ambiguity or significant consequences can remain under human authority.",
  },
];

const orchestrationSteps = [
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
];

const documentSteps = [
  "Identify document type",
  "Extract relevant information",
  "Interpret language",
  "Validate required fields",
  "Summarize complex content",
  "Compare against policy",
  "Route to appropriate workflow",
  "Request review when confidence is insufficient",
];

const governanceItems = [
  {
    title: "What can AI read?",
    text: "Define which enterprise information and knowledge sources the workflow may access.",
  },
  {
    title: "What can AI decide?",
    text: "Define whether AI classifies, recommends, selects a workflow path or only prepares context.",
  },
  {
    title: "What can AI generate?",
    text: "Determine where generated content can be used directly and where review is required.",
  },
  {
    title: "What can automation execute?",
    text: "Limit downstream actions according to system identity, permissions and business risk.",
  },
  {
    title: "When must a human intervene?",
    text: "Establish explicit escalation conditions for uncertainty, policy conflicts and high-impact actions.",
  },
  {
    title: "What evidence must remain?",
    text: "Capture enough workflow history to support operations, investigation and required auditability.",
  },
];

const agentItems = [
  {
    label: "OBSERVE",
    text: "An agent receives a task together with the context, instructions and resources required to work on it.",
  },
  {
    label: "REASON",
    text: "It determines which approved tools or information are required to progress toward the requested outcome.",
  },
  {
    label: "ACT",
    text: "Actions remain constrained by permissions, workflow boundaries, tool access and appropriate human approval.",
  },
];

const observabilityQuestions = [
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
];

const manifesto = [
  "Understand before acting.",
  "Retrieve before guessing.",
  "Use rules when rules are enough.",
  "Use AI when context matters.",
  "Escalate when judgment matters.",
  "Observe what automation does.",
  "Control what automation can do.",
];

const marqueeWords = [
  "PERCEPTION",
  "CONTEXT",
  "KNOWLEDGE",
  "REASONING",
  "WORKFLOW",
  "ACTION",
  "CONTROL",
  "LEARNING",
];

const flowWords = ["UNDERSTAND", "REASON", "ORCHESTRATE", "ACT"];

/* ============================================================
   SMALL COMPONENTS
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

function Chips({ items }: { items: string[] }) {
  return (
    <div className="mt-2 flex flex-wrap justify-center gap-2">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 font-mono hyi-p tracking-[0.17em] text-white/[0.4]"
        >
          {item.toUpperCase()}
        </div>
      ))}
    </div>
  );
}

function SmallTags({ items }: { items: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-white/[0.08] px-3 py-2 font-mono text-[5px] tracking-[0.16em] text-white/[0.3]"
        >
          {item.toUpperCase()}
        </span>
      ))}
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

  return (
    <div className="relative overflow-hidden  text-white selection:bg-[#7046e6] max-md:text-center max-md:mx-auto selection:text-white">
      {/* SCROLL INDICATOR */}
      <motion.div
        style={{
          scaleX: progress,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[9999] h-[2px] w-full bg-[#7046e6]"
      />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden px-5  pt-30  md:px-10 ">
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


        <div className="relative mx-auto max-w-[1350px] max-md:text-center max-md:mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-[1200px] text-center"
          >
            <h1 className="hyi-h1 hyi-white">
              Intelligent Automation That Understands, 
              <span className="block hyi-blue">
                Decides, and Executes.
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-[830px] hyi-p">
              When automation can understand before it acts.
              Intelligent automation combines artificial
              intelligence, workflow orchestration, enterprise
              integration and controlled execution so software can
              do more than follow static instructions. It can
              interpret information, retrieve context, assist
              decisions and coordinate work across the enterprise.
            </p>

         
          </motion.div>
        </div>
      </section>


     

      {/* =====================================================
          DEFINITION
      ===================================================== */}
      <section
        id="definition"
        className="relative overflow-hidden  py-5"
      >

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="hyi-h1 hyi-white">
                Traditional automation asks: what rule should I
                follow?
                <span className="block hyi-blue">
                  Intelligent automation asks: what is happening
                  here?
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
                  Conventional automation performs extremely well
                  when inputs, decisions and process paths are
                  predictable. But enterprise work frequently
                  contains documents, language, changing context and
                  information that cannot be represented by a simple
                  sequence of fixed rules.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7">
                <p className="hyi-p">
                  Intelligent automation adds AI capabilities to
                  those workflows. The result is not unrestricted
                  autonomous software. It is controlled automation
                  that can interpret information before applying
                  rules, requesting judgment or performing an
                  approved action.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          THE EQUATION
      ===================================================== */}
      <section className="relative overflow-hidden py-5">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              The equation
              <span className="block hyi-blue">
                behind intelligent automation.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {equation.map((item, index) => (
              <motion.article
                key={item.title}
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
                  {item.title}
                </h3>

                <p className="mt-2 hyi-p">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FUNDAMENTAL SHIFT
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] ">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[1000px] text-center"
          >
            <h2 className="hyi-h1 hyi-white">
              Software that can understand
              <span className="block hyi-blue">
                before it acts.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[820px] hyi-p">
              The difference between ordinary automation and
              intelligent automation is not simply the presence of an
              AI model. The difference is whether intelligence has
              been integrated into the operational process with clear
              context, boundaries and controlled execution.
            </p>

          
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                What makes
                <span className="block hyi-blue">
                  automation intelligent?
                </span>
              </h2>

              <p className="mt-2 max-w-[370px] hyi-p">
                Intelligence enters the process through specific
                capabilities. Each capability should solve a defined
                operational problem rather than existing only
                because an AI technology is available.
              </p>
            </div>

            <div>
              {capabilities.map((item) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-5 border-t border-white/[0.07] py-4 md:grid-cols-[0.7fr_1.3fr]"
                >
                  <h3 className="hyi-h3 hyi-white">
                    {item.title}
                  </h3>

                  <div>
                    <p className="hyi-p">{item.description}</p>

                    <SmallTags items={item.terms} />
                  </div>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTELLIGENCE STACK
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508]">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-4 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Intelligence is a layer
                <span className="block hyi-blue">
                  inside the operating system of work.
                </span>
              </h2>
            </div>

            <div>
              {intelligenceLayers.map((layer) => (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}
                  className="grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.6fr_1.4fr]"
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
          KNOWLEDGE
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="hyi-h1 hyi-white">
                AI should not guess
                <span className="block hyi-blue">
                  what the enterprise already knows.
                </span>
              </h2>

              <p className="mt-2 max-w-[590px] hyi-p">
                Intelligent workflows become more useful when AI can
                access appropriate organizational context. Retrieval
                connects models with approved knowledge, policies,
                records and historical information at the moment the
                process requires them.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {knowledgeItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(112,70,230,.35)",
                  }}
                  className=" rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7"
                >
                  <h3 className="hyi-h3 hyi-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 hyi-p">{item.text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          REASONING
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Not every decision
              <span className="block hyi-blue">
                belongs to AI.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {reasoningItems.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(112,70,230,.4)",
                }}
                className=" rounded-[28px] border border-white/[0.07] bg-[#080609] p-7"
              >
                <span className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                  {item.label}
                </span>

                <h3 className="mt-2 hyi-h3 hyi-white">
                  {item.title}
                </h3>

                <p className="mt-2 hyi-p">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ORCHESTRATION
      ===================================================== */}
      <section className="relative overflow-hidden py-10 bg-[#070508]">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Intelligence without action
                <span className="block hyi-blue">
                  is only information.
                </span>
              </h2>

              <p className="mt-2 max-w-[590px] hyi-p">
                Orchestration connects AI outputs with actual
                enterprise processes. It determines what happens
                next, which system participates, whether approval is
                required and what should happen when execution
                fails.
              </p>
            </div>

            <div>
              {orchestrationSteps.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.035 }}
                  className="flex items-center justify-between border-b border-white/[0.06] py-4"
                >
                  <span className="hyi-p">{item}</span>

                  <ArrowRight
                    size={12}
                    className="text-[#9878ef]/60"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ENTERPRISE DOMAINS
      ===================================================== */}
      <section className="relative overflow-hidden ">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-4 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Intelligence can enter
                <span className="block hyi-blue">
                  almost any workflow.
                </span>
              </h2>
            </div>

            <div>
              {domains.map((domain) => (
                <motion.article
                  key={domain.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.8fr_1.2fr]"
                >
                  <h3 className="hyi-h3 hyi-white">
                    {domain.title}
                  </h3>

                  <p className="hyi-p">{domain.description}</p>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DOCUMENT INTELLIGENCE
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Documents stop being
                <span className="block hyi-blue">
                  dead information.
                </span>
              </h2>

              <p className="mt-2 max-w-[590px] hyi-p">
                A large amount of enterprise work begins inside
                PDFs, emails, forms, contracts, reports and other
                unstructured information. AI can convert those
                documents into useful context for automated
                processes.
              </p>
            </div>

            <div>
              {documentSteps.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.035 }}
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
          HUMAN + AI
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Human judgment
                <span className="block hyi-blue">
                  becomes a designed step.
                </span>
              </h2>

              <p className="mt-2 max-w-[600px] hyi-p">
                Intelligent automation does not require every
                decision to become autonomous. A well-designed
                workflow makes explicit where software acts and where
                human authority enters the process.
              </p>
            </div>

            <div>
              {humanItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.5fr_1fr]"
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
          GOVERNANCE
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] ">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-4 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Intelligence needs
                <span className="block hyi-blue">
                  boundaries.
                </span>
              </h2>
            </div>

            <div>
              {governanceItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.7fr_1fr]"
                >
                  <h3 className="hyi-h3 hyi-white">
                    {item.title}
                  </h3>

                  <p className="hyi-p">{item.text}</p>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DELIVERY
      ===================================================== */}
      <section className="relative overflow-hidden py-5">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-5 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                From process
                <span className="block hyi-blue">
                  to intelligence.
                </span>
              </h2>
            </div>

            <div>
              {stages.map((stage) => (
                <motion.article
                  key={stage.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border-t border-white/[0.07] py-8"
                >
                  <span className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                    {stage.label}
                  </span>

                  <div className="mt-2 grid gap-5 md:grid-cols-[0.75fr_1fr]">
                    <h3 className="hyi-h3 hyi-white">
                      {stage.title}
                    </h3>

                    <p className="hyi-p">{stage.description}</p>
                  </div>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-4 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Automate deliberately.
                <span className="block hyi-blue">
                  Not automatically.
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
          AI AGENTS
      ===================================================== */}
      <section className="relative overflow-hidden py-10 bg-[#070508]">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Agents can become participants
              <span className="block hyi-blue">
                inside controlled workflows.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {agentItems.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="rounded-[26px] border border-white/[0.07] bg-[#030303]/80 p-6"
              >
                <span className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                  {item.label}
                </span>

                <p className="mt-2 hyi-p">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OBSERVABILITY
      ===================================================== */}
      <section className="relative overflow-hidden ">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Automation must
                <span className="block hyi-blue">
                  explain its operation.
                </span>
              </h2>

              <p className="mt-2 max-w-[590px] hyi-p">
                Intelligent workflows combine deterministic systems
                with probabilistic AI components. Production teams
                therefore need visibility into both process
                execution and AI-assisted steps.
              </p>
            </div>

            <div>
              {observabilityQuestions.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7046e6]" />

                  <span className="hyi-p">{item}</span>
                </motion.div>
              ))}
            </div>
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
              Intelligent automation
              <span className="block hyi-blue">
                outcomes.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.05 }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(112,70,230,.4)",
                }}
                className=" rounded-[28px] border border-white/[0.07] bg-[#080609] p-7"
              >
                <h3 className="hyi-h3 hyi-white">
                  {item.title}
                </h3>

                <p className="mt-2 hyi-p">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MANIFESTO
      ===================================================== */}
      <section className="relative overflow-hidden ">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-4 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Manifesto
                <span className="block hyi-blue">
                  for intelligent work.
                </span>
              </h2>
            </div>

            <div>
              {manifesto.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="border-t border-white/[0.07] py-7"
                >
                  <h3 className="hyi-h3 hyi-white">{item}</h3>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FLOW STRIP
      ===================================================== */}
 

      {/* =====================================================
          FINAL STATEMENT
      ===================================================== */}
      <section className="relative overflow-hidden pt-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[1000px] text-center"
          >
            <h2 className="hyi-h1 hyi-white">
              Give software context. Give people control.
              <span className="block hyi-blue">
                Let work move.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[820px] hyi-p">
              Intelligent automation turns AI from an isolated
              capability into part of the operational fabric of the
              enterprise. Information enters, context is
              established, decisions are constrained, work is
              orchestrated and approved actions move through
              connected systems.
            </p>

            <p className="mx-auto mt-2 max-w-[820px] hyi-p">
              The objective is not autonomous technology for its own
              sake. The objective is an operating environment where
              routine work can move with less friction, artificial
              intelligence can assist where context matters and
              people retain authority where judgment matters.
            </p>

          
          </motion.div>
        </div>
      </section>
    </div>
  );
}