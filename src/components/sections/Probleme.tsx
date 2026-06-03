const situations = [
  "Vous publiez régulièrement sur LinkedIn… mais sans vrais résultats.",
  "Vous êtes compétent, crédible — mais rarement l'évidence pour vos prospects.",
  "Vous prospectez à froid alors que vos concurrents reçoivent des demandes entrantes.",
];

export function Probleme() {
  return (
    <section className="py-24 bg-[#1A3D2B]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-[#E8622A] text-sm font-semibold uppercase tracking-widest mb-6">Le constat</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-10 leading-tight">
            Chaque mois où vous restez discret, d'autres occupent l'espace.
          </h2>

          <div className="space-y-4 mb-12">
            {situations.map((s, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#E8622A] flex items-center justify-center mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#E8622A]" />
                </div>
                <p className="text-white/80 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-[#E8622A]/10 border border-[#E8622A]/30">
            <p className="text-white text-lg leading-relaxed">
              Le marché ne choisit pas le plus compétent.{" "}
              <strong className="text-[#E8622A]">Il choisit le plus identifiable.</strong>{" "}
              LinkedIn n'est pas un réseau social — c'est un levier d'influence B2B. Et l'influence se structure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
