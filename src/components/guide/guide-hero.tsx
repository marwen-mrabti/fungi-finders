import { heroImg } from "~/assets";
import { cn } from "~/lib/utils";

export default function GuideHero() {
  return (
    <section
      id="hero"
      className={cn(
        "relative isolate h-full min-h-dvh w-full px-2 py-10 select-none md:px-4 md:py-20",
        "grid grid-cols-1 place-items-center",
        `bg-cover bg-center bg-no-repeat`,
      )}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl",
          "grid grid-cols-1 place-items-center gap-4",
        )}
      >
        <h1 className="flex flex-col items-center justify-center text-center">
          <span className="text-heading-base text-high-contrast font-bold">
            Quick reference
          </span>
          <span className="text-brand text-heading-lg font-bold">
            Mushroom Guide
          </span>
        </h1>
        <div className="flex w-full flex-col items-center justify-center gap-2 px-2 text-center md:max-w-[65ch]">
          <p>
            Discover a wide array of mushrooms from around the world, each with
            its own unique flavor profile and culinary uses.
          </p>
          <p>
            Whether you're looking for earthy porcinis, delicate chanterelles,
            or meaty shiitakes, our selection has something for every palate.
          </p>
          <p>
            Explore the diverse shapes, sizes, and colors of these fungi to
            elevate your dishes to new heights.
          </p>
        </div>
      </div>
    </section>
  );
}
