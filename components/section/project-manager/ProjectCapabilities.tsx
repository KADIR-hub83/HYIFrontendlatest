// "use client";

// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   CalendarRange,
//   ChartNoAxesCombined,
//   GitBranch,
//   ShieldCheck,
// } from "lucide-react";

// const capabilities = [
//   {
//     number: "01",
//     icon: CalendarRange,
//     title: "Planning & Delivery",
//     text: "Turn goals into realistic roadmaps, milestones, ownership and measurable delivery plans.",
//     image: "/Card-bg-01.webp",
//     className: "lg:row-span-2",
//   },
//   {
//     number: "02",
//     icon: GitBranch,
//     title: "Cross-team Coordination",
//     text: "Keep product, design, engineering and business teams moving in one direction.",
//     image: "/Card-bg-02.webp",
//     className: "",
//   },
//   {
//     number: "03",
//     icon: ShieldCheck,
//     title: "Risk Management",
//     text: "Surface dependencies and blockers before they become delivery problems.",
//     image: "/Card-bg-04.webp",
//     className: "",
//   },
//   {
//     number: "04",
//     icon: ChartNoAxesCombined,
//     title: "Reporting & Visibility",
//     text: "Give stakeholders a clear view of progress, performance, risks and decisions.",
//     image: "/Card-bg-03.webp",
//     className: "lg:col-span-2",
//   },
// ];

// export default function ProjectCapabilities() {
//   return (
//     <section className="px-5 py-10 sm:px-10 lg:px-20">
//       <div className="mx-auto max-w-[1450px]">
//         <div className="mb-16 grid gap-10 lg:grid-cols-2">
//           <div>
       

//             <h2 className="mt-5 max-w-[720px] hyi-white hyi-h1">
//               Structure for every moving part.
//             </h2>
//           </div>

//           <div className="flex items-end lg:justify-end">
//             <p className="max-w-[420px hyi-p">
//               Bring clarity to scope, people, priorities and timelines with
//               experienced project managers who know how modern digital teams
//               operate.
//             </p>
//           </div>
//         </div>

//         <div className="grid auto-rows-[310px] gap-4 lg:grid-cols-2">
//           {capabilities.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.article
//                 key={item.title}
//                 initial={{ opacity: 0, y: 25 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.07 }}
//                 className={`group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#09090b] ${item.className}`}
//               >
//                 <img
//                   src={item.image}
//                   alt=""
//                   className="absolute inset- h-full w-full object-cover opacity-100 transition duration-700 group-hover:scale-105"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/40 to-black/80" />

//                 <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-9">
//                   <div className="flex justify-between">
//                     <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/25 backdrop-blur-xl">
//                       <Icon size={17} className="text-white/65" />
//                     </div>

//                     <span className="font-mono text-[8px] text-white/20">
//                       {item.number}
//                     </span>
//                   </div>

//                   <div>
//                     <h3 className="text-[24px] font-medium tracking-[-0.035em]">
//                       {item.title}
//                     </h3>

//                     <p className="mt-3 max-w-[420px] text-[11px] leading-5 text-white/40">
//                       {item.text}
//                     </p>

//                     <div className="mt-5 flex items-center gap-2 text-[9px] text-white/30 transition group-hover:text-white">
//                       Explore capability
//                       <ArrowUpRight size={11} />
//                     </div>
//                   </div>
//                 </div>
//               </motion.article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }










"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarRange,
  ChartNoAxesCombined,
  Check,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                               PLANNING VISUAL                              */
/* -------------------------------------------------------------------------- */

function PlanningVisual() {
  const rows = [
    {
      title: "Product strategy",
      start: "8%",
      width: "47%",
      progress: "78%",
    },
    {
      title: "UX & interface",
      start: "21%",
      width: "58%",
      progress: "62%",
    },
    {
      title: "Engineering",
      start: "36%",
      width: "53%",
      progress: "48%",
    },
    {
      title: "QA & release",
      start: "64%",
      width: "29%",
      progress: "20%",
    },
  ];

  return (
    <div className="relative h-full w-full">
      {/* ambient light */}

      <div className="absolute left-1/2 top-[48%] h-[250px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6]/10 blur-[90px]" />

      {/* floating sprint badge */}

      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-0 top-0 flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/40 px-3 py-2 backdrop-blur-xl"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>

        <span className="text-[7px] uppercase tracking-[0.16em] text-white/35">
          Sprint on track
        </span>
      </motion.div>

      {/* board */}

      <div className="absolute left-0 right-0 top-[70px] overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#08080d]/75 shadow-[0_30px_80px_rgba(0,0,0,.4)] backdrop-blur-xl">
        {/* header */}

        <div className="flex h-12 items-center justify-between border-b border-white/[0.06] px-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
            </div>

            <span className="text-[7px] uppercase tracking-[0.16em] text-white/25">
              Delivery roadmap
            </span>
          </div>

          <span className="text-[7px] text-white/20">Q3 / Sprint 08</span>
        </div>

        {/* dates */}

        <div className="grid grid-cols-[82px_1fr] border-b border-white/[0.05]">
          <div />

          <div className="grid grid-cols-4 px-2 py-3">
            {["SEP 02", "SEP 09", "SEP 16", "SEP 23"].map((date) => (
              <span
                key={date}
                className="text-center font-mono text-[6px] text-white/15"
              >
                {date}
              </span>
            ))}
          </div>
        </div>

        {/* timeline */}

        <div className="relative">
          {/* vertical lines */}

          <div className="pointer-events-none absolute bottom-0 left-[82px] right-0 top-0 grid grid-cols-4">
            {[0, 1, 2, 3].map((item) => (
              <div
                key={item}
                className="border-l border-white/[0.035]"
              />
            ))}
          </div>

          {/* current date */}

          <div className="absolute bottom-0 left-[68%] top-0 z-10 w-px bg-[#8b5cf6]/25">
            <span className="absolute -top-[1px] -translate-x-1/2 rounded-full bg-[#8b5cf6] px-1.5 py-0.5 text-[5px] text-white">
              TODAY
            </span>
          </div>

          {rows.map((row, index) => (
            <div
              key={row.title}
              className="grid min-h-[54px] grid-cols-[82px_1fr] items-center border-b border-white/[0.04] last:border-none"
            >
              <div className="px-3">
                <p className="truncate text-[7px] text-white/30">
                  {row.title}
                </p>
              </div>

              <div className="relative h-full">
                <motion.div
                  initial={{
                    width: 0,
                    opacity: 0,
                  }}
                  whileInView={{
                    width: row.width,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.15 + index * 0.12,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    left: row.start,
                  }}
                  className="absolute top-1/2 h-[15px] -translate-y-1/2 overflow-hidden rounded-[4px] border border-[#8b5cf6]/20 bg-[#8b5cf6]/10"
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: row.progress,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 1,
                    }}
                    className="h-full bg-gradient-to-r from-[#7046e6]/30 to-[#9f7aea]/50"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom metric cards */}

      <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-2">
        {[
          ["74%", "Overall progress"],
          ["18", "Tasks remaining"],
          ["06", "Days to milestone"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="rounded-xl border border-white/[0.06] bg-black/25 p-3 backdrop-blur-lg"
          >
            <p className="text-[15px] font-medium tracking-[-0.04em] text-white/70">
              {value}
            </p>

            <p className="mt-1 text-[6px] uppercase tracking-[0.1em] text-white/20">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              TEAM NETWORK                                  */
/* -------------------------------------------------------------------------- */

function TeamVisual() {
  const people = [
    {
      left: "50%",
      top: "48%",
      label: "PM",
      delay: 0,
    },
    {
      left: "19%",
      top: "25%",
      label: "UX",
      delay: 0.2,
    },
    {
      left: "81%",
      top: "23%",
      label: "FE",
      delay: 0.4,
    },
    {
      left: "19%",
      top: "75%",
      label: "BE",
      delay: 0.6,
    },
    {
      left: "82%",
      top: "76%",
      label: "QA",
      delay: 0.8,
    },
  ];

  return (
    <div className="relative mx-auto h-[145px] w-full max-w-[350px]">
      <div className="absolute left-1/2 top-1/2 h-[130px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046e6]/10 blur-[50px]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 350 145"
        fill="none"
      >
        <defs>
          <linearGradient
            id="networkLine"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop stopColor="#8B5CF6" stopOpacity="0.55" />
            <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {[
          "M175 70 L68 38",
          "M175 70 L282 36",
          "M175 70 L68 108",
          "M175 70 L284 110",
        ].map((path, index) => (
          <motion.path
            key={path}
            d={path}
            stroke="url(#networkLine)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.12,
              duration: 0.8,
            }}
          />
        ))}

        <motion.circle
          r="2"
          fill="#A78BFA"
          animate={{
            cx: [175, 68],
            cy: [70, 38],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            repeatDelay: 0.8,
          }}
        />
      </svg>

      {people.map((person, index) => (
        <motion.div
          key={person.label}
          initial={{
            opacity: 0,
            scale: 0.6,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            delay: person.delay,
          }}
          style={{
            left: person.left,
            top: person.top,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
        >
          {index === 0 && (
            <motion.div
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute inset-[-8px] rounded-full border border-[#8b5cf6]/40"
            />
          )}

          <div
            className={`flex items-center justify-center rounded-full border backdrop-blur-xl ${
              index === 0
                ? "h-11 w-11 border-[#8b5cf6]/40 bg-[#8b5cf6]/15 text-[#c4b5fd]"
                : "h-9 w-9 border-white/10 bg-black/50 text-white/40"
            }`}
          >
            <span className="text-[7px] font-medium">{person.label}</span>
          </div>
        </motion.div>
      ))}

      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/[0.07] bg-black/40 px-3 py-1.5 backdrop-blur-xl">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

        <span className="whitespace-nowrap text-[6px] uppercase tracking-[0.13em] text-white/25">
          5 teams aligned
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               RISK VISUAL                                  */
/* -------------------------------------------------------------------------- */

function RiskVisual() {
  return (
    <div className="relative mx-auto flex h-[145px] w-full max-w-[350px] items-center justify-center">
      <div className="absolute h-[150px] w-[150px] rounded-full bg-[#7046e6]/10 blur-[55px]" />

      {/* rings */}

      {[120, 88, 56].map((size, index) => (
        <motion.div
          key={size}
          animate={{
            rotate: index % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 18 + index * 6,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: size,
            height: size,
          }}
          className="absolute rounded-full border border-dashed border-white/[0.08]"
        />
      ))}

      {/* radar line */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[110px] w-[110px] rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(139,92,246,.18) 35deg, transparent 70deg)",
        }}
      />

      <div className="relative z-10 flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#8b5cf6]/25 bg-[#8b5cf6]/10 backdrop-blur-xl">
        <ShieldCheck size={16} className="text-[#b9a6ff]" />
      </div>

      {/* risks */}

      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute left-[10%] top-[28%] rounded-lg border border-amber-400/10 bg-black/50 px-2.5 py-2 backdrop-blur-xl"
      >
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />

          <span className="text-[6px] text-white/30">
            API dependency
          </span>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 4, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
        className="absolute right-[5%] top-[18%] rounded-lg border border-rose-400/10 bg-black/50 px-2.5 py-2 backdrop-blur-xl"
      >
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />

          <span className="text-[6px] text-white/30">
            Approval
          </span>
        </div>
      </motion.div>

      <div className="absolute bottom-[5%] right-[13%] flex items-center gap-1.5 rounded-lg border border-emerald-400/10 bg-black/50 px-2.5 py-2 backdrop-blur-xl">
        <Check size={8} className="text-emerald-400" />

        <span className="text-[6px] text-white/30">
          QA capacity
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              REPORT VISUAL                                 */
/* -------------------------------------------------------------------------- */

function ReportingVisual() {
  const bars = [32, 44, 39, 58, 51, 67, 61, 76, 70, 88];

  return (
    <div className="relative grid h-full min-h-[170px] gap-4 sm:grid-cols-[1.35fr_.65fr]">
      {/* chart */}

      <div className="relative overflow-hidden rounded-[17px] border border-white/[0.07] bg-black/30 p-4 backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[7px] uppercase tracking-[0.14em] text-white/20">
              Delivery velocity
            </p>

            <div className="mt-2 flex items-end gap-2">
              <span className="text-[19px] font-medium text-white/70">
                42.8
              </span>

              <span className="mb-[2px] text-[7px] text-emerald-400">
                +12.4%
              </span>
            </div>
          </div>

          <span className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[6px] text-white/25">
            LAST 10 SPRINTS
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 top-[70px]">
          <div className="absolute inset-0 flex flex-col justify-between">
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className="border-t border-dashed border-white/[0.05]"
              />
            ))}
          </div>

          <div className="absolute inset-0 flex items-end gap-[5px]">
            {bars.map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                whileInView={{
                  height: `${height}%`,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.6,
                }}
                className={`flex-1 rounded-t-[3px] ${
                  index === bars.length - 1
                    ? "bg-[#8b5cf6]"
                    : "bg-white/[0.08]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* metrics */}

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
        <div className="rounded-[15px] border border-white/[0.07] bg-black/30 p-4 backdrop-blur-xl">
          <p className="text-[6px] uppercase tracking-[0.14em] text-white/20">
            On time
          </p>

          <p className="mt-3 text-[22px] font-medium tracking-[-0.05em] text-white/70">
            94%
          </p>

          <div className="mt-3 h-[2px] overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "94%" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-full bg-emerald-400/70"
            />
          </div>
        </div>

        <div className="rounded-[15px] border border-white/[0.07] bg-black/30 p-4 backdrop-blur-xl">
          <p className="text-[6px] uppercase tracking-[0.14em] text-white/20">
            Sprint health
          </p>

          <div className="mt-3 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-[11px] font-medium text-white/60">
              Healthy
            </span>
          </div>

          <p className="mt-3 text-[6px] leading-3 text-white/20">
            No critical blockers detected.
          </p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                DATA                                        */
/* -------------------------------------------------------------------------- */

const capabilities = [
  {
    number: "01",
    icon: CalendarRange,
    title: "Planning & Delivery",
    text: "Turn goals into realistic roadmaps, milestones, ownership and measurable delivery plans.",
    image: "/Card-bg-01.webp",
    type: "planning",
    className: "lg:row-span-2",
  },
  {
    number: "02",
    icon: GitBranch,
    title: "Cross-team Coordination",
    text: "Keep product, design, engineering and business teams moving in one direction.",
    image: "/Card-bg-02.webp",
    type: "team",
    className: "",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Risk Management",
    text: "Surface dependencies and blockers before they become delivery problems.",
    image: "/Card-bg-04.webp",
    type: "risk",
    className: "",
  },
  {
    number: "04",
    icon: ChartNoAxesCombined,
    title: "Reporting & Visibility",
    text: "Give stakeholders a clear view of progress, performance, risks and decisions.",
    image: "/Card-bg-03.webp",
    type: "reporting",
    className: "lg:col-span-2",
  },
];

/* -------------------------------------------------------------------------- */
/*                             MAIN COMPONENT                                 */
/* -------------------------------------------------------------------------- */

export default function ProjectCapabilities() {
  return (
    <section className="relative px-5 py-10 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1450px]">
        {/* heading */}

        <div className="mb-16 grid gap-10 lg:grid-cols-2">
          <div>
          

            <h2 className="mt-5 max-w-[720px] hyi-h1 hyi-white font-bold">
              Structure for every
              <br />
              <span className="text-white/25">moving part.</span>
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <p className="max-w-[420px] hyi-p hyi-gray">
              Bring clarity to scope, people, priorities and timelines with
              experienced project managers who know how modern digital teams
              operate.
            </p>
          </div>
        </div>

        {/* cards */}

        <div className="grid gap-4 lg:grid-cols-2">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            const isPlanning = item.type === "planning";
            const isReporting = item.type === "reporting";

            return (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.65,
                }}
                className={`
                  group relative overflow-hidden rounded-[28px]
                  border border-white/[0.07] bg-[#07070a]
                  ${
                    isPlanning
                      ? "min-h-[660px] lg:row-span-2"
                      : isReporting
                        ? "min-h-[390px] lg:col-span-2"
                        : "min-h-[322px]"
                  }
                `}
              >
                {/* image */}

                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-100 transition duration-1000 group-hover:scale-[1.025]"
                />

                {/* overlays */}

                <div className="absolute inset-0 bg-gradient-to-b from-black/[0.05] via-black/20 to-black/80" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />

                {/* subtle border glow */}

                <div className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 shadow-[inset_0_0_0_1px_rgba(139,92,246,.2)] transition duration-500 group-hover:opacity-100" />

                {/* card content */}

                <div className="relative z-10 flex h-full flex-col p-7 sm:p-9">
                  {/* top */}

                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.09] bg-black/25 backdrop-blur-xl">
                      <Icon
                        size={16}
                        strokeWidth={1.5}
                        className="text-white/55"
                      />
                    </div>

                  
                  </div>

                  {/* visual */}

                  <div
                    className={`
                      relative
                      ${
                        isPlanning
                          ? "mt-8 flex-1"
                          : isReporting
                            ? "mt-7"
                            : "mt-2 flex flex-1 items-center"
                      }
                    `}
                  >
                    {item.type === "planning" && <PlanningVisual />}

                    {item.type === "team" && <TeamVisual />}

                    {item.type === "risk" && <RiskVisual />}

                    {item.type === "reporting" && <ReportingVisual />}
                  </div>

                  {/* text */}

                  <div
                    className={`
                      relative z-20
                      ${
                        isPlanning
                          ? "mt-10"
                          : isReporting
                            ? "mt-8 max-w-[620px]"
                            : "mt-4"
                      }
                    `}
                  >
                    <h3
                      className={`
                        font-medium tracking-[-0.04em]
                        ${
                          isPlanning || isReporting
                            ? "hyi-h3 hyi-white"
                            : "hyi-h3 hyi-white"
                        }
                      `}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-[520px] hyi-p hyi-gray">
                      {item.text}
                    </p>

                    <button className="mt-5 flex items-center gap-2 text-[13px] text-white/25 transition duration-300 group-hover:text-white/60">
                      Explore capability

                      <ArrowUpRight
                        size={10}
                        className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}