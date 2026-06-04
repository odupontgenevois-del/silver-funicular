export function Footer() {
  return (
    <footer className="border-t border-white/7 py-8 px-5">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="font-display text-base text-[#EDE9E3]">
            Artémis RH <em className="text-[#C4A46B] not-italic">Consulting</em>
          </div>
          <div className="text-[11px] text-[#9AABB8] mt-0.5">Agnès Genevois · DRH à temps partagé</div>
        </div>
        <div className="flex gap-6">
          {[
            { label: "Mentions légales", href: "#" },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Contact", href: "#contact" },
          ].map((l) => (
            <a key={l.label} href={l.href}
              className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#9AABB8]/60 hover:text-[#C4A46B] transition-colors cursor-pointer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
