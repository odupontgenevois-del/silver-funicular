import { ArrowRight, Award } from "lucide-react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

const kpis = [
  { value: "−25%", label: "Turnover postes clés", sub: "Camfil 2017–2023" },
  { value: "−30%", label: "Time-to-fill", sub: "Camfil 2017–2023" },
  { value: "20 ans", label: "DRH opérationnelle", sub: "Industrie & ETI" },
];

const situations = [
  "Post-acquisition ou intégration",
  "PME sans DRH, je gère en direct",
  "Turnover ou crise sociale",
  "Croissance rapide, process dépassés",
];

export function Hero() {
  return (
    <AuroraBackground className="min-h-screen flex items-center pt-20">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(196,164,107,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(196,164,107,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative mx-auto max-w-6xl px-5 py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-copper mb-10">
              <Award className="h-3.5 w-3.5 text-[#C4A46B]" />
              <span className="text-xs text-[#C4A46B] font-medium tracking-wide">Prix ONU 2019 · Mastère HEC Paris · 20 ans d'expérience</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.04] tracking-tight mb-6">
              <span className="gradient-text">Vos RH méritent</span>
              <br />
              <span className="text-[#EDE9E3]">mieux qu'une case</span>
              <br />
              <span className="text-[#EDE9E3]">vide dans l'organigramme.</span>
            </h1>

            <p className="text-base text-[#9AABB8] max-w-lg leading-[1.85] mb-4">
              Recruter un DRH en CDI coûte{" "}
              <strong className="text-[#EDE9E3] font-medium">80 000 à 120 000 €/an</strong>,
              3 à 6 mois de délai, et un profil rarement ajusté à votre besoin exact.
            </p>
            <p className="text-base text-[#C4A46B] font-display italic text-xl mb-10">
              Il existe une troisième option.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#C4A46B] text-[#0C1B2E] text-sm font-semibold tracking-wide hover:bg-[#D4B47B] hover:shadow-lg hover:shadow-[#C4A46B]/25 transition-all duration-200 cursor-pointer">
                Réserver mon diagnostic
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#diff"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass border border-white/10 text-sm text-[#EDE9E3] hover:bg-white/8 transition-all duration-200 cursor-pointer">
                Voir l'approche
              </a>
            </div>

            <p className="text-xs text-[#9AABB8]/60 mt-4">Gratuit · 30 min · Sans engagement · Confidentiel</p>
          </div>

          {/* Right — glass card */}
          <div className="flex flex-col gap-4 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            {/* KPI cards */}
            <div className="grid grid-cols-3 gap-3">
              {kpis.map((k) => (
                <div key={k.value} className="glass-copper rounded-2xl p-4 text-center hover:glow-copper transition-all duration-300">
                  <div className="font-display text-3xl font-light text-[#C4A46B] leading-none mb-1">{k.value}</div>
                  <div className="text-[10px] text-[#EDE9E3] leading-[1.4] font-medium">{k.label}</div>
                  <div className="text-[9px] text-[#9AABB8] mt-1 italic">{k.sub}</div>
                </div>
              ))}
            </div>

            {/* Situation selector */}
            <div id="situation" className="glass rounded-2xl overflow-hidden">
              <div className="px-5 py-3 border-b border-white/7">
                <span className="text-[10px] font-medium tracking-[0.16em] uppercase text-[#C4A46B]">Votre situation</span>
              </div>
              {situations.map((s) => (
                <a key={s} href="#contact"
                  className="flex items-center justify-between px-5 py-3.5 text-sm text-[#9AABB8] border-b border-white/5 last:border-0 hover:bg-white/5 hover:text-[#EDE9E3] hover:pl-6 transition-all duration-200 cursor-pointer group">
                  {s}
                  <ArrowRight className="h-3.5 w-3.5 text-[#C4A46B] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </a>
              ))}
            </div>

            {/* Pull quote */}
            <div className="glass-copper rounded-2xl px-5 py-4 animate-float">
              <p className="font-display text-base italic text-[#EDE9E3] leading-[1.55]">
                "Ce n'est pas parce qu'on ne peut pas se permettre un DRH à plein temps qu'on doit se priver d'une <em className="text-[#C4A46B]">experte.</em>"
              </p>
              <p className="text-[11px] text-[#9AABB8] mt-2">— Agnès Genevois · Fondatrice</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0C1B2E] to-transparent pointer-events-none" />
    </AuroraBackground>
  );
}
