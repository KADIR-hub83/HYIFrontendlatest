// "use client";

// // React Imports
// import React, { useState } from "react";

// // Next Imports
// import Link from "next/link";
// import Image, { StaticImageData } from "next/image";

// // Image/Icon Imports
// import verifiedCheck from "@/assets/landingPage/icons/verified-check.svg";
// import Case from "@/assets/landingPage/icons/case.svg";
// import ViewPublicProfile from "@/components/section/general/viewPublicProfile";

// interface CustomUserCard {
//   user: {
//     userId: string;
//     profilePicture: string | StaticImageData;
//     fullName: string;
//     designation: string;
//     talentId: string;
//     slug: string;
//     text?: string;
//   };
//   hasLink?: boolean;
// }

// export default function CustomUserCard({
//   user,
//   hasLink = false,
// }: CustomUserCard) {
//   const [openPublicProfileDialog, setOpenPublicProfileDialog] = useState(false);
//   const [selectedCandidateId, setSelectedCandidateId] = useState<string>("");

//   const handleViewProfile = (candidateId?: string) => {
//     if (!candidateId) return;
//     setSelectedCandidateId(candidateId);
//     setOpenPublicProfileDialog(true);
//   };

//   return hasLink ? (
//     <Link
//       href={`/resume/${user?.slug}`}
//       className="w-full flex items-center glass-gradient shadow-xl rounded-xl cursor-pointer gap-3.5"
//     >
//       <div className="w-[52px] h-[52px] rounded-full">
//         <Image
//           src={user?.profilePicture}
//           alt="User profile image"
//           width={58}
//           height={58}
//           className="rounded-full bg-cover"
//         />
//       </div>
//       <div className="flex flex-col gap-2">
//         <div className="flex flex-col gap-0.5">
//           <h2 className="text-sm font-bold text-white capitalize">
//             {user?.fullName}
//           </h2>
//           <p className="w-fit flex items-center gap-1">
//             <Image
//               src={verifiedCheck}
//               alt="Check mark Icon"
//               height={14}
//               width={14}
//               className="w-3.5 h-3.5"
//             />
//             <span className="text-xs font-normal text-dark_mode-300">
//               {"Verified Talent"}
//             </span>
//           </p>
//           <p className="w-fit flex items-center gap-1">
//             <Image
//               src={Case}
//               alt="Case"
//               height={14}
//               width={14}
//               className="w-3.5 h-3.5"
//             />
//             <span className="text-xs text-dark_mode-300 capitalize">
//               {user?.designation}
//             </span>
//           </p>
//         </div>
//       </div>
//     </Link>
//   ) : (
//     <>
//       <div
//         className="w-full flex items-center glass-gradient-full shadow-xl rounded-xl cursor-pointer px-4 py-2.5 gap-3.5"
//         onClick={() => handleViewProfile(user.talentId)}
//       >
//         <div className="w-[52px] h-[52px] rounded-full">
//           <Image
//             src={user?.profilePicture}
//             alt="User profile image"
//             width={52}
//             height={52}
//             className="rounded-full bg-cover"
//           />
//         </div>
//         <div className="flex flex-col gap-2.5">
//           <div className="w-full flex flex-col gap-1">
//             <h2 className="text-sm font-bold text-white capitalize">
//               {user?.fullName}
//             </h2>
//             <p className="w-fit flex items-center gap-1">
//               <Image
//                 src={verifiedCheck}
//                 alt="Check mark Icon"
//                 height={14}
//                 width={14}
//                 className="w-3.5 h-3.5"
//               />
//               <span className="text-xs font-normal text-dark_mode-300">
//                 {"Verified Talent"}
//               </span>
//             </p>
//             <p className="w-fit flex items-center gap-1">
//               <Image
//                 src={Case}
//                 alt="Case"
//                 height={14}
//                 width={14}
//                 className="w-3.5 h-3.5"
//               />
//               <span className="text-xs font-normal text-dark_mode-300 capitalize">
//                 {user?.designation}
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//       {openPublicProfileDialog && selectedCandidateId && (
//         <ViewPublicProfile
//           open={openPublicProfileDialog}
//           onClose={() => setOpenPublicProfileDialog(false)}
//           selectedCandidateId={selectedCandidateId}
//         />
//       )}
//     </>
//   );
// }












// "use client";

// // React Imports
// import React, { useState } from "react";

// // Next Imports
// import Link from "next/link";
// import Image, { StaticImageData } from "next/image";

// // Image/Icon Imports
// import verifiedCheck from "@/assets/landingPage/icons/verified-check.svg";
// import Case from "@/assets/landingPage/icons/case.svg";
// import ViewPublicProfile from "@/components/section/general/viewPublicProfile";

// interface CustomUserCardProps {
//   user: {
//     userId: string;
//     profilePicture?: string | StaticImageData | null;
//     fullName: string;
//     designation: string;
//     talentId: string;
//     slug: string;
//     text?: string;
//   };
//   hasLink?: boolean;
// }

// export default function CustomUserCard({
//   user,
//   hasLink = false,
// }: CustomUserCardProps) {
//   const [openPublicProfileDialog, setOpenPublicProfileDialog] = useState(false);
//   const [selectedCandidateId, setSelectedCandidateId] = useState<string>("");

//   const handleViewProfile = (candidateId?: string) => {
//     if (!candidateId) return;

//     setSelectedCandidateId(candidateId);
//     setOpenPublicProfileDialog(true);
//   };

//   // -------------------------------------------------------
//   // PROFILE IMAGE VALIDATION
//   // -------------------------------------------------------

//   const hasValidProfilePicture =
//     !!user?.profilePicture &&
//     (typeof user.profilePicture !== "string" ||
//       user.profilePicture.trim().length > 0);

//   // -------------------------------------------------------
//   // USER INITIALS FALLBACK
//   // -------------------------------------------------------

//   const getInitials = (name?: string) => {
//     if (!name) return "U";

//     const words = name.trim().split(/\s+/);

//     if (words.length === 1) {
//       return words[0].charAt(0).toUpperCase();
//     }

//     return (
//       words[0].charAt(0) + words[words.length - 1].charAt(0)
//     ).toUpperCase();
//   };

//   // -------------------------------------------------------
//   // PROFILE IMAGE COMPONENT
//   // -------------------------------------------------------

//   const ProfileImage = ({ size = 52 }: { size?: number }) => {
//     if (!hasValidProfilePicture) {
//       return (
//         <div
//           className="
//             w-full
//             h-full
//             rounded-full
//             flex
//             items-center
//             justify-center
//             bg-gradient-to-br
//             from-purple-600
//             to-violet-900
//             text-white
//             font-bold
//             uppercase
//             select-none
//           "
//         >
//           {getInitials(user?.fullName)}
//         </div>
//       );
//     }

//     return (
//       <Image
//         src={user.profilePicture as string | StaticImageData}
//         alt={`${user?.fullName || "User"} profile image`}
//         width={size}
//         height={size}
//         className="w-full h-full rounded-full object-cover"
//       />
//     );
//   };

//   // -------------------------------------------------------
//   // WITH LINK
//   // -------------------------------------------------------

//   if (hasLink) {
//     return (
//       <Link
//         href={user?.slug ? `/resume/${user.slug}` : "#"}
//         className="
//           w-full
//           flex
//           items-center
//           glass-gradient
//           shadow-xl
//           rounded-xl
//           cursor-pointer
//           gap-3.5
//         "
//       >
//         <div className="w-[52px] h-[52px] min-w-[52px] rounded-full overflow-hidden">
//           <ProfileImage size={58} />
//         </div>

//         <div className="flex flex-col gap-2">
//           <div className="flex flex-col gap-0.5">
//             <h2 className="text-sm font-bold text-white capitalize">
//               {user?.fullName || "HYI Talent"}
//             </h2>

//             <p className="w-fit flex items-center gap-1">
//               <Image
//                 src={verifiedCheck}
//                 alt="Verified"
//                 height={14}
//                 width={14}
//                 className="w-3.5 h-3.5"
//               />

//               <span className="text-xs font-normal text-dark_mode-300">
//                 Verified Talent
//               </span>
//             </p>

//             {user?.designation && (
//               <p className="w-fit flex items-center gap-1">
//                 <Image
//                   src={Case}
//                   alt="Designation"
//                   height={14}
//                   width={14}
//                   className="w-3.5 h-3.5"
//                 />

//                 <span className="text-xs text-dark_mode-300 capitalize">
//                   {user.designation}
//                 </span>
//               </p>
//             )}
//           </div>
//         </div>
//       </Link>
//     );
//   }

//   // -------------------------------------------------------
//   // WITHOUT LINK
//   // -------------------------------------------------------

//   return (
//     <>
//       <div
//         className="
//           w-full
//           flex
//           items-center
//           glass-gradient-full
//           shadow-xl
//           rounded-xl
//           cursor-pointer
//           px-4
//           py-2.5
//           gap-3.5
//         "
//         onClick={() => handleViewProfile(user?.talentId)}
//       >
//         <div className="w-[52px] h-[52px] min-w-[52px] rounded-full overflow-hidden">
//           <ProfileImage size={52} />
//         </div>

//         <div className="flex flex-col gap-2.5">
//           <div className="w-full flex flex-col gap-1">
//             <h2 className="text-sm font-bold text-white capitalize">
//               {user?.fullName || "HYI Talent"}
//             </h2>

//             <p className="w-fit flex items-center gap-1">
//               <Image
//                 src={verifiedCheck}
//                 alt="Verified"
//                 height={14}
//                 width={14}
//                 className="w-3.5 h-3.5"
//               />

//               <span className="text-xs font-normal text-dark_mode-300">
//                 Verified Talent
//               </span>
//             </p>

//             {user?.designation && (
//               <p className="w-fit flex items-center gap-1">
//                 <Image
//                   src={Case}
//                   alt="Designation"
//                   height={14}
//                   width={14}
//                   className="w-3.5 h-3.5"
//                 />

//                 <span className="text-xs font-normal text-dark_mode-300 capitalize">
//                   {user.designation}
//                 </span>
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {openPublicProfileDialog && selectedCandidateId && (
//         <ViewPublicProfile
//           open={openPublicProfileDialog}
//           onClose={() => {
//             setOpenPublicProfileDialog(false);
//             setSelectedCandidateId("");
//           }}
//           selectedCandidateId={selectedCandidateId}
//         />
//       )}
//     </>
//   );
// }
















// "use client";

// import React, { useState } from "react";

// import Link from "next/link";
// import Image, { StaticImageData } from "next/image";

// import verifiedCheck from "@/assets/landingPage/icons/verified-check.svg";
// import Case from "@/assets/landingPage/icons/case.svg";

// import ViewPublicProfile from "@/components/section/general/viewPublicProfile";

// interface CustomUserCardProps {
//   user: {
//     _id?: string;

//     // Featured API / mapped user ID
//     userId?: string;
//     talentId?: string;

//     // Raw backend Jobseeker response
//     user?: string;

//     profilePicture?: string | StaticImageData | null;

//     fullName: string;

//     designation?: string;

//     experience?: {
//       designation?: string;
//     }[];

//     slug?: string;

//     text?: string;
//   };

//   hasLink?: boolean;
// }

// export default function CustomUserCard({
//   user,
//   hasLink = false,
// }: CustomUserCardProps) {
//   const [openPublicProfileDialog, setOpenPublicProfileDialog] =
//     useState(false);

//   const [selectedCandidateId, setSelectedCandidateId] =
//     useState<string>("");

//   // -------------------------------------------------------
//   // DESIGNATION
//   // -------------------------------------------------------

//   const designation =
//     user?.designation ||
//     user?.experience?.[0]?.designation ||
//     "";

//   // -------------------------------------------------------
//   // OPEN PUBLIC PROFILE
//   // -------------------------------------------------------

// const handleViewProfile = () => {
//   const candidateId =
//     user?.userId ||
//     user?.talentId ||
//     user?.user;

//   if (!candidateId) {
//     console.error(
//       "Unable to open talent profile: User ID missing",
//       user
//     );

//     return;
//   }

//   console.log(
//     "Opening talent public profile:",
//     candidateId
//   );

//   setSelectedCandidateId(candidateId);
//   setOpenPublicProfileDialog(true);
// };

//   // -------------------------------------------------------
//   // PROFILE IMAGE VALIDATION
//   // -------------------------------------------------------

//   const hasValidProfilePicture =
//     !!user?.profilePicture &&
//     (typeof user.profilePicture !== "string" ||
//       user.profilePicture.trim().length > 0);

//   // -------------------------------------------------------
//   // USER INITIALS
//   // -------------------------------------------------------

//   const getInitials = (name?: string) => {
//     if (!name) return "U";

//     const words = name.trim().split(/\s+/);

//     if (words.length === 1) {
//       return words[0].charAt(0).toUpperCase();
//     }

//     return (
//       words[0].charAt(0) +
//       words[words.length - 1].charAt(0)
//     ).toUpperCase();
//   };

//   // -------------------------------------------------------
//   // PROFILE IMAGE
//   // -------------------------------------------------------

//   const ProfileImage = ({
//     size = 52,
//   }: {
//     size?: number;
//   }) => {
//     if (!hasValidProfilePicture) {
//       return (
//         <div
//           className="
//             flex
//             h-full
//             w-full
//             select-none
//             items-center
//             justify-center
//             rounded-full
//             bg-gradient-to-br
//             from-purple-600
//             to-violet-900
//             font-bold
//             uppercase
//             text-white
//           "
//         >
//           {getInitials(user?.fullName)}
//         </div>
//       );
//     }

//     return (
//       <Image
//         src={
//           user.profilePicture as
//             | string
//             | StaticImageData
//         }
//         alt={`${user?.fullName || "User"} profile image`}
//         width={size}
//         height={size}
//         className="h-full w-full rounded-full object-cover"
//       />
//     );
//   };

//   // -------------------------------------------------------
//   // LINK VERSION
//   // -------------------------------------------------------

//   if (hasLink && user?.slug) {
//     return (
//       <Link
//         href={`/resume/${user.slug}`}
//         className="
//           glass-gradient
//           flex
//           w-full
//           cursor-pointer
//           items-center
//           gap-3.5
//           rounded-xl
//           shadow-xl
//         "
//       >
//         <div className="h-[52px] w-[52px] min-w-[52px] overflow-hidden rounded-full">
//           <ProfileImage size={58} />
//         </div>

//         <div className="flex flex-col gap-2">
//           <div className="flex flex-col gap-0.5">
//             <h2 className="text-sm font-bold capitalize text-white">
//               {user?.fullName || "HYI Talent"}
//             </h2>

//             <p className="flex w-fit items-center gap-1">
//               <Image
//                 src={verifiedCheck}
//                 alt="Verified"
//                 height={14}
//                 width={14}
//                 className="h-3.5 w-3.5"
//               />

//               <span className="text-xs font-normal text-dark_mode-300">
//                 Verified Talent
//               </span>
//             </p>

//             {designation && (
//               <p className="flex w-fit items-center gap-1">
//                 <Image
//                   src={Case}
//                   alt="Designation"
//                   height={14}
//                   width={14}
//                   className="h-3.5 w-3.5"
//                 />

//                 <span className="text-xs capitalize text-dark_mode-300">
//                   {designation}
//                 </span>
//               </p>
//             )}
//           </div>
//         </div>
//       </Link>
//     );
//   }

//   // -------------------------------------------------------
//   // MODAL VERSION
//   // -------------------------------------------------------

//   return (
//     <>
//       <div
//         role="button"
//         tabIndex={0}
//         className="
//           glass-gradient-full
//           flex
//           w-full
//           cursor-pointer
//           items-center
//           gap-3.5
//           rounded-xl
//           px-4
//           py-2.5
//           shadow-xl
//         "
//         onClick={handleViewProfile}
//         onKeyDown={(event) => {
//           if (
//             event.key === "Enter" ||
//             event.key === " "
//           ) {
//             event.preventDefault();
//             handleViewProfile();
//           }
//         }}
//       >
//         <div className="h-[52px] w-[52px] min-w-[52px] overflow-hidden rounded-full">
//           <ProfileImage size={52} />
//         </div>

//         <div className="flex flex-col gap-2.5">
//           <div className="flex w-full flex-col gap-1">
//             <h2 className="text-sm font-bold capitalize text-white">
//               {user?.fullName || "HYI Talent"}
//             </h2>

//             <p className="flex w-fit items-center gap-1">
//               <Image
//                 src={verifiedCheck}
//                 alt="Verified"
//                 height={14}
//                 width={14}
//                 className="h-3.5 w-3.5"
//               />

//               <span className="text-xs font-normal text-dark_mode-300">
//                 Verified Talent
//               </span>
//             </p>

//             {designation && (
//               <p className="flex w-fit items-center gap-1">
//                 <Image
//                   src={Case}
//                   alt="Designation"
//                   height={14}
//                   width={14}
//                   className="h-3.5 w-3.5"
//                 />

//                 <span className="text-xs font-normal capitalize text-dark_mode-300">
//                   {designation}
//                 </span>
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {openPublicProfileDialog &&
//         selectedCandidateId && (
//           <ViewPublicProfile
//             open={openPublicProfileDialog}
//             selectedCandidateId={
//               selectedCandidateId
//             }
//             onClose={() => {
//               setOpenPublicProfileDialog(false);
//               setSelectedCandidateId("");
//             }}
//           />
//         )}
//     </>
//   );
// }

"use client";

import React, { PointerEvent, useState } from "react";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import verifiedCheck from "@/assets/landingPage/icons/verified-check.svg";
import Case from "@/assets/landingPage/icons/case.svg";

import ViewPublicProfile from "@/components/section/general/viewPublicProfile";

interface CustomUserCardProps {
  user: {
    _id?: string;

    // Featured API / mapped user ID
    userId?: string;
    talentId?: string;

    // Raw backend Jobseeker response
    user?: string;

    profilePicture?: string | StaticImageData | null;

    fullName: string;

    designation?: string;

    experience?: {
      designation?: string;
    }[];

    slug?: string;

    text?: string;
  };

  hasLink?: boolean;
}

/* -------------------------------------------------------------------------- */
/* helpers                                                                    */
/* -------------------------------------------------------------------------- */

const getInitials = (name?: string) => {
  if (!name) return "U";

  const words = name.trim().split(/\s+/);

  if (words.length === 1) return words[0].charAt(0).toUpperCase();

  return (
    words[0].charAt(0) + words[words.length - 1].charAt(0)
  ).toUpperCase();
};

// Defined OUTSIDE the card so it is not re-created (and re-mounted) on every render.
function ProfileImage({
  src,
  name,
  size,
}: {
  src?: string | StaticImageData | null;
  name?: string;
  size: number;
}) {
  const valid =
    !!src && (typeof src !== "string" || src.trim().length > 0);

  if (!valid) {
    return (
      <div className="flex h-full w-full select-none items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-violet-900 text-[17px] font-bold uppercase text-white">
        {getInitials(name)}
      </div>
    );
  }

  return (
    <Image
      src={src as string | StaticImageData}
      alt={`${name || "User"} profile image`}
      width={size}
      height={size}
      draggable={false}
      className="h-full w-full rounded-full object-cover"
    />
  );
}

/* -------------------------------------------------------------------------- */
/* premium card shell: spinning gradient border + cursor spotlight + sweep    */
/* -------------------------------------------------------------------------- */

const SHELL =
  "group relative block w-full cursor-pointer overflow-hidden rounded-[20px] bg-white/10 p-px " +
  "shadow-[0_18px_50px_-20px_rgba(124,58,237,0.55)] transition-all duration-500 ease-out " +
  "hover:-translate-y-1 hover:shadow-[0_28px_70px_-20px_rgba(168,85,247,0.75)] " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400";

const onSpotlight = (e: PointerEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

function CardInner({
  user,
  designation,
  size,
}: {
  user: CustomUserCardProps["user"];
  designation: string;
  size: number;
}) {
  return (
    <>
      {/* rotating gradient border (visible on hover) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-[120%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_240deg,#a855f7_290deg,#22d3ee_335deg,transparent_360deg)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-safe:animate-[spin_5s_linear_infinite]"
      />

      <div className="relative flex items-center gap-4 overflow-hidden rounded-[19px] bg-[linear-gradient(145deg,#171122_0%,#0b0812_100%)] px-4 py-3.5">
        {/* cursor spotlight */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(168,85,247,0.22), transparent 62%)",
          }}
        />
        {/* light sweep */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[1100ms] ease-out group-hover:translate-x-[450%]"
        />

        {/* avatar with gradient ring + verified badge */}
        <div className="relative h-[60px] w-[60px] shrink-0">
          <div className="h-full w-full rounded-full bg-[conic-gradient(from_200deg,#a855f7,#22d3ee,#7c3aed,#a855f7)] p-[2px] transition-transform duration-700 group-hover:rotate-[20deg]">
            <div className="h-full w-full overflow-hidden rounded-full bg-[#0b0812] p-[2px]">
              <ProfileImage
                src={user?.profilePicture}
                name={user?.fullName}
                size={size}
              />
            </div>
          </div>

          <span className="absolute -bottom-0.5 -right-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#0b0812] ring-1 ring-violet-400/40">
            <Image
              src={verifiedCheck}
              alt="Verified"
              height={14}
              width={14}
              className="h-3.5 w-3.5"
            />
          </span>
        </div>

        {/* text */}
        <div className="relative flex min-w-0 flex-col gap-1.5">
          <h2 className="max-w-[190px] truncate text-[15px] font-semibold capitalize leading-tight tracking-tight text-white">
            {user?.fullName || "HYI Talent"}
          </h2>

          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-medium text-violet-200 ring-1 ring-violet-400/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 motion-safe:animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Verified Talent
          </span>

          {designation && (
            <p className="flex w-fit max-w-[190px] items-center gap-1.5">
              <Image
                src={Case}
                alt="Designation"
                height={14}
                width={14}
                className="h-3.5 w-3.5 opacity-70"
              />
              <span className="truncate text-xs font-normal capitalize text-white/60">
                {designation}
              </span>
            </p>
          )}
        </div>

        {/* hover arrow */}
        <span
          aria-hidden
          className="relative ml-auto -translate-x-2 text-lg text-violet-300 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        >
          ↗
        </span>
      </div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* component                                                                  */
/* -------------------------------------------------------------------------- */

export default function CustomUserCard({
  user,
  hasLink = false,
}: CustomUserCardProps) {
  const [openPublicProfileDialog, setOpenPublicProfileDialog] =
    useState(false);

  const [selectedCandidateId, setSelectedCandidateId] =
    useState<string>("");

  const designation =
    user?.designation || user?.experience?.[0]?.designation || "";

  const handleViewProfile = () => {
    const candidateId = user?.userId || user?.talentId || user?.user;

    if (!candidateId) {
      console.error("Unable to open talent profile: User ID missing", user);
      return;
    }

    setSelectedCandidateId(candidateId);
    setOpenPublicProfileDialog(true);
  };

  /* ---- link version ---- */
  if (hasLink && user?.slug) {
    return (
      <Link
        href={`/resume/${user.slug}`}
        className={SHELL}
        onPointerMove={onSpotlight}
      >
        <CardInner user={user} designation={designation} size={58} />
      </Link>
    );
  }

  /* ---- modal version ---- */
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className={SHELL}
        onPointerMove={onSpotlight}
        onClick={handleViewProfile}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleViewProfile();
          }
        }}
      >
        <CardInner user={user} designation={designation} size={52} />
      </div>

      {openPublicProfileDialog && selectedCandidateId && (
        <ViewPublicProfile
          open={openPublicProfileDialog}
          selectedCandidateId={selectedCandidateId}
          onClose={() => {
            setOpenPublicProfileDialog(false);
            setSelectedCandidateId("");
          }}
        />
      )}
    </>
  );
}