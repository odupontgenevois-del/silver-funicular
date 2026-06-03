import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for solo developers and side projects.",
    cta: "Get started",
    ctaVariant: "outline" as const,
    features: ["500 component searches/mo", "3 design systems", "5 stacks", "Community support"],
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing teams shipping fast.",
    cta: "Start free trial",
    ctaVariant: "default" as const,
    featured: true,
    features: ["Unlimited searches", "Unlimited design systems", "All 13 stacks", "AI recommendations", "Priority support", "Team sharing"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large teams with advanced needs.",
    cta: "Contact sales",
    ctaVariant: "outline" as const,
    features: ["Everything in Pro", "SSO / SAML", "Custom components", "SLA guarantee", "Dedicated CSM", "On-premise option"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-amber-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-amber-600 uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-stone-600">Start free. Upgrade when you need more.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.featured
                  ? "bg-amber-600 text-white shadow-xl shadow-amber-600/30 scale-[1.03]"
                  : "bg-white border border-stone-200 text-stone-900"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-stone-900 text-white text-xs font-semibold rounded-full">
                  Most popular
                </div>
              )}

              <div className="mb-6">
                <p className={`text-sm font-semibold mb-1 ${plan.featured ? "text-amber-200" : "text-stone-500"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className={`text-sm ${plan.featured ? "text-amber-200" : "text-stone-500"}`}>{plan.period}</span>
                  )}
                </div>
                <p className={`text-sm mt-2 ${plan.featured ? "text-amber-100" : "text-stone-600"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <Check className={`h-4 w-4 flex-shrink-0 ${plan.featured ? "text-amber-200" : "text-amber-600"}`} />
                    <span className={plan.featured ? "text-amber-50" : "text-stone-700"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "outline" : plan.ctaVariant}
                className={plan.featured ? "border-white text-white hover:bg-white/10 w-full" : "w-full"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
