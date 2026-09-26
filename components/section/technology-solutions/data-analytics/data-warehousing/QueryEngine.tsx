"use client";

import { motion } from "framer-motion";
import { Activity, CheckCircle2, Terminal } from "lucide-react";

const queries = [
  "SELECT revenue, region FROM fact_sales",
  "JOIN dim_customer USING (customer_id)",
  "WHERE order_date >= CURRENT_DATE - 30",
  "GROUP BY revenue, region",
  "ORDER BY revenue DESC",
];

export default function QueryEngine() {
  return (
    <section className="bg-[#030303] py-28 md:py-44">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="text-center">
          <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-[#e9ddff]/55">
            Query Engine
          </span>

          <h2 className="mx-auto mt-7 max-w-[1100px] text-5xl font-medium tracking-[-0.055em] md:text-8xl">
            Ask more.
            <span className="block text-white/50">Wait less.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-[700px] text-[15px] leading-8 text-white/60">
            Optimize warehouse architecture around the workloads that matter,
            from executive dashboards to advanced analytical queries.
          </p>
        </div>

        <div className="mt-20 overflow-hidden rounded-[40px] border border-[#eee5ff]/[0.11] bg-[#0a0a0c]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-7 py-5">
            <div className="flex items-center gap-3">
              <Terminal size={13} className="text-[#eee5ff]/65" />

              <span className="font-mono text-[8px] tracking-[0.2em] text-white/35">
                HYI WAREHOUSE / QUERY 0248
              </span>
            </div>

            <span className="flex items-center gap-2 font-mono text-[7px] text-emerald-300/60">
              <CheckCircle2 size={10} />
              CONNECTED
            </span>
          </div>

          <div className="grid lg:grid-cols-[1.15fr_.85fr]">
            <div className="min-h-[570px] border-b border-white/[0.07] p-7 lg:border-b-0 lg:border-r md:p-10">
              <div className="font-mono text-[9px] leading-8">
                <span className="text-[#eee5ff]/70">warehouse@hyi</span>
                <span className="text-white/25">:~$ execute query.sql</span>
              </div>

              <div className="mt-8 overflow-hidden rounded-[24px] border border-white/[0.07] bg-black/30 p-6">
                {queries.map((query, index) => (
                  <motion.div
                    key={query}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.3,
                      duration: 0.8,
                    }}
                    className="overflow-hidden whitespace-nowrap border-b border-white/[0.04] py-4 font-mono text-[9px] text-[#e7deef]/55"
                  >
                    <span className="mr-5 text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {query}
                  </motion.div>
                ))}

                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                  className="mt-5 block h-4 w-[2px] bg-[#eee5ff]"
                />
              </div>

              <div className="mt-7 flex items-center gap-3 font-mono text-[8px] text-emerald-300/55">
                <Activity size={11} />
                Query completed in 31ms · 4,829 rows
              </div>
            </div>

            <div className="p-7 md:p-10">
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["31ms", "EXECUTION"],
                  ["4.8K", "ROWS"],
                  ["182MB", "SCANNED"],
                  ["96%", "CACHE"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[20px] border border-[#eee5ff]/[0.09] bg-[#eee5ff]/[0.02] p-5"
                  >
                    <div className="text-2xl font-light text-[#f1ebf8]">
                      {value}
                    </div>

                    <div className="mt-2 font-mono text-[6px] tracking-[0.18em] text-white/30">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <span className="font-mono text-[7px] tracking-[0.2em] text-white/30">
                  QUERY ACTIVITY
                </span>

                <div className="mt-7 flex h-[230px] items-end gap-1.5">
                  {Array.from({ length: 32 }).map((_, index) => {
                    const base = 22 + ((index * 17) % 70);

                    return (
                      <motion.div
                        key={index}
                        animate={{
                          height: [
                            `${base}%`,
                            `${Math.min(100, base + 18)}%`,
                            `${base}%`,
                          ],
                        }}
                        transition={{
                          duration: 2 + (index % 5) * 0.2,
                          repeat: Infinity,
                        }}
                        className="flex-1 rounded-t-sm border-t border-[#eee5ff]/20 bg-gradient-to-t from-[#eee5ff]/[0.02] to-[#eee5ff]/55"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}