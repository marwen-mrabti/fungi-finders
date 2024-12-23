import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, CloudOff, Home } from "lucide-react";
import { cn } from "~/lib/utils";
export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.history.back();
    } else {
      router.navigate({ to: "/", replace: true });
    }
  };

  return (
    <div className="bg-background-extra-light flex h-full flex-col items-center justify-center gap-4 py-20">
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="bg-background-accent-dark h-64 w-64 rounded-full blur-3xl filter" />
          </div>
          <CloudOff
            className="text-brand relative z-10 mx-auto h-24 w-24"
            aria-hidden="true"
          />
        </div>
        <h1 className="text-brand-light text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          404 - Page Not Found
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
          Oops! It seems like you&apos;ve ventured into uncharted territory. The
          page you&apos;re looking for has gone on an adventure of its own.
        </p>
      </div>
      <div className="mt-8 flex w-fit flex-col items-center justify-center gap-4">
        <button
          onClick={handleGoBack}
          className={cn(
            "bg-background-accent-main text-high-contrast flex w-full items-center justify-center gap-1.5 rounded-sm px-4 py-2 font-bold",
            "hover:bg-background-accent-main/90 hover:text-main focus-visible:bg-background-accent-main/90focus-visible:text-main cursor-pointer transition-all duration-200 ease-in-out",
          )}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Go Back
        </button>
        <div>
          <button
            className={cn(
              "bg-background-accent-main text-high-contrast flex w-full items-center justify-center gap-1.5 rounded-sm px-4 py-2 font-bold",
              "hover:bg-background-accent-main/90 hover:text-main focus-visible:bg-background-accent-main/90focus-visible:text-main cursor-pointer transition-all duration-200 ease-in-out",
            )}
          >
            <Link
              href="/"
              preload="intent"
              className="inline-flex items-center gap-2"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              Return to Home
            </Link>
          </button>
        </div>
      </div>
      <div className="text-muted-foreground mt-12">
        <p>If you believe this is an error, please contact our support team.</p>
      </div>
    </div>
  );
}
