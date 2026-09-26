"use client";

import { motion } from "framer-motion";

const words = [
  "RESEARCH",
  "STRATEGY",
  "EXPERIENCE",
  "INTERFACE",
  "SYSTEMS",
  "PROTOTYPE",
];

export default function DesignMarquee() {
  return (
    <section className="overflow-hidden border-b border-white/[0.06] py-8">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max items-center"
      >
        {[...words, ...words].map((word, index) => (
          <div
            key={`${word}-${index}`}
            className="flex items-center"
          >
            <span className="px-7 text-[clamp(30px,4.5vw,72px)] font-medium tracking-[-0.05em] text-white/[0.12]">
              {word}
            </span>

            <span className="h-2 w-2 rounded-full bg-[#8b5cf6]" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}