import { whereToLookImg } from "~/assets";
import SectionWrapper from "~/components/shared/section-wrapper";
import { LazyImage } from "../shared/lazy-image";

export default function HabitatGuide() {
  return (
    <SectionWrapper
      id="habitat-guide"
      className="bg-background-dark md:bg-background-accent-dark"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 place-items-center gap-8 md:grid-cols-2">
        <LazyImage
          src={whereToLookImg}
          alt="A macro photograph of a single slender white mushroom with a delicate grey cap covered in tiny water droplets or dew. The mushroom is surrounded by small green ferns and forest vegetation, with a soft blurred background."
          priority={false}
          className="aspect-10/9 rounded-lg"
        />

        <div className="text-main text-md flex w-full flex-col items-start justify-center gap-4 font-semibold">
          <h2 className="text-heading-base text-high-contrast font-bold">
            Where to Look
          </h2>
          <p>Different species grow in different types of environments.</p>
          <p>
            Forests are always a good starting place, though, with a wide range
            of species that grow in them.
          </p>
          <p>
            If you're after something specific, you can use our reference guide
            below to help you out.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
