export function Footer() {
  return (
    <footer className="bg-[#0F3D6A] px-5 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="font-display text-sm text-[#EFE6D4]">
        Artémis RH <em className="text-[#B89968] not-italic">Consulting</em>
        <span className="text-[#7A8FA6] font-sans font-light text-xs ml-2">· Agnès Genevois</span>
      </div>
      <div className="flex gap-6">
        {["Mentions légales", "LinkedIn", "Contact"].map((l) => (
          <a key={l} href="#" className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#7A8FA6] hover:text-[#B89968] transition-colors cursor-pointer">
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}
