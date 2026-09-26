import Image from "next/image";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  BrainCircuit,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  CreditCard,
  Database,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  Network,
  Orbit,
  Rocket,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

const services = [
  {
    no: "01",
    icon: Layers3,
    title: "Multi-Tenant SaaS Architecture",
    description:
      "Secure SaaS architecture designed to serve multiple customers while maintaining data isolation, performance and operational efficiency.",
  },
  {
    no: "02",
    icon: CreditCard,
    title: "Subscription & Billing Systems",
    description:
      "Flexible subscriptions, plans, trials, upgrades, invoicing and payment workflows engineered directly into your SaaS platform.",
  },
  {
    no: "03",
    icon: Users,
    title: "Customer Portals",
    description:
      "Intuitive customer workspaces with onboarding, account settings, dashboards, team management and usage visibility.",
  },
  {
    no: "04",
    icon: BarChart3,
    title: "SaaS Analytics",
    description:
      "Track users, subscriptions, engagement, revenue, churn and product behavior through actionable dashboards.",
  },
  {
    no: "05",
    icon: Network,
    title: "Third-Party Integrations",
    description:
      "Connect payment providers, CRMs, communication tools, external APIs and business systems into one product ecosystem.",
  },
  {
    no: "06",
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

export default function SaaSApplicationDevelopmentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[1120px] overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-black" />

        <Image
          src="https://images.pexels.com/photos/26559578/pexels-photo-26559578/free-photo-of-an-abstract-background-with-purple-and-blue-blocks.jpeg?auto=compress&dpr=1&w=1920"
          alt="Futuristic 3D SaaS technology architecture"
          fill
          priority
          className="object-cover opacity-35"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/75 to-[#030303]" />

        <div className="absolute left-1/2 top-[34%] h-[850px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[180px]" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 pt-24 md:px-8 lg:px-12 lg:pt-32">
          <div className="mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-black/40 px-4 py-2 text-xs text-purple-200 backdrop-blur-xl sm:text-sm">
              <Sparkles className="h-4 w-4" />
              SaaS Application Development
            </div>

            <h1 className="mt-7 text-[44px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[94px]">
              Build SaaS products
              <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#EC4899] bg-clip-text text-transparent">
                built to scale.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/50 md:text-lg">
              HYI engineers high-performance SaaS platforms with scalable
              architecture, subscription systems, analytics, automation,
              security and exceptional product experiences.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-7 py-4 text-sm font-medium shadow-[0_15px_60px_rgba(124,58,237,.35)]">
                Build Your SaaS Product
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>

              <button className="rounded-full border border-white/15 bg-black/30 px-7 py-4 text-sm text-white/70 backdrop-blur-xl">
                Explore SaaS Capabilities
              </button>
            </div>
          </div>

          {/* 3D SaaS CARD DECK */}
          <div
            className="relative mx-auto mt-20 h-[650px] max-w-[1300px]"
            style={{ perspective: "1700px" }}
          >
            <div className="absolute left-1/2 top-[48%] h-[400px] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[110px]" />

            {/* left 3d panel */}
            <div
              className="absolute left-[4%] top-[15%] hidden w-[280px] rounded-[26px] border border-white/10 bg-[#0C0C12]/95 p-5 shadow-2xl backdrop-blur-xl md:block lg:left-[8%]"
              style={{
                transform:
                  "rotateY(25deg) rotateX(5deg) rotateZ(-4deg)",
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
                    <div
                      key={index}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-purple-800/30 to-purple-400"
                      style={{ height: `${value}%` }}
                    />
                  )
                )}
              </div>
            </div>

            {/* main center dashboard */}
            <div
              className="absolute left-1/2 top-[3%] z-20 w-[92%] max-w-[850px] -translate-x-1/2 overflow-hidden rounded-[34px] border border-white/10 bg-[#09090E]/95 shadow-[0_50px_150px_rgba(0,0,0,.8)] backdrop-blur-2xl"
              style={{
                transform:
                  "translateX(-50%) rotateX(5deg)",
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
                    <p className="text-xs text-white/30">
                      Product overview
                    </p>
                    <h3 className="mt-2 text-xl font-semibold md:text-2xl">
                      SaaS Performance
                    </h3>
                  </div>

                  <div className="rounded-full border border-emerald-400/15 bg-emerald-500/[0.06] px-3 py-2 text-[10px] text-emerald-300">
                    ● Live
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
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
                      <p className="mt-2 text-[10px] text-white/25">
                        {label}
                      </p>
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

                    <div className="mt-7 flex h-[180px] items-end gap-2">
                      {[
                        31, 42, 37, 50, 55, 63, 59, 72, 77, 84, 88, 96,
                      ].map((height, index) => (
                        <div
                          key={index}
                          className="relative flex-1 rounded-t-md bg-gradient-to-t from-purple-900/30 to-purple-400"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                    <p className="text-sm">Subscription mix</p>

                    <div className="relative mx-auto mt-8 flex h-40 w-40 items-center justify-center rounded-full border-[18px] border-purple-500/20">
                      <div className="absolute inset-[-18px] rounded-full border-[18px] border-transparent border-l-purple-400 border-t-purple-400" />

                      <div className="text-center">
                        <p className="text-2xl font-semibold">68%</p>
                        <p className="text-[9px] text-white/25">
                          Pro plans
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* right 3d panel */}
            <div
              className="absolute right-[5%] top-[20%] hidden w-[270px] rounded-[26px] border border-white/10 bg-[#0D0B14]/95 p-5 shadow-2xl backdrop-blur-xl md:block lg:right-[8%]"
              style={{
                transform:
                  "rotateY(-27deg) rotateX(5deg) rotateZ(4deg)",
              }}
            >
              <p className="text-xs text-white/30">
                Subscription activity
              </p>

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

                    <p className="mt-2 text-[10px] text-purple-300">
                      {info}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-[4%] left-1/2 z-30 -translate-x-1/2 rounded-2xl border border-purple-400/20 bg-black/70 px-5 py-4 backdrop-blur-xl">
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
            </div>
          </div>
        </div>
      </section>

      {/* SaaS intro */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
            SaaS product engineering
          </p>

          <h2 className="mt-7 text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            A SaaS platform is more than
            <span className="block text-white/25">
              software behind a login.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/45 md:text-lg">
            Successful SaaS products combine product experience, recurring
            revenue infrastructure, analytics, integrations and architecture
            that can grow without slowing the business down.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 border-y border-white/[0.08] py-10 md:grid-cols-4">
          {[
            ["Multi-Tenant", "Architecture"],
            ["Recurring", "Revenue"],
            ["Real-Time", "Analytics"],
            ["Elastic", "Scaling"],
          ].map(([value, label], index) => (
            <div
              key={value}
              className={`text-center ${
                index < 3 ? "md:border-r md:border-white/[0.08]" : ""
              }`}
            >
              <p className="text-xl font-semibold md:text-3xl">
                {value}
              </p>
              <p className="mt-2 text-xs text-white/30">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* image showcase */}
      <section className="mx-auto max-w-[1450px] px-5 pb-28 md:px-8 lg:px-12 lg:pb-40">
        <div className="relative h-[420px] overflow-hidden rounded-[40px] border border-white/10 md:h-[650px]">
          <Image
            src="https://images.pexels.com/photos/26559578/pexels-photo-26559578/free-photo-of-an-abstract-background-with-purple-and-blue-blocks.jpeg?auto=compress&dpr=1&w=1920"
            alt="3D SaaS infrastructure"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/20" />

          <div className="absolute inset-x-0 bottom-0 p-7 md:p-12">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-300">
              Scalable by architecture
            </p>

            <h2 className="mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">
              Infrastructure that evolves as your SaaS product grows.
            </h2>
          </div>
        </div>
      </section>

      {/* capabilities */}
      <section className="border-y border-white/[0.08] bg-white/[0.012]">
        <div className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
          <div className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
              SaaS capabilities
            </p>

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              Everything required to
              <span className="block text-white/25">
                operate a modern SaaS product.
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative min-h-[340px] overflow-hidden rounded-[30px] border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-8 transition hover:-translate-y-1 hover:border-purple-400/25"
                >
                  <div className="flex justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10">
                      <Icon className="h-5 w-5 text-purple-300" />
                    </div>

                    <span className="text-sm text-white/15">
                      {item.no}
                    </span>
                  </div>

                  <h3 className="mt-20 text-xl font-semibold md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/40">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* multi tenant architecture */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <div className="relative overflow-hidden rounded-[40px] border border-white/[0.08] bg-[#09090D] px-6 py-20 md:px-12">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[150px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <Orbit className="mx-auto h-8 w-8 text-purple-300" />

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              Multi-tenant at the core.
              <span className="block text-white/25">
                Secure at every layer.
              </span>
            </h2>
          </div>

          <div className="relative mx-auto mt-20 max-w-5xl">
            <div className="grid gap-3 md:grid-cols-3">
              {["Customer A", "Customer B", "Customer C"].map(
                (customer) => (
                  <div
                    key={customer}
                    className="rounded-2xl border border-purple-500/20 bg-purple-500/[0.07] p-5 text-center"
                  >
                    <Users className="mx-auto h-5 w-5 text-purple-300" />
                    <p className="mt-3 text-sm">{customer}</p>
                  </div>
                )
              )}
            </div>

            <div className="mx-auto h-14 w-px bg-purple-400/30" />

            <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <Server className="mx-auto h-5 w-5 text-purple-300" />
              <p className="mt-3 font-medium">
                Shared SaaS Application Layer
              </p>
            </div>

            <div className="mx-auto h-14 w-px bg-white/10" />

            <div className="grid gap-3 md:grid-cols-3">
              {[
                ["Database", Database],
                ["Cloud", Cloud],
                ["Security", ShieldCheck],
              ].map(([title, Icon]: any) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/[0.08] bg-black/20 p-6 text-center"
                >
                  <Icon className="mx-auto h-5 w-5 text-purple-300" />
                  <p className="mt-3 text-sm">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* billing section */}
      <section className="border-y border-white/[0.08] bg-[#070707]">
        <div className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-5xl text-center">
            <CreditCard className="mx-auto h-8 w-8 text-purple-300" />

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              Subscription infrastructure
              <span className="block text-white/25">
                built directly into the product.
              </span>
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-3">
            {[
              {
                plan: "Starter",
                price: "$39",
                users: "Small teams",
              },
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
              <div
                key={item.plan}
                className={`rounded-[30px] border p-7 ${
                  index === 1
                    ? "border-purple-400/35 bg-purple-500/[0.08]"
                    : "border-white/[0.08] bg-white/[0.02]"
                }`}
              >
                <p className="text-sm text-white/40">
                  {item.plan}
                </p>

                <p className="mt-5 text-4xl font-semibold">
                  {item.price}
                </p>

                <p className="mt-2 text-xs text-white/25">
                  {item.users}
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    "Subscription management",
                    "Usage tracking",
                    "Billing automation",
                    "Customer portal",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-white/50"
                    >
                      <Check className="h-4 w-4 text-purple-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS use cases */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
            SaaS possibilities
          </p>

          <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
            SaaS for every
            <span className="block text-white/25">
              modern business model.
            </span>
          </h2>
        </div>

        <div className="mx-auto mt-14 flex max-w-5xl flex-wrap justify-center gap-3">
          {solutions.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/[0.08] bg-white/[0.02] px-5 py-3 text-sm text-white/45 transition hover:border-purple-400/25 hover:bg-purple-500/[0.08] hover:text-white"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* security */}
      <section className="border-y border-white/[0.08]">
        <div className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[500px] overflow-hidden rounded-[36px] border border-white/[0.08] bg-gradient-to-br from-[#140D20] to-[#070708] p-9 md:p-12">
              <LockKeyhole className="h-8 w-8 text-purple-300" />

              <h2 className="mt-7 text-3xl font-semibold md:text-5xl">
                SaaS security from day one.
              </h2>

              <p className="mt-6 leading-8 text-white/40">
                Tenant isolation, authentication, permissions and protected
                APIs are engineered into the SaaS architecture.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "Tenant isolation",
                  "Role-based access",
                  "Secure authentication",
                  "Protected APIs",
                  "Sensitive data handling",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/60"
                  >
                    <Check className="h-4 w-4 text-purple-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[500px] overflow-hidden rounded-[36px] border border-white/[0.08] bg-gradient-to-br from-[#10101D] to-[#070708] p-9 md:p-12">
              <Gauge className="h-8 w-8 text-blue-300" />

              <h2 className="mt-7 text-3xl font-semibold md:text-5xl">
                Built for thousands to millions.
              </h2>

              <p className="mt-6 leading-8 text-white/40">
                Your SaaS platform is designed to scale across traffic,
                customers, subscriptions and growing datasets.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-3">
                {[
                  ["Elastic", "Infrastructure"],
                  ["Fast", "Responses"],
                  ["Reliable", "Services"],
                  ["Global", "Delivery"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5"
                  >
                    <p className="text-xl font-semibold">
                      {value}
                    </p>
                    <p className="mt-2 text-xs text-white/30">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* process */}
      <section className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <div className="max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
            SaaS development process
          </p>

          <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
            From product concept
            <span className="block text-white/25">
              to scalable SaaS company.
            </span>
          </h2>
        </div>

        <div className="mt-16">
          {process.map((item) => (
            <div
              key={item.no}
              className="grid gap-4 border-t border-white/[0.08] py-9 md:grid-cols-[90px_1fr_1.4fr] md:gap-12 md:py-11"
            >
              <span className="text-sm text-purple-400">
                {item.no}
              </span>

              <h3 className="text-xl font-semibold md:text-2xl">
                {item.title}
              </h3>

              <p className="max-w-2xl text-sm leading-7 text-white/40 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* technology */}
      <section className="border-y border-white/[0.08] bg-[#070707]">
        <div className="mx-auto max-w-[1450px] px-5 py-28 md:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
              SaaS technology stack
            </p>

            <h2 className="mt-6 text-4xl font-semibold md:text-6xl">
              Modern infrastructure
              <span className="block text-white/25">
                behind modern SaaS products.
              </span>
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {stack.map((item) => (
              <div
                key={item}
                className="flex h-28 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.018] text-sm text-white/50 transition hover:border-purple-400/25 hover:bg-purple-500/[0.07] hover:text-white"
              >
                <Code2 className="mr-2 h-4 w-4 text-purple-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* final CTA */}
      <section className="px-5 py-28 md:px-8 lg:px-12 lg:py-40">
        <div className="relative mx-auto max-w-[1450px] overflow-hidden rounded-[42px] border border-purple-400/15 bg-[#0B0710] px-6 py-20 text-center md:px-12 lg:py-32">
          <div className="absolute left-1/2 top-[-260px] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-purple-700/25 blur-[170px]" />

          <div className="relative mx-auto max-w-5xl">
            <Rocket className="mx-auto h-8 w-8 text-purple-300" />

            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-purple-300">
              Launch with HYI
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              Build a SaaS product
              <span className="block text-white/25">
                people keep paying for.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/40">
              Partner with HYI to transform your SaaS idea into a secure,
              scalable and commercially ready digital product.
            </p>

            <button className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-8 py-4 font-medium">
              Talk to Our SaaS Experts
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}