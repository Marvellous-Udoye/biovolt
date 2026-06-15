import { FEEDSTOCKS, SIMULATION_ASSUMPTIONS } from "@/constants/simulation";
import type { FeedstockId, SimulationInput, SimulationResult } from "@/types/simulation";

const clamp = (value: number) => (Number.isFinite(value) && value > 0 ? value : 0);

export function getFeedstocks(feedstockIds: FeedstockId[]) {
  const selected = FEEDSTOCKS.filter((f) => feedstockIds.includes(f.id));
  return selected.length ? selected : [FEEDSTOCKS[0]];
}

export function calculateSimulation(input: SimulationInput): SimulationResult {
  const feedstocks = getFeedstocks(input.feedstockIds ?? []);
  const organicKg = clamp(input.organicKg);
  const plasticKg = clamp(input.plasticKg);
  const recyclableKg = clamp(input.recyclableKg);
  const residualKg = clamp(input.residualKg);
  const totalWasteKg = organicKg + plasticKg + recyclableKg + residualKg;
  const avgMethanePerKg =
    feedstocks.reduce((sum, f) => sum + f.methaneM3PerKg, 0) / feedstocks.length;
  const methaneM3 = organicKg * avgMethanePerKg;
  const electricityKwh = methaneM3 * SIMULATION_ASSUMPTIONS.methaneToKwh;
  const divertedKg = organicKg + plasticKg + recyclableKg;
  const digestateKg = organicKg * SIMULATION_ASSUMPTIONS.digestateMassRatio;

  return {
    methaneM3,
    methaneLowM3: methaneM3 * (1 - SIMULATION_ASSUMPTIONS.estimateRange),
    methaneHighM3: methaneM3 * (1 + SIMULATION_ASSUMPTIONS.estimateRange),
    biogasM3: methaneM3 / SIMULATION_ASSUMPTIONS.methaneFraction,
    electricityKwh,
    householdsPoweredDays: electricityKwh / SIMULATION_ASSUMPTIONS.householdKwhPerDay,
    digestateKg,
    fertilizerKg: digestateKg,
    recyclablePlasticKg: plasticKg,
    co2eAvoidedKg: electricityKwh * SIMULATION_ASSUMPTIONS.co2eAvoidedPerKwh,
    totalWasteKg,
    divertedKg,
    residualShare: totalWasteKg ? residualKg / totalWasteKg : 0,
  };
}

export function formatNumber(value: number, maximumFractionDigits = 1) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits }).format(value);
}

