import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import ComputerVisionHero from "@/components/section/technology-solutions/artificial-intelligence/computer-vision/ComputerVisionHero";
import VisionPipeline from "@/components/section/technology-solutions/artificial-intelligence/computer-vision/VisionPipeline";
import VisionCapabilities from "@/components/section/technology-solutions/artificial-intelligence/computer-vision/VisionCapabilities";
import PerceptionLab from "@/components/section/technology-solutions/artificial-intelligence/computer-vision/PerceptionLab";
import IndustryVision from "@/components/section/technology-solutions/artificial-intelligence/computer-vision/IndustryVision";
import VisionCommandCenter from "@/components/section/technology-solutions/artificial-intelligence/computer-vision/VisionCommandCenter";
import VisionArchitecture from "@/components/section/technology-solutions/artificial-intelligence/computer-vision/VisionArchitecture";
import VisionImpact from "@/components/section/technology-solutions/artificial-intelligence/computer-vision/VisionImpact";
import ComputerVisionCTA from "@/components/section/technology-solutions/artificial-intelligence/computer-vision/ComputerVisionCTA";

export default function ComputerVisionPage() {
  return (
    <main className="relative overflow-hidden bg-[#030303] text-white">
      <Header />

      <ComputerVisionHero />
      <VisionPipeline />
      <VisionCapabilities />
      <PerceptionLab />
      <IndustryVision />
      <VisionCommandCenter />
      <VisionArchitecture />
      <VisionImpact />
      <ComputerVisionCTA />

      <Footer />
    </main>
  );
}