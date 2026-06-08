"use client";

import { useScrollReveal } from "@/lib/use-scroll-reveal";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function ExternalShell({ children }: { children: React.ReactNode }) {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#fbfcf7] text-[#242824]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

