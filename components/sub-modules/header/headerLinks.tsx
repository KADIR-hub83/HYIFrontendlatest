
"use client";

// React Imports
import React, { ReactNode, useEffect, useRef, useState } from "react";

// Next Imports
import Link from "next/link";


// Lib Import
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";

// ======================================================
// TYPES
// ======================================================

export interface LinkItem {
  label: string;
  href: string;
  text?: string;
  icon?: string;
  children?: LinkItem[];
}

export interface SubMenuNavProps {
  heading: string;
  headingHref?: string;
  paragraph?: string;
  gridCol?: string;
  links?: LinkItem[];
}

interface SubMenuWithNoOfColumns extends SubMenuNavProps {
  colCount: number;
}

interface NavProps {
  value: string;
  title: string;
  heading?: string;
  paragraph?: string;
  outerPadding?: string;
  links?: LinkItem[];
  subMenu?: SubMenuNavProps[];
}

interface LinkListProps {
  links: LinkItem[];
  gap?: string;
  grid?: boolean;
  gridColumn?: string;
  linksItemClassName?: string;
}

interface HeaderLinksProps {
  className?: string;
  navItems?: NavProps;
  mainLinkDestination?: string;
  gapBetweendropDown?: string;
  hasDropdownContent?: boolean;
  headingWrap?: boolean;
  relativeCSS?: string;
  children: ReactNode;
  css?: string;
  gridColumn?: string;
  subItems?: SubMenuNavProps[];
}

interface MultipleSubMenuHeaderLinksProps {
  subMenu: SubMenuNavProps[];
  headingWrap?: boolean;
  gapBetweendropDown: string;
}

// ======================================================
// NAV LINK
// ======================================================

// ======================================================
// NAV LINK
// ======================================================

interface NavLinkProps {
  link: LinkItem;
  className?: string;
  isActive?: boolean;
  onActivate?: (link: LinkItem) => void;
}

const NavLink = ({
  link,
  className = "",
  isActive = false,
  onActivate,
}: NavLinkProps) => {
  const hasChildren =
    Array.isArray(link.children) && link.children.length > 0;

  return (
    <li
      className="w-full list-none"
      onMouseEnter={() => {
        if (hasChildren) {
          onActivate?.(link);
        }
      }}
    >
      <Link
        href={link.href}
        className={cn(
          `
            w-full
            min-h-[46px]

            flex
            items-center
            justify-between

            rounded-md
            border
            border-transparent

            px-3
            py-2.5

            transition-all
            duration-200
          `,
          isActive
            ? "bg-white/5 border-white/15"
            : "hover:bg-white/5 hover:border-white/10",

          className
        )}
      >
        <span
          className="
            text-[13px]
            font-medium
            text-white/90
            whitespace-normal
            leading-5
          "
        >
          {link.label}
        </span>

        {hasChildren && (
          <ChevronRight
            size={17}
            className={cn(
              "shrink-0 ml-3 text-white/60 transition-transform",
              isActive && "translate-x-0.5 text-white"
            )}
          />
        )}
      </Link>
    </li>
  );
};

// ======================================================
// CHILD CONTENT
// ======================================================

const ChildPanel = ({
  parent,
}: {
  parent: LinkItem | null;
}) => {
  if (!parent?.children?.length) {
    return null;
  }

  return (
    <div
      className="
        h-full
        overflow-y-auto
        pr-1

        scrollbar-thin
        scrollbar-thumb-white/10
        scrollbar-track-transparent
      "
    >
      <div
        className={cn(
          "grid gap-x-5 gap-y-1",
          parent.children.length > 6
            ? "grid-cols-2"
            : "grid-cols-1"
        )}
      >
        {parent.children.map((child, index) => (
          <Link
            key={`${child.label}-${index}`}
            href={child.href}
            className="
              min-h-[44px]

              flex
              items-center

              rounded-md
              border
              border-transparent

              px-3
              py-2.5

              text-[13px]
              font-medium
              leading-5
              text-white/90
              whitespace-normal

              hover:bg-white/5
              hover:border-white/10

              transition-all
              duration-200
            "
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
// ======================================================
// LINK LIST
// ======================================================

const LinkList = ({
  links = [],
  gap = "",
  linksItemClassName = "",
}: LinkListProps) => {
  const firstWithChildren =
    links.find((item) => item.children?.length) || null;

  const [activeParent, setActiveParent] =
    useState<LinkItem | null>(firstWithChildren);

  const [showScrollHint, setShowScrollHint] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const hasAnyChildren = links.some(
    (item) => item.children && item.children.length > 0
  );

  useEffect(() => {
    if (!hasAnyChildren) {
      setShowScrollHint(false);
      return;
    }

    const element = scrollRef.current;

    if (!element) {
      return;
    }

    const checkScroll = () => {
      const hasOverflow =
        element.scrollHeight > element.clientHeight;

      const isAtBottom =
        element.scrollTop + element.clientHeight >=
        element.scrollHeight - 8;

      setShowScrollHint(hasOverflow && !isAtBottom);
    };

    checkScroll();

    element.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      element.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [hasAnyChildren, links]);

  // ======================================================
  // EMPTY LINKS
  // ======================================================

  if (!links.length) {
    return null;
  }

  // ======================================================
  // DIRECT LINKS — HIRE TALENT
  // 4 LEFT + 4 RIGHT
  // ======================================================

  if (!hasAnyChildren) {
    const splitIndex = Math.ceil(links.length / 2);

    const leftLinks = links.slice(0, splitIndex);
    const rightLinks = links.slice(splitIndex);

    return (
      <div className="grid w-full grid-cols-2 gap-x-8">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-1 border-r border-white/10 pr-5">
          {leftLinks.map((link, index) => (
            <NavLink
              key={`${link.label}-left-${index}`}
              link={link}
              className={linksItemClassName}
            />
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-1 pl-3">
          {rightLinks.map((link, index) => (
            <NavLink
              key={`${link.label}-right-${index}`}
              link={link}
              className={linksItemClassName}
            />
          ))}
        </div>
      </div>
    );
  }

  // ======================================================
  // CHILD MENU — TECHNOLOGY / CYBER SECURITY ETC.
  // ======================================================

  return (
    <div className="grid h-[390px] max-h-[390px] w-full grid-cols-[320px_minmax(0,1fr)] gap-5">
      {/* ==================================================
          LEFT SIDE
      ================================================== */}

      <div className="relative h-full min-h-0 border-r border-white/10 pr-4">
        {/* SCROLLABLE MENU */}

        <div
          ref={scrollRef}
          className="
            h-full
            overflow-x-hidden
            overflow-y-auto
            pr-1
            scrollbar-thin
            scrollbar-track-transparent
            scrollbar-thumb-white/20
          "
        >
          <ul
            className={cn(
              "flex flex-col gap-1",
              showScrollHint && "pb-14",
              gap
            )}
          >
            {links.map((link, index) => (
              <NavLink
                key={`${link.label}-${index}`}
                link={link}
                className={linksItemClassName}
                isActive={activeParent?.href === link.href}
                onActivate={setActiveParent}
              />
            ))}
          </ul>
        </div>

        {/* SCROLL INDICATOR */}

        {showScrollHint && (
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-4
              z-20
              flex
              h-[75px]
              items-end
              justify-center
              bg-gradient-to-t
              from-black
              via-black/95
              to-transparent
              pb-2
            "
          >
            <div
              className="
                flex
                items-center
                gap-1.5
                rounded-full
                border
                border-white/10
                bg-white/[0.06]
                px-3
                py-1.5
                text-[11px]
                font-medium
                text-white/60
                shadow-lg
                backdrop-blur-md
              "
            >
              <span>Scroll for more</span>

              <ChevronDown
                size={14}
                className="animate-bounce text-white/60"
              />
            </div>
          </div>
        )}
      </div>

      {/* ==================================================
          RIGHT SIDE CHILDREN
      ================================================== */}

      <div className="h-full min-w-0 overflow-hidden">
        <ChildPanel parent={activeParent} />
      </div>
    </div>
  );
};

// ======================================================
// SECTION HEADER
// ======================================================

const SectionHeader = ({
  heading,
  headingHref,
  paragraph,
  headingWrap,
  css = "",
}: {
  heading?: string;
  headingHref?: string;
  paragraph?: string;
  headingWrap?: boolean;
  css?: string;
}) => {
  if (!heading) return null;

  const content = (
    <>
      <h2 className="text-sm font-bold text-dark_mode-100 capitalize">
        {heading}
      </h2>

      {paragraph && (
        <p className="max-w-4xl text-sm text-wrap text-dark_mode-300">
          {paragraph}
        </p>
      )}
    </>
  );

  const sectionClassName = cn(
    "w-full flex flex-col gap-1",
    headingWrap && "max-w-[440px] text-wrap",
    headingHref && "cursor-pointer",
    css
  );

  if (headingHref) {
    return (
      <Link href={headingHref} className={sectionClassName}>
        {content}
      </Link>
    );
  }

  return <div className={sectionClassName}>{content}</div>;
};

// ======================================================
// MULTIPLE SUB MENU
// ======================================================

function MultipleSubMenuHeaderLinks({
  subMenu,
  headingWrap = false,
}: MultipleSubMenuHeaderLinksProps) {
  const subMenuWithNoOfColumns: SubMenuWithNoOfColumns[] =
    subMenu.map((menu) => {
      const linkCount = menu.links?.length || 0;

      let columns = 0;

      if (menu.gridCol) {
        const splitText = menu.gridCol.split("-");
        const lastPart = splitText[splitText.length - 1];
        const parsedColumns = Number(lastPart);

        if (!isNaN(parsedColumns) && parsedColumns > 0) {
          columns = parsedColumns;
        }
      }

      if (!columns) {
        if (linkCount <= 6) {
          columns = 1;
        } else if (linkCount <= 9) {
          columns = 2;
        } else {
          columns = 3;
        }
      }

      return {
        colCount: columns,
        ...menu,
      };
    });

  const generateGridTemplateColumns = (
    menus: SubMenuWithNoOfColumns[]
  ) => {
    let template = "";

    menus.forEach((menu, index) => {
      template += `repeat(${menu.colCount}, 1fr) `;

      if (index < menus.length - 1) {
        template += "60px ";
      }
    });

    return template.trim();
  };

  return (
    <div
      className="w-full grid gap-2 auto-rows-[fit-content]"
      style={{
        gridTemplateColumns:
          generateGridTemplateColumns(subMenuWithNoOfColumns),
      }}
    >
      {subMenuWithNoOfColumns.map((menu, index) => {
        let startCol = 1;

        if (index > 0) {
          startCol = subMenuWithNoOfColumns
            .slice(0, index)
            .reduce(
              (acc, currentMenu) =>
                acc + currentMenu.colCount + 1,
              1
            );
        }

        return (
          <div
            key={`heading-${index}`}
            className="w-full mb-2 pr-2"
            style={{
              gridColumn: `${startCol} / span ${menu.colCount}`,
            }}
          >
            <SectionHeader
              heading={menu.heading}
              headingHref={menu.headingHref}
              paragraph={menu.paragraph}
              headingWrap={headingWrap}
              css="w-11/12"
            />
          </div>
        );
      })}

      {subMenuWithNoOfColumns.map((menu, menuIndex) => {
        let startCol = 1;

        if (menuIndex > 0) {
          startCol = subMenuWithNoOfColumns
            .slice(0, menuIndex)
            .reduce(
              (acc, currentMenu) =>
                acc + currentMenu.colCount + 1,
              1
            );
        }

        return (menu.links || []).map((link, linkIndex) => {
          const row =
            Math.floor(linkIndex / menu.colCount) + 2;

          const col =
            startCol + (linkIndex % menu.colCount);

          return (
            <div
              key={`link-${menuIndex}-${linkIndex}`}
              className="w-full flex items-center justify-center relative"
              style={{
                gridRow: row,
                gridColumn: col,
              }}
            >
              <NavLink link={link} />
            </div>
          );
        });
      })}
    </div>
  );
}

// ======================================================
// MAIN HEADER LINKS
// ======================================================

export default function HeaderLinks({
  className = "flex items-center gap-1 p-2.5 pb-3.5",
  navItems,
  mainLinkDestination = "#",
  gapBetweendropDown = "gap-0.5",
  headingWrap = false,
  hasDropdownContent = true,
  relativeCSS = "left-1/2 -translate-x-1/2",
  css = "",
  gridColumn = "",
  children,
  ...props
}: HeaderLinksProps) {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="relative z-50 flex flex-col rounded">
      {/* MAIN NAV LINK */}
      <Link
        href={mainLinkDestination}
        className={className}
        {...props}
        onMouseEnter={() => setDropDown(true)}
        onMouseLeave={() => setDropDown(false)}
      >
        <span className="w-fit flex text-sm font-medium text-dark_mode-300">
          {children}
        </span>

        <ChevronDown
          size={18}
          className={cn(
            "text-dark_mode-300",
            hasDropdownContent ? "flex" : "hidden",
            "transition-transform duration-300",
            dropDown ? "rotate-180" : "rotate-0"
          )}
        />
      </Link>

      {/* MAIN DROPDOWN */}
      {dropDown && hasDropdownContent && (
        <div
          className={cn(
            `
              absolute
              top-full

              w-max
              max-w-[calc(100vw-40px)]

              flex
              flex-col

              bg-black/95
              backdrop-blur-md

              rounded-lg
              border
              border-white/20

              shadow-lg
              z-50

              overflow-visible

              transition-all
              duration-200
              ease-out

              whitespace-nowrap
              gap-4
            `,
            relativeCSS,
            css,

            navItems?.outerPadding === "large"
              ? "px-6 pt-5 pb-6"
              : navItems?.outerPadding === "medium"
              ? "p-4"
              : "p-2"
          )}
          onMouseEnter={() => setDropDown(true)}
          onMouseLeave={() => setDropDown(false)}
        >
          <SectionHeader
            heading={navItems?.heading}
            paragraph={navItems?.paragraph}
            headingWrap={headingWrap}
          />

          <div
            className={cn(
              "w-full flex",
              gapBetweendropDown
            )}
          >
            {!navItems?.subMenu ? (
              <LinkList
                links={navItems?.links || []}
                gap={gapBetweendropDown}
                gridColumn={gridColumn}
                linksItemClassName="justify-start"
              />
            ) : (
              <MultipleSubMenuHeaderLinks
                subMenu={navItems?.subMenu || []}
                gapBetweendropDown={gapBetweendropDown}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}