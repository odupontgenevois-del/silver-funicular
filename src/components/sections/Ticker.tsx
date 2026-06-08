const items = [
  "Transformation RH",
  "Conformité légale",
  "Pilotage CODIR",
  "DRH externalisée",
  "PME & ETI",
  "Opérationnelle en 7 jours",
  "DRH à temps partagé",
  "Relations sociales",
  "Talent management",
  "Post-acquisition",
];

export function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-white/7 bg-[#0A1628] py-4 select-none">
      <div className="flex w-max animate-ticker">
        {/* Duplicate twice for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-0">
            <span className="text-xs font-medium tracking-[0.22em] uppercase text-[#9AABB8] whitespace-nowrap px-8">
              {item}
            </span>
            <span className="text-[#C4A46B] text-xs flex-shrink-0">·</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 28s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
