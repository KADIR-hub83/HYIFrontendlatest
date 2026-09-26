"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  CircleDot,
  Terminal,
} from "lucide-react";

const recommendations = [
  {
    action: "Reallocate inventory to West region",
    reason: "Projected demand exceeds available regional stock.",
    impact: "+14.8%",
    confidence: "94%",
  },
  {
    action: "Increase production window by 6 hours",
    reason: "Capacity constraint expected within next planning cycle.",
    impact: "+8.1%",
    confidence: "91%",
  },
  {
    action: "Move 12% budget to digital channel",
    reason: "Marginal return exceeds current channel allocation.",
    impact: "+6.7%",
    confidence: "88%",
  },
];

export default function RecommendationConsole() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="rounded-[34px] border border-white/[0.08] bg-[#080808]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-7 py-6">
            <div className="flex items-center gap-3">
              <Terminal size={14} className="text-[#e7dcf4]/60" />

              <span className="font-mono text-[7px] tracking-[0.2em] text-white/35">
                PRESCRIPTIVE DECISION CONSOLE
              </span>
            </div>

            <div className="flex items-center gap-2 text-[6px] text-white/25">
              <motion.span
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ repeat: Infinity, duration: 1.4 }}
                className="h-1.5 w-1.5 rounded-full bg-[#e7dcf4]"
              />
              LIVE
            </div>
          </div>

          <div className="p-5 md:p-7">
            {recommendations.map((item, index) => (
              <motion.div
                key={item.action}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-3 grid gap-6 rounded-[24px] border border-white/[0.06] bg-[#050505] p-6 md:grid-cols-[1.5fr_1fr_.35fr_.35fr]"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <CircleDot size={9} className="text-[#e8ddf5]/50" />

                    <p className="text-[12px] text-white/80">
                      {item.action}
                    </p>
                  </div>
                </div>

                <p className="text-[9px] leading-5 text-white/35">
                  {item.reason}
                </p>

                <div>
                  <p className="font-mono text-[5px] text-white/20">
                    IMPACT
                  </p>
                  <p className="mt-2 text-[11px] text-white/65">
                    {item.impact}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[5px] text-white/20">
                    CONF.
                  </p>
                  <p className="mt-2 flex items-center gap-2 text-[11px] text-white/65">
                    <CheckCircle2 size={9} />
                    {item.confidence}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}