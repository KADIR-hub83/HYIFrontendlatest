"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type PreviewCarouselProps = {
  children: React.ReactNode;
  intervalTime?: number;
  pauseOnHover?: boolean;
  className?: string;
};

export default function PreviewCarousel({
  children,
  intervalTime = 3000,
  pauseOnHover = true,
  className = "",
}: PreviewCarouselProps) {
  /* -------------------------------------------------------------------------- */
  /*                                   SLIDES                                   */
  /* -------------------------------------------------------------------------- */

  const slides = useMemo(() => {
    return React.Children.toArray(children).filter(Boolean);
  }, [children]);

  const slideCount = slides.length;

  /*
   * Three copies:
   *
   * [copy 1] [copy 2] [copy 3]
   *
   * User normally stays inside copy 2.
   * When they reach copy 1 / copy 3,
   * we instantly move them back to copy 2.
   */
  const loopedSlides = useMemo(() => {
    if (slideCount === 0) return [];

    return [...slides, ...slides, ...slides];
  }, [slides, slideCount]);

  /* -------------------------------------------------------------------------- */
  /*                                    REFS                                    */
  /* -------------------------------------------------------------------------- */

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const isProgrammaticScrollingRef = useRef(false);

  const scrollEndTimerRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  const programmaticTimerRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  /* -------------------------------------------------------------------------- */
  /*                                   STATE                                    */
  /* -------------------------------------------------------------------------- */

  const [isHovered, setIsHovered] = useState(false);
  const [isTouching, setIsTouching] = useState(false);

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                           DETECT TOUCH DEVICE                               */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    if (typeof window === "undefined") return;

    const touch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    setIsTouchDevice(touch);
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                              HELPER FUNCTIONS                              */
  /* -------------------------------------------------------------------------- */

  const getChildren = useCallback(() => {
    const el = scrollRef.current;

    if (!el) return [];

    return Array.from(el.children).filter(
      (child): child is HTMLElement =>
        child instanceof HTMLElement
    );
  }, []);

  /*
   * Position required to place a slide exactly
   * in the center of carousel viewport.
   */
  const getCenteredScrollPosition = useCallback(
    (child: HTMLElement) => {
      const el = scrollRef.current;

      if (!el) return 0;

      return (
        child.offsetLeft -
        (el.clientWidth - child.offsetWidth) / 2
      );
    },
    []
  );

  /*
   * Find slide closest to viewport center.
   */
  const getClosestSlideIndex = useCallback(() => {
    const el = scrollRef.current;
    const items = getChildren();

    if (!el || items.length === 0) {
      return -1;
    }

    const viewportCenter =
      el.scrollLeft + el.clientWidth / 2;

    let closestIndex = -1;
    let closestDistance = Infinity;

    items.forEach((item, index) => {
      const itemCenter =
        item.offsetLeft + item.offsetWidth / 2;

      const distance = Math.abs(
        viewportCenter - itemCenter
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  }, [getChildren]);

  /* -------------------------------------------------------------------------- */
  /*                            INSTANT TELEPORT                                */
  /* -------------------------------------------------------------------------- */

  const teleportInstant = useCallback(
    (left: number) => {
      const el = scrollRef.current;

      if (!el) return;

      const previousBehavior =
        el.style.scrollBehavior;

      el.style.scrollBehavior = "auto";

      el.scrollLeft = left;

      requestAnimationFrame(() => {
        if (!scrollRef.current) return;

        scrollRef.current.style.scrollBehavior =
          previousBehavior;
      });
    },
    []
  );

  /* -------------------------------------------------------------------------- */
  /*                         TELEPORT BACK TO CENTER                            */
  /* -------------------------------------------------------------------------- */

  const normalizeLoopPosition = useCallback(() => {
    if (slideCount <= 1) return;

    const el = scrollRef.current;
    const items = getChildren();

    if (!el || items.length === 0) return;

    const closestIndex = getClosestSlideIndex();

    if (closestIndex === -1) return;

    /*
     * First copy:
     * 0 -> slideCount - 1
     *
     * Middle copy:
     * slideCount -> slideCount * 2 - 1
     *
     * Third copy:
     * slideCount * 2 -> slideCount * 3 - 1
     */

    let targetIndex: number | null = null;

    if (closestIndex < slideCount) {
      targetIndex = closestIndex + slideCount;
    } else if (
      closestIndex >= slideCount * 2
    ) {
      targetIndex = closestIndex - slideCount;
    }

    if (targetIndex === null) return;

    const target = items[targetIndex];

    /*
     * IMPORTANT:
     * Never access offsetLeft unless target exists.
     */
    if (!target) return;

    teleportInstant(
      getCenteredScrollPosition(target)
    );
  }, [
    slideCount,
    getChildren,
    getClosestSlideIndex,
    getCenteredScrollPosition,
    teleportInstant,
  ]);

  /* -------------------------------------------------------------------------- */
  /*                           INITIAL POSITION                                 */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    const el = scrollRef.current;

    if (!el || slideCount === 0) return;

    /*
     * Wait one animation frame so React has already
     * committed all looped slide DOM elements.
     */
    const frame = requestAnimationFrame(() => {
      const items = getChildren();

      if (items.length === 0) return;

      /*
       * Start at first slide of middle copy.
       *
       * Example:
       * slideCount = 4
       *
       * indexes:
       * 0 1 2 3 | 4 5 6 7 | 8 9 10 11
       *
       * middle index = 4
       */
      const middleIndex =
        slideCount > 1 ? slideCount : 0;

      const middleChild =
        items[middleIndex];

      /*
       * This check fixes your crash.
       */
      if (!middleChild) return;

      teleportInstant(
        getCenteredScrollPosition(middleChild)
      );
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [
    slideCount,
    getChildren,
    getCenteredScrollPosition,
    teleportInstant,
  ]);

  /* -------------------------------------------------------------------------- */
  /*                               NEXT / PREV                                  */
  /* -------------------------------------------------------------------------- */

  const scrollToDirection = useCallback(
    (direction: 1 | -1) => {
      const el = scrollRef.current;
      const items = getChildren();

      if (
        !el ||
        items.length === 0 ||
        slideCount <= 1
      ) {
        return;
      }

      const closestIndex =
        getClosestSlideIndex();

      if (closestIndex === -1) return;

      let targetIndex =
        closestIndex + direction;

      /*
       * Because there are 3 copies,
       * normally we won't hit these,
       * but keeping them makes function safe.
       */
      if (targetIndex < 0) {
        targetIndex = items.length - 1;
      }

      if (targetIndex >= items.length) {
        targetIndex = 0;
      }

      const target = items[targetIndex];

      if (!target) return;

      isProgrammaticScrollingRef.current = true;

      el.scrollTo({
        left: getCenteredScrollPosition(target),
        behavior: "smooth",
      });

      /*
       * After animation finishes,
       * normalize position back into middle copy.
       */
      if (programmaticTimerRef.current) {
        clearTimeout(
          programmaticTimerRef.current
        );
      }

      programmaticTimerRef.current =
        setTimeout(() => {
          isProgrammaticScrollingRef.current =
            false;

          normalizeLoopPosition();
        }, 650);
    },
    [
      slideCount,
      getChildren,
      getClosestSlideIndex,
      getCenteredScrollPosition,
      normalizeLoopPosition,
    ]
  );

  /* -------------------------------------------------------------------------- */
  /*                                 AUTOPLAY                                   */
  /* -------------------------------------------------------------------------- */

  const shouldAutoPlay =
    slideCount > 1 &&
    !isTouching &&
    !(pauseOnHover && isHovered && !isTouchDevice);

  useEffect(() => {
    if (!shouldAutoPlay) return;

    const interval = window.setInterval(() => {
      scrollToDirection(1);
    }, intervalTime);

    return () => {
      window.clearInterval(interval);
    };
  }, [
    shouldAutoPlay,
    intervalTime,
    scrollToDirection,
  ]);

  /* -------------------------------------------------------------------------- */
  /*                            USER SCROLL / SWIPE                             */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    const el = scrollRef.current;

    if (!el || slideCount <= 1) return;

    const handleScroll = () => {
      /*
       * Programmatic smooth scroll is handled
       * by scrollToDirection().
       */
      if (
        isProgrammaticScrollingRef.current
      ) {
        return;
      }

      if (scrollEndTimerRef.current) {
        clearTimeout(
          scrollEndTimerRef.current
        );
      }

      scrollEndTimerRef.current =
        setTimeout(() => {
          normalizeLoopPosition();
        }, 140);
    };

    el.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      el.removeEventListener(
        "scroll",
        handleScroll
      );

      if (scrollEndTimerRef.current) {
        clearTimeout(
          scrollEndTimerRef.current
        );
      }
    };
  }, [
    slideCount,
    normalizeLoopPosition,
  ]);

  /* -------------------------------------------------------------------------- */
  /*                                RESIZE                                      */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    if (slideCount === 0) return;

    const handleResize = () => {
      const el = scrollRef.current;
      const items = getChildren();

      if (!el || items.length === 0) return;

      const closestIndex =
        getClosestSlideIndex();

      if (closestIndex === -1) return;

      const target =
        items[closestIndex];

      if (!target) return;

      teleportInstant(
        getCenteredScrollPosition(target)
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [
    slideCount,
    getChildren,
    getClosestSlideIndex,
    getCenteredScrollPosition,
    teleportInstant,
  ]);

  /* -------------------------------------------------------------------------- */
  /*                              CLEANUP TIMERS                                */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    return () => {
      if (scrollEndTimerRef.current) {
        clearTimeout(
          scrollEndTimerRef.current
        );
      }

      if (programmaticTimerRef.current) {
        clearTimeout(
          programmaticTimerRef.current
        );
      }
    };
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                            NO CHILDREN CASE                                */
  /* -------------------------------------------------------------------------- */

  if (slideCount === 0) {
    return null;
  }

  /* -------------------------------------------------------------------------- */
  /*                                   UI                                       */
  /* -------------------------------------------------------------------------- */

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => {
        if (!isTouchDevice) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (!isTouchDevice) {
          setIsHovered(false);
        }
      }}
    >
      {/* left fade */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          top-0
          z-20
          w-8
          bg-gradient-to-r
          from-black/70
          to-transparent
          sm:w-16
        "
      />

      {/* right fade */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          top-0
          z-20
          w-8
          bg-gradient-to-l
          from-black/70
          to-transparent
          sm:w-16
        "
      />

      {/* carousel */}

      <div
        ref={scrollRef}
        className="
          scrollbar-hide
          flex
          snap-x
          snap-mandatory
          gap-5
          overflow-x-auto
          px-[10vw]
          py-2
          scroll-smooth
          overscroll-x-contain
          sm:px-[15vw]
          lg:px-[20vw]
        "
        onTouchStart={() => {
          setIsTouching(true);
        }}
        onTouchEnd={() => {
          /*
           * Don't immediately start autoplay after
           * finger leaves the screen.
           */
          window.setTimeout(() => {
            setIsTouching(false);
          }, 1000);
        }}
        onTouchCancel={() => {
          setIsTouching(false);
        }}
      >
        {loopedSlides.map(
          (child, index) => (
            <div
              key={`preview-slide-${index}`}
              className="
                w-[80vw]
                max-w-[320px]
                flex-shrink-0
                snap-center
              "
            >
              {child}
            </div>
          )
        )}
      </div>
    </div>
  );
}