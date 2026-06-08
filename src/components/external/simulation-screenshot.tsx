import { Activity, BarChart3, MapPinned, Network, Play, Settings2 } from "lucide-react";

interface SimulationScreenshotProps {
  title: string;
  subtitle: string;
  type: "map" | "chart";
}

export function SimulationScreenshot({ title, subtitle, type }: SimulationScreenshotProps) {
  return (
    <article className="reveal-up overflow-hidden rounded-xl border border-[#dfe7da] bg-[#f7faf3] shadow-sm">
      <div className="flex items-center justify-between border-b border-[#dfe7da] bg-white px-4 py-3">
        <div>
          <p className="text-xs font-semibold text-[#242824]">{title}</p>
          <p className="mt-1 text-[10px] text-[#747b72]">{subtitle}</p>
        </div>
        <div className="flex items-center gap-2 text-[#657062]">
          <Settings2 className="size-4" />
          <Play className="size-4 text-[#0c4d0e]" />
        </div>
      </div>
      <div className="grid min-h-72 gap-4 p-4 grid-cols-1 md:grid-cols-[1.2fr_0.8fr]">
        {type === "map" ? <MapPanel /> : <ChartPanel />}
        <div className="space-y-3">
          {[
            ["Organic capture", "62%"],
            ["Truck utilization", "78%"],
            ["Plant queue", "14 min"],
            ["Diversion rate", "84%"],
          ].map(([label, value], index) => (
            <div key={label} className="rounded-lg bg-white p-3 ring-1 ring-[#e7ece1]">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#687064]">{label}</span>
                <span className="font-semibold text-[#1c4219]">{value}</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e8eee4]">
                <div
                  className="bar-grow h-full rounded-full bg-[#0c4d0e]"
                  style={{ width: `${[62, 78, 35, 84][index]}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function MapPanel() {
  const points = [
    "left-[18%] top-[32%]",
    "left-[38%] top-[56%]",
    "left-[60%] top-[38%]",
    "left-[76%] top-[66%]",
  ];

  return (
    <div className="relative overflow-hidden rounded-lg bg-[#dcebd6]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,77,14,0.08)_1px,transparent_1px),linear-gradient(rgba(12,77,14,0.08)_1px,transparent_1px)] bg-[size:34px_34px]" />
      <svg className="absolute inset-0 size-full" viewBox="0 0 500 320" aria-hidden="true">
        <path d="M35 220 C130 110 225 260 330 120 S455 168 478 86" fill="none" stroke="#0c4d0e" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10" />
        <path d="M70 60 C138 120 208 74 280 134 S388 194 445 142" fill="none" stroke="#88a984" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <MapPinned className="absolute left-[45%] top-[43%] size-8 text-[#0c4d0e]" />
      {points.map((point, index) => (
        <span key={point} className={`pulse-dot absolute ${point} grid size-6 place-items-center rounded-full bg-[#d7fa78] text-[10px] font-bold text-[#0c4d0e]`}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}

function ChartPanel() {
  return (
    <div className="rounded-lg bg-white p-5 ring-1 ring-[#e7ece1]">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-[#243023]">Methane yield curve</p>
          <p className="text-[10px] text-[#747b72]">OpenModelica ADM1 output</p>
        </div>
        <Activity className="size-5 text-[#0c4d0e]" />
      </div>
      <div className="flex h-44 items-end gap-3 border-b border-l border-[#dfe7da] px-3">
        {[28, 42, 58, 74, 88, 82, 76, 70].map((height, index) => (
          <span
            key={index}
            className="bar-grow flex-1 rounded-t-md bg-[#0c4d0e]"
            style={{ height: `${height}%`, animationDelay: `${index * 80}ms` }}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 text-[11px] text-[#687064]">
        <BarChart3 className="size-4" />
        Biogas stabilizes after digestion ramp-up
      </div>
      <div className="mt-3 flex items-center gap-2 text-[11px] text-[#687064]">
        <Network className="size-4" />
        Hydrolysis to methanogenesis flow validated
      </div>
    </div>
  );
}

