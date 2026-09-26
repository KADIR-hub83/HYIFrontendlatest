"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";

import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiOpenjdk,
  SiFlutter,
  SiSwift,
  SiKotlin,

  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
  SiPytorch,
  SiTensorflow,
  SiFigma,
  SiRedis,
  SiGraphql,
  SiGithub,
  SiGit,
  SiFirebase,
  SiVercel,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";

import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Infinity as InfinityIcon,
  Layers3,
  Server,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

/* =============================================================================
   TYPES
============================================================================= */

type Technology = {
  name: string;
  shortName?: string;
  icon: IconType;
  category: string;
  accent: string;
  glow: string;
};

/* =============================================================================
   TECHNOLOGY DATA
============================================================================= */

const technologies: Technology[] = [
  {
    name: "React",
    icon: SiReact,
    category: "Frontend",
    accent: "#61DAFB",
    glow: "rgba(97,218,251,0.20)",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Framework",
    accent: "#FFFFFF",
    glow: "rgba(255,255,255,0.14)",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    category: "Backend",
    accent: "#5FA04E",
    glow: "rgba(95,160,78,0.20)",
  },
  {
    name: "Python",
    icon: SiPython,
    category: "Backend / AI",
    accent: "#FFD43B",
    glow: "rgba(255,212,59,0.18)",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Language",
    accent: "#3178C6",
    glow: "rgba(49,120,198,0.22)",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Language",
    accent: "#F7DF1E",
    glow: "rgba(247,223,30,0.17)",
  },
  {
    name: "Java",
    icon: SiOpenjdk,
    category: "Backend",
    accent: "#ED8B00",
    glow: "rgba(237,139,0,0.18)",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    category: "Mobile",
    accent: "#54C5F8",
    glow: "rgba(84,197,248,0.20)",
  },
  {
    name: "Swift",
    icon: SiSwift,
    category: "iOS",
    accent: "#F05138",
    glow: "rgba(240,81,56,0.20)",
  },
  {
    name: "Kotlin",
    icon: SiKotlin,
    category: "Android",
    accent: "#A97BFF",
    glow: "rgba(169,123,255,0.22)",
  },
//   {
//     name: "AWS",
//     icon: SiAmazonwebservices,
//     category: "Cloud",
//     accent: "#FF9900",
//     glow: "rgba(255,153,0,0.18)",
//   },
  {
    name: "Google Cloud",
    shortName: "GCP",
    icon: SiGooglecloud,
    category: "Cloud",
    accent: "#4285F4",
    glow: "rgba(66,133,244,0.20)",
  },
  {
    name: "Docker",
    icon: SiDocker,
    category: "DevOps",
    accent: "#2496ED",
    glow: "rgba(36,150,237,0.22)",
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    category: "DevOps",
    accent: "#326CE5",
    glow: "rgba(50,108,229,0.22)",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "Database",
    accent: "#4169E1",
    glow: "rgba(65,105,225,0.20)",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "Database",
    accent: "#47A248",
    glow: "rgba(71,162,72,0.20)",
  },
  {
    name: "Redis",
    icon: SiRedis,
    category: "Database",
    accent: "#DC382D",
    glow: "rgba(220,56,45,0.20)",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    category: "API",
    accent: "#E10098",
    glow: "rgba(225,0,152,0.20)",
  },
  {
    name: "PyTorch",
    icon: SiPytorch,
    category: "AI / ML",
    accent: "#EE4C2C",
    glow: "rgba(238,76,44,0.20)",
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    category: "AI / ML",
    accent: "#FF6F00",
    glow: "rgba(255,111,0,0.20)",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    category: "Platform",
    accent: "#FFCA28",
    glow: "rgba(255,202,40,0.18)",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    category: "Platform",
    accent: "#3ECF8E",
    glow: "rgba(62,207,142,0.20)",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    category: "Platform",
    accent: "#FFFFFF",
    glow: "rgba(255,255,255,0.14)",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "Frontend",
    accent: "#06B6D4",
    glow: "rgba(6,182,212,0.20)",
  },
  {
    name: "Figma",
    icon: SiFigma,
    category: "Design",
    accent: "#A259FF",
    glow: "rgba(162,89,255,0.22)",
  },
  {
    name: "Git",
    icon: SiGit,
    category: "Engineering",
    accent: "#F05032",
    glow: "rgba(240,80,50,0.20)",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    category: "Engineering",
    accent: "#FFFFFF",
    glow: "rgba(255,255,255,0.14)",
  },
];

/* =============================================================================
   BACKGROUND DECORATION
============================================================================= */

function BackgroundDecoration() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* CENTER PURPLE ATMOSPHERE */}

      <motion.div
        animate={{
          opacity: [0.1, 0.22, 0.1],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[100%]
          bg-[#7C3AED]/10
          blur-[150px]
        "
      />

      {/* LEFT GLOW */}

      <div
        className="
          absolute
          -left-[220px]
          top-1/2
          h-[380px]
          w-[380px]
          -translate-y-1/2
          rounded-full
          bg-[#8B5CF6]/10
          blur-[140px]
        "
      />

      {/* RIGHT GLOW */}

      <div
        className="
          absolute
          -right-[220px]
          top-1/2
          h-[380px]
          w-[380px]
          -translate-y-1/2
          rounded-full
          bg-[#6D28D9]/10
          blur-[140px]
        "
      />

      {/* GRID */}

      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
        }}
      />

      {/* TOP CENTER LINE */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-px
          w-[80%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-[#8B5CF6]/25
          to-transparent
        "
      />

      {/* BOTTOM CENTER LINE */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-px
          w-[80%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />
    </div>
  );
}

/* =============================================================================
   TECHNOLOGY CARD
============================================================================= */

function TechnologyCard({
  technology,
}: {
  technology: Technology;
}) {
  const Icon = technology.icon;

  return (
    <motion.div
      whileHover={{
        y: -7,
        scale: 1.025,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 22,
      }}
      className="
        group/card
        relative
        mx-2
        flex
        h-[68px]
        w-[140px]
        shrink-0
        cursor-default
        items-center
        overflow-hidden
        rounded-[20px]
        border
        border-white/[0.07]
        bg-[#0A0A0D]/80
        px-4
        backdrop-blur-xl
        transition-colors
        duration-500
        hover:border-white/[0.14]
        hover:bg-[#0D0D11]
        sm:mx-2.5
        sm:h-[68px]
        sm:w-[190px]
        sm:px-5
      "
    >
      {/* ===============================================================
          BRAND GLOW
      =============================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-10
          top-1/2
          h-[120px]
          w-[120px]
          -translate-y-1/2
          rounded-full
          opacity-0
          blur-[45px]
          transition-opacity
          duration-500
          group-hover/card:opacity-100
        "
        style={{
          background: technology.glow,
        }}
      />

      {/* ===============================================================
          TOP LIGHT
      =============================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[15%]
          right-[15%]
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/0
          to-transparent
          transition-all
          duration-500
          group-hover/card:via-white/20
        "
      />

      {/* ===============================================================
          ICON BOX
      =============================================================== */}

      <motion.div
        className="
          relative
          flex
          h-[35px]
          w-[35px]
          lg:h-[45px]
          lg:w-[45px]
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-[15px]
          border
          border-white/[0.07]
          bg-white/[0.025]
          shadow-[inset_0_1px_0_rgba(255,255,255,.03)]
          transition
          duration-500
          group-hover/card:border-white/[0.12]
          group-hover/card:bg-white/[0.04]
        "
      >
        {/* ICON INNER GLOW */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.08]
            transition-opacity
            duration-500
            group-hover/card:opacity-[0.18]
          "
          style={{
            background: `radial-gradient(circle at center, ${technology.accent}, transparent 68%)`,
          }}
        />

        <Icon
          size={20}
          className="
            relative
            z-10
            transition-all
            duration-500
            group-hover/card:scale-110
          "
          style={{
            color: technology.accent,
          }}
        />
      </motion.div>

      {/* ===============================================================
          INFORMATION
      =============================================================== */}

      <div className="relative ml-4 min-w-0">
        <div
          className="
            truncate
            text-[13px]
            font-semibold
            tracking-[-0.01em]
            text-white/72
            transition-colors
            duration-300
            group-hover/card:text-white
            sm:text-[14px]
          "
        >
          {technology.shortName ?? technology.name}
        </div>

        <div
          className="
            mt-1.5
            text-[8px]
            font-medium
            uppercase
            tracking-[0.16em]
            text-white/18
            transition-colors
            duration-300
            group-hover/card:text-white/30
          "
        >
          {technology.category}
        </div>
      </div>

      {/* ===============================================================
          STATUS DOT
      =============================================================== */}

      <div
        className="
          absolute
          right-3
          top-3
          h-1
          w-1
          rounded-full
          bg-white/10
          transition-all
          duration-500
          group-hover/card:bg-[#A78BFA]
          group-hover/card:shadow-[0_0_8px_#A78BFA]
        "
      />

      {/* ===============================================================
          BOTTOM BRAND LINE
      =============================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-px
          w-0
          -translate-x-1/2
          transition-all
          duration-500
          group-hover/card:w-[65%]
        "
        style={{
          background: `linear-gradient(to right, transparent, ${technology.accent}, transparent)`,
        }}
      />
    </motion.div>
  );
}

/* =============================================================================
   MARQUEE ROW
============================================================================= */

function MarqueeRow({
  reverse = false,
  duration = 45,
}: {
  reverse?: boolean;
  duration?: number;
}) {
  const repeatedTechnologies = [
    ...technologies,
    ...technologies,
  ];

  return (
    <div
      className="
        group/marquee
        relative
        flex
        w-full
        overflow-hidden
        py-2
      "
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <motion.div
        initial={{
          x: reverse ? "-50%" : "0%",
        }}
        animate={{
          x: reverse
            ? ["-50%", "0%"]
            : ["0%", "-50%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          flex
          min-w-max
          items-center
          group-hover/marquee:[animation-play-state:paused]
        "
      >
        {repeatedTechnologies.map(
          (technology, index) => (
            <TechnologyCard
              key={`${technology.name}-${index}`}
              technology={technology}
            />
          )
        )}
      </motion.div>
    </div>
  );
}

/* =============================================================================
   MINI FEATURE
============================================================================= */

function MiniFeature({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Code2;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-3
        rounded-full
        border
        border-white/[0.06]
        bg-white/[0.018]
        px-4
        py-2.5
        backdrop-blur-xl
        transition
        duration-300
        hover:border-[#8B5CF6]/20
        hover:bg-[#8B5CF6]/[0.035]
      "
    >
      <div
        className="
          flex
          h-7
          w-7
          items-center
          justify-center
          rounded-full
          border
          border-[#8B5CF6]/15
          bg-[#8B5CF6]/[0.06]
        "
      >
        <Icon
          size={12}
          className=" hyi-white-icon"
        />
      </div>

      <div>
        <div
          className="
           hyi-small hyi-gray
          "
        >
          {title}
        </div>

        <div
          className="
           hyi-label
          "
        >
          {text}
        </div>
      </div>
    </div>
  );
}

/* =============================================================================
   MAIN COMPONENT
============================================================================= */

export default function TechnologyStrip() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden

      
        py-5
        sm:py-10
        lg:py-10
      "
    >
      {/* =====================================================================
          BACKGROUND
      ===================================================================== */}

      <BackgroundDecoration />

      {/* =====================================================================
          SECTION HEADER
      ===================================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* BADGE */}


          {/* TITLE */}

          <h2
            className=" hyi-white hyi-h1"
          >
            Engineering across{" "}

            <span
              className=" hyi-white" >
              modern technology stacks.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className=" hyi-gray hyi-h4 mt-3" >
            From product interfaces to AI infrastructure,
            access engineers experienced across the
            technologies modern teams rely on.
          </p>
        </motion.div>

        {/* ===================================================================
            FEATURE PILLS
        =================================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.15,
            duration: 0.7,
          }}
          className="
            mt-7
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
          "
        >
          <MiniFeature
            icon={Code2}
            title="Full-stack"
            text="Web engineering"
          />

          <MiniFeature
            icon={BrainCircuit}
            title="AI native"
            text="ML & GenAI"
          />

          <MiniFeature
            icon={Cloud}
            title="Cloud scale"
            text="Infrastructure"
          />

          <MiniFeature
            icon={Database}
            title="Data ready"
            text="Modern systems"
          />
        </motion.div>
      </div>

      {/* =====================================================================
          MARQUEE AREA
      ===================================================================== */}

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
          amount: 0.1,
        }}
        transition={{
          duration: 0.9,
          delay: 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          relative
          z-10
          mt-5
          
        "
      >
        {/* CENTER SPOTLIGHT */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            z-20
            h-[60px]
            w-[20px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#8B5CF6]/[0.035]
            blur-[55px]
          "
        />

        <MarqueeRow duration={50} />
      </motion.div>

 

    </section>
  );
}