const faqs = [
  {
    q: "Quelle est la différence entre une experte à temps partagé et un consultant RH ?",
    r: "Un consultant livre un rapport ou accompagne un projet délimité. Une DRH à temps partagé prend en charge la fonction RH dans sa globalité, avec un rôle opérationnel : elle pilote, décide, représente l'entreprise face aux IRP, et répond au dirigeant comme un interne le ferait. La différence est une différence de posture et de responsabilité, pas seulement de contrat.",
  },
  {
    q: "À partir de quelle taille d'entreprise ça a du sens ?",
    r: "En pratique, les missions les plus pertinentes concernent des entreprises de 30 à 500 personnes qui ont besoin d'une expertise RH solide sans pouvoir ou vouloir recruter à plein temps. En dessous de 30 personnes, un appui ponctuel est souvent suffisant.",
  },
  {
    q: "Combien de jours par mois êtes-vous présente sur site ?",
    r: "Cela dépend de votre contexte. En règle générale, les missions récurrentes représentent entre 2 et 8 jours par mois sur site, complétés par du travail à distance. La fréquence se définit en fonction de la complexité de la situation et de l'étape de la mission.",
  },
  {
    q: "Pouvez-vous intervenir en situation de crise sociale ?",
    r: "Oui. C'est l'un des contextes où un regard extérieur avec une forte expérience des IRP est le plus utile. J'ai géré des situations de crise sociale, des négociations d'accords collectifs dans des contextes tendus, et des restructurations avec impact sur les effectifs.",
  },
  {
    q: "Comment fonctionne la confidentialité ?",
    r: "Tout ce qui est partagé dans le cadre d'une mission est couvert par une obligation de confidentialité contractuelle. Un accord de confidentialité peut être signé avant même le premier diagnostic si vous le souhaitez.",
  },
];

export function Contact() {
  return (
    <>
      {/* Lead magnet */}
      <section className="bg-[#0F3D6A] py-16 border-t border-[#DCD9D2]/20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-px bg-[#B89968]" />
                <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#B89968]">Ressource gratuite</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-light text-[#FAF7F1] leading-[1.25] mb-3">
                7 signaux qui indiquent qu'il est temps d'agir sur votre{" "}
                <em className="text-[#B89968]">fonction RH.</em>
              </h3>
              <p className="text-xs text-[#7A8FA6] leading-[1.75] mb-6">
                Une checklist de diagnostic en 10 minutes. Pour les dirigeants qui veulent qualifier leur situation avant de prendre une décision.
              </p>
              <div className="flex gap-3">
                <input type="email" placeholder="Votre email professionnel" className="flex-1 bg-white/7 border border-white/13 px-4 py-3 text-sm text-[#FAF7F1] placeholder:text-[#7A8FA6] outline-none focus:border-[#B89968] transition-colors font-light" />
                <button className="bg-[#B89968] text-[#0F3D6A] text-[10px] font-medium tracking-[0.12em] uppercase px-5 hover:bg-[#9C7E4F] transition-colors cursor-pointer whitespace-nowrap">
                  Recevoir
                </button>
              </div>
              <p className="text-[10px] text-[#7A8FA6] mt-2">Reçu immédiatement. Pas de séquence commerciale automatique.</p>
            </div>

            <div className="border border-[#B89968]/30 p-6 bg-white/4">
              <div className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#B89968] mb-4">Aperçu · 3 des 7 signaux</div>
              <div className="flex flex-col gap-3">
                {[
                  "Votre turnover sur postes cadres dépasse 15 % sur les 3 dernières années.",
                  "Vous avez eu un redressement URSSAF ou un contentieux prud'homal non anticipé dans les 24 derniers mois.",
                  "Vos postes critiques restent ouverts plus de 60 jours en moyenne.",
                ].map((s, i) => (
                  <div key={i} className="flex gap-3 text-xs text-[#EFE6D4] leading-[1.55]">
                    <span className="font-display text-[#B89968] flex-shrink-0">{i + 1}.</span>
                    {s}
                  </div>
                ))}
                <p className="text-[11px] text-[#7A8FA6] italic">+ 4 autres signaux dans la checklist complète...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="py-16 sm:py-24 border-t border-[#DCD9D2]">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-px bg-[#B89968]" />
                <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#B89968]">Premier contact</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-[#0F3D6A] leading-[1.15] mb-5">
                Votre diagnostic <em className="text-[#B89968]">gratuit.</em>
              </h2>
              <p className="text-sm text-[#3F5673] leading-[1.9] mb-6">
                30 minutes sur votre situation réelle. Pas de présentation commerciale. À l'issue, vous savez si une intervention a du sens et quelle forme elle devrait prendre.
              </p>
              <p className="text-sm text-[#3F5673] leading-[1.9] mb-8">
                Si ce n'est pas le cas, vous repartez avec une lecture claire de votre situation. C'est déjà utile.
              </p>

              <div className="flex flex-col gap-2.5 mb-8">
                {["Réponse sous 24h ouvrées", "Disponible immédiatement pour démarrer", "Sans engagement ni relance commerciale", "Paris et périphérie · déplacements possibles"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-[#3F5673]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B89968] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="bg-[#EFE6D4] p-4 mb-5">
                <div className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#7A8FA6] mb-3">Autres façons de contacter Agnès</div>
                <div className="flex gap-4">
                  <a href="mailto:adgenevois@gmail.com" className="text-xs text-[#B89968] border-b border-[#B89968] hover:text-[#9C7E4F] cursor-pointer">Email direct</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs text-[#B89968] border-b border-[#B89968] hover:text-[#9C7E4F] cursor-pointer">LinkedIn</a>
                </div>
              </div>

              <p className="text-[11px] text-[#7A8FA6] leading-[1.7]">
                Agnès Genevois · Artémis RH Consulting<br />
                <a href="mailto:adgenevois@gmail.com" className="text-[#B89968]">adgenevois@gmail.com</a> · Paris et périphérie
              </p>
            </div>

            {/* Right — form */}
            <div className="bg-[#EFE6D4] p-7 sm:p-9">
              <span className="inline-block bg-[#B89968] text-[#0F3D6A] text-[10px] font-medium tracking-[0.12em] uppercase px-3 py-1 mb-6">
                Diagnostic gratuit · 30 min
              </span>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Prénom et nom", placeholder: "Marc Dupont", type: "text" },
                    { label: "Fonction", placeholder: "Directeur Général", type: "text" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-[10px] font-medium tracking-[0.14em] uppercase text-[#7A8FA6] mb-1.5">{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} className="w-full bg-[#FAF7F1] border border-[#DCD9D2] px-3 py-2.5 text-sm text-[#0F3D6A] placeholder:text-[#7A8FA6]/60 outline-none focus:border-[#B89968] transition-colors font-light" />
                    </div>
                  ))}
                </div>

                {[
                  { label: "Entreprise", placeholder: "Nom de votre entreprise", type: "text" },
                  { label: "Email", placeholder: "votre@email.com", type: "email" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-[10px] font-medium tracking-[0.14em] uppercase text-[#7A8FA6] mb-1.5">{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} className="w-full bg-[#FAF7F1] border border-[#DCD9D2] px-3 py-2.5 text-sm text-[#0F3D6A] placeholder:text-[#7A8FA6]/60 outline-none focus:border-[#B89968] transition-colors font-light" />
                  </div>
                ))}

                <div>
                  <label className="block text-[10px] font-medium tracking-[0.14em] uppercase text-[#7A8FA6] mb-1.5">Effectif</label>
                  <select className="w-full bg-[#FAF7F1] border border-[#DCD9D2] px-3 py-2.5 text-sm text-[#0F3D6A] outline-none focus:border-[#B89968] transition-colors font-light cursor-pointer">
                    <option value="">Sélectionner</option>
                    <option>Moins de 50</option>
                    <option>50 à 150</option>
                    <option>150 à 500</option>
                    <option>Plus de 500</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-medium tracking-[0.14em] uppercase text-[#7A8FA6] mb-1.5">Votre situation en 2 lignes</label>
                  <textarea rows={3} placeholder="Décrivez brièvement votre contexte RH actuel..." className="w-full bg-[#FAF7F1] border border-[#DCD9D2] px-3 py-2.5 text-sm text-[#0F3D6A] placeholder:text-[#7A8FA6]/60 outline-none focus:border-[#B89968] transition-colors resize-none font-light" />
                </div>

                <button type="button" className="w-full bg-[#0F3D6A] text-[#FAF7F1] text-xs font-medium tracking-[0.14em] uppercase py-4 hover:bg-[#9C7E4F] transition-colors cursor-pointer">
                  Envoyer ma demande
                </button>

                <p className="text-[10px] text-[#7A8FA6] text-center leading-[1.6] border-t border-[#DCD9D2] pt-3">
                  Ce que vous partagez ici reste confidentiel et n'est pas transmis à des tiers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 border-t border-[#DCD9D2]">
        <div className="mx-auto max-w-5xl px-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-[#B89968]" />
            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#B89968]">Questions fréquentes</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-[#0F3D6A] mb-10 leading-[1.18]">
            Ce que les dirigeants demandent avant de décider.
          </h2>

          <div className="divide-y divide-[#DCD9D2]">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex justify-between items-center text-sm text-[#0F3D6A] cursor-pointer hover:text-[#B89968] transition-colors list-none font-medium">
                  {faq.q}
                  <span className="text-[#B89968] text-lg ml-4 flex-shrink-0 group-open:rotate-45 transition-transform duration-200 origin-center">+</span>
                </summary>
                <p className="text-xs text-[#3F5673] leading-[1.85] mt-4 max-w-2xl">{faq.r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
