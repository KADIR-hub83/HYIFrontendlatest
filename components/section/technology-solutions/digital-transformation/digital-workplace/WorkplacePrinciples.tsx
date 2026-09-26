"use client";

import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Start with work, not software.",
    description:
      "Understand how employees actually accomplish tasks before deciding which platforms, AI capabilities or automation patterns should be introduced.",
  },
  {
    number: "02",
    title: "Make knowledge discoverable.",
    description:
      "AI cannot compensate for enterprise information that lacks ownership, permissions, structure and reliable source context.",
  },
  {
    number: "03",
    title: "Reduce tool boundaries.",
    description:
      "Employees should spend less effort understanding where information lives and more effort applying it to meaningful work.",
  },
  {
    number: "04",
    title: "Keep humans in control.",
    description:
      "AI assistance should increase employee capability without hiding consequential actions or decisions from appropriate human oversight.",
  },
  {
    number: "05",
    title: "Design for trust.",
    description:
      "Employees need understandable expectations about what workplace AI can access, what it can do and where its answers originate.",
  },
  {
    number: "06",
    title: "Measure the workflow.",
    description:
      "Evaluate whether workplace transformation actually reduces friction, improves access to knowledge and supports better operational outcomes.",
  },
];

export default function WorkplacePrinciples() {
  return (
    <section className="border-y border-white/[0.08] bg-black px-5 py-40 md:px-10 md:py-60">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-20 lg:grid-cols-[.3fr_1.7fr]">
          <div>
            <div className="lg:sticky lg:top-32">
              <p className="font-mono text-[7px] tracking-[0.22em] text-white/[0.27]">
                13 / PRINCIPLES
              </p>
            </div>
          </div>

          <div>
            {principles.map((item) => (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                className="min-h-[310px] border-t border-white/[0.08] py-10"
              >
                <span className="font-mono text-[6px] text-white/[0.14]">
                  PRINCIPLE / {item.number}
                </span>

                <div className="mt-16 grid gap-10 md:grid-cols-[.8fr_1fr]">
                  <h3 className="text-4xl font-medium leading-[1] tracking-[-0.055em] md:text-5xl">
                    {item.title}
                  </h3>

                  <p className="text-[13px] leading-8 text-white/[0.36]">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}

            <div className="border-t border-white/[0.08]" />
          </div>
        </div>
      </div>
    </section>
  );
}