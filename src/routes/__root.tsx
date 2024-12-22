import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Footer from "~/components/shared/footer";
import Header from "~/components/shared/header";
import NotFound from "~/components/shared/not-found";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <div className="bg-background-main text-main relative h-full min-h-dvh w-full max-w-dvw overflow-clip text-base">
      <Header />
      <Outlet /> {/* the main content will render here */}
      <Footer />
      <TanStackRouterDevtools />
    </div>
  );
}
