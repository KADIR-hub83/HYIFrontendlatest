"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowDownRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const risks = [
  {
    title: "API dependency",
    type: "Technical",
    level: "Medium",
    owner: "Engineering",
  },
  {
    title: "Partner approval",
    type: "External",
    level: "High",
    owner: "Operations",
  },
  {
    title: "QA capacity",
    type: "Resource",
    level: "Low",
    owner: "Delivery",
  },
];

export default function RiskControl() {
  return (
    <section className="px-5 py-10 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1450px]">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#09090c] p-5 sm:p-8">
            <img
              src="/Card-bg-04.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />

            <div className="relative z-10 rounded-[22px] border border-white/[0.08] bg-[#0d0d10]/90 p-5 backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                    Risk register
                  </p>

                  <h3 className="mt-2 hyi-h3 hyi-white">
                    Delivery health
                  </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8b5cf6]/10">
                  <ShieldCheck size={16} className="text-[#a78bfa]" />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-3">
                {[
                  ["03", "Open"],
                  ["08", "Resolved"],
                  ["01", "Critical"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-4"
                  >
                    <p className="text-[21px]">{value}</p>
                    <p className="mt-1 text-[12px] text-white/25">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-2">
                {risks.map((risk) => (
                  <div
                    key={risk.title}
                    className="grid gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 sm:grid-cols-[1fr_90px_80px]"
                  >
                    <div>
                      <p className="hyi-h3 text-white/60">
                        {risk.title}
                      </p>
                      <p className="mt-1 text-[12px] text-white/20">
                        {risk.type}
                      </p>
                    </div>

                    <span className="text-[12px] text-white/30">
                      {risk.owner}
                    </span>

                    <div
                      className={`flex items-center gap-1 text-[12px] ${
                        risk.level === "High"
                          ? "text-rose-400"
                          : risk.level === "Medium"
                            ? "text-amber-400"
                            : "text-emerald-400"
                      }`}
                    >
                      <AlertTriangle size={9} />
                      {risk.level}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl border border-emerald-400/10 bg-emerald-400/[0.04] p-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2
                    size={12}
                    className="text-emerald-400"
                  />

                  <span className="text-[8px] text-white/40">
                    Risk exposure reduced this sprint
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[8px] text-emerald-400">
                  <ArrowDownRight size={10} />
                  18%
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-10">
          

            <h2 className="mt-5 text-[clamp(45px,5vw,32px)] ">
              Problems are cheaper
              <br />
              <span className="text-white/25">
                before they happen.
              </span>
            </h2>

            <p className="mt-7 max-w-[430px] hyi-p hyi-gray">
              Experienced project managers continuously surface risks,
              dependencies and capacity issues so your team can act before
              timelines are affected.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}