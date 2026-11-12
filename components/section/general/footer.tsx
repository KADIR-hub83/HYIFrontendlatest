// // Next Imports
// import Image from "next/image";
// import Link from "next/link";

// // Component Imports
// import CustomSeparator from "@/components/shared/customSeparator";
// import CustomWrapper from "@/components/shared/customWrapper";

// // Data Imports
// import { footer, footerSections } from "@/components/data/footer";
// import { getTechnologiesSubMenuItems } from "@/components/data/header";

// // API Imports
// import { ForTechnologiesPageAPI } from "@/lib/services/api";

// // Image/Icon Imports
// import Logo from "@/assets/shared/logo.svg";
// import facebook from "@/assets/footer/facebook.svg";
// import instagram from "@/assets/footer/instagram.svg";
// import linkedin from "@/assets/footer/linkedin.svg";
// import twitter from "@/assets/footer/twitter.svg";
// import youtube from "@/assets/footer/youtube.svg";

// export default async function Footer() {
//   const technologiesDynamicLinks =
//     await ForTechnologiesPageAPI.getRoutes();

//   const technologiesSubMenuItems =
//     getTechnologiesSubMenuItems(technologiesDynamicLinks);

//   const footerData = {
//     ...footerSections,

//     ConsultingAndSolutions: {
//       heading: "Consulting & Solutions",
//       links: technologiesSubMenuItems.links.map(
//         (item) => [item.label, item.href] as const
//       ),
//     },
//   };

//   return (
//     <CustomWrapper
//       gapBetween="gap-6 md:gap-8"
//       divStyle="footer-radial-gradient"
//       padding="px-8 pt-6 md:px-6 md:pt-6 lg:pt-8"
//     >
//       {/* =========================================================
//           FOOTER LINKS
//       ========================================================= */}
//       <section>
//         <CustomSeparator
//           margin_Y="my-0"
//           from="from-0%"
//           to="to-100%"
//         />

//         <div className="flex w-full flex-col gap-4 py-5 md:gap-8 md:pb-10 md:pt-6">
//           <section className="grid w-full grid-cols-7 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-6 lg:grid-cols-6">
//             {footer.dynamicLinks.map((key, index) => {
//               const section =
//                 footerData[key as keyof typeof footerData];

//               if (!section) {
//                 return null;
//               }

//               return (
//                 <div
//                   key={key}
//                   className={`flex flex-col gap-3 ${
//                     index % 2 !== 0
//                       ? "col-span-3 md:col-auto"
//                       : "col-span-4 md:col-auto"
//                   }`}
//                 >
//                   <h2 className="cursor-default text-lg font-semibold capitalize text-dark_mode-100">
//                     {section.heading}
//                   </h2>

//                   <ul className="flex w-full flex-col gap-2">
//                     {section.links.map((link) => (
//                       <li
//                         key={`${link[0]}-${link[1]}`}
//                         className="w-full text-sm font-medium text-dark_mode-100 transition duration-200 ease-in-out will-change-transform hover:scale-110 md:w-fit"
//                       >
//                         <Link href={link[1]}>
//                           {link[0]}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               );
//             })}
//           </section>

//           {/* =========================================================
//               COPYRIGHT & SOCIAL LINKS
//           ========================================================= */}
//           <section>
//             <CustomSeparator
//               margin_Y="my-3"
//               from="from-0%"
//               to="to-100%"
//             />

//             <div className="flex w-full flex-col items-center gap-4 pt-4 text-center md:flex-row md:justify-between">
//               {/* Logo */}
//               <div className="h-fit w-fit">
//                 <Image
//                   src={Logo}
//                   alt="HYI.AI Logo"
//                 />
//               </div>

//               {/* Copyright */}
//               <p className="cursor-default text-sm font-normal text-dark_mode-100">
//                 © {new Date().getFullYear()} HYI.AI All rights reserved.
//               </p>

//               {/* Social Links */}
//               <ul className="flex items-center gap-4 lg:gap-8">
//                 {/* X / Twitter */}
//                 <li className="transition duration-500 ease-in-out will-change-transform hover:scale-120">
//                   <Link
//                     href="https://www.x.com/HyiAiOfficial"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="HYI.AI on X"
//                   >
//                     <Image
//                       src={twitter}
//                       width={24}
//                       height={42}
//                       alt="X Icon"
//                       className="min-h-[42px] min-w-6"
//                     />
//                   </Link>
//                 </li>

//                 {/* YouTube */}
//                 <li className="transition duration-500 ease-in-out will-change-transform hover:scale-120">
//                   <Link
//                     href="https://www.youtube.com/@HYI.AI_Official"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="HYI.AI on YouTube"
//                   >
//                     <Image
//                       src={youtube}
//                       width={32}
//                       height={42}
//                       alt="YouTube Icon"
//                       className="min-h-[42px] min-w-8"
//                     />
//                   </Link>
//                 </li>

//                 {/* Instagram */}
//                 <li className="transition duration-500 ease-in-out will-change-transform hover:scale-120">
//                   <Link
//                     href="https://www.instagram.com/hyi_ai/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="HYI.AI on Instagram"
//                   >
//                     <Image
//                       src={instagram}
//                       width={24}
//                       height={42}
//                       alt="Instagram Icon"
//                       className="min-h-[42px] min-w-6"
//                     />
//                   </Link>
//                 </li>

//                 {/* Facebook */}
//                 <li className="transition duration-500 ease-in-out will-change-transform hover:scale-120">
//                   <Link
//                     href="https://www.facebook.com/profile.php?id=61574004945155"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="HYI.AI on Facebook"
//                   >
//                     <Image
//                       src={facebook}
//                       width={24}
//                       height={42}
//                       alt="Facebook Icon"
//                       className="min-h-[42px] min-w-6"
//                     />
//                   </Link>
//                 </li>

//                 {/* LinkedIn */}
//                 <li className="transition duration-500 ease-in-out will-change-transform hover:scale-120">
//                   <Link
//                     href="https://www.linkedin.com/company/hyiai/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="HYI.AI on LinkedIn"
//                   >
//                     <Image
//                       src={linkedin}
//                       width={24}
//                       height={42}
//                       alt="LinkedIn Icon"
//                       className="min-h-[42px] min-w-6"
//                     />
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </section>
//         </div>
//       </section>
//     </CustomWrapper>
//   );
// }











// Next Imports
import Image from "next/image";
import Link from "next/link";

// Component Imports
import CustomSeparator from "@/components/shared/customSeparator";
import CustomWrapper from "@/components/shared/customWrapper";
import FooterNav from "@/components/shared/FooterNav";

// Data Imports
import {
  footer,
  footerSections,
  footerMegaMenus,
  type FooterLink,
  type FooterSection,
} from "@/components/data/footer";
import { getTechnologiesSubMenuItems } from "@/components/data/header";


// API Imports
import { ForTechnologiesPageAPI } from "@/lib/services/api";

// Image/Icon Imports
import Logo from "@/assets/shared/logo.svg";
import facebook from "@/assets/footer/facebook.svg";
import instagram from "@/assets/footer/instagram.svg";
import linkedin from "@/assets/footer/linkedin.svg";
import twitter from "@/assets/footer/twitter.svg";
import youtube from "@/assets/footer/youtube.svg";

const socialLinks = [
  { href: "https://www.x.com/HyiAiOfficial", icon: twitter, name: "X", w: 24, cls: "min-w-6" },
  { href: "https://www.youtube.com/@HYI.AI_Official", icon: youtube, name: "YouTube", w: 32, cls: "min-w-8" },
  { href: "https://www.instagram.com/hyi_ai/", icon: instagram, name: "Instagram", w: 24, cls: "min-w-6" },
  { href: "https://www.facebook.com/profile.php?id=61574004945155", icon: facebook, name: "Facebook", w: 24, cls: "min-w-6" },
  { href: "https://www.linkedin.com/company/hyiai/", icon: linkedin, name: "LinkedIn", w: 24, cls: "min-w-6" },
];

export default async function Footer() {
  const technologiesDynamicLinks = await ForTechnologiesPageAPI.getRoutes();

  const technologiesSubMenuItems =
    getTechnologiesSubMenuItems(technologiesDynamicLinks);

  const footerData: Record<string, FooterSection> = {
    ...footerSections,
    ConsultingAndSolutions: {
      heading: "Consulting & Solutions",
      links: technologiesSubMenuItems.links.map(
        (item): FooterLink => [item.label, item.href]
      ),
    },
  };

  const sections = footer.dynamicLinks
    .map((key) => footerData[key])
    .map((section, i) => ({
      key: footer.dynamicLinks[i] as string,
      heading: section?.heading ?? "",
      links: section?.links ?? [],
    }))
    .filter((s) => s.links.length > 0);

  return (
    <CustomWrapper
      gapBetween="gap-6 md:gap-8"
      divStyle="footer-radial-gradient"
      padding="px-8 pt-6 md:px-6 md:pt-6 lg:pt-8"
    >
      <section>
        <CustomSeparator margin_Y="my-0" from="from-0%" to="to-100%" />

        <div className="flex w-full flex-col gap-6 py-5 md:pb-10 md:pt-6">
          {/* Links: desktop = columns + popup, mobile = dropdowns */}
          <FooterNav sections={sections} megaMenus={footerMegaMenus} />

          {/* Copyright & Social */}
          <section>
            <CustomSeparator margin_Y="my-3" from="from-0%" to="to-100%" />

            <div className="flex w-full flex-col items-center gap-4 pt-4 text-center md:flex-row md:justify-between">
              <div className="h-fit w-fit">
                <Image src={Logo} alt="HYI.AI Logo" />
              </div>

              <p className="cursor-default text-sm font-normal text-dark_mode-100">
                © {new Date().getFullYear()} HYI.AI All rights reserved.
              </p>

              <ul className="flex items-center gap-4 lg:gap-8">
                {socialLinks.map((s) => (
                  <li
                    key={s.name}
                    className="transition duration-500 ease-in-out will-change-transform hover:scale-120"
                  >
                    <Link
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`HYI.AI on ${s.name}`}
                    >
                      <Image
                        src={s.icon}
                        width={s.w}
                        height={42}
                        alt={`${s.name} Icon`}
                        className={`min-h-[42px] ${s.cls}`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
    </CustomWrapper>
  );
}