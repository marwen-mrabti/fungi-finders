import { createFileRoute } from "@tanstack/react-router";
import BenefitsOverview from "~/components/home/benefits-overview";
import Community from "~/components/home/community";
import CtaBanner from "~/components/home/cta-banner";
import HomeHero from "~/components/home/home-hero";
import SafetyEducation from "~/components/home/safety-education";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <main className="flex w-full flex-col items-center">
      <HomeHero />
      <BenefitsOverview />
      <CtaBanner />
      <SafetyEducation />
      <Community />
    </main>
  );
}
