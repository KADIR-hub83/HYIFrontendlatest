"use client";

import { motion } from "framer-motion";

const bars = [38, 46, 42, 57, 51, 67, 62, 76, 69, 82, 78, 94];

export default function LiveRevenueChart() {
  return (
    <div className="relative h-[220px] overflow-hidden">
      {[0, 1, 2, 3].map((line) => (
        <div
          key={line}
          className="absolute left-0 right-0 border-t border-white/[0.05]"
          style={{ top: `${line * 30 + 5}%` }}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 flex h-full items-end gap-2">
        {bars.map((height, index) => (
          <div
            key={index}
            className="relative flex h-full flex-1 items-end"
          >
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full overflow-hidden rounded-t-md border-x border-t border-violet-200/[0.10] bg-gradient-to-t from-violet-700/15 to-violet-200/35"
            >
              <motion.div
                animate={{ y: ["120%", "-120%"] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
                className="absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-white/[0.12] to-transparent"
              />
            </motion.div>
          </div>
        ))}
      </div>

      <motion.svg
        viewBox="0 0 1000 220"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <motion.path
          d="M0 185 C90 175 120 165 180 170 C250 175 270 130 340 140 C420 150 430 105 500 115 C580 125 610 78 680 90 C760 105 790 58 850 65 C910 70 950 30 1000 36"
          fill="none"
          stroke="rgba(221,214,254,.85)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4 }}
        />
      </motion.svg>
    </div>
  );
}