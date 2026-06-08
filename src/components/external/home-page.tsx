import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images, processCards, serviceCards, valueCards } from "./data";
import { SectionLabel } from "./section-label";

function ImageBlock({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return <img src={src} alt={alt} className={className} />;
}

export function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="px-4 pt-3">
        <div className="relative mx-auto min-h-[500px] max-w-6xl overflow-hidden rounded-2xl bg-[#0f4f12] md:min-h-[640px]">
          <ImageBlock src={images.hero} alt="Green hills with renewable energy infrastructure" className="absolute inset-0 size-full object-cover animate-fade-in" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#225f47]/25 via-transparent to-[#063d08]/80" />
          <div className="absolute inset-x-0 bottom-0 grid gap-6 p-5 text-white md:grid-cols-[1.15fr_0.55fr_0.42fr] md:items-end md:p-11">
            <div>
              <h1 className="max-w-md text-3xl font-semibold leading-[1.05] tracking-normal md:text-5xl">
                Turning Waste Into Cleaner Electric Power
              </h1>
            </div>
            <div>
              <p className="max-w-xs text-xs leading-5 text-white/85">
                A circular platform that sorts urban waste, routes recyclables, and estimates clean electricity from biogas.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/80 bg-white/10 p-1 backdrop-blur hidden md:block">
              <ImageBlock src={images.heroCard} alt="Sorted recyclable waste being recovered" className="h-36 w-full rounded-lg object-cover md:h-44" />
              <p className="p-3 text-[11px] leading-4 text-white/90">
                Reduce landfill methane, recover useful materials, and show the energy value hidden in Lagos waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[0.6fr_1.4fr] md:py-16">
        <SectionLabel>Who we are</SectionLabel>
        <div>
          <p className="max-w-3xl text-xl leading-[1.25] text-[#656765] md:text-3xl md:leading-[1.15]">
            BioVolt is a climate and sustainability solution helping cities transform mixed waste into cleaner value. We focus on sorted organic waste for biogas electricity, while recyclables are routed to recovery partners.
          </p>
          <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#e7e7df] pt-6 sm:pt-0">
            {[
              ["3.7", "kWh per m3 CH4"],
              ["60%", "Methane fraction used"],
              ["90%", "Digestate estimate"],
            ].map(([value, label], idx) => (
              <div key={label} className={`pt-4 sm:pt-0 ${idx === 0 ? "sm:pl-0" : "sm:pl-5"}`}>
                <p className="text-4xl font-medium text-[#303330]">{value}</p>
                <p className="mt-2 text-[11px] text-[#777b75]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-4">
        <div className="mx-auto max-w-6xl rounded-2xl bg-[#c9ddc8] px-5 py-10 md:px-7 md:py-12 text-center">
          <SectionLabel>What we do</SectionLabel>
          <h2 className="mt-5 text-2xl md:text-3xl font-medium">Our Services</h2>
          <p className="mx-auto mt-5 max-w-3xl text-xs leading-5 text-[#667064]">
            We provide end-to-end digital support for waste sorting, biogas energy estimation, recyclable routing, and sustainability reporting for communities and businesses.
          </p>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 md:grid-cols-4">
            {serviceCards.map((item, index) => (
              <article 
                key={item.title} 
                className="reveal-up rounded-lg bg-white p-5 shadow-sm"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="grid size-9 place-items-center rounded-lg bg-[#d7fa78] text-[#185315]">
                  <item.icon className="size-4" />
                </span>
                <h3 className="mt-8 text-sm font-semibold">{item.title}</h3>
                <p className="mt-3 text-[11px] leading-5 text-[#70756d]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Our projects</SectionLabel>
            <h2 className="mt-7 max-w-xs text-3xl md:text-4xl leading-[1.05] font-medium">Our Portfolio of Projects</h2>
          </div>
          <div>
            <p className="max-w-xl text-xs leading-5 text-[#60665f]">
              Explore how BioVolt transforms waste collection into a cleaner energy workflow: sorted organics to digesters, plastics to recyclers, and residuals tracked for reduction.
            </p>
            <Button asChild className="mt-5 h-9 rounded-full bg-[#0c4d0e] px-5 text-[11px] text-white">
              <Link href="/simulator">Calculate it <ArrowUpRight className="size-3" /></Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {processCards.map((project, index) => (
            <article 
              key={project.title} 
              className="reveal-up relative h-72 overflow-hidden rounded-lg bg-[#0c4d0e] text-white"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ImageBlock src={project.image} alt={project.title} className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/65" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-lg font-medium leading-tight">{project.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/15 px-3 py-1 text-[10px] backdrop-blur">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex gap-4">
          <button className="grid size-11 place-items-center rounded-full border border-[#dfe3da] text-[#7b8278]"><ArrowLeft className="size-4" /></button>
          <button className="grid size-11 place-items-center rounded-full bg-[#84ae82] text-white"><ArrowRight className="size-4" /></button>
        </div>
      </section>

      <section className="px-4">
        <div className="mx-auto max-w-6xl rounded-2xl bg-[#074c08] px-5 py-10 md:px-7 md:py-14 text-center text-white">
          <SectionLabel>Why BioVolt</SectionLabel>
          <h2 className="mt-5 text-3xl md:text-4xl font-medium">Why Choose Us?</h2>
          <p className="mx-auto mt-5 max-w-xl text-xs leading-5 text-white/70">
            We make waste-to-energy understandable, measurable, and easy to present to communities, partners, and judges.
          </p>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 md:grid-cols-4">
            {valueCards.map((item, index) => (
              <article 
                key={item.title} 
                className="reveal-up rounded-lg bg-white/10 p-5"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="grid size-8 place-items-center rounded-lg border border-[#d7fa78]/30 text-[#d7fa78]">
                  <item.icon className="size-4" />
                </span>
                <h3 className="mt-8 text-sm font-semibold">{item.title}</h3>
                <p className="mt-3 text-[11px] leading-5 text-white/65">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:py-16 md:grid-cols-[1.1fr_0.9fr]">
        <p className="max-w-xl text-xs leading-5 text-[#60665f]">
          BioVolt brings waste collectors, researchers, sustainability teams, and processing partners into one visible workflow so every kilogram can be sorted, tracked, and converted into the right value stream.
        </p>
        <div>
          <SectionLabel>Our team</SectionLabel>
          <h2 className="mt-7 text-3xl md:text-4xl font-medium">Meet Our Experts</h2>
        </div>
        <div className="grid gap-6 md:col-span-2 sm:grid-cols-2 md:grid-cols-3">
          {[images.teamOne, images.teamTwo, images.teamThree].map((image, index) => (
            <ImageBlock 
              key={image} 
              src={image} 
              alt={`BioVolt team expert ${index + 1}`} 
              className="reveal-up h-80 w-full rounded-lg object-cover" 
              style={{ transitionDelay: `${index * 150}ms` }}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionLabel>FAQs</SectionLabel>
          <h2 className="mt-7 max-w-xs text-3xl md:text-4xl leading-[1.05] font-medium">Frequently Asked Questions?</h2>
          <ImageBlock src={images.faq} alt="Renewable energy system" className="mt-8 h-48 w-full rounded-lg object-cover md:max-w-md" />
        </div>
        <div className="w-full space-y-3">
          {[
            ["Can all waste become biogas?", "No. Organic waste can become biogas, while plastics and other recyclables need separate recovery routes."],
            ["Does BioVolt generate electricity directly?", "The prototype estimates the output. In real deployment, partner biodigesters and CHP engines would generate power."],
            ["Why include plastic waste?", "Plastic does not create biogas, but sorting it prevents contamination and improves recycling value."],
            ["How accurate are the numbers?", "They are transparent estimates using documented midpoint assumptions suitable for a prototype."],
            ["What is digestate and can it be used?", "Yes, it is a nutrient-rich byproduct from anaerobic digestion that can be used as organic fertilizer."],
            ["Is BioVolt suitable for rural communities?", "Yes, the platform models work for any community that generates organic waste, including rural agricultural settings."],
          ].map(([question, answer], index) => (
            <details key={question} className="w-full rounded-xl border border-[#e9ece4] bg-white px-5 py-4 shadow-sm" open={index === 1}>
              <summary className="cursor-pointer list-none text-sm font-medium">{question}<span className="float-right">+</span></summary>
              <p className="mt-4 text-xs leading-5 text-[#6a7068]">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

