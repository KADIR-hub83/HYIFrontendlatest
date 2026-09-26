"use client";

import { motion } from "framer-motion";
import CloudAssessmentModel from "./CloudAssessmentModel";

export default function CloudAssessmentSection() {
  return (
    <section id="assessment" className="bg-[#030303] py-28 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end"
        >
          <div>
            <p className="font-mono text-[8px] tracking-[0.28em] text-[#9878ef]">
              01 / DISCOVER
            </p>
            <h2 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl">
              Know where you
              <span className="block text-[#7046e6]">actually stand.</span>
            </h2>
          </div>

          <p className="max-w-[650px] text-[14px] leading-8 text-white/[0.5] lg:justify-self-end">
            Strategy starts with evidence. Assess workloads, applications,
            data, security, operating practices, skills and AI ambitions before
            deciding what should move, modernize or remain unchanged.
          </p>
        </motion.div>

        <div className="mt-14">
          <CloudAssessmentModel />
        </div>
      </div>
    </section>
  );
}