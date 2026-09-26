import type { ReactNode } from "react";

import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

interface CloudInfrastructureLayoutProps {
  children: ReactNode;
}

export default function CloudInfrastructureLayout({
  children,
}: CloudInfrastructureLayoutProps) {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
}