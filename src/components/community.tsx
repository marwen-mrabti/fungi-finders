import { natureImg } from "../assets";
import { cn } from "../lib/utils";

export default function Community() {
  return (
    <section
      id="community"
      className={cn(
        "bg-background-light w-full px-4 py-10 md:px-8",
        "grid grid-cols-1 content-center items-center gap-4 md:grid-cols-2",
      )}
    >
      <div className="flex max-w-[60ch] flex-col items-start justify-around gap-4">
        <h1 className="text-heading-sm text-high-contrast font-bold">
          Connect with Nature
        </h1>
        <p className="">
          Experience the beauty of the great outdoors while foraging for
          mushrooms with fellow enthusiasts.
        </p>
        <button
          className={cn(
            "bg-background-accent-main text-high-contrast w-fit rounded-sm px-4 py-2",
            "hover:bg-background-accent-main/90 hover:text-main cursor-pointer transition-all duration-200 ease-in-out",
          )}
        >
          Learn more
        </button>
      </div>
      <div className="w-full overflow-clip rounded-md">
        <img
          src={natureImg}
          alt="Two small yellow mushrooms growing from a mossy forest floor, illuminated by dappled sunlight filtering through the trees. The mushrooms have pale stems and golden umbrella-like caps, surrounded by rich green moss and small ferns in a dark, atmospheric woodland setting."
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
