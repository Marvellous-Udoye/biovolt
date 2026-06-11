import Image from "next/image";
import {
  Cog,
  Flame,
  Gauge,
  Leaf,
  Recycle,
  Zap,
} from "lucide-react";
import { SectionLabel } from "@/components/external/section-label";
import { SimulationScreenshot } from "@/components/external/simulation-screenshot";

const flow = [
  {
    icon: Recycle,
    title: "Waste",
    text: "Households, markets, and businesses enter mixed waste quantities.",
  },
  {
    icon: Gauge,
    title: "Sorting",
    text: "Organic, plastic, recyclable, and residual streams are separated.",
  },
  {
    icon: Leaf,
    title: "Biodigester",
    text: "Organic waste enters anaerobic digestion for methane production.",
  },
  {
    icon: Cog,
    title: "Gas Cleaning",
    text: "Moisture and impurities are removed before energy conversion.",
  },
  {
    icon: Flame,
    title: "CHP Engine",
    text: "Methane is burned in a generator to produce usable electricity.",
  },
  {
    icon: Zap,
    title: "Electricity",
    text: "The platform estimates kWh, homes powered, and avoided emissions.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="px-4 pt-3">
      <section className="reveal-up relative mx-auto min-h-[460px] md:min-h-[540px] max-w-6xl overflow-hidden rounded-2xl bg-[#0f4f12]">
        <Image
          src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1800&q=85"
          alt="Renewable energy turbine"
          width={1800}
          height={1100}
          className="absolute inset-0 size-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#225f47]/20 to-[#063d08]/85" />
        <div className="relative flex min-h-[460px] md:min-h-[540px] flex-col justify-end p-6 md:p-12 text-white">
          <SectionLabel>How it works</SectionLabel>
          <h1 className="mt-6 max-w-2xl text-3xl md:text-5xl font-semibold leading-[1.05]">
            Waste to sorting to biogas to electricity.
          </h1>
          <p className="mt-5 max-w-xl text-xs md:text-sm leading-6 text-white/80">
            BioVolt turns the group’s process into a visual prototype: collect,
            sort, digest, clean the gas, generate power, and track outputs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-0 py-12 md:py-16">
        <div className="text-center">
          <SectionLabel>Process flow</SectionLabel>
          <h2 className="mx-auto mt-6 max-w-2xl text-2xl md:text-4xl font-medium leading-tight">
            Visual step-by-step conversion pathway
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {flow.map((step, index) => (
            <article
              key={step.title}
              className="reveal-up relative rounded-lg bg-white p-5 shadow-sm ring-1 ring-[#edf0e9]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="grid size-9 place-items-center rounded-lg bg-[#d7fa78] text-[#185315]">
                <step.icon className="size-4" />
              </span>
              <h3 className="mt-8 text-sm font-semibold">{step.title}</h3>
              <p className="mt-3 text-[11px] leading-5 text-[#70756d]">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-0 pb-16">
        <div className="mx-auto max-w-6xl rounded-2xl bg-[#c9ddc8] px-5 py-10 md:px-7 md:py-12">
          <div className="text-center">
            <SectionLabel>Simulation evidence</SectionLabel>
            <h2 className="mt-5 text-2xl md:text-3xl font-medium">
              AnyLogic and OpenModelica preview panels
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-xs leading-5 text-[#667064]">
              These are prototype screenshot-style panels matching where
              exported AnyLogic logistics and OpenModelica digestion screenshots
              should sit once your team produces the real files.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <SimulationScreenshot
              title="AnyLogic PLE Logistics Model"
              subtitle="Truck routing, collection points, sorting hub, and biodigester queue"
              type="map"
            />
            <SimulationScreenshot
              title="OpenModelica ADM1 Digestion Model"
              subtitle="Methane yield curve from organic waste entering the biodigester"
              type="chart"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
