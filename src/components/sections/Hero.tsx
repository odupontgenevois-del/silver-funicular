import { ArrowRight } from "lucide-react";

const situations = [
  "Post-acquisition ou intégration en cours",
  "PME sans DRH, je gère en direct",
  "Turnover ou crise sociale à gérer",
  "Croissance rapide, les process ne suivent pas",
];

const kpis = [
  { value: "-25%", label: "Turnover sur postes clés après restructuration RH", source: "Camfil France · 2017–2023" },
  { value: "-30%", label: "Time-to-fill sur postes critiques", source: "Camfil France · 2017–2023" },
  { value: "20 ans", label: "De DRH opérationnelle en industrie et ETI internationales", source: "PANOL · Morgan · Camfil · RIOU · Diasorin" },
];

export function Hero() {
  return (
    <section className="pt-16 border-b border-[#DCD9D2]">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="inline-block bg-[#B89968] text-[#0F3D6A] text-[10px] font-medium tracking-[0.14em] uppercase px-3 py-1.5">Prix ONU 2019</span>
          <span className="text-xs text-[#7A8FA6]">Mastère HEC Paris · 20 ans de terrain en industrie et ETI</span>
        </div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-[#0F3D6A] leading-[1.05] tracking-[-0.02em] mb-4">
              Vos RH n'ont pas besoin<br />d'un poste permanent.
            </h1>
            <p className="font-display text-xl sm:text-2xl font-light italic text-[#3F5673] mb-8">
              <strong className="not-italic font-normal text-[#0F3D6A]">La bonne experte.</strong> Au bon moment.
            </p>

            <p className="text-sm text-[#3F5673] leading-[1.9] mb-8 max-w-xl">
              Vous dirigez une PME ou une ETI industrielle. Une situation RH vous prend du temps, vous expose ou ralentit votre organisation.<br /><br />
              <strong className="text-[#0F3D6A] font-medium">Recruter un DRH en CDI coûte entre 80 000 et 120 000 euros par an, charges comprises.</strong> Passer par un cabinet généraliste vous donne un consultant, pas quelqu'un qui pilote.<br /><br />
              Il existe une troisième option.
            </p>

            {/* Situation selector */}
            <div className="border border-[#DCD9D2] bg-white mb-8" id="situation">
              <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-[#B89968] px-4 py-3 border-b border-[#DCD9D2] bg-[#EFE6D4]">
                Votre situation
              </div>
              {situations.map((s) => (
                <a key={s} href="#contact" className="flex justify-between items-center w-full px-4 py-3.5 text-sm text-[#3F5673] border-b border-[#DCD9D2] last:border-0 hover:bg-[#EFE6D4] hover:text-[#0F3D6A] hover:border-l-2 hover:border-l-[#B89968] transition-all duration-150 cursor-pointer group">
                  {s}
                  <ArrowRight className="h-3.5 w-3.5 text-[#B89968] flex-shrink-0 ml-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <a href="#contact" className="block w-full bg-[#0F3D6A] text-[#FAF7F1] text-xs font-medium tracking-[0.14em] uppercase py-4 text-center hover:bg-[#9C7E4F] transition-colors duration-200 cursor-pointer">
                Réserver mon diagnostic de 30 min
              </a>
              <a href="#diff" className="block w-full border border-[#DCD9D2] text-[#0F3D6A] text-xs font-medium tracking-[0.12em] uppercase py-4 text-center hover:border-[#0F3D6A] transition-colors duration-200 cursor-pointer">
                Voir les contextes d'intervention
              </a>
              <p className="text-[11px] text-[#7A8FA6] text-center">Gratuit. Sans engagement. Ce que vous partagez reste confidentiel.</p>
            </div>
          </div>

          {/* Right — KPIs */}
          <div className="flex flex-col gap-3">
            {kpis.map((k) => (
              <div key={k.value} className="bg-[#EFE6D4] border-l-2 border-[#B89968] px-5 py-5">
                <div className="font-display text-4xl font-light text-[#0F3D6A] leading-none mb-1">{k.value}</div>
                <div className="text-xs text-[#3F5673] leading-[1.5] mt-1">{k.label}</div>
                <div className="text-[10px] text-[#7A8FA6] mt-1 italic">{k.source}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pull quote */}
      <div className="border-t border-b border-[#DCD9D2] px-5 py-6">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-12">
          <p className="font-display text-lg sm:text-xl font-light italic text-[#0F3D6A] leading-[1.55] flex-1">
            "Ce n'est pas parce qu'on ne peut pas se permettre un DRH à plein temps qu'on doit se priver d'une <em className="text-[#B89968]">experte.</em>"
          </p>
          <div className="text-xs text-[#7A8FA6] sm:text-right flex-shrink-0">
            Agnès Genevois<br />Fondatrice · Artémis RH Consulting
          </div>
        </div>
      </div>
    </section>
  );
}
