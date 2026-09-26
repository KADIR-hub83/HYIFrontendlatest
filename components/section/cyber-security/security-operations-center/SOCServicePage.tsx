"use client";

import type { SOCService } from "./socServices";

import SOCHero from "./SOCHero";
import SOCCapabilities from "./SOCCapabilities";
import SOCIntelligence from "./SOCIntelligence";
import SOCArchitecture from "./SOCArchitecture";
import SOCProcess from "./SOCProcess";
import SOCUseCases from "./SOCUseCases";
import SOCPrinciples from "./SOCPrinciples";
import SOCCTA from "./SOCCTA";

export default function SOCServicePage({
  service,
}: {
  service: SOCService;
}) {
  return (
    <>
      <SOCHero service={service} />
      <SOCCapabilities service={service} />
      <SOCIntelligence service={service} />
      <SOCArchitecture service={service} />
      <SOCProcess service={service} />
      <SOCUseCases service={service} />
      <SOCPrinciples service={service} />
      <SOCCTA service={service} />
    </>
  );
}