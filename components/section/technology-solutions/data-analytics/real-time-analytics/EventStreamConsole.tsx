"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  CircleDot,
  Terminal,
} from "lucide-react";

const logs = [
  {
    time: "00:00:18.204",
    stream: "orders.events",
    event: "order.created",
    status: "PROCESSED",
  },
  {
    time: "00:00:18.217",
    stream: "payment.events",
    event: "transaction.authorized",
    status: "PROCESSED",
  },
  {
    time: "00:00:18.226",
    stream: "sensor.telemetry",
    event: "temperature.changed",
    status: "ENRICHED",
  },
  {
    time: "00:00:18.239",
    stream: "customer.activity",
    event: "session.signal",
    status: "SCORED",
  },
  {
    time: "00:00:18.251",
    stream: "risk.events",
    event: "anomaly.detected",
    status: "ALERT",
  },
  {
    time: "00:00:18.263",
    stream: "inventory.events",
    event: "stock.updated",
    status: "PROCESSED",
  },
];

export default function EventStreamConsole() {
  return (
    <section className="bg-[#030303] py-28">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="rounded-[36px] border border-white/[0.08] bg-[#070708]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] px-7 py-6">
            <div className="flex items-center gap-3">
              <Terminal
                size={14}
                className="text-[#e8def3]/55"
              />

              <div>
                <p className="font-mono text-[6px] tracking-[0.22em] text-white/35">
                  LIVE EVENT STREAM
                </p>

                <p className="mt-1 text-[9px] text-white/45">
                  Production event processing
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-[6px] tracking-[0.15em] text-white/25">
              <motion.span
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-[#eee7f7]"
              />
              INGESTING
            </div>
          </div>

          <div className="overflow-x-auto p-4 md:p-7">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-[140px_1fr_1fr_120px] border-b border-white/[0.06] px-5 py-4 font-mono text-[5px] tracking-[0.18em] text-white/20">
                <span>TIMESTAMP</span>
                <span>STREAM</span>
                <span>EVENT</span>
                <span>STATE</span>
              </div>

              {logs.map((log, index) => (
                <motion.div
                  key={`${log.time}-${log.event}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="grid grid-cols-[140px_1fr_1fr_120px] border-b border-white/[0.045] px-5 py-5"
                >
                  <span className="font-mono text-[7px] text-white/25">
                    {log.time}
                  </span>

                  <div className="flex items-center gap-3">
                    <CircleDot
                      size={8}
                      className="text-[#e7dcf2]/35"
                    />

                    <span className="text-[9px] text-white/55">
                      {log.stream}
                    </span>
                  </div>

                  <span className="font-mono text-[8px] text-[#ded4e9]/45">
                    {log.event}
                  </span>

                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      size={9}
                      className="text-[#e7dcf2]/40"
                    />

                    <span className="font-mono text-[6px] text-white/35">
                      {log.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid border-t border-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["84,219", "EVENTS / SEC"],
              ["18 ms", "AVG LATENCY"],
              ["12", "ACTIVE STREAMS"],
              ["0.02%", "ERROR RATE"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="border-r border-white/[0.06] p-6"
              >
                <p className="text-xl font-light">
                  {value}
                </p>

                <p className="mt-3 font-mono text-[5px] tracking-[0.17em] text-white/20">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}