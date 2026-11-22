"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const transformationLayers = [
  {
    label: "STRATEGY",
    title: "Business direction",
    text:
      "Connect enterprise transformation to measurable business priorities. Define where artificial intelligence, automation, cloud and data can change how the organization creates value instead of treating technology modernization as an isolated initiative.",
  },
  {
    label: "OPERATING MODEL",
    title: "How the enterprise works",
    text:
      "Redesign decision rights, ownership, collaboration and operational structures so teams can adopt intelligent systems without creating fragmented AI initiatives across departments.",
  },
  {
    label: "PROCESS",
    title: "How work moves",
    text:
      "Reimagine workflows around intelligent automation, connected information and human judgment. Remove unnecessary handoffs before introducing AI into the operating environment.",
  },
  {
    label: "DATA",
    title: "How context becomes available",
    text:
      "Create governed data foundations that allow people, applications and AI systems to access trusted enterprise context at the moment decisions and actions occur.",
  },
  {
    label: "TECHNOLOGY",
    title: "How capabilities scale",
    text:
      "Modernize platforms, integration layers and cloud infrastructure so AI capabilities can move from isolated experiments into reusable enterprise services.",
  },
  {
    label: "PEOPLE",
    title: "How change becomes real",
    text:
      "Develop new skills, responsibilities and ways of working. Enterprise transformation succeeds when technology adoption becomes part of everyday operations rather than remaining a separate innovation program.",
  },
];

const shifts = [
  {
    from: "SILOED SYSTEMS",
    to: "CONNECTED ENTERPRISE",
    text:
      "Move from disconnected applications and departmental information toward integrated platforms and shared enterprise context.",
  },
  {
    from: "MANUAL COORDINATION",
    to: "INTELLIGENT ORCHESTRATION",
    text:
      "Reduce repetitive coordination by allowing workflows, automation and AI systems to participate in operational execution.",
  },
  {
    from: "STATIC REPORTING",
    to: "CONTINUOUS INTELLIGENCE",
    text:
      "Move from delayed business reporting toward operational signals and intelligence available closer to the moment of action.",
  },
  {
    from: "ISOLATED AI PILOTS",
    to: "ENTERPRISE AI CAPABILITY",
    text:
      "Replace disconnected experiments with governed, reusable AI capabilities integrated into business processes and technology platforms.",
  },
  {
    from: "TECHNOLOGY PROJECTS",
    to: "BUSINESS TRANSFORMATION",
    text:
      "Evaluate modernization through changes in business capability, operating performance and organizational adaptability.",
  },
];

const operatingSystem = [
  {
    title: "Business",
    description:
      "Strategy, customer value, operating priorities and measurable transformation outcomes.",
  },
  {
    title: "People",
    description:
      "Skills, accountability, organizational design, adoption and human decision-making.",
  },
  {
    title: "Process",
    description:
      "Workflows, automation, handoffs, decisions and operational execution.",
  },
  {
    title: "Data",
    description:
      "Trusted information, governance, accessibility, context and enterprise knowledge.",
  },
  {
    title: "AI",
    description:
      "Machine intelligence, copilots, agents, predictive systems and intelligent automation.",
  },
  {
    title: "Technology",
    description:
      "Cloud, platforms, applications, APIs, infrastructure and enterprise architecture.",
  },
];

const journey = [
  {
    phase: "UNDERSTAND",
    title: "Establish the transformation baseline.",
    description:
      "Understand business priorities, operating constraints, technology landscape, data maturity, process friction and current AI capabilities.",
  },
  {
    phase: "DEFINE",
    title: "Design the future enterprise.",
    description:
      "Define target capabilities, operating principles, transformation priorities and the future relationship between people, AI, data and technology.",
  },
  {
    phase: "PRIORITIZE",
    title: "Build a sequenced portfolio.",
    description:
      "Identify initiatives based on strategic relevance, dependencies, feasibility and the organizational capabilities required to implement them responsibly.",
  },
  {
    phase: "TRANSFORM",
    title: "Change processes and platforms together.",
    description:
      "Modernize workflows, applications, data foundations and AI capabilities while maintaining alignment with the target operating model.",
  },
  {
    phase: "ADOPT",
    title: "Embed change into daily work.",
    description:
      "Support teams with governance, skills, communication and new operating practices so transformation becomes part of normal business execution.",
  },
  {
    phase: "EVOLVE",
    title: "Continuously adapt the enterprise.",
    description:
      "Use operational feedback and changing technology capabilities to continuously improve processes, platforms and ways of working.",
  },
];

const principles = [
  {
    title: "Business before technology.",
    text:
      "Technology choices should follow the business capabilities and operating changes the organization is trying to create.",
  },
  {
    title: "Transform systems together.",
    text:
      "Process, data, applications, people and AI are interconnected. Changing one without considering the others creates new constraints.",
  },
  {
    title: "Build reusable capability.",
    text:
      "Shared platforms, data foundations and AI services create more enterprise value than isolated departmental solutions.",
  },
  {
    title: "Governance is architecture.",
    text:
      "Security, accountability, permissions, auditability and human oversight must be designed into intelligent operations.",
  },
  {
    title: "Adoption is part of delivery.",
    text:
      "A technically successful platform creates little value when teams cannot integrate it into everyday work.",
  },
  {
    title: "Transformation never finishes.",
    text:
      "Enterprise transformation creates the capability to continuously respond to changing markets, technology and customer expectations.",
  },
];

const whatChanges = [
  "HOW LEADERS MAKE DECISIONS",
  "HOW TEAMS ACCESS KNOWLEDGE",
  "HOW PROCESSES ARE EXECUTED",
  "HOW DATA MOVES THROUGH THE BUSINESS",
  "HOW SOFTWARE PARTICIPATES IN WORK",
  "HOW AI INTERACTS WITH PEOPLE",
  "HOW TECHNOLOGY CAPABILITIES ARE GOVERNED",
  "HOW THE ENTERPRISE RESPONDS TO CHANGE",
];

const capabilities = [
  "AI STRATEGY",
  "ENTERPRISE ARCHITECTURE",
  "PROCESS TRANSFORMATION",
  "DATA MODERNIZATION",
  "CLOUD TRANSFORMATION",
  "INTELLIGENT AUTOMATION",
  "AI GOVERNANCE",
  "OPERATING MODEL",
  "CHANGE ENABLEMENT",
  "PLATFORM MODERNIZATION",
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

export default function EnterpriseTransformationPage() {
  const { scrollYProgress } = useScroll();

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  );

  return (
    <main className="relative overflow-hidden  text-white selection:bg-[#7046e6] selection:text-white">
      {/* SCROLL PROGRESS */}
      <motion.div
        style={{ width: progressWidth }}
        className="fixed left-0 top-0 z-[9999] h-[2px] bg-[#7046e6]"
      />

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
              Transform the
              <span className="block hyi-blue">
                entire enterprise.
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-[830px] hyi-p">
              Enterprise transformation connects business strategy,
              operating models, people, processes, data and
              technology into one coordinated system of change.
              Artificial intelligence introduces a new layer of
              capability — but sustainable transformation requires
              redesigning the enterprise around it.
            </p>

           
          </motion.div>
        </div>
      </section>



      {/* =====================================================
          ENTERPRISE QUESTION
      ===================================================== */}
      <section
        id="enterprise"
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
                Technology changed.
                <span className="block hyi-blue">
                  Has the enterprise?
                </span>
              </h2>

              <p className="mt-2 max-w-[590px] hyi-p">
                AI, cloud platforms, automation and modern data
                systems can fundamentally change how organizations
                operate. Their value is limited, however, when they
                are inserted into structures and processes designed
                for an earlier technology environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7"
            >
              <p className="hyi-p">
                Enterprise transformation looks beyond individual
                technology deployments. It asks how strategy,
                organization, processes, information and technology
                should evolve together so the enterprise can operate
                differently.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LARGE STATEMENT
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
              AI transformation is not another technology program.
              <span className="block hyi-blue">
                It changes how the enterprise thinks, decides and
                operates.
              </span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          TRANSFORMATION SYSTEM
      ===================================================== */}
      <section className="relative overflow-hidden  bg-[#070508] py-10">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="hyi-h1 hyi-white">
                Six connected
                <span className="block hyi-blue">
                  dimensions.
                </span>
              </h2>

              <p className="mt-2 max-w-[420px] hyi-p">
                Enterprise transformation becomes stronger when
                these dimensions evolve as one system instead of
                separate initiatives.
              </p>
            </motion.div>

            <div>
              {transformationLayers.map((item) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.75fr_1.25fr]"
                >
                  <div>
                    <span className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                      {item.label}
                    </span>

                    <h3 className="mt-2 hyi-h3 hyi-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="hyi-p">{item.text}</p>
                </motion.article>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OPERATING SYSTEM
      ===================================================== */}
      <section className="relative overflow-hidden py-10">

        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="flex flex-col text-center mx-auto">
            <div className="max-w-[900px] mx-auto">
              <h2 className="hyi-h1 hyi-white">
                One enterprise.
                <span className="block hyi-blue">
                  Multiple systems.
                </span>
              </h2>
            </div>

            <p className="max-w-[670px] hyi-p mx-auto">
              The intelligent enterprise coordinates human
              capability, digital platforms and machine intelligence
              instead of allowing each to operate independently.
            </p>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {operatingSystem.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  y: -7,
                  borderColor: "rgba(112,70,230,.45)",
                }}
                className="group rounded-[29px] border border-white/[0.07] bg-[#080609] p-7"
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
          ENTERPRISE SHIFT
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                From old
                <span className="block hyi-blue">
                  to adaptive.
                </span>
              </h2>
            </div>

            <div>
              {shifts.map((item) => (
                <motion.div
                  key={item.from}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="border-t border-white/[0.07] py-8"
                >
                  <div className="grid gap-5 md:grid-cols-[1fr_50px_1fr]">
                    <div>
                      <p className="font-mono text-[6px] tracking-[0.18em] text-white/[0.25]">
                        FROM
                      </p>

                      <h3 className="mt-2 hyi-h3 text-white/[0.4]">
                        {item.from}
                      </h3>
                    </div>

                    <div className="flex items-center">
                      <motion.div
                        animate={{ x: [0, 7, 0] }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                        }}
                      >
                        <ArrowRight
                          size={16}
                          className="text-[#9878ef]/60"
                        />
                      </motion.div>
                    </div>

                    <div>
                      <p className="font-mono text-[6px] tracking-[0.18em] text-[#9878ef]">
                        TO
                      </p>

                      <h3 className="mt-2 hyi-h3 hyi-white">
                        {item.to}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-2 max-w-[750px] hyi-p">
                    {item.text}
                  </p>
                </motion.div>
              ))}

              <div className="border-t border-white/[0.07]" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTIFICIAL INTELLIGENCE
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
              AI is not the transformation.
              <span className="block hyi-blue">
                AI changes what transformation can become.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[820px] hyi-p">
              AI creates new possibilities for how knowledge is
              accessed, how decisions are supported, how processes
              operate and how customers interact with organizations.
              Capturing that potential requires more than deploying
              models.
            </p>

            <p className="mx-auto mt-2 max-w-[820px] hyi-p">
              Enterprises need trusted information, modern technology
              foundations, clear accountability, redesigned workflows
              and people prepared to work with intelligent systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          JOURNEY
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
                Change with
                <span className="block hyi-blue">
                  direction.
                </span>
              </h2>

              <p className="mt-2 max-w-[410px] hyi-p">
                Enterprise transformation needs a direction and
                sequencing model while remaining flexible enough to
                respond to new information and emerging AI
                capability.
              </p>
            </motion.div>

            <div>
              {journey.map((item) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border-t border-white/[0.07] py-8"
                >
                  <span className="font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
                    {item.phase}
                  </span>

                  <div className="mt-2 grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
                    <h3 className="hyi-h3 hyi-white">
                      {item.title}
                    </h3>

                    <p className="hyi-p">{item.description}</p>
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
          <div className="mx-auto max-w-[1000px] text-center">
            <h2 className="hyi-h1 hyi-white">
              Build an enterprise
              <span className="block hyi-blue">
                designed to evolve.
              </span>
            </h2>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((item, index) => (
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
          WHAT CHANGES
      ===================================================== */}
      <section className="relative overflow-hidden py-10">
        <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <h2 className="hyi-h1 hyi-white">
                What changes
                <span className="block hyi-blue">
                  in the enterprise.
                </span>
              </h2>
            </div>

            <div>
              {whatChanges.map((item) => (
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
          ADAPTIVE ENTERPRISE
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
              Transform once? No.
              <span className="block hyi-blue">
                Build the ability to keep transforming.
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-[850px] hyi-p">
              The long-term objective of transformation is not a
              fixed destination. It is an enterprise capable of
              continuously adapting its strategy, processes,
              technology and workforce as markets and intelligent
              technologies evolve.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {[
                "ADAPT",
                "LEARN",
                "MODERNIZE",
                "CONNECT",
                "AUTOMATE",
                "GOVERN",
                "EVOLVE",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 font-mono hyi-p tracking-[0.17em] text-white/[0.4]"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}