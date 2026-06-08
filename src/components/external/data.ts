import { BatteryCharging, Factory, Leaf, Recycle, Route, ShieldCheck, Sparkles, Zap } from "lucide-react";

export const images = {
  hero: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85",
  heroCard: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=85",
  projectOne: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=900&q=85",
  projectTwo: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85",
  projectThree: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=85",
  teamOne: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
  teamTwo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=85",
  teamThree: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
  faq: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=85",
};

export const serviceCards = [
  {
    icon: Leaf,
    title: "Organic Waste Sorting",
    text: "Separate food, market, and garden waste before it reaches landfills.",
  },
  {
    icon: Zap,
    title: "Biogas Electricity Estimates",
    text: "Convert waste inputs into methane, biogas, and usable kWh projections.",
  },
  {
    icon: Recycle,
    title: "Recyclable Routing",
    text: "Move plastics and recoverable materials into the right partner stream.",
  },
  {
    icon: BatteryCharging,
    title: "Local Energy Planning",
    text: "Show what waste can power for households, markets, and facilities.",
  },
];

export const processCards = [
  {
    image: images.projectOne,
    title: "Lagos Market Organic Stream",
    tags: ["Food waste", "Biodigester", "CHP power"],
  },
  {
    image: images.projectTwo,
    title: "Community Biogas Power Hub",
    tags: ["Methane", "Electricity", "Digestate"],
  },
  {
    image: images.projectThree,
    title: "Plastic Recovery Route",
    tags: ["Sorting", "Recycling", "Diversion"],
  },
];

export const valueCards = [
  {
    icon: ShieldCheck,
    title: "Transparent Estimates",
    text: "Every result is shown as an estimate with clear assumptions.",
  },
  {
    icon: Sparkles,
    title: "Circular Sustainability",
    text: "Organic waste becomes energy while leftovers become fertilizer.",
  },
  {
    icon: Factory,
    title: "Partner Ready",
    text: "The platform supports existing collectors, recyclers, and biogas plants.",
  },
  {
    icon: Route,
    title: "Cleaner Routing",
    text: "Mixed waste is separated into the pathway where it creates most value.",
  },
];

