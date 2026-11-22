"use client";

import { motion } from "framer-motion";
import CloudAssessmentModel from "./CloudAssessmentModel";

export default function CloudAssessmentSection() {
  return (
    <section id="assessment" className="bg-[#030303] ">
      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col text-center"
        >
          <div>
      
            <h2 className=" hyi-h1 hyi-white">
              Know where you
              <span className="block hyi-blue">actually stand.</span>
            </h2>
          </div>

          <p className="max-w-[650px] hyi-p mx-auto">
            Strategy starts with evidence. Assess workloads, applications,
            data, security, operating practices, skills and AI ambitions before
            deciding what should move, modernize or remain unchanged.
          </p>
        </motion.div>

        <div className="mt-6">
          <CloudAssessmentModel />
        </div>
      </div>
    </section>
  );
}