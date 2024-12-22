import {
  botanicalExpertiseImg,
  culinaryDelightImg,
  outdoorExplorationImg,
} from "~/assets";
import { cn } from "~/lib/utils";
import BenefitCard from "./benefit-card";

export type T_Benefit = {
  title: string;
  description: string;
  imgUrl: string;
  alt?: string;
};
const BENEFITS: T_Benefit[] = [
  {
    title: "Outdoor Exploration",
    description:
      "Mushroom foraging takes you off the beaten path and into the heart of nature. Learn to read the landscape, identifying prime mushroom habitats from lush forest floors to sun-dappled meadows. Every expedition is a new adventure, with the potential for exciting discoveries around every tree and under every log.",
    imgUrl: outdoorExplorationImg,
    alt: "A cluster of small, grey-brown mushrooms growing in a tiered formation on a mossy tree trunk. The mushrooms have delicate, umbrella-like caps arranged in a cascading pattern.",
  },
  {
    title: "Botanical Expertise",
    description:
      "Dive into the intricate world of fungal biology. Discover the unique structures of mushrooms, from caps to gills to spores. Learn to use field guides and identification keys to distinguish between species. With practice, you'll start to see the forest in a whole new light, recognizing the vital role fungi play in ecosystem health.",
    imgUrl: botanicalExpertiseImg,
    alt: "A diverse collection of wild mushrooms, showcasing various shapes, sizes, and colors, arranged on a wooden surface with some moss.",
  },
  {
    title: "Culinary Delight",
    description:
      "Transform your foraged finds into delectable dishes. Many edible mushrooms offer unique flavors and textures that can elevate your cooking. From the earthy porcini to the delicate chanterelle, each variety brings its own character to the table. Explore recipes, preservation techniques, and the joy of cooking with nature's bounty.",
    imgUrl: culinaryDelightImg,
    alt: "A culinary dish featuring fresh mushroom slices, a poached egg with a runny yolk, greens, and toast, plated beautifully with steam rising.",
  },
];

export default function BenefitsOverview() {
  return (
    <section
      id="benefits-overview"
      className="bg-background-main relative isolate w-full px-4 py-10 select-none md:px-4 md:py-20"
    >
      <div className={cn("mx-auto w-full max-w-7xl", "grid grid-cols-1 gap-2")}>
        <h1 className="text-heading-base text-hight-contrast font-bold">
          The joys of mushroom foraging
        </h1>
        <p className="text-main max-w-[70ch] text-base">
          Foraging for mushrooms can be a rewarding experience for many reasons.
          People may venture off into the woods to forage for mushrooms because
          it allows them to connect with nature, enjoy the thrill of the hunt,
          and savor the satisfaction of finding a hidden culinary treasure.
        </p>
        {/* //!how to use grid and subgrid, with auto-fit for responsive layout */}
        <ul
          className={cn(
            "mt-4 w-full",
            "grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] place-items-center gap-4",
          )}
        >
          {BENEFITS.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              benefit={benefit}
              className="row-span-3 grid grid-rows-subgrid gap-4 p-4"
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
