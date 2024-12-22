import { createLazyFileRoute } from "@tanstack/react-router";
import GuideHero from "~/components/guide/guide-hero";

export const Route = createLazyFileRoute("/mushroom-guide")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex w-full flex-col items-center">
      <GuideHero />
    </main>
  );
}
