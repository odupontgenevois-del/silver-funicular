"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { useEffect, useRef, useState } from "react";

const kpis = [
  { from: 0,    to: 20,   suffix: " ans", sign: "none", label: "DRH opérationnelle",  sub: "Industrie & ETI" },
  { from: 25,   to: -25,  suffix: "%",    sign: "show", label: "Turnover postes clés", sub: "Camfil 2017–2023" },
  { from: 0,    to: -30,  suffix: "%",    sign: "show", label: "Time-to-fill",         sub: "Camfil 2017–2023" },
  { from: 0,    to: 4,    suffix: " CCN", sign: "none", label: "Sites harmonisés",     sub: "Camfil 2018–2019" },
  { from: 2000, to: 2019, suffix: "",     sign: "none", label: "Prix ONU · New York",  sub: "Diversité · 17 pays" },
  { from: 0,    to: 17,   suffix: " pays",sign: "none", label: "Politique GEEIS",      sub: "3 continents" },
];

const situations = [
  "Post-acquisition ou intégration",
  "PME sans DRH, je gère en direct",
  "Turnover ou crise sociale",
  "Croissance rapide, process dépassés",
];

function formatKpi(val: number, sign: string): string {
  const n = Math.round(val);
  const abs = Math.abs(n);
  if (sign === "show") return (n > 0 ? "+" : n < 0 ? "−" : "") + abs;
  return String(abs);
}

function useCountUp(from: number, to: number, duration = 2400) {
  const [value, setValue] = useState(from);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const diff = to - from;
          function tick(now: number) {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(from + diff * eased);
            if (p < 1) requestAnimationFrame(tick);
            else setValue(to);
          }
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [from, to, duration]);

  return { value, ref };
}

function AnimatedKpi({ from, to, suffix, sign, label, sub }: { from: number; to: number; suffix: string; sign: string; label: string; sub: string }) {
  const { value, ref } = useCountUp(from, to);
  return (
    <div ref={ref} className="glass-copper rounded-2xl p-5 text-center transition-all duration-300 cursor-default hover:bg-[#C4A46B] hover:shadow-lg hover:shadow-[#C4A46B]/40 hover:-translate-y-1 group">
      <div className="font-display text-3xl font-bold text-[#C4A46B] group-hover:text-[#0C1B2E] leading-none mb-2 tabular-nums transition-colors duration-300">
        {formatKpi(value, sign)}{suffix}
      </div>
      <div className="text-sm text-[#EDE9E3] group-hover:text-[#0C1B2E] leading-[1.4] font-medium transition-colors duration-300">{label}</div>
      <div className="text-xs text-[#9AABB8] group-hover:text-[#0C1B2E]/70 mt-1.5 italic transition-colors duration-300">{sub}</div>
    </div>
  );
}

export function Hero() {
  return (
    <>
      <AuroraBackground className="flex items-center pt-20">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(196,164,107,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(196,164,107,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative mx-auto max-w-6xl px-6 py-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#C4A46B]/40 mb-8"
                style={{ animation: "fadeUp 0.6s ease both" }}>
                <span className="text-xs text-[#C4A46B] font-medium tracking-[0.18em] uppercase whitespace-nowrap">
                  DRH EXTERNALISÉE — PME &amp; ETI
                </span>
              </div>

              {/* H1 */}
              <h1 className="font-display font-light leading-[1.05] tracking-tight mb-8">
                <span className="block italic text-[#C4A46B]"
                  style={{ fontSize: "clamp(3.2rem,7vw,5.5rem)", animation: "slideUp 0.7s cubic-bezier(.16,1,.3,1) 0.1s both" }}>
                  La bonne DRH.
                </span>
                <span className="block text-[#EDE9E3]"
                  style={{ fontSize: "clamp(3.2rem,7vw,5.5rem)", animation: "slideUp 0.7s cubic-bezier(.16,1,.3,1) 0.22s both" }}>
                  Au bon moment.
                </span>
                <span className="block text-[#EDE9E3]"
                  style={{ fontSize: "clamp(3.2rem,7vw,5.5rem)", animation: "slideUp 0.7s cubic-bezier(.16,1,.3,1) 0.34s both" }}>
                  Sans le CDI.
                </span>
              </h1>

              <p className="text-lg text-[#9AABB8] max-w-lg leading-[1.85] mb-10"
                style={{ animation: "fadeUp 0.7s ease 0.52s both" }}>
                Votre <strong className="text-[#EDE9E3] font-semibold">DRH à temps partagé</strong> — le niveau d'un Directeur des Ressources Humaines senior, calibré sur le besoin réel de votre PME ou ETI, sans les contraintes d'un recrutement à temps plein.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4"
                style={{ animation: "fadeUp 0.7s ease 0.64s both" }}>
                <a href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C4A46B] text-[#0C1B2E] text-base font-semibold tracking-wide hover:bg-[#D4B47B] hover:shadow-lg hover:shadow-[#C4A46B]/25 transition-all duration-200 cursor-pointer">
                  Réserver mon diagnostic gratuit
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#profil"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-base text-[#EDE9E3] hover:bg-white/8 transition-all duration-200 cursor-pointer">
                  Découvrir le profil
                </a>
              </div>

              <p className="text-sm text-[#9AABB8]/60 mt-5"
                style={{ animation: "fadeUp 0.7s ease 0.76s both" }}>
                30 min · Sans engagement · Confidentiel
              </p>
            </div>

            {/* Right — photo */}
            <div className="relative flex justify-center lg:justify-end"
              style={{ animation: "fadeUp 0.8s ease 0.2s both" }}>
              <div className="absolute inset-0 rounded-3xl bg-[#C4A46B]/8 blur-[60px] scale-90 pointer-events-none" />
              <div className="relative w-full max-w-sm lg:max-w-none">
                <div className="absolute -inset-px rounded-3xl border border-[#C4A46B]/20 pointer-events-none z-10" />
                <Image
                  src="/agnes-genevois.webp"
                  alt="Agnès Genevois — DRH à temps partagé, fondatrice Artémis RH Consulting"
                  width={520}
                  height={620}
                  className="rounded-3xl object-cover object-top w-full"
                  style={{ maxHeight: "580px" }}
                  priority
                />
                <div className="absolute bottom-5 left-5 right-5 glass-copper rounded-2xl px-6 py-4 animate-float">
                  <p className="font-display text-xl font-light text-[#EDE9E3]">Agnès Genevois</p>
                  <p className="text-sm text-[#C4A46B] tracking-wide mt-0.5">DRH à temps partagé · Fondatrice Artémis RH Consulting</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0C1B2E] to-transparent pointer-events-none" />
      </AuroraBackground>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(48px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* KPIs strip */}
      <section className="bg-[#0C1B2E] border-b border-white/7">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {kpis.map((k) => (
              <AnimatedKpi key={k.label} from={k.from} to={k.to} suffix={k.suffix} sign={k.sign} label={k.label} sub={k.sub} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
