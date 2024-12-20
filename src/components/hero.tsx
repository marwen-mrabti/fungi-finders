import { heroImg } from "~/assets";
import { cn } from "~/lib/utils";

export default function Hero() {
  return (
    <section
      id="hero"
      className={cn(
        "relative isolate h-dvh w-full select-none",
        `bg-cover bg-center bg-no-repeat`,
      )}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl pt-12 lg:pt-20",
          "grid grid-cols-1 place-items-center gap-4",
        )}
      >
        <h1 className="flex flex-col items-center justify-center text-center">
          <span className="text-heading-base text-high-contrast font-bold">
            Discover the World of
          </span>
          <span className="text-brand text-heading-lg font-bold">
            Mushroom Foraging
          </span>
        </h1>
        <div className="flex w-full max-w-[60ch] flex-col items-center justify-center gap-2 px-2 text-center">
          <p>
            Mushroom foraging is the art and science of identifying and
            collecting wild mushrooms.
          </p>

          <p>
            It's a practice that combines outdoor exploration botanical
            knowledge, and culinary adventure. Foragers venture into forests,
            fields, and even urban green spaces to discover these hidden
            treasures.
          </p>

          <p>
            But beware - this hobby requires careful study and respect for
            nature, as some mushrooms can be dangerous if misidentified.
          </p>
        </div>
      </div>
    </section>
  );
}
