// "use client";

// // React Imports
// import React, { useRef, useState } from "react";

// // next Imports
// import Link from "next/link";
// import Image from "next/image";

// // shadcn Imports
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// // Image Imports
// import MobileNavIcon from "@/assets/arrowIcons/menu-03.svg";
// import arrowDownIcon from "@/assets/arrowIcons/chevron-down.svg";
// // import { ChevronRight } from "lucide-react";
// import CustomButton from "@/components/shared/customButton";
// import { ShimmerButton } from "@/components/shared/customShimmerButton";
// // import HeaderButtons from "./headerButtons";
// import { SubMenuNavProps } from "./headerLinks";
// // import { useRouter } from "next/navigation";
// import { X } from "lucide-react";

// interface LinkItem {
//   label: string;
//   href: string;
//   text?: string;
//   icon?: string;
// }

// interface MobileNavProps {
//   companyData: {
//     value: string;
//     title: string;
//     heading?: string;
//     paragraph?: string;
//     outerPadding?: string;
//     links?: LinkItem[];
//     agiTraining?: { heading: string; links: LinkItem[] };
//     itCourses?: { heading: string; links: LinkItem[] };
//     plans?: LinkItem[];
//     linkTo?: string;
//     subMenu?: SubMenuNavProps[];
//   }[];
// }

// // Extended type for nav items that can have subMenu
// type ExtendedNavItem = {
//   value: string;
//   title: string;
//   heading?: string;
//   paragraph?: string;
//   outerPadding?: string;
//   links?: LinkItem[];
//   linkTo?: string;
//   subMenu?: SubMenuNavProps[];
// };

// export default function MobileNav({ companyData }: MobileNavProps) {
//   const [isSheetOpen, setIsSheetOpen] = useState(false);
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
//   const contentRefs = useRef<HTMLDivElement[]>([]);
//   const [dropDownLogin, setDropDownLogin] = useState(false);
//   const [dropDownSignup, setDropDownSignup] = useState(false);
//   // const router = useRouter();

//   const handleLoginClick = () => {
//     setDropDownSignup(false);
//     setDropDownLogin(true);
//   };
//   const handleSignupClick = () => {
//     setDropDownLogin(false);
//     setDropDownSignup(true);
//   };

//   const handleClose = () => {
//     setDropDownSignup(false);
//     setDropDownLogin(false);
//   };

// function handleClick(index: number) {
//   setOpenIndex((prevIndex) => {
//     const nextIndex = prevIndex === index ? null : index;

//     if (nextIndex !== prevIndex) {
//       setOpenSubMenu(null);
//     }

//     return nextIndex;
//   });
// }

// function handleSubMenuClick(
//   parentIndex: number,
//   subMenuIndex: number
// ) {
//   const key = `${parentIndex}-${subMenuIndex}`;

//   setOpenSubMenu((prev) =>
//     prev === key ? null : key
//   );
// }

//   const MobileNavData: ExtendedNavItem[] = [...companyData];

//   return (
//     <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
//       <SheetTrigger asChild>
//         <Button variant="default" className="bg-background">
//           <Image src={MobileNavIcon} alt="Side bar open icon" />
//         </Button>
//       </SheetTrigger>
//       <SheetContent
//         className={`bg-background text-white z-50 transition-transform duration-300 ${
//           isSheetOpen
//             ? "animate-slide-in-from-right"
//             : "animate-slide-out-to-right"
//         }`}
//       >
//         <SheetHeader>
//           <SheetTitle className="hidden">Mobile Nav Dropdown menu</SheetTitle>
//           <SheetDescription className="hidden">
//             To navigae to diffrent page click here
//           </SheetDescription>
//         </SheetHeader>
//         <div className="w-full flex flex-col overflow-y-auto p-4">
//           {MobileNavData.map((item, index) => {
//             const isOpen = openIndex === index;
//             const hasLinks = item?.links && item?.links.length > 0;
//             const hasSubMenu = item?.subMenu && item?.subMenu.length > 0;
//             return (
//               <div key={index} className="py-2">
//                 {!item?.links ? (
//                   <Link href={`${item?.linkTo}`}>
//                     <div
//                       className="w-full flex justify-between items-center gap-2"
//                       onClick={() => handleClick(index)}
//                     >
//                       <h3 className="text-base text-white capitalize">
//                         {item?.title}
//                       </h3>
//                     </div>
//                   </Link>
//                 ) : (
//                   <div
//                     className="w-full flex justify-between items-center gap-2"
//                     onClick={() => handleClick(index)}
//                   >
//                     <h3 className="text-base text-white capitalize">
//                       {item?.title}
//                     </h3>
//                     {(hasLinks || hasSubMenu) && (
//                       <span
//                         className={`min-w-6 min-h-6 flex justify-center items-center transition-transform duration-300 ${
//                           isOpen ? "rotate-180" : "rotate-0"
//                         }`}
//                       >
//                         <Image
//                           src={arrowDownIcon}
//                           alt="Arrow Down Icon"
//                           width={24}
//                           height={24}
//                         />
//                       </span>
//                     )}
//                   </div>
//                 )}
//                 {hasLinks && (
//                   <div
//                     ref={(el) => {
//                       if (el) contentRefs.current[index] = el;
//                     }}
//                     className="transition-max-height overflow-hidden"
//                     style={{
//                       maxHeight: isOpen
//                         ? `${contentRefs.current[index]?.scrollHeight}px`
//                         : "0px",
//                       transition: "max-height 0.3s ease",
//                     }}
//                     aria-hidden={!isOpen}
//                     tabIndex={!isOpen ? -1 : 0}
//                   >
//                     <ul className="flex flex-col gap-2.5 px-2 py-3">
//                       {item.links &&
//                         item?.links.map((link, linkIndex) => (
//                           <Link
//                             href={link?.href}
//                             key={`${linkIndex}-${link?.label}`}
//                           >
//                             <li className="text-sm text-white/80">
//                               {link?.label}
//                             </li>
//                           </Link>
//                         ))}
//                     </ul>
//                   </div>
//                 )}
//                 {hasSubMenu && (
//                   <div
//                     ref={(el) => {
//                       if (el) contentRefs.current[index] = el;
//                     }}
//                     className="transition-max-height overflow-hidden"
//                     style={{
//                       maxHeight: isOpen
//                         ? `${contentRefs.current[index]?.scrollHeight}px`
//                         : "0px",
//                       transition: "max-height 0.3s ease",
//                     }}
//                     aria-hidden={!isOpen}
//                     tabIndex={!isOpen ? -1 : 0}
//                   >
//                     <div className="flex flex-col gap-3 py-2 ">
//                       {item.subMenu &&
//                         item?.subMenu.map((subMenu, subMenuIndex) => (
//                           <div
//                             key={`${subMenuIndex}-${subMenu?.heading}`}
//                             className="w-full flex-col gap-2 "
//                           >
//                             <h4 className="text-sm text-white capitalize">
//                               {subMenu?.heading}
//                             </h4>
//                             <ul className="flex flex-col gap-2.5 px-2 py-2">
//                               {subMenu?.links &&
//                                 subMenu?.links.map((link, linkIndex) => (
//                                   <Link
//                                     href={link?.href}
//                                     key={`${linkIndex}-${link?.label}`}
//                                   >
//                                     <li className="text-xs text-white/80">
//                                       {link?.label}
//                                     </li>
//                                   </Link>
//                                 ))}
//                             </ul>
//                           </div>
//                         ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//         <SheetFooter>
//           <div className="w-full flex flex-col-reverse gap-4 pt-8">
//             <div className="w-full h-full flex flex-col-reverse gap-4">
//               <CustomButton
//                 onClick={handleSignupClick}
//                 otherCSSProperty="w-full"
//               >
//                 Get Started
//               </CustomButton>
//               <ShimmerButton
//                 onClick={handleLoginClick}
//                 className="w-full btn-primary px-6"
//               >
//                 Login
//               </ShimmerButton>
//               {(dropDownLogin || dropDownSignup) && (
//                 <div className="relative w-full flex flex-col bg-black/20 backdrop-blur-md rounded-lg border border-white/20 shadow-lg z-50 overflow-auto overflow-x-hidden transition-all duration-200 ease-out whitespace-nowrap">
//                   <div
//                     className={
//                       "w-full flex flex-col justify-center rounded-md border border-white/0 hover:bg-white/7 p-4 px-3 py-2.5 gap-2.5"
//                     }
//                   >
//                     <div>
//                       <h2 className="text-sm font-medium bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
//                         {dropDownLogin ? "Login" : "Register"} as a
//                         Talent/Freelancer
//                       </h2>
//                       <p className="text-[10px] text-dark_mode-300">
//                         Showcase your skills. Highlight your expertise.
//                       </p>
//                     </div>
//                     <div className="w-full flex items-center justify-between">
//                       <Link
//                         href={"https://youtu.be/n7BQfAV28tg?feature=shared"}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-dark_mode-300 underline underline-offset-4"
//                       >
//                         <p className="text-xs font-medium bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
//                           Walkthrough Video
//                         </p>
//                       </Link>
//                       <Link
//                         href={`https://va.hyi.ai/talent-${
//                           dropDownLogin ? "login" : "signup"
//                         }`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <CustomButton otherCSSProperty="text-[10px] px-5">
//                           {dropDownLogin ? "Login" : "Register"}
//                         </CustomButton>
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="w-full border-t-[1px] border-white/15" />
//                   <div
//                     className={
//                       "w-full flex flex-col justify-center rounded-md border border-white/0 p-4 hover:bg-white/7 transition px-3 py-2.5 gap-2.5"
//                     }
//                   >
//                     <div>
//                       <h2 className="text-sm font-medium bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
//                         {dropDownLogin ? "Login" : "Register"} as a
//                         Company/Startups
//                       </h2>
//                       <p className="text-[10px] text-dark_mode-300">
//                         Hire easily remote, hybrid, or in-office employees.
//                       </p>
//                     </div>
//                     <div className="w-full flex items-center justify-end">
//                       <Link
//                         href={`https://va.hyi.ai/company-${
//                           dropDownLogin ? "login" : "signup"
//                         }`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <CustomButton otherCSSProperty="text-[10px] px-5">
//                           {dropDownLogin ? "Login" : "Register"}
//                         </CustomButton>
//                       </Link>
//                     </div>
//                   </div>
//                   <div
//                     className="absolute top-2 right-2 w-fit h-fit"
//                     onClick={handleClose}
//                   >
//                     <X size={16} strokeWidth={1.5} className="text-white" />
//                   </div>
//                 </div>
//               )}
//             </div>
//             {/* <HeaderButtons /> */}
//           </div>
//         </SheetFooter>
//       </SheetContent>
//     </Sheet>
//   );
// }













"use client";

// React Imports
import React, { useState } from "react";

// Next Imports
import Image from "next/image";
import Link from "next/link";

// Shadcn Imports
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Components Imports
import CustomButton from "@/components/shared/customButton";
import { ShimmerButton } from "@/components/shared/customShimmerButton";

// Image Imports
import MobileNavIcon from "@/assets/arrowIcons/menu-03.svg";
import arrowDownIcon from "@/assets/arrowIcons/chevron-down.svg";

// Icon Imports
import { X } from "lucide-react";

// Types Imports
import { SubMenuNavProps } from "./headerLinks";

// ==================================================
// TYPES
// ==================================================

interface LinkItem {
  label: string;
  href: string;
  text?: string;
  icon?: string;
  children?: LinkItem[];
}

interface MobileNavItem {
  value: string;
  title: string;
  heading?: string;
  paragraph?: string;
  outerPadding?: string;
  links?: LinkItem[];
  linkTo?: string;
  subMenu?: SubMenuNavProps[];
  agiTraining?: {
    heading: string;
    links: LinkItem[];
  };
  itCourses?: {
    heading: string;
    links: LinkItem[];
  };
  plans?: LinkItem[];
}

interface MobileNavProps {
  companyData: MobileNavItem[];
}

// ==================================================
// COMPONENT
// ==================================================

export default function MobileNav({
  companyData,
}: MobileNavProps) {
  // ==================================================
  // STATES
  // ==================================================

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const [openIndex, setOpenIndex] = useState<number | null>(
    null
  );

  const [openChildKey, setOpenChildKey] = useState<
    string | null
  >(null);

  const [openSubMenu, setOpenSubMenu] = useState<
    string | null
  >(null);

  const [dropDownLogin, setDropDownLogin] =
    useState(false);

  const [dropDownSignup, setDropDownSignup] =
    useState(false);

  // ==================================================
  // HELPERS
  // ==================================================

  const resetNavigationState = () => {
    setOpenIndex(null);
    setOpenChildKey(null);
    setOpenSubMenu(null);
  };

  const resetAuthState = () => {
    setDropDownLogin(false);
    setDropDownSignup(false);
  };

  const closeMobileNav = () => {
    setIsSheetOpen(false);

    resetNavigationState();
    resetAuthState();
  };

  // ==================================================
  // MAIN NAVIGATION
  // ==================================================

  const handleMainMenuClick = (index: number) => {
    setOpenIndex((previousIndex) => {
      const nextIndex =
        previousIndex === index ? null : index;

      if (nextIndex !== previousIndex) {
        setOpenChildKey(null);
        setOpenSubMenu(null);
      }

      return nextIndex;
    });
  };

  // ==================================================
  // CHILD NAVIGATION
  // ==================================================

  const handleChildMenuClick = (
    parentIndex: number,
    linkIndex: number
  ) => {
    const key = `${parentIndex}-${linkIndex}`;

    setOpenChildKey((previousKey) =>
      previousKey === key ? null : key
    );
  };

  // ==================================================
  // SUB MENU NAVIGATION
  // ==================================================

  const handleSubMenuClick = (
    parentIndex: number,
    subMenuIndex: number
  ) => {
    const key = `${parentIndex}-${subMenuIndex}`;

    setOpenSubMenu((previousKey) =>
      previousKey === key ? null : key
    );
  };

  // ==================================================
  // AUTH DROPDOWN
  // ==================================================

  const handleLoginClick = () => {
    setDropDownSignup(false);
    setDropDownLogin(true);
  };

  const handleSignupClick = () => {
    setDropDownLogin(false);
    setDropDownSignup(true);
  };

  const handleAuthClose = () => {
    resetAuthState();
  };

  // ==================================================
  // SHEET STATE
  // ==================================================

  const handleSheetOpenChange = (open: boolean) => {
    setIsSheetOpen(open);

    if (!open) {
      resetNavigationState();
      resetAuthState();
    }
  };

  // ==================================================
  // DATA
  // ==================================================

const mobileNavData: MobileNavItem[] = [
  // All mobile navigation items except GCC and Resources
  ...companyData.filter(
    (item) =>
      item.title !== "GCC" &&
      item.title !== "Resources"
  ),

  // Keep the original Resources item with its dropdown data
  ...companyData.filter(
    (item) => item.title === "Resources"
  ),
];
  // ==================================================
  // RENDER
  // ==================================================

  return (
    <Sheet
      open={isSheetOpen}
      onOpenChange={handleSheetOpenChange}
    >
      {/* ==================================================
          MOBILE MENU TRIGGER
      ================================================== */}

      <SheetTrigger asChild>
        <Button
          type="button"
          variant="default"
          className="bg-background"
          aria-label="Open mobile navigation"
        >
          <Image
            src={MobileNavIcon}
            alt=""
            width={24}
            height={24}
          />
        </Button>
      </SheetTrigger>

      {/* ==================================================
          MOBILE NAVIGATION SHEET
      ================================================== */}

      <SheetContent
        className="
          z-50
          flex
          h-dvh
          flex-col
          bg-background
          text-white
        "
      >
        <SheetHeader>
          <SheetTitle className="sr-only">
            Mobile Navigation Menu
          </SheetTitle>

          <SheetDescription className="sr-only">
            Navigate to different pages
          </SheetDescription>
        </SheetHeader>

        {/* ==================================================
            NAVIGATION CONTENT
        ================================================== */}

        <div
          className="
            min-h-0
            w-full
            flex-1
            overflow-y-auto
            overscroll-contain
            px-4
            pb-6
          "
        >
          {mobileNavData.map((item, index) => {
            const isOpen = openIndex === index;

            const hasLinks = Boolean(item.links?.length);

            const hasSubMenu = Boolean(
              item.subMenu?.length
            );

            const hasDropdown =
              hasLinks || hasSubMenu;

            // ==================================================
            // DIRECT NAVIGATION LINK
            // ==================================================

            if (!hasDropdown) {
              return (
                <div
                  key={`${item.value}-${index}`}
                  className="py-1"
                >
                  <Link
                    href={item.linkTo || "#"}
                    onClick={closeMobileNav}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-lg
                      px-2
                      py-3
                      text-base
                      font-normal
                      text-white
                      transition-colors
                      duration-200
                      hover:bg-white/[0.04]
                    "
                  >
                    {item.title}
                  </Link>
                </div>
              );
            }

            // ==================================================
            // DROPDOWN NAVIGATION ITEM
            // ==================================================

            return (
              <div
                key={`${item.value}-${index}`}
                className="py-1"
              >
                {/* Main Dropdown Button */}

                <button
                  type="button"
                  onClick={() =>
                    handleMainMenuClick(index)
                  }
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-3
                    rounded-lg
                    px-2
                    py-3
                    text-left
                    transition-colors
                    duration-200
                    hover:bg-white/[0.04]
                  "
                >
                  <span className="text-base font-normal text-white">
                    {item.title}
                  </span>

                  <span
                    className={`
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      transition-transform
                      duration-300
                      ${
                        isOpen
                          ? "rotate-180"
                          : "rotate-0"
                      }
                    `}
                  >
                    <Image
                      src={arrowDownIcon}
                      alt=""
                      width={22}
                      height={22}
                    />
                  </span>
                </button>

                {/* ==================================================
                    MAIN DROPDOWN CONTENT
                ================================================== */}

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    {/* ==================================================
                        LINKS
                    ================================================== */}

                    {hasLinks && (
                      <div className="flex flex-col gap-1 py-2 pl-2">
                        {item.links?.map(
                          (link, linkIndex) => {
                            const childKey = `${index}-${linkIndex}`;

                            const isChildOpen =
                              openChildKey ===
                              childKey;

                            const hasChildren =
                              Boolean(
                                link.children
                                  ?.length
                              );

                            return (
                              <div
                                key={`${link.label}-${linkIndex}`}
                                className="w-full"
                              >
                                {/* ======================================
                                    LINK WITH CHILDREN
                                ====================================== */}

                                {hasChildren ? (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleChildMenuClick(
                                        index,
                                        linkIndex
                                      )
                                    }
                                    aria-expanded={
                                      isChildOpen
                                    }
                                    className={`
                                      flex
                                      w-full
                                      items-center
                                      justify-between
                                      gap-3
                                      rounded-lg
                                      px-3
                                      py-3
                                      text-left
                                      transition-colors
                                      duration-200
                                      ${
                                        isChildOpen
                                          ? "bg-white/[0.06] text-white"
                                          : "text-white/70 hover:bg-white/[0.04] hover:text-white"
                                      }
                                    `}
                                  >
                                    <span
                                      className="
                                        text-sm
                                        font-normal
                                        leading-5
                                      "
                                    >
                                      {link.label}
                                    </span>

                                    <span
                                      className={`
                                        flex
                                        h-5
                                        w-5
                                        shrink-0
                                        items-center
                                        justify-center
                                        transition-transform
                                        duration-300
                                        ${
                                          isChildOpen
                                            ? "rotate-180"
                                            : "rotate-0"
                                        }
                                      `}
                                    >
                                      <Image
                                        src={
                                          arrowDownIcon
                                        }
                                        alt=""
                                        width={18}
                                        height={18}
                                      />
                                    </span>
                                  </button>
                                ) : (
                                  /* ====================================
                                      NORMAL LINK
                                  ==================================== */

                                  <Link
                                    href={link.href}
                                    onClick={
                                      closeMobileNav
                                    }
                                    className="
                                      block
                                      w-full
                                      rounded-lg
                                      px-3
                                      py-3
                                      text-sm
                                      font-normal
                                      leading-5
                                      text-white/70
                                      transition-colors
                                      duration-200
                                      hover:bg-white/[0.04]
                                      hover:text-white
                                    "
                                  >
                                    {link.label}
                                  </Link>
                                )}

                                {/* ======================================
                                    CHILDREN DROPDOWN
                                ====================================== */}

                                {hasChildren && (
                                  <div
                                    className={`
                                      grid
                                      transition-all
                                      duration-300
                                      ease-in-out
                                      ${
                                        isChildOpen
                                          ? "grid-rows-[1fr] opacity-100"
                                          : "grid-rows-[0fr] opacity-0"
                                      }
                                    `}
                                  >
                                    <div className="overflow-hidden">
                                      <div
                                        className="
                                          ml-4
                                          mt-1
                                          border-l
                                          border-white/10
                                          pl-3
                                        "
                                      >
                                        {link.children?.map(
                                          (
                                            child,
                                            childIndex
                                          ) => (
                                            <Link
                                              key={`${child.label}-${childIndex}`}
                                              href={
                                                child.href
                                              }
                                              onClick={
                                                closeMobileNav
                                              }
                                              className="
                                                block
                                                rounded-md
                                                px-3
                                                py-2.5
                                                text-[13px]
                                                font-normal
                                                leading-5
                                                text-white/50
                                                transition-colors
                                                duration-200
                                                hover:bg-white/[0.04]
                                                hover:text-white
                                              "
                                            >
                                              {
                                                child.label
                                              }
                                            </Link>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          }
                        )}
                      </div>
                    )}

                    {/* ==================================================
                        SUB MENUS
                    ================================================== */}

                    {hasSubMenu && (
                      <div className="flex flex-col gap-1 py-2 pl-2">
                        {item.subMenu?.map(
                          (
                            subMenu,
                            subMenuIndex
                          ) => {
                            const subMenuKey = `${index}-${subMenuIndex}`;

                            const isSubMenuOpen =
                              openSubMenu ===
                              subMenuKey;

                            const hasSubMenuLinks =
                              Boolean(
                                subMenu.links
                                  ?.length
                              );

                            return (
                              <div
                                key={`${subMenu.heading}-${subMenuIndex}`}
                                className="w-full"
                              >
                                {/* ======================================
                                    SUB MENU HEADING
                                ====================================== */}

                                {hasSubMenuLinks ? (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleSubMenuClick(
                                        index,
                                        subMenuIndex
                                      )
                                    }
                                    aria-expanded={
                                      isSubMenuOpen
                                    }
                                    className={`
                                      flex
                                      w-full
                                      items-center
                                      justify-between
                                      gap-3
                                      rounded-lg
                                      px-3
                                      py-2.5
                                      text-left
                                      transition-colors
                                      duration-200
                                      ${
                                        isSubMenuOpen
                                          ? "bg-white/[0.06]"
                                          : "hover:bg-white/[0.04]"
                                      }
                                    `}
                                  >
                                    <span className="text-sm font-normal text-white/85">
                                      {
                                        subMenu.heading
                                      }
                                    </span>

                                    <span
                                      className={`
                                        flex
                                        h-5
                                        w-5
                                        shrink-0
                                        items-center
                                        justify-center
                                        transition-transform
                                        duration-300
                                        ${
                                          isSubMenuOpen
                                            ? "rotate-180"
                                            : "rotate-0"
                                        }
                                      `}
                                    >
                                      <Image
                                        src={
                                          arrowDownIcon
                                        }
                                        alt=""
                                        width={18}
                                        height={18}
                                      />
                                    </span>
                                  </button>
                                ) : (
                                  <div className="px-3 py-2.5 text-sm text-white/85">
                                    {
                                      subMenu.heading
                                    }
                                  </div>
                                )}

                                {/* ======================================
                                    SUB MENU LINKS
                                ====================================== */}

                                {hasSubMenuLinks && (
                                  <div
                                    className={`
                                      grid
                                      transition-all
                                      duration-300
                                      ease-in-out
                                      ${
                                        isSubMenuOpen
                                          ? "grid-rows-[1fr] opacity-100"
                                          : "grid-rows-[0fr] opacity-0"
                                      }
                                    `}
                                  >
                                    <div className="overflow-hidden">
                                      <ul
                                        className="
                                          ml-4
                                          flex
                                          flex-col
                                          border-l
                                          border-white/10
                                          py-1
                                          pl-3
                                        "
                                      >
                                        {subMenu.links?.map(
                                          (
                                            link,
                                            linkIndex
                                          ) => (
                                            <li
                                              key={`${link.label}-${linkIndex}`}
                                            >
                                              <Link
                                                href={
                                                  link.href
                                                }
                                                onClick={
                                                  closeMobileNav
                                                }
                                                className="
                                                  block
                                                  rounded-md
                                                  px-3
                                                  py-2.5
                                                  text-[13px]
                                                  font-normal
                                                  leading-5
                                                  text-white/55
                                                  transition-colors
                                                  duration-200
                                                  hover:bg-white/[0.04]
                                                  hover:text-white
                                                "
                                              >
                                                {
                                                  link.label
                                                }
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================================================
            FOOTER
        ================================================== */}

        <SheetFooter
          className="
            shrink-0
            border-t
            border-white/[0.06]
            bg-background
          "
        >
          <div className="w-full px-4 pb-4 pt-4">
            <div className="flex w-full flex-col-reverse gap-4">
              {/* Get Started */}

              <CustomButton
                onClick={handleSignupClick}
                otherCSSProperty="w-full"
              >
                Get Started
              </CustomButton>

              {/* Login */}

              <ShimmerButton
                onClick={handleLoginClick}
                className="btn-primary w-full px-6"
              >
                Login
              </ShimmerButton>

              {/* ==================================================
                  LOGIN / REGISTER DROPDOWN
              ================================================== */}

              {(dropDownLogin ||
                dropDownSignup) && (
                <div
                  className="
                    relative
                    z-50
                    flex
                    w-full
                    flex-col
                    overflow-x-hidden
                    rounded-lg
                    border
                    border-white/20
                    bg-black/20
                    shadow-lg
                    backdrop-blur-md
                    transition-all
                    duration-200
                    ease-out
                  "
                >
                  {/* ==============================================
                      TALENT / FREELANCER
                  ============================================== */}

                  <div
                    className="
                      flex
                      w-full
                      flex-col
                      justify-center
                      gap-2.5
                      rounded-md
                      border
                      border-white/0
                      px-3
                      py-2.5
                      transition
                      hover:bg-white/[0.07]
                    "
                  >
                    <div>
                      <h2
                        className="
                          bg-gradient-to-b
                          from-white
                          to-white/70
                          bg-clip-text
                          text-sm
                          font-medium
                          text-transparent
                        "
                      >
                        {dropDownLogin
                          ? "Login"
                          : "Register"}{" "}
                        as a Talent/Freelancer
                      </h2>

                      <p className="text-[10px] text-dark_mode-300">
                        Showcase your skills.
                        Highlight your expertise.
                      </p>
                    </div>

                    <div className="flex w-full items-center justify-between gap-3">
                      <Link
                        href="https://youtu.be/n7BQfAV28tg?feature=shared"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark_mode-300 underline underline-offset-4"
                      >
                        <p
                          className="
                            bg-gradient-to-b
                            from-white
                            to-white/70
                            bg-clip-text
                            text-xs
                            font-medium
                            text-transparent
                          "
                        >
                          Walkthrough Video
                        </p>
                      </Link>

                      <Link
                        href={`https://va.hyi.ai/talent-${
                          dropDownLogin
                            ? "login"
                            : "signup"
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CustomButton otherCSSProperty="text-[10px] px-5">
                          {dropDownLogin
                            ? "Login"
                            : "Register"}
                        </CustomButton>
                      </Link>
                    </div>
                  </div>

                  <div className="w-full border-t border-white/15" />

                  {/* ==============================================
                      COMPANY / STARTUPS
                  ============================================== */}

                  <div
                    className="
                      flex
                      w-full
                      flex-col
                      justify-center
                      gap-2.5
                      rounded-md
                      border
                      border-white/0
                      px-3
                      py-2.5
                      transition
                      hover:bg-white/[0.07]
                    "
                  >
                    <div>
                      <h2
                        className="
                          bg-gradient-to-b
                          from-white
                          to-white/70
                          bg-clip-text
                          text-sm
                          font-medium
                          text-transparent
                        "
                      >
                        {dropDownLogin
                          ? "Login"
                          : "Register"}{" "}
                        as a Company/Startups
                      </h2>

                      <p className="text-[10px] text-dark_mode-300">
                        Hire easily remote,
                        hybrid, or in-office
                        employees.
                      </p>
                    </div>

                    <div className="flex w-full items-center justify-end">
                      <Link
                        href={`https://va.hyi.ai/company-${
                          dropDownLogin
                            ? "login"
                            : "signup"
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CustomButton otherCSSProperty="text-[10px] px-5">
                          {dropDownLogin
                            ? "Login"
                            : "Register"}
                        </CustomButton>
                      </Link>
                    </div>
                  </div>

                  {/* Close Auth Dropdown */}

                  <button
                    type="button"
                    onClick={handleAuthClose}
                    aria-label="Close login menu"
                    className="
                      absolute
                      right-2
                      top-2
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                    "
                  >
                    <X
                      size={16}
                      strokeWidth={1.5}
                      className="text-white"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}