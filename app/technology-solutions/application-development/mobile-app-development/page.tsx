"use client";

import { useState, type ReactNode } from "react";

import {
  motion,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  ArrowRight,
  BadgeCheck,
  Bell,
  Blocks,
  Bot,
  Braces,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  Fingerprint,
  Gamepad2,
  Gauge,
  GitBranch,
  Globe,
  Layers3,
  LineChart,
  Link2,
  LockKeyhole,
  MonitorSmartphone,
  Network,
  PenTool,
  Play,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  TabletSmartphone,
  TestTube2,
  Users,
  WandSparkles,
  Wifi,
  Workflow,
  Zap,
} from "lucide-react";
import TalkToExpertSection from "@/components/section/integrated-AI/talkToExpertSection";

const capabilities = [
  {
    number: "01",
    icon: Smartphone,
    title: "iOS App Development",
    description:
      "High-quality iPhone and iPad applications engineered for performance, security and seamless Apple ecosystem experiences.",
  },
  {
    number: "02",
    icon: TabletSmartphone,
    title: "Android App Development",
    description:
      "Scalable Android applications designed across devices, screen sizes and modern Android environments.",
  },
  {
    number: "03",
    icon: Blocks,
    title: "Cross-Platform Apps",
    description:
      "Build once and deliver consistent product experiences across iOS and Android using modern cross-platform architecture.",
  },
  {
    number: "04",
    icon: WandSparkles,
    title: "Mobile UI / UX",
    description:
      "Interaction-first mobile experiences with intuitive navigation, meaningful motion and polished visual systems.",
  },
  {
    number: "05",
    icon: Cloud,
    title: "Cloud Connected Apps",
    description:
      "Real-time synchronization, secure APIs, authentication, cloud storage and scalable backend infrastructure.",
  },
  {
    number: "06",
    icon: Sparkles,
    title: "AI-Powered Applications",
    description:
      "AI assistants, recommendations, intelligent workflows, automation and personalized mobile experiences.",
  },
];

const process = [
  {
    number: "01",
    title: "Product Discovery",
    description:
      "Business goals, user journeys, product requirements, target platforms and technical feasibility are mapped before development begins.",
  },
  {
    number: "02",
    title: "Experience Architecture",
    description:
      "We define information architecture, navigation systems, application states and complete mobile user flows.",
  },
  {
    number: "03",
    title: "Interface Design",
    description:
      "Every interface is crafted around clarity, responsiveness, accessibility and natural mobile interactions.",
  },
  {
    number: "04",
    title: "Engineering",
    description:
      "Frontend, backend APIs, databases, notifications, authentication and integrations are developed as one connected product.",
  },
  {
    number: "05",
    title: "Quality Engineering",
    description:
      "Applications are tested across devices, OS versions, network conditions, workflows and performance scenarios.",
  },
  {
    number: "06",
    title: "Launch & Growth",
    description:
      "We support deployment, store readiness, monitoring, releases and continued evolution after launch.",
  },
];

const stack = [
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
  "TypeScript",
  "Node.js",
  "Firebase",
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "REST APIs",
];

const solutions = [
  "Consumer Applications",
  "FinTech Apps",
  "Healthcare Apps",
  "Marketplace Apps",
  "On-Demand Platforms",
  "E-Commerce Apps",
  "Enterprise Mobility",
  "Social Platforms",
  "Booking Applications",
  "Learning Platforms",
  "AI Mobile Products",
  "Internal Business Apps",
];

/* =========================================================
   HIRE A DEVELOPER — every discipline, grouped by category
========================================================= */
const developerCategories = [
  {
    id: "mobile",
    label: "Mobile",
    developers: [
      {
        icon: Smartphone,
        title: "iOS Developer",
        stack: "Swift · SwiftUI · UIKit",
        description:
          "Native iPhone and iPad engineering, built for the Apple ecosystem.",
      },
      {
        icon: TabletSmartphone,
        title: "Android Developer",
        stack: "Kotlin · Jetpack Compose",
        description:
          "Native Android engineering across phones, tablets and foldables.",
      },
      {
        icon: Blocks,
        title: "React Native Developer",
        stack: "React Native · TypeScript",
        description:
          "One codebase shipping native-feel apps to iOS and Android together.",
      },
      {
        icon: Layers3,
        title: "Flutter Developer",
        stack: "Flutter · Dart",
        description:
          "Pixel-perfect, highly custom UI compiled to native performance.",
      },
    ],
  },
  {
    id: "web",
    label: "Web",
    developers: [
      {
        icon: Code2,
        title: "Frontend Developer",
        stack: "React · Next.js · Tailwind",
        description: "Interfaces that render fast and feel considered.",
      },
      {
        icon: Server,
        title: "Backend Developer",
        stack: "Node.js · Java · Python",
        description: "APIs, services and business logic built to scale.",
      },
      {
        icon: Braces,
        title: "Full-Stack Developer",
        stack: "MERN · Next.js · PostgreSQL",
        description: "One engineer owning a feature from database to screen.",
      },
      {
        icon: Globe,
        title: "WordPress Developer",
        stack: "WordPress · PHP · WooCommerce",
        description: "Custom themes, plugins and content platforms.",
      },
      {
        icon: ShoppingBag,
        title: "Shopify Developer",
        stack: "Shopify · Liquid · Hydrogen",
        description: "Storefronts and custom checkout experiences.",
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    developers: [
      {
        icon: Workflow,
        title: "DevOps Engineer",
        stack: "CI/CD · Docker · Kubernetes",
        description: "Automated pipelines that ship safely and often.",
      },
      {
        icon: Cloud,
        title: "Cloud Architect",
        stack: "AWS · GCP · Azure",
        description: "Infrastructure designed to scale without surprises.",
      },
      {
        icon: Database,
        title: "Database Administrator",
        stack: "PostgreSQL · MongoDB · Redis",
        description: "Data modeling, performance tuning and reliability.",
      },
      {
        icon: GitBranch,
        title: "Site Reliability Engineer",
        stack: "Monitoring · Incident Response",
        description: "Uptime, observability and systems that recover fast.",
      },
    ],
  },
  {
    id: "data",
    label: "Data & AI",
    developers: [
      {
        icon: Bot,
        title: "AI / ML Engineer",
        stack: "PyTorch · LLMs · MLOps",
        description: "Intelligent features, from recommendations to copilots.",
      },
      {
        icon: LineChart,
        title: "Data Engineer",
        stack: "ETL · Spark · Airflow",
        description: "Pipelines that turn raw data into something usable.",
      },
      {
        icon: Cpu,
        title: "Data Scientist",
        stack: "Python · Modeling · Analytics",
        description: "Answers and predictions grounded in your product data.",
      },
      {
        icon: Link2,
        title: "Blockchain Developer",
        stack: "Solidity · Web3 · Smart Contracts",
        description: "Decentralized apps and on-chain product logic.",
      },
    ],
  },
  {
    id: "design",
    label: "Design & QA",
    developers: [
      {
        icon: PenTool,
        title: "UI / UX Designer",
        stack: "Figma · Prototyping",
        description: "Product experiences designed around real user flows.",
      },
      {
        icon: TestTube2,
        title: "QA / Test Engineer",
        stack: "Manual · Automation",
        description: "Coverage across devices, OS versions and edge cases.",
      },
      {
        icon: Gamepad2,
        title: "Game Developer",
        stack: "Unity · Unreal Engine",
        description: "Mobile and cross-platform game experiences.",
      },
      {
        icon: Users,
        title: "Technical Project Manager",
        stack: "Delivery · Sprint Planning",
        description: "One point of accountability from kickoff to launch.",
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    developers: [
      {
        icon: ShieldCheck,
        title: "Security Engineer",
        stack: "AppSec · Threat Modeling",
        description: "Security built into architecture, not bolted on after.",
      },
      {
        icon: Fingerprint,
        title: "Penetration Tester",
        stack: "Audits · Vulnerability Testing",
        description: "Independent testing before real attackers find it first.",
      },
      {
        icon: LockKeyhole,
        title: "IAM Engineer",
        stack: "Auth · SSO · RBAC",
        description: "Authentication and access, done properly from day one.",
      },
    ],
  },
];

/* =========================================================
   MOTION VARIANTS
========================================================= */

const easeOut = [0.16, 1, 0.3, 1] as const;

const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const heroItem: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: easeOut,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const staggerGrid: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const gridItem: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easeOut,
    },
  },
};

/* =========================================================
   REVEAL COMPONENT
========================================================= */

interface RevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}

function Reveal({
  children,
  className,
  variants = fadeUp,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-80px",
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default function MobileAppDevelopmentPage() {
  const [activeCategory, setActiveCategory] = useState(developerCategories[0].id);
  const activeDevelopers =
    developerCategories.find((cat) => cat.id === activeCategory)?.developers ?? [];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Header />

      {/* =========================================================
          CINEMATIC HERO
      ========================================================= */}
      <section className="relative min-h-[100svh] overflow-hidden border-b border-white/10">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#030303]" />

          <div className="absolute left-1/2 top-[36%] h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/20 blur-[150px]" />

          <div className="absolute -left-[15%] top-[20%] h-[600px] w-[600px] rounded-full bg-purple-800/10 blur-[170px]" />

          <div className="absolute -right-[10%] bottom-[-10%] h-[650px] w-[650px] rounded-full bg-fuchsia-900/10 blur-[180px]" />

          <div
            className="absolute inset-0 opacity-[0.13]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.065) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.065) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1500px] flex-col px-5 pb-10 pt-24 md:px-8 lg:px-12 lg:pt-32">
          {/* Hero text */}
          <motion.div
            className="relative z-30 mx-auto max-w-5xl text-center"
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={heroItem}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs text-purple-200 backdrop-blur-xl sm:text-sm"
            >
              <Sparkles className="h-4 w-4" />
              Mobile Application Engineering
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="text-[44px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[92px]"
            >
              Mobile products
              <span className="block bg-gradient-to-r from-[#585462] via-[#d1cbd8] to-[#161516] bg-clip-text text-transparent">
                people love to use.
              </span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mx-auto mt-7 max-w-3xl text-base leading-7 text-white/50 sm:text-lg md:leading-8"
            >
              HYI engineers premium mobile applications that combine intuitive
              product experiences, scalable technology and production-grade
              performance across iOS and Android.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="mt-9 flex flex-wrap justify-center gap-3"
            >
              <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1d1d1f] to-[#cfcbd9] px-7 py-4 text-sm font-medium text-black shadow-[0_15px_50px_rgba(124,58,237,.25)] transition hover:scale-[1.02]">
                Build Your Mobile App
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>

              <a
                href="#hire-developers"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.035] px-7 py-4 text-sm text-white/70 backdrop-blur-xl transition hover:bg-white/[0.07]"
              >
                <Play className="h-4 w-4" />
                Explore Capabilities
              </a>
            </motion.div>
          </motion.div>

          {/* Phone visual */}
          <motion.div
            className="relative mx-auto mt-16 h-[560px] w-full max-w-[1180px] md:h-[680px] lg:mt-8 lg:h-[720px]"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: easeOut }}
          >
            {/* glow floor */}
            <div className="absolute bottom-[7%] left-1/2 h-[120px] w-[70%] -translate-x-1/2 rounded-[100%] bg-purple-600/20 blur-[80px]" />

            {/* LEFT PHONE */}
            <motion.div
              className="absolute left-[0%] top-[16%] hidden w-[230px] -rotate-[12deg] md:block lg:left-[9%] lg:w-[265px]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="rounded-[42px] border border-white/15 bg-[#111117] p-[7px] shadow-2xl">
                <div className="relative h-[500px] overflow-hidden rounded-[35px] bg-gradient-to-b from-[#151426] via-[#0D0D16] to-[#050505] lg:h-[555px]">
                  <div className="absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />

                  <div className="p-5 pt-12">
                    <p className="text-xs text-white/40">Welcome back</p>
                    <h3 className="mt-1 text-xl font-semibold">
                      Your activity
                    </h3>

                    <div className="mt-6 rounded-3xl bg-gradient-to-br from-purple-500/30 to-indigo-800/10 p-5">
                      <p className="text-xs text-purple-200">Weekly progress</p>
                      <div className="mt-3 text-4xl font-semibold">82%</div>

                      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[82%] rounded-full bg-purple-400" />
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {["Daily Goals", "Activity", "Analytics"].map(
                        (item, index) => (
                          <div
                            key={item}
                            className="flex items-center justify-between rounded-2xl border border-white/7 bg-white/[0.035] p-4"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                                {index === 0 && <Rocket className="h-4 w-4" />}
                                {index === 1 && <Gauge className="h-4 w-4" />}
                                {index === 2 && (
                                  <Layers3 className="h-4 w-4" />
                                )}
                              </div>
                              <span className="text-sm text-white/70">
                                {item}
                              </span>
                            </div>

                            <ChevronRight className="h-4 w-4 text-white/20" />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CENTER PHONE */}
            <motion.div
              className="absolute left-1/2 top-0 z-20 w-[270px] -translate-x-1/2 sm:w-[300px] md:w-[320px] lg:w-[355px]"
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="rounded-[52px] bg-gradient-to-b from-white/20 via-white/5 to-white/10 p-[1px] shadow-[0_40px_140px_rgba(99,39,190,.35)]">
                <div className="rounded-[51px] bg-[#09090D] p-[8px]">
                  <div className="relative h-[570px] overflow-hidden rounded-[43px] bg-[#0D0C13] sm:h-[620px] md:h-[650px] lg:h-[690px]">
                    <div className="absolute left-1/2 top-3 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,.35),transparent_43%)]" />

                    <div className="relative z-10 px-6 pt-14">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-white/40">
                            Thursday, Sep 12
                          </p>
                          <h3 className="mt-1 text-2xl font-semibold">
                            Good evening.
                          </h3>
                        </div>

                        <div className="h-10 w-10 rounded-full border border-purple-400/30 bg-purple-500/20" />
                      </div>

                      <div className="mt-8 rounded-[28px] border border-purple-400/20 bg-gradient-to-br from-[#7044E8]/35 to-[#15111E] p-6">
                        <p className="text-xs text-purple-200">
                          Smart Performance
                        </p>

                        <div className="mt-2 flex items-end justify-between">
                          <span className="text-5xl font-semibold">94</span>
                          <span className="mb-1 text-sm text-emerald-300">
                            +12.4%
                          </span>
                        </div>

                        <div className="mt-7 flex h-24 items-end gap-[7px]">
                          {[40, 58, 45, 70, 62, 85, 78, 92, 66, 95].map(
                            (height, i) => (
                              <motion.div
                                key={i}
                                initial={{ height: "0%" }}
                                animate={{ height: `${height}%` }}
                                transition={{
                                  duration: 0.8,
                                  delay: 0.9 + i * 0.05,
                                  ease: easeOut,
                                }}
                                className="flex-1 rounded-full bg-gradient-to-t from-purple-600 to-purple-300"
                              />
                            )
                          )}
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                            <Zap className="h-5 w-5" />
                          </div>
                          <p className="mt-6 text-xs text-white/40">
                            Productivity
                          </p>
                          <p className="mt-1 text-xl font-semibold">8.7h</p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                            <BadgeCheck className="h-5 w-5" />
                          </div>
                          <p className="mt-6 text-xs text-white/40">
                            Completed
                          </p>
                          <p className="mt-1 text-xl font-semibold">24</p>
                        </div>
                      </div>

                      <div className="mt-4 rounded-3xl border border-white/10 bg-[#14131B] p-5">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">AI recommendation</span>
                          <Sparkles className="h-4 w-4 text-purple-300" />
                        </div>

                        <p className="mt-3 text-xs leading-5 text-white/40">
                          Your most productive time is between 10 AM and 1 PM.
                          Prioritize important tasks during this period.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT PHONE */}
            <motion.div
              className="absolute right-[0%] top-[17%] hidden w-[230px] rotate-[12deg] md:block lg:right-[9%] lg:w-[265px]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              <div className="rounded-[42px] border border-white/15 bg-[#111117] p-[7px] shadow-2xl">
                <div className="relative h-[500px] overflow-hidden rounded-[35px] bg-gradient-to-b from-[#10101A] to-[#050505] lg:h-[555px]">
                  <div className="absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />

                  <div className="p-5 pt-12">
                    <p className="text-xs text-white/40">Messages</p>
                    <h3 className="mt-1 text-xl font-semibold">Your team</h3>

                    <div className="mt-7 space-y-4">
                      {[
                        "Design Team",
                        "Development",
                        "Product Team",
                        "Marketing",
                      ].map((item, index) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 border-b border-white/7 pb-4"
                        >
                          <div
                            className={`h-11 w-11 rounded-full ${
                              index % 2
                                ? "bg-gradient-to-br from-pink-500 to-purple-500"
                                : "bg-gradient-to-br from-purple-500 to-blue-500"
                            }`}
                          />

                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium">{item}</p>
                            <p className="mt-1 truncate text-xs text-white/35">
                              New activity received
                            </p>
                          </div>

                          <div className="h-2 w-2 rounded-full bg-purple-400" />
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-3xl bg-purple-500/10 p-5">
                      <Bell className="h-5 w-5 text-purple-300" />
                      <p className="mt-4 text-sm font-medium">
                        Stay connected.
                      </p>
                      <p className="mt-2 text-xs leading-5 text-white/35">
                        Real-time notifications keep every team member aligned.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* floating labels */}
            <motion.div
              className="absolute left-[2%] top-[9%] hidden rounded-2xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl lg:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              <p className="text-xs text-white/30">Native performance</p>
              <p className="mt-1 text-sm font-medium">60 FPS Experiences</p>
            </motion.div>

            <motion.div
              className="absolute right-[3%] top-[11%] hidden rounded-2xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.35 }}
            >
              <p className="text-xs text-white/30">Cross platform</p>
              <p className="mt-1 text-sm font-medium">iOS + Android</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          PRODUCT INTRO
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-36">
        <Reveal className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-purple-400 sm:text-sm">
            More than an application
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            We build mobile products that
            <span className="block text-white/30">
              become part of everyday life.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/50 md:text-lg">
            Successful mobile products combine effortless usability,
            responsive interfaces and dependable technology behind the scenes.
            HYI brings product design, mobile engineering, backend systems and
            cloud infrastructure together into one complete development
            process.
          </p>
        </Reveal>

        <motion.div
          className="mt-16 grid grid-cols-2 gap-3 border-y border-white/10 py-10 sm:grid-cols-4 lg:mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerGrid}
        >
          {[
            ["iOS", "Native & Hybrid"],
            ["Android", "All Devices"],
            ["Cloud", "Connected Systems"],
            ["AI", "Intelligent Apps"],
          ].map(([title, subtitle]) => (
            <motion.div
              key={title}
              variants={gridItem}
              className="border-white/10 px-3 text-center sm:border-r last:border-r-0"
            >
              <p className="text-2xl font-semibold sm:text-3xl">{title}</p>
              <p className="mt-2 text-xs text-white/35 sm:text-sm">
                {subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
          <Reveal className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.28em] text-purple-400 sm:text-sm">
              Mobile engineering capabilities
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
              From the first screen
              <span className="block text-white/30">
                to the entire ecosystem.
              </span>
            </h2>
          </Reveal>

          <motion.div
            className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerGrid}
          >
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={gridItem}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group relative min-h-[320px] overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.045] to-transparent p-7 transition-colors duration-500 hover:border-purple-500/30 md:p-8"
                >
                  <div className="absolute right-[-60px] top-[-60px] h-[180px] w-[180px] rounded-full bg-purple-600/0 blur-[60px] transition duration-500 group-hover:bg-purple-600/15" />

                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-sm text-white/20">{item.number}</span>
                  </div>

                  <div className="relative z-10 mt-16">
                    <h3 className="text-xl font-semibold md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/40 md:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FULL PRODUCT EXPERIENCE
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-36">
        <Reveal className="overflow-hidden rounded-[35px] border border-white/10 bg-[#09090D] md:rounded-[44px]">
          <div className="relative min-h-[780px] px-6 pb-12 pt-16 md:px-12 lg:min-h-[820px] lg:px-16">
            <div className="absolute left-[50%] top-[55%] h-[520px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/15 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
                <MonitorSmartphone className="h-5 w-5 text-purple-300" />
              </div>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
                One product.
                <span className="block text-white/30">
                  Every screen feels intentional.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/45">
                The mobile experience is treated as a complete digital system,
                not a collection of disconnected screens.
              </p>
            </div>

            {/* device deck */}
            <div className="relative z-10 mx-auto mt-20 flex max-w-5xl items-end justify-center">
              <div className="hidden h-[440px] w-[230px] -rotate-[8deg] rounded-[38px] border border-white/10 bg-[#111119] p-2 opacity-70 md:block">
                <div className="h-full rounded-[31px] bg-gradient-to-b from-[#29233F] via-[#15141E] to-[#08080C] p-5">
                  <div className="mt-7 h-24 rounded-3xl bg-purple-500/20" />
                  <div className="mt-4 h-16 rounded-2xl bg-white/[0.04]" />
                  <div className="mt-3 h-16 rounded-2xl bg-white/[0.04]" />
                  <div className="mt-3 h-16 rounded-2xl bg-white/[0.04]" />
                </div>
              </div>

              <div className="z-20 -mx-5 h-[510px] w-[270px] rounded-[44px] border border-purple-400/25 bg-[#0D0D12] p-2 shadow-[0_30px_100px_rgba(90,40,180,.35)] md:h-[550px] md:w-[295px]">
                <div className="relative h-full overflow-hidden rounded-[36px] bg-gradient-to-b from-[#1A1530] to-[#09090D] p-6">
                  <div className="mx-auto h-5 w-20 rounded-full bg-black" />

                  <div className="mt-10">
                    <p className="text-xs text-purple-200">Your dashboard</p>
                    <h3 className="mt-2 text-2xl font-semibold">
                      Everything in one place.
                    </h3>

                    <div className="mt-7 rounded-3xl bg-gradient-to-br from-purple-500/30 to-transparent p-5">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-white/45">This week</p>
                        <Gauge className="h-4 w-4 text-purple-300" />
                      </div>

                      <p className="mt-5 text-4xl font-semibold">87%</p>

                      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[87%] bg-purple-400" />
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-white/[0.05] p-4">
                        <p className="text-xs text-white/35">Tasks</p>
                        <p className="mt-2 text-xl font-medium">24</p>
                      </div>

                      <div className="rounded-2xl bg-white/[0.05] p-4">
                        <p className="text-xs text-white/35">Growth</p>
                        <p className="mt-2 text-xl font-medium">+18%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden h-[440px] w-[230px] rotate-[8deg] rounded-[38px] border border-white/10 bg-[#111119] p-2 opacity-70 md:block">
                <div className="h-full rounded-[31px] bg-gradient-to-b from-[#22172D] via-[#15121A] to-[#08080C] p-5">
                  <div className="mt-7 h-36 rounded-3xl bg-fuchsia-500/10" />

                  <div className="mt-4 space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl bg-white/[0.04] p-3"
                      >
                        <div className="h-9 w-9 rounded-full bg-purple-500/20" />
                        <div className="flex-1">
                          <div className="h-2 w-2/3 rounded-full bg-white/20" />
                          <div className="mt-2 h-2 w-1/2 rounded-full bg-white/5" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          ARCHITECTURE
      ========================================================= */}
      <section className="relative border-y border-white/10 py-24 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/[0.08] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1450px] px-5 md:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-purple-400 sm:text-sm">
              Connected architecture
            </p>

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              What users see is only
              <span className="block text-white/30">
                one layer of the product.
              </span>
            </h2>
          </Reveal>

          <div className="mx-auto mt-20 max-w-5xl">
            {/* Mobile */}
            <Reveal className="mx-auto w-full max-w-md rounded-3xl border border-purple-500/30 bg-purple-500/10 p-5 text-center">
              <Smartphone className="mx-auto h-6 w-6 text-purple-300" />
              <h3 className="mt-3 font-medium">Mobile Experience Layer</h3>
              <p className="mt-1 text-xs text-white/35">
                iOS · Android · Cross-platform
              </p>
            </Reveal>

            <div className="mx-auto h-14 w-px bg-gradient-to-b from-purple-400/50 to-white/10" />

            {/* API */}
            <Reveal className="mx-auto w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-center">
              <Network className="mx-auto h-6 w-6 text-purple-300" />
              <h3 className="mt-3 font-medium">
                API & Application Services
              </h3>
              <p className="mt-1 text-xs text-white/35">
                Authentication · Business Logic · Integrations
              </p>
            </Reveal>

            <div className="mx-auto h-14 w-px bg-white/10" />

            <motion.div
              className="grid gap-4 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerGrid}
            >
              {[
                {
                  icon: Database,
                  title: "Data Layer",
                  sub: "SQL · NoSQL · Storage",
                },
                {
                  icon: Cloud,
                  title: "Cloud Infrastructure",
                  sub: "Compute · CDN · Scaling",
                },
                {
                  icon: Sparkles,
                  title: "Intelligence Layer",
                  sub: "AI · Automation · Analytics",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={gridItem}
                    className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 text-center"
                  >
                    <Icon className="mx-auto h-6 w-6 text-purple-300" />
                    <h3 className="mt-4 font-medium">{item.title}</h3>
                    <p className="mt-2 text-xs text-white/35">{item.sub}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECURITY + PERFORMANCE
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-36">
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal className="relative min-h-[540px] overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#171025] to-[#070708] p-8 md:p-12">
            <div className="absolute right-[-120px] top-[-100px] h-[350px] w-[350px] rounded-full bg-purple-700/20 blur-[100px]" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/15">
                <ShieldCheck className="h-5 w-5 text-purple-300" />
              </div>

              <h2 className="mt-8 text-3xl font-semibold md:text-5xl">
                Security engineered into every layer.
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-white/45">
                Authentication, authorization, encrypted communication,
                protected data and secure API architecture are considered
                throughout the product lifecycle.
              </p>

              <div className="mt-10 space-y-3">
                {[
                  "Secure authentication",
                  "Role-based permissions",
                  "Protected API communication",
                  "Sensitive data handling",
                  "Secure cloud infrastructure",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/65"
                  >
                    <Check className="h-4 w-4 text-purple-400" />
                    {item}
                  </div>
                ))}
              </div>

              <Fingerprint className="absolute -bottom-20 -right-5 h-[230px] w-[230px] text-purple-500/[0.07]" />
            </div>
          </Reveal>

          <Reveal className="relative min-h-[540px] overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#10101D] to-[#070708] p-8 md:p-12">
            <div className="absolute bottom-[-100px] left-[-100px] h-[350px] w-[350px] rounded-full bg-indigo-700/20 blur-[100px]" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
                <Gauge className="h-5 w-5 text-blue-300" />
              </div>

              <h2 className="mt-8 text-3xl font-semibold md:text-5xl">
                Built to feel fast everywhere.
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-white/45">
                Performance is optimized across rendering, networking, caching,
                data loading, application state and backend infrastructure.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-3">
                {[
                  ["60 FPS", "Smooth UI"],
                  ["Fast", "Cold Starts"],
                  ["Smart", "Caching"],
                  ["Stable", "Networking"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                  >
                    <p className="text-xl font-semibold">{value}</p>
                    <p className="mt-2 text-xs text-white/35">{label}</p>
                  </div>
                ))}
              </div>

              <Wifi className="absolute -bottom-16 -right-4 h-[220px] w-[220px] text-blue-500/[0.05]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          SOLUTIONS
      ========================================================= */}
      <section className="border-y border-white/10 bg-[#080808]">
        <div className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-purple-400 sm:text-sm">
              Product possibilities
            </p>

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              Mobile experiences for
              <span className="block text-white/30">
                every kind of business.
              </span>
            </h2>
          </Reveal>

          <motion.div
            className="mx-auto mt-14 flex max-w-5xl flex-wrap justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerGrid}
          >
            {solutions.map((item) => (
              <motion.div
                key={item}
                variants={gridItem}
                className="rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-sm text-white/55 transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          HIRE A DEVELOPER — every discipline, one page
      ========================================================= */}
      <section id="hire-developers" className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-36">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-purple-400 sm:text-sm">
            Extend your team
          </p>

          <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
            Hire the developer
            <span className="block text-white/30">
              your project actually needs.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/45">
            Whether it&apos;s one specialist for a single sprint or a full team for
            an entire product, every discipline is available to hire on a
            dedicated, project or hourly basis.
          </p>
        </Reveal>

        {/* Category tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {developerCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "text-black"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.span
                  layoutId="activeDevTab"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Developer grid */}
        <div className="relative mt-10 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: easeOut }}
              className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
            >
              {activeDevelopers.map((dev) => {
                const Icon = dev.icon;

                return (
                  <div
                    key={dev.title}
                    className="group relative flex flex-col rounded-[26px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-purple-500/30 hover:bg-purple-500/[0.06]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold">{dev.title}</h3>

                    <p className="mt-1 text-xs text-purple-300/70">
                      {dev.stack}
                    </p>

                    <p className="mt-3 flex-1 text-sm leading-6 text-white/40">
                      {dev.description}
                    </p>

                    <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition group-hover:text-white">
                      Hire {dev.title.split(" ")[0]}
                      <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                    </button>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[30px] border border-white/10 bg-white/[0.03] p-8 text-center sm:flex-row sm:text-left md:p-10">
          <div>
            <p className="text-lg font-medium">
              Don&apos;t see the exact role you need?
            </p>
            <p className="mt-2 text-sm text-white/40">
              Tell us what the project needs and we&apos;ll put the right
              specialist, or team, in front of you.
            </p>
          </div>

          <button className="inline-flex shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-[#1d1d1f] to-[#cfcbd9] px-7 py-4 text-sm font-medium text-black shadow-[0_15px_50px_rgba(124,58,237,.25)] transition hover:scale-[1.02]">
            Talk to Our Team
            <ArrowRight className="h-4 w-4" />
          </button>
        </Reveal>
      </section>

      {/* =========================================================
          DEVELOPMENT PROCESS
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-36">
        <Reveal className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.28em] text-purple-400 sm:text-sm">
            Development journey
          </p>

          <h2 className="mt-5 text-4xl font-semibold md:text-6xl">
            From product idea
            <span className="block text-white/30">
              to millions of interactions.
            </span>
          </h2>
        </Reveal>

        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerGrid}
        >
          {process.map((step) => (
            <motion.div
              key={step.number}
              variants={gridItem}
              className="group grid gap-4 border-t border-white/10 py-8 transition md:grid-cols-[100px_1fr_1.3fr] md:gap-10 md:py-10"
            >
              <span className="font-medium text-purple-400">
                {step.number}
              </span>

              <h3 className="text-xl font-semibold transition group-hover:text-purple-200 md:text-2xl">
                {step.title}
              </h3>

              <p className="max-w-xl text-sm leading-7 text-white/40 md:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =========================================================
          TECHNOLOGY STACK
      ========================================================= */}
      <section className="border-y border-white/10">
        <div className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-purple-400 sm:text-sm">
              Engineering stack
            </p>

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              Modern technology behind
              <span className="block text-white/30">
                modern mobile products.
              </span>
            </h2>
          </Reveal>

          <motion.div
            className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerGrid}
          >
            {stack.map((item) => (
              <motion.div
                key={item}
                variants={gridItem}
                className="group flex h-28 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] text-sm font-medium text-white/55 transition hover:border-purple-500/30 hover:bg-purple-500/[0.08] hover:text-white md:text-base"
              >
                <Code2 className="mr-2 h-4 w-4 text-purple-400 opacity-60" />
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          APP STORE READY
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-24 md:px-8 lg:px-12 lg:py-36">
        <Reveal className="relative overflow-hidden rounded-[38px] border border-purple-500/20 bg-gradient-to-br from-[#120C1C] via-[#0B0910] to-[#050505] px-7 py-16 text-center md:px-12 md:py-24">
          <div className="absolute left-1/2 top-[-250px] h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-purple-700/25 blur-[160px]" />

          <div className="relative z-10">
            <Store className="mx-auto h-9 w-9 text-purple-300" />

            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-purple-300">
              Launch ready
            </p>

            <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              Built for the device.
              <span className="block text-white/30">
                Ready for the market.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/45">
              From engineering and testing to deployment readiness, HYI helps
              move your mobile product from concept into the hands of real
              users.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-black/30 px-6 py-4">
                <p className="text-xs text-white/30">Available for</p>
                <p className="mt-1 font-medium">iOS Applications</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 px-6 py-4">
                <p className="text-xs text-white/30">Available for</p>
                <p className="mt-1 font-medium">Android Applications</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <TalkToExpertSection />

      <Footer />
    </main>
  );
}