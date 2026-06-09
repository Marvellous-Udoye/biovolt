export type FeedstockId = "food" | "market" | "manure" | "garden";
export type WasteStreamId = "organic" | "plastic" | "recyclable" | "residual";

export interface Feedstock {
  id: FeedstockId;
  label: string;
  methaneM3PerKg: number;
  description: string;
}

export interface WasteStream {
  id: WasteStreamId;
  label: string;
  route: string;
  description: string;
}

export interface SimulationInput {
  // allow multiple organic feedstock types to be selected
  feedstockIds: FeedstockId[];
  organicKg: number;
  plasticKg: number;
  recyclableKg: number;
  residualKg: number;
  location: string;
}

export interface SimulationResult {
  methaneM3: number;
  methaneLowM3: number;
  methaneHighM3: number;
  biogasM3: number;
  electricityKwh: number;
  householdsPoweredDays: number;
  digestateKg: number;
  co2eAvoidedKg: number;
  totalWasteKg: number;
  divertedKg: number;
  residualShare: number;
}

