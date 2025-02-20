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
  const nodeEnv = process.env.NODE_ENV;
  return (
    <div className="bg-background-main text-main relative grid h-full min-h-dvh w-full max-w-dvw content-between overflow-clip text-base">
      <Header />
      <Outlet /> {/* the main content will render here */}
      <Footer />
      {nodeEnv === "development" ? <TanStackRouterDevtools /> : null}
    </div>
  );
}
