"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* =========================================================
   DATA
========================================================= */

const features = [
  {
    title: "Continuous Integration",
    description:
      "Automate code integration, validation and testing to identify issues early and keep every release production-ready.",
    image: "/Card-bg-01.webp",
    number: "01",
    tag: "CI Pipeline",
  },
  {
    title: "Continuous Delivery",
    description:
      "Create reliable deployment workflows that move validated builds across environments with speed and confidence.",
    image: "/Card-bg-02.webp",
    number: "02",
    tag: "CD Automation",
  },
  {
    title: "Automated Testing",
    description:
      "Integrate unit, integration, security and regression testing directly into your delivery pipeline.",
    image: "/Card-bg-03.webp",
    number: "03",
    tag: "Quality Gates",
  },
  {
    title: "Infrastructure Automation",
    description:
      "Build repeatable infrastructure workflows that reduce manual configuration and improve deployment consistency.",
    image: "/Card-bg-04.webp",
    number: "04",
    tag: "Infrastructure",
  },
  {
    title: "Release Management",
    description:
      "Coordinate releases with controlled approvals, rollback strategies, environment checks and complete visibility.",
    image: "/Card-bg-05.webp",
    number: "05",
    tag: "Release Control",
  },
  {
    title: "Monitoring & Reliability",
    description:
      "Track application health, pipeline performance and deployment status using continuous monitoring and alerting.",
    image: "/Card-bg-07.webp",
    number: "06",
    tag: "Observability",
  },
];

const pipeline = [
  {
    step: "01",
    title: "Plan",
    text: "Define release objectives, environments and automation strategy.",
  },
  {
    step: "02",
    title: "Code",
    text: "Develop using collaborative workflows and version control.",
  },
  {
    step: "03",
    title: "Build",
    text: "Automatically compile, package and validate every change.",
  },
  {
    step: "04",
    title: "Test",
    text: "Run automated quality and security checks before deployment.",
  },
  {
    step: "05",
    title: "Deploy",
    text: "Release safely across development, staging and production.",
  },
  {
    step: "06",
    title: "Monitor",
    text: "Continuously observe application and infrastructure health.",
  },
];

const tools = [
  "GitHub",
  "GitLab",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "AWS",
  "Azure",
  "Terraform",
  "Node.js",
  "Next.js",
  "SonarQube",
  "Argo CD",
];

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        inline-flex items-center gap-2
        rounded-full
        border border-violet-400/20
        bg-violet-500/10
        px-4 py-2
        text-[11px]
        uppercase
        tracking-[0.22em]
        text-violet-200
        backdrop-blur-xl
      "
    >
      <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_14px_#a78bfa]" />
      {children}
    </div>
  );
}

function PipelineIcon({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        flex h-12 w-12
        items-center justify-center
        rounded-2xl
        border border-white/10
        bg-white/[0.05]
        text-lg
        shadow-[inset_0_1px_0_rgba(255,255,255,.08)]
      "
    >
      {children}
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function DevOpsCICDPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 170]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0]
  );

  return (
    <main className="overflow-hidden bg-[#030305] text-white">
      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        ref={heroRef}
        className="
          relative
          min-h-[92vh]
          overflow-hidden
          border-b border-white/[0.06]
        "
      >
        {/* Background grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.22]
            [background-image:linear-gradient(rgba(139,92,246,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,.16)_1px,transparent_1px)]
            [background-size:80px_80px]
            [mask-image:linear-gradient(to_bottom,black,transparent)]
          "
        />

        {/* Glow */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-40
            top-20
            h-[600px]
            w-[600px]
            rounded-full
            bg-violet-700/20
            blur-[150px]
          "
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-52
            top-[15%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-fuchsia-500/15
            blur-[170px]
          "
        />

        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
          }}
          className="
            relative
            z-10
            mx-auto
            grid
            min-h-[92vh]
            w-full
            max-w-[1400px]
            items-center
            gap-16
            px-6
            py-24
            lg:grid-cols-[1fr_0.95fr]
            lg:px-10
          "
        >
          {/* LEFT */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-[760px]"
          >
            <motion.div variants={fadeUp}>
              <SectionBadge>
                DevOps & CI/CD Engineering
              </SectionBadge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="
                mt-7
                text-[48px]
                font-semibold
                leading-[1.02]
                tracking-[-0.045em]
                sm:text-[62px]
                lg:text-[78px]
              "
            >
              Ship Better
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-white
                  via-violet-200
                  to-fuchsia-300
                  bg-clip-text
                  text-transparent
                "
              >
                Software Faster.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="
                mt-7
                max-w-[680px]
                text-base
                leading-8
                text-white/55
                sm:text-lg
              "
            >
              Build high-performance DevOps and CI/CD
              pipelines that automate development,
              testing, deployment and monitoring —
              helping your teams release reliable
              software at greater speed.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-4
              "
            >
              <Link
                href="/contact"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  border border-violet-400/40
                  bg-violet-600
                  px-7 py-3.5
                  text-sm
                  font-medium
                  shadow-[0_0_40px_rgba(124,58,237,.25)]
                  transition
                  hover:scale-[1.03]
                "
              >
                <span
                  className="
                    absolute inset-0
                    translate-x-[-110%]
                    bg-gradient-to-r
                    from-transparent
                    via-white/20
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-[110%]
                  "
                />

                <span className="relative">
                  Start Your DevOps Journey
                  <span className="ml-2">↗</span>
                </span>
              </Link>

              <a
                href="#services"
                className="
                  rounded-full
                  border border-white/10
                  bg-white/[0.03]
                  px-7 py-3.5
                  text-sm
                  text-white/75
                  backdrop-blur-xl
                  transition
                  hover:border-white/20
                  hover:bg-white/[0.07]
                "
              >
                Explore Solutions ↓
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="
                mt-12
                flex
                flex-wrap
                gap-x-10
                gap-y-5
                border-t
                border-white/[0.07]
                pt-8
              "
            >
              {[
                ["60%", "Faster Releases"],
                ["45%", "Less Downtime"],
                ["99.9%", "Deployment Reliability"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-2xl font-semibold">
                    {value}
                  </div>

                  <div className="mt-1 text-xs text-white/40">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT DEVOPS PIPELINE VISUAL */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              rotateY: -8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 0.25,
            }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                overflow-hidden
                rounded-[34px]
                border border-violet-400/20
                bg-[#090813]/80
                p-6
                shadow-[0_0_120px_rgba(124,58,237,.18)]
                backdrop-blur-2xl
              "
            >
              <Image
                src="/Card-bg-03.webp"
                alt=""
                fill
                priority
                className="object-cover opacity-35"
              />

              <div className="relative z-10">
                {/* Fake window header */}

                <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>

                  <div className="font-mono text-xs text-white/40">
                    deploy-production.yml
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-7 flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-white/35">
                        Production Pipeline
                      </div>

                      <div className="mt-2 text-xl font-medium">
                        HYI Cloud Deployment
                      </div>
                    </div>

                    <div
                      className="
                        rounded-full
                        border border-green-400/20
                        bg-green-400/10
                        px-3 py-1.5
                        text-xs
                        text-green-300
                      "
                    >
                      ● Running
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      ["✓", "Source", "Completed"],
                      ["✓", "Build", "Completed"],
                      ["✓", "Automated Tests", "Completed"],
                      ["◉", "Deploy Production", "Running"],
                      ["○", "Health Check", "Pending"],
                    ].map(
                      ([icon, name, status], index) => (
                        <motion.div
                          key={name}
                          initial={{
                            opacity: 0,
                            x: 30,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay:
                              0.8 + index * 0.18,
                          }}
                          className="
                            flex
                            items-center
                            justify-between
                            rounded-2xl
                            border border-white/[0.07]
                            bg-black/30
                            px-4 py-3.5
                          "
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`
                                flex h-9 w-9
                                items-center justify-center
                                rounded-xl
                                ${
                                  status ===
                                  "Running"
                                    ? "bg-violet-500/20 text-violet-300"
                                    : status ===
                                        "Completed"
                                      ? "bg-green-500/10 text-green-300"
                                      : "bg-white/5 text-white/30"
                                }
                              `}
                            >
                              {icon}
                            </div>

                            <span className="text-sm text-white/80">
                              {name}
                            </span>
                          </div>

                          <span className="text-xs text-white/30">
                            {status}
                          </span>
                        </motion.div>
                      )
                    )}
                  </div>

                  {/* Progress */}

                  <div className="mt-7">
                    <div className="mb-2 flex justify-between text-xs text-white/35">
                      <span>Deployment progress</span>
                      <span>78%</span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "78%" }}
                        transition={{
                          duration: 2.2,
                          delay: 1,
                        }}
                        className="
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          from-violet-600
                          to-fuchsia-400
                          shadow-[0_0_16px_#8b5cf6]
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* floating chips */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                -left-8
                top-[30%]
                hidden
                rounded-2xl
                border border-white/10
                bg-black/80
                px-4 py-3
                text-xs
                shadow-2xl
                backdrop-blur-xl
                xl:block
              "
            >
              <div className="text-green-300">
                ✓ Tests passed
              </div>

              <div className="mt-1 text-white/30">
                247 / 247
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          MARQUEE
      ===================================================== */}

<section className="border-b border-white/[0.06] bg-[#050507] py-7">
  <div className="overflow-hidden">
    <motion.div
      className="flex w-max items-center"
      animate={{
        x: ["0%", "-50%"],
      }}
      transition={{
        duration: 34,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {[...tools, ...tools].map((tool, index) => (
        <div
          key={`${tool}-${index}`}
          className="
            mx-4
            flex
            items-center
            gap-3
            rounded-full
            border
            border-white/[0.07]
            bg-white/[0.025]
            px-6
            py-3
            text-sm
            text-white/55
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

          {tool}
        </div>
      ))}
    </motion.div>
  </div>
</section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="relative px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-[1350px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-[850px] text-center"
          >
            <SectionBadge>
              Modern DevOps Engineering
            </SectionBadge>

            <h2
              className="
                mt-7
                text-4xl
                font-semibold
                tracking-[-0.035em]
                sm:text-5xl
                lg:text-[58px]
              "
            >
              From code commit to production.
              <span className="text-white/35">
                {" "}
                Fully automated.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] text-base leading-8 text-white/45">
              We create scalable CI/CD systems
              designed to reduce repetitive work,
              eliminate deployment bottlenecks and
              give your engineering teams complete
              visibility across the software
              delivery lifecycle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICES CARDS
      ===================================================== */}

      <section
        id="services"
        className="relative px-6 pb-32 lg:px-10"
      >
        <div className="mx-auto max-w-[1350px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className={`
                  group
                  relative
                  min-h-[420px]
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/[0.08]
                  bg-[#07070a]
                  p-7
                  ${
                    index === 0 ||
                    index === 5
                      ? "lg:col-span-2"
                      : ""
                  }
                `}
              >
                <Image
                  src={feature.image}
                  alt=""
                  fill
                  className="
                    object-cover
                    opacity-45
                    transition
                    duration-700
                    group-hover:scale-105
                    group-hover:opacity-60
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-black/20
                    via-[#07070a]/35
                    to-[#07070a]
                  "
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        rounded-full
                        border border-white/10
                        bg-black/20
                        px-3 py-1.5
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-white/50
                      "
                    >
                      {feature.tag}
                    </span>

                    <span className="font-mono text-xs text-white/20">
                      / {feature.number}
                    </span>
                  </div>

                  <div className="mt-auto pt-36">
                    <h3 className="text-2xl font-medium tracking-[-0.025em]">
                      {feature.title}
                    </h3>

                    <p className="mt-4 max-w-[520px] text-sm leading-7 text-white/50">
                      {feature.description}
                    </p>

                    <div
                      className="
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        text-violet-300
                        opacity-60
                        transition
                        group-hover:gap-4
                        group-hover:opacity-100
                      "
                    >
                      Explore capability
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PIPELINE
      ===================================================== */}

      <section
        className="
          relative
          border-y
          border-white/[0.06]
          bg-[#060608]
          px-6
          py-32
          lg:px-10
        "
      >
        <div
          className="
            absolute
            left-1/2 top-0
            h-[400px]
            w-[700px]
            -translate-x-1/2
            bg-violet-600/10
            blur-[140px]
          "
        />

        <div className="relative mx-auto max-w-[1350px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-[720px]"
          >
            <SectionBadge>
              Delivery Workflow
            </SectionBadge>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              One continuous pipeline.
              <span className="text-white/30">
                {" "}
                Zero unnecessary friction.
              </span>
            </h2>
          </motion.div>

          <div className="relative mt-20">
            <div
              className="
                absolute
                left-[24px]
                top-10
                hidden
                h-[calc(100%-80px)]
                w-px
                bg-gradient-to-b
                from-violet-500
                via-violet-500/40
                to-transparent
                md:block
                lg:left-0
                lg:top-[26px]
                lg:h-px
                lg:w-full
                lg:bg-gradient-to-r
              "
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="
                grid
                gap-5
                lg:grid-cols-6
              "
            >
              {pipeline.map((item, index) => (
                <motion.div
                  variants={fadeUp}
                  key={item.title}
                  className="relative"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="
                      relative z-10
                      mb-6
                      flex h-[52px]
                      w-[52px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-violet-400/30
                      bg-[#100d19]
                      text-xs
                      text-violet-300
                      shadow-[0_0_25px_rgba(124,58,237,.2)]
                    "
                  >
                    {item.step}
                  </motion.div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      p-5
                    "
                  >
                    <div className="text-lg font-medium">
                      {item.title}
                    </div>

                    <p className="mt-3 text-sm leading-6 text-white/40">
                      {item.text}
                    </p>
                  </div>

                  {index !== pipeline.length - 1 && (
                    <motion.span
                      animate={{
                        opacity: [0.2, 1, 0.2],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="
                        absolute
                        right-[-13px]
                        top-[21px]
                        z-20
                        hidden
                        text-violet-400
                        lg:block
                      "
                    >
                      →
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LARGE FEATURE / DASHBOARD
      ===================================================== */}

      <section className="px-6 py-32 lg:px-10">
        <div
          className="
            mx-auto
            grid
            max-w-[1350px]
            items-center
            gap-16
            lg:grid-cols-2
          "
        >
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionBadge>
              Intelligent Automation
            </SectionBadge>

            <h2
              className="
                mt-7
                text-4xl
                font-semibold
                tracking-[-0.04em]
                sm:text-5xl
              "
            >
              See every release.
              <br />

              <span className="text-white/30">
                Control every stage.
              </span>
            </h2>

            <p className="mt-6 max-w-[580px] leading-8 text-white/45">
              Track deployments, testing,
              infrastructure health and release
              status through unified DevOps
              workflows. Your team gets complete
              transparency without jumping between
              disconnected tools.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                "Real-time pipeline status",
                "Automated quality gates",
                "Secure deployment strategy",
                "Built-in rollback workflows",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border border-white/[0.07]
                    bg-white/[0.025]
                    px-4 py-3
                    text-sm
                    text-white/60
                  "
                >
                  <span
                    className="
                      flex h-6 w-6
                      items-center justify-center
                      rounded-full
                      bg-violet-500/15
                      text-xs
                      text-violet-300
                    "
                  >
                    ✓
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/[0.08]
              bg-[#08080c]
              p-6
              shadow-[0_40px_100px_rgba(0,0,0,.45)]
            "
          >
            <Image
              src="/Card-bg-08.webp"
              alt=""
              fill
              className="object-cover opacity-45"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/30">
                    Production Overview
                  </div>

                  <h3 className="mt-1 text-lg font-medium">
                    Deployment Analytics
                  </h3>
                </div>

                <div
                  className="
                    rounded-full
                    bg-green-500/10
                    px-3 py-1.5
                    text-xs
                    text-green-300
                  "
                >
                  Systems healthy
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["124", "Deployments"],
                  ["99.8%", "Success"],
                  ["2m 14s", "Avg Build"],
                ].map(([number, title]) => (
                  <div
                    key={title}
                    className="
                      rounded-2xl
                      border border-white/[0.07]
                      bg-black/20
                      p-4
                    "
                  >
                    <div className="text-xl font-semibold">
                      {number}
                    </div>

                    <div className="mt-1 text-[11px] text-white/30">
                      {title}
                    </div>
                  </div>
                ))}
              </div>

              {/* Graph */}

              <div
                className="
                  mt-5
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-black/25
                  p-5
                "
              >
                <div className="mb-8 flex items-center justify-between text-xs">
                  <span className="text-white/45">
                    Deployment frequency
                  </span>

                  <span className="text-green-300">
                    +24.8%
                  </span>
                </div>

                <div className="flex h-[180px] items-end gap-2">
                  {[
                    30, 48, 39, 65, 52, 75, 60, 83,
                    68, 92, 74, 100,
                  ].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{
                        height: `${height}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: i * 0.05,
                      }}
                      className="
                        flex-1
                        rounded-t-md
                        bg-gradient-to-t
                        from-violet-700/30
                        to-violet-400
                        opacity-70
                      "
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="px-6 pb-32 lg:px-10">
        <div className="mx-auto max-w-[1350px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-violet-400/15
              px-7
              py-16
              sm:px-12
              lg:px-16
            "
          >
            <Image
              src="/Card-bg-02.webp"
              alt=""
              fill
              className="object-cover opacity-50"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div
              className="
                relative
                z-10
                grid
                gap-12
                lg:grid-cols-[1fr_1.2fr]
              "
            >
              <div>
                <SectionBadge>
                  Why HYI.AI
                </SectionBadge>

                <h2
                  className="
                    mt-6
                    max-w-[480px]
                    text-4xl
                    font-semibold
                    tracking-[-0.04em]
                    sm:text-5xl
                  "
                >
                  Engineering velocity without
                  compromising stability.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "01",
                    "Ship Faster",
                    "Automated workflows reduce repetitive tasks and accelerate every release.",
                  ],
                  [
                    "02",
                    "Reduce Risk",
                    "Testing and validation gates catch problems before production.",
                  ],
                  [
                    "03",
                    "Scale Confidently",
                    "Standardized pipelines make growth predictable across teams.",
                  ],
                  [
                    "04",
                    "Improve Visibility",
                    "Track the full delivery lifecycle from code to production.",
                  ],
                ].map(([number, title, text]) => (
                  <motion.div
                    key={title}
                    whileHover={{
                      y: -6,
                    }}
                    className="
                      rounded-2xl
                      border
                      border-white/[0.08]
                      bg-black/20
                      p-6
                      backdrop-blur-xl
                    "
                  >
                    <div className="font-mono text-xs text-violet-300">
                      {number}
                    </div>

                    <h3 className="mt-5 text-lg font-medium">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/45">
                      {text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative px-6 pb-28 pt-10 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            relative
            mx-auto
            max-w-[1350px]
            overflow-hidden
            rounded-[40px]
            border
            border-white/[0.08]
            px-6
            py-24
            text-center
            sm:px-12
          "
        >
          <Image
            src="/Card-bg-03.webp"
            alt=""
            fill
            className="object-cover opacity-60"
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-black/25
              via-black/30
              to-black/70
            "
          />

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-[350px]
              w-[700px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-violet-500/15
              blur-[100px]
            "
          />

          <div className="relative z-10">
            <div className="mx-auto mb-6 w-fit">
              <SectionBadge>
                Let's Build
              </SectionBadge>
            </div>

            <h2
              className="
                mx-auto
                max-w-[850px]
                text-4xl
                font-semibold
                tracking-[-0.045em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Ready to transform your
              <br className="hidden sm:block" />

              <span
                className="
                  bg-gradient-to-r
                  from-violet-200
                  to-fuchsia-300
                  bg-clip-text
                  text-transparent
                "
              >
                software delivery?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[650px] leading-7 text-white/50">
              Build faster, release safer and give
              your engineering team a modern DevOps
              foundation designed for scale.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="
                  rounded-full
                  bg-white
                  px-7 py-3.5
                  text-sm
                  font-medium
                  text-black
                  transition
                  hover:scale-105
                "
              >
                Talk to Our Experts →
              </Link>

              <Link
                href="/"
                className="
                  rounded-full
                  border border-white/15
                  bg-white/[0.04]
                  px-7 py-3.5
                  text-sm
                  text-white/70
                  backdrop-blur-xl
                  transition
                  hover:bg-white/[0.08]
                "
              >
                Explore HYI.AI
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

  <Footer/>
    </main>
  );
}