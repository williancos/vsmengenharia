import LandingPage from "@/components/LandingPage";
import { landingBySlug } from "@/data/landingData";

const config = landingBySlug("servicos/inspecao-nr13-sao-paulo")!;

export default function InspecaoNR13SaoPaulo() {
  return <LandingPage config={config} />;
}
