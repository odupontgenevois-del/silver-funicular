import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-amber-50">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-300 bg-amber-100 text-amber-800 text-sm font-medium mb-8">
          <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
          Trusted by 10,000+ teams worldwide
        </div>

        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-900 leading-[1.1] tracking-tight mb-6">
          Build faster with{" "}
          <span className="text-amber-600">design intelligence</span>
        </h1>

        <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Lumina gives your team AI-powered design systems, component libraries, and UX guidelines —
          so you ship beautiful products in days, not months.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" className="w-full sm:w-auto">
            Start for free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            See demo
          </Button>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-stone-500">
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Free 14-day trial
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Cancel anytime
          </span>
        </div>

        {/* Dashboard preview */}
        <div className="mt-20 relative">
          <div className="relative mx-auto max-w-4xl rounded-2xl border border-stone-200 shadow-2xl shadow-stone-900/10 overflow-hidden bg-white">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-stone-100 bg-stone-50">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <div className="mx-auto text-xs text-stone-400 font-mono">app.lumina.dev/dashboard</div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-6 bg-stone-50">
              {[
                { label: "Components", value: "2,847", change: "+12%" },
                { label: "Design Systems", value: "143", change: "+5%" },
                { label: "Active Users", value: "10.2k", change: "+24%" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-white border border-stone-200 p-4 text-left shadow-sm">
                  <p className="text-xs text-stone-500 font-medium mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-stone-900">{stat.value}</p>
                  <p className="text-xs text-green-600 font-medium mt-1">{stat.change} this month</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-3 px-6 pb-6 bg-stone-50">
              {["Hero Section", "Pricing Card", "Nav Bar", "Data Table", "Modal Dialog"].map((name, i) => (
                <div key={name} className="rounded-lg bg-white border border-stone-200 p-3 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 cursor-pointer">
                  <div className={`h-16 rounded-md mb-2 ${["bg-amber-100", "bg-blue-100", "bg-purple-100", "bg-green-100", "bg-rose-100"][i]}`} />
                  <p className="text-xs font-medium text-stone-700 truncate">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
