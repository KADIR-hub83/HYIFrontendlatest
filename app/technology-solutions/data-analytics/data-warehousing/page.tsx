import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import DataWarehousingHero from "@/components/section/technology-solutions/data-analytics/data-warehousing/DataWarehousingHero";
import WarehouseFlow from "@/components/section/technology-solutions/data-analytics/data-warehousing/WarehouseFlow";
import WarehouseArchitecture from "@/components/section/technology-solutions/data-analytics/data-warehousing/WarehouseArchitecture";
import WarehouseCapabilities from "@/components/section/technology-solutions/data-analytics/data-warehousing/WarehouseCapabilities";
import QueryEngine from "@/components/section/technology-solutions/data-analytics/data-warehousing/QueryEngine";
import WarehouseCommandCenter from "@/components/section/technology-solutions/data-analytics/data-warehousing/WarehouseCommandCenter";
import WarehouseUseCases from "@/components/section/technology-solutions/data-analytics/data-warehousing/WarehouseUseCases";
import WarehouseImpact from "@/components/section/technology-solutions/data-analytics/data-warehousing/WarehouseImpact";
import DataWarehousingCTA from "@/components/section/technology-solutions/data-analytics/data-warehousing/DataWarehousingCTA";

export default function DataWarehousingPage() {
  return (
    <main className="relative overflow-hidden bg-[#030303] text-white">
      <Header />

      <DataWarehousingHero />
      <WarehouseFlow />
      <WarehouseArchitecture />
      <WarehouseCapabilities />
      <QueryEngine />
      <WarehouseCommandCenter />
      <WarehouseUseCases />
      <WarehouseImpact />
      <DataWarehousingCTA />

      <Footer />
    </main>
  );
}