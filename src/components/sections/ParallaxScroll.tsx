"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const IMG_PADDING = 12;

interface Section {
  imgUrl: string;
  subheading: string;
  heading: string;
  body: string;
  stat: string;
  statLabel: string;
  cta?: string;
}

const sections: Section[] = [
  {
    imgUrl: "/photo-reunion-equipe.jpg",
    subheading: "Le problème",
    heading: "Vos RH ne pilotent pas — elles subissent.",
    body: "Turnover non maîtrisé, postes critiques vides, IRP sans interlocuteur. Chaque mois sans pilotage RH a un coût réel — souvent découvert trop tard.",
    stat: "6–18 mois",
    statLabel: "de salaire brut pour un départ cadre non anticipé",
    cta: "Reconnaître ma situation",
  },
  {
    imgUrl: "/photo-dirigeante.jpg",
    subheading: "La solution",
    heading: "Une DRH senior. Sans le coût d'un CDI.",
    body: "Présente sur site, opérationnelle dès la première semaine, responsable devant vous. Tout ce qu'un DRH interne apporte — ajusté à votre besoin réel.",
    stat: "< 7 jours",
    statLabel: "entre le diagnostic et la première action sur site",
    cta: "Réserver mon diagnostic gratuit",
  },
  {
    imgUrl: "/agnes-genevois.webp",
    subheading: "L'experte",
    heading: "20 ans de terrain. Pas de théorie.",
    body: "Fusions, retournements, crises sociales, multi-sites, 4 CCN. Agnès Genevois a traversé tout ça comme DRH opérationnelle, membre de CODIR, responsable de ses décisions.",
    stat: "2019",
    statLabel: "Prix des Nations Unies · Diversité & Inclusion · 17 pays",
  },
];

function StickyImage({ imgUrl }: { imgUrl: string }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0C1B2E]/80 via-[#0C1B2E]/50 to-transparent" />
      <motion.div
        className="absolute inset-0 bg-[#0C1B2E]/60"
        style={{ opacity }}
      />
    </motion.div>
  );
}

function OverlayCopy({ subheading, heading }: { subheading: string; heading: string }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center px-6 text-center"
    >
      <p className="mb-3 text-lg font-medium tracking-[0.25em] uppercase text-[#C4A46B]">
        {subheading}
      </p>
      <p className="font-display text-5xl font-light text-[#EDE9E3] leading-[1.1] max-w-3xl md:text-7xl">
        {heading}
      </p>
    </motion.div>
  );
}

function SectionContent({ section }: { section: Section }) {
  return (
    <div className="mx-auto max-w-5xl grid grid-cols-1 gap-10 px-6 pb-28 pt-14 md:grid-cols-12">
      {/* Stat */}
      <div className="col-span-1 md:col-span-4 flex flex-col justify-center">
        <div className="glass-copper rounded-2xl p-8 text-center">
          <div className="font-display text-5xl font-light text-[#C4A46B] mb-2">{section.stat}</div>
          <div className="text-lg text-[#9AABB8] leading-[1.6]">{section.statLabel}</div>
        </div>
      </div>

      {/* Text */}
      <div className="col-span-1 md:col-span-8 flex flex-col justify-center">
        <p className="text-lg text-[#EDE9E3] leading-[1.85] mb-6 md:text-xl">
          {section.body}
        </p>
        {section.cta && (
          <a
            href="#contact"
            className="inline-flex items-center gap-2 self-start px-7 py-3.5 rounded-full bg-[#C4A46B] text-[#0C1B2E] text-lg font-semibold tracking-wide hover:bg-[#D4B47B] hover:shadow-lg hover:shadow-[#C4A46B]/25 transition-all duration-200 cursor-pointer"
          >
            {section.cta}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}

export function ParallaxScroll() {
  return (
    <section className="bg-[#0C1B2E]">
      {sections.map((s) => (
        <div
          key={s.heading}
          style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}
        >
          <div className="relative h-[150vh]">
            <StickyImage imgUrl={s.imgUrl} />
            <OverlayCopy heading={s.heading} subheading={s.subheading} />
          </div>
          <SectionContent section={s} />
        </div>
      ))}
    </section>
  );
}
