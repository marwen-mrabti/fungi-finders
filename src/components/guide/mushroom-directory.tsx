import { useEffect, useState } from "react";
import SectionWrapper from "~/components/shared/section-wrapper";
import { MushroomsData, type T_Mushroom } from "~/lib/mushroom-data";
import { cn } from "~/lib/utils";
import CustomSelect from "../shared/custom-select";
import MushroomCard from "./mushroom-card";

type FilterType = "season" | "edibility";
type SeasonFilter = T_Mushroom["season"] | null;
type EdibilityFilter = T_Mushroom["edibility"] | null;
type Filters = {
  season: SeasonFilter;
  edibility: EdibilityFilter;
};

const FILTER_OPTIONS = {
  season: ["summer", "fall", "spring"] as const,
  edibility: ["edible", "toxic"] as const,
};

export default function MushroomDirectory() {
  const [filters, setFilters] = useState<Filters>(() => ({
    season: (localStorage.getItem("season") as SeasonFilter) || null,
    edibility: (localStorage.getItem("edibility") as EdibilityFilter) || null,
  }));

  const [filteredMushroomData, setFilteredMushroomData] =
    useState<T_Mushroom[]>(MushroomsData);

  useEffect(() => {
    // Update localStorage
    Object.entries(filters).forEach(([key, value]) => {
      localStorage.setItem(key, value ?? "");
    });

    // Apply filters
    const filteredData = MushroomsData.filter((mushroom) => {
      const seasonMatch = !filters.season || mushroom.season === filters.season;
      const edibilityMatch =
        !filters.edibility || mushroom.edibility === filters.edibility;
      return seasonMatch && edibilityMatch;
    });

    setFilteredMushroomData(filteredData);
  }, [filters]);

  const handleFilterChange =
    (filterType: FilterType) =>
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value || null;
      setFilters((prev) => ({
        ...prev,
        [filterType]: value,
      }));
    };

  return (
    <SectionWrapper id="mushroom-directory" className="bg-background-light">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6">
        <div className="text-main flex w-full flex-col gap-4">
          <h2 className="text-high-contrast text-heading-base font-bold">
            Get to know your mushrooms
          </h2>
          <div className="flex w-full flex-wrap items-center gap-4">
            <CustomSelect
              label="Season"
              value={filters.season}
              options={FILTER_OPTIONS.season}
              handler={handleFilterChange("season")}
            />
            <CustomSelect
              label="Edibility"
              value={filters.edibility}
              options={FILTER_OPTIONS.edibility}
              handler={handleFilterChange("edibility")}
            />
          </div>
        </div>

        <ul
          className={cn(
            "w-full",
            "grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4",
          )}
        >
          {filteredMushroomData.length === 0 ? (
            <div className="text-main bg-background-extra-light rounded-md p-4 text-center text-lg">
              <p>⚠️ No mushrooms found</p>
            </div>
          ) : (
            filteredMushroomData.map((mushroom) => (
              <MushroomCard
                key={mushroom.name}
                mushroom={mushroom}
                className="row-span-4 grid grid-rows-subgrid gap-2"
              />
            ))
          )}
        </ul>
      </div>
    </SectionWrapper>
  );
}
