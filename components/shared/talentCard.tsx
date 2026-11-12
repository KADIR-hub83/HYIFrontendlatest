// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// /**
//  * TalentCard — Toptal-style expert card, HYI dark-purple theme
//  * ---------------------------------------------------------------------------
//  * Photo on the left (with a small verified corner notch), name + role + a
//  * "Verified talent" footer on the right. The active card (centre of the
//  * carousel) gets a violet border and glow; the others dim back.
//  *
//  * Used by the hero carousel (components/section/landingPage/heroExperience.tsx)
//  */

// export interface HeroTalent {
//   id: string;
//   name: string;
//   designation: string;
//   photo?: string | null;
//   /** demo / placeholder profile (no real account behind it) */
//   demo?: boolean;
// }

// export const initialsOf = (name?: string) => {
//   if (!name) return "U";
//   const words = name.trim().split(/\s+/);
//   if (words.length === 1) return words[0].charAt(0).toUpperCase();
//   return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
// };

// /** Photo with graceful fallback (gradient + initials). Fills its parent. */
// export function TalentPhoto({
//   t,
//   sizes,
//   textClass = "text-3xl",
// }: {
//   t: HeroTalent;
//   sizes: string;
//   textClass?: string;
// }) {
//   const [failed, setFailed] = useState(false);
//   const valid = !!t.photo && t.photo.trim().length > 0 && !failed;

//   if (!valid) {
//     return (
//       <div
//         className={`absolute inset-0 flex select-none items-center justify-center bg-gradient-to-br from-violet-500 to-violet-900 font-semibold uppercase text-white ${textClass}`}
//       >
//         {initialsOf(t.name)}
//       </div>
//     );
//   }

//   return (
//     <Image
//       src={t.photo as string}
//       alt={`${t.name} profile photo`}
//       fill
//       sizes={sizes}
//       draggable={false}
//       onError={() => setFailed(true)}
//       className="object-cover"
//     />
//   );
// }

// const Briefcase = () => (
//   <svg
//     viewBox="0 0 24 24"
//     className="h-4 w-4 shrink-0"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.6"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden
//   >
//     <rect x="3" y="7" width="18" height="13" rx="2.5" />
//     <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 13h18" />
//   </svg>
// );

// const Seal = () => (
//   <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden>
//     <path
//       d="M12 1.8 20 5v6.2c0 5-3.3 9.3-8 11-4.7-1.7-8-6-8-11V5l8-3.2Z"
//       fill="#8b5cf6"
//       fillOpacity="0.25"
//       stroke="#a78bfa"
//       strokeWidth="1.5"
//     />
//     <path
//       d="m8.2 12.2 2.6 2.6 5-5.4"
//       fill="none"
//       stroke="#fff"
//       strokeWidth="1.9"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// interface TalentCardProps {
//   t: HeroTalent;
//   active: boolean;
//   width: number;
//   onClick: () => void;
// }

// export default function TalentCard({ t, active, width, onClick }: TalentCardProps) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       aria-current={active}
//       aria-label={
//         active
//           ? `${t.name}, ${t.designation || "verified talent"}${t.demo ? " (sample profile)" : ". Open profile"}`
//           : `Show ${t.name}`
//       }
//       style={{ width }}
//       className={`group relative flex h-[132px] shrink-0 overflow-hidden rounded-xl border text-left outline-none transition-all duration-500 focus-visible:ring-2 focus-visible:ring-violet-400 ${
//         active
//           ? "scale-100 border-violet-400/80 bg-[#130d22] opacity-100 shadow-[0_24px_70px_-24px_rgba(139,92,246,0.75)]"
//           : "scale-[0.95] border-white/10 bg-[#0c0914] opacity-55 hover:opacity-90"
//       }`}
//     >
//       {/* photo */}
//       <div className="relative w-[114px] shrink-0 overflow-hidden bg-gradient-to-br from-violet-500/30 to-violet-950/60">
//         <TalentPhoto t={t} sizes="114px" />
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#130d22]/40" />
//         {/* verified corner notch */}
//         <span
//           aria-hidden
//           className="absolute bottom-0 left-0 h-8 w-8 bg-violet-600"
//           style={{ clipPath: "polygon(0 30%, 70% 100%, 0 100%)" }}
//         />
//         <svg
//           viewBox="0 0 24 24"
//           className="absolute bottom-[3px] left-[3px] h-3.5 w-3.5 text-white"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="3"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           aria-hidden
//         >
//           <path d="m5 13 4.5 4.5L19 7.5" />
//         </svg>
//       </div>

//       {/* details */}
//       <div className="flex min-w-0 flex-1 flex-col justify-between px-4 py-3.5">
//         <div className="min-w-0">
//           <h3 className="truncate text-[17px] font-semibold leading-tight tracking-tight text-white">
//             {t.name}
//           </h3>
//           {t.designation && (
//             <p className="mt-1.5 flex items-center gap-1.5 text-[13.5px] text-white/65">
//               <Briefcase />
//               <span className="truncate capitalize">{t.designation}</span>
//             </p>
//           )}
//         </div>

//         <div className="flex items-center justify-between border-t border-white/10 pt-2.5">
//           <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-violet-200/80">
//             <Seal />
//             {t.demo ? "Sample" : "Verified talent"}
//           </span>
//           <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
//             Remote
//           </span>
//         </div>
//       </div>
//     </button>
//   );
// }



















































// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// /**
//  * TalentCard — Toptal-style expert card, HYI dark-purple theme
//  * ---------------------------------------------------------------------------
//  * Photo on the left (with a small verified corner notch), name + role + a
//  * "Verified talent" footer on the right. The active card (centre of the
//  * carousel) gets a violet border and glow; the others dim back.
//  *
//  * On hover a "See profile →" pill slides in next to the name.
//  *
//  * Used by the hero carousel (components/section/landingPage/heroExperience.tsx)
//  */

// export interface HeroTalent {
//   id: string;
//   name: string;
//   designation: string;
//   photo?: string | null;
//   /** transparent PNG cut-out (no background) used for the big hero image */
//   cutout?: string | null;
//   /** demo / placeholder profile (no real account behind it) */
//   demo?: boolean;
// }

// export const initialsOf = (name?: string) => {
//   if (!name) return "U";
//   const words = name.trim().split(/\s+/);
//   if (words.length === 1) return words[0].charAt(0).toUpperCase();
//   return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
// };

// /** Photo with graceful fallback (gradient + initials). Fills its parent. */
// export function TalentPhoto({
//   t,
//   sizes,
//   textClass = "text-3xl",
// }: {
//   t: HeroTalent;
//   sizes: string;
//   textClass?: string;
// }) {
//   const [failed, setFailed] = useState(false);
//   const valid = !!t.photo && t.photo.trim().length > 0 && !failed;

//   if (!valid) {
//     return (
//       <div
//         className={`absolute inset-0 flex select-none items-center justify-center bg-gradient-to-br from-violet-500 to-violet-900 font-semibold uppercase text-white ${textClass}`}
//       >
//         {initialsOf(t.name)}
//       </div>
//     );
//   }

//   return (
//     <Image
//       src={t.photo as string}
//       alt={`${t.name} profile photo`}
//       fill
//       sizes={sizes}
//       draggable={false}
//       onError={() => setFailed(true)}
//       className="object-cover"
//     />
//   );
// }

// const Briefcase = () => (
//   <svg
//     viewBox="0 0 24 24"
//     className="h-4 w-4 shrink-0"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.6"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden
//   >
//     <rect x="3" y="7" width="18" height="13" rx="2.5" />
//     <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 13h18" />
//   </svg>
// );

// const Seal = () => (
//   <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden>
//     <path
//       d="M12 1.8 20 5v6.2c0 5-3.3 9.3-8 11-4.7-1.7-8-6-8-11V5l8-3.2Z"
//       fill="#8b5cf6"
//       fillOpacity="0.25"
//       stroke="#a78bfa"
//       strokeWidth="1.5"
//     />
//     <path
//       d="m8.2 12.2 2.6 2.6 5-5.4"
//       fill="none"
//       stroke="#fff"
//       strokeWidth="1.9"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// interface TalentCardProps {
//   t: HeroTalent;
//   active: boolean;
//   width: number;
//   onClick: () => void;
//   /** opens the public profile (shown as "See profile" on hover) */
//   onOpenProfile?: () => void;
// }

// export default function TalentCard({
//   t,
//   active,
//   width,
//   onClick,
//   onOpenProfile,
// }: TalentCardProps) {
//   const canOpen = !t.demo && !!onOpenProfile;

//   return (
//     <div
//       role="button"
//       tabIndex={0}
//       onClick={onClick}
//       onKeyDown={(e) => {
//         if (e.target !== e.currentTarget) return;
//         if (e.key === "Enter" || e.key === " ") {
//           e.preventDefault();
//           onClick();
//         }
//       }}
//       aria-current={active}
//       aria-label={
//         active
//           ? `${t.name}, ${t.designation || "verified talent"}${t.demo ? " (sample profile)" : ". Open profile"}`
//           : `Show ${t.name}`
//       }
//       style={{ width }}
//       className={`group relative flex h-[132px] shrink-0 overflow-hidden rounded-xl border text-left outline-none transition-all duration-500 focus-visible:ring-2 focus-visible:ring-violet-400 ${
//         active
//           ? "scale-100 border-violet-400/80 bg-[#130d22] opacity-100 shadow-[0_24px_70px_-24px_rgba(139,92,246,0.75)]"
//           : "scale-[0.95] border-white/10 bg-[#0c0914] opacity-55 hover:opacity-90"
//       }`}
//     >
//       {/* photo */}
//       <div className="relative w-[114px] shrink-0 overflow-hidden bg-gradient-to-br from-violet-500/30 to-violet-950/60">
//         <TalentPhoto t={t} sizes="114px" />
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#130d22]/40" />
//         {/* verified corner notch */}
//         <span
//           aria-hidden
//           className="absolute bottom-0 left-0 h-8 w-8 bg-violet-600"
//           style={{ clipPath: "polygon(0 30%, 70% 100%, 0 100%)" }}
//         />
//         <svg
//           viewBox="0 0 24 24"
//           className="absolute bottom-[3px] left-[3px] h-3.5 w-3.5 text-white"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="3"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           aria-hidden
//         >
//           <path d="m5 13 4.5 4.5L19 7.5" />
//         </svg>
//       </div>

//       {/* details */}
//       <div className="flex min-w-0 flex-1 flex-col justify-between px-4 py-3.5">
//         <div className="min-w-0">
//           <div className="flex items-center gap-2">
//             <h3 className="min-w-0 flex-1 truncate text-[17px] font-semibold leading-tight tracking-tight text-white">
//               {t.name}
//             </h3>
//             {canOpen && (
//               <button
//                 type="button"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   onOpenProfile?.();
//                 }}
//                 className={`group/see inline-flex max-w-0 shrink-0 items-center gap-1 overflow-hidden whitespace-nowrap rounded-full bg-violet-600 py-1 text-[11.5px] font-medium text-white opacity-0 outline-none transition-all duration-300 ease-out hover:bg-violet-500 group-hover:max-w-[110px] group-hover:px-2.5 group-hover:opacity-100 focus-visible:max-w-[110px] focus-visible:px-2.5 focus-visible:opacity-100 ${
//                   active
//                     ? "[@media(hover:none)]:max-w-[110px] [@media(hover:none)]:px-2.5 [@media(hover:none)]:opacity-100"
//                     : ""
//                 }`}
//               >
//                 See profile
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="h-3 w-3 shrink-0 transition-transform duration-300 group-hover/see:translate-x-0.5"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.4"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   aria-hidden
//                 >
//                   <path d="M5 12h14M13 6l6 6-6 6" />
//                 </svg>
//               </button>
//             )}
//           </div>
//           {t.designation && (
//             <p className="mt-1.5 flex items-center gap-1.5 text-[13.5px] text-white/65">
//               <Briefcase />
//               <span className="truncate capitalize">{t.designation}</span>
//             </p>
//           )}
//         </div>

//         <div className="flex items-center justify-between border-t border-white/10 pt-2.5">
//           <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-violet-200/80">
//             <Seal />
//             {t.demo ? "Sample" : "Verified talent"}
//           </span>
//           <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
//             Remote
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }























































// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// /**
//  * TalentCard — Toptal-style expert card, HYI dark-purple theme
//  * Click => opens profile (handled by the parent via onClick / onOpenProfile)
//  */

// export interface HeroTalent {
//   id: string;
//   name: string;
//   designation: string;
//   photo?: string | null;
//   /** transparent PNG cut-out (no background) */
//   cutout?: string | null;
//   /** demo / placeholder profile (no real account behind it) */
//   demo?: boolean;
//   /** shown on the background cards (falls back to "Remote") */
//   location?: string | null;
//   github?: string | null;
//   linkedin?: string | null;
//   portfolio?: string | null;
// }

// export const initialsOf = (name?: string) => {
//   if (!name) return "U";
//   const words = name.trim().split(/\s+/);
//   if (words.length === 1) return words[0].charAt(0).toUpperCase();
//   return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
// };

// /** Photo with graceful fallback (gradient + initials). Fills its parent. */
// export function TalentPhoto({
//   t,
//   sizes,
//   textClass = "text-3xl",
// }: {
//   t: HeroTalent;
//   sizes: string;
//   textClass?: string;
// }) {
//   const [failed, setFailed] = useState(false);

//   // Dummy profile photo
//   const demoPhoto = `https://i.pravatar.cc/400?u=${encodeURIComponent(t.id)}`;

//   const imageSrc = t.photo || (t.demo ? demoPhoto : null);
//   const valid = !!imageSrc && !failed;

//   if (!valid) {
//     return (
//       <div
//         className={`absolute inset-0 flex select-none items-center justify-center bg-gradient-to-br from-violet-500 to-violet-900 font-semibold uppercase text-white ${textClass}`}
//       >
//         {initialsOf(t.name)}
//       </div>
//     );
//   }

//   return (
//     <Image
//       src={imageSrc}
//       alt={`${t.name} profile photo`}
//       fill
//       sizes={sizes}
//       unoptimized
//       draggable={false}
//       onError={() => setFailed(true)}
//       className="object-cover"
//     />
//   );
// }

// const Briefcase = () => (
//   <svg
//     viewBox="0 0 24 24"
//     className="h-4 w-4 shrink-0"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.6"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden
//   >
//     <rect x="3" y="7" width="18" height="13" rx="2.5" />
//     <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 13h18" />
//   </svg>
// );

// const Seal = () => (
//   <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden>
//     <path
//       d="M12 1.8 20 5v6.2c0 5-3.3 9.3-8 11-4.7-1.7-8-6-8-11V5l8-3.2Z"
//       fill="#8b5cf6"
//       fillOpacity="0.25"
//       stroke="#a78bfa"
//       strokeWidth="1.5"
//     />
//     <path
//       d="m8.2 12.2 2.6 2.6 5-5.4"
//       fill="none"
//       stroke="#fff"
//       strokeWidth="1.9"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// interface TalentCardProps {
//   t: HeroTalent;
//   active: boolean;
//   width: number;
//   onClick: () => void;
//   /** opens the public profile (shown as "See profile" on hover) */
//   onOpenProfile?: () => void;
// }

// export default function TalentCard({
//   t,
//   active,
//   width,
//   onClick,
//   onOpenProfile,
// }: TalentCardProps) {
//   const canOpen = !t.demo && !!onOpenProfile;

//   return (
//     <div
//       role="button"
//       tabIndex={0}
//       onClick={onClick}
//       onKeyDown={(e) => {
//         if (e.target !== e.currentTarget) return;
//         if (e.key === "Enter" || e.key === " ") {
//           e.preventDefault();
//           onClick();
//         }
//       }}
//       aria-current={active}
//       aria-label={
//         t.demo
//           ? `Show ${t.name} (sample profile)`
//           : `${t.name}, ${t.designation || "verified talent"}. Open profile`
//       }
//       style={{ width }}
//       className={`group relative flex h-[132px] shrink-0 cursor-pointer overflow-hidden rounded-xl border text-left outline-none transition-all duration-500 focus-visible:ring-2 focus-visible:ring-violet-400 ${
//         active
//           ? "scale-100 border-violet-400/80 bg-[#130d22] opacity-100 shadow-[0_24px_70px_-24px_rgba(139,92,246,0.75)]"
//           : "scale-[0.95] border-white/10 bg-[#0c0914] opacity-55 hover:opacity-90"
//       }`}
//     >
//       {/* photo */}
//       <div className="relative w-[114px] shrink-0 overflow-hidden bg-gradient-to-br from-violet-500/30 to-violet-950/60">
//         <TalentPhoto t={t} sizes="114px" />
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#130d22]/40" />
//         {/* verified corner notch */}
//         <span
//           aria-hidden
//           className="absolute bottom-0 left-0 h-8 w-8 bg-violet-600"
//           style={{ clipPath: "polygon(0 30%, 70% 100%, 0 100%)" }}
//         />
//         <svg
//           viewBox="0 0 24 24"
//           className="absolute bottom-[3px] left-[3px] h-3.5 w-3.5 text-white"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="3"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           aria-hidden
//         >
//           <path d="m5 13 4.5 4.5L19 7.5" />
//         </svg>
//       </div>

//       {/* details */}
//       <div className="flex min-w-0 flex-1 flex-col justify-between px-4 py-3.5">
//         <div className="min-w-0">
//           <div className="flex items-center gap-2">
//             <h3 className="min-w-0 flex-1 truncate text-[17px] font-semibold leading-tight tracking-tight text-white">
//               {t.name}
//             </h3>
//             {canOpen && (
//               <button
//                 type="button"
//                 onClick={(e) => {
//   e.stopPropagation();
//   onClick();
// }}
//                 className={`group/see inline-flex max-w-0 shrink-0 items-center gap-1 overflow-hidden whitespace-nowrap rounded-full bg-violet-600 py-1 text-[11.5px] font-medium text-white opacity-0 outline-none transition-all duration-300 ease-out hover:bg-violet-500 group-hover:max-w-[110px] group-hover:px-2.5 group-hover:opacity-100 focus-visible:max-w-[110px] focus-visible:px-2.5 focus-visible:opacity-100 ${
//                   active
//                     ? "[@media(hover:none)]:max-w-[110px] [@media(hover:none)]:px-2.5 [@media(hover:none)]:opacity-100"
//                     : ""
//                 }`}
//               >
//                 See profile
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="h-3 w-3 shrink-0 transition-transform duration-300 group-hover/see:translate-x-0.5"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.4"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   aria-hidden
//                 >
//                   <path d="M5 12h14M13 6l6 6-6 6" />
//                 </svg>
//               </button>
//             )}
//           </div>
//           {t.designation && (
//             <p className="mt-1.5 flex items-center gap-1.5 text-[13.5px] text-white/65">
//               <Briefcase />
//               <span className="truncate capitalize">{t.designation}</span>
//             </p>
//           )}
//         </div>

//         <div className="flex items-center justify-between border-t border-white/10 pt-2.5">
//           <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-violet-200/80">
//             <Seal />
//             {t.demo ? "Sample" : "Verified talent"}
//           </span>
//           <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
//             Remote
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
































"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface HeroTalent {
  id: string;
  name: string;
  designation: string;
  photo?: string | null;
  cutout?: string | null;
  demo?: boolean;
  location?: string | null;
  github?: string | null;
  linkedin?: string | null;
  portfolio?: string | null;
}

export const initialsOf = (name?: string) => {
  if (!name) return "U";

  const words = name.trim().split(/\s+/);

  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }

  return (
    words[0].charAt(0) +
    words[words.length - 1].charAt(0)
  ).toUpperCase();
};

export function TalentPhoto({
  t,
  sizes,
  textClass = "text-3xl",
}: {
  t: HeroTalent;
  sizes: string;
  textClass?: string;
}) {
  const [failed, setFailed] = useState(false);

  const demoPhoto = `https://i.pravatar.cc/400?u=${encodeURIComponent(t.id)}`;

  const imageSrc = t.photo || (t.demo ? demoPhoto : null);
  const valid = !!imageSrc && !failed;

  if (!valid) {
    return (
      <div
        className={`absolute inset-0 flex select-none items-center justify-center bg-gradient-to-br from-violet-500 to-violet-900 font-semibold uppercase text-white ${textClass}`}
      >
        {initialsOf(t.name)}
      </div>
    );
  }

  return (
    <Image
      src={imageSrc!}
      alt={`${t.name} profile photo`}
      fill
      sizes={sizes}
      unoptimized
      draggable={false}
      onError={() => setFailed(true)}
      className="object-cover"
    />
  );
}

const Briefcase = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="3" y="7" width="18" height="13" rx="2.5" />
    <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 13h18" />
  </svg>
);

const Seal = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden>
    <path
      d="M12 1.8 20 5v6.2c0 5-3.3 9.3-8 11-4.7-1.7-8-6-8-11V5l8-3.2Z"
      fill="#8b5cf6"
      fillOpacity="0.25"
      stroke="#a78bfa"
      strokeWidth="1.5"
    />
    <path
      d="m8.2 12.2 2.6 2.6 5-5.4"
      fill="none"
      stroke="#fff"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface TalentCardProps {
  t: HeroTalent;
  active: boolean;
  width: number;
  onClick: () => void;
  onOpenProfile?: () => void;
}

export default function TalentCard({
  t,
  onClick,
}: {
  t: HeroTalent;
  onClick?: () => void;
}) {
  const clickable = !t.demo;

  return (
    <div
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : -1}
      onClick={onClick}
      onKeyDown={(e) => {
        if (clickable && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={`group relative flex h-[80px] w-[220px] shrink-0 items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] px-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition-all duration-300 ${
        clickable
          ? "cursor-pointer hover:-translate-y-0.5 hover:border-violet-400/40 hover:shadow-[0_8px_24px_-10px_rgba(139,92,246,0.55),inset_0_1px_0_rgba(255,255,255,0.12)]"
          : "cursor-default"
      }`}
    >
      {/* top shine line */}
      <span className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* avatar */}
      <div className="relative shrink-0">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white/70 via-violet-300/60 to-indigo-500/70 p-[1.5px]">
          <div className="relative h-full w-full overflow-hidden rounded-full bg-[#1a1233]">
            <TalentPhoto t={t} sizes="40px" textClass="text-xs" />
          </div>
        </div>
        <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-white/20 bg-[#0d0916]">
          <svg
            viewBox="0 0 24 24"
            className="h-2.5 w-2.5 text-white/90"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
      </div>

      {/* info */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[14px] font-semibold leading-tight text-white">
          {t.name}
        </p>

        <p className="mt-0.5 flex items-center gap-1.5 text-[10.5px] leading-tight text-white">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
          {t.demo ? "Verified Profile" : "Verified Talent"}
        </p>

        <p className="mt-0.5 flex items-center gap-1.5 truncate text-[10.5px] leading-tight text-white/45">
          <svg
            viewBox="0 0 24 24"
            className="h-2.5 w-2.5 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
          </svg>
          <span className="truncate capitalize text-[12px] font-bold text-white" >
            {t.designation || "Software Engineer"}
          </span>
        </p>
      </div>
    </div>
  );
}