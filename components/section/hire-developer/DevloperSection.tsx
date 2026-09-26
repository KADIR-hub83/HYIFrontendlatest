import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import DeveloperHero from "@/components/section/hire-developer/DeveloperHero";
import TechnologyStrip from "@/components/section/hire-developer/TechnologyStrip";
import DeveloperDirectory from "@/components/section/hire-developer/DeveloperDirectory";
import TechnologyUniverse from "@/components/section/hire-developer/TechnologyUniverse";
import HiringProcess from "@/components/section/hire-developer/HiringProcess";
import DeveloperFAQ from "@/components/section/hire-developer/DeveloperFAQ";
import HeroUserSlider from "../general/heroUserSlider";

export default function HireDeveloperSection() {
  return (
    <main className=" overflow-hidden bg-[#050506] text-white">
      <Header />

      <DeveloperHero />

       {/* <HeroUserSlider /> */}
       
          <DeveloperDirectory />

      <TechnologyStrip />

   

      <TechnologyUniverse />

      <HiringProcess />

      <DeveloperFAQ />

      <Footer />
    </main>
  );
}