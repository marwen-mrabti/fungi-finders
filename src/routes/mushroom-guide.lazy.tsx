import { createLazyFileRoute } from "@tanstack/react-router";
import Faq from "~/components/guide/faq";
import GuideHero from "~/components/guide/guide-hero";
import HabitatGuide from "~/components/guide/habitat-guide";
import MushroomDirectory from "~/components/guide/mushroom-directory";

export const Route = createLazyFileRoute("/mushroom-guide")({
  component: RouteComponent,
  pendingComponent: PendingComponent,
});

function RouteComponent() {
  return (
    <main className="flex w-full flex-col items-center">
      <GuideHero />
      <HabitatGuide />
      <MushroomDirectory />
      <Faq />
    </main>
  );
}

function PendingComponent() {
  return (
    <div className="grid h-dvh w-full place-items-center">
      <div className="bg-background-light animate-pulse rounded-lg p-8">
        <h1 className="text-brand-light text-heading-lg">Loading...</h1>
      </div>
    </div>
  );
}
