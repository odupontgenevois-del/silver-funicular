import { Palette, Zap, Shield, BarChart3, Layers, Globe } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "AI Design Systems",
    description: "Generate complete design systems with color palettes, typography, and spacing — tailored to your brand and product type.",
    size: "col-span-2 row-span-2",
    accent: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-100 text-amber-700",
  },
  {
    icon: Zap,
    title: "Instant Components",
    description: "Browse 2,800+ production-ready components for React, Vue, Next.js, and more.",
    size: "col-span-1",
    accent: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100 text-blue-700",
  },
  {
    icon: Shield,
    title: "WCAG AA Compliance",
    description: "Every component ships with accessibility baked in.",
    size: "col-span-1",
    accent: "bg-green-50 border-green-200",
    iconBg: "bg-green-100 text-green-700",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Track component usage, design token adoption, and team velocity across projects.",
    size: "col-span-1",
    accent: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100 text-purple-700",
  },
  {
    icon: Layers,
    title: "Multi-Stack Support",
    description: "React, Next.js, Vue, Svelte, Flutter, SwiftUI — one source of truth for all your stacks.",
    size: "col-span-1",
    accent: "bg-rose-50 border-rose-200",
    iconBg: "bg-rose-100 text-rose-700",
  },
  {
    icon: Globe,
    title: "Team Collaboration",
    description: "Shared component libraries, design tokens, and style guides — always in sync across your entire team.",
    size: "col-span-2",
    accent: "bg-stone-50 border-stone-200",
    iconBg: "bg-stone-100 text-stone-700",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-amber-600 uppercase tracking-widest mb-3">Features</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
            Everything your team needs
          </h2>
          <p className="text-lg text-stone-600 max-w-xl mx-auto">
            A complete design intelligence platform that scales from solo projects to enterprise teams.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`${f.size} ${f.accent} rounded-2xl border p-6 flex flex-col justify-between hover:shadow-lg hover:scale-[1.01] transition-all duration-200 cursor-default`}
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${f.iconBg}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1.5">{f.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
