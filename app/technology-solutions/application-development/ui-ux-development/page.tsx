"use client";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import UiUx3DModel from "@/components/uiux/UiUx3DModel";

import {
  ArrowRight,
  Brush,
  Check,
  ChevronRight,
  Component,
  Layers3,
  MonitorSmartphone,
  MousePointer2,
  Palette,
  PenTool,
  Search,
  Sparkles,
  TabletSmartphone,
  WandSparkles,
  Zap,
} from "lucide-react";

const tools = [
  "Figma",
  "Adobe XD",
  "Sketch",
  "Framer",
  "Webflow",
  "Miro",
  "ProtoPie",
  "Principle",
  "Zeplin",
  "Axure",
  "Balsamiq",
  "InVision",
  "Photoshop",
  "Illustrator",
];

const capabilities = [
  {
    no: "01",
    icon: Palette,
    title: "UI Design",
    text: "High-fidelity digital interfaces built around hierarchy, clarity, interaction and brand identity.",
  },
  {
    no: "02",
    icon: MousePointer2,
    title: "UX Strategy",
    text: "User journeys and information architecture created around real user goals and business outcomes.",
  },
  {
    no: "03",
    icon: Component,
    title: "Design Systems",
    text: "Reusable components, tokens and interaction standards for consistent products at scale.",
  },
  {
    no: "04",
    icon: MonitorSmartphone,
    title: "Responsive Experience",
    text: "Interfaces engineered to feel intentional across desktop, tablet and mobile experiences.",
  },
  {
    no: "05",
    icon: MousePointer2,
    title: "Interactive Prototypes",
    text: "High-fidelity prototypes that communicate product interactions before engineering begins.",
  },
  {
    no: "06",
    icon: Search,
    title: "UX Research",
    text: "Usability analysis and experience validation to uncover friction before it affects conversion.",
  },
];

const process = [
  {
    no: "01",
    title: "Discover",
    text: "We understand your audience, product goals, workflows and business objectives.",
  },
  {
    no: "02",
    title: "Experience Mapping",
    text: "User journeys, information architecture and product flows are structured.",
  },
  {
    no: "03",
    title: "Wireframing",
    text: "Core layouts and interactions are explored before visual design begins.",
  },
  {
    no: "04",
    title: "Visual Design",
    text: "Typography, color, spacing, components and interface personality are crafted.",
  },
  {
    no: "05",
    title: "Prototype",
    text: "Interactive product behavior is demonstrated through high-fidelity prototypes.",
  },
  {
    no: "06",
    title: "Design Handoff",
    text: "Developers receive structured components, states, specifications and assets.",
  },
];

export default function UiUxDevelopmentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      <Header />

      {/* =====================================================
          CINEMATIC HERO
      ===================================================== */}
      <section className="relative min-h-[1050px] overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-[#030303]" />

        <div className="absolute left-1/2 top-[28%] h-[900px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[190px]" />

        <div className="absolute -left-[18%] top-[35%] h-[650px] w-[650px] rounded-full bg-indigo-800/10 blur-[180px]" />

        <div className="absolute -right-[18%] top-[38%] h-[650px] w-[650px] rounded-full bg-fuchsia-900/10 blur-[190px]" />

        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1350px] px-5 pt-24 md:px-8 lg:px-12 lg:pt-32">
          <div className="mx-auto max-w-6xl text-center">
       

            <h1 className="hyi-h1 hyi-white mt-7">
              Design experiences
              <span className="block hyi-blue">
                people understand instantly.
              </span>
            </h1>

            <p className="hyi-p mx-auto mt-3 max-w-3xl">
              HYI combines UX thinking, visual design, interaction systems and
              engineering-ready design systems to create digital products that
              feel simple, premium and intuitive.
            </p>

           
          </div>

          {/* =====================================================
              LARGE 3D UI COMPOSITION
          ===================================================== */}
          <div
            className="relative mx-auto mt-6 h-[650px] max-w-[1350px]  max-md:h-[520px]"
            style={{ perspective: "1600px" }}
          >
            <div className="absolute left-1/2 top-[45%] h-[430px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

            {/* Left floating panel */}
            <div
              className="absolute left-[2%] top-[22%] hidden w-[270px] rounded-[28px] border border-white/10 bg-[#0C0B12]/95 p-5 shadow-2xl backdrop-blur-xl md:block lg:left-[8%]"
              style={{
                transform: "rotateY(24deg) rotateZ(-6deg)",
              }}
            >
              <p className="text-xs text-white/30">Design tokens</p>

              <div className="mt-5 grid grid-cols-4 gap-2">
                {[
                  "#8359F8",
                  "#C16EF2",
                  "#EC4899",
                  "#15131B",
                  "#7C3AED",
                  "#A78BFA",
                  "#18181B",
                  "#FAFAFA",
                ].map((color) => (
                  <div
                    key={color}
                    className="aspect-square rounded-xl border border-white/10"
                    style={{ background: color }}
                  />
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {["Heading / 48", "Title / 24", "Body / 16"].map(
                  (item, i) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-white/[0.06] pb-3"
                    >
                      <span
                        className={`${
                          i === 0
                            ? "text-lg"
                            : i === 1
                              ? "text-sm"
                              : "text-xs"
                        }`}
                      >
                        Aa
                      </span>

                      <span className="text-[10px] text-white/30">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Center design board */}
            <div
              className="absolute left-1/2 top-[3%] z-20 w-[92%] max-w-[820px] -translate-x-1/2 overflow-hidden rounded-[34px] border border-white/10 bg-[#0A0A10]/95 shadow-[0_50px_160px_rgba(0,0,0,.8)] max-md:top-[5%] max-md:w-full"
              style={{
                transform: "translateX(-50%) rotateX(4deg)",
              }}
            >
              <div className="flex h-14 items-center justify-between  px-">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>

                <div className="rounded-full border border-white/[0.07] bg-white/[0.03] px-8 py-2 text-[10px] text-white/25">
                  HYI Design Studio
                </div>

                <PenTool className="h-4 w-4 hyi-white-icon" />
              </div>

              <div className="grid min-h-[520px] sm:grid-cols-[170px_1fr]">
                <aside className="hidden border-r border-white/[0.07] bg-black/20 p-4 sm:block">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                    Layers
                  </p>

                  <div className="mt-5 space-y-2">
                    {[
                      "Navigation",
                      "Hero",
                      "Metrics",
                      "Cards",
                      "Footer",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`rounded-lg px-3 py-2 text-[10px] ${
                          index === 1
                            ? "bg-purple-500/15 text-purple-200"
                            : "text-white/35"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </aside>

                <div className="p-4 sm:p-7">
                  <div className="rounded-[26px] border border-white/[0.07] bg-gradient-to-br from-[#161020] to-[#08080C] p-5 sm:p-7">
                    <div className="flex justify-between gap-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-purple-300">
                          Product experience
                        </p>

                        <h3 className="mt-4 max-w-sm text-2xl font-semibold sm:text-3xl">
                          Make complexity
                          <span className="block text-white/30">
                            feel effortless.
                          </span>
                        </h3>
                      </div>

                      <div className="h-11 w-11 shrink-0 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-500" />
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
                      {[
                        ["12.8K", "Users"],
                        ["92%", "Retention"],
                        ["4.9", "Rating"],
                      ].map(([value, label]) => (
                        <div
                          key={label}
                          className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3 sm:p-4"
                        >
                          <p className="font-semibold">{value}</p>
                          <p className="mt-1 text-[9px] text-white/25">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="rounded-[22px] border border-white/[0.07] bg-white/[0.025] p-3 sm:p-5">
                      <p className="text-xs text-white/30">Performance</p>

                      <div className="mt-5 flex h-24 items-end gap-2">
                        {[44, 58, 49, 72, 63, 86, 70, 95].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="flex-1 rounded-t-md bg-gradient-to-t from-purple-900/30 to-purple-400"
                              style={{ height: `${height}%` }}
                            />
                          )
                        )}
                      </div>
                    </div>

                    <div className="rounded-[22px] border border-white/[0.07] bg-white/[0.025] p-3 sm:p-5">
                      <p className="text-xs text-white/30">
                        Interface states
                      </p>

                      <div className="mt-5 space-y-3">
                        {[1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-xl bg-white/[0.03] p-2 sm:p-3"
                          >
                            <div className="h-7 w-7 rounded-lg bg-purple-500/15" />
                            <div className="flex-1">
                              <div className="h-2 w-3/4 rounded-full bg-white/10" />
                              <div className="mt-2 h-1.5 w-1/2 rounded-full bg-white/[0.04]" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right prototype */}
            <div
              className="absolute right-[2%] top-[24%] hidden w-[250px] rounded-[30px] border border-white/10 bg-[#0C0A12]/95 p-4 shadow-2xl backdrop-blur-xl md:block lg:right-[8%]"
              style={{
                transform: "rotateY(-24deg) rotateZ(6deg)",
              }}
            >
              <div className="relative h-[430px] overflow-hidden rounded-[24px] bg-gradient-to-b from-[#191228] to-[#09090D] p-5">
                <div className="mx-auto h-4 w-16 rounded-full bg-black" />

                <p className="mt-9 text-xs text-white/30">
                  Mobile prototype
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  Good morning.
                </h3>

                <div className="mt-6 rounded-3xl bg-gradient-to-br from-purple-500/30 to-transparent p-5">
                  <p className="text-xs text-purple-200">
                    Weekly progress
                  </p>

                  <p className="mt-3 text-4xl font-semibold">84%</p>

                  <div className="mt-5 h-2 rounded-full bg-white/10">
                    <div className="h-full w-[84%] rounded-full bg-purple-400" />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="h-24 rounded-2xl bg-white/[0.04]" />
                  <div className="h-24 rounded-2xl bg-white/[0.04]" />
                </div>
              </div>
            </div>

            {/* Floating prototype label */}
            <div className="absolute bottom-[4%] left-1/2 z-30 -translate-x-1/2 rounded-2xl border border-purple-400/20 bg-black/75 px-5 py-4 backdrop-blur-xl max-md:bottom-0 max-md:w-max">
              <div className="flex items-center gap-3">
                <WandSparkles className="h-5 w-5 hyi-blue-icon" />

                <div>
                  <p className="text-[10px] text-white/30">
                    Interactive Prototype
                  </p>
                  <p className="mt-1 text-sm">
                    Experience before development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERACTIVE 3D EXPERIENCE
      ===================================================== */}


      {/* =====================================================
          UI / UX PLATFORM SLIDER
      ===================================================== */}
      <section className="overflow-hidden  bg-[#060606] py-4">


        <div className="relative flex overflow-hidden">
          <div className="uiux-marquee flex min-w-max gap-4 px-2">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={`${tool}-${index}`}
                className="group flex h-[78px] min-w-[180px] items-center justify-center rounded-[22px] border border-white/[0.08] bg-white/[0.025] px-8 transition hover:border-purple-500/30 hover:bg-purple-500/[0.08]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                    <PenTool className="h-4 w-4 hyi-white-icon" />
                  </div>

                  <span className="text-sm font-medium text-white/60 group-hover:text-white">
                    {tool}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE SECTION
      ===================================================== */}
      <section className="mx-auto max-w-[1350px] px-5  md:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
        

          <h2 className="hyi-h1 hyi-white mt-6">
            Every interaction should
            <span className="block hyi-blue">
              feel completely intentional.
            </span>
          </h2>

          <p className="hyi-p mx-auto mt-3 max-w-3xl">
            Beautiful interfaces matter, but great UI/UX goes deeper. We design
            the full experience: hierarchy, flow, interaction, feedback,
            navigation, accessibility and consistency.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 border-y border-white/[0.08] py-3 md:grid-cols-4">
          {[
            ["Clear", "User Flows"],
            ["Consistent", "Design Systems"],
            ["Responsive", "Interfaces"],
            ["Validated", "Experiences"],
          ].map(([value, label], index) => (
            <div
              key={value}
              className={`px-2 py-3 text-center ${
                index < 3 ? "md:border-r md:border-white/[0.08]" : ""
              }`}
            >
              <p className="hyi-h3 hyi-white">{value}</p>
              <p className="hyi-p mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          CAPABILITIES
      ===================================================== */}
      <section className="border-y border-white/[0.08] bg-white/[0.012]">
        <div className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
        

            <h2 className="hyi-h1 hyi-white ">
              Design every layer
              <span className="block hyi-blue">
                of the product experience.
              </span>
            </h2>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-5 transition duration-500 hover:-translate-y-1 hover:border-purple-400/25 md:p-8"
                >
                  <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-purple-600/0 blur-[80px] transition group-hover:bg-purple-600/15" />

                  <div className="relative flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/15 bg-purple-500/10">
                      <Icon className="h-5 w-5 hyi-white-icon" />
                    </div>

                  </div>

                  <h3 className="hyi-h3 hyi-white relative mt-3">
                    {item.title}
                  </h3>

                  <p className="hyi-p relative mt-3 max-w-sm">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          DESIGN SYSTEM VISUAL
      ===================================================== */}
      <section className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#09090D] px-5 py-10 md:rounded-[42px] md:px-10 md:py-14 lg:px-16">
          <div className="absolute left-1/2 top-1/2 h-[650px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/10 blur-[160px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <Layers3 className="mx-auto h-8 w-8 hyi-white-icon" />

            <h2 className="hyi-h1 hyi-white mt-6">
              One design language.
              <span className="block hyi-blue">
                Every screen consistent.
              </span>
            </h2>
          </div>

          <div className="relative mt-8 grid gap-4 lg:grid-cols-3">
            {/* Typography */}
            <div className="rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-5 md:p-7">
              <p className="text-xs uppercase tracking-[0.22em] hyi-blue">
                Typography
              </p>

              <div className="mt-8 space-y-5">
                <p className="text-5xl font-semibold tracking-tight">
                  Aa
                </p>
                <p className="hyi-h3 hyi-white">Heading</p>
                <p className="text-xl text-white/70">Subtitle</p>
                <p className="hyi-p">
                  Product body copy and descriptive content.
                </p>
              </div>
            </div>

            {/* Colors */}
            <div className="rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-5 md:p-7">
              <p className="text-xs uppercase tracking-[0.22em] hyi-blue">
                Color System
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  "#5B21B6",
                  "#7C3AED",
                  "#8B5CF6",
                  "#A78BFA",
                  "#C084FC",
                  "#E879F9",
                  "#09090B",
                  "#18181B",
                  "#FAFAFA",
                ].map((color) => (
                  <div
                    key={color}
                    className="aspect-square rounded-2xl border border-white/10"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Components */}
            <div className="rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-5 md:p-7">
              <p className="text-xs uppercase tracking-[0.22em] hyi-blue">
                Components
              </p>

              <button className="mt-8 w-full rounded-xl bg-purple-600 py-3 text-sm transition hover:bg-purple-500">
                Primary Button
              </button>

              <button className="mt-3 w-full rounded-xl border border-white/10 py-3 text-sm text-white/50 transition hover:border-purple-400/30 hover:text-white">
                Secondary
              </button>

              <div className="mt-4 rounded-2xl border border-white/[0.08] bg-black/20 p-4">
                <div className="h-3 w-1/2 rounded-full bg-white/15" />
                <div className="mt-3 h-2 w-4/5 rounded-full bg-white/[0.05]" />
                <div className="mt-2 h-2 w-3/5 rounded-full bg-white/[0.05]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DEVICE EXPERIENCE
      ===================================================== */}


      {/* =====================================================
          UX PROCESS
      ===================================================== */}
      <section
        id="uiux-process"
        className="mx-auto max-w-[1350px] px-5  md:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-5xl text-center">
  

          <h2 className="hyi-h1 hyi-white ">
            From user problem
            <span className="block hyi-blue">
              to polished experience.
            </span>
          </h2>
        </div>

        <div className="mt-6">
          {process.map((step) => (
            <div
              key={step.no}
              className="group grid gap-3 border-t border-white/[0.08] py-6 md:grid-cols-[90px_1fr_1.4fr] md:gap-12"
            >
              <span className="text-sm font-medium hyi-blue">
                {step.no}
              </span>

              <h3 className="hyi-h3 hyi-white">
                {step.title}
              </h3>

              <p className="hyi-p max-w-2xl">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE METRICS
      ===================================================== */}
      <section className="border-y border-white/[0.08] bg-[#070707]">
        <div className="mx-auto max-w-[1350px] px-5 py-10 md:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <Zap className="mx-auto h-8 w-8 hyi-white-icon" />

            <h2 className="hyi-h1 hyi-white mt-6">
              Design should create
              <span className="block hyi-blue">
                measurable product value.
              </span>
            </h2>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Faster", "Product adoption"],
              ["Clearer", "User journeys"],
              ["Higher", "Engagement"],
              ["Stronger", "Brand experience"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-[28px] border border-white/[0.08] bg-white/[0.02] px-5 py-7 text-center"
              >
                <p className="hyi-h3 hyi-white">{value}</p>
                <p className="hyi-p mt-3">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
    

      <Footer />
    </main>
  );
}
