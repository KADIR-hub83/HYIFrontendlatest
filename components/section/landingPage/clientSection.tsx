// "use client";

// import { motion } from "framer-motion";

// // const clients = [
// //   {
// //     name: "IBM",
// //     logo: "/clients/ibm.svg",
// //   },
// //   {
// //     name: "Google",
// //     logo: "/clients/google.svg",
// //   },
// //   {
// //     name: "AWS",
// //     logo: "/clients/aws.svg",
// //   },
// //   {
// //     name: "NITI Aayog",
// //     logo: "/clients/niti-aayog.svg",
// //   },
// //   {
// //     name: "Sky Solutions",
// //     logo: "/clients/sky-solutions.svg",
// //   },
// //   {
// //     name: "Temenos T24",
// //     logo: "/clients/temenos.svg",
// //   },
// // ];

// const clients = [
//   {
//     name: "IBM",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
//   },
//   {
//     name: "Google",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//   },
//   {
//     name: "AWS",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
//   },
//   {
//     name: "NITI Aayog",
//     logo: "https://upload.wikimedia.org/wikipedia/en/9/95/NITI_Aayog_logo.svg",
//   },
//   {
//     name: "Sky Solutions",
//     logo: "https://www.skysolutions.com/wp-content/uploads/2024/01/sky-solutions-logo.svg",
//   },
//   {
//     name: "Temenos",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Temenos_Logo_2022.svg",
//   },
//   {
//     name: "Microsoft",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
//   },
//   {
//     name: "Oracle",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
//   },
//   {
//     name: "Salesforce",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
//   },
//   {
//     name: "Adobe",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
//   },
// ];

// export default function ClientSection() {
//   return (
//     <section
//       className="
//         relative w-full overflow-hidden
        
//         bg-[#030304]
//         py-10 text-white
        
//       "
//     >
//       {/* ================================================
//           BACKGROUND
//       ================================================= */}

//       <div className="pointer-events-none absolute inset-0">
//         {/* <div
//           className="
//             absolute left-1/2 top-1/2
//             h-[250px] w-[900px]
//             -translate-x-1/2 -translate-y-1/2
//             rounded-full
//             bg-[#7046ff]/[0.055]
//             blur-[120px]
//           "
//         /> */}

//         {/* <div
//           className="
//             absolute inset-0 opacity-[0.1]
//             [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)]
//             [background-size:70px_70px]
//             [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]
//           "
//         /> */}
//       </div>

//       {/* ================================================
//           HEADING
//       ================================================= */}

//       <div
//         className="
//           relative z-10 mx-auto
//           max-w-[1500px]
//           px-5
//           sm:px-10
//           lg:px-20
//         "
//       >
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.3,
//           }}
//           transition={{
//             duration: 0.6,
//           }}
//           className="
//             flex flex-col items-center
//             justify-center text-center
//           "
//         >
//           {/* badge */}

//           <div
//             className="
//               flex items-center gap-3
//               rounded-full
//               border border-white/[0.08]
//               bg-white/[0.025]
//               px-4 py-2
//               backdrop-blur-xl
//             "
//           >
//             <span
//               className="
//                 h-1.5 w-1.5
//                 rounded-full
//                 bg-[#9877ff]
//                 shadow-[0_0_10px_rgba(152,119,255,.8)]
//               "
//             />

//             <span
//               className="
//                 text-[9px] font-medium
//                 uppercase tracking-[0.22em]
//                 text-white/40
//               "
//             >
//               Our Ecosystem
//             </span>
//           </div>

//           {/* title */}

//           <h2
//             className="
//               mt-5
//               max-w-[760px]
//               hyi-h1 hyi-white
//             "
//           >
//             Working across a world of
//             <span
//               className="
               
//               "
//             >
//               {" "}
//               leading technology.
//             </span>
//           </h2>

//           <p
//             className="
//               mt-4 max-w-[570px]
//              hyi-p
//             "
//           >
//             Building modern digital capabilities across leading
//             platforms, cloud ecosystems and technology environments.
//           </p>
//         </motion.div>
//       </div>

//       {/* ================================================
//           MARQUEE
//       ================================================= */}

//   {/* ========================================================
//     CLIENT LOGO MARQUEE
// ======================================================== */}

// <div className="relative z-10 mt-14 overflow-hidden sm:mt-16 lg:mt-20 px-20 ">
//   {/* Left Fade */}
//   {/* <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[70px] bg-gradient-to-r from-[#030304] via-[#030304]/90 to-transparent sm:w-[140px] lg:w-[200px]" /> */}

//   {/* Right Fade */}
//   {/* <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[70px] bg-gradient-to-l from-[#030304] via-[#030304]/90 to-transparent sm:w-[140px] lg:w-[200px]" /> */}

//   <div className="group flex w-max items-center">
//     {/* First Track */}
//     <div className="flex shrink-0 animate-client-marquee items-center gap-5 pr-5 group-hover:[animation-play-state:paused]">
//       {clients.map((client) => (
//         <ClientLogo
//           key={`first-${client.name}`}
//           name={client.name}
//           logo={client.logo}
//         />
//       ))}
//     </div>

//     {/* Duplicate Track */}
//     <div
//       aria-hidden="true"
//       className="flex shrink-0 animate-client-marquee items-center gap-5 pr-5 group-hover:[animation-play-state:paused]"
//     >
//       {clients.map((client) => (
//         <ClientLogo
//           key={`second-${client.name}`}
//           name={client.name}
//           logo={client.logo}
//         />
//       ))}
//     </div>
//   </div>
// </div>

//       {/* ================================================
//           FOOTER LABEL
//       ================================================= */}

    
//     </section>
//   );
// }

// /* ========================================================
//    CLIENT LOGO
// ======================================================== */
// /* ========================================================
//    CLIENT LOGO
// ======================================================== */

// function ClientLogo({
//   name,
//   logo,
// }: {
//   name: string;
//   logo: string;
// }) {
//   return (
//     <div className="flex h-[92px] w-[170px] shrink-0 items-center justify-center rounded-[18px]  bg-[#080b12] px-20 sm:h-[100px] sm:w-[185px] lg:h-[108px] lg:w-[200px]">
//       <img
//         src={logo}
//         alt={`${name} logo`}
//         className="max-h-[48px] max-w-[125px] object-contain sm:max-h-[52px] sm:max-w-[135px] lg:max-h-[56px] lg:max-w-[145px]"
//         onError={(event) => {
//           event.currentTarget.style.display = "none";

//           const fallback =
//             event.currentTarget.nextElementSibling as HTMLElement;

//           if (fallback) {
//             fallback.style.display = "block";
//           }
//         }}
//       />

//       <span
//         style={{ display: "none" }}
//         className="whitespace-nowrap text-center text-[15px] font-semibold text-white/80"
//       >
//         {name}
//       </span>
//     </div>
//   );
// }









"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* =====================================================
   DATA
===================================================== */

type Client = {
  name: string;
  logo: string;
  category: string;
};

const clients: Client[] = [
  { name: "IBM", category: "Enterprise", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Google", category: "Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "AWS", category: "Cloud", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "NITI Aayog", category: "Government", logo: "https://upload.wikimedia.org/wikipedia/en/9/95/NITI_Aayog_logo.svg" },
  { name: "Sky Solutions", category: "Technology", logo: "https://www.skysolutions.com/wp-content/uploads/2024/01/sky-solutions-logo.svg" },
  { name: "Temenos", category: "Banking", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Temenos_Logo_2022.svg" },
  // { name: "Microsoft", category: "Enterprise", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Oracle", category: "Database", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Salesforce", category: "CRM", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
  { name: "Adobe", category: "Creative", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png" },
];

/* Row 2 = same logos, alag order, taaki dono rows same na dikhein */
const rowOne = clients;
const rowTwo = [...clients].reverse();

/* =====================================================
   MAIN SECTION
===================================================== */

export default function ClientSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#030304] text-white ">
      {/* Keyframes (no tailwind config needed) */}
      <style>{`
        @keyframes hyi-marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes hyi-marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .hyi-track-left  { animation: hyi-marquee-left 70s linear infinite; }
        .hyi-track-right { animation: hyi-marquee-right 78s linear infinite; }
        .hyi-row:hover .hyi-track-left,
        .hyi-row:hover .hyi-track-right { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .hyi-track-left, .hyi-track-right { animation: none; }
        }
      `}</style>

      {/* ---------------- BACKGROUND ---------------- */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6848ff]/[0.12] blur-[170px]" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#c026d3]/10 blur-[130px]" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#2563eb]/10 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ---------------- HEADING ---------------- */}
      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="flex items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#9877ff] shadow-[0_0_10px_rgba(152,119,255,.8)]" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">
              Our Ecosystem
            </span>
          </div>

          <h2 className="mt-5 max-w-[860px] hyi-h1 hyi-white">
            Working across a world of leading technology.
          
          </h2>

          <p className="mt-4 max-w-[600px] hyi-p">
            Building modern digital capabilities across leading platforms,
            cloud ecosystems and technology environments.
          </p>
        </motion.div>
      </div>

      {/* ---------------- DUAL MARQUEE ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 mt-5 flex flex-col gap-5 "
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        {/* ROW 1 — moves LEFT */}
        <MarqueeRow items={rowOne} direction="left" />

        {/* ROW 2 — moves RIGHT */}
        <MarqueeRow items={rowTwo} direction="right" />
      </motion.div>

      {/* ---------------- FOOT LABEL ---------------- */}
      {/* <div className="relative z-10 mt-10 flex items-center justify-center gap-4 px-5">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-white/20 sm:w-24" />
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
          Cloud · Enterprise · Government · Banking
        </p>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-white/20 sm:w-24" />
      </div> */}
    </section>
  );
}

/* =====================================================
   MARQUEE ROW
===================================================== */

function MarqueeRow({
  items,
  direction,
}: {
  items: Client[];
  direction: "left" | "right";
}) {
  const trackClass = direction === "left" ? "hyi-track-left" : "hyi-track-right";

  return (
    <div className="hyi-row overflow-hidden ">
      <div className={`flex w-max ${trackClass} will-change-transform`}>
        {/* Track A */}
        <div className="flex shrink-0 items-center gap-5 pr-5">
          {items.map((c) => (
            <ClientCard key={`a-${direction}-${c.name}`} client={c} />
          ))}
        </div>

        {/* Track B (duplicate for seamless loop) */}
        <div aria-hidden="true" className="flex shrink-0 items-center gap-5 pr-5">
          {items.map((c) => (
            <ClientCard key={`b-${direction}-${c.name}`} client={c} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   CLIENT CARD
===================================================== */

function ClientCard({ client }: { client: Client }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group relative flex h-[110px] w-[210px] shrink-0 items-center justify-center overflow-hidden rounded-[20px] border border-white/[0.1] bg-gradient-to-br from-[#12101f] via-[#0a0a10] to-[#06060a] px-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#8d70ff]/50 hover:bg-white hover:shadow-[0_20px_60px_rgba(112,70,255,0.35)] sm:h-[120px] sm:w-[230px] lg:h-[130px] lg:w-[250px]">
      {/* Top glow */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#7654ff]/25 blur-[50px] transition-opacity duration-500 group-hover:opacity-0" />

      {/* Glass shine */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.07] via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0" />

      {/* Category tag */}
      <span className="absolute left-4 top-3 font-mono text-[8px] uppercase tracking-[0.2em] text-white/35 transition-colors duration-500 group-hover:text-black/40">
        {client.category}
      </span>

      {/* Logo / fallback */}
      <div className="relative z-10 mt-3 flex h-full w-full items-center justify-center">
        {failed ? (
          <span className="whitespace-nowrap text-center text-base font-semibold text-white/80 transition-colors duration-500 group-hover:text-black">
            {client.name}
          </span>
        ) : (
          <img
            src={client.logo}
            alt={`${client.name} logo`}
            loading="lazy"
            onError={() => setFailed(true)}
            className="max-h-[40px] max-w-[130px] object-contain opacity-70 brightness-0 invert transition-all duration-500 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 sm:max-h-[44px] sm:max-w-[145px] lg:max-h-[48px] lg:max-w-[160px]"
          />
        )}
      </div>

      {/* Bottom highlight line */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8b6aff]/0 to-transparent transition-all duration-500 group-hover:via-[#8b6aff]/70" />
    </div>
  );
}