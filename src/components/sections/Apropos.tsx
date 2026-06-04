const chips = ["Post-acquisition", "Retournement", "Multi-sites · 4 CCN", "Relations sociales complexes", "Talent management international", "SIRH · DPO · Conformité"];

const resultats = [
  { value: "-25", unite: "%", label: "Turnover postes clés", source: "Camfil · 2017–2023" },
  { value: "-30", unite: "%", label: "Time-to-fill postes critiques", source: "Camfil · 2017–2023" },
  { value: "4", unite: " CCN", label: "Sites harmonisés", source: "Camfil · 2018–2019" },
  { value: "15", unite: " pays", label: "Talent management", source: "EMEA · 2014–2021" },
];

export function Apropos() {
  return (
    <section id="profil" className="py-16 sm:py-24 bg-[#EFE6D4] border-t border-b border-[#DCD9D2]">
      <div className="mx-auto max-w-5xl px-5">
        <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-20 items-start">
          {/* Left — photo placeholder + badges */}
          <div className="flex flex-col gap-0">
            <div className="w-full aspect-[3/4] bg-[#DCD9D2] border-t-2 border-t-[#B89968] overflow-hidden flex items-center justify-center">
              <span className="text-[#7A8FA6] text-sm">Photo Agnès Genevois</span>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <span className="bg-[#B89968] text-[#0F3D6A] text-[10px] font-medium tracking-[0.1em] uppercase py-1.5 px-3 text-center">Prix ONU · NY 2019</span>
              <span className="bg-[#0F3D6A] text-[#EFE6D4] text-[10px] font-medium tracking-[0.1em] uppercase py-1.5 px-3 text-center">Mastère HEC Paris</span>
              <span className="border border-[#DCD9D2] text-[#7A8FA6] text-[10px] tracking-[0.1em] uppercase py-1.5 px-3 text-center">20 ans · Industrie & ETI</span>
            </div>
          </div>

          {/* Right — story */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-px bg-[#B89968]" />
              <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#B89968]">Mon parcours</span>
            </div>
            <div className="font-display text-2xl sm:text-3xl font-light text-[#0F3D6A] mb-1">Agnès Genevois</div>
            <div className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#B89968] mb-8">DRH à temps partagé · Fondatrice Artémis RH Consulting</div>

            <div className="flex flex-col gap-5">
              <p className="font-display text-xl sm:text-2xl font-light italic text-[#0F3D6A] leading-[1.55]">
                J'ai passé vingt ans dans des situations où une mauvaise décision RH pouvait coûter une entreprise. <em className="text-[#B89968]">Ce n'est pas une façon de parler.</em>
              </p>
              <p className="text-sm text-[#3F5673] leading-[1.9]">
                Fusions où les équipes se regardaient en chiens de faïence. Retournements où le collectif tenait à un fil. Acquisitions à l'international où trois cultures coexistaient sans se comprendre. Crises sociales où chaque mot engageait l'avenir de centaines de personnes.
              </p>
              <div className="border-l-2 border-[#B89968] pl-5 py-2 bg-white">
                <p className="font-display text-base italic text-[#0F3D6A] leading-[1.6]">
                  Ce niveau d'exposition forge quelque chose qu'aucune formation ne donne : la capacité à lire une organisation en quelques semaines, à déceler ce qui va craquer avant que ça casse, et à agir avec le sang-froid que la situation exige <em className="text-[#B89968]">sans perdre les gens en route.</em>
                </p>
              </div>
              <p className="text-sm text-[#3F5673] leading-[1.9]">
                J'ai piloté des politiques RH sur 15 pays simultanément, harmonisé des conventions collectives après des fusions complexes. En 2019, <strong className="text-[#0F3D6A] font-medium">les Nations Unies ont reconnu ce travail à New York.</strong> Ce n'est pas une récompense de notoriété — c'est la preuve qu'une politique RH ambitieuse produit des résultats visibles à l'échelle internationale.
              </p>

              <div className="flex flex-wrap gap-2">
                {chips.map((c) => (
                  <span key={c} className="text-[11px] text-[#3F5673] border border-[#DCD9D2] px-3 py-1 bg-white">{c}</span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#contact" className="bg-[#0F3D6A] text-[#FAF7F1] text-[10px] font-medium tracking-[0.14em] uppercase px-5 py-3 hover:bg-[#9C7E4F] transition-colors cursor-pointer">
                  Parlons de votre situation
                </a>
                <a href="#resultats" className="text-xs text-[#B89968] border-b border-[#B89968] hover:text-[#9C7E4F] transition-colors cursor-pointer">
                  Voir les résultats mesurés
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Objections */}
        <div id="objections" className="mt-16 bg-[#0F3D6A] p-8 sm:p-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#B89968]" />
            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#B89968]">Ce que les dirigeants demandent avant de décider</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-light text-[#FAF7F1] mb-2">Trois questions. Trois réponses directes.</h3>
          <p className="text-xs text-[#7A8FA6] mb-8">Sans détour.</p>

          <div className="flex flex-col gap-4">
            {[
              { q: "Objection 01", titre: '"Une experte à temps partagé ne connaîtra jamais mon entreprise aussi bien qu\'un interne."', rep: "C'est vrai les 3 premières semaines. Faux ensuite. La valeur ne vient pas de la connaissance de vos process internes. Elle vient de la capacité à lire rapidement une situation et à agir sans biais politique." },
              { q: "Objection 02", titre: '"Ce n\'est pas le bon moment, nous avons d\'autres priorités."', rep: "Les entreprises qui reportent la structuration RH la paient deux fois : en turnover non maîtrisé, puis en recrutement d'urgence. Un diagnostic de 30 minutes permet de qualifier si l'intervention est urgente ou peut attendre. Gratuit, sans engagement." },
              { q: "Objection 03", titre: '"Je ne suis pas sûr que mon budget me le permette."', rep: "Un départ cadre non anticipé coûte entre 6 et 18 mois de salaire brut. La question n'est pas le coût de l'intervention. C'est le coût de son absence." },
            ].map((o) => (
              <div key={o.q} className="bg-white/4 border-l-2 border-[#B89968] px-5 py-4 hover:bg-white/7 transition-colors">
                <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#B89968] mb-2">{o.q}</div>
                <div className="text-sm font-medium text-[#EFE6D4] mb-2 italic">{o.titre}</div>
                <p className="text-xs text-[#EFE6D4]/75 leading-[1.8]">{o.rep}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Résultats */}
        <div id="resultats" className="mt-6 grid sm:grid-cols-4 gap-px bg-[#DCD9D2]">
          {resultats.map((r) => (
            <div key={r.label} className="bg-[#FAF7F1] p-6 text-center">
              <div className="font-display text-4xl font-light text-[#0F3D6A] leading-none">
                {r.value}<span className="text-[#B89968] text-2xl">{r.unite}</span>
              </div>
              <div className="text-xs text-[#7A8FA6] mt-2 leading-[1.5]">{r.label}</div>
              <div className="text-[10px] text-[#7A8FA6] mt-1 italic opacity-70">{r.source}</div>
            </div>
          ))}
        </div>

        {/* Award */}
        <div className="bg-[#0F3D6A] px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-px">
          <div className="font-display text-5xl font-light text-[#B89968] leading-none flex-shrink-0">2019</div>
          <div>
            <div className="font-display text-lg font-light text-[#FAF7F1] mb-1">Prix des Nations Unies · New York</div>
            <p className="text-xs text-[#7A8FA6] leading-[1.65]">Engagement diversité femmes/industrie et inclusion des jeunes. Politique certifiée GEEIS dans 17 pays sur 3 continents.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
