
"use client";

import {
  useEffect,
  useMemo,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";

import Link from "next/link";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  type Variants,
} from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Bot,
  Boxes,
  BrainCircuit,
  Building2,
  ChevronDown,
  Cloud,
  Code2,
  Cpu,
  Database,
  Eye,
  Fingerprint,
  Gamepad2,
  GitBranch,
  Glasses,
  Globe2,
  HardDrive,
  Layers3,
  LineChart,
  Link2,
  LockKeyhole,
  MessageSquareText,
  Palette,
  PenTool,
  Search,
  Server,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  TabletSmartphone,
  TestTube2,
  UsersRound,
  X,
} from "lucide-react";

/* =============================================================================
   TYPES
============================================================================= */

type IconType = typeof Code2;

type Role = {
  slug: string;
  categoryId: string;
  icon: IconType;
  title: string;
  skills: string[];
  description: string;
};

type Category = {
  id: string;
  label: string;
  icon: IconType;
};

/* =============================================================================
   CATEGORIES
============================================================================= */

const categories: Category[] = [
  {
    id: "web",
    label: "Web Development",
    icon: Code2,
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
  },
  {
    id: "ai-data",
    label: "AI & Data",
    icon: BrainCircuit,
  },
  {
    id: "cloud",
    label: "Cloud & Infra",
    icon: Cloud,
  },
  {
    id: "design",
    label: "Design & Product",
    icon: Palette,
  },
  {
    id: "quality",
    label: "Quality & Security",
    icon: ShieldCheck,
  },
  {
    id: "specialized",
    label: "Specialized",
    icon: Blocks,
  },
];

/* =============================================================================
   ROLES
============================================================================= */

const roles: Role[] = [
  /* ---------------------------------------------------------------------------
     WEB DEVELOPMENT
  --------------------------------------------------------------------------- */

  {
    slug: "frontend-developer",
    categoryId: "web",
    icon: Code2,
    title: "Frontend Developer",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Build responsive, polished and high-performance interfaces for modern digital products.",
  },

  {
    slug: "backend-developer",
    categoryId: "web",
    icon: Server,
    title: "Backend Developer",
    skills: ["Node.js", "Python", "Java", "APIs"],
    description:
      "Develop secure APIs, services and scalable backend systems for complex applications.",
  },

  {
    slug: "fullstack-developer",
    categoryId: "web",
    icon: Layers3,
    title: "Full-Stack Developer",
    skills: ["MERN", "Next.js", "PostgreSQL"],
    description:
      "Build across frontend, backend and databases with end-to-end product ownership.",
  },

  {
    slug: "wordpress-developer",
    categoryId: "web",
    icon: Globe2,
    title: "WordPress Developer",
    skills: ["WordPress", "PHP", "WooCommerce"],
    description:
      "Create custom websites, themes, plugins and scalable WordPress experiences.",
  },

  {
    slug: "shopify-developer",
    categoryId: "web",
    icon: ShoppingBag,
    title: "Shopify Developer",
    skills: ["Shopify", "Liquid", "Hydrogen"],
    description:
      "Build customized storefronts, integrations and modern commerce experiences.",
  },

  /* ---------------------------------------------------------------------------
     MOBILE DEVELOPMENT
  --------------------------------------------------------------------------- */

  {
    slug: "ios-developer",
    categoryId: "mobile",
    icon: Smartphone,
    title: "iOS Developer",
    skills: ["Swift", "SwiftUI", "iOS"],
    description:
      "Develop native iPhone and iPad applications with polished user experiences.",
  },

  {
    slug: "android-developer",
    categoryId: "mobile",
    icon: TabletSmartphone,
    title: "Android Developer",
    skills: ["Kotlin", "Jetpack Compose", "Android"],
    description:
      "Build reliable Android applications across modern devices and form factors.",
  },

  {
    slug: "react-native-developer",
    categoryId: "mobile",
    icon: Blocks,
    title: "React Native Developer",
    skills: ["React Native", "TypeScript", "Expo"],
    description:
      "Create cross-platform mobile experiences with a shared modern codebase.",
  },

  {
    slug: "flutter-developer",
    categoryId: "mobile",
    icon: Cpu,
    title: "Flutter Developer",
    skills: ["Flutter", "Dart", "Firebase"],
    description:
      "Build smooth cross-platform applications with expressive custom interfaces.",
  },

  /* ---------------------------------------------------------------------------
     AI & DATA
  --------------------------------------------------------------------------- */

  {
    slug: "ai-ml-engineer",
    categoryId: "ai-data",
    icon: BrainCircuit,
    title: "AI / ML Engineer",
    skills: ["Python", "LLMs", "PyTorch", "AI"],
    description:
      "Build intelligent systems using machine learning, generative AI and modern AI infrastructure.",
  },

  {
    slug: "generative-ai-engineer",
    categoryId: "ai-data",
    icon: Bot,
    title: "Generative AI Engineer",
    skills: ["LLMs", "RAG", "Agents", "Python"],
    description:
      "Build AI assistants, RAG systems, intelligent agents and generative product experiences.",
  },

  {
    slug: "data-engineer",
    categoryId: "ai-data",
    icon: Database,
    title: "Data Engineer",
    skills: ["SQL", "Spark", "Airflow", "ETL"],
    description:
      "Create dependable pipelines and platforms that transform raw data into usable information.",
  },

  {
    slug: "data-scientist",
    categoryId: "ai-data",
    icon: LineChart,
    title: "Data Scientist",
    skills: ["Python", "Statistics", "ML"],
    description:
      "Turn complex datasets into models, experiments and actionable business insights.",
  },

  {
    slug: "computer-vision-engineer",
    categoryId: "ai-data",
    icon: Eye,
    title: "Computer Vision Engineer",
    skills: ["OpenCV", "PyTorch", "Vision"],
    description:
      "Develop intelligent systems capable of understanding images, video and visual information.",
  },

  {
    slug: "nlp-engineer",
    categoryId: "ai-data",
    icon: MessageSquareText,
    title: "NLP Engineer",
    skills: ["Transformers", "spaCy", "LLMs"],
    description:
      "Build language understanding, semantic search and conversational AI systems.",
  },

  /* ---------------------------------------------------------------------------
     CLOUD & INFRASTRUCTURE
  --------------------------------------------------------------------------- */

  {
    slug: "cloud-architect",
    categoryId: "cloud",
    icon: Cloud,
    title: "Cloud Architect",
    skills: ["AWS", "Azure", "GCP"],
    description:
      "Design scalable, secure and resilient cloud architecture for modern applications.",
  },

  {
    slug: "devops-engineer",
    categoryId: "cloud",
    icon: GitBranch,
    title: "DevOps Engineer",
    skills: ["Docker", "Kubernetes", "CI/CD"],
    description:
      "Automate infrastructure and deployment workflows for reliable software delivery.",
  },

  {
    slug: "site-reliability-engineer",
    categoryId: "cloud",
    icon: HardDrive,
    title: "Site Reliability Engineer",
    skills: ["Monitoring", "SRE", "Observability"],
    description:
      "Improve reliability, observability and operational resilience across production systems.",
  },

  {
    slug: "database-administrator",
    categoryId: "cloud",
    icon: Database,
    title: "Database Administrator",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
    description:
      "Optimize database architecture, availability, performance and data reliability.",
  },

  /* ---------------------------------------------------------------------------
     DESIGN & PRODUCT
  --------------------------------------------------------------------------- */

  {
    slug: "ui-ux-designer",
    categoryId: "design",
    icon: PenTool,
    title: "UI / UX Designer",
    skills: ["Figma", "UX", "Prototyping"],
    description:
      "Design intuitive interfaces and user experiences around real product requirements.",
  },

  {
    slug: "product-designer",
    categoryId: "design",
    icon: Palette,
    title: "Product Designer",
    skills: ["Design Systems", "Research", "Figma"],
    description:
      "Own product design from discovery and prototyping through production-ready experiences.",
  },

  {
    slug: "technical-project-manager",
    categoryId: "design",
    icon: UsersRound,
    title: "Technical Project Manager",
    skills: ["Delivery", "Agile", "Sprint Planning"],
    description:
      "Coordinate engineering execution, priorities and delivery across technical teams.",
  },

  /* ---------------------------------------------------------------------------
     QUALITY & SECURITY
  --------------------------------------------------------------------------- */

  {
    slug: "qa-engineer",
    categoryId: "quality",
    icon: TestTube2,
    title: "QA / Test Engineer",
    skills: ["Automation", "Manual QA", "Testing"],
    description:
      "Improve product quality through systematic testing, automation and edge-case validation.",
  },

  {
    slug: "security-engineer",
    categoryId: "quality",
    icon: ShieldCheck,
    title: "Security Engineer",
    skills: ["AppSec", "Security", "Threat Modeling"],
    description:
      "Integrate security into applications, architecture and engineering workflows.",
  },

  {
    slug: "penetration-tester",
    categoryId: "quality",
    icon: Fingerprint,
    title: "Penetration Tester",
    skills: ["VAPT", "Audits", "Security Testing"],
    description:
      "Identify vulnerabilities through structured security assessments and testing.",
  },

  {
    slug: "iam-engineer",
    categoryId: "quality",
    icon: LockKeyhole,
    title: "IAM Engineer",
    skills: ["Auth", "SSO", "RBAC"],
    description:
      "Build secure identity, authentication and access-management infrastructure.",
  },

  /* ---------------------------------------------------------------------------
     SPECIALIZED
  --------------------------------------------------------------------------- */

  {
    slug: "blockchain-developer",
    categoryId: "specialized",
    icon: Link2,
    title: "Blockchain Developer",
    skills: ["Solidity", "Web3", "Smart Contracts"],
    description:
      "Develop decentralized applications, smart contracts and blockchain integrations.",
  },

  {
    slug: "game-developer",
    categoryId: "specialized",
    icon: Gamepad2,
    title: "Game Developer",
    skills: ["Unity", "Unreal Engine", "C#"],
    description:
      "Build interactive game experiences across mobile, desktop and emerging platforms.",
  },

  {
    slug: "ar-vr-developer",
    categoryId: "specialized",
    icon: Glasses,
    title: "AR / VR Developer",
    skills: ["ARKit", "ARCore", "Unity"],
    description:
      "Create immersive augmented and virtual reality applications and experiences.",
  },

  {
    slug: "embedded-iot-developer",
    categoryId: "specialized",
    icon: Cpu,
    title: "Embedded / IoT Developer",
    skills: ["C/C++", "RTOS", "IoT"],
    description:
      "Develop firmware and software for connected devices and embedded systems.",
  },

  {
    slug: "salesforce-developer",
    categoryId: "specialized",
    icon: Building2,
    title: "Salesforce Developer",
    skills: ["Apex", "LWC", "Salesforce"],
    description:
      "Build custom CRM workflows, integrations and Salesforce applications.",
  },

  {
    slug: "sap-developer",
    categoryId: "specialized",
    icon: Boxes,
    title: "SAP Developer",
    skills: ["ABAP", "S/4HANA", "SAP"],
    description:
      "Develop and customize enterprise applications across the SAP ecosystem.",
  },
];

/* =============================================================================
   ANIMATION CONFIG
============================================================================= */

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const roleAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.985,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.42,
      ease: easeOut,
    },
  },

  exit: {
    opacity: 0,
    y: 8,
    scale: 0.97,

    transition: {
      duration: 0.2,
    },
  },
};

/* =============================================================================
   REVEAL COMPONENT
============================================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.75,
        delay,
        ease: easeOut,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =============================================================================
   SECTION LABEL
============================================================================= */

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[10px] tracking-[0.2em] text-[#8B5CF6]">
        {number}
      </span>

      <span className="h-px w-7 bg-[#8B5CF6]/50" />

      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/35">
        {children}
      </span>
    </div>
  );
}

/* =============================================================================
   ROLE CARD
============================================================================= */

function RoleCard({ role }: { role: Role }) {
  const Icon = role.icon;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <motion.div
      layout
      variants={roleAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseMove={handleMove}
      whileHover={{
        y: -6,
      }}
      transition={{
        layout: {
          duration: 0.35,
          ease: easeOut,
        },
      }}
      className="group relative min-h-[50px] overflow-hidden rounded-[22px] border border-white/[0.075] bg-[#09090B] p-6"
    >
      {/* ---------------------------------------------------------------------
          CURSOR GLOW
      --------------------------------------------------------------------- */}

      <motion.div
        className="pointer-events-none absolute h-[2809px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100"
        style={{
          left: mouseX,
          top: mouseY,

          background:
            "radial-gradient(circle, rgba(124,58,237,.22), rgba(124,58,237,.07) 35%, transparent 70%)",
        }}
      />

      {/* ---------------------------------------------------------------------
          TOP PURPLE ATMOSPHERE
      --------------------------------------------------------------------- */}

      <div
        className="pointer-events-none absolute -right-20 -top-20 h-[190px] w-[190px] rounded-full bg-[#7C3AED]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#7C3AED]/10"
      />

      {/* ---------------------------------------------------------------------
          CARD CONTENT
      --------------------------------------------------------------------- */}

      <div className="relative flex h-full flex-col">
        {/* ICON + CATEGORY */}

        <div className="flex items-start justify-between gap-5">
          <motion.div
            whileHover={{
              rotate: -5,
              scale: 1.05,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] transition-colors duration-300 group-hover:border-[#8B5CF6]/25 group-hover:bg-[#8B5CF6]/10"
          >
            <Icon
              size={20}
              className="text-white/45 transition-colors duration-300 group-hover:text-[#A78BFA]"
            />
          </motion.div>

          <div
            className="rounded-full border border-white/[0.06] bg-white/[0.015] px-3 py-1.5 font-mono hyi-small uppercase tracking-[0.15em] text-white/20 transition group-hover:border-[#8B5CF6]/15 group-hover:text-white/30"
          >
            {role.categoryId}
          </div>
        </div>

        {/* TITLE */}

        <h3
          className="mt-3 hyi-h3 font-bold tracking-[-0.02em] hyi-white"
        >
          {role.title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="mt-3 min-h-[72px]  leading-6 hyi-gray hyi-p"
        >
          {role.description}
        </p>

        {/* SKILLS */}

        <div
          className="mt-3 flex min-h-[52px] flex-wrap content-start gap-1.5"
        >
          {role.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-white/[0.065] bg-white/[0.025] px-2.5 py-1.5 text-[9px] font-medium text-white/35 transition duration-300 group-hover:border-white/[0.09] group-hover:text-white/50"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-auto ">
          <div className="border-t border-white/[0.06] pt-5">
            <Link
              href="/talk-to-our-expert"
              className="flex items-center justify-between hyi-p hyi-white font-medium text-white/35 transition duration-300 group-hover:text-[#B8A2FF]"
            >
              <span>Hire this expertise</span>

              <span
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.07] transition duration-300 group-hover:border-[#8B5CF6]/30 group-hover:hyi-blue-icon"
              >
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------
          BOTTOM ANIMATED LINE
      --------------------------------------------------------------------- */}

      <div
        className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#8B5CF6] via-[#A78BFA] to-transparent transition-all duration-500 group-hover:w-full"
      />
    </motion.div>
  );
}

/* =============================================================================
   DEVELOPER DIRECTORY
============================================================================= */

export default function DeveloperDirectory() {
  /* ---------------------------------------------------------------------------
     STATE
  --------------------------------------------------------------------------- */

  const [activeCategory, setActiveCategory] = useState("all");

  const [query, setQuery] = useState("");

  const [showAll, setShowAll] = useState(false);


  const searchPlaceholders = [
  "Search Frontend Developer...",
  "Search React Developer...",
  "Search AI / ML Engineer...",
  "Search Next.js Developer...",
  "Search DevOps Engineer...",
  "Search UI / UX Designer...",
  "Search Python Developer...",
  "Search Cloud Architect...",
];

const [placeholderText, setPlaceholderText] = useState("");
const [placeholderIndex, setPlaceholderIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentText = searchPlaceholders[placeholderIndex];

  const timeout = setTimeout(
    () => {
      if (!isDeleting) {
        setPlaceholderText(
          currentText.slice(0, placeholderText.length + 1)
        );

        if (placeholderText.length === currentText.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1200);
        }
      } else {
        setPlaceholderText(
          currentText.slice(0, placeholderText.length - 1)
        );

        if (placeholderText.length === 0) {
          setIsDeleting(false);

          setPlaceholderIndex(
            (current) => (current + 1) % searchPlaceholders.length
          );
        }
      }
    },
    isDeleting ? 35 : 65
  );

  return () => clearTimeout(timeout);
}, [placeholderText, placeholderIndex, isDeleting]);
  /* ---------------------------------------------------------------------------
     FILTER ROLES
  --------------------------------------------------------------------------- */

  const filteredRoles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return roles.filter((role) => {
      const categoryMatches =
        activeCategory === "all" || role.categoryId === activeCategory;

      if (!categoryMatches) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const titleMatches = role.title
        .toLowerCase()
        .includes(normalizedQuery);

      const descriptionMatches = role.description
        .toLowerCase()
        .includes(normalizedQuery);

      const skillMatches = role.skills.some((skill) =>
        skill.toLowerCase().includes(normalizedQuery)
      );

      return titleMatches || descriptionMatches || skillMatches;
    });
  }, [activeCategory, query]);

  /* ---------------------------------------------------------------------------
     VISIBLE ROLES
  --------------------------------------------------------------------------- */

  const visibleRoles = showAll
    ? filteredRoles
    : filteredRoles.slice(0, 12);

  /* ---------------------------------------------------------------------------
     CATEGORY COUNT
  --------------------------------------------------------------------------- */

  const countForCategory = (id: string) => {
    if (id === "all") {
      return roles.length;
    }

    return roles.filter((role) => role.categoryId === id).length;
  };

  /* ---------------------------------------------------------------------------
     CHANGE CATEGORY
  --------------------------------------------------------------------------- */

  const changeCategory = (category: string) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  /* ---------------------------------------------------------------------------
     RESET
  --------------------------------------------------------------------------- */

  const resetFilters = () => {
    setQuery("");
    setActiveCategory("all");
    setShowAll(false);
  };

  return (
    <section
      id="developer-directory"
      className="relative overflow-hidden border-b border-white/[0.07] bg-[#070708] "
    >
      {/* =====================================================================
          BACKGROUND DECORATION
      ===================================================================== */}

      <div
        className="pointer-events-none absolute left-[-300px] top-[300px] h-[600px] w-[600px] rounded-full bg-[#6D28D9]/[0.06] blur-[180px]"
      />

      <div
        className="pointer-events-none absolute right-[-350px] top-[700px] h-[650px] w-[650px] rounded-full bg-[#8B5CF6]/[0.045] blur-[190px]"
      />

      {/* GRID */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",

          backgroundSize: "72px 72px",

          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",

          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      {/* =====================================================================
          MAIN CONTAINER
      ===================================================================== */}

      <div
        className="relative mx-auto max-w-[1400px] px-5 sm:px-10 lg:px-20 pb-10"
      >
        {/* ===================================================================
            SECTION HEADER
        =================================================================== */}

        <Reveal>
          <div
            className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start"
          >
            {/* LEFT */}

            <div>
           

              <h2
                className="mt-3  max-w-[720px] hyi-white hyi-h1 font-bold"
              >
                Find the expertise
               <br />
                <span className="text-white/30">
                  {" "}
                  your product needs.
                </span>
              </h2>

              <p
                className="mt-5 max-w-[600px] hyi-p hyi-gray">
                Browse engineering disciplines or search directly by role,
                technology or skill.
              </p>
            </div>

            {/* ===============================================================
                SEARCH
            =============================================================== */}

            <div className="relative w-full lg:max-w-[390px]">
              <Search
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/25"
              />

           <input
  type="text"
  value={query}
  onChange={(event) => {
    setQuery(event.target.value);
    setShowAll(true);
  }}
  placeholder={placeholderText}
  aria-label="Search developers"
  className="h-[52px] w-full rounded-full border border-white/[0.09] bg-white/[0.025] pl-11 pr-12 text-[12px] text-white outline-none transition duration-300 placeholder:text-white/20 hover:border-white/[0.13] focus:border-[#8B5CF6]/35 focus:bg-[#8B5CF6]/[0.035] focus:shadow-[0_0_0_4px_rgba(139,92,246,.04)]"
/>

              <AnimatePresence>
                {query && (
                  <motion.button
                    type="button"
                    aria-label="Clear search"
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    onClick={() => setQuery("")}
                    className="absolute right-4 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-white/[0.05] text-white/35 transition hover:bg-white/[0.08] hover:text-white"
                  >
                    <X size={12} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        {/* ===================================================================
            CATEGORY FILTER
        =================================================================== */}

        <Reveal delay={0.08}>
          <div
            className="mt-5 flex gap-2 overflow-x-auto border-b border-white/[0.07] pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {/* ALL ROLES */}

            <button
              type="button"
              onClick={() => changeCategory("all")}
              className={`relative shrink-0 rounded-full px-4 py-2 hyi-white hyi-small font-bold transition duration-300 ${ activeCategory === "all" ? "text-white" : "text-white/35 hover:text-white/65" }`}
            >
              {activeCategory === "all" && (
                <motion.span
                  layoutId="developer-category-pill"
                  className="absolute inset-0 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 shadow-[0_0_25px_rgba(139,92,246,.06)]"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative">
                All roles

                <span className="ml-1 text-white/25">
                  {countForCategory("all")}
                </span>
              </span>
            </button>

            {/* CATEGORY BUTTONS */}

            {categories.map((category) => {
              const Icon = category.icon;

              const active =
                activeCategory === category.id;

              return (
                <button
                  type="button"
                  key={category.id}
                  onClick={() =>
                    changeCategory(category.id)
                  }
                  className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 hyi-gray hyi-small font-bold transition duration-300 ${ active ? "text-white" : "text-white/35 hover:text-white/65" }`}
                >
                  {active && (
                    <motion.span
                      layoutId="developer-category-pill"
                      className="absolute inset-0 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 shadow-[0_0_25px_rgba(139,92,246,.06)]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <Icon
                    size={13}
                    className={`relative transition-colors ${ active ? "text-[#A78BFA]" : "text-white/25" }`}
                  />

                  <span className="relative">
                    {category.label}
                  </span>

                  <span className="relative text-white/20">
                    {countForCategory(category.id)}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ===================================================================
            RESULT INFORMATION
        =================================================================== */}

        <div
          className="mt-8 flex min-h-[28px] items-center justify-between gap-4"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={`${activeCategory}-${query}-${showAll}`}
              initial={{
                opacity: 0,
                y: 4,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -4,
              }}
              transition={{
                duration: 0.2,
              }}
              className="text-[10px] uppercase tracking-[0.18em] text-white/20"
            >
              Showing {visibleRoles.length} of{" "}
              {filteredRoles.length} roles
            </motion.p>
          </AnimatePresence>

          {(activeCategory !== "all" || query) && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-[10px] font-medium text-[#9F7AEA] transition duration-300 hover:text-[#C4B5FD]"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* ===================================================================
            ROLE GRID
        =================================================================== */}

        <motion.div
          layout
          className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visibleRoles.map((role) => (
              <RoleCard
                key={role.slug}
                role={role}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ===================================================================
            EMPTY STATE
        =================================================================== */}

        <AnimatePresence>
          {filteredRoles.length === 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
                scale: 0.99,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: easeOut,
              }}
              className="mt-6 rounded-[24px] border border-white/[0.07] bg-white/[0.02] px-5 py-16 text-center"
            >
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.025]"
              >
                <Search
                  size={20}
                  className="text-white/20"
                />
              </div>

              <p
                className="mt-5 text-[14px] font-medium text-white/55"
              >
                No matching roles found.
              </p>

              <p
                className="mx-auto mt-2 max-w-[380px] text-[12px] leading-6 text-white/25"
              >
                Try another role, technology, skill or engineering category.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 inline-flex items-center gap-2 text-[11px] font-medium text-[#A78BFA] transition hover:text-[#C4B5FD]"
              >
                Reset search

                <ArrowRight size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===================================================================
            SHOW ALL / SHOW LESS
        =================================================================== */}

        {filteredRoles.length > 12 && (
          <div className="mt-10 flex justify-center">
            <motion.button
              type="button"
              whileHover={{
                scale: 1.025,
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() =>
                setShowAll((current) => !current)
              }
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/[0.6] bg-white/[0.025] px-6 hyi-p font-bold  hyi-white transition duration-300 hover:border-[#8B5CF6]/25 hover:bg-[#8B5CF6]/[0.06] hover:text-white"
            >
              {showAll
                ? "Show fewer roles"
                : `Explore all ${filteredRoles.length} roles`}

              <ChevronDown
                size={14}
                className={`transition-transform duration-300 hyi-white-icon ${ showAll ? "rotate-180" : "" }`}
              />
            </motion.button>
          </div>
        )}

        {/* ===================================================================
            BOTTOM CTA
        =================================================================== */}

        {/* <Reveal>
          <motion.div
            whileHover={{
              y: -2,
            }}
            transition={{
              duration: 0.3,
            }}
            className="group relative mt-12 overflow-hidden rounded-[22px] border border-white/[0.07] bg-gradient-to-r from-white/[0.025] to-[#8B5CF6]/[0.035] p-6 sm:p-7"
          >
      

            <div
              className="pointer-events-none absolute right-[-100px] top-1/2 h-[220px] w-[220px] -translate-y-1/2 rounded-full bg-[#7C3AED]/[0.07] blur-[70px] transition duration-500 group-hover:bg-[#7C3AED]/[0.13]"
            />

            <div
              className="relative flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center"
            >
              <div>
                <p
                  className="text-[13px] font-medium text-white/75"
                >
                  Can&apos;t find the exact role?
                </p>

                <p
                  className="mt-1.5 max-w-[550px] text-[12px] leading-6 text-white/30"
                >
                  Tell us about the capability, technology or engineering
                  expertise your project needs.
                </p>
              </div>

              <Link
                href="/talk-to-our-expert"
                className="group/link flex shrink-0 items-center gap-2 text-[11px] font-medium text-[#B9A6FF] transition hover:text-[#D0C4FF]"
              >
                Discuss your requirement

                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </Reveal> */}
      </div>
    </section>
  );
}