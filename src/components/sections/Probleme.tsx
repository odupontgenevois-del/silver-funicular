const pains = [
  { titre: "Vous venez de racheter une société", desc: "Les pratiques RH divergent, les équipes attendent. Personne ne pilote l'harmonisation.", cout: "Retard d'intégration : 12 à 18 mois en moyenne" },
  { titre: "Votre turnover s'accélère", desc: "Sur les profils que vous ne pouvez pas vous permettre de perdre. Et vous ne savez pas vraiment pourquoi.", cout: "6 à 18 mois de salaire brut par départ cadre" },
  { titre: "Le climat social se tend", desc: "Pas d'interlocuteur capable de tenir les IRP et lire les signaux avant qu'ils deviennent des incidents.", cout: "Un conflit peut paralyser un site des semaines" },
  { titre: "Vos obligations sociales vous exposent", desc: "Conformité, DPO, risques URSSAF. Vous découvrez vos expositions après coup.", cout: "Redressement ou contentieux prud'homal non anticipé" },
  { titre: "Vous gérez les RH en direct", desc: "Depuis trop longtemps. Ça mobilise votre attention sur des décisions qui ne sont pas les vôtres.", cout: "Attention dirigeante sur des tâches à faible valeur" },
  { titre: "Vos recrutements critiques traînent", desc: "Sans process structuré, les postes restent ouverts trop longtemps. Les erreurs coûtent cher.", cout: "1 à 3× le salaire annuel pour un recrutement raté" },
];

export function Probleme() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C1B2E] via-[#0E1F35] to-[#0C1B2E] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-[#C4A46B]" />
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C4A46B]">Reconnaissez-vous votre situation ?</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-[#EDE9E3] leading-[1.12] mb-3">
            Les signaux qui coûtent{" "}
            <em className="text-[#C4A46B]">chaque mois</em> qu'ils durent.
          </h2>
          <p className="text-sm text-[#9AABB8]">Chaque point a un coût réel, souvent sous-estimé jusqu'à ce qu'il soit trop tard.</p>
        </div>

        {/* Pain grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pains.map((p, i) => (
            <div key={p.titre}
              className="group glass rounded-2xl p-6 hover:bg-white/6 hover:border-[#C4A46B]/20 hover:-translate-y-1 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                <div className="w-2 h-2 rounded-full bg-red-400" />
              </div>
              <h3 className="text-sm font-semibold text-[#EDE9E3] mb-2 group-hover:text-white transition-colors">{p.titre}</h3>
              <p className="text-xs text-[#9AABB8] leading-[1.7] mb-4">{p.desc}</p>
              <div className="pt-3 border-t border-white/7">
                <span className="text-[10px] text-red-400/80 italic">{p.cout}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-8 glass-copper rounded-2xl px-7 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="font-display text-lg italic text-[#EDE9E3] leading-[1.4]">
            "Ces signaux ne se résolvent pas seuls. Chaque mois qu'ils durent, ils coûtent davantage."
          </p>
          <a href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C4A46B] text-[#0C1B2E] text-xs font-semibold tracking-wide hover:bg-[#D4B47B] transition-colors cursor-pointer whitespace-nowrap">
            En parler maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
