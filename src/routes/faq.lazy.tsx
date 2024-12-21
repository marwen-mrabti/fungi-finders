import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/faq")({
  component: FAQComponent,
});

function FAQComponent() {
  return (
    <main className="flex w-full flex-col items-center">Hello "/faq"!</main>
  );
}
