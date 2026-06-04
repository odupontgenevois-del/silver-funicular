"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Votre situation", href: "#situation" },
  { label: "Différenciateur", href: "#diff" },
  { label: "À propos", href: "#profil" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[#DCD9D2]/80 bg-[#FAF7F1]/95 backdrop-blur-md">
      <nav className="mx-auto max-w-5xl px-5 flex h-16 items-center justify-between">
        <a href="#" className="font-display text-[#0F3D6A] text-lg tracking-wide">
          Artémis RH <em className="text-[#B89968] not-italic">Consulting</em>
        </a>
        <ul className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="px-3.5 py-2 text-xs font-medium tracking-wide text-[#7A8FA6] hover:text-[#0F3D6A] transition-colors duration-150 cursor-pointer uppercase">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#0F3D6A] text-[#FAF7F1] text-xs font-medium tracking-widest uppercase hover:bg-[#B89968] transition-colors duration-200 cursor-pointer">
          Diagnostic gratuit
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-[#3F5673] hover:bg-[#EFE6D4] transition-colors cursor-pointer" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <div className={cn("md:hidden border-t border-[#DCD9D2] bg-[#FAF7F1] overflow-hidden transition-all duration-300", open ? "max-h-80 opacity-100" : "max-h-0 opacity-0")}>
        <div className="px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-4 py-3 text-sm text-[#3F5673] hover:bg-[#EFE6D4] transition-colors cursor-pointer">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-3 px-5 py-3 bg-[#0F3D6A] text-[#FAF7F1] text-xs font-medium tracking-widest uppercase text-center cursor-pointer">
            Diagnostic gratuit
          </a>
        </div>
      </div>
    </header>
  );
}
