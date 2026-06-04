const steps = [
  { n: "I", titre: "Diagnostic 30 min", desc: "Gratuit. Votre situation, vos priorités. Aucune présentation commerciale." },
  { n: "II", titre: "Proposition ciblée", desc: "Si l'intervention a du sens, une proposition adaptée sous 48h." },
  { n: "III", titre: "Démarrage rapide", desc: "Première présence sur site dans la semaine. Disponible immédiatement." },
  { n: "IV", titre: "Points d'étape", desc: "Reporting DG régulier. Résultats mesurés. Ajustements si nécessaire." },
];

export function Systeme() {
  return (
    <section className="py-16 sm:py-24 bg-[#EFE6D4] border-t border-[#DCD9D2]">
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-7 h-px bg-[#B89968]" />
          <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#B89968]">Comment ça se passe</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-light text-[#0F3D6A] mb-2 leading-[1.18]">
          Quatre étapes. De la prise de contact à la{" "}
          <em className="text-[#B89968]">première action.</em>
        </h2>
        <p className="text-sm text-[#7A8FA6] mb-12">Pas de processus de vente long.</p>

        <div className="relative grid sm:grid-cols-4 gap-8">
          {/* Connector line (desktop) */}
          <div className="hidden sm:block absolute top-[1.4rem] left-10 right-10 h-px bg-[#B89968]/25" />
          {steps.map((s) => (
            <div key={s.n} className="text-center relative">
              <div className="w-11 h-11 rounded-full bg-white border border-[#B89968] font-display text-lg text-[#B89968] flex items-center justify-center mx-auto mb-4 relative z-10">
                {s.n}
              </div>
              <div className="text-xs font-medium text-[#0F3D6A] mb-1.5">{s.titre}</div>
              <div className="text-[11px] text-[#7A8FA6] leading-[1.55]">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
