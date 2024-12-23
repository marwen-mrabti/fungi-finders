import { Link } from "@tanstack/react-router";
import { getToKnowImg } from "~/assets";
import SectionWrapper from "~/components/shared/section-wrapper";
import { cn } from "~/lib/utils";

export default function SafetyEducation() {
  return (
    <SectionWrapper
      id="safety-education"
      className={cn("grid grid-cols-1 place-items-center")}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl",
          "grid grid-cols-1 place-items-center gap-4 md:grid-cols-2",
        )}
      >
        <div className="w-full overflow-clip rounded-md">
          <img
            src={getToKnowImg}
            alt="A person foraging for mushrooms in a dense forest, carefully inspecting the ground with gloved hands, surrounded by trees and natural greenery."
            loading="lazy"
            className="aspect-10/9 w-full object-cover"
          />
        </div>
        <div className="flex max-w-[60ch] flex-col items-start justify-around gap-4">
          <h2 className="text-heading-sm text-high-contrast font-bold">
            Get to know your mushrooms
          </h2>
          <p className="text-md font-semibold">
            Successful and safe mushroom foraging begins with a deep
            understanding of the species you'll encounter in the wild - not just
            what the edible ones look like, but their toxic look-alikes,
            seasonal patterns, and preferred habitats.
          </p>
          <p className="text-md font-semibold">
            It can feel like a big task, but we've got a{" "}
            <em className="font-bold">handy reference guide</em> to help you
            out!
          </p>
          <Link
            to="/mushroom-guide"
            className={cn(
              "bg-background-accent-main text-high-contrast w-fit rounded-sm px-4 py-2 font-bold",
              "hover:bg-background-accent-main/90 hover:text-main focus-visible:bg-background-accent-main/90focus-visible:text-main cursor-pointer transition-all duration-200 ease-in-out",
            )}
          >
            Reference Guide
            <span className="sr-only">
              to help you identify the different types of mushrooms and their
              toxic look-alikes.
            </span>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
