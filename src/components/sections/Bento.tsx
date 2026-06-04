import { Check, X, Zap } from "lucide-react";

const rows = [
  { label: "Coût annuel", drh: "80 000–120 000 €", artemis: "Calibré sur votre besoin", cabinet: "Variable, élevé à la journée" },
  { label: "Délai de démarrage", drh: "3 à 6 mois", artemis: "< 1 semaine", cabinet: "Rapide mais limité" },
  { label: "Pilotage opérationnel", drh: true, artemis: true, cabinet: false },
  { label: "Regard extérieur / sans biais", drh: false, artemis: true, cabinet: true },
  { label: "Responsabilité sur les résultats", drh: true, artemis: true, cabinet: false },
  { label: "Expérience industrie / ETI", drh: "Variable", artemis: "20 ans terrain", cabinet: "Thématique" },
];

const Cell = ({ val, featured }: { val: boolean | string; featured?: boolean }) => {
  if (typeof val === "boolean") {
    return val
      ? <Check className="h-4 w-4 text-[#C4A46B] mx-auto" />
      : <X className="h-4 w-4 text-[#9AABB8]/40 mx-auto" />;
  }
  return <span className={`text-xs ${featured ? "text-[#C4A46B] font-semibold" : "text-[#9AABB8]"}`}>{val}</span>;
};

export function Diff() {
  return (
    <section id="diff" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-[#C4A46B]" />
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C4A46B]">Pourquoi le temps partagé</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-[#EDE9E3] leading-[1.12]">
            Trois options.{" "}
            <em className="text-[#C4A46B]">Une seule</em> qui combine expertise et coût maîtrisé.
          </h2>
        </div>

        {/* Comparison table */}
        <div className="glass rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 border-b border-white/7">
            <div className="p-5" />
            {[
              { label: "DRH interne CDI", sub: "Option 1", feat: false },
              { label: "Artémis RH", sub: "Option 2 · Recommandé", feat: true },
              { label: "Cabinet conseil", sub: "Option 3", feat: false },
            ].map((col) => (
              <div key={col.label} className={`p-5 border-l border-white/7 ${col.feat ? "bg-[#C4A46B]/8" : ""}`}>
                {col.feat && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C4A46B] mb-3">
                    <Zap className="h-2.5 w-2.5 text-[#0C1B2E]" />
                    <span className="text-[9px] font-bold text-[#0C1B2E] tracking-wide uppercase">Le bon choix</span>
                  </div>
                )}
                <div className="text-xs font-semibold text-[#EDE9E3]">{col.label}</div>
                <div className="text-[10px] text-[#9AABB8] mt-0.5">{col.sub}</div>
              </div>
            ))}
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={row.label} className={`grid grid-cols-4 border-b border-white/5 last:border-0 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
              <div className="px-5 py-4 text-xs text-[#9AABB8] font-medium flex items-center">{row.label}</div>
              <div className="px-5 py-4 border-l border-white/5 flex items-center justify-center text-center">
                <Cell val={row.drh} />
              </div>
              <div className="px-5 py-4 border-l border-white/5 bg-[#C4A46B]/5 flex items-center justify-center text-center">
                <Cell val={row.artemis} featured />
              </div>
              <div className="px-5 py-4 border-l border-white/5 flex items-center justify-center text-center">
                <Cell val={row.cabinet} />
              </div>
            </div>
          ))}

          {/* Footer CTA */}
          <div className="grid grid-cols-4 border-t border-white/7 bg-white/[0.02]">
            <div className="px-5 py-4" />
            <div className="px-5 py-4 border-l border-white/5" />
            <div className="px-5 py-4 border-l border-white/5 bg-[#C4A46B]/5">
              <a href="#contact"
                className="block w-full text-center text-xs font-semibold tracking-wide text-[#0C1B2E] bg-[#C4A46B] px-4 py-2.5 rounded-xl hover:bg-[#D4B47B] transition-colors cursor-pointer">
                Diagnostic gratuit →
              </a>
            </div>
            <div className="px-5 py-4 border-l border-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
