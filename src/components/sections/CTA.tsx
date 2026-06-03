import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-stone-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to ship beautiful products?
        </h2>
        <p className="text-lg text-stone-400 mb-10">
          Join 10,000+ teams using Lumina to design and build faster than ever.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold">
            Get started for free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="ghost" size="lg" className="w-full sm:w-auto text-stone-300 hover:text-white hover:bg-stone-800">
            Talk to sales
          </Button>
        </div>
        <p className="text-stone-500 text-sm mt-6">No credit card required · 14-day free trial</p>
      </div>
    </section>
  );
}
