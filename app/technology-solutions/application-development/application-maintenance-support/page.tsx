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
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
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

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white max-w-[1350px] mx-auto">
      <Header />

      {/* HERO */}
      <section
        ref={heroRef}
        className="relative  overflow-hidden px-5 pt-10 md:px-8 lg:px-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(110,60,255,0.18),transparent_90%)]" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 mx-auto flex pt-20  max-w-[1350px] flex-col items-center justify-center text-center"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="w-full max-w-[980px]"
          >
       

            <motion.h1
              variants={fadeUp}
              className="hyi-h1 hyi-white mt-7"
            >
              Keep Your Applications
              <br />
              <span className="hyi-blue">Running At Their Best</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="hyi-p mx-auto mt-2 max-w-[760px]"
            >
              Proactive maintenance, continuous monitoring, performance
              optimization, security updates, and reliable application support
              designed to keep your systems stable and future-ready.
            </motion.p>

        
          </motion.div>


        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-5  py-5 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1350px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-[900px] text-center"
          >
       

            <h2 className="hyi-h1 hyi-white ">
              Complete support for every stage
              <span className="hyi-blue"> of your application lifecycle.</span>
            </h2>
          </motion.div>

  <div className="mt-5 grid auto-rows-[220px] gap-5 md:grid-cols-2 lg:grid-cols-3">
  {services.map((service, index) => (
    <article
      key={service.title}
      className={`group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#08080a] p-6 md:p-7 ${
        index === 0 || index === 5 ? "lg:col-span-2" : ""
      }`}
    >
      <div className="flex h-full flex-col justify-between">

        <span className="w-fit rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/60">
          Service {String(index + 1).padStart(2, "0")}
        </span>

        <div className="max-w-[520px]">
          <h3 className="hyi-h3 hyi-white">
            {service.title}
          </h3>

          <p className="hyi-p mt-3 text-white/75">
            {service.text}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-violet-200 transition-all duration-300 group-hover:gap-4">
            Learn More <span>→</span>
          </div>
        </div>

      </div>
    </article>
  ))}
</div>
        </div>
      </section>

      {/* SUPPORT PROCESS */}
      <section className=" bg-[#060607] px-5  md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1350px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-[900px] text-center"
          >
   

            <h2 className="hyi-h1 hyi-white mt-5">
              A structured approach to
              <span className="hyi-blue"> long-term reliability.</span>
            </h2>
          </motion.div>

<div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
  {process.map((item, index) => (
    <div
      key={item.title}
      className={`relative rounded-[24px] border border-white/[0.07] p-6 ${
        index % 2 === 0 ? "hyi-skeu" : "hyi-glass"
      }`}
    >


      <h3 className="hyi-h3 hyi-white mt-">
        {item.title}
      </h3>

      <p className="hyi-p mt-3">
        {item.text}
      </p>

      {index !== process.length - 1 && (
        <span className="absolute -right-3 top-1/2 hidden text-violet-400/60 md:block">
          →
        </span>
      )}
    </div>
  ))}
</div>
        </div>
      </section>

      {/* SUPPORT EXPERIENCE */}
<section className="px-5 py-5 md:px-8 lg:px-12">
  <div className="mx-auto grid max-w-[1350px] gap-5 lg:grid-cols-12">

    {/* Card 1 */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="hyi-skeu rounded-[30px] p-7 md:p-8 lg:col-span-5"
    >
      <div className="text-xs uppercase tracking-[0.18em] text-violet-300">
        Always Available
      </div>

      <h3 className="hyi-h1 hyi-white mt-5">
        Continuous support without unnecessary downtime.
      </h3>

      <p className="hyi-p mt-5">
        Our maintenance approach combines monitoring, fixes, upgrades,
        and optimization to keep your systems reliable across changing
        business needs.
      </p>
    </motion.div>

    {/* Card 2 */}
 

   

    {/* Card 4 */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="hyi-glass rounded-[30px] p-7 md:p-8 lg:col-span-4"
    >
      <div className="hyi-h3 hyi-white">Faster</div>
      <p className="hyi-p mt-2">
        Issue identification and resolution
      </p>

      <div className="my-7 h-px bg-white/[0.06]" />

      <div className="hyi-h3 hyi-white">Safer</div>
      <p className="hyi-p mt-2">
        Updates and controlled releases
      </p>
    </motion.div>

 

  </div>
</section>

      {/* BENEFITS */}
      <section className="px-5 py- md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1350px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-[900px] text-center"
          >
            <div className="text-xs uppercase tracking-[0.22em] text-violet-300">
              Why HYI.AI
            </div>

            <h2 className="hyi-h1 hyi-white mt-2">
              Reliable maintenance that supports
              <span className="hyi-blue"> long-term growth.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-[24px] border border-white/[0.07] bg-white/[0.025] p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-xs text-violet-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="hyi-h3 hyi-white mt-6">{item.title}</h3>
                <p className="hyi-p mt-3">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGIES MARQUEE */}
      {/* <section className="border-y border-white/[0.06] py-7">
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...technologies, ...technologies].map((tool, index) => (
              <div
                key={`${tool}-${index}`}
                className="mx-3 rounded-full border border-white/[0.07] bg-white/[0.025] px-6 py-3 text-sm text-white/55"
              >
                {tool}
              </div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* FINAL CTA */}
      {/* <section className="px-5 py-10 md:px-8 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-[1350px] overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#070708] p-7 sm:p-10 lg:p-14"
        >
          <div className="grid items-center gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="text-xs uppercase tracking-[0.2em] text-violet-300">
                Application Care
              </div>

              <h2 className="hyi-h1 hyi-white mt-5 max-w-[800px]">
                Keep every release stable, secure,
                <span className="hyi-blue"> and ready for what comes next.</span>
              </h2>

              <p className="hyi-p mt-5 max-w-[680px]">
                Partner with HYI.AI for proactive application maintenance,
                reliable support, and continuous performance improvement.
              </p>

              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:scale-105"
                >
                  Talk To Our Experts
                </Link>
              </div>
            </div>

            <div className="relative min-h-[250px] overflow-hidden rounded-[26px] border border-white/[0.08]">
              <Image
                src="/Card-bg-02.webp"
                alt="Application maintenance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section> */}

      <Footer />
    </main>
  );
}