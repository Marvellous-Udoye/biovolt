import type { Feedstock, WasteStream } from "@/types/simulation";

export const SIMULATION_ASSUMPTIONS = {
  methaneToKwh: 3.7,
  methaneFraction: 0.6,
  householdKwhPerDay: 4,
  digestateMassRatio: 0.9,
  co2eAvoidedPerKwh: 0.7,
  estimateRange: 0.2,
} as const;

export const FEEDSTOCKS: Feedstock[] = [
  {
    id: "food",
    label: "Food scraps",
    methaneM3PerKg: 0.08,
    description: "Kitchen scraps, restaurant leftovers, and household food waste.",
  },
  {
    id: "market",
    label: "Market / vegetable waste",
    methaneM3PerKg: 0.06,
    description: "Fruit peels, vegetable offcuts, and open-market organics.",
  },
  {
    id: "manure",
    label: "Animal manure",
    methaneM3PerKg: 0.03,
    description: "Livestock manure routed into sealed biodigesters.",
  },
  {
    id: "garden",
    label: "Garden / agricultural waste",
    methaneM3PerKg: 0.05,
    description: "Leaves, crop residue, grass clippings, and plant waste.",
  },
];

export const WASTE_STREAMS: WasteStream[] = [
  {
    id: "organic",
    label: "Organic",
    route: "Biodigester",
    description: "Sorted biodegradable waste becomes methane-rich biogas.",
  },
  {
    id: "plastic",
    label: "Plastic",
    route: "Recycling partner",
    description: "Washed, shredded, and remolded outside the biogas process.",
  },
  {
    id: "recyclable",
    label: "Paper / metal / glass",
    route: "Materials recovery",
    description: "Routed to recovery partners instead of landfill.",
  },
  {
    id: "residual",
    label: "Residual",
    route: "Residual handling",
    description:
      "Non-recyclable and hard-to-process materials (textiles, diapers, sanitary waste, contaminated organics, construction debris, and other mixed refuse) routed for appropriate disposal or specialized processing.",
  },
];

