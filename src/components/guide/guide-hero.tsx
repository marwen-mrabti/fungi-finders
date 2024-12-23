import { heroImg } from "~/assets";
import SectionWrapper from "~/components/shared/section-wrapper";
import { cn } from "~/lib/utils";

export default function GuideHero() {
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
          Quick reference{" "}
          <span className="text-brand text-heading-xl block">
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
    </SectionWrapper>
  );
}
