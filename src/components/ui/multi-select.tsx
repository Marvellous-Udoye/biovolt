"use client";

import React, { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type Option = { value: string; label: string };

export default function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select",
  className,
}: {
  options: Option[];
  selected: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const toggle = (value: string) => {
    const set = new Set(selected);
    if (set.has(value)) set.delete(value);
    else set.add(value);
    onChange(Array.from(set));
  };

  const label = selected.length
    ? options
        .filter((o) => selected.includes(o.value))
        .map((o) => o.label)
        .join(", ")
    : "";

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        className="border-input bg-white text-foreground ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-12 w-full items-center justify-between rounded-xl border px-4 text-sm outline-none transition focus:ring-4 focus:ring-[#d7fa78]/30"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="line-clamp-1 text-left">{label || placeholder}</span>
        <ChevronDown className="size-4 opacity-60" />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 min-w-[14rem] rounded-xl border border-[#dfe5d9] bg-white shadow-lg">
          <div className="p-2">
            {options.map((opt) => {
              const isChecked = selected.includes(opt.value);
              return (
                <label key={opt.value} className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-[#eef7e9]">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggle(opt.value)}
                    className="pointer-events-auto"
                  />
                  <span className="flex-1">{opt.label}</span>
                  {isChecked && <Check className="size-4 text-[#0c4d0e]" />}
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
