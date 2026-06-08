import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "./data";
import { SectionLabel } from "./section-label";

interface SimplePageProps {
  label: string;
  title: string;
  intro: string;
  steps: string[];
  cta?: string;
}

export function SimplePage({ label, title, intro, steps, cta = "Try the Simulator" }: SimplePageProps) {
  return (
    <div className="px-4 pt-3">
      <section className="relative mx-auto min-h-[540px] max-w-6xl overflow-hidden rounded-2xl bg-[#0f4f12]">
        <img src={images.hero} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#225f47]/20 to-[#063d08]/85" />
        <div className="relative flex min-h-[540px] flex-col justify-end p-8 text-white md:p-12">
          <SectionLabel>{label}</SectionLabel>
          <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.02]">{title}</h1>
          <p className="mt-5 max-w-xl text-sm leading-6 text-white/80">{intro}</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[0.65fr_1.35fr]">
        <SectionLabel>What happens</SectionLabel>
        <div className="grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <article key={step} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-[#eef1eb]">
              <span className="grid size-9 place-items-center rounded-full bg-[#d7fa78] text-sm font-semibold text-[#164812]">{index + 1}</span>
              <p className="mt-8 text-lg leading-6 text-[#303330]">{step}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="px-0 pb-10">
        <div className="mx-auto max-w-6xl rounded-2xl bg-[#c9ddc8] px-8 py-12 text-center">
          <SectionLabel>Next step</SectionLabel>
          <h2 className="mt-5 text-3xl font-medium">Turn the workflow into numbers.</h2>
          <Button asChild className="mt-7 h-10 rounded-full bg-[#0c4d0e] px-6 text-xs text-white">
            <Link href="/simulator">{cta} <ArrowUpRight className="size-3" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

