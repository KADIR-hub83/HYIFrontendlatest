"use client";

import { motion } from "framer-motion";
import {
  Check,
  Clock3,
  UserCheck,
  UserRound,
} from "lucide-react";

const reviews = [
  {
    title: "Deployment approval",
    person: "AI Governance Lead",
    status: "Approved",
    done: true,
  },
  {
    title: "High-impact decision review",
    person: "Domain Specialist",
    status: "In review",
    done: false,
  },
  {
    title: "Risk exception",
    person: "Compliance Team",
    status: "Queued",
    done: false,
  },
];

export default function HumanOversight() {
  return (
    <section className="bg-[#050505] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-4 md:px-8">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-[38px] border border-white/[0.08] bg-gradient-to-b from-[#12100d] to-[#080807] p-8 md:p-11">
            <div className="flex items-center gap-3">
              <UserCheck size={18} className="text-violet-100/70" />

              <span className="text-[8px] uppercase tracking-[0.3em] text-violet-100/55">
                Human oversight
              </span>
            </div>

            <h2 className="mt-8 max-w-[700px] text-5xl font-medium tracking-[-0.055em] md:text-7xl">
              AI proposes.
              <span className="block text-white/55">People stay in control.</span>
            </h2>

            <p className="mt-8 max-w-[650px] text-[15px] leading-8 text-white/65">
              Design approval paths and escalation workflows that keep
              accountable people involved where judgment, risk or context
              matters.
            </p>

            <div className="mt-12 flex -space-x-3">
              {["AK", "RS", "MJ", "PN", "HY"].map((person, index) => (
                <motion.div
                  key={person}
                  whileHover={{ y: -5 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#0b0a09] bg-[#d6b980] text-xs font-semibold text-black"
                  style={{
                    opacity: 1 - index * 0.08,
                  }}
                >
                  {person}
                </motion.div>
              ))}

              <div className="ml-6 flex items-center text-xs text-white/40">
                Responsible AI review team
              </div>
            </div>
          </div>

          <div className="rounded-[38px] border border-white/[0.08] bg-[#0b0a09] p-7 md:p-9">
            <p className="text-[8px] tracking-[0.22em] text-white/35">
              APPROVAL QUEUE
            </p>

            <div className="mt-8 space-y-3">
              {reviews.map((review) => (
                <div
                  key={review.title}
                  className="rounded-[22px] border border-white/[0.07] bg-black/20 p-5"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08]">
                        <UserRound size={14} className="text-white/55" />
                      </div>

                      <div>
                        <p className="text-sm text-white/75">{review.title}</p>

                        <p className="mt-2 text-[10px] text-white/35">
                          {review.person}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`flex items-center gap-2 rounded-full px-3 py-2 text-[8px] ${
                        review.done
                          ? "bg-emerald-400/[0.08] text-emerald-300/65"
                          : "bg-white/[0.04] text-white/40"
                      }`}
                    >
                      {review.done ? <Check size={9} /> : <Clock3 size={9} />}
                      {review.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[20px] border border-violet-200/10 bg-violet-200/[0.025] p-5">
              <p className="text-[8px] tracking-[0.2em] text-violet-100/50">
                HUMAN CONTROL STATUS
              </p>

              <p className="mt-3 text-sm text-white/65">
                Mandatory approval enabled for high-impact model actions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}