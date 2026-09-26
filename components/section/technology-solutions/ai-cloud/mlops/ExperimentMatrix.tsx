"use client";

import { motion } from "framer-motion";
import {
  Beaker,
  BrainCircuit,
  CheckCircle2,
  FlaskConical,
  Sparkles,
} from "lucide-react";

const runs = [
  { run: "RUN-184", model: "Candidate A", status: "COMPLETED" },
  { run: "RUN-185", model: "Candidate B", status: "COMPLETED" },
  { run: "RUN-186", model: "Candidate C", status: "VALIDATING" },
  { run: "RUN-187", model: "Candidate D", status: "TRAINING" },
];

export default function ExperimentMatrix() {
  return (
    <div className="overflow-hidden rounded-[34px] border border-[#7046e6]/20 bg-[#030303]">
      <div className="flex items-center justify-between border-b border-white/[0.06] p-6 md:p-8">
        <div>
          <p className="font-mono text-[7px] tracking-[0.25em] text-[#9878ef]">
            EXPERIMENT LAB
          </p>
          <p className="mt-2 text-[10px] text-white/[0.28]">
            Reproducible model comparison
          </p>
        </div>
        <FlaskConical size={15} className="text-[#9878ef]" />
      </div>

      <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
        {runs.map((item, index) => (
          <motion.div
            key={item.run}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -5 }}
            className="rounded-[22px] border border-white/[0.07] bg-[#080808] p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-[#7046e6]/25 bg-[#7046e6]/[0.07]">
                <Beaker size={14} className="text-[#c9b6ff]" />
              </div>

              <span className="font-mono text-[6px] text-[#9878ef]">
                {item.status}
              </span>
            </div>

            <p className="mt-7 font-mono text-[6px] text-white/[0.22]">
              {item.run}
            </p>
            <h3 className="mt-3 text-xl">{item.model}</h3>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {["DATA", "PARAMS", "EVAL"].map((label, i) => (
                <div
                  key={label}
                  className="rounded-[11px] border border-white/[0.06] bg-black p-3 text-center"
                >
                  {i === 0 ? (
                    <CheckCircle2
                      size={9}
                      className="mx-auto text-[#9878ef]"
                    />
                  ) : i === 1 ? (
                    <BrainCircuit
                      size={9}
                      className="mx-auto text-[#9878ef]"
                    />
                  ) : (
                    <Sparkles size={9} className="mx-auto text-[#9878ef]" />
                  )}

                  <p className="mt-2 font-mono text-[5px] text-white/[0.2]">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 h-[3px] overflow-hidden bg-white/[0.05]">
              <motion.div
                animate={{ width: ["25%", "90%", "55%", "80%"] }}
                transition={{
                  duration: 5,
                  delay: index * 0.5,
                  repeat: Infinity,
                }}
                className="h-full bg-gradient-to-r from-[#7046e6] to-[#c9b6ff]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}