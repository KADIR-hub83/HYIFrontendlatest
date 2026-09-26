import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import NLPHero from "@/components/section/technology-solutions/artificial-intelligence/nlp/NLPHero";
import LanguagePipeline from "@/components/section/technology-solutions/artificial-intelligence/nlp/LanguagePipeline";
import NLPCapabilities from "@/components/section/technology-solutions/artificial-intelligence/nlp/NLPCapabilities";
import SemanticGraph from "@/components/section/technology-solutions/artificial-intelligence/nlp/SemanticGraph";
import NLPUseCases from "@/components/section/technology-solutions/artificial-intelligence/nlp/NLPUseCases";
import LanguageCommandCenter from "@/components/section/technology-solutions/artificial-intelligence/nlp/LanguageCommandCenter";
import NLPImpact from "@/components/section/technology-solutions/artificial-intelligence/nlp/NLPImpact";
import NLPCTA from "@/components/section/technology-solutions/artificial-intelligence/nlp/NLPCTA";

export default function NLPPage() {
  return (
    <main className="relative overflow-hidden bg-[#030303] text-white">
      <Header />

      <NLPHero />
      <LanguagePipeline />
      <NLPCapabilities />
      <SemanticGraph />
      <NLPUseCases />
      <LanguageCommandCenter />
      <NLPImpact />
      <NLPCTA />

      <Footer />
    </main>
  );
}