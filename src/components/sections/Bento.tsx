import { Check, X } from "lucide-react";

const cols = [
  {
    label: "Option 1",
    name: "DRH interne en CDI",
    featured: false,
    items: [
      { text: "Présence quotidienne", ok: true },
      { text: "80 000 à 120 000 €/an charges comprises", ok: false },
      { text: "Recrutement : 3 à 6 mois avant démarrage", ok: false },
      { text: "Profil rarement ajusté au besoin exact", ok: false },
      { text: "Biais politique interne inévitable", ok: false },
    ],
  },
  {
    label: "Option 2 · Artémis RH",
    name: "La bonne experte. Au bon moment.",
    featured: true,
    badge: "Le bon choix",
    items: [
      { text: "20 ans d'expérience, industrie et ETI", ok: true },
      { text: "Coût calibré sur votre besoin réel", ok: true },
      { text: "Démarrage en moins d'une semaine", ok: true },
      { text: "Regard extérieur, sans biais politique", ok: true },
      { text: "Résultats mesurés, sourcés, vérifiables", ok: true },
    ],
  },
  {
    label: "Option 3",
    name: "Cabinet de conseil RH",
    featured: false,
    items: [
      { text: "Expertise thématique disponible", ok: true },
      { text: "Consultant, pas un pilote opérationnel", ok: false },
      { text: "Facturation à la journée, coût variable élevé", ok: false },
      { text: "Peu d'ancrage dans votre réalité terrain", ok: false },
      { text: "Pas de responsabilité sur les résultats", ok: false },
    ],
  },
];

const badges = [
  { text: "Prix ONU · New York 2019" },
  { text: "Mastère HEC Paris" },
  { text: "20 ans · Industrie & ETI" },
  { text: "15 pays · EMEA" },
  { text: "Membre de CODIR" },
];

export function Diff() {
  return (
    <section id="diff" className="py-16 sm:py-24 bg-white border-t border-[#DCD9D2]">
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-7 h-px bg-[#B89968]" />
          <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#B89968]">Pourquoi le temps partagé</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-light text-[#0F3D6A] leading-[1.18] mb-1">
          Trois options. Une seule qui{" "}
          <em className="text-[#B89968]">combine</em> les deux.
        </h2>
        <p className="text-sm text-[#7A8FA6] mb-10">Expertise et coût maîtrisé. Comparaison objective.</p>

        <div className="grid md:grid-cols-3 gap-px bg-[#DCD9D2]">
          {cols.map((col) => (
            <div key={col.label} className={`p-7 flex flex-col ${col.featured ? "bg-[#EFE6D4] border-t-2 border-t-[#B89968]" : "bg-[#FAF7F1] border-t-2 border-t-[#DCD9D2]"}`}>
              {col.badge && (
                <span className="inline-block bg-[#B89968] text-[#0F3D6A] text-[10px] font-medium tracking-[0.12em] uppercase px-3 py-1 mb-4 self-start">
                  {col.badge}
                </span>
              )}
              <div className={`text-[10px] tracking-[0.14em] uppercase mb-2 ${col.featured ? "text-[#B89968]" : "text-[#7A8FA6]"}`}>{col.label}</div>
              <div className="font-display text-lg font-light text-[#0F3D6A] mb-6 leading-[1.3]">{col.name}</div>
              <ul className="flex flex-col gap-2.5 flex-1">
                {col.items.map((item) => (
                  <li key={item.text} className="flex items-start gap-2.5 text-xs leading-[1.55]">
                    {item.ok
                      ? <Check className="h-3.5 w-3.5 text-[#B89968] flex-shrink-0 mt-0.5" />
                      : <X className="h-3.5 w-3.5 text-[#7A8FA6] flex-shrink-0 mt-0.5" />
                    }
                    <span className={item.ok ? "text-[#3F5673]" : "text-[#7A8FA6]"}>{item.text}</span>
                  </li>
                ))}
              </ul>
              {col.featured && (
                <a href="#contact" className="mt-6 block bg-[#0F3D6A] text-[#FAF7F1] text-[10px] font-medium tracking-[0.14em] uppercase py-3 text-center hover:bg-[#9C7E4F] transition-colors cursor-pointer">
                  Diagnostic gratuit
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Credential chips */}
        <div className="flex flex-wrap gap-2 mt-6">
          {badges.map((b) => (
            <span key={b.text} className="text-[11px] text-[#3F5673] border border-[#DCD9D2] px-3 py-1.5 bg-white">{b.text}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
