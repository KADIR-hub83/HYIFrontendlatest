"use client";

import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleDot,
  Cpu,
  Database,
  Network,
  Orbit,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import { useRef } from "react";

/* =========================================================
   DATA
========================================================= */

const transformationLayers = [
  {
    id: "01",
    title: "Strategy",
    text: "Translate enterprise transformation objectives into a clear change narrative that explains what is changing, why it matters and how AI will reshape everyday work.",
  },
  {
    id: "02",
    title: "Leadership",
    text: "Create visible executive sponsorship and equip leaders with the context required to communicate decisions, resolve ambiguity and reinforce new operating behaviors.",
  },
  {
    id: "03",
    title: "People",
    text: "Understand how roles, responsibilities, skills and employee experiences will change as intelligent systems become part of business operations.",
  },
  {
    id: "04",
    title: "Process",
    text: "Redesign workflows around the capabilities of people, automation and AI instead of inserting new technology into outdated processes.",
  },
  {
    id: "05",
    title: "Technology",
    text: "Introduce AI platforms, data foundations, copilots and automation through experiences that employees can understand and confidently adopt.",
  },
  {
    id: "06",
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
    number: "01",
    title: "AI changes how knowledge is accessed.",
    text: "Employees increasingly interact with organizational knowledge through conversational search, copilots and intelligent retrieval instead of manually navigating documents and applications.",
  },
  {
    number: "02",
    title: "AI changes how decisions are prepared.",
    text: "Intelligent systems can summarize context, identify patterns and generate recommendations, changing the information available to employees before decisions are made.",
  },
  {
    number: "03",
    title: "AI changes how workflows execute.",
    text: "Agents and automation can perform controlled portions of business workflows, creating new boundaries between human judgment and machine execution.",
  },
  {
    number: "04",
    title: "AI changes the meaning of expertise.",
    text: "Employees may spend less time retrieving routine information and more time interpreting ambiguity, applying domain judgment and managing exceptions.",
  },
  {
    number: "05",
    title: "AI changes organizational learning.",
    text: "Feedback from employees, workflows and AI interactions can create a continuous source of insight for improving knowledge, processes and digital experiences.",
  },
];

const adoptionStages = [
  {
    stage: "01",
    title: "Awareness",
    description:
      "Employees understand what is changing and why the organization is investing in the transformation.",
  },
  {
    stage: "02",
    title: "Understanding",
    description:
      "Teams understand how the change affects their work, responsibilities, workflows and expected outcomes.",
  },
  {
    stage: "03",
    title: "Readiness",
    description:
      "People have the access, skills, support and confidence required to begin working in the new environment.",
  },
  {
    stage: "04",
    title: "Adoption",
    description:
      "New behaviors and technology become part of real operational workflows instead of remaining isolated experiments.",
  },
  {
    stage: "05",
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
    phase: "PHASE 01",
    title: "Discover",
    description:
      "Understand transformation goals, stakeholder groups, workforce impact, current behaviors, technology dependencies and organizational readiness.",
  },
  {
    phase: "PHASE 02",
    title: "Align",
    description:
      "Create leadership alignment around the change narrative, priorities, decision rights, success measures and transformation principles.",
  },
  {
    phase: "PHASE 03",
    title: "Design",
    description:
      "Design future workflows, employee journeys, communications, learning experiences and governance mechanisms around the new operating environment.",
  },
  {
    phase: "PHASE 04",
    title: "Activate",
    description:
      "Launch targeted experiences, pilots and enablement programs while creating channels for rapid employee feedback.",
  },
  {
    phase: "PHASE 05",
    title: "Adopt",
    description:
      "Support teams as new technology and behaviors become embedded in real business processes and everyday work.",
  },
  {
    phase: "PHASE 06",
    title: "Evolve",
    description:
      "Use adoption data, employee feedback and operational evidence to continuously improve the transformation.",
  },
];

const principles = [
  {
    number: "01",
    title: "Start with work.",
    text: "Understand how work actually happens before deciding how AI, automation or new platforms should change it.",
  },
  {
    number: "02",
    title: "Explain the why.",
    text: "People adopt change more effectively when they understand the business problem and the purpose behind the transformation.",
  },
  {
    number: "03",
    title: "Design with employees.",
    text: "Employees closest to the work provide critical context about friction, exceptions, dependencies and practical constraints.",
  },
  {
    number: "04",
    title: "Make change observable.",
    text: "Use meaningful indicators to understand whether awareness is becoming readiness and whether readiness is becoming adoption.",
  },
  {
    number: "05",
    title: "Protect human agency.",
    text: "Employees should understand where AI contributes, where human judgment remains essential and how consequential actions are controlled.",
  },
  {
    number: "06",
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

/* =========================================================
   SMALL REUSABLE COMPONENTS
========================================================= */

function Eyebrow({
  children,
  index,
}: {
  children: React.ReactNode;
  index?: string;
}) {
  return (
    <div className="flex items-center gap-4">
      {index && (
        <span className="font-mono text-[7px] tracking-[0.18em] text-white/[0.16]">
          {index}
        </span>
      )}

      <span className="h-px w-8 bg-white/[0.15]" />

      <span className="font-mono text-[7px] tracking-[0.22em] text-white/[0.34]">
        {children}
      </span>
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
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
        amount: 0.18,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   CHANGE INTELLIGENCE MODEL
========================================================= */

function ChangeIntelligenceModel() {
  const employees = [
    { x: "10%", y: "20%", label: "LEADERS" },
    { x: "82%", y: "16%", label: "TEAMS" },
    { x: "92%", y: "53%", label: "OPS" },
    { x: "76%", y: "84%", label: "DATA" },
    { x: "18%", y: "82%", label: "PEOPLE" },
    { x: "2%", y: "54%", label: "AI" },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[690px]">
      {/* outer labels */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 font-mono text-[6px] tracking-[0.18em] text-white/[0.18]">
        ORGANIZATIONAL CHANGE SYSTEM
      </div>

      {/* rings */}
      {[96, 78, 60, 42].map((size, index) => (
        <motion.div
          key={size}
          animate={{
            rotate: index % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 40 + index * 12,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: `${size}%`,
            height: `${size}%`,
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]"
        >
          <div className="absolute left-1/2 top-[-3px] h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-white/[0.65]" />

          <div className="absolute bottom-[12%] right-[12%] h-[4px] w-[4px] rounded-full bg-white/[0.25]" />
        </motion.div>
      ))}

      {/* cross lines */}
      <div className="absolute left-1/2 top-[8%] h-[84%] w-px bg-white/[0.05]" />
      <div className="absolute left-[8%] top-1/2 h-px w-[84%] bg-white/[0.05]" />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.1]"
      />

      {/* employee nodes */}
      {employees.map((node, index) => (
        <motion.div
          key={node.label}
          style={{
            left: node.x,
            top: node.y,
          }}
          animate={{
            y: [0, -7, 0],
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 3 + index * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute z-20"
        >
          <div className="flex items-center gap-2">
            <span className="h-[7px] w-[7px] rounded-full border border-white/[0.45] bg-black" />

            <span className="font-mono text-[5px] tracking-[0.12em] text-white/[0.26]">
              {node.label}
            </span>
          </div>
        </motion.div>
      ))}

      {/* center */}
      <motion.div
        animate={{
          scale: [1, 1.035, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 z-30 flex h-[31%] w-[31%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/[0.16] bg-black"
      >
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-[9px] rounded-full border border-dashed border-white/[0.08]"
        />

        <BrainCircuit
          size={28}
          strokeWidth={1}
          className="text-white/[0.75]"
        />

        <span className="mt-5 font-mono text-[7px] tracking-[0.18em] text-white/[0.62]">
          AI CHANGE
        </span>

        <span className="mt-1 font-mono text-[5px] tracking-[0.15em] text-white/[0.22]">
          INTELLIGENCE
        </span>
      </motion.div>

      {/* pulses */}
      <motion.div
        animate={{
          scale: [0.7, 1.5],
          opacity: [0.2, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[31%] w-[31%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.12]"
      />

      <motion.div
        animate={{
          scale: [0.7, 1.8],
          opacity: [0.12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1,
        }}
        className="absolute left-1/2 top-1/2 h-[31%] w-[31%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]"
      />
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[115vh] overflow-hidden bg-black px-5 pb-28 pt-36 md:px-10 md:pt-44"
    >
      {/* giant background word */}
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute left-1/2 top-[18%] -translate-x-1/2 whitespace-nowrap"
      >
        <span className="text-[clamp(10rem,26vw,30rem)] font-semibold leading-none tracking-[-0.11em] text-white/[0.018]">
          CHANGE
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="flex items-center justify-between border-y border-white/[0.07] py-5">
          <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.28]">
            DIGITAL TRANSFORMATION
          </span>

          <span className="hidden font-mono text-[7px] tracking-[0.2em] text-white/[0.15] md:block">
            CHANGE MANAGEMENT / AI ENABLEMENT
          </span>

          <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.28]">
            HYI.AI
          </span>
        </div>

        <div className="grid min-h-[850px] items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
          <div className="relative z-20">
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
              }}
            >
              <Eyebrow>AI-LED ORGANIZATIONAL CHANGE</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 70,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-12 max-w-[850px] text-[clamp(4.5rem,8.6vw,9.5rem)] font-semibold leading-[0.78] tracking-[-0.09em]"
            >
              Change
              <span className="block text-white/[0.18]">
                Management
              </span>
              <span className="block">for AI.</span>
            </motion.h1>

            <motion.p
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
                delay: 0.4,
              }}
              className="mt-12 max-w-[670px] text-[14px] leading-8 text-white/[0.44] md:text-[16px] md:leading-9"
            >
              Help people understand, adopt and shape AI-enabled ways of
              working. Connect transformation strategy with workforce
              readiness, leadership alignment, capability development,
              governance and measurable adoption.
            </motion.p>

            <motion.a
              href="#change-system"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.7,
              }}
              whileHover={{
                x: 8,
              }}
              className="mt-12 flex w-fit items-center gap-4 border-b border-white/[0.15] pb-3 font-mono text-[7px] tracking-[0.2em] text-white/[0.45]"
            >
              EXPLORE CHANGE SYSTEM
              <ArrowDown size={11} />
            </motion.a>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.86,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.4,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            <ChangeIntelligenceModel />
          </motion.div>
        </div>

        <div className="grid border-t border-white/[0.07] md:grid-cols-4">
          {[
            ["01", "PEOPLE"],
            ["02", "PROCESS"],
            ["03", "AI"],
            ["04", "ADOPTION"],
          ].map(([number, label]) => (
            <div
              key={number}
              className="flex items-center justify-between border-b border-white/[0.07] py-5 md:border-b-0 md:border-r md:px-5 first:pl-0"
            >
              <span className="font-mono text-[6px] text-white/[0.14]">
                {number}
              </span>

              <span className="font-mono text-[7px] tracking-[0.17em] text-white/[0.3]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CHANGE SYSTEM
========================================================= */

function ChangeSystem() {
  return (
    <section
      id="change-system"
      className="border-y border-white/[0.07] bg-black px-5 py-40 md:px-10 md:py-60"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.42fr_1.58fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <Eyebrow index="01">CHANGE SYSTEM</Eyebrow>

              <h2 className="mt-12 text-5xl font-semibold leading-[0.93] tracking-[-0.065em] md:text-7xl">
                Technology
                <span className="block text-white/[0.18]">
                  changes fast.
                </span>
                People need
                <span className="block text-white/[0.18]">
                  context.
                </span>
              </h2>

              <p className="mt-10 max-w-[430px] text-[13px] leading-8 text-white/[0.36]">
                Sustainable transformation requires more than deploying
                software. Organizations must align leadership, redesign
                work, prepare employees and continuously understand how
                change is being experienced.
              </p>
            </div>
          </div>

          <div className="border-t border-white/[0.08]">
            {transformationLayers.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.65,
                }}
                whileHover={{
                  x: 8,
                }}
                className="group grid min-h-[220px] gap-8 border-b border-white/[0.08] py-10 md:grid-cols-[80px_.55fr_1fr]"
              >
                <span className="font-mono text-[7px] text-white/[0.14]">
                  {item.id}
                </span>

                <h3 className="text-3xl font-medium tracking-[-0.05em] transition-colors group-hover:text-white md:text-4xl">
                  {item.title}
                </h3>

                <p className="max-w-[650px] text-[13px] leading-8 text-white/[0.36]">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   AI CHANGES WORK
========================================================= */

function AIChangesWork() {
  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col justify-between gap-14 lg:flex-row">
          <Eyebrow index="02">AI + WORK</Eyebrow>

          <Reveal>
            <h2 className="max-w-[950px] text-5xl font-semibold leading-[0.92] tracking-[-0.07em] md:text-8xl">
              AI does not only
              <span className="block text-white/[0.18]">
                change technology.
              </span>
              It changes work.
            </h2>
          </Reveal>
        </div>

        <div className="mt-28">
          {aiChanges.map((item) => (
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
                amount: 0.25,
              }}
              className="grid min-h-[250px] gap-10 border-t border-white/[0.08] py-12 md:grid-cols-[90px_.85fr_1fr]"
            >
              <span className="font-mono text-[7px] text-white/[0.14]">
                {item.number}
              </span>

              <h3 className="max-w-[520px] text-3xl font-medium leading-[1.05] tracking-[-0.055em] md:text-5xl">
                {item.title}
              </h3>

              <p className="max-w-[620px] text-[13px] leading-8 text-white/[0.36]">
                {item.text}
              </p>
            </motion.article>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DATA CENTER IMAGE SECTION
========================================================= */

function InfrastructureContext() {
  return (
    <section className="border-y border-white/[0.07] bg-black px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative min-h-[620px] overflow-hidden border border-white/[0.08]"
          >
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=85"
              alt="Modern data center infrastructure"
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />

            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/30" />

            <div className="absolute left-7 top-7">
              <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.6]">
                AI INFRASTRUCTURE / ENTERPRISE CHANGE
              </span>
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="max-w-[850px] text-4xl font-medium leading-[1] tracking-[-0.055em] md:text-6xl">
                Infrastructure can be deployed.
                <span className="block text-white/[0.5]">
                  Adoption must be built.
                </span>
              </h3>
            </div>
          </motion.div>

          <div className="grid gap-5">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="relative min-h-[300px] overflow-hidden border border-white/[0.08]"
            >
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=85"
                alt="Enterprise servers"
                className="absolute inset-0 h-full w-full object-cover grayscale"
              />

              <div className="absolute inset-0 bg-black/55" />

              <div className="absolute bottom-7 left-7 right-7">
                <Cpu
                  size={19}
                  strokeWidth={1}
                  className="mb-5 text-white/[0.7]"
                />

                <p className="text-xl font-medium tracking-[-0.035em]">
                  AI infrastructure
                </p>

                <p className="mt-3 text-[11px] leading-6 text-white/[0.45]">
                  Compute, models and platforms create technical
                  capability. Organizational change turns capability
                  into useful work.
                </p>
              </div>
            </motion.div>

            <motion.div
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
                delay: 0.1,
              }}
              className="flex min-h-[300px] flex-col justify-between border border-white/[0.08] p-8"
            >
              <div className="flex items-center justify-between">
                <Database
                  size={19}
                  strokeWidth={1}
                  className="text-white/[0.55]"
                />

                <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.16]">
                  CHANGE LAYER
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-medium tracking-[-0.05em]">
                  Technology × People
                </h3>

                <p className="mt-5 text-[12px] leading-7 text-white/[0.35]">
                  Transformation becomes operational when employees can
                  confidently use new technology inside redesigned
                  workflows with clear expectations and appropriate
                  governance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ADOPTION ENGINE
========================================================= */

function AdoptionEngine() {
  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <Eyebrow index="03">ADOPTION ENGINE</Eyebrow>

        <div className="mt-16 grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <Reveal>
              <h2 className="text-5xl font-semibold leading-[0.93] tracking-[-0.065em] md:text-7xl">
                Adoption is
                <span className="block text-white/[0.18]">
                  a progression.
                </span>
              </h2>
            </Reveal>

            <p className="mt-10 max-w-[500px] text-[13px] leading-8 text-white/[0.36]">
              Awareness alone does not create transformation. Employees
              need context, practical capability, opportunities to use
              new systems and reinforcement from the environment around
              them.
            </p>
          </div>

          <div>
            {adoptionStages.map((item, index) => (
              <motion.div
                key={item.stage}
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                className="group relative grid gap-7 border-t border-white/[0.08] py-9 md:grid-cols-[70px_.6fr_1fr]"
              >
                <div className="relative">
                  <motion.div
                    whileInView={{
                      scale: [0.6, 1],
                    }}
                    viewport={{ once: true }}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.16]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/[0.6]" />
                  </motion.div>

                  {index < adoptionStages.length - 1 && (
                    <div className="absolute left-[15px] top-8 h-[calc(100%+36px)] w-px bg-white/[0.06]" />
                  )}
                </div>

                <h3 className="text-2xl font-medium tracking-[-0.045em]">
                  {item.title}
                </h3>

                <p className="text-[12px] leading-7 text-white/[0.35]">
                  {item.description}
                </p>
              </motion.div>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SIGNAL STRIP
========================================================= */

function SignalStrip() {
  return (
    <section className="overflow-hidden border-y border-white/[0.07] bg-black py-7">
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
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
            <span className="px-9 font-mono text-[8px] tracking-[0.2em] text-white/[0.26] md:px-14">
              {item.toUpperCase()}
            </span>

            <CircleDot
              size={7}
              className="text-white/[0.15]"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* =========================================================
   WORKFORCE IMPACT
========================================================= */

function WorkforceImpact() {
  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col justify-between gap-14 lg:flex-row">
          <Eyebrow index="04">WORKFORCE IMPACT</Eyebrow>

          <Reveal>
            <h2 className="max-w-[850px] text-5xl font-semibold leading-[0.93] tracking-[-0.065em] md:text-7xl">
              Redesign the relationship
              <span className="block text-white/[0.18]">
                between people and AI.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-28 grid md:grid-cols-2 lg:grid-cols-3">
          {workforceImpacts.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.04,
              }}
              whileHover={{
                y: -6,
              }}
              className="group min-h-[360px] border border-white/[0.07] p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.2]">
                  {item.label}
                </span>

                <span className="font-mono text-[6px] text-white/[0.1]">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-32">
                <h3 className="text-3xl font-medium tracking-[-0.05em]">
                  {item.title}
                </h3>

                <p className="mt-6 text-[12px] leading-7 text-white/[0.35]">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   READINESS TERMINAL
========================================================= */

function ReadinessTerminal() {
  const lines = [
    "Scanning leadership alignment",
    "Mapping impacted employee groups",
    "Analyzing workflow dependencies",
    "Evaluating AI capability readiness",
    "Identifying knowledge gaps",
    "Mapping role transitions",
    "Reviewing governance controls",
    "Preparing adoption pathways",
  ];

  return (
    <section className="border-y border-white/[0.07] bg-black px-5 py-40 md:px-10 md:py-56">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <Eyebrow index="05">READINESS</Eyebrow>

            <h2 className="mt-12 max-w-[620px] text-5xl font-semibold leading-[0.93] tracking-[-0.065em] md:text-7xl">
              Know where
              <span className="block text-white/[0.18]">
                change will land.
              </span>
            </h2>

            <p className="mt-9 max-w-[520px] text-[13px] leading-8 text-white/[0.35]">
              Readiness assessment helps teams understand whether the
              organization has the leadership, knowledge, capabilities,
              processes and governance required to adopt new AI-enabled
              ways of working.
            </p>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="overflow-hidden border border-white/[0.09]"
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-5">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white/[0.25]" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/[0.14]" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/[0.08]" />
              </div>

              <span className="font-mono text-[6px] tracking-[0.18em] text-white/[0.18]">
                CHANGE_READINESS.SYSTEM
              </span>
            </div>

            <div className="p-7 md:p-10">
              <div className="mb-9 flex items-center gap-3">
                <Search
                  size={12}
                  className="text-white/[0.3]"
                />

                <span className="font-mono text-[7px] tracking-[0.15em] text-white/[0.25]">
                  ORGANIZATIONAL READINESS ANALYSIS
                </span>
              </div>

              {lines.map((line, index) => (
                <motion.div
                  key={line}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="flex items-center gap-4 border-t border-white/[0.06] py-4"
                >
                  <Check
                    size={10}
                    className="text-white/[0.4]"
                  />

                  <span className="flex-1 font-mono text-[8px] text-white/[0.34]">
                    {line}
                  </span>

                  <motion.span
                    animate={{
                      opacity: [0.15, 0.55, 0.15],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                    className="font-mono text-[6px] text-white/[0.22]"
                  >
                    READY
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ROADMAP
========================================================= */

function ChangeRoadmap() {
  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <Eyebrow index="06">TRANSFORMATION ROADMAP</Eyebrow>

        <Reveal>
          <h2 className="mt-14 max-w-[1100px] text-5xl font-semibold leading-[0.93] tracking-[-0.065em] md:text-8xl">
            Change is designed
            <span className="block text-white/[0.18]">
              through movement.
            </span>
          </h2>
        </Reveal>

        <div className="mt-28">
          {roadmap.map((item, index) => (
            <motion.article
              key={item.phase}
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
              className="relative grid min-h-[260px] gap-10 border-t border-white/[0.08] py-12 md:grid-cols-[130px_.7fr_1fr]"
            >
              <div>
                <span className="font-mono text-[7px] tracking-[0.16em] text-white/[0.18]">
                  {item.phase}
                </span>

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full border border-white/[0.3]" />

                  {index < roadmap.length - 1 && (
                    <span className="h-px w-12 bg-white/[0.08]" />
                  )}
                </div>
              </div>

              <h3 className="text-4xl font-medium tracking-[-0.055em] md:text-5xl">
                {item.title}
              </h3>

              <p className="max-w-[650px] text-[13px] leading-8 text-white/[0.36]">
                {item.description}
              </p>
            </motion.article>
          ))}

          <div className="border-t border-white/[0.08]" />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CAPABILITIES
========================================================= */

function Capabilities() {
  return (
    <section className="border-y border-white/[0.07] bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.48fr_1.52fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <Eyebrow index="07">CAPABILITIES</Eyebrow>

              <h2 className="mt-12 text-5xl font-semibold leading-[0.93] tracking-[-0.065em] md:text-7xl">
                Build the
                <span className="block text-white/[0.18]">
                  change layer.
                </span>
              </h2>
            </div>
          </div>

          <div className="border-t border-white/[0.08]">
            {capabilityRows.map((item, index) => (
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
                whileHover={{
                  x: 8,
                }}
                className="group flex items-center justify-between border-b border-white/[0.08] py-7"
              >
                <div className="flex items-center gap-8">
                  <span className="font-mono text-[6px] text-white/[0.13]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-2xl font-medium tracking-[-0.04em] text-white/[0.66] transition-colors group-hover:text-white md:text-3xl">
                    {item}
                  </span>
                </div>

                <ChevronRight
                  size={14}
                  className="text-white/[0.16]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   GOVERNANCE
========================================================= */

function Governance() {
  return (
    <section className="bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col justify-between gap-14 lg:flex-row">
          <Eyebrow index="08">AI GOVERNANCE</Eyebrow>

          <Reveal>
            <h2 className="max-w-[850px] text-5xl font-semibold leading-[0.93] tracking-[-0.065em] md:text-7xl">
              Adoption grows
              <span className="block text-white/[0.18]">
                when trust grows.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-28 grid md:grid-cols-2">
          {governanceItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className="min-h-[340px] border border-white/[0.07] p-8 md:p-10"
            >
              <div className="flex items-center justify-between">
                <ShieldCheck
                  size={18}
                  strokeWidth={1}
                  className="text-white/[0.5]"
                />

                <span className="font-mono text-[6px] text-white/[0.12]">
                  GOV / 0{index + 1}
                </span>
              </div>

              <h3 className="mt-24 text-3xl font-medium tracking-[-0.05em]">
                {item.title}
              </h3>

              <p className="mt-6 max-w-[560px] text-[12px] leading-7 text-white/[0.35]">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PRINCIPLES
========================================================= */

function Principles() {
  return (
    <section className="border-y border-white/[0.07] bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.32fr_1.68fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <Eyebrow index="09">PRINCIPLES</Eyebrow>

              <p className="mt-9 max-w-[300px] text-[11px] leading-7 text-white/[0.28]">
                Durable principles help teams make consistent decisions
                while AI capabilities and workplace technology continue
                to evolve.
              </p>
            </div>
          </div>

          <div>
            {principles.map((item) => (
              <motion.article
                key={item.number}
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
                  amount: 0.25,
                }}
                className="min-h-[290px] border-t border-white/[0.08] py-11"
              >
                <span className="font-mono text-[6px] tracking-[0.16em] text-white/[0.14]">
                  PRINCIPLE / {item.number}
                </span>

                <div className="mt-14 grid gap-10 md:grid-cols-[.8fr_1fr]">
                  <h3 className="text-4xl font-medium leading-[1] tracking-[-0.055em] md:text-5xl">
                    {item.title}
                  </h3>

                  <p className="max-w-[620px] text-[13px] leading-8 text-white/[0.36]">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FINAL CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-44 md:px-10 md:py-64">
      <motion.div
        animate={{
          x: ["0%", "-35%"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute bottom-0 flex w-max whitespace-nowrap"
      >
        <span className="text-[clamp(10rem,22vw,24rem)] font-semibold leading-none tracking-[-0.1em] text-white/[0.018]">
          PEOPLE × AI × CHANGE × PEOPLE × AI × CHANGE
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.25fr_1.75fr]">
          <div>
            <div className="flex flex-col gap-5">
              <Users
                size={18}
                strokeWidth={1}
                className="text-white/[0.35]"
              />

              <Workflow
                size={18}
                strokeWidth={1}
                className="text-white/[0.25]"
              />

              <BrainCircuit
                size={18}
                strokeWidth={1}
                className="text-white/[0.18]"
              />
            </div>
          </div>

          <div>
            <Eyebrow index="10">CHANGE THE WAY CHANGE HAPPENS</Eyebrow>

            <motion.h2
              initial={{
                opacity: 0,
                y: 80,
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
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-16 max-w-[1200px] text-[clamp(4.2rem,8vw,8.5rem)] font-semibold leading-[0.85] tracking-[-0.08em]"
            >
              Transform the
              <span className="block text-white/[0.18]">
                organization,
              </span>
              not only the
              <span className="block text-white/[0.18]">
                technology.
              </span>
            </motion.h2>

            <div className="mt-24 grid gap-12 border-t border-white/[0.08] pt-12 md:grid-cols-[150px_1fr]">
              <span className="font-mono text-[6px] leading-6 tracking-[0.18em] text-white/[0.15]">
                CHANGE
                <br />
                MANAGEMENT
                <br />
                FOR THE
                <br />
                AI ERA
              </span>

              <div>
                <p className="max-w-[820px] text-[15px] leading-9 text-white/[0.44]">
                  AI transformation becomes valuable when people can use
                  new capabilities confidently inside real work.
                  Effective change management connects technology with
                  leadership, workforce design, learning, communication,
                  governance and measurable adoption.
                </p>

                <motion.div
                  whileHover={{
                    x: 8,
                  }}
                  className="mt-14 flex w-fit cursor-pointer items-center gap-5 border-b border-white/[0.16] pb-3"
                >
                  <span className="font-mono text-[7px] tracking-[0.2em] text-white/[0.45]">
                    START THE TRANSFORMATION
                  </span>

                  <ArrowRight
                    size={11}
                    className="text-white/[0.45]"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function ChangeManagementPage() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative overflow-hidden bg-[#000000] text-white">
      {/* page progress */}
      <motion.div
        style={{
          scaleX: progress,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[9999] h-px w-full bg-white"
      />

      <Header />

      <Hero />

      <ChangeSystem />

      <SignalStrip />

      <AIChangesWork />

      <InfrastructureContext />

      <AdoptionEngine />

      <SignalStrip />

      <WorkforceImpact />

      <ReadinessTerminal />

      <ChangeRoadmap />

      <Capabilities />

      <Governance />

      <Principles />

      <FinalCTA />

      <Footer />
    </main>
  );
}