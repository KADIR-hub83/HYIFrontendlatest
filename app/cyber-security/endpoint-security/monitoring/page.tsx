import EndpointServicePage from "@/components/section/cyber-security/endpoint-security/EndpointServicePage";
import { endpointServices } from "@/components/section/cyber-security/endpoint-security/endpointServices";

export default function Page() {
  return (
    <EndpointServicePage
      service={endpointServices["endpoint-monitoring"]}
    />
  );
}