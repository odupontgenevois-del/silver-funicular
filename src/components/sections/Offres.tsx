import { ArrowRight, Check } from "lucide-react";

const offres = [
  {
    titre: "One-to-One Stratégique",
    accroche: "L'accompagnement le plus personnalisé",
    desc: "Un suivi individuel complet pour installer une présence vidéo cohérente, alignée avec vos objectifs business. Idéal si vous voulez être guidé de A à Z.",
    inclus: [
      "Cadrage stratégique complet",
      "20 vidéos tournées & montées",
      "Plan éditorial 2 mois",
      "Suivi hebdomadaire",
      "Accès WhatsApp direct",
    ],
    cta: "En savoir plus",
    accent: false,
  },
  {
    titre: "Conseil & Production Clé en Main",
    accroche: "Vous parlez. Je m'occupe du reste.",
    desc: "De la conception du script à la diffusion finale. Vous apportez votre expertise, je gère la production professionnelle et la stratégie de contenu.",
    inclus: [
      "Script & storytelling",
      "Tournage guidé (2h)",
      "Montage pro + sous-titres",
      "Calendrier de diffusion",
      "Optimisation LinkedIn",
    ],
    cta: "Réserver ma place",
    accent: true,
    badge: "Le plus populaire",
  },
  {
    titre: "MasterClass Sélective",
    accroche: "Apprenez à produire vous-même",
    desc: "Sessions dynamiques et concrètes pour maîtriser la production vidéo LinkedIn en autonomie. Format groupe restreint pour un apprentissage intensif.",
    inclus: [
      "Méthode complète filmée",
      "Templates scripts prêts",
      "Feedback sur vos vidéos",
      "Accès communauté privée",
      "Replays illimités",
    ],
    cta: "Rejoindre la prochaine",
    accent: false,
  },
];

export function Offres() {
  return (
    <section id="offres" className="py-24 bg-[#1A3D2B]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16">
          <p className="text-[#E8622A] text-sm font-semibold uppercase tracking-widest mb-4">Les offres</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white max-w-xl leading-tight">
            Choisissez votre niveau d'accompagnement.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {offres.map((o) => (
            <div
              key={o.titre}
              className={`relative rounded-2xl p-7 flex flex-col ${o.accent ? "bg-[#E8622A]" : "bg-white/5 border border-white/10"}`}
            >
              {o.badge && (
                <div className="absolute -top-3.5 left-6 px-4 py-1 bg-white text-[#E8622A] text-xs font-bold rounded-full">
                  {o.badge}
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${o.accent ? "text-white/70" : "text-white/40"}`}>
                  {o.accroche}
                </p>
                <h3 className="text-xl font-bold text-white mb-3">{o.titre}</h3>
                <p className={`text-sm leading-relaxed ${o.accent ? "text-white/80" : "text-white/60"}`}>{o.desc}</p>
              </div>

              <ul className="space-y-2.5 flex-1 mb-8">
                {o.inclus.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <Check className={`h-4 w-4 flex-shrink-0 ${o.accent ? "text-white" : "text-[#E8622A]"}`} />
                    <span className={o.accent ? "text-white/90" : "text-white/70"}>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  o.accent
                    ? "bg-white text-[#E8622A] hover:bg-white/90"
                    : "border border-white/30 text-white hover:bg-white/10"
                }`}
              >
                {o.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Offres secondaires */}
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {[
            { titre: "Aimant à Clients", desc: "Structurer vos contenus pour attirer vos prospects idéaux et déclencher des conversations qualifiées sans effort." },
            { titre: "Marque Personnelle", desc: "Clarification de vos messages, positionnement précis et plan d'action pour devenir une référence incontestable dans votre domaine." },
          ].map((o) => (
            <div key={o.titre} className="rounded-2xl p-6 bg-white/5 border border-white/10 flex items-center gap-6">
              <div>
                <h4 className="font-semibold text-white mb-1">{o.titre}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{o.desc}</p>
              </div>
              <a href="#contact" className="flex-shrink-0 p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors cursor-pointer">
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
