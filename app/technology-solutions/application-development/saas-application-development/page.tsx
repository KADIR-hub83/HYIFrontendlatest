"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Gauge,
  Layers3,
  LockKeyhole,
  Network,
  Orbit,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const services = [
  {
    icon: Layers3,
    title: "Multi-Tenant SaaS Architecture",
    description:
      "Secure SaaS architecture designed to serve multiple customers while maintaining data isolation, performance and operational efficiency.",
  },
  {
    icon: CreditCard,
    title: "Subscription & Billing Systems",
    description:
      "Flexible subscriptions, plans, trials, upgrades, invoicing and payment workflows engineered directly into your SaaS platform.",
  },
  {
    icon: Users,
    title: "Customer Portals",
    description:
      "Intuitive customer workspaces with onboarding, account settings, dashboards, team management and usage visibility.",
  },
  {
    icon: BarChart3,
    title: "SaaS Analytics",
    description:
      "Track users, subscriptions, engagement, revenue, churn and product behavior through actionable dashboards.",
  },
  {
    icon: Network,
    title: "Third-Party Integrations",
    description:
      "Connect payment providers, CRMs, communication tools, external APIs and business systems into one product ecosystem.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered SaaS",
    description:
      "Embed intelligent assistants, recommendations, automation and AI workflows to create differentiated SaaS products.",
  },
];

const process = [
  {
    no: "01",
    title: "Product Strategy",
    description:
      "We define your SaaS users, workflows, product model, subscription structure, MVP scope and long-term product roadmap.",
  },
  {
    no: "02",
    title: "Experience Architecture",
    description:
      "Customer onboarding, dashboards, account management and critical SaaS workflows are structured for clarity and retention.",
  },
  {
    no: "03",
    title: "Platform Architecture",
    description:
      "Multi-tenancy, databases, APIs, permissions, billing and infrastructure are designed around scalability from the beginning.",
  },
  {
    no: "04",
    title: "SaaS Engineering",
    description:
      "Frontend, backend, billing, integrations, analytics and cloud services are engineered into one connected product.",
  },
  {
    no: "05",
    title: "Quality & Security",
    description:
      "We validate user flows, subscriptions, roles, tenant isolation, integrations, performance and security.",
  },
  {
    no: "06",
    title: "Launch & Scale",
    description:
      "Your SaaS platform is deployed with monitoring and an architecture prepared for growing users, customers and product capabilities.",
  },
];

const solutions = [
  "B2B SaaS",
  "B2C SaaS",
  "Vertical SaaS",
  "FinTech SaaS",
  "HR Platforms",
  "CRM Software",
  "Project Management",
  "Analytics Products",
  "AI SaaS",
  "Workflow Platforms",
  "Marketing SaaS",
  "Enterprise SaaS",
];

const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Supabase",
  "AWS",
  "Docker",
  "Stripe",
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
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeOut },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const staggerGrid: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const gridItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const viewport = { once: true, margin: "-80px" } as const;

/* =========================================================
   REVEAL COMPONENT
========================================================= */

interface RevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}

function Reveal({ children, className, variants = fadeUp }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function SaaSApplicationDevelopmentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <Header />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#030303]" />

          <div className="absolute left-1/2 top-[32%] h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/20 blur-[150px]" />

          <div className="absolute -left-[15%] top-[30%] h-[600px] w-[600px] rounded-full bg-purple-800/10 blur-[170px]" />

          <div className="absolute -right-[10%] top-[45%] h-[650px] w-[650px] rounded-full bg-fuchsia-900/10 blur-[180px]" />

          <div
            className="absolute inset-0 opacity-[0.13]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.065) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.065) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#050505] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 pb-10 pt-24 md:px-8 lg:px-12 lg:pt-32">
          {/* Hero text */}
          <motion.div
            className="relative z-30 mx-auto max-w-5xl text-center"
            variants={heroContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={heroItem} className="hyi-h1 hyi-white">
              Build SaaS products
              <span className="block hyi-blue">built to scale.</span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mx-auto mt-3 max-w-3xl hyi-p"
            >
              HYI engineers high-performance SaaS platforms with scalable
              architecture, subscription systems, analytics, automation,
              security and exceptional product experiences.
            </motion.p>
          </motion.div>

          {/* 3D SaaS CARD DECK */}
          <motion.div
            className="relative mx-auto mt-10 h-[600px] max-w-[1300px]"
            style={{ perspective: "1700px" }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: easeOut }}
          >
            <div className="absolute left-1/2 top-[48%] h-[400px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[110px]" />

            {/* left 3d panel */}
            <div
              className="absolute left-[4%] top-[15%] hidden w-[280px] rounded-[26px] border border-white/10 bg-[#0C0C12]/95 p-5 shadow-2xl md:block lg:left-[8%]"
              style={{
                transform: "rotateY(25deg) rotateX(5deg) rotateZ(-4deg)",
              }}
            >
              <p className="text-xs text-white/30">Customer growth</p>

              <div className="mt-3 flex items-end gap-2">
                <span className="text-4xl font-semibold">12.8k</span>
                <span className="mb-1 text-xs text-emerald-300">+18.4%</span>
              </div>

              <div className="mt-8 flex h-36 items-end gap-2">
                {[35, 48, 41, 60, 54, 72, 66, 82, 76, 95].map(
                  (value, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: "0%" }}
                      animate={{ height: `${value}%` }}
                      transition={{
                        duration: 0.8,
                        delay: 0.9 + index * 0.05,
                        ease: easeOut,
                      }}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-purple-800/30 to-purple-400"
                    />
                  )
                )}
              </div>
            </div>

            {/* main center dashboard */}
            <div
              className="absolute left-1/2 top-[3%] z-20 w-[92%] max-w-[850px] -translate-x-1/2 overflow-hidden rounded-[34px] border border-white/10 bg-[#09090E]/95 shadow-[0_50px_150px_rgba(0,0,0,.8)]"
              style={{
                transform: "translateX(-50%) rotateX(5deg)",
                transformOrigin: "center bottom",
              }}
            >
              <div className="flex h-14 items-center justify-between border-b border-white/[0.07] px-5">
                <div className="flex gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>

                <div className="rounded-full border border-white/[0.07] bg-white/[0.03] px-8 py-2 text-[10px] text-white/25">
                  SaaS Command Center
                </div>

                <Settings2 className="h-4 w-4 text-white/25" />
              </div>

              <div className="p-5 md:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-white/30">Product overview</p>
                    <h3 className="mt-2 text-xl font-semibold md:text-2xl">
                      SaaS Performance
                    </h3>
                  </div>

                  <div className="rounded-full border border-emerald-400/15 bg-emerald-500/[0.06] px-3 py-2 text-[10px] text-emerald-300">
                    ● Live
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {[
                    ["$184K", "MRR"],
                    ["4.8%", "Churn"],
                    ["12.8K", "Users"],
                    ["92%", "Retention"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"
                    >
                      <p className="text-xl font-semibold">{value}</p>
                      <p className="mt-2 text-[10px] text-white/25">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-sm">Revenue Growth</p>
                        <p className="mt-1 text-[10px] text-white/25">
                          Last 12 months
                        </p>
                      </div>

                      <BarChart3 className="h-5 w-5 text-purple-300" />
                    </div>

                    <div className="mt-6 flex h-[180px] items-end gap-2">
                      {[31, 42, 37, 50, 55, 63, 59, 72, 77, 84, 88, 96].map(
                        (height, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: "0%" }}
                            animate={{ height: `${height}%` }}
                            transition={{
                              duration: 0.8,
                              delay: 0.9 + index * 0.05,
                              ease: easeOut,
                            }}
                            className="relative flex-1 rounded-t-md bg-gradient-to-t from-purple-900/30 to-purple-400"
                          />
                        )
                      )}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                    <p className="text-sm">Subscription mix</p>

                    <div className="relative mx-auto mt-8 flex h-40 w-40 items-center justify-center rounded-full border-[18px] border-purple-500/20">
                      <div className="absolute inset-[-18px] rounded-full border-[18px] border-transparent border-l-purple-400 border-t-purple-400" />

                      <div className="text-center">
                        <p className="text-2xl font-semibold">68%</p>
                        <p className="text-[9px] text-white/25">Pro plans</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right 3d panel */}
            <div
              className="absolute right-[5%] top-[20%] hidden w-[270px] rounded-[26px] border border-white/10 bg-[#0D0B14]/95 p-5 shadow-2xl md:block lg:right-[8%]"
              style={{
                transform: "rotateY(-27deg) rotateX(5deg) rotateZ(4deg)",
              }}
            >
              <p className="text-xs text-white/30">Subscription activity</p>

              <div className="mt-6 space-y-4">
                {[
                  ["Growth Plan", "$249", "14 new"],
                  ["Professional", "$99", "34 new"],
                  ["Starter", "$39", "81 new"],
                ].map(([plan, price, info]) => (
                  <div
                    key={plan}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"
                  >
                    <div className="flex justify-between">
                      <p className="text-sm">{plan}</p>
                      <p className="text-sm font-medium">{price}</p>
                    </div>

                    <p className="mt-2 text-[10px] text-purple-300">{info}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* floating label */}
            <motion.div
              className="absolute bottom-[2%] left-1/2 z-30 -translate-x-1/2 rounded-2xl border border-white/10 bg-black/60 px-5 py-3 backdrop-blur-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15">
                  <BrainCircuit className="h-5 w-5 text-purple-300" />
                </div>

                <div>
                  <p className="text-xs text-white/30">
                    AI Product Intelligence
                  </p>
                  <p className="mt-1 text-sm font-medium">
                    Churn risk reduced by 18%
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="mx-auto max-w-[1450px] px-5 py-10 md:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-5xl text-center">
          <h2 className="hyi-h1 hyi-white">
            A SaaS platform is more than
            <span className="block hyi-blue">software behind a login.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl hyi-p">
            Successful SaaS products combine product experience, recurring
            revenue infrastructure, analytics, integrations and architecture
            that can grow without slowing the business down.
          </p>
        </Reveal>

        <motion.div
          className="mt-8 grid grid-cols-2 gap-3 border-y border-white/10 py-5 sm:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerGrid}
        >
          {[
            ["Multi-Tenant", "Architecture"],
            ["Recurring", "Revenue"],
            ["Real-Time", "Analytics"],
            ["Elastic", "Scaling"],
          ].map(([title, subtitle]) => (
            <motion.div
              key={title}
              variants={gridItem}
              className="border-white/10 px-3 text-center sm:border-r last:border-r-0"
            >
              <p className="hyi-h3 hyi-white">{title}</p>
              <p className="mt-2 hyi-p">{subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =========================================================
          IMAGE SHOWCASE
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 py-6 md:px-8 lg:px-12">
        <Reveal className="relative h-[320px] overflow-hidden rounded-[35px] border border-white/10 md:h-[480px] md:rounded-[44px]">
          <Image
            src="https://images.pexels.com/photos/26559578/pexels-photo-26559578/free-photo-of-an-abstract-background-with-purple-and-blue-blocks.jpeg?auto=compress&dpr=1&w=1920"
            alt="3D SaaS infrastructure"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/20" />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <h2 className="max-w-4xl hyi-h1 hyi-white">
              Infrastructure that evolves as your SaaS product grows.
            </h2>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
          <Reveal className="text-center">
            <h2 className="hyi-h1 hyi-white">
              Everything required to
              <span className="block hyi-blue">
                operate a modern SaaS product.
              </span>
            </h2>
          </Reveal>

          <motion.div
            className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerGrid}
          >
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={gridItem}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-b from-white/[0.045] to-transparent p-7 transition-colors duration-500 hover:border-purple-500/30 md:p-8"
                >
                  <div className="absolute right-[-60px] top-[-60px] h-[180px] w-[180px] rounded-full bg-purple-600/0 blur-[60px] transition duration-500 group-hover:bg-purple-600/15" />

                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-purple-500/10 hyi-white-icon">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="relative z-10 mt-3">
                    <h3 className="hyi-h3">{item.title}</h3>

                    <p className="mt-2 max-w-sm hyi-p">{item.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MULTI-TENANT ARCHITECTURE
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5  md:px-8 lg:px-12">
        <Reveal className="relative overflow-hidden rounded-[35px] border border-white/10 bg-[#09090D] px-5 py-8 md:rounded-[44px] md:px-12">
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/15 blur-[120px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
              <Orbit className="h-5 w-5 hyi-white-icon" />
            </div>

            <h2 className="hyi-h1 hyi-white">
              Multi-tenant at the core.
              <span className="block hyi-blue">Secure at every layer.</span>
            </h2>
          </div>

          <div className="relative mx-auto mt-8 max-w-5xl">
            <motion.div
              className="grid gap-3 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerGrid}
            >
              {["Customer A", "Customer B", "Customer C"].map((customer) => (
                <motion.div
                  key={customer}
                  variants={gridItem}
                  className="rounded-3xl border border-purple-500/30 bg-purple-500/10 p-5 text-center"
                >
                  <Users className="mx-auto h-6 w-6 hyi-white-icon" />
                  <h3 className="mt-2 hyi-h3 hyi-white">{customer}</h3>
                </motion.div>
              ))}
            </motion.div>

            <div className="mx-auto h-12 w-px bg-purple-400/30" />

            <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-center">
              <Server className="mx-auto h-6 w-6 hyi-white-icon" />
              <h3 className="mt-2 hyi-h3 hyi-white">
                Shared SaaS Application Layer
              </h3>
            </div>

            <div className="mx-auto h-12 w-px bg-white/10" />

            <motion.div
              className="grid gap-3 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerGrid}
            >
              {(
                [
                  ["Database", Database],
                  ["Cloud", Cloud],
                  ["Security", ShieldCheck],
                ] as [string, LucideIcon][]
              ).map(([title, Icon]) => (
                <motion.div
                  key={title}
                  variants={gridItem}
                  className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 text-center"
                >
                  <Icon className="mx-auto h-6 w-6 hyi-white-icon" />
                  <h3 className="mt-2 hyi-h3 hyi-white">{title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          BILLING
      ========================================================= */}
      {/* <section className="bg-[#080808]">
        <div className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-5xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
              <CreditCard className="h-5 w-5 hyi-white-icon" />
            </div>

            <h2 className="mt-3 hyi-h1 hyi-white">
              Subscription infrastructure
              <span className="block hyi-blue">
                built directly into the product.
              </span>
            </h2>
          </Reveal>

          <motion.div
            className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerGrid}
          >
            {[
              { plan: "Starter", price: "$39", users: "Small teams" },
              {
                plan: "Professional",
                price: "$99",
                users: "Growing businesses",
              },
              {
                plan: "Enterprise",
                price: "Custom",
                users: "Large organizations",
              },
            ].map((item, index) => (
              <motion.div
                key={item.plan}
                variants={gridItem}
                className={`rounded-[30px] border p-7 ${
                  index === 1
                    ? "border-purple-400/35 bg-purple-500/[0.08]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <h3 className="hyi-h3 hyi-white">{item.plan}</h3>

                <p className="mt-3 hyi-h1 hyi-white">{item.price}</p>

                <p className="mt-1 hyi-p">{item.users}</p>

                <div className="mt-6 space-y-3">
                  {[
                    "Subscription management",
                    "Usage tracking",
                    "Billing automation",
                    "Customer portal",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 hyi-p"
                    >
                      <Check className="h-4 w-4 shrink-0 hyi-white-icon" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* =========================================================
          SOLUTIONS
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="hyi-h1 hyi-white">
            SaaS for every
            <span className="block hyi-blue">modern business model.</span>
          </h2>
        </Reveal>

        <motion.div
          className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerGrid}
        >
          {solutions.map((item) => (
            <motion.div
              key={item}
              variants={gridItem}
              className="rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 hyi-p transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =========================================================
          SECURITY + SCALE
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-2 py-10 md:px-8 lg:px-12">
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#171025] to-[#070708] p-6">
            <div className="absolute right-[-120px] top-[-100px] h-[350px] w-[350px] rounded-full bg-purple-700/20 blur-[100px]" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/15">
                <LockKeyhole className="h-5 w-5 hyi-white-icon" />
              </div>

              <h2 className="mt-3 hyi-white hyi-h1">
                SaaS security from day one.
              </h2>

              <p className="mt-3 max-w-lg hyi-p">
                Tenant isolation, authentication, permissions and protected
                APIs are engineered into the SaaS architecture.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Tenant isolation",
                  "Role-based access",
                  "Secure authentication",
                  "Protected APIs",
                  "Sensitive data handling",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/65"
                  >
                    <Check className="h-4 w-4 hyi-white-icon" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#10101D] to-[#070708] p-6">
            <div className="absolute bottom-[-100px] left-[-100px] h-[350px] w-[350px] rounded-full bg-indigo-700/20 blur-[100px]" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
                <Gauge className="h-5 w-5 text-blue-300" />
              </div>

              <h2 className="mt-3 hyi-white hyi-h1">
                Built for thousands to millions.
              </h2>

              <p className="mt-3 max-w-lg hyi-p">
                Your SaaS platform is designed to scale across traffic,
                customers, subscriptions and growing datasets.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["Elastic", "Infrastructure"],
                  ["Fast", "Responses"],
                  ["Reliable", "Services"],
                  ["Global", "Delivery"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                  >
                    <p className="hyi-h3 hyi-white">{value}</p>
                    <p className="mt-2 hyi-p">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="mx-auto max-w-[1350px] px-5 md:px-8 lg:px-12">
        <Reveal className="mx-auto text-center">
          <h2 className="hyi-h1 hyi-white">
            From product concept
            <span className="block hyi-blue">to scalable SaaS company.</span>
          </h2>
        </Reveal>

        <motion.div
          className="mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerGrid}
        >
          {process.map((step) => (
            <motion.div
              key={step.no}
              variants={gridItem}
              className="group grid gap-4 border-t border-white/10 py-6 transition md:grid-cols-[100px_1fr_1.3fr] md:gap-10"
            >
              <span className="hyi-white">{step.no}</span>

              <h3 className="hyi-h3 hyi-white">{step.title}</h3>

              <p className="max-w-xl hyi-p">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* =========================================================
          TECHNOLOGY STACK
      ========================================================= */}
      <section>
        <div className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-4xl text-center">
            <h2 className="hyi-h1 hyi-white">
              Modern infrastructure
              <span className="block hyi-blue">
                behind modern SaaS products.
              </span>
            </h2>
          </Reveal>

          <motion.div
            className="mx-auto mt-6 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerGrid}
          >
            {stack.map((item) => (
              <motion.div
                key={item}
                variants={gridItem}
                className="group flex h-28 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] hyi-p transition hover:border-purple-500/30 hover:bg-purple-500/[0.08] hover:text-white md:text-base"
              >
                <Code2 className="mr-2 h-4 w-4 hyi-white-icon" />
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      {/* <section className="mx-auto max-w-[1350px] px-5 pb-10 md:px-8 lg:px-12">
        <Reveal className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0B0710] px-6 py-10 text-center md:px-12">
          <div className="absolute left-1/2 top-[-260px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-purple-700/25 blur-[140px]" />

          <div className="relative mx-auto max-w-4xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10">
              <Rocket className="h-5 w-5 hyi-white-icon" />
            </div>

            <h2 className="mt-3 hyi-h1 hyi-white">
              Build a SaaS product
              <span className="block hyi-blue">people keep paying for.</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl hyi-p">
              Partner with HYI to transform your SaaS idea into a secure,
              scalable and commercially ready digital product.
            </p>

            <button className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#7046e6] px-7 py-4 text-sm font-medium text-white shadow-[0_15px_50px_rgba(124,58,237,.25)] transition hover:scale-[1.02]">
              Talk to Our SaaS Experts
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>
      </section> */}

      <Footer />
    </main>
  );
}