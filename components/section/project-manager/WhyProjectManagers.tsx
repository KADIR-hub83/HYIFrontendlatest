"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "48h",
    label: "Typical matching time",
  },
  {
    value: "10+ yrs",
    label: "Senior experience available",
  },
  {
    value: "Agile",
    label: "Scrum / Kanban / Hybrid",
  },
  {
    value: "Flexible",
    label: "Engagement models",
  },
];

export default function WhyProjectManagers() {
  return (
    <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="relative overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#09090b] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
          <img
            src="/Card-bg-02.webp"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/20" />

          <div className="relative z-10">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                  Why HYI
                </span>

                <h2 className="mt-5 max-w-[700px] text-[clamp(43px,5.5vw,82px)] font-medium leading-[0.92] tracking-[-0.065em]">
                  Senior project leadership.
                  <br />

                  <span className="text-white/30">
                    Exactly when you need it.
                  </span>
                </h2>
              </div>

              <div className="flex items-end">
                <p className="max-w-[410px] text-[12px] leading-6 text-white/45">
                  Add experienced delivery leadership without slowing your
                  roadmap with a traditional recruiting cycle.
                </p>
              </div>
            </div>

            <div className="mt-20 grid border-y border-white/[0.09] sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="border-white/[0.09] px-1 py-8 sm:border-r sm:px-7 first:pl-0 last:border-r-0"
                >
                  <p className="text-[31px] font-medium tracking-[-0.05em]">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-[8px] uppercase tracking-[0.17em] text-white/30">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}