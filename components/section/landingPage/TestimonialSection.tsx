// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Quote,
//   Star,
// } from "lucide-react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Arjun Mehta",
//     role: "Technology Director",
//     company: "Enterprise Technology",
//     avatar:
//       "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
//     quote:
//       "HYI brought clarity, technical depth and strong execution to our digital initiative. The team understood our requirements quickly and transformed complex challenges into practical solutions.",
//   },
//   {
//     id: 2,
//     name: "Sarah Williams",
//     role: "Head of Innovation",
//     company: "Digital Systems",
//     avatar:
//       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
//     quote:
//       "The team combined strong technical expertise with a genuine understanding of our business requirements. The entire collaboration was transparent, responsive and professional.",
//   },
//   {
//     id: 3,
//     name: "Rahul Sharma",
//     role: "VP — Technology",
//     company: "Enterprise Solutions",
//     avatar:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
//     quote:
//       "From planning to delivery, the team remained focused on quality and measurable outcomes. Their approach made the entire technology journey simple and effective.",
//   },
//   {
//     id: 4,
//     name: "Daniel Carter",
//     role: "Chief Digital Officer",
//     company: "Global Digital",
//     avatar:
//       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
//     quote:
//       "HYI worked like an extension of our internal team. Communication was clear, execution was consistent and every stage of the engagement was handled professionally.",
//   },
// ];

// export default function TestimonialSection() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     if (isPaused) return;

//     const interval = window.setInterval(() => {
//       setActiveIndex((current) =>
//         current === testimonials.length - 1 ? 0 : current + 1
//       );
//     }, 3000);

//     return () => window.clearInterval(interval);
//   }, [isPaused]);

//   const next = () => {
//     setActiveIndex((current) =>
//       current === testimonials.length - 1 ? 0 : current + 1
//     );
//   };

//   const previous = () => {
//     setActiveIndex((current) =>
//       current === 0 ? testimonials.length - 1 : current - 1
//     );
//   };

//   const getTestimonial = (offset: number) => {
//     return testimonials[
//       (activeIndex + offset + testimonials.length) %
//         testimonials.length
//     ];
//   };

//   return (
//     <section className="relative w-full overflow-hidden bg-[#030304]  text-white ">
//       {/* Background glow */}
  

//       <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-10 lg:px-20">
//         {/* =================================================
//             HEADING
//         ================================================= */}

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
//           }}
//           transition={{
//             duration: 0.6,
//           }}
//           className="mx-auto max-w-[850px] text-center"
//        >

//           <h2 className="mt-6 font-bold hyi-h1 hyi-white">
//             Client satisfaction is our achievement.
           
//           </h2>

//           <p className="mx-auto mt-5 max-w-[620px] hyi-p">
//             We build meaningful partnerships by combining technology,
//             collaboration and a commitment to delivering real value.
//           </p>
//         </motion.div>

//         {/* =================================================
//             TESTIMONIAL CARDS
//         ================================================= */}

//         <div
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//           className="mt-14 grid gap-4 lg:grid-cols-3"
//         >
//           {[-1, 0, 1].map((offset) => {
//             const testimonial = getTestimonial(offset);
//             const active = offset === 0;

//             return (
//               <motion.div
//                 key={`${testimonial.id}-${offset}`}
//                 initial={{
//                   opacity: 0,
//                   y: 20,
//                 }}
//                 animate={{
//                   opacity: active ? 1 : 0.55,
//                   y: 0,
//                   scale: active ? 1 : 0.97,
//                 }}
//                 transition={{
//                   duration: 0.4,
//                 }}
//                 className={`
//                   relative overflow-hidden
//                   rounded-[20px] border
//                   p-6 transition-all duration-500
//                   sm:p-7
//                   ${
//                     active
//                       ? "border-[#8564ff]/25 bg-[#0a090d]"
//                       : "border-white/[0.06] bg-white/[0.015]"
//                   }
//                 `}
//               >
//                 {/* Active glow */}

//                 {active && (
//                   <div className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full bg-[#7654ff]/10 blur-[80px]" />
//                 )}

//                 {/* Quote */}

//                 <div className="relative z-10 flex items-center justify-between">
//                   <div
//                     className={`
//                       flex h-9 w-9
//                       items-center justify-center
//                       rounded-full border
//                       ${
//                         active
//                           ? "border-[#8c6cff]/20 bg-[#7957ff]/10"
//                           : "border-white/[0.06] bg-white/[0.025]"
//                       }
//                     `}
//                   >
//                     <Quote
//                       size={14}
//                       className={
//                         active
//                           ? "text-[#a98eff]"
//                           : "text-white/20"
//                       }
//                     />
//                   </div>

//                   <div className="flex items-center gap-1">
//                     {Array.from({ length: 5 }).map((_, index) => (
//                       <Star
//                         key={index}
//                         size={11}
//                         fill="currentColor"
//                         className={
//                           active
//                             ? "text-[#a68aff]"
//                             : "text-white/15"
//                         }
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Text */}

//                 <p
//                   className={`
//                     relative z-10
//                     mt-7 min-h-[135px]
//                     text-[14px]
//                     leading-[1.8]
//                     sm:text-[15px]
//                     ${
//                       active
//                         ? "text-white/65"
//                         : "text-white/30"
//                     }
//                   `}
//                 >
//                   “{testimonial.quote}”
//                 </p>

//                 {/* Person */}

//                 <div className="relative z-10 mt-7 flex items-center gap-3 border-t border-white/[0.06] pt-5">
//                   {/* ACTUAL AVATAR */}

//                   <div
//                     className={`
//                       relative h-12 w-12
//                       shrink-0 overflow-hidden
//                       rounded-full border
//                       ${
//                         active
//                           ? "border-[#9879ff]/40"
//                           : "border-white/10"
//                       }
//                     `}
//                   >
//                     <img
//                       src={testimonial.avatar}
//                       alt={testimonial.name}
//                       className="h-full w-full object-cover"
//                     />

//                     {active && (
//                       <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
//                     )}
//                   </div>

//                   <div className="min-w-0">
//                     <p
//                       className={`
//                         text-[12px] font-medium
//                         ${
//                           active
//                             ? "text-white/80"
//                             : "text-white/40"
//                         }
//                       `}
//                     >
//                       {testimonial.name}
//                     </p>

//                     <p className="mt-1 text-[9px] text-white/25">
//                       {testimonial.role}
//                     </p>

//                     <p className="mt-0.5 text-[8px] text-[#9f83ff]/50">
//                       {testimonial.company}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* =================================================
//             CONTROLS
//         ================================================= */}

//         <div className="mt-8 flex items-center justify-center gap-5">
//           <button
//             type="button"
//             onClick={previous}
//             aria-label="Previous testimonial"
//             className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white/40 transition-all duration-300 hover:border-[#8d6aff]/30 hover:bg-[#7654ff]/10 hover:text-white"
//           >
//             <ArrowLeft size={14} />
//           </button>

//           {/* Dots */}

//           <div className="flex items-center gap-2">
//             {testimonials.map((testimonial, index) => (
//               <button
//                 key={testimonial.id}
//                 type="button"
//                 onClick={() => setActiveIndex(index)}
//                 aria-label={`View testimonial ${index + 1}`}
//                 className={`
//                   h-1.5 rounded-full
//                   transition-all duration-300
//                   ${
//                     activeIndex === index
//                       ? "w-7 bg-[#9576ff]"
//                       : "w-1.5 bg-white/15 hover:bg-white/30"
//                   }
//                 `}
//               />
//             ))}
//           </div>

//           <button
//             type="button"
//             onClick={next}
//             aria-label="Next testimonial"
//             className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white/40 transition-all duration-300 hover:border-[#8d6aff]/30 hover:bg-[#7654ff]/10 hover:text-white"
//           >
//             <ArrowRight size={14} />
//           </button>
//         </div>

   
//       </div>
//     </section>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Technology Director",
    company: "Enterprise Technology",
    tag: "Execution",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
    quote:
      "HYI brought clarity, technical depth and strong execution to our digital initiative. The team understood our requirements quickly and transformed complex challenges into practical solutions.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Head of Innovation",
    company: "Digital Systems",
    tag: "Collaboration",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
    quote:
      "The team combined strong technical expertise with a genuine understanding of our business requirements. The entire collaboration was transparent, responsive and professional.",
  },
  {
    id: 3,
    name: "Rahul Sharma",
    role: "VP — Technology",
    company: "Enterprise Solutions",
    tag: "Quality",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
    quote:
      "From planning to delivery, the team remained focused on quality and measurable outcomes. Their approach made the entire technology journey simple and effective.",
  },
  {
    id: 4,
    name: "Daniel Carter",
    role: "Chief Digital Officer",
    company: "Global Digital",
    tag: "Partnership",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
    quote:
      "HYI worked like an extension of our internal team. Communication was clear, execution was consistent and every stage of the engagement was handled professionally.",
  },
];

const TOTAL = testimonials.length;
const AUTOPLAY_MS = 2500;

type State = { index: number; dir: 1 | -1 };

/* move one step in current direction, bounce at both ends */
function step({ index, dir }: State): State {
  const nextIndex = index + dir;
  if (nextIndex >= TOTAL) return { index: TOTAL - 2, dir: -1 };
  if (nextIndex < 0) return { index: 1, dir: 1 };
  return { index: nextIndex, dir };
}

export default function TestimonialSection() {
  const [{ index, dir }, setState] = useState<State>({ index: 0, dir: 1 });
  const [paused, setPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  /* responsive check */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  /* autoplay: left → right, then right → left */
  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(() => setState(step), AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [index, dir, paused]);

  const goTo = (i: number) =>
    setState((s) => ({ index: i, dir: i >= s.index ? 1 : -1 }));

  const next = () =>
    setState((s) =>
      s.index >= TOTAL - 1
        ? { index: TOTAL - 2, dir: -1 }
        : { index: s.index + 1, dir: 1 }
    );

  const previous = () =>
    setState((s) =>
      s.index <= 0
        ? { index: 1, dir: 1 }
        : { index: s.index - 1, dir: -1 }
    );

  /* track position */
  const windowStart = Math.min(Math.max(index - 1, 0), TOTAL - 3);
  const trackX = isDesktop
    ? `${-windowStart * (100 / 3)}%`
    : `${-index * 100}%`;

  return (
    <section className="relative w-full overflow-hidden bg-[#030304]  text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7046ff]/[0.08] blur-[170px]" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#c026d3]/10 blur-[130px]" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#2563eb]/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-10 lg:px-20">
        {/* =================================================
            HEADING + LIVE COUNTER
        ================================================= */}
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="flex flex-col items-center justify-center gap-8 text-center"
>
  <div className="flex w-full flex-col items-center text-center">
    <h2 className="mt-5 font-bold hyi-h1 hyi-white">
      Client satisfaction is
      <span className="block text-white/30">
        our achievement.
      </span>
    </h2>

    <p className="mx-auto mt-5 w-full max-w-[650px] hyi-p text-center">
      We build meaningful partnerships by combining technology,
      collaboration and a commitment to delivering real value.
    </p>
  </div>

  {/* Counter + direction */}
  {/* Existing commented code remains unchanged */}
</motion.div>

        {/* =================================================
            SLIDING TRACK
        ================================================= */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="mt-12 overflow-hidden py-6"
        >
          <motion.div
            animate={{ x: trackX }}
            transition={{ type: "spring", stiffness: 70, damping: 18 }}
            className="flex"
          >
            {testimonials.map((t, i) => {
              const active = i === index;

              return (
                <div
                  key={t.id}
                  className="w-full shrink-0 px-2 lg:w-1/3"
                >
                  <motion.div
                    animate={{
                      opacity: active ? 1 : 0.45,
                      scale: active ? 1 : 0.94,
                      y: active ? -6 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    onClick={() => goTo(i)}
                    className="relative cursor-pointer overflow-hidden rounded-[24px] p-px"
                  >
                    {/* Rotating gradient border (active only) */}
                    {active && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,#7046ff_70deg,#ff5ad1_140deg,#3b82f6_210deg,transparent_280deg)]"
                      />
                    )}

                    {/* Static border (inactive) */}
                    {!active && (
                      <div className="absolute inset-0 rounded-[24px] border border-white/10" />
                    )}

                    {/* Card body */}
                    <div
                      className={`relative flex min-h-[380px] flex-col rounded-[23px] p-6 sm:p-7 ${
                        active
                          ? "bg-gradient-to-br from-[#14102a] via-[#0a090f] to-[#050507]"
                          : "bg-[#07060a]"
                      }`}
                    >
                      {/* Glow */}
                      {active && (
                        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#7654ff]/25 blur-[80px]" />
                      )}

                      {/* Big watermark quote */}
                      <Quote
                        size={120}
                        className={`pointer-events-none absolute -bottom-6 -right-4 ${
                          active ? "text-white/[0.05]" : "text-white/[0.02]"
                        }`}
                      />

                      {/* Top row */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${
                            active
                              ? "border-[#8c6cff]/40 bg-[#7957ff]/15 text-[#c9b8ff]"
                              : "border-white/10 bg-white/[0.03] text-white/30"
                          }`}
                        >
                          <Quote size={10} />
                          {t.tag}
                        </span>

                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, s) => (
                            <motion.span
                              key={s}
                              initial={false}
                              animate={
                                active
                                  ? { scale: [1, 1.35, 1] }
                                  : { scale: 1 }
                              }
                              transition={{
                                delay: active ? s * 0.08 : 0,
                                duration: 0.4,
                              }}
                            >
                              <Star
                                size={12}
                                fill="currentColor"
                                className={
                                  active ? "text-[#a68aff]" : "text-white/15"
                                }
                              />
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Quote text */}
                      <p
                        className={`relative z-10 mt-8 flex-1 text-[15px] leading-[1.85] sm:text-base ${
                          active ? "text-white/80" : "text-white/30"
                        }`}
                      >
                        “{t.quote}”
                      </p>

                      {/* Person */}
                      <div className="relative z-10 mt-8 flex items-center gap-3 border-t border-white/[0.08] pt-5">
                        <div
                          className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 ${
                            active ? "border-[#9879ff]/60" : "border-white/10"
                          }`}
                        >
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="h-full w-full object-cover"
                          />
                        </div>

                        <div className="min-w-0">
                          <p
                            className={`text-sm font-semibold ${
                              active ? "text-white" : "text-white/40"
                            }`}
                          >
                            {t.name}
                          </p>
                          <p className="mt-0.5 text-[11px] text-white/45">
                            {t.role}
                          </p>
                          <p className="mt-0.5 text-[10px] text-[#9f83ff]/70">
                            {t.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* =================================================
            CONTROLS + AVATAR TIMELINE
        ================================================= */}
        <div className="mt-6 flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Prev / Next */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 hover:-translate-x-0.5 hover:border-[#8d6aff]/40 hover:bg-[#7654ff]/15 hover:text-white"
            >
              <ArrowLeft size={15} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/50 transition-all duration-300 hover:translate-x-0.5 hover:border-[#8d6aff]/40 hover:bg-[#7654ff]/15 hover:text-white"
            >
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Timeline rail */}
          <div className="relative flex w-full max-w-[520px] items-center justify-between">
            {/* base line */}
            <div className="absolute left-4 right-4 top-1/2 h-px -translate-y-1/2 bg-white/10" />

            {/* auto-play progress on the rail */}
            <motion.div
              key={`${index}-${dir}-${paused}`}
              initial={{ width: 0 }}
              animate={{ width: paused ? 0 : "100%" }}
              transition={{
                duration: paused ? 0 : AUTOPLAY_MS / 1000,
                ease: "linear",
              }}
              className="absolute left-4 top-1/2 h-px max-w-[calc(100%-2rem)] -translate-y-1/2 bg-gradient-to-r from-fuchsia-400 to-blue-400 opacity-40"
            />

            {testimonials.map((t, i) => {
              const active = i === index;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`View testimonial ${i + 1}`}
                  className="relative z-10"
                >
                  <motion.div
                    animate={{ scale: active ? 1.25 : 1 }}
                    transition={{ duration: 0.3 }}
                    className={`h-8 w-8 overflow-hidden rounded-full border-2 transition-all duration-300 ${
                      active
                        ? "border-[#a58bff] shadow-[0_0_18px_rgba(121,88,255,0.7)]"
                        : "border-white/15 opacity-50 hover:opacity-90"
                    }`}
                  >
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </button>
              );
            })}
          </div>

       
        </div>
      </div>
    </section>
  );
}