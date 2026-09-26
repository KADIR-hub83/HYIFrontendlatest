"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import WorkplaceHero from "./WorkplaceHero";
import WorkplaceOpening from "./WorkplaceOpening";
import WorkplaceShift from "./WorkplaceShift";
import AIWorkplace from "./AIWorkplace";
import KnowledgeWork from "./KnowledgeWork";
import EnterpriseSearch from "./EnterpriseSearch";
import WorkplaceCopilots from "./WorkplaceCopilots";
import CollaborationSection from "./CollaborationSection";
import EmployeeExperience from "./EmployeeExperience";
import WorkplaceAutomation from "./WorkplaceAutomation";
import WorkplaceGovernance from "./WorkplaceGovernance";
import WorkplaceSecurity from "./WorkplaceSecurity";
import WorkplaceOperatingModel from "./WorkplaceOperatingModel";
import WorkplacePrinciples from "./WorkplacePrinciples";
import WorkplaceRoadmap from "./WorkplaceRoadmap";
import WorkplaceOutcomes from "./WorkplaceOutcomes";
import DigitalWorkplaceCTA from "./DigitalWorkplaceCTA";

export default function DigitalWorkplaceExperience() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative bg-[#000000] text-white">
      <motion.div
        style={{
          scaleX: progress,
          transformOrigin: "left",
        }}
        className="fixed left-0 top-0 z-[9999] h-px w-full bg-white"
      />

      <WorkplaceHero />
      <WorkplaceOpening />
      <WorkplaceShift />
      <AIWorkplace />
      <KnowledgeWork />
      <EnterpriseSearch />
      <WorkplaceCopilots />
      <CollaborationSection />
      <EmployeeExperience />
      <WorkplaceAutomation />
      <WorkplaceGovernance />
      <WorkplaceSecurity />
      <WorkplaceOperatingModel />
      <WorkplacePrinciples />
      <WorkplaceRoadmap />
      <WorkplaceOutcomes />
      <DigitalWorkplaceCTA />
    </div>
  );
}