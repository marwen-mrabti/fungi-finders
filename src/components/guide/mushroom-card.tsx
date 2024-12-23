import { cn } from "~/lib/utils";
import { T_Mushroom } from "../../lib/mushroom-data";
type T_MushroomCardProps = {
  mushroom: T_Mushroom;
  className?: string;
};

export default function MushroomCard({
  mushroom,
  className,
}: T_MushroomCardProps) {
  return (
    <li
      className={cn(
        "outline-background-extra-light bg-background-light text-main w-full rounded-md px-2 py-2 shadow-md outline-1",
        className,
      )}
    >
      <h3 className="text-high-contrast text-md font-bold">{mushroom.name}</h3>
      <div className="text-high-contrast flex items-center gap-4 text-sm">
        <span
          className={cn("rounded-sm px-2 py-0.5", {
            "bg-background-summer": mushroom.season === "summer",
            "bg-background-fall": mushroom.season === "fall",
            "bg-background-spring": mushroom.season === "spring",
          })}
        >
          {mushroom.season}
        </span>
        <span
          className={cn("rounded-sm px-2 py-0.5", {
            "bg-background-accent-main": mushroom.edibility === "edible",
            "bg-background-danger": mushroom.edibility === "toxic",
          })}
        >
          {mushroom.edibility}
        </span>
      </div>
      <p>{mushroom.description}</p>
      <p className="bg-background-extra-light rounded-sm p-2 text-sm">
        <span className="text-high-contrast">important note : </span>
        {mushroom.notes}
      </p>
    </li>
  );
}
