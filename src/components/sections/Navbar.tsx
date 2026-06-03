"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Le système", href: "#systeme" },
  { label: "Offres", href: "#offres" },
  { label: "À propos", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[#E8E2D9]/80 bg-[#FAF7F2]/90 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-lg text-[#1A3D2B]">Human Digitalis</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-[#6B6560] hover:text-[#1A3D2B] transition-colors duration-150 cursor-pointer"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-[#E8622A] text-white text-sm font-semibold hover:bg-[#C94E1A] transition-colors duration-200 cursor-pointer"
        >
          Réserver une place
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-[#6B6560] hover:bg-[#E8E2D9] transition-colors cursor-pointer"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div className={cn(
        "md:hidden border-t border-[#E8E2D9] bg-[#FAF7F2] overflow-hidden transition-all duration-300",
        open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm font-medium text-[#2C2C2C] hover:bg-[#E8E2D9] rounded-lg transition-colors cursor-pointer"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 px-5 py-3 rounded-full bg-[#E8622A] text-white text-sm font-semibold text-center hover:bg-[#C94E1A] transition-colors cursor-pointer"
          >
            Réserver une place
          </a>
        </div>
      </div>
    </header>
  );
}
