import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { NAV_LINKS } from "@/constants/navlinks";

export function Footer() {
  return (
    <footer className="px-4 pb-3 pt-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[#074c08] px-8 pb-5 pt-9 text-white">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold">
              Ready to Switch to Waste Power?
            </h2>
            <p className="mt-3 text-xs leading-5 text-white/70">
              Start seeing energy and recovery value from organic waste today.
              Contact us for a live consultation.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-xs sm:flex sm:gap-16 justify-end">
            <div className="flex flex-col gap-2 min-w-[100px]">
              <span className="font-semibold text-white/50 uppercase tracking-wider text-[10px]">
                Navigation
              </span>
              {NAV_LINKS.slice(0, 4).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 min-w-[100px]">
              <span className="font-semibold text-white/50 uppercase tracking-wider text-[10px]">
                Platform
              </span>
              {NAV_LINKS.slice(4).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 col-span-2 sm:col-span-1 text-white/75 min-w-[160px]">
              <span className="font-semibold text-white/50 uppercase tracking-wider text-[10px]">
                Contact
              </span>
              <p>42 Marina District, Lagos, Nigeria</p>
              <p>+234 800 BIOVOLT</p>
            </div>
          </div>
        </div>
        <div className="relative mt-8 select-none text-center text-[19vw] font-black uppercase leading-none tracking-normal md:text-[10rem]">
          <span
            className="footer-wordmark bg-gradient-to-b from-white/35 via-white/12 to-white/5 bg-clip-text text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.18)",
            }}
          >
            BioVolt
          </span>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-4 text-[11px] text-white/70 md:flex-row">
          <p className="text-center md:text-left">
            © 2026 BioVolt. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <div className="flex items-center gap-4 ml-2 border-l border-white/10 pl-4">
              <Linkedin className="size-4 cursor-pointer hover:text-white transition-colors" />
              <Facebook className="size-4 cursor-pointer hover:text-white transition-colors" />
              <Instagram className="size-4 cursor-pointer hover:text-white transition-colors" />
              <ArrowUpRight className="size-4 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
