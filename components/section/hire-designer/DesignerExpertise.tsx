"use client";

import {
  Boxes,
  Component,
  LayoutDashboard,
  PenTool,
  Smartphone,
  WandSparkles,
} from "lucide-react";

const expertise = [
  {
    icon: LayoutDashboard,
    title: "Product Designers",
    text: "End-to-end digital product experiences.",
  },
  {
    icon: Smartphone,
    title: "UX/UI Designers",
    text: "Research-driven experiences and interfaces.",
  },
  {
    icon: Component,
    title: "Design System Experts",
    text: "Reusable foundations for growing products.",
  },
  {
    icon: PenTool,
    title: "Visual Designers",
    text: "High-craft brand and product expression.",
  },
  {
    icon: WandSparkles,
    title: "Interaction Designers",
    text: "Motion, behaviour and product interactions.",
  },
  {
    icon: Boxes,
    title: "UX Strategists",
    text: "Structure ambiguity into product direction.",
  },
];

export default function DesignerExpertise() {
  return (
    <section className="px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="sticky top-28">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#a78bfa]">
                Expertise
              </span>

              <h2 className="mt-5 text-[clamp(44px,5vw,78px)] font-medium leading-[0.92] tracking-[-0.06em]">
                The right
                <br />
                designer,
                <br />
                <span className="text-white/25">right now.</span>
              </h2>

              <p className="mt-7 max-w-[340px] text-[12px] leading-6 text-white/40">
                Add exactly the design capability your team needs without
                rebuilding your entire hiring pipeline.
              </p>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2">
            {expertise.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className="group relative min-h-[260px] bg-[#080808] p-8 transition duration-500 hover:bg-[#0d0c10]"
              >
                <span className="absolute right-7 top-7 font-mono text-[9px] text-white/15">
                  0{index + 1}
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition group-hover:border-[#8b5cf6]/30 group-hover:bg-[#8b5cf6]/10">
                  <Icon
                    size={17}
                    className="text-white/45 transition group-hover:text-[#a78bfa]"
                  />
                </div>

                <div className="mt-20">
                  <h3 className="text-[18px] font-medium">{title}</h3>

                  <p className="mt-3 max-w-[260px] text-[11px] leading-5 text-white/35">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}