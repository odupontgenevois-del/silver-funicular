"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Situation", href: "#situation" },
  { label: "Approche", href: "#diff" },
  { label: "Agnès", href: "#profil" },
  { label: "Offres", href: "#tarifs" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled ? "glass border-b border-white/7 py-3" : "bg-transparent py-5"
    )}>
      <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          {/* Circular monogram */}
          <div className="w-9 h-9 rounded-full border border-[#C4A46B]/60 flex items-center justify-center flex-shrink-0">
            <span className="font-display text-base font-light text-[#C4A46B] leading-none">A</span>
          </div>
          <span className="font-display text-xl font-light text-[#EDE9E3] tracking-wide">
            Artémis <em className="text-[#C4A46B] not-italic">RH</em> Consulting
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="px-4 py-2 text-sm font-medium tracking-widest uppercase text-[#9AABB8] hover:text-[#EDE9E3] transition-colors cursor-pointer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C4A46B] text-[#0C1B2E] text-sm font-semibold tracking-wide hover:bg-[#D4B47B] transition-all duration-200 cursor-pointer">
          Diagnostic gratuit
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-[#9AABB8] hover:text-[#EDE9E3] cursor-pointer">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div className={cn(
        "md:hidden glass border-t border-white/7 overflow-hidden transition-all duration-300",
        open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-6 py-5 flex flex-col gap-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="px-4 py-3 text-base text-[#9AABB8] hover:text-[#EDE9E3] hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 rounded-full bg-[#C4A46B] text-[#0C1B2E] text-sm font-semibold tracking-wide text-center cursor-pointer">
            Diagnostic gratuit
          </a>
        </div>
      </div>
    </header>
  );
}
