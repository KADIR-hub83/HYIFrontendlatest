// import { testimonialsData } from "@/components/data/landingPage";
// import Image from "next/image";

// export default function Testimonials() {
//   return (
//     <div className="flex flex-col justify-center items-center z-10 px-4 gap-6 md:gap-10 md:px-0">
//       <div className="w-[90dvw] flex flex-col text-center gap-2 md:w-2/3">
//         <h2 className="hyi-h2">{testimonialsData.heading}</h2>
//         <p className="hyi-p">{testimonialsData.text}</p>
//       </div>
//       <div className="w-[90dvw] max-w-[1280px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//         {testimonialsData.cards.map((card) => (
//           <div
//             key={card._id}
//             className="w-fit glass-gradient rounded-xl hover:cursor-default
//              relative overflow-hidden group"
//           >
//             <div className="absolute inset-0 -z-1 bg-[radial-gradient(circle,_rgba(184,0,227,0.3)_0%,_transparent_70%)] bg-no-repeat bg-center bg-[length:0%_0%] transition-all duration-300 ease-in-out group-hover:bg-[length:200%_200%]" />
//             <div className="flex flex-col px-6 py-5 z-10">
//               <div className="flex gap-2.5">
//             <div className="relative h-[55px] w-[55px] shrink-0 overflow-hidden rounded-full">
//   <Image
//     src={card.image}
//     alt={`${card.name} profile`}
//     fill
//     sizes="55px"
//     className="object-cover object-center"
//   />
// </div>
//                 <div className="flex flex-col gap-0.5">
//                   <h3 className="hyi-h5">{card.name}</h3>
//                   <span className="text-base text-dark_mode-300">
//                     {card.designation}
//                   </span>
//                 </div>
//               </div>
//               <div className="w-full flex flex-col pt-4 gap-2.5">
//                 <p className={`hyi-p`}>{card.text}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }












"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData } from "@/components/data/landingPage";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MOBILE_INTERVAL = 1800;
const DESKTOP_INTERVAL = 4500;

type TestimonialCardType = (typeof testimonialsData.cards)[number];

export default function Testimonials() {
  const cards = testimonialsData.cards;
  const total = cards.length;

  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [paused, setPaused] = useState(false);

  // Responsive visible card count
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 639px)");
    const tablet = window.matchMedia(
      "(min-width: 640px) and (max-width: 1023px)"
    );

    const update = () => {
      setPageSize(mobile.matches ? 1 : tablet.matches ? 4 : 6);
      setPage(0);
    };

    update();

    mobile.addEventListener("change", update);
    tablet.addEventListener("change", update);

    return () => {
      mobile.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, []);

  const pageCount = Math.ceil(total / pageSize);

  const visibleCards = cards.slice(
    page * pageSize,
    page * pageSize + pageSize
  );

  // Navigation
  const goToPage = (nextPage: number) => {
    if (nextPage < 0 || nextPage >= pageCount) return;

    setDirection(nextPage > page ? 1 : -1);
    setPage(nextPage);
  };

  const next = () => {
    setDirection(1);
    setPage((prev) => (prev + 1) % pageCount);
  };

  const previous = () => {
    setDirection(-1);
    setPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  // Automatic sliding on every screen size
  useEffect(() => {
    if (paused || pageCount <= 1) return;

    const interval =
      pageSize === 1 ? MOBILE_INTERVAL : DESKTOP_INTERVAL;

    const timer = window.setInterval(() => {
      setDirection(1);
      setPage((prev) => (prev + 1) % pageCount);
    }, interval);

    return () => window.clearInterval(timer);
  }, [page, pageCount, pageSize, paused]);

  return (
    <section
      className="relative z-10 w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto flex w-[90dvw] max-w-[1280px] flex-col items-center gap-8 md:gap-12">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex w-full flex-col items-center gap-3 text-center md:w-2/3"
        >
          <h2 className="hyi-h2">
            {testimonialsData.heading}
          </h2>

          <p className="hyi-p">
            {testimonialsData.text}
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative w-full">

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${page}-${pageSize}`}
              initial={{
                opacity: 0,
                x: direction * 45,
                filter: "blur(5px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                x: direction * -45,
                filter: "blur(5px)",
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {visibleCards.map((card) => (
                <TestimonialCard
                  key={card._id}
                  card={card}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CONTROLS */}
        <div className="flex w-full flex-col items-center justify-between gap-5 sm:flex-row">

          {/* PREVIOUS / NEXT */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonials"
              disabled={pageCount <= 1}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/15 hover:text-white disabled:opacity-30"
            >
              <ArrowLeft
                size={18}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonials"
              disabled={pageCount <= 1}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/15 hover:text-white disabled:opacity-30"
            >
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* PAGINATION */}
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToPage(i)}
                aria-label={`Go to testimonial page ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  page === i
                    ? "w-8 bg-violet-400"
                    : "w-2 bg-white/25 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* COUNTER */}
       

        </div>

      </div>
    </section>
  );
}

// REUSABLE TESTIMONIAL CARD
function TestimonialCard({
  card,
}: {
  card: TestimonialCardType;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative flex h-full min-h-[250px] overflow-hidden rounded-xl glass-gradient"
    >
      {/* Hover Glow */}
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle,_rgba(184,0,227,0.3)_0%,_transparent_70%)] bg-center bg-no-repeat bg-[length:0%_0%] transition-all duration-500 group-hover:bg-[length:200%_200%]" />

      <div className="relative z-10 flex w-full flex-col px-6 py-5">

        {/* PROFILE */}
        <div className="flex items-center gap-3">
          <div className="relative h-[55px] w-[55px] shrink-0 overflow-hidden rounded-full border border-white/10">
            <Image
              src={card.image}
              alt={`${card.name} profile`}
              fill
              sizes="55px"
              className="object-cover object-center"
            />
          </div>

          <div className="flex min-w-0 flex-col gap-1">
            <h3 className="hyi-h5">
              {card.name}
            </h3>

            <span className="text-sm text-dark_mode-300">
              {card.designation}
            </span>
          </div>
        </div>

        {/* QUOTE */}
        <div className="mt-5 flex flex-1">
          <p className="hyi-p">
            {card.text}
          </p>
        </div>

      </div>
    </motion.div>
  );
}
