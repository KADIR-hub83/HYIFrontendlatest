"use client";

import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";

import { motion, useScroll, useSpring } from "framer-motion";

import {
  BrainCircuit,
  Check,
  CircleDot,
  Cpu,
  Database,
  Search,
  ShieldCheck,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const transformationLayers = [
  {
    title: "Strategy",
    text: "Translate enterprise transformation objectives into a clear change narrative that explains what is changing, why it matters and how AI will reshape everyday work.",
  },
  {
    title: "Leadership",
    text: "Create visible executive sponsorship and equip leaders with the context required to communicate decisions, resolve ambiguity and reinforce new operating behaviors.",
  },
  {
    title: "People",
    text: "Understand how roles, responsibilities, skills and employee experiences will change as intelligent systems become part of business operations.",
  },
  {
    title: "Process",
    text: "Redesign workflows around the capabilities of people, automation and AI instead of inserting new technology into outdated processes.",
  },
  {
    title: "Technology",
    text: "Introduce AI platforms, data foundations, copilots and automation through experiences that employees can understand and confidently adopt.",
  },
  {
    title: "Measurement",
    text: "Track readiness, adoption, capability development and operational signals so transformation decisions can continuously improve.",
  },
];

const changeSignals = [
  "Executive alignment",
  "AI readiness",
  "Workforce impact",
  "Skills transition",
  "Process redesign",
  "Employee adoption",
  "Communication",
  "Governance",
];

const aiChanges = [
  {
    title: "AI changes how knowledge is accessed.",
    text: "Employees increasingly interact with organizational knowledge through conversational search, copilots and intelligent retrieval instead of manually navigating documents and applications.",
  },
  {
    title: "AI changes how decisions are prepared.",
    text: "Intelligent systems can summarize context, identify patterns and generate recommendations, changing the information available to employees before decisions are made.",
  },
  {
    title: "AI changes how workflows execute.",
    text: "Agents and automation can perform controlled portions of business workflows, creating new boundaries between human judgment and machine execution.",
  },
  {
    title: "AI changes the meaning of expertise.",
    text: "Employees may spend less time retrieving routine information and more time interpreting ambiguity, applying domain judgment and managing exceptions.",
  },
  {
    title: "AI changes organizational learning.",
    text: "Feedback from employees, workflows and AI interactions can create a continuous source of insight for improving knowledge, processes and digital experiences.",
  },
];

const adoptionStages = [
  {
    title: "Awareness",
    description:
      "Employees understand what is changing and why the organization is investing in the transformation.",
  },
  {
    title: "Understanding",
    description:
      "Teams understand how the change affects their work, responsibilities, workflows and expected outcomes.",
  },
  {
    title: "Readiness",
    description:
      "People have the access, skills, support and confidence required to begin working in the new environment.",
  },
  {
    title: "Adoption",
    description:
      "New behaviors and technology become part of real operational workflows instead of remaining isolated experiments.",
  },
  {
    title: "Reinforcement",
    description:
      "Feedback, leadership behavior, measurement and continuous improvement help new ways of working become durable.",
  },
];

const workforceImpacts = [
  {
    label: "WORK",
    title: "Tasks",
    text: "Which activities remain human-led, become AI-assisted or can be safely automated?",
  },
  {
    label: "ROLE",
    title: "Responsibilities",
    text: "How do accountability and decision rights evolve when intelligent systems participate in workflows?",
  },
  {
    label: "SKILL",
    title: "Capabilities",
    text: "Which new technical, analytical and judgment capabilities will employees need?",
  },
  {
    label: "TEAM",
    title: "Collaboration",
    text: "How should people work with specialists, platforms, copilots and autonomous systems?",
  },
  {
    label: "TRUST",
    title: "Confidence",
    text: "What evidence, transparency and controls help employees understand when AI can be trusted?",
  },
  {
    label: "VALUE",
    title: "Outcomes",
    text: "How will employees know that the transformation is improving real work rather than simply adding technology?",
  },
];

const roadmap = [
  {
    title: "Discover",
    description:
      "Understand transformation goals, stakeholder groups, workforce impact, current behaviors, technology dependencies and organizational readiness.",
  },
  {
    title: "Align",
    description:
      "Create leadership alignment around the change narrative, priorities, decision rights, success measures and transformation principles.",
  },
  {
    title: "Design",
    description:
      "Design future workflows, employee journeys, communications, learning experiences and governance mechanisms around the new operating environment.",
  },
  {
    title: "Activate",
    description:
      "Launch targeted experiences, pilots and enablement programs while creating channels for rapid employee feedback.",
  },
  {
    title: "Adopt",
    description:
      "Support teams as new technology and behaviors become embedded in real business processes and everyday work.",
  },
  {
    title: "Evolve",
    description:
      "Use adoption data, employee feedback and operational evidence to continuously improve the transformation.",
  },
];

const principles = [
  {
    title: "Start with work.",
    text: "Understand how work actually happens before deciding how AI, automation or new platforms should change it.",
  },
  {
    title: "Explain the why.",
    text: "People adopt change more effectively when they understand the business problem and the purpose behind the transformation.",
  },
  {
    title: "Design with employees.",
    text: "Employees closest to the work provide critical context about friction, exceptions, dependencies and practical constraints.",
  },
  {
    title: "Make change observable.",
    text: "Use meaningful indicators to understand whether awareness is becoming readiness and whether readiness is becoming adoption.",
  },
  {
    title: "Protect human agency.",
    text: "Employees should understand where AI contributes, where human judgment remains essential and how consequential actions are controlled.",
  },
  {
    title: "Treat adoption as continuous.",
    text: "AI capabilities evolve quickly, so organizational learning and change enablement cannot be treated as one-time launch activities.",
  },
];

const capabilityRows = [
  "Change strategy",
  "AI workforce readiness",
  "Stakeholder alignment",
  "Leadership enablement",
  "Employee communications",
  "Learning architecture",
  "Role impact analysis",
  "Adoption measurement",
  "Transformation governance",
  "Operating model evolution",
];

const governanceItems = [
  {
    title: "Human accountability",
    text: "Define where people remain responsible for decisions, approvals and outcomes even when AI contributes analysis or execution.",
  },
  {
    title: "AI transparency",
    text: "Help employees understand when AI is being used, what information it can access and where its recommendations originate.",
  },
  {
    title: "Controlled autonomy",
    text: "Increase AI autonomy only where risk, reversibility, authorization and operational evidence justify it.",
  },
  {
    title: "Feedback loops",
    text: "Create mechanisms for employees to report incorrect outputs, workflow friction and emerging risks.",
  },
];

const readinessLines = [
  "Scanning leadership alignment",
  "Mapping impacted employee groups",
  "Analyzing workflow dependencies",
  "Evaluating AI capability readiness",
  "Identifying knowledge gaps",
  "Mapping role transitions",
  "Reviewing governance controls",
  "Preparing adoption pathways",
];

/* =========================================================
   SHARED UI
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

function SectionHeading({
  first,
  second,
  text,
}: {
  first: string;
  second: string;
  text?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-[1000px] text-center"
    >
      <h2 className="hyi-h1 hyi-white">
        {first}
        <span className="block hyi-blue">{second}</span>
      </h2>

      {text && (
        <p className="mx-auto mt-2 max-w-[780px] hyi-p">{text}</p>
      )}
    </motion.div>
  );
}

function Card({
  title,
  text,
  label,
  index = 0,
  className = "",
}: {
  title: string;
  text: string;
  label?: string;
  index?: number;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.06, duration: 0.6 }}
      whileHover={{
        y: -6,
        borderColor: "rgba(112,70,230,.45)",
      }}
      className={`rounded-[28px] border border-white/[0.07] bg-[#080609] p-7 ${className}`}
    >
      {label && (
        <span className="mb-2 block font-mono text-[6px] tracking-[0.2em] text-[#9878ef]">
          {label}
        </span>
      )}

      <h3 className="hyi-h3 hyi-white">{title}</h3>

      <p className="mt-2 hyi-p">{text}</p>
    </motion.article>
  );
}

function CardGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 flex flex-wrap justify-center gap-3 [&>*]:w-full md:[&>*]:w-[calc(50%-6px)] lg:[&>*]:w-[calc(33.333%-8px)]">
      {children}
    </div>
  );
}

function Section({
  children,
  alt = false,
  glow,
}: {
  children: React.ReactNode;
  alt?: boolean;
  glow?: "left" | "right" | "center";
}) {
  const glowClass = {
    left: "-left-[400px] top-1/2 h-[800px] w-[800px] -translate-y-1/2",
    right: "-right-[400px] top-1/2 h-[850px] w-[850px] -translate-y-1/2",
    center:
      "left-1/2 top-1/2 h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <section
      className={`relative overflow-hidden py-5 ${
        alt ? "bg-[#070508]" : ""
      }`}
    >
      {glow && <PurpleGlow className={glowClass[glow]} />}

      <div className="relative mx-auto max-w-[1350px] px-5 md:px-10">
        {children}
      </div>
    </section>
  );
}

/* =========================================================
   CHANGE INTELLIGENCE MODEL
========================================================= */

function ChangeIntelligenceModel() {
  const nodes = [
    { x: "10%", y: "20%", label: "LEADERS" },
    { x: "82%", y: "16%", label: "TEAMS" },
    { x: "90%", y: "53%", label: "OPS" },
    { x: "76%", y: "84%", label: "DATA" },
    { x: "18%", y: "82%", label: "PEOPLE" },
    { x: "2%", y: "54%", label: "AI" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.1, delay: 0.2 }}
      className="relative mx-auto mt-5 aspect-square w-full max-w-[620px]"
    >
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#390b44]/50 blur-[120px]" />

      {[96, 78, 60, 42].map((size, index) => (
        <motion.div
          key={size}
          animate={{ rotate: index % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: 40 + index * 12,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: `${size}%`, height: `${size}%` }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7046e6]/15"
        >
          <div className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#d8caff] shadow-[0_0_20px_#7046e6]" />
        </motion.div>
      ))}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]"
      />

      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          style={{ left: node.x, top: node.y }}
          animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 3 + index * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute z-20 rounded-2xl border border-white/[0.08] bg-[#0b070d]/80 px-3 py-2 backdrop-blur-xl"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b59af4]" />

            <span className="font-mono text-[6px] tracking-[0.16em] text-white/50">
              {node.label}
            </span>
          </div>
        </motion.div>
      ))}

      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(112,70,230,.25)",
            "0 0 70px rgba(112,70,230,.55)",
            "0 0 20px rgba(112,70,230,.25)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 z-30 flex h-[31%] w-[31%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#7046e6]/40 bg-[#0d0812]"
      >
        <BrainCircuit
          size={28}
          strokeWidth={1.1}
          className="text-[#d5c8f8]"
        />

        <span className="mt-4 font-mono text-[7px] tracking-[0.18em] text-white/70">
          AI CHANGE
        </span>

        <span className="mt-1 font-mono text-[5px] tracking-[0.15em] text-white/25">
          INTELLIGENCE
        </span>
      </motion.div>

      {[0, 1].map((ring) => (
        <motion.div
          key={ring}
          animate={{ scale: [0.7, 1.7], opacity: [0.25, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: ring * 1.5,
          }}
          className="absolute left-1/2 top-1/2 h-[31%] w-[31%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7046e6]/25"
        />
      ))}
    </motion.div>
  );
}

/* =========================================================
   SIGNAL STRIP
========================================================= */

function SignalStrip() {
  return (
    <section className="my-5 overflow-hidden border-y border-white/[0.07] py-5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max whitespace-nowrap"
      >
        {[...changeSignals, ...changeSignals].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center"
          >
            <span className="px-9 font-mono hyi-p tracking-[0.2em] md:px-14">
              {item.toUpperCase()}
            </span>

            <CircleDot size={8} className="text-[#7046e6]" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ChangeManagementPage() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative overflow-hidden text-white selection:bg-[#7046e6] selection:text-white max-md:mx-auto max-md:text-center">
      {/* page progress */}
      <motion.div
        style={{ scaleX: progress, transformOrigin: "left" }}
        className="fixed left-0 top-0 z-[9999] h-[2px] w-full bg-[#7046e6]"
      />

      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden px-5 pt-30 md:px-10">
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
              Change Management
              <span className="block hyi-blue">
                for the AI Era.
              </span>
            </h1>

            <p className="mx-auto mt-2 max-w-[830px] hyi-p">
              Help people understand, adopt and shape AI-enabled ways
              of working. Connect transformation strategy with
              workforce readiness, leadership alignment, capability
              development, governance and measurable adoption.
            </p>
          </motion.div>

          <ChangeIntelligenceModel />
        </div>
      </section>

      {/* =====================================================
          CHANGE SYSTEM
      ===================================================== */}
      <Section>
        <SectionHeading
          first="Technology changes fast."
          second="People need context."
          text="Sustainable transformation requires more than deploying software. Organizations must align leadership, redesign work, prepare employees and continuously understand how change is being experienced."
        />

        <CardGrid>
          {transformationLayers.map((item, index) => (
            <Card
              key={item.title}
              title={item.title}
              text={item.text}
              index={index}
            />
          ))}
        </CardGrid>
      </Section>

  

      {/* =====================================================
          AI CHANGES WORK
      ===================================================== */}
      <Section >
        <SectionHeading
          first="AI does not only change technology."
          second="It changes work."
        />

        <CardGrid>
          {aiChanges.map((item, index) => (
            <Card
              key={item.title}
              title={item.title}
              text={item.text}
              index={index}
            />
          ))}
        </CardGrid>
      </Section>

      {/* =====================================================
          INFRASTRUCTURE CONTEXT
      ===================================================== */}
      <Section>
        <SectionHeading
          first="Infrastructure can be deployed."
          second="Adoption must be built."
        />

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/[0.07] md:col-span-2"
          >
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=85"
              alt="Modern data center infrastructure"
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />

            <div className="absolute inset-0 bg-[#070508]/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070508] via-transparent to-[#070508]/40" />

            <div className="relative flex min-h-[360px] flex-col items-center justify-end p-7 text-center">
              <Cpu
                size={20}
                strokeWidth={1.2}
                className="mb-3 text-[#cbbbf4]"
              />

              <h3 className="hyi-h3 hyi-white">
                AI Infrastructure
              </h3>

              <p className="mt-2 max-w-[640px] hyi-p">
                Compute, models and platforms create technical
                capability. Organizational change turns capability
                into useful work.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[260px] overflow-hidden rounded-[28px] border border-white/[0.07]"
          >
            <img
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=85"
              alt="Enterprise servers"
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />

            <div className="absolute inset-0 bg-[#070508]/75" />

            <div className="relative flex min-h-[260px] flex-col items-center justify-end p-7 text-center">
              <h3 className="hyi-h3 hyi-white">
                Enterprise Platforms
              </h3>

              <p className="mt-2 hyi-p">
                Platforms deliver capability only when teams know how
                to use them inside real work.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex min-h-[260px] flex-col items-center justify-center rounded-[28px] border border-[#7046e6]/25 bg-[#080609] p-7 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/10">
              <Database
                size={16}
                className="text-[#bba4f6]"
              />
            </div>

            <h3 className="mt-2 hyi-h3 hyi-white">
              Technology × People
            </h3>

            <p className="mt-2 max-w-[460px] hyi-p">
              Transformation becomes operational when employees can
              confidently use new technology inside redesigned
              workflows with clear expectations and appropriate
              governance.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* =====================================================
          ADOPTION ENGINE
      ===================================================== */}
      <Section >
        <SectionHeading
          first="Adoption is"
          second="a progression."
          text="Awareness alone does not create transformation. Employees need context, practical capability, opportunities to use new systems and reinforcement from the environment around them."
        />

        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {adoptionStages.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{
                y: -6,
                borderColor: "rgba(112,70,230,.45)",
              }}
              className="rounded-[26px] border border-white/[0.07] bg-[#080609] p-6"
            >
              <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#7046e6]/10">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c9b7fa]" />
              </div>

              <h3 className="mt-2 hyi-h3 hyi-white">
                {item.title}
              </h3>

              <p className="mt-2 hyi-p">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </Section>
      {/* =====================================================
          WORKFORCE IMPACT
      ===================================================== */}
      <Section>
        <SectionHeading
          first="Redesign the relationship"
          second="between people and AI."
        />

        <CardGrid>
          {workforceImpacts.map((item, index) => (
            <Card
              key={item.title}
              label={item.label}
              title={item.title}
              text={item.text}
              index={index}
            />
          ))}
        </CardGrid>
      </Section>

      {/* =====================================================
          READINESS
      ===================================================== */}
      <Section>
        <SectionHeading
          first="Know where"
          second="change will land."
          text="Readiness assessment helps teams understand whether the organization has the leadership, knowledge, capabilities, processes and governance required to adopt new AI-enabled ways of working."
        />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-5 max-w-[860px] overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#030303]"
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
            <div className="flex items-center gap-3">
              <Search size={14} className="text-[#9878ef]" />

              <span className="font-mono text-[7px] tracking-[0.18em] text-white/45">
                ORGANIZATIONAL READINESS ANALYSIS
              </span>
            </div>

            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-[#a98cf1]"
            />
          </div>

          <div className="p-4">
            {readinessLines.map((line, index) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="mb-2 flex items-center gap-4 rounded-[18px] border border-white/[0.05] bg-white/[0.02] px-5 py-4"
              >
                <Check
                  size={13}
                  className="shrink-0 text-[#9878ef]"
                />

                <span className="flex-1 text-left hyi-p">
                  {line}
                </span>

                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                  className="font-mono text-[6px] tracking-[0.16em] text-[#a98cf1]"
                >
                  READY
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* =====================================================
          ROADMAP
      ===================================================== */}
      <Section>
        <SectionHeading
          first="Change is designed"
          second="through movement."
        />

        <CardGrid>
          {roadmap.map((item, index) => (
            <Card
              key={item.title}
              title={item.title}
              text={item.description}
              index={index}
            />
          ))}
        </CardGrid>
      </Section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <Section>
        <SectionHeading
          first="Build the"
          second="change layer."
        />

        <div className="mx-auto mt-5 flex max-w-[1000px] flex-wrap justify-center gap-2">
          {capabilityRows.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              whileHover={{
                y: -3,
                borderColor: "rgba(112,70,230,.5)",
              }}
              className="rounded-full border border-white/[0.08] bg-white/[0.025] px-6 py-3"
            >
              <span className="hyi-p">{item}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* =====================================================
          GOVERNANCE
      ===================================================== */}
      <Section >
        <SectionHeading
          first="Adoption grows"
          second="when trust grows."
        />

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {governanceItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 2) * 0.07 }}
              whileHover={{
                y: -6,
                borderColor: "rgba(112,70,230,.45)",
              }}
              className="rounded-[28px] border border-white/[0.07] bg-[#080609] p-7"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[15px] border border-[#7046e6]/25 bg-[#7046e6]/10">
                <ShieldCheck
                  size={16}
                  className="text-[#bba4f6]"
                />
              </div>

              <h3 className="mt-2 hyi-h3 hyi-white">
                {item.title}
              </h3>

              <p className="mt-2 hyi-p">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}
      <Section>
        <SectionHeading
          first="Principles"
          second="before platforms."
          text="Durable principles help teams make consistent decisions while AI capabilities and workplace technology continue to evolve."
        />

        <CardGrid>
          {principles.map((item, index) => (
            <Card
              key={item.title}
              title={item.title}
              text={item.text}
              index={index}
            />
          ))}
        </CardGrid>
      </Section>

      {/* =====================================================
          FINAL STATEMENT
      ===================================================== */}
      <Section >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[1000px] pb-5 text-center"
        >
          <h2 className="hyi-h1 hyi-white">
            Transform the organization,
            <span className="block hyi-blue">
              not only the technology.
            </span>
          </h2>

          <p className="mx-auto mt-2 max-w-[820px] hyi-p">
            AI transformation becomes valuable when people can use
            new capabilities confidently inside real work. Effective
            change management connects technology with leadership,
            workforce design, learning, communication, governance
            and measurable adoption.
          </p>

      
        </motion.div>
      </Section>

      <Footer />
    </main>
  );
}