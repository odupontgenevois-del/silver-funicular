import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-xs">
            <a href="#" className="flex items-center gap-2 font-bold text-white text-lg mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-600">
                <Zap className="h-4 w-4 text-white" />
              </div>
              Lumina
            </a>
            <p className="text-stone-400 text-sm leading-relaxed">
              AI-powered design intelligence for modern product teams.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            {[
              { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
              { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
            ].map((col) => (
              <div key={col.title}>
                <p className="font-semibold text-stone-300 mb-3">{col.title}</p>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-stone-500 hover:text-stone-300 transition-colors cursor-pointer">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-800 text-center text-stone-600 text-sm">
          © {new Date().getFullYear()} Lumina. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
