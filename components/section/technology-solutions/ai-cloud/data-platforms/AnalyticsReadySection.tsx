"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart3,
  Gauge,
  LineChart,
  Search,
} from "lucide-react";

const items = [
  {
    Icon: BarChart3,
    title: "Business Intelligence",
    text: "Provide structured datasets for dashboards and recurring reporting.",
  },
  {
    Icon: LineChart,
    title: "Advanced Analytics",
    text: "Create analytical foundations for deeper statistical and exploratory work.",
  },
  {
    Icon: Search,
    title: "Data Discovery",
    text: "Make trusted information easier for teams to discover and understand.",
  },
  {
    Icon: Gauge,
    title: "Operational Insight",
    text: "Bring timely information closer to operational decision-making.",
  },
];

export default function AnalyticsReadySection() {
  return (
    <section className="relative overflow-hidden bg-[#030303] py-10">
      <div className="absolute left-[35%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#7046e6]/10 blur-[170px]" />

      <div className="mx-auto max-w-[1350px] px-5 md:px-10">
        <div className="mx-auto max-w-[950px] text-center">
        
          <h2 className="hyi-h1 hyi-white">
            Data people can
            <span className="hyi-blue"> actually use.</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[740px] hyi-p">
            A data platform should reduce the distance between raw information
            and meaningful analysis by providing trusted, understandable and
            reusable data products.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-5 "
        >
     


          <div className="relative inset-x-0 bottom-0 grid gap-3 p-6 md:grid-cols-4 md:p-8">
            {items.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-[20px] border border-white/[0.09] bg-black/70 p-5 backdrop-blur-xl"
              >
                <Icon size={14} className="text-[#9f7df0]" />

                <h3 className="mt-2 hyi-h3 hyi-white">{title}</h3>

                <p className="mt-1 hyi-p">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}