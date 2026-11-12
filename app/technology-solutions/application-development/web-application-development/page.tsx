"use client";

import Image from "next/image";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import mvpAnimation from "@/lotties/mvp-02.json";
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
import Lottie from "lottie-react";
import EngineeringArchitectureAnimation from "@/components/EngineeringArchitectureAnimation";
import { motion } from "framer-motion";

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


const technologyLogos: Record<string, { slug: string; color: string }> = {
  React: { slug: "react", color: "61DAFB" },
  "Next.js": { slug: "nextdotjs", color: "FFFFFF" },
  TypeScript: { slug: "typescript", color: "3178C6" },
  "Node.js": { slug: "nodedotjs", color: "5FA04E" },
  Express: { slug: "express", color: "FFFFFF" },
  MongoDB: { slug: "mongodb", color: "47A248" },
  PostgreSQL: { slug: "postgresql", color: "4169E1" },
  Supabase: { slug: "supabase", color: "3FCF8E" },
  Redis: { slug: "redis", color: "FF4438" },
  AWS: { slug: "amazonaws", color: "FF9900" },
  Docker: { slug: "docker", color: "2496ED" },
  "REST APIs": { slug: "postman", color: "FF6C37" },
};



export default function WebApplicationDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden max-w-[1400px] mx-auto w-full">
      <Header />

      {/* HERO */}
      <section className="relative min-h-[32vh] flex items-center">
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

        <div className="relative z-10 w-full  mx-auto px-5 md:px-8 lg:px-12  mt-30  grid lg:grid-cols-2 gap-5 items-center">
          <div>
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 mb-7">
              <Sparkles className="w-4 h-4" />
              Web Application Development
            </div> */}

            <h1 className="text-4xl md:text-5xl xl:text-[52px] hyi-white hyi-h1">
              Engineering
              <span className="block hyi-blue">
                powerful web
              </span>
              experiences.
            </h1>

            <p className="mt-4 max-w-2xl hyi-p">
              HYI builds secure, scalable and high-performance web applications
              designed for modern businesses, enterprise operations and
              ambitious digital products.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 px-4 py-2 font-medium  max-md:text-sm">
                Start Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>

              <button className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-white/80 hover:bg-white/[0.07] transition max-md:px-4 max-md:py-2 max-md:text-sm">
                Explore Our Capabilities
              </button>
            </div>

   
          </div>

  
<div className="relative">
  {/* Purple ambient glow */}
  <div className="absolute inset-10 rounded-full bg-purple-600/20 blur-[100px]" />

  {/* macOS browser window */}
  <div className="relative overflow-hidden rounded-[28px] border border-white/[0.13] bg-[#08080B] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.65)]">

    {/* macOS title bar */}
    <div className="flex h-[48px] items-center gap-2 border-b border-white/[0.08] px-3">

      {/* Traffic light buttons */}
      <div className="flex shrink-0 items-center gap-[9px]">
        <span className="h-[13px] w-[13px] rounded-full bg-[#FF5F57] shadow-[0_0_8px_rgba(255,95,87,0.25)]" />
        <span className="h-[13px] w-[13px] rounded-full bg-[#FEBC2E] shadow-[0_0_8px_rgba(254,188,46,0.2)]" />
        <span className="h-[13px] w-[13px] rounded-full bg-[#28C840] shadow-[0_0_8px_rgba(40,200,64,0.2)]" />
      </div>

      {/* Address / browser bar */}
      <div className="ml-5 flex h-[29px] flex-1 items-center justify-center rounded-full border border-white/[0.04] bg-white/[0.045] px-4">
        <span className="text-[10px] tracking-wide text-white/30">
          hyi.ai / engineering / web-development
        </span>
      </div>

      {/* Window menu icon */}
      <div className="ml-2 flex items-center gap-1">
        <span className="h-1 w-1 rounded-full bg-white/20" />
        <span className="h-1 w-1 rounded-full bg-white/20" />
        <span className="h-1 w-1 rounded-full bg-white/20" />
      </div>
    </div>

    {/* Lottie display screen */}
    <div className="relative mt-3 min-h-[410px] overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#030305]">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(91,33,182,0.12),transparent_70%)]" />

      {/* Lottie */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Lottie
          animationData={mvpAnimation}
          loop
          autoplay
          rendererSettings={{
            preserveAspectRatio: "xMidYMid meet",
          }}
          className="h-full w-full"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Optional subtle bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  </div>
</div>

        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 py-10">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-44">
          <div>
            <p className=" hyi-blue font-bold text-2xl">
              What We Build
            </p>

            <h2 className="mt-5 text-3xl md:text-4xl lg:text-4xl hyi-h1 hyi-white leading-tight">
              Web applications that become the <br/>
              <span className="hyi-blue"> engine of your business.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="hyi-p ">
              Modern businesses require much more than an attractive website.
              They need connected systems capable of handling users, workflows,
              data, automation, payments, analytics and complex business
              operations.
            </p>

            <p className="mt-2 hyi-p ">
              HYI combines product thinking, frontend engineering, backend
              architecture, cloud infrastructure and user-centered design to
              build complete web applications from one unified engineering
              ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="  bg-white/[0.015]">
        <div className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 py-10">
          <div className=" relative justify-end text-center items-center">
            <p className="text-2xl font-bold hyi-blue">
              End-to-end development
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl lg:text-4xl hyi-h1 hyi-white leading-tight">
              Complete web Application <br/> <span className="hyi-blue">Engineering.</span>
            </h2>
          </div>

          <div className="mt-5 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group min-h-[200px] rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 md:p-8 hover:border-purple-500/40 transition duration-300"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-purple-200">
                    {service.icon}
                  </div>

                
                </div>

                <h3 className="mt-5 hyi-white text-xl md:text-2xl font-bold group-hover:text-purple-400 transition duration-300">
                  {service.title}
                </h3>

                <p className="mt-2 hyi-p">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LARGE VISUAL SECTION */}
      <section className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 py-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative aspect-[4/3] rounded-[36px] overflow-hidden border border-white/10 bg-[#090810]">

  {/* Background glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(112,70,230,0.18),transparent_65%)]" />

  {/* Animated architecture */}
  <div className="absolute inset-0 p-5 md:p-8">
    <EngineeringArchitectureAnimation />
  </div>

  {/* Bottom gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />

  {/* Content */}
  <div className="absolute bottom-7 left-7 right-7 z-10">
    <p className="text-2xl font-bold hyi-blue">
      Engineering Architecture
    </p>

    <h3 className="mt-3 text-3xl hyi-white font-bold max-w-lg">
      Designed for today. Architected for tomorrow.
    </h3>
  </div>
</div>


          <div>   
         <h2 className="mt-5 text-2xl  lg:text-3xl font-bold hyi-white ">
              Built beyond the frontend.
            </h2>

            <p className="mt-3 text-lg hyi-white ">
              A serious web application requires an engineering foundation that
              can evolve without becoming fragile.<br/> HYI focuses on modular
              systems, reusable components, API-first architecture and
              production-grade infrastructure.
            </p>

            <div className="mt-3 space-y-4 grid-cols-2 grid">
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
      <section className="relative py-10 overflow-hidden">
       

        <div className="relative max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-2xl font-bold hyi-blue">
              Application capabilities
            </p>

            <h2 className="mt-3 text-2xl md:text-3xl font-bold hyi-white" >
              One engineering team.
              <span className="block text-white/35 mt-2">
                Endless product possibilities.
              </span>
            </h2>
          </div>

      
<div className="mt-8 flex flex-wrap justify-center gap-3">
  {capabilities.map((item, index) => (
    <motion.div
      key={item}
      initial={{ opacity: 0, y: 25, scale: 0.85 }}
      animate={{
        opacity: [0, 1, 1, 1],
        y: [25, 0, -5, 0],
        scale: [0.85, 1, 1.03, 1],
      }}
      transition={{
        opacity: {
          duration: 0.7,
          delay: index * 0.12,
        },
        y: {
          duration: 3 + (index % 3) * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.18,
        },
        scale: {
          duration: 3 + (index % 2) * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.18,
        },
      }}
      whileHover={{
        scale: 1.12,
        y: -8,
        borderColor: "rgba(168, 85, 247, 0.8)",
        backgroundColor: "rgba(112, 70, 230, 0.15)",
        boxShadow: "0 0 25px rgba(139, 92, 246, 0.25)",
        transition: { duration: 0.25 },
      }}
      className="relative group cursor-pointer overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-white/65 hover:text-white backdrop-blur-md transition-colors"
    >
      {/* Animated glow */}
      <motion.span
        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/0 via-purple-500 to-blue-500/0"
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: index * 0.25,
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-white/90"
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.3, 0.8],
            boxShadow: [
              "0 0 0px rgba(168,85,247,0)",
              "0 0 10px rgba(168,85,247,0.9)",
              "0 0 0px rgba(168,85,247,0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.15,
          }}
        />

        <span className="text-sm  tracking-wide hyi-white font-bold">
          {item}
        </span>
      </span>
    </motion.div>
  ))}
</div>

        </div>
      </section>

      {/* TECH STACK */}
      <section className="">
        <div className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 py-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="hyi-blue font-bold text-2xl">
                Technology Stack
              </p>

              <h2 className="mt-3 text-2xl md:text-4xl font-bold">
                Modern technology.
                <span className="block">
                  Selected for your product.
                </span>
              </h2>

              <p className="mt-3 max-w-xl hyi-p">
                We choose technologies according to product requirements,
                performance targets, maintainability and future scalability —
                not because of trends.
              </p>
            </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
  {technologies.map((technology, index) => {
    const logo = technologyLogos[technology];

    return (
      <motion.div
        key={technology}
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: index * 0.08,
          ease: "easeOut",
        }}
        animate={{
          y: [0, -5, 0],
        }}
        className="group relative"
      >
        <motion.div
          whileHover={{
            scale: 1.06,
            y: -8,
            transition: { duration: 0.3 },
          }}
          className="relative h-28 sm:h-32 rounded-2xl border border-white/[0.08] bg-[#0C0B12] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-purple-500/40 group-hover:bg-[#12101C] group-hover:shadow-[0_0_35px_rgba(139,92,246,0.13)]"
        >
          {/* Background glow */}
          <div className="absolute w-24 h-24 bg-purple-600/0 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all duration-700" />

          {/* Top shine */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Animated orbit glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/[0.07] to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.2,
            }}
          />

          {/* Original technology logo */}
        {technology === "AWS" ? (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
    alt="AWS logo"
    title="AWS"
    loading="lazy"
    className="relative z-10 w-14 h-14 object-contain"
  />
) : logo ? (
  <motion.img
    src={`https://cdn.simpleicons.org/${logo.slug}/${logo.color}`}
    alt={`${technology} logo`}
    title={technology}
    loading="lazy"
    whileHover={{ scale: 1.2, rotate: 4 }}
    className="relative z-10 w-11 h-11 sm:w-14 sm:h-14 object-contain"
  />
) : (
  <span className="relative z-10 text-xs text-white/50">
    {technology}
  </span>
)}

          {/* Bottom indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-purple-500 group-hover:w-1/2 transition-all duration-500" />

          {/* Corner glow */}
          <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-purple-400/30 group-hover:bg-purple-400 group-hover:shadow-[0_0_10px_#A855F7] transition-all" />
        </motion.div>
      </motion.div>
    );
  })}
</div>
          </div>
        </div>
      </section>

      {/* WHY HYI */}
      <section className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 py-10">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-2xl font-bold hyi-blue">
            Why HYI
          </p>
          <h2 className="mt-3 text-2xl md:text-4xl hyi-white font-bold">
            Engineering focused on business outcomes.
          </h2>
        </div>

        <div className="mt-5 grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
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
              <div className="text-white-400">{item.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 hyi-p leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className=" bg-[#080808]">
        <div className="max-w-[1450px] mx-auto px-5 md:px-8 lg:px-12 py-">
          <div className="max-w-4xl">
            <p className="text-2xl font-bold hyi-blue">
              Our process
            </p>
            <h2 className="mt-3 text-2xl md:text-4xl hyi-white font-bold">
              From idea to production.
            </h2>
          </div>

          <div className="mt-5">
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