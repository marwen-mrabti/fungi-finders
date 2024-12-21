import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/mushroom-guide")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex w-full flex-col items-center">
      Hello "/mushroom-guide"!
    </main>
  );
}
