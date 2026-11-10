// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// interface MultiLineTypingProps {
//   textSets: string[][];
// }

// export default function CustomMultiTypingHeadings({
//   textSets,
// }: MultiLineTypingProps) {
//   const [setIndex, setSetIndex] = useState(0); // current set
//   const [lineIndex, setLineIndex] = useState(0); // current line in the set
//   const [displayedText, setDisplayedText] = useState("");
//   const [isDeletingAll, setIsDeletingAll] = useState(false);

//   useEffect(() => {
//     let timer: NodeJS.Timeout;
//     let deleteTimer: NodeJS.Timeout;
//     const currentLine = textSets[setIndex][lineIndex];
//     const typingSpeed = 80;

//     if (!isDeletingAll && displayedText.length < currentLine.length) {
//       // Typing
//       timer = setTimeout(() => {
//         setDisplayedText(currentLine.slice(0, displayedText.length + 1));
//       }, typingSpeed / (lineIndex === 2 ? 2.0 : 1.5));
//     } else if (!isDeletingAll && displayedText.length === currentLine.length) {
//       // Finished typing current line
//       timer = setTimeout(() => {
//         if (lineIndex < textSets[setIndex].length - 1) {
//           setLineIndex((prev) => prev + 1);
//           setDisplayedText("");
//         } else {
//           // All lines done → wait, then instantly delete all
//           deleteTimer = setTimeout(() => {
//             setIsDeletingAll(true);
//           }, 300); // wait before disappearing
//         }
//       }, 400);
//       return () => {
//         clearTimeout(timer);
//         clearTimeout(deleteTimer);
//       };
//     } else if (isDeletingAll) {
//       // Instantly clear all lines and go to next set
//       setDisplayedText("");
//       setLineIndex(0);
//       setIsDeletingAll(false);
//       setSetIndex((prev) => (prev + 1) % textSets.length);
//     }

//     return () => clearTimeout(timer);
//   }, [displayedText, isDeletingAll, lineIndex, setIndex, textSets]);

//   const getLineStyle = (i: number) => {
//     if (i === 0)
//       return "text-2xl font-semibold bg-gradient-to-t from-brand-600 to-brand-500 bg-clip-text text-transparent lg:text-4xl";
//     if (i === 1)
//       return "text-2xl font-semibold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent lg:text-2xl";
//     return "text-sm text-dark_mode-300 md:text-base";
//   };

//   return (
//     <div className="flex flex-col gap-2">
//       {!isDeletingAll &&
//         textSets[setIndex].slice(0, lineIndex + 1).map((line, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 5 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//             className={`capitalize cursor-default gap-2 ${getLineStyle(i)}`}
//           >
//             {i === lineIndex ? (
//               <>
//                 {displayedText}
//                 <motion.span
//                   animate={{ opacity: [1, 0, 1] }}
//                   transition={{ duration: 0.8, repeat: Infinity }}
//                   className="text-white"
//                 >
//                   |
//                 </motion.span>
//               </>
//             ) : (
//               line
//             )}
//           </motion.div>
//         ))}
//     </div>
//   );
// }





















// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface MultiLineFlipProps {
//   textSets: string[][];
//   interval?: number; // ek set se dusre set me jaane ka time (ms)
//   stagger?: number; // lines ke beech flip delay (seconds)
// }

// export default function CustomMultiFlipHeadings({
//   textSets,
//   interval = 3500,
//   stagger = 0.15,
// }: MultiLineFlipProps) {
//   const [setIndex, setSetIndex] = useState(0);

//   useEffect(() => {
//     if (textSets.length <= 1) return;
//     const timer = setInterval(() => {
//       setSetIndex((prev) => (prev + 1) % textSets.length);
//     }, interval);
//     return () => clearInterval(timer);
//   }, [textSets.length, interval]);

//   const getLineStyle = (i: number) => {
//     if (i === 0)
//       return "text-2xl font-semibold bg-gradient-to-t from-brand-600 to-brand-500 bg-clip-text text-transparent lg:text-4xl";
//     if (i === 1)
//       return "text-2xl font-semibold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent lg:text-2xl";
//     return "text-sm text-dark_mode-300 md:text-base";
//   };

//   return (
//     <div className="flex flex-col gap-2" style={{ perspective: 800 }}>
//       {textSets[setIndex].map((line, i) => (
//         <div key={i} className="relative overflow-visible">
//           <AnimatePresence mode="wait" initial={false}>
//             <motion.div
//               key={`${setIndex}-${i}`}
//               initial={{ rotateX: -180, opacity: 0, y: 10 }}
//               animate={{ rotateX: 0, opacity: 1, y: 0 }}
//               exit={{ rotateX: 180, opacity: 0, y: -10 }}
//               transition={{
//                 duration: 0.6,
//                 ease: "easeInOut",
//                 delay: i * stagger,
//               }}
//               style={{
//                 transformOrigin: "center center",
//                 transformStyle: "preserve-3d",
//                 backfaceVisibility: "hidden",
//               }}
//               className={`capitalize cursor-default ${getLineStyle(i)}`}
//             >
//               {line}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       ))}
//     </div>
//   );
// }


























// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// interface MultiLineFlipProps {
//   textSets: string[][];
//   interval?: number; // ek set se dusre set me jaane ka time (ms)
//   stagger?: number; // lines ke beech flip delay (seconds)
// }

// export default function CustomMultiFlipHeadings({
//   textSets,
//   interval = 4000,
//   stagger = 0.15,
// }: MultiLineFlipProps) {
//   const [setIndex, setSetIndex] = useState(0);

//   useEffect(() => {
//     if (textSets.length <= 1) return;
//     const timer = setInterval(() => {
//       setSetIndex((prev) => (prev + 1) % textSets.length);
//     }, interval);
//     return () => clearInterval(timer);
//   }, [textSets.length, interval]);

//   // Turing style:
//   // line 0 -> big white, line 1 -> big brand colour, line 2 -> small uppercase subtitle
//   const getLineStyle = (i: number) => {
//     if (i === 0)
//       return "text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl";
//     if (i === 1)
//       return "pb-1 text-4xl font-semibold leading-[1.1] tracking-tight bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent sm:text-5xl lg:text-6xl xl:text-7xl";
//     return "mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70 sm:text-xs md:text-sm";
//   };

//   return (
//     <div
//       // className="flex min-h-[230px] flex-col sm:min-h-[270px] lg:min-h-[300px] xl:min-h-[340px]"
//       className="flex  flex-col "
//       style={{ perspective: 900 }}
//     >
//       {textSets[setIndex].map((line, i) => (
//         <div key={i} className="relative">
//           <AnimatePresence mode="wait" initial={false}>
//             <motion.div
//               key={`${setIndex}-${i}`}
//               initial={{ rotateX: -180, opacity: 0, y: 10 }}
//               animate={{ rotateX: 0, opacity: 1, y: 0 }}
//               exit={{ rotateX: 180, opacity: 0, y: -10 }}
//               transition={{
//                 duration: 0.6,
//                 ease: "easeInOut",
//                 delay: i * stagger,
//               }}
//               style={{
//                 transformOrigin: "center center",
//                 transformStyle: "preserve-3d",
//                 backfaceVisibility: "hidden",
//               }}
//               className={`cursor-default ${getLineStyle(i)}`}
//             >
//               {line}
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       ))}
//     </div>
//   );
// }










































"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DM_Sans } from "next/font/google";

const headingFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-hostinger",
});

/**
 * Shared line styles (also used by the SSR fallback in typingAnimation.tsx)
 *  line 0 -> big white
 *  line 1 -> big violet gradient
 *  line 2 -> small mono subtitle with an accent line
 */
export const getLineStyle = (i: number) => {
  if (i === 0)
    return `${headingFont.className} text-[clamp(2.25rem,4.4vw,4rem)] font-bold leading-[1.06] tracking-[-0.035em] text-white`;
  if (i === 1)
    return `${headingFont.className} mt-2 text-[clamp(2.25rem,4.4vw,4rem)] font-bold leading-[1.01] tracking-[-0.035em] bg-gradient-to-r from-[#c4b5fd] via-[#8b5cf6] to-[#6366f1] bg-clip-text text-transparent`;
  // return `${monoFont.className} mt-6 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.26em] text-white/60 sm:text-xs lg:justify-start before:h-px before:w-8 before:shrink-0 before:bg-gradient-to-r before:from-violet-400 before:to-transparent before:content-['']`;
return "hyi-p mt-3 text-xl";
};

interface MultiLineFlipProps {
  textSets: string[][];
  interval?: number; // ek set se dusre set me jaane ka time (ms)
  stagger?: number; // lines ke beech flip delay (seconds)
}

export default function CustomMultiFlipHeadings({
  textSets,
  interval = 4000,
  stagger = 0.15,
}: MultiLineFlipProps) {
  const [setIndex, setSetIndex] = useState(0);

  useEffect(() => {
    if (textSets.length <= 1) return;
    const timer = setInterval(() => {
      setSetIndex((prev) => (prev + 1) % textSets.length);
    }, interval);
    return () => clearInterval(timer);
  }, [textSets.length, interval]);

  return (
    <div className="flex flex-col" style={{ perspective: 900 }}>
      {textSets[setIndex].map((line, i) => (
        <div key={i} className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${setIndex}-${i}`}
              initial={{ rotateX: -180, opacity: 0, y: 10 }}
              animate={{ rotateX: 0, opacity: 1, y: 0 }}
              exit={{ rotateX: 180, opacity: 0, y: -10 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: i * stagger,
              }}
              style={{
                transformOrigin: "center center",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
              className={`cursor-default ${getLineStyle(i)}`}
            >
              {line}
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}