import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/mushroom-guide")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="h-dvh w-full px-4 py-4">Hello "/mushroom-guide"!</div>;
}
