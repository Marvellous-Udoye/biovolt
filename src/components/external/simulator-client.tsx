"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { BatteryCharging, Factory, Home, Leaf, Recycle, Route, Sprout, Zap, type LucideIcon } from "lucide-react";
import { FEEDSTOCKS, SIMULATION_ASSUMPTIONS, WASTE_STREAMS } from "@/constants/simulation";
import { calculateSimulation, formatNumber } from "@/lib/simulation";
import type { FeedstockId, SimulationInput } from "@/types/simulation";
import NIGERIAN_STATES from "@/constants/states";
import MultiSelect from "@/components/ui/multi-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionLabel } from "./section-label";

const numberField =
  "h-12 w-full rounded-xl border border-[#dfe5d9] bg-white px-4 text-sm outline-none transition focus:border-[#85a981] focus:ring-4 focus:ring-[#d7fa78]/30";

function toNumber(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function MetricCard({
  icon: Icon,
  label,
  value,
  helper,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  helper: string;
}) {
  return (
    <article className="reveal-up rounded-lg bg-white p-5 shadow-sm ring-1 ring-[#edf0e9]">
      <span className="grid size-9 place-items-center rounded-lg bg-[#d7fa78] text-[#185315]">
        <Icon className="size-4" />
      </span>
      <p className="mt-8 text-[11px] uppercase text-[#7b8278]">{label}</p>
      <p className="mt-2 text-3xl font-medium text-[#252b24]">{value}</p>
      <p className="mt-2 text-[11px] leading-4 text-[#70756d]">{helper}</p>
    </article>
  );
}

function Bar({ label, value, total }: { label: string; value: number; total: number }) {
  const width = total ? Math.max(4, Math.min(100, (value / total) * 100)) : 0;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs">
        <span>{label}</span>
        <span className="text-[#6c7369]">{formatNumber(value)} kg</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-[#e8eee4]">
        <div className="bar-grow h-full rounded-full bg-[#0c4d0e]" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

export function SimulatorClient() {
  const [input, setInput] = useState<SimulationInput>({
    feedstockIds: ["food"],
    organicKg: 0,
    plasticKg: 0,
    recyclableKg: 0,
    residualKg: 0,
    location: "Lagos",
  });
  const [hasCalculated, setHasCalculated] = useState(false);

  const result = useMemo(() => calculateSimulation(input), [input]);
  const householdIcons =
    result.householdsPoweredDays > 0
      ? Math.max(1, Math.min(12, Math.round(result.householdsPoweredDays)))
      : 0;
  const streams = [
    { id: "organic", value: input.organicKg },
    { id: "plastic", value: input.plasticKg },
    { id: "recyclable", value: input.recyclableKg },
    { id: "residual", value: input.residualKg },
  ] as const;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setHasCalculated(true);
    setTimeout(() => {
      document.getElementById("results-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="px-4 pt-3">
      <section className="reveal-up relative mx-auto min-h-[460px] md:min-h-[540px] max-w-6xl overflow-hidden rounded-2xl bg-[#0f4f12]">
        <Image
          src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1800&q=85"
          alt="Sorted waste ready for recovery"
          width={1800}
          height={1100}
          className="absolute inset-0 size-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#225f47]/20 to-[#063d08]/85" />
        <div className="relative flex min-h-[460px] md:min-h-[540px] flex-col justify-end p-6 md:p-12 text-white">
          <SectionLabel>Simulator</SectionLabel>
          <h1 className="mt-6 max-w-2xl text-3xl md:text-5xl font-semibold leading-[1.05]">
            Calculate the electricity hidden in organic waste.
          </h1>
          <p className="mt-5 max-w-xl text-xs md:text-sm leading-6 text-white/80">
            Enter waste quantities and BioVolt estimates methane, biogas, electricity, homes powered, digestate, avoided emissions, and routing outcomes.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-0 py-12 md:py-16 lg:grid-cols-[0.82fr_1.18fr]">
        <form onSubmit={handleCalculate} className="reveal-up rounded-2xl bg-[#c9ddc8] p-6 h-fit">
          <SectionLabel>Input waste</SectionLabel>
          <div className="mt-8 grid gap-5">
            <label className="grid gap-2 text-xs font-medium text-[#334031]">
              Organic feedstock (select one or more)
              <MultiSelect
                options={FEEDSTOCKS.map((f) => ({ value: f.id, label: f.label }))}
                selected={input.feedstockIds}
                onChange={(values) => {
                  setInput((current) => ({ ...current, feedstockIds: values as FeedstockId[] }));
                  setHasCalculated(false);
                }}
                placeholder="Choose organic feedstock"
              />
            </label>
            <label className="grid gap-2 text-xs font-medium text-[#334031]">
              Location context
              <Select
                value={input.location}
                onValueChange={(value) => {
                  setInput((current) => ({ ...current, location: value }));
                  setHasCalculated(false);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose location" />
                </SelectTrigger>
                <SelectContent>
                  {NIGERIAN_STATES.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
            {[
              ["organicKg", "Organic waste for biogas (kg)"],
              ["plasticKg", "Plastic waste for recycling (kg)"],
              ["recyclableKg", "Paper / metal / glass (kg)"],
              ["residualKg", "Residual waste (kg)"],
            ].map(([key, label]) => (
              <label key={key} className="grid gap-2 text-xs font-medium text-[#334031]">
                {label}
                <input
                  className={numberField}
                  min={0}
                  type="number"
                  value={input[key as keyof SimulationInput] || ""}
                  onChange={(event) => {
                    setInput((current) => ({ ...current, [key]: toNumber(event.target.value) }));
                    setHasCalculated(false);
                  }}
                />
              </label>
            ))}
          </div>
          <button 
            type="submit"
            className="mt-6 w-full h-12 rounded-xl bg-[#0c4d0e] hover:bg-[#08350a] text-white text-sm font-semibold transition"
          >
            Calculate Power
          </button>
          <p className="mt-4 text-[11px] leading-5 text-[#596556]">
            Plastic and other recyclables are routed to recovery partners. They do not generate biogas electricity in this model.
          </p>
        </form>

        <div className="grid gap-4 md:grid-cols-2">
          {hasCalculated ? (
            <>
              <MetricCard icon={Factory} label="Methane" value={`${formatNumber(result.methaneM3)} m3`} helper={`${formatNumber(result.methaneLowM3)}-${formatNumber(result.methaneHighM3)} m3 estimate range`} />
              <MetricCard icon={Leaf} label="Raw biogas" value={`${formatNumber(result.biogasM3)} m3`} helper={`Assumes ${SIMULATION_ASSUMPTIONS.methaneFraction * 100}% methane fraction`} />
              <MetricCard icon={Zap} label="Electricity" value={`${formatNumber(result.electricityKwh)} kWh`} helper="Methane converted through CHP-style generation" />
              <MetricCard icon={Sprout} label="Fertilizer generated" value={`${formatNumber(result.fertilizerKg)} kg`} helper="Estimated organic fertilizer from digestate" />
              <MetricCard icon={Recycle} label="Recyclable plastics" value={`${formatNumber(result.recyclablePlasticKg)} kg`} helper="Plastic waste available for recycling" />
              <MetricCard icon={BatteryCharging} label="CO2e avoided" value={`${formatNumber(result.co2eAvoidedKg)} kg`} helper="Diesel-generator displacement estimate" />
              <MetricCard
                icon={Home}
                label="Household impact"
                value={`${formatNumber(result.householdsPoweredDays)} household-days`}
                helper="Equivalent to powering 1 household for X days, or X households for 1 day (based on 4 kWh/day)"
              />
            </>
          ) : (
            <div className="col-span-2 flex flex-col items-center justify-center p-12 text-center rounded-xl bg-white border border-[#dfe5d9] min-h-[400px]">
              <Zap className="size-10 text-[#85a981] animate-pulse" />
              <p className="mt-4 text-sm font-medium text-[#6c7369]">Enter waste quantities and click Calculate to view projections.</p>
            </div>
          )}
        </div>
      </section>

      {hasCalculated && (
        <section id="results-section" className="mx-auto grid max-w-6xl gap-6 px-0 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl bg-white p-5 md:p-7 shadow-sm ring-1 ring-[#edf0e9]">
          <SectionLabel>Waste routing</SectionLabel>
          <div className="mt-8 grid gap-5">
            <Bar label="Organic to biodigester" value={input.organicKg} total={result.totalWasteKg} />
            <Bar label="Plastic to recycling" value={input.plasticKg} total={result.totalWasteKg} />
            <Bar label="Other recyclables" value={input.recyclableKg} total={result.totalWasteKg} />
            <Bar label="Residual handling" value={input.residualKg} total={result.totalWasteKg} />
          </div>
          <div className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2">
            {streams.map((stream) => {
              const meta = WASTE_STREAMS.find((item) => item.id === stream.id)!;
              return (
                <article key={stream.id} className="rounded-xl bg-[#f6f8f2] p-4">
                  <p className="text-sm font-semibold">{meta.label}</p>
                  <p className="mt-1 text-[11px] text-[#697267]">{meta.route}</p>
                  <p className="mt-4 text-2xl font-medium">{formatNumber(stream.value)} kg</p>
                </article>
              );
            })}
          </div>
        </div>
        <div className="reveal-up rounded-2xl bg-[#074c08] p-5 md:p-7 text-white">
          <SectionLabel>Visual output</SectionLabel>
          <h2 className="mt-6 text-2xl md:text-3xl font-medium leading-tight">
            {result.electricityKwh > 0 ? (
              <>
                This batch can power 1 household for {formatNumber(result.householdsPoweredDays)} days -
                equivalently {formatNumber(result.householdsPoweredDays)} households for 1 day (based on {SIMULATION_ASSUMPTIONS.householdKwhPerDay} kWh/day). Total: {formatNumber(result.electricityKwh)} kWh.
              </>
            ) : (
              <>This batch does not provide usable electricity with the current inputs (0 kWh).</>
            )}
          </h2>
          <div className="mt-8 grid grid-cols-4 gap-3">
            {Array.from({ length: householdIcons }).map((_, index) => (
              <span key={index} className="float-soft grid aspect-square place-items-center rounded-xl bg-white/10">
                <Home className="size-5 text-[#d7fa78]" />
              </span>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-white/70">
            Total waste entered: {formatNumber(result.totalWasteKg)} kg. Diverted into useful streams: {formatNumber(result.divertedKg)} kg. Residual share: {formatNumber(result.residualShare * 100)}%.
          </p>
          <div className="mt-8 flex items-center gap-3 rounded-xl bg-white/10 p-4 text-xs">
            <Route className="size-5 text-[#d7fa78]" />
            <span>{input.location} routing context selected.</span>
          </div>
          <div className="mt-3 flex items-center gap-3 rounded-xl bg-white/10 p-4 text-xs">
            <Recycle className="size-5 text-[#d7fa78]" />
            <span>Recycling streams are separated from the biogas calculation.</span>
          </div>
        </div>
      </section>
      )}
    </div>
  );
}
