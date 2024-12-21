import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Footer from "~/components/footer";
import Header from "~/components/header";

export const Route = createRootRoute({
  component: () => (
    <div className="bg-background-main text-main relative h-full min-h-dvh w-full max-w-dvw overflow-clip text-base">
      <Header />
      <Outlet /> {/* the main content will render here */}
      <Footer />
      <TanStackRouterDevtools />
    </div>
  ),
});
