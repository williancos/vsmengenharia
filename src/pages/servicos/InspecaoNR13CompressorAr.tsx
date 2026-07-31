import LandingPage from "@/components/LandingPage";
import { landingBySlug } from "@/data/landingData";

const config = landingBySlug("servicos/inspecao-nr13-compressor-de-ar")!;

export default function InspecaoNR13CompressorAr() {
  return <LandingPage config={config} />;
}
