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
    <section className="relative overflow-hidden bg-[#030303] py-28">
      <div className="absolute left-[35%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#7046e6]/10 blur-[170px]" />

      <div className="mx-auto max-w-[1500px] px-5 md:px-10">
        <div className="mx-auto max-w-[950px] text-center">
          <p className="font-mono text-[7px] tracking-[0.3em] text-[#9675ed]">
            06 / ANALYTICS READY
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.055em] md:text-7xl">
            Data people can
            <span className="text-[#7046e6]"> actually use.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[740px] text-[13px] leading-7 text-white/[0.5]">
            A data platform should reduce the distance between raw information
            and meaningful analysis by providing trusted, understandable and
            reusable data products.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-16 min-h-[650px] overflow-hidden rounded-[38px] border border-white/[0.08]"
        >
          <Image
            src="/images/data-platforms/analytics.webp"
            alt="Analytics and business intelligence"
            fill
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/30 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 grid gap-3 p-6 md:grid-cols-4 md:p-8">
            {items.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-[20px] border border-white/[0.09] bg-black/70 p-5 backdrop-blur-xl"
              >
                <Icon size={14} className="text-[#9f7df0]" />

                <h3 className="mt-5 text-[15px]">{title}</h3>

                <p className="mt-3 text-[10px] leading-5 text-white/[0.48]">
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