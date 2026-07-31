import LandingPage from "@/components/LandingPage";
import { landingBySlug } from "@/data/landingData";

const config = landingBySlug("servicos/laudo-de-recuperabilidade")!;

export default function LaudoRecuperabilidade() {
  return <LandingPage config={config} />;
}
