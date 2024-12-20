import { createFileRoute } from "@tanstack/react-router";
import BenefitsOverview from "../components/benefits-overview";
import Community from "../components/community";
import CtaBanner from "../components/cta-banner";
import Hero from "../components/hero";
import SafetyEducation from "../components/safety-education";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <main className="flex w-full flex-col items-center">
      <Hero />
      <BenefitsOverview />
      <CtaBanner />
      <SafetyEducation />
      <Community />
    </main>
  );
}
