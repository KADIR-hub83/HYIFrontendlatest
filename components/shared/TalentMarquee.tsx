
"use client";

import React from "react";
import TalentCard, { HeroTalent } from "./talentCard";

interface TalentMarqueeProps {
  talents: HeroTalent[];
  activeId?: string;
  onSelect: (talent: HeroTalent) => void;
  onOpenProfile?: (talent: HeroTalent) => void;
}

export default function TalentMarquee({
  talents,
  activeId,
  onSelect,
  onOpenProfile,
}: TalentMarqueeProps) {
  if (!talents.length) return null;

  // Duplicate cards for seamless infinite loop
  const loopTalents = [...talents, ...talents];

  return (
    <div className="talent-marquee-viewport group/marquee w-full overflow-hidden">
      <div className="talent-marquee-track flex w-max items-center gap-3">
        {loopTalents.map((talent, index) => (
          <TalentCard
            key={`${talent.id}-${index}`}
            t={talent}
            active={activeId === talent.id}
            width={240}
            onClick={() => onSelect(talent)}
            onOpenProfile={
              onOpenProfile
                ? () => onOpenProfile(talent)
                : undefined
            }
          />
        ))}
      </div>

      <style jsx>{`
        .talent-marquee-viewport {
          position: relative;
          padding: 12px 0;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 9%,
            black 91%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 9%,
            black 91%,
            transparent 100%
          );
        }

        .talent-marquee-track {
          width: max-content;
          animation: talent-marquee-scroll 38s linear infinite;
          will-change: transform;
        }

        .talent-marquee-viewport:hover .talent-marquee-track {
          animation-play-state: paused;
        }

        @keyframes talent-marquee-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 6px));
          }
        }

        @media (max-width: 639px) {
          .talent-marquee-viewport {
            padding-left: calc((100vw - 240px) / 2);
            padding-right: calc((100vw - 240px) / 2);
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 13%,
              black 87%,
              transparent 100%
            );
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 13%,
              black 87%,
              transparent 100%
            );
          }

          .talent-marquee-track {
            animation-duration: 30s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .talent-marquee-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
