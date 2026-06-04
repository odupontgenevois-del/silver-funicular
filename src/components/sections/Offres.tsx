import { ArrowRight } from "lucide-react";

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
    badge: true,
    titre: "Mission récurrente",
    sub: "DRH à temps partagé · Présence régulière. Pilotage complet. Reporting DG.",
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
    <section id="tarifs" className="py-16 sm:py-24 border-t border-[#DCD9D2]">
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-7 h-px bg-[#B89968]" />
          <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#B89968]">Modalités d'intervention</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-light text-[#0F3D6A] mb-2 leading-[1.18]">
          Trois façons de travailler ensemble.
        </h2>

        {/* Anchor */}
        <div className="border-l-2 border-[#B89968] pl-4 py-2 bg-[#EFE6D4] mb-10 mt-6">
          <p className="text-xs text-[#3F5673] leading-[1.7]">
            <strong className="text-[#0F3D6A] font-medium">Repère :</strong> un DRH en CDI représente entre 80 000 et 120 000 euros de coût total annuel, charges comprises, hors période de recrutement de 3 à 6 mois. Une mission à temps partagé se calibre sur votre besoin réel, sans coût fixe subi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[#DCD9D2]">
          {offres.map((o) => (
            <div key={o.titre} className={`flex flex-col p-7 ${o.featured ? "bg-[#0F3D6A]" : "bg-[#FAF7F1]"}`}>
              {o.badge && (
                <span className="inline-block bg-[#B89968] text-[#0F3D6A] text-[10px] font-medium tracking-[0.12em] uppercase px-3 py-1 mb-4 self-start">
                  {o.label}
                </span>
              )}
              {!o.badge && (
                <div className={`text-[10px] tracking-[0.14em] uppercase mb-4 ${o.featured ? "text-[#B89968]" : "text-[#7A8FA6]"}`}>{o.label}</div>
              )}
              <div className={`font-display text-xl font-light mb-1 ${o.featured ? "text-[#FAF7F1]" : "text-[#0F3D6A]"}`}>{o.titre}</div>
              <div className={`text-xs mb-6 leading-[1.6] ${o.featured ? "text-[#EFE6D4]/60" : "text-[#7A8FA6]"}`}>{o.sub}</div>
              <ul className="flex flex-col gap-2 flex-1 mb-7">
                {o.items.map((item) => (
                  <li key={item} className={`text-xs leading-[1.5] flex items-start gap-2 ${o.featured ? "text-[#EFE6D4]/75" : "text-[#3F5673]"}`}>
                    <span className="text-[#B89968] flex-shrink-0 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`text-center text-[10px] font-medium tracking-[0.12em] uppercase py-3 transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                o.featured
                  ? "bg-[#B89968] text-[#0F3D6A] hover:bg-[#9C7E4F]"
                  : "border border-[#DCD9D2] text-[#0F3D6A] hover:bg-[#0F3D6A] hover:text-[#FAF7F1] hover:border-[#0F3D6A]"
              }`}>
                {o.cta}
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#7A8FA6] text-center mt-5 leading-[1.65]">
          Tous les montants sont définis sur devis après diagnostic. Votre contexte détermine la formule et son dimensionnement.
        </p>

        {/* Scarcity bar */}
        <div className="bg-[#B89968] px-6 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
          <p className="font-display text-base text-[#0F3D6A] leading-[1.4]">
            <strong>2 créneaux disponibles</strong> pour une mission démarrant en juillet 2026.
            <br /><span className="font-light text-sm">Les missions sont limitées pour garantir la qualité d'engagement sur chaque dossier.</span>
          </p>
          <a href="#contact" className="flex-shrink-0 bg-[#0F3D6A] text-[#FAF7F1] text-[10px] font-medium tracking-[0.12em] uppercase px-5 py-3 hover:opacity-85 transition-opacity cursor-pointer whitespace-nowrap">
            Réserver mon diagnostic
          </a>
        </div>
      </div>
    </section>
  );
}
