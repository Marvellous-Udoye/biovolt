"use client";

import { useMemo, useState } from "react";
import { BatteryCharging, Home, PlugZap, Recycle, Zap, type LucideIcon } from "lucide-react";
import { formatNumber } from "@/lib/simulation";
import { SectionLabel } from "./section-label";
import { SimulationScreenshot } from "./simulation-screenshot";

const LAGOS_DAILY_WASTE_TONNES = 14000;
const ORGANIC_SHARE = 0.5;
const MARKET_METHANE_M3_PER_KG = 0.06;
const METHANE_TO_KWH = 3.7;
const HOUSEHOLD_KWH_DAY = 4;
const DIESEL_CO2E_PER_KWH = 0.7;

export function ImpactClient() {
  const [captureRate, setCaptureRate] = useState(10);

  const impact = useMemo(() => {
    const capturedWasteKg = LAGOS_DAILY_WASTE_TONNES * 1000 * (captureRate / 100);
    const organicKg = capturedWasteKg * ORGANIC_SHARE;
    const methaneM3 = organicKg * MARKET_METHANE_M3_PER_KG;
    const electricityKwh = methaneM3 * METHANE_TO_KWH;
    return {
      capturedWasteKg,
      organicKg,
      methaneM3,
      electricityKwh,
      householdDays: electricityKwh / HOUSEHOLD_KWH_DAY,
      co2eAvoidedKg: electricityKwh * DIESEL_CO2E_PER_KWH,
    };
  }, [captureRate]);

  const metrics: {
    icon: LucideIcon;
    label: string;
    value: string;
    helper: string;
  }[] = [
    {
      icon: Recycle,
      label: "Waste captured",
      value: `${formatNumber(impact.capturedWasteKg / 1000)} t/day`,
      helper: "Sorted away from unmanaged disposal",
    },
    {
      icon: Zap,
      label: "Electricity potential",
      value: `${formatNumber(impact.electricityKwh)} kWh/day`,
      helper: "From organic fraction converted to methane",
    },
    {
      icon: Home,
      label: "Household days",
      value: `${formatNumber(impact.householdDays)}x`,
      helper: "Using 4 kWh per household per day",
    },
    {
      icon: BatteryCharging,
      label: "CO2e avoided",
      value: `${formatNumber(impact.co2eAvoidedKg / 1000)} t/day`,
      helper: "Against diesel-generator displacement",
    },
  ];

  return (
    <div className="px-4 pt-3">
      <section className="reveal-up relative mx-auto min-h-[460px] md:min-h-[540px] max-w-6xl overflow-hidden rounded-2xl bg-[#0f4f12]">
        <img
          src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1800&q=85"
          alt="Renewable energy landscape"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#225f47]/20 to-[#063d08]/85" />
        <div className="relative flex min-h-[460px] md:min-h-[540px] flex-col justify-end p-6 md:p-12 text-white">
          <SectionLabel>Impact</SectionLabel>
          <h1 className="mt-6 max-w-2xl text-3xl md:text-5xl font-semibold leading-[1.05]">
            Lagos waste can become measurable local power.
          </h1>
          <p className="mt-5 max-w-xl text-xs md:text-sm leading-6 text-white/80">
            Adjust the capture rate to estimate what happens if BioVolt helps route a share of Lagos daily waste into useful streams.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-0 py-12 md:py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal-up rounded-2xl bg-[#c9ddc8] p-5 md:p-7">
          <SectionLabel>Lagos model</SectionLabel>
          <h2 className="mt-6 text-3xl font-medium leading-tight">
            What if BioVolt captured {captureRate}% of daily waste?
          </h2>
          <input
            aria-label="Waste capture rate"
            className="mt-8 w-full accent-[#0c4d0e]"
            min={1}
            max={30}
            type="range"
            value={captureRate}
            onChange={(event) => setCaptureRate(Number(event.target.value))}
          />
          <div className="mt-4 flex justify-between text-xs text-[#566252]">
            <span>1%</span>
            <span>30%</span>
          </div>
          <p className="mt-8 text-xs leading-5 text-[#596556]">
            Prototype assumption: Lagos generates about 14,000 tonnes of municipal waste daily, with 50% treated as organic capture potential for this model.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {metrics.map(({ icon: MetricIcon, label, value, helper }) => {
            return (
              <article key={label} className="reveal-up rounded-lg bg-white p-5 shadow-sm ring-1 ring-[#edf0e9]">
                <span className="grid size-9 place-items-center rounded-lg bg-[#d7fa78] text-[#185315]">
                  <MetricIcon className="size-4" />
                </span>
                <p className="mt-8 text-[11px] uppercase text-[#7b8278]">{label}</p>
                <p className="mt-2 text-3xl font-medium text-[#252b24]">{value}</p>
                <p className="mt-2 text-[11px] leading-4 text-[#70756d]">{helper}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-0 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal-up rounded-2xl bg-[#074c08] p-5 md:p-7 text-white">
          <SectionLabel>Power gap</SectionLabel>
          <h2 className="mt-6 text-2xl md:text-3xl font-medium leading-tight">
            BioVolt is not replacing the grid. It shows a local support layer.
          </h2>
          <p className="mt-5 text-xs leading-5 text-white/70">
            Many Nigerian homes and businesses still plan around PHCN/NEPA interruptions, generator costs, and unreliable supply. BioVolt frames organic waste as one more distributed energy input for markets, estates, and facilities.
          </p>
          <div className="mt-8 grid gap-3">
            {[
              ["Grid backup need", "Useful for markets, estates, and processing hubs"],
              ["Generator comparison", "Outputs can be compared against diesel kWh and emissions"],
              ["Circular benefit", "Waste removal, power estimate, and fertilizer residue in one loop"],
            ].map(([label, text]) => (
              <div key={label} className="flex items-start gap-3 rounded-xl bg-white/10 p-4 text-xs">
                <PlugZap className="size-5 text-[#d7fa78] shrink-0 mt-0.5" />
                <span><strong>{label}:</strong> {text}</span>
              </div>
            ))}
          </div>
        </div>
        <SimulationScreenshot
          title="BioVolt Impact Dashboard"
          subtitle="Capture-rate scenario for Lagos waste-to-energy planning"
          type="chart"
        />
      </section>
    </div>
  );
}
