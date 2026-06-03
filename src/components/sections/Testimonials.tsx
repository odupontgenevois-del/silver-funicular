const testimonials = [
  {
    quote: "Lumina cut our design-to-code time in half. The AI recommendations are eerily good.",
    name: "Sophie Martin",
    role: "Lead Designer at Stripe",
    avatar: "SM",
    color: "bg-blue-500",
  },
  {
    quote: "Finally, a design system tool that actually understands our tech stack. We shipped 3 products this quarter.",
    name: "James Chen",
    role: "CTO at Vercel",
    avatar: "JC",
    color: "bg-purple-500",
  },
  {
    quote: "The accessibility checks alone saved us a complete redesign. Every component passes WCAG out of the box.",
    name: "Aisha Patel",
    role: "Product Engineer at Linear",
    avatar: "AP",
    color: "bg-rose-500",
  },
];

export function Testimonials() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-amber-600 uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
            Loved by builders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-stone-200 bg-stone-50 p-8 flex flex-col gap-6 hover:shadow-lg hover:border-stone-300 transition-all duration-200"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-amber-500 fill-amber-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone-700 leading-relaxed flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">{t.name}</p>
                  <p className="text-stone-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
