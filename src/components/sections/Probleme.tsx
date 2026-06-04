const pains = [
  { titre: "Vous venez de racheter une société", desc: "Les pratiques RH divergent, les équipes attendent. Personne ne pilote l'harmonisation.", cout: "Coût réel : retard d'intégration de 12 à 18 mois en moyenne." },
  { titre: "Votre turnover s'accélère", desc: "Sur les profils que vous ne pouvez pas vous permettre de perdre. Et vous ne savez pas vraiment pourquoi.", cout: "Coût réel : 6 à 18 mois de salaire brut par départ cadre non anticipé." },
  { titre: "Le climat social se tend", desc: "Vous n'avez pas d'interlocuteur capable de tenir les IRP et de lire les signaux avant qu'ils deviennent des incidents.", cout: "Coût réel : un conflit mal géré peut paralyser un site pendant des semaines." },
  { titre: "Vos obligations sociales vous exposent", desc: "Conformité, DPO, risques URSSAF. Vous découvrez vos expositions après coup.", cout: "Coût réel : un redressement ou un contentieux prud'homal mal anticipé." },
  { titre: "Vous gérez les RH en direct", desc: "Depuis trop longtemps. Ça mobilise votre attention sur des décisions qui ne sont pas les vôtres à prendre.", cout: "Coût réel : attention dirigeante sur des tâches à faible valeur stratégique." },
  { titre: "Vos recrutements critiques traînent", desc: "Sans process structuré, les postes restent ouverts trop longtemps. Les erreurs de casting coûtent cher.", cout: "Coût réel : 1 à 3 fois le salaire annuel du poste pour un recrutement raté." },
];

export function Probleme() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-7 h-px bg-[#B89968]" />
          <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#B89968]">Reconnaissez-vous votre situation ?</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-light text-[#0F3D6A] leading-[1.18] mb-2">
          Les signaux qui coûtent chaque mois qu'ils durent.
        </h2>
        <p className="text-sm text-[#7A8FA6] mb-10 max-w-lg">Chaque point ci-dessous a un coût réel, souvent sous-estimé jusqu'à ce qu'il soit trop tard.</p>

        <div className="grid sm:grid-cols-2 gap-px bg-[#DCD9D2]">
          {pains.map((p) => (
            <div key={p.titre} className="bg-[#FAF7F1] p-6 hover:bg-[#EFE6D4] transition-colors duration-200 group">
              <div className="flex gap-3 mb-2">
                <div className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[9px] font-bold text-red-700">✕</span>
                </div>
                <h3 className="text-sm font-medium text-[#0F3D6A]">{p.titre}</h3>
              </div>
              <p className="text-xs text-[#3F5673] leading-[1.65] ml-8 mb-2">{p.desc}</p>
              <p className="text-[11px] text-red-700/70 italic ml-8">{p.cout}</p>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="bg-[#0F3D6A] px-6 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-px">
          <p className="font-display text-base italic text-[#EFE6D4] leading-[1.45]">
            "Ces signaux ne se résolvent pas seuls. Chaque mois qu'ils durent, ils coûtent davantage."
          </p>
          <a href="#contact" className="flex-shrink-0 bg-[#B89968] text-[#0F3D6A] text-[10px] font-medium tracking-[0.12em] uppercase px-5 py-3 hover:opacity-85 transition-opacity cursor-pointer whitespace-nowrap">
            En parler maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
