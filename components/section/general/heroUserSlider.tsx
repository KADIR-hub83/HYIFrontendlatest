// import React from "react";
// import CustomUserCard from "@/components/shared/customUserCard";
// import CustomSwiper from "@/components/shared/customSlider";
// import { StaticImageData } from "next/image";
// import { PublicProfileAPI } from "@/lib/services/api";

// interface User {
//   _id: string;
//   user: string;
//   profilePicture: StaticImageData | string | null;
//   fullName: string;

//   experience?: {
//     designation?: string;
//   }[];

//   text?: string;
// }

// export default async function HeroUserSlider() {
//   const data = await PublicProfileAPI.getFeaturedUsers();
//   return (
//     <div className="flex flex-col gap-5">
//       <h1 className="text-base font-semibold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent text-center capitalize md:text-xl md:font-bold  lg:text-2xl">
//         {"Verified Global Talents."}
//       </h1>
//       <CustomSwiper
//         items={data.map((user: User) => (
//           <CustomUserCard  key={user._id} user={user} />
//         ))}
//         height="h-[82px]"
//       />
//     </div>
//   );
// }








import React from "react";
import CustomUserCard from "@/components/shared/customUserCard";
import CustomSwiper from "@/components/shared/customSlider";
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

export default async function HeroUserSlider() {
  const data: FeaturedUser[] =
    await PublicProfileAPI.getFeaturedUsers();

  const users = data.map((user) => ({
    userId: user.user,
    talentId: user.user,

    profilePicture: user.profilePicture,

    fullName: user.fullName,

    designation:
      user.experience?.length
        ? user.experience[user.experience.length - 1]
            ?.designation || ""
        : "",

    slug: "",
  }));

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-base font-semibold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent text-center capitalize md:text-xl md:font-bold lg:text-2xl">
        Verified Global Talents.
      </h1>

      <CustomSwiper
        items={users.map((user) => (
          <CustomUserCard
            key={user.userId}
            user={user}
          />
        ))}
        height="h-[82px]"
      />
    </div>
  );
}