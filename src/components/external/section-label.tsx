export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center gap-1 rounded-full bg-[#d7fa78] px-3 py-1 text-[10px] font-semibold uppercase tracking-normal text-[#164812]">
      <span className="size-1 rounded-full bg-[#164812]" />
      {children}
    </span>
  );
}

