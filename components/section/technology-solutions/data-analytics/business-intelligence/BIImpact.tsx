"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "4.8×",
    title: "Faster Decisions",
    text: "Reduce the distance between business signals and meaningful action.",
  },
  {
    value: "360°",
    title: "Business Visibility",
    text: "Connect performance across customers, finance and operations.",
  },
  {
    value: "24/7",
    title: "Live Intelligence",
    text: "Continuously monitor important business metrics and changes.",
  },
  {
    value: "1",
    title: "Source of Truth",
    text: "Create a shared intelligence layer across teams and leadership.",
  },
];

export default function BIImpact() {
  return (
    <section className="bg-[#050505] ">
      <div className="mx-auto max-w-[1350px] px-4 md:px-8">
        <div className=" text-center">
       

          <h2 className=" hyi-h1 hyi-white">
            Less reporting.
            <span className="block hyi-blue">More intelligence.</span>
          </h2>

          <p className="mt-2 max-w-[650px] mx-auto hyi-p">
            Turn analytics into a living business capability instead of a
            collection of static reports.
          </p>
        </div>

        <div className="mt-6 grid overflow-hidden rounded-[38px] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative  border-b border-r border-white/[0.08] bg-[#090806] p-8"
            >
         

              <div className=" hyi-h1 hyi-white">
                {item.value}
              </div>

              <h3 className="mt-2 hyi-h3 hyi-white">{item.title}</h3>

              <p className="mt-2 hyi-p">
                {item.text}
              </p>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-violet-600 to-violet-100 transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}