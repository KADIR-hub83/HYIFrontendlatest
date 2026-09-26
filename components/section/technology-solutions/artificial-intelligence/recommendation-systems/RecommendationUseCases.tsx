"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Clapperboard,
  GraduationCap,
  Newspaper,
  ShoppingBag,
  WalletCards,
} from "lucide-react";

const useCases = [
  {
    icon: ShoppingBag,
    title: "E-commerce",
    text: "Personalized product discovery, cross-sell, upsell and intelligent merchandising.",
  },
  {
    icon: Clapperboard,
    title: "Media & Streaming",
    text: "Recommend videos, music, shows and content based on individual taste and context.",
  },
  {
    icon: Newspaper,
    title: "Content Platforms",
    text: "Rank articles, feeds and digital experiences around user interests and engagement.",
  },
  {
    icon: WalletCards,
    title: "Financial Services",
    text: "Surface relevant products, services and next-best actions based on customer context.",
  },
  {
    icon: GraduationCap,
    title: "Learning Platforms",
    text: "Recommend courses, lessons and learning paths around individual progress and goals.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Enterprise",
    text: "Personalize knowledge, workflows and internal experiences for employees and customers.",
  },
];

export default function RecommendationUseCases() {
  return (
    <section className="border-y border-white/[0.06] bg-[#07070a] py-32 md:py-48">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <span className="text-[8px] uppercase tracking-[0.42em] text-[#d9c7f5]/60">
            07 / Recommendation Experiences
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            Intelligence for
            <span className="block text-[#d3c6e2]/65">
              every customer journey.
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  delay: index * 0.07,
                }}
                className="group relative min-h-[330px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0a090d] p-8"
              >
                <div className="absolute bottom-[-100px] right-[-100px] h-[270px] w-[270px] rounded-full bg-[#dfceff]/[0.04] blur-[80px] transition duration-500 group-hover:bg-[#dfceff]/[0.11]" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#e3d4fa]/15 bg-[#e3d4fa]/[0.05]">
                      <Icon
                        size={20}
                        className="text-[#e4d7f7]"
                      />
                    </div>

                    <span className="text-[8px] text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl text-white/85">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-white/58">
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}