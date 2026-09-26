"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronRight,
  Sparkles,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const processAreas = [
  {
    number: "01",
    eyebrow: "DISCOVER",
    title: "Understand how work actually moves.",
    text:
      "Map workflows, decisions, handoffs, systems, data dependencies and operational constraints before introducing automation. AI transformation starts with understanding the process, not selecting the tool.",
    tags: ["PROCESS DISCOVERY", "WORKFLOW MAPPING", "BOTTLENECKS"],
  },
  {
    number: "02",
    eyebrow: "REDESIGN",
    title: "Remove friction before automating it.",
    text:
      "Redesign fragmented processes around simpler decision paths, clearer ownership and better information flow. Automation becomes more valuable when unnecessary complexity has already been removed.",
    tags: ["PROCESS DESIGN", "STANDARDIZATION", "SIMPLIFICATION"],
  },
  {
    number: "03",
    eyebrow: "AUTOMATE",
    title: "Move repetitive work to intelligent systems.",
    text:
      "Use workflow automation, software services and AI capabilities to handle repeatable activities while keeping people involved where judgment, accountability and contextual reasoning remain important.",
    tags: ["AUTOMATION", "AI AGENTS", "WORKFLOWS"],
  },
  {
    number: "04",
    eyebrow: "CONNECT",
    title: "Connect processes across enterprise systems.",
    text:
      "Integrate applications, APIs, data platforms and AI services so information can move through business processes without creating another layer of disconnected automation.",
    tags: ["INTEGRATION", "APIs", "ENTERPRISE DATA"],
  },
  {
    number: "05",
    eyebrow: "GOVERN",
    title: "Keep intelligent operations controlled.",
    text:
      "Define permissions, approval boundaries, auditability, exception handling and operational ownership for processes where automated systems participate in business decisions.",
    tags: ["GOVERNANCE", "HUMAN REVIEW", "CONTROL"],
  },
  {
    number: "06",
    eyebrow: "IMPROVE",
    title: "Treat every process as a living system.",
    text:
      "Observe operational signals and continuously improve workflows as business requirements, customer expectations, data availability and AI capabilities evolve.",
    tags: ["OBSERVABILITY", "FEEDBACK", "OPTIMIZATION"],
  },
];

const opportunities = [
  {
    number: "01",
    title: "Knowledge-intensive workflows",
    text:
      "Processes involving documents, internal knowledge, research, summarization and information retrieval can be redesigned around AI-assisted knowledge access.",
  },
  {
    number: "02",
    title: "High-volume operational work",
    text:
      "Repeatable tasks with structured inputs and predictable decision paths can often benefit from workflow automation and intelligent orchestration.",
  },
  {
    number: "03",
    title: "Customer operations",
    text:
      "AI can support service teams with context retrieval, response assistance, routing, case summarization and next-action recommendations.",
  },
  {
    number: "04",
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
    step: "01",
    title: "Discover",
    text:
      "Understand current workflows, systems, participants, information dependencies and operational pain points.",
  },
  {
    step: "02",
    title: "Prioritize",
    text:
      "Identify opportunities where redesign, automation or AI can create meaningful operational value.",
  },
  {
    step: "03",
    title: "Redesign",
    text:
      "Simplify process logic and define the future interaction between people, software, data and AI.",
  },
  {
    step: "04",
    title: "Implement",
    text:
      "Connect systems, introduce automation and deploy intelligent capabilities within controlled operational boundaries.",
  },
  {
    step: "05",
    title: "Observe",
    text:
      "Measure process health, exceptions, adoption and operational signals after transformation.",
  },
  {
    step: "06",
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

const closingWords = [
  "DISCOVER",
  "REDESIGN",
  "AUTOMATE",
  "CONNECT",
  "GOVERN",
  "OBSERVE",
  "IMPROVE",
];

/* =========================================================
   ANIMATION
========================================================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function Eyebrow({
  children,
  number,
}: {
  children: React.ReactNode;
  number?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-3"
    >
      <motion.span
        animate={{
          opacity: [0.35, 1, 0.35],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
        }}
        className="h-1.5 w-1.5 rounded-full bg-[#7046e6]"
      />

      <p className="font-mono text-[7px] tracking-[0.27em] text-[#9878ef]">
        {number && `${number} / `}
        {children}
      </p>
    </motion.div>
  );
}

function SectionLine() {
  return (
    <div className="relative h-px w-full overflow-hidden bg-white/[0.07]">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className="absolute inset-y-0 w-[25%] bg-gradient-to-r from-transparent via-[#7046e6] to-transparent"
      />
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function BusinessProcessPage() {
  return (
    <main className="overflow-hidden bg-[#000000] text-white selection:bg-[#7046e6] selection:text-white">
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-screen items-center bg-[#000000] px-5 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/[0.06]" />

        <div className="mx-auto w-full max-w-[1500px]">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-[1370px]"
          >
            <motion.div variants={reveal}>
              <Eyebrow>DIGITAL TRANSFORMATION / BUSINESS PROCESS</Eyebrow>
            </motion.div>

            <motion.h1
              variants={reveal}
              className="mt-10 max-w-[1380px] text-[clamp(4.4rem,9.5vw,10rem)] font-semibold leading-[0.82] tracking-[-0.082em]"
            >
              Reimagine how
              <span className="block text-white/[0.48]">
                work gets done.
              </span>
            </motion.h1>

            <motion.div
              variants={reveal}
              className="mt-12 grid gap-10 border-t border-white/[0.08] pt-8 md:grid-cols-[0.8fr_1.2fr]"
            >
              <p className="font-mono text-[7px] leading-6 tracking-[0.2em] text-white/[0.28]">
                AI-ENABLED BUSINESS PROCESS
                <br />
                TRANSFORMATION
              </p>

              <p className="max-w-[780px] text-[14px] leading-8 text-white/[0.55] md:text-[16px] md:leading-9">
                Redesign business processes around people, data,
                automation and artificial intelligence. Move beyond
                isolated task automation toward connected operations
                where AI can understand context, assist decisions and
                coordinate work across enterprise systems.
              </p>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-16 flex flex-wrap gap-x-10 gap-y-5"
            >
              {[
                "PROCESS DISCOVERY",
                "AI AUTOMATION",
                "WORKFLOW DESIGN",
                "ENTERPRISE INTEGRATION",
                "GOVERNANCE",
              ].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.12 }}
                  whileHover={{
                    x: 5,
                    color: "#ffffff",
                  }}
                  className="font-mono text-[7px] tracking-[0.18em] text-white/[0.27]"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          <motion.a
            href="#process"
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-24 flex w-fit items-center gap-3 font-mono text-[7px] tracking-[0.2em] text-white/30"
          >
            EXPLORE THE PROCESS
            <ArrowDown size={11} />
          </motion.a>
        </div>
      </section>

      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <section className="overflow-hidden border-y border-white/[0.08] bg-black py-7">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max whitespace-nowrap"
        >
          {[...closingWords, ...closingWords, ...closingWords].map(
            (item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center"
              >
                <span className="px-10 text-[12px] font-medium tracking-[0.16em] text-white/[0.32] md:px-16 md:text-[14px]">
                  {item}
                </span>

                <Sparkles
                  size={10}
                  className="text-[#7046e6]"
                />
              </div>
            ),
          )}
        </motion.div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        id="process"
        className="bg-black px-5 py-28 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-16 lg:grid-cols-[0.55fr_1.45fr]"
          >
            <motion.div variants={reveal}>
              <Eyebrow number="01">
                THE TRANSFORMATION QUESTION
              </Eyebrow>
            </motion.div>

            <motion.div variants={reveal}>
              <h2 className="max-w-[1000px] text-4xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-7xl">
                Don&apos;t ask where AI
                <span className="block text-white/[0.43]">
                  can be added.
                </span>
              </h2>

              <p className="mt-12 max-w-[850px] text-[16px] leading-9 text-white/[0.55] md:text-[18px] md:leading-10">
                Ask how the process would be designed if intelligent
                systems, automation and real-time information were
                available from the beginning.
              </p>

              <p className="mt-7 max-w-[850px] text-[13px] leading-8 text-white/[0.4] md:text-[14px]">
                Many business processes were designed around limitations
                that no longer need to exist: information trapped in
                separate systems, manual document handling, repetitive
                data entry, delayed decisions and people acting as the
                integration layer between applications.
              </p>

              <p className="mt-7 max-w-[850px] text-[13px] leading-8 text-white/[0.4] md:text-[14px]">
                AI-enabled transformation provides an opportunity to
                reconsider those assumptions. The objective is not to
                automate every activity. It is to determine the right
                relationship between human judgment, machine
                intelligence, software execution and enterprise data.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionLine />

      {/* =====================================================
          SIX PROCESS AREAS
      ===================================================== */}

      <section className="bg-black px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Eyebrow number="02">PROCESS TRANSFORMATION</Eyebrow>

              <h2 className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-6xl">
                From workflow
                <span className="block text-white/[0.43]">
                  to intelligence.
                </span>
              </h2>
            </motion.div>

            <div>
              {processAreas.map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.04,
                  }}
                  className="group border-t border-white/[0.08] py-10 md:py-12"
                >
                  <div className="grid gap-8 md:grid-cols-[80px_0.8fr_1.2fr]">
                    <div>
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="font-mono text-[8px] text-[#9878ef]"
                      >
                        {item.number}
                      </motion.span>
                    </div>

                    <div>
                      <p className="font-mono text-[6px] tracking-[0.22em] text-white/[0.27]">
                        {item.eyebrow}
                      </p>

                      <h3 className="mt-4 max-w-[400px] text-2xl font-medium leading-[1.15] tracking-[-0.035em] md:text-3xl">
                        {item.title}
                      </h3>
                    </div>

                    <div>
                      <p className="text-[13px] leading-8 text-white/[0.45]">
                        {item.text}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <motion.span
                            key={tag}
                            whileHover={{
                              borderColor: "rgba(112,70,230,.5)",
                              color: "rgba(255,255,255,.7)",
                            }}
                            className="rounded-full border border-white/[0.08] px-3 py-2 font-mono text-[5px] tracking-[0.16em] text-white/[0.23]"
                          >
                            {tag}
                          </motion.span>
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

      {/* =====================================================
          BIG TYPOGRAPHY
      ===================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-28 md:px-10 md:py-44">
        <div className="mx-auto max-w-[1500px]">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-[clamp(3.4rem,7.4vw,8rem)] font-semibold leading-[0.93] tracking-[-0.072em]"
          >
            The future business process is not fully human.
            <span className="text-white/[0.32]">
              {" "}
              It is not fully automated either.
            </span>
            <span className="block pt-5 text-white/[0.68]">
              It is intelligently orchestrated.
            </span>
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          HUMAN + AI
      ===================================================== */}

      <section className="bg-black px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Eyebrow number="03">HUMAN + AI OPERATIONS</Eyebrow>

              <h2 className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-6xl">
                Define who
                <span className="block text-white/[0.43]">
                  does what.
                </span>
              </h2>

              <p className="mt-8 max-w-[480px] text-[13px] leading-8 text-white/[0.43]">
                Intelligent process design clearly defines the role of
                people, AI, automation and enterprise information
                instead of allowing responsibility to become ambiguous.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2">
              {humanAi.map((item, index) => (
                <motion.article
                  key={item.label}
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
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,.012)",
                  }}
                  className="min-h-[330px] border border-white/[0.07] p-7 md:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                      {item.label}
                    </span>

                    <span className="font-mono text-[5px] text-white/[0.15]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-24 text-3xl font-medium tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-[12px] leading-7 text-white/[0.42]">
                    {item.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHERE AI CHANGES PROCESS
      ===================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[1000px]"
          >
            <Eyebrow number="04">AI OPPORTUNITY</Eyebrow>

            <h2 className="mt-7 text-4xl font-semibold leading-[0.96] tracking-[-0.06em] md:text-7xl">
              Where intelligence
              <span className="block text-white/[0.42]">
                changes the workflow.
              </span>
            </h2>
          </motion.div>

          <div className="mt-20">
            {opportunities.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -25 : 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="group grid gap-8 border-t border-white/[0.08] py-10 md:grid-cols-[100px_0.85fr_1.15fr]"
              >
                <span className="font-mono text-[7px] text-[#9878ef]">
                  {item.number}
                </span>

                <h3 className="text-2xl font-medium tracking-[-0.035em]">
                  {item.title}
                </h3>

                <div className="flex gap-5">
                  <ArrowRight
                    size={13}
                    className="mt-2 shrink-0 text-white/20 transition-transform duration-300 group-hover:translate-x-2"
                  />

                  <p className="max-w-[650px] text-[13px] leading-8 text-white/[0.43]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </section>

      {/* =====================================================
          LIFECYCLE
      ===================================================== */}

      <section className="bg-black px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <Eyebrow number="05">TRANSFORMATION LIFECYCLE</Eyebrow>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-6xl"
              >
                Process change
                <span className="block text-white/[0.43]">
                  is continuous.
                </span>
              </motion.h2>
            </div>

            <div>
              {lifecycle.map((item, index) => (
                <motion.div
                  key={item.step}
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
                    delay: index * 0.05,
                  }}
                  className="grid gap-6 border-t border-white/[0.08] py-8 md:grid-cols-[70px_0.55fr_1.45fr]"
                >
                  <motion.span
                    whileHover={{
                      x: 4,
                    }}
                    className="font-mono text-[7px] text-[#9878ef]"
                  >
                    {item.step}
                  </motion.span>

                  <h3 className="text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="text-[12px] leading-7 text-white/[0.42]">
                    {item.text}
                  </p>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BEFORE / AFTER
      ===================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1500px]">
          <Eyebrow number="06">PROCESS SHIFT</Eyebrow>

          <div className="mt-14 grid border border-white/[0.08] lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-7 md:p-12 lg:border-r lg:border-white/[0.08]"
            >
              <p className="font-mono text-[6px] tracking-[0.2em] text-white/[0.23]">
                TRADITIONAL PROCESS
              </p>

              <h3 className="mt-6 text-4xl font-medium tracking-[-0.05em] text-white/[0.45] md:text-5xl">
                Manual.
                <br />
                Fragmented.
                <br />
                Reactive.
              </h3>

              <div className="mt-14 space-y-5">
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
                    transition={{
                      delay: index * 0.07,
                    }}
                    className="flex gap-4 border-t border-white/[0.06] pt-5"
                  >
                    <span className="font-mono text-[5px] text-white/15">
                      0{index + 1}
                    </span>

                    <p className="text-[12px] leading-6 text-white/[0.33]">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="border-t border-white/[0.08] p-7 md:p-12 lg:border-t-0"
            >
              <p className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                INTELLIGENT PROCESS
              </p>

              <h3 className="mt-6 text-4xl font-medium tracking-[-0.05em] md:text-5xl">
                Connected.
                <br />
                Contextual.
                <br />
                Adaptive.
              </h3>

              <div className="mt-14 space-y-5">
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
                    transition={{
                      delay: index * 0.07,
                    }}
                    className="flex gap-4 border-t border-white/[0.06] pt-5"
                  >
                    <Check
                      size={12}
                      className="mt-1 shrink-0 text-[#9878ef]"
                    />

                    <p className="text-[12px] leading-6 text-white/[0.5]">
                      {item}
                    </p>
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

      <section className="bg-black px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-[0.55fr_1.45fr]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Eyebrow number="07">DESIGN PRINCIPLES</Eyebrow>

              <h2 className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-6xl">
                Principles before
                <span className="block text-white/[0.43]">
                  automation.
                </span>
              </h2>
            </motion.div>

            <div>
              {principles.map((item, index) => (
                <motion.div
                  key={item}
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
                    x: 8,
                  }}
                  className="group flex items-center justify-between border-t border-white/[0.08] py-7"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[6px] text-[#9878ef]">
                      0{index + 1}
                    </span>

                    <h3 className="text-[16px] font-medium text-white/[0.7] transition-colors group-hover:text-white md:text-xl">
                      {item}
                    </h3>
                  </div>

                  <ChevronRight
                    size={14}
                    className="text-white/[0.15] transition-all group-hover:translate-x-2 group-hover:text-[#9878ef]"
                  />
                </motion.div>
              ))}

              <div className="border-t border-white/[0.08]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LARGE STATEMENT
      ===================================================== */}

      <section className="border-y border-white/[0.08] bg-black px-5 py-32 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
              BUSINESS PROCESS / AI TRANSFORMATION
            </p>

            <h2 className="mt-10 max-w-[1400px] text-[clamp(3.8rem,8vw,8.8rem)] font-semibold leading-[0.87] tracking-[-0.078em]">
              Less repetitive work.
              <span className="block text-white/[0.36]">
                More intelligent flow.
              </span>
            </h2>

            <div className="mt-14 grid gap-10 border-t border-white/[0.08] pt-9 md:grid-cols-[0.7fr_1.3fr]">
              <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.23]">
                THE OBJECTIVE
              </span>

              <p className="max-w-[820px] text-[14px] leading-8 text-white/[0.5]">
                Create business processes in which information is
                available when needed, routine execution is automated,
                AI assists where intelligence adds value, and people
                remain focused on judgment, relationships, creativity
                and accountability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CLOSING
      ===================================================== */}

      <section className="bg-black px-5 py-32 md:px-10 md:py-52">
        <div className="mx-auto max-w-[1500px]">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
            }}
            className="max-w-[1250px]"
          >
            <Eyebrow number="08">THE INTELLIGENT ENTERPRISE</Eyebrow>

            <h2 className="mt-10 text-[clamp(4rem,8.3vw,9rem)] font-semibold leading-[0.86] tracking-[-0.08em]">
              Redesign work.
              <span className="block text-white/[0.38]">
                Then apply AI.
              </span>
            </h2>

            <p className="mt-12 max-w-[800px] text-[14px] leading-8 text-white/[0.47]">
              The strongest business process transformation does not
              begin by asking which task can be automated next. It
              begins by understanding how the organization should work,
              then designing the right combination of people, data,
              software and artificial intelligence around that goal.
            </p>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
              }}
              style={{
                transformOrigin: "left",
              }}
              className="mt-20 h-px w-full bg-white/[0.08]"
            />

            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
              {closingWords.map((item, index) => (
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
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    color: "#ffffff",
                    y: -2,
                  }}
                  className="font-mono text-[6px] tracking-[0.2em] text-white/[0.22]"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}