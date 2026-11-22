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
    <section className="px-5  sm:px-8 lg:px-12 ">
      <div className="mx-auto max-w-[1250px]">
        <div className="flex flex-col ">
          <div>
            <div className="sticky text-center mx-auto">
             

              <h2 className="hyi-h1 hyi-white">
                The right
               
                designer,
      
                <span className="hyi-blue">right now.</span>
              </h2>

              <p className="mt-3 max-w-[540px] hyi-p mx-auto">
                Add exactly the design capability your team needs without
                rebuilding your entire hiring pipeline.
              </p>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/[0.07] mt-5 bg-white/[0.07] sm:grid-cols-2">
            {expertise.map(({ icon: Icon, title, text }, index) => (
              <div
                key={title}
                className="group relative  bg-[#080808] p-6 transition duration-500 hover:bg-[#0d0c10]"
              >
      

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition group-hover:border-[#8b5cf6]/30 group-hover:bg-[#8b5cf6]/10">
                  <Icon
                    size={17}
                    className="text-white/45 transition group-hover:text-[#a78bfa]"
                  />
                </div>

                <div className="mt-1">
                  <h3 className="hyi-h3 hy-white">{title}</h3>

                  <p className="mt-2 max-w-[460px] hyi-p">
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