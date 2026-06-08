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
          <div className="grid grid-cols-2 gap-8 text-xs md:grid-cols-3 md:gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-white/50 uppercase tracking-wider text-[10px]">Navigation</span>
              {NAV_LINKS.slice(0, 4).map((link) => (
                <Link key={link.label} href={link.href} className="text-white/80 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-white/50 uppercase tracking-wider text-[10px]">Platform</span>
              {NAV_LINKS.slice(4).map((link) => (
                <Link key={link.label} href={link.href} className="text-white/80 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 col-span-2 md:col-span-1 text-white/75">
              <span className="font-semibold text-white/50 uppercase tracking-wider text-[10px]">Contact</span>
              <p>42 Marina District, Lagos, Nigeria</p>
              <p>+234 800 BIOVOLT</p>
            </div>
          </div>
        </div>
        <div className="mt-8 select-none text-center text-[18vw] font-black leading-none tracking-normal md:text-[10rem] relative">
          <span 
            className="bg-clip-text text-transparent bg-gradient-to-b from-white/20 to-white/5"
            style={{
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)",
            }}
          >
            BioVolt
          </span>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-4 text-[11px] text-white/70 md:flex-row">
          <p>© 2026 BioVolt. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Linkedin className="size-4 cursor-pointer hover:text-white transition-colors" />
            <Facebook className="size-4 cursor-pointer hover:text-white transition-colors" />
            <Instagram className="size-4 cursor-pointer hover:text-white transition-colors" />
            <ArrowUpRight className="size-4 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
