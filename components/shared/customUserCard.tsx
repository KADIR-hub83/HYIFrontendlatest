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
















"use client";

import React, { useState } from "react";

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

export default function CustomUserCard({
  user,
  hasLink = false,
}: CustomUserCardProps) {
  const [openPublicProfileDialog, setOpenPublicProfileDialog] =
    useState(false);

  const [selectedCandidateId, setSelectedCandidateId] =
    useState<string>("");

  // -------------------------------------------------------
  // DESIGNATION
  // -------------------------------------------------------

  const designation =
    user?.designation ||
    user?.experience?.[0]?.designation ||
    "";

  // -------------------------------------------------------
  // OPEN PUBLIC PROFILE
  // -------------------------------------------------------

const handleViewProfile = () => {
  const candidateId =
    user?.userId ||
    user?.talentId ||
    user?.user;

  if (!candidateId) {
    console.error(
      "Unable to open talent profile: User ID missing",
      user
    );

    return;
  }

  console.log(
    "Opening talent public profile:",
    candidateId
  );

  setSelectedCandidateId(candidateId);
  setOpenPublicProfileDialog(true);
};

  // -------------------------------------------------------
  // PROFILE IMAGE VALIDATION
  // -------------------------------------------------------

  const hasValidProfilePicture =
    !!user?.profilePicture &&
    (typeof user.profilePicture !== "string" ||
      user.profilePicture.trim().length > 0);

  // -------------------------------------------------------
  // USER INITIALS
  // -------------------------------------------------------

  const getInitials = (name?: string) => {
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

  // -------------------------------------------------------
  // PROFILE IMAGE
  // -------------------------------------------------------

  const ProfileImage = ({
    size = 52,
  }: {
    size?: number;
  }) => {
    if (!hasValidProfilePicture) {
      return (
        <div
          className="
            flex
            h-full
            w-full
            select-none
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-purple-600
            to-violet-900
            font-bold
            uppercase
            text-white
          "
        >
          {getInitials(user?.fullName)}
        </div>
      );
    }

    return (
      <Image
        src={
          user.profilePicture as
            | string
            | StaticImageData
        }
        alt={`${user?.fullName || "User"} profile image`}
        width={size}
        height={size}
        className="h-full w-full rounded-full object-cover"
      />
    );
  };

  // -------------------------------------------------------
  // LINK VERSION
  // -------------------------------------------------------

  if (hasLink && user?.slug) {
    return (
      <Link
        href={`/resume/${user.slug}`}
        className="
          glass-gradient
          flex
          w-full
          cursor-pointer
          items-center
          gap-3.5
          rounded-xl
          shadow-xl
        "
      >
        <div className="h-[52px] w-[52px] min-w-[52px] overflow-hidden rounded-full">
          <ProfileImage size={58} />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-sm font-bold capitalize text-white">
              {user?.fullName || "HYI Talent"}
            </h2>

            <p className="flex w-fit items-center gap-1">
              <Image
                src={verifiedCheck}
                alt="Verified"
                height={14}
                width={14}
                className="h-3.5 w-3.5"
              />

              <span className="text-xs font-normal text-dark_mode-300">
                Verified Talent
              </span>
            </p>

            {designation && (
              <p className="flex w-fit items-center gap-1">
                <Image
                  src={Case}
                  alt="Designation"
                  height={14}
                  width={14}
                  className="h-3.5 w-3.5"
                />

                <span className="text-xs capitalize text-dark_mode-300">
                  {designation}
                </span>
              </p>
            )}
          </div>
        </div>
      </Link>
    );
  }

  // -------------------------------------------------------
  // MODAL VERSION
  // -------------------------------------------------------

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className="
          glass-gradient-full
          flex
          w-full
          cursor-pointer
          items-center
          gap-3.5
          rounded-xl
          px-4
          py-2.5
          shadow-xl
        "
        onClick={handleViewProfile}
        onKeyDown={(event) => {
          if (
            event.key === "Enter" ||
            event.key === " "
          ) {
            event.preventDefault();
            handleViewProfile();
          }
        }}
      >
        <div className="h-[52px] w-[52px] min-w-[52px] overflow-hidden rounded-full">
          <ProfileImage size={52} />
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex w-full flex-col gap-1">
            <h2 className="text-sm font-bold capitalize text-white">
              {user?.fullName || "HYI Talent"}
            </h2>

            <p className="flex w-fit items-center gap-1">
              <Image
                src={verifiedCheck}
                alt="Verified"
                height={14}
                width={14}
                className="h-3.5 w-3.5"
              />

              <span className="text-xs font-normal text-dark_mode-300">
                Verified Talent
              </span>
            </p>

            {designation && (
              <p className="flex w-fit items-center gap-1">
                <Image
                  src={Case}
                  alt="Designation"
                  height={14}
                  width={14}
                  className="h-3.5 w-3.5"
                />

                <span className="text-xs font-normal capitalize text-dark_mode-300">
                  {designation}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>

      {openPublicProfileDialog &&
        selectedCandidateId && (
          <ViewPublicProfile
            open={openPublicProfileDialog}
            selectedCandidateId={
              selectedCandidateId
            }
            onClose={() => {
              setOpenPublicProfileDialog(false);
              setSelectedCandidateId("");
            }}
          />
        )}
    </>
  );
}