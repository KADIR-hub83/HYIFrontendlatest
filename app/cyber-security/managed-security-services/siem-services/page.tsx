import ManagedSecurityServicePage from "@/components/section/cyber-security/managed-security-services/ManagedSecurityServicePage";
import { managedSecurityServices } from "@/components/section/cyber-security/managed-security-services/managedSecurityServices";

export default function Page() {
  return (
    <ManagedSecurityServicePage
      service={managedSecurityServices["managed-siem-services"]}
    />
  );
}