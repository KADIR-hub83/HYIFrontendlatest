"use client";
import {
  Search, FlaskConical, Rocket, Bot, Building2, BadgeCheck, GraduationCap,
  ScrollText, TriangleAlert, Gavel, FilePenLine, FolderTree, Lock, UserCheck, Radar,
  Scale, ScanEye, Eye, ShieldCheck, MessageSquareWarning, Fingerprint, Crosshair, Cpu,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/components/data/aiContent"; // apna path

type Anim = "sweep" | "wiggle" | "fly" | "bounce" | "pop" | "tilt" | "shake" | "spin" | "pulse";

const ICONS: Record<IconKey, [LucideIcon, Anim]> = {
  search: [Search, "sweep"],
  flask: [FlaskConical, "wiggle"],
  rocket: [Rocket, "fly"],
  bot: [Bot, "bounce"],
  building: [Building2, "pop"],
  verified: [BadgeCheck, "pop"],
  graduation: [GraduationCap, "tilt"],
  policy: [ScrollText, "tilt"],
  risk: [TriangleAlert, "shake"],
  compliance: [Gavel, "tilt"],
  pen: [FilePenLine, "wiggle"],
  models: [FolderTree, "pop"],
  lock: [Lock, "shake"],
  owner: [UserCheck, "pop"],
  monitor: [Radar, "spin"],
  fairness: [Scale, "tilt"],
  transparency: [ScanEye, "pulse"],
  oversight: [Eye, "pulse"],
  safety: [ShieldCheck, "pop"],
  genai: [MessageSquareWarning, "bounce"],
  privacy: [Fingerprint, "pulse"],
  redteam: [Crosshair, "spin"],
  agents: [Cpu, "pulse"],
};

export default function OfferIcon({ name, size = 26 }: { name: IconKey; size?: number }) {
  const [Icon, anim] = ICONS[name] ?? ICONS.search;
  return (
    <span className={`hyi-ico hyi-ico--${anim}`} aria-hidden>
      <Icon size={size} strokeWidth={1.75} />
    </span>
  );
}