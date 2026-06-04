const faqs = [
  {
    q: "Quelle est la différence entre une experte à temps partagé et un consultant RH ?",
    r: "Un consultant livre un rapport ou accompagne un projet délimité. Une DRH à temps partagé prend en charge la fonction RH dans sa globalité, avec un rôle opérationnel : elle pilote, décide, représente l'entreprise face aux IRP, et répond au dirigeant comme un interne le ferait.",
  },
  {
    q: "À partir de quelle taille d'entreprise ça a du sens ?",
    r: "En pratique, les missions les plus pertinentes concernent des entreprises de 30 à 500 personnes qui ont besoin d'une expertise RH solide sans pouvoir ou vouloir recruter à plein temps.",
  },
  {
    q: "Combien de jours par mois êtes-vous présente sur site ?",
    r: "En règle générale, les missions récurrentes représentent entre 2 et 8 jours par mois sur site, complétés par du travail à distance. La fréquence se définit en fonction de la complexité de la situation.",
  },
  {
    q: "Pouvez-vous intervenir en situation de crise sociale ?",
    r: "Oui. J'ai géré des situations de crise sociale, des négociations d'accords collectifs dans des contextes tendus, et des restructurations avec impact sur les effectifs.",
  },
  {
    q: "Comment fonctionne la confidentialité ?",
    r: "Tout ce qui est partagé dans le cadre d'une mission est couvert par une obligation de confidentialité contractuelle. Un accord peut être signé avant même le premier diagnostic si vous le souhaitez.",
  },
];

export function Contact() {
  return (
    <>
      {/* Lead magnet */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0E1F35]/80 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#C4A46B]/6 blur-[80px] pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-5">
          <div className="glass-copper rounded-2xl p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 mb-5">
                  <div className="h-px w-8 bg-[#C4A46B]" />
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C4A46B]">Ressource gratuite</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-light text-[#EDE9E3] leading-[1.2] mb-3">
                  7 signaux qui indiquent qu'il est temps d'agir sur votre{" "}
                  <em className="text-[#C4A46B]">fonction RH.</em>
                </h3>
                <p className="text-xs text-[#9AABB8] leading-[1.75] mb-6">
                  Une checklist de diagnostic en 10 minutes. Pour les dirigeants qui veulent qualifier leur situation avant de prendre une décision.
                </p>
                <div className="flex gap-3">
                  <input type="email" placeholder="Votre email professionnel"
                    className="flex-1 glass rounded-xl px-4 py-3 text-sm text-[#EDE9E3] placeholder:text-[#9AABB8]/50 outline-none focus:border-[#C4A46B] border border-white/10 focus:border-[#C4A46B] transition-colors" />
                  <button className="px-5 py-3 rounded-xl bg-[#C4A46B] text-[#0C1B2E] text-xs font-semibold hover:bg-[#D4B47B] transition-colors cursor-pointer whitespace-nowrap">
                    Recevoir
                  </button>
                </div>
                <p className="text-[10px] text-[#9AABB8]/50 mt-2">Reçu immédiatement. Pas de séquence commerciale automatique.</p>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-[#C4A46B] mb-5">Aperçu · 3 des 7 signaux</div>
                <div className="flex flex-col gap-4">
                  {[
                    "Votre turnover sur postes cadres dépasse 15 % sur les 3 dernières années.",
                    "Vous avez eu un redressement URSSAF ou un contentieux prud'homal non anticipé dans les 24 derniers mois.",
                    "Vos postes critiques restent ouverts plus de 60 jours en moyenne.",
                  ].map((s, i) => (
                    <div key={i} className="flex gap-3 text-xs text-[#9AABB8] leading-[1.6]">
                      <span className="font-display text-[#C4A46B] flex-shrink-0 font-light text-base leading-none mt-0.5">{i + 1}.</span>
                      {s}
                    </div>
                  ))}
                  <p className="text-[11px] text-[#9AABB8]/50 italic pt-2 border-t border-white/5">+ 4 autres signaux dans la checklist complète…</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 mb-5">
                <div className="h-px w-8 bg-[#C4A46B]" />
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C4A46B]">Premier contact</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-light text-[#EDE9E3] leading-[1.12] mb-5">
                Votre diagnostic{" "}
                <em className="text-[#C4A46B]">gratuit.</em>
              </h2>
              <p className="text-sm text-[#9AABB8] leading-[1.9] mb-4">
                30 minutes sur votre situation réelle. Pas de présentation commerciale. À l'issue, vous savez si une intervention a du sens et quelle forme elle devrait prendre.
              </p>
              <p className="text-sm text-[#9AABB8] leading-[1.9] mb-8">
                Si ce n'est pas le cas, vous repartez avec une lecture claire de votre situation. C'est déjà utile.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {["Réponse sous 24h ouvrées", "Disponible immédiatement pour démarrer", "Sans engagement ni relance commerciale", "Paris et périphérie · déplacements possibles"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-xs text-[#9AABB8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C4A46B] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="glass rounded-xl px-5 py-4 mb-5">
                <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-[#C4A46B] mb-3">Autres façons de contacter Agnès</div>
                <div className="flex gap-5">
                  <a href="mailto:adgenevois@gmail.com" className="text-xs text-[#C4A46B] hover:text-[#D4B47B] transition-colors cursor-pointer">Email direct</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs text-[#C4A46B] hover:text-[#D4B47B] transition-colors cursor-pointer">LinkedIn</a>
                </div>
              </div>

              <p className="text-[11px] text-[#9AABB8]/60 leading-[1.7]">
                Agnès Genevois · Artémis RH Consulting<br />
                <a href="mailto:adgenevois@gmail.com" className="text-[#C4A46B]">adgenevois@gmail.com</a> · Paris et périphérie
              </p>
            </div>

            {/* Right — form */}
            <div className="glass rounded-2xl p-7 sm:p-9 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C4A46B]/50 to-transparent" />

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C4A46B]/15 border border-[#C4A46B]/30 mb-7">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C4A46B] animate-pulse" />
                <span className="text-[10px] font-medium text-[#C4A46B] tracking-wide">Diagnostic gratuit · 30 min</span>
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Prénom et nom", placeholder: "Marc Dupont", type: "text" },
                    { label: "Fonction", placeholder: "Directeur Général", type: "text" },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-[10px] font-medium tracking-[0.14em] uppercase text-[#9AABB8] mb-1.5">{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder}
                        className="w-full glass rounded-lg px-3 py-2.5 text-sm text-[#EDE9E3] placeholder:text-[#9AABB8]/40 outline-none border border-white/8 focus:border-[#C4A46B]/50 transition-colors" />
                    </div>
                  ))}
                </div>

                {[
                  { label: "Entreprise", placeholder: "Nom de votre entreprise", type: "text" },
                  { label: "Email", placeholder: "votre@email.com", type: "email" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-[10px] font-medium tracking-[0.14em] uppercase text-[#9AABB8] mb-1.5">{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder}
                      className="w-full glass rounded-lg px-3 py-2.5 text-sm text-[#EDE9E3] placeholder:text-[#9AABB8]/40 outline-none border border-white/8 focus:border-[#C4A46B]/50 transition-colors" />
                  </div>
                ))}

                <div>
                  <label className="block text-[10px] font-medium tracking-[0.14em] uppercase text-[#9AABB8] mb-1.5">Effectif</label>
                  <select className="w-full glass rounded-lg px-3 py-2.5 text-sm text-[#EDE9E3] outline-none border border-white/8 focus:border-[#C4A46B]/50 transition-colors cursor-pointer bg-transparent">
                    <option value="" className="bg-[#0C1B2E]">Sélectionner</option>
                    <option className="bg-[#0C1B2E]">Moins de 50</option>
                    <option className="bg-[#0C1B2E]">50 à 150</option>
                    <option className="bg-[#0C1B2E]">150 à 500</option>
                    <option className="bg-[#0C1B2E]">Plus de 500</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-medium tracking-[0.14em] uppercase text-[#9AABB8] mb-1.5">Votre situation en 2 lignes</label>
                  <textarea rows={3} placeholder="Décrivez brièvement votre contexte RH actuel…"
                    className="w-full glass rounded-lg px-3 py-2.5 text-sm text-[#EDE9E3] placeholder:text-[#9AABB8]/40 outline-none border border-white/8 focus:border-[#C4A46B]/50 transition-colors resize-none" />
                </div>

                <button type="button"
                  className="w-full bg-[#C4A46B] text-[#0C1B2E] text-xs font-semibold tracking-wide py-4 rounded-xl hover:bg-[#D4B47B] hover:shadow-lg hover:shadow-[#C4A46B]/25 transition-all duration-200 cursor-pointer">
                  Envoyer ma demande
                </button>

                <p className="text-[10px] text-[#9AABB8]/50 text-center leading-[1.6] border-t border-white/5 pt-3">
                  Ce que vous partagez ici reste confidentiel et n'est pas transmis à des tiers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 relative">
        <div className="absolute inset-0 bg-[#0E1F35]/50 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-5">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-8 bg-[#C4A46B]" />
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#C4A46B]">Questions fréquentes</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-light text-[#EDE9E3] mb-12 leading-[1.12]">
            Ce que les dirigeants demandent{" "}
            <em className="text-[#C4A46B]">avant de décider.</em>
          </h2>

          <div className="flex flex-col gap-3 max-w-3xl">
            {faqs.map((faq, i) => (
              <details key={i} className="glass rounded-2xl group overflow-hidden">
                <summary className="flex justify-between items-center px-6 py-5 text-sm font-semibold text-[#EDE9E3] cursor-pointer hover:text-[#C4A46B] transition-colors list-none gap-4">
                  {faq.q}
                  <span className="text-[#C4A46B] text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-200 origin-center">+</span>
                </summary>
                <p className="px-6 pb-5 text-xs text-[#9AABB8] leading-[1.85]">{faq.r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
