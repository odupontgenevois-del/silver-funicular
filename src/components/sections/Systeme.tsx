const etapes = [
  {
    num: "01",
    duree: "Jour 1",
    titre: "Cadrage stratégique",
    desc: "On définit ensemble votre positionnement, votre message central et vos 20 sujets vidéo. Votre expertise devient une ligne éditoriale claire et cohérente.",
    detail: "2h d'échange stratégique",
  },
  {
    num: "02",
    duree: "Jour 2",
    titre: "Tournage guidé",
    desc: "2h de captation. Je gère le cadre, la lumière, le son. Vous vous concentrez uniquement sur votre message. On tourne 20 vidéos en une session.",
    detail: "20 vidéos en 2h chrono",
  },
  {
    num: "03",
    duree: "Semaine 1–2",
    titre: "Montage & post-production",
    desc: "Montage professionnel, sous-titres, habillage graphique aligné à votre image. Chaque vidéo est optimisée pour le format LinkedIn natif.",
    detail: "20 vidéos livrées, montées, prêtes",
  },
  {
    num: "04",
    duree: "Mois 1–2",
    titre: "Diffusion stratégique",
    desc: "Plan de publication sur 2 mois. Calendrier éditorial, horaires optimaux, accroches testées. Votre contenu travaille pour vous, même quand vous dormez.",
    detail: "2 mois de visibilité pilotée",
  },
  {
    num: "05",
    duree: "Dès le mois 2",
    titre: "Résultats mesurables",
    desc: "Demandes entrantes, conversations qualifiées, autorité installée. Le système tourne — vous recevez des opportunités au lieu d'en chercher.",
    detail: "3× plus de prospects en 90j",
  },
];

export function Systeme() {
  return (
    <section id="systeme" className="py-24 bg-[#FAF7F2]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16">
          <p className="text-[#E8622A] text-sm font-semibold uppercase tracking-widest mb-4">Le système</p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#1A3D2B] max-w-2xl leading-tight">
            Un processus clair. Un résultat prévisible.
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] md:left-[47px] top-0 bottom-0 w-px bg-[#E8E2D9]" />

          <div className="space-y-6">
            {etapes.map((e, i) => (
              <div key={e.num} className="relative flex gap-6 md:gap-10 group">
                {/* Step circle */}
                <div className="relative flex-shrink-0 w-12 h-12 md:w-24 md:h-24 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 group-hover:scale-110 ${i === 0 ? "bg-[#E8622A] border-[#E8622A]" : "bg-[#FAF7F2] border-[#E8E2D9] group-hover:border-[#1A3D2B]"}`}>
                    <span className={`text-sm font-bold ${i === 0 ? "text-white" : "text-[#1A3D2B]"}`}>{e.num}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-6 group-hover:translate-x-1 transition-transform duration-200">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-[#1A3D2B]">{e.titre}</h3>
                    <span className="px-3 py-1 rounded-full bg-[#1A3D2B]/8 text-[#1A3D2B] text-xs font-medium">{e.duree}</span>
                  </div>
                  <p className="text-[#6B6560] leading-relaxed mb-3">{e.desc}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8622A]">
                    <div className="h-px w-4 bg-[#E8622A]" />
                    {e.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
