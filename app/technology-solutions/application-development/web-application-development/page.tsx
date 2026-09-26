import Image from "next/image";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Gauge,
  Globe2,
  Layers3,
  LockKeyhole,
  MonitorSmartphone,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import TalkToExpertSection from "@/components/section/integrated-AI/talkToExpertSection";

const services = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Custom Web Application Development",
    description:
      "Business-specific web applications engineered around your workflows, users, integrations, and long-term product roadmap.",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6" />,
    title: "Responsive Frontend Engineering",
    description:
      "High-performance interfaces built for desktop, tablet and mobile with modern component-driven architecture.",
  },
  {
    icon: <ServerCog className="w-6 h-6" />,
    title: "Backend & API Engineering",
    description:
      "Secure backend systems, REST APIs, authentication, business logic, integrations and scalable server architecture.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Database Architecture",
    description:
      "Reliable relational and NoSQL database architecture designed for scale, performance and maintainability.",
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Workflow Automation",
    description:
      "Automate repetitive operations, approvals, notifications, reporting and data movement across your ecosystem.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI-Powered Web Applications",
    description:
      "Integrate AI assistants, recommendations, intelligent search, automation and custom AI workflows into your product.",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "Redis",
  "AWS",
  "Docker",
  "REST APIs",
];

const process = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We define business requirements, users, system goals, technical constraints and product priorities.",
  },
  {
    number: "02",
    title: "UX & Architecture",
    description:
      "We design application flows, information architecture, frontend structure, database models and backend architecture.",
  },
  {
    number: "03",
    title: "UI Engineering",
    description:
      "Our team transforms approved designs into pixel-perfect, responsive and interaction-rich interfaces.",
  },
  {
    number: "04",
    title: "Backend Development",
    description:
      "APIs, authentication, databases, integrations and business logic are implemented with secure development practices.",
  },
  {
    number: "05",
    title: "Quality Assurance",
    description:
      "Applications are tested across devices, browsers, workflows, edge cases, performance and security scenarios.",
  },
  {
    number: "06",
    title: "Deployment & Scale",
    description:
      "We deploy, monitor and continuously improve your application as your users, features and infrastructure grow.",
  },
];

const capabilities = [
  "SaaS Platforms",
  "Enterprise Portals",
  "ERP & CRM Systems",
  "Marketplace Platforms",
  "Customer Dashboards",
  "Admin Panels",
  "Analytics Platforms",
  "FinTech Applications",
  "Healthcare Platforms",
  "AI-Enabled Products",
  "Internal Business Tools",
  "Booking & Management Systems",
];

export default function WebApplicationDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center border-b border-white/10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[650px] h-[650px] rounded-full bg-purple-700/20 blur-[160px]" />
          <div className="absolute bottom-[-200px] left-[-100px] w-[650px] h-[650px] rounded-full bg-fuchsia-700/10 blur-[180px]" />

          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 mb-7">
              <Sparkles className="w-4 h-4" />
              Web Application Development
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-[82px] font-semibold tracking-tight leading-[0.98]">
              Engineering
              <span className="block bg-gradient-to-r from-[#8B5CF6] via-[#C084FC] to-[#EC4899] bg-clip-text text-transparent">
                powerful web
              </span>
              experiences.
            </h1>

            <p className="mt-8 max-w-2xl text-base md:text-lg lg:text-xl text-white/60 leading-8">
              HYI builds secure, scalable and high-performance web applications
              designed for modern businesses, enterprise operations and
              ambitious digital products.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-7 py-4 font-medium">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>

              <button className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-white/80 hover:bg-white/[0.07] transition">
                Explore Our Capabilities
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 max-w-xl gap-6 border-t border-white/10 pt-7">
              <div>
                <div className="text-2xl md:text-3xl font-semibold">High</div>
                <div className="text-xs md:text-sm text-white/40 mt-1">
                  Scalability
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-semibold">Secure</div>
                <div className="text-xs md:text-sm text-white/40 mt-1">
                  Architecture
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-semibold">24×7</div>
                <div className="text-xs md:text-sm text-white/40 mt-1">
                  Digital Access
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-10 bg-purple-600/20 blur-[100px] rounded-full" />

            <div className="relative rounded-[32px] border border-white/10 bg-[#0D0D12]/90 p-3 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-white/20" />
                <span className="w-3 h-3 rounded-full bg-white/20" />
                <span className="w-3 h-3 rounded-full bg-white/20" />
                <div className="ml-5 h-7 flex-1 rounded-full bg-white/[0.04]" />
              </div>

              <div className="relative min-h-[510px] rounded-[24px] overflow-hidden bg-black">
                <Image
                  src="https://images.pexels.com/photos/31622908/pexels-photo-31622908.jpeg"
                  alt="Futuristic 3D web technology visual"
                  fill
                  priority
                  className="object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-purple-300">
                        HYI Engineering
                      </p>
                      <h3 className="text-xl font-semibold mt-2">
                        Future-ready digital products.
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-purple-400/30 bg-purple-500/20 flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-purple-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-8 top-20 hidden xl:block rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl p-4 shadow-xl">
              <Gauge className="w-6 h-6 text-purple-400 mb-2" />
              <p className="font-medium">High Performance</p>
              <p className="text-xs text-white/40 mt-1">Built for scale</p>
            </div>

            <div className="absolute -right-8 bottom-16 hidden xl:block rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl p-4 shadow-xl">
              <ShieldCheck className="w-6 h-6 text-purple-400 mb-2" />
              <p className="font-medium">Secure by Design</p>
              <p className="text-xs text-white/40 mt-1">
                Production-grade systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 py-24 lg:py-36">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24">
          <div>
            <p className="text-purple-400 uppercase tracking-[0.25em] text-sm">
              What We Build
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Web applications that become the
              <span className="text-white/35"> engine of your business.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg md:text-xl text-white/60 leading-9">
              Modern businesses require much more than an attractive website.
              They need connected systems capable of handling users, workflows,
              data, automation, payments, analytics and complex business
              operations.
            </p>

            <p className="mt-6 text-lg text-white/50 leading-8">
              HYI combines product thinking, frontend engineering, backend
              architecture, cloud infrastructure and user-centered design to
              build complete web applications from one unified engineering
              ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
              End-to-end development
            </p>
            <h2 className="mt-5 text-4xl md:text-6xl font-semibold">
              Complete web application engineering.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group min-h-[300px] rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 md:p-8 hover:border-purple-500/40 transition duration-300"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-300">
                    {service.icon}
                  </div>

                  <span className="text-sm text-white/20">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-10 text-xl md:text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 text-white/45 leading-7">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LARGE VISUAL SECTION */}
      <section className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-[36px] overflow-hidden border border-white/10">
            <Image
              src="https://images.pexels.com/photos/29450012/pexels-photo-29450012.jpeg"
              alt="3D digital technology structure"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 right-7">
              <p className="text-sm text-purple-300 uppercase tracking-[0.2em]">
                Engineering Architecture
              </p>
              <h3 className="mt-3 text-3xl font-semibold max-w-lg">
                Designed for today. Architected for tomorrow.
              </h3>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
              Modern architecture
            </p>

            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Built beyond the frontend.
            </h2>

            <p className="mt-7 text-lg text-white/55 leading-8">
              A serious web application requires an engineering foundation that
              can evolve without becoming fragile. HYI focuses on modular
              systems, reusable components, API-first architecture and
              production-grade infrastructure.
            </p>

            <div className="mt-9 space-y-4">
              {[
                "Modular frontend architecture",
                "Secure authentication & authorization",
                "API-first backend development",
                "Scalable cloud infrastructure",
                "Database optimization",
                "Monitoring and performance engineering",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-center">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                  <span className="text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-purple-950/20 to-transparent" />

        <div className="relative max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
              Application capabilities
            </p>

            <h2 className="mt-5 text-4xl md:text-6xl font-semibold">
              One engineering team.
              <span className="block text-white/35 mt-2">
                Endless product possibilities.
              </span>
            </h2>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {capabilities.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-white/65 hover:border-purple-500/40 hover:text-white transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="border-y border-white/10">
        <div className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-purple-400 uppercase tracking-[0.25em] text-sm">
                Technology Stack
              </p>

              <h2 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight">
                Modern technology.
                <span className="block text-white/35">
                  Selected for your product.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-white/50 text-lg leading-8">
                We choose technologies according to product requirements,
                performance targets, maintainability and future scalability —
                not because of trends.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="h-24 rounded-2xl border border-white/10 bg-white/[0.025] flex items-center justify-center font-medium text-white/70 hover:bg-purple-500/10 hover:border-purple-500/30 transition"
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY HYI */}
      <section className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 py-24 lg:py-36">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
            Why HYI
          </p>
          <h2 className="mt-5 text-4xl md:text-6xl font-semibold">
            Engineering focused on business outcomes.
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {[
            {
              icon: <Layers3 />,
              title: "Scalable by Design",
              text: "Architecture created to handle evolving products, teams and user volumes.",
            },
            {
              icon: <LockKeyhole />,
              title: "Security First",
              text: "Security is considered throughout architecture, authentication, APIs and data handling.",
            },
            {
              icon: <Zap />,
              title: "Performance Driven",
              text: "Fast frontend experiences and optimized backend systems built for real usage.",
            },
            {
              icon: <Globe2 />,
              title: "Built for Global Users",
              text: "Responsive, accessible and infrastructure-ready for global digital products.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[26px] border border-white/10 p-7 bg-white/[0.02]"
            >
              <div className="text-purple-400">{item.icon}</div>
              <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-white/45 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="border-y border-white/10 bg-[#080808]">
        <div className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 py-24 lg:py-36">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
              Our process
            </p>
            <h2 className="mt-5 text-4xl md:text-6xl font-semibold">
              From idea to production.
            </h2>
          </div>

          <div className="mt-16">
            {process.map((step) => (
              <div
                key={step.number}
                className="grid md:grid-cols-[120px_1fr_1.3fr] gap-5 md:gap-10 border-t border-white/10 py-9"
              >
                <span className="text-purple-400 font-medium">
                  {step.number}
                </span>

                <h3 className="text-xl md:text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="text-white/45 leading-7">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY / PERFORMANCE */}
      <section className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 py-24 lg:py-36">
        <div className="rounded-[40px] border border-purple-500/20 overflow-hidden bg-gradient-to-br from-purple-900/20 via-[#090909] to-black">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <p className="text-sm uppercase tracking-[0.25em] text-purple-400">
                Production Engineering
              </p>

              <h2 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
                Security, performance and reliability are not optional.
              </h2>

              <p className="mt-7 text-white/50 leading-8">
                Every serious application eventually faces real-world scale,
                real users and real operational pressure. Our engineering
                approach prepares applications for those moments from the
                beginning.
              </p>

              <div className="mt-9 grid sm:grid-cols-2 gap-4">
                {[
                  "Authentication",
                  "Role-based access",
                  "API security",
                  "Caching",
                  "Database indexing",
                  "Performance monitoring",
                  "Error handling",
                  "Cloud deployment",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white/60"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[500px]">
              <Image
                src="https://images.pexels.com/photos/25630341/pexels-photo-25630341.jpeg"
                alt="Futuristic digital engineering"
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#100915] via-transparent to-transparent lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      {/* <section className="px-5 md:px-8 lg:px-12 pb-24 lg:pb-36">
        <div className="relative max-w-[1450px] mx-auto rounded-[40px] overflow-hidden border border-white/10 bg-[#0B0710] px-6 md:px-12 lg:px-20 py-20 lg:py-28 text-center">
          <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-purple-600/25 blur-[150px]" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-purple-300 uppercase tracking-[0.25em] text-sm">
              Build with HYI
            </p>

            <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
              Turn your web application
              <span className="block text-white/35">
                into a competitive advantage.
              </span>
            </h2>

            <p className="mt-7 text-white/50 max-w-2xl mx-auto leading-8">
              Whether you are creating a new digital product or rebuilding an
              existing platform, HYI can help engineer the technology behind
              your next stage of growth.
            </p>

            <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-8 py-4 font-medium">
              Talk to Our Experts
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section> */}
        <TalkToExpertSection />
      <Footer />
    </main>
  );
}