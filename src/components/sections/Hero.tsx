import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#FAF7F2]">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(circle, #1A3D2B 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Forest glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[#1A3D2B]/8 rounded-full blur-3xl pointer-events-none" />
      {/* Orange glow top-right */}
      <div className="absolute top-24 right-0 w-[300px] h-[300px] bg-[#E8622A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1A3D2B]/20 bg-[#1A3D2B]/5 text-[#1A3D2B] text-sm font-medium mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8622A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8622A]"></span>
            </span>
            Juin — Seulement 2 places disponibles
          </div>

          {/* Main headline */}
          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-[#1A3D2B] leading-[1.05] tracking-tight mb-6">
            2h.{" "}
            <span className="text-[#E8622A]">20 vidéos.</span>{" "}
            90 jours.
          </h1>

          <p className="text-xl sm:text-2xl text-[#6B6560] max-w-2xl leading-relaxed mb-4">
            Le système qui transforme votre expertise en{" "}
            <strong className="text-[#2C2C2C] font-semibold">autorité visible sur LinkedIn</strong>{" "}
            — sans improviser, sans prospecter à froid.
          </p>

          <p className="text-base text-[#6B6560] max-w-xl mb-12">
            Pour coachs, consultants et experts B2B qui veulent que leurs prospects viennent à eux.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-20">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#E8622A] text-white text-lg font-semibold hover:bg-[#C94E1A] transition-all duration-200 hover:shadow-lg hover:shadow-[#E8622A]/25 cursor-pointer"
            >
              Réserver ma place
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#systeme"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#1A3D2B] text-[#1A3D2B] text-lg font-semibold hover:bg-[#1A3D2B] hover:text-white transition-all duration-200 cursor-pointer"
            >
              Voir le système
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 sm:gap-16">
            {[
              { value: "+50", label: "experts accompagnés" },
              { value: "3×", label: "plus de prospects en 90j" },
              { value: "+30 ans", label: "au cœur de la communication" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl text-[#1A3D2B] mb-1">{stat.value}</div>
                <div className="text-sm text-[#6B6560]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
