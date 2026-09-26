import DesignerHero from "@/components/section/hire-designer/DesignerHero";
import DesignMarquee from "@/components/section/hire-designer/DesignMarquee";
import DesignerServices from "@/components/section/hire-designer/DesignerServices";
import SelectedWork from "@/components/section/hire-designer/SelectedWork";
import DesignerExpertise from "@/components/section/hire-designer/DesignerExpertise";
import DesignProcess from "@/components/section/hire-designer/DesignProcess";
import DesignSystemLab from "@/components/section/hire-designer/DesignSystemLab";
import EngineeringHandoff from "@/components/section/hire-designer/EngineeringHandoff";
import WhyHireDesigners from "@/components/section/hire-designer/WhyHireDesigners";
import DesignerCTA from "@/components/section/hire-designer/DesignerCTA";
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

export default function HireDesignerPage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-white">
        <Header/>
      <DesignerHero />
      <DesignMarquee />
      <DesignerServices />
      <SelectedWork />
      <DesignerExpertise />
      <DesignProcess />
      <DesignSystemLab />
      <EngineeringHandoff />
      <WhyHireDesigners />
      <DesignerCTA />
      <Footer/>
    </main>
  );
}