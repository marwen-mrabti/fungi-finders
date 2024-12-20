import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/faq")({
  component: FAQComponent,
});

function FAQComponent() {
  return <div className="h-dvh w-full px-4 py-4">Hello "/faq"!</div>;
}
