import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

import UserExperienceTestingClient from "@/components/section/technology-solutions/ab-testing/user-experience/UserExperienceTestingClient";

export default function UserExperienceTestingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030303] text-white">
      <Header />

      <UserExperienceTestingClient />

      <Footer />
    </main>
  );
}