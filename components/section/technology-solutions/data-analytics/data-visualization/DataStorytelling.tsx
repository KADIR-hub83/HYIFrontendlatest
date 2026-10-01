"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const stories = [
  {
    number: "01",
    title: "A trend appears.",
    text: "Revenue growth accelerates across enterprise customers.",
    value: "+18.6%",
  },
  {
    number: "02",
    title: "The pattern becomes clear.",
    text: "Growth is concentrated in three high-value customer segments.",
    value: "3 SEGMENTS",
  },
  {
    number: "03",
    title: "The story creates action.",
    text: "Commercial teams can prioritize the markets showing the strongest momentum.",
    value: "ACTION",
  },
];

export default function DataStorytelling() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % stories.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="border-y border-white/[0.06] bg-[#090806] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div>
            <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
              Data storytelling
            </span>

            <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
              Dont show data.
              <span className="block text-white/55">Tell its story.</span>
            </h2>

            <p className="mt-8 max-w-[570px] text-[15px] leading-8 text-white/65">
              Great visualization creates a narrative. It guides attention from
              a signal to its meaning and finally to the decision it should
              influence.
            </p>
          </div>

          <div className="relative min-h-[600px] overflow-hidden rounded-[40px] border border-white/[0.09] bg-[#080807] p-8 md:p-12">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Sparkles size={14} className="text-violet-200/70" />
                <span className="text-[8px] tracking-[0.2em] text-white/35">
                  DATA NARRATIVE
                </span>
              </div>

              <span className="text-[8px] text-white/25">
                {active + 1} / {stories.length}
              </span>
            </div>

            <div className="relative mt-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{
                    opacity: 0,
                    y: 30,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -25,
                    filter: "blur(10px)",
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-[8px] tracking-[0.25em] text-violet-200/50">
                    CHAPTER {stories[active].number}
                  </span>

                  <h3 className="mt-7 text-4xl font-medium tracking-[-0.045em] md:text-6xl">
                    {stories[active].title}
                  </h3>

                  <p className="mt-7 max-w-[650px] text-[15px] leading-8 text-white/60">
                    {stories[active].text}
                  </p>

                  <div className="mt-12 text-5xl font-light tracking-[-0.05em] text-violet-100 md:text-7xl">
                    {stories[active].value}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-10 left-8 right-8 flex gap-2 md:left-12 md:right-12">
              {stories.map((_, index) => (
                <div
                  key={index}
                  className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/[0.07]"
                >
                  {active === index && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3.5, ease: "linear" }}
                      className="h-full bg-violet-200"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}