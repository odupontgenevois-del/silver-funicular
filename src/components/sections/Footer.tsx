import { Link } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A3D2B] border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display text-white text-lg">Human Digitalis</span>
          <p className="text-white/50 text-sm mt-1">Expert Vidéo LinkedIn · Versailles & Paris</p>
        </div>

        <div className="flex items-center gap-6 text-sm text-white/50">
          <a href="#systeme" className="hover:text-white transition-colors cursor-pointer">Le système</a>
          <a href="#offres" className="hover:text-white transition-colors cursor-pointer">Offres</a>
          <a href="#apropos" className="hover:text-white transition-colors cursor-pointer">À propos</a>
          <a
            href="https://www.linkedin.com/in/olivier-dupontvidéo-personnelle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors cursor-pointer"
          >
            <Link className="h-5 w-5" />
          </a>
        </div>

        <p className="text-white/30 text-xs">© {new Date().getFullYear()} Human Digitalis — Olivier Dupont</p>
      </div>
    </footer>
  );
}
