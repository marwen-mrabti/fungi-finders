import {
  bestSeasonsImg,
  identifyMushroomsImg,
  startForagingImg,
  whereToFindImg,
} from "~/assets";
import SectionWrapper from "~/components/shared/section-wrapper";
import { cn } from "~/lib/utils";

export default function Faq() {
  return (
    <SectionWrapper id="faq" className="bg-background-dark scroll-mt-15">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6">
        <h2 className="text-heading-base text-high-contrast font-bold">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div
            className={cn(
              "bg-background-light outline-background-extra-light w-full overflow-clip rounded-lg p-4 shadow-lg outline-1",
              "grid grid-cols-1 gap-4",
            )}
          >
            <img
              src={startForagingImg}
              alt="A woven wicker basket containing a variety of freshly foraged wild mushrooms of different sizes, shapes, and colors including white, brown, orange, and purple specimens. The basket sits on a bed of fallen autumn leaves."
              className="h-full w-full rounded-md object-cover"
            />
            <div className="flex w-full flex-col gap-2">
              <h3 className="text-high-contrast text-heading-sm font-bold">
                What do I need to start mushroom foraging?
              </h3>
              <p>
                You'll need a local field guide, a sharp knife or scissors, a
                basket or mesh bag for collecting, and paper bags for separating
                specimens. Bring a small brush for cleaning, wear sturdy boots,
                and carry a GPS device or compass to track your location. A
                camera is also helpful to document your finds.
              </p>
            </div>
          </div>

          <div
            className={cn(
              "bg-background-light outline-background-extra-light w-full overflow-clip rounded-lg p-4 shadow-lg outline-1",
              "grid grid-cols-1 gap-4",
            )}
          >
            <img
              src={identifyMushroomsImg}
              alt="A field guide page showing poisonous Russula emetica mushrooms, with photos and descriptions of their distinctive red caps and white stalks, along with some paper scraps on a dark surface."
              className="h-full w-full rounded-md object-cover lg:order-2"
            />
            <div className="flex w-full flex-col gap-2">
              <h3 className="text-high-contrast text-heading-sm font-bold">
                How can I identify edible mushrooms?
              </h3>
              <p className="">
                Learn from experienced foragers and reliable guidebooks - never
                rely on apps alone. Study each mushroom's specific features like
                cap shape, gill structure, stem characteristics, and spore
                prints. Start with easily identifiable species that have no
                poisonous lookalikes, and never eat anything unless you're
                completely certain of its identification.
              </p>
            </div>
          </div>

          <div
            className={cn(
              "bg-background-light outline-background-extra-light w-full overflow-clip rounded-lg p-4 shadow-lg outline-1",
              "grid grid-cols-1 gap-4",
              "lg:order-4 lg:col-span-2 lg:grid-cols-2",
            )}
          >
            <img
              src={whereToFindImg}
              alt="A close-up shot of a vibrant red mushroom with a smooth cap, partially covered by dead leaves on the forest floor. The mushroom has a pale greenish stem and is emerging from dark soil and leaf litter."
              className="h-full w-full rounded-md object-cover"
            />
            <div className="flex w-full flex-col gap-2">
              <h3 className="text-high-contrast text-heading-sm font-bold">
                Where can I find foraging spots?
              </h3>
              <p>
                Look in deciduous forests, especially near oak and maple trees,
                and in damp, shaded areas. Fallen logs and dead trees are often
                productive spots. Only forage on public lands where it's
                allowed, and always check local regulations. Remember to get
                permission for private property and keep your best locations
                private to prevent over-harvesting.
              </p>
            </div>
          </div>

          <div
            className={cn(
              "bg-background-light outline-background-extra-light w-full overflow-clip rounded-lg p-4 shadow-lg outline-1",
              "grid grid-cols-1 gap-4",
              "lg:row-span-2 lg:grid-rows-[1fr_auto]",
            )}
          >
            <img
              src={bestSeasonsImg}
              alt="A classic fly agaric mushroom (Amanita muscaria) with a bright red cap dotted with white warts, growing among fallen autumn leaves. The photo captures the mushroom's iconic appearance against a warm, blurred background of brown foliage."
              className="h-full w-full rounded-md object-cover"
            />
            <div className="flex w-full flex-col gap-2">
              <h3 className="text-high-contrast text-heading-sm font-bold">
                What are the best seasons for mushroom foraging?
              </h3>
              <p>
                Spring is ideal for morels, late summer brings chanterelles and
                boletes, and fall is peak season for most mushrooms including
                oysters and hen of the woods. Some species can even be found in
                winter, especially in milder climates. Each season offers
                different varieties, so year-round foraging is possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
