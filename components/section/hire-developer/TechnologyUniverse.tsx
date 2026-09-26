"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
  type LucideIcon,
} from "lucide-react";

/* =============================================================================
   TYPES
============================================================================= */

type StackGroup = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  tech: string[];
};

/* =============================================================================
   ANIMATION
============================================================================= */

const easeOut: [number, number, number, number] = [
  0.16,
  1,
  0.3,
  1,
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

/* =============================================================================
   DATA
============================================================================= */

const stackGroups: StackGroup[] = [
  {
    number: "01",
    icon: Code2,
    title: "Web Engineering",
    description:
      "Modern product interfaces and scalable web platforms engineered for performance, maintainability and growth.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Java",
    ],
  },

  {
    number: "02",
    icon: MonitorSmartphone,
    title: "Mobile Engineering",
    description:
      "Native and cross-platform mobile experiences designed for modern products and global users.",
    tech: [
      "Flutter",
      "React Native",
      "Swift",
      "Kotlin",
    ],
  },

  {
    number: "03",
    icon: BrainCircuit,
    title: "AI & Intelligence",
    description:
      "Machine learning and generative AI capabilities built into real-world products and intelligent workflows.",
    tech: [
      "Python",
      "LLMs",
      "RAG",
      "PyTorch",
      "AI Agents",
    ],
  },

  {
    number: "04",
    icon: Database,
    title: "Data Engineering",
    description:
      "Reliable data pipelines, analytical platforms and scalable infrastructure for data-driven products.",
    tech: [
      "SQL",
      "Spark",
      "Airflow",
      "PostgreSQL",
      "MongoDB",
    ],
  },

  {
    number: "05",
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Production-ready infrastructure designed across modern cloud, container and orchestration environments.",
    tech: [
      "AWS",
      "Azure",
      "GCP",
      "Kubernetes",
      "Docker",
    ],
  },

  {
    number: "06",
    icon: ShieldCheck,
    title: "Quality & Security",
    description:
      "Engineering expertise focused on product reliability, automation, application security and resilience.",
    tech: [
      "QA",
      "Automation",
      "AppSec",
      "IAM",
      "VAPT",
    ],
  },
];

/* =============================================================================
   SECTION LABEL
============================================================================= */

function SectionLabel() {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="font-mono text-[9px] tracking-[0.2em] text-[#9B7BFF]">
        04
      </span>

      <span className="h-px w-7 bg-gradient-to-r from-[#8B5CF6] to-transparent" />

      <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/30">
        Technology expertise
      </span>
    </div>
  );
}

/* =============================================================================
   BACKGROUND
============================================================================= */

function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          opacity: [0.07, 0.15, 0.07],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-[42%]
          h-[750px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#6D28D9]/20
          blur-[200px]
        "
      />

      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
          backgroundSize: "68px 68px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent 78%)",
        }}
      />

      <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="absolute bottom-0 left-1/2 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8B5CF6]/25 to-transparent" />
    </div>
  );
}

/* =============================================================================
   TECHNOLOGY CARD
============================================================================= */

function TechnologyCard({
  group,
}: {
  group: StackGroup;
}) {
  const Icon = group.icon;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -8,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 22,
      }}
      className="
        group
        relative
        min-h-[40px]
        overflow-hidden
        rounded-[26px]
        border
        border-white/[0.07]
        bg-[#09090B]/90
        p-5
        backdrop-blur-xl
        transition-colors
        duration-500
        hover:border-[#8B5CF6]/25
        hover:bg-[#0C0B10]
        
      "
    >
      {/* HOVER GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-[230px]
          w-[230px]
          rounded-full
          bg-[#8B5CF6]/0
          blur-[70px]
          transition-all
          duration-700
          group-hover:bg-[#8B5CF6]/15
        "
      />

      {/* TOP LIGHT */}

      <div
        className="
          absolute
          left-[20%]
          right-[20%]
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#A78BFA]/0
          to-transparent
          transition-all
          duration-500
          group-hover:via-[#A78BFA]/50
        "
      />

      {/* HEADER */}

      <div className="relative flex items-start justify-between">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-white/[0.07]
            bg-white/[0.025]
            transition-all
            duration-500
            group-hover:border-[#8B5CF6]/25
            group-hover:bg-[#8B5CF6]/[0.08]
            group-hover:shadow-[0_0_40px_rgba(139,92,246,.10)]
          "
        >
          <Icon
            size={19}
            className="
              text-white/40
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:text-[#B29BFF]
            "
          />
        </div>

        <div className="flex items-center gap-4">
          {/* <span className="font-mono text-[8px] tracking-[0.18em] text-white/12">
            {group.number}
          </span> */}

          <ArrowUpRight
            size={20}
            className="
              text-white/15
              transition-all
              duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-[#A78BFA]
            "
          />
        </div>
      </div>

      {/* CONTENT */}

      <div className="relative mt-5">
        <h3 className=" hyi-h3 font-bold tracking-[-0.025em] hyi-white hover:hyi-blue">
          {group.title}
        </h3>

        <p className="mt-3 max-w-[340px] hyi-p ">
          {group.description}
        </p>
      </div>

      {/* TECH */}

      <div className="relative mt-3 border-t border-white/[0.06] pt-5">
     

        <div className="flex flex-wrap gap-1.5">
          {group.tech.map(
            (technology, index) => (
              <motion.span
                key={technology}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.04,
                }}
                className="
                  rounded-lg
                  border
                  border-white/[0.05]
                  bg-white/[0.025]
                  px-2.5
                  py-1.5
                  hyi-small
                  text-white/32
                  transition
                  duration-300
                  group-hover:border-white/[0.08]
                  group-hover:text-white/45
                "
              >
                {technology}
              </motion.span>
            )
          )}
        </div>
      </div>

      {/* BOTTOM LINE */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-px
          w-0
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#8B5CF6]
          to-transparent
          transition-all
          duration-700
          group-hover:w-[65%]
        "
      />
    </motion.article>
  );
}

/* =============================================================================
   MAIN COMPONENT
============================================================================= */

export default function TechnologyUniverse() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        border-b
        border-white/[0.07]
        bg-[#070708]
        py-5
        sm;py-10
        text-white
        
      "
    >
      <Background />

      <div className="relative z-10 mx-auto px-5 sm:px-10 lg:px-20">
        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.75,
            ease: easeOut,
          }}
          className="mx-auto max-w-[800px] text-center"
        >
          {/* <SectionLabel /> */}

          <h2
            className=" font-bold hyi-white hyi-h1 mt-3 " >
            One engineering network
            <br />

            <span
              className="
               
              "
            >
              Every technology layer.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[620px] hyi-gray hyi-p">
            Assemble the technical capabilities required to
            move from product idea and interface to data,
            intelligence and production infrastructure.
          </p>
        </motion.div>

        {/* GRID */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className=" mt-5
            sm:mt-10
            grid
            gap-3
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {stackGroups.map((group) => (
            <TechnologyCard
              key={group.title}
              group={group}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}