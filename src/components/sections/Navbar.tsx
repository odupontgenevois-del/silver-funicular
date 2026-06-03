"use client";

import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-stone-200/80 bg-amber-50/80 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-stone-900 text-lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-600">
            <Zap className="h-4 w-4 text-white" />
          </div>
          Lumina
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors duration-150 cursor-pointer"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button size="sm">Get started</Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div className={cn(
        "md:hidden border-t border-stone-200 bg-amber-50 overflow-hidden transition-all duration-300",
        open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-sm font-medium text-stone-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-stone-200 flex flex-col gap-2">
            <Button variant="outline" size="sm" className="w-full">Sign in</Button>
            <Button size="sm" className="w-full">Get started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
