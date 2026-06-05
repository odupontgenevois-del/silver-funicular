import Image from "next/image";

const stats = [
  { value: "−25%", label: "Turnover postes clés", source: "Camfil 2017–2023" },
  { value: "−30%", label: "Time-to-fill", source: "Camfil 2017–2023" },
  { value: "4 CCN", label: "Sites harmonisés", source: "Camfil 2018–2019" },
  { value: "15", label: "Pays gérés simultanément", source: "EMEA 2014–2021" },
];

const chips = ["Post-acquisition", "Retournement", "Multi-sites · 4 CCN", "Relations sociales", "Talent management", "SIRH · DPO"];

const objections = [
  {
    q: '"Une experte à temps partagé ne connaîtra jamais mon entreprise aussi bien qu\'un interne."',
    r: "C'est vrai les 3 premières semaines. Faux ensuite. La valeur vient de la capacité à lire rapidement une situation et à agir sans biais politique — pas de la connaissance des process internes.",
  },
  {
    q: '"Ce n\'est pas le bon moment, nous avons d\'autres priorités."',
    r: "Les entreprises qui reportent la structuration RH la paient deux fois : en turnover non maîtrisé, puis en recrutement d'urgence. Un diagnostic de 30 minutes permet de qualifier si c'est urgent ou non.",
  },
  {
    q: '"Je ne suis pas sûr que mon budget me le permette."',
    r: "Un départ cadre non anticipé coûte entre 6 et 18 mois de salaire brut. La question n'est pas le coût de l'intervention. C'est le coût de son absence.",
  },
];

export function Apropos() {
  return (
    <section id="profil" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[#0E1F35]/50 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Profile header */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-[#C4A46B]" />
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-[#C4A46B]">Mon parcours</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-[#EDE9E3] mb-2">Agnès Genevois</h2>
            <p className="text-lg font-medium tracking-[0.14em] uppercase text-[#C4A46B] mb-10">DRH à temps partagé · Fondatrice Artémis RH Consulting</p>

            <div className="space-y-5 text-lg text-[#9AABB8] leading-[1.9]">
              <p className="font-display text-xl italic text-[#EDE9E3] leading-[1.5]">
                J'ai passé vingt ans dans des situations où une mauvaise décision RH pouvait coûter une entreprise.{" "}
                <em className="text-[#C4A46B]">Ce n'est pas une façon de parler.</em>
              </p>
              <p>Fusions, retournements, acquisitions à l'international, crises sociales. J'ai traversé tout ça en tant que DRH opérationnelle, membre de CODIR, responsable de mes décisions devant les dirigeants <strong className="text-[#EDE9E3] font-medium">et devant les équipes.</strong></p>
              <div className="glass-copper rounded-xl px-6 py-4">
                <p className="font-display text-lg italic text-[#EDE9E3] leading-[1.6]">
                  "La capacité à lire une organisation en quelques semaines, à déceler ce qui va craquer avant que ça casse, et à agir avec le sang-froid que la situation exige{" "}
                  <em className="text-[#C4A46B]">sans perdre les gens en route.</em>"
                </p>
              </div>
              <p>En 2019, <strong className="text-[#EDE9E3] font-medium">les Nations Unies ont reconnu ce travail à New York.</strong> Politique certifiée GEEIS dans 17 pays sur 3 continents.</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {chips.map((c) => (
                <span key={c} className="glass text-lg text-[#9AABB8] px-3 py-1.5 rounded-full">{c}</span>
              ))}
            </div>
          </div>

          {/* Photo + stats */}
          <div className="flex flex-col gap-5">
            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80">
              <Image
                src="/photo-dirigeante.jpg"
                alt="Leadership en entreprise — DRH en action"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 576px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1B2E]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className="font-display text-lg italic text-[#EDE9E3]/90 leading-[1.5]">
                  "Lire une organisation avant que ça casse —{" "}
                  <em className="text-[#C4A46B]">c'est ça le métier.</em>"
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((s) => (
                <div key={s.label} className="glass-copper rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-300">
                  <div className="font-display text-3xl font-light text-[#C4A46B] leading-none mb-2">{s.value}</div>
                  <div className="text-lg font-medium text-[#EDE9E3] mb-1">{s.label}</div>
                  <div className="text-sm text-[#9AABB8] italic">{s.source}</div>
                </div>
              ))}
            </div>

            {/* Award */}
            <div className="glass rounded-2xl px-6 py-4 flex items-center gap-5">
              <div className="font-display text-4xl font-light text-[#C4A46B] flex-shrink-0">2019</div>
              <div>
                <div className="text-lg font-semibold text-[#EDE9E3] mb-0.5">Prix des Nations Unies · New York</div>
                <p className="text-lg text-[#9AABB8] leading-[1.6]">Engagement diversité femmes/industrie. 17 pays sur 3 continents.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Objections */}
        <div>
          <div className="inline-flex items-center gap-2 mb-10">
            <div className="h-px w-8 bg-[#C4A46B]" />
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-[#C4A46B]">Ce que les dirigeants demandent avant de décider</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {objections.map((o, i) => (
              <div key={i} className="glass rounded-2xl p-7 hover:bg-white/6 hover:border-[#C4A46B]/15 transition-all duration-300">
                <div className="text-sm font-medium tracking-[0.1em] uppercase text-[#C4A46B] mb-3">Objection 0{i + 1}</div>
                <p className="text-lg text-[#EDE9E3] italic mb-4 leading-[1.6]">{o.q}</p>
                <p className="text-lg text-[#9AABB8] leading-[1.8]">{o.r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
