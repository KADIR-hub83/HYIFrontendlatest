"use client";

import { motion } from "framer-motion";
import {
  Database,
  BrainCircuit,
  FlaskConical,
  Gauge,
  Rocket,
} from "lucide-react";

const stages = [
  {
    no: "01",
    Icon: Database,
    title: "Data",
    text: "Prepare, validate and transform enterprise data into model-ready training datasets.",
  },
  {
    no: "02",
    Icon: BrainCircuit,
    title: "Architecture",
    text: "Select and engineer model architectures aligned with the problem and data.",
  },
  {
    no: "03",
    Icon: FlaskConical,
    title: "Train",
    text: "Run controlled experiments, optimization cycles and distributed model training.",
  },
  {
    no: "04",
    Icon: Gauge,
    title: "Evaluate",
    text: "Measure model quality, robustness, latency and business-relevant performance.",
  },
  {
    no: "05",
    Icon: Rocket,
    title: "Deploy",
    text: "Move validated models into scalable production inference environments.",
  },
];

export default function ModelDevelopmentPipeline() {
  return (
    <section className="relative bg-[#020203] py-32 md:py-48">
      <div className="mx-auto max-w-[1450px] px-5 md:px-10">
        <div className="mx-auto max-w-[950px] text-center">
          <span className="text-[8px] uppercase tracking-[0.4em] text-violet-200/60">
            02 / Development Lifecycle
          </span>

          <h2 className="mt-7 text-5xl font-medium tracking-[-0.055em] md:text-7xl">
            From raw data to
            <span className="block text-white/55">production intelligence.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-[720px] text-[15px] leading-8 text-white/65">
            A complete engineering lifecycle for designing, training,
            validating and operating enterprise AI models.
          </p>
        </div>

        <div className="relative mt-24">
          <div className="absolute left-[10%] right-[10%] top-[35px] hidden h-px bg-gradient-to-r from-transparent via-violet-200/30 to-transparent lg:block" />

          <div className="grid gap-4 lg:grid-cols-5">
            {stages.map(({ no, Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-full border border-violet-200/20 bg-[#050507]">
                  <Icon size={18} className="text-violet-100/80" />
                </div>

                <div className="min-h-[310px] rounded-[27px] border border-white/[0.08] bg-[#08080b] p-7">
                  <span className="text-[8px] text-white/25">{no}</span>

                  <h3 className="mt-12 text-2xl text-white/88">{title}</h3>

                  <p className="mt-5 text-sm leading-7 text-white/60">{text}</p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    viewport={{ once: true }}
                    className="mt-10 h-px bg-gradient-to-r from-violet-200/70 to-transparent"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}