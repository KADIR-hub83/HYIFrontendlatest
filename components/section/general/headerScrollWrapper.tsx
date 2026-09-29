"use client";

import React, {
  useEffect,
  useState,
} from "react";

interface HeaderScrollWrapperProps {
  children: React.ReactNode;
}

export default function HeaderScrollWrapper({
  children,
}: HeaderScrollWrapperProps) {
  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <>
      {/* Keeps the original header space */}
      <div className="h-[92px] w-full" />

      <header
        className={`
          fixed
          left-0
          top-0
          z-[9999]
          flex
          w-full
          justify-center
          px-8
          pb-5
          pt-3
          transition-[background-color,box-shadow,border-color,backdrop-filter]
          duration-300
          ${
            scrolled
              ? `
               
                border-white/10
                bg-black/95
                shadow-[0_10px_35px_rgba(0,0,0,0.55)]
                backdrop-blur-xl
              `
              : `
                border-b
                border-transparent
                bg-transparent
                shadow-none
                backdrop-blur-none
              `
          }
        `}
      >
        {children}
      </header>
    </>
  );
}