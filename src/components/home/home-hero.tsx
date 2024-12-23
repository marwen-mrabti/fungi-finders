import { heroImg } from "~/assets";
import SectionWrapper from "~/components/shared/section-wrapper";
import { cn } from "~/lib/utils";

export default function HomeHero() {
  return (
    <SectionWrapper
      id="hero"
      className={cn(
        "grid grid-cols-1 place-items-center",
        `bg-cover bg-center bg-no-repeat`,
      )}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl",
          "grid grid-cols-1 place-items-center gap-4",
          "text-high-contrast text-md text-center",
        )}
      >
        <h1 className="text-heading-lg font-bold">
          Discover the World of{" "}
          <span className="text-brand text-heading-xl block">
            Mushroom Foraging
          </span>
        </h1>
        <div className="flex w-full flex-col items-center justify-center gap-2 px-2 md:max-w-[65ch]">
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
    </SectionWrapper>
  );
}
