"use client";

import React from "react";
import { motion } from "framer-motion";

interface MotionRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export default function MotionReveal({
  children,
  delay = 0,
  duration = 0.7,
  y = 40,
  className = "",
}: MotionRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}