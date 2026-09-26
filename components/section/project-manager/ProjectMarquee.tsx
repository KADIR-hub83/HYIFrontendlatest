"use client";

import { motion } from "framer-motion";

const items = [
  "PLAN",
  "ALIGN",
  "EXECUTE",
  "TRACK",
  "DELIVER",
  "IMPROVE",
];

export default function ProjectMarquee() {
  return (
    <section className="overflow-hidden  py-8">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max items-center"
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center"
          >
            <span className="px-8 text-[clamp(32px,4.8vw,75px)] font-medium tracking-[-0.055em] text-white/[0.12]">
              {item}
            </span>

           
          </div>
        ))}
      </motion.div>
    </section>
  );
}