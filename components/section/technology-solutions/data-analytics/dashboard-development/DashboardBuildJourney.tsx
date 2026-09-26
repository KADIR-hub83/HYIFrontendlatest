"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  CheckCircle2,
  Database,
  Eye,
  GitBranch,
  LayoutDashboard,
  MousePointer2,
  Target,
} from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: Target,
    title: "Define the decision",
    subtitle: "Business discovery",
    text: "Start with the decision the dashboard must support. Identify the audience, business objective, questions users repeatedly ask and actions they may take after seeing the information.",
    output: "Decision requirements",
  },
  {
    number: "02",
    Icon: Activity,
    title: "Define KPIs",
    subtitle: "Measurement architecture",
    text: "Translate objectives into measurable indicators. Define formulas, targets, comparison periods, thresholds, owners, dimensions and the frequency at which each metric should be refreshed.",
    output: "KPI dictionary",
  },
  {
    number: "03",
    Icon: Database,
    title: "Prepare data",
    subtitle: "Data foundation",
    text: "Identify source systems and create reliable datasets. Clean, transform and reconcile information before it reaches the visualization layer.",
    output: "Trusted datasets",
  },
  {
    number: "04",
    Icon: GitBranch,
    title: "Model the data",
    subtitle: "Semantic architecture",
    text: "Create relationships, measures, dimensions and reusable business definitions so the dashboard calculates metrics consistently across filters and views.",
    output: "Semantic model",
  },
  {
    number: "05",
    Icon: LayoutDashboard,
    title: "Wireframe",
    subtitle: "Information hierarchy",
    text: "Arrange information before styling it. Decide what users must notice first, which information belongs in summary views and what should be available through drill-down.",
    output: "Dashboard blueprint",
  },
  {
    number: "06",
    Icon: BarChart3,
    title: "Visualize",
    subtitle: "Visual communication",
    text: "Choose charts based on the analytical question. Comparison, trend, composition, distribution and relationship questions require different visual forms.",
    output: "Visual system",
  },
  {
    number: "07",
    Icon: MousePointer2,
    title: "Add interaction",
    subtitle: "Exploration layer",
    text: "Introduce filters, tooltips, drill-through and cross-highlighting only when they make investigation easier rather than adding unnecessary complexity.",
    output: "Interactive experience",
  },
  {
    number: "08",
    Icon: CheckCircle2,
    title: "Validate & release",
    subtitle: "Production readiness",
    text: "Validate calculations, permissions, responsiveness, accessibility, performance and user comprehension before publishing the dashboard.",
    output: "Production dashboard",
  },
];

export default function DashboardBuildJourney() {
  return (
    <section
      id="development-process"
      className="relative bg-[#050505] py-32"
    >
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[900px]"
        >
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#8f6aed]">
            01 / DEVELOPMENT PROCESS
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            How a dashboard
            <span className="block text-[#7046e6]">
              becomes a decision system.
            </span>
          </h2>

          <p className="mt-7 max-w-[720px] text-[10px] leading-7 text-white/42">
            Dashboard development should move from business intent toward
            visualization—not the other way around. Starting with charts before
            understanding the audience, decisions and metrics often creates an
            attractive interface that answers the wrong questions.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute bottom-0 left-[31px] top-0 hidden w-px bg-gradient-to-b from-[#7046e6] via-[#7046e6]/20 to-transparent md:block" />

          <div className="space-y-5">
            {steps.map((step, index) => {
              const Icon = step.Icon;

              return (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6 }}
                  className="relative grid gap-5 md:grid-cols-[64px_1fr]"
                >
                  <motion.div
                    whileInView={{
                      boxShadow: [
                        "0 0 0 rgba(112,70,230,0)",
                        "0 0 35px rgba(112,70,230,.25)",
                        "0 0 0 rgba(112,70,230,0)",
                      ],
                    }}
                    transition={{ duration: 2 }}
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#7046e6]/30 bg-[#09070e]"
                  >
                    <Icon
                      size={17}
                      strokeWidth={1}
                      className="text-[#9a7af0]"
                    />
                  </motion.div>

                  <div className="group overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#080808] transition hover:border-[#7046e6]/25">
                    <div className="grid lg:grid-cols-[.7fr_1.3fr_.45fr]">
                      <div className="p-7">
                        <p className="font-mono text-[6px] tracking-[0.16em] text-[#7046e6]">
                          STEP {step.number}
                        </p>

                        <h3 className="mt-4 text-xl font-medium">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-[7px] text-white/25">
                          {step.subtitle}
                        </p>
                      </div>

                      <div className="border-t border-white/[0.06] p-7 lg:border-l lg:border-t-0">
                        <p className="max-w-[650px] text-[9px] leading-7 text-white/42">
                          {step.text}
                        </p>
                      </div>

                      <div className="border-t border-white/[0.06] p-7 lg:border-l lg:border-t-0">
                        <p className="font-mono text-[5px] tracking-[0.15em] text-white/20">
                          OUTPUT
                        </p>
                        <p className="mt-4 text-[8px] text-[#9b7bf0]">
                          {step.output}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 }}
                      className="h-px bg-gradient-to-r from-[#7046e6] via-[#7046e6]/30 to-transparent"
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <div className="mt-20 rounded-[30px] border border-[#7046e6]/15 bg-[#7046e6]/[0.025] p-7 md:p-10">
          <div className="flex gap-5">
            <Eye
              size={18}
              strokeWidth={1}
              className="mt-1 shrink-0 text-[#9474ee]"
            />

            <div>
              <h3 className="text-lg font-medium">
                The important principle
              </h3>
              <p className="mt-4 max-w-[850px] text-[9px] leading-7 text-white/40">
                A dashboard is successful when users can understand the current
                state, recognize meaningful change, compare performance with
                context and determine where attention is required. Visual
                decoration is secondary to decision clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}