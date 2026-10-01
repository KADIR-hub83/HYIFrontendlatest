"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
const topics = [
  {
    number: "01",
    title: "AI Foundations",
    description:
      "Build a strong understanding of artificial intelligence, its core concepts, capabilities, and real-world applications." },
  {
    number: "02",
    title: "Generative AI",
    description:
      "Explore how generative technologies are transforming creativity, productivity, development, business, and innovation." },
  {
    number: "03",
    title: "Prompt Engineering",
    description:
      "Learn how to communicate effectively with AI systems and create structured prompts for better, more reliable results." },
  {
    number: "04",
    title: "AI Automation",
    description:
      "Discover how AI can simplify repetitive tasks, improve workflows, and help create smarter digital processes." },
  {
    number: "05",
    title: "Hands-on Learning",
    description:
      "Practice what you learn through guided exercises, challenges, experiments, and practical use cases." },
  {
    number: "06",
    title: "Real-World Projects",
    description:
      "Turn knowledge into experience by building projects inspired by real business and technology challenges." },
];
const stats = [
  {
    value: "12+",
    label: "AI Modules" },
  {
    value: "24+",
    label: "Hands-on Labs" },
  {
    value: "08+",
    label: "Real Projects" },
  {
    value: "100%",
    label: "Practical Learning" },
];
export default function AITrainingLanding() {
  return (
    <section className="relative w-full overflow-hidden bg-[#030304] text-white">
      {/* =====================================================
          GLOBAL BACKGROUND
      \====================================================== */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-300px] top-[2%] h-[800px] w-[800px] rounded-full bg-[#7046ff]/[0.08] blur-[200px]" />
        <div className="absolute -left-[400px] top-[32%] h-[700px] w-[700px] rounded-full bg-[#7046ff]/[0.045] blur-[200px]" />
        <div
          className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.03)\_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)\_1px,transparent_1px)] [background-size:80px_80px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
        />
      </div> */}
      {/* =====================================================
          HERO
      \====================================================== */}
      <div className="relative overflow-hidden">
        {/* Dark fade over image */}
        {/* HERO CONTENT */}
        <div
          className="relative z-10 mx-auto gap-20 justify-between px-5 sm:px-10 lg:px-20 mt-10 max-md:flex-col flex">
          {/* Label */}
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 hyi-h1 hyi-white"
          >
            <span className="block">Don&apos;t just learn AI.</span>
            <span
              className="block"
            >
              Build with it.
            </span>
          </motion.h1>
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex max-w-[680px] gap-5"
          >
            <div
              className="hidden h-[105px] w-px bg-gradient-to-b from-[#9878ff]/70 to-transparent sm:block"
            />
            <div>
              <p
                className="hyi-p"
              >
                Artificial Intelligence is changing how we work, create, solve
                problems and build the future.
              </p>
              <p
                className="mt-3 hyi-p"
              >
                Develop practical AI skills through hands-on learning, modern
                tools and real-world projects designed for what comes next.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* =====================================================
          INTRO / LEARNING PHILOSOPHY
      \====================================================== */}
      <section className="relative overflow-hidden">
        {/* KPI background */}
        <img
          src="/KPI-Bg.png"
          alt=""
          className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-50"
        />
        <div
          className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-10 lg:px-20 mt-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="grid gap-12 lg:grid-cols-[0.4fr_1.6fr]"
          >
            <div>
              <p
                className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#9d80ff]/60"
              >
                / The learning philosophy
              </p>
            </div>
            <div>
              <h2
                className="max-w-[1100px] text-[48px] font-medium leading-[0.98] tracking-[-0.055em] sm:text-[65px] lg:text-[82px] xl:text-[92px]"
              >
                Learn.
                <span className="text-white/20"> Experiment.</span>
                <br />
                <span>
                  Build. Apply.
                </span>
              </h2>
              <p
                className="mt-9 max-w-[700px] hyi-p"
              >
                AI is best understood by working with it. Every stage of the
                learning journey moves from understanding concepts to
                experimenting, building and applying those skills in practical
                situations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* =====================================================
          WHAT YOU WILL LEARN
      \====================================================== */}
      <section className="relative">
        <div
          className="mx-auto max-w-[1500px] px-5 py-10 sm:px-10 lg:px-20"
        >
          {/* Heading */}
          <div
            className="grid gap-10 border-b border-white/[0.07] pb-10 lg:grid-cols-2"
          >
           
            <h2
              className="max-w-[650px] hyi-h1 hyi-white"
            >
              Skills designed for
              <span className="text-white/25"> what comes next.</span>
            </h2>
          </div>
          {/* Topics */}
          <div>
            {topics.map((topic, index) => (
              <motion.div
                key={topic.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="group grid gap-5 border-b border-white/[0.065] py-8 transition-colors duration-300 hover:border-white/[0.13] sm:grid-cols-[70px_1fr] lg:grid-cols-[100px_0.8fr_1.2fr] lg:items-center lg:py-10"
              >
                <p
                  className="font-mono text-[8px] hyi-white"
                >
                   {topic.number}
                </p>
                <h3
                  className="text-[25px] font-medium tracking-[-0.035em] hyi-white transition-colors duration-300 group-hover:text-white "
                >
                  {topic.title}
                </h3>
                <p
                  className="max-w-[600px] hyi-p"
                >
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* =====================================================
          LARGE IMAGE / MESSAGE SECTION
      \====================================================== */}
{/* =====================================================
    FROM UNDERSTANDING AI TO BUILDING WITH IT
====================================================== */}
<section className="relative overflow-hidden bg-[#030304]">
  {/* Background glow */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046ff]/[0.07] blur-[180px]" />

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:80px_80px]" />
  </div>

  <div className="relative z-10 mx-auto max-w-[1500px] px-5 py- sm:px-10 lg:px-20">
    {/* Section heading */}
<motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7 }}
  className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16"
>
  {/* Left - Heading */}
  <div className="w-full lg:w-[45%]">
    <h2 className="hyi-h1 hyi-white">
      From understanding AI
      <span className="block text-white/30">
        to building with it.
      </span>
    </h2>
  </div>

  {/* Right - Description */}
  <div className="w-full lg:flex lg:w-[48%] lg:justify-end">
    <p className="max-w-[680px] hyi-p">
      Move beyond understanding Artificial Intelligence and learn how
      to apply it across real workflows, products, automation,
      creativity, research and digital innovation.
    </p>
  </div>
</motion.div>

    {/* Main grid */}
    <div className="grid gap-4 lg:grid-cols-2">
      {/* Large visual card */}
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="group relative min-h-[520px] overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#08080b]"
      >
        {/* Image */}
        <img
          src="/KPI-Bg.png"
          alt="AI training and practical learning"
          className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Image overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/45 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#7046ff]/10 to-transparent" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:p-10">
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.1] bg-black/40 backdrop-blur-md">
            <ArrowUpRight
              size={18}
              className="text-[#9d80ff]"
            />
          </div>

          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.22em] text-[#9d80ff]/70">
            Learn • Experiment • Build
          </p>

          <h3 className="max-w-[500px] hyi-h2 hyi-white font-bold">
            Turn AI knowledge into
            <span className="block ">
              practical experience.
            </span>
          </h3>

          <p className="mt-5 max-w-[540px] hyi-p">
            Work with modern AI tools, explore their capabilities and
            limitations, and learn how Artificial Intelligence can
            solve practical problems across real-world environments.
          </p>
        </div>
      </motion.div>

      {/* Right cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Card 01 */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="group relative min-h-[250px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-gradient-to-br from-[#10101a] via-[#09090e] to-[#050507] p-6 transition-all duration-300 hover:border-[#7046ff]/30 sm:p-7"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#7046ff]/20 blur-[70px]" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <span className="font-mono text-[9px] text-white/25">
              01
            </span>

            <div>
              <h3 className="text-[21px] font-bold hyi-h2 hyi-white">
                Understand Modern AI
              </h3>

              <p className="mt-4 hyi-p">
                Explore how modern AI systems and Generative AI work,
                where they are useful, and how they can become part of
                everyday digital workflows.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 02 */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="group relative min-h-[250px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-gradient-to-br from-[#10101a] via-[#09090e] to-[#050507] p-6 transition-all duration-300 hover:border-[#7046ff]/30 sm:p-7"
        >
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#7046ff]/15 blur-[70px]" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <span className="font-mono text-[9px] text-white/25">
              02
            </span>

            <div>
              <h3 className="font-bold  hyi-white hyi-h3">
                Learn By Doing
              </h3>

              <p className="mt-4 hyi-p">
                Move from theory to implementation through hands-on
                exercises, experiments and practical challenges using
                modern AI tools.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 03 */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="group relative min-h-[250px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-gradient-to-br from-[#10101a] via-[#09090e] to-[#050507] p-6 transition-all duration-300 hover:border-[#7046ff]/30 sm:p-7"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#7046ff]/10 blur-[60px]" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <span className="font-mono text-[9px] text-white/25">
              03
            </span>

            <div>
              <h3 className="font-bold hyi-h3 hyi-white">
                Build Smarter Workflows
              </h3>

              <p className="mt-4 hyi-p">
                Structure better prompts, automate repetitive
                processes, analyze information and accelerate
                everyday workflows with AI.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 04 */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="group relative min-h-[250px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-gradient-to-br from-[#151124] via-[#0c0a13] to-[#050507] p-6 transition-all duration-300 hover:border-[#7046ff]/40 sm:p-7"
        >
          <div className="pointer-events-none absolute bottom-[-50px] right-[-30px] h-44 w-44 rounded-full bg-[#7046ff]/25 blur-[75px]" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <span className="font-mono text-[9px] text-[#9d80ff]/60">
              04
            </span>

            <div>
              <h3 className="font-bold hyi-h3 hyi-white">
                Create Real Solutions
              </h3>

              <p className="mt-4 hyi-p">
                Transform ideas into practical AI-powered solutions
                across technology, productivity, research,
                creativity and business operations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Bottom statement */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="mt-4 overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.025]"
    >
      <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="p-6 sm:p-8 lg:p-10">
          <p className="max-w-[950px] font-bold hyi-h3">
            Learn the technology. Understand its possibilities. Build
            practical skills. Experiment with real tools. Create
            meaningful solutions.
            <span className="">
              {" "}
              And prepare yourself to build with the technology
              shaping what comes next.
            </span>
          </p>
        </div>

        <div className="hidden h-full w-[180px] border-l border-white/[0.07] lg:flex lg:items-center lg:justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#7046ff]/25 bg-[#7046ff]/10">
            <ArrowUpRight
              size={20}
              className="text-[#9d80ff]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>
      {/* =====================================================
          STATS
      \====================================================== */}

      {/* =====================================================
          FINAL CTA
      \====================================================== */}
      <section
        className="relative overflow-hidden "
      >
        {/* support bg reused very subtly */}
        <img
          src="/support-bg.png"
          alt=""
          className="pointer-events-none absolute bottom-[-60%] right-[-20%] h-[130%] w-[80%] object-contain opacity-100"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#030304] via-[#030304]/90 to-transparent"
        />
        <div
          className="relative z-10 mx-auto max-w-[1500px] px-5 py-10 sm:px-10 lg:px-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
            
              <h2
                className="mt-6 max-w-[850px] hyi-h1 hyi-white"
              >
                Your AI journey
                <span
                  className="block "
                >
                  starts here.
                </span>
              </h2>
              <p
                className="mt-7 max-w-[620px] hyi-p"
              >
                Learn the technology shaping tomorrow and develop the practical
                skills to become part of what comes next.
              </p>
            </div>
            <button
              type="button"
              className="group flex w-fit shrink-0 items-center gap-4 rounded-full bg-white px-6 py-4 text-[10px] font-medium text-black transition-all duration-300 hover:scale-[1.03]"
            >
              Start Your AI Journey
              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
