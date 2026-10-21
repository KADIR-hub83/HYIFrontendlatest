"use client";

import React, { PointerEvent, useRef, useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import ViewPublicProfile from "@/components/section/general/viewPublicProfile";

/**
 * TalentCredentialCard
 * ---------------------------------------------------------------------------
 * A premium "verified credential" card (think black metal card):
 *  - brushed graphite surface with fine grain + engraved guilloche pattern
 *  - champagne-gold chip, embossed type, mono serial
 *  - real 3D tilt that follows the cursor, with a moving glare + a subtle
 *    holographic foil that only appears where the light hits
 *
 * Same props as the old CustomUserCard -> drop-in for the hero carousel.
 * Fixed size: 320 x 200.
 */

interface TalentCredentialCardProps {
  user: {
    _id?: string;
    userId?: string;
    talentId?: string;
    user?: string;
    profilePicture?: string | StaticImageData | null;
    fullName: string;
    designation?: string;
    experience?: { designation?: string }[];
    slug?: string;
    text?: string;
  };
  hasLink?: boolean;
}

/* ------------------------------- helpers --------------------------------- */

const getInitials = (name?: string) => {
  if (!name) return "U";
  const words = name.trim().split(/\s+/);
  if (words.length === 1) return words[0].charAt(0).toUpperCase();
  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
};

// deterministic "serial" from the user id, e.g. 4F2A 91C0
const serialOf = (id: string) => {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const hex = (h >>> 0).toString(16).toUpperCase().padStart(8, "0");
  return `${hex.slice(0, 4)} ${hex.slice(4)}`;
};

const NOISE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

// Defined outside the component so it never re-mounts on re-render.
function ProfileImage({
  src,
  name,
  size,
}: {
  src?: string | StaticImageData | null;
  name?: string;
  size: number;
}) {
  const valid = !!src && (typeof src !== "string" || src.trim().length > 0);

  if (!valid) {
    return (
      <div className="flex h-full w-full select-none items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-violet-900 text-[18px] font-semibold uppercase text-white">
        {getInitials(name)}
      </div>
    );
  }

  return (
    <Image
      src={src as string | StaticImageData}
      alt={`${name || "User"} profile image`}
      width={size}
      height={size}
      draggable={false}
      className="h-full w-full rounded-full object-cover"
    />
  );
}

const Chip = () => (
  <svg width="38" height="29" viewBox="0 0 38 29" aria-hidden>
    <defs>
      <linearGradient id="chipG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#f3e3b8" />
        <stop offset="0.5" stopColor="#c9a45f" />
        <stop offset="1" stopColor="#8f6c2e" />
      </linearGradient>
    </defs>
    <rect x="0.5" y="0.5" width="37" height="28" rx="6" fill="url(#chipG)" />
    <g stroke="#6b4f1c" strokeOpacity="0.55" strokeWidth="0.9" fill="none">
      <path d="M0.5 10h11M0.5 19h11M26.5 10h11M26.5 19h11" />
      <path d="M11.5 0.5v28M26.5 0.5v28" />
      <rect x="11.5" y="8" width="15" height="13" rx="3" />
    </g>
  </svg>
);

const Seal = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
    <defs>
      <linearGradient id="sealG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#a78bfa" />
        <stop offset="1" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <path
      d="M12 1.8 20 5v6.2c0 5-3.3 9.3-8 11-4.7-1.7-8-6-8-11V5l8-3.2Z"
      fill="url(#sealG)"
      fillOpacity="0.18"
      stroke="url(#sealG)"
      strokeWidth="1.4"
    />
    <path
      d="m8.2 12.2 2.6 2.6 5-5.4"
      fill="none"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* -------------------------------- card ----------------------------------- */

export default function TalentCredentialCard({
  user,
  hasLink = false,
}: TalentCredentialCardProps) {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const tilt = useRef<HTMLDivElement>(null);

  const designation =
    user?.designation || user?.experience?.[0]?.designation || "";

  const candidateId = user?.userId || user?.talentId || user?.user || "";
  const serial = serialOf(candidateId || user?.fullName || "hyi");

  const handleViewProfile = () => {
    if (!candidateId) {
      console.error("Unable to open talent profile: User ID missing", user);
      return;
    }
    setSelectedId(candidateId);
    setOpen(true);
  };

  /* 3D tilt + glare following the cursor */
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = tilt.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `rotateX(${((0.5 - py) * 12).toFixed(2)}deg) rotateY(${((px - 0.5) * 16).toFixed(2)}deg)`;
    el.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
    el.style.setProperty("--hx", `${(px * 100).toFixed(1)}%`);
  };

  const onLeave = () => {
    if (tilt.current) tilt.current.style.transform = "";
  };

  const body = (
    <div
      ref={tilt}
      className="relative h-full w-full rounded-[22px] transition-transform duration-200 ease-out will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* ---------- surface ---------- */}
      <div className="absolute inset-0 isolate overflow-hidden rounded-[22px] bg-[#0b0811] shadow-[0_50px_90px_-35px_rgba(0,0,0,0.95),0_18px_40px_-20px_rgba(124,58,237,0.45)]">
        {/* base metal */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#1c1530_0%,#0e0a17_55%,#08060d_100%)]" />
        {/* violet light from the corner */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_-5%,rgba(139,92,246,0.42),transparent_55%)]" />
        {/* engraved guilloche */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 104% 108%, rgba(255,255,255,0.055) 0 1px, transparent 1px 7px)",
            WebkitMaskImage:
              "radial-gradient(circle at 100% 100%, #000, transparent 70%)",
            maskImage: "radial-gradient(circle at 100% 100%, #000, transparent 70%)",
          }}
        />
        {/* grain */}
        <div
          className="absolute inset-0 opacity-[0.16] mix-blend-overlay"
          style={{ backgroundImage: NOISE }}
        />
        {/* top specular */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.09] to-transparent" />

        {/* holographic foil (only where the light hits) */}
        <div
          className="absolute inset-0 opacity-0 mix-blend-color-dodge transition-opacity duration-300 group-hover:opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(115deg, transparent 22%, rgba(168,85,247,0.55) 36%, rgba(34,211,238,0.5) 48%, rgba(250,204,21,0.35) 58%, transparent 72%)",
            backgroundSize: "230% 100%",
            backgroundPosition: "var(--hx, 50%) 0",
          }}
        />
        {/* glare */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(260px circle at var(--gx, 50%) var(--gy, 0%), rgba(255,255,255,0.16), transparent 55%)",
          }}
        />
      </div>

      {/* edge light */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/[0.09]" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

      {/* ---------- content ---------- */}
      <div
        className="relative z-10 flex h-full flex-col justify-between p-5"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="flex items-start justify-end">
          {/* <Chip /> */}
          <span className="flex items-center gap-1.5 pt-0.5">
            <Seal />
            <span className="font-mono text-[9.5px] font-medium uppercase tracking-[0.24em] text-white/70">
              Verified
            </span>
          </span>
        </div>

        <div className="flex items-center gap-3.5">
          <div className="relative h-[58px] w-[58px] shrink-0">
            <div className="h-full w-full rounded-full bg-gradient-to-br from-white/45 via-white/10 to-violet-400/50 p-[1.5px] shadow-[0_10px_24px_-10px_rgba(0,0,0,0.9)]">
              <div className="h-full w-full overflow-hidden rounded-full bg-[#0b0811] p-[2px]">
                <ProfileImage
                  src={user?.profilePicture}
                  name={user?.fullName}
                  size={56}
                />
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <h2
              className="truncate text-[19px] font-medium capitalize leading-tight tracking-tight text-white"
              style={{
                textShadow:
                  "0 1px 0 rgba(255,255,255,0.1), 0 -1px 0 rgba(0,0,0,0.7)",
              }}
            >
              {user?.fullName || "HYI Talent"}
            </h2>
            {designation && (
              <p className="mt-1 truncate text-[12.5px] capitalize tracking-wide text-white/55">
                {designation}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-[8.5px] uppercase tracking-[0.28em] text-white/35">
              HYI · Talent ID
            </p>
            <p className="mt-0.5 font-mono text-[12px] tracking-[0.2em] text-white/80">
              {serial}
            </p>
          </div>
          <p className="font-mono text-[8.5px] uppercase tracking-[0.28em] text-white/35">
            Global · Remote
          </p>
        </div>
      </div>
    </div>
  );

  const shell =
    "group relative block h-[200px] w-[320px] cursor-pointer select-none rounded-[22px] outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black [perspective:900px]";

  if (hasLink && user?.slug) {
    return (
      <Link
        href={`/resume/${user.slug}`}
        className={shell}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        draggable={false}
      >
        {body}
      </Link>
    );
  }

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label={`View ${user?.fullName || "talent"} profile`}
        className={shell}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        onClick={handleViewProfile}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleViewProfile();
          }
        }}
      >
        {body}
      </div>

      {open && selectedId && (
        <ViewPublicProfile
          open={open}
          selectedCandidateId={selectedId}
          onClose={() => {
            setOpen(false);
            setSelectedId("");
          }}
        />
      )}
    </>
  );
}