"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { NetworkSecurityPage } from "./networkSecurityData";

export default function NetworkWorkflow({
  page,
}: {
  page: NetworkSecurityPage;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-black px-5  md:px-8 ">
      <div className="mx-auto max-w-[1280px]">
        <ol className="relative mt-8 grid gap-6 md:grid-cols-3">
          {/* Dashed connector line (desktop only), passes behind the badges */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-4 hidden border-t border-dashed border-[#7c3aed]/40 md:block"
          />

          {page.workflow.map((x, i) => (
            <motion.li
              key={x.step}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="relative list-none"
            >
            

              {/* Card */}
              <div className="hyi-skeu  h-full p-6">
                <h3 className="hyi-h3 ">
                  {x.title}
                </h3>
                <p className="mt-2 hyi-white hyi-p">
                  {x.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}