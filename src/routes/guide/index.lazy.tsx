import { createLazyFileRoute } from "@tanstack/react-router";
import Faq from "~/components/guide/faq";
import GuideHero from "~/components/guide/guide-hero";
import HabitatGuide from "~/components/guide/habitat-guide";
import MushroomDirectory from "~/components/guide/mushroom-directory";

export const Route = createLazyFileRoute("/guide/")({
  component: RouteComponent,
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
