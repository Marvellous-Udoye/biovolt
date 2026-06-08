"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/constants/navlinks";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-5 z-50 px-4">
      <nav className="pointer-events-auto mx-auto flex h-12 max-w-5xl items-center justify-between rounded-full bg-white/95 px-3 shadow-sm ring-1 ring-black/5 backdrop-blur">
        <Link href="/" aria-label="BioVolt home">
          <Logo />
        </Link>
        <div className="hidden items-center gap-5 text-[11px] font-medium text-[#1f2d1e] md:flex">
          {NAV_LINKS.slice(0, 6).map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-[#0d5b14]">
              {link.label}
            </Link>
          ))}
        </div>
        <Button asChild className="hidden h-9 rounded-full bg-[#0f4f12] px-5 text-[11px] text-white hover:bg-[#0b3f0e] md:inline-flex">
          <Link href="/simulator">Try Simulator</Link>
        </Button>
        <button
          aria-label="Toggle navigation"
          className="grid size-9 place-items-center rounded-full bg-[#eef7e9] text-[#0f4f12] md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>
      {open && (
        <div className="pointer-events-auto mx-auto mt-2 grid max-w-5xl gap-1 rounded-3xl bg-white p-3 text-sm shadow-lg md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-2xl px-4 py-3 text-[#1f2d1e] hover:bg-[#eef7e9]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
