import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { NAV_LINKS } from "@/constants/navlinks";

export function Footer() {
  return (
    <footer className="px-4 pb-3 pt-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[#074c08] px-8 pb-5 pt-9 text-white">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <h2 className="text-2xl font-semibold">Ready to Switch to Waste Power?</h2>
            <p className="mt-3 max-w-sm text-xs leading-5 text-white/70">
              Start seeing energy and recovery value from organic waste today. Contact us for a live consultation.
            </p>
          </div>
          <div className="grid gap-4 text-xs md:grid-cols-2 md:gap-10">
            <div className="flex flex-wrap gap-4">
              {NAV_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className="text-white/80 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="space-y-2 text-white/75">
              <p>42 Marina District, Lagos, Nigeria</p>
              <p>+234 800 BIOVOLT</p>
            </div>
          </div>
        </div>
        <div className="mt-8 select-none text-center text-[18vw] font-black leading-none tracking-normal text-white/25 md:text-[10rem]">
          BioVolt
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-4 text-[11px] text-white/70 md:flex-row">
          <p>© 2026 BioVolt. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Linkedin className="size-4" />
            <Facebook className="size-4" />
            <Instagram className="size-4" />
            <ArrowUpRight className="size-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}
