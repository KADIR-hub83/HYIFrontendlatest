"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useRef } from "react";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
const services = [
  {
    title: "Corrective Maintenance",
    text: "Resolve defects, bugs, and application issues quickly to reduce downtime and keep your business moving.",
    image: "/Card-bg-01.webp",
  },
  {
    title: "Adaptive Maintenance",
    text: "Keep your applications compatible with evolving platforms, technologies, and business requirements.",
    image: "/Card-bg-02.webp",
  },
  {
    title: "Preventive Maintenance",
    text: "Identify and remove potential issues before they create performance, security, or reliability problems.",
    image: "/Card-bg-03.webp",
  },
  {
    title: "Performance Optimization",
    text: "Improve speed, scalability, responsiveness, and overall efficiency across your application stack.",
    image: "/Card-bg-04.webp",
  },
  {
    title: "Security Updates",
    text: "Strengthen applications with timely patches, updates, checks, and maintenance workflows.",
    image: "/Card-bg-05.webp",
  },
  {
    title: "Ongoing Support",
    text: "Get dependable support for monitoring, maintenance, improvements, and long-term application stability.",
    image: "/Card-bg-07.webp",
  },
];

const process = [
  {
    number: "01",
    title: "Monitor",
    text: "Continuously track application health, errors, and performance.",
  },
  {
    number: "02",
    title: "Identify",
    text: "Analyze issues and determine the source of instability.",
  },
  {
    number: "03",
    title: "Resolve",
    text: "Fix bugs and failures with minimum disruption.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "Improve speed, reliability, and maintainability.",
  },
  {
    number: "05",
    title: "Support",
    text: "Provide ongoing assistance and proactive maintenance.",
  },
];

const benefits = [
  {
    title: "Reduced Downtime",
    text: "Keep your applications available and reliable with proactive issue handling.",
  },
  {
    title: "Lower Maintenance Cost",
    text: "Reduce operational effort through structured support and efficient workflows.",
  },
  {
    title: "Improved Security",
    text: "Keep your application protected with regular updates and maintenance.",
  },
  {
    title: "Scalable Support",
    text: "Support models that grow with your users, workloads, and business.",
  },
];

const technologies = [
  "AWS",
  "Azure",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "GitHub",
  "GitLab",
  "Jira",
  "Datadog",
  "New Relic",
  "ServiceNow",
];

export default function ApplicationMaintenanceSupportPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 120]
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0]
  );

  return (
    <main className="overflow-hidden bg-[#030303] text-white">

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] px-6 py-24 lg:px-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(110,60,255,0.18),transparent_40%)]" />

        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
          }}
          className="relative z-10 mx-auto flex min-h-[75vh] max-w-[1350px] flex-col items-center justify-center text-center"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-[980px]"
          >
            <motion.div variants={fadeUp}>
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-violet-200">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                Application Maintenance & Support
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-7 text-[48px] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[64px] lg:text-[86px]"
            >
              Keep Your Applications
              <br />

              <span className="bg-gradient-to-r from-white via-violet-200 to-fuchsia-300 bg-clip-text text-transparent">
                Running At Their Best
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-7 max-w-[760px] text-base leading-8 text-white/50 sm:text-lg"
            >
              Proactive maintenance, continuous monitoring,
              performance optimization, security updates,
              and reliable application support designed to
              keep your systems stable and future-ready.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:scale-105"
              >
                Get Support
              </Link>

              <a
                href="#services"
                className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm text-white/70 transition hover:bg-white/[0.07]"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>

          {/* HERO VISUAL STRIP */}

          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="mt-16 grid w-full max-w-[1180px] gap-4 md:grid-cols-3"
          >
            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-6 text-left">
              <div className="text-xs uppercase tracking-[0.18em] text-white/30">
                Uptime
              </div>

              <div className="mt-3 text-4xl font-semibold">
                99.9%
              </div>

              <div className="mt-2 text-sm text-white/40">
                Stable application availability
              </div>
            </div>

            <div className="relative min-h-[220px] overflow-hidden rounded-[28px] border border-white/[0.08]">
              <Image
                src="/Card-bg-03.webp"
                alt="Application support"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-6 text-left">
              <div className="text-xs uppercase tracking-[0.18em] text-white/30">
                Support
              </div>

              <div className="mt-3 text-4xl font-semibold">
                24/7
              </div>

              <div className="mt-2 text-sm text-white/40">
                Continuous maintenance coverage
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-[1350px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-[850px] text-center"
          >
            <div className="text-xs uppercase tracking-[0.22em] text-violet-300">
              Our Capabilities
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Complete support for every stage
              <span className="text-white/30">
                {" "}
                of your application lifecycle.
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="
  mt-16
  grid
  gap-5
  md:grid-cols-2
  lg:grid-cols-3
  auto-rows-[430px]
"
          >
     {services.map((service, index) => (
  <motion.article
    key={service.title}
    variants={fadeUp}
    whileHover={{
      y: -8,
      scale: 1.01,
    }}
    transition={{
      duration: 0.3,
    }}
    className={`
      group
      relative
      min-h-[430px]
      overflow-hidden
      rounded-[30px]
      border
      border-white/[0.08]
      bg-[#08080a]
      ${
        index === 0 || index === 5
          ? "lg:col-span-2"
          : ""
      }
    `}
  >
    {/* ORIGINAL PUBLIC IMAGE */}
    <Image
      src={service.image}
      alt={service.title}
      fill
      className="
        object-cover
        transition-transform
        duration-700
        group-hover:scale-[1.03]
      "
    />

    {/* TEXT DIRECTLY ON CARD */}
    <div
      className="
        absolute
        inset-0
        z-10
        flex
        flex-col
        justify-between
        p-7
      "
    >
      <div className="flex items-center justify-between">
        <span
          className="
            rounded-full
            border
            border-white/10
            bg-black/20
            px-3
            py-1.5
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-white/60
            backdrop-blur-sm
          "
        >
          Service {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div
        className="
          max-w-[520px]
          rounded-[22px]
          border
          border-white/[0.08]
          bg-black/25
          p-5
          backdrop-blur-[3px]
        "
      >
        <h3
          className="
            text-2xl
            font-semibold
            tracking-[-0.03em]
            text-white
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-3
            text-sm
            leading-7
            text-white/75
          "
        >
          {service.text}
        </p>

        <div
          className="
            mt-5
            flex
            items-center
            gap-2
            text-sm
            text-violet-200
            transition-all
            duration-300
            group-hover:gap-4
          "
        >
          Learn More
          <span>-&gt;</span>
        </div>
      </div>
    </div>
  </motion.article>
))}
          </motion.div>
        </div>
      </section>

      {/* SUPPORT PROCESS */}
      <section className="border-y border-white/[0.06] bg-[#060607] px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-[1350px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-xs uppercase tracking-[0.22em] text-violet-300">
              Support Process
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              A structured approach to
              <span className="text-white/30">
                {" "}
                long-term reliability.
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mt-16 grid gap-4 md:grid-cols-5"
          >
            {process.map((item, index) => (
              <motion.div
                variants={fadeUp}
                key={item.title}
                className="relative rounded-[24px] border border-white/[0.07] bg-white/[0.025] p-6"
              >
                <div className="text-xs font-mono text-violet-300">
                  {item.number}
                </div>

                <h3 className="mt-8 text-xl font-medium">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {item.text}
                </p>

                {index !== process.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden text-violet-400/60 md:block">
                    →
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BENTO SUPPORT EXPERIENCE */}
      <section className="px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-[1350px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            className="grid gap-5 lg:grid-cols-12"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-8 lg:col-span-5"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-violet-300">
                Always Available
              </div>

              <h3 className="mt-5 text-3xl font-medium tracking-[-0.03em]">
                Continuous support without
                unnecessary downtime.
              </h3>

              <p className="mt-5 leading-7 text-white/45">
                Our maintenance approach combines monitoring,
                fixes, upgrades, and optimization to keep your
                systems reliable across changing business needs.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative min-h-[330px] overflow-hidden rounded-[30px] border border-white/[0.08] lg:col-span-7"
            >
              <Image
                src="/Card-bg-08.webp"
                alt="Support dashboard"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative min-h-[280px] overflow-hidden rounded-[30px] border border-white/[0.08] lg:col-span-4"
            >
              <Image
                src="/Card-bg-04.webp"
                alt="Maintenance service"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-8 lg:col-span-4"
            >
              <div className="text-4xl font-semibold">
                Faster
              </div>

              <div className="mt-2 text-sm text-white/40">
                issue identification and resolution
              </div>

              <div className="my-8 h-px bg-white/[0.06]" />

              <div className="text-4xl font-semibold">
                Safer
              </div>

              <div className="mt-2 text-sm text-white/40">
                updates and controlled releases
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative min-h-[280px] overflow-hidden rounded-[30px] border border-white/[0.08] lg:col-span-4"
            >
              <Image
                src="/Card-bg-05.webp"
                alt="Security maintenance"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 pb-28 lg:px-10">
        <div className="mx-auto max-w-[1350px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-xs uppercase tracking-[0.22em] text-violet-300">
              Why HYI.AI
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Reliable maintenance that supports
              <span className="text-white/30">
                {" "}
                long-term growth.
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                }}
                className="rounded-[24px] border border-white/[0.07] bg-white/[0.025] p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-xs text-violet-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-6 text-lg font-medium">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGIES MARQUEE */}
      <section className="border-y border-white/[0.06] py-8">
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max items-center"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...technologies, ...technologies].map(
              (tool, index) => (
                <div
                  key={`${tool}-${index}`}
                  className="mx-3 rounded-full border border-white/[0.07] bg-white/[0.025] px-6 py-3 text-sm text-white/55"
                >
                  {tool}
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-28 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-[1350px] overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#070708] p-8 sm:p-12 lg:p-16"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="text-xs uppercase tracking-[0.2em] text-violet-300">
                Application Care
              </div>

              <h2 className="mt-5 max-w-[800px] text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                Keep every release stable, secure,
                and ready for what comes next.
              </h2>

              <p className="mt-6 max-w-[680px] leading-7 text-white/45">
                Partner with HYI.AI for proactive application
                maintenance, reliable support, and continuous
                performance improvement.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:scale-105"
                >
                  Talk To Our Experts
                </Link>
              </div>
            </div>

            <div className="relative min-h-[260px] overflow-hidden rounded-[26px] border border-white/[0.08]">
              <Image
                src="/Card-bg-02.webp"
                alt="Application maintenance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}