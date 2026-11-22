"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Sparkles,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const processAreas = [
  {
    title: "Understand how work actually moves.",
    text:
      "Map workflows, decisions, handoffs, systems, data dependencies and operational constraints before introducing automation. AI transformation starts with understanding the process, not selecting the tool.",
    tags: ["PROCESS DISCOVERY", "WORKFLOW MAPPING", "BOTTLENECKS"],
  },
  {
    title: "Remove friction before automating it.",
    text:
      "Redesign fragmented processes around simpler decision paths, clearer ownership and better information flow. Automation becomes more valuable when unnecessary complexity has already been removed.",
    tags: ["PROCESS DESIGN", "STANDARDIZATION", "SIMPLIFICATION"],
  },
  {
    title: "Move repetitive work to intelligent systems.",
    text:
      "Use workflow automation, software services and AI capabilities to handle repeatable activities while keeping people involved where judgment, accountability and contextual reasoning remain important.",
    tags: ["AUTOMATION", "AI AGENTS", "WORKFLOWS"],
  },
  {
    title: "Connect processes across enterprise systems.",
    text:
      "Integrate applications, APIs, data platforms and AI services so information can move through business processes without creating another layer of disconnected automation.",
    tags: ["INTEGRATION", "APIs", "ENTERPRISE DATA"],
  },
  {
    title: "Keep intelligent operations controlled.",
    text:
      "Define permissions, approval boundaries, auditability, exception handling and operational ownership for processes where automated systems participate in business decisions.",
    tags: ["GOVERNANCE", "HUMAN REVIEW", "CONTROL"],
  },
  {
    title: "Treat every process as a living system.",
    text:
      "Observe operational signals and continuously improve workflows as business requirements, customer expectations, data availability and AI capabilities evolve.",
    tags: ["OBSERVABILITY", "FEEDBACK", "OPTIMIZATION"],
  },
];

const opportunities = [
  {
    title: "Knowledge-intensive workflows",
    text:
      "Processes involving documents, internal knowledge, research, summarization and information retrieval can be redesigned around AI-assisted knowledge access.",
  },
  {
    title: "High-volume operational work",
    text:
      "Repeatable tasks with structured inputs and predictable decision paths can often benefit from workflow automation and intelligent orchestration.",
  },
  {
    title: "Customer operations",
    text:
      "AI can support service teams with context retrieval, response assistance, routing, case summarization and next-action recommendations.",
  },
  {
    title: "Internal enterprise operations",
    text:
      "Finance, HR, procurement, IT and other internal functions can connect fragmented workflows through shared automation and information layers.",
  },
];

const humanAi = [
  {
    label: "HUMAN",
    title: "Judgment",
    text:
      "People remain responsible for ambiguous decisions, exceptions, accountability and situations requiring broader business context.",
  },
  {
    label: "AI",
    title: "Intelligence",
    text:
      "AI can retrieve information, interpret unstructured inputs, generate content, identify patterns and assist decision-making.",
  },
  {
    label: "AUTOMATION",
    title: "Execution",
    text:
      "Workflow systems coordinate repeatable steps, move information between systems and execute approved operational actions.",
  },
  {
    label: "DATA",
    title: "Context",
    text:
      "Trusted enterprise data gives automated and intelligent systems the context required to participate meaningfully in processes.",
  },
];

const lifecycle = [
  {
    title: "Discover",
    text:
      "Understand current workflows, systems, participants, information dependencies and operational pain points.",
  },
  {
    title: "Prioritize",
    text:
      "Identify opportunities where redesign, automation or AI can create meaningful operational value.",
  },
  {
    title: "Redesign",
    text:
      "Simplify process logic and define the future interaction between people, software, data and AI.",
  },
  {
    title: "Implement",
    text:
      "Connect systems, introduce automation and deploy intelligent capabilities within controlled operational boundaries.",
  },
  {
    title: "Observe",
    text:
      "Measure process health, exceptions, adoption and operational signals after transformation.",
  },
  {
    title: "Evolve",
    text:
      "Continuously improve the process as requirements and available AI capabilities change.",
  },
];

const principles = [
  "Automate outcomes, not complexity.",
  "Human accountability remains explicit.",
  "AI receives only the context it requires.",
  "Exceptions are designed before deployment.",
  "Processes remain observable after automation.",
  "Reusable capabilities replace isolated bots.",
  "Governance travels with the workflow.",
  "Continuous improvement is part of the architecture.",
];

const marqueeWords = [
  "DISCOVER",
  "REDESIGN",
  "AUTOMATE",
  "CONNECT",
  "GOVERN",
  "OBSERVE",
  "IMPROVE",
];

/* =========================================================
   BACKGROUND COMPONENT
========================================================= */

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

/* =========================================================
   PAGE
========================================================= */

export default function BusinessProcessPage() {
  return (
    <main className="overflow-hidden  text-white selection:bg-[#7046e6] selection:text-white">
      <Header />

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
              Reimagine how
              <span className="block hyi-blue">
                work gets done.
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-[830px] hyi-p">
              Redesign business processes around people, data,
              automation and artificial intelligence. Move beyond
              isolated task automation toward connected operations
              where AI can understand context, assist decisions and
              coordinate work across enterprise systems.
            </p>
          </motion.div>
        </div>
      </section>



      {/* =====================================================
          INTRO
      ===================================================== */}
      <section
        id="process"
        className="relative overflow-hidden  py-10"
      >

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="hyi-h1 hyi-white">
                Don&apos;t ask where AI
                <span className="block hyi-blue">
                  can be added.
                </span>
              </h2>

              <p className="mt-2 max-w-[590px] hyi-p">
                Ask how the process would be designed if intelligent
                systems, automation and real-time information were
                available from the beginning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7">
                <p className="hyi-p">
                  Many business processes were designed around
                  limitations that no longer need to exist:
                  information trapped in separate systems, manual
                  document handling, repetitive data entry, delayed
                  decisions and people acting as the integration
                  layer between applications.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7">
                <p className="hyi-p">
                  AI-enabled transformation provides an opportunity
                  to reconsider those assumptions. The objective is
                  not to automate every activity. It is to determine
                  the right relationship between human judgment,
                  machine intelligence, software execution and
                  enterprise data.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS AREAS
      ===================================================== */}
      <section className="relative overflow-hidden ">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                From workflow
                <span className="block hyi-blue">
                  to intelligence.
                </span>
              </h2>
            </div>

            <div>
              {processAreas.map((item) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.7fr_1.3fr]"
                >
                  <h3 className="hyi-h3 hyi-white">
                    {item.title}
                  </h3>

                  <div>
                    <p className="hyi-p">{item.text}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.08] px-3 py-2 font-mono text-[5px] tracking-[0.16em] text-white/[0.3]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BIG STATEMENT
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] py-10">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[1000px] text-center"
          >
            <h2 className="hyi-h1 hyi-white">
              The future business process is not fully human.
              <span className="block hyi-blue">
                It is intelligently orchestrated.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[720px] hyi-p">
              It is not fully automated either. The strongest
              operations combine people, software, data and AI in
              deliberate roles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          HUMAN + AI
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="hyi-h1 hyi-white">
                Define who
                <span className="block hyi-blue">
                  does what.
                </span>
              </h2>

              <p className="mt-2 max-w-[480px] hyi-p">
                Intelligent process design clearly defines the role
                of people, AI, automation and enterprise information
                instead of allowing responsibility to become
                ambiguous.
              </p>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2">
              {humanAi.map((item, index) => (
                <motion.article
                  key={item.label}
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
        </div>
      </section>

      {/* =====================================================
          AI OPPORTUNITY
      ===================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Where intelligence
              <span className="block hyi-blue">
                changes the workflow.
              </span>
            </h2>
          </div>

          <div className="mx-auto mt-5 max-w-[1100px]">
            {opportunities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -25 : 25,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.85fr_1.15fr]"
              >
                <h3 className="hyi-h3 hyi-white">
                  {item.title}
                </h3>

                <div className="flex gap-5">
                  <ArrowRight
                    size={13}
                    className="mt-2 shrink-0 text-[#9878ef]/50 transition-transform duration-300 group-hover:translate-x-2"
                  />

                  <p className="hyi-p">{item.text}</p>
                </div>
              </motion.div>
            ))}

            <div className="border-t border-white/[0.07]" />
          </div>
        </div>
      </section>

      {/* =====================================================
          LIFECYCLE
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                Process change
                <span className="block hyi-blue">
                  is continuous.
                </span>
              </h2>
            </div>

            <div>
              {lifecycle.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.55fr_1.45fr]"
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
          PROCESS SHIFT
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] py-10">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="mx-auto max-w-[950px] text-center">
            <h2 className="hyi-h1 hyi-white">
              From manual work
              <span className="block hyi-blue">
                to connected flow.
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
                TRADITIONAL PROCESS
              </p>

              <h3 className="mt-2 hyi-h3 hyi-white">
                Manual. Fragmented. Reactive.
              </h3>

              <div className="mt-4 space-y-3">
                {[
                  "Information moves manually between systems",
                  "People repeatedly search for operational context",
                  "Decisions wait for information and approvals",
                  "Automation exists as isolated scripts or bots",
                  "Exceptions become invisible operational work",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />

                    <p className="hyi-p">{item}</p>
                  </motion.div>
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
                INTELLIGENT PROCESS
              </p>

              <h3 className="mt-2 hyi-h3 hyi-white">
                Connected. Contextual. Adaptive.
              </h3>

              <div className="mt-4 space-y-3">
                {[
                  "Systems exchange information through connected workflows",
                  "AI retrieves context when and where work happens",
                  "Routine decisions move through defined automation",
                  "Reusable intelligence supports multiple processes",
                  "Exceptions remain visible and route to human owners",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className="flex items-center gap-4 border-b border-white/[0.06] py-4"
                  >
                    <Check
                      size={13}
                      className="shrink-0 text-[#9878ef]"
                    />

                    <p className="hyi-p">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="hyi-h1 hyi-white">
                Principles before
                <span className="block hyi-blue">
                  automation.
                </span>
              </h2>
            </motion.div>

            <div>
              {principles.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                  className="group flex items-center justify-between border-t border-white/[0.07] py-7"
                >
                  <h3 className="hyi-h3 hyi-white">
                    {item}
                  </h3>

                  <ChevronRight
                    size={14}
                    className="text-white/[0.15] transition-all group-hover:translate-x-2 group-hover:text-[#9878ef]"
                  />
                </motion.div>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OBJECTIVE
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
              Less repetitive work.
              <span className="block hyi-blue">
                More intelligent flow.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[820px] hyi-p">
              Create business processes in which information is
              available when needed, routine execution is automated,
              AI assists where intelligence adds value, and people
              remain focused on judgment, relationships, creativity
              and accountability.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}