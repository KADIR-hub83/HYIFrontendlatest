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
            <span className="block">Don't just learn AI.</span>
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
      <section
        className="relative  overflow-hidden "
      >
        {/* Managed talent background */}
        <img
          src="/managed-talent-pool.png"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-100"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#030304] via-[#030304]/70 to-[#030304]/35"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#030304] via-transparent to-[#030304]"
        />
        <div
          className="relative z-10 mx-auto flex min-h-[720px] max-w-[1500px] items-center px-5 sm:px-8 lg:px-12 xl:px-16"
        >
     <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
  className="max-w-[1000px]"
>
  <h2 className="mt-7 font-bold hyi-h1 hyi-white">
    From understanding AI
    <span className="block">to building with it.</span>
  </h2>

  <p className="mt-8 max-w-[900px] hyi-p">
    Artificial Intelligence is no longer just an emerging technology — it is
    becoming a fundamental part of how businesses operate, developers build,
    professionals work, and organizations solve complex problems. Understanding
    AI is important, but understanding alone is not enough. The real opportunity
    begins when you learn how to apply AI to practical challenges, workflows,
    products, and real-world ideas.
  </p>

  <p className="mt-6 max-w-[900px] hyi-p">
    Our AI training is designed to take learners beyond basic concepts and
    introduce them to a practical, application-focused learning experience.
    You will explore how modern AI systems work, how Generative AI can be used
    effectively, how better prompts can produce better outcomes, and how AI can
    become part of everyday digital workflows.
  </p>

  <p className="mt-6 max-w-[900px] hyi-p">
    The learning journey moves progressively from fundamentals to practical
    implementation. Instead of simply reading about Artificial Intelligence,
    learners work with modern AI tools, experiment with different approaches,
    understand their capabilities and limitations, and discover how AI can be
    applied across technology, productivity, automation, research, creativity,
    business operations, and digital innovation.
  </p>

  <p className="mt-6 max-w-[900px] hyi-p">
    Through hands-on exercises and practical projects, learners develop the
    confidence to move from asking AI simple questions to using it as a powerful
    tool for problem solving. You will learn how to structure effective prompts,
    improve AI-generated results, automate repetitive processes, analyze
    information, accelerate workflows, and transform ideas into practical
    AI-powered solutions.
  </p>





  <p className="mt-8 max-w-[900px] text-[18px] font-medium leading-[1.8] text-white/80 sm:text-[20px]">
    Learn the technology. Understand its possibilities. Build practical skills.
    Experiment with real tools. Create meaningful solutions. And prepare
    yourself to build with the technology shaping what comes next.
  </p>
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
