import { Hero } from "@/components/site/Hero";
import { ExpertPromiseSection } from "@/components/site/ExpertPromiseSection";
import { ProblemSection } from "@/components/site/ProblemSection";
import { SolutionSection } from "@/components/site/SolutionSection";
import { WipicutSection } from "@/components/site/WipicutSection";
import { DifferentiatorSection } from "@/components/site/DifferentiatorSection";
import { CredibilitySection } from "@/components/site/CredibilitySection";
import { ProcessSteps } from "@/components/site/ProcessSteps";
import { OffersSection } from "@/components/site/OffersSection";
import { ParentSection } from "@/components/site/ParentSection";
import { EthicsSection } from "@/components/site/EthicsSection";
import { FinalCTA } from "@/components/site/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ExpertPromiseSection />
      <ProblemSection />
      <SolutionSection />
      <WipicutSection />
      <DifferentiatorSection />
      <CredibilitySection />
      <ProcessSteps />
      <OffersSection />
      <ParentSection />
      <EthicsSection />
      <FinalCTA />
    </main>
  );
}
