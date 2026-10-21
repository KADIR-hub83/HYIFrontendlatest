// // import React from "react";
// // import CustomUserCard from "@/components/shared/customUserCard";
// // import CustomSwiper from "@/components/shared/customSlider";
// // import { StaticImageData } from "next/image";
// // import { PublicProfileAPI } from "@/lib/services/api";

// // interface User {
// //   _id: string;
// //   user: string;
// //   profilePicture: StaticImageData | string | null;
// //   fullName: string;

// //   experience?: {
// //     designation?: string;
// //   }[];

// //   text?: string;
// // }

// // export default async function HeroUserSlider() {
// //   const data = await PublicProfileAPI.getFeaturedUsers();
// //   return (
// //     <div className="flex flex-col gap-5">
// //       <h1 className="text-base font-semibold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent text-center capitalize md:text-xl md:font-bold  lg:text-2xl">
// //         {"Verified Global Talents."}
// //       </h1>
// //       <CustomSwiper
// //         items={data.map((user: User) => (
// //           <CustomUserCard  key={user._id} user={user} />
// //         ))}
// //         height="h-[82px]"
// //       />
// //     </div>
// //   );
// // }









// import React from "react";
// import CustomUserCard from "@/components/shared/customUserCard";
// import CustomSwiper from "@/components/shared/customSlider";
// import { PublicProfileAPI } from "@/lib/services/api";

// interface FeaturedUser {
//   _id: string;
//   user: string;
//   profilePicture?: string | null;
//   fullName: string;
//   experience?: Array<{
//     designation?: string;
//   }>;
// }

// interface SliderUser {
//   userId: string;
//   talentId: string;
//   profilePicture?: string | null;
//   fullName: string;
//   designation: string;
//   slug: string;
// }

// // Demo profiles are temporary placeholders, not real verified talent.
// const DEMO_USERS: SliderUser[] = [
//   {
//     userId: "demo-talent-01",
//     talentId: "demo-talent-01",
//     profilePicture: null,
//     fullName: "AI Specialist",
//     designation: "Demo Profile",
//     slug: "",
//   },
//   {
//     userId: "demo-talent-02",
//     talentId: "demo-talent-02",
//     profilePicture: null,
//     fullName: "Software Developer",
//     designation: "Demo Profile",
//     slug: "",
//   },
//   {
//     userId: "demo-talent-03",
//     talentId: "demo-talent-03",
//     profilePicture: null,
//     fullName: "Cloud Engineer",
//     designation: "Demo Profile",
//     slug: "",
//   },
//   {
//     userId: "demo-talent-04",
//     talentId: "demo-talent-04",
//     profilePicture: null,
//     fullName: "ML Engineer",
//     designation: "Demo Profile",
//     slug: "",
//   },
// ];

// const MIN_VISIBLE_USERS = 4;

// export default async function HeroUserSlider() {
//   let apiUsers: FeaturedUser[] = [];

//   try {
//     const response = await PublicProfileAPI.getFeaturedUsers();

//     apiUsers = Array.isArray(response) ? response : [];
//   } catch (error) {
//     console.error("Failed to load featured users:", error);
//   }

//   // Keep only one record per actual user.
//   // `user` identifies the account; `_id` is the fallback.
//   const uniqueUsers = new Map<string, FeaturedUser>();

//   for (const user of apiUsers) {
//     const uniqueId = String(user.user || user._id || "").trim();

//     if (!uniqueId || uniqueUsers.has(uniqueId)) {
//       continue;
//     }

//     // Skip incomplete API records.
//     if (!user.fullName?.trim()) {
//       continue;
//     }

//     uniqueUsers.set(uniqueId, user);
//   }

//   const realUsers: SliderUser[] = Array.from(
//     uniqueUsers.values()
//   ).map((user) => {
//     const uniqueId = String(user.user || user._id);

//     return {
//       userId: uniqueId,
//       talentId: uniqueId,
//       profilePicture: user.profilePicture || null,
//       fullName: user.fullName,
//       designation:
//         user.experience?.length
//           ? user.experience[
//               user.experience.length - 1
//             ]?.designation || ""
//           : "",
//       slug: "",
//     };
//   });

//   // Add demo cards only when real profiles are insufficient.
//   // Every additional real profile removes one demo card.
//   const remainingSlots = Math.max(
//     0,
//     MIN_VISIBLE_USERS - realUsers.length
//   );

//   const users: SliderUser[] = [
//     ...realUsers,
//     ...DEMO_USERS.slice(0, remainingSlots),
//   ];

//   return (
//     <div className="flex flex-col gap-5">
//       <h1 className="text-base font-semibold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent text-center capitalize md:text-xl md:font-bold lg:text-2xl">
//         Verified Global Talents.
//       </h1>

//       <CustomSwiper
//         items={users.map((user) => (
//           <CustomUserCard
//             key={user.userId}
//             user={user}
//           />
//         ))}
//         height="h-[82px]"
//       />
//     </div>
//   );
// }


import React from "react";
import TalentCredentialCard from "@/components/shared/talentCredentialCard";
import TalentCarousel3D from "@/components/shared/talentCarousel3D";
import { PublicProfileAPI } from "@/lib/services/api";

interface FeaturedUser {
  _id: string;
  user: string;
  profilePicture?: string | null;
  fullName: string;
  experience?: Array<{
    designation?: string;
  }>;
}

interface SliderUser {
  userId: string;
  talentId: string;
  profilePicture?: string | null;
  fullName: string;
  designation: string;
  slug: string;
}

// Demo profiles are temporary placeholders, not real verified talent.
const DEMO_USERS: SliderUser[] = [
  {
    userId: "demo-talent-01",
    talentId: "demo-talent-01",
    profilePicture: null,
    fullName: "AI Specialist",
    designation: "Demo Profile",
    slug: "",
  },
  {
    userId: "demo-talent-02",
    talentId: "demo-talent-02",
    profilePicture: null,
    fullName: "Software Developer",
    designation: "Demo Profile",
    slug: "",
  },
  {
    userId: "demo-talent-03",
    talentId: "demo-talent-03",
    profilePicture: null,
    fullName: "Cloud Engineer",
    designation: "Demo Profile",
    slug: "",
  },
  {
    userId: "demo-talent-04",
    talentId: "demo-talent-04",
    profilePicture: null,
    fullName: "ML Engineer",
    designation: "Demo Profile",
    slug: "",
  },
];

const MIN_VISIBLE_USERS = 4;
const MAX_USERS = 24; // keeps the 3D ring light

export default async function HeroUserSlider() {
  let apiUsers: FeaturedUser[] = [];

  try {
    const response = await PublicProfileAPI.getFeaturedUsers();

    apiUsers = Array.isArray(response) ? response : [];
  } catch (error) {
    console.error("Failed to load featured users:", error);
  }

  // Keep only one record per actual user.
  // `user` identifies the account; `_id` is the fallback.
  const uniqueUsers = new Map<string, FeaturedUser>();

  for (const user of apiUsers) {
    const uniqueId = String(user.user || user._id || "").trim();

    if (!uniqueId || uniqueUsers.has(uniqueId)) {
      continue;
    }

    // Skip incomplete API records.
    if (!user.fullName?.trim()) {
      continue;
    }

    uniqueUsers.set(uniqueId, user);
  }

  const realUsers: SliderUser[] = Array.from(uniqueUsers.values()).map(
    (user) => {
      const uniqueId = String(user.user || user._id);

      return {
        userId: uniqueId,
        talentId: uniqueId,
        profilePicture: user.profilePicture || null,
        fullName: user.fullName,
        designation: user.experience?.length
          ? user.experience[user.experience.length - 1]?.designation || ""
          : "",
        slug: "",
      };
    }
  );

  // Add demo cards only when real profiles are insufficient.
  // Every additional real profile removes one demo card.
  const remainingSlots = Math.max(0, MIN_VISIBLE_USERS - realUsers.length);

  const users: SliderUser[] = [
    ...realUsers,
    ...DEMO_USERS.slice(0, remainingSlots),
  ].slice(0, MAX_USERS);

  return (
    <section className="relative flex flex-col items-center gap-2">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[55%] -z-10 h-72 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]"
      />

      {/* heading */}
      <div className="flex flex-col items-center gap-4 px-4 text-center">
        {/* <span className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.34em] text-violet-200/80">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-violet-300/60" />
          Verified global talent
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-violet-300/60" />
        </span> */}

        <h1 className="text-base font-semibold hyi-white text-center capitalize md:text-xl md:font-bold lg:text-[26px] ">
          Verified Global Talents.
        </h1>

        <p className="max-w-xl hyi-p">
          Pre-vetted remote developers, ready to join your team. Tap a card to
          explore their profile.
        </p>
      </div>

      <TalentCarousel3D
        className="mt-2"
        items={users.map((user) => (
          <TalentCredentialCard key={user.userId} user={user} />
        ))}
      />
    </section>
  );
}