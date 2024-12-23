export type T_Mushroom = {
  name: string;
  edibility: "edible" | "toxic";
  season: "spring" | "summer" | "fall";
  description: string;
  notes: string;
};

export const MushroomsData: T_Mushroom[] = [
  {
    name: "Chanterelle",
    edibility: "edible",
    season: "summer",
    description: "Golden-yellow, funnel-shaped mushroom with false gills",
    notes: "Has toxic look-alikes - learn proper identification",
  },
  {
    name: "Morel",
    edibility: "toxic",
    season: "spring",
    description: "Distinctive honeycomb-like cap structure",
    notes: "Must be cooked before eating",
  },
  {
    name: "Chicken of the Woods",
    edibility: "edible",
    season: "summer",
    description: "Bright orange bracket fungus with yellow edges",
    notes: "Avoid if growing on certain tree species",
  },
  {
    name: "Death Cap",
    edibility: "toxic",
    season: "summer",
    description: "Pale green to white cap with white gills",
    notes: "Extremely toxic - study for safety awareness",
  },
  {
    name: "Oyster Mushroom",
    edibility: "edible",
    season: "fall",
    description: "Fan-shaped caps growing in clusters",
    notes: "Great beginner mushroom, few look-alikes",
  },
  {
    name: "Lion’s Mane",
    edibility: "edible",
    season: "fall",
    description: "White, shaggy appearance like a lion's mane",
    notes: "No toxic look-alikes",
  },
  {
    name: "Destroying Angel",
    edibility: "toxic",
    season: "summer",
    description: "Pure white mushroom with a sack-like base",
    notes: "Deadly toxic - study for safety awareness",
  },
  {
    name: "King Bolete",
    edibility: "edible",
    season: "summer",
    description: "Large brown cap with thick stem",
    notes: "Learn to distinguish from similar species",
  },
  {
    name: "Shaggy Mane",
    edibility: "edible",
    season: "fall",
    description: "Golden-yellow, funnel-shaped mushroom with false gills",
    notes: "Must be harvested and eaten quickly",
  },
  {
    name: "Maitake",
    edibility: "edible",
    season: "fall",
    description: "Large, feathery clusters with overlapping gray-brown caps",
    notes: "Also known as Hen of the Woods - no toxic look-alikes",
  },
  {
    name: "False Morel",
    edibility: "toxic",
    season: "spring",
    description: "Brain-like, reddish-brown cap with irregular shape",
    notes: "Highly toxic - often confused with true morels",
  },
  {
    name: "Matsutake",
    edibility: "edible",
    season: "fall",
    description: "White to brown cap with thick stem and distinct spicy aroma",
    notes: "Verify identification - has toxic look-alikes",
  },
];
