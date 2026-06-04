const steps = [
  { n: "01", titre: "Diagnostic 30 min", desc: "Gratuit. Votre situation, vos priorités. Aucune présentation commerciale.", detail: "Réponse sous 24h" },
  { n: "02", titre: "Proposition ciblée", desc: "Si l'intervention a du sens, une proposition adaptée sous 48h.", detail: "Sous 48h" },
  { n: "03", titre: "Démarrage rapide", desc: "Première présence sur site dans la semaine. Disponible immédiatement.", detail: "< 7 jours" },
  { n: "04", titre: "Points d'étape", desc: "Reporting DG régulier. Résultats mesurés. Ajustements si nécessaire.", detail: "Continu" },
];

export function Systeme() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-[#C4A46B]" />
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C4A46B]">Comment ça se passe</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-[#EDE9E3] leading-[1.12]">
            Quatre étapes. De la prise de contact à la{" "}
            <em className="text-[#C4A46B]">première action.</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s.n}
              className="relative glass rounded-2xl p-6 hover:bg-white/6 hover:-translate-y-1 transition-all duration-300 group">
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-2 w-4 h-px bg-[#C4A46B]/30 z-10" />
              )}
              <div className="font-display text-4xl font-light text-[#C4A46B]/30 group-hover:text-[#C4A46B]/50 transition-colors mb-4">{s.n}</div>
              <h3 className="text-sm font-semibold text-[#EDE9E3] mb-2">{s.titre}</h3>
              <p className="text-xs text-[#9AABB8] leading-[1.7] mb-4">{s.desc}</p>
              <div className="glass-copper rounded-lg px-3 py-1.5 inline-block">
                <span className="text-[10px] text-[#C4A46B] font-medium">{s.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
