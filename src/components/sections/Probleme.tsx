import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Probleme() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px]">

        {/* Left — photo */}
        <div className="relative min-h-[400px] lg:min-h-[600px]">
          <Image
            src="/photo-reunion-equipe.webp"
            alt="Agnès Genevois en réunion de direction"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/50 lg:to-[#0C1B2E]/80" />

          {/* Bottom-left stat */}
          <div className="absolute bottom-8 left-8">
            <p className="font-display text-4xl sm:text-5xl font-light text-[#C4A46B] leading-none mb-2">6–18 mois</p>
            <p className="text-sm text-[#EDE9E3]/80">de salaire brut pour un départ cadre non anticipé</p>
          </div>
        </div>

        {/* Right — text */}
        <div className="bg-[#0C1B2E] flex items-center px-10 py-16 lg:px-16">
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C4A46B]" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#C4A46B]">Le problème</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-light text-[#EDE9E3] leading-[1.1] mb-8">
              Vos RH ne pilotent pas —{" "}
              <em className="text-[#C4A46B]">elles subissent.</em>
            </h2>

            <div className="space-y-5 text-base text-[#9AABB8] leading-[1.85] mb-10">
              <p>
                Turnover non maîtrisé, postes cadres vides depuis 90 jours, IRP sans interlocuteur. Dans les PME de 50 à 500 salariés, chaque mois sans pilotage RH a un coût réel — souvent découvert trop tard.
              </p>
              <p>
                Entre 30 et 500 salariés, la plupart des entreprises n'ont pas les moyens d'un DRH à temps plein. Mais elles en ont <strong className="text-[#EDE9E3] font-semibold">le besoin.</strong>
              </p>
            </div>

            <a href="#contact"
              className="flex items-center justify-between w-full px-8 py-5 rounded-full bg-[#C4A46B] text-[#0C1B2E] text-base font-semibold hover:bg-[#D4B47B] hover:shadow-lg hover:shadow-[#C4A46B]/25 transition-all duration-200 cursor-pointer">
              Qualifier ma situation
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
