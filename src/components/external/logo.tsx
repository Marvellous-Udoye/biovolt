import { Sparkles } from "lucide-react";

export function Logo() {
  return (
    <span className="inline-flex items-center gap-2 font-semibold text-[#133f12]">
      <span className="grid size-7 place-items-center rounded-full bg-[#d6ff72] text-[#0d4f12]">
        <Sparkles className="size-4" />
      </span>
      BioVolt
    </span>
  );
}

