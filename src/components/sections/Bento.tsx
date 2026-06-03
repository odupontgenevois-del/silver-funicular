import { Video, Link, Target, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: Video,
    title: "Pourquoi la vidéo ?",
    body: "La vidéo génère 5× plus d'engagement que le texte sur LinkedIn. Elle humanise votre expertise, installe la confiance avant même le premier rendez-vous.",
    size: "md:col-span-2 md:row-span-1",
    bg: "bg-[#1A3D2B]",
    text: "text-white",
    muted: "text-white/60",
    iconBg: "bg-white/10 text-white",
  },
  {
    icon: Link,
    title: "Pourquoi LinkedIn ?",
    body: "4 décideurs B2B sur 5 sont actifs sur LinkedIn. C'est le seul réseau où votre contenu touche directement vos prospects idéaux — sans publicité.",
    size: "md:col-span-1 md:row-span-1",
    bg: "bg-[#FAF7F2]",
    text: "text-[#1A3D2B]",
    muted: "text-[#6B6560]",
    iconBg: "bg-[#1A3D2B]/10 text-[#1A3D2B]",
  },
  {
    icon: Target,
    title: "Pourquoi maintenant ?",
    body: "Le reach organique vidéo LinkedIn est au sommet. Dans 18 mois, il sera aussi saturé qu'Instagram. Les premiers à structurer leur présence raflent les opportunités.",
    size: "md:col-span-1 md:row-span-1",
    bg: "bg-[#E8622A]",
    text: "text-white",
    muted: "text-white/70",
    iconBg: "bg-white/20 text-white",
  },
  {
    icon: TrendingUp,
    title: "Pourquoi Olivier Dupont ?",
    body: "+30 ans au cœur de la communication. Chef Pub chez SeLoger et Logic Immo (17 ans). +50 experts B2B accompagnés. Un système éprouvé, pas une promesse.",
    size: "md:col-span-2 md:row-span-1",
    bg: "bg-[#FAF7F2]",
    text: "text-[#1A3D2B]",
    muted: "text-[#6B6560]",
    iconBg: "bg-[#E8622A]/10 text-[#E8622A]",
  },
];

export function Bento() {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14">
          <p className="text-[#E8622A] text-sm font-semibold uppercase tracking-widest mb-4">Pourquoi ça marche</p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#1A3D2B] max-w-xl leading-tight">
            4 raisons que personne ne conteste.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`${card.size} ${card.bg} rounded-2xl p-7 flex flex-col justify-between border border-[#E8E2D9] hover:scale-[1.01] transition-transform duration-200`}
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${card.iconBg}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg mb-2 ${card.text}`}>{card.title}</h3>
                  <p className={`text-sm leading-relaxed ${card.muted}`}>{card.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
