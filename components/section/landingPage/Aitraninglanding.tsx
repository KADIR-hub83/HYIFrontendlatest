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
{/* =========================================================
    SECTION 01 — AI INTELLIGENCE
========================================================= */}

<section className="relative overflow-hidden bg-black ">

  {/* Background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5b3df5]/[0.07] blur-[160px]" />

    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        maskImage:
          "radial-gradient(circle at center, black 0%, transparent 72%)",
        WebkitMaskImage:
          "radial-gradient(circle at center, black 0%, transparent 72%)",
      }}
    />
  </div>

  <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-10 lg:px-20">




    {/* Main layout */}
    <div className="grid items-center gap-20 lg:grid-cols-[0.9fr_1.1fr]">

      {/* =====================================================
          LEFT — BIG TYPOGRAPHY
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <span className="text-sm hyi-blue font-bold">
           Intelligence starts with understanding
        </span>

        <h2 className="mt-3 hyi-h1 hyi-white font-bold max-w-[800px]">
          Think
          <br />

          <span className="opacity-30">
            beyond
          </span>{" "}

          <span className="relative">
            prompts.
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#7861ff]" />
          </span>
        </h2>

        <p className="mt-3 max-w-[570px] hyi-p">
          Artificial intelligence is more than a tool.
          It is a new layer of computation, creativity and
          decision making — and learning how it works changes
          what you can build with it.
        </p>


        {/* Mini metrics */}
        {/* <div className="mt-12 grid max-w-[570px] grid-cols-3 border-y border-white/[0.08]">

          {[
            ["01", "Understand"],
            ["02", "Experiment"],
            ["03", "Create"],
          ].map(([number, title]) => (
            <div
              key={number}
              className="border-r border-white/[0.08] px-4 py-5 first:pl-0 last:border-r-0"
            >
              <span className="text-sm hyi-blue">
                {number}
              </span>

              <p className="mt-2 text-sm hyi-white">
                {title}
              </p>
            </div>
          ))}

        </div> */}

      </motion.div>


      {/* =====================================================
          RIGHT — AI CORE
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative flex min-h-[520px] items-center justify-center"
      >

        {/* Large orbit */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[330px] w-[330px] rounded-full border border-white/[0.08] sm:h-[460px] sm:w-[460px]"
        >
          <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#8b6cff] shadow-[0_0_18px_#8b6cff]" />

          <span className="absolute bottom-[12%] right-[4%] h-1.5 w-1.5 rounded-full bg-white/60" />
        </motion.div>


        {/* Second orbit */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-[250px] w-[250px] rounded-full border border-[#7861ff]/20 sm:h-[360px] sm:w-[360px]"
        >
          <span className="absolute right-[-3px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#7861ff] shadow-[0_0_15px_#7861ff]" />
        </motion.div>


        {/* Core glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-[250px] w-[250px] rounded-full bg-[#6848ff]/20 blur-[100px]"
        />


        {/* Core */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 50px rgba(104,72,255,.05)",
              "0 0 120px rgba(104,72,255,.20)",
              "0 0 50px rgba(104,72,255,.05)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="relative flex h-[190px] w-[190px] items-center justify-center rounded-full border border-white/[0.12] bg-black/90 backdrop-blur-2xl sm:h-[230px] sm:w-[230px]"
        >

          <div className="absolute inset-6 rounded-full border border-[#7861ff]/20" />

          <div className="relative text-center">

            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#7861ff]/30 bg-[#7861ff]/10">
              <svg
                className="h-5 w-5 hyi-bule-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>

            <p className="text-sm hyi-blue font-bold">
              AI CORE
            </p>

            <p className="mt-2 text-sm hyi-white font-bold">
              Intelligence
            </p>

          </div>

        </motion.div>


        {/* =================================================
            FLOATING NODE 01
        ================================================= */}

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute left-[0%] top-[18%] hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 backdrop-blur-xl sm:block"
        >
          <span className="text-sm hyi-blue font-bold">
            INPUT
          </span>

          <p className="mt-2 text-sm hyi-white font-bold">
            Human Intent
          </p>

          <div className="mt-3 h-1 w-24 overflow-hidden rounded-full bg-white/[0.08]">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="h-full w-1/2 bg-[#7861ff]"
            />
          </div>
        </motion.div>


        {/* =================================================
            FLOATING NODE 02
        ================================================= */}

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute bottom-[15%] right-[0%] hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 backdrop-blur-xl sm:block"
        >
          <span className="text-sm hyi-blue font-bold">
            OUTPUT
          </span>

          <p className="mt-2 text-sm hyi-white font-bold">
            Useful Intelligence
          </p>

          <div className="mt-3 flex gap-1">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.span
                key={item}
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 1.5,
                  delay: item * 0.12,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-[#7861ff]"
              />
            ))}
          </div>
        </motion.div>



      </motion.div>

    </div>
  </div>
</section>
      {/* =====================================================
          WHAT YOU WILL LEARN
      \====================================================== */}
{/* =========================================================
    SECTION 02 — AI CAPABILITY MATRIX
========================================================= */}

<section className="relative overflow-hidden bg-black ">

  <div className="mx-auto max-w-[1500px] px-5 sm:px-10 lg:px-20">

    {/* =====================================================
        HEADER
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="grid gap-10  lg:grid-cols-[0.8fr_1.2fr]"
    >

      <div>
        <h2 className="mt-3 hyi-h1 hyi-white">
          Build your
          <br />

          <span className="opacity-25">
            AI advantage.
          </span>
        </h2>

      </div>


      <div className="flex items-end">

        <p className="max-w-[650px] hyi-p">
          A practical path through the technologies,
          systems and skills that are shaping the next
          generation of digital work.
        </p>

      </div>

    </motion.div>


    {/* =====================================================
        CAPABILITY GRID
    ===================================================== */}

    <div className="mt-10 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          number: "01",
          title: "AI Foundations",
          label: "UNDERSTAND",
          description:
            "Build a strong mental model of artificial intelligence, machine learning and modern AI systems.",
          icon: "brain",
        },
        {
          number: "02",
          title: "Generative AI",
          label: "CREATE",
          description:
            "Explore models that generate text, images, code and ideas — and learn how to work with them.",
          icon: "spark",
        },
        {
          number: "03",
          title: "Prompt Engineering",
          label: "DIRECT",
          description:
            "Learn how to communicate with intelligent systems through structured and reliable instructions.",
          icon: "command",
        },
        {
          number: "04",
          title: "AI Automation",
          label: "AUTOMATE",
          description:
            "Connect AI with workflows, tools and processes to eliminate repetitive digital work.",
          icon: "flow",
        },
        {
          number: "05",
          title: "Hands-on Learning",
          label: "EXPERIMENT",
          description:
            "Move beyond theory through practical challenges, experiments and real implementation.",
          icon: "layers",
        },
        {
          number: "06",
          title: "Real-World Projects",
          label: "DEPLOY",
          description:
            "Turn everything you learn into useful systems inspired by real products and businesses.",
          icon: "arrow",
        },
      ].map((item, index) => (

        <motion.div
          key={item.number}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            delay: index * 0.05,
          }}
          className="group relative min-h-[30px] overflow-hidden bg-black p-7 transition-all duration-500 hover:bg-[#08070d] sm:p-9 lg:p-8"
        >

          {/* Hover glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#6848ff]/0 blur-[80px] transition-all duration-700 group-hover:bg-[#6848ff]/10" />

          {/* Number */}
          <div className="flex items-start justify-between">

            <span className="text-sm hyi-white">
              {item.number}
            </span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] transition-all duration-500 group-hover:border-[#7861ff]/40 group-hover:bg-[#7861ff]/10">

              <svg
                className="h-4 w-4 hyi-white-icon opacity-40 transition-opacity duration-300 group-hover:opacity-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                {item.icon === "brain" && (
                  <>
                    <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3 3 3 0 0 0 2 3v2a3 3 0 0 0 3 3" />
                    <path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 3 3 3 0 0 1-2 3v2a3 3 0 0 1-3 3" />
                    <path d="M9 3v18M15 3v18M9 8h6M9 16h6" />
                  </>
                )}

                {item.icon === "spark" && (
                  <>
                    <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" />
                    <path d="M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
                  </>
                )}

                {item.icon === "command" && (
                  <>
                    <rect x="5" y="5" width="6" height="6" rx="2" />
                    <rect x="13" y="13" width="6" height="6" rx="2" />
                    <path d="M11 8h2M8 11v2M16 11v2M11 16h2" />
                  </>
                )}

                {item.icon === "flow" && (
                  <>
                    <rect x="4" y="4" width="6" height="6" rx="1" />
                    <rect x="14" y="14" width="6" height="6" rx="1" />
                    <path d="M10 7h4v10M14 17h-4" />
                  </>
                )}

                {item.icon === "layers" && (
                  <>
                    <path d="m12 4 8 4-8 4-8-4 8-4Z" />
                    <path d="m4 12 8 4 8-4M4 16l8 4 8-4" />
                  </>
                )}

                {item.icon === "arrow" && (
                  <>
                    <path d="M5 12h13" />
                    <path d="m13 6 6 6-6 6" />
                  </>
                )}
              </svg>

            </div>

          </div>


          {/* Content */}
          <div className="mt-5">

            {/* <span className="text-sm hyi-blue">
              {item.label}
            </span> */}

            <h3 className="mt-3 hyi-h4 hyi-white">
              {item.title}
            </h3>

            <p className="mt-4 max-w-[430px] hyi-p">
              {item.description}
            </p>

          </div>
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
<section className="relative overflow-hidden bg-[#030304] mt-10">
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
              <h3 className="hyi-h4 hyi-white font-bold">
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
              <h3 className="font-bold  hyi-white hyi-h4">
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
              <h3 className="font-bold hyi-h4 hyi-white">
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
              <h3 className="font-bold hyi-h4 hyi-white">
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
  </div>
</section>
     
      {/* =====================================================
          FINAL CTA
      \====================================================== */}
      {/* <section
        className="relative overflow-hidden "
      >
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
            className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between "
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
      </section> */}
    </section>
  );
}
