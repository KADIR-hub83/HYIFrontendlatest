"use client";
import type { CloudSecurityService } from "./cloudSecurityData";
import CloudSecurityHero from "./CloudSecurityHero";
import CloudNarrative from "./CloudNarrative";
import CloudCapabilities from "./CloudCapabilities";
import CloudThreatSurface from "./CloudThreatSurface";
import CloudArchitecture from "./CloudArchitecture";
import CloudTelemetry from "./CloudTelemetry";
import CloudWorkflow from "./CloudWorkflow";
import CloudOperations from "./CloudOperations";
import CloudPrinciples from "./CloudPrinciples";
import CloudOutcomes from "./CloudOutcomes";
import CloudCTA from "./CloudCTA";

export default function CloudSecurityClient({service}:{service:CloudSecurityService}){
 return <div className="bg-black text-white"><CloudSecurityHero service={service}/><CloudNarrative service={service}/><CloudCapabilities service={service}/><CloudThreatSurface service={service}/><CloudArchitecture service={service}/><CloudTelemetry service={service}/><CloudWorkflow service={service}/><CloudOperations service={service}/><CloudPrinciples service={service}/><CloudOutcomes service={service}/><CloudCTA service={service}/></div>
}
