import { Mail, Phone, Link, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FAF7F2]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-[#E8622A] text-sm font-semibold uppercase tracking-widest mb-6">Contact</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#1A3D2B] mb-6 leading-tight">
              Prêt à devenir l'évidence pour vos prospects ?
            </h2>
            <p className="text-[#6B6560] leading-relaxed mb-10">
              Je travaille avec un nombre limité de clients pour garantir un accompagnement de qualité. Il reste{" "}
              <strong className="text-[#E8622A]">2 places disponibles en juin</strong>. Réservez votre créneau de découverte.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, label: "+33 6 33 09 47 26", href: "tel:+33633094726" },
                { icon: Mail, label: "odupontgenevois@gmail.com", href: "mailto:odupontgenevois@gmail.com" },
                { icon: Link, label: "linkedin.com/in/olivier-dupont", href: "https://www.linkedin.com/in/olivier-dupontvid%C3%A9o-personnelle" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[#E8E2D9] bg-white hover:border-[#1A3D2B] transition-colors duration-200 cursor-pointer group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1A3D2B]/8 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#1A3D2B]" />
                  </div>
                  <span className="text-[#2C2C2C] group-hover:text-[#1A3D2B] font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Tally form embed */}
          <div className="rounded-2xl border border-[#E8E2D9] bg-white p-8">
            <h3 className="font-semibold text-[#1A3D2B] text-xl mb-2">Réservez votre appel découverte</h3>
            <p className="text-sm text-[#6B6560] mb-8">Gratuit · 30 minutes · Sans engagement</p>

            <div className="space-y-5">
              {[
                { label: "Prénom & Nom", type: "text", placeholder: "Marc Dupont" },
                { label: "Email professionnel", type: "email", placeholder: "marc@exemple.com" },
                { label: "Votre activité en une phrase", type: "text", placeholder: "Coach en leadership pour dirigeants" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-[#2C2C2C] mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E2D9] bg-[#FAF7F2] text-[#2C2C2C] placeholder:text-[#6B6560]/50 focus:outline-none focus:border-[#1A3D2B] focus:ring-1 focus:ring-[#1A3D2B] transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-[#2C2C2C] mb-1.5">Votre situation actuelle sur LinkedIn</label>
                <textarea
                  rows={3}
                  placeholder="Je poste parfois mais sans stratégie claire..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E2D9] bg-[#FAF7F2] text-[#2C2C2C] placeholder:text-[#6B6560]/50 focus:outline-none focus:border-[#1A3D2B] focus:ring-1 focus:ring-[#1A3D2B] transition-colors resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#E8622A] text-white font-semibold hover:bg-[#C94E1A] transition-all duration-200 hover:shadow-lg hover:shadow-[#E8622A]/25 cursor-pointer"
              >
                Envoyer ma demande
                <ArrowRight className="h-5 w-5" />
              </button>

              <p className="text-xs text-center text-[#6B6560]">
                Ou accédez directement à l'agenda :{" "}
                <a href="https://tally.so/r/3jR1eR" target="_blank" rel="noopener noreferrer" className="text-[#E8622A] hover:underline">
                  tally.so/r/3jR1eR
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
