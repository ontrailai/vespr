import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { OpportunitySection } from "@/components/opportunity-section"
import { WhyAiFailsSection } from "@/components/why-ai-fails-section"
import { TeamSection } from "@/components/team-section"
import { SolutionSection } from "@/components/solution-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { ProofSection } from "@/components/proof-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function VesprPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <OpportunitySection />
        <WhyAiFailsSection />
        <TeamSection />
        <SolutionSection />
        <CapabilitiesSection />
        <ProofSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  )
}
