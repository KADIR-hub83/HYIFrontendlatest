"use client";

import type { ComponentType } from "react";

import {
  Activity,
  Boxes,
  Cloud,
  CloudCog,
  Container,
  GitBranch,
  Network,
  RefreshCcw,
  Server,
  ShieldCheck,
  Workflow,
  type LucideProps,
} from "lucide-react";

import type { CloudIconName } from "./cloudServices";

interface CloudIconProps extends LucideProps {
  name: CloudIconName;
}

const iconMap = {
  cloud: Cloud,
  "cloud-cog": CloudCog,
  boxes: Boxes,
  "shield-check": ShieldCheck,
  network: Network,
  server: Server,
  "git-branch": GitBranch,
  container: Container,
  workflow: Workflow,
  "refresh-ccw": RefreshCcw,
  activity: Activity,
} satisfies Record<CloudIconName, ComponentType<LucideProps>>;

export default function CloudIcon({
  name,
  ...props
}: CloudIconProps) {
  const IconComponent = iconMap[name];

  return <IconComponent {...props} />;
}