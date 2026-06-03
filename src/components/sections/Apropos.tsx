const parcours = [
  { annee: "1992", titre: "BTS Communication & Actions Publicitaires", lieu: "École de Commerce, Caen" },
  { annee: "2001–2019", titre: "Chef de Publicité — Logic-immo.com", lieu: "17 ans · Solutions 360° pour l'immobilier" },
  { annee: "2015–2017", titre: "Master Marketing Digital", lieu: "ESG Executive Education" },
  { annee: "2019–2021", titre: "Chef de Publicité — Groupe SeLoger", lieu: "Communication omnicanal & webmarketing" },
  { annee: "2021", titre: "Fondation de Human Digitalis", lieu: "Expert Vidéo LinkedIn · Versailles" },
  { annee: "Aujourd'hui", titre: "+50 experts B2B accompagnés", lieu: "Coachs, consultants, dirigeants" },
];

const resultats = [
  { value: "3×", label: "plus de prospects en 90 jours" },
  { value: "−80%", label: "de prospection à froid" },
  { value: "+50", label: "experts accompagnés" },
  { value: "20", label: "vidéos en 2h de tournage" },
];

export function Apropos() {
  return (
    <section id="apropos" className="py-24 bg-[#FAF7F2]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <div>
            <p className="text-[#E8622A] text-sm font-semibold uppercase tracking-widest mb-6">À propos</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#1A3D2B] mb-8 leading-tight">
              Olivier Dupont
            </h2>

            <div className="space-y-4 text-[#6B6560] leading-relaxed mb-10">
              <p>
                Après <strong className="text-[#2C2C2C]">+30 ans au cœur de la communication</strong> — dont 17 ans à développer des solutions digitales pour les professionnels de l'immobilier chez Logic-immo.com et SeLoger — j'ai fondé Human Digitalis avec une conviction simple :
              </p>
              <p className="text-lg text-[#2C2C2C] font-medium border-l-4 border-[#E8622A] pl-5">
                "Votre expertise est précieuse. Tant qu'elle reste invisible, elle n'apporte ni influence, ni clients."
              </p>
              <p>
                J'ai conçu un système clair et duplicable pour transformer la vidéo LinkedIn en actif stratégique. Pas d'improvisation. Une méthode éprouvée auprès de <strong className="text-[#2C2C2C]">+50 coachs, consultants et experts B2B</strong>.
              </p>
            </div>

            {/* Résultats */}
            <div className="grid grid-cols-2 gap-4">
              {resultats.map((r) => (
                <div key={r.label} className="p-5 rounded-2xl bg-white border border-[#E8E2D9]">
                  <div className="font-display text-3xl text-[#E8622A] mb-1">{r.value}</div>
                  <div className="text-sm text-[#6B6560]">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — timeline */}
          <div>
            <p className="text-sm font-semibold text-[#6B6560] uppercase tracking-widest mb-8">Parcours</p>
            <div className="relative space-y-0">
              {parcours.map((p, i) => (
                <div key={i} className="relative flex gap-5 pb-8 last:pb-0 group">
                  {/* Line */}
                  {i < parcours.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-[#E8E2D9]" />
                  )}
                  {/* Dot */}
                  <div className={`relative flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center mt-0.5 transition-all duration-200 group-hover:scale-110 ${i === parcours.length - 1 ? "bg-[#1A3D2B] border-[#1A3D2B]" : "bg-white border-[#E8E2D9]"}`}>
                    <div className={`w-2 h-2 rounded-full ${i === parcours.length - 1 ? "bg-white" : "bg-[#E8622A]"}`} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#E8622A] uppercase tracking-wide">{p.annee}</span>
                    <h4 className="font-semibold text-[#1A3D2B] mt-0.5">{p.titre}</h4>
                    <p className="text-sm text-[#6B6560] mt-0.5">{p.lieu}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
