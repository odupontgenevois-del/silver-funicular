"use client";

import { ArrowRight, Award } from "lucide-react";
import Image from "next/image";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { useEffect, useRef, useState } from "react";

const kpis = [
  { from: 0,    to: 20,   suffix: " ans", sign: "none", label: "DRH opérationnelle",  sub: "Industrie & ETI" },
  { from: 25,   to: -25,  suffix: "%",    sign: "show", label: "Turnover postes clés", sub: "Camfil 2017–2023" },
  { from: 2000, to: 2019, suffix: "",     sign: "none", label: "Prix ONU · New York",  sub: "Diversité · 17 pays" },
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
    <div ref={ref} className="glass-copper rounded-2xl p-5 text-center hover:glow-copper transition-all duration-300">
      <div className="font-display text-3xl font-light text-[#C4A46B] leading-none mb-2 tabular-nums">
        {formatKpi(value, sign)}{suffix}
      </div>
      <div className="text-sm text-[#EDE9E3] leading-[1.4] font-medium">{label}</div>
      <div className="text-xs text-[#9AABB8] mt-1.5 italic">{sub}</div>
    </div>
  );
}

const H1_LINES = [
  { text: "Vos RH méritent", gradient: true },
  { text: "mieux qu'une case", gradient: false },
  { text: "vide dans l'organigramme.", gradient: false },
];

function LetterRevealLine({ text, gradient, lineIndex }: { text: string; gradient: boolean; lineIndex: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const plain = text;
    el.innerHTML = "";
    let charCount = 0;
    for (let c = 0; c < plain.length; c++) {
      const ch = plain[c];
      const span = document.createElement("span");
      span.style.cssText = "display:inline-block;opacity:0;transform:translateY(60px) rotate(2deg);transition:opacity 0.6s ease,transform 0.6s cubic-bezier(.16,1,.3,1);";
      span.textContent = ch;
      const delay = 0.04 + lineIndex * 0.12 + charCount * 0.022;
      span.style.transitionDelay = delay + "s";
      el.appendChild(span);
      if (ch !== " ") charCount++;
    }
    const timer = setTimeout(() => {
      el.querySelectorAll("span").forEach((s) => {
        (s as HTMLElement).style.opacity = "1";
        (s as HTMLElement).style.transform = "translateY(0) rotate(0deg)";
      });
    }, 100 + lineIndex * 90);
    return () => clearTimeout(timer);
  }, [text, lineIndex]);

  return (
    <span
      ref={ref}
      className={
        gradient
          ? "block gradient-text"
          : "block text-[#EDE9E3]"
      }
      suppressHydrationWarning
    >
      {text}
    </span>
  );
}

export function Hero() {
  return (
    <>
      <AuroraBackground className="min-h-screen flex items-center pt-24">
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(196,164,107,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(196,164,107,0.5) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative mx-auto max-w-6xl px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-copper mb-10 animate-fade-up">
                <Award className="h-4 w-4 text-[#C4A46B]" />
                <span className="text-sm text-[#C4A46B] font-medium tracking-wide">Prix ONU 2019 · Mastère HEC Paris · 20 ans d'expérience</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.06] tracking-tight mb-8">
                {H1_LINES.map((line, i) => (
                  <LetterRevealLine key={i} text={line.text} gradient={line.gradient} lineIndex={i} />
                ))}
              </h1>

              <p className="text-lg text-[#9AABB8] max-w-lg leading-[1.85] mb-4 animate-fade-up" style={{ animationDelay: "0.55s" }}>
                Recruter un DRH en CDI coûte{" "}
                <strong className="text-[#EDE9E3] font-medium">80 000 à 120 000 €/an</strong>,
                3 à 6 mois de délai, et un profil rarement ajusté à votre besoin exact.
              </p>
              <p className="text-xl text-[#C4A46B] font-display italic mb-12 animate-fade-up" style={{ animationDelay: "0.65s" }}>
                Il existe une troisième option.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up" style={{ animationDelay: "0.75s" }}>
                <a href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C4A46B] text-[#0C1B2E] text-base font-semibold tracking-wide hover:bg-[#D4B47B] hover:shadow-lg hover:shadow-[#C4A46B]/25 transition-all duration-200 cursor-pointer">
                  Réserver mon diagnostic
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a href="#diff"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border border-white/10 text-base text-[#EDE9E3] hover:bg-white/8 transition-all duration-200 cursor-pointer">
                  Voir l'approche
                </a>
              </div>

              <p className="text-sm text-[#9AABB8]/60 mt-5 animate-fade-up" style={{ animationDelay: "0.85s" }}>Gratuit · 30 min · Sans engagement · Confidentiel</p>
            </div>

            {/* Right — photo */}
            <div className="relative animate-fade-up flex justify-center lg:justify-end" style={{ animationDelay: "0.15s" }}>
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

      {/* KPIs + situation strip */}
      <section className="bg-[#0C1B2E] border-b border-white/7">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-stretch">
            <div className="grid grid-cols-3 gap-4">
              {kpis.map((k) => (
                <AnimatedKpi key={k.label} from={k.from} to={k.to} suffix={k.suffix} sign={k.sign} label={k.label} sub={k.sub} />
              ))}
            </div>

            <div id="situation" className="glass rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-white/7">
                <span className="text-sm font-medium tracking-[0.16em] uppercase text-[#C4A46B]">Votre situation</span>
              </div>
              {situations.map((s) => (
                <a key={s} href="#contact"
                  className="flex items-center justify-between px-6 py-4 text-base text-[#9AABB8] border-b border-white/5 last:border-0 hover:bg-white/5 hover:text-[#EDE9E3] hover:pl-8 transition-all duration-200 cursor-pointer group">
                  {s}
                  <ArrowRight className="h-4 w-4 text-[#C4A46B] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
