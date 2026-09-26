"use client";

import {
  Boxes,
  BriefcaseBusiness,
  Code2,
  Layers3,
  RefreshCcw,
  Rocket,
} from "lucide-react";

const roles = [
  {
    icon: Rocket,
    title: "Digital Project Managers",
    description: "Lead complex digital products from idea to launch.",
  },
  {
    icon: RefreshCcw,
    title: "Agile Project Managers",
    description: "Build predictable delivery rhythms for agile teams.",
  },
  {
    icon: Code2,
    title: "Technical Project Managers",
    description: "Bridge technical execution and business outcomes.",
  },
  {
    icon: Layers3,
    title: "Program Managers",
    description: "Coordinate multiple connected initiatives at scale.",
  },
  {
    icon: Boxes,
    title: "Implementation Managers",
    description: "Guide products through rollout and adoption.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Delivery Managers",
    description: "Own delivery health across people and priorities.",
  },
];

export default function ProjectManagerExpertise() {
  return (
    <section className=" bg-[#080808] px-5 py-10 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <div className="sticky top-28">
           

              <h2 className="mt-5 hyi-h1 hyi-white">
                Leadership for
                <br />
                <span className="text-white/25">every kind of delivery.</span>
              </h2>

              <p className="mt-7 max-w-[360px] hyi-p hyi-gray">
                Match with project leadership based on your team, methodology,
                technical environment and delivery stage.
              </p>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2">
            {roles.map(({ icon: Icon, title, description }, index) => (
              <article
                key={title}
                className="group relative min-h-[50px] bg-[#080808] p-8 transition duration-500 hover:bg-[#0e0d11]"
              >
              

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition group-hover:border-[#8b5cf6]/30 group-hover:bg-[#8b5cf6]/10">
                  <Icon
                    size={17}
                    className="text-white/40 transition group-hover:text-[#a78bfa]"
                  />
                </div>

                <div className="mt-10">
                  <h3 className="hyi-h3 hyi-white">{title}</h3>

                  <p className="mt-3 max-w-[270px] hyi-p hyi-gray">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}