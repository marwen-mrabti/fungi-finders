import { getToKnowImg } from "../assets";
import { cn } from "../lib/utils";

export default function SafetyEducation() {
  return (
    <section
      id="safety-education"
      className={cn(
        "w-full px-4 py-10 md:px-8",
        "grid grid-cols-1 content-center items-center gap-4 md:grid-cols-2",
      )}
    >
      <div className="w-full overflow-clip rounded-md">
        <img
          src={getToKnowImg}
          alt="A person foraging for mushrooms in a dense forest, carefully inspecting the ground with gloved hands, surrounded by trees and natural greenery."
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex max-w-[60ch] flex-col items-start justify-around gap-4">
        <h1 className="text-heading-sm text-high-contrast font-bold">
          Get to know your mushrooms
        </h1>
        <p className="">
          Successful and safe mushroom foraging begins with a deep understanding
          of the species you'll encounter in the wild - not just what the edible
          ones look like, but their toxic look-alikes, seasonal patterns, and
          preferred habitats.
        </p>
        <p>
          It can feel like a big task, but we've got a handy reference guide to
          help you out!
        </p>
        <button
          className={cn(
            "bg-background-accent-main text-high-contrast w-fit rounded-sm px-4 py-2",
            "hover:bg-background-accent-main/90 hover:text-main cursor-pointer transition-all duration-200 ease-in-out",
          )}
        >
          Reference Guide
        </button>
      </div>
    </section>
  );
}
