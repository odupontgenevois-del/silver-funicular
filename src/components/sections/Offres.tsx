import { Check, ArrowRight, Zap } from "lucide-react";

const offres = [
  {
    label: "Diagnostic",
    titre: "Audit RH",
    sub: "Pour clarifier votre situation avant de prendre une décision.",
    items: ["Audit social et organisationnel", "Identification des risques", "Cartographie des compétences critiques", "Restitution avec plan d'action priorisé"],
    cta: "Demander un devis",
    featured: false,
  },
  {
    label: "Le plus demandé",
    titre: "Mission récurrente",
    sub: "DRH à temps partagé. Présence régulière. Pilotage complet. Reporting DG.",
    items: ["Présence sur site (fréquence adaptée)", "Pilotage RH complet ou ciblé", "Relations sociales et IRP", "Conformité et obligations légales", "Développement talents et management", "Reporting CODIR"],
    cta: "Réserver un diagnostic gratuit",
    featured: true,
  },
  {
    label: "Mission ponctuelle",
    titre: "Accompagnement projet",
    sub: "Pour une transformation délimitée dans le temps.",
    items: ["Post-acquisition ou intégration", "Négociation accord collectif", "Structuration fonction RH", "Déploiement SIRH", "Harmonisation multi-sites"],
    cta: "Demander un devis",
    featured: false,
  },
];

export function Offres() {
  return (
    <section id="tarifs" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C1B2E] via-[#0E1F35] to-[#0C1B2E] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-[#C4A46B]" />
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C4A46B]">Modalités d'intervention</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-[#EDE9E3] leading-[1.12]">
            Trois façons de travailler{" "}
            <em className="text-[#C4A46B]">ensemble.</em>
          </h2>
        </div>

        {/* Context note */}
        <div className="glass-copper rounded-xl px-6 py-4 mb-10 max-w-3xl">
          <p className="text-xs text-[#9AABB8] leading-[1.8]">
            <strong className="text-[#EDE9E3] font-medium">Repère :</strong> un DRH en CDI représente entre 80 000 et 120 000 € de coût total annuel, charges comprises, hors période de recrutement de 3 à 6 mois. Une mission à temps partagé se calibre sur votre besoin réel, sans coût fixe subi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {offres.map((o) => (
            <div key={o.titre}
              className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                o.featured
                  ? "bg-gradient-to-b from-[#C4A46B]/15 to-[#C4A46B]/5 border border-[#C4A46B]/30"
                  : "glass hover:bg-white/6"
              }`}>

              {o.featured && (
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C4A46B] to-transparent" />
              )}

              <div className="p-6 flex-1 flex flex-col">
                {o.featured ? (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C4A46B] self-start mb-4">
                    <Zap className="h-2.5 w-2.5 text-[#0C1B2E]" />
                    <span className="text-[9px] font-bold text-[#0C1B2E] tracking-wide uppercase">{o.label}</span>
                  </div>
                ) : (
                  <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-[#C4A46B]/60 mb-4">{o.label}</div>
                )}

                <h3 className={`font-display text-2xl font-light mb-2 ${o.featured ? "text-[#EDE9E3]" : "text-[#EDE9E3]"}`}>{o.titre}</h3>
                <p className="text-xs text-[#9AABB8] leading-[1.65] mb-6">{o.sub}</p>

                <ul className="flex flex-col gap-2.5 flex-1 mb-7">
                  {o.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-[#9AABB8] leading-[1.5]">
                      <Check className={`h-3.5 w-3.5 flex-shrink-0 mt-0.5 ${o.featured ? "text-[#C4A46B]" : "text-[#C4A46B]/50"}`} />
                      {item}
                    </li>
                  ))}
                </ul>

                <a href="#contact"
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    o.featured
                      ? "bg-[#C4A46B] text-[#0C1B2E] hover:bg-[#D4B47B] hover:shadow-lg hover:shadow-[#C4A46B]/25"
                      : "glass border border-white/10 text-[#EDE9E3] hover:bg-white/8"
                  }`}>
                  {o.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#9AABB8]/60 text-center mt-6">
          Tous les montants sont définis sur devis après diagnostic. Votre contexte détermine la formule et son dimensionnement.
        </p>

        {/* Scarcity */}
        <div className="mt-6 glass-copper rounded-2xl px-7 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-sm font-semibold text-[#EDE9E3] mb-0.5">2 créneaux disponibles pour juillet 2026.</p>
            <p className="text-xs text-[#9AABB8]">Les missions sont limitées pour garantir la qualité d'engagement sur chaque dossier.</p>
          </div>
          <a href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C4A46B] text-[#0C1B2E] text-xs font-semibold tracking-wide hover:bg-[#D4B47B] transition-colors cursor-pointer whitespace-nowrap">
            Réserver mon diagnostic
          </a>
        </div>
      </div>
    </section>
  );
}
