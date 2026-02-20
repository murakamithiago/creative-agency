import { Hero } from "@/components/sections/hero";
import { AgencyIntro } from "@/components/sections/agency-intro";
import { Services } from "@/components/sections/services";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <AgencyIntro />
      <Services />
      <PortfolioPreview />
      <CtaBanner />
    </>
  );
}
