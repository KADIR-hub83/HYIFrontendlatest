// // React Imports
// import React from "react";

// // Next Imports
// import Image from "next/image";
// import Link from "next/link";

// // Components Imports
// import HeaderLinks, {
//   SubMenuNavProps,
// } from "@/components/sub-modules/header/headerLinks";
// import MobileNav from "@/components/sub-modules/header/mobileNav";

// // Data Imports
// import {
//   getTechnologiesSubMenuItems,
//   getIndustriesSubMenuItems,
//   headerData,
// } from "@/components/data/header";

// // Image Imports
// import logo from "@/assets/shared/logo.svg";
// import {
//   ForCompaniesPageAPI,
//   ForIndustriesPageAPI,
//   ForTechnologiesPageAPI,
// } from "@/lib/services/api";
// import HeaderLogin from "@/components/sub-modules/header/headerLogin";
// import HeaderScrollWrapper from "@/components/section/general/headerScrollWrapper";

// interface LinkItem {
//   label: string;
//   href: string;
//   text?: string;
//   icon?: string;
// }

// interface NavProps {
//   value: string;
//   title: string;
//   heading?: string;
//   paragraph?: string;
//   outerPadding?: string;
//   linkTo?: string;
//   links?: LinkItem[];
//   agiTraining?: { heading: string; links: LinkItem[] };
//   itCourses?: { heading: string; links: LinkItem[] };
//   plans?: LinkItem[];
//   subMenu?: SubMenuNavProps[];
// }

// // export default async function Header() {
// //   // const response = await companyTabAPI.getheaderData();
// //   const companyResponse = await ForCompaniesPageAPI.getCompanyHeaderData();

// //   const companyDynamicLinks = await companyResponse.map(
// //     (item: { title: string; navTitle: string; slug: string }) => ({
// //       label: `Hire ${item.title}`,
// //       href: `/${item.slug}`,
// //       text: item.navTitle,
// //     })
// //   );

// //   const technologiesDynamicLinks = await ForTechnologiesPageAPI.getRoutes();
// //   const technologiesSubMenuItems = getTechnologiesSubMenuItems(
// //     technologiesDynamicLinks
// //   );

// //   const industriesDynamicLinks = await ForIndustriesPageAPI.getRoutes();
// //   const industriesSubMenuItems = getIndustriesSubMenuItems(
// //     industriesDynamicLinks
// //   );

// //   const consultingHeaderItems = {
// //     ...headerData.nav[3],
// //     subMenu: [technologiesSubMenuItems, industriesSubMenuItems],
// //   } as NavProps;





// export default async function Header() {
//   const companyResponse =
//     await ForCompaniesPageAPI.getCompanyHeaderData();

//   const companyData = Array.isArray(companyResponse)
//     ? companyResponse
//     : Array.isArray(companyResponse?.data)
//       ? companyResponse.data
//       : [];

//   const companyDynamicLinks = companyData.map(
//     (item: {
//       title?: string;
//       navTitle?: string;
//       slug?: string;
//       name?: string;
//       designation?: string;
//     }) => {
//       const title =
//         item.title ||
//         item.designation ||
//         item.name ||
//         "";

//       const slug =
//         item.slug ||
//         title
//           .toLowerCase()
//           .trim()
//           .replace(/\s+/g, "-")
//           .replace(/[^a-z0-9-]/g, "");

//       return {
//         label: `Hire ${title}`,
//         href: `/${slug}`,
//         text: item.navTitle || title,
//       };
//     }
//   );

//   const technologiesDynamicLinks =
//     await ForTechnologiesPageAPI.getRoutes();

//   const technologiesSubMenuItems =
//     getTechnologiesSubMenuItems(technologiesDynamicLinks);

//   const industriesDynamicLinks =
//     await ForIndustriesPageAPI.getRoutes();

//   const industriesSubMenuItems =
//     getIndustriesSubMenuItems(industriesDynamicLinks);

//   const consultingHeaderItems = {
//     ...headerData.nav[3],
//     subMenu: [
//       technologiesSubMenuItems,
//       industriesSubMenuItems,
//     ],
//   } as NavProps;

//   // const dynamicLinks = await companyDynamicLinks.map(
//   //   (item: {
//   //     slug: string;
//   //     bannerHeading: string;
//   //     bannerHeadingHighlighted: string;
//   //     navSubtitle: string;
//   //     navT: string;
//   //   }) => ({
//   //     label: item.navT,
//   //     href: `/${item.slug}`,
//   //     text: item.navSubtitle,
//   //   })
//   // );

//   return (
//    <HeaderScrollWrapper>
//       <section className="w-full max-w-[1280px] flex justify-between items-center">
//         {/* ----------Logo Section---------- */}
//         <section className="relative z-10">
//           <Link href="/">
//             <Image src={logo} alt="Logo" />
//           </Link>
//         </section>
//         {/* ----------Header Link Section---------- */}
//         {/* <section className="w-fit hidden min-[1360px]:flex">
//           <HeaderLinks
//             navItems={
//               { ...headerData.nav[0], links: companyDynamicLinks } as NavProps
//             }
//             relativeCSS="-left-[35%] min-[1150px]:-left-[50%] min-[1400px]:-left-[60%]"
//             gapBetweendropDown="gap-0.5"
//           >
//             {headerData.nav[0].title}
//           </HeaderLinks>
//           <HeaderLinks
//             navItems={headerData.nav[1]}
//             gapBetweendropDown="gap-0.5"
//             css="left-0 min-[1150px]:-left-[150%] min-[1250px]:left-[280%]"
//             gridColumn="grid-cols-3"
//           >
//             {headerData.nav[1].title}
//           </HeaderLinks>
         
//           <HeaderLinks
//             navItems={headerData.nav[2]}
//             gapBetweendropDown="gap-0.5"
//             gridColumn="grid-cols-3"
//             css="left-0 min-[1250px]:left-50"
//           >
//             {headerData.nav[2].title}
//           </HeaderLinks>
//           <HeaderLinks
//             navItems={consultingHeaderItems}
//             gapBetweendropDown="gap-0.5"
//             css="left-0 min-[1250px]:left-0 whitespace-normal w-[1024px] min-[1250px]:left-20"
//           >
//             {headerData.nav[3].title}
//           </HeaderLinks>
//           <HeaderLinks
//             navItems={headerData.nav[4]}
//             mainLinkDestination={headerData.nav[4].linkTo}
//             gapBetweendropDown="gap-0.5"
//             gridColumn="grid-cols-2"
//             css="left-0 lg:max-w-[500px]"
//             hasDropdownContent={false}
//           >
//             {headerData.nav[4].title}
//           </HeaderLinks>
// <HeaderLinks
//   navItems={headerData.nav[5]}
//   gapBetweendropDown="gap-0.5"
//   gridColumn="grid-cols-2"
//   css="right-0 lg:max-w-[600px]"
// >
//   {headerData.nav[5].title}
// </HeaderLinks>
//         </section> */}
//         {/* ----------Header Link Section---------- */}
// <section className="w-fit hidden min-[1360px]:flex relative">

//   {/* Hire Talent */}
// {/* Hire Talent */}
// {/* <HeaderLinks
//   navItems={
//     {
//       ...headerData.nav[0],
//       links:
//         companyDynamicLinks.length > 0
//           ? companyDynamicLinks
//           : headerData.nav[0].links,
//     } as NavProps
//   }
//   gapBetweendropDown="gap-4"
//   gridColumn="grid-cols-2"
//   relativeCSS="left-[120px] -translate-x-1/2"
//   css="
//     w-[760px]
//     max-w-[calc(100vw-80px)]
//     max-h-[520px]
//     overflow-hidden
//   "
// >
//   {headerData.nav[0].title}
// </HeaderLinks> */}

// <HeaderLinks
//   navItems={headerData.nav[0] as NavProps}
//   gapBetweendropDown="gap-4"
//   gridColumn="grid-cols-2"
//   relativeCSS="left-[280px] -translate-x-1/2"
//   css="
//     w-[760px]
//     max-w-[calc(100vw-80px)]
//     max-h-[520px]
//     overflow-hidden
//   "
// >
//   {headerData.nav[0].title}
// </HeaderLinks>

//   {/* Technology Solutions */}
// <HeaderLinks
//   navItems={headerData.nav[1]}
//   gapBetweendropDown="gap-2"
//   relativeCSS="left-[310px] -translate-x-1/2"
//   css="
//     w-[1050px]
//     max-w-[calc(100vw-80px)]
//     max-h-[550px]
//     overflow-hidden
//   "
// >
//   {headerData.nav[1].title}
// </HeaderLinks>

// {/* Cyber Security Solutions */}
// <HeaderLinks
//   navItems={headerData.nav[2]}
//   gapBetweendropDown="gap-2"
//   relativeCSS="left-1/2 -translate-x-1/2"
//   css="
//     w-[1050px]
//     max-w-[calc(100vw-80px)]
//     max-h-[550px]
//     overflow-hidden
//   "
// >
//   {headerData.nav[2].title}
// </HeaderLinks>

//   {/* GCC */}
//   {/* <HeaderLinks
//     navItems={headerData.nav[3]}
//     gapBetweendropDown="gap-0.5"
//     gridColumn="grid-cols-2"
//     css="left-0 lg:max-w-[650px]"
//   >
//     {headerData.nav[3].title}
//   </HeaderLinks> */}

//   {/* AI Training Program */}
//   <HeaderLinks
//     navItems={headerData.nav[4]}
//     gapBetweendropDown="gap-0.5"
//     gridColumn="grid-cols-3"
//     css=" w-[1050px]
//     max-w-[calc(100vw-80px)]
//     max-h-[550px]
//     overflow-hidden"
//   >
//     {headerData.nav[4].title}
//   </HeaderLinks>

//   {/* Resources */}
//   <HeaderLinks
//     navItems={headerData.nav[5]}
//     gapBetweendropDown="gap-0.5"
//     gridColumn="grid-cols-2"
//     css="right-0 lg:max-w-[600px]"
//   >
//     {headerData.nav[5].title}
//   </HeaderLinks>

// </section>
//         {/* ----------SignUp and SignIn Section---------- */}
//         <HeaderLogin />
//         {/* ----------Mobile and Tab navigation Section---------- */}
//        <section className="flex min-[1360px]:hidden">
//   <MobileNav
//     companyData={[
//       headerData.nav[0],
//       headerData.nav[1],
//       headerData.nav[2],
//       headerData.nav[4],
//       headerData.nav[5],
//     ]}
//   />
// </section>
//       </section>
//    </HeaderScrollWrapper>
//   );
// }






// Next Imports
import Image from "next/image";
import Link from "next/link";

// Component Imports
import HeaderLinks from "@/components/sub-modules/header/headerLinks";
import MobileNav from "@/components/sub-modules/header/mobileNav";
import HeaderLogin from "@/components/sub-modules/header/headerLogin";
import HeaderScrollWrapper from "@/components/section/general/headerScrollWrapper";

// Data Imports
import { headerData } from "@/components/data/header";

// Image Imports
import logo from "@/assets/shared/logo.svg";

export default function Header() {
  return (
    <HeaderScrollWrapper>
      <section className="flex w-full max-w-[1280px] items-center justify-between">
        {/* =========================================================
            LOGO
        ========================================================= */}
   <section className="relative z-10">
  <Link href="/" aria-label="HYI.AI Home">
    <Image
      src={logo}
      alt="HYI.AI Logo"
      priority
      className="w-[80px] h-auto"
    />
  </Link>
</section>

        {/* =========================================================
            DESKTOP NAVIGATION
        ========================================================= */}
        <section className="relative hidden w-fit min-[1360px]:flex">
          {/* Hire Talent */}
          <HeaderLinks
            navItems={headerData.nav[0]}
            gapBetweendropDown="gap-4"
            gridColumn="grid-cols-2"
            relativeCSS="left-[280px] -translate-x-1/2"
            css="
              w-[760px]
              max-w-[calc(100vw-80px)]
              max-h-[520px]
              overflow-hidden
            "
          >
            {headerData.nav[0].title}
          </HeaderLinks>

          {/* Technology Solutions */}
          <HeaderLinks
            navItems={headerData.nav[1]}
            gapBetweendropDown="gap-2"
            relativeCSS="left-[310px] -translate-x-1/2"
            css="
              w-[1050px]
              max-w-[calc(100vw-80px)]
              max-h-[550px]
              overflow-hidden
            "
          >
            {headerData.nav[1].title}
          </HeaderLinks>

          {/* Cyber Security Solutions */}
          <HeaderLinks
            navItems={headerData.nav[2]}
            gapBetweendropDown="gap-2"
            relativeCSS="left-1/2 -translate-x-1/2"
            css="
              w-[1050px]
              max-w-[calc(100vw-80px)]
              max-h-[550px]
              overflow-hidden
            "
          >
            {headerData.nav[2].title}
          </HeaderLinks>

          {/* AI Training Program */}
          <HeaderLinks
            navItems={headerData.nav[4]}
            gapBetweendropDown="gap-0.5"
            gridColumn="grid-cols-3"
            css="
              w-[1050px]
              max-w-[calc(100vw-80px)]
              max-h-[550px]
              overflow-hidden
            "
          >
            {headerData.nav[4].title}
          </HeaderLinks>

          {/* Resources */}
          <HeaderLinks
            navItems={headerData.nav[5]}
            gapBetweendropDown="gap-0.5"
            gridColumn="grid-cols-2"
            css="right-0 lg:max-w-[600px]"
          >
            {headerData.nav[5].title}
          </HeaderLinks>
        </section>

        {/* =========================================================
            LOGIN / SIGNUP
        ========================================================= */}
        <HeaderLogin />

        {/* =========================================================
            MOBILE / TABLET NAVIGATION
        ========================================================= */}
        <section className="flex min-[1360px]:hidden">
          <MobileNav
            companyData={[
              headerData.nav[0],
              headerData.nav[1],
              headerData.nav[2],
              headerData.nav[4],
              headerData.nav[5],
            ]}
          />
        </section>
      </section>
    </HeaderScrollWrapper>
  );
}