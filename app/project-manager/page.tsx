import ProjectManagerHero from "@/components/section/project-manager/ProjectManagerHero";
import ProjectMarquee from "@/components/section/project-manager/ProjectMarquee";
import ProjectCapabilities from "@/components/section/project-manager/ProjectCapabilities";
import ProjectCommandCenter from "@/components/section/project-manager/ProjectCommandCenter";
import DeliveryWorkflow from "@/components/section/project-manager/DeliveryWorkflow";
import ProjectManagerExpertise from "@/components/section/project-manager/ProjectManagerExpertise";
import RiskControl from "@/components/section/project-manager/RiskControl";
import ProjectReporting from "@/components/section/project-manager/ProjectReporting";
import WhyProjectManagers from "@/components/section/project-manager/WhyProjectManagers";
import ProjectManagerCTA from "@/components/section/project-manager/ProjectManagerCTA";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

export default function ProjectManagerPage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white">
        <Header/>
      <ProjectManagerHero />
      <ProjectMarquee />
      <ProjectCapabilities />
      <ProjectCommandCenter />
      <DeliveryWorkflow />
      <ProjectManagerExpertise />
      <RiskControl />
      <ProjectReporting />
      {/* <WhyProjectManagers /> */}
      <ProjectManagerCTA />
      <Footer/>
    </main>
  );
}